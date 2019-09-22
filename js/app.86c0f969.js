(function(e){function t(t){for(var s,n,c=t[0],o=t[1],u=t[2],p=0,m=[];p<c.length;p++)n=c[p],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&m.push(i[n][0]),i[n]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(e[s]=o[s]);l&&l(t);while(m.length)m.shift()();return a.push.apply(a,u||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],s=!0,c=1;c<r.length;c++){var o=r[c];0!==i[o]&&(s=!1)}s&&(a.splice(t--,1),e=n(n.s=r[0]))}return e}var s={},i={app:0},a=[];function n(t){if(s[t])return s[t].exports;var r=s[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=s,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(r,s,function(t){return e[t]}.bind(null,s));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/nfq-academy-task/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var l=o;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"1ad8":function(e,t,r){},"1de2":function(e,t,r){},"2ce0":function(e,t,r){},3470:function(e,t,r){"use strict";var s=r("808b"),i=r.n(s);i.a},"4dd3":function(e,t,r){"use strict";var s=r("2ce0"),i=r.n(s);i.a},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("f751"),r("097d");var s=r("2b0e"),i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},a=[],n=r("2877"),c={},o=Object(n["a"])(c,i,a,!1,null,null,null),u=o.exports,l=r("8c4f"),p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h3",{staticClass:"title my-3"},[e._v("Administration page")]),r("div",{staticClass:"row justify-content-center"},[r("Button",{attrs:{name:"Import Data"},on:{click:e.importData}}),r("Button",{directives:[{name:"show",rawName:"v-show",value:e.isDataImported,expression:"isDataImported"}],attrs:{name:"Board Page"},on:{click:e.toBoardPage}}),r("Button",{directives:[{name:"show",rawName:"v-show",value:e.isDataImported,expression:"isDataImported"}],attrs:{name:"Specialist Page"},on:{click:e.toSpecialistPage}}),r("Button",{directives:[{name:"show",rawName:"v-show",value:e.isDataImported,expression:"isDataImported"}],attrs:{name:"Customer Page"},on:{click:e.toCustomerPage}})],1),r("div",{staticClass:"row justify-content-center mt-3"},[r("span",[e._v(e._s(e.errorMessage))])]),r("div",{directives:[{name:"show",rawName:"v-show",value:e.isDataImported,expression:"isDataImported"}]},[r("div",{staticClass:"row mt-3"},[r("Select",{attrs:{items:e.specialists,model:e.selectedSpecialist,placeholder:"Select Specialist"},on:{"update:model":function(t){e.selectedSpecialist=t}}})],1),r("div",{staticClass:"row mt-3 justify-content-center"},[r("Button",{attrs:{name:"Register"},on:{click:e.createNewCustomer}})],1),r("div",{staticClass:"row mt-3 justify-content-center"},[r("span",[e._v(e._s(e.registrationMessage))])])])])},m=[],f=(r("8e6e"),r("ac6a"),r("456d"),r("7f7f"),r("7514"),r("c5f6"),r("bd86")),d=r("2f62"),v=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("button",{staticClass:"btn btn-success mx-2",on:{click:function(t){return t.preventDefault(),e.$emit("click")}}},[e._v("\n\t"+e._s(e.name)+"\n")])},h=[],b={props:["name"]},g=b,y=Object(n["a"])(g,v,h,!1,null,null,null),O=y.exports,S=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"input-group justify-content-center"},[r("div",{staticClass:"input-group-prepend"},[r("label",{staticClass:"input-group-text",attrs:{for:"select"}},[e._v(e._s(e.placeholder))])]),r("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedValue,expression:"selectedValue"}],staticClass:"custom-select col-md-4",attrs:{id:"select"},on:{change:[function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.selectedValue=t.target.multiple?r:r[0]},function(t){return e.$emit("update:model",e.selectedValue)}]}},e._l(e.items,(function(t){return r("option",[e._v("\n\t\t\t"+e._s(t)+"\n\t\t")])})),0)])},w=[],j={props:["items","model","placeholder"],data:function(){return{selectedValue:null}}},D=j,P=Object(n["a"])(D,S,w,!1,null,null,null),C=P.exports;function _(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function x(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?_(r,!0).forEach((function(t){Object(f["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var I={components:{Button:O,Select:C},data:function(){return{selectedSpecialist:null}},methods:x({},Object(d["b"])(["importSpecialistData","createCustomer"]),{importData:function(){var e=Math.floor(Date.now()/1e3);this.importSpecialistData(e)},toBoardPage:function(){ue.push("/board")},toSpecialistPage:function(){ue.push("/specialist")},toCustomerPage:function(){ue.push("/customer")},createNewCustomer:function(){var e={specialist:this.selectedSpecialist,code:Number(this.selectedSpecialistCode),creationTimestamp:Math.floor(Date.now()/1e3)};this.createCustomer(e)}}),computed:x({},Object(d["c"])(["specialists","isDataImported","registrationMessage","errorMessage"]),{specialistsWithCode:function(){return this.specialists.map((function(e,t){return{name:e,code:t+1+"00"}}))},selectedSpecialistCode:function(){var e=this;return null!==this.selectedSpecialist?this.specialistsWithCode.find((function(t){return t.name===e.selectedSpecialist})).code:""}})},N=I,T=(r("4dd3"),Object(n["a"])(N,p,m,!1,null,"5361c048",null)),E=T.exports,M=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"row justify-content-around"},e._l(e.timePerSpecialist,(function(t){return r("table",{staticClass:"table table-bordered col-3"},[r("thead",{staticClass:"text-center"},[r("th",[e._v(e._s(t.specialist)+" Time until next meeting approx.: "+e._s(t.averageTime)+" s")])]),r("tbody",{staticClass:"text-center"},e._l(e.filteredCustomers(t.specialist),(function(t){return r("tr",{staticClass:"first-customer"},[r("td",[e._v(e._s(t.customer))])])})),0)])})),0)])},k=[];r("55dd");function A(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function B(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?A(r,!0).forEach((function(t){Object(f["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):A(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var $={mounted:function(){this.refreshData()},methods:B({},Object(d["b"])(["refreshData"]),{filteredCustomers:function(e){return this.specialistDataArray.filter((function(t){if(!t.served)return t.specialist===e})).sort((function(e,t){return e.customer>t.customer?1:e.customer<t.customer?-1:0}))}}),computed:B({},Object(d["c"])(["specialistDataArray","timePerSpecialist"]))},V=$,J=(r("3470"),Object(n["a"])(V,M,k,!1,null,"673fd38e",null)),R=J.exports,L=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h3",{staticClass:"title my-3"},[e._v("Specialist Page")]),r("Select",{attrs:{items:e.specialists,model:e.selectedSpecialist,placeholder:"Select Specialist"},on:{"update:model":function(t){e.selectedSpecialist=t}}}),null!==e.selectedSpecialist?r("div",{staticClass:"container col-4 mt-3"},[r("table",{staticClass:"table table-bordered"},[e._m(0),r("tbody",{staticClass:"text-center"},e._l(e.selectedSpecialistData,(function(t){return r("tr",[r("td",{directives:[{name:"show",rawName:"v-show",value:!t.served,expression:"!item.served"}]},[e._v(e._s(t.customer))]),r("td",{directives:[{name:"show",rawName:"v-show",value:!t.served,expression:"!item.served"}]},[r("Button",{attrs:{name:"Served"},on:{click:function(r){return e.customerServed(t)}}})],1)])})),0)])]):e._e()],1)},W=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("thead",{staticClass:"text-center"},[r("th",[e._v("Customer")]),r("th",[e._v("Action")])])}];r("20d6");function q(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function Y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?q(r,!0).forEach((function(t){Object(f["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):q(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var z={components:{Select:C,Button:O},data:function(){return{selectedSpecialist:null}},mounted:function(){this.refreshData()},methods:Y({},Object(d["b"])(["updateCustomer","refreshData"]),{customerServed:function(e){function t(t){return t===e}var r=this.specialistDataArray.findIndex(t),s=Y({},e,{servedCustomerIndex:r,serveTimestamp:Math.floor(Date.now()/1e3)});this.updateCustomer(s)}}),computed:Y({},Object(d["c"])(["specialists","specialistDataArray"]),{selectedSpecialistData:function(){var e=this;return this.specialistDataArray.filter((function(t){return t.specialist===e.selectedSpecialist})).sort((function(e,t){return e.customer>t.customer?1:e.customer<t.customer?-1:0}))}})},F=z,G=(r("83ad"),Object(n["a"])(F,L,W,!1,null,"0bacf9e5",null)),H=G.exports,K=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"row justify-content-center"},[r("h3",{staticClass:"title my-3"},[e._v("Customer Page")]),r("Input",{attrs:{placeholder:"Enter Your Number",model:e.customerNumber},on:{"update:model":function(t){e.customerNumber=t},change:function(t){return e.differentCustomer(e.interval)}}})],1),r("div",{staticClass:"row justify-content-center"},[r("Button",{attrs:{name:"Check Time"},on:{click:function(t){return e.checkTime(e.customerNumber)}}})],1),r("div",{directives:[{name:"show",rawName:"v-show",value:e.showTime,expression:"showTime"}],staticClass:"row justify-content-center mt-3"},[r("h4",[e._v("Waiting time left: "+e._s(e.timeLeft)+" seconds")])])])},Q=[],U=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"input-group justify-content-center mb-3"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.inputValue,expression:"inputValue"}],staticClass:"form-control col-md-4",attrs:{type:"text",placeholder:e.placeholder},domProps:{value:e.inputValue},on:{input:[function(t){t.target.composing||(e.inputValue=t.target.value)},function(t){return e.$emit("update:model",e.inputValue)}],change:function(t){return e.$emit("change")}}})])},X=[],Z={props:["placeholder","model"],data:function(){return{inputValue:""}}},ee=Z,te=Object(n["a"])(ee,U,X,!1,null,null,null),re=te.exports;function se(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function ie(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?se(r,!0).forEach((function(t){Object(f["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):se(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var ae={components:{Input:re,Button:O},data:function(){return{customerNumber:null,timeLeft:null,interval:null,showTime:!1}},methods:ie({},Object(d["b"])(["checkCustomerByNumber"]),{calculateTime:function(e){var t=this.specialistDataArray.find((function(t){return t.customer===e})),r=this.timePerSpecialist.find((function(e){return e.specialist===t.specialist})),s=r.averageTime,i=this.waitingCustomersBySpecialist.find((function(e){return e.specialist===r.specialist})).customers,a=Math.floor(Date.now()/1e3),n=i.indexOf(t),c=t.creationTimestamp-a+s*n;this.timeLeft=n>0&&c>0?c:0,this.showTime=!0},checkTime:function(e){var t=this;this.calculateTime(e),this.interval=setInterval((function(){t.calculateTime(e)}),5e3)},differentCustomer:function(e){clearInterval(e)}}),computed:ie({},Object(d["c"])(["specialistDataArray","timePerSpecialist","specialists"]),{waitingCustomers:function(){return this.specialistDataArray.filter((function(e){return!e.served})).sort((function(e,t){return e.customer>t.customer?1:e.customer<t.customer?-1:0}))},waitingCustomersBySpecialist:function(){var e=this;return this.specialists.map((function(t){return{specialist:t,customers:e.waitingCustomers.filter((function(e){return e.specialist===t}))}}))}})},ne=ae,ce=(r("a932"),Object(n["a"])(ne,K,Q,!1,null,"0d03b598",null)),oe=ce.exports;s["a"].use(l["a"]);var ue=new l["a"]({mode:"history",base:"/nfq-academy-task/",routes:[{path:"/",component:E},{path:"/board",component:R},{path:"/specialist",component:H},{path:"/customer",component:oe}]}),le=r("bc3a"),pe=r.n(le);function me(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function fe(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?me(r,!0).forEach((function(t){Object(f["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):me(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var de={state:{isDataImported:!1,specialistDataArray:[],specialists:["Specialist 1","Specialist 2","Specialist 3"],registrationMessage:"",errorMessage:"",timePerSpecialist:[]},getters:{specialistDataArray:function(e){return e.specialistDataArray},specialists:function(e){return e.specialists},isDataImported:function(e){return e.isDataImported},registrationMessage:function(e){return e.registrationMessage},errorMessage:function(e){return e.errorMessage},timePerSpecialist:function(e){return e.timePerSpecialist}},mutations:{setSpecialistData:function(e,t){e.specialistDataArray=t},setDataIsImported:function(e,t){e.isDataImported=t},setRegistrationMessage:function(e,t){e.registrationMessage=t},setErrorMessage:function(e,t){e.errorMessage=t},setTimePerSpecialist:function(e,t){e.timePerSpecialist=t}},actions:{refreshData:function(e){var t=e.commit,r=e.state;r.specialistDataArray=[],r.timePerSpecialist=[];for(var s=[],i=0;i<localStorage.length;i++){var a=JSON.parse(localStorage.getItem("item"+i));null!==a&&s.push(a)}for(var n=[],c=1;c<localStorage.length;c++){var o=JSON.parse(localStorage.getItem("specialist"+c));null!==o&&n.push(o)}t("setSpecialistData",s),t("setTimePerSpecialist",n),t("setDataIsImported",!0)},importSpecialistData:function(e,t){var r=e.dispatch,s=e.commit,i=e.state;pe.a.get("https://api.myjson.com/bins/ipa2x").then((function(e){e.data.forEach((function(e,t){localStorage.setItem("item"+t,JSON.stringify(e))}));var r=i.specialists.map((function(t){return{specialist:t,specialistData:e.data.filter((function(e){return e.specialist===t}))}})),s=i.specialists.map((function(e){var s=r.find((function(t){return t.specialist===e})).specialistData,i=s.reduce((function(e,t){return e+t.timeSpent}),0)/s.length;return{specialist:e,averageTime:i,timestamp:t}}));s.forEach((function(e,t){localStorage.setItem("specialist"+Number(t+1),JSON.stringify(e))}))})).then((function(){r("refreshData")})).catch((function(){s("setErrorMessage","Customer data import failed. Please try again later.")}))},updateCustomer:function(e,t){var r=e.dispatch,s=e.state;localStorage.removeItem("item"+t.servedCustomerIndex);var i=s.timePerSpecialist.find((function(e){return e.specialist===t.specialist})),a=s.timePerSpecialist.indexOf(i),n={specialist:i.specialist,averageTime:i.averageTime,timestamp:t.serveTimestamp};localStorage.removeItem("specialist"+Number(a+1)),localStorage.setItem("specialist"+Number(a+1),JSON.stringify(n));var c=fe({},t,{},i);r("updateCustomerStatus",c)},updateCustomerStatus:function(e,t){var r=e.dispatch,s=(e.state,{specialist:t.specialist,customer:t.customer,served:!0,timeSpent:t.serveTimestamp-t.timestamp});localStorage.setItem("item"+t.servedCustomerIndex,JSON.stringify(s)),r("refreshData")},createCustomer:function(e,t){var r=e.dispatch,s=e.state,i=e.commit,a=s.specialistDataArray.filter((function(e){return e.specialist===t.specialist})),n={specialist:t.specialist,customer:String(t.code+a.length+1),creationTimestamp:t.creationTimestamp};localStorage.setItem("item"+s.specialistDataArray.length,JSON.stringify(n)),r("refreshData"),i("setRegistrationMessage","Registration was successful. Your number is: ".concat(n.customer))}}};s["a"].use(d["a"]);var ve=new d["a"].Store({modules:{SpecialistData:de}});s["a"].config.productionTip=!1,new s["a"]({router:ue,store:ve,render:function(e){return e(u)}}).$mount("#app")},"808b":function(e,t,r){},"83ad":function(e,t,r){"use strict";var s=r("1de2"),i=r.n(s);i.a},a932:function(e,t,r){"use strict";var s=r("1ad8"),i=r.n(s);i.a}});
//# sourceMappingURL=app.86c0f969.js.map