import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CommonService} from "../core/service/common.service";
import {Article, Comment, MethodApi} from "../shared/shared.constant";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-single-article',
  templateUrl: './single-article.component.html',
  styleUrls: ['./single-article.component.scss']
})
export class SingleArticleComponent implements OnInit, AfterViewInit {

  article?: Article;
  listTags: string[] = [];
  listComments: Comment[] = [];
  formComment: FormGroup = new FormGroup({});
  listArticlesHeightView?: Array<Article>;
  showModal = false;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private readonly commonService: CommonService,
    private fb: FormBuilder,
    private router: Router,
    private pageTitle: Title,
    private meta: Meta
  ) {
    this.initFormComment();
  }

  ngAfterViewInit(): void {
    this.pageTitle.setTitle(this.article?.title || '');
    this.meta.updateTag({property: 'og:title', content: this.article?.title || ''} );
    this.meta.updateTag({property: 'og:description', content: this.article?.title || ''} );
    this.meta.updateTag({property: 'og:type', content: 'article'} );
    this.meta.updateTag({property: 'og:url', content: 'https://giaitrivn247.com/' + this.article?.url} );
    this.meta.updateTag({property: 'og:image', content: this.article?.imgInstead || ''} );
    }

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => {
      this.getArticleByUrl(value.get('urlArticle') || '');
      this.getListArticlesHeightView();
    })
  }

  initFormComment() {
    this.formComment = this.fb.group({
      clientName: ['', [Validators.maxLength(100)]],
      comment: ['', [Validators.required, Validators.maxLength(1000)]]
    })
  }

  getArticleByUrl(url: string) {
    this.commonService.callApi({
      method: MethodApi.GET,
      url: 'v1/article/query-url/' + url,
      progress: true,
      success: (article: Article) => {
        if (!article) {
          this.router.navigate(['/error']);
        }
        this.loading = false;
        this.article = article;
        this.listTags = article.tag.split(',');
        this.getListCommentsByIdArticle();
        this.updateViewArticle();
      },
      error: (error: any) => {
        this.loading = false;
        this.router.navigate(['/error']);
      }
    })
  }

  getListCommentsByIdArticle() {
    this.commonService.callApi({
      method: MethodApi.GET,
      url: 'v1/comments/' + this.article?.id,
      success: (data: Array<Comment>) => {
        this.listComments = data;
      },
      error: (error: any) => {
      }
    })
  }

  getListArticlesHeightView() {
    this.commonService.callApi({
      method: MethodApi.GET,
      url: 'v1/articles/height-view',
      progress: true,
      success: (data: Array<Article>) => {
        this.listArticlesHeightView = data;
      },
      error: (error: any) => {
        this.showModal = true;
      }
    })
  }

  saveComment() {
    if (this.formComment.invalid) {
      return;
    }
    this.loading = true
    const requestBody = {
      idArticle: this.article?.id,
      clientName: this.formComment.get('clientName')?.value,
      comment: this.formComment.get('comment')?.value,
      createDate: new Date()
    };
    this.commonService.callApi({
      method: MethodApi.POST,
      url: 'v1/comment',
      data: requestBody,
      success: (newComment: Comment) => {
        this.loading = false;
        this.listComments.splice(0, 0, newComment);
        this.updateCommentArticle();
      }
    })
  }

  updateCommentArticle() {
    if (!this.article) {
      return;
    }
    const requestBody = {
      ...this.article, comment: this.article.comment += 1,
    };
    this.commonService.callApi({
      method: MethodApi.POST,
      url: 'v1/article',
      data:requestBody,
    })
  }

  updateViewArticle() {
    if (!this.article) {
      return;
    }
    const requestBody = {
      ...this.article, view: this.article.view += (Math.floor(Math.random() * 2) + 1),
    };
    this.commonService.callApi({
      method: MethodApi.POST,
      url: 'v1/article',
      data:requestBody,
    })
  }

  onViewOtherArticle(url: string) {
    this.router.navigate(['/article/' + url]);
    window.scroll(0, 0);
  }
}
