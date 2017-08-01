webpackJsonp([1],{670:function(t,e,i){function r(t){i(734)}var a=i(356)(i(690),i(750),r,null,null);t.exports=a.exports},690:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i(135),a=i.n(r),n=i(134),s=i.n(n),o=i(709),l=i.n(o),c=i(708),u=i.n(c),d=i(751),p=i.n(d),f=new p.a;e.default={name:"article",inject:["auth"],props:["id"],metaInfo:function(){return{title:this.article?this.article.title:"DevWebTuts",meta:[{name:"og:title",content:this.article?this.article.title:"DevWebTuts"},{name:"og:image",content:this.article?this.article.image:""},{name:"og:description",content:"Read and Create your own tutorials to help other web developers."},{name:"og:url",content:document.location.href},{name:"og:site_name",content:"DevWebTuts"},{name:"og:type",content:"website"}]}},data:function(){return{loading:0,edit:!1,result:"",article:{id:0,title:"",body:"",image:""},oldArticle:null,deleteVerification:"",popup:null}},created:function(){f.addEventListener("message",this.workerEvent)},destroyed:function(){f.removeEventListener("message",this.workerEvent)},watch:u()({},"article.body",function(t){this.edit||(this.loading=1),f.postMessage(t)}),methods:{workerEvent:function(t){var e=t.data;this.loading=0,this.result=e},editArticle:function(){this.oldArticle=l()({},this.article),this.edit=!0},undoEdit:function(){this.edit=!1},shareArticle:function(){var t={url:encodeURIComponent(document.location.href),title:encodeURIComponent(this.article.title),image:encodeURIComponent(this.article.image)};this.popup=window.open("https://www.facebook.com/sharer/sharer.php?display=popup&u="+t.url+"&title="+t.title+"&picture="+t.image),this.popup.focus()},deleteArticle:function(){function t(){return e.apply(this,arguments)}var e=s()(a.a.mark(function t(){var e,i,r;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,this.deleteVerification===this.article.title){t.next=3;break}return t.abrupt("return");case 3:return e=this.article.id,t.next=6,this.$apollo.mutate({mutation:this.$gql.mutations.deleteArticle,variables:{id:e}});case 6:i=t.sent,r=i.data,this.deleteVerification="",this.$router.push({name:"current_user"}),t.next=14;break;case 12:t.prev=12,t.t0=t.catch(0);case 14:case"end":return t.stop()}},t,this,[[0,12]])}));return t}(),updateArticle:function(){function t(t,i){return e.apply(this,arguments)}var e=s()(a.a.mark(function t(e,i){var r,n,s,o,l,c,u,d;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r=this.article,n=r.id,s=r.body,o=r.title,l=r.image,c=r.user,t.next=4,this.$apollo.mutate({mutation:this.$gql.mutations.updateArticle,variables:{id:n,body:s,title:o,image:l}});case 4:u=t.sent,d=u.data,this.edit=!1,this.$q.events.$emit("app:showToast","Article Saved Successfully","positive"),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),this.$q.events.$emit("app:showToast","Error Saving Article","negative");case 13:return t.prev=13,i(),t.finish(13);case 16:case"end":return t.stop()}},t,this,[[0,10,13,16]])}));return t}()},computed:{canEdit:function(){return this.auth.currentUser&&this.article.user&&this.article.user.id===this.auth.currentUser.id}},apollo:{article:function(){return{query:this.$gql.queries.article,variables:function(){return{id:this.id||0}},pollInterval:1e3,loadingKey:"loading",result:function(t){var e=t.data.article;e&&(this.article=l()({},e)),this.edit="edit"===this.$route.query.action&&this.canEdit}}}}}},706:function(t,e,i){t.exports={default:i(727),__esModule:!0}},707:function(t,e,i){t.exports={default:i(728),__esModule:!0}},708:function(t,e,i){"use strict";e.__esModule=!0;var r=i(707),a=function(t){return t&&t.__esModule?t:{default:t}}(r);e.default=function(t,e,i){return e in t?(0,a.default)(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}},709:function(t,e,i){"use strict";e.__esModule=!0;var r=i(706),a=function(t){return t&&t.__esModule?t:{default:t}}(r);e.default=a.default||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r])}return t}},727:function(t,e,i){i(732),t.exports=i(34).Object.assign},728:function(t,e,i){var r=i(30);t.exports=function(t,e,i){return r.setDesc(t,e,i)}},729:function(t,e,i){var r=i(30),a=i(360),n=i(359);t.exports=i(137)(function(){var t=Object.assign,e={},i={},r=Symbol(),a="abcdefghijklmnopqrst";return e[r]=7,a.split("").forEach(function(t){i[t]=t}),7!=t({},e)[r]||Object.keys(t({},i)).join("")!=a})?function(t,e){for(var i=a(t),s=arguments,o=s.length,l=1,c=r.getKeys,u=r.getSymbols,d=r.isEnum;o>l;)for(var p,f=n(s[l++]),h=u?c(f).concat(u(f)):c(f),m=h.length,v=0;m>v;)d.call(f,p=h[v++])&&(i[p]=f[p]);return i}:Object.assign},732:function(t,e,i){var r=i(86);r(r.S+r.F,"Object",{assign:i(729)})},733:function(t,e,i){e=t.exports=i(667)(void 0),e.push([t.i,".markdown--editor+.CodeMirror{min-height:100%;height:100%!important}",""])},734:function(t,e,i){var r=i(733);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);i(684)("c78461ca",r,!0)},750:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.loading?i("div",{staticClass:"row window-height"},[i("div",{staticClass:"m-a"},[i("q-spinner-gears",{attrs:{size:200,color:"primary"}})],1)]):t.article?i("div",{staticClass:"vh-100-min"},[t.edit?[i("q-toolbar",[i("div",{staticClass:"cursor-pointer",staticStyle:{width:"100px",height:"100px","border-radius":"50%",border:"2px solid white"},style:{background:"url("+t.article.image+") center center / contain no-repeat"}},[i("q-popover",{ref:"articleImage"},[i("q-toolbar",[i("q-toolbar-title",[t._v("Article image")])],1),i("div",{staticStyle:{padding:"16px"}},[i("q-field",{attrs:{icon:"add_a_photo"}},[i("q-input",{attrs:{"float-label":"Article Image"},model:{value:t.article.image,callback:function(e){t.article.image=e},expression:"article.image"}})],1)],1)],1)],1),i("q-toolbar-title",[i("q-field",{attrs:{icon:"title",dark:"dark"}},[i("q-input",{attrs:{dark:"dark","float-label":"Title"},model:{value:t.article.title,callback:function(e){t.article.title=e},expression:"article.title"}})],1)],1),i("q-btn",{attrs:{color:"warning",outline:"outline",round:"round",small:"small",icon:"undo"},on:{click:t.undoEdit}}),i("q-btn",{attrs:{color:"positive",outline:"outline",round:"round",small:"small",loader:"loader",icon:"save"},on:{click:t.updateArticle}})],1)]:i("div",{staticClass:"bg-primary relative-position window-height"},[i("img",{staticClass:"absolute fit",attrs:{src:t.article.image}}),i("div",{staticClass:"row fit ov absolute"},[i("div",{staticClass:"m-a text-center"},[i("h2",{staticClass:"text-white"},[t._v(t._s(t.article.title))]),i("img",{staticClass:"author",attrs:{src:t.article.user.image},on:{click:function(e){t.$router.push({name:"user",params:{id:t.article.user.id}})}}}),i("h4",{staticClass:"text-white"},[t._v(t._s(t.article.user.firstName)+" "+t._s(t.article.user.lastName))]),i("h6",{staticClass:"text-grey-5"},[t._v("Created "+t._s(t._f("moment")(t.article.createdAt,"from")))]),i("h6",{staticClass:"text-grey-5"},[t._v("Updated "+t._s(t._f("moment")(t.article.updatedAt,"from")))]),t.canEdit?i("q-btn",{staticStyle:{width:"150px","margin-left":"10px"},attrs:{color:"primary",icon:"edit"},on:{click:t.editArticle}},[t._v("Edit")]):t._e(),i("q-btn",{staticStyle:{width:"150px","margin-left":"10px"},attrs:{color:"info",icon:"share"},nativeOn:{click:function(e){t.shareArticle(e)}}},[t._v("Share")]),t.canEdit?i("q-btn",{staticStyle:{width:"150px","margin-left":"10px"},attrs:{color:"negative",icon:"delete"}},[t._v("Delete"),i("q-popover",{ref:"deleteArticlePopover"},[i("div",{staticClass:"bg-error",staticStyle:{padding:"16px"}},[i("div",{staticClass:"title white--text"},[t._v("Delete Article")])]),i("div",{staticStyle:{padding:"16px"}},[i("q-field",{attrs:{icon:"vpn_key"}},[i("q-input",{attrs:{"float-label":"Article Title"},model:{value:t.deleteVerification,callback:function(e){t.deleteVerification=e},expression:"deleteVerification"}})],1),i("q-btn",{staticClass:"full-width",attrs:{color:"negative",disabled:t.deleteVerification!==t.article.title},on:{click:t.deleteArticle}},[t._v("Delete")])],1)])],1):t._e()],1)])]),i("div",{staticClass:"row"},[t.edit?i("div",{staticClass:"col-xs-12 col-sm-6"},[i("q-card",[i("code-mirror",{key:"editor",staticClass:"markdown--editor",attrs:{mode:"text/x-gfm"},on:{save:t.updateArticle},model:{value:t.article.body,callback:function(e){t.article.body=e},expression:"article.body"}})],1)],1):t._e(),i("div",{staticClass:"col-xs-12 pa-0",class:t.edit?"col-sm-6":"col-sm-12"},[t.article.body?i("q-card",{key:"preview",staticClass:"article-preview"},[i("q-card-main",{domProps:{innerHTML:t._s(t.result)}})],1):t._e(),t.edit?t._e():i("comments",{attrs:{comments:t.article.comments,article:t.article.id}})],1)])],2):t._e()},staticRenderFns:[]}},751:function(t,e,i){t.exports=function(){return new Worker(i.p+"08a2335032c75bd8d04c.worker.js")}}});