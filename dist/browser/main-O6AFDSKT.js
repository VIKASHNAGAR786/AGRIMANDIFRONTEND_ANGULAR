import{a as $c,b as ei,c as ti,d as ni,e as ii,f as ri,g as si,h as Zs,i as Js,j as Ks,k as js,l as Qc,m as oi,n as wn,o as eu,p as Qs}from"./chunk-KACG5R46.js";import{a as tu}from"./chunk-SREA6HLG.js";import{$ as ji,B as bn,Ba as er,C as Ws,Ca as tr,D as kc,Da as Sn,E as zc,Ea as $n,F as Vc,G as ee,Ha as kt,I as it,Ia as Wt,J as Tt,La as qs,Ma as Wc,N as bt,Na as Xc,Oa as qc,Pa as Yc,Q as tt,Qa as Ys,S as A,Sa as Zc,T as C,Ta as Qn,U as ot,Ua as Jc,V as Ci,Va as Kc,W as Ri,Wa as jc,X as Bt,Xa as nr,Y as _t,Ya as $s,Z as Je,_ as zr,a as kr,aa as $i,b as ks,ba as Qi,c as hd,ca as Vr,d as dd,da as F,e as zs,ea as pn,fa as Lt,g as Vs,ga as Xs,ia as Ue,ja as Ne,ka as Oe,l as Hs,ma as mn,na as Dt,oa as Hc,p as jn,pa as ol,s as Gs,t as Oc,ua as Hr,v as Le,va as Gc,w as De,y as Bc}from"./chunk-6W7SYUOL.js";var su=hd((Wr,ll)=>{"use strict";(function(i,e){typeof Wr=="object"&&typeof ll=="object"?ll.exports=e():typeof define=="function"&&define.amd?define([],e):typeof Wr=="object"?Wr.AOS=e():i.AOS=e()})(Wr,function(){return function(i){function e(n){if(t[n])return t[n].exports;var r=t[n]={exports:{},id:n,loaded:!1};return i[n].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var t={};return e.m=i,e.c=t,e.p="dist/",e(0)}([function(i,e,t){"use strict";function n(z){return z&&z.__esModule?z:{default:z}}var r=Object.assign||function(z){for(var V=1;V<arguments.length;V++){var j=arguments[V];for(var K in j)Object.prototype.hasOwnProperty.call(j,K)&&(z[K]=j[K])}return z},s=t(1),o=(n(s),t(6)),a=n(o),l=t(7),c=n(l),u=t(8),h=n(u),f=t(9),p=n(f),g=t(10),v=n(g),m=t(11),d=n(m),T=t(14),E=n(T),y=[],L=!1,P={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},I=function(){var z=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if(z&&(L=!0),L)return y=(0,d.default)(y,P),(0,v.default)(y,P.once),y},U=function(){y=(0,E.default)(),I()},b=function(){y.forEach(function(z,V){z.node.removeAttribute("data-aos"),z.node.removeAttribute("data-aos-easing"),z.node.removeAttribute("data-aos-duration"),z.node.removeAttribute("data-aos-delay")})},_=function(z){return z===!0||z==="mobile"&&p.default.mobile()||z==="phone"&&p.default.phone()||z==="tablet"&&p.default.tablet()||typeof z=="function"&&z()===!0},R=function(z){P=r(P,z),y=(0,E.default)();var V=document.all&&!window.atob;return _(P.disable)||V?b():(P.disableMutationObserver||h.default.isSupported()||(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),P.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",P.easing),document.querySelector("body").setAttribute("data-aos-duration",P.duration),document.querySelector("body").setAttribute("data-aos-delay",P.delay),P.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1?I(!0):P.startEvent==="load"?window.addEventListener(P.startEvent,function(){I(!0)}):document.addEventListener(P.startEvent,function(){I(!0)}),window.addEventListener("resize",(0,c.default)(I,P.debounceDelay,!0)),window.addEventListener("orientationchange",(0,c.default)(I,P.debounceDelay,!0)),window.addEventListener("scroll",(0,a.default)(function(){(0,v.default)(y,P.once)},P.throttleDelay)),P.disableMutationObserver||h.default.ready("[data-aos]",U),y)};i.exports={init:R,refresh:I,refreshHard:U}},function(i,e){},,,,,function(i,e){(function(t){"use strict";function n(_,R,z){function V(Te){var Pe=Fe,S=Xe;return Fe=Xe=void 0,Ae=Te,ie=_.apply(S,Pe)}function j(Te){return Ae=Te,ue=setTimeout($,R),Ve?V(Te):ie}function K(Te){var Pe=Te-ce,S=Te-Ae,he=R-Pe;return Ce?U(he,q-S):he}function J(Te){var Pe=Te-ce,S=Te-Ae;return ce===void 0||Pe>=R||Pe<0||Ce&&S>=q}function $(){var Te=b();return J(Te)?W(Te):void(ue=setTimeout($,K(Te)))}function W(Te){return ue=void 0,We&&Fe?V(Te):(Fe=Xe=void 0,ie)}function de(){ue!==void 0&&clearTimeout(ue),Ae=0,Fe=ce=Xe=ue=void 0}function me(){return ue===void 0?ie:W(b())}function _e(){var Te=b(),Pe=J(Te);if(Fe=arguments,Xe=this,ce=Te,Pe){if(ue===void 0)return j(ce);if(Ce)return ue=setTimeout($,R),V(ce)}return ue===void 0&&(ue=setTimeout($,R)),ie}var Fe,Xe,q,ie,ue,ce,Ae=0,Ve=!1,Ce=!1,We=!0;if(typeof _!="function")throw new TypeError(u);return R=l(R)||0,s(z)&&(Ve=!!z.leading,Ce="maxWait"in z,q=Ce?I(l(z.maxWait)||0,R):q,We="trailing"in z?!!z.trailing:We),_e.cancel=de,_e.flush=me,_e}function r(_,R,z){var V=!0,j=!0;if(typeof _!="function")throw new TypeError(u);return s(z)&&(V="leading"in z?!!z.leading:V,j="trailing"in z?!!z.trailing:j),n(_,R,{leading:V,maxWait:R,trailing:j})}function s(_){var R=typeof _>"u"?"undefined":c(_);return!!_&&(R=="object"||R=="function")}function o(_){return!!_&&(typeof _>"u"?"undefined":c(_))=="object"}function a(_){return(typeof _>"u"?"undefined":c(_))=="symbol"||o(_)&&P.call(_)==f}function l(_){if(typeof _=="number")return _;if(a(_))return h;if(s(_)){var R=typeof _.valueOf=="function"?_.valueOf():_;_=s(R)?R+"":R}if(typeof _!="string")return _===0?_:+_;_=_.replace(p,"");var z=v.test(_);return z||m.test(_)?d(_.slice(2),z?2:8):g.test(_)?h:+_}var c=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(_){return typeof _}:function(_){return _&&typeof Symbol=="function"&&_.constructor===Symbol&&_!==Symbol.prototype?"symbol":typeof _},u="Expected a function",h=NaN,f="[object Symbol]",p=/^\s+|\s+$/g,g=/^[-+]0x[0-9a-f]+$/i,v=/^0b[01]+$/i,m=/^0o[0-7]+$/i,d=parseInt,T=(typeof t>"u"?"undefined":c(t))=="object"&&t&&t.Object===Object&&t,E=(typeof self>"u"?"undefined":c(self))=="object"&&self&&self.Object===Object&&self,y=T||E||Function("return this")(),L=Object.prototype,P=L.toString,I=Math.max,U=Math.min,b=function(){return y.Date.now()};i.exports=r}).call(e,function(){return this}())},function(i,e){(function(t){"use strict";function n(b,_,R){function z(We){var Te=_e,Pe=Fe;return _e=Fe=void 0,ce=We,q=b.apply(Pe,Te)}function V(We){return ce=We,ie=setTimeout(J,_),Ae?z(We):q}function j(We){var Te=We-ue,Pe=We-ce,S=_-Te;return Ve?I(S,Xe-Pe):S}function K(We){var Te=We-ue,Pe=We-ce;return ue===void 0||Te>=_||Te<0||Ve&&Pe>=Xe}function J(){var We=U();return K(We)?$(We):void(ie=setTimeout(J,j(We)))}function $(We){return ie=void 0,Ce&&_e?z(We):(_e=Fe=void 0,q)}function W(){ie!==void 0&&clearTimeout(ie),ce=0,_e=ue=Fe=ie=void 0}function de(){return ie===void 0?q:$(U())}function me(){var We=U(),Te=K(We);if(_e=arguments,Fe=this,ue=We,Te){if(ie===void 0)return V(ue);if(Ve)return ie=setTimeout(J,_),z(ue)}return ie===void 0&&(ie=setTimeout(J,_)),q}var _e,Fe,Xe,q,ie,ue,ce=0,Ae=!1,Ve=!1,Ce=!0;if(typeof b!="function")throw new TypeError(c);return _=a(_)||0,r(R)&&(Ae=!!R.leading,Ve="maxWait"in R,Xe=Ve?P(a(R.maxWait)||0,_):Xe,Ce="trailing"in R?!!R.trailing:Ce),me.cancel=W,me.flush=de,me}function r(b){var _=typeof b>"u"?"undefined":l(b);return!!b&&(_=="object"||_=="function")}function s(b){return!!b&&(typeof b>"u"?"undefined":l(b))=="object"}function o(b){return(typeof b>"u"?"undefined":l(b))=="symbol"||s(b)&&L.call(b)==h}function a(b){if(typeof b=="number")return b;if(o(b))return u;if(r(b)){var _=typeof b.valueOf=="function"?b.valueOf():b;b=r(_)?_+"":_}if(typeof b!="string")return b===0?b:+b;b=b.replace(f,"");var R=g.test(b);return R||v.test(b)?m(b.slice(2),R?2:8):p.test(b)?u:+b}var l=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(b){return typeof b}:function(b){return b&&typeof Symbol=="function"&&b.constructor===Symbol&&b!==Symbol.prototype?"symbol":typeof b},c="Expected a function",u=NaN,h="[object Symbol]",f=/^\s+|\s+$/g,p=/^[-+]0x[0-9a-f]+$/i,g=/^0b[01]+$/i,v=/^0o[0-7]+$/i,m=parseInt,d=(typeof t>"u"?"undefined":l(t))=="object"&&t&&t.Object===Object&&t,T=(typeof self>"u"?"undefined":l(self))=="object"&&self&&self.Object===Object&&self,E=d||T||Function("return this")(),y=Object.prototype,L=y.toString,P=Math.max,I=Math.min,U=function(){return E.Date.now()};i.exports=n}).call(e,function(){return this}())},function(i,e){"use strict";function t(l){var c=void 0,u=void 0,h=void 0;for(c=0;c<l.length;c+=1)if(u=l[c],u.dataset&&u.dataset.aos||(h=u.children&&t(u.children)))return!0;return!1}function n(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function r(){return!!n()}function s(l,c){var u=window.document,h=n(),f=new h(o);a=c,f.observe(u.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function o(l){l&&l.forEach(function(c){var u=Array.prototype.slice.call(c.addedNodes),h=Array.prototype.slice.call(c.removedNodes),f=u.concat(h);if(t(f))return a()})}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){};e.default={isSupported:r,ready:s}},function(i,e){"use strict";function t(u,h){if(!(u instanceof h))throw new TypeError("Cannot call a class as a function")}function n(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function u(h,f){for(var p=0;p<f.length;p++){var g=f[p];g.enumerable=g.enumerable||!1,g.configurable=!0,"value"in g&&(g.writable=!0),Object.defineProperty(h,g.key,g)}}return function(h,f,p){return f&&u(h.prototype,f),p&&u(h,p),h}}(),s=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,o=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,a=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,l=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,c=function(){function u(){t(this,u)}return r(u,[{key:"phone",value:function(){var h=n();return!(!s.test(h)&&!o.test(h.substr(0,4)))}},{key:"mobile",value:function(){var h=n();return!(!a.test(h)&&!l.test(h.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),u}();e.default=new c},function(i,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=function(r,s,o){var a=r.node.getAttribute("data-aos-once");s>r.position?r.node.classList.add("aos-animate"):typeof a<"u"&&(a==="false"||!o&&a!=="true")&&r.node.classList.remove("aos-animate")},n=function(r,s){var o=window.pageYOffset,a=window.innerHeight;r.forEach(function(l,c){t(l,a+o,s)})};e.default=n},function(i,e,t){"use strict";function n(a){return a&&a.__esModule?a:{default:a}}Object.defineProperty(e,"__esModule",{value:!0});var r=t(12),s=n(r),o=function(a,l){return a.forEach(function(c,u){c.node.classList.add("aos-init"),c.position=(0,s.default)(c.node,l.offset)}),a};e.default=o},function(i,e,t){"use strict";function n(a){return a&&a.__esModule?a:{default:a}}Object.defineProperty(e,"__esModule",{value:!0});var r=t(13),s=n(r),o=function(a,l){var c=0,u=0,h=window.innerHeight,f={offset:a.getAttribute("data-aos-offset"),anchor:a.getAttribute("data-aos-anchor"),anchorPlacement:a.getAttribute("data-aos-anchor-placement")};switch(f.offset&&!isNaN(f.offset)&&(u=parseInt(f.offset)),f.anchor&&document.querySelectorAll(f.anchor)&&(a=document.querySelectorAll(f.anchor)[0]),c=(0,s.default)(a).top,f.anchorPlacement){case"top-bottom":break;case"center-bottom":c+=a.offsetHeight/2;break;case"bottom-bottom":c+=a.offsetHeight;break;case"top-center":c+=h/2;break;case"bottom-center":c+=h/2+a.offsetHeight;break;case"center-center":c+=h/2+a.offsetHeight/2;break;case"top-top":c+=h;break;case"bottom-top":c+=a.offsetHeight+h;break;case"center-top":c+=a.offsetHeight/2+h}return f.anchorPlacement||f.offset||isNaN(l)||(u=l),c+u};e.default=o},function(i,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=function(n){for(var r=0,s=0;n&&!isNaN(n.offsetLeft)&&!isNaN(n.offsetTop);)r+=n.offsetLeft-(n.tagName!="BODY"?n.scrollLeft:0),s+=n.offsetTop-(n.tagName!="BODY"?n.scrollTop:0),n=n.offsetParent;return{top:s,left:r}};e.default=t},function(i,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=function(n){return n=n||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(n,function(r){return{node:r}})};e.default=t}])})});var eo=class i{constructor(e){this.http=e}apiUrl=$s.AccountApiUrl+"Register/Register";Register(e){return this.http.post(this.apiUrl,e)}static \u0275fac=function(t){return new(t||i)(Gs(qs))};static \u0275prov=jn({token:i,factory:i.\u0275fac,providedIn:"root"})};var on=class i{alertSubject=new Vs({message:"",type:null});alert$=this.alertSubject.asObservable();showAlert(e,t){console.log("\u{1F534} Emitting alert:",{message:e,type:t}),this.alertSubject.next({message:e,type:t}),setTimeout(()=>{console.log("\u{1F7E2} Hiding alert"),this.alertSubject.next({message:"",type:null})},3e3)}handleBackendResponse(e){e.success?this.showAlert(e.message,"success"):this.showAlert(e.message||"Something went wrong!","error")}static \u0275fac=function(t){return new(t||i)};static \u0275prov=jn({token:i,factory:i.\u0275fac,providedIn:"root"})};function md(i,e){if(i&1){let t=Bt();A(0,"div",3)(1,"label",4),F(2,"Company Name"),C(),A(3,"input",17),Oe("ngModelChange",function(r){Le(t);let s=Je();return Ne(s.farmer.companyName,r)||(s.farmer.companyName=r),De(r)}),C()()}if(i&2){let t=Je();ee(3),Ue("ngModel",t.farmer.companyName)}}function gd(i,e){if(i&1){let t=Bt();A(0,"div",3)(1,"label",4),F(2,"Company Type"),C(),A(3,"input",18),Oe("ngModelChange",function(r){Le(t);let s=Je();return Ne(s.farmer.companyType,r)||(s.farmer.companyType=r),De(r)}),C()()}if(i&2){let t=Je();ee(3),Ue("ngModel",t.farmer.companyType)}}var to=class i{constructor(e,t){this.farmerService=e;this.alertService=t}farmer={name:"",userName:"",password:"",role:"",email:"",companyName:"",companyType:""};signup(){this.farmerService.Register(this.farmer).subscribe(e=>{console.log("\u2705 Farmer registered:",e),this.alertService.showAlert("Signup successful!","success")},e=>{console.error("\u274C Signup failed:",e),this.alertService.showAlert("Signup failed! Please try again.","error")})}field=[{label:"Name",name:"name",type:"text"},{label:"User Name",name:"userName",type:"text"},{label:"Password",name:"password",type:"text"},{label:"Role",name:"Role",type:"text"},{label:"Email",name:"email",type:"email"},{label:"Company Name",name:"companyName",type:"text"},{label:"Company Type",name:"companyType",type:"text"}];testSuccess(){this.alertService.showAlert("Test success alert!","success")}testError(){this.alertService.showAlert("Test error alert!","error")}static \u0275fac=function(t){return new(t||i)(it(eo),it(on))};static \u0275cmp=Tt({type:i,selectors:[["app-signup"]],decls:36,vars:7,consts:[[1,"container","bg-white","p-4","p-md-5","rounded-4","shadow-lg","mt-4",3,"ngSubmit"],[1,"text-center","text-success","fw-bold","mb-4"],[1,"row","g-4"],[1,"col-md-6"],[1,"form-label","fw-semibold"],["type","text","name","name","required","","placeholder","Enter your name",1,"form-control","shadow-sm",3,"ngModelChange","ngModel"],["type","email","name","email","required","","placeholder","Enter your email",1,"form-control","shadow-sm",3,"ngModelChange","ngModel"],["type","text","name","userName","required","","placeholder","Choose a username",1,"form-control","shadow-sm",3,"ngModelChange","ngModel"],["name","role","required","",1,"form-select","shadow-sm",3,"ngModelChange","ngModel"],["value",""],["value","Farmer"],["value","Buyer"],["type","password","name","password","required","","placeholder","Enter a strong password",1,"form-control","shadow-sm",3,"ngModelChange","ngModel"],["class","col-md-6",4,"ngIf"],[1,"text-center","mt-4"],["type","submit",1,"btn","btn-success","btn-lg","px-5","shadow-sm"],[1,"bi","bi-person-plus","me-2"],["type","text","name","companyName","placeholder","Company Name",1,"form-control","shadow-sm",3,"ngModelChange","ngModel"],["type","text","name","companyType","placeholder","e.g., Agro Supplier, Exporter",1,"form-control","shadow-sm",3,"ngModelChange","ngModel"]],template:function(t,n){t&1&&(A(0,"form",0),_t("ngSubmit",function(){return n.signup()}),A(1,"h2",1),F(2,"Farmer Registration"),C(),A(3,"div",2)(4,"div",3)(5,"label",4),F(6,"Name"),C(),A(7,"input",5),Oe("ngModelChange",function(s){return Ne(n.farmer.name,s)||(n.farmer.name=s),s}),C()(),A(8,"div",3)(9,"label",4),F(10,"Email"),C(),A(11,"input",6),Oe("ngModelChange",function(s){return Ne(n.farmer.email,s)||(n.farmer.email=s),s}),C()(),A(12,"div",3)(13,"label",4),F(14,"User Name"),C(),A(15,"input",7),Oe("ngModelChange",function(s){return Ne(n.farmer.userName,s)||(n.farmer.userName=s),s}),C()(),A(16,"div",3)(17,"label",4),F(18,"Role"),C(),A(19,"select",8),Oe("ngModelChange",function(s){return Ne(n.farmer.role,s)||(n.farmer.role=s),s}),A(20,"option",9),F(21,"-- Select Role --"),C(),A(22,"option",10),F(23,"Farmer"),C(),A(24,"option",11),F(25,"Buyer"),C()()(),A(26,"div",3)(27,"label",4),F(28,"Password"),C(),A(29,"input",12),Oe("ngModelChange",function(s){return Ne(n.farmer.password,s)||(n.farmer.password=s),s}),C()(),bt(30,md,4,1,"div",13)(31,gd,4,1,"div",13),C(),A(32,"div",14)(33,"button",15),ot(34,"i",16),F(35," Sign Up "),C()()()),t&2&&(ee(7),Ue("ngModel",n.farmer.name),ee(4),Ue("ngModel",n.farmer.email),ee(4),Ue("ngModel",n.farmer.userName),ee(4),Ue("ngModel",n.farmer.role),ee(10),Ue("ngModel",n.farmer.password),ee(),tt("ngIf",n.farmer.role==="Buyer"),ee(),tt("ngIf",n.farmer.role==="Buyer"))},dependencies:[wn,si,Ks,js,ei,Js,ti,ni,oi,ri,ii,kt,Sn],styles:["form[_ngcontent-%COMP%]{max-width:600px;margin:30px auto;padding:30px;background:#fffffff2;border-radius:16px;box-shadow:0 8px 20px #00000026;display:flex;flex-direction:column;gap:16px;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif;transition:all .3s ease}label[_ngcontent-%COMP%]{font-weight:600;margin-bottom:5px;color:#333;font-size:15px}input[_ngcontent-%COMP%], select[_ngcontent-%COMP%]{width:100%;padding:12px 14px;margin-top:2px;border:1px solid #ccc;border-radius:8px;font-size:16px;transition:border-color .2s,box-shadow .2s;background-color:#fff}input[_ngcontent-%COMP%]:focus, select[_ngcontent-%COMP%]:focus{outline:none;border-color:#28a745;box-shadow:0 0 0 3px #28a74533}button[_ngcontent-%COMP%]{margin-top:20px;padding:12px;background:#28a745;color:#fff;border:none;border-radius:8px;cursor:pointer;font-size:18px;font-weight:600;transition:background .3s,transform .2s}button[_ngcontent-%COMP%]:hover{background:#218838;transform:scale(1.03)}button[_ngcontent-%COMP%]:active{transform:scale(.97)}@media (max-width: 600px){form[_ngcontent-%COMP%]{max-width:95%;padding:20px}button[_ngcontent-%COMP%]{font-size:16px;padding:10px}}@media (prefers-color-scheme: dark){form[_ngcontent-%COMP%]{background:#1e1e1ef2;color:#f1f1f1}input[_ngcontent-%COMP%], select[_ngcontent-%COMP%]{background-color:#444;color:#f1f1f1;border-color:#555}input[_ngcontent-%COMP%]:focus, select[_ngcontent-%COMP%]:focus{border-color:#28a745;box-shadow:0 0 0 3px #28a7454d}button[_ngcontent-%COMP%]{background-color:#28a745}button[_ngcontent-%COMP%]:hover{background-color:#218838}}"]})};function _d(i,e){if(i&1&&(A(0,"div",1),F(1),C()),i&2){let t=Je();tt("ngClass",t.alertData.type),ee(),Lt(" ",t.alertData.message," ")}}var ir=class i{constructor(e){this.alertService=e;this.alertService.alert$.subscribe(t=>{console.log("\u{1F7E1} Alert received:",t),this.alertData=t})}alertData={message:"",type:"success"};static \u0275fac=function(t){return new(t||i)(it(on))};static \u0275cmp=Tt({type:i,selectors:[["app-alert"]],decls:1,vars:1,consts:[["class","alert",3,"ngClass",4,"ngIf"],[1,"alert",3,"ngClass"]],template:function(t,n){t&1&&bt(0,_d,2,2,"div",0),t&2&&tt("ngIf",n.alertData.message)},dependencies:[kt,er,Sn],styles:[".alert[_ngcontent-%COMP%]{position:fixed;bottom:20px;right:20px;padding:12px 16px;border-radius:6px;font-size:16px;color:#fff;z-index:1000;animation:_ngcontent-%COMP%_fadeInOut 3s ease-in-out;min-width:250px;text-align:center;box-shadow:0 4px 6px #0000001a}.success[_ngcontent-%COMP%]{background-color:#28a745}.error[_ngcontent-%COMP%]{background-color:#dc3545}@keyframes _ngcontent-%COMP%_fadeInOut{0%{opacity:0;transform:translateY(20px)}10%{opacity:1;transform:translateY(0)}90%{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(20px)}}"]})};var no=class i{constructor(e){this.http=e}apiUrl=$s.AccountApiUrl+"Login/login";login(e){return this.http.post(this.apiUrl,e)}static \u0275fac=function(t){return new(t||i)(Gs(qs))};static \u0275prov=jn({token:i,factory:i.\u0275fac,providedIn:"root"})};var io=class i{constructor(e,t,n,r){this.loginService=e;this.alertService=t;this.router=n;this.platformId=r}loginData={email:"",password:""};login(){this.loginService.login(this.loginData).subscribe(e=>{console.log("\u2705 Login successful:",e),Wt(this.platformId)&&(localStorage.setItem("auth_token",e.token),localStorage.setItem("user_name",e.name),localStorage.setItem("user_role",e.role),localStorage.setItem("user_email",e.email),localStorage.setItem("nameid",e.id.toString())),this.alertService.showAlert("Login successful!","success"),this.router.navigate(["components/product"])},e=>{console.error("\u274C Login failed:",e),this.alertService.showAlert("Login failed! Please check your credentials.","error")})}testSuccess(){this.alertService.showAlert("Test success alert!","success")}testError(){this.alertService.showAlert("Test error alert!","error")}static \u0275fac=function(t){return new(t||i)(it(no),it(on),it(Qn),it(bn))};static \u0275cmp=Tt({type:i,selectors:[["app-login"]],decls:15,vars:2,consts:[[1,"login-container"],[3,"ngSubmit"],[1,"form-group"],["for","email"],["type","email","id","email","name","email","required","",3,"ngModelChange","ngModel"],["for","password"],["type","password","id","password","name","password","required","",3,"ngModelChange","ngModel"],["type","submit"]],template:function(t,n){t&1&&(A(0,"div",0)(1,"h2"),F(2,"Login"),C(),A(3,"form",1),_t("ngSubmit",function(){return n.login()}),A(4,"div",2)(5,"label",3),F(6,"Email"),C(),A(7,"input",4),Oe("ngModelChange",function(s){return Ne(n.loginData.email,s)||(n.loginData.email=s),s}),C()(),A(8,"div",2)(9,"label",5),F(10,"Password"),C(),A(11,"input",6),Oe("ngModelChange",function(s){return Ne(n.loginData.password,s)||(n.loginData.password=s),s}),C()(),A(12,"button",7),F(13,"Login"),C()(),ot(14,"app-alert"),C()),t&2&&(ee(7),Ue("ngModel",n.loginData.email),ee(4),Ue("ngModel",n.loginData.password))},dependencies:[wn,si,ei,ti,ni,oi,ri,ii,ir],styles:[".login-container[_ngcontent-%COMP%]{max-width:400px;margin:40px auto;padding:20px 30px;border-radius:12px;box-shadow:0 0 15px #0000001a;background-color:#fefefe;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif}h2[_ngcontent-%COMP%]{text-align:center;margin-bottom:25px;color:#333}.form-group[_ngcontent-%COMP%]{margin-bottom:18px}label[_ngcontent-%COMP%]{display:block;margin-bottom:6px;font-weight:600;color:#555}input[type=email][_ngcontent-%COMP%], input[type=password][_ngcontent-%COMP%]{width:100%;padding:10px 12px;font-size:15px;border:1px solid #ccc;border-radius:6px;transition:border .2s}input[_ngcontent-%COMP%]:focus{border-color:#3b82f6;outline:none}button[_ngcontent-%COMP%]{width:100%;padding:10px;background-color:#3b82f6;border:none;color:#fff;font-size:16px;border-radius:6px;cursor:pointer;transition:background-color .2s}button[_ngcontent-%COMP%]:hover{background-color:#2563eb}"]})};var qt=class i{constructor(){}selectedColorSubject=new Vs("#FFFFFF");selectedColor$=this.selectedColorSubject.asObservable();setColor(e){this.selectedColorSubject.next(e)}getColor(){return this.selectedColorSubject.getValue()}static \u0275fac=function(t){return new(t||i)};static \u0275prov=jn({token:i,factory:i.\u0275fac,providedIn:"root"})};var nu=i=>({"background-color":i});function vd(i,e){if(i&1&&(A(0,"div",31),ot(1,"img",32),A(2,"h3"),F(3),C(),A(4,"p"),F(5),C()()),i&2){let t=e.$implicit;ee(),tt("src","images/"+t.image,Ws)("alt",t.title),ee(2),Xs("",t.number,". ",t.title,""),ee(2),pn(t.description)}}function yd(i,e){if(i&1&&(A(0,"div",33)(1,"h3"),F(2),C(),A(3,"p"),F(4),C()()),i&2){let t=e.$implicit;ee(2),pn(t.value),ee(2),pn(t.label)}}function Md(i,e){if(i&1&&(A(0,"div",34),ot(1,"img",35),A(2,"h4"),F(3),C(),A(4,"p"),F(5),C()()),i&2){let t=e.$implicit;ee(),tt("alt",t.title),ee(2),pn(t.title),ee(2),pn(t.description)}}function bd(i,e){if(i&1&&(A(0,"div",36)(1,"h4"),F(2),C(),A(3,"p"),F(4),C()()),i&2){let t=e.$implicit;ee(2),pn(t.question),ee(2),pn(t.answer)}}var so=class i{constructor(e,t){this.router=e;this.colorService=t}selectedColor="";ngOnInit(){this.colorService.selectedColor$.subscribe(e=>{this.selectedColor=e})}goToRegister(){this.router.navigate(["auth/signup"])}steps=[{number:1,title:"Sign Up",description:"Create your free account as a Farmer or Buyer to access the AgriMandi platform.",image:"Register.JPG"},{number:2,title:"List or Browse Products",description:"Farmers can upload product details, while buyers explore available produce in real-time.",image:"list.webp"},{number:3,title:"Connect & Communicate",description:"Initiate direct chat or call between farmers and buyers for negotiation and clarity.",image:"trade.jpeg"},{number:4,title:"Secure Transactions",description:"Finalize deals and complete payments securely through integrated payment gateways.",image:"trade.jpeg"},{number:5,title:"Track & Rate",description:"Track your orders and leave feedback to build a trusted, transparent marketplace.",image:"trade.jpeg"}];impactStats=[{value:"10,000+",label:"Farmers Empowered"},{value:"50,000+",label:"Transactions Completed"},{value:"20+",label:"States Covered"}];blogs=[{id:1,title:"5 Tips for Selling Produce Online",description:"Learn how to optimize your listings and attract more buyers.",image:"blog1.jpg"},{id:2,title:"The Future of Digital Agriculture",description:"Discover how technology is shaping the agricultural industry.",image:"blog2.jpg"}];faqs=[{question:"How do I register?",answer:'Click the "Get Started" button and fill out the registration form to create an account.'},{question:"Is there a fee for using AgriMandi?",answer:"No, registering and using the platform is completely free for both farmers and buyers."},{question:"How are payments handled?",answer:"Payments are securely processed directly between farmers and buyers via integrated payment systems."}];static \u0275fac=function(t){return new(t||i)(it(Qn),it(qt))};static \u0275cmp=Tt({type:i,selectors:[["app-home"]],decls:94,vars:10,consts:[[1,"home-container"],[1,"home-header"],[1,"intro-text"],[1,"highlight"],[1,"features-section"],[1,"features-list"],[1,"features-column"],[1,"feature-item"],["src","images/3.jpg","alt","Direct Market",1,"feature-image"],["src","images/2.jpg","alt","Easy Negotiations",1,"feature-image"],["src","images/6.jpeg","alt","Secure Payments",1,"feature-image"],["src","images/5.jpeg","alt","Global Reach",1,"feature-image"],[1,"how-it-works"],[1,"steps-container"],["class","step",4,"ngFor","ngForOf"],[1,"testimonials-section"],[1,"testimonials-container"],[1,"testimonial"],[1,"impact-section"],[1,"impact-stats"],["class","stat",4,"ngFor","ngForOf"],[1,"blog-section"],[1,"blog-container"],["class","blog-post",4,"ngFor","ngForOf"],[1,"cta-section"],[1,"cta-btn",3,"click","ngStyle"],[1,"faq-section"],[1,"faq-container"],["class","faq-item",4,"ngFor","ngForOf"],[1,"home-footer"],[1,"get-started-btn",3,"click","ngStyle"],[1,"step"],[1,"step-image",3,"src","alt"],[1,"stat"],[1,"blog-post"],["src","images/latest.png",1,"blog-image",3,"alt"],[1,"faq-item"]],template:function(t,n){t&1&&(A(0,"div",0)(1,"header",1)(2,"h1"),F(3,"Welcome to AgriMandi"),C(),A(4,"p",2),F(5," \u{1F331} "),A(6,"strong"),F(7,"AgriMandi"),C(),F(8," is your "),A(9,"span",3),F(10,"gateway"),C(),F(11," to a direct connection between farmers and buyers\u2014bringing fresh produce to your doorstep with just a click. \u{1F69C}\u{1F91D} "),C()(),A(12,"section",4)(13,"h2"),F(14,"Why Choose AgriMandi?"),C(),A(15,"div",5)(16,"div",6)(17,"div",7),ot(18,"img",8),A(19,"p"),F(20,"\u{1F33E} "),A(21,"strong"),F(22,"Direct Market Access:"),C(),F(23," Empowering farmers to showcase their produce directly to buyers."),C()(),A(24,"div",7),ot(25,"img",9),A(26,"p"),F(27,"\u{1F4AC} "),A(28,"strong"),F(29,"Easy Negotiations:"),C(),F(30," Transparent communication between farmers and consumers for better deals."),C()()(),A(31,"div",6)(32,"div",7),ot(33,"img",10),A(34,"p"),F(35,"\u{1F4CA} "),A(36,"strong"),F(37,"Efficient Transactions:"),C(),F(38," Simplified buying and selling process with secure payments."),C()(),A(39,"div",7),ot(40,"img",11),A(41,"p"),F(42,"\u{1F30D} "),A(43,"strong"),F(44,"Broader Reach:"),C(),F(45," Expand your market beyond local boundaries."),C()()()()(),A(46,"section",12)(47,"h2"),F(48,"How It Works"),C(),A(49,"div",13),bt(50,vd,6,5,"div",14),C()(),A(51,"section",15)(52,"h2"),F(53,"What Our Users Say"),C(),A(54,"div",16)(55,"div",17)(56,"p"),F(57,'"AgriMandi has revolutionized the way I sell my produce. The direct connection with buyers has increased my income!"'),C(),A(58,"h4"),F(59,"- Ramesh Kumar, Farmer"),C()(),A(60,"div",17)(61,"p"),F(62,'"Buying fresh produce directly from farmers has never been easier. I love the transparency and quality."'),C(),A(63,"h4"),F(64,"- Anjali Sharma, Buyer"),C()()()(),A(65,"section",18)(66,"h2"),F(67,"Our Impact"),C(),A(68,"div",19),bt(69,yd,5,2,"div",20),C()(),A(70,"section",21)(71,"h2"),F(72,"Latest Insights"),C(),A(73,"div",22),bt(74,Md,6,3,"div",23),C()(),A(75,"section",24)(76,"h2"),F(77,"Ready to Start?"),C(),A(78,"p"),F(79,"Sign up today and experience the benefits of connecting directly with farmers and buyers."),C(),A(80,"button",25),_t("click",function(){return n.goToRegister()}),F(81,"Join Now"),C()(),A(82,"section",26)(83,"h2"),F(84,"Frequently Asked Questions"),C(),A(85,"div",27),bt(86,bd,5,2,"div",28),C()(),A(87,"footer",29)(88,"h2"),F(89,"Join AgriMandi Today!"),C(),A(90,"p"),F(91,"Be part of the revolution in agriculture. Together, we can build a more sustainable and efficient food supply chain."),C(),A(92,"button",30),_t("click",function(){return n.goToRegister()}),F(93,"Get Started"),C()()()),t&2&&(ee(50),tt("ngForOf",n.steps),ee(19),tt("ngForOf",n.impactStats),ee(5),tt("ngForOf",n.blogs),ee(6),tt("ngStyle",Dt(6,nu,n.selectedColor||"#198754")),ee(6),tt("ngForOf",n.faqs),ee(6),tt("ngStyle",Dt(8,nu,n.selectedColor||"#198754")))},dependencies:[kt,tr,$n,nr],styles:["body[_ngcontent-%COMP%]{margin:0;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif;background-color:#f8f9fa;color:#333}.home-container[_ngcontent-%COMP%]{padding:2rem;max-width:1200px;margin:auto}.home-header[_ngcontent-%COMP%]{text-align:center;padding:2rem 1rem;background-color:#e8f5e9;border-radius:12px;margin-bottom:3rem}.home-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:2.8rem;margin-bottom:.5rem;color:#2e7d32}.intro-text[_ngcontent-%COMP%]{font-size:1.2rem;color:#555}.highlight[_ngcontent-%COMP%]{color:#1b5e20;font-weight:700}.features-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .how-it-works[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .testimonials-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .impact-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .blog-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .cta-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .faq-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:2rem;margin-bottom:1rem;text-align:center;color:#388e3c}.features-list[_ngcontent-%COMP%]{display:flex;gap:2rem;flex-wrap:wrap;justify-content:center}.features-column[_ngcontent-%COMP%]{flex:1 1 300px}.feature-item[_ngcontent-%COMP%]{background:#fff;padding:1rem;margin-bottom:1rem;border-radius:10px;box-shadow:0 2px 10px #0000000d;text-align:center}.feature-image[_ngcontent-%COMP%]{width:100%;max-height:180px;object-fit:cover;border-radius:8px;margin-bottom:.5rem}.steps-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:1.5rem;justify-content:center;margin-top:1rem}.step[_ngcontent-%COMP%]{flex:1 1 250px;background-color:#fff;border-radius:10px;padding:1rem;box-shadow:0 2px 8px #0000000d;text-align:center}.step-image[_ngcontent-%COMP%]{width:100%;max-height:150px;object-fit:contain;margin-bottom:1rem}.testimonials-container[_ngcontent-%COMP%]{display:flex;gap:2rem;flex-wrap:wrap;justify-content:center}.testimonial[_ngcontent-%COMP%]{flex:1 1 300px;background-color:#f1f8e9;padding:1.5rem;border-radius:10px;font-style:italic;box-shadow:0 1px 5px #0000001a}.impact-stats[_ngcontent-%COMP%]{display:flex;justify-content:space-around;flex-wrap:wrap;margin-top:2rem}.stat[_ngcontent-%COMP%]{flex:1 1 150px;text-align:center}.stat[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:2rem;color:#43a047}.blog-container[_ngcontent-%COMP%]{display:flex;gap:2rem;flex-wrap:wrap;justify-content:center}.blog-post[_ngcontent-%COMP%]{flex:1 1 300px;background:#fff;padding:1rem;border-radius:10px;box-shadow:0 2px 10px #0000000d}.blog-image[_ngcontent-%COMP%]{width:100%;height:180px;object-fit:cover;border-radius:8px;margin-bottom:1rem;clip-path:ellipse(100% 80% at 50% 20%)}.cta-section[_ngcontent-%COMP%]{text-align:center;background-color:#c8e6c9;padding:2rem 1rem;margin-top:3rem;border-radius:10px}.cta-btn[_ngcontent-%COMP%], .get-started-btn[_ngcontent-%COMP%]{background-color:#2e7d32;color:#fff;padding:.8rem 1.5rem;font-size:1rem;border:none;border-radius:8px;cursor:pointer;transition:background-color .3s ease}.cta-btn[_ngcontent-%COMP%]:hover, .get-started-btn[_ngcontent-%COMP%]:hover{background-color:#1b5e20}.faq-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem;margin-top:1rem}.faq-item[_ngcontent-%COMP%]{background-color:#fff;border-left:5px solid #66bb6a;padding:1rem;border-radius:6px}.home-footer[_ngcontent-%COMP%]{margin-top:4rem;text-align:center;background-color:#a5d6a7;padding:2rem 1rem;border-radius:10px}@media (max-width: 768px){.features-list[_ngcontent-%COMP%], .testimonials-container[_ngcontent-%COMP%], .blog-container[_ngcontent-%COMP%], .impact-stats[_ngcontent-%COMP%], .steps-container[_ngcontent-%COMP%]{flex-direction:column;align-items:center}.home-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:2rem}}"]})};var wd=["productForm"],Ed=()=>["Grains","Fruits","Vegetables","Dairy","Flowers","Spices","Pulses","Oilseeds","Herbs","Others"];function Td(i,e){if(i&1&&(A(0,"option",74),F(1),C()),i&2){let t=e.$implicit;tt("value",t),ee(),Lt(" ",t," ")}}var oo=class i{constructor(e,t){this.ProductService=e;this.alertService=t}productForm;today=new Date().toISOString().split("T")[0];product={name:"",description:"",category:"",type:"",variety:"",grade:"",quantity:0,unit:"",pricePerUnit:0,availability:!0,location:"",harvestDate:"",expiryDate:"",storageCondition:"",packagingType:"",certification:"",imageUrl:"",farmerId:0,status:""};signup(){let e=localStorage.getItem("user_email"),t=localStorage.getItem("user_name");if(!e||!t){this.alertService.showAlert("User information missing in token!","error");return}this.ProductService.getFarmerId(e,t).subscribe(n=>{this.product.farmerId=n,this.ProductService.saveproduct(this.product).subscribe(r=>{console.log("\u2705 Product registered:",r),this.alertService.showAlert("Product Added successfully!","success"),this.productForm.resetForm()},r=>{console.error("\u274C Failed to save product:",r),this.alertService.showAlert("Failed to add product! Please try again.","error")})},n=>{console.error("\u274C Failed to get Farmer ID:",n),this.alertService.showAlert("Could not fetch Farmer ID. Please login again.","error")})}testSuccess(){this.alertService.showAlert("Test success alert!","success")}testError(){this.alertService.showAlert("Test error alert!","error")}static \u0275fac=function(t){return new(t||i)(it(Qs),it(on))};static \u0275cmp=Tt({type:i,selectors:[["app-product"]],viewQuery:function(t,n){if(t&1&&ji(wd,5),t&2){let r;$i(r=Qi())&&(n.productForm=r.first)}},decls:124,vars:22,consts:[["productForm","ngForm"],["href",kc`https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css`,"rel","stylesheet"],[1,"container","py-5"],[1,"card","shadow-lg","border-0","rounded-4"],[1,"card-body","p-5"],[1,"text-center","mb-4","fw-bold","text-success"],[3,"ngSubmit"],[1,"row","g-4"],[1,"col-md-6","form-floating"],["type","text","id","productName","placeholder","Product Name","name","name","required","",1,"form-control",3,"ngModelChange","ngModel"],["for","productName"],["type","text","id","description","placeholder","Description","name","description","required","",1,"form-control",3,"ngModelChange","ngModel"],["for","description"],[1,"col-md-4"],[1,"form-floating"],["id","category","name","category","aria-label","Category","required","",1,"form-select",3,"ngModelChange","ngModel"],["value","","selected",""],[3,"value",4,"ngFor","ngForOf"],["for","category"],[1,"col-md-4","form-floating"],["type","text","id","type","placeholder","Type","name","type","required","",1,"form-control",3,"ngModelChange","ngModel"],["for","type"],["type","text","id","variety","placeholder","Variety","name","variety","required","",1,"form-control",3,"ngModelChange","ngModel"],["for","variety"],["id","grade","name","grade","required","",1,"form-select",3,"ngModelChange","ngModel"],["value","A"],["value","B"],["value","C"],["value","Organic"],["value","Premium"],["value","Standard","selected",""],["for","grade"],[1,"col-md-3","form-floating"],["type","number","id","quantity","placeholder","Quantity","name","quantity","min","0","required","",1,"form-control",3,"ngModelChange","ngModel"],["for","quantity"],["id","unit","name","unit","required","",1,"form-select",3,"ngModelChange","ngModel"],["value","Kg"],["value","Quintal"],["value","Ton"],["value","Liters"],["value","Packets"],["value","Bunch"],["value","Dozen"],["for","unit"],["type","number","id","price","placeholder","Price","name","pricePerUnit","min","0","required","",1,"form-control",3,"ngModelChange","ngModel"],["for","price"],[1,"col-md-6","d-flex","align-items-center","gap-3"],[1,"form-check","form-switch"],["type","checkbox","name","availability","id","availability",1,"form-check-input",3,"ngModelChange","ngModel"],["for","availability",1,"form-check-label"],["type","text","id","location","placeholder","Location","name","location","required","",1,"form-control",3,"ngModelChange","ngModel"],["for","location"],["type","date","id","harvestDate","placeholder","Harvest Date","name","harvestDate","required","",1,"form-control",3,"ngModelChange","ngModel","max"],["for","harvestDate"],["type","date","id","expiryDate","placeholder","Expiry Date","name","expiryDate","required","",1,"form-control",3,"ngModelChange","ngModel","min"],["for","expiryDate"],["type","text","id","storage","placeholder","Storage Condition","name","storageCondition","required","",1,"form-control",3,"ngModelChange","ngModel"],["for","storage"],["type","text","id","packaging","placeholder","Packaging Type","name","packagingType","required","",1,"form-control",3,"ngModelChange","ngModel"],["for","packaging"],["type","text","id","certification","placeholder","Certification","name","certification","required","",1,"form-control",3,"ngModelChange","ngModel"],["for","certification"],["type","url","id","imageUrl","placeholder","Image URL","name","imageUrl","required","",1,"form-control",3,"ngModelChange","ngModel"],["for","imageUrl"],[1,"col-12","form-floating"],["id","status","name","status","required","",1,"form-select",3,"ngModelChange","ngModel"],["value","Available"],["value","Sold"],["value","Pending"],["value","In Transit"],["for","status"],[1,"col-12","text-center","mt-4"],["type","submit",1,"btn","btn-success","px-5","py-2","fs-5","rounded-pill","shadow-sm"],[1,"bi","bi-plus-circle","me-2"],[3,"value"]],template:function(t,n){if(t&1){let r=Bt();ot(0,"link",1),A(1,"div",2)(2,"div",3)(3,"div",4)(4,"h2",5),F(5,"Add New Product"),C(),A(6,"form",6,0),_t("ngSubmit",function(){return Le(r),De(n.signup())}),A(8,"div",7)(9,"div",8)(10,"input",9),Oe("ngModelChange",function(o){return Le(r),Ne(n.product.name,o)||(n.product.name=o),De(o)}),C(),A(11,"label",10),F(12,"Product Name"),C()(),A(13,"div",8)(14,"input",11),Oe("ngModelChange",function(o){return Le(r),Ne(n.product.description,o)||(n.product.description=o),De(o)}),C(),A(15,"label",12),F(16,"Description"),C()(),A(17,"div",13)(18,"div",14)(19,"select",15),Oe("ngModelChange",function(o){return Le(r),Ne(n.product.category,o)||(n.product.category=o),De(o)}),A(20,"option",16),F(21,"Choose category"),C(),bt(22,Td,2,2,"option",17),C(),A(23,"label",18),F(24,"Category"),C()()(),A(25,"div",19)(26,"input",20),Oe("ngModelChange",function(o){return Le(r),Ne(n.product.type,o)||(n.product.type=o),De(o)}),C(),A(27,"label",21),F(28,"Type"),C()(),A(29,"div",19)(30,"input",22),Oe("ngModelChange",function(o){return Le(r),Ne(n.product.variety,o)||(n.product.variety=o),De(o)}),C(),A(31,"label",23),F(32,"Variety"),C()(),A(33,"div",8)(34,"select",24),Oe("ngModelChange",function(o){return Le(r),Ne(n.product.grade,o)||(n.product.grade=o),De(o)}),A(35,"option",25),F(36,"A"),C(),A(37,"option",26),F(38,"B"),C(),A(39,"option",27),F(40,"C"),C(),A(41,"option",28),F(42,"Organic"),C(),A(43,"option",29),F(44,"Premium"),C(),A(45,"option",30),F(46,"Standard"),C()(),A(47,"label",31),F(48,"Grade"),C()(),A(49,"div",32)(50,"input",33),Oe("ngModelChange",function(o){return Le(r),Ne(n.product.quantity,o)||(n.product.quantity=o),De(o)}),C(),A(51,"label",34),F(52,"Quantity"),C()(),A(53,"div",32)(54,"select",35),Oe("ngModelChange",function(o){return Le(r),Ne(n.product.unit,o)||(n.product.unit=o),De(o)}),A(55,"option",36),F(56,"Kg"),C(),A(57,"option",37),F(58,"Quintal"),C(),A(59,"option",38),F(60,"Ton"),C(),A(61,"option",39),F(62,"Liters"),C(),A(63,"option",40),F(64,"Packets"),C(),A(65,"option",41),F(66,"Bunch"),C(),A(67,"option",42),F(68,"Dozen"),C()(),A(69,"label",43),F(70,"Unit"),C()(),A(71,"div",8)(72,"input",44),Oe("ngModelChange",function(o){return Le(r),Ne(n.product.pricePerUnit,o)||(n.product.pricePerUnit=o),De(o)}),C(),A(73,"label",45),F(74,"Price Per Unit (\u20B9)"),C()(),A(75,"div",46)(76,"div",47)(77,"input",48),Oe("ngModelChange",function(o){return Le(r),Ne(n.product.availability,o)||(n.product.availability=o),De(o)}),C(),A(78,"label",49),F(79,"Available for Sale"),C()()(),A(80,"div",8)(81,"input",50),Oe("ngModelChange",function(o){return Le(r),Ne(n.product.location,o)||(n.product.location=o),De(o)}),C(),A(82,"label",51),F(83,"Location"),C()(),A(84,"div",32)(85,"input",52),Oe("ngModelChange",function(o){return Le(r),Ne(n.product.harvestDate,o)||(n.product.harvestDate=o),De(o)}),C(),A(86,"label",53),F(87,"Harvest Date"),C()(),A(88,"div",32)(89,"input",54),Oe("ngModelChange",function(o){return Le(r),Ne(n.product.expiryDate,o)||(n.product.expiryDate=o),De(o)}),C(),A(90,"label",55),F(91,"Expiry Date"),C()(),A(92,"div",8)(93,"input",56),Oe("ngModelChange",function(o){return Le(r),Ne(n.product.storageCondition,o)||(n.product.storageCondition=o),De(o)}),C(),A(94,"label",57),F(95,"Storage Condition"),C()(),A(96,"div",8)(97,"input",58),Oe("ngModelChange",function(o){return Le(r),Ne(n.product.packagingType,o)||(n.product.packagingType=o),De(o)}),C(),A(98,"label",59),F(99,"Packaging Type"),C()(),A(100,"div",8)(101,"input",60),Oe("ngModelChange",function(o){return Le(r),Ne(n.product.certification,o)||(n.product.certification=o),De(o)}),C(),A(102,"label",61),F(103,"Certification"),C()(),A(104,"div",8)(105,"input",62),Oe("ngModelChange",function(o){return Le(r),Ne(n.product.imageUrl,o)||(n.product.imageUrl=o),De(o)}),C(),A(106,"label",63),F(107,"Image URL"),C()(),A(108,"div",64)(109,"select",65),Oe("ngModelChange",function(o){return Le(r),Ne(n.product.status,o)||(n.product.status=o),De(o)}),A(110,"option",66),F(111,"Available"),C(),A(112,"option",67),F(113,"Sold"),C(),A(114,"option",68),F(115,"Pending"),C(),A(116,"option",69),F(117,"In Transit"),C()(),A(118,"label",70),F(119,"Status"),C()(),A(120,"div",71)(121,"button",72),ot(122,"i",73),F(123," Add Product "),C()()()()()()()}t&2&&(ee(10),Ue("ngModel",n.product.name),ee(4),Ue("ngModel",n.product.description),ee(5),Ue("ngModel",n.product.category),ee(3),tt("ngForOf",mn(21,Ed)),ee(4),Ue("ngModel",n.product.type),ee(4),Ue("ngModel",n.product.variety),ee(4),Ue("ngModel",n.product.grade),ee(16),Ue("ngModel",n.product.quantity),ee(4),Ue("ngModel",n.product.unit),ee(18),Ue("ngModel",n.product.pricePerUnit),ee(5),Ue("ngModel",n.product.availability),ee(4),Ue("ngModel",n.product.location),ee(4),zr("max",n.today),Ue("ngModel",n.product.harvestDate),ee(4),zr("min",n.product.harvestDate),Ue("ngModel",n.product.expiryDate),ee(4),Ue("ngModel",n.product.storageCondition),ee(4),Ue("ngModel",n.product.packagingType),ee(4),Ue("ngModel",n.product.certification),ee(4),Ue("ngModel",n.product.imageUrl),ee(4),Ue("ngModel",n.product.status))},dependencies:[wn,si,Ks,js,ei,Zs,$c,Js,ti,ni,oi,Qc,ri,ii,kt,tr],styles:["body[_ngcontent-%COMP%]{background:linear-gradient(135deg,#e9f5e9,#d4edda),url(https://images.unsplash.com/photo-1560807707-8cc77767d783?auto=format&fit=crop&w=1920&q=80) no-repeat center center fixed;background-size:cover;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif;margin:0;padding:0}.card[_ngcontent-%COMP%]{background:#ffffffd9;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);border-radius:2rem;box-shadow:0 10px 30px #0000001a;transition:all .3s ease}.form-control[_ngcontent-%COMP%], .form-select[_ngcontent-%COMP%]{border-radius:1rem;border:1px solid #dee2e6;padding-left:1.25rem;font-size:1rem}.form-floating[_ngcontent-%COMP%] > label[_ngcontent-%COMP%]{padding-left:1.25rem;font-size:.95rem}.btn-success[_ngcontent-%COMP%]{background-color:#28a745;border:none;transition:all .3s ease;font-size:1.1rem}.btn-success[_ngcontent-%COMP%]:hover{background-color:#218838;transform:scale(1.05)}h2[_ngcontent-%COMP%]{text-shadow:1px 1px 2px rgba(0,128,0,.2);font-size:1.75rem}@media (max-width: 768px){.container[_ngcontent-%COMP%]{padding:1rem}.card[_ngcontent-%COMP%]{margin:0 .5rem;border-radius:1.5rem}.card-body[_ngcontent-%COMP%]{padding:1.25rem}.form-control[_ngcontent-%COMP%], .form-select[_ngcontent-%COMP%]{font-size:.95rem;padding:.75rem 1rem}.form-floating[_ngcontent-%COMP%] > label[_ngcontent-%COMP%]{font-size:.85rem}.btn-success[_ngcontent-%COMP%]{width:100%;padding:.75rem;font-size:1rem}h2[_ngcontent-%COMP%]{font-size:1.5rem;margin-bottom:1.5rem}}"]})};var Ad=()=>({label:"Phone Number",name:"phoneNumber",type:"tel"}),Cd=()=>({label:"Address",name:"address"}),Rd=()=>({label:"State",name:"state"}),Pd=()=>({label:"District",name:"district"}),Id=()=>({label:"Village",name:"village"}),Ld=()=>({label:"Postal Code",name:"postalCode"}),Dd=()=>({label:"Land Area (in acres)",name:"landArea",type:"number"}),Fd=()=>({label:"Farming Type",name:"farmingType"}),iu=(i,e,t,n,r,s,o,a)=>[i,e,t,n,r,s,o,a],Ud=i=>({background:i}),Nd=(i,e)=>({"text-success":i,"text-danger":e}),Od=i=>({label:"Phone Number",value:i}),Bd=i=>({label:"Alternate Contact",value:i}),kd=i=>({label:"Address",value:i}),zd=i=>({label:"City",value:i}),Vd=i=>({label:"State",value:i}),Hd=i=>({label:"Pincode",value:i}),Gd=i=>({label:"Land Area",value:i}),Wd=i=>({label:"Farming Type",value:i});function Xd(i,e){if(i&1&&(A(0,"div",32)(1,"div",33)(2,"h5"),F(3),C(),A(4,"p")(5,"strong"),F(6,"Category:"),C(),F(7),C(),A(8,"p")(9,"strong"),F(10,"Grade:"),C(),F(11),C(),A(12,"p")(13,"strong"),F(14,"Quantity:"),C(),F(15),C(),A(16,"p")(17,"strong"),F(18,"Price/Unit:"),C(),F(19),C(),A(20,"p")(21,"strong"),F(22,"Total Price:"),C(),F(23),C(),A(24,"p")(25,"strong"),F(26,"Status:"),C(),F(27),C(),A(28,"p")(29,"strong"),F(30,"Availability:"),C(),A(31,"span",34),F(32),C()()()()),i&2){let t=e.$implicit;ee(3),pn(t.name),ee(4),Lt(" ",t.category,""),ee(4),Lt(" ",t.grade,""),ee(4),Xs(" ",t.quantity," ",t.unit,""),ee(4),Lt(" \u20B9",t.pricePerUnit,""),ee(4),Lt(" \u20B9",t.totalPrice,""),ee(4),Lt(" ",t.status,""),ee(4),tt("ngClass",Hc(10,Nd,t.availability,!t.availability)),ee(),Lt(" ",t.availability?"Available":"Not Available"," ")}}function qd(i,e){if(i&1&&(Ci(0),A(1,"div",30),bt(2,Xd,33,13,"div",31),C(),Ri()),i&2){let t=Je(3);ee(2),tt("ngForOf",t.products1)}}function Yd(i,e){if(i&1&&(A(0,"div",38)(1,"strong"),F(2),C(),F(3),C()),i&2){let t=e.$implicit;ee(2),Lt("",t.label,":"),ee(),Lt(" ",t.value," ")}}function Zd(i,e){if(i&1&&(A(0,"div",35)(1,"h3",20),F(2,"Your Farmer Profile"),C(),A(3,"div",36),bt(4,Yd,4,2,"div",37),C()()),i&2){let t=Je(3);ee(4),tt("ngForOf",ol(17,iu,Dt(1,Od,t.farmerData.phoneNumber),Dt(3,Bd,t.farmerData.phoneNumber),Dt(5,kd,t.farmerData.address),Dt(7,zd,t.farmerData.district),Dt(9,Vd,t.farmerData.state),Dt(11,Hd,t.farmerData.postalCode),Dt(13,Gd,t.farmerData.landArea),Dt(15,Wd,t.farmerData.farmingType)))}}function Jd(i,e){if(i&1){let t=Bt();Ci(0),A(1,"div",38)(2,"label",39),F(3),C(),A(4,"input",40),Oe("ngModelChange",function(r){let s=Le(t).$implicit,o=Je(3);return Ne(o.farmerForm[s.name],r)||(o.farmerForm[s.name]=r),De(r)}),C()(),Ri()}if(i&2){let t=e.$implicit,n=Je(3);ee(3),pn(t.label),ee(),zr("name",t.name),Ue("ngModel",n.farmerForm[t.name]),tt("type",t.type||"text")}}function Kd(i,e){if(i&1){let t=Bt();Ci(0),A(1,"h3",20),F(2,"Your Products"),C(),bt(3,qd,3,1,"ng-container",21)(4,Zd,5,26,"div",22),A(5,"div",23)(6,"h3",24),F(7,"Update Farmer Profile"),C(),A(8,"form",25,2),_t("ngSubmit",function(){Le(t);let r=Je(2);return De(r.submitFarmerForm())}),bt(10,Jd,5,4,"ng-container",26),A(11,"div",27)(12,"button",28),ot(13,"i",29),F(14," Save Profile "),C()()()(),Ri()}if(i&2){Je();let t=Vr(30),n=Je();ee(3),tt("ngIf",n.products1.length>0)("ngIfElse",t),ee(),tt("ngIf",n.farmerData),ee(6),tt("ngForOf",ol(13,iu,mn(5,Ad),mn(6,Cd),mn(7,Rd),mn(8,Pd),mn(9,Id),mn(10,Ld),mn(11,Dd),mn(12,Fd))),ee(2),tt("ngStyle",Dt(22,Ud,n.selectedColor))}}function jd(i,e){if(i&1){let t=Bt();Ci(0),A(1,"h3",20),F(2,"Update Buyer Details"),C(),A(3,"form",41),_t("ngSubmit",function(){Le(t);let r=Je(2);return De(r.submitBuyerForm())}),A(4,"div",38)(5,"label",42),F(6,"Contact Number"),C(),A(7,"input",43),Oe("ngModelChange",function(r){Le(t);let s=Je(2);return Ne(s.buyerForm.contactNumber,r)||(s.buyerForm.contactNumber=r),De(r)}),C()(),A(8,"div",38)(9,"label",42),F(10,"Alternate Contact"),C(),A(11,"input",44),Oe("ngModelChange",function(r){Le(t);let s=Je(2);return Ne(s.buyerForm.alternateContact,r)||(s.buyerForm.alternateContact=r),De(r)}),C()(),A(12,"div",38)(13,"label",42),F(14,"Address"),C(),A(15,"input",45),Oe("ngModelChange",function(r){Le(t);let s=Je(2);return Ne(s.buyerForm.address,r)||(s.buyerForm.address=r),De(r)}),C()(),A(16,"div",38)(17,"label",42),F(18,"City"),C(),A(19,"input",46),Oe("ngModelChange",function(r){Le(t);let s=Je(2);return Ne(s.buyerForm.city,r)||(s.buyerForm.city=r),De(r)}),C()(),A(20,"div",38)(21,"label",42),F(22,"State"),C(),A(23,"input",47),Oe("ngModelChange",function(r){Le(t);let s=Je(2);return Ne(s.buyerForm.state,r)||(s.buyerForm.state=r),De(r)}),C()(),A(24,"div",38)(25,"label",42),F(26,"Pincode"),C(),A(27,"input",48),Oe("ngModelChange",function(r){Le(t);let s=Je(2);return Ne(s.buyerForm.pincode,r)||(s.buyerForm.pincode=r),De(r)}),C()(),A(28,"div",38)(29,"label",42),F(30,"Country"),C(),A(31,"input",49),Oe("ngModelChange",function(r){Le(t);let s=Je(2);return Ne(s.buyerForm.country,r)||(s.buyerForm.country=r),De(r)}),C()(),A(32,"div",38)(33,"label",42),F(34,"Company Name"),C(),A(35,"input",50),Oe("ngModelChange",function(r){Le(t);let s=Je(2);return Ne(s.buyerForm.companyName,r)||(s.buyerForm.companyName=r),De(r)}),C()(),A(36,"div",38)(37,"label",42),F(38,"Company Type"),C(),A(39,"input",51),Oe("ngModelChange",function(r){Le(t);let s=Je(2);return Ne(s.buyerForm.companyType,r)||(s.buyerForm.companyType=r),De(r)}),C()(),A(40,"div",38)(41,"label",42),F(42,"GST Number"),C(),A(43,"input",52),Oe("ngModelChange",function(r){Le(t);let s=Je(2);return Ne(s.buyerForm.gstNumber,r)||(s.buyerForm.gstNumber=r),De(r)}),C()(),A(44,"div",38)(45,"label",42),F(46,"PAN Number"),C(),A(47,"input",53),Oe("ngModelChange",function(r){Le(t);let s=Je(2);return Ne(s.buyerForm.panNumber,r)||(s.buyerForm.panNumber=r),De(r)}),C()(),A(48,"div",38)(49,"label",42),F(50,"Preferred Crops"),C(),A(51,"input",54),Oe("ngModelChange",function(r){Le(t);let s=Je(2);return Ne(s.buyerForm.preferredCrops,r)||(s.buyerForm.preferredCrops=r),De(r)}),C()(),A(52,"div",38)(53,"label",42),F(54,"Budget Range"),C(),A(55,"input",55),Oe("ngModelChange",function(r){Le(t);let s=Je(2);return Ne(s.buyerForm.budgetRange,r)||(s.buyerForm.budgetRange=r),De(r)}),C()(),A(56,"div",38)(57,"label",42),F(58,"Purchase Frequency"),C(),A(59,"input",56),Oe("ngModelChange",function(r){Le(t);let s=Je(2);return Ne(s.buyerForm.purchaseFrequency,r)||(s.buyerForm.purchaseFrequency=r),De(r)}),C()(),A(60,"div",38)(61,"label",42),F(62,"Preferred Payment Method"),C(),A(63,"input",57),Oe("ngModelChange",function(r){Le(t);let s=Je(2);return Ne(s.buyerForm.preferredPaymentMethod,r)||(s.buyerForm.preferredPaymentMethod=r),De(r)}),C()(),A(64,"div",38)(65,"label",42),F(66,"Geo Latitude"),C(),A(67,"input",58),Oe("ngModelChange",function(r){Le(t);let s=Je(2);return Ne(s.buyerForm.geoLat,r)||(s.buyerForm.geoLat=r),De(r)}),C()(),A(68,"div",38)(69,"label",42),F(70,"Geo Longitude"),C(),A(71,"input",59),Oe("ngModelChange",function(r){Le(t);let s=Je(2);return Ne(s.buyerForm.geoLong,r)||(s.buyerForm.geoLong=r),De(r)}),C()(),A(72,"div",38)(73,"label",42),F(74,"Total Orders"),C(),A(75,"input",60),Oe("ngModelChange",function(r){Le(t);let s=Je(2);return Ne(s.buyerForm.totalOrders,r)||(s.buyerForm.totalOrders=r),De(r)}),C()(),A(76,"div",38)(77,"label",42),F(78,"Total Spent"),C(),A(79,"input",61),Oe("ngModelChange",function(r){Le(t);let s=Je(2);return Ne(s.buyerForm.totalSpent,r)||(s.buyerForm.totalSpent=r),De(r)}),C()(),A(80,"div",38)(81,"label",42),F(82,"Loyalty Points"),C(),A(83,"input",62),Oe("ngModelChange",function(r){Le(t);let s=Je(2);return Ne(s.buyerForm.loyaltyPoints,r)||(s.buyerForm.loyaltyPoints=r),De(r)}),C()(),A(84,"div",38)(85,"label",42),F(86,"Buyer Rating"),C(),A(87,"input",63),Oe("ngModelChange",function(r){Le(t);let s=Je(2);return Ne(s.buyerForm.buyerRating,r)||(s.buyerForm.buyerRating=r),De(r)}),C()(),A(88,"div",38)(89,"label",42),F(90,"Last Purchase Date"),C(),A(91,"input",64),Oe("ngModelChange",function(r){Le(t);let s=Je(2);return Ne(s.buyerForm.lastPurchaseDate,r)||(s.buyerForm.lastPurchaseDate=r),De(r)}),C()(),A(92,"div",27)(93,"button",65),ot(94,"i",66),F(95," Save Buyer Profile "),C()()(),Ri()}if(i&2){let t=Je(2);ee(7),Ue("ngModel",t.buyerForm.contactNumber),ee(4),Ue("ngModel",t.buyerForm.alternateContact),ee(4),Ue("ngModel",t.buyerForm.address),ee(4),Ue("ngModel",t.buyerForm.city),ee(4),Ue("ngModel",t.buyerForm.state),ee(4),Ue("ngModel",t.buyerForm.pincode),ee(4),Ue("ngModel",t.buyerForm.country),ee(4),Ue("ngModel",t.buyerForm.companyName),ee(4),Ue("ngModel",t.buyerForm.companyType),ee(4),Ue("ngModel",t.buyerForm.gstNumber),ee(4),Ue("ngModel",t.buyerForm.panNumber),ee(4),Ue("ngModel",t.buyerForm.preferredCrops),ee(4),Ue("ngModel",t.buyerForm.budgetRange),ee(4),Ue("ngModel",t.buyerForm.purchaseFrequency),ee(4),Ue("ngModel",t.buyerForm.preferredPaymentMethod),ee(4),Ue("ngModel",t.buyerForm.geoLat),ee(4),Ue("ngModel",t.buyerForm.geoLong),ee(4),Ue("ngModel",t.buyerForm.totalOrders),ee(4),Ue("ngModel",t.buyerForm.totalSpent),ee(4),Ue("ngModel",t.buyerForm.loyaltyPoints),ee(4),Ue("ngModel",t.buyerForm.buyerRating),ee(4),Ue("ngModel",t.buyerForm.lastPurchaseDate)}}function $d(i,e){if(i&1){let t=Bt();A(0,"div",67)(1,"p",68),F(2,"No products found for your account."),C(),A(3,"button",69),_t("click",function(){Le(t);let r=Je(2);return De(r.openBuyerForm())}),F(4," Register as Buyer "),C()()}}function Qd(i,e){if(i&1){let t=Bt();A(0,"div",4)(1,"div",5)(2,"div",6)(3,"div",7)(4,"div",8),ot(5,"img",9),A(6,"div",10)(7,"label",11),ot(8,"i",12),A(9,"input",13),_t("change",function(r){Le(t);let s=Je();return De(s.onFileSelect(r))}),C()()()()(),A(10,"div",14)(11,"h4",15),F(12,"User Details"),C(),A(13,"ul",16)(14,"li",17)(15,"strong"),F(16,"Name:"),C(),F(17),C(),A(18,"li",17)(19,"strong"),F(20,"Role:"),C(),F(21),C(),A(22,"li",17)(23,"strong"),F(24,"Email:"),C(),F(25),C()()()()(),ot(26,"hr",18),bt(27,Kd,15,24,"ng-container",19)(28,jd,96,22,"ng-container",19)(29,$d,5,0,"ng-template",null,1,Hr),C()}if(i&2){let t=Je();ee(5),tt("src",t.profileImageUrl||t.defaultProfileImage,Ws),ee(12),Lt(" ",t.loginData.userName,""),ee(4),Lt(" ",t.loginData.userRole,""),ee(4),Lt(" ",t.loginData.userEmail,""),ee(2),tt("ngIf",t.loginData.userRole==="FARMER"),ee(),tt("ngIf",t.loginData.userRole==="BUYER"||t.showBuyerForm)}}function ef(i,e){i&1&&(A(0,"div",70)(1,"h4",71),F(2,"You are not logged in."),C(),A(3,"p"),F(4,"Please log in to view your dashboard."),C()())}var ao=class i{constructor(e,t,n,r,s,o){this.router=e;this.productService=t;this.userService=n;this.alertService=r;this.platformId=s;this.colorService=o;this.router.events.pipe(Hs(a=>a instanceof Ys)).subscribe(()=>this.Collectlogindata())}profileImageUrl="";defaultProfileImage="images/profile.jpeg";products1=[];buyerData={isVerified:!1,alternateContact:"",emailVerified:!1,phoneVerified:!1,address:"",city:"",state:"",country:"",pincode:"",geoLat:0,geoLong:0,companyName:"",companyType:"",gstNumber:"",panNumber:"",preferredCrops:"",budgetRange:"",purchaseFrequency:"",preferredPaymentMethod:"",lastPurchaseDate:"",totalOrders:0,totalSpent:0,loyaltyPoints:0,buyerRating:0};buyerid=0;loginData={isLoggedIn:!1,userName:"",userRole:"",userEmail:"",userid:0};isLoggedIn=!1;showBuyerForm=!1;buyerForm={user_id:0,contactNumber:"",alternateContact:"",emailVerified:!0,phoneVerified:!1,address:"",city:"",state:"",country:"India",pincode:"",geoLat:0,geoLong:0,companyName:"",companyType:"",gstNumber:"",panNumber:"",isVerified:!1,preferredCrops:"",budgetRange:"",purchaseFrequency:"",preferredPaymentMethod:"",lastPurchaseDate:new Date,totalOrders:0,totalSpent:0,loyaltyPoints:0,buyerRating:5};farmerForm={phoneNumber:"",address:"",state:"",district:"",village:"",postalCode:"",landArea:0,farmingType:"Conventional",farmerId:0};farmerData={name:"",email:"",phoneNumber:"",address:"",state:"",district:"",village:"",postalCode:"",landArea:0,farmingType:"",status:""};submitFarmerForm(){let e=this.loginData.userEmail,t=this.loginData.userName,n=Number(this.loginData.userid);e&&t&&n?this.userService.getFarmerId(e,t).subscribe({next:r=>{this.farmerForm.farmerId=Number(r);let s=ks(kr({},this.farmerForm),{userId:n});this.userService.saveFarmer(s).subscribe({next:o=>{o.success?this.alertService.handleBackendResponse(o):alert("Unexpected response"),o.success?this.alertService.handleBackendResponse(o):alert("Unexpected response")},error:o=>{console.error("Error saving farmer:",o),alert("Error saving farmer data")}})},error:r=>{console.error("Error fetching farmer ID:",r),alert("Could not fetch farmer ID")}}):alert("User information is missing. Please login again.")}fetchFarmerData(){this.userService.getFarmerData().subscribe({next:e=>{this.farmerData=e,console.log("Farmer data retrieved:",this.farmerData)},error:e=>{console.error("Error fetching farmer data:",e)}})}selectedColor="";ngOnInit(){if(Wt(this.platformId)){if(this.loginData){this.loginData.userRole==="FARMER"?this.fetchFarmerData():this.loginData.userRole==="BUYER"&&this.fetchbuyer_id();let e=Number(localStorage.getItem("nameid"));e&&this.getProfileImage(e)}this.colorService.selectedColor$.subscribe(e=>{this.selectedColor=e})}}fetchbuyer_id(){this.userService.Getbuyerid(this.loginData.userid).subscribe({next:e=>{this.buyerid=e,console.log("\u2705 Buyer ID retrieved:",this.buyerid),this.buyerid?this.fetchBuyerData():console.error("\u274C Buyer ID is null or undefined")},error:e=>{console.error("Error fetching buyer ID:",e)}})}fetchBuyerData(){this.userService.GetBuyerById(this.buyerid).subscribe({next:e=>{this.buyerData=e,console.log("\u2705 Buyer data retrieved:",this.buyerData)},error:e=>{console.error("Error fetching buyer data:",e)}})}Collectlogindata(){if(Wt(this.platformId)){let e=localStorage.getItem("auth_token");this.loginData={isLoggedIn:!!e,userName:localStorage.getItem("user_name")||"",userRole:localStorage.getItem("user_role")||"",userEmail:localStorage.getItem("user_email")||"",userid:parseInt(localStorage.getItem("nameid")||"0")};let t=this.loginData.userid,n=this.loginData.userEmail,r=this.loginData.userRole;t&&n&&(r==="FARMER"&&(this.getProducts(t,n),this.fetchFarmerData()),this.buyerForm.user_id=t)}}openBuyerForm(){this.showBuyerForm=!0}submitBuyerForm(){this.userService.registerAsBuyer(this.buyerForm).subscribe({next:e=>{console.log("Buyer registered successfully:",e),alert("You are now registered as a Buyer!"),this.showBuyerForm=!1},error:e=>{console.error("Error registering buyer:",e),alert("Error registering buyer")}})}getProducts(e,t){this.productService.getProductByFarmerId(e,t).subscribe({next:n=>{this.products1=n,console.log("Products fetched:",this.products1)},error:n=>{console.error("Error fetching products:",n)}})}saveProfileImage(e){if(Wt(this.platformId)){let t=parseInt(localStorage.getItem("nameid")||"0");t!==0&&e?this.userService.uploadProfileImage(e,t).subscribe({next:n=>{n.success?(console.log("Profile image saved successfully."),this.getProfileImage(t)):console.error("Failed to save profile image.")},error:n=>{console.error("Error saving profile image:",n)}}):console.error("User ID is invalid or no file selected.")}}getProfileImage(e){this.userService.getProfileImage(e).subscribe({next:t=>{let n=new FileReader;n.onload=()=>{this.profileImageUrl=n.result},n.readAsDataURL(t)},error:t=>{console.error("Error fetching profile image:",t),this.profileImageUrl=this.defaultProfileImage}})}onFileSelect(e){let t=e.target.files[0];t&&this.saveProfileImage(t)}static \u0275fac=function(t){return new(t||i)(it(Qn),it(Qs),it(tu),it(on),it(bn),it(qt))};static \u0275cmp=Tt({type:i,selectors:[["app-profileview"]],decls:3,vars:2,consts:[["notLoggedIn",""],["noProducts",""],["farmerFormRef","ngForm"],["class","container-fluid px-4 py-5",4,"ngIf","ngIfElse"],[1,"container-fluid","px-4","py-5"],[1,"card","shadow","rounded-4","border-0","p-4","mb-5"],[1,"row","align-items-center"],[1,"col-md-4","text-center","mb-4","mb-md-0"],[1,"position-relative","mx-auto",2,"width","180px","height","180px"],["alt","Profile Image",1,"rounded-circle","shadow","w-100","h-100",2,"object-fit","cover","border","4px solid white",3,"src"],[1,"upload-overlay","d-flex","justify-content-center","align-items-center","rounded-circle"],[1,"text-white",2,"cursor","pointer"],[1,"bi","bi-camera-fill","fs-3"],["type","file","hidden","",3,"change"],[1,"col-md-8"],[1,"fw-bold","mb-4","text-center","text-md-start"],[1,"list-unstyled","fs-5"],[1,"mb-2"],[1,"my-5"],[4,"ngIf"],[1,"mb-4"],[4,"ngIf","ngIfElse"],["class","mt-5",4,"ngIf"],[1,"card","shadow","border-0","rounded-4","p-4","my-5"],[1,"mb-4","text-center","fw-bold","text-success"],["novalidate","",1,"row","g-3","needs-validation",3,"ngSubmit"],[4,"ngFor","ngForOf"],[1,"col-12","text-center","mt-3"],["type","submit",1,"btn","px-5","py-2","fs-5","rounded-pill","shadow-sm","text-white","border-0",3,"ngStyle"],[1,"bi","bi-check-circle","me-2"],[1,"row"],["class","col-md-6 mb-4",4,"ngFor","ngForOf"],[1,"col-md-6","mb-4"],[1,"card","border-0","shadow-sm","p-3","h-100","bg-light","rounded-4"],[3,"ngClass"],[1,"mt-5"],[1,"row","g-3"],["class","col-md-4",4,"ngFor","ngForOf"],[1,"col-md-4"],[1,"form-label","fw-semibold"],["required","",1,"form-control","rounded-3",3,"ngModelChange","ngModel","name","type"],[1,"row","g-3",3,"ngSubmit"],[1,"form-label"],["name","contactNumber","required","",1,"form-control",3,"ngModelChange","ngModel"],["name","alternateContact",1,"form-control",3,"ngModelChange","ngModel"],["name","address","required","",1,"form-control",3,"ngModelChange","ngModel"],["name","city",1,"form-control",3,"ngModelChange","ngModel"],["name","state",1,"form-control",3,"ngModelChange","ngModel"],["name","pincode",1,"form-control",3,"ngModelChange","ngModel"],["name","country",1,"form-control",3,"ngModelChange","ngModel"],["name","companyName",1,"form-control",3,"ngModelChange","ngModel"],["name","companyType",1,"form-control",3,"ngModelChange","ngModel"],["name","gstNumber",1,"form-control",3,"ngModelChange","ngModel"],["name","panNumber",1,"form-control",3,"ngModelChange","ngModel"],["name","preferredCrops",1,"form-control",3,"ngModelChange","ngModel"],["name","budgetRange",1,"form-control",3,"ngModelChange","ngModel"],["name","purchaseFrequency",1,"form-control",3,"ngModelChange","ngModel"],["name","preferredPaymentMethod",1,"form-control",3,"ngModelChange","ngModel"],["type","number","name","geoLat",1,"form-control",3,"ngModelChange","ngModel"],["type","number","name","geoLong",1,"form-control",3,"ngModelChange","ngModel"],["type","number","name","totalOrders",1,"form-control",3,"ngModelChange","ngModel"],["type","number","name","totalSpent",1,"form-control",3,"ngModelChange","ngModel"],["type","number","name","loyaltyPoints",1,"form-control",3,"ngModelChange","ngModel"],["type","number","name","buyerRating","step","0.1",1,"form-control",3,"ngModelChange","ngModel"],["type","date","name","lastPurchaseDate",1,"form-control",3,"ngModelChange","ngModel"],["type","submit",1,"btn","btn-primary","px-5","py-2","fs-5","rounded-pill","shadow-sm"],[1,"bi","bi-save2","me-2"],[1,"text-center","my-4"],[1,"text-muted"],[1,"btn","btn-outline-primary",3,"click"],[1,"text-center","mt-5"],[1,"text-danger"]],template:function(t,n){if(t&1&&bt(0,Qd,31,6,"div",3)(1,ef,5,0,"ng-template",null,0,Hr),t&2){let r=Vr(2);tt("ngIf",n.loginData==null?null:n.loginData.isLoggedIn)("ngIfElse",r)}},dependencies:[kt,er,tr,Sn,$n,wn,si,ei,Zs,ti,ni,oi,ri,ii],styles:[".upload-overlay[_ngcontent-%COMP%]{position:absolute;inset:0;background:#0006;opacity:0;transition:opacity .3s}.profile-image-container[_ngcontent-%COMP%]:hover   .upload-overlay[_ngcontent-%COMP%]{opacity:1}"]})};var tf=[{path:"",component:so},{path:"auth/signup",component:to},{path:"auth/login",component:io},{path:"components/product",component:oo},{path:"components/profileview",component:ao},{path:"products",loadComponent:()=>import("./chunk-D3C3NURZ.js").then(i=>i.ProductinventoryComponent)},{path:"products/:productid",loadComponent:()=>import("./chunk-D3C3NURZ.js").then(i=>i.ProductinventoryComponent),renderMode:"blocking"},{path:"buyer",loadComponent:()=>import("./chunk-CBNDQUJZ.js").then(i=>i.BuyerComponent)},{path:"buyer/:buyerid",loadComponent:()=>import("./chunk-CBNDQUJZ.js").then(i=>i.BuyerComponent),renderMode:"blocking"},{path:"**",redirectTo:""}],ru={providers:[Gc({eventCoalescing:!0}),jc(tf),Yc(),Wc(Xc([])),Oc(wn,eu)]};var nf=i=>({background:i,"backdrop-filter":"blur(15px)","-webkit-backdrop-filter":"blur(15px)","border-radius":"0 0 30px 30px","box-shadow":"0 8px 24px rgba(0,0,0,0.25)"}),rf=i=>({collapse:i,"navbar-collapse":!0});function sf(i,e){i&1&&(Ci(0),A(1,"a",18),F(2,"Login"),C(),A(3,"a",19),F(4,"Sign Up"),C(),Ri())}function of(i,e){if(i&1){let t=Bt();A(0,"a",20),F(1,"Profile"),C(),A(2,"button",21),_t("click",function(){Le(t);let r=Je();return De(r.logout())}),F(3,"Logout"),C()}}var lo=class i{constructor(e,t,n){this.router=e;this.platformId=t;this.colorService=n;this.router.events.pipe(Hs(r=>r instanceof Ys)).subscribe(()=>this.checkLoginStatus())}isLoggedIn=!1;isNavbarCollapsed=!1;toggleNavbar(){this.isNavbarCollapsed=!this.isNavbarCollapsed}selectedColor="";ngOnInit(){this.checkLoginStatus(),this.colorService.selectedColor$.subscribe(e=>{this.selectedColor=e})}checkLoginStatus(){if(Wt(this.platformId)){let e=localStorage.getItem("auth_token");this.isLoggedIn=!!e}}goToAddProduct(e){e.preventDefault(),this.router.navigate(["components/product"])}goToBuyerpage(e){e.preventDefault(),this.router.navigate(["components/buyer"])}logout(){Wt(this.platformId)&&localStorage.clear(),this.isLoggedIn=!1,this.router.navigate(["/auth/login"])}static \u0275fac=function(t){return new(t||i)(it(Qn),it(bn),it(qt))};static \u0275cmp=Tt({type:i,selectors:[["app-navbar"]],decls:29,vars:8,consts:[["loggedInTemplate",""],[1,"navbar","navbar-expand-lg","enhanced-navbar","shadow",3,"ngStyle"],[1,"container-fluid"],["routerLink","/",1,"navbar-brand","d-flex","align-items-center"],["src","images/logo.png","alt","AgriMandi Logo",1,"logo-img","me-2"],[1,"brand-text"],["type","button",1,"navbar-toggler","border-0",3,"click"],[1,"navbar-toggler-icon"],["id","navbarLinks",3,"ngClass"],[1,"navbar-nav","mx-auto","mb-2","mb-lg-0","gap-lg-4"],[1,"nav-item"],["routerLink","/","routerLinkActive","active",1,"nav-link"],["href","#",1,"nav-link",3,"click"],["routerLink","products","routerLinkActive","active",1,"nav-link"],["routerLink","buyer","routerLinkActive","active",1,"nav-link"],["routerLink","/contact","routerLinkActive","active",1,"nav-link"],[1,"auth-buttons","d-flex","flex-wrap","align-items-center","justify-content-center","gap-2","mt-3","mt-lg-0"],[4,"ngIf","ngIfElse"],["routerLink","auth/login",1,"btn","neon-btn-outline"],["routerLink","auth/signup",1,"btn","neon-btn"],["routerLink","components/profileview",1,"btn","neon-btn-outline"],[1,"btn","btn-danger",3,"click"]],template:function(t,n){if(t&1){let r=Bt();A(0,"nav",1)(1,"div",2)(2,"a",3),ot(3,"img",4),A(4,"span",5),F(5,"AgriMandi"),C()(),A(6,"button",6),_t("click",function(){return Le(r),De(n.toggleNavbar())}),ot(7,"span",7),C(),A(8,"div",8)(9,"ul",9)(10,"li",10)(11,"a",11),F(12,"Home"),C()(),A(13,"li",10)(14,"a",12),_t("click",function(o){return Le(r),De(n.goToAddProduct(o))}),F(15,"Add Products"),C()(),A(16,"li",10)(17,"a",13),F(18,"Products"),C()(),A(19,"li",10)(20,"a",14),F(21,"Buyers"),C()(),A(22,"li",10)(23,"a",15),F(24,"Help Center"),C()()(),A(25,"div",16),bt(26,sf,5,0,"ng-container",17)(27,of,4,0,"ng-template",null,0,Hr),C()()()()}if(t&2){let r=Vr(28);tt("ngStyle",Dt(4,nf,n.selectedColor)),ee(8),tt("ngClass",Dt(6,rf,!n.isNavbarCollapsed)),ee(18),tt("ngIf",!n.isLoggedIn)("ngIfElse",r)}},dependencies:[nr,Jc,Kc,kt,er,Sn,$n],styles:[`.enhanced-navbar[_ngcontent-%COMP%]{background:linear-gradient(145deg,#00ffaa40,#00c88c33);backdrop-filter:blur(20px) saturate(150%);-webkit-backdrop-filter:blur(20px) saturate(150%);border-bottom:2px solid rgba(255,255,255,.15);box-shadow:0 8px 20px #00ffcc26;padding:.75rem 1.5rem;border-radius:0 0 20px 20px;z-index:1000;transition:all .4s ease-in-out}.brand-text[_ngcontent-%COMP%]{font-size:2rem;font-weight:700;color:#fff;text-shadow:0 0 6px #00ffcc,0 0 12px #00ffcc;animation:_ngcontent-%COMP%_pulse 4s infinite ease-in-out}.logo-img[_ngcontent-%COMP%]{height:50px;width:50px;object-fit:contain;filter:drop-shadow(0 0 6px rgba(0,255,204,.5))}.navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{color:#fff!important;font-weight:500;font-size:1.1rem;position:relative;padding:.6rem 1.2rem;transition:all .3s ease;z-index:1}.navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:before{content:"";position:absolute;inset:0;background:radial-gradient(circle at center,rgba(0,255,204,.2),transparent 70%);opacity:0;transition:opacity .3s ease;z-index:-1;border-radius:10px}.navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover:before{opacity:1}.navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover{color:#0fe!important;transform:translateY(-2px);text-shadow:0 0 10px rgba(0,255,204,.8)}.navbar-nav[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]{color:#0fc!important;border-bottom:2px solid #00ffcc}.neon-btn[_ngcontent-%COMP%]{background:linear-gradient(135deg,#0fc,#0c9);color:#fff;border:none;border-radius:25px;padding:.55rem 1.5rem;font-weight:600;box-shadow:0 0 12px #0fe,0 0 24px #0fe;transition:.3s ease}.neon-btn[_ngcontent-%COMP%]:hover{box-shadow:0 0 18px #0fe,0 0 36px #0fe;transform:scale(1.07)}.neon-btn-outline[_ngcontent-%COMP%]{border:2px solid #00ffee;color:#0fe;background:transparent;border-radius:25px;padding:.55rem 1.5rem;font-weight:600;transition:.3s ease}.neon-btn-outline[_ngcontent-%COMP%]:hover{background:#0fe;color:#000;box-shadow:0 0 15px #0fe,0 0 30px #0fe}.navbar-toggler[_ngcontent-%COMP%]{font-size:1.5rem}.navbar-toggler-icon[_ngcontent-%COMP%]{background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3E%3Cpath stroke='white' stroke-width='3' d='M4 7h22M4 15h22M4 23h22' /%3E%3C/svg%3E");width:30px;height:30px}@media (max-width: 992px){.navbar-nav[_ngcontent-%COMP%]{flex-direction:column;align-items:center}.auth-buttons[_ngcontent-%COMP%]{flex-direction:column;gap:.5rem}.auth-buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{width:80%}.navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{width:100%;text-align:center}}@keyframes _ngcontent-%COMP%_pulse{0%{text-shadow:0 0 6px #00ffcc}50%{text-shadow:0 0 16px #00ffee}to{text-shadow:0 0 6px #00ffcc}}`]})};var rd=dd(su());var sa="176";var Lu=0,Jl=1,Du=2;var Kl=1,Fu=2,Pn=3,Hn=0,Rt=1,Nt=2,Zn=0,Ni=1,As=2,jl=3,$l=4,Uu=5,mi=100,Nu=101,Ou=102,Bu=103,ku=104,zu=200,Vu=201,Hu=202,Gu=203,Lo=204,Do=205,Wu=206,Xu=207,qu=208,Yu=209,Zu=210,Ju=211,Ku=212,ju=213,$u=214,oa=0,aa=1,la=2,Oi=3,ca=4,ua=5,ha=6,da=7,fa=0,Qu=1,eh=2,Jn=0,th=1,nh=2,ih=3,rh=4,sh=5,oh=6,ah=7;var Ul=300,Hi=301,Gi=302,pa=303,ma=304,Cs=306,Fo=1e3,pi=1001,Uo=1002,ln=1003,lh=1004;var Rs=1005;var vn=1006,ga=1007;var Si=1008;var Mn=1009,Ql=1010,ec=1011,Rr=1012,_a=1013,wi=1014,In=1015,Pr=1016,xa=1017,va=1018,Ir=1020,tc=35902,nc=1021,ic=1022,hn=1023,xr=1026,Lr=1027,rc=1028,ya=1029,sc=1030,Ma=1031;var ba=1033,Ps=33776,Is=33777,Ls=33778,Ds=33779,Sa=35840,wa=35841,Ea=35842,Ta=35843,Aa=36196,Ca=37492,Ra=37496,Pa=37808,Ia=37809,La=37810,Da=37811,Fa=37812,Ua=37813,Na=37814,Oa=37815,Ba=37816,ka=37817,za=37818,Va=37819,Ha=37820,Ga=37821,Fs=36492,Wa=36494,Xa=36495,oc=36283,qa=36284,Ya=36285,Za=36286;var Qr=2300,No=2301,Io=2302,Nl=2400,Ol=2401,Bl=2402;var ch=3200,uh=3201;var Ja=0,hh=1,Kn="",$t="srgb",Bi="srgb-linear",es="linear",dt="srgb";var Ui=7680;var kl=519,dh=512,fh=513,ph=514,ac=515,mh=516,gh=517,_h=518,xh=519,zl=35044;var lc="300 es",Tn=2e3,ts=2001;var Gn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var cl=Math.PI/180,ns=180/Math.PI;function Dr(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(zt[i&255]+zt[i>>8&255]+zt[i>>16&255]+zt[i>>24&255]+"-"+zt[e&255]+zt[e>>8&255]+"-"+zt[e>>16&15|64]+zt[e>>24&255]+"-"+zt[t&63|128]+zt[t>>8&255]+"-"+zt[t>>16&255]+zt[t>>24&255]+zt[n&255]+zt[n>>8&255]+zt[n>>16&255]+zt[n>>24&255]).toLowerCase()}function nt(i,e,t){return Math.max(e,Math.min(t,i))}function af(i,e){return(i%e+e)%e}function ul(i,e,t){return(1-t)*i+t*e}function Xr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Yt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var fe=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(nt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(nt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},je=class i{constructor(e,t,n,r,s,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c)}set(e,t,n,r,s,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],p=n[5],g=n[8],v=r[0],m=r[3],d=r[6],T=r[1],E=r[4],y=r[7],L=r[2],P=r[5],I=r[8];return s[0]=o*v+a*T+l*L,s[3]=o*m+a*E+l*P,s[6]=o*d+a*y+l*I,s[1]=c*v+u*T+h*L,s[4]=c*m+u*E+h*P,s[7]=c*d+u*y+h*I,s[2]=f*v+p*T+g*L,s[5]=f*m+p*E+g*P,s[8]=f*d+p*y+g*I,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*s,p=c*s-o*l,g=t*h+n*f+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=h*v,e[1]=(r*c-u*n)*v,e[2]=(a*n-r*o)*v,e[3]=f*v,e[4]=(u*t-r*l)*v,e[5]=(r*s-a*t)*v,e[6]=p*v,e[7]=(n*l-c*t)*v,e[8]=(o*t-n*s)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(hl.makeScale(e,t)),this}rotate(e){return this.premultiply(hl.makeRotation(-e)),this}translate(e,t){return this.premultiply(hl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},hl=new je;function cc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function is(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function vh(){let i=is("canvas");return i.style.display="block",i}var ou={};function Us(i){i in ou||(ou[i]=!0,console.warn(i))}function yh(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function Mh(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function bh(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var au=new je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),lu=new je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function lf(){let i={enabled:!0,workingColorSpace:Bi,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===dt&&(r.r=Vn(r.r),r.g=Vn(r.g),r.b=Vn(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===dt&&(r.r=_r(r.r),r.g=_r(r.g),r.b=_r(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Kn?es:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Bi]:{primaries:e,whitePoint:n,transfer:es,toXYZ:au,fromXYZ:lu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:$t},outputColorSpaceConfig:{drawingBufferColorSpace:$t}},[$t]:{primaries:e,whitePoint:n,transfer:dt,toXYZ:au,fromXYZ:lu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:$t}}}),i}var at=lf();function Vn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function _r(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var sr,Oo=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{sr===void 0&&(sr=is("canvas")),sr.width=e.width,sr.height=e.height;let r=sr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=sr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=is("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Vn(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Vn(t[n]/255)*255):t[n]=Vn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},cf=0,vr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:cf++}),this.uuid=Dr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(dl(r[o].image)):s.push(dl(r[o]))}else s=dl(r);n.url=s}return t||(e.images[this.uuid]=n),n}};function dl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Oo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var uf=0,Ei=(()=>{class i extends Gn{constructor(t=i.DEFAULT_IMAGE,n=i.DEFAULT_MAPPING,r=pi,s=pi,o=vn,a=Si,l=hn,c=Mn,u=i.DEFAULT_ANISOTROPY,h=Kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:uf++}),this.uuid=Dr(),this.name="",this.source=new vr(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=s,this.magFilter=o,this.minFilter=a,this.anisotropy=u,this.format=l,this.internalFormat=null,this.type=c,this.offset=new fe(0,0),this.repeat=new fe(1,1),this.center=new fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isTextureArray=t.isTextureArray,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ul)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Fo:t.x=t.x-Math.floor(t.x);break;case pi:t.x=t.x<0?0:1;break;case Uo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Fo:t.y=t.y-Math.floor(t.y);break;case pi:t.y=t.y<0?0:1;break;case Uo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}return i.DEFAULT_IMAGE=null,i.DEFAULT_MAPPING=Ul,i.DEFAULT_ANISOTROPY=1,i})(),vt=class i{constructor(e=0,t=0,n=0,r=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s,l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],g=l[9],v=l[2],m=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let E=(c+1)/2,y=(p+1)/2,L=(d+1)/2,P=(u+f)/4,I=(h+v)/4,U=(g+m)/4;return E>y&&E>L?E<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(E),r=P/n,s=I/n):y>L?y<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),n=P/r,s=U/r):L<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(L),n=I/s,r=U/s),this.set(n,r,s,t),this}let T=Math.sqrt((m-g)*(m-g)+(h-v)*(h-v)+(f-u)*(f-u));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(h-v)/T,this.z=(f-u)/T,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this.w=nt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this.w=nt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(nt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Bo=class extends Gn{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth?n.depth:1,this.scissor=new vt(0,0,e,t),this.scissorTest=!1,this.viewport=new vt(0,0,e,t);let r={width:e,height:t,depth:this.depth};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},n);let s=new Ei(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new vr(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Cn=class extends Bo{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},rs=class extends Ei{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=ln,this.minFilter=ln,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ko=class extends Ei{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=ln,this.minFilter=ln,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Wn=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],h=n[r+3],f=s[o+0],p=s[o+1],g=s[o+2],v=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=v;return}if(h!==v||l!==f||c!==p||u!==g){let m=1-a,d=l*f+c*p+u*g+h*v,T=d>=0?1:-1,E=1-d*d;if(E>Number.EPSILON){let L=Math.sqrt(E),P=Math.atan2(L,d*T);m=Math.sin(m*P)/L,a=Math.sin(a*P)/L}let y=a*T;if(l=l*m+f*y,c=c*m+p*y,u=u*m+g*y,h=h*m+v*y,m===1-a){let L=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=L,c*=L,u*=L,h*=L}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,o){let a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],h=s[o],f=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+u*h+l*p-c*f,e[t+1]=l*g+u*f+c*h-a*p,e[t+2]=c*g+u*p+a*f-l*h,e[t+3]=u*g-a*h-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),h=a(s/2),f=l(n/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"YXZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"ZXY":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"ZYX":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"YZX":this._x=f*u*h+c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h-f*p*g;break;case"XZY":this._x=f*u*h-c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(n>a&&n>h){let p=2*Math.sqrt(1+n-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>h){let p=2*Math.sqrt(1+a-n-h);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{let p=2*Math.sqrt(1+h-n-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,r=this._y,s=this._z,o=this._w,a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;let l=1-a*a;if(l<=Number.EPSILON){let p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},k=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(cu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(cu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*n),u=2*(a*t-s*r),h=2*(s*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(nt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return fl.copy(this).projectOnVector(e),this.sub(fl)}reflect(e){return this.sub(fl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(nt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},fl=new k,cu=new Wn,gi=class{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(gn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(gn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=gn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,gn):gn.fromBufferAttribute(s,o),gn.applyMatrix4(e.matrixWorld),this.expandByPoint(gn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),co.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),co.copy(n.boundingBox)),co.applyMatrix4(e.matrixWorld),this.union(co)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,gn),gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qr),uo.subVectors(this.max,qr),or.subVectors(e.a,qr),ar.subVectors(e.b,qr),lr.subVectors(e.c,qr),ai.subVectors(ar,or),li.subVectors(lr,ar),Ii.subVectors(or,lr);let t=[0,-ai.z,ai.y,0,-li.z,li.y,0,-Ii.z,Ii.y,ai.z,0,-ai.x,li.z,0,-li.x,Ii.z,0,-Ii.x,-ai.y,ai.x,0,-li.y,li.x,0,-Ii.y,Ii.x,0];return!pl(t,or,ar,lr,uo)||(t=[1,0,0,0,1,0,0,0,1],!pl(t,or,ar,lr,uo))?!1:(ho.crossVectors(ai,li),t=[ho.x,ho.y,ho.z],pl(t,or,ar,lr,uo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Un),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Un=[new k,new k,new k,new k,new k,new k,new k,new k],gn=new k,co=new gi,or=new k,ar=new k,lr=new k,ai=new k,li=new k,Ii=new k,qr=new k,uo=new k,ho=new k,Li=new k;function pl(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Li.fromArray(i,s);let a=r.x*Math.abs(Li.x)+r.y*Math.abs(Li.y)+r.z*Math.abs(Li.z),l=e.dot(Li),c=t.dot(Li),u=n.dot(Li);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var hf=new gi,Yr=new k,ml=new k,yr=class{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):hf.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Yr.subVectors(e,this.center);let t=Yr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Yr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ml.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Yr.copy(e.center).add(ml)),this.expandByPoint(Yr.copy(e.center).sub(ml))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Nn=new k,gl=new k,fo=new k,ci=new k,_l=new k,po=new k,xl=new k,ss=class{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Nn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Nn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Nn.copy(this.origin).addScaledVector(this.direction,t),Nn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){gl.copy(e).add(t).multiplyScalar(.5),fo.copy(t).sub(e).normalize(),ci.copy(this.origin).sub(gl);let s=e.distanceTo(t)*.5,o=-this.direction.dot(fo),a=ci.dot(this.direction),l=-ci.dot(fo),c=ci.lengthSq(),u=Math.abs(1-o*o),h,f,p,g;if(u>0)if(h=o*l-a,f=o*a-l,g=s*u,h>=0)if(f>=-g)if(f<=g){let v=1/u;h*=v,f*=v,p=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(gl).addScaledVector(fo,f),p}intersectSphere(e,t){Nn.subVectors(e.center,this.origin);let n=Nn.dot(this.direction),r=Nn.dot(Nn)-n*n,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Nn)!==null}intersectTriangle(e,t,n,r,s){_l.subVectors(t,e),po.subVectors(n,e),xl.crossVectors(_l,po);let o=this.direction.dot(xl),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ci.subVectors(this.origin,e);let l=a*this.direction.dot(po.crossVectors(ci,po));if(l<0)return null;let c=a*this.direction.dot(_l.cross(ci));if(c<0||l+c>o)return null;let u=-a*ci.dot(xl);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},gt=class i{constructor(e,t,n,r,s,o,a,l,c,u,h,f,p,g,v,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c,u,h,f,p,g,v,m)}set(e,t,n,r,s,o,a,l,c,u,h,f,p,g,v,m){let d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=g,d[11]=v,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,r=1/cr.setFromMatrixColumn(e,0).length(),s=1/cr.setFromMatrixColumn(e,1).length(),o=1/cr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){let f=o*u,p=o*h,g=a*u,v=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+g*c,t[5]=f-v*c,t[9]=-a*l,t[2]=v-f*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*u,p=l*h,g=c*u,v=c*h;t[0]=f+v*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=v+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*u,p=l*h,g=c*u,v=c*h;t[0]=f-v*a,t[4]=-o*h,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=v-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*u,p=o*h,g=a*u,v=a*h;t[0]=l*u,t[4]=g*c-p,t[8]=f*c+v,t[1]=l*h,t[5]=v*c+f,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,p=o*c,g=a*l,v=a*c;t[0]=l*u,t[4]=v-f*h,t[8]=g*h+p,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*h+g,t[10]=f-v*h}else if(e.order==="XZY"){let f=o*l,p=o*c,g=a*l,v=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+v,t[5]=o*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=a*u,t[10]=v*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(df,e,ff)}lookAt(e,t,n){let r=this.elements;return Kt.subVectors(e,t),Kt.lengthSq()===0&&(Kt.z=1),Kt.normalize(),ui.crossVectors(n,Kt),ui.lengthSq()===0&&(Math.abs(n.z)===1?Kt.x+=1e-4:Kt.z+=1e-4,Kt.normalize(),ui.crossVectors(n,Kt)),ui.normalize(),mo.crossVectors(Kt,ui),r[0]=ui.x,r[4]=mo.x,r[8]=Kt.x,r[1]=ui.y,r[5]=mo.y,r[9]=Kt.y,r[2]=ui.z,r[6]=mo.z,r[10]=Kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],p=n[13],g=n[2],v=n[6],m=n[10],d=n[14],T=n[3],E=n[7],y=n[11],L=n[15],P=r[0],I=r[4],U=r[8],b=r[12],_=r[1],R=r[5],z=r[9],V=r[13],j=r[2],K=r[6],J=r[10],$=r[14],W=r[3],de=r[7],me=r[11],_e=r[15];return s[0]=o*P+a*_+l*j+c*W,s[4]=o*I+a*R+l*K+c*de,s[8]=o*U+a*z+l*J+c*me,s[12]=o*b+a*V+l*$+c*_e,s[1]=u*P+h*_+f*j+p*W,s[5]=u*I+h*R+f*K+p*de,s[9]=u*U+h*z+f*J+p*me,s[13]=u*b+h*V+f*$+p*_e,s[2]=g*P+v*_+m*j+d*W,s[6]=g*I+v*R+m*K+d*de,s[10]=g*U+v*z+m*J+d*me,s[14]=g*b+v*V+m*$+d*_e,s[3]=T*P+E*_+y*j+L*W,s[7]=T*I+E*R+y*K+L*de,s[11]=T*U+E*z+y*J+L*me,s[15]=T*b+E*V+y*$+L*_e,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],p=e[14],g=e[3],v=e[7],m=e[11],d=e[15];return g*(+s*l*h-r*c*h-s*a*f+n*c*f+r*a*p-n*l*p)+v*(+t*l*p-t*c*f+s*o*f-r*o*p+r*c*u-s*l*u)+m*(+t*c*h-t*a*p-s*o*h+n*o*p+s*a*u-n*c*u)+d*(-r*a*u-t*l*h+t*a*f+r*o*h-n*o*f+n*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],p=e[11],g=e[12],v=e[13],m=e[14],d=e[15],T=h*m*c-v*f*c+v*l*p-a*m*p-h*l*d+a*f*d,E=g*f*c-u*m*c-g*l*p+o*m*p+u*l*d-o*f*d,y=u*v*c-g*h*c+g*a*p-o*v*p-u*a*d+o*h*d,L=g*h*l-u*v*l-g*a*f+o*v*f+u*a*m-o*h*m,P=t*T+n*E+r*y+s*L;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/P;return e[0]=T*I,e[1]=(v*f*s-h*m*s-v*r*p+n*m*p+h*r*d-n*f*d)*I,e[2]=(a*m*s-v*l*s+v*r*c-n*m*c-a*r*d+n*l*d)*I,e[3]=(h*l*s-a*f*s-h*r*c+n*f*c+a*r*p-n*l*p)*I,e[4]=E*I,e[5]=(u*m*s-g*f*s+g*r*p-t*m*p-u*r*d+t*f*d)*I,e[6]=(g*l*s-o*m*s-g*r*c+t*m*c+o*r*d-t*l*d)*I,e[7]=(o*f*s-u*l*s+u*r*c-t*f*c-o*r*p+t*l*p)*I,e[8]=y*I,e[9]=(g*h*s-u*v*s-g*n*p+t*v*p+u*n*d-t*h*d)*I,e[10]=(o*v*s-g*a*s+g*n*c-t*v*c-o*n*d+t*a*d)*I,e[11]=(u*a*s-o*h*s-u*n*c+t*h*c+o*n*p-t*a*p)*I,e[12]=L*I,e[13]=(u*v*r-g*h*r+g*n*f-t*v*f-u*n*m+t*h*m)*I,e[14]=(g*a*r-o*v*r-g*n*l+t*v*l+o*n*m-t*a*m)*I,e[15]=(o*h*r-u*a*r+u*n*l-t*h*l-o*n*f+t*a*f)*I,this}scale(e){let t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,f=s*c,p=s*u,g=s*h,v=o*u,m=o*h,d=a*h,T=l*c,E=l*u,y=l*h,L=n.x,P=n.y,I=n.z;return r[0]=(1-(v+d))*L,r[1]=(p+y)*L,r[2]=(g-E)*L,r[3]=0,r[4]=(p-y)*P,r[5]=(1-(f+d))*P,r[6]=(m+T)*P,r[7]=0,r[8]=(g+E)*I,r[9]=(m-T)*I,r[10]=(1-(f+v))*I,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements,s=cr.set(r[0],r[1],r[2]).length(),o=cr.set(r[4],r[5],r[6]).length(),a=cr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],_n.copy(this);let c=1/s,u=1/o,h=1/a;return _n.elements[0]*=c,_n.elements[1]*=c,_n.elements[2]*=c,_n.elements[4]*=u,_n.elements[5]*=u,_n.elements[6]*=u,_n.elements[8]*=h,_n.elements[9]*=h,_n.elements[10]*=h,t.setFromRotationMatrix(_n),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=Tn){let l=this.elements,c=2*s/(t-e),u=2*s/(n-r),h=(t+e)/(t-e),f=(n+r)/(n-r),p,g;if(a===Tn)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===ts)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=Tn){let l=this.elements,c=1/(t-e),u=1/(n-r),h=1/(o-s),f=(t+e)*c,p=(n+r)*u,g,v;if(a===Tn)g=(o+s)*h,v=-2*h;else if(a===ts)g=s*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},cr=new k,_n=new gt,df=new k(0,0,0),ff=new k(1,1,1),ui=new k,mo=new k,Kt=new k,uu=new gt,hu=new Wn,Xn=(()=>{class i{constructor(t=0,n=0,r=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,r,s=this._order){return this._x=t,this._y=n,this._z=r,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,r=!0){let s=t.elements,o=s[0],a=s[4],l=s[8],c=s[1],u=s[5],h=s[9],f=s[2],p=s[6],g=s[10];switch(n){case"XYZ":this._y=Math.asin(nt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,g),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(p,u),this._z=0);break;case"YXZ":this._x=Math.asin(-nt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(l,g),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-f,o),this._z=0);break;case"ZXY":this._x=Math.asin(nt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,g),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-nt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,g),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(nt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-f,o)):(this._x=0,this._y=Math.atan2(l,g));break;case"XZY":this._z=Math.asin(-nt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,u),this._y=Math.atan2(l,o)):(this._x=Math.atan2(-h,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,r){return uu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(uu,n,r)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return hu.setFromEuler(this),this.setFromQuaternion(hu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}return i.DEFAULT_ORDER="XYZ",i})(),Mr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},pf=0,du=new k,ur=new Wn,On=new gt,go=new k,Zr=new k,mf=new k,gf=new Wn,fu=new k(1,0,0),pu=new k(0,1,0),mu=new k(0,0,1),gu={type:"added"},_f={type:"removed"},hr={type:"childadded",child:null},vl={type:"childremoved",child:null},cn=(()=>{class i extends Gn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pf++}),this.uuid=Dr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new k,n=new Xn,r=new Wn,s=new k(1,1,1);function o(){r.setFromEuler(n,!1)}function a(){n.setFromQuaternion(r,void 0,!1)}n._onChange(o),r._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new gt},normalMatrix:{value:new je}}),this.matrix=new gt,this.matrixWorld=new gt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Mr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return ur.setFromAxisAngle(t,n),this.quaternion.multiply(ur),this}rotateOnWorldAxis(t,n){return ur.setFromAxisAngle(t,n),this.quaternion.premultiply(ur),this}rotateX(t){return this.rotateOnAxis(fu,t)}rotateY(t){return this.rotateOnAxis(pu,t)}rotateZ(t){return this.rotateOnAxis(mu,t)}translateOnAxis(t,n){return du.copy(t).applyQuaternion(this.quaternion),this.position.add(du.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(fu,t)}translateY(t){return this.translateOnAxis(pu,t)}translateZ(t){return this.translateOnAxis(mu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(On.copy(this.matrixWorld).invert())}lookAt(t,n,r){t.isVector3?go.copy(t):go.set(t,n,r);let s=this.parent;this.updateWorldMatrix(!0,!1),Zr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?On.lookAt(Zr,go,this.up):On.lookAt(go,Zr,this.up),this.quaternion.setFromRotationMatrix(On),s&&(On.extractRotation(s.matrixWorld),ur.setFromRotationMatrix(On),this.quaternion.premultiply(ur.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(gu),hr.child=t,this.dispatchEvent(hr),hr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(_f),vl.child=t,this.dispatchEvent(vl),vl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),On.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),On.multiply(t.parent.matrixWorld)),t.applyMatrix4(On),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(gu),hr.child=t,this.dispatchEvent(hr),hr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let r=0,s=this.children.length;r<s;r++){let a=this.children[r].getObjectByProperty(t,n);if(a!==void 0)return a}}getObjectsByProperty(t,n,r=[]){this[t]===n&&r.push(this);let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].getObjectsByProperty(t,n,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zr,t,mf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zr,gf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);let n=this.children;for(let r=0,s=n.length;r<s;r++)n[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let n=this.children;for(let r=0,s=n.length;r<s;r++)n[r].traverseVisible(t)}traverseAncestors(t){let n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let n=this.children;for(let r=0,s=n.length;r<s;r++)n[r].updateMatrixWorld(t)}updateWorldMatrix(t,n){let r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){let n=t===void 0||typeof t=="string",r={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(l=>ks(kr({},l),{boundingBox:l.boundingBox?{min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}:void 0,boundingSphere:l.boundingSphere?{radius:l.boundingSphere.radius,center:l.boundingSphere.center.toArray()}:void 0})),s.instanceInfo=this._instanceInfo.map(l=>kr({},l)),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function o(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);let l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){let c=l.shapes;if(Array.isArray(c))for(let u=0,h=c.length;u<h;u++){let f=c[u];o(t.shapes,f)}else o(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let l=[];for(let c=0,u=this.material.length;c<u;c++)l.push(o(t.materials,this.material[c]));s.material=l}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){let c=this.animations[l];s.animations.push(o(t.animations,c))}}if(n){let l=a(t.geometries),c=a(t.materials),u=a(t.textures),h=a(t.images),f=a(t.shapes),p=a(t.skeletons),g=a(t.animations),v=a(t.nodes);l.length>0&&(r.geometries=l),c.length>0&&(r.materials=c),u.length>0&&(r.textures=u),h.length>0&&(r.images=h),f.length>0&&(r.shapes=f),p.length>0&&(r.skeletons=p),g.length>0&&(r.animations=g),v.length>0&&(r.nodes=v)}return r.object=s,r;function a(l){let c=[];for(let u in l){let h=l[u];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let r=0;r<t.children.length;r++){let s=t.children[r];this.add(s.clone())}return this}}return i.DEFAULT_UP=new k(0,1,0),i.DEFAULT_MATRIX_AUTO_UPDATE=!0,i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0,i})(),xn=new k,Bn=new k,yl=new k,kn=new k,dr=new k,fr=new k,_u=new k,Ml=new k,bl=new k,Sl=new k,wl=new vt,El=new vt,Tl=new vt,fi=class i{constructor(e=new k,t=new k,n=new k){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),xn.subVectors(e,t),r.cross(xn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){xn.subVectors(r,t),Bn.subVectors(n,t),yl.subVectors(e,t);let o=xn.dot(xn),a=xn.dot(Bn),l=xn.dot(yl),c=Bn.dot(Bn),u=Bn.dot(yl),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;let f=1/h,p=(c*l-a*u)*f,g=(o*u-a*l)*f;return s.set(1-p-g,g,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,kn)===null?!1:kn.x>=0&&kn.y>=0&&kn.x+kn.y<=1}static getInterpolation(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,kn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,kn.x),l.addScaledVector(o,kn.y),l.addScaledVector(a,kn.z),l)}static getInterpolatedAttribute(e,t,n,r,s,o){return wl.setScalar(0),El.setScalar(0),Tl.setScalar(0),wl.fromBufferAttribute(e,t),El.fromBufferAttribute(e,n),Tl.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(wl,s.x),o.addScaledVector(El,s.y),o.addScaledVector(Tl,s.z),o}static isFrontFacing(e,t,n,r){return xn.subVectors(n,t),Bn.subVectors(e,t),xn.cross(Bn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xn.subVectors(this.c,this.b),Bn.subVectors(this.a,this.b),xn.cross(Bn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,s=this.c,o,a;dr.subVectors(r,n),fr.subVectors(s,n),Ml.subVectors(e,n);let l=dr.dot(Ml),c=fr.dot(Ml);if(l<=0&&c<=0)return t.copy(n);bl.subVectors(e,r);let u=dr.dot(bl),h=fr.dot(bl);if(u>=0&&h<=u)return t.copy(r);let f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(dr,o);Sl.subVectors(e,s);let p=dr.dot(Sl),g=fr.dot(Sl);if(g>=0&&p<=g)return t.copy(s);let v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(fr,a);let m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return _u.subVectors(s,r),a=(h-u)/(h-u+(p-g)),t.copy(r).addScaledVector(_u,a);let d=1/(m+v+f);return o=v*d,a=f*d,t.copy(n).addScaledVector(dr,o).addScaledVector(fr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Sh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hi={h:0,s:0,l:0},_o={h:0,s:0,l:0};function Al(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ke=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=$t){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,at.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=at.workingColorSpace){return this.r=e,this.g=t,this.b=n,at.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=at.workingColorSpace){if(e=af(e,1),t=nt(t,0,1),n=nt(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Al(o,s,e+1/3),this.g=Al(o,s,e),this.b=Al(o,s,e-1/3)}return at.toWorkingColorSpace(this,r),this}setStyle(e,t=$t){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=$t){let n=Sh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vn(e.r),this.g=Vn(e.g),this.b=Vn(e.b),this}copyLinearToSRGB(e){return this.r=_r(e.r),this.g=_r(e.g),this.b=_r(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=$t){return at.fromWorkingColorSpace(Vt.copy(this),e),Math.round(nt(Vt.r*255,0,255))*65536+Math.round(nt(Vt.g*255,0,255))*256+Math.round(nt(Vt.b*255,0,255))}getHexString(e=$t){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=at.workingColorSpace){at.fromWorkingColorSpace(Vt.copy(this),t);let n=Vt.r,r=Vt.g,s=Vt.b,o=Math.max(n,r,s),a=Math.min(n,r,s),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-n)/h+2;break;case s:l=(n-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=at.workingColorSpace){return at.fromWorkingColorSpace(Vt.copy(this),t),e.r=Vt.r,e.g=Vt.g,e.b=Vt.b,e}getStyle(e=$t){at.fromWorkingColorSpace(Vt.copy(this),e);let t=Vt.r,n=Vt.g,r=Vt.b;return e!==$t?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(hi),this.setHSL(hi.h+e,hi.s+t,hi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(hi),e.getHSL(_o);let n=ul(hi.h,_o.h,t),r=ul(hi.s,_o.s,t),s=ul(hi.l,_o.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Vt=new Ke;Ke.NAMES=Sh;var xf=0,qn=class extends Gn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xf++}),this.uuid=Dr(),this.name="",this.type="Material",this.blending=Ni,this.side=Hn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Lo,this.blendDst=Do,this.blendEquation=mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ke(0,0,0),this.blendAlpha=0,this.depthFunc=Oi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ui,this.stencilZFail=Ui,this.stencilZPass=Ui,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ni&&(n.blending=this.blending),this.side!==Hn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Lo&&(n.blendSrc=this.blendSrc),this.blendDst!==Do&&(n.blendDst=this.blendDst),this.blendEquation!==mi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Oi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==kl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ui&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ui&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ui&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},yn=class extends qn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.combine=fa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var At=new k,xo=new fe,vf=0,Qt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:vf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=zl,this.updateRanges=[],this.gpuType=In,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)xo.fromBufferAttribute(this,t),xo.applyMatrix3(e),this.setXY(t,xo.x,xo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix3(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Xr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Yt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Xr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Yt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Xr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Yt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Xr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Yt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Xr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Yt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Yt(t,this.array),n=Yt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Yt(t,this.array),n=Yt(n,this.array),r=Yt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Yt(t,this.array),n=Yt(n,this.array),r=Yt(r,this.array),s=Yt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==zl&&(e.usage=this.usage),e}};var os=class extends Qt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var as=class extends Qt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var wt=class extends Qt{constructor(e,t,n){super(new Float32Array(e),t,n)}},yf=0,an=new gt,Cl=new cn,pr=new k,jt=new gi,Jr=new gi,Ft=new k,un=class i extends Gn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yf++}),this.uuid=Dr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(cc(e)?as:os)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new je().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return an.makeRotationFromQuaternion(e),this.applyMatrix4(an),this}rotateX(e){return an.makeRotationX(e),this.applyMatrix4(an),this}rotateY(e){return an.makeRotationY(e),this.applyMatrix4(an),this}rotateZ(e){return an.makeRotationZ(e),this.applyMatrix4(an),this}translate(e,t,n){return an.makeTranslation(e,t,n),this.applyMatrix4(an),this}scale(e,t,n){return an.makeScale(e,t,n),this.applyMatrix4(an),this}lookAt(e){return Cl.lookAt(e),Cl.updateMatrix(),this.applyMatrix4(Cl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(pr).negate(),this.translate(pr.x,pr.y,pr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let r=0,s=e.length;r<s;r++){let o=e[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new wt(n,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let s=t[n];jt.setFromBufferAttribute(s),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,jt.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,jt.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(jt.min),this.boundingBox.expandByPoint(jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){let n=this.boundingSphere.center;if(jt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];Jr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ft.addVectors(jt.min,Jr.min),jt.expandByPoint(Ft),Ft.addVectors(jt.max,Jr.max),jt.expandByPoint(Ft)):(jt.expandByPoint(Jr.min),jt.expandByPoint(Jr.max))}jt.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)Ft.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Ft));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ft.fromBufferAttribute(a,c),l&&(pr.fromBufferAttribute(e,c),Ft.add(pr)),r=Math.max(r,n.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qt(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let U=0;U<n.count;U++)a[U]=new k,l[U]=new k;let c=new k,u=new k,h=new k,f=new fe,p=new fe,g=new fe,v=new k,m=new k;function d(U,b,_){c.fromBufferAttribute(n,U),u.fromBufferAttribute(n,b),h.fromBufferAttribute(n,_),f.fromBufferAttribute(s,U),p.fromBufferAttribute(s,b),g.fromBufferAttribute(s,_),u.sub(c),h.sub(c),p.sub(f),g.sub(f);let R=1/(p.x*g.y-g.x*p.y);isFinite(R)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(R),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(R),a[U].add(v),a[b].add(v),a[_].add(v),l[U].add(m),l[b].add(m),l[_].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let U=0,b=T.length;U<b;++U){let _=T[U],R=_.start,z=_.count;for(let V=R,j=R+z;V<j;V+=3)d(e.getX(V+0),e.getX(V+1),e.getX(V+2))}let E=new k,y=new k,L=new k,P=new k;function I(U){L.fromBufferAttribute(r,U),P.copy(L);let b=a[U];E.copy(b),E.sub(L.multiplyScalar(L.dot(b))).normalize(),y.crossVectors(P,b);let R=y.dot(l[U])<0?-1:1;o.setXYZW(U,E.x,E.y,E.z,R)}for(let U=0,b=T.length;U<b;++U){let _=T[U],R=_.start,z=_.count;for(let V=R,j=R+z;V<j;V+=3)I(e.getX(V+0)),I(e.getX(V+1)),I(e.getX(V+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Qt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let r=new k,s=new k,o=new k,a=new k,l=new k,c=new k,u=new k,h=new k;if(e)for(let f=0,p=e.count;f<p;f+=3){let g=e.getX(f+0),v=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ft.fromBufferAttribute(e,t),Ft.normalize(),e.setXYZ(t,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u),p=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*u;for(let d=0;d<u;d++)f[g++]=c[p++]}return new Qt(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=e(l,n);t.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){let f=c[u],p=e(f,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){let p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let c in r){let u=r[c];this.setAttribute(c,u.clone(t))}let s=e.morphAttributes;for(let c in s){let u=[],h=s[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},xu=new gt,Di=new ss,vo=new yr,vu=new k,yo=new k,Mo=new k,bo=new k,Rl=new k,So=new k,yu=new k,wo=new k,pt=class extends cn{constructor(e=new un,t=new yn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){So.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let u=a[l],h=s[l];u!==0&&(Rl.fromBufferAttribute(h,e),o?So.addScaledVector(Rl,u):So.addScaledVector(Rl.sub(t),u))}t.add(So)}return t}raycast(e,t){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),vo.copy(n.boundingSphere),vo.applyMatrix4(s),Di.copy(e.ray).recast(e.near),!(vo.containsPoint(Di.origin)===!1&&(Di.intersectSphere(vo,vu)===null||Di.origin.distanceToSquared(vu)>(e.far-e.near)**2))&&(xu.copy(s).invert(),Di.copy(e.ray).applyMatrix4(xu),!(n.boundingBox!==null&&Di.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Di)))}_computeIntersections(e,t,n){let r,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){let m=f[g],d=o[m.materialIndex],T=Math.max(m.start,p.start),E=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=T,L=E;y<L;y+=3){let P=a.getX(y),I=a.getX(y+1),U=a.getX(y+2);r=Eo(this,d,e,n,c,u,h,P,I,U),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=g,d=v;m<d;m+=3){let T=a.getX(m),E=a.getX(m+1),y=a.getX(m+2);r=Eo(this,o,e,n,c,u,h,T,E,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){let m=f[g],d=o[m.materialIndex],T=Math.max(m.start,p.start),E=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=T,L=E;y<L;y+=3){let P=y,I=y+1,U=y+2;r=Eo(this,d,e,n,c,u,h,P,I,U),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=g,d=v;m<d;m+=3){let T=m,E=m+1,y=m+2;r=Eo(this,o,e,n,c,u,h,T,E,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}};function Mf(i,e,t,n,r,s,o,a){let l;if(e.side===Rt?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===Hn,a),l===null)return null;wo.copy(a),wo.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(wo);return c<t.near||c>t.far?null:{distance:c,point:wo.clone(),object:i}}function Eo(i,e,t,n,r,s,o,a,l,c){i.getVertexPosition(a,yo),i.getVertexPosition(l,Mo),i.getVertexPosition(c,bo);let u=Mf(i,e,t,n,yo,Mo,bo,yu);if(u){let h=new k;fi.getBarycoord(yu,yo,Mo,bo,h),r&&(u.uv=fi.getInterpolatedAttribute(r,a,l,c,h,new fe)),s&&(u.uv1=fi.getInterpolatedAttribute(s,a,l,c,h,new fe)),o&&(u.normal=fi.getInterpolatedAttribute(o,a,l,c,h,new k),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new k,materialIndex:0};fi.getNormal(yo,Mo,bo,f.normal),u.face=f,u.barycoord=h}return u}var br=class i extends un{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],u=[],h=[],f=0,p=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,r,o,2),g("x","z","y",1,-1,e,n,-t,r,o,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new wt(c,3)),this.setAttribute("normal",new wt(u,3)),this.setAttribute("uv",new wt(h,2));function g(v,m,d,T,E,y,L,P,I,U,b){let _=y/I,R=L/U,z=y/2,V=L/2,j=P/2,K=I+1,J=U+1,$=0,W=0,de=new k;for(let me=0;me<J;me++){let _e=me*R-V;for(let Fe=0;Fe<K;Fe++){let Xe=Fe*_-z;de[v]=Xe*T,de[m]=_e*E,de[d]=j,c.push(de.x,de.y,de.z),de[v]=0,de[m]=0,de[d]=P>0?1:-1,u.push(de.x,de.y,de.z),h.push(Fe/I),h.push(1-me/U),$+=1}}for(let me=0;me<U;me++)for(let _e=0;_e<I;_e++){let Fe=f+_e+K*me,Xe=f+_e+K*(me+1),q=f+(_e+1)+K*(me+1),ie=f+(_e+1)+K*me;l.push(Fe,Xe,ie),l.push(Xe,q,ie),W+=6}a.addGroup(p,W,b),p+=W,f+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Wi(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Ht(i){let e={};for(let t=0;t<i.length;t++){let n=Wi(i[t]);for(let r in n)e[r]=n[r]}return e}function bf(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function uc(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:at.workingColorSpace}var wh={clone:Wi,merge:Ht},Sf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,en=class extends qn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Sf,this.fragmentShader=wf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Wi(e.uniforms),this.uniformsGroups=bf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},ls=class extends cn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gt,this.projectionMatrix=new gt,this.projectionMatrixInverse=new gt,this.coordinateSystem=Tn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},di=new k,Mu=new fe,bu=new fe,Ct=class extends ls{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ns*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(cl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ns*2*Math.atan(Math.tan(cl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(di.x,di.y).multiplyScalar(-e/di.z),di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(di.x,di.y).multiplyScalar(-e/di.z)}getViewSize(e,t){return this.getViewBounds(e,Mu,bu),t.subVectors(bu,Mu)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(cl*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},mr=-90,gr=1,zo=class extends cn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Ct(mr,gr,e,t);r.layers=this.layers,this.add(r);let s=new Ct(mr,gr,e,t);s.layers=this.layers,this.add(s);let o=new Ct(mr,gr,e,t);o.layers=this.layers,this.add(o);let a=new Ct(mr,gr,e,t);a.layers=this.layers,this.add(a);let l=new Ct(mr,gr,e,t);l.layers=this.layers,this.add(l);let c=new Ct(mr,gr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,l]=t;for(let c of t)this.remove(c);if(e===Tn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ts)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(h,f,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},cs=class extends Ei{constructor(e=[],t=Hi,n,r,s,o,a,l,c,u){super(e,t,n,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Vo=class extends Cn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new cs(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:vn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new br(5,5,5),s=new en({name:"CubemapFromEquirect",uniforms:Wi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Rt,blending:Zn});s.uniforms.tEquirect.value=t;let o=new pt(r,s),a=t.minFilter;return t.minFilter===Si&&(t.minFilter=vn),new zo(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}},zn=class extends cn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Ef={type:"move"},Sr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let v of e.hand.values()){let m=t.getJointPose(v,n),d=this._getHandJoint(c,v);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ef)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new zn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var _i=class extends cn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xn,this.environmentIntensity=1,this.environmentRotation=new Xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var Pl=new k,Tf=new k,Af=new je,En=class{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Pl.subVectors(n,t).cross(Tf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Pl),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Af.getNormalMatrix(e),r=this.coplanarPoint(Pl).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Fi=new yr,To=new k,wr=class{constructor(e=new En,t=new En,n=new En,r=new En,s=new En,o=new En){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Tn){let n=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],h=r[6],f=r[7],p=r[8],g=r[9],v=r[10],m=r[11],d=r[12],T=r[13],E=r[14],y=r[15];if(n[0].setComponents(l-s,f-c,m-p,y-d).normalize(),n[1].setComponents(l+s,f+c,m+p,y+d).normalize(),n[2].setComponents(l+o,f+u,m+g,y+T).normalize(),n[3].setComponents(l-o,f-u,m-g,y-T).normalize(),n[4].setComponents(l-a,f-h,m-v,y-E).normalize(),t===Tn)n[5].setComponents(l+a,f+h,m+v,y+E).normalize();else if(t===ts)n[5].setComponents(a,h,v,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Fi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Fi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fi)}intersectsSprite(e){return Fi.center.set(0,0,0),Fi.radius=.7071067811865476,Fi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fi)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(To.x=r.normal.x>0?e.max.x:e.min.x,To.y=r.normal.y>0?e.max.y:e.min.y,To.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(To)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var us=class extends Ei{constructor(e,t,n=wi,r,s,o,a=ln,l=ln,c,u=xr){if(u!==xr&&u!==Lr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,r,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new vr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}};var tn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,s=n.length,o;t?o=t:o=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=n[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===o)return r/(s-1);let u=n[r],f=n[r+1]-u,p=(o-u)/f;return(r+p)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);let o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new fe:new k);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new k,r=[],s=[],o=[],a=new k,l=new gt;for(let p=0;p<=e;p++){let g=p/e;r[p]=this.getTangentAt(g,new k)}s[0]=new k,o[0]=new k;let c=Number.MAX_VALUE,u=Math.abs(r[0].x),h=Math.abs(r[0].y),f=Math.abs(r[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(nt(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(r[p],s[p])}if(t===!0){let p=Math.acos(nt(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],p*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Er=class extends tn{constructor(e=0,t=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new fe){let n=t,r=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);let a=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*u-p*h+this.aX,c=f*h+p*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Ho=class extends Er{constructor(e,t,n,r,s,o){super(e,t,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}};function hc(){let i=0,e=0,t=0,n=0;function r(s,o,a,l){i=s,e=a,t=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,h){let f=(o-s)/c-(a-s)/(c+u)+(a-o)/u,p=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,p*=u,r(o,a,f,p)},calc:function(s){let o=s*s,a=o*s;return i+e*s+t*o+n*a}}}var Ao=new k,Il=new hc,Ll=new hc,Dl=new hc,Go=class extends tn{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new k){let n=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(Ao.subVectors(r[0],r[1]).add(r[0]),c=Ao);let h=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(Ao.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Ao),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(h),p),v=Math.pow(h.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(u),p);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),Il.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,g,v,m),Ll.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,g,v,m),Dl.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,g,v,m)}else this.curveType==="catmullrom"&&(Il.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),Ll.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),Dl.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return n.set(Il.calc(l),Ll.calc(l),Dl.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new k().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Su(i,e,t,n,r){let s=(n-e)*.5,o=(r-t)*.5,a=i*i,l=i*a;return(2*t-2*n+s+o)*l+(-3*t+3*n-2*s-o)*a+s*i+t}function Cf(i,e){let t=1-i;return t*t*e}function Rf(i,e){return 2*(1-i)*i*e}function Pf(i,e){return i*i*e}function jr(i,e,t,n){return Cf(i,e)+Rf(i,t)+Pf(i,n)}function If(i,e){let t=1-i;return t*t*t*e}function Lf(i,e){let t=1-i;return 3*t*t*i*e}function Df(i,e){return 3*(1-i)*i*i*e}function Ff(i,e){return i*i*i*e}function $r(i,e,t,n,r){return If(i,e)+Lf(i,t)+Df(i,n)+Ff(i,r)}var hs=class extends tn{constructor(e=new fe,t=new fe,n=new fe,r=new fe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new fe){let n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set($r(e,r.x,s.x,o.x,a.x),$r(e,r.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Wo=class extends tn{constructor(e=new k,t=new k,n=new k,r=new k){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new k){let n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set($r(e,r.x,s.x,o.x,a.x),$r(e,r.y,s.y,o.y,a.y),$r(e,r.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ds=class extends tn{constructor(e=new fe,t=new fe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new fe){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new fe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Xo=class extends tn{constructor(e=new k,t=new k){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new k){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new k){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},fs=class extends tn{constructor(e=new fe,t=new fe,n=new fe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new fe){let n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(jr(e,r.x,s.x,o.x),jr(e,r.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},qo=class extends tn{constructor(e=new k,t=new k,n=new k){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new k){let n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(jr(e,r.x,s.x,o.x),jr(e,r.y,s.y,o.y),jr(e,r.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ps=class extends tn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new fe){let n=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return n.set(Su(a,l.x,c.x,u.x,h.x),Su(a,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new fe().fromArray(r))}return this}},Vl=Object.freeze({__proto__:null,ArcCurve:Ho,CatmullRomCurve3:Go,CubicBezierCurve:hs,CubicBezierCurve3:Wo,EllipseCurve:Er,LineCurve:ds,LineCurve3:Xo,QuadraticBezierCurve:fs,QuadraticBezierCurve3:qo,SplineCurve:ps}),Yo=class extends tn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Vl[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),s=0;for(;s<r.length;){if(r[s]>=n){let o=r[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,s=this.curves;r<s.length;r++){let o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let r=e.curves[t];this.curves.push(new Vl[r.type]().fromJSON(r))}return this}},ms=class extends Yo{constructor(e){super(),this.type="Path",this.currentPoint=new fe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new ds(this.currentPoint.clone(),new fe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let s=new fs(this.currentPoint.clone(),new fe(e,t),new fe(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,o){let a=new hs(this.currentPoint.clone(),new fe(e,t),new fe(n,r),new fe(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new ps(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,r,s,o),this}absarc(e,t,n,r,s,o){return this.absellipse(e,t,n,n,r,s,o),this}ellipse(e,t,n,r,s,o,a,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,r,s,o,a,l),this}absellipse(e,t,n,r,s,o,a,l){let c=new Er(e,t,n,r,s,o,a,l);if(this.curves.length>0){let h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},xi=class extends ms{constructor(e){super(e),this.uuid=Dr(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let r=e.holes[t];this.holes.push(new ms().fromJSON(r))}return this}};function Uf(i,e,t=2){let n=e&&e.length,r=n?e[0]*t:i.length,s=Eh(i,0,r,t,!0),o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(n&&(s=zf(i,e,s,t)),i.length>80*t){a=1/0,l=1/0;let u=-1/0,h=-1/0;for(let f=t;f<r;f+=t){let p=i[f],g=i[f+1];p<a&&(a=p),g<l&&(l=g),p>u&&(u=p),g>h&&(h=g)}c=Math.max(u-a,h-l),c=c!==0?32767/c:0}return gs(s,o,t,a,l,c,0),o}function Eh(i,e,t,n,r){let s;if(r===jf(i,e,t,n)>0)for(let o=e;o<t;o+=n)s=wu(o/n|0,i[o],i[o+1],s);else for(let o=t-n;o>=e;o-=n)s=wu(o/n|0,i[o],i[o+1],s);return s&&Tr(s,s.next)&&(xs(s),s=s.next),s}function ki(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Tr(t,t.next)||xt(t.prev,t,t.next)===0)){if(xs(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function gs(i,e,t,n,r,s,o){if(!i)return;!o&&s&&Xf(i,n,r,s);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(s?Of(i,n,r,s):Nf(i)){e.push(l.i,i.i,c.i),xs(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Bf(ki(i),e),gs(i,e,t,n,r,s,2)):o===2&&kf(i,e,t,n,r,s):gs(ki(i),e,t,n,r,s,1);break}}}function Nf(i){let e=i.prev,t=i,n=i.next;if(xt(e,t,n)>=0)return!1;let r=e.x,s=t.x,o=n.x,a=e.y,l=t.y,c=n.y,u=Math.min(r,s,o),h=Math.min(a,l,c),f=Math.max(r,s,o),p=Math.max(a,l,c),g=n.next;for(;g!==e;){if(g.x>=u&&g.x<=f&&g.y>=h&&g.y<=p&&Kr(r,a,s,l,o,c,g.x,g.y)&&xt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Of(i,e,t,n){let r=i.prev,s=i,o=i.next;if(xt(r,s,o)>=0)return!1;let a=r.x,l=s.x,c=o.x,u=r.y,h=s.y,f=o.y,p=Math.min(a,l,c),g=Math.min(u,h,f),v=Math.max(a,l,c),m=Math.max(u,h,f),d=Hl(p,g,e,t,n),T=Hl(v,m,e,t,n),E=i.prevZ,y=i.nextZ;for(;E&&E.z>=d&&y&&y.z<=T;){if(E.x>=p&&E.x<=v&&E.y>=g&&E.y<=m&&E!==r&&E!==o&&Kr(a,u,l,h,c,f,E.x,E.y)&&xt(E.prev,E,E.next)>=0||(E=E.prevZ,y.x>=p&&y.x<=v&&y.y>=g&&y.y<=m&&y!==r&&y!==o&&Kr(a,u,l,h,c,f,y.x,y.y)&&xt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;E&&E.z>=d;){if(E.x>=p&&E.x<=v&&E.y>=g&&E.y<=m&&E!==r&&E!==o&&Kr(a,u,l,h,c,f,E.x,E.y)&&xt(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;y&&y.z<=T;){if(y.x>=p&&y.x<=v&&y.y>=g&&y.y<=m&&y!==r&&y!==o&&Kr(a,u,l,h,c,f,y.x,y.y)&&xt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Bf(i,e){let t=i;do{let n=t.prev,r=t.next.next;!Tr(n,r)&&Ah(n,t,t.next,r)&&_s(n,r)&&_s(r,n)&&(e.push(n.i,t.i,r.i),xs(t),xs(t.next),t=i=r),t=t.next}while(t!==i);return ki(t)}function kf(i,e,t,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Zf(o,a)){let l=Ch(o,a);o=ki(o,o.next),l=ki(l,l.next),gs(o,e,t,n,r,s,0),gs(l,e,t,n,r,s,0);return}a=a.next}o=o.next}while(o!==i)}function zf(i,e,t,n){let r=[];for(let s=0,o=e.length;s<o;s++){let a=e[s]*n,l=s<o-1?e[s+1]*n:i.length,c=Eh(i,a,l,n,!1);c===c.next&&(c.steiner=!0),r.push(Yf(c))}r.sort(Vf);for(let s=0;s<r.length;s++)t=Hf(r[s],t);return t}function Vf(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=n-r}return t}function Hf(i,e){let t=Gf(i,e);if(!t)return e;let n=Ch(t,i);return ki(n,n.next),ki(t,t.next)}function Gf(i,e){let t=e,n=i.x,r=i.y,s=-1/0,o;if(Tr(i,t))return t;do{if(Tr(i,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){let h=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=n&&h>s&&(s=h,o=t.x<t.next.x?t:t.next,h===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,u=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Th(r<c?n:s,r,l,c,r<c?s:n,r,t.x,t.y)){let h=Math.abs(r-t.y)/(n-t.x);_s(t,i)&&(h<u||h===u&&(t.x>o.x||t.x===o.x&&Wf(o,t)))&&(o=t,u=h)}t=t.next}while(t!==a);return o}function Wf(i,e){return xt(i.prev,i,e.prev)<0&&xt(e.next,i,i.next)<0}function Xf(i,e,t,n){let r=i;do r.z===0&&(r.z=Hl(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,qf(r)}function qf(i){let e,t=1;do{let n=i,r;i=null;let s=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(r=n,n=n.nextZ,a--):(r=o,o=o.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;n=o}s.nextZ=null,t*=2}while(e>1);return i}function Hl(i,e,t,n,r){return i=(i-t)*r|0,e=(e-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Yf(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Th(i,e,t,n,r,s,o,a){return(r-o)*(e-a)>=(i-o)*(s-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(n-a)}function Kr(i,e,t,n,r,s,o,a){return!(i===o&&e===a)&&Th(i,e,t,n,r,s,o,a)}function Zf(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Jf(i,e)&&(_s(i,e)&&_s(e,i)&&Kf(i,e)&&(xt(i.prev,i,e.prev)||xt(i,e.prev,e))||Tr(i,e)&&xt(i.prev,i,i.next)>0&&xt(e.prev,e,e.next)>0)}function xt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Tr(i,e){return i.x===e.x&&i.y===e.y}function Ah(i,e,t,n){let r=Ro(xt(i,e,t)),s=Ro(xt(i,e,n)),o=Ro(xt(t,n,i)),a=Ro(xt(t,n,e));return!!(r!==s&&o!==a||r===0&&Co(i,t,e)||s===0&&Co(i,n,e)||o===0&&Co(t,i,n)||a===0&&Co(t,e,n))}function Co(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Ro(i){return i>0?1:i<0?-1:0}function Jf(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Ah(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function _s(i,e){return xt(i.prev,i,i.next)<0?xt(i,e,i.next)>=0&&xt(i,i.prev,e)>=0:xt(i,e,i.prev)<0||xt(i,i.next,e)<0}function Kf(i,e){let t=i,n=!1,r=(i.x+e.x)/2,s=(i.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Ch(i,e){let t=Gl(i.i,i.x,i.y),n=Gl(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function wu(i,e,t,n){let r=Gl(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function xs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Gl(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function jf(i,e,t,n){let r=0;for(let s=e,o=t-n;s<t;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}var Wl=class{static triangulate(e,t,n=2){return Uf(e,t,n)}},An=class i{static area(e){let t=e.length,n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],r=[],s=[];Eu(e),Tu(n,e);let o=e.length;t.forEach(Eu);for(let l=0;l<t.length;l++)r.push(o),o+=t[l].length,Tu(n,t[l]);let a=Wl.triangulate(n,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}};function Eu(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Tu(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var vs=class i extends un{constructor(e=new xi([new fe(.5,.5),new fe(-.5,.5),new fe(-.5,-.5),new fe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new wt(r,3)),this.setAttribute("uv",new wt(s,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:p-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,d=t.extrudePath,T=t.UVGenerator!==void 0?t.UVGenerator:$f,E,y=!1,L,P,I,U;d&&(E=d.getSpacedPoints(u),y=!0,f=!1,L=d.computeFrenetFrames(u,!1),P=new k,I=new k,U=new k),f||(m=0,p=0,g=0,v=0);let b=a.extractPoints(c),_=b.shape,R=b.holes;if(!An.isClockWise(_)){_=_.reverse();for(let S=0,he=R.length;S<he;S++){let re=R[S];An.isClockWise(re)&&(R[S]=re.reverse())}}function V(S){let re=10000000000000001e-36,le=S[0];for(let Q=1;Q<=S.length;Q++){let Ie=Q%S.length,se=S[Ie],w=se.x-le.x,x=se.y-le.y,B=w*w+x*x,Z=Math.max(Math.abs(se.x),Math.abs(se.y),Math.abs(le.x),Math.abs(le.y)),ne=re*Z*Z;if(B<=ne){S.splice(Ie,1),Q--;continue}le=se}}V(_),R.forEach(V);let j=R.length,K=_;for(let S=0;S<j;S++){let he=R[S];_=_.concat(he)}function J(S,he,re){return he||console.error("THREE.ExtrudeGeometry: vec does not exist"),S.clone().addScaledVector(he,re)}let $=_.length;function W(S,he,re){let le,Q,Ie,se=S.x-he.x,w=S.y-he.y,x=re.x-S.x,B=re.y-S.y,Z=se*se+w*w,ne=se*B-w*x;if(Math.abs(ne)>Number.EPSILON){let X=Math.sqrt(Z),Re=Math.sqrt(x*x+B*B),ge=he.x-w/X,Be=he.y+se/X,Ge=re.x-B/Re,oe=re.y+x/Re,be=((Ge-ge)*B-(oe-Be)*x)/(se*B-w*x);le=ge+se*be-S.x,Q=Be+w*be-S.y;let He=le*le+Q*Q;if(He<=2)return new fe(le,Q);Ie=Math.sqrt(He/2)}else{let X=!1;se>Number.EPSILON?x>Number.EPSILON&&(X=!0):se<-Number.EPSILON?x<-Number.EPSILON&&(X=!0):Math.sign(w)===Math.sign(B)&&(X=!0),X?(le=-w,Q=se,Ie=Math.sqrt(Z)):(le=se,Q=w,Ie=Math.sqrt(Z/2))}return new fe(le/Ie,Q/Ie)}let de=[];for(let S=0,he=K.length,re=he-1,le=S+1;S<he;S++,re++,le++)re===he&&(re=0),le===he&&(le=0),de[S]=W(K[S],K[re],K[le]);let me=[],_e,Fe=de.concat();for(let S=0,he=j;S<he;S++){let re=R[S];_e=[];for(let le=0,Q=re.length,Ie=Q-1,se=le+1;le<Q;le++,Ie++,se++)Ie===Q&&(Ie=0),se===Q&&(se=0),_e[le]=W(re[le],re[Ie],re[se]);me.push(_e),Fe=Fe.concat(_e)}let Xe;if(m===0)Xe=An.triangulateShape(K,R);else{let S=[],he=[];for(let re=0;re<m;re++){let le=re/m,Q=p*Math.cos(le*Math.PI/2),Ie=g*Math.sin(le*Math.PI/2)+v;for(let se=0,w=K.length;se<w;se++){let x=J(K[se],de[se],Ie);Ve(x.x,x.y,-Q),le===0&&S.push(x)}for(let se=0,w=j;se<w;se++){let x=R[se];_e=me[se];let B=[];for(let Z=0,ne=x.length;Z<ne;Z++){let X=J(x[Z],_e[Z],Ie);Ve(X.x,X.y,-Q),le===0&&B.push(X)}le===0&&he.push(B)}}Xe=An.triangulateShape(S,he)}let q=Xe.length,ie=g+v;for(let S=0;S<$;S++){let he=f?J(_[S],Fe[S],ie):_[S];y?(I.copy(L.normals[0]).multiplyScalar(he.x),P.copy(L.binormals[0]).multiplyScalar(he.y),U.copy(E[0]).add(I).add(P),Ve(U.x,U.y,U.z)):Ve(he.x,he.y,0)}for(let S=1;S<=u;S++)for(let he=0;he<$;he++){let re=f?J(_[he],Fe[he],ie):_[he];y?(I.copy(L.normals[S]).multiplyScalar(re.x),P.copy(L.binormals[S]).multiplyScalar(re.y),U.copy(E[S]).add(I).add(P),Ve(U.x,U.y,U.z)):Ve(re.x,re.y,h/u*S)}for(let S=m-1;S>=0;S--){let he=S/m,re=p*Math.cos(he*Math.PI/2),le=g*Math.sin(he*Math.PI/2)+v;for(let Q=0,Ie=K.length;Q<Ie;Q++){let se=J(K[Q],de[Q],le);Ve(se.x,se.y,h+re)}for(let Q=0,Ie=R.length;Q<Ie;Q++){let se=R[Q];_e=me[Q];for(let w=0,x=se.length;w<x;w++){let B=J(se[w],_e[w],le);y?Ve(B.x,B.y+E[u-1].y,E[u-1].x+re):Ve(B.x,B.y,h+re)}}}ue(),ce();function ue(){let S=r.length/3;if(f){let he=0,re=$*he;for(let le=0;le<q;le++){let Q=Xe[le];Ce(Q[2]+re,Q[1]+re,Q[0]+re)}he=u+m*2,re=$*he;for(let le=0;le<q;le++){let Q=Xe[le];Ce(Q[0]+re,Q[1]+re,Q[2]+re)}}else{for(let he=0;he<q;he++){let re=Xe[he];Ce(re[2],re[1],re[0])}for(let he=0;he<q;he++){let re=Xe[he];Ce(re[0]+$*u,re[1]+$*u,re[2]+$*u)}}n.addGroup(S,r.length/3-S,0)}function ce(){let S=r.length/3,he=0;Ae(K,he),he+=K.length;for(let re=0,le=R.length;re<le;re++){let Q=R[re];Ae(Q,he),he+=Q.length}n.addGroup(S,r.length/3-S,1)}function Ae(S,he){let re=S.length;for(;--re>=0;){let le=re,Q=re-1;Q<0&&(Q=S.length-1);for(let Ie=0,se=u+m*2;Ie<se;Ie++){let w=$*Ie,x=$*(Ie+1),B=he+le+w,Z=he+Q+w,ne=he+Q+x,X=he+le+x;We(B,Z,ne,X)}}}function Ve(S,he,re){l.push(S),l.push(he),l.push(re)}function Ce(S,he,re){Te(S),Te(he),Te(re);let le=r.length/3,Q=T.generateTopUV(n,r,le-3,le-2,le-1);Pe(Q[0]),Pe(Q[1]),Pe(Q[2])}function We(S,he,re,le){Te(S),Te(he),Te(le),Te(he),Te(re),Te(le);let Q=r.length/3,Ie=T.generateSideWallUV(n,r,Q-6,Q-3,Q-2,Q-1);Pe(Ie[0]),Pe(Ie[1]),Pe(Ie[3]),Pe(Ie[1]),Pe(Ie[2]),Pe(Ie[3])}function Te(S){r.push(l[S*3+0]),r.push(l[S*3+1]),r.push(l[S*3+2])}function Pe(S){s.push(S.x),s.push(S.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Qf(t,n,e)}static fromJSON(e,t){let n=[];for(let s=0,o=e.shapes.length;s<o;s++){let a=t[e.shapes[s]];n.push(a)}let r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new Vl[r.type]().fromJSON(r)),new i(n,e.options)}},$f={generateTopUV:function(i,e,t,n,r){let s=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[r*3],u=e[r*3+1];return[new fe(s,o),new fe(a,l),new fe(c,u)]},generateSideWallUV:function(i,e,t,n,r,s){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],h=e[n*3+2],f=e[r*3],p=e[r*3+1],g=e[r*3+2],v=e[s*3],m=e[s*3+1],d=e[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new fe(o,1-l),new fe(c,1-h),new fe(f,1-g),new fe(v,1-d)]:[new fe(a,1-l),new fe(u,1-h),new fe(p,1-g),new fe(m,1-d)]}};function Qf(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){let s=i[n];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var zi=class i extends un{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,h=e/a,f=t/l,p=[],g=[],v=[],m=[];for(let d=0;d<u;d++){let T=d*f-o;for(let E=0;E<c;E++){let y=E*h-s;g.push(y,-T,0),v.push(0,0,1),m.push(E/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let T=0;T<a;T++){let E=T+c*d,y=T+c*(d+1),L=T+1+c*(d+1),P=T+1+c*d;p.push(E,y,P),p.push(y,L,P)}this.setIndex(p),this.setAttribute("position",new wt(g,3)),this.setAttribute("normal",new wt(v,3)),this.setAttribute("uv",new wt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Ar=class i extends un{constructor(e=.5,t=1,n=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:o},n=Math.max(3,n),r=Math.max(1,r);let a=[],l=[],c=[],u=[],h=e,f=(t-e)/r,p=new k,g=new fe;for(let v=0;v<=r;v++){for(let m=0;m<=n;m++){let d=s+m/n*o;p.x=h*Math.cos(d),p.y=h*Math.sin(d),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,u.push(g.x,g.y)}h+=f}for(let v=0;v<r;v++){let m=v*(n+1);for(let d=0;d<n;d++){let T=d+m,E=T,y=T+n+1,L=T+n+2,P=T+1;a.push(E,y,P),a.push(y,L,P)}}this.setIndex(a),this.setAttribute("position",new wt(l,3)),this.setAttribute("normal",new wt(c,3)),this.setAttribute("uv",new wt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},ys=class i extends un{constructor(e=new xi([new fe(0,.5),new fe(-.5,-.5),new fe(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],r=[],s=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new wt(r,3)),this.setAttribute("normal",new wt(s,3)),this.setAttribute("uv",new wt(o,2));function c(u){let h=r.length/3,f=u.extractPoints(t),p=f.shape,g=f.holes;An.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,d=g.length;m<d;m++){let T=g[m];An.isClockWise(T)===!0&&(g[m]=T.reverse())}let v=An.triangulateShape(p,g);for(let m=0,d=g.length;m<d;m++){let T=g[m];p=p.concat(T)}for(let m=0,d=p.length;m<d;m++){let T=p[m];r.push(T.x,T.y,0),s.push(0,0,1),o.push(T.x,T.y)}for(let m=0,d=v.length;m<d;m++){let T=v[m],E=T[0]+h,y=T[1]+h,L=T[2]+h;n.push(E,y,L),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return ep(t,e)}static fromJSON(e,t){let n=[];for(let r=0,s=e.shapes.length;r<s;r++){let o=t[e.shapes[r]];n.push(o)}return new i(n,e.curveSegments)}};function ep(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let r=i[t];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e}var vi=class i extends un{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,u=[],h=new k,f=new k,p=[],g=[],v=[],m=[];for(let d=0;d<=n;d++){let T=[],E=d/n,y=0;d===0&&o===0?y=.5/t:d===n&&l===Math.PI&&(y=-.5/t);for(let L=0;L<=t;L++){let P=L/t;h.x=-e*Math.cos(r+P*s)*Math.sin(o+E*a),h.y=e*Math.cos(o+E*a),h.z=e*Math.sin(r+P*s)*Math.sin(o+E*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),v.push(f.x,f.y,f.z),m.push(P+y,1-E),T.push(c++)}u.push(T)}for(let d=0;d<n;d++)for(let T=0;T<t;T++){let E=u[d][T+1],y=u[d][T],L=u[d+1][T],P=u[d+1][T+1];(d!==0||o>0)&&p.push(E,y,P),(d!==n-1||l<Math.PI)&&p.push(y,L,P)}this.setIndex(p),this.setAttribute("position",new wt(g,3)),this.setAttribute("normal",new wt(v,3)),this.setAttribute("uv",new wt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Rn=class extends qn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ja,this.normalScale=new fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Ms=class extends qn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ja,this.normalScale=new fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.combine=fa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Zo=class extends qn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ch,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Jo=class extends qn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Po(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function tp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Vi=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=t[++n],e<r)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ko=class extends Vi{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Nl,endingEnd:Nl}}intervalChanged_(e,t,n){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ol:s=e,a=2*t-n;break;case Bl:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ol:o=e,l=2*n-t;break;case Bl:o=1,l=n+r[1]-r[0];break;default:o=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(n-t)/(r-t),v=g*g,m=v*g,d=-f*m+2*f*v-f*g,T=(1+f)*m+(-1.5-2*f)*v+(-.5+f)*g+1,E=(-1-p)*m+(1.5+p)*v+.5*g,y=p*m-p*v;for(let L=0;L!==a;++L)s[L]=d*o[u+L]+T*o[c+L]+E*o[l+L]+y*o[h+L];return s}},jo=class extends Vi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(r-t),h=1-u;for(let f=0;f!==a;++f)s[f]=o[c+f]*h+o[l+f]*u;return s}},$o=class extends Vi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},nn=class{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Po(t,this.TimeBufferType),this.values=Po(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Po(e.times,Array),values:Po(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new $o(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new jo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ko(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Qr:t=this.InterpolantFactoryMethodDiscrete;break;case No:t=this.InterpolantFactoryMethodLinear;break;case Io:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Qr;case this.InterpolantFactoryMethodLinear:return No;case this.InterpolantFactoryMethodSmooth:return Io}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,s=0,o=r-1;for(;s!==r&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&tp(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Io,s=e.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(r)l=!0;else{let h=a*n,f=h-n,p=h+n;for(let g=0;g!==n;++g){let v=t[h+g];if(v!==t[f+g]||v!==t[p+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let h=a*n,f=o*n;for(let p=0;p!==n;++p)t[f+p]=t[h+p]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};nn.prototype.ValueTypeName="";nn.prototype.TimeBufferType=Float32Array;nn.prototype.ValueBufferType=Float32Array;nn.prototype.DefaultInterpolation=No;var yi=class extends nn{constructor(e,t,n){super(e,t,n)}};yi.prototype.ValueTypeName="bool";yi.prototype.ValueBufferType=Array;yi.prototype.DefaultInterpolation=Qr;yi.prototype.InterpolantFactoryMethodLinear=void 0;yi.prototype.InterpolantFactoryMethodSmooth=void 0;var Qo=class extends nn{constructor(e,t,n,r){super(e,t,n,r)}};Qo.prototype.ValueTypeName="color";var ea=class extends nn{constructor(e,t,n,r){super(e,t,n,r)}};ea.prototype.ValueTypeName="number";var ta=class extends Vi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(r-t),c=e*a;for(let u=c+a;c!==u;c+=4)Wn.slerpFlat(s,0,o,c-a,o,c,l);return s}},bs=class extends nn{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new ta(this.times,this.values,this.getValueSize(),e)}};bs.prototype.ValueTypeName="quaternion";bs.prototype.InterpolantFactoryMethodSmooth=void 0;var Mi=class extends nn{constructor(e,t,n){super(e,t,n)}};Mi.prototype.ValueTypeName="string";Mi.prototype.ValueBufferType=Array;Mi.prototype.DefaultInterpolation=Qr;Mi.prototype.InterpolantFactoryMethodLinear=void 0;Mi.prototype.InterpolantFactoryMethodSmooth=void 0;var na=class extends nn{constructor(e,t,n,r){super(e,t,n,r)}};na.prototype.ValueTypeName="vector";var Cr=class extends cn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ke(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}};var Fl=new gt,Au=new k,Cu=new k,ia=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new fe(512,512),this.mapType=Mn,this.map=null,this.mapPass=null,this.matrix=new gt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wr,this._frameExtents=new fe(1,1),this._viewportCount=1,this._viewports=[new vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Au.setFromMatrixPosition(e.matrixWorld),t.position.copy(Au),Cu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Cu),t.updateMatrixWorld(),Fl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Fl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Xl=class extends ia{constructor(){super(new Ct(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=ns*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Ss=class extends Cr{constructor(e,t,n=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(cn.DEFAULT_UP),this.updateMatrix(),this.target=new cn,this.distance=n,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new Xl}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var ws=class extends ls{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ql=class extends ia{constructor(){super(new ws(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Yn=class extends Cr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(cn.DEFAULT_UP),this.updateMatrix(),this.target=new cn,this.shadow=new ql}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},bi=class extends Cr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var ra=class extends Ct{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Es=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ru(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Ru();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Ru(){return performance.now()}var dc="\\[\\]\\.:\\/",np=new RegExp("["+dc+"]","g"),fc="[^"+dc+"]",ip="[^"+dc.replace("\\.","")+"]",rp=/((?:WC+[\/:])*)/.source.replace("WC",fc),sp=/(WCOD+)?/.source.replace("WCOD",ip),op=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",fc),ap=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",fc),lp=new RegExp("^"+rp+sp+op+ap+"$"),cp=["material","materials","bones","map"],Yl=class{constructor(e,t,n){let r=n||St.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},St=(()=>{class i{constructor(t,n,r){this.path=n,this.parsedPath=r||i.parseTrackName(n),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new i.Composite(t,n,r):new i(t,n,r)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(np,"")}static parseTrackName(t){let n=lp.exec(t);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let r={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=r.nodeName&&r.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let o=r.nodeName.substring(s+1);cp.indexOf(o)!==-1&&(r.nodeName=r.nodeName.substring(0,s),r.objectName=o)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return r}static findNode(t,n){if(n===void 0||n===""||n==="."||n===-1||n===t.name||n===t.uuid)return t;if(t.skeleton){let r=t.skeleton.getBoneByName(n);if(r!==void 0)return r}if(t.children){let r=function(o){for(let a=0;a<o.length;a++){let l=o[a];if(l.name===n||l.uuid===n)return l;let c=r(l.children);if(c)return c}return null},s=r(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,n){t[n]=this.targetObject[this.propertyName]}_getValue_array(t,n){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)t[n++]=r[s]}_getValue_arrayElement(t,n){t[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,n){this.resolvedProperty.toArray(t,n)}_setValue_direct(t,n){this.targetObject[this.propertyName]=t[n]}_setValue_direct_setNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,n){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[n++]}_setValue_array_setNeedsUpdate(t,n){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,n){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,n){this.resolvedProperty[this.propertyIndex]=t[n]}_setValue_arrayElement_setNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,n){this.resolvedProperty.fromArray(t,n)}_setValue_fromArray_setNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,n){this.bind(),this.getValue(t,n)}_setValue_unbound(t,n){this.bind(),this.setValue(t,n)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,s=n.propertyName,o=n.propertyIndex;if(t||(t=i.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let u=n.objectIndex;switch(r){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===u){u=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[r]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[r]}if(u!==void 0){if(t[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[u]}}let a=t[s];if(a===void 0){let u=n.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+s+" but it wasn't found.",t);return}let l=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?l=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(o!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=o}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}return i.Composite=Yl,i})();St.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};St.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};St.prototype.GetterByBindingType=[St.prototype._getValue_direct,St.prototype._getValue_array,St.prototype._getValue_arrayElement,St.prototype._getValue_toArray];St.prototype.SetterByBindingTypeAndVersioning=[[St.prototype._setValue_direct,St.prototype._setValue_direct_setNeedsUpdate,St.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[St.prototype._setValue_array,St.prototype._setValue_array_setNeedsUpdate,St.prototype._setValue_array_setMatrixWorldNeedsUpdate],[St.prototype._setValue_arrayElement,St.prototype._setValue_arrayElement_setNeedsUpdate,St.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[St.prototype._setValue_fromArray,St.prototype._setValue_fromArray_setNeedsUpdate,St.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Yx=new Float32Array(1);var Pu=new gt,Ts=class{constructor(e,t,n=0,r=1/0){this.ray=new ss(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Mr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Pu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Pu),this}intersectObject(e,t=!0,n=[]){return Zl(e,this,n,t),n.sort(Iu),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)Zl(e[r],this,n,t);return n.sort(Iu),n}};function Iu(i,e){return i.distance-e.distance}function Zl(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){let s=i.children;for(let o=0,a=s.length;o<a;o++)Zl(s[o],e,t,!0)}}function pc(i,e,t,n){let r=up(n);switch(t){case nc:return i*e;case rc:return i*e/r.components*r.byteLength;case ya:return i*e/r.components*r.byteLength;case sc:return i*e*2/r.components*r.byteLength;case Ma:return i*e*2/r.components*r.byteLength;case ic:return i*e*3/r.components*r.byteLength;case hn:return i*e*4/r.components*r.byteLength;case ba:return i*e*4/r.components*r.byteLength;case Ps:case Is:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ls:case Ds:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case wa:case Ta:return Math.max(i,16)*Math.max(e,8)/4;case Sa:case Ea:return Math.max(i,8)*Math.max(e,8)/2;case Aa:case Ca:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ra:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Pa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ia:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case La:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Da:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Fa:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ua:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Na:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Oa:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ba:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ka:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case za:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Va:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ha:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ga:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Fs:case Wa:case Xa:return Math.ceil(i/4)*Math.ceil(e/4)*16;case oc:case qa:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ya:case Za:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function up(i){switch(i){case Mn:case Ql:return{byteLength:1,components:1};case Rr:case ec:case Pr:return{byteLength:2,components:1};case xa:case va:return{byteLength:2,components:4};case wi:case _a:case In:return{byteLength:4,components:1};case tc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:sa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=sa);function $h(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function hp(i){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,h=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){let u=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,u);else{h.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<h.length;p++){let g=h[f],v=h[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,h[f]=v)}h.length=f+1;for(let p=0,g=h.length;p<g;p++){let v=h[p];i.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var dp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,fp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,pp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,mp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_p=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,vp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Mp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,bp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Sp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ep=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Tp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ap=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Cp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Rp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Pp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ip=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Lp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Dp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Fp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Up=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Np=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Op=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Bp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Vp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Hp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Gp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Wp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Xp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,qp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Yp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Zp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Jp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Kp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$p=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Qp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,em=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,nm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,im=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,rm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,sm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,om=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,am=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,um=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,hm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,dm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,fm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_m=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ym=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Mm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Sm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Em=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Tm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Am=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Cm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Pm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Im=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Fm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Um=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Nm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Om=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Bm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,km=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Vm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Hm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Gm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Wm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ym=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Zm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Jm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Km=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,jm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$m=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Qm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,eg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,tg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ng=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ig=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,sg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,og=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ag=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,lg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,cg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ug=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,hg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_g=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,xg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,vg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,yg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Mg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Eg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Tg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ag=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Pg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ig=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Lg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Dg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ug=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ng=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Og=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,zg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Vg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Gg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Wg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,et={alphahash_fragment:dp,alphahash_pars_fragment:fp,alphamap_fragment:pp,alphamap_pars_fragment:mp,alphatest_fragment:gp,alphatest_pars_fragment:_p,aomap_fragment:xp,aomap_pars_fragment:vp,batching_pars_vertex:yp,batching_vertex:Mp,begin_vertex:bp,beginnormal_vertex:Sp,bsdfs:wp,iridescence_fragment:Ep,bumpmap_pars_fragment:Tp,clipping_planes_fragment:Ap,clipping_planes_pars_fragment:Cp,clipping_planes_pars_vertex:Rp,clipping_planes_vertex:Pp,color_fragment:Ip,color_pars_fragment:Lp,color_pars_vertex:Dp,color_vertex:Fp,common:Up,cube_uv_reflection_fragment:Np,defaultnormal_vertex:Op,displacementmap_pars_vertex:Bp,displacementmap_vertex:kp,emissivemap_fragment:zp,emissivemap_pars_fragment:Vp,colorspace_fragment:Hp,colorspace_pars_fragment:Gp,envmap_fragment:Wp,envmap_common_pars_fragment:Xp,envmap_pars_fragment:qp,envmap_pars_vertex:Yp,envmap_physical_pars_fragment:rm,envmap_vertex:Zp,fog_vertex:Jp,fog_pars_vertex:Kp,fog_fragment:jp,fog_pars_fragment:$p,gradientmap_pars_fragment:Qp,lightmap_pars_fragment:em,lights_lambert_fragment:tm,lights_lambert_pars_fragment:nm,lights_pars_begin:im,lights_toon_fragment:sm,lights_toon_pars_fragment:om,lights_phong_fragment:am,lights_phong_pars_fragment:lm,lights_physical_fragment:cm,lights_physical_pars_fragment:um,lights_fragment_begin:hm,lights_fragment_maps:dm,lights_fragment_end:fm,logdepthbuf_fragment:pm,logdepthbuf_pars_fragment:mm,logdepthbuf_pars_vertex:gm,logdepthbuf_vertex:_m,map_fragment:xm,map_pars_fragment:vm,map_particle_fragment:ym,map_particle_pars_fragment:Mm,metalnessmap_fragment:bm,metalnessmap_pars_fragment:Sm,morphinstance_vertex:wm,morphcolor_vertex:Em,morphnormal_vertex:Tm,morphtarget_pars_vertex:Am,morphtarget_vertex:Cm,normal_fragment_begin:Rm,normal_fragment_maps:Pm,normal_pars_fragment:Im,normal_pars_vertex:Lm,normal_vertex:Dm,normalmap_pars_fragment:Fm,clearcoat_normal_fragment_begin:Um,clearcoat_normal_fragment_maps:Nm,clearcoat_pars_fragment:Om,iridescence_pars_fragment:Bm,opaque_fragment:km,packing:zm,premultiplied_alpha_fragment:Vm,project_vertex:Hm,dithering_fragment:Gm,dithering_pars_fragment:Wm,roughnessmap_fragment:Xm,roughnessmap_pars_fragment:qm,shadowmap_pars_fragment:Ym,shadowmap_pars_vertex:Zm,shadowmap_vertex:Jm,shadowmask_pars_fragment:Km,skinbase_vertex:jm,skinning_pars_vertex:$m,skinning_vertex:Qm,skinnormal_vertex:eg,specularmap_fragment:tg,specularmap_pars_fragment:ng,tonemapping_fragment:ig,tonemapping_pars_fragment:rg,transmission_fragment:sg,transmission_pars_fragment:og,uv_pars_fragment:ag,uv_pars_vertex:lg,uv_vertex:cg,worldpos_vertex:ug,background_vert:hg,background_frag:dg,backgroundCube_vert:fg,backgroundCube_frag:pg,cube_vert:mg,cube_frag:gg,depth_vert:_g,depth_frag:xg,distanceRGBA_vert:vg,distanceRGBA_frag:yg,equirect_vert:Mg,equirect_frag:bg,linedashed_vert:Sg,linedashed_frag:wg,meshbasic_vert:Eg,meshbasic_frag:Tg,meshlambert_vert:Ag,meshlambert_frag:Cg,meshmatcap_vert:Rg,meshmatcap_frag:Pg,meshnormal_vert:Ig,meshnormal_frag:Lg,meshphong_vert:Dg,meshphong_frag:Fg,meshphysical_vert:Ug,meshphysical_frag:Ng,meshtoon_vert:Og,meshtoon_frag:Bg,points_vert:kg,points_frag:zg,shadow_vert:Vg,shadow_frag:Hg,sprite_vert:Gg,sprite_frag:Wg},pe={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},Ln={basic:{uniforms:Ht([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:Ht([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Ke(0)}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:Ht([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:Ht([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:Ht([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new Ke(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:Ht([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:Ht([pe.points,pe.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:Ht([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:Ht([pe.common,pe.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:Ht([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:Ht([pe.sprite,pe.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distanceRGBA:{uniforms:Ht([pe.common,pe.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distanceRGBA_vert,fragmentShader:et.distanceRGBA_frag},shadow:{uniforms:Ht([pe.lights,pe.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};Ln.physical={uniforms:Ht([Ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};var Ka={r:0,b:0,g:0},Xi=new Xn,Xg=new gt;function qg(i,e,t,n,r,s,o){let a=new Ke(0),l=s===!0?0:1,c,u,h=null,f=0,p=null;function g(E){let y=E.isScene===!0?E.background:null;return y&&y.isTexture&&(y=(E.backgroundBlurriness>0?t:e).get(y)),y}function v(E){let y=!1,L=g(E);L===null?d(a,l):L&&L.isColor&&(d(L,1),y=!0);let P=i.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(E,y){let L=g(y);L&&(L.isCubeTexture||L.mapping===Cs)?(u===void 0&&(u=new pt(new br(1,1,1),new en({name:"BackgroundCubeMaterial",uniforms:Wi(Ln.backgroundCube.uniforms),vertexShader:Ln.backgroundCube.vertexShader,fragmentShader:Ln.backgroundCube.fragmentShader,side:Rt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,I,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Xi.copy(y.backgroundRotation),Xi.x*=-1,Xi.y*=-1,Xi.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Xi.y*=-1,Xi.z*=-1),u.material.uniforms.envMap.value=L,u.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Xg.makeRotationFromEuler(Xi)),u.material.toneMapped=at.getTransfer(L.colorSpace)!==dt,(h!==L||f!==L.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,h=L,f=L.version,p=i.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):L&&L.isTexture&&(c===void 0&&(c=new pt(new zi(2,2),new en({name:"BackgroundMaterial",uniforms:Wi(Ln.background.uniforms),vertexShader:Ln.background.vertexShader,fragmentShader:Ln.background.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=L,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=at.getTransfer(L.colorSpace)!==dt,L.matrixAutoUpdate===!0&&L.updateMatrix(),c.material.uniforms.uvTransform.value.copy(L.matrix),(h!==L||f!==L.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,h=L,f=L.version,p=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function d(E,y){E.getRGB(Ka,uc(i)),n.buffers.color.setClear(Ka.r,Ka.g,Ka.b,y,o)}function T(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(E,y=1){a.set(E),l=y,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,d(a,l)},render:v,addToRenderList:m,dispose:T}}function Yg(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null),s=r,o=!1;function a(_,R,z,V,j){let K=!1,J=h(V,z,R);s!==J&&(s=J,c(s.object)),K=p(_,V,z,j),K&&g(_,V,z,j),j!==null&&e.update(j,i.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,y(_,R,z,V),j!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function l(){return i.createVertexArray()}function c(_){return i.bindVertexArray(_)}function u(_){return i.deleteVertexArray(_)}function h(_,R,z){let V=z.wireframe===!0,j=n[_.id];j===void 0&&(j={},n[_.id]=j);let K=j[R.id];K===void 0&&(K={},j[R.id]=K);let J=K[V];return J===void 0&&(J=f(l()),K[V]=J),J}function f(_){let R=[],z=[],V=[];for(let j=0;j<t;j++)R[j]=0,z[j]=0,V[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:z,attributeDivisors:V,object:_,attributes:{},index:null}}function p(_,R,z,V){let j=s.attributes,K=R.attributes,J=0,$=z.getAttributes();for(let W in $)if($[W].location>=0){let me=j[W],_e=K[W];if(_e===void 0&&(W==="instanceMatrix"&&_.instanceMatrix&&(_e=_.instanceMatrix),W==="instanceColor"&&_.instanceColor&&(_e=_.instanceColor)),me===void 0||me.attribute!==_e||_e&&me.data!==_e.data)return!0;J++}return s.attributesNum!==J||s.index!==V}function g(_,R,z,V){let j={},K=R.attributes,J=0,$=z.getAttributes();for(let W in $)if($[W].location>=0){let me=K[W];me===void 0&&(W==="instanceMatrix"&&_.instanceMatrix&&(me=_.instanceMatrix),W==="instanceColor"&&_.instanceColor&&(me=_.instanceColor));let _e={};_e.attribute=me,me&&me.data&&(_e.data=me.data),j[W]=_e,J++}s.attributes=j,s.attributesNum=J,s.index=V}function v(){let _=s.newAttributes;for(let R=0,z=_.length;R<z;R++)_[R]=0}function m(_){d(_,0)}function d(_,R){let z=s.newAttributes,V=s.enabledAttributes,j=s.attributeDivisors;z[_]=1,V[_]===0&&(i.enableVertexAttribArray(_),V[_]=1),j[_]!==R&&(i.vertexAttribDivisor(_,R),j[_]=R)}function T(){let _=s.newAttributes,R=s.enabledAttributes;for(let z=0,V=R.length;z<V;z++)R[z]!==_[z]&&(i.disableVertexAttribArray(z),R[z]=0)}function E(_,R,z,V,j,K,J){J===!0?i.vertexAttribIPointer(_,R,z,j,K):i.vertexAttribPointer(_,R,z,V,j,K)}function y(_,R,z,V){v();let j=V.attributes,K=z.getAttributes(),J=R.defaultAttributeValues;for(let $ in K){let W=K[$];if(W.location>=0){let de=j[$];if(de===void 0&&($==="instanceMatrix"&&_.instanceMatrix&&(de=_.instanceMatrix),$==="instanceColor"&&_.instanceColor&&(de=_.instanceColor)),de!==void 0){let me=de.normalized,_e=de.itemSize,Fe=e.get(de);if(Fe===void 0)continue;let Xe=Fe.buffer,q=Fe.type,ie=Fe.bytesPerElement,ue=q===i.INT||q===i.UNSIGNED_INT||de.gpuType===_a;if(de.isInterleavedBufferAttribute){let ce=de.data,Ae=ce.stride,Ve=de.offset;if(ce.isInstancedInterleavedBuffer){for(let Ce=0;Ce<W.locationSize;Ce++)d(W.location+Ce,ce.meshPerAttribute);_.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Ce=0;Ce<W.locationSize;Ce++)m(W.location+Ce);i.bindBuffer(i.ARRAY_BUFFER,Xe);for(let Ce=0;Ce<W.locationSize;Ce++)E(W.location+Ce,_e/W.locationSize,q,me,Ae*ie,(Ve+_e/W.locationSize*Ce)*ie,ue)}else{if(de.isInstancedBufferAttribute){for(let ce=0;ce<W.locationSize;ce++)d(W.location+ce,de.meshPerAttribute);_.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let ce=0;ce<W.locationSize;ce++)m(W.location+ce);i.bindBuffer(i.ARRAY_BUFFER,Xe);for(let ce=0;ce<W.locationSize;ce++)E(W.location+ce,_e/W.locationSize,q,me,_e*ie,_e/W.locationSize*ce*ie,ue)}}else if(J!==void 0){let me=J[$];if(me!==void 0)switch(me.length){case 2:i.vertexAttrib2fv(W.location,me);break;case 3:i.vertexAttrib3fv(W.location,me);break;case 4:i.vertexAttrib4fv(W.location,me);break;default:i.vertexAttrib1fv(W.location,me)}}}}T()}function L(){U();for(let _ in n){let R=n[_];for(let z in R){let V=R[z];for(let j in V)u(V[j].object),delete V[j];delete R[z]}delete n[_]}}function P(_){if(n[_.id]===void 0)return;let R=n[_.id];for(let z in R){let V=R[z];for(let j in V)u(V[j].object),delete V[j];delete R[z]}delete n[_.id]}function I(_){for(let R in n){let z=n[R];if(z[_.id]===void 0)continue;let V=z[_.id];for(let j in V)u(V[j].object),delete V[j];delete z[_.id]}}function U(){b(),o=!0,s!==r&&(s=r,c(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:U,resetDefaultState:b,dispose:L,releaseStatesOfGeometry:P,releaseStatesOfProgram:I,initAttributes:v,enableAttribute:m,disableUnusedAttributes:T}}function Zg(i,e,t){let n;function r(c){n=c}function s(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let p=0;for(let g=0;g<h;g++)p+=u[g];t.update(p,n,1)}function l(c,u,h,f){if(h===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],u[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let g=0;for(let v=0;v<h;v++)g+=u[v]*f[v];t.update(g,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Jg(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let I=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(I){return!(I!==hn&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(I){let U=I===Pr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==Mn&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==In&&!U)}function l(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,P=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:T,maxVaryings:E,maxFragmentUniforms:y,vertexTextures:L,maxSamples:P}}function Kg(i){let e=this,t=null,n=0,r=!1,s=!1,o=new En,a=new je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let p=h.length!==0||f||n!==0||r;return r=f,n=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,p){let g=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,d=i.get(h);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{let T=s?0:n,E=T*4,y=d.clippingState||null;l.value=y,y=u(g,f,E,p);for(let L=0;L!==E;++L)y[L]=t[L];d.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,p,g){let v=h!==null?h.length:0,m=null;if(v!==0){if(m=l.value,g!==!0||m===null){let d=p+v*4,T=f.matrixWorldInverse;a.getNormalMatrix(T),(m===null||m.length<d)&&(m=new Float32Array(d));for(let E=0,y=p;E!==v;++E,y+=4)o.copy(h[E]).applyMatrix4(T,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function jg(i){let e=new WeakMap;function t(o,a){return a===pa?o.mapping=Hi:a===ma&&(o.mapping=Gi),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===pa||a===ma)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Vo(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}var Ur=4,Rh=[.125,.215,.35,.446,.526,.582],Zi=20,mc=new ws,Ph=new Ke,gc=null,_c=0,xc=0,vc=!1,Yi=(1+Math.sqrt(5))/2,Fr=1/Yi,Ih=[new k(-Yi,Fr,0),new k(Yi,Fr,0),new k(-Fr,0,Yi),new k(Fr,0,Yi),new k(0,Yi,-Fr),new k(0,Yi,Fr),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)],$g=new k,Qa=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100,s={}){let{size:o=256,position:a=$g}=s;gc=this._renderer.getRenderTarget(),_c=this._renderer.getActiveCubeFace(),xc=this._renderer.getActiveMipmapLevel(),vc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(gc,_c,xc),this._renderer.xr.enabled=vc,e.scissorTest=!1,ja(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Hi||e.mapping===Gi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),gc=this._renderer.getRenderTarget(),_c=this._renderer.getActiveCubeFace(),xc=this._renderer.getActiveMipmapLevel(),vc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:vn,minFilter:vn,generateMipmaps:!1,type:Pr,format:hn,colorSpace:Bi,depthBuffer:!1},r=Lh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lh(e,t,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Qg(s)),this._blurMaterial=e0(s,e,t)}return r}_compileMaterial(e){let t=new pt(this._lodPlanes[0],e);this._renderer.compile(t,mc)}_sceneToCubeUV(e,t,n,r,s){let l=new Ct(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(Ph),h.toneMapping=Jn,h.autoClear=!1;let g=new yn({name:"PMREM.Background",side:Rt,depthWrite:!1,depthTest:!1}),v=new pt(new br,g),m=!1,d=e.background;d?d.isColor&&(g.color.copy(d),e.background=null,m=!0):(g.color.copy(Ph),m=!0);for(let T=0;T<6;T++){let E=T%3;E===0?(l.up.set(0,c[T],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[T],s.y,s.z)):E===1?(l.up.set(0,0,c[T]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[T],s.z)):(l.up.set(0,c[T],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[T]));let y=this._cubeSize;ja(r,E*y,T>2?y:0,y,y),h.setRenderTarget(r),m&&h.render(v,l),h.render(e,l)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=p,h.autoClear=f,e.background=d}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===Hi||e.mapping===Gi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Dh());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new pt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let l=this._cubeSize;ja(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,mc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Ih[(r-s-1)%Ih.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new pt(this._lodPlanes[r],c),f=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Zi-1),v=s/g,m=isFinite(s)?1+Math.floor(u*v):Zi;m>Zi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Zi}`);let d=[],T=0;for(let I=0;I<Zi;++I){let U=I/v,b=Math.exp(-U*U/2);d.push(b),I===0?T+=b:I<m&&(T+=2*b)}for(let I=0;I<d.length;I++)d[I]=d[I]/T;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:E}=this;f.dTheta.value=g,f.mipInt.value=E-n;let y=this._sizeLods[r],L=3*y*(r>E-Ur?r-E+Ur:0),P=4*(this._cubeSize-y);ja(t,L,P,3*y,2*y),l.setRenderTarget(t),l.render(h,mc)}};function Qg(i){let e=[],t=[],n=[],r=i,s=i-Ur+1+Rh.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);t.push(a);let l=1/a;o>i-Ur?l=Rh[o-i+Ur-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,v=3,m=2,d=1,T=new Float32Array(v*g*p),E=new Float32Array(m*g*p),y=new Float32Array(d*g*p);for(let P=0;P<p;P++){let I=P%3*2/3-1,U=P>2?0:-1,b=[I,U,0,I+2/3,U,0,I+2/3,U+1,0,I,U,0,I+2/3,U+1,0,I,U+1,0];T.set(b,v*g*P),E.set(f,m*g*P);let _=[P,P,P,P,P,P];y.set(_,d*g*P)}let L=new un;L.setAttribute("position",new Qt(T,v)),L.setAttribute("uv",new Qt(E,m)),L.setAttribute("faceIndex",new Qt(y,d)),e.push(L),r>Ur&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Lh(i,e,t){let n=new Cn(i,e,t);return n.texture.mapping=Cs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ja(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function e0(i,e,t){let n=new Float32Array(Zi),r=new k(0,1,0);return new en({name:"SphericalGaussianBlur",defines:{n:Zi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Rc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Dh(){return new en({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Rc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Fh(){return new en({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Rc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function t0(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===pa||l===ma,u=l===Hi||l===Gi;if(c||u){let h=e.get(a),f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Qa(i)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{let p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(t===null&&(t=new Qa(i)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){let l=a.target;l.removeEventListener("dispose",s);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function n0(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let r=t(n);return r===null&&Us("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function i0(i,e,t,n){let r={},s=new WeakMap;function o(h){let f=h.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete r[f.id];let p=s.get(f);p&&(e.remove(p),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(h){let f=h.attributes;for(let p in f)e.update(f[p],i.ARRAY_BUFFER)}function c(h){let f=[],p=h.index,g=h.attributes.position,v=0;if(p!==null){let T=p.array;v=p.version;for(let E=0,y=T.length;E<y;E+=3){let L=T[E+0],P=T[E+1],I=T[E+2];f.push(L,P,P,I,I,L)}}else if(g!==void 0){let T=g.array;v=g.version;for(let E=0,y=T.length/3-1;E<y;E+=3){let L=E+0,P=E+1,I=E+2;f.push(L,P,P,I,I,L)}}else return;let m=new(cc(f)?as:os)(f,1);m.version=v;let d=s.get(h);d&&e.remove(d),s.set(h,m)}function u(h){let f=s.get(h);if(f){let p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function r0(i,e,t){let n;function r(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,p){i.drawElements(n,p,s,f*o),t.update(p,n,1)}function c(f,p,g){g!==0&&(i.drawElementsInstanced(n,p,s,f*o,g),t.update(p,n,g))}function u(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];t.update(m,n,1)}function h(f,p,g,v){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)c(f[d]/o,p[d],v[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,s,f,0,v,0,g);let d=0;for(let T=0;T<g;T++)d+=p[T]*v[T];t.update(d,n,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function s0(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function o0(i,e,t){let n=new WeakMap,r=new vt;function s(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,f=n.get(a);if(f===void 0||f.count!==h){let _=function(){U.dispose(),n.delete(a),a.removeEventListener("dispose",_)};var p=_;f!==void 0&&f.texture.dispose();let g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],T=a.morphAttributes.normal||[],E=a.morphAttributes.color||[],y=0;g===!0&&(y=1),v===!0&&(y=2),m===!0&&(y=3);let L=a.attributes.position.count*y,P=1;L>e.maxTextureSize&&(P=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);let I=new Float32Array(L*P*4*h),U=new rs(I,L,P,h);U.type=In,U.needsUpdate=!0;let b=y*4;for(let R=0;R<h;R++){let z=d[R],V=T[R],j=E[R],K=L*P*4*R;for(let J=0;J<z.count;J++){let $=J*b;g===!0&&(r.fromBufferAttribute(z,J),I[K+$+0]=r.x,I[K+$+1]=r.y,I[K+$+2]=r.z,I[K+$+3]=0),v===!0&&(r.fromBufferAttribute(V,J),I[K+$+4]=r.x,I[K+$+5]=r.y,I[K+$+6]=r.z,I[K+$+7]=0),m===!0&&(r.fromBufferAttribute(j,J),I[K+$+8]=r.x,I[K+$+9]=r.y,I[K+$+10]=r.z,I[K+$+11]=j.itemSize===4?r.w:1)}}f={count:h,texture:U,size:new fe(L,P)},n.set(a,f),a.addEventListener("dispose",_)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];let v=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function a0(i,e,t,n){let r=new WeakMap;function s(l){let c=n.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return h}function o(){r=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}var Qh=new Ei,Uh=new us(1,1),ed=new rs,td=new ko,nd=new cs,Nh=[],Oh=[],Bh=new Float32Array(16),kh=new Float32Array(9),zh=new Float32Array(4);function Or(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,s=Nh[r];if(s===void 0&&(s=new Float32Array(r),Nh[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function Pt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function It(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function el(i,e){let t=Oh[e];t===void 0&&(t=new Int32Array(e),Oh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function l0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function c0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;i.uniform2fv(this.addr,e),It(t,e)}}function u0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Pt(t,e))return;i.uniform3fv(this.addr,e),It(t,e)}}function h0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;i.uniform4fv(this.addr,e),It(t,e)}}function d0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),It(t,e)}else{if(Pt(t,n))return;zh.set(n),i.uniformMatrix2fv(this.addr,!1,zh),It(t,n)}}function f0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),It(t,e)}else{if(Pt(t,n))return;kh.set(n),i.uniformMatrix3fv(this.addr,!1,kh),It(t,n)}}function p0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),It(t,e)}else{if(Pt(t,n))return;Bh.set(n),i.uniformMatrix4fv(this.addr,!1,Bh),It(t,n)}}function m0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function g0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;i.uniform2iv(this.addr,e),It(t,e)}}function _0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;i.uniform3iv(this.addr,e),It(t,e)}}function x0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;i.uniform4iv(this.addr,e),It(t,e)}}function v0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function y0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;i.uniform2uiv(this.addr,e),It(t,e)}}function M0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;i.uniform3uiv(this.addr,e),It(t,e)}}function b0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;i.uniform4uiv(this.addr,e),It(t,e)}}function S0(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Uh.compareFunction=ac,s=Uh):s=Qh,t.setTexture2D(e||s,r)}function w0(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||td,r)}function E0(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||nd,r)}function T0(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||ed,r)}function A0(i){switch(i){case 5126:return l0;case 35664:return c0;case 35665:return u0;case 35666:return h0;case 35674:return d0;case 35675:return f0;case 35676:return p0;case 5124:case 35670:return m0;case 35667:case 35671:return g0;case 35668:case 35672:return _0;case 35669:case 35673:return x0;case 5125:return v0;case 36294:return y0;case 36295:return M0;case 36296:return b0;case 35678:case 36198:case 36298:case 36306:case 35682:return S0;case 35679:case 36299:case 36307:return w0;case 35680:case 36300:case 36308:case 36293:return E0;case 36289:case 36303:case 36311:case 36292:return T0}}function C0(i,e){i.uniform1fv(this.addr,e)}function R0(i,e){let t=Or(e,this.size,2);i.uniform2fv(this.addr,t)}function P0(i,e){let t=Or(e,this.size,3);i.uniform3fv(this.addr,t)}function I0(i,e){let t=Or(e,this.size,4);i.uniform4fv(this.addr,t)}function L0(i,e){let t=Or(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function D0(i,e){let t=Or(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function F0(i,e){let t=Or(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function U0(i,e){i.uniform1iv(this.addr,e)}function N0(i,e){i.uniform2iv(this.addr,e)}function O0(i,e){i.uniform3iv(this.addr,e)}function B0(i,e){i.uniform4iv(this.addr,e)}function k0(i,e){i.uniform1uiv(this.addr,e)}function z0(i,e){i.uniform2uiv(this.addr,e)}function V0(i,e){i.uniform3uiv(this.addr,e)}function H0(i,e){i.uniform4uiv(this.addr,e)}function G0(i,e,t){let n=this.cache,r=e.length,s=el(t,r);Pt(n,s)||(i.uniform1iv(this.addr,s),It(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Qh,s[o])}function W0(i,e,t){let n=this.cache,r=e.length,s=el(t,r);Pt(n,s)||(i.uniform1iv(this.addr,s),It(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||td,s[o])}function X0(i,e,t){let n=this.cache,r=e.length,s=el(t,r);Pt(n,s)||(i.uniform1iv(this.addr,s),It(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||nd,s[o])}function q0(i,e,t){let n=this.cache,r=e.length,s=el(t,r);Pt(n,s)||(i.uniform1iv(this.addr,s),It(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||ed,s[o])}function Y0(i){switch(i){case 5126:return C0;case 35664:return R0;case 35665:return P0;case 35666:return I0;case 35674:return L0;case 35675:return D0;case 35676:return F0;case 5124:case 35670:return U0;case 35667:case 35671:return N0;case 35668:case 35672:return O0;case 35669:case 35673:return B0;case 5125:return k0;case 36294:return z0;case 36295:return V0;case 36296:return H0;case 35678:case 36198:case 36298:case 36306:case 35682:return G0;case 35679:case 36299:case 36307:return W0;case 35680:case 36300:case 36308:case 36293:return X0;case 36289:case 36303:case 36311:case 36292:return q0}}var Mc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=A0(t.type)}},bc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Y0(t.type)}},Sc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],n)}}},yc=/(\w+)(\])?(\[|\.)?/g;function Vh(i,e){i.seq.push(e),i.map[e.id]=e}function Z0(i,e,t){let n=i.name,r=n.length;for(yc.lastIndex=0;;){let s=yc.exec(n),o=yc.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Vh(t,c===void 0?new Mc(a,i,e):new bc(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new Sc(a),Vh(t,h)),t=h}}}var Nr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);Z0(s,o,this)}}setValue(e,t,n,r){let s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&n.push(o)}return n}};function Hh(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var J0=37297,K0=0;function j0(i,e){let t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Gh=new je;function $0(i){at._getMatrix(Gh,at.workingColorSpace,i);let e=`mat3( ${Gh.elements.map(t=>t.toFixed(4))} )`;switch(at.getTransfer(i)){case es:return[e,"LinearTransferOETF"];case dt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Wh(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+j0(i.getShaderSource(e),o)}else return r}function Q0(i,e){let t=$0(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function e_(i,e){let t;switch(e){case th:t="Linear";break;case nh:t="Reinhard";break;case ih:t="Cineon";break;case rh:t="ACESFilmic";break;case oh:t="AgX";break;case ah:t="Neutral";break;case sh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var $a=new k;function t_(){at.getLuminanceCoefficients($a);let i=$a.x.toFixed(4),e=$a.y.toFixed(4),t=$a.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function n_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ns).join(`
`)}function i_(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function r_(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(e,r),o=s.name,a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Ns(i){return i!==""}function Xh(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function qh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var s_=/^[ \t]*#include +<([\w\d./]+)>/gm;function wc(i){return i.replace(s_,a_)}var o_=new Map;function a_(i,e){let t=et[e];if(t===void 0){let n=o_.get(e);if(n!==void 0)t=et[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return wc(t)}var l_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yh(i){return i.replace(l_,c_)}function c_(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Zh(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function u_(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Kl?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Fu?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Pn&&(e="SHADOWMAP_TYPE_VSM"),e}function h_(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Hi:case Gi:e="ENVMAP_TYPE_CUBE";break;case Cs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function d_(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Gi:e="ENVMAP_MODE_REFRACTION";break}return e}function f_(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case fa:e="ENVMAP_BLENDING_MULTIPLY";break;case Qu:e="ENVMAP_BLENDING_MIX";break;case eh:e="ENVMAP_BLENDING_ADD";break}return e}function p_(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function m_(i,e,t,n){let r=i.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,l=u_(t),c=h_(t),u=d_(t),h=f_(t),f=p_(t),p=n_(t),g=i_(s),v=r.createProgram(),m,d,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ns).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ns).join(`
`),d.length>0&&(d+=`
`)):(m=[Zh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ns).join(`
`),d=[Zh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Jn?"#define TONE_MAPPING":"",t.toneMapping!==Jn?et.tonemapping_pars_fragment:"",t.toneMapping!==Jn?e_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,Q0("linearToOutputTexel",t.outputColorSpace),t_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ns).join(`
`)),o=wc(o),o=Xh(o,t),o=qh(o,t),a=wc(a),a=Xh(a,t),a=qh(a,t),o=Yh(o),a=Yh(a),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===lc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===lc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let E=T+m+o,y=T+d+a,L=Hh(r,r.VERTEX_SHADER,E),P=Hh(r,r.FRAGMENT_SHADER,y);r.attachShader(v,L),r.attachShader(v,P),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function I(R){if(i.debug.checkShaderErrors){let z=r.getProgramInfoLog(v).trim(),V=r.getShaderInfoLog(L).trim(),j=r.getShaderInfoLog(P).trim(),K=!0,J=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(K=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,v,L,P);else{let $=Wh(r,L,"vertex"),W=Wh(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+z+`
`+$+`
`+W)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(V===""||j==="")&&(J=!1);J&&(R.diagnostics={runnable:K,programLog:z,vertexShader:{log:V,prefix:m},fragmentShader:{log:j,prefix:d}})}r.deleteShader(L),r.deleteShader(P),U=new Nr(r,v),b=r_(r,v)}let U;this.getUniforms=function(){return U===void 0&&I(this),U};let b;this.getAttributes=function(){return b===void 0&&I(this),b};let _=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=r.getProgramParameter(v,J0)),_},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=K0++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=L,this.fragmentShader=P,this}var g_=0,Ec=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Tc(e),t.set(e,n)),n}},Tc=class{constructor(e){this.id=g_++,this.code=e,this.usedTimes=0}};function __(i,e,t,n,r,s,o){let a=new Mr,l=new Ec,c=new Set,u=[],h=r.logarithmicDepthBuffer,f=r.vertexTextures,p=r.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,_,R,z,V){let j=z.fog,K=V.geometry,J=b.isMeshStandardMaterial?z.environment:null,$=(b.isMeshStandardMaterial?t:e).get(b.envMap||J),W=$&&$.mapping===Cs?$.image.height:null,de=g[b.type];b.precision!==null&&(p=r.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));let me=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,_e=me!==void 0?me.length:0,Fe=0;K.morphAttributes.position!==void 0&&(Fe=1),K.morphAttributes.normal!==void 0&&(Fe=2),K.morphAttributes.color!==void 0&&(Fe=3);let Xe,q,ie,ue;if(de){let ht=Ln[de];Xe=ht.vertexShader,q=ht.fragmentShader}else Xe=b.vertexShader,q=b.fragmentShader,l.update(b),ie=l.getVertexShaderID(b),ue=l.getFragmentShaderID(b);let ce=i.getRenderTarget(),Ae=i.state.buffers.depth.getReversed(),Ve=V.isInstancedMesh===!0,Ce=V.isBatchedMesh===!0,We=!!b.map,Te=!!b.matcap,Pe=!!$,S=!!b.aoMap,he=!!b.lightMap,re=!!b.bumpMap,le=!!b.normalMap,Q=!!b.displacementMap,Ie=!!b.emissiveMap,se=!!b.metalnessMap,w=!!b.roughnessMap,x=b.anisotropy>0,B=b.clearcoat>0,Z=b.dispersion>0,ne=b.iridescence>0,X=b.sheen>0,Re=b.transmission>0,ge=x&&!!b.anisotropyMap,Be=B&&!!b.clearcoatMap,Ge=B&&!!b.clearcoatNormalMap,oe=B&&!!b.clearcoatRoughnessMap,be=ne&&!!b.iridescenceMap,He=ne&&!!b.iridescenceThicknessMap,Ye=X&&!!b.sheenColorMap,we=X&&!!b.sheenRoughnessMap,rt=!!b.specularMap,Qe=!!b.specularColorMap,ft=!!b.specularIntensityMap,D=Re&&!!b.transmissionMap,ve=Re&&!!b.thicknessMap,Y=!!b.gradientMap,te=!!b.alphaMap,Me=b.alphaTest>0,ye=!!b.alphaHash,$e=!!b.extensions,yt=Jn;b.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(yt=i.toneMapping);let Ot={shaderID:de,shaderType:b.type,shaderName:b.name,vertexShader:Xe,fragmentShader:q,defines:b.defines,customVertexShaderID:ie,customFragmentShaderID:ue,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,batching:Ce,batchingColor:Ce&&V._colorsTexture!==null,instancing:Ve,instancingColor:Ve&&V.instanceColor!==null,instancingMorph:Ve&&V.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ce===null?i.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:Bi,alphaToCoverage:!!b.alphaToCoverage,map:We,matcap:Te,envMap:Pe,envMapMode:Pe&&$.mapping,envMapCubeUVHeight:W,aoMap:S,lightMap:he,bumpMap:re,normalMap:le,displacementMap:f&&Q,emissiveMap:Ie,normalMapObjectSpace:le&&b.normalMapType===hh,normalMapTangentSpace:le&&b.normalMapType===Ja,metalnessMap:se,roughnessMap:w,anisotropy:x,anisotropyMap:ge,clearcoat:B,clearcoatMap:Be,clearcoatNormalMap:Ge,clearcoatRoughnessMap:oe,dispersion:Z,iridescence:ne,iridescenceMap:be,iridescenceThicknessMap:He,sheen:X,sheenColorMap:Ye,sheenRoughnessMap:we,specularMap:rt,specularColorMap:Qe,specularIntensityMap:ft,transmission:Re,transmissionMap:D,thicknessMap:ve,gradientMap:Y,opaque:b.transparent===!1&&b.blending===Ni&&b.alphaToCoverage===!1,alphaMap:te,alphaTest:Me,alphaHash:ye,combine:b.combine,mapUv:We&&v(b.map.channel),aoMapUv:S&&v(b.aoMap.channel),lightMapUv:he&&v(b.lightMap.channel),bumpMapUv:re&&v(b.bumpMap.channel),normalMapUv:le&&v(b.normalMap.channel),displacementMapUv:Q&&v(b.displacementMap.channel),emissiveMapUv:Ie&&v(b.emissiveMap.channel),metalnessMapUv:se&&v(b.metalnessMap.channel),roughnessMapUv:w&&v(b.roughnessMap.channel),anisotropyMapUv:ge&&v(b.anisotropyMap.channel),clearcoatMapUv:Be&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:Ge&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:He&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ye&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:we&&v(b.sheenRoughnessMap.channel),specularMapUv:rt&&v(b.specularMap.channel),specularColorMapUv:Qe&&v(b.specularColorMap.channel),specularIntensityMapUv:ft&&v(b.specularIntensityMap.channel),transmissionMapUv:D&&v(b.transmissionMap.channel),thicknessMapUv:ve&&v(b.thicknessMap.channel),alphaMapUv:te&&v(b.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(le||x),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!K.attributes.uv&&(We||te),fog:!!j,useFog:b.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Ae,skinning:V.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:_e,morphTextureStride:Fe,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:yt,decodeVideoTexture:We&&b.map.isVideoTexture===!0&&at.getTransfer(b.map.colorSpace)===dt,decodeVideoTextureEmissive:Ie&&b.emissiveMap.isVideoTexture===!0&&at.getTransfer(b.emissiveMap.colorSpace)===dt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Nt,flipSided:b.side===Rt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:$e&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($e&&b.extensions.multiDraw===!0||Ce)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Ot.vertexUv1s=c.has(1),Ot.vertexUv2s=c.has(2),Ot.vertexUv3s=c.has(3),c.clear(),Ot}function d(b){let _=[];if(b.shaderID?_.push(b.shaderID):(_.push(b.customVertexShaderID),_.push(b.customFragmentShaderID)),b.defines!==void 0)for(let R in b.defines)_.push(R),_.push(b.defines[R]);return b.isRawShaderMaterial===!1&&(T(_,b),E(_,b),_.push(i.outputColorSpace)),_.push(b.customProgramCacheKey),_.join()}function T(b,_){b.push(_.precision),b.push(_.outputColorSpace),b.push(_.envMapMode),b.push(_.envMapCubeUVHeight),b.push(_.mapUv),b.push(_.alphaMapUv),b.push(_.lightMapUv),b.push(_.aoMapUv),b.push(_.bumpMapUv),b.push(_.normalMapUv),b.push(_.displacementMapUv),b.push(_.emissiveMapUv),b.push(_.metalnessMapUv),b.push(_.roughnessMapUv),b.push(_.anisotropyMapUv),b.push(_.clearcoatMapUv),b.push(_.clearcoatNormalMapUv),b.push(_.clearcoatRoughnessMapUv),b.push(_.iridescenceMapUv),b.push(_.iridescenceThicknessMapUv),b.push(_.sheenColorMapUv),b.push(_.sheenRoughnessMapUv),b.push(_.specularMapUv),b.push(_.specularColorMapUv),b.push(_.specularIntensityMapUv),b.push(_.transmissionMapUv),b.push(_.thicknessMapUv),b.push(_.combine),b.push(_.fogExp2),b.push(_.sizeAttenuation),b.push(_.morphTargetsCount),b.push(_.morphAttributeCount),b.push(_.numDirLights),b.push(_.numPointLights),b.push(_.numSpotLights),b.push(_.numSpotLightMaps),b.push(_.numHemiLights),b.push(_.numRectAreaLights),b.push(_.numDirLightShadows),b.push(_.numPointLightShadows),b.push(_.numSpotLightShadows),b.push(_.numSpotLightShadowsWithMaps),b.push(_.numLightProbes),b.push(_.shadowMapType),b.push(_.toneMapping),b.push(_.numClippingPlanes),b.push(_.numClipIntersection),b.push(_.depthPacking)}function E(b,_){a.disableAll(),_.supportsVertexTextures&&a.enable(0),_.instancing&&a.enable(1),_.instancingColor&&a.enable(2),_.instancingMorph&&a.enable(3),_.matcap&&a.enable(4),_.envMap&&a.enable(5),_.normalMapObjectSpace&&a.enable(6),_.normalMapTangentSpace&&a.enable(7),_.clearcoat&&a.enable(8),_.iridescence&&a.enable(9),_.alphaTest&&a.enable(10),_.vertexColors&&a.enable(11),_.vertexAlphas&&a.enable(12),_.vertexUv1s&&a.enable(13),_.vertexUv2s&&a.enable(14),_.vertexUv3s&&a.enable(15),_.vertexTangents&&a.enable(16),_.anisotropy&&a.enable(17),_.alphaHash&&a.enable(18),_.batching&&a.enable(19),_.dispersion&&a.enable(20),_.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),_.fog&&a.enable(0),_.useFog&&a.enable(1),_.flatShading&&a.enable(2),_.logarithmicDepthBuffer&&a.enable(3),_.reverseDepthBuffer&&a.enable(4),_.skinning&&a.enable(5),_.morphTargets&&a.enable(6),_.morphNormals&&a.enable(7),_.morphColors&&a.enable(8),_.premultipliedAlpha&&a.enable(9),_.shadowMapEnabled&&a.enable(10),_.doubleSided&&a.enable(11),_.flipSided&&a.enable(12),_.useDepthPacking&&a.enable(13),_.dithering&&a.enable(14),_.transmission&&a.enable(15),_.sheen&&a.enable(16),_.opaque&&a.enable(17),_.pointsUvs&&a.enable(18),_.decodeVideoTexture&&a.enable(19),_.decodeVideoTextureEmissive&&a.enable(20),_.alphaToCoverage&&a.enable(21),b.push(a.mask)}function y(b){let _=g[b.type],R;if(_){let z=Ln[_];R=wh.clone(z.uniforms)}else R=b.uniforms;return R}function L(b,_){let R;for(let z=0,V=u.length;z<V;z++){let j=u[z];if(j.cacheKey===_){R=j,++R.usedTimes;break}}return R===void 0&&(R=new m_(i,_,b,s),u.push(R)),R}function P(b){if(--b.usedTimes===0){let _=u.indexOf(b);u[_]=u[u.length-1],u.pop(),b.destroy()}}function I(b){l.remove(b)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:y,acquireProgram:L,releaseProgram:P,releaseShaderCache:I,programs:u,dispose:U}}function x_(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function v_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Jh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Kh(){let i=[],e=0,t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(h,f,p,g,v,m){let d=i[e];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:g,renderOrder:h.renderOrder,z:v,group:m},i[e]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=h.renderOrder,d.z=v,d.group=m),e++,d}function a(h,f,p,g,v,m){let d=o(h,f,p,g,v,m);p.transmission>0?n.push(d):p.transparent===!0?r.push(d):t.push(d)}function l(h,f,p,g,v,m){let d=o(h,f,p,g,v,m);p.transmission>0?n.unshift(d):p.transparent===!0?r.unshift(d):t.unshift(d)}function c(h,f){t.length>1&&t.sort(h||v_),n.length>1&&n.sort(f||Jh),r.length>1&&r.sort(f||Jh)}function u(){for(let h=e,f=i.length;h<f;h++){let p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function y_(){let i=new WeakMap;function e(n,r){let s=i.get(n),o;return s===void 0?(o=new Kh,i.set(n,[o])):r>=s.length?(o=new Kh,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function M_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new Ke};break;case"SpotLight":t={position:new k,direction:new k,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":t={color:new Ke,position:new k,halfWidth:new k,halfHeight:new k};break}return i[e.id]=t,t}}}function b_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var S_=0;function w_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function E_(i){let e=new M_,t=b_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new k);let r=new k,s=new gt,o=new gt;function a(c){let u=0,h=0,f=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let p=0,g=0,v=0,m=0,d=0,T=0,E=0,y=0,L=0,P=0,I=0;c.sort(w_);for(let b=0,_=c.length;b<_;b++){let R=c[b],z=R.color,V=R.intensity,j=R.distance,K=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=z.r*V,h+=z.g*V,f+=z.b*V;else if(R.isLightProbe){for(let J=0;J<9;J++)n.probe[J].addScaledVector(R.sh.coefficients[J],V);I++}else if(R.isDirectionalLight){let J=e.get(R);if(J.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let $=R.shadow,W=t.get(R);W.shadowIntensity=$.intensity,W.shadowBias=$.bias,W.shadowNormalBias=$.normalBias,W.shadowRadius=$.radius,W.shadowMapSize=$.mapSize,n.directionalShadow[p]=W,n.directionalShadowMap[p]=K,n.directionalShadowMatrix[p]=R.shadow.matrix,T++}n.directional[p]=J,p++}else if(R.isSpotLight){let J=e.get(R);J.position.setFromMatrixPosition(R.matrixWorld),J.color.copy(z).multiplyScalar(V),J.distance=j,J.coneCos=Math.cos(R.angle),J.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),J.decay=R.decay,n.spot[v]=J;let $=R.shadow;if(R.map&&(n.spotLightMap[L]=R.map,L++,$.updateMatrices(R),R.castShadow&&P++),n.spotLightMatrix[v]=$.matrix,R.castShadow){let W=t.get(R);W.shadowIntensity=$.intensity,W.shadowBias=$.bias,W.shadowNormalBias=$.normalBias,W.shadowRadius=$.radius,W.shadowMapSize=$.mapSize,n.spotShadow[v]=W,n.spotShadowMap[v]=K,y++}v++}else if(R.isRectAreaLight){let J=e.get(R);J.color.copy(z).multiplyScalar(V),J.halfWidth.set(R.width*.5,0,0),J.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=J,m++}else if(R.isPointLight){let J=e.get(R);if(J.color.copy(R.color).multiplyScalar(R.intensity),J.distance=R.distance,J.decay=R.decay,R.castShadow){let $=R.shadow,W=t.get(R);W.shadowIntensity=$.intensity,W.shadowBias=$.bias,W.shadowNormalBias=$.normalBias,W.shadowRadius=$.radius,W.shadowMapSize=$.mapSize,W.shadowCameraNear=$.camera.near,W.shadowCameraFar=$.camera.far,n.pointShadow[g]=W,n.pointShadowMap[g]=K,n.pointShadowMatrix[g]=R.shadow.matrix,E++}n.point[g]=J,g++}else if(R.isHemisphereLight){let J=e.get(R);J.skyColor.copy(R.color).multiplyScalar(V),J.groundColor.copy(R.groundColor).multiplyScalar(V),n.hemi[d]=J,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=pe.LTC_FLOAT_1,n.rectAreaLTC2=pe.LTC_FLOAT_2):(n.rectAreaLTC1=pe.LTC_HALF_1,n.rectAreaLTC2=pe.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;let U=n.hash;(U.directionalLength!==p||U.pointLength!==g||U.spotLength!==v||U.rectAreaLength!==m||U.hemiLength!==d||U.numDirectionalShadows!==T||U.numPointShadows!==E||U.numSpotShadows!==y||U.numSpotMaps!==L||U.numLightProbes!==I)&&(n.directional.length=p,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=y+L-P,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=I,U.directionalLength=p,U.pointLength=g,U.spotLength=v,U.rectAreaLength=m,U.hemiLength=d,U.numDirectionalShadows=T,U.numPointShadows=E,U.numSpotShadows=y,U.numSpotMaps=L,U.numLightProbes=I,n.version=S_++)}function l(c,u){let h=0,f=0,p=0,g=0,v=0,m=u.matrixWorldInverse;for(let d=0,T=c.length;d<T;d++){let E=c[d];if(E.isDirectionalLight){let y=n.directional[h];y.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),h++}else if(E.isSpotLight){let y=n.spot[p];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),p++}else if(E.isRectAreaLight){let y=n.rectArea[g];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(m),o.identity(),s.copy(E.matrixWorld),s.premultiply(m),o.extractRotation(s),y.halfWidth.set(E.width*.5,0,0),y.halfHeight.set(0,E.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(E.isPointLight){let y=n.point[f];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(m),f++}else if(E.isHemisphereLight){let y=n.hemi[v];y.direction.setFromMatrixPosition(E.matrixWorld),y.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:n}}function jh(i){let e=new E_(i),t=[],n=[];function r(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function T_(i){let e=new WeakMap;function t(r,s=0){let o=e.get(r),a;return o===void 0?(a=new jh(i),e.set(r,[a])):s>=o.length?(a=new jh(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var A_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,C_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function R_(i,e,t){let n=new wr,r=new fe,s=new fe,o=new vt,a=new Zo({depthPacking:uh}),l=new Jo,c={},u=t.maxTextureSize,h={[Hn]:Rt,[Rt]:Hn,[Nt]:Nt},f=new en({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new fe},radius:{value:4}},vertexShader:A_,fragmentShader:C_}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let g=new un;g.setAttribute("position",new Qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new pt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Kl;let d=this.type;this.render=function(P,I,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;let b=i.getRenderTarget(),_=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),z=i.state;z.setBlending(Zn),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let V=d!==Pn&&this.type===Pn,j=d===Pn&&this.type!==Pn;for(let K=0,J=P.length;K<J;K++){let $=P[K],W=$.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);let de=W.getFrameExtents();if(r.multiply(de),s.copy(W.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/de.x),r.x=s.x*de.x,W.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/de.y),r.y=s.y*de.y,W.mapSize.y=s.y)),W.map===null||V===!0||j===!0){let _e=this.type!==Pn?{minFilter:ln,magFilter:ln}:{};W.map!==null&&W.map.dispose(),W.map=new Cn(r.x,r.y,_e),W.map.texture.name=$.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();let me=W.getViewportCount();for(let _e=0;_e<me;_e++){let Fe=W.getViewport(_e);o.set(s.x*Fe.x,s.y*Fe.y,s.x*Fe.z,s.y*Fe.w),z.viewport(o),W.updateMatrices($,_e),n=W.getFrustum(),y(I,U,W.camera,$,this.type)}W.isPointLightShadow!==!0&&this.type===Pn&&T(W,U),W.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(b,_,R)};function T(P,I){let U=e.update(v);f.defines.VSM_SAMPLES!==P.blurSamples&&(f.defines.VSM_SAMPLES=P.blurSamples,p.defines.VSM_SAMPLES=P.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Cn(r.x,r.y)),f.uniforms.shadow_pass.value=P.map.texture,f.uniforms.resolution.value=P.mapSize,f.uniforms.radius.value=P.radius,i.setRenderTarget(P.mapPass),i.clear(),i.renderBufferDirect(I,null,U,f,v,null),p.uniforms.shadow_pass.value=P.mapPass.texture,p.uniforms.resolution.value=P.mapSize,p.uniforms.radius.value=P.radius,i.setRenderTarget(P.map),i.clear(),i.renderBufferDirect(I,null,U,p,v,null)}function E(P,I,U,b){let _=null,R=U.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(R!==void 0)_=R;else if(_=U.isPointLight===!0?l:a,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){let z=_.uuid,V=I.uuid,j=c[z];j===void 0&&(j={},c[z]=j);let K=j[V];K===void 0&&(K=_.clone(),j[V]=K,I.addEventListener("dispose",L)),_=K}if(_.visible=I.visible,_.wireframe=I.wireframe,b===Pn?_.side=I.shadowSide!==null?I.shadowSide:I.side:_.side=I.shadowSide!==null?I.shadowSide:h[I.side],_.alphaMap=I.alphaMap,_.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,_.map=I.map,_.clipShadows=I.clipShadows,_.clippingPlanes=I.clippingPlanes,_.clipIntersection=I.clipIntersection,_.displacementMap=I.displacementMap,_.displacementScale=I.displacementScale,_.displacementBias=I.displacementBias,_.wireframeLinewidth=I.wireframeLinewidth,_.linewidth=I.linewidth,U.isPointLight===!0&&_.isMeshDistanceMaterial===!0){let z=i.properties.get(_);z.light=U}return _}function y(P,I,U,b,_){if(P.visible===!1)return;if(P.layers.test(I.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&_===Pn)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,P.matrixWorld);let V=e.update(P),j=P.material;if(Array.isArray(j)){let K=V.groups;for(let J=0,$=K.length;J<$;J++){let W=K[J],de=j[W.materialIndex];if(de&&de.visible){let me=E(P,de,b,_);P.onBeforeShadow(i,P,I,U,V,me,W),i.renderBufferDirect(U,null,V,me,P,W),P.onAfterShadow(i,P,I,U,V,me,W)}}}else if(j.visible){let K=E(P,j,b,_);P.onBeforeShadow(i,P,I,U,V,K,null),i.renderBufferDirect(U,null,V,K,P,null),P.onAfterShadow(i,P,I,U,V,K,null)}}let z=P.children;for(let V=0,j=z.length;V<j;V++)y(z[V],I,U,b,_)}function L(P){P.target.removeEventListener("dispose",L);for(let U in c){let b=c[U],_=P.target.uuid;_ in b&&(b[_].dispose(),delete b[_])}}}var P_={[oa]:aa,[la]:ha,[ca]:da,[Oi]:ua,[aa]:oa,[ha]:la,[da]:ca,[ua]:Oi};function I_(i,e){function t(){let D=!1,ve=new vt,Y=null,te=new vt(0,0,0,0);return{setMask:function(Me){Y!==Me&&!D&&(i.colorMask(Me,Me,Me,Me),Y=Me)},setLocked:function(Me){D=Me},setClear:function(Me,ye,$e,yt,Ot){Ot===!0&&(Me*=yt,ye*=yt,$e*=yt),ve.set(Me,ye,$e,yt),te.equals(ve)===!1&&(i.clearColor(Me,ye,$e,yt),te.copy(ve))},reset:function(){D=!1,Y=null,te.set(-1,0,0,0)}}}function n(){let D=!1,ve=!1,Y=null,te=null,Me=null;return{setReversed:function(ye){if(ve!==ye){let $e=e.get("EXT_clip_control");ye?$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.ZERO_TO_ONE_EXT):$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.NEGATIVE_ONE_TO_ONE_EXT),ve=ye;let yt=Me;Me=null,this.setClear(yt)}},getReversed:function(){return ve},setTest:function(ye){ye?ce(i.DEPTH_TEST):Ae(i.DEPTH_TEST)},setMask:function(ye){Y!==ye&&!D&&(i.depthMask(ye),Y=ye)},setFunc:function(ye){if(ve&&(ye=P_[ye]),te!==ye){switch(ye){case oa:i.depthFunc(i.NEVER);break;case aa:i.depthFunc(i.ALWAYS);break;case la:i.depthFunc(i.LESS);break;case Oi:i.depthFunc(i.LEQUAL);break;case ca:i.depthFunc(i.EQUAL);break;case ua:i.depthFunc(i.GEQUAL);break;case ha:i.depthFunc(i.GREATER);break;case da:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}te=ye}},setLocked:function(ye){D=ye},setClear:function(ye){Me!==ye&&(ve&&(ye=1-ye),i.clearDepth(ye),Me=ye)},reset:function(){D=!1,Y=null,te=null,Me=null,ve=!1}}}function r(){let D=!1,ve=null,Y=null,te=null,Me=null,ye=null,$e=null,yt=null,Ot=null;return{setTest:function(ht){D||(ht?ce(i.STENCIL_TEST):Ae(i.STENCIL_TEST))},setMask:function(ht){ve!==ht&&!D&&(i.stencilMask(ht),ve=ht)},setFunc:function(ht,dn,Dn){(Y!==ht||te!==dn||Me!==Dn)&&(i.stencilFunc(ht,dn,Dn),Y=ht,te=dn,Me=Dn)},setOp:function(ht,dn,Dn){(ye!==ht||$e!==dn||yt!==Dn)&&(i.stencilOp(ht,dn,Dn),ye=ht,$e=dn,yt=Dn)},setLocked:function(ht){D=ht},setClear:function(ht){Ot!==ht&&(i.clearStencil(ht),Ot=ht)},reset:function(){D=!1,ve=null,Y=null,te=null,Me=null,ye=null,$e=null,yt=null,Ot=null}}}let s=new t,o=new n,a=new r,l=new WeakMap,c=new WeakMap,u={},h={},f=new WeakMap,p=[],g=null,v=!1,m=null,d=null,T=null,E=null,y=null,L=null,P=null,I=new Ke(0,0,0),U=0,b=!1,_=null,R=null,z=null,V=null,j=null,K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),J=!1,$=0,W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(W)[1]),J=$>=1):W.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),J=$>=2);let de=null,me={},_e=i.getParameter(i.SCISSOR_BOX),Fe=i.getParameter(i.VIEWPORT),Xe=new vt().fromArray(_e),q=new vt().fromArray(Fe);function ie(D,ve,Y,te){let Me=new Uint8Array(4),ye=i.createTexture();i.bindTexture(D,ye),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let $e=0;$e<Y;$e++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(ve,0,i.RGBA,1,1,te,0,i.RGBA,i.UNSIGNED_BYTE,Me):i.texImage2D(ve+$e,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Me);return ye}let ue={};ue[i.TEXTURE_2D]=ie(i.TEXTURE_2D,i.TEXTURE_2D,1),ue[i.TEXTURE_CUBE_MAP]=ie(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[i.TEXTURE_2D_ARRAY]=ie(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ue[i.TEXTURE_3D]=ie(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ce(i.DEPTH_TEST),o.setFunc(Oi),re(!1),le(Jl),ce(i.CULL_FACE),S(Zn);function ce(D){u[D]!==!0&&(i.enable(D),u[D]=!0)}function Ae(D){u[D]!==!1&&(i.disable(D),u[D]=!1)}function Ve(D,ve){return h[D]!==ve?(i.bindFramebuffer(D,ve),h[D]=ve,D===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ve),D===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ve),!0):!1}function Ce(D,ve){let Y=p,te=!1;if(D){Y=f.get(ve),Y===void 0&&(Y=[],f.set(ve,Y));let Me=D.textures;if(Y.length!==Me.length||Y[0]!==i.COLOR_ATTACHMENT0){for(let ye=0,$e=Me.length;ye<$e;ye++)Y[ye]=i.COLOR_ATTACHMENT0+ye;Y.length=Me.length,te=!0}}else Y[0]!==i.BACK&&(Y[0]=i.BACK,te=!0);te&&i.drawBuffers(Y)}function We(D){return g!==D?(i.useProgram(D),g=D,!0):!1}let Te={[mi]:i.FUNC_ADD,[Nu]:i.FUNC_SUBTRACT,[Ou]:i.FUNC_REVERSE_SUBTRACT};Te[Bu]=i.MIN,Te[ku]=i.MAX;let Pe={[zu]:i.ZERO,[Vu]:i.ONE,[Hu]:i.SRC_COLOR,[Lo]:i.SRC_ALPHA,[Zu]:i.SRC_ALPHA_SATURATE,[qu]:i.DST_COLOR,[Wu]:i.DST_ALPHA,[Gu]:i.ONE_MINUS_SRC_COLOR,[Do]:i.ONE_MINUS_SRC_ALPHA,[Yu]:i.ONE_MINUS_DST_COLOR,[Xu]:i.ONE_MINUS_DST_ALPHA,[Ju]:i.CONSTANT_COLOR,[Ku]:i.ONE_MINUS_CONSTANT_COLOR,[ju]:i.CONSTANT_ALPHA,[$u]:i.ONE_MINUS_CONSTANT_ALPHA};function S(D,ve,Y,te,Me,ye,$e,yt,Ot,ht){if(D===Zn){v===!0&&(Ae(i.BLEND),v=!1);return}if(v===!1&&(ce(i.BLEND),v=!0),D!==Uu){if(D!==m||ht!==b){if((d!==mi||y!==mi)&&(i.blendEquation(i.FUNC_ADD),d=mi,y=mi),ht)switch(D){case Ni:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case As:i.blendFunc(i.ONE,i.ONE);break;case jl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case $l:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Ni:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case As:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case jl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case $l:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}T=null,E=null,L=null,P=null,I.set(0,0,0),U=0,m=D,b=ht}return}Me=Me||ve,ye=ye||Y,$e=$e||te,(ve!==d||Me!==y)&&(i.blendEquationSeparate(Te[ve],Te[Me]),d=ve,y=Me),(Y!==T||te!==E||ye!==L||$e!==P)&&(i.blendFuncSeparate(Pe[Y],Pe[te],Pe[ye],Pe[$e]),T=Y,E=te,L=ye,P=$e),(yt.equals(I)===!1||Ot!==U)&&(i.blendColor(yt.r,yt.g,yt.b,Ot),I.copy(yt),U=Ot),m=D,b=!1}function he(D,ve){D.side===Nt?Ae(i.CULL_FACE):ce(i.CULL_FACE);let Y=D.side===Rt;ve&&(Y=!Y),re(Y),D.blending===Ni&&D.transparent===!1?S(Zn):S(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),s.setMask(D.colorWrite);let te=D.stencilWrite;a.setTest(te),te&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Ie(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ce(i.SAMPLE_ALPHA_TO_COVERAGE):Ae(i.SAMPLE_ALPHA_TO_COVERAGE)}function re(D){_!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),_=D)}function le(D){D!==Lu?(ce(i.CULL_FACE),D!==R&&(D===Jl?i.cullFace(i.BACK):D===Du?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ae(i.CULL_FACE),R=D}function Q(D){D!==z&&(J&&i.lineWidth(D),z=D)}function Ie(D,ve,Y){D?(ce(i.POLYGON_OFFSET_FILL),(V!==ve||j!==Y)&&(i.polygonOffset(ve,Y),V=ve,j=Y)):Ae(i.POLYGON_OFFSET_FILL)}function se(D){D?ce(i.SCISSOR_TEST):Ae(i.SCISSOR_TEST)}function w(D){D===void 0&&(D=i.TEXTURE0+K-1),de!==D&&(i.activeTexture(D),de=D)}function x(D,ve,Y){Y===void 0&&(de===null?Y=i.TEXTURE0+K-1:Y=de);let te=me[Y];te===void 0&&(te={type:void 0,texture:void 0},me[Y]=te),(te.type!==D||te.texture!==ve)&&(de!==Y&&(i.activeTexture(Y),de=Y),i.bindTexture(D,ve||ue[D]),te.type=D,te.texture=ve)}function B(){let D=me[de];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Z(){try{i.compressedTexImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ne(){try{i.compressedTexImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function X(){try{i.texSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Re(){try{i.texSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ge(){try{i.compressedTexSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Be(){try{i.compressedTexSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ge(){try{i.texStorage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function oe(){try{i.texStorage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function be(){try{i.texImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function He(){try{i.texImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ye(D){Xe.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),Xe.copy(D))}function we(D){q.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),q.copy(D))}function rt(D,ve){let Y=c.get(ve);Y===void 0&&(Y=new WeakMap,c.set(ve,Y));let te=Y.get(D);te===void 0&&(te=i.getUniformBlockIndex(ve,D.name),Y.set(D,te))}function Qe(D,ve){let te=c.get(ve).get(D);l.get(ve)!==te&&(i.uniformBlockBinding(ve,te,D.__bindingPointIndex),l.set(ve,te))}function ft(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},de=null,me={},h={},f=new WeakMap,p=[],g=null,v=!1,m=null,d=null,T=null,E=null,y=null,L=null,P=null,I=new Ke(0,0,0),U=0,b=!1,_=null,R=null,z=null,V=null,j=null,Xe.set(0,0,i.canvas.width,i.canvas.height),q.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ce,disable:Ae,bindFramebuffer:Ve,drawBuffers:Ce,useProgram:We,setBlending:S,setMaterial:he,setFlipSided:re,setCullFace:le,setLineWidth:Q,setPolygonOffset:Ie,setScissorTest:se,activeTexture:w,bindTexture:x,unbindTexture:B,compressedTexImage2D:Z,compressedTexImage3D:ne,texImage2D:be,texImage3D:He,updateUBOMapping:rt,uniformBlockBinding:Qe,texStorage2D:Ge,texStorage3D:oe,texSubImage2D:X,texSubImage3D:Re,compressedTexSubImage2D:ge,compressedTexSubImage3D:Be,scissor:Ye,viewport:we,reset:ft}}function L_(i,e,t,n,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new fe,u=new WeakMap,h,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,x){return p?new OffscreenCanvas(w,x):is("canvas")}function v(w,x,B){let Z=1,ne=se(w);if((ne.width>B||ne.height>B)&&(Z=B/Math.max(ne.width,ne.height)),Z<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let X=Math.floor(Z*ne.width),Re=Math.floor(Z*ne.height);h===void 0&&(h=g(X,Re));let ge=x?g(X,Re):h;return ge.width=X,ge.height=Re,ge.getContext("2d").drawImage(w,0,0,X,Re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+X+"x"+Re+")."),ge}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),w;return w}function m(w){return w.generateMipmaps}function d(w){i.generateMipmap(w)}function T(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(w,x,B,Z,ne=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let X=x;if(x===i.RED&&(B===i.FLOAT&&(X=i.R32F),B===i.HALF_FLOAT&&(X=i.R16F),B===i.UNSIGNED_BYTE&&(X=i.R8)),x===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(X=i.R8UI),B===i.UNSIGNED_SHORT&&(X=i.R16UI),B===i.UNSIGNED_INT&&(X=i.R32UI),B===i.BYTE&&(X=i.R8I),B===i.SHORT&&(X=i.R16I),B===i.INT&&(X=i.R32I)),x===i.RG&&(B===i.FLOAT&&(X=i.RG32F),B===i.HALF_FLOAT&&(X=i.RG16F),B===i.UNSIGNED_BYTE&&(X=i.RG8)),x===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(X=i.RG8UI),B===i.UNSIGNED_SHORT&&(X=i.RG16UI),B===i.UNSIGNED_INT&&(X=i.RG32UI),B===i.BYTE&&(X=i.RG8I),B===i.SHORT&&(X=i.RG16I),B===i.INT&&(X=i.RG32I)),x===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(X=i.RGB8UI),B===i.UNSIGNED_SHORT&&(X=i.RGB16UI),B===i.UNSIGNED_INT&&(X=i.RGB32UI),B===i.BYTE&&(X=i.RGB8I),B===i.SHORT&&(X=i.RGB16I),B===i.INT&&(X=i.RGB32I)),x===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(X=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(X=i.RGBA16UI),B===i.UNSIGNED_INT&&(X=i.RGBA32UI),B===i.BYTE&&(X=i.RGBA8I),B===i.SHORT&&(X=i.RGBA16I),B===i.INT&&(X=i.RGBA32I)),x===i.RGB&&B===i.UNSIGNED_INT_5_9_9_9_REV&&(X=i.RGB9_E5),x===i.RGBA){let Re=ne?es:at.getTransfer(Z);B===i.FLOAT&&(X=i.RGBA32F),B===i.HALF_FLOAT&&(X=i.RGBA16F),B===i.UNSIGNED_BYTE&&(X=Re===dt?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(X=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(X=i.RGB5_A1)}return(X===i.R16F||X===i.R32F||X===i.RG16F||X===i.RG32F||X===i.RGBA16F||X===i.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function y(w,x){let B;return w?x===null||x===wi||x===Ir?B=i.DEPTH24_STENCIL8:x===In?B=i.DEPTH32F_STENCIL8:x===Rr&&(B=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===wi||x===Ir?B=i.DEPTH_COMPONENT24:x===In?B=i.DEPTH_COMPONENT32F:x===Rr&&(B=i.DEPTH_COMPONENT16),B}function L(w,x){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==ln&&w.minFilter!==vn?Math.log2(Math.max(x.width,x.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?x.mipmaps.length:1}function P(w){let x=w.target;x.removeEventListener("dispose",P),U(x),x.isVideoTexture&&u.delete(x)}function I(w){let x=w.target;x.removeEventListener("dispose",I),_(x)}function U(w){let x=n.get(w);if(x.__webglInit===void 0)return;let B=w.source,Z=f.get(B);if(Z){let ne=Z[x.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&b(w),Object.keys(Z).length===0&&f.delete(B)}n.remove(w)}function b(w){let x=n.get(w);i.deleteTexture(x.__webglTexture);let B=w.source,Z=f.get(B);delete Z[x.__cacheKey],o.memory.textures--}function _(w){let x=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(x.__webglFramebuffer[Z]))for(let ne=0;ne<x.__webglFramebuffer[Z].length;ne++)i.deleteFramebuffer(x.__webglFramebuffer[Z][ne]);else i.deleteFramebuffer(x.__webglFramebuffer[Z]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[Z])}else{if(Array.isArray(x.__webglFramebuffer))for(let Z=0;Z<x.__webglFramebuffer.length;Z++)i.deleteFramebuffer(x.__webglFramebuffer[Z]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Z=0;Z<x.__webglColorRenderbuffer.length;Z++)x.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[Z]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let B=w.textures;for(let Z=0,ne=B.length;Z<ne;Z++){let X=n.get(B[Z]);X.__webglTexture&&(i.deleteTexture(X.__webglTexture),o.memory.textures--),n.remove(B[Z])}n.remove(w)}let R=0;function z(){R=0}function V(){let w=R;return w>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+r.maxTextures),R+=1,w}function j(w){let x=[];return x.push(w.wrapS),x.push(w.wrapT),x.push(w.wrapR||0),x.push(w.magFilter),x.push(w.minFilter),x.push(w.anisotropy),x.push(w.internalFormat),x.push(w.format),x.push(w.type),x.push(w.generateMipmaps),x.push(w.premultiplyAlpha),x.push(w.flipY),x.push(w.unpackAlignment),x.push(w.colorSpace),x.join()}function K(w,x){let B=n.get(w);if(w.isVideoTexture&&Q(w),w.isRenderTargetTexture===!1&&w.version>0&&B.__version!==w.version){let Z=w.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(B,w,x);return}}t.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+x)}function J(w,x){let B=n.get(w);if(w.version>0&&B.__version!==w.version){q(B,w,x);return}t.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+x)}function $(w,x){let B=n.get(w);if(w.version>0&&B.__version!==w.version){q(B,w,x);return}t.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+x)}function W(w,x){let B=n.get(w);if(w.version>0&&B.__version!==w.version){ie(B,w,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+x)}let de={[Fo]:i.REPEAT,[pi]:i.CLAMP_TO_EDGE,[Uo]:i.MIRRORED_REPEAT},me={[ln]:i.NEAREST,[lh]:i.NEAREST_MIPMAP_NEAREST,[Rs]:i.NEAREST_MIPMAP_LINEAR,[vn]:i.LINEAR,[ga]:i.LINEAR_MIPMAP_NEAREST,[Si]:i.LINEAR_MIPMAP_LINEAR},_e={[dh]:i.NEVER,[xh]:i.ALWAYS,[fh]:i.LESS,[ac]:i.LEQUAL,[ph]:i.EQUAL,[_h]:i.GEQUAL,[mh]:i.GREATER,[gh]:i.NOTEQUAL};function Fe(w,x){if(x.type===In&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===vn||x.magFilter===ga||x.magFilter===Rs||x.magFilter===Si||x.minFilter===vn||x.minFilter===ga||x.minFilter===Rs||x.minFilter===Si)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,de[x.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,de[x.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,de[x.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,me[x.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,me[x.minFilter]),x.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,_e[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===ln||x.minFilter!==Rs&&x.minFilter!==Si||x.type===In&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let B=e.get("EXT_texture_filter_anisotropic");i.texParameterf(w,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Xe(w,x){let B=!1;w.__webglInit===void 0&&(w.__webglInit=!0,x.addEventListener("dispose",P));let Z=x.source,ne=f.get(Z);ne===void 0&&(ne={},f.set(Z,ne));let X=j(x);if(X!==w.__cacheKey){ne[X]===void 0&&(ne[X]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,B=!0),ne[X].usedTimes++;let Re=ne[w.__cacheKey];Re!==void 0&&(ne[w.__cacheKey].usedTimes--,Re.usedTimes===0&&b(x)),w.__cacheKey=X,w.__webglTexture=ne[X].texture}return B}function q(w,x,B){let Z=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Z=i.TEXTURE_3D);let ne=Xe(w,x),X=x.source;t.bindTexture(Z,w.__webglTexture,i.TEXTURE0+B);let Re=n.get(X);if(X.version!==Re.__version||ne===!0){t.activeTexture(i.TEXTURE0+B);let ge=at.getPrimaries(at.workingColorSpace),Be=x.colorSpace===Kn?null:at.getPrimaries(x.colorSpace),Ge=x.colorSpace===Kn||ge===Be?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge);let oe=v(x.image,!1,r.maxTextureSize);oe=Ie(x,oe);let be=s.convert(x.format,x.colorSpace),He=s.convert(x.type),Ye=E(x.internalFormat,be,He,x.colorSpace,x.isVideoTexture);Fe(Z,x);let we,rt=x.mipmaps,Qe=x.isVideoTexture!==!0,ft=Re.__version===void 0||ne===!0,D=X.dataReady,ve=L(x,oe);if(x.isDepthTexture)Ye=y(x.format===Lr,x.type),ft&&(Qe?t.texStorage2D(i.TEXTURE_2D,1,Ye,oe.width,oe.height):t.texImage2D(i.TEXTURE_2D,0,Ye,oe.width,oe.height,0,be,He,null));else if(x.isDataTexture)if(rt.length>0){Qe&&ft&&t.texStorage2D(i.TEXTURE_2D,ve,Ye,rt[0].width,rt[0].height);for(let Y=0,te=rt.length;Y<te;Y++)we=rt[Y],Qe?D&&t.texSubImage2D(i.TEXTURE_2D,Y,0,0,we.width,we.height,be,He,we.data):t.texImage2D(i.TEXTURE_2D,Y,Ye,we.width,we.height,0,be,He,we.data);x.generateMipmaps=!1}else Qe?(ft&&t.texStorage2D(i.TEXTURE_2D,ve,Ye,oe.width,oe.height),D&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,oe.width,oe.height,be,He,oe.data)):t.texImage2D(i.TEXTURE_2D,0,Ye,oe.width,oe.height,0,be,He,oe.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Qe&&ft&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ve,Ye,rt[0].width,rt[0].height,oe.depth);for(let Y=0,te=rt.length;Y<te;Y++)if(we=rt[Y],x.format!==hn)if(be!==null)if(Qe){if(D)if(x.layerUpdates.size>0){let Me=pc(we.width,we.height,x.format,x.type);for(let ye of x.layerUpdates){let $e=we.data.subarray(ye*Me/we.data.BYTES_PER_ELEMENT,(ye+1)*Me/we.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,ye,we.width,we.height,1,be,$e)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,we.width,we.height,oe.depth,be,we.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Y,Ye,we.width,we.height,oe.depth,0,we.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Qe?D&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,we.width,we.height,oe.depth,be,He,we.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Y,Ye,we.width,we.height,oe.depth,0,be,He,we.data)}else{Qe&&ft&&t.texStorage2D(i.TEXTURE_2D,ve,Ye,rt[0].width,rt[0].height);for(let Y=0,te=rt.length;Y<te;Y++)we=rt[Y],x.format!==hn?be!==null?Qe?D&&t.compressedTexSubImage2D(i.TEXTURE_2D,Y,0,0,we.width,we.height,be,we.data):t.compressedTexImage2D(i.TEXTURE_2D,Y,Ye,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qe?D&&t.texSubImage2D(i.TEXTURE_2D,Y,0,0,we.width,we.height,be,He,we.data):t.texImage2D(i.TEXTURE_2D,Y,Ye,we.width,we.height,0,be,He,we.data)}else if(x.isDataArrayTexture)if(Qe){if(ft&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ve,Ye,oe.width,oe.height,oe.depth),D)if(x.layerUpdates.size>0){let Y=pc(oe.width,oe.height,x.format,x.type);for(let te of x.layerUpdates){let Me=oe.data.subarray(te*Y/oe.data.BYTES_PER_ELEMENT,(te+1)*Y/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,te,oe.width,oe.height,1,be,He,Me)}x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,be,He,oe.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ye,oe.width,oe.height,oe.depth,0,be,He,oe.data);else if(x.isData3DTexture)Qe?(ft&&t.texStorage3D(i.TEXTURE_3D,ve,Ye,oe.width,oe.height,oe.depth),D&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,be,He,oe.data)):t.texImage3D(i.TEXTURE_3D,0,Ye,oe.width,oe.height,oe.depth,0,be,He,oe.data);else if(x.isFramebufferTexture){if(ft)if(Qe)t.texStorage2D(i.TEXTURE_2D,ve,Ye,oe.width,oe.height);else{let Y=oe.width,te=oe.height;for(let Me=0;Me<ve;Me++)t.texImage2D(i.TEXTURE_2D,Me,Ye,Y,te,0,be,He,null),Y>>=1,te>>=1}}else if(rt.length>0){if(Qe&&ft){let Y=se(rt[0]);t.texStorage2D(i.TEXTURE_2D,ve,Ye,Y.width,Y.height)}for(let Y=0,te=rt.length;Y<te;Y++)we=rt[Y],Qe?D&&t.texSubImage2D(i.TEXTURE_2D,Y,0,0,be,He,we):t.texImage2D(i.TEXTURE_2D,Y,Ye,be,He,we);x.generateMipmaps=!1}else if(Qe){if(ft){let Y=se(oe);t.texStorage2D(i.TEXTURE_2D,ve,Ye,Y.width,Y.height)}D&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,be,He,oe)}else t.texImage2D(i.TEXTURE_2D,0,Ye,be,He,oe);m(x)&&d(Z),Re.__version=X.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function ie(w,x,B){if(x.image.length!==6)return;let Z=Xe(w,x),ne=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+B);let X=n.get(ne);if(ne.version!==X.__version||Z===!0){t.activeTexture(i.TEXTURE0+B);let Re=at.getPrimaries(at.workingColorSpace),ge=x.colorSpace===Kn?null:at.getPrimaries(x.colorSpace),Be=x.colorSpace===Kn||Re===ge?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);let Ge=x.isCompressedTexture||x.image[0].isCompressedTexture,oe=x.image[0]&&x.image[0].isDataTexture,be=[];for(let te=0;te<6;te++)!Ge&&!oe?be[te]=v(x.image[te],!0,r.maxCubemapSize):be[te]=oe?x.image[te].image:x.image[te],be[te]=Ie(x,be[te]);let He=be[0],Ye=s.convert(x.format,x.colorSpace),we=s.convert(x.type),rt=E(x.internalFormat,Ye,we,x.colorSpace),Qe=x.isVideoTexture!==!0,ft=X.__version===void 0||Z===!0,D=ne.dataReady,ve=L(x,He);Fe(i.TEXTURE_CUBE_MAP,x);let Y;if(Ge){Qe&&ft&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ve,rt,He.width,He.height);for(let te=0;te<6;te++){Y=be[te].mipmaps;for(let Me=0;Me<Y.length;Me++){let ye=Y[Me];x.format!==hn?Ye!==null?Qe?D&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Me,0,0,ye.width,ye.height,Ye,ye.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Me,rt,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Qe?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Me,0,0,ye.width,ye.height,Ye,we,ye.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Me,rt,ye.width,ye.height,0,Ye,we,ye.data)}}}else{if(Y=x.mipmaps,Qe&&ft){Y.length>0&&ve++;let te=se(be[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ve,rt,te.width,te.height)}for(let te=0;te<6;te++)if(oe){Qe?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,be[te].width,be[te].height,Ye,we,be[te].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,rt,be[te].width,be[te].height,0,Ye,we,be[te].data);for(let Me=0;Me<Y.length;Me++){let $e=Y[Me].image[te].image;Qe?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Me+1,0,0,$e.width,$e.height,Ye,we,$e.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Me+1,rt,$e.width,$e.height,0,Ye,we,$e.data)}}else{Qe?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Ye,we,be[te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,rt,Ye,we,be[te]);for(let Me=0;Me<Y.length;Me++){let ye=Y[Me];Qe?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Me+1,0,0,Ye,we,ye.image[te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Me+1,rt,Ye,we,ye.image[te])}}}m(x)&&d(i.TEXTURE_CUBE_MAP),X.__version=ne.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function ue(w,x,B,Z,ne,X){let Re=s.convert(B.format,B.colorSpace),ge=s.convert(B.type),Be=E(B.internalFormat,Re,ge,B.colorSpace),Ge=n.get(x),oe=n.get(B);if(oe.__renderTarget=x,!Ge.__hasExternalTextures){let be=Math.max(1,x.width>>X),He=Math.max(1,x.height>>X);ne===i.TEXTURE_3D||ne===i.TEXTURE_2D_ARRAY?t.texImage3D(ne,X,Be,be,He,x.depth,0,Re,ge,null):t.texImage2D(ne,X,Be,be,He,0,Re,ge,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),le(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,ne,oe.__webglTexture,0,re(x)):(ne===i.TEXTURE_2D||ne>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,ne,oe.__webglTexture,X),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ce(w,x,B){if(i.bindRenderbuffer(i.RENDERBUFFER,w),x.depthBuffer){let Z=x.depthTexture,ne=Z&&Z.isDepthTexture?Z.type:null,X=y(x.stencilBuffer,ne),Re=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=re(x);le(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ge,X,x.width,x.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,ge,X,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,X,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Re,i.RENDERBUFFER,w)}else{let Z=x.textures;for(let ne=0;ne<Z.length;ne++){let X=Z[ne],Re=s.convert(X.format,X.colorSpace),ge=s.convert(X.type),Be=E(X.internalFormat,Re,ge,X.colorSpace),Ge=re(x);B&&le(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ge,Be,x.width,x.height):le(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ge,Be,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,Be,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ae(w,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,w),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Z=n.get(x.depthTexture);Z.__renderTarget=x,(!Z.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),K(x.depthTexture,0);let ne=Z.__webglTexture,X=re(x);if(x.depthTexture.format===xr)le(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ne,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ne,0);else if(x.depthTexture.format===Lr)le(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ne,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function Ve(w){let x=n.get(w),B=w.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==w.depthTexture){let Z=w.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),Z){let ne=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,Z.removeEventListener("dispose",ne)};Z.addEventListener("dispose",ne),x.__depthDisposeCallback=ne}x.__boundDepthTexture=Z}if(w.depthTexture&&!x.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");let Z=w.texture.mipmaps;Z&&Z.length>0?Ae(x.__webglFramebuffer[0],w):Ae(x.__webglFramebuffer,w)}else if(B){x.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[Z]),x.__webglDepthbuffer[Z]===void 0)x.__webglDepthbuffer[Z]=i.createRenderbuffer(),ce(x.__webglDepthbuffer[Z],w,!1);else{let ne=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=x.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,ne,i.RENDERBUFFER,X)}}else{let Z=w.texture.mipmaps;if(Z&&Z.length>0?t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),ce(x.__webglDepthbuffer,w,!1);else{let ne=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,ne,i.RENDERBUFFER,X)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ce(w,x,B){let Z=n.get(w);x!==void 0&&ue(Z.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&Ve(w)}function We(w){let x=w.texture,B=n.get(w),Z=n.get(x);w.addEventListener("dispose",I);let ne=w.textures,X=w.isWebGLCubeRenderTarget===!0,Re=ne.length>1;if(Re||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=x.version,o.memory.textures++),X){B.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer[ge]=[];for(let Be=0;Be<x.mipmaps.length;Be++)B.__webglFramebuffer[ge][Be]=i.createFramebuffer()}else B.__webglFramebuffer[ge]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer=[];for(let ge=0;ge<x.mipmaps.length;ge++)B.__webglFramebuffer[ge]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(Re)for(let ge=0,Be=ne.length;ge<Be;ge++){let Ge=n.get(ne[ge]);Ge.__webglTexture===void 0&&(Ge.__webglTexture=i.createTexture(),o.memory.textures++)}if(w.samples>0&&le(w)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ge=0;ge<ne.length;ge++){let Be=ne[ge];B.__webglColorRenderbuffer[ge]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[ge]);let Ge=s.convert(Be.format,Be.colorSpace),oe=s.convert(Be.type),be=E(Be.internalFormat,Ge,oe,Be.colorSpace,w.isXRRenderTarget===!0),He=re(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,He,be,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.RENDERBUFFER,B.__webglColorRenderbuffer[ge])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),ce(B.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(X){t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),Fe(i.TEXTURE_CUBE_MAP,x);for(let ge=0;ge<6;ge++)if(x.mipmaps&&x.mipmaps.length>0)for(let Be=0;Be<x.mipmaps.length;Be++)ue(B.__webglFramebuffer[ge][Be],w,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Be);else ue(B.__webglFramebuffer[ge],w,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);m(x)&&d(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Re){for(let ge=0,Be=ne.length;ge<Be;ge++){let Ge=ne[ge],oe=n.get(Ge);t.bindTexture(i.TEXTURE_2D,oe.__webglTexture),Fe(i.TEXTURE_2D,Ge),ue(B.__webglFramebuffer,w,Ge,i.COLOR_ATTACHMENT0+ge,i.TEXTURE_2D,0),m(Ge)&&d(i.TEXTURE_2D)}t.unbindTexture()}else{let ge=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ge=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ge,Z.__webglTexture),Fe(ge,x),x.mipmaps&&x.mipmaps.length>0)for(let Be=0;Be<x.mipmaps.length;Be++)ue(B.__webglFramebuffer[Be],w,x,i.COLOR_ATTACHMENT0,ge,Be);else ue(B.__webglFramebuffer,w,x,i.COLOR_ATTACHMENT0,ge,0);m(x)&&d(ge),t.unbindTexture()}w.depthBuffer&&Ve(w)}function Te(w){let x=w.textures;for(let B=0,Z=x.length;B<Z;B++){let ne=x[B];if(m(ne)){let X=T(w),Re=n.get(ne).__webglTexture;t.bindTexture(X,Re),d(X),t.unbindTexture()}}}let Pe=[],S=[];function he(w){if(w.samples>0){if(le(w)===!1){let x=w.textures,B=w.width,Z=w.height,ne=i.COLOR_BUFFER_BIT,X=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Re=n.get(w),ge=x.length>1;if(ge)for(let Ge=0;Ge<x.length;Ge++)t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ge,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ge,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer);let Be=w.texture.mipmaps;Be&&Be.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Re.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let Ge=0;Ge<x.length;Ge++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(ne|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(ne|=i.STENCIL_BUFFER_BIT)),ge){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Re.__webglColorRenderbuffer[Ge]);let oe=n.get(x[Ge]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,oe,0)}i.blitFramebuffer(0,0,B,Z,0,0,B,Z,ne,i.NEAREST),l===!0&&(Pe.length=0,S.length=0,Pe.push(i.COLOR_ATTACHMENT0+Ge),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Pe.push(X),S.push(X),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,S)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Pe))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ge)for(let Ge=0;Ge<x.length;Ge++){t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ge,i.RENDERBUFFER,Re.__webglColorRenderbuffer[Ge]);let oe=n.get(x[Ge]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ge,i.TEXTURE_2D,oe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){let x=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function re(w){return Math.min(r.maxSamples,w.samples)}function le(w){let x=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Q(w){let x=o.render.frame;u.get(w)!==x&&(u.set(w,x),w.update())}function Ie(w,x){let B=w.colorSpace,Z=w.format,ne=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||B!==Bi&&B!==Kn&&(at.getTransfer(B)===dt?(Z!==hn||ne!==Mn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),x}function se(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=z,this.setTexture2D=K,this.setTexture2DArray=J,this.setTexture3D=$,this.setTextureCube=W,this.rebindTextures=Ce,this.setupRenderTarget=We,this.updateRenderTargetMipmap=Te,this.updateMultisampleRenderTarget=he,this.setupDepthRenderbuffer=Ve,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=le}function D_(i,e){function t(n,r=Kn){let s,o=at.getTransfer(r);if(n===Mn)return i.UNSIGNED_BYTE;if(n===xa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===va)return i.UNSIGNED_SHORT_5_5_5_1;if(n===tc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ql)return i.BYTE;if(n===ec)return i.SHORT;if(n===Rr)return i.UNSIGNED_SHORT;if(n===_a)return i.INT;if(n===wi)return i.UNSIGNED_INT;if(n===In)return i.FLOAT;if(n===Pr)return i.HALF_FLOAT;if(n===nc)return i.ALPHA;if(n===ic)return i.RGB;if(n===hn)return i.RGBA;if(n===xr)return i.DEPTH_COMPONENT;if(n===Lr)return i.DEPTH_STENCIL;if(n===rc)return i.RED;if(n===ya)return i.RED_INTEGER;if(n===sc)return i.RG;if(n===Ma)return i.RG_INTEGER;if(n===ba)return i.RGBA_INTEGER;if(n===Ps||n===Is||n===Ls||n===Ds)if(o===dt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ps)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Is)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ls)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ds)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ps)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Is)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ls)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ds)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Sa||n===wa||n===Ea||n===Ta)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Sa)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===wa)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ea)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ta)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Aa||n===Ca||n===Ra)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Aa||n===Ca)return o===dt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ra)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Pa||n===Ia||n===La||n===Da||n===Fa||n===Ua||n===Na||n===Oa||n===Ba||n===ka||n===za||n===Va||n===Ha||n===Ga)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Pa)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ia)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===La)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Da)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Fa)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ua)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Na)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Oa)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ba)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ka)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===za)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Va)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ha)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ga)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Fs||n===Wa||n===Xa)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Fs)return o===dt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Wa)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Xa)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===oc||n===qa||n===Ya||n===Za)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Fs)return s.COMPRESSED_RED_RGTC1_EXT;if(n===qa)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ya)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Za)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ir?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var F_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,U_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Ac=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let r=new Ei,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new en({vertexShader:F_,fragmentShader:U_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new pt(new zi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Cc=class extends Gn{constructor(e,t){super();let n=this,r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,p=null,g=null,v=new Ac,m=t.getContextAttributes(),d=null,T=null,E=[],y=[],L=new fe,P=null,I=new Ct;I.viewport=new vt;let U=new Ct;U.viewport=new vt;let b=[I,U],_=new ra,R=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ie=E[q];return ie===void 0&&(ie=new Sr,E[q]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(q){let ie=E[q];return ie===void 0&&(ie=new Sr,E[q]=ie),ie.getGripSpace()},this.getHand=function(q){let ie=E[q];return ie===void 0&&(ie=new Sr,E[q]=ie),ie.getHandSpace()};function V(q){let ie=y.indexOf(q.inputSource);if(ie===-1)return;let ue=E[ie];ue!==void 0&&(ue.update(q.inputSource,q.frame,c||o),ue.dispatchEvent({type:q.type,data:q.inputSource}))}function j(){r.removeEventListener("select",V),r.removeEventListener("selectstart",V),r.removeEventListener("selectend",V),r.removeEventListener("squeeze",V),r.removeEventListener("squeezestart",V),r.removeEventListener("squeezeend",V),r.removeEventListener("end",j),r.removeEventListener("inputsourceschange",K);for(let q=0;q<E.length;q++){let ie=y[q];ie!==null&&(y[q]=null,E[q].disconnect(ie))}R=null,z=null,v.reset(),e.setRenderTarget(d),p=null,f=null,h=null,r=null,T=null,Xe.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=function(q){return zs(this,null,function*(){if(r=q,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",V),r.addEventListener("selectstart",V),r.addEventListener("selectend",V),r.addEventListener("squeeze",V),r.addEventListener("squeezestart",V),r.addEventListener("squeezeend",V),r.addEventListener("end",j),r.addEventListener("inputsourceschange",K),m.xrCompatible!==!0&&(yield t.makeXRCompatible()),P=e.getPixelRatio(),e.getSize(L),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let ue=null,ce=null,Ae=null;m.depth&&(Ae=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ue=m.stencil?Lr:xr,ce=m.stencil?Ir:wi);let Ve={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:s};h=new XRWebGLBinding(r,t),f=h.createProjectionLayer(Ve),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),T=new Cn(f.textureWidth,f.textureHeight,{format:hn,type:Mn,depthTexture:new us(f.textureWidth,f.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let ue={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,ue),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),T=new Cn(p.framebufferWidth,p.framebufferHeight,{format:hn,type:Mn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=yield r.requestReferenceSpace(a),Xe.setContext(r),Xe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}})},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function K(q){for(let ie=0;ie<q.removed.length;ie++){let ue=q.removed[ie],ce=y.indexOf(ue);ce>=0&&(y[ce]=null,E[ce].disconnect(ue))}for(let ie=0;ie<q.added.length;ie++){let ue=q.added[ie],ce=y.indexOf(ue);if(ce===-1){for(let Ve=0;Ve<E.length;Ve++)if(Ve>=y.length){y.push(ue),ce=Ve;break}else if(y[Ve]===null){y[Ve]=ue,ce=Ve;break}if(ce===-1)break}let Ae=E[ce];Ae&&Ae.connect(ue)}}let J=new k,$=new k;function W(q,ie,ue){J.setFromMatrixPosition(ie.matrixWorld),$.setFromMatrixPosition(ue.matrixWorld);let ce=J.distanceTo($),Ae=ie.projectionMatrix.elements,Ve=ue.projectionMatrix.elements,Ce=Ae[14]/(Ae[10]-1),We=Ae[14]/(Ae[10]+1),Te=(Ae[9]+1)/Ae[5],Pe=(Ae[9]-1)/Ae[5],S=(Ae[8]-1)/Ae[0],he=(Ve[8]+1)/Ve[0],re=Ce*S,le=Ce*he,Q=ce/(-S+he),Ie=Q*-S;if(ie.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Ie),q.translateZ(Q),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Ae[10]===-1)q.projectionMatrix.copy(ie.projectionMatrix),q.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{let se=Ce+Q,w=We+Q,x=re-Ie,B=le+(ce-Ie),Z=Te*We/w*se,ne=Pe*We/w*se;q.projectionMatrix.makePerspective(x,B,Z,ne,se,w),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function de(q,ie){ie===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ie.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;let ie=q.near,ue=q.far;v.texture!==null&&(v.depthNear>0&&(ie=v.depthNear),v.depthFar>0&&(ue=v.depthFar)),_.near=U.near=I.near=ie,_.far=U.far=I.far=ue,(R!==_.near||z!==_.far)&&(r.updateRenderState({depthNear:_.near,depthFar:_.far}),R=_.near,z=_.far),I.layers.mask=q.layers.mask|2,U.layers.mask=q.layers.mask|4,_.layers.mask=I.layers.mask|U.layers.mask;let ce=q.parent,Ae=_.cameras;de(_,ce);for(let Ve=0;Ve<Ae.length;Ve++)de(Ae[Ve],ce);Ae.length===2?W(_,I,U):_.projectionMatrix.copy(I.projectionMatrix),me(q,_,ce)};function me(q,ie,ue){ue===null?q.matrix.copy(ie.matrixWorld):(q.matrix.copy(ue.matrixWorld),q.matrix.invert(),q.matrix.multiply(ie.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ie.projectionMatrix),q.projectionMatrixInverse.copy(ie.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=ns*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(_)};let _e=null;function Fe(q,ie){if(u=ie.getViewerPose(c||o),g=ie,u!==null){let ue=u.views;p!==null&&(e.setRenderTargetFramebuffer(T,p.framebuffer),e.setRenderTarget(T));let ce=!1;ue.length!==_.cameras.length&&(_.cameras.length=0,ce=!0);for(let Ce=0;Ce<ue.length;Ce++){let We=ue[Ce],Te=null;if(p!==null)Te=p.getViewport(We);else{let S=h.getViewSubImage(f,We);Te=S.viewport,Ce===0&&(e.setRenderTargetTextures(T,S.colorTexture,S.depthStencilTexture),e.setRenderTarget(T))}let Pe=b[Ce];Pe===void 0&&(Pe=new Ct,Pe.layers.enable(Ce),Pe.viewport=new vt,b[Ce]=Pe),Pe.matrix.fromArray(We.transform.matrix),Pe.matrix.decompose(Pe.position,Pe.quaternion,Pe.scale),Pe.projectionMatrix.fromArray(We.projectionMatrix),Pe.projectionMatrixInverse.copy(Pe.projectionMatrix).invert(),Pe.viewport.set(Te.x,Te.y,Te.width,Te.height),Ce===0&&(_.matrix.copy(Pe.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),ce===!0&&_.cameras.push(Pe)}let Ae=r.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&h){let Ce=h.getDepthInformation(ue[0]);Ce&&Ce.isValid&&Ce.texture&&v.init(e,Ce,r.renderState)}}for(let ue=0;ue<E.length;ue++){let ce=y[ue],Ae=E[ue];ce!==null&&Ae!==void 0&&Ae.update(ce,ie,c||o)}_e&&_e(q,ie),ie.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ie}),g=null}let Xe=new $h;Xe.setAnimationLoop(Fe),this.setAnimationLoop=function(q){_e=q},this.dispose=function(){}}},qi=new Xn,N_=new gt;function O_(i,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,uc(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,T,E,y){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),h(m,d)):d.isMeshPhongMaterial?(s(m,d),u(m,d)):d.isMeshStandardMaterial?(s(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,y)):d.isMeshMatcapMaterial?(s(m,d),g(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),v(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,T,E):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Rt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Rt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let T=e.get(d),E=T.envMap,y=T.envMapRotation;E&&(m.envMap.value=E,qi.copy(y),qi.x*=-1,qi.y*=-1,qi.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(qi.y*=-1,qi.z*=-1),m.envMapRotation.value.setFromMatrix4(N_.makeRotationFromEuler(qi)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,T,E){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*T,m.scale.value=E*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,T){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Rt&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function v(m,d){let T=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function B_(i,e,t,n){let r={},s={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,E){let y=E.program;n.uniformBlockBinding(T,y)}function c(T,E){let y=r[T.id];y===void 0&&(g(T),y=u(T),r[T.id]=y,T.addEventListener("dispose",m));let L=E.program;n.updateUBOMapping(T,L);let P=e.render.frame;s[T.id]!==P&&(f(T),s[T.id]=P)}function u(T){let E=h();T.__bindingPointIndex=E;let y=i.createBuffer(),L=T.__size,P=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,L,P),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,y),y}function h(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(T){let E=r[T.id],y=T.uniforms,L=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let P=0,I=y.length;P<I;P++){let U=Array.isArray(y[P])?y[P]:[y[P]];for(let b=0,_=U.length;b<_;b++){let R=U[b];if(p(R,P,b,L)===!0){let z=R.__offset,V=Array.isArray(R.value)?R.value:[R.value],j=0;for(let K=0;K<V.length;K++){let J=V[K],$=v(J);typeof J=="number"||typeof J=="boolean"?(R.__data[0]=J,i.bufferSubData(i.UNIFORM_BUFFER,z+j,R.__data)):J.isMatrix3?(R.__data[0]=J.elements[0],R.__data[1]=J.elements[1],R.__data[2]=J.elements[2],R.__data[3]=0,R.__data[4]=J.elements[3],R.__data[5]=J.elements[4],R.__data[6]=J.elements[5],R.__data[7]=0,R.__data[8]=J.elements[6],R.__data[9]=J.elements[7],R.__data[10]=J.elements[8],R.__data[11]=0):(J.toArray(R.__data,j),j+=$.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,z,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(T,E,y,L){let P=T.value,I=E+"_"+y;if(L[I]===void 0)return typeof P=="number"||typeof P=="boolean"?L[I]=P:L[I]=P.clone(),!0;{let U=L[I];if(typeof P=="number"||typeof P=="boolean"){if(U!==P)return L[I]=P,!0}else if(U.equals(P)===!1)return U.copy(P),!0}return!1}function g(T){let E=T.uniforms,y=0,L=16;for(let I=0,U=E.length;I<U;I++){let b=Array.isArray(E[I])?E[I]:[E[I]];for(let _=0,R=b.length;_<R;_++){let z=b[_],V=Array.isArray(z.value)?z.value:[z.value];for(let j=0,K=V.length;j<K;j++){let J=V[j],$=v(J),W=y%L,de=W%$.boundary,me=W+de;y+=de,me!==0&&L-me<$.storage&&(y+=L-me),z.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=y,y+=$.storage}}}let P=y%L;return P>0&&(y+=L-P),T.__size=y,T.__cache={},this}function v(T){let E={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(E.boundary=4,E.storage=4):T.isVector2?(E.boundary=8,E.storage=8):T.isVector3||T.isColor?(E.boundary=16,E.storage=12):T.isVector4?(E.boundary=16,E.storage=16):T.isMatrix3?(E.boundary=48,E.storage=48):T.isMatrix4?(E.boundary=64,E.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),E}function m(T){let E=T.target;E.removeEventListener("dispose",m);let y=o.indexOf(E.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function d(){for(let T in r)i.deleteBuffer(r[T]);o=[],r={},s={}}return{bind:l,update:c,dispose:d}}var Ji=class{constructor(e={}){let{canvas:t=vh(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let g=new Uint32Array(4),v=new Int32Array(4),m=null,d=null,T=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Jn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let y=this,L=!1;this._outputColorSpace=$t;let P=0,I=0,U=null,b=-1,_=null,R=new vt,z=new vt,V=null,j=new Ke(0),K=0,J=t.width,$=t.height,W=1,de=null,me=null,_e=new vt(0,0,J,$),Fe=new vt(0,0,J,$),Xe=!1,q=new wr,ie=!1,ue=!1,ce=new gt,Ae=new gt,Ve=new k,Ce=new vt,We={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Te=!1;function Pe(){return U===null?W:1}let S=n;function he(M,N){return t.getContext(M,N)}try{let M={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${sa}`),t.addEventListener("webglcontextlost",te,!1),t.addEventListener("webglcontextrestored",Me,!1),t.addEventListener("webglcontextcreationerror",ye,!1),S===null){let N="webgl2";if(S=he(N,M),S===null)throw he(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let re,le,Q,Ie,se,w,x,B,Z,ne,X,Re,ge,Be,Ge,oe,be,He,Ye,we,rt,Qe,ft,D;function ve(){re=new n0(S),re.init(),Qe=new D_(S,re),le=new Jg(S,re,e,Qe),Q=new I_(S,re),le.reverseDepthBuffer&&f&&Q.buffers.depth.setReversed(!0),Ie=new s0(S),se=new x_,w=new L_(S,re,Q,se,le,Qe,Ie),x=new jg(y),B=new t0(y),Z=new hp(S),ft=new Yg(S,Z),ne=new i0(S,Z,Ie,ft),X=new a0(S,ne,Z,Ie),Ye=new o0(S,le,w),oe=new Kg(se),Re=new __(y,x,B,re,le,ft,oe),ge=new O_(y,se),Be=new y_,Ge=new T_(re),He=new qg(y,x,B,Q,X,p,l),be=new R_(y,X,le),D=new B_(S,Ie,le,Q),we=new Zg(S,re,Ie),rt=new r0(S,re,Ie),Ie.programs=Re.programs,y.capabilities=le,y.extensions=re,y.properties=se,y.renderLists=Be,y.shadowMap=be,y.state=Q,y.info=Ie}ve();let Y=new Cc(y,S);this.xr=Y,this.getContext=function(){return S},this.getContextAttributes=function(){return S.getContextAttributes()},this.forceContextLoss=function(){let M=re.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=re.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(M){M!==void 0&&(W=M,this.setSize(J,$,!1))},this.getSize=function(M){return M.set(J,$)},this.setSize=function(M,N,H=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=M,$=N,t.width=Math.floor(M*W),t.height=Math.floor(N*W),H===!0&&(t.style.width=M+"px",t.style.height=N+"px"),this.setViewport(0,0,M,N)},this.getDrawingBufferSize=function(M){return M.set(J*W,$*W).floor()},this.setDrawingBufferSize=function(M,N,H){J=M,$=N,W=H,t.width=Math.floor(M*H),t.height=Math.floor(N*H),this.setViewport(0,0,M,N)},this.getCurrentViewport=function(M){return M.copy(R)},this.getViewport=function(M){return M.copy(_e)},this.setViewport=function(M,N,H,G){M.isVector4?_e.set(M.x,M.y,M.z,M.w):_e.set(M,N,H,G),Q.viewport(R.copy(_e).multiplyScalar(W).round())},this.getScissor=function(M){return M.copy(Fe)},this.setScissor=function(M,N,H,G){M.isVector4?Fe.set(M.x,M.y,M.z,M.w):Fe.set(M,N,H,G),Q.scissor(z.copy(Fe).multiplyScalar(W).round())},this.getScissorTest=function(){return Xe},this.setScissorTest=function(M){Q.setScissorTest(Xe=M)},this.setOpaqueSort=function(M){de=M},this.setTransparentSort=function(M){me=M},this.getClearColor=function(M){return M.copy(He.getClearColor())},this.setClearColor=function(){He.setClearColor(...arguments)},this.getClearAlpha=function(){return He.getClearAlpha()},this.setClearAlpha=function(){He.setClearAlpha(...arguments)},this.clear=function(M=!0,N=!0,H=!0){let G=0;if(M){let O=!1;if(U!==null){let ae=U.texture.format;O=ae===ba||ae===Ma||ae===ya}if(O){let ae=U.texture.type,xe=ae===Mn||ae===wi||ae===Rr||ae===Ir||ae===xa||ae===va,Se=He.getClearColor(),Ee=He.getClearAlpha(),Ze=Se.r,qe=Se.g,ke=Se.b;xe?(g[0]=Ze,g[1]=qe,g[2]=ke,g[3]=Ee,S.clearBufferuiv(S.COLOR,0,g)):(v[0]=Ze,v[1]=qe,v[2]=ke,v[3]=Ee,S.clearBufferiv(S.COLOR,0,v))}else G|=S.COLOR_BUFFER_BIT}N&&(G|=S.DEPTH_BUFFER_BIT),H&&(G|=S.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),S.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",Me,!1),t.removeEventListener("webglcontextcreationerror",ye,!1),He.dispose(),Be.dispose(),Ge.dispose(),se.dispose(),x.dispose(),B.dispose(),X.dispose(),ft.dispose(),D.dispose(),Re.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",Pc),Y.removeEventListener("sessionend",Ic),Ti.stop()};function te(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function Me(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;let M=Ie.autoReset,N=be.enabled,H=be.autoUpdate,G=be.needsUpdate,O=be.type;ve(),Ie.autoReset=M,be.enabled=N,be.autoUpdate=H,be.needsUpdate=G,be.type=O}function ye(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function $e(M){let N=M.target;N.removeEventListener("dispose",$e),yt(N)}function yt(M){Ot(M),se.remove(M)}function Ot(M){let N=se.get(M).programs;N!==void 0&&(N.forEach(function(H){Re.releaseProgram(H)}),M.isShaderMaterial&&Re.releaseShaderCache(M))}this.renderBufferDirect=function(M,N,H,G,O,ae){N===null&&(N=We);let xe=O.isMesh&&O.matrixWorld.determinant()<0,Se=sd(M,N,H,G,O);Q.setMaterial(G,xe);let Ee=H.index,Ze=1;if(G.wireframe===!0){if(Ee=ne.getWireframeAttribute(H),Ee===void 0)return;Ze=2}let qe=H.drawRange,ke=H.attributes.position,st=qe.start*Ze,ct=(qe.start+qe.count)*Ze;ae!==null&&(st=Math.max(st,ae.start*Ze),ct=Math.min(ct,(ae.start+ae.count)*Ze)),Ee!==null?(st=Math.max(st,0),ct=Math.min(ct,Ee.count)):ke!=null&&(st=Math.max(st,0),ct=Math.min(ct,ke.count));let Et=ct-st;if(Et<0||Et===1/0)return;ft.setup(O,G,Se,H,Ee);let Mt,lt=we;if(Ee!==null&&(Mt=Z.get(Ee),lt=rt,lt.setIndex(Mt)),O.isMesh)G.wireframe===!0?(Q.setLineWidth(G.wireframeLinewidth*Pe()),lt.setMode(S.LINES)):lt.setMode(S.TRIANGLES);else if(O.isLine){let ze=G.linewidth;ze===void 0&&(ze=1),Q.setLineWidth(ze*Pe()),O.isLineSegments?lt.setMode(S.LINES):O.isLineLoop?lt.setMode(S.LINE_LOOP):lt.setMode(S.LINE_STRIP)}else O.isPoints?lt.setMode(S.POINTS):O.isSprite&&lt.setMode(S.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Us("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),lt.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(re.get("WEBGL_multi_draw"))lt.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{let ze=O._multiDrawStarts,Ut=O._multiDrawCounts,ut=O._multiDrawCount,fn=Ee?Z.get(Ee).bytesPerElement:1,Ki=se.get(G).currentProgram.getUniforms();for(let Zt=0;Zt<ut;Zt++)Ki.setValue(S,"_gl_DrawID",Zt),lt.render(ze[Zt]/fn,Ut[Zt])}else if(O.isInstancedMesh)lt.renderInstances(st,Et,O.count);else if(H.isInstancedBufferGeometry){let ze=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Ut=Math.min(H.instanceCount,ze);lt.renderInstances(st,Et,Ut)}else lt.render(st,Et)};function ht(M,N,H){M.transparent===!0&&M.side===Nt&&M.forceSinglePass===!1?(M.side=Rt,M.needsUpdate=!0,Bs(M,N,H),M.side=Hn,M.needsUpdate=!0,Bs(M,N,H),M.side=Nt):Bs(M,N,H)}this.compile=function(M,N,H=null){H===null&&(H=M),d=Ge.get(H),d.init(N),E.push(d),H.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(d.pushLight(O),O.castShadow&&d.pushShadow(O))}),M!==H&&M.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(d.pushLight(O),O.castShadow&&d.pushShadow(O))}),d.setupLights();let G=new Set;return M.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;let ae=O.material;if(ae)if(Array.isArray(ae))for(let xe=0;xe<ae.length;xe++){let Se=ae[xe];ht(Se,H,O),G.add(Se)}else ht(ae,H,O),G.add(ae)}),d=E.pop(),G},this.compileAsync=function(M,N,H=null){let G=this.compile(M,N,H);return new Promise(O=>{function ae(){if(G.forEach(function(xe){se.get(xe).currentProgram.isReady()&&G.delete(xe)}),G.size===0){O(M);return}setTimeout(ae,10)}re.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let dn=null;function Dn(M){dn&&dn(M)}function Pc(){Ti.stop()}function Ic(){Ti.start()}let Ti=new $h;Ti.setAnimationLoop(Dn),typeof self<"u"&&Ti.setContext(self),this.setAnimationLoop=function(M){dn=M,Y.setAnimationLoop(M),M===null?Ti.stop():Ti.start()},Y.addEventListener("sessionstart",Pc),Y.addEventListener("sessionend",Ic),this.render=function(M,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(N),N=Y.getCamera()),M.isScene===!0&&M.onBeforeRender(y,M,N,U),d=Ge.get(M,E.length),d.init(N),E.push(d),Ae.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),q.setFromProjectionMatrix(Ae),ue=this.localClippingEnabled,ie=oe.init(this.clippingPlanes,ue),m=Be.get(M,T.length),m.init(),T.push(m),Y.enabled===!0&&Y.isPresenting===!0){let ae=y.xr.getDepthSensingMesh();ae!==null&&rl(ae,N,-1/0,y.sortObjects)}rl(M,N,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(de,me),Te=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,Te&&He.addToRenderList(m,M),this.info.render.frame++,ie===!0&&oe.beginShadows();let H=d.state.shadowsArray;be.render(H,M,N),ie===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset();let G=m.opaque,O=m.transmissive;if(d.setupLights(),N.isArrayCamera){let ae=N.cameras;if(O.length>0)for(let xe=0,Se=ae.length;xe<Se;xe++){let Ee=ae[xe];Dc(G,O,M,Ee)}Te&&He.render(M);for(let xe=0,Se=ae.length;xe<Se;xe++){let Ee=ae[xe];Lc(m,M,Ee,Ee.viewport)}}else O.length>0&&Dc(G,O,M,N),Te&&He.render(M),Lc(m,M,N);U!==null&&I===0&&(w.updateMultisampleRenderTarget(U),w.updateRenderTargetMipmap(U)),M.isScene===!0&&M.onAfterRender(y,M,N),ft.resetDefaultState(),b=-1,_=null,E.pop(),E.length>0?(d=E[E.length-1],ie===!0&&oe.setGlobalState(y.clippingPlanes,d.state.camera)):d=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function rl(M,N,H,G){if(M.visible===!1)return;if(M.layers.test(N.layers)){if(M.isGroup)H=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(N);else if(M.isLight)d.pushLight(M),M.castShadow&&d.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||q.intersectsSprite(M)){G&&Ce.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Ae);let xe=X.update(M),Se=M.material;Se.visible&&m.push(M,xe,Se,H,Ce.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||q.intersectsObject(M))){let xe=X.update(M),Se=M.material;if(G&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Ce.copy(M.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),Ce.copy(xe.boundingSphere.center)),Ce.applyMatrix4(M.matrixWorld).applyMatrix4(Ae)),Array.isArray(Se)){let Ee=xe.groups;for(let Ze=0,qe=Ee.length;Ze<qe;Ze++){let ke=Ee[Ze],st=Se[ke.materialIndex];st&&st.visible&&m.push(M,xe,st,H,Ce.z,ke)}}else Se.visible&&m.push(M,xe,Se,H,Ce.z,null)}}let ae=M.children;for(let xe=0,Se=ae.length;xe<Se;xe++)rl(ae[xe],N,H,G)}function Lc(M,N,H,G){let O=M.opaque,ae=M.transmissive,xe=M.transparent;d.setupLightsView(H),ie===!0&&oe.setGlobalState(y.clippingPlanes,H),G&&Q.viewport(R.copy(G)),O.length>0&&Os(O,N,H),ae.length>0&&Os(ae,N,H),xe.length>0&&Os(xe,N,H),Q.buffers.depth.setTest(!0),Q.buffers.depth.setMask(!0),Q.buffers.color.setMask(!0),Q.setPolygonOffset(!1)}function Dc(M,N,H,G){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[G.id]===void 0&&(d.state.transmissionRenderTarget[G.id]=new Cn(1,1,{generateMipmaps:!0,type:re.has("EXT_color_buffer_half_float")||re.has("EXT_color_buffer_float")?Pr:Mn,minFilter:Si,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:at.workingColorSpace}));let ae=d.state.transmissionRenderTarget[G.id],xe=G.viewport||R;ae.setSize(xe.z*y.transmissionResolutionScale,xe.w*y.transmissionResolutionScale);let Se=y.getRenderTarget();y.setRenderTarget(ae),y.getClearColor(j),K=y.getClearAlpha(),K<1&&y.setClearColor(16777215,.5),y.clear(),Te&&He.render(H);let Ee=y.toneMapping;y.toneMapping=Jn;let Ze=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),d.setupLightsView(G),ie===!0&&oe.setGlobalState(y.clippingPlanes,G),Os(M,H,G),w.updateMultisampleRenderTarget(ae),w.updateRenderTargetMipmap(ae),re.has("WEBGL_multisampled_render_to_texture")===!1){let qe=!1;for(let ke=0,st=N.length;ke<st;ke++){let ct=N[ke],Et=ct.object,Mt=ct.geometry,lt=ct.material,ze=ct.group;if(lt.side===Nt&&Et.layers.test(G.layers)){let Ut=lt.side;lt.side=Rt,lt.needsUpdate=!0,Fc(Et,H,G,Mt,lt,ze),lt.side=Ut,lt.needsUpdate=!0,qe=!0}}qe===!0&&(w.updateMultisampleRenderTarget(ae),w.updateRenderTargetMipmap(ae))}y.setRenderTarget(Se),y.setClearColor(j,K),Ze!==void 0&&(G.viewport=Ze),y.toneMapping=Ee}function Os(M,N,H){let G=N.isScene===!0?N.overrideMaterial:null;for(let O=0,ae=M.length;O<ae;O++){let xe=M[O],Se=xe.object,Ee=xe.geometry,Ze=xe.group,qe=xe.material;qe.allowOverride===!0&&G!==null&&(qe=G),Se.layers.test(H.layers)&&Fc(Se,N,H,Ee,qe,Ze)}}function Fc(M,N,H,G,O,ae){M.onBeforeRender(y,N,H,G,O,ae),M.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),O.onBeforeRender(y,N,H,G,M,ae),O.transparent===!0&&O.side===Nt&&O.forceSinglePass===!1?(O.side=Rt,O.needsUpdate=!0,y.renderBufferDirect(H,N,G,O,M,ae),O.side=Hn,O.needsUpdate=!0,y.renderBufferDirect(H,N,G,O,M,ae),O.side=Nt):y.renderBufferDirect(H,N,G,O,M,ae),M.onAfterRender(y,N,H,G,O,ae)}function Bs(M,N,H){N.isScene!==!0&&(N=We);let G=se.get(M),O=d.state.lights,ae=d.state.shadowsArray,xe=O.state.version,Se=Re.getParameters(M,O.state,ae,N,H),Ee=Re.getProgramCacheKey(Se),Ze=G.programs;G.environment=M.isMeshStandardMaterial?N.environment:null,G.fog=N.fog,G.envMap=(M.isMeshStandardMaterial?B:x).get(M.envMap||G.environment),G.envMapRotation=G.environment!==null&&M.envMap===null?N.environmentRotation:M.envMapRotation,Ze===void 0&&(M.addEventListener("dispose",$e),Ze=new Map,G.programs=Ze);let qe=Ze.get(Ee);if(qe!==void 0){if(G.currentProgram===qe&&G.lightsStateVersion===xe)return Nc(M,Se),qe}else Se.uniforms=Re.getUniforms(M),M.onBeforeCompile(Se,y),qe=Re.acquireProgram(Se,Ee),Ze.set(Ee,qe),G.uniforms=Se.uniforms;let ke=G.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(ke.clippingPlanes=oe.uniform),Nc(M,Se),G.needsLights=ad(M),G.lightsStateVersion=xe,G.needsLights&&(ke.ambientLightColor.value=O.state.ambient,ke.lightProbe.value=O.state.probe,ke.directionalLights.value=O.state.directional,ke.directionalLightShadows.value=O.state.directionalShadow,ke.spotLights.value=O.state.spot,ke.spotLightShadows.value=O.state.spotShadow,ke.rectAreaLights.value=O.state.rectArea,ke.ltc_1.value=O.state.rectAreaLTC1,ke.ltc_2.value=O.state.rectAreaLTC2,ke.pointLights.value=O.state.point,ke.pointLightShadows.value=O.state.pointShadow,ke.hemisphereLights.value=O.state.hemi,ke.directionalShadowMap.value=O.state.directionalShadowMap,ke.directionalShadowMatrix.value=O.state.directionalShadowMatrix,ke.spotShadowMap.value=O.state.spotShadowMap,ke.spotLightMatrix.value=O.state.spotLightMatrix,ke.spotLightMap.value=O.state.spotLightMap,ke.pointShadowMap.value=O.state.pointShadowMap,ke.pointShadowMatrix.value=O.state.pointShadowMatrix),G.currentProgram=qe,G.uniformsList=null,qe}function Uc(M){if(M.uniformsList===null){let N=M.currentProgram.getUniforms();M.uniformsList=Nr.seqWithValue(N.seq,M.uniforms)}return M.uniformsList}function Nc(M,N){let H=se.get(M);H.outputColorSpace=N.outputColorSpace,H.batching=N.batching,H.batchingColor=N.batchingColor,H.instancing=N.instancing,H.instancingColor=N.instancingColor,H.instancingMorph=N.instancingMorph,H.skinning=N.skinning,H.morphTargets=N.morphTargets,H.morphNormals=N.morphNormals,H.morphColors=N.morphColors,H.morphTargetsCount=N.morphTargetsCount,H.numClippingPlanes=N.numClippingPlanes,H.numIntersection=N.numClipIntersection,H.vertexAlphas=N.vertexAlphas,H.vertexTangents=N.vertexTangents,H.toneMapping=N.toneMapping}function sd(M,N,H,G,O){N.isScene!==!0&&(N=We),w.resetTextureUnits();let ae=N.fog,xe=G.isMeshStandardMaterial?N.environment:null,Se=U===null?y.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Bi,Ee=(G.isMeshStandardMaterial?B:x).get(G.envMap||xe),Ze=G.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,qe=!!H.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),ke=!!H.morphAttributes.position,st=!!H.morphAttributes.normal,ct=!!H.morphAttributes.color,Et=Jn;G.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(Et=y.toneMapping);let Mt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,lt=Mt!==void 0?Mt.length:0,ze=se.get(G),Ut=d.state.lights;if(ie===!0&&(ue===!0||M!==_)){let Gt=M===_&&G.id===b;oe.setState(G,M,Gt)}let ut=!1;G.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==Ut.state.version||ze.outputColorSpace!==Se||O.isBatchedMesh&&ze.batching===!1||!O.isBatchedMesh&&ze.batching===!0||O.isBatchedMesh&&ze.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&ze.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&ze.instancing===!1||!O.isInstancedMesh&&ze.instancing===!0||O.isSkinnedMesh&&ze.skinning===!1||!O.isSkinnedMesh&&ze.skinning===!0||O.isInstancedMesh&&ze.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&ze.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&ze.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&ze.instancingMorph===!1&&O.morphTexture!==null||ze.envMap!==Ee||G.fog===!0&&ze.fog!==ae||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==oe.numPlanes||ze.numIntersection!==oe.numIntersection)||ze.vertexAlphas!==Ze||ze.vertexTangents!==qe||ze.morphTargets!==ke||ze.morphNormals!==st||ze.morphColors!==ct||ze.toneMapping!==Et||ze.morphTargetsCount!==lt)&&(ut=!0):(ut=!0,ze.__version=G.version);let fn=ze.currentProgram;ut===!0&&(fn=Bs(G,N,O));let Ki=!1,Zt=!1,Br=!1,mt=fn.getUniforms(),rn=ze.uniforms;if(Q.useProgram(fn.program)&&(Ki=!0,Zt=!0,Br=!0),G.id!==b&&(b=G.id,Zt=!0),Ki||_!==M){Q.buffers.depth.getReversed()?(ce.copy(M.projectionMatrix),Mh(ce),bh(ce),mt.setValue(S,"projectionMatrix",ce)):mt.setValue(S,"projectionMatrix",M.projectionMatrix),mt.setValue(S,"viewMatrix",M.matrixWorldInverse);let Xt=mt.map.cameraPosition;Xt!==void 0&&Xt.setValue(S,Ve.setFromMatrixPosition(M.matrixWorld)),le.logarithmicDepthBuffer&&mt.setValue(S,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&mt.setValue(S,"isOrthographic",M.isOrthographicCamera===!0),_!==M&&(_=M,Zt=!0,Br=!0)}if(O.isSkinnedMesh){mt.setOptional(S,O,"bindMatrix"),mt.setOptional(S,O,"bindMatrixInverse");let Gt=O.skeleton;Gt&&(Gt.boneTexture===null&&Gt.computeBoneTexture(),mt.setValue(S,"boneTexture",Gt.boneTexture,w))}O.isBatchedMesh&&(mt.setOptional(S,O,"batchingTexture"),mt.setValue(S,"batchingTexture",O._matricesTexture,w),mt.setOptional(S,O,"batchingIdTexture"),mt.setValue(S,"batchingIdTexture",O._indirectTexture,w),mt.setOptional(S,O,"batchingColorTexture"),O._colorsTexture!==null&&mt.setValue(S,"batchingColorTexture",O._colorsTexture,w));let sn=H.morphAttributes;if((sn.position!==void 0||sn.normal!==void 0||sn.color!==void 0)&&Ye.update(O,H,fn),(Zt||ze.receiveShadow!==O.receiveShadow)&&(ze.receiveShadow=O.receiveShadow,mt.setValue(S,"receiveShadow",O.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(rn.envMap.value=Ee,rn.flipEnvMap.value=Ee.isCubeTexture&&Ee.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&N.environment!==null&&(rn.envMapIntensity.value=N.environmentIntensity),Zt&&(mt.setValue(S,"toneMappingExposure",y.toneMappingExposure),ze.needsLights&&od(rn,Br),ae&&G.fog===!0&&ge.refreshFogUniforms(rn,ae),ge.refreshMaterialUniforms(rn,G,W,$,d.state.transmissionRenderTarget[M.id]),Nr.upload(S,Uc(ze),rn,w)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Nr.upload(S,Uc(ze),rn,w),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&mt.setValue(S,"center",O.center),mt.setValue(S,"modelViewMatrix",O.modelViewMatrix),mt.setValue(S,"normalMatrix",O.normalMatrix),mt.setValue(S,"modelMatrix",O.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){let Gt=G.uniformsGroups;for(let Xt=0,sl=Gt.length;Xt<sl;Xt++){let Ai=Gt[Xt];D.update(Ai,fn),D.bind(Ai,fn)}}return fn}function od(M,N){M.ambientLightColor.needsUpdate=N,M.lightProbe.needsUpdate=N,M.directionalLights.needsUpdate=N,M.directionalLightShadows.needsUpdate=N,M.pointLights.needsUpdate=N,M.pointLightShadows.needsUpdate=N,M.spotLights.needsUpdate=N,M.spotLightShadows.needsUpdate=N,M.rectAreaLights.needsUpdate=N,M.hemisphereLights.needsUpdate=N}function ad(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(M,N,H){let G=se.get(M);G.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),se.get(M.texture).__webglTexture=N,se.get(M.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:H,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,N){let H=se.get(M);H.__webglFramebuffer=N,H.__useDefaultFramebuffer=N===void 0};let ld=S.createFramebuffer();this.setRenderTarget=function(M,N=0,H=0){U=M,P=N,I=H;let G=!0,O=null,ae=!1,xe=!1;if(M){let Ee=se.get(M);if(Ee.__useDefaultFramebuffer!==void 0)Q.bindFramebuffer(S.FRAMEBUFFER,null),G=!1;else if(Ee.__webglFramebuffer===void 0)w.setupRenderTarget(M);else if(Ee.__hasExternalTextures)w.rebindTextures(M,se.get(M.texture).__webglTexture,se.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let ke=M.depthTexture;if(Ee.__boundDepthTexture!==ke){if(ke!==null&&se.has(ke)&&(M.width!==ke.image.width||M.height!==ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(M)}}let Ze=M.texture;(Ze.isData3DTexture||Ze.isDataArrayTexture||Ze.isCompressedArrayTexture)&&(xe=!0);let qe=se.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(qe[N])?O=qe[N][H]:O=qe[N],ae=!0):M.samples>0&&w.useMultisampledRTT(M)===!1?O=se.get(M).__webglMultisampledFramebuffer:Array.isArray(qe)?O=qe[H]:O=qe,R.copy(M.viewport),z.copy(M.scissor),V=M.scissorTest}else R.copy(_e).multiplyScalar(W).floor(),z.copy(Fe).multiplyScalar(W).floor(),V=Xe;if(H!==0&&(O=ld),Q.bindFramebuffer(S.FRAMEBUFFER,O)&&G&&Q.drawBuffers(M,O),Q.viewport(R),Q.scissor(z),Q.setScissorTest(V),ae){let Ee=se.get(M.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_CUBE_MAP_POSITIVE_X+N,Ee.__webglTexture,H)}else if(xe){let Ee=se.get(M.texture),Ze=N;S.framebufferTextureLayer(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,Ee.__webglTexture,H,Ze)}else if(M!==null&&H!==0){let Ee=se.get(M.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,Ee.__webglTexture,H)}b=-1},this.readRenderTargetPixels=function(M,N,H,G,O,ae,xe){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=se.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&xe!==void 0&&(Se=Se[xe]),Se){Q.bindFramebuffer(S.FRAMEBUFFER,Se);try{let Ee=M.texture,Ze=Ee.format,qe=Ee.type;if(!le.textureFormatReadable(Ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!le.textureTypeReadable(qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=M.width-G&&H>=0&&H<=M.height-O&&S.readPixels(N,H,G,O,Qe.convert(Ze),Qe.convert(qe),ae)}finally{let Ee=U!==null?se.get(U).__webglFramebuffer:null;Q.bindFramebuffer(S.FRAMEBUFFER,Ee)}}},this.readRenderTargetPixelsAsync=function(M,N,H,G,O,ae,xe){return zs(this,null,function*(){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=se.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&xe!==void 0&&(Se=Se[xe]),Se)if(N>=0&&N<=M.width-G&&H>=0&&H<=M.height-O){Q.bindFramebuffer(S.FRAMEBUFFER,Se);let Ee=M.texture,Ze=Ee.format,qe=Ee.type;if(!le.textureFormatReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!le.textureTypeReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ke=S.createBuffer();S.bindBuffer(S.PIXEL_PACK_BUFFER,ke),S.bufferData(S.PIXEL_PACK_BUFFER,ae.byteLength,S.STREAM_READ),S.readPixels(N,H,G,O,Qe.convert(Ze),Qe.convert(qe),0);let st=U!==null?se.get(U).__webglFramebuffer:null;Q.bindFramebuffer(S.FRAMEBUFFER,st);let ct=S.fenceSync(S.SYNC_GPU_COMMANDS_COMPLETE,0);return S.flush(),yield yh(S,ct,4),S.bindBuffer(S.PIXEL_PACK_BUFFER,ke),S.getBufferSubData(S.PIXEL_PACK_BUFFER,0,ae),S.deleteBuffer(ke),S.deleteSync(ct),ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")})},this.copyFramebufferToTexture=function(M,N=null,H=0){let G=Math.pow(2,-H),O=Math.floor(M.image.width*G),ae=Math.floor(M.image.height*G),xe=N!==null?N.x:0,Se=N!==null?N.y:0;w.setTexture2D(M,0),S.copyTexSubImage2D(S.TEXTURE_2D,H,0,0,xe,Se,O,ae),Q.unbindTexture()};let cd=S.createFramebuffer(),ud=S.createFramebuffer();this.copyTextureToTexture=function(M,N,H=null,G=null,O=0,ae=null){ae===null&&(O!==0?(Us("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ae=O,O=0):ae=0);let xe,Se,Ee,Ze,qe,ke,st,ct,Et,Mt=M.isCompressedTexture?M.mipmaps[ae]:M.image;if(H!==null)xe=H.max.x-H.min.x,Se=H.max.y-H.min.y,Ee=H.isBox3?H.max.z-H.min.z:1,Ze=H.min.x,qe=H.min.y,ke=H.isBox3?H.min.z:0;else{let sn=Math.pow(2,-O);xe=Math.floor(Mt.width*sn),Se=Math.floor(Mt.height*sn),M.isDataArrayTexture?Ee=Mt.depth:M.isData3DTexture?Ee=Math.floor(Mt.depth*sn):Ee=1,Ze=0,qe=0,ke=0}G!==null?(st=G.x,ct=G.y,Et=G.z):(st=0,ct=0,Et=0);let lt=Qe.convert(N.format),ze=Qe.convert(N.type),Ut;N.isData3DTexture?(w.setTexture3D(N,0),Ut=S.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(w.setTexture2DArray(N,0),Ut=S.TEXTURE_2D_ARRAY):(w.setTexture2D(N,0),Ut=S.TEXTURE_2D),S.pixelStorei(S.UNPACK_FLIP_Y_WEBGL,N.flipY),S.pixelStorei(S.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),S.pixelStorei(S.UNPACK_ALIGNMENT,N.unpackAlignment);let ut=S.getParameter(S.UNPACK_ROW_LENGTH),fn=S.getParameter(S.UNPACK_IMAGE_HEIGHT),Ki=S.getParameter(S.UNPACK_SKIP_PIXELS),Zt=S.getParameter(S.UNPACK_SKIP_ROWS),Br=S.getParameter(S.UNPACK_SKIP_IMAGES);S.pixelStorei(S.UNPACK_ROW_LENGTH,Mt.width),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,Mt.height),S.pixelStorei(S.UNPACK_SKIP_PIXELS,Ze),S.pixelStorei(S.UNPACK_SKIP_ROWS,qe),S.pixelStorei(S.UNPACK_SKIP_IMAGES,ke);let mt=M.isDataArrayTexture||M.isData3DTexture,rn=N.isDataArrayTexture||N.isData3DTexture;if(M.isDepthTexture){let sn=se.get(M),Gt=se.get(N),Xt=se.get(sn.__renderTarget),sl=se.get(Gt.__renderTarget);Q.bindFramebuffer(S.READ_FRAMEBUFFER,Xt.__webglFramebuffer),Q.bindFramebuffer(S.DRAW_FRAMEBUFFER,sl.__webglFramebuffer);for(let Ai=0;Ai<Ee;Ai++)mt&&(S.framebufferTextureLayer(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,se.get(M).__webglTexture,O,ke+Ai),S.framebufferTextureLayer(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,se.get(N).__webglTexture,ae,Et+Ai)),S.blitFramebuffer(Ze,qe,xe,Se,st,ct,xe,Se,S.DEPTH_BUFFER_BIT,S.NEAREST);Q.bindFramebuffer(S.READ_FRAMEBUFFER,null),Q.bindFramebuffer(S.DRAW_FRAMEBUFFER,null)}else if(O!==0||M.isRenderTargetTexture||se.has(M)){let sn=se.get(M),Gt=se.get(N);Q.bindFramebuffer(S.READ_FRAMEBUFFER,cd),Q.bindFramebuffer(S.DRAW_FRAMEBUFFER,ud);for(let Xt=0;Xt<Ee;Xt++)mt?S.framebufferTextureLayer(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,sn.__webglTexture,O,ke+Xt):S.framebufferTexture2D(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,sn.__webglTexture,O),rn?S.framebufferTextureLayer(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,Gt.__webglTexture,ae,Et+Xt):S.framebufferTexture2D(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,Gt.__webglTexture,ae),O!==0?S.blitFramebuffer(Ze,qe,xe,Se,st,ct,xe,Se,S.COLOR_BUFFER_BIT,S.NEAREST):rn?S.copyTexSubImage3D(Ut,ae,st,ct,Et+Xt,Ze,qe,xe,Se):S.copyTexSubImage2D(Ut,ae,st,ct,Ze,qe,xe,Se);Q.bindFramebuffer(S.READ_FRAMEBUFFER,null),Q.bindFramebuffer(S.DRAW_FRAMEBUFFER,null)}else rn?M.isDataTexture||M.isData3DTexture?S.texSubImage3D(Ut,ae,st,ct,Et,xe,Se,Ee,lt,ze,Mt.data):N.isCompressedArrayTexture?S.compressedTexSubImage3D(Ut,ae,st,ct,Et,xe,Se,Ee,lt,Mt.data):S.texSubImage3D(Ut,ae,st,ct,Et,xe,Se,Ee,lt,ze,Mt):M.isDataTexture?S.texSubImage2D(S.TEXTURE_2D,ae,st,ct,xe,Se,lt,ze,Mt.data):M.isCompressedTexture?S.compressedTexSubImage2D(S.TEXTURE_2D,ae,st,ct,Mt.width,Mt.height,lt,Mt.data):S.texSubImage2D(S.TEXTURE_2D,ae,st,ct,xe,Se,lt,ze,Mt);S.pixelStorei(S.UNPACK_ROW_LENGTH,ut),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,fn),S.pixelStorei(S.UNPACK_SKIP_PIXELS,Ki),S.pixelStorei(S.UNPACK_SKIP_ROWS,Zt),S.pixelStorei(S.UNPACK_SKIP_IMAGES,Br),ae===0&&N.generateMipmaps&&S.generateMipmap(Ut),Q.unbindTexture()},this.copyTextureToTexture3D=function(M,N,H=null,G=null,O=0){return Us('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(M,N,H,G,O)},this.initRenderTarget=function(M){se.get(M).__webglFramebuffer===void 0&&w.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?w.setTextureCube(M,0):M.isData3DTexture?w.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?w.setTexture2DArray(M,0):w.setTexture2D(M,0),Q.unbindTexture()},this.resetState=function(){P=0,I=0,U=null,Q.reset(),ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Tn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=at._getDrawingBufferColorSpace(e),t.unpackColorSpace=at._getUnpackColorSpace()}};var tl=class i{constructor(e,t){this.platformId=e;this.colorService=t}scene;camera;renderer;sun;clouds=[];animationId;angle=0;selectedColor="";ngOnInit(){Wt(this.platformId)&&this.colorService.selectedColor$.subscribe(e=>{if(this.selectedColor=e,this.renderer){this.renderer.dispose();let t=document.querySelector("#background-wrapper canvas");t&&t.remove(),cancelAnimationFrame(this.animationId)}this.initThreeJS(this.selectedColor),this.animate()})}ngAfterViewInit(){Wt(this.platformId)&&this.animate()}ngOnDestroy(){Wt(this.platformId)&&(this.renderer.dispose(),cancelAnimationFrame(this.animationId))}onWindowResize(){this.camera&&this.renderer&&(this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight))}initThreeJS(e){let t;e.startsWith("#")?t=new Ke(e):t=new Ke(2664261),this.scene=new _i,this.camera=new Ct(60,window.innerWidth/window.innerHeight,.1,2e3),this.camera.position.set(0,50,500),this.renderer=new Ji({antialias:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setClearColor(8900331),document.getElementById("background-wrapper")?.appendChild(this.renderer.domElement);let n=new bi(16777215,.6),r=new Yn(16777215,.6);r.position.set(100,200,100),this.scene.add(n,r);let s=new vi(25,64,64),o=new Rn({color:16768307,emissive:16755200,emissiveIntensity:1.5,metalness:.1,roughness:.4});this.sun=new pt(s,o),this.sun.position.set(200,150,-300),this.scene.add(this.sun);let a=new yn({color:16777164,transparent:!0,opacity:.25,depthWrite:!1}),l=new pt(new vi(50,32,32),a);l.position.copy(this.sun.position),this.scene.add(l);let c=new Yn(16774064,1.2);c.position.copy(this.sun.position),this.scene.add(c);let u=new vi(1e3,64,64),h=new en({side:Rt,vertexShader:`
    varying vec3 vWorldPosition;
    void main() {
      vec4 worldPosition = modelMatrix * vec4(position, 1.0);
      vWorldPosition = worldPosition.xyz;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,fragmentShader:`
    varying vec3 vWorldPosition;
    void main() {
      float h = normalize(vWorldPosition + vec3(0.0, 200.0, 0.0)).y;
      vec3 topColor = vec3(0.29, 0.63, 0.94);   // Top sky (deep blue)
      vec3 bottomColor = vec3(0.89, 0.96, 1.0); // Horizon (light blue / sky white)
      gl_FragColor = vec4(mix(bottomColor, topColor, max(h, 0.0)), 1.0);
    }
  `,uniforms:{}}),f=new pt(u,h);this.scene.add(f);let p=1200,g=600,v=100,m=50,d=new zi(p,g,v,m);d.rotateX(-Math.PI/2);let T=d.attributes.position;for(let L=0;L<T.count;L++){let P=T.getX(L),I=T.getZ(L),U=Math.sin(P/80)*10+Math.cos(I/60)*8+Math.sin((P+I)/100)*5+(Math.random()-.5)*2;T.setY(L,U)}T.needsUpdate=!0,d.computeVertexNormals();let E=new Rn({color:this.selectedColor,roughness:.9,metalness:.1,side:Nt}),y=new pt(d,E);y.position.y=-180,this.scene.add(y),this.createClouds()}createClouds(){let e=new Ms({color:16777215,transparent:!0,opacity:.85,depthWrite:!1});for(let t=0;t<7;t++){let n=new zn,r=[18,14,12,10,8],s=[[0,0,0],[-20,5,0],[20,5,0],[-10,10,5],[10,10,-5]];r.forEach((a,l)=>{let c=.9+Math.random()*.1,u=e.clone();u.color=new Ke(c,c,c);let h=new pt(new vi(a,32,32),u);h.position.set(...s[l]),n.add(h)}),n.position.set(Math.random()*1200-600,Math.random()*150+150,Math.random()*-200-250);let o=.8+Math.random()*.6;n.scale.set(o,o,o),this.clouds.push(n),this.scene.add(n)}}clock=new Es;animate=()=>{this.animationId=requestAnimationFrame(this.animate);let e=this.clock.getDelta(),t=this.clock.getElapsedTime(),n=500;this.camera.position.x=n*Math.sin(t*.1),this.camera.position.z=n*Math.cos(t*.1),this.camera.lookAt(0,0,0);let r=20;this.clouds.forEach(s=>{s.position.x+=r*e,s.position.x>600&&(s.position.x=-600)}),this.renderer.render(this.scene,this.camera)};static \u0275fac=function(t){return new(t||i)(it(bn),it(qt))};static \u0275cmp=Tt({type:i,selectors:[["app-design"]],hostBindings:function(t,n){t&1&&_t("resize",function(){return n.onWindowResize()},!1,zc)},decls:1,vars:0,consts:[["id","background-wrapper"]],template:function(t,n){t&1&&ot(0,"div",0)},styles:["#background-wrapper[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%;overflow:hidden;z-index:0}"]})};var k_=["rendererContainer"],z_=["miniWheelContainer"],V_=["colorPicker"];function H_(i,e){i&1&&(A(0,"div",5),ot(1,"div",6,1)(3,"input",7,2),C())}var nl=class i{constructor(e,t){this.platformId=e;this.colorService=t;this.platformBrowser=Wt(this.platformId),this.colorPicker=null}onEscape(e){this.showBigWheel=!1}rendererContainer;miniWheelContainer;colorPickerRef;colorSelected=new Bc;showBigWheel=!1;colorPicker;platformBrowser;outsideClickListener;renderer=null;scene=null;camera=null;meshes=[];raycaster=null;mouse=new fe;defaultColor="#28a745";ngAfterViewInit(){this.platformBrowser&&(this.colorSelected.emit(this.defaultColor),this.colorService.setColor(this.defaultColor),this.colorPicker=this.colorPickerRef?.nativeElement,this.initMiniWheel())}ngOnDestroy(){this.disposeThreeResources(),this.outsideClickListener&&document.removeEventListener("click",this.outsideClickListener)}openColorWheel(){this.showBigWheel=!0,setTimeout(()=>{this.colorPicker=this.colorPickerRef?.nativeElement,this.colorPicker&&!this.colorPicker.hasAttribute("data-listener-added")&&(this.colorPicker.addEventListener("input",e=>{let t=e.target.value;this.colorSelected.emit(t),this.colorService.setColor(t),this.showBigWheel=!1}),this.colorPicker.setAttribute("data-listener-added","true")),this.initBigWheel(),this.addOutsideClickListener()},0)}addOutsideClickListener(){this.outsideClickListener=e=>{let t=this.rendererContainer?.nativeElement,n=this.colorPickerRef?.nativeElement;t&&n&&!t.contains(e.target)&&!n.contains(e.target)&&(n.style.visibility="hidden")},document.addEventListener("click",this.outsideClickListener)}initMiniWheel(){let e=this.miniWheelContainer.nativeElement,t=new _i,n=new Ct(50,1,.1,1e3);n.position.z=6;let r=new Ji({alpha:!0,antialias:!0});r.setSize(100,100),r.setPixelRatio(window.devicePixelRatio),e.appendChild(r.domElement);let s=new bi(16777215,.8),o=new Yn(16777215,1);o.position.set(0,0,10),t.add(s,o);let a=2,l=8,c=["#4CAF50","#8BC34A","#CDDC39","#FFEB3B","#FF9800","#A1887F","#795548","#3E2723"];for(let g=0;g<l;g++){let v=g/l*Math.PI*2,m=(g+1)/l*Math.PI*2,d=new xi;d.moveTo(0,0),d.absarc(0,0,a,v,m,!1),d.lineTo(0,0);let T=new ys(d);T.computeVertexNormals();let E=new Rn({color:c[g],metalness:.5,roughness:.3,emissive:new Ke(c[g]),emissiveIntensity:.2,side:Nt}),y=new pt(T,E);t.add(y)}let u=new Ar(a*.95,a,64),h=new yn({color:16777215,transparent:!0,opacity:.05,side:Nt}),f=new pt(u,h);t.add(f);function p(){requestAnimationFrame(p),t.rotation.z+=.05,r.render(t,n)}p()}initBigWheel(){let e=this.rendererContainer.nativeElement,t=e.clientWidth,n=e.clientHeight;this.disposeThreeResources(),this.scene=new _i,this.camera=new Ct(75,t/n,.1,1e3),this.camera.position.z=6,this.renderer=new Ji({alpha:!0,antialias:!0}),this.renderer.setSize(t,n),this.renderer.setPixelRatio(window.devicePixelRatio),e.appendChild(this.renderer.domElement);let r=new bi(16777215,.6),s=new Yn(16777215,1.5);s.position.set(3,3,5),s.castShadow=!0,this.scene.add(r,s);let o=new Ss(16777215,1,10,Math.PI/4,.5,2);o.position.set(0,0,5),o.castShadow=!0,this.scene.add(o);let a=2.5,l=8,c=["#4CAF50","#8BC34A","#CDDC39","#FFEB3B","#FF9800","#A1887F","#795548","#3E2723"];this.meshes=[],this.raycaster=new Ts;for(let g=0;g<l;g++){let v=g/l*Math.PI*2,m=(g+1)/l*Math.PI*2,d=new xi;d.moveTo(0,0),d.absarc(0,0,a,v,m,!1),d.lineTo(0,0);let T={depth:.3,bevelEnabled:!0,bevelSize:.1,bevelSegments:2},E=new vs(d,T),y=new Rn({color:c[g],metalness:.6,roughness:.3,emissive:new Ke(c[g]),emissiveIntensity:.3,side:Nt}),L=new pt(E,y);L.userData={colorIndex:g},this.meshes.push(L),this.scene.add(L);let P=new yn({color:c[g],opacity:.2,transparent:!0,side:Rt,blending:As}),I=new pt(E.clone(),P);I.scale.multiplyScalar(1.1),this.scene.add(I)}let u=new Ar(a*.9,a,64),h=new yn({color:16777215,opacity:.07,transparent:!0,side:Nt}),f=new pt(u,h);this.scene.add(f),this.renderer.domElement.addEventListener("click",g=>{let v=this.renderer.domElement.getBoundingClientRect();this.mouse.x=(g.clientX-v.left)/v.width*2-1,this.mouse.y=-((g.clientY-v.top)/v.height)*2+1,this.raycaster.setFromCamera(this.mouse,this.camera);let m=this.raycaster.intersectObjects(this.meshes);if(m.length>0){let d=m[0].object;if(d.material instanceof Rn){let T=`#${d.material.color.getHexString()}`;console.log("Selected color:",T),this.colorSelected.emit(T),this.colorService.setColor(T),this.showBigWheel=!1,this.playClickSound(),this.addGlowEffect(d)}}});let p=()=>{requestAnimationFrame(p),this.scene.rotation.z+=0,this.renderer.render(this.scene,this.camera)};p()}playClickSound(){new Audio("path_to_sound_effect.mp3").play()}addGlowEffect(e){let t=e.material;t.emissiveIntensity=1.5,setTimeout(()=>{t.emissiveIntensity=.3},500)}disposeThreeResources(){this.scene&&(this.scene.traverse(e=>{e instanceof pt&&(e.geometry.dispose(),e.material.dispose())}),this.scene=null),this.renderer&&(this.renderer.dispose(),this.renderer=null),this.raycaster&&(this.raycaster=null)}static \u0275fac=function(t){return new(t||i)(it(bn),it(qt))};static \u0275cmp=Tt({type:i,selectors:[["app-wheel"]],viewQuery:function(t,n){if(t&1&&(ji(k_,5),ji(z_,5),ji(V_,5)),t&2){let r;$i(r=Qi())&&(n.rendererContainer=r.first),$i(r=Qi())&&(n.miniWheelContainer=r.first),$i(r=Qi())&&(n.colorPickerRef=r.first)}},hostBindings:function(t,n){t&1&&_t("keydown.escape",function(s){return n.onEscape(s)},!1,Vc)},outputs:{colorSelected:"colorSelected"},decls:4,vars:1,consts:[["miniWheelContainer",""],["rendererContainer",""],["colorPicker",""],[1,"wheel-wrapper","three-wheel",3,"click"],["class","overlay",4,"ngIf"],[1,"overlay"],["id","rendererContainer",1,"big-wheel-container"],["id","colorPicker","type","color",1,"color-picker"]],template:function(t,n){if(t&1){let r=Bt();A(0,"div",3),_t("click",function(){return Le(r),De(n.openColorWheel())}),ot(1,"div",null,0),C(),bt(3,H_,5,0,"div",4)}t&2&&(ee(3),tt("ngIf",n.showBigWheel))},dependencies:[kt,Sn],styles:[".wheel-wrapper.three-wheel[_ngcontent-%COMP%]{position:fixed;bottom:20px;right:20px;width:90px;height:90px;z-index:9999;cursor:pointer;border-radius:50%;box-shadow:0 0 12px #0fc,0 0 24px #0fc;transition:transform .3s ease;overflow:hidden;background-color:#ffffff1a;display:flex;align-items:center;justify-content:center}.wheel-wrapper.three-wheel[_ngcontent-%COMP%]:hover{transform:scale(1.05)}.wheel-wrapper[_ngcontent-%COMP%]   canvas[_ngcontent-%COMP%]{width:100%;height:100%;display:block;border-radius:50%;object-fit:cover;pointer-events:none}.overlay[_ngcontent-%COMP%]{position:fixed;top:0;left:0;z-index:1000;width:100vw;height:100vh;background:#0009;display:flex;justify-content:center;align-items:center;backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);animation:_ngcontent-%COMP%_fadeIn .3s ease-in-out}#rendererContainer[_ngcontent-%COMP%]{width:60vw;height:60vw;max-width:500px;max-height:500px;min-width:250px;min-height:250px;border-radius:50%;overflow:hidden;position:relative;z-index:1001;background:radial-gradient(circle at center,#00ffcc26,#0006);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);box-shadow:0 0 25px #00ffcc80,0 0 45px #00ffcc4d,inset 0 0 15px #0fc3;transition:all .4s ease}#rendererContainer[_ngcontent-%COMP%]:hover{box-shadow:0 0 30px #0fc9,0 0 60px #0fc6,inset 0 0 20px #00ffcc4d;transform:scale(1.02)}.big-wheel-container[_ngcontent-%COMP%]{width:100%;height:100%;position:relative}.big-wheel-container[_ngcontent-%COMP%]   canvas[_ngcontent-%COMP%]{width:100%!important;height:100%!important;display:block;pointer-events:auto}#colorPicker[_ngcontent-%COMP%]{position:absolute;visibility:hidden;z-index:2000}@keyframes _ngcontent-%COMP%_fadeIn{0%{opacity:0;transform:scale(.95)}to{opacity:1;transform:scale(1)}}@media (max-width: 600px){#rendererContainer[_ngcontent-%COMP%]{width:60vw;height:60vw;border-radius:50%}}.wheel-wrapper.three-wheel[_ngcontent-%COMP%]{width:70px;height:70px;bottom:15px;right:15px}"]})};var G_=i=>({"background-color":i}),il=class i{constructor(e){this.colorService=e}selectedColor="";ngOnInit(){typeof window<"u"&&rd.init(),this.colorService.selectedColor$.subscribe(e=>{this.selectedColor=e})}title="AgriMandi-Frontend";currentYear=new Date().getFullYear();showWheel=!1;openWheel(){this.showWheel=!0}onColorSelected(e){this.selectedColor=e,console.log("Color selected from wheel:",e),this.showWheel=!1}static \u0275fac=function(t){return new(t||i)(it(qt))};static \u0275cmp=Tt({type:i,selectors:[["app-root"]],decls:17,vars:4,consts:[[1,"content-overlay"],[1,"main-content"],[1,"text-white","text-center","py-3",3,"ngStyle"],[1,"container"],[1,"mb-1"],[1,"mb-0"]],template:function(t,n){t&1&&(ot(0,"app-design"),A(1,"div",0)(2,"header"),ot(3,"app-navbar"),C(),A(4,"main",1),ot(5,"router-outlet"),C(),ot(6,"app-wheel")(7,"app-alert"),A(8,"footer",2)(9,"div",3)(10,"p",4),F(11,"\u{1F331} "),A(12,"strong"),F(13,"AgriMandi"),C(),F(14," - Empowering Farmers with Technology"),C(),A(15,"p",5),F(16),C()()()()),t&2&&(ee(8),tt("ngStyle",Dt(2,G_,n.selectedColor||"#198754")),ee(8),Lt("\xA9 ",n.currentYear," AgriMandi. All rights reserved."))},dependencies:[kt,$n,nr,Zc,lo,ir,tl,nl],styles:["body[_ngcontent-%COMP%]{margin:0;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif;display:flex;flex-direction:column;min-height:100vh;background-color:#b9f6ca;color:#333;scroll-behavior:smooth;overflow-x:hidden}main[_ngcontent-%COMP%]{flex:1}footer[_ngcontent-%COMP%]{font-size:14px;color:#fff;text-align:center;padding:10px 0;box-shadow:0 -2px 5px #0003}.content-overlay[_ngcontent-%COMP%]{position:relative;z-index:1}.main-content[_ngcontent-%COMP%]{padding:1rem}app-design[_ngcontent-%COMP%]{z-index:0;position:absolute;top:0;left:0}"]})};qc(il,ru).catch(i=>console.error(i));
