(function(t){function e(e){for(var o,s,c=e[0],l=e[1],r=e[2],p=0,d=[];p<c.length;p++)s=c[p],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&d.push(a[s][0]),a[s]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);u&&u(e);while(d.length)d.shift()();return i.push.apply(i,r||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,c=1;c<n.length;c++){var l=n[c];0!==a[l]&&(o=!1)}o&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var o={},a={app:0},i=[];function s(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=o,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(n,o,function(e){return t[e]}.bind(null,o));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/wap.portfolio/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var r=0;r<c.length;r++)e(c[r]);var u=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"00f3":function(t,e,n){},"057e":function(t,e,n){},"060b":function(t,e,n){"use strict";n("f0e1")},"2d53":function(t,e,n){},"2f2d":function(t,e,n){},3504:function(t){t.exports=JSON.parse('{"message":"hello zh-i18n !!","en":"English","zh":"中文","language":"语言","skill":"技能","experience":"经验","projects":"项目","contact":"联系","copy":"拷贝","Download CV":"Download CV","rate":"速率","about":"关于","menu":"菜单","howdoyourate":"您如何评价我的投资组合？","cancel":"取消","submit":"提交","success":"成功","loading":"载入中..."}')},"3db4":function(t,e,n){},"40cb":function(t,e,n){},"49f8":function(t,e,n){var o={"./en.json":"edd4","./zh.json":"3504"};function a(t){var e=i(t);return n(e)}function i(t){if(!n.o(o,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return o[t]}a.keys=function(){return Object.keys(o)},a.resolve=i,t.exports=a,a.id="49f8"},5222:function(t,e,n){"use strict";n("057e")},"5c00":function(t,e,n){},"6e2f":function(t,e,n){},8357:function(t,e,n){"use strict";n("2d53")},9647:function(t,e,n){t.exports=n.p+"img/2x2.18011251.jpg"},"9db2":function(t,e,n){"use strict";n("e830")},a835:function(t,e,n){"use strict";n("00f3")},cd49:function(t,e,n){"use strict";n.r(e);var o=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},i=[],s=n("9ab4"),c=n("1b40"),l=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(s["b"])(e,t),Object.defineProperty(e.prototype,"locale",{get:function(){return this.$store.state.locale},enumerable:!1,configurable:!0}),e.prototype.created=function(){this.$i18n.locale=this.locale},e=Object(s["a"])([Object(c["a"])({components:{}})],e),e}(c["b"]),r=l,u=r,p=(n("8357"),n("2877")),d=Object(p["a"])(u,a,i,!1,null,"175644a7",null),f=d.exports,v=n("8c4f"),b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("Header"),t.loading?n("div",{staticClass:"home-container"},[n("van-skeleton",{attrs:{row:22,loading:t.loading}})],1):n("div",{staticClass:"home-container"},[n("Profile"),n("Divider",[n("div",{attrs:{slot:"title"},slot:"title"},[n("h3",[t._v(t._s(t.$t("skill")))])])]),n("Skills"),n("Divider",[n("div",{attrs:{slot:"title"},slot:"title"},[n("h3",[t._v(t._s(t.$t("experience")))])])]),n("Experience"),n("Divider",[n("div",{attrs:{slot:"title"},slot:"title"},[n("h3",[t._v(t._s(t.$t("projects")))])])]),n("Projects"),n("Divider",[n("div",{attrs:{slot:"title"},slot:"title"},[n("h3",[t._v(t._s(t.$t("contact")))])])]),n("Contact")],1)],1)},h=[],m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("div",{staticClass:"header-container"},[n("div",{staticClass:"left",on:{click:function(e){t.showLocale=!0}}},[t._v(" "+t._s(t.$t(""+t.activeLocale))+" ")]),n("div",{staticClass:"center"},[t._v("iAmKean")]),n("div",{staticClass:"right"},[n("van-icon",{attrs:{name:"apps-o",size:"30",color:"#ee0a24"},on:{click:function(e){t.showMenu=!0}}})],1)]),n("van-popup",{style:t.menuPopupStyle,attrs:{position:"right","get-container":t.getContainer},model:{value:t.showMenu,callback:function(e){t.showMenu=e},expression:"showMenu"}},[n("div",{staticClass:"menu-popup-container"},[n("div",{staticClass:"menu-text"},[t._v(t._s(t.$t("menu")))]),t._l(t.menuItems,(function(e,o){return n("div",{key:o,on:{click:function(e){return t.selectMenu(o)}}},[n("van-icon",{attrs:{name:e.icon,color:"#ee0a24",size:"26"}}),0==o?n("a",{attrs:{href:t.publicPath+"my_cv.pdf",download:"download"}},[t._v(t._s(t.$t(""+e.title)))]):t._e(),o>0?n("span",[t._v(t._s(t.$t(""+e.title)))]):t._e()],1)}))],2)]),n("van-action-sheet",{staticClass:"lang-sheet",attrs:{title:t.$t("language")},model:{value:t.showLocale,callback:function(e){t.showLocale=e},expression:"showLocale"}},t._l(t.localeList,(function(e,o){return n("van-cell",{key:o,class:{"active-lang":e.name==t.activeLocale},attrs:{title:t.$t(""+e.name)},on:{click:function(n){return t.switchLocale(e.name)}}})})),1),n("van-popup",{staticClass:"rate-popup",style:t.rateStyle,model:{value:t.showRate,callback:function(e){t.showRate=e},expression:"showRate"}},[n("h3",[t._v(t._s(t.$t("howdoyourate")))]),n("p"),n("van-rate",{attrs:{size:35,color:"#ffd21e","void-icon":"star","void-color":"#eee"},model:{value:t.rateValue,callback:function(e){t.rateValue=e},expression:"rateValue"}}),n("div",{staticClass:"rate-action"},[n("van-button",{attrs:{type:"default"},on:{click:t.rateCancel}},[t._v(t._s(t.$t("cancel")))]),n("van-button",{attrs:{type:"default"},on:{click:t.rateSubmit}},[t._v(t._s(t.$t("submit")))])],1)],1),n("van-popup",{staticClass:"about-popup",style:t.aboutStyle,model:{value:t.showAbout,callback:function(e){t.showAbout=e},expression:"showAbout"}},[n("h4",[t._v("Developer: Keanu Dela Cruz")]),n("h4",[t._v("Version: 1.0")]),n("h4",[t._v("Technology used: VueJS and Vant")])])],1)},y=[],_=n("d399"),g=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.activeLocale=e.$i18n.locale,e.showMenu=!1,e.checked=!1,e.showLocale=!1,e.showRate=!1,e.showAbout=!1,e.rateValue=0,e.publicPath="/wap.portfolio/",e.menuPopupStyle={width:"50%",height:"100%"},e.rateStyle={height:"30%",width:"80%",borderRadius:"8px"},e.aboutStyle={height:"18%",width:"80%",borderRadius:"8px"},e.menuItems=[{title:"Download CV",icon:"down"},{title:"rate",icon:"thumb-circle-o"},{title:"about",icon:"info-o"}],e.localeList=[{name:"en"},{name:"zh"}],e}return Object(s["b"])(e,t),e.prototype.getContainer=function(){return document.querySelector(".home")},e.prototype.switchLocale=function(t){this.showLocale=!1,this.$i18n.locale=t,this.activeLocale=t,localStorage.setItem("locale",t)},e.prototype.selectMenu=function(t){this.showMenu=!1,0===t?_["a"].loading({message:this.$t("loading"),forbidClick:!0}):1===t?this.showRate=!0:this.showAbout=!0},e.prototype.rateSubmit=function(){this.showRate=!1,this.rateValue=0,_["a"].success(this.$t("success"))},e.prototype.rateCancel=function(){this.showRate=!1,this.rateValue=0},e=Object(s["a"])([Object(c["a"])({components:{}})],e),e}(c["b"]),w=g,S=w,C=(n("d02c"),Object(p["a"])(S,m,y,!1,null,"7a945534",null)),k=C.exports,j=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"profile"},[o("div",{staticClass:"profile-container"},[o("div",{staticClass:"icon"},[o("van-image",{attrs:{fit:"cover",width:"250",src:n("9647")},on:{click:function(e){t.showProfile=!0}}})],1),o("div",{staticClass:"details"},[o("span",[o("h3",[t._v(t._s(t.ownerDetails.name))])]),o("span",[o("h4",[t._v(t._s(t.ownerDetails.jobTitle))])])])]),o("van-image-preview",{attrs:{showIndex:!1,images:t.images},on:{change:t.onChange},model:{value:t.showProfile,callback:function(e){t.showProfile=e},expression:"showProfile"}})],1)},x=[],O=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.publicPath="/wap.portfolio/",e.ownerDetails={name:"Keanu Dela Cruz",jobTitle:"Front-End Developer"},e.showProfile=!1,e.index=0,e.images=[e.publicPath+"2x2.jpg"],e}return Object(s["b"])(e,t),e.prototype.onChange=function(t){this.index=t},e=Object(s["a"])([Object(c["a"])({components:{}})],e),e}(c["b"]),L=O,P=L,V=(n("a835"),Object(p["a"])(P,j,x,!1,null,"5fd8bc95",null)),D=V.exports,E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"skills"},[n("div",{staticClass:"skills-container"},[n("van-divider",{attrs:{"content-position":"left"}},[t._v("Front-End")]),n("div",{staticClass:"skill-item"},[n("van-slider",{attrs:{"bar-height":"4px","active-color":"#ee0a24",disabled:""},scopedSlots:t._u([{key:"button",fn:function(){return[n("div",{staticClass:"custom-button",staticStyle:{"background-color":"#ee0a24"}},[t._v("VueJS+JS")])]},proxy:!0}]),model:{value:t.VueJS,callback:function(e){t.VueJS=e},expression:"VueJS"}})],1),n("div",{staticClass:"skill-item"},[n("van-slider",{attrs:{"bar-height":"4px","active-color":"#4994df",disabled:""},scopedSlots:t._u([{key:"button",fn:function(){return[n("div",{staticClass:"custom-button",staticStyle:{"background-color":"#4994df"}},[t._v("VueJS+TS")])]},proxy:!0}]),model:{value:t.VueTS,callback:function(e){t.VueTS=e},expression:"VueTS"}})],1),n("div",{staticClass:"skill-item"},[n("van-slider",{attrs:{"bar-height":"4px","active-color":"#4fc08d",disabled:""},scopedSlots:t._u([{key:"button",fn:function(){return[n("div",{staticClass:"custom-button",staticStyle:{"background-color":"#4fc08d"}},[t._v("HTML")])]},proxy:!0}]),model:{value:t.HTML,callback:function(e){t.HTML=e},expression:"HTML"}})],1),n("div",{staticClass:"skill-item last-item-1"},[n("van-slider",{attrs:{"bar-height":"4px","active-color":"#323233",disabled:""},scopedSlots:t._u([{key:"button",fn:function(){return[n("div",{staticClass:"custom-button",staticStyle:{"background-color":"#323233"}},[t._v("CSS")])]},proxy:!0}]),model:{value:t.CSS,callback:function(e){t.CSS=e},expression:"CSS"}})],1),n("van-divider",{attrs:{"content-position":"left"}},[t._v("Back-End")]),n("div",{staticClass:"skill-item"},[n("van-slider",{attrs:{"bar-height":"4px","active-color":"#800080",disabled:""},scopedSlots:t._u([{key:"button",fn:function(){return[n("div",{staticClass:"custom-button",staticStyle:{"background-color":"#800080"}},[t._v("PHP")])]},proxy:!0}]),model:{value:t.PHP,callback:function(e){t.PHP=e},expression:"PHP"}})],1),n("div",{staticClass:"skill-item"},[n("van-slider",{attrs:{"bar-height":"4px","active-color":"#FFA500",disabled:""},scopedSlots:t._u([{key:"button",fn:function(){return[n("div",{staticClass:"custom-button",staticStyle:{"background-color":"#FFA500"}},[t._v("MYSQL")])]},proxy:!0}]),model:{value:t.MYSQL,callback:function(e){t.MYSQL=e},expression:"MYSQL"}})],1)],1)])},$=[],T=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.VueJS=70,e.VueTS=60,e.HTML=80,e.CSS=80,e.PHP=50,e.MYSQL=58,e}return Object(s["b"])(e,t),e=Object(s["a"])([Object(c["a"])({components:{}})],e),e}(c["b"]),A=T,M=A,J=(n("d38a"),Object(p["a"])(M,E,$,!1,null,"1e2cb9c6",null)),z=J.exports,N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"experience"},[n("div",{staticClass:"experience-container"},[n("van-collapse",{attrs:{accordion:""},model:{value:t.activeNames,callback:function(e){t.activeNames=e},expression:"activeNames"}},t._l(t.expList,(function(e,o){return n("van-collapse-item",{key:o,attrs:{name:""+o},scopedSlots:t._u([{key:"title",fn:function(){return[n("div",[t._v(t._s(e.title)+" "),n("van-icon",{attrs:{name:"question-o"}})],1)]},proxy:!0}],null,!0)},[t._v(" "+t._s(e.description)+" ")])})),1)],1)])},H=[],R=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.activeNames="",e.expList=[{title:"Front-end Developer (2020-Present)",description:"Develop and build mobile apps, templates, re-usable \n        codes and components using Vue JS framework.\n      "},{title:"Junior Front-End Developer (2019-2020)",description:"Develop and build client websites at at Digispark Tech Corp.\n      Assigned to maintain and debug issues for existing client websites. Used customized theme and also \n      customized plugin if needed. Created client websites \n      for businesses. Also, maintain client's websites."}],e}return Object(s["b"])(e,t),e=Object(s["a"])([Object(c["a"])({components:{}})],e),e}(c["b"]),F=R,I=F,U=(n("060b"),Object(p["a"])(I,N,H,!1,null,"16b66345",null)),B=U.exports,K=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"projects"},[n("div",{staticClass:"projects-container"},[n("van-swipe",{on:{change:t.onChange},scopedSlots:t._u([{key:"indicator",fn:function(){return[n("div",{staticClass:"custom-indicator"},[t._v(t._s(t.current+1)+"/"+t._s(t.projectsList.length))])]},proxy:!0}])},t._l(t.projectsList,(function(e,o){return n("van-swipe-item",{key:o},[n("div",[n("div",{staticClass:"title"},[n("h3",[n("small",[t._v("Project: ")]),t._v(t._s(e.title))])]),n("van-divider",{attrs:{"content-position":"left"}},[t._v("Tech Stack(Front-End)")]),n("div",{staticClass:"tech-stact"},t._l(e.techStack,(function(e,o){return n("span",{key:o,staticClass:"stack-item"},[t._v(" "+t._s(e)+" ")])})),0),n("van-button",{attrs:{icon:"bulb-o",type:"info",size:"mini"}},[t._v(" Repo ")]),n("van-button",{attrs:{icon:"share-o",type:"info",size:"mini",url:e.url}},[t._v(" Visit website ")])],1)])})),1)],1)])},Q=[],Y=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.current=0,e.projectsList=[{title:"AA Entertainment",techStack:["Html","Css","Javascript"],repo:"repo",url:"http://aagaming.com/"},{title:"Lottery",techStack:["VueJS 2","TypeScript","VANT"],repo:"#",url:"http://h5.201010plays.com/#/"},{title:"Live H5",techStack:["VueJS 2","TypeScript","VANT"],repo:"#",url:"#"},{title:"Donkey Pen",techStack:["VueJS 2","TypeScript","VANT"],repo:"#",url:"#"},{title:"Obstain Bet Wap",techStack:["VueJS 2","Javascript","VANT"],repo:"#",url:"http://wap.jieboob.com/"},{title:"Obstain Bet Web",techStack:["VueJS 2","Javascript","IView"],repo:"#",url:"http://jieboob.com/"}],e}return Object(s["b"])(e,t),e.prototype.onChange=function(t){this.current=t},e=Object(s["a"])([Object(c["a"])({components:{}})],e),e}(c["b"]),q=Y,W=q,Z=(n("5222"),Object(p["a"])(W,K,Q,!1,null,"4bfb2598",null)),G=Z.exports,X=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"contact"},[n("div",{staticClass:"contact-container"},[n("van-cell",{attrs:{title:t.ownerDetails.name,icon:"user-o"}}),n("van-cell",{attrs:{title:t.ownerDetails.address,icon:"location-o"}}),n("van-cell",{attrs:{title:t.ownerDetails.phone,icon:"phone-o"},scopedSlots:t._u([{key:"right-icon",fn:function(){return[n("van-button",{staticClass:"copy-btn",attrs:{type:"default",size:"mini"},on:{click:function(e){return t.copy(t.ownerDetails.phone)}}},[t._v(t._s(t.$t("copy")))])]},proxy:!0}])}),n("van-cell",{attrs:{title:t.ownerDetails.email,icon:"chat-o"},scopedSlots:t._u([{key:"right-icon",fn:function(){return[n("van-button",{staticClass:"copy-btn",attrs:{type:"default",size:"mini"},on:{click:function(e){return t.copy(t.ownerDetails.email)}}},[t._v(t._s(t.$t("copy")))])]},proxy:!0}])})],1)])},tt=[],et=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.ownerDetails={name:"Keanu Dela Cruz",jobTitle:"Front-End Developer",phone:"+639958406050",email:"dkeanu382016@gmail.com",address:"Cauayan City, Isabela"},e}return Object(s["b"])(e,t),e.prototype.copy=function(t){var e=new c["b"].prototype.clipboard(".copy-btn",{text:function(){return t}});e.on("success",(function(t){Object(_["a"])("Copied")})),e.on("error",(function(){Object(_["a"])("Copy failed")}))},e=Object(s["a"])([Object(c["a"])({components:{}})],e),e}(c["b"]),nt=et,ot=nt,at=(n("9db2"),Object(p["a"])(ot,X,tt,!1,null,"70fecfd6",null)),it=at.exports,st=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"divider"},[n("div",{staticClass:"divider-container"},[t._t("title")],2)])},ct=[],lt=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(s["b"])(e,t),e=Object(s["a"])([Object(c["a"])({components:{}})],e),e}(c["b"]),rt=lt,ut=rt,pt=(n("dccf"),Object(p["a"])(ut,st,ct,!1,null,"3756f392",null)),dt=pt.exports,ft=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.loading=!0,e}return Object(s["b"])(e,t),e.prototype.mounted=function(){var t=this;setTimeout((function(){t.loading=!1}),1500)},e=Object(s["a"])([Object(c["a"])({components:{Header:k,Profile:D,Skills:z,Experience:B,Projects:G,Contact:it,Divider:dt}})],e),e}(c["b"]),vt=ft,bt=vt,ht=(n("f874"),Object(p["a"])(bt,b,h,!1,null,"6b420f5a",null)),mt=ht.exports;o["a"].use(v["a"]);var yt=[{path:"/",name:"Home",component:mt}],_t=new v["a"]({routes:yt}),gt=_t,wt=n("2f62");o["a"].use(wt["a"]);var St=new wt["a"].Store({state:{locale:localStorage.getItem("locale")?localStorage.getItem("locale"):"en"},mutations:{setLocale:function(t,e){t.locale=e,localStorage.setItem("locale",e)}},actions:{setLocale:function(t,e){var n=t.commit;n("setLocale",e)}},modules:{}}),Ct=n("b970"),kt=n("a925");function jt(){var t=n("49f8"),e={};return t.keys().forEach((function(n){var o=n.match(/([A-Za-z0-9-_]+)\./i);if(o&&o.length>1){var a=o[1];e[a]=t(n)}})),e}o["a"].use(kt["a"]);var xt=new kt["a"]({locale:Object({NODE_ENV:"production",BASE_URL:"/wap.portfolio/"}).VUE_APP_I18N_LOCALE||"en",fallbackLocale:Object({NODE_ENV:"production",BASE_URL:"/wap.portfolio/"}).VUE_APP_I18N_FALLBACK_LOCALE||"en",messages:jt()}),Ot=n("b311"),Lt=n.n(Ot),Pt=(n("3db4"),n("157a"),n("3c69")),Vt=n("d4b0");o["a"].prototype.clipboard=Lt.a,Pt["a"].use("en-US",Vt["a"]),o["a"].config.productionTip=!1,o["a"].use(kt["a"]),o["a"].use(Ct["a"]),new o["a"]({router:gt,store:St,i18n:xt,render:function(t){return t(f)}}).$mount("#app")},d02c:function(t,e,n){"use strict";n("2f2d")},d38a:function(t,e,n){"use strict";n("6e2f")},dccf:function(t,e,n){"use strict";n("40cb")},e830:function(t,e,n){},edd4:function(t){t.exports=JSON.parse('{"message":"hello en-i18n !!","en":"English","zh":"Chinese","language":"Language","skill":"Skill","experience":"Experience","projects":"Projects","contact":"Contact","copy":"Copy","Download CV":"Download CV","rate":"Rate","about":"About","menu":"Menu","howdoyourate":"How do you rate my portfolio?","cancel":"Cancel","submit":"Submit","success":"Success","loading":"Loading..."}')},f0e1:function(t,e,n){},f874:function(t,e,n){"use strict";n("5c00")}});
//# sourceMappingURL=app.65341e59.js.map