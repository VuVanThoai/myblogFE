(self.webpackChunkmyblogFE=self.webpackChunkmyblogFE||[]).push([[592],{7171:(t,e,n)=>{"use strict";n.d(e,{v:()=>Z});var i=n(8619),o=n(2693),s=n(7570);class c extends s.w{constructor(t,e){super()}schedule(t,e=0){return this}}class r extends c{constructor(t,e){super(t,e),this.scheduler=t,this.work=e,this.pending=!1}schedule(t,e=0){if(this.closed)return this;this.state=t;const n=this.id,i=this.scheduler;return null!=n&&(this.id=this.recycleAsyncId(i,n,e)),this.pending=!0,this.delay=e,this.id=this.id||this.requestAsyncId(i,this.id,e),this}requestAsyncId(t,e,n=0){return setInterval(t.flush.bind(t,this),n)}recycleAsyncId(t,e,n=0){if(null!==n&&this.delay===n&&!1===this.pending)return e;clearInterval(e)}execute(t,e){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const n=this._execute(t,e);if(n)return n;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(t,e){let n,i=!1;try{this.work(t)}catch(o){i=!0,n=!!o&&o||new Error(o)}if(i)return this.unsubscribe(),n}_unsubscribe(){const t=this.id,e=this.scheduler,n=e.actions,i=n.indexOf(this);this.work=null,this.state=null,this.pending=!1,this.scheduler=null,-1!==i&&n.splice(i,1),null!=t&&(this.id=this.recycleAsyncId(e,t,null)),this.delay=null}}let l=(()=>{class t{constructor(e,n=t.now){this.SchedulerAction=e,this.now=n}schedule(t,e=0,n){return new this.SchedulerAction(this,t).schedule(n,e)}}return t.now=()=>Date.now(),t})();class a extends l{constructor(t,e=l.now){super(t,()=>a.delegate&&a.delegate!==this?a.delegate.now():e()),this.actions=[],this.active=!1,this.scheduled=void 0}schedule(t,e=0,n){return a.delegate&&a.delegate!==this?a.delegate.schedule(t,e,n):super.schedule(t,e,n)}flush(t){const{actions:e}=this;if(this.active)return void e.push(t);let n;this.active=!0;do{if(n=t.execute(t.state,t.delay))break}while(t=e.shift());if(this.active=!1,n){for(;t=e.shift();)t.unsubscribe();throw n}}}const d=new a(r),h=(()=>{function t(){return Error.call(this),this.message="Timeout has occurred",this.name="TimeoutError",this}return t.prototype=Object.create(Error.prototype),t})();var u=n(6882);class g{constructor(t,e,n,i){this.waitFor=t,this.absoluteTimeout=e,this.withObservable=n,this.scheduler=i}call(t,e){return e.subscribe(new p(t,this.absoluteTimeout,this.waitFor,this.withObservable,this.scheduler))}}class p extends u.Ds{constructor(t,e,n,i,o){super(t),this.absoluteTimeout=e,this.waitFor=n,this.withObservable=i,this.scheduler=o,this.scheduleTimeout()}static dispatchTimeout(t){const{withObservable:e}=t;t._unsubscribeAndRecycle(),t.add((0,u.ft)(e,new u.IY(t)))}scheduleTimeout(){const{action:t}=this;t?this.action=t.schedule(this,this.waitFor):this.add(this.action=this.scheduler.schedule(p.dispatchTimeout,this.waitFor,this))}_next(t){this.absoluteTimeout||this.scheduleTimeout(),super._next(t)}_unsubscribe(){this.action=void 0,this.scheduler=null,this.withObservable=null}}var m=n(8318);var b=function(t){return t.DOMAIN_API="http://localhost:80/api/",t}({});let Z=(()=>{class t{constructor(t){this.http=t,this.progressEvent=new i.vpe,this.constants=b}callApi(t){const e=t.method;let n="http://localhost:8443/api/"+t.url,i="http://localhost:4200";"localhost"!==location.hostname&&(n="https://"+location.hostname+":8443/api/"+t.url,i="https://giaitrivn247.com");const o=t.data,s=t.contentType?t.contentType:"application/json";let c,r=t.progress;void 0===r&&(r=!0),r&&this.progressEvent.emit(!0);const l={headers:this.buildHttpHeaders(s,i)};c="GET"===e?this.http.get(n,l):"POST"===e?this.http.post(n,JSON.stringify(o),l):"PUT"===e?this.http.put(n,JSON.stringify(o),l):this.http.delete(n,l);let a=90;t.timeoutSeconds&&(a=t.timeoutSeconds),c.pipe(function(t,e=d){return function(t,e,n=d){return i=>{let o=(s=t)instanceof Date&&!isNaN(+s);var s;let c=o?+t-n.now():Math.abs(t);return i.lift(new g(c,o,e,n))}}(t,(n=new h,new m.y(t=>t.error(n))),e);var n}(1e3*a)).subscribe(e=>{"function"==typeof t.success&&(r&&this.progressEvent.emit(!1),t.success(e))},t=>{r&&this.progressEvent.emit(!1),"504"!==t.status&&"TimeoutError"!==t.name||(t.error={errorMessage:{errorCode:"ERROR_CODE",messages:{vn:"mat ket noi",en:"connect timeout"}}})})}buildHttpHeaders(t,e){return new o.WM({"Content-Type":t,Authorization:"Bearer "+localStorage.getItem("token"),"Access-Control-Allow-Origin":e,"Access-Control-Allow-Credentials":"true","Access-Control-Allow-Methods":"POST, GET, OPTIONS, DELETE, PUT","Access-Control-Max-Age":"3600","Access-Control-Allow-Headers":"Content-Type, Accept, X-Requested-With, remember-me"})}}return t.\u0275fac=function(e){return new(e||t)(i.LFG(o.eN))},t.\u0275prov=i.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},7275:(t,e,n)=>{"use strict";n.d(e,{j:()=>o});var i=n(8619);let o=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Xpm({type:t,selectors:[["app-client-footer"]],decls:59,vars:0,consts:[[1,"bg-191","color-ccc"],[1,"container"],[1,"pt-50","pb-20","pos-relative"],[1,"abs-tblr","pt-50","z--1","text-center"],[1,"h-80","pos-relative"],["src","assets/images/map.png","alt","",1,"opacty-1","h-100","w-auto"],[1,"row"],[1,"col-sm-8"],[1,"mb-30"],[1,"mtb-20","color-ccc"],[1,"col-sm-4"],[1,"color-primary","mb-20"],[1,"line","brdr-ash-1","opacty-2","mr-30"],[1,"mb-20"],[1,"color-white"],[1,"brdr-ash-1","opacty-2"],[1,"oflow-hidden","color-ash","font-9","text-sm-center","ptb-sm-5"],[1,"float-left","float-sm-none","list-a-plr-10","list-a-plr-sm-5","list-a-ptb-15","list-a-ptb-sm-10"],["href","#",1,"pl-0","pl-sm-10"],["href","#"],[1,"float-right","float-sm-none","list-a-plr-10","list-a-plr-sm-5","list-a-ptb-15","list-a-ptb-sm-5"],[1,"ion-social-facebook"],[1,"ion-social-twitter"],[1,"ion-social-google"],[1,"ion-social-instagram"],[1,"ion-social-bitcoin"]],template:function(t,e){1&t&&(i.TgZ(0,"footer",0),i.TgZ(1,"div",1),i.TgZ(2,"div",2),i.TgZ(3,"div",3),i.TgZ(4,"div",4),i._UZ(5,"img",5),i.qZA(),i.qZA(),i.TgZ(6,"div",6),i.TgZ(7,"div",7),i.TgZ(8,"div",8),i.TgZ(9,"p",9),i._uU(10,"Xin ch\xe0o c\xe1c b\u1ea1n, m\xecnh l\xe0 Thu\u1ef3 D\u01b0\u01a1ng, l\xe0 m\u1ed9t l\u1eadp tr\xecnh vi\xean ki\xeam blogger, m\xecnh c\u0169ng ch\xednh l\xe0 t\xe1c gi\u1ea3 c\u1ee7a website n\xe0y v\u1edbi m\u1ee5c \u0111\xedch mang l\u1ea1i nh\u1eefng th\xf4ng tin t\u1eeb gi\u1ea3i tr\xed \u0111\u1ebfn ki\u1ebfn th\u1ee9c khoa h\u1ecdc cho t\u1ea5t c\u1ea3 m\u1ecdi ng\u01b0\u1eddi \u1edf t\u1ea5t c\u1ea3 c\xe1c l\u1ee9a tu\u1ed5i. M\xecnh r\u1ea5t mong nh\u1eadn \u0111\u01b0\u1ee3c s\u1ef1 \u1ee7ng h\u1ed9 c\u1ee7a m\u1ecdi ng\u01b0\u1eddi, c\u1ea3m \u01a1n m\u1ecdi ng\u01b0\u1eddi nha !!!"),i.qZA(),i.qZA(),i.qZA(),i.TgZ(11,"div",10),i.TgZ(12,"div",8),i.TgZ(13,"h5",11),i.TgZ(14,"b"),i._uU(15,"Gi\u1ea3i tr\xed VN 247 .com"),i.qZA(),i.qZA(),i._UZ(16,"div",12),i.TgZ(17,"div",13),i.TgZ(18,"a",14),i.TgZ(19,"b"),i._uU(20,"T\xe1c gi\u1ea3: Thu\u1ef3 D\u01b0\u01a1ng"),i.qZA(),i.qZA(),i.TgZ(21,"a",14),i.TgZ(22,"b"),i._uU(23,"Email: zzaazzbadao@gmail.com"),i.qZA(),i.qZA(),i._UZ(24,"div",12),i.TgZ(25,"a",14),i.TgZ(26,"b"),i._uU(27,"Design \u0111\u01b0\u1ee3c tham kh\u1ea3o b\u1edfi NewsBit, xin ch\xe2n th\xe0nh c\u1ea3m \u01a1n !!!"),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i._UZ(28,"div",15),i.TgZ(29,"div",16),i.TgZ(30,"ul",17),i.TgZ(31,"li"),i.TgZ(32,"a",18),i._uU(33,"Terms & Conditions"),i.qZA(),i.qZA(),i.TgZ(34,"li"),i.TgZ(35,"a",19),i._uU(36,"Privacy policy"),i.qZA(),i.qZA(),i.TgZ(37,"li"),i.TgZ(38,"a",19),i._uU(39,"Jobs advertising"),i.qZA(),i.qZA(),i.TgZ(40,"li"),i.TgZ(41,"a",19),i._uU(42,"Contact us"),i.qZA(),i.qZA(),i.qZA(),i.TgZ(43,"ul",20),i.TgZ(44,"li"),i.TgZ(45,"a",18),i._UZ(46,"i",21),i.qZA(),i.qZA(),i.TgZ(47,"li"),i.TgZ(48,"a",19),i._UZ(49,"i",22),i.qZA(),i.qZA(),i.TgZ(50,"li"),i.TgZ(51,"a",19),i._UZ(52,"i",23),i.qZA(),i.qZA(),i.TgZ(53,"li"),i.TgZ(54,"a",19),i._UZ(55,"i",24),i.qZA(),i.qZA(),i.TgZ(56,"li"),i.TgZ(57,"a",19),i._UZ(58,"i",25),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.qZA())},styles:[".line[_ngcontent-%COMP%]{margin-top:1rem;margin-bottom:1rem}"]}),t})()},358:(t,e,n)=>{"use strict";n.d(e,{z:()=>c});var i=n(8619),o=n(1116);function s(t,e){if(1&t&&(i.TgZ(0,"div",4),i._uU(1),i.qZA()),2&t){const t=i.oxw();i.xp6(1),i.Oqu(t.description)}}let c=(()=>{class t{constructor(){this.onClickContinuous=new i.vpe,this.onClickCancel=new i.vpe}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Xpm({type:t,selectors:[["app-modal"]],inputs:{title:"title",description:"description"},outputs:{onClickContinuous:"onClickContinuous",onClickCancel:"onClickCancel"},decls:12,vars:2,consts:[[1,"modal"],[1,"modal-content-wrapper"],[1,"modal-body"],[1,"content"],[1,"body"],["class","body",4,"ngIf"],[1,"btn-action"],["type","button",1,"btn","btn-primary",3,"click"],["type","button",1,"btn","btn-success",3,"click"]],template:function(t,e){1&t&&(i.TgZ(0,"div",0),i.TgZ(1,"div",1),i.TgZ(2,"div",2),i.TgZ(3,"div",3),i.TgZ(4,"div",4),i._uU(5),i.qZA(),i.YNc(6,s,2,1,"div",5),i.TgZ(7,"div",6),i.TgZ(8,"button",7),i.NdJ("click",function(){return e.onClickCancel.emit()}),i._uU(9,"Hu\u1ef7"),i.qZA(),i.TgZ(10,"button",8),i.NdJ("click",function(){return e.onClickContinuous.emit()}),i._uU(11,"Ti\u1ebfp t\u1ee5c"),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.qZA()),2&t&&(i.xp6(5),i.Oqu(e.title),i.xp6(1),i.Q6J("ngIf",e.description))},directives:[o.O5],styles:[".loadding[_ngcontent-%COMP%]{width:100%;height:100%;position:absolute;top:0;left:0;opacity:.5;display:flex;justify-content:center;align-items:center;background-color:#6e707e}.loadding[_ngcontent-%COMP%]   .modal-container[_ngcontent-%COMP%]{width:30%;height:250px;background-color:#fff;display:flex;flex-direction:column;justify-content:center;padding:20px 25px;border-radius:5px}.loadding[_ngcontent-%COMP%]   .modal-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:700;text-align:center;margin-bottom:24px;color:#42236a}.loadding[_ngcontent-%COMP%]   .modal-container[_ngcontent-%COMP%]   .btn-action[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.loadding[_ngcontent-%COMP%]   .modal-container[_ngcontent-%COMP%]   .btn-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:45%;background-image:linear-gradient(180deg,#7b35bb,#5d2e86)!important;color:#ff9800!important;border:none;outline:none}.modal[_ngcontent-%COMP%]{position:fixed;z-index:20000;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;background-color:#000000bf;padding:30px}.modal[_ngcontent-%COMP%] > .modal-content-wrapper[_ngcontent-%COMP%]{height:200px;max-height:100vh;overflow-y:auto;background-color:#fff;border-radius:5px;max-width:500px;width:100%;display:flex;align-items:center}.modal[_ngcontent-%COMP%] > .modal-content-wrapper[_ngcontent-%COMP%] > .modal-body[_ngcontent-%COMP%]{padding:30px;overflow-y:auto}.modal[_ngcontent-%COMP%] > .modal-content-wrapper[_ngcontent-%COMP%] > .modal-body[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]{font-size:16px;font-weight:500;line-height:1.4;color:#42236a;margin-bottom:2rem;text-align:center}.modal[_ngcontent-%COMP%] > .modal-content-wrapper[_ngcontent-%COMP%] > .modal-body[_ngcontent-%COMP%]   .btn-action[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.modal[_ngcontent-%COMP%] > .modal-content-wrapper[_ngcontent-%COMP%] > .modal-body[_ngcontent-%COMP%]   .btn-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:45%;background-image:linear-gradient(180deg,#7b35bb,#5d2e86)!important;color:#ff9800!important;border:none;outline:none;height:40px}.modal[_ngcontent-%COMP%] > .modal-content-wrapper[_ngcontent-%COMP%] > .modal-body[_ngcontent-%COMP%]   .btn-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus{box-shadow:unset}.modal[_ngcontent-%COMP%] > .modal-content-wrapper[_ngcontent-%COMP%] > .modal-body[_ngcontent-%COMP%]   .btn-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-image:linear-gradient(180deg,#622a95,#4b256c)!important;color:#ff9800!important}"]}),t})()}}]);