/*! For license information please see main.15e3262a.chunk.js.LICENSE.txt */
(this["webpackJsonpmuse-app"]=this["webpackJsonpmuse-app"]||[]).push([[0],{261:function(e,t,n){e.exports=n(289)},266:function(e,t,n){},289:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(11),i=n.n(o),c=n(39),l=n(40),s=n(44),u=n(43),h=(n(266),n(116)),d=n(48),p=n(115);function f(){f=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,a=Object.defineProperty||function(e,t,n){e[t]=n.value},r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",c=r.toStringTag||"@@toStringTag";function l(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(I){l=function(e,t,n){return e[t]=n}}function s(e,t,n,r){var o=t&&t.prototype instanceof d?t:d,i=Object.create(o.prototype),c=new L(r||[]);return a(i,"_invoke",{value:x(e,n,c)}),i}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(I){return{type:"throw",arg:I}}}e.wrap=s;var h={};function d(){}function p(){}function m(){}var g={};l(g,o,(function(){return this}));var y=Object.getPrototypeOf,v=y&&y(y(C([])));v&&v!==t&&n.call(v,o)&&(g=v);var b=m.prototype=d.prototype=Object.create(g);function E(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function w(e,t){var r;a(this,"_invoke",{value:function(a,o){function i(){return new t((function(r,i){!function a(r,o,i,c){var l=u(e[r],e,o);if("throw"!==l.type){var s=l.arg,h=s.value;return h&&"object"==typeof h&&n.call(h,"__await")?t.resolve(h.__await).then((function(e){a("next",e,i,c)}),(function(e){a("throw",e,i,c)})):t.resolve(h).then((function(e){s.value=e,i(s)}),(function(e){return a("throw",e,i,c)}))}c(l.arg)}(a,o,r,i)}))}return r=r?r.then(i,i):i()}})}function x(e,t,n){var a="suspendedStart";return function(r,o){if("executing"===a)throw new Error("Generator is already running");if("completed"===a){if("throw"===r)throw o;return _()}for(n.method=r,n.arg=o;;){var i=n.delegate;if(i){var c=j(i,n);if(c){if(c===h)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===a)throw a="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a="executing";var l=u(e,t,n);if("normal"===l.type){if(a=n.done?"completed":"suspendedYield",l.arg===h)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(a="completed",n.method="throw",n.arg=l.arg)}}}function j(e,t){var n=t.method,a=e.iterator[n];if(void 0===a)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,j(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),h;var r=u(a,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,h;var o=r.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,h):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,h)}function k(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(k,this),this.reset(!0)}function C(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,r=function t(){for(;++a<e.length;)if(n.call(e,a))return t.value=e[a],t.done=!1,t;return t.value=void 0,t.done=!0,t};return r.next=r}}return{next:_}}function _(){return{value:void 0,done:!0}}return p.prototype=m,a(b,"constructor",{value:m,configurable:!0}),a(m,"constructor",{value:p,configurable:!0}),p.displayName=l(m,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,l(e,c,"GeneratorFunction")),e.prototype=Object.create(b),e},e.awrap=function(e){return{__await:e}},E(w.prototype),l(w.prototype,i,(function(){return this})),e.AsyncIterator=w,e.async=function(t,n,a,r,o){void 0===o&&(o=Promise);var i=new w(s(t,n,a,r),o);return e.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},E(b),l(b,c,"Generator"),l(b,o,(function(){return this})),l(b,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),n=[];for(var a in t)n.push(a);return n.reverse(),function e(){for(;n.length;){var a=n.pop();if(a in t)return e.value=a,e.done=!1,e}return e.done=!0,e}},e.values=C,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function a(n,a){return i.type="throw",i.arg=e,t.next=n,a&&(t.method="next",t.arg=void 0),!!a}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],i=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(e,t){for(var a=this.tryEntries.length-1;a>=0;--a){var r=this.tryEntries[a];if(r.tryLoc<=this.prev&&n.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),O(n),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var a=n.completion;if("throw"===a.type){var r=a.arg;O(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:C(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),h}},e}var m=r.a.createContext(),g=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).flip=function(){console.info("page loading...")},a.set=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;console.log("Loading page: ",n),a.setState({lee:"loading"}),fetch(t).then((function(e){return e.json()})).then((function(t){if("search"===e&&a.setState({search:t.data.articles.data}),"trends"===e){var r=a.state.trends;t.data.filtered.data.map((function(e){r.push(e)})),a.setState({trends:r})}if("articles"===e){var o=Object(d.a)({},a.state.articles);fetch("".concat(y,"graphql?query={%20filtered(first:6%20page:").concat(n,"%20type:%22card%22)%20{%20data%20{%20id%20url%20headline%20lede%20thumbnail%20category%20catLink%20images%20key%20label%20subject%20format%20about%20src_name%20src_url%20src_logo%20isVid%20vidLen%20type%20tag%20tags%20author%20authors%20date%20}%20}%20}")).then((function(e){return e.json()})).then((function(e){0==e.data.filtered.data?console.warn("Cant get more slides"):t.data.filtered.data.push([e.data.filtered.data]),a.setState({more:t.data.filtered.paginatorInfo.hasMorePages,_:{lastPage:t.data.filtered.paginatorInfo.lastPage,currentPage:t.data.filtered.paginatorInfo.currentPage}})})),o.pages.push(t.data.filtered.data),a.setState({articles:o,page:n})}})).then((function(){return a.setState({lee:"loaded"})}))},a.state={flip:a.flip,trends:[{key:0,label:"trends",url:""}],lee:"jus a rndm value",articles:{pages:[]}},a.flip=a.flip.bind(Object(p.a)(a)),a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=Object(h.a)(f().mark((function e(){return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("DID MOUNT"),this.set("search","".concat(y,"graphql?query={%20articles(first:%20200,%20page:%201)%20{%20data%20{%20id%20url%20headline%20}%20}%20}")),this.set("trends","".concat(y,"graphql?query={%20filtered(first:10%20page:1%20type:%22hot-trends%22){%20paginatorInfo{%20count%20currentPage%20lastPage%20total%20}%20data{%20id%20label%20url%20headline%20}%20}%20}")),this.set("articles","".concat(y,"graphql?query={%20filtered(first:40%20page:4%20type:%22card%22)%20{%20paginatorInfo%20{%20lastPage%20hasMorePages%20currentPage%20total%20}%20data%20{%20id%20url%20headline%20lede%20thumbnail%20category%20catLink%20images%20src_name%20src_url%20src_logo%20isVid%20vidLen%20type%20tag%20tags%20author%20authors%20date%20}%20}%20}"),3),this.set("articles","".concat(y,"graphql?query={%20filtered(first:40%20page:3%20type:%22card%22)%20{%20paginatorInfo%20{%20lastPage%20hasMorePages%20currentPage%20total%20}%20data%20{%20id%20url%20headline%20lede%20thumbnail%20category%20catLink%20images%20src_name%20src_url%20src_logo%20isVid%20vidLen%20type%20tag%20tags%20author%20authors%20date%20}%20}%20}"),2);case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){console.log("DID UPDATE")}},{key:"render",value:function(){return r.a.createElement(m.Provider,{value:this.state},this.props.children)}}]),n}(a.Component),y=(m.Consumer,"https://museapi.byteestudio.com/api/"),v=n(232),b=n(348),E=n(84),w=n(236),x=n.n(w),j=Object(v.a)((function(e){return{root:{margin:"10px auto",maxWidth:700,display:"flex",justifyContent:"center",flexWrap:"wrap",listStyle:"none",padding:e.spacing(.5)},chip:{margin:e.spacing(.5),cursor:"pointer"}}}));function k(e){var t=j();return r.a.createElement(E.a,{component:"section",className:"trends-section "+t.root},e.data.map((function(e){var n,a;return"trends"===e.label&&(n=r.a.createElement(x.a,null),a="primary"),r.a.createElement("a",{className:"trend-tag",href:e.url,key:e.key},r.a.createElement(b.a,{variant:"outlined",color:a,icon:n,label:e.label,className:t.chip}))})))}var O=n(331),L=n(330),C=n(55),_=n(322),I=n(345);function S(e){return r.a.createElement(I.a,Object.assign({elevation:6,variant:"filled"},e))}var N=Object(v.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}}}));function P(){var e=N(),t=void 0===localStorage.open,n=r.a.useState(t),a=Object(C.a)(n,2),o=a[0],i=a[1],c=function(e,t){void 0===t&&localStorage.setItem("open",!1),"clickaway"!==t&&i(!1)};return r.a.createElement("div",{className:e.root},r.a.createElement(_.a,{open:o,autoHideDuration:1e4,onClose:c},r.a.createElement(S,{id:"cookie-bar",onClose:c,severity:"info"},"Note: This website uses cookies and this website uses cookies.")))}var R=n(18),W=n(324),F=n(327),G=n(237),T=n.n(G),D=n(68),M=n(325),B=n(170),A=n(326),H=n(323),q=n(239),Y=n.n(q),J=n(346);function V(e){}function z(e){return r.a.createElement(J.a,{"aria-label":"breadcrumb"},r.a.createElement(H.a,{color:"inherit",target:"_blank",href:e.data.src_url,onClick:V},r.a.createElement("img",{style:{objectFit:"cover"},src:e.data.src_logo,width:"fit-content",height:"12",alt:e.data.src_name})),r.a.createElement(H.a,{style:{textTransform:"capitalize"},color:"inherit",target:"_blank",href:e.data.catLink||e.data.src_url,onClick:V},e.data.tag||e.data.category||e.data.src_name))}var Z=Object(v.a)((function(e){var t;return{root:{margin:"10px auto",display:"flex",maxWidth:700},paper:{padding:e.spacing(1),maxWidth:700},details:{display:"flex",maxHeight:"fit-content",flexDirection:"column",width:"100%"},content:{maxWidth:700,flex:"5 0 auto"},cover:(t={},Object(R.a)(t,e.breakpoints.down("sm"),{display:"none"}),Object(R.a)(t,"maxHeight","150px"),Object(R.a)(t,"margin","0 auto"),Object(R.a)(t,"width","40%"),Object(R.a)(t,"borderRightColor","#bfbbbb"),t),"empty-txt":Object(R.a)({border:"1px solid white"},e.breakpoints.down("sm"),{display:"none"}),controls:{maxWidth:"100%",display:"flex",paddingLeft:e.spacing(1),paddingBottom:e.spacing(1)},playIcon:{height:38,width:38},icon:{justifyContent:"space-between",alignItems:"centre",float:"right"}}}));function Q(e){var t=Z(),n=null===e.data.date&&null===e.data.author&&null===e.data.authors&&!1===e.data.isVid?"none":"unset";return r.a.createElement("article",{key:e.data.id},r.a.createElement(W.a,{className:t.root},r.a.createElement("div",{className:t.details},r.a.createElement(E.a,{className:t.paper},r.a.createElement(M.a,{container:!0,spacing:3},r.a.createElement(M.a,{item:!0,xs:12,sm:!0,container:!0},r.a.createElement(M.a,{item:!0,xs:!0,container:!0,direction:"column",spacing:2},r.a.createElement(M.a,{item:!0,xs:!0},r.a.createElement(D.a,{color:"textSecondary",gutterBottom:!0,variant:"inherit"},r.a.createElement(z,{data:e.data})),r.a.createElement(D.a,{variant:"subtitle1",gutterBottom:!0},r.a.createElement(B.a,{fontWeight:"fontWeightBold",lineHeight:"normal",m:1},r.a.createElement(H.a,{target:"_blank",color:"inherit",href:e.data.url},e.data.headline))),r.a.createElement(D.a,{className:null!==e.data.thumbnail&&null===e.data.lede?t["empty-txt"]:"",style:{minHeight:null===e.data.thumbnail?"0":"30px"},variant:"inherit"},r.a.createElement(B.a,{boxShadow:0,lineHeight:"normal",m:1},e.data.lede||""))),r.a.createElement(M.a,{item:!0},r.a.createElement(D.a,{variant:"inherit",color:"textSecondary",style:{display:n,fontStyle:"italic"}},[e.data.tags,e.data.tag,e.data.date,e.data.authors,e.data.author].map((function(e){return r.a.createElement(B.a,{key:"".concat(1e3*Math.random()),lineHeight:"normal",style:{cursor:"auto",display:null===e?"none":"unset"},component:"div",display:"inline",p:1,bgcolor:"background.paper"},e)})),r.a.createElement(B.a,{lineHeight:"normal",display:"inline",component:"div",bgcolor:"background.paper"},!0===e.data.isVid?r.a.createElement("div",{className:t.icon},r.a.createElement("span",{p:1,style:{position:"relative",top:"-5px"}},e.data.vidLen||""),r.a.createElement(A.a,{title:"Video"},r.a.createElement(Y.a,null))):null)))))))),r.a.createElement(F.a,{style:{display:null===e.data.thumbnail?"none":""},className:t.cover,id:"imgWrapper"},r.a.createElement(T.a,{onClick:function(t){return window.location.href="".concat(e.data.url)},style:{width:"100%",margin:"0 auto",maxHeight:"150px",objectFit:"cover",cursor:"pointer"},alt:e.data.headline,src:e.data.thumbnail||""}))))}n(240),Object(v.a)((function(e){return{root:{margin:"10px auto",display:"flex",maxWidth:"100%",paddingBottom:e.spacing(1),alignItems:"center",justifyContent:"center"},paper:{width:"100%",padding:e.spacing(1),alignItems:"center",justifyContent:"center"},details:{display:"flex",maxHeight:"fit-content",flexDirection:"column",width:"100%",alignItems:"center",justifyContent:"center"},centre:{alignItems:"center",justifyContent:"center",width:"100%"}}}));var U=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"page"},this.props.data.sort((function(){return Math.random()-.5})).map((function(e){return void 0!==e.headline&&r.a.createElement(Q,{key:e.id,data:e})})))}}]),n}(a.Component);function X(){X=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,a=Object.defineProperty||function(e,t,n){e[t]=n.value},r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",c=r.toStringTag||"@@toStringTag";function l(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(_){l=function(e,t,n){return e[t]=n}}function s(e,t,n,r){var o=t&&t.prototype instanceof d?t:d,i=Object.create(o.prototype),c=new O(r||[]);return a(i,"_invoke",{value:w(e,n,c)}),i}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(_){return{type:"throw",arg:_}}}e.wrap=s;var h={};function d(){}function p(){}function f(){}var m={};l(m,o,(function(){return this}));var g=Object.getPrototypeOf,y=g&&g(g(L([])));y&&y!==t&&n.call(y,o)&&(m=y);var v=f.prototype=d.prototype=Object.create(m);function b(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){var r;a(this,"_invoke",{value:function(a,o){function i(){return new t((function(r,i){!function a(r,o,i,c){var l=u(e[r],e,o);if("throw"!==l.type){var s=l.arg,h=s.value;return h&&"object"==typeof h&&n.call(h,"__await")?t.resolve(h.__await).then((function(e){a("next",e,i,c)}),(function(e){a("throw",e,i,c)})):t.resolve(h).then((function(e){s.value=e,i(s)}),(function(e){return a("throw",e,i,c)}))}c(l.arg)}(a,o,r,i)}))}return r=r?r.then(i,i):i()}})}function w(e,t,n){var a="suspendedStart";return function(r,o){if("executing"===a)throw new Error("Generator is already running");if("completed"===a){if("throw"===r)throw o;return C()}for(n.method=r,n.arg=o;;){var i=n.delegate;if(i){var c=x(i,n);if(c){if(c===h)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===a)throw a="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a="executing";var l=u(e,t,n);if("normal"===l.type){if(a=n.done?"completed":"suspendedYield",l.arg===h)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(a="completed",n.method="throw",n.arg=l.arg)}}}function x(e,t){var n=t.method,a=e.iterator[n];if(void 0===a)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,x(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),h;var r=u(a,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,h;var o=r.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,h):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,h)}function j(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function k(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(j,this),this.reset(!0)}function L(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,r=function t(){for(;++a<e.length;)if(n.call(e,a))return t.value=e[a],t.done=!1,t;return t.value=void 0,t.done=!0,t};return r.next=r}}return{next:C}}function C(){return{value:void 0,done:!0}}return p.prototype=f,a(v,"constructor",{value:f,configurable:!0}),a(f,"constructor",{value:p,configurable:!0}),p.displayName=l(f,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,f):(e.__proto__=f,l(e,c,"GeneratorFunction")),e.prototype=Object.create(v),e},e.awrap=function(e){return{__await:e}},b(E.prototype),l(E.prototype,i,(function(){return this})),e.AsyncIterator=E,e.async=function(t,n,a,r,o){void 0===o&&(o=Promise);var i=new E(s(t,n,a,r),o);return e.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},b(v),l(v,c,"Generator"),l(v,o,(function(){return this})),l(v,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),n=[];for(var a in t)n.push(a);return n.reverse(),function e(){for(;n.length;){var a=n.pop();if(a in t)return e.value=a,e.done=!1,e}return e.done=!0,e}},e.values=L,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function a(n,a){return i.type="throw",i.arg=e,t.next=n,a&&(t.method="next",t.arg=void 0),!!a}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],i=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(e,t){for(var a=this.tryEntries.length-1;a>=0;--a){var r=this.tryEntries[a];if(r.tryLoc<=this.prev&&n.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),k(n),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var a=n.completion;if("throw"===a.type){var r=a.arg;k(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:L(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),h}},e}a.Component;var K={margin:"10px auto",maxWidth:700,display:"flex",justifyContent:"center",flexWrap:"wrap",listStyle:"none",padding:"10px"},$="bz3fa0c30a44e08e61eb9a07e328d9221",ee="https://geo.ngtv.io/locate?appId=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwbGF0Zm9ybSI6IndlYiIsInByb2R1Y3QiOiJhZGZ1ZWwiLCJuZXR3b3JrIjoiY25uIiwiYXBwSWQiOiJjbm4tYWRmdWVsLXdlYi14bWQ2dTkifQ.N-lYZh_mvCV2gChDusNhd85B2BD7AiCIcNY2Gr5Rc6c",te=n(233);function ne(e){var t=Object(a.useRef)(null);if(100===e.value){var n=Number(sessionStorage.page)||1;window.onscroll=function(a){var r=window.innerHeight,o=function(){return t.current.getBoundingClientRect().top};r>=o()&&(console.info(r>=o(),{vh:r},o(),{page:n},{position:t.current.getBoundingClientRect()}),n++,console.info(r>=o(),r,o(),{page:n}),console.log("you're at the bottom of the page"),e.flip(n))}}return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{style:{lineHeight:"0 !important"},ref:t}),r.a.createElement(E.a,{component:"div",className:"loader",style:ae},r.a.createElement(te.a,{disableShrink:!0})))}var ae={marginTop:"10px",maxWidth:700,display:"flex",justifyContent:"center",flexWrap:"wrap",listStyle:"none",padding:"10px"},re=Object(v.a)((function(e){return{head:{padding:e.spacing(2),margin:"auto",maxWidth:700,textTransform:"capitalize",textDecoration:"underline"},cont:{margin:"auto",maxWidth:700,height:"100%"}}}));function oe(){var e=re();return r.a.createElement(m.Consumer,null,(function(t){return r.a.createElement(r.a.Fragment,null,r.a.createElement(O.a,null),r.a.createElement(L.a,{component:"main",className:e.cont},"loading"===t.lee?r.a.createElement(ne,{value:10,flip:function(e){var t=e.x;return console.log({x:t})}}):r.a.createElement(r.a.Fragment,null,r.a.createElement(k,{data:t.trends}),r.a.createElement("section",{className:"pages-section"},t.articles.pages.map((function(e){return r.a.createElement(U,{key:"".concat(1e3*Math.random()),data:e.sort((function(){return Math.random()-.5}))})})),r.a.createElement(ne,{value:100,flip:t.flip})),r.a.createElement(P,null))))}))}var ie=n(329),ce=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{style:{width:"100%",height:"90vh",textAlign:"center",alignItems:"center"}},r.a.createElement("h1",null," 404"),r.a.createElement("p",null,r.a.createElement("b",null,"Message:")," Page not found"),r.a.createElement(ie.a,{variant:"outlined"},r.a.createElement("a",{style:{textDecoration:"none",color:"#4f4f4f"},className:"btn",href:"/"},"Home")))}}]),n}(r.a.Component),le=n(328),se=n(343),ue=n(321),he=n(7),de=n(46),pe=n(243),fe=n.n(pe),me=n(344),ge=n(347),ye=Object(v.a)((function(e){var t;return{grow:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},middle:{margin:"auto",maxWidth:300,width:"100%",display:"flex",alignItems:"center",justifyContent:"center"},title:Object(R.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(R.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(he.d)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(he.d)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"white"},inputInput:(t={color:"primary",position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(he.d)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(he.d)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0},Object(R.a)(t,e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),Object(R.a)(t,"padding",e.spacing(1,1,1,0)),Object(R.a)(t,"paddingLeft","calc(1em + ".concat(e.spacing(4),"px)")),Object(R.a)(t,"transition",e.transitions.create("width")),Object(R.a)(t,"width","100%"),Object(R.a)(t,e.breakpoints.up("md"),{width:"20ch"}),t)}}));function ve(e){var t=ye();return r.a.createElement(m.Consumer,null,(function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:t.middle},r.a.createElement(ge.a,{className:t.middle,freeSolo:!0,id:"free-solo-2-demo",disableClearable:!0,options:e.search.sort((function(){return Math.random()-.5})).map((function(e){return e.headline||e[0].headline})),renderInput:function(t){return r.a.createElement(me.a,Object.assign({onSelect:function(t){if(""!==t.target.value){var n=e.search.filter((function(e){return e.headline===t.target.value}));void 0!==n[0]&&(window.location="".concat(n[0].url))}},autoFocus:!0},t,{label:"Search",margin:"normal",variant:"outlined",InputProps:Object(d.a)(Object(d.a)({},t.InputProps),{},{type:"search"})}))}})))}))}function be(){var e=r.a.useState({left:!1}),t=Object(C.a)(e,2),n=t[0],a=t[1],o=function(e,t){return function(r){("keydown"!==r.type||"Tab"!==r.key&&"Shift"!==r.key)&&a(Object(d.a)(Object(d.a)({},n),{},Object(R.a)({},e,t)))}};return r.a.createElement("div",null,r.a.createElement(r.a.Fragment,{key:"top"},r.a.createElement(fe.a,{onClick:o("top",!0)}),r.a.createElement(de.a,{anchor:"top",open:n.top,onClose:o("top",!1)},r.a.createElement(ve,{changes:o}))))}var Ee=n(241),we=n(342),xe=n(244),je=n.n(xe),ke=n(246),Oe=n(332),Le=n(334),Ce=n(335),_e=n(336),Ie=n(337);function Se(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Oe.a,{open:e.open,"aria-labelledby":"scroll-dialog-title","aria-describedby":"scroll-dialog-description"},r.a.createElement(Ie.a,{id:"scroll-dialog-title"},e.title),r.a.createElement(Ce.a,{dividers:"paper"===e.scroll},r.a.createElement(_e.a,{id:"scroll-dialog-description",ref:e.descriptionElementRef,tabIndex:-1},Object(ke.a)(new Array(24)).map((function(){return"Cras mattis consectetur purus sit amet fermentum.\n                Cras justo odio, dapibus ac facilisis in, egestas eget quam.\n                Morbi leo risus, porta ac consectetur ac, vestibulum at eros.\n                Praesent commodo cursus magna, vel scelerisque nisl consectetur et."})).join("\n"))),r.a.createElement(Le.a,null,r.a.createElement(ie.a,{onClick:e.handleClose,color:"primary"},"Cancel"))))}function Ne(){var e=r.a.useState(null),t=Object(C.a)(e,2),n=t[0],a=t[1],o=r.a.useState(!1),i=Object(C.a)(o,2),c=i[0],l=i[1],s=r.a.useState("paper"),u=Object(C.a)(s,2),h=u[0],d=u[1],p=function(e){return function(){l(!0),d(e)}},f=function(){l(!1),a(null)},m=r.a.useRef(null);return r.a.useEffect((function(){if(c){var e=m.current;null!==e&&e.focus()}}),[c]),r.a.createElement("div",null,r.a.createElement(je.a,{"aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){a(e.currentTarget)}}),r.a.createElement(Ee.a,{id:"simple-menu",anchorEl:n,keepMounted:!0,open:Boolean(n),onClose:f},r.a.createElement(we.a,{onClick:f},"Profile"),r.a.createElement(we.a,{onClick:f},"My account"),r.a.createElement(we.a,{onClick:f},"Report a bug"),r.a.createElement(we.a,{onClick:p("paper")},"About this App"),r.a.createElement(Se,{title:"About",handleClose:f,scroll:h,open:c,descriptionElementRef:m}),r.a.createElement(we.a,{onClick:p("paper")},"Legal"),r.a.createElement(Se,{title:"Legal",handleClose:f,scroll:h,open:c,descriptionElementRef:m})))}var Pe=n(2),Re=n(301),We=n(338),Fe=n(302),Ge=n(340),Te=n(339),De=n(245),Me=n.n(De),Be=Object(v.a)((function(e){return{list:{width:250},fullList:{width:"auto"},title:Object(R.a)({color:"#3f51b5",flexGrow:1},e.breakpoints.up("sm"),{display:"block"})}}));function Ae(){var e,t=Be(),n=r.a.useState({left:!1}),a=Object(C.a)(n,2),o=a[0],i=a[1],c=[{text:"politics",key:"Inbox"},{text:"africa",key:"Draft"},{text:"tech",key:"Send email"},{text:"lifestyle",key:"Drafts"},{text:"business",key:"Inbox"},{text:"politics",key:"All mail"}],l=function(e,t){return function(n){("keydown"!==n.type||"Tab"!==n.key&&"Shift"!==n.key)&&i(Object(d.a)(Object(d.a)({},o),{},Object(R.a)({},e,t)))}};return r.a.createElement("div",null,r.a.createElement(r.a.Fragment,{key:"left"},r.a.createElement(Me.a,{onClick:l("left",!0)}),r.a.createElement(de.a,{component:"div",anchor:"left",open:o.left,onClose:l("left",!1)},(e="left",r.a.createElement("div",{key:"".concat(1e3*Math.random()),className:Object(Pe.a)(t.list),role:"presentation",onClick:l(e,!1),onKeyDown:l(e,!1)},r.a.createElement(Re.a,null,r.a.createElement(Fe.a,{key:"".concat(1e3*Math.random()),button:!0},r.a.createElement(D.a,{className:t.title,variant:"inherit",noWrap:!0},r.a.createElement(H.a,{href:"/"},r.a.createElement("img",{style:{alignItems:"centre",objectFit:"contain"},src:"https://raw.githubusercontent.com/makhosi6/my_projects_links/master/blue_logo.svg",alt:"logo",width:"100",height:"30",sizes:"",srcSet:"//raw.githubusercontent.com/makhosi6/my_projects_links/master/blue_logo.svg"})))),r.a.createElement(We.a,null),c.map((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(H.a,{href:e.text},r.a.createElement(Fe.a,{button:!0,key:"".concat(1e3*Math.random()).concat(e.key)},r.a.createElement(Te.a,null),r.a.createElement(Ge.a,{className:"caps",primary:e.text})),r.a.createElement(We.a,null)," "))})),r.a.createElement(We.a,null)))))))}var He=Object(v.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(R.a)({flexGrow:1},e.breakpoints.up("sm"),{display:"block"}),search:Object(R.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(he.d)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(he.d)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(R.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}}));function qe(){var e=He();return r.a.createElement(le.a,{id:"nav",style:{zIndex:"100"},className:e.root,position:"sticky"},r.a.createElement(se.a,null,r.a.createElement(ue.a,{"aria-label":"search",color:"inherit"},r.a.createElement(Ae,{p:2})),r.a.createElement(D.a,{className:e.title,variant:"inherit",noWrap:!0},r.a.createElement(H.a,{href:"/"},r.a.createElement("img",{style:{alignItems:"centre"},src:"https://raw.githubusercontent.com/makhosi6/my_projects_links/master/white_logo.svg",alt:"logo",width:"100",height:"30",sizes:"",srcSet:"//raw.githubusercontent.com/makhosi6/my_projects_links/master/white_logo.svg"}))),r.a.createElement(ue.a,{"aria-label":"search",color:"inherit"},r.a.createElement(be,null)),r.a.createElement(ue.a,{"aria-label":"search",color:"inherit"},r.a.createElement(Ne,null))))}var Ye=n(20),Je=(a.Component,function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={error:""},e}return Object(l.a)(n,[{key:"componentDidCatch",value:function(e,t){console.log({error:e}),this.setState({hasError:!0}),this.setState({error:e.message})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("div",{style:{border:"2px solid #a7a7a71c",width:"100%",textAlign:"center",alignItems:"center",height:"100vh"}},r.a.createElement("h1",null," Error Occurred! "),r.a.createElement("p",null,r.a.createElement("b",null,"Message:")," ",this.state.error),r.a.createElement(ie.a,{variant:"outlined"},r.a.createElement("a",{style:{textDecoration:"none",color:"#4f4f4f"},className:"btn",href:"/"},"Refresh"))):r.a.createElement(r.a.Fragment,null,r.a.createElement(qe,null),r.a.createElement(Ye.c,null,r.a.createElement(Ye.a,{exact:!0,path:"/",component:oe}),r.a.createElement(Ye.a,{path:"/:slug",component:oe}),r.a.createElement(Ye.a,{path:"/:slug/:name",component:ce})))}}]),n}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ve=n(172);i.a.render(r.a.createElement(g,null,r.a.createElement(Ve.a,null,r.a.createElement(Je,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[261,1,2]]]);
//# sourceMappingURL=main.15e3262a.chunk.js.map