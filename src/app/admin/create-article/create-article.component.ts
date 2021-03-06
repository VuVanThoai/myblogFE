import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Article, Categories, MethodApi} from "../../shared/shared.constant";
import {CommonService} from "../../core/service/common.service";
import {ArticleService} from "../../core/service/article.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AdminService} from "../admin.service";

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss']
})
export class CreateArticleComponent implements OnInit {

  formInitArticle = new FormGroup({});
  categories = Categories;
  showModal = false;
  article?: Article;
  images: any[] = [];
  messageCreateArticle = 'Tạo bài viết thành công';
  elementHtmlDefault = ['<p class="mtb-15"></p>', '<a class="hyper-link" href=""></a>', '<figure><img src=""><figcaption></figcaption></figure>', '<div class="quote-primary mtb-20"><h5></h5></div>', '<h4><b></b></h4>'];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private commonService: CommonService,
    private articleService: ArticleService,
    private adminService: AdminService,
    private readonly route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.formInitArticle = this.fb.group({
      category: [{
        id: 1,
        name: 'Giải trí',
        shortUrl: 'giai-tri'
      }, [Validators.required]],
      imgInstead: ['', [Validators.required]],
      title: ['', [Validators.required]],
      body: ['', [Validators.required]],
      tag: ['', [Validators.required]],
    });
    this.route.paramMap.subscribe((value) => {
      const id = parseInt(value.get('idArticle') || '-1');
      if (id > -1) {
        this.getArticleById(id);
      }
    })
  }

  getArticleById(id: number) {
    this.commonService.callApi({
      method: MethodApi.GET,
      url: 'v1/article/' + id,
      progress: true,
      success: (data: Article) => {
        this.article = data;
        this.updateValueFormFromArticle(this.article);
      }
    })
  }

  updateValueFormFromArticle(article: Article) {
    this.formInitArticle.patchValue({
      category: this.getCategoryFromId(article.idCategory),
      title: article.title,
      url: article.url,
      imgInstead: article.imgInstead,
      body: article.body,
      tag: article.tag,
      createDate: article.createDate,
      view: article.view
    })
  }

  getCategoryFromId(id: number) {
    return this.categories.find(category => category.id === id);
  }

  onCreateArticle() {
    const requestBody = this.renderArticleData();
    this.commonService.callApi({
      url: 'v1/article',
      method: MethodApi.POST,
      data: requestBody,
      progress: true,
      success: (responseBody: any) => {
        this.showModal = true;
      },
      error: (error: any) => {
        console.log(error);
        this.messageCreateArticle = 'Tạo bài viết thất bại';
      }
    })
  }

  onReview() {
    this.articleService.setArticleInfo(this.renderArticleData());
    this.router.navigate(['/admin/create-article/review']);
  }

  renderArticleData() {
    let article = {
      idCategory: this.formInitArticle.get('category')?.value.id,
      nameCategory: this.formInitArticle.get('category')?.value.name,
      title: this.formInitArticle.get('title')?.value,
      url: this.removeVietnameseTones(this.formInitArticle.get('title')?.value),
      imgInstead: this.formInitArticle.get('imgInstead')?.value,
      body: this.formInitArticle.get('body')?.value,
      tag: this.formInitArticle.get('tag')?.value,
      createDate: new Date(),
      view: 1,
      comment: 0
    } as Article;
    if (this.article) {
      article = {...article, id: this.article.id, createDate: this.article.createDate, comment: this.article.comment, view: this.article.view};
    }
    return article;
  }

  removeVietnameseTones(str: string) {
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g,"i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y");
    str = str.replace(/đ/g,"d");
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
    str = str.replace(/Đ/g, "D");
    // Some system encode vietnamese combining accent as individual utf-8 characters
    // Một vài bộ encode coi các dấu mũ, dấu chữ như một kí tự riêng biệt nên thêm hai dòng này
    str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // ̀ ́ ̃ ̉ ̣  huyền, sắc, ngã, hỏi, nặng
    str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // ˆ ̆ ̛  Â, Ê, Ă, Ơ, Ư
    // Remove extra spaces
    // Bỏ các khoảng trắng liền nhau
    str = str.replace(/ + /g," ");
    str = str.trim();
    // Remove punctuations
    // Bỏ dấu câu, kí tự đặc biệt
    str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g," ");
    str = str.replace(/     /g, ' ');
    str = str.replace(/    /g, ' ');
    str = str.replace(/   /g, ' ');
    str = str.replace(/  /g, ' ');
    str = str.replace(/ /g, '-');
    if (str.charAt(str.length - 1) === '-') {
      str = str.substring(0, str.length - 1);
    }
    str = str.toLowerCase();
    return str;
  }

  onBackToManagement() {
    this.showModal = false;
    this.router.navigate(['/admin/article-management']);
  }

  copyToClipBoard(element: any) {
    document.execCommand('copy', element);
    console.log('-----------------')
  }
}
