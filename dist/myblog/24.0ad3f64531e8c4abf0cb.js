(self.webpackChunkmyblogFE=self.webpackChunkmyblogFE||[]).push([[24],{3024:(t,i,e)=>{"use strict";e.r(i),e.d(i,{SingleArticleModule:()=>b});var l=e(1116),n=e(1522),r=e(1133),o=e(1462),a=e(8619),c=e(7171),s=e(9624),m=e(2609),g=e(7275),h=e(3817);function d(t,i){if(1&t&&(a.TgZ(0,"li"),a.TgZ(1,"a"),a._uU(2),a.qZA(),a.qZA()),2&t){const t=i.$implicit;a.xp6(2),a.Oqu(t)}}function u(t,i){if(1&t&&(a.TgZ(0,"div",33),a.TgZ(1,"div",34),a._UZ(2,"img",35),a.qZA(),a.TgZ(3,"div",36),a.TgZ(4,"h5"),a.TgZ(5,"b"),a._uU(6),a.qZA(),a.TgZ(7,"span",37),a._uU(8),a.ALo(9,"date"),a.qZA(),a.qZA(),a.TgZ(10,"span"),a._uU(11),a.qZA(),a.qZA(),a.qZA()),2&t){const t=i.$implicit;a.xp6(6),a.hij("",(null==t?null:t.clientName)||"Kh\xe1ch \u1ea9n danh"," "),a.xp6(2),a.hij(" \u0111\xe3 th\xeam m\u1ed9t b\xecnh lu\u1eadn v\xe0o ",a.xi3(9,3,t.createDate,"dd-MM-yyyy"),""),a.xp6(3),a.Oqu(t.comment)}}function p(t,i){if(1&t){const t=a.EpF();a.TgZ(0,"a",38),a.NdJ("click",function(){const i=a.CHM(t).$implicit;return a.oxw().onViewOtherArticle(i.url)}),a.TgZ(1,"div",39),a._UZ(2,"img",40),a.qZA(),a.TgZ(3,"div",41),a.TgZ(4,"h5",42),a.TgZ(5,"b"),a._uU(6),a.qZA(),a.qZA(),a.TgZ(7,"h6",43),a._uU(8,"T\xe1c gi\u1ea3 "),a.TgZ(9,"span"),a.TgZ(10,"b"),a._uU(11,"Thu\u1ef3 D\u01b0\u01a1ng,"),a.qZA(),a.qZA(),a._uU(12),a.ALo(13,"date"),a.qZA(),a.qZA(),a.qZA()}if(2&t){const t=i.$implicit;a.xp6(2),a.s9C("src",t.imgInstead,a.LSH),a.xp6(4),a.Oqu(t.title),a.xp6(6),a.hij(" ",a.xi3(13,3,t.createDate,"dd-MM-yy"),"")}}const Z=[{path:"",children:[{path:":urlArticle",component:(()=>{class t{constructor(t,i,e,l,n,r){this.route=t,this.commonService=i,this.fb=e,this.router=l,this.pageTitle=n,this.meta=r,this.listTags=[],this.listComments=[],this.formComment=new o.cw({}),this.showModal=!1,this.loading=!0,this.initFormComment()}ngOnInit(){this.route.paramMap.subscribe(t=>{this.getArticleByUrl(t.get("urlArticle")||""),this.getListArticlesHeightView()})}initFormComment(){this.formComment=this.fb.group({clientName:["",[o.kI.maxLength(100)]],comment:["",[o.kI.required,o.kI.maxLength(1e3)]]})}getArticleByUrl(t){this.commonService.callApi({method:r.n.GET,url:"v1/article/query-url/"+t,progress:!0,success:t=>{t||this.router.navigate(["/error"]),this.loading=!1,this.article=t,this.pageTitle.setTitle(t.title),this.meta.addTag({property:"og:title",content:t.title}),this.meta.addTag({property:"og:description",content:t.title}),this.meta.addTag({property:"og:type",content:t.nameCategory}),this.meta.addTag({property:"og:url",content:"https://giaitrivn247.com/"+t.url}),this.meta.addTag({property:"og:image",content:t.imgInstead}),this.listTags=t.tag.split(","),this.getListCommentsByIdArticle(),this.updateViewArticle()},error:t=>{this.loading=!1,this.router.navigate(["/error"])}})}getListCommentsByIdArticle(){var t;this.commonService.callApi({method:r.n.GET,url:"v1/comments/"+(null===(t=this.article)||void 0===t?void 0:t.id),success:t=>{this.listComments=t},error:t=>{}})}getListArticlesHeightView(){this.commonService.callApi({method:r.n.GET,url:"v1/articles/height-view",progress:!0,success:t=>{this.listArticlesHeightView=t},error:t=>{this.showModal=!0}})}saveComment(){var t,i,e;if(this.formComment.invalid)return;this.loading=!0;const l={idArticle:null===(t=this.article)||void 0===t?void 0:t.id,clientName:null===(i=this.formComment.get("clientName"))||void 0===i?void 0:i.value,comment:null===(e=this.formComment.get("comment"))||void 0===e?void 0:e.value,createDate:new Date};this.commonService.callApi({method:r.n.POST,url:"v1/comment",data:l,success:t=>{this.loading=!1,this.listComments.splice(0,0,t),this.updateCommentArticle()}})}updateCommentArticle(){if(!this.article)return;const t=Object.assign(Object.assign({},this.article),{comment:this.article.comment+=1});this.commonService.callApi({method:r.n.POST,url:"v1/article",data:t})}updateViewArticle(){if(!this.article)return;const t=Object.assign(Object.assign({},this.article),{view:this.article.view+=Math.floor(2*Math.random())+1});this.commonService.callApi({method:r.n.POST,url:"v1/article",data:t})}onViewOtherArticle(t){this.router.navigate(["/article/"+t]),window.scroll(0,0)}}return t.\u0275fac=function(i){return new(i||t)(a.Y36(n.gz),a.Y36(c.v),a.Y36(o.qu),a.Y36(n.F0),a.Y36(s.Dx),a.Y36(s.h_))},t.\u0275cmp=a.Xpm({type:t,selectors:[["app-single-article"]],decls:64,vars:14,consts:[[1,"container"],[1,"row","df-align-item-center"],[1,"col-md-12","col-lg-8"],[3,"src"],[1,"mt-30"],[1,"list-li-mr-20","mtb-15"],[1,"color-primary"],[1,"color-primary","mr-5","font-12","ion-ios-bolt"],[1,"color-primary","mr-5","font-12","ion-chatbubbles"],[3,"innerHTML"],[1,"float-left-right","text-center","mt-40","mt-sm-20"],[1,"mb-30","list-li-mt-10","list-li-mr-5","list-a-plr-15","list-a-ptb-7","list-a-bg-grey","list-a-br-2","list-a-hvr-primary"],[4,"ngFor","ngForOf"],[1,"mb-30","list-a-bg-grey","list-a-hw-radial-35","list-a-hvr-primary","list-li-ml-5"],[1,"mr-10","ml-0"],["href","#"],[1,"ion-social-facebook"],[1,"ion-social-twitter"],[1,"ion-social-google"],[1,"ion-social-instagram"],[1,"brdr-ash-1","opacty-5"],[1,"p-title","mt-20"],["class","sided-70 mb-40",4,"ngFor","ngForOf"],[1,"form-block","form-plr-15","form-h-45","form-mb-20","form-brdr-lite-white","mb-md-50",3,"formGroup","ngSubmit"],["formControlName","clientName","placeholder","T\xean c\u1ee7a b\u1ea1n ...","type","text"],["formControlName","comment","placeholder","B\xecnh lu\u1eadn c\u1ee7a b\u1ea1n ...",1,"ptb-10"],["cols","50","rows","4","type","submit",1,"btn-submit-comment","btn-fill-primary","plr-30"],[1,"d-none","d-md-block","d-lg-none","col-md-3"],[1,"col-md-6","col-lg-4"],[1,"pl-20","pl-md-0"],[1,"p-title"],["class","article-container oflow-hidden pos-relative mb-20 dplay-block",3,"click",4,"ngFor","ngForOf"],[3,"loading"],[1,"sided-70","mb-40"],[1,"s-left","rounded"],["alt","","src","assets/images/avt_default.jpg"],[1,"s-right","ml-100","ml-xs-85"],[1,"font-8","color-ash"],[1,"article-container","oflow-hidden","pos-relative","mb-20","dplay-block",3,"click"],[1,"wh-100x","abs-tlr"],["alt","",3,"src"],[1,"ml-120","min-h-100x"],[1,"article-title"],[1,"pt-10"]],template:function(t,i){1&t&&(a._UZ(0,"app-client-header"),a.TgZ(1,"section"),a.TgZ(2,"div",0),a.TgZ(3,"div",1),a.TgZ(4,"div",2),a._UZ(5,"img",3),a.TgZ(6,"h3",4),a.TgZ(7,"b"),a._uU(8),a.qZA(),a.qZA(),a.TgZ(9,"ul",5),a.TgZ(10,"li"),a._uU(11,"T\xe1c gi\u1ea3: "),a.TgZ(12,"a",6),a.TgZ(13,"b"),a._uU(14,"Thu\u1ef3 D\u01b0\u01a1ng "),a.qZA(),a.qZA(),a._uU(15),a.ALo(16,"date"),a.qZA(),a.TgZ(17,"li"),a._UZ(18,"i",7),a._uU(19),a.qZA(),a.TgZ(20,"li"),a._UZ(21,"i",8),a._uU(22),a.qZA(),a.qZA(),a.ynx(23),a._UZ(24,"div",9),a.BQk(),a.TgZ(25,"div",10),a.TgZ(26,"ul",11),a.YNc(27,d,3,1,"li",12),a.qZA(),a.TgZ(28,"ul",13),a.TgZ(29,"li",14),a._uU(30,"Share"),a.qZA(),a.TgZ(31,"li"),a.TgZ(32,"a",15),a._UZ(33,"i",16),a.qZA(),a.qZA(),a.TgZ(34,"li"),a.TgZ(35,"a",15),a._UZ(36,"i",17),a.qZA(),a.qZA(),a.TgZ(37,"li"),a.TgZ(38,"a",15),a._UZ(39,"i",18),a.qZA(),a.qZA(),a.TgZ(40,"li"),a.TgZ(41,"a",15),a._UZ(42,"i",19),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a._UZ(43,"div",20),a.TgZ(44,"h4",21),a.TgZ(45,"b"),a._uU(46,"H\xe3y \u0111\u1ec3 l\u1ea1i b\xecnh lu\u1eadn c\u1ee7a b\u1ea1n v\u1ec1 b\xe0i vi\u1ebft n\xe0y nh\xe9."),a.qZA(),a.qZA(),a.YNc(47,u,12,6,"div",22),a.TgZ(48,"form",23),a.NdJ("ngSubmit",function(){return i.saveComment()}),a._UZ(49,"input",24),a._UZ(50,"textarea",25),a.TgZ(51,"button",26),a.TgZ(52,"b"),a._uU(53,"\u0110\u0103ng b\xecnh lu\u1eadn c\u1ee7a b\u1ea1n"),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a._UZ(54,"div",27),a.TgZ(55,"div",28),a.TgZ(56,"div",29),a.TgZ(57,"div"),a.TgZ(58,"h4",30),a.TgZ(59,"b"),a._uU(60,"C\xf3 th\u1ec3 b\u1ea1n s\u1ebd th\xedch"),a.qZA(),a.qZA(),a.YNc(61,p,14,6,"a",31),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a._UZ(62,"app-client-footer"),a._UZ(63,"app-loading",32)),2&t&&(a.xp6(5),a.s9C("src",null==i.article?null:i.article.imgInstead,a.LSH),a.xp6(3),a.Oqu(null==i.article?null:i.article.title),a.xp6(7),a.hij(". Ng\xe0y vi\u1ebft b\xe0i: ",a.xi3(16,11,null==i.article?null:i.article.createDate,"dd-MM-yyyy"),""),a.xp6(4),a.Oqu(null==i.article?null:i.article.view),a.xp6(3),a.Oqu(null==i.article?null:i.article.comment),a.xp6(2),a.Q6J("innerHTML",null==i.article?null:i.article.body,a.oJD),a.xp6(3),a.Q6J("ngForOf",i.listTags),a.xp6(20),a.Q6J("ngForOf",i.listComments),a.xp6(1),a.Q6J("formGroup",i.formComment),a.xp6(13),a.Q6J("ngForOf",i.listArticlesHeightView),a.xp6(2),a.Q6J("loading",i.loading))},directives:[m.x,l.sg,o._Y,o.JL,o.sg,o.Fj,o.JJ,o.u,g.j,h.N],pipes:[l.uU],styles:[".btn-submit-comment[_ngcontent-%COMP%]{margin-bottom:2rem}.s-right[_ngcontent-%COMP%]{background-color:#efefef;padding:10px;border-radius:10px}.df-align-item-center[_ngcontent-%COMP%]{align-items:flex-start}.article-title[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}.article-container[_ngcontent-%COMP%]:hover{color:#f9b500!important}.a-ads-container[_ngcontent-%COMP%]{height:250px;margin-top:20px;margin-bottom:45px;display:flex;justify-content:center}.ads-right[_ngcontent-%COMP%]{margin-top:unset!important}.hyper-link[_ngcontent-%COMP%]{color:#f6c23e!important}"]}),t})()}]}];let A=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({imports:[[n.Bz.forChild(Z)],n.Bz]}),t})(),b=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({imports:[[l.ez,A]]}),t})()}}]);