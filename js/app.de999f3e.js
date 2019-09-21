(function(t){function e(e){for(var s,i,c=e[0],o=e[1],l=e[2],p=0,f=[];p<c.length;p++)i=c[p],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);u&&u(e);while(f.length)f.shift()();return n.push.apply(n,l||[]),r()}function r(){for(var t,e=0;e<n.length;e++){for(var r=n[e],s=!0,c=1;c<r.length;c++){var o=r[c];0!==a[o]&&(s=!1)}s&&(n.splice(e--,1),t=i(i.s=r[0]))}return t}var s={},a={app:0},n=[];function i(e){if(s[e])return s[e].exports;var r=s[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=s,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(r,s,function(e){return t[e]}.bind(null,s));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/<nfq-academy-task>/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=o;n.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"01c1":function(t,e,r){},"3f39":function(t,e,r){},"406a":function(t,e,r){"use strict";var s=r("01c1"),a=r.n(s);a.a},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("f751"),r("097d");var s=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},n=[],i=r("2877"),c={},o=Object(i["a"])(c,a,n,!1,null,null,null),l=o.exports,u=r("8c4f"),p=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h3",{staticClass:"title my-3"},[t._v("Administration page")]),r("div",{staticClass:"row justify-content-center"},[r("Button",{attrs:{name:"Import Data"},on:{click:t.importData}}),r("Button",{directives:[{name:"show",rawName:"v-show",value:t.isDataImported,expression:"isDataImported"}],attrs:{name:"Board Page"},on:{click:t.toBoardPage}}),r("Button",{directives:[{name:"show",rawName:"v-show",value:t.isDataImported,expression:"isDataImported"}],attrs:{name:"Specialist Page"},on:{click:t.toSpecialistPage}})],1),r("div",{directives:[{name:"show",rawName:"v-show",value:t.isDataImported,expression:"isDataImported"}]},[r("div",{staticClass:"row mt-3"},[r("Select",{attrs:{items:t.specialists,model:t.selectedSpecialist,placeholder:"Select Specialist"},on:{"update:model":function(e){t.selectedSpecialist=e}}})],1),r("div",{staticClass:"row mt-3 justify-content-center"},[r("Button",{attrs:{name:"Register"},on:{click:t.createNewCustomer}})],1),r("div",{staticClass:"row mt-3 justify-content-center"},[r("span",[t._v(t._s(t.registrationMessage))])])])])},f=[],d=(r("8e6e"),r("ac6a"),r("456d"),r("7f7f"),r("7514"),r("c5f6"),r("bd86")),m=r("2f62"),v=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("button",{staticClass:"btn btn-success mx-2",on:{click:function(e){return e.preventDefault(),t.$emit("click")}}},[t._v("\n\t"+t._s(t.name)+"\n")])},h=[],b={props:["name"]},g=b,y=Object(i["a"])(g,v,h,!1,null,null,null),O=y.exports,S=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"input-group justify-content-center"},[r("div",{staticClass:"input-group-prepend"},[r("label",{staticClass:"input-group-text",attrs:{for:"select"}},[t._v(t._s(t.placeholder))])]),r("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedValue,expression:"selectedValue"}],staticClass:"custom-select col-4",attrs:{id:"select"},on:{change:[function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.selectedValue=e.target.multiple?r:r[0]},function(e){return t.$emit("update:model",t.selectedValue)}]}},t._l(t.items,(function(e){return r("option",[t._v("\n\t\t\t"+t._s(e)+"\n\t\t")])})),0)])},j=[],D={props:["items","model","placeholder"],data:function(){return{selectedValue:null}}},w=D,_=Object(i["a"])(w,S,j,!1,null,null,null),C=_.exports;function P(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,s)}return r}function x(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?P(r,!0).forEach((function(e){Object(d["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):P(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var I={components:{Button:O,Select:C},data:function(){return{selectedSpecialist:null}},methods:x({},Object(m["b"])(["importSpecialistData","createCustomer"]),{importData:function(){this.importSpecialistData()},toBoardPage:function(){L.push("/board")},toSpecialistPage:function(){L.push("/specialist")},createNewCustomer:function(){var t={specialist:this.selectedSpecialist,code:Number(this.selectedSpecialistCode)};this.createCustomer(t)}}),computed:x({},Object(m["c"])(["specialists","isDataImported","registrationMessage"]),{specialistsWithCode:function(){return this.specialists.map((function(t,e){return{name:t,code:e+1+"00"}}))},selectedSpecialistCode:function(){var t=this;return null!==this.selectedSpecialist?this.specialistsWithCode.find((function(e){return e.name===t.selectedSpecialist})).code:""}})},k=I,A=(r("9a50"),Object(i["a"])(k,p,f,!1,null,"72192f2c",null)),E=A.exports,N=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"row justify-content-center"},t._l(t.specialists,(function(e){return r("table",{staticClass:"table table-bordered col-4"},[r("thead",{staticClass:"text-center"},[r("th",[t._v(t._s(e))])]),r("tbody",{staticClass:"text-center"},t._l(t.filteredCustomers(e),(function(e){return r("tr",{staticClass:"first-customer"},[r("td",[t._v(t._s(e.customer))])])})),0)])})),0)])},M=[];r("55dd");function B(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,s)}return r}function $(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?B(r,!0).forEach((function(e){Object(d["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):B(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var J={computed:$({},Object(m["c"])(["specialists","specialistDataArray"])),mounted:function(){this.refreshData()},methods:$({},Object(m["b"])(["refreshData"]),{filteredCustomers:function(t){return this.specialistDataArray.filter((function(e){if(!e.served)return e.specialist===t})).sort((function(t,e){return t.customer>e.customer?1:t.customer<e.customer?-1:0}))}})},V=J,R=(r("406a"),Object(i["a"])(V,N,M,!1,null,"33d49b62",null)),T=R.exports,q=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h3",{staticClass:"title my-3"},[t._v("Specialist Page")]),r("Select",{attrs:{items:t.specialists,model:t.selectedSpecialist,placeholder:"Select Specialist"},on:{"update:model":function(e){t.selectedSpecialist=e}}}),null!==t.selectedSpecialist?r("div",{staticClass:"container col-4 mt-3"},[r("table",{staticClass:"table table-bordered"},[t._m(0),r("tbody",{staticClass:"text-center"},t._l(t.selectedSpecialistData,(function(e){return r("tr",[r("td",[t._v(t._s(e.customer))]),r("td",{directives:[{name:"show",rawName:"v-show",value:!e.served,expression:"!item.served"}]},[r("Button",{attrs:{name:"Served"},on:{click:function(r){return t.customerServed(e)}}})],1),r("td",{directives:[{name:"show",rawName:"v-show",value:e.served,expression:"item.served"}]},[r("span",[t._v("Served")])])])})),0)])]):t._e()],1)},W=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",{staticClass:"text-center"},[r("th",[t._v("Customer")]),r("th",[t._v("Action")])])}];r("20d6");function Y(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,s)}return r}function z(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?Y(r,!0).forEach((function(e){Object(d["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Y(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var F={components:{Select:C,Button:O},data:function(){return{selectedSpecialist:null}},mounted:function(){this.refreshData()},methods:z({},Object(m["b"])(["updateCustomer","refreshData"]),{customerServed:function(t){function e(e){return e===t}var r=this.specialistDataArray.findIndex(e),s=z({},t,{servedCustomer:r});this.updateCustomer(s)}}),computed:z({},Object(m["c"])(["specialists","specialistDataArray"]),{selectedSpecialistData:function(){var t=this;return this.specialistDataArray.filter((function(e){return e.specialist===t.selectedSpecialist})).sort((function(t,e){return t.customer>e.customer?1:t.customer<e.customer?-1:0}))}})},G=F,H=(r("c6ee"),Object(i["a"])(G,q,W,!1,null,"77dcb3ae",null)),K=H.exports;s["a"].use(u["a"]);var L=new u["a"]({mode:"history",base:"/<nfq-academy-task>/",routes:[{path:"/",component:E},{path:"/board",component:T},{path:"/specialist",component:K}]}),Q=r("bc3a"),U=r.n(Q),X={state:{isDataImported:!1,specialistDataArray:[],specialists:["Specialist 1","Specialist 2","Specialist 3"],registrationMessage:""},getters:{specialistDataArray:function(t){return t.specialistDataArray},specialists:function(t){return t.specialists},isDataImported:function(t){return t.isDataImported},registrationMessage:function(t){return t.registrationMessage}},mutations:{setSpecialistData:function(t,e){t.specialistDataArray=e},setDataIsImported:function(t,e){t.isDataImported=e},setRegistrationMessage:function(t,e){t.registrationMessage=e}},actions:{refreshData:function(t){var e=t.commit,r=t.state;r.specialistDataArray=[];for(var s=[],a=0;a<localStorage.length;a++){var n=JSON.parse(localStorage.getItem("item"+a));null!==n&&s.push(n)}e("setSpecialistData",s),e("setDataIsImported",!0)},importSpecialistData:function(t){var e=t.dispatch;U.a.get("https://api.myjson.com/bins/hfo11").then((function(t){t.data.forEach((function(t,e){localStorage.setItem("item"+e,JSON.stringify(t))}))})).then((function(){e("refreshData")}))},updateCustomer:function(t,e){var r=t.dispatch;localStorage.removeItem("item"+e.servedCustomer),r("updateCustomerStatus",e)},updateCustomerStatus:function(t,e){var r=t.dispatch,s={specialist:e.specialist,customer:e.customer,served:!0};localStorage.setItem("item"+e.servedCustomer,JSON.stringify(s)),r("refreshData")},createCustomer:function(t,e){var r=t.dispatch,s=t.state,a=t.commit,n=s.specialistDataArray.filter((function(t){return t.specialist===e.specialist})),i={specialist:e.specialist,customer:String(e.code+n.length+1)};localStorage.setItem("item"+s.specialistDataArray.length,JSON.stringify(i)),r("refreshData"),a("setRegistrationMessage","Registration was successful. Your number is: ".concat(i.customer))}}};s["a"].use(m["a"]);var Z=new m["a"].Store({modules:{SpecialistData:X}});s["a"].config.productionTip=!1,new s["a"]({router:L,store:Z,render:function(t){return t(l)}}).$mount("#app")},"9a50":function(t,e,r){"use strict";var s=r("3f39"),a=r.n(s);a.a},c6ee:function(t,e,r){"use strict";var s=r("dd66"),a=r.n(s);a.a},dd66:function(t,e,r){}});
//# sourceMappingURL=app.de999f3e.js.map