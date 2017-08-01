webpackJsonp([2],{671:function(t,e,r){var i=r(356)(r(691),r(746),null,null,null);t.exports=i.exports},691:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=r(135),a=r.n(i),s=r(710),n=r.n(s),u=r(134),o=r.n(u);e.default={name:"article-card",inject:["auth"],props:["article"],computed:{canChangeVisibility:function(){return!!this.auth.currentUser&&("user"===this.$route.name?this.auth.currentUser.admin||this.auth.currentUser.id===this.$route.params.id:this.auth.currentUser.admin||"current_user"===this.$route.name)}},methods:{visible:function(){function t(t,r){return e.apply(this,arguments)}var e=o()(a.a.mark(function t(e,r){var i,s,u=this;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.$apollo.mutate({mutation:this.$gql.mutations.updateArticle,variables:{id:this.article.id,published:!this.article.published},update:function(t){if(console.log(t),"current_user"===u.$route.name){var e=t.readQuery({query:u.$gql.queries.currentUser}),r=e.currentUser,i=u.findArticle(r.articles),a=n()(i,2),s=a[0],o=a[1];r.articles.splice(o,1,s),t.writeQuery({query:u.$gql.queries.currentUser,data:{currentUser:r}})}else if("user"===u.$route.name){var l=t.readQuery({query:u.$gql.queries.user,variables:{id:u.$route.params.id}}),c=l.user,d=u.findArticle(c.articles),f=n()(d,2),p=f[0],h=f[1];c.articles.splice(h,1,p),t.writeQuery({query:u.$gql.queries.user,data:{user:c}})}}});case 3:i=t.sent,s=i.data,this.$q.events.$emit("app:showToast","Successfully changed visibility of article","positive"),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),this.$q.events.$emit("app:showToast","Error setting article visibility","negative");case 11:return t.prev=11,r(),t.finish(11);case 14:case"end":return t.stop()}},t,this,[[0,8,11,14]])}));return t}(),findArticle:function(t){var e=this,r=t.findIndex(function(t){return t.id===e.article.id}),i=t[r];return i.published=!this.article.published,[i,r]}}}},704:function(t,e,r){t.exports={default:r(725),__esModule:!0}},705:function(t,e,r){t.exports={default:r(726),__esModule:!0}},710:function(t,e,r){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var a=r(705),s=i(a),n=r(704),u=i(n);e.default=function(){function t(t,e){var r=[],i=!0,a=!1,s=void 0;try{for(var n,o=(0,u.default)(t);!(i=(n=o.next()).done)&&(r.push(n.value),!e||r.length!==e);i=!0);}catch(t){a=!0,s=t}finally{try{!i&&o.return&&o.return()}finally{if(a)throw s}}return r}return function(e,r){if(Array.isArray(e))return e;if((0,s.default)(Object(e)))return t(e,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()},725:function(t,e,r){r(358),r(357),t.exports=r(730)},726:function(t,e,r){r(358),r(357),t.exports=r(731)},730:function(t,e,r){var i=r(53),a=r(361);t.exports=r(34).getIterator=function(t){var e=a(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return i(e.call(t))}},731:function(t,e,r){var i=r(136),a=r(20)("iterator"),s=r(54);t.exports=r(34).isIterable=function(t){var e=Object(t);return void 0!==e[a]||"@@iterator"in e||s.hasOwnProperty(i(e))}},746:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("q-card",[r("q-card-media",{staticClass:"cursor-pointer",attrs:{"overlay-position":"full"},on:{click:function(e){e.stopPropagation(),t.$router.push({name:"article",params:{id:t.article.id}})}}},[r("img",{staticClass:"full-width",staticStyle:{height:"300px"},attrs:{src:t.article.image}}),r("q-card-title",{slot:"overlay"},[t._v(t._s(t.article.title))])],1),r("q-toolbar",{staticClass:"cursor-pointer"},[r("img",{staticClass:"avatar",attrs:{src:t.article.user.image},on:{click:function(e){e.stopPropagation(),t.$router.push({name:"user",params:{id:t.article.user.id}})}}}),r("q-toolbar-title",[t._v(" "+t._s(t.article.user.firstName)+" "+t._s(t.article.user.lastName)),r("span",{slot:"subtitle"},[t._v(t._s(t._f("moment")(t.article.createdAt,"dddd, MMMM Do YYYY")))])]),t.canChangeVisibility?r("q-btn",{attrs:{round:"round",small:"small",outline:"outline",loader:"loader",icon:t.article.published?"visibility":"visibility_off"},on:{click:t.visible}}):t._e()],1)],1)},staticRenderFns:[]}}});