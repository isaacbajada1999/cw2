(function(e){function t(t){for(var n,s,c=t[0],i=t[1],u=t[2],l=0,f=[];l<c.length;l++)s=c[l],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&f.push(o[s][0]),o[s]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);p&&p(t);while(f.length)f.shift()();return a.push.apply(a,u||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,c=1;c<r.length;c++){var i=r[c];0!==o[i]&&(n=!1)}n&&(a.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},o={app:0},a=[];function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var p=i;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var n=r("85ec"),o=r.n(n);o.a},3629:function(e,t,r){"use strict";var n=r("eb71"),o=r.n(n);o.a},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("postComponent")],1)},a=[],s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("h1",[e._v("Create a new course")]),r("div",{staticClass:"create-post"},[r("label",{attrs:{for:"create-topic"}},[e._v("Add topic: ")]),r("br"),r("br"),r("input",{directives:[{name:"model",rawName:"v-model",value:e.text,expression:"text"}],attrs:{type:"text",id:"create-topic",placeholder:"enter",required:""},domProps:{value:e.text},on:{input:function(t){t.target.composing||(e.text=t.target.value)}}}),r("button",{on:{click:e.insertPost}},[e._v("Create course")])]),r("hr"),e.error?r("p",{staticClass:"error"},[e._v(e._s(e.error))]):e._e(),r("div",{staticClass:"posts-container"},e._l(e.posts,(function(t,n){return r("div",{key:t._id,staticClass:"post",attrs:{item:t,index:n}},[r("br"),r("p",[e._v("Course topic:")]),r("p",{staticClass:"text"},[e._v(e._s(t.text)+" ")]),r("button",{on:{click:function(r){return e.deletePost(t._id)}}},[e._v("Delete course")]),r("br"),r("br"),r("br"),r("br"),r("input",{directives:[{name:"model",rawName:"v-model",value:t.topic,expression:"post.topic"}],attrs:{type:"text"},domProps:{value:t.topic},on:{input:function(r){r.target.composing||e.$set(t,"topic",r.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:t.price,expression:"post.price"}],attrs:{type:"text"},domProps:{value:t.price},on:{input:function(r){r.target.composing||e.$set(t,"price",r.target.value)}}}),r("br"),r("br"),r("input",{directives:[{name:"model",rawName:"v-model",value:t.location,expression:"post.location"}],attrs:{type:"text"},domProps:{value:t.location},on:{input:function(r){r.target.composing||e.$set(t,"location",r.target.value)}}}),r("br"),r("br"),r("input",{directives:[{name:"model",rawName:"v-model",value:t.provider,expression:"post.provider"}],attrs:{type:"text"},domProps:{value:t.provider},on:{input:function(r){r.target.composing||e.$set(t,"provider",r.target.value)}}}),r("button",{on:{click:function(r){return e.updatePost(t._id)}}},[e._v("Update course")])])})),0)])},c=[],i=(r("96cf"),r("1da1")),u=(r("a4d3"),r("4de4"),r("4160"),r("d81d"),r("e439"),r("dbb4"),r("b64b"),r("d3b7"),r("159b"),r("ade3")),p=r("d4ec"),l=r("bee2");function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){Object(u["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var v="api/posts/",m=function(){function e(){Object(p["a"])(this,e)}return Object(l["a"])(e,null,[{key:"getPosts",value:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch(v);case 2:return t=e.sent,e.next=5,t.json();case 5:return r=e.sent,e.abrupt("return",r.map((function(e){return d({},e,{createdAt:new Date(e.createdAt)})})));case 7:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()},{key:"insertPost",value:function(e){return fetch(v,{method:"POST",mode:"cors",headers:{Accept:"application/json","Content-Type":"application/json;charset=UTF-8"},body:JSON.stringify({text:e})})}},{key:"deletePost",value:function(e){return fetch("".concat(v).concat(e),{method:"DELETE"})}}]),e}(),b=m,h={name:"postComponent",data:function(){return{posts:[],error:"",text:""}},created:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.getPosts();case 3:this.posts=e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e["catch"](0),this.error=e.t0.message;case 9:case"end":return e.stop()}}),e,this,[[0,6]])})));function t(){return e.apply(this,arguments)}return t}(),methods:{insertPost:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,b.insertPost(this.text);case 2:return e.next=4,b.getPosts();case 4:this.posts=e.sent;case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),updatePost:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=prompt("Please enter new value","New post value"),e.next=3,b.updatePost(t,r);case 3:return e.next=5,b.getPosts();case 5:this.posts=e.sent;case 6:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),deletePost:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,b.deletePost(t);case 2:return e.next=4,b.getPosts();case 4:this.posts=e.sent;case 5:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()}},g=h,y=(r("3629"),r("2877")),x=Object(y["a"])(g,s,c,!1,null,"5e76f75c",null),w=x.exports,O={name:"app",components:{PostComponent:w}},P=O,j=(r("034f"),Object(y["a"])(P,o,a,!1,null,null,null)),_=j.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(_)}}).$mount("#app")},"85ec":function(e,t,r){},eb71:function(e,t,r){}});
//# sourceMappingURL=app.e5f1b9b8.js.map