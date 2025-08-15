import{a as $n,b as Bo}from"./chunk-GVCIXDOO.js";import{a as Oo}from"./chunk-HAEQJP2I.js";import{a as cu,b as hu,c as Dr,e as uu,f as An,g as Po,h as du,i as fu,j as Ai}from"./chunk-A7U2VYZY.js";import{a as pu,b as Ri,c as Rn,d as Ii,e as Pi,f as Lr,g as Nr,h as Di,i as Do,j as mu,k as gu,l as Lo,m as No,n as Fo,o as _u,p as Fr,q as xu,r as Li,s as Uo}from"./chunk-DWSSTPMM.js";import{c as Io,d as au,e as lu,g as Ur,h as In}from"./chunk-YXTEFBGD.js";import{k as qn,l as Yn,m as Cn,n as jn,q as Xt,s as qt}from"./chunk-OYGA6CXT.js";import{Ab as Ro,Cb as at,Db as lt,E as Ir,Eb as ct,Ga as sr,Gb as fn,Hb as Ft,Ia as iu,Ib as pn,Ja as wo,Jb as ru,Ka as z,Kb as su,Lb as pc,Pa as ke,Qb as Ci,S as Qh,Sb as ou,Ua as Dt,V as Tn,Za as $e,_ as ci,a as pt,b as Xn,ba as eu,c as Rr,e as Uf,eb as re,f as Jh,fb as Ti,g as Zh,ga as Ge,gb as fc,h as uc,ha as We,hb as M,i as nt,ib as T,jb as pe,kb as Qt,l as dc,lb as en,ma as tu,mb as Et,p as Mo,pb as st,qa as nu,qb as _e,rb as Eo,tb as To,ub as Co,vb as Ao,wb as Pr,xb as I,yb as St,za as hn,zb as Nt}from"./chunk-MVPX5WN2.js";var _c=Uf((bs,gc)=>{"use strict";(function(i,e){typeof bs=="object"&&typeof gc=="object"?gc.exports=e():typeof define=="function"&&define.amd?define([],e):typeof bs=="object"?bs.AOS=e():i.AOS=e()})(bs,function(){return function(i){function e(n){if(t[n])return t[n].exports;var r=t[n]={exports:{},id:n,loaded:!1};return i[n].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var t={};return e.m=i,e.c=t,e.p="dist/",e(0)}([function(i,e,t){"use strict";function n(V){return V&&V.__esModule?V:{default:V}}var r=Object.assign||function(V){for(var H=1;H<arguments.length;H++){var Q=arguments[H];for(var Z in Q)Object.prototype.hasOwnProperty.call(Q,Z)&&(V[Z]=Q[Z])}return V},s=t(1),o=(n(s),t(6)),a=n(o),l=t(7),c=n(l),h=t(8),u=n(h),f=t(9),p=n(f),g=t(10),v=n(g),m=t(11),d=n(m),A=t(14),C=n(A),y=[],L=!1,P={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},D=function(){var V=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if(V&&(L=!0),L)return y=(0,d.default)(y,P),(0,v.default)(y,P.once),y},F=function(){y=(0,C.default)(),D()},S=function(){y.forEach(function(V,H){V.node.removeAttribute("data-aos"),V.node.removeAttribute("data-aos-easing"),V.node.removeAttribute("data-aos-duration"),V.node.removeAttribute("data-aos-delay")})},_=function(V){return V===!0||V==="mobile"&&p.default.mobile()||V==="phone"&&p.default.phone()||V==="tablet"&&p.default.tablet()||typeof V=="function"&&V()===!0},R=function(V){P=r(P,V),y=(0,C.default)();var H=document.all&&!window.atob;return _(P.disable)||H?S():(P.disableMutationObserver||u.default.isSupported()||(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),P.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",P.easing),document.querySelector("body").setAttribute("data-aos-duration",P.duration),document.querySelector("body").setAttribute("data-aos-delay",P.delay),P.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1?D(!0):P.startEvent==="load"?window.addEventListener(P.startEvent,function(){D(!0)}):document.addEventListener(P.startEvent,function(){D(!0)}),window.addEventListener("resize",(0,c.default)(D,P.debounceDelay,!0)),window.addEventListener("orientationchange",(0,c.default)(D,P.debounceDelay,!0)),window.addEventListener("scroll",(0,a.default)(function(){(0,v.default)(y,P.once)},P.throttleDelay)),P.disableMutationObserver||u.default.ready("[data-aos]",F),y)};i.exports={init:R,refresh:D,refreshHard:F}},function(i,e){},,,,,function(i,e){(function(t){"use strict";function n(_,R,V){function H(Ie){var Ne=Ue,w=Ye;return Ue=Ye=void 0,Pe=Ie,se=_.apply(w,Ne)}function Q(Ie){return Pe=Ie,de=setTimeout(ee,R),Ve?H(Ie):se}function Z(Ie){var Ne=Ie-ue,w=Ie-Pe,fe=R-Ne;return De?F(fe,Y-w):fe}function J(Ie){var Ne=Ie-ue,w=Ie-Pe;return ue===void 0||Ne>=R||Ne<0||De&&w>=Y}function ee(){var Ie=S();return J(Ie)?X(Ie):void(de=setTimeout(ee,Z(Ie)))}function X(Ie){return de=void 0,qe&&Ue?H(Ie):(Ue=Ye=void 0,se)}function me(){de!==void 0&&clearTimeout(de),Pe=0,Ue=ue=Ye=de=void 0}function ve(){return de===void 0?se:X(S())}function be(){var Ie=S(),Ne=J(Ie);if(Ue=arguments,Ye=this,ue=Ie,Ne){if(de===void 0)return Q(ue);if(De)return de=setTimeout(ee,R),H(ue)}return de===void 0&&(de=setTimeout(ee,R)),se}var Ue,Ye,Y,se,de,ue,Pe=0,Ve=!1,De=!1,qe=!0;if(typeof _!="function")throw new TypeError(h);return R=l(R)||0,s(V)&&(Ve=!!V.leading,De="maxWait"in V,Y=De?D(l(V.maxWait)||0,R):Y,qe="trailing"in V?!!V.trailing:qe),be.cancel=me,be.flush=ve,be}function r(_,R,V){var H=!0,Q=!0;if(typeof _!="function")throw new TypeError(h);return s(V)&&(H="leading"in V?!!V.leading:H,Q="trailing"in V?!!V.trailing:Q),n(_,R,{leading:H,maxWait:R,trailing:Q})}function s(_){var R=typeof _>"u"?"undefined":c(_);return!!_&&(R=="object"||R=="function")}function o(_){return!!_&&(typeof _>"u"?"undefined":c(_))=="object"}function a(_){return(typeof _>"u"?"undefined":c(_))=="symbol"||o(_)&&P.call(_)==f}function l(_){if(typeof _=="number")return _;if(a(_))return u;if(s(_)){var R=typeof _.valueOf=="function"?_.valueOf():_;_=s(R)?R+"":R}if(typeof _!="string")return _===0?_:+_;_=_.replace(p,"");var V=v.test(_);return V||m.test(_)?d(_.slice(2),V?2:8):g.test(_)?u:+_}var c=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(_){return typeof _}:function(_){return _&&typeof Symbol=="function"&&_.constructor===Symbol&&_!==Symbol.prototype?"symbol":typeof _},h="Expected a function",u=NaN,f="[object Symbol]",p=/^\s+|\s+$/g,g=/^[-+]0x[0-9a-f]+$/i,v=/^0b[01]+$/i,m=/^0o[0-7]+$/i,d=parseInt,A=(typeof t>"u"?"undefined":c(t))=="object"&&t&&t.Object===Object&&t,C=(typeof self>"u"?"undefined":c(self))=="object"&&self&&self.Object===Object&&self,y=A||C||Function("return this")(),L=Object.prototype,P=L.toString,D=Math.max,F=Math.min,S=function(){return y.Date.now()};i.exports=r}).call(e,function(){return this}())},function(i,e){(function(t){"use strict";function n(S,_,R){function V(qe){var Ie=be,Ne=Ue;return be=Ue=void 0,ue=qe,Y=S.apply(Ne,Ie)}function H(qe){return ue=qe,se=setTimeout(J,_),Pe?V(qe):Y}function Q(qe){var Ie=qe-de,Ne=qe-ue,w=_-Ie;return Ve?D(w,Ye-Ne):w}function Z(qe){var Ie=qe-de,Ne=qe-ue;return de===void 0||Ie>=_||Ie<0||Ve&&Ne>=Ye}function J(){var qe=F();return Z(qe)?ee(qe):void(se=setTimeout(J,Q(qe)))}function ee(qe){return se=void 0,De&&be?V(qe):(be=Ue=void 0,Y)}function X(){se!==void 0&&clearTimeout(se),ue=0,be=de=Ue=se=void 0}function me(){return se===void 0?Y:ee(F())}function ve(){var qe=F(),Ie=Z(qe);if(be=arguments,Ue=this,de=qe,Ie){if(se===void 0)return H(de);if(Ve)return se=setTimeout(J,_),V(de)}return se===void 0&&(se=setTimeout(J,_)),Y}var be,Ue,Ye,Y,se,de,ue=0,Pe=!1,Ve=!1,De=!0;if(typeof S!="function")throw new TypeError(c);return _=a(_)||0,r(R)&&(Pe=!!R.leading,Ve="maxWait"in R,Ye=Ve?P(a(R.maxWait)||0,_):Ye,De="trailing"in R?!!R.trailing:De),ve.cancel=X,ve.flush=me,ve}function r(S){var _=typeof S>"u"?"undefined":l(S);return!!S&&(_=="object"||_=="function")}function s(S){return!!S&&(typeof S>"u"?"undefined":l(S))=="object"}function o(S){return(typeof S>"u"?"undefined":l(S))=="symbol"||s(S)&&L.call(S)==u}function a(S){if(typeof S=="number")return S;if(o(S))return h;if(r(S)){var _=typeof S.valueOf=="function"?S.valueOf():S;S=r(_)?_+"":_}if(typeof S!="string")return S===0?S:+S;S=S.replace(f,"");var R=g.test(S);return R||v.test(S)?m(S.slice(2),R?2:8):p.test(S)?h:+S}var l=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(S){return typeof S}:function(S){return S&&typeof Symbol=="function"&&S.constructor===Symbol&&S!==Symbol.prototype?"symbol":typeof S},c="Expected a function",h=NaN,u="[object Symbol]",f=/^\s+|\s+$/g,p=/^[-+]0x[0-9a-f]+$/i,g=/^0b[01]+$/i,v=/^0o[0-7]+$/i,m=parseInt,d=(typeof t>"u"?"undefined":l(t))=="object"&&t&&t.Object===Object&&t,A=(typeof self>"u"?"undefined":l(self))=="object"&&self&&self.Object===Object&&self,C=d||A||Function("return this")(),y=Object.prototype,L=y.toString,P=Math.max,D=Math.min,F=function(){return C.Date.now()};i.exports=n}).call(e,function(){return this}())},function(i,e){"use strict";function t(l){var c=void 0,h=void 0,u=void 0;for(c=0;c<l.length;c+=1)if(h=l[c],h.dataset&&h.dataset.aos||(u=h.children&&t(h.children)))return!0;return!1}function n(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function r(){return!!n()}function s(l,c){var h=window.document,u=n(),f=new u(o);a=c,f.observe(h.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function o(l){l&&l.forEach(function(c){var h=Array.prototype.slice.call(c.addedNodes),u=Array.prototype.slice.call(c.removedNodes),f=h.concat(u);if(t(f))return a()})}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){};e.default={isSupported:r,ready:s}},function(i,e){"use strict";function t(h,u){if(!(h instanceof u))throw new TypeError("Cannot call a class as a function")}function n(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function h(u,f){for(var p=0;p<f.length;p++){var g=f[p];g.enumerable=g.enumerable||!1,g.configurable=!0,"value"in g&&(g.writable=!0),Object.defineProperty(u,g.key,g)}}return function(u,f,p){return f&&h(u.prototype,f),p&&h(u,p),u}}(),s=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,o=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,a=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,l=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,c=function(){function h(){t(this,h)}return r(h,[{key:"phone",value:function(){var u=n();return!(!s.test(u)&&!o.test(u.substr(0,4)))}},{key:"mobile",value:function(){var u=n();return!(!a.test(u)&&!l.test(u.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),h}();e.default=new c},function(i,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=function(r,s,o){var a=r.node.getAttribute("data-aos-once");s>r.position?r.node.classList.add("aos-animate"):typeof a<"u"&&(a==="false"||!o&&a!=="true")&&r.node.classList.remove("aos-animate")},n=function(r,s){var o=window.pageYOffset,a=window.innerHeight;r.forEach(function(l,c){t(l,a+o,s)})};e.default=n},function(i,e,t){"use strict";function n(a){return a&&a.__esModule?a:{default:a}}Object.defineProperty(e,"__esModule",{value:!0});var r=t(12),s=n(r),o=function(a,l){return a.forEach(function(c,h){c.node.classList.add("aos-init"),c.position=(0,s.default)(c.node,l.offset)}),a};e.default=o},function(i,e,t){"use strict";function n(a){return a&&a.__esModule?a:{default:a}}Object.defineProperty(e,"__esModule",{value:!0});var r=t(13),s=n(r),o=function(a,l){var c=0,h=0,u=window.innerHeight,f={offset:a.getAttribute("data-aos-offset"),anchor:a.getAttribute("data-aos-anchor"),anchorPlacement:a.getAttribute("data-aos-anchor-placement")};switch(f.offset&&!isNaN(f.offset)&&(h=parseInt(f.offset)),f.anchor&&document.querySelectorAll(f.anchor)&&(a=document.querySelectorAll(f.anchor)[0]),c=(0,s.default)(a).top,f.anchorPlacement){case"top-bottom":break;case"center-bottom":c+=a.offsetHeight/2;break;case"bottom-bottom":c+=a.offsetHeight;break;case"top-center":c+=u/2;break;case"bottom-center":c+=u/2+a.offsetHeight;break;case"center-center":c+=u/2+a.offsetHeight/2;break;case"top-top":c+=u;break;case"bottom-top":c+=a.offsetHeight+u;break;case"center-top":c+=a.offsetHeight/2+u}return f.anchorPlacement||f.offset||isNaN(l)||(h=l),c+h};e.default=o},function(i,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=function(n){for(var r=0,s=0;n&&!isNaN(n.offsetLeft)&&!isNaN(n.offsetTop);)r+=n.offsetLeft-(n.tagName!="BODY"?n.scrollLeft:0),s+=n.offsetTop-(n.tagName!="BODY"?n.scrollTop:0),n=n.offsetParent;return{top:s,left:r}};e.default=t},function(i,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=function(n){return n=n||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(n,function(r){return{node:r}})};e.default=t}])})});var ko=class i{constructor(e){this.http=e}apiUrl=Ur.AccountApiUrl+"Register/Register";Register(e){return this.http.post(this.apiUrl,e)}static \u0275fac=function(t){return new(t||i)(ci(Io))};static \u0275prov=Tn({token:i,factory:i.\u0275fac,providedIn:"root"})};function kf(i,e){if(i&1){let t=Et();M(0,"div",3)(1,"label",4),I(2,"Company Name"),T(),M(3,"input",17),ct("ngModelChange",function(r){Ge(t);let s=_e();return lt(s.farmer.companyName,r)||(s.farmer.companyName=r),We(r)}),T()()}if(i&2){let t=_e();z(3),at("ngModel",t.farmer.companyName)}}function zf(i,e){if(i&1){let t=Et();M(0,"div",3)(1,"label",4),I(2,"Company Type"),T(),M(3,"input",18),ct("ngModelChange",function(r){Ge(t);let s=_e();return lt(s.farmer.companyType,r)||(s.farmer.companyType=r),We(r)}),T()()}if(i&2){let t=_e();z(3),at("ngModel",t.farmer.companyType)}}var zo=class i{constructor(e,t){this.farmerService=e;this.alertService=t}farmer={name:"",userName:"",password:"",role:"",email:"",companyName:"",companyType:""};signup(){this.farmerService.Register(this.farmer).subscribe(e=>{console.log("\u2705 Farmer registered:",e),this.alertService.showAlert("Signup successful!","success")},e=>{console.error("\u274C Signup failed:",e),this.alertService.showAlert("Signup failed! Please try again.","error")})}field=[{label:"Name",name:"name",type:"text"},{label:"User Name",name:"userName",type:"text"},{label:"Password",name:"password",type:"text"},{label:"Role",name:"Role",type:"text"},{label:"Email",name:"email",type:"email"},{label:"Company Name",name:"companyName",type:"text"},{label:"Company Type",name:"companyType",type:"text"}];testSuccess(){this.alertService.showAlert("Test success alert!","success")}testError(){this.alertService.showAlert("Test error alert!","error")}static \u0275fac=function(t){return new(t||i)(ke(ko),ke($n))};static \u0275cmp=Dt({type:i,selectors:[["app-signup"]],decls:36,vars:7,consts:[[1,"container","bg-white","p-4","p-md-5","rounded-4","shadow-lg","mt-4",3,"ngSubmit"],[1,"text-center","text-success","fw-bold","mb-4"],[1,"row","g-4"],[1,"col-md-6"],[1,"form-label","fw-semibold"],["type","text","name","name","required","","placeholder","Enter your name",1,"form-control","shadow-sm",3,"ngModelChange","ngModel"],["type","email","name","email","required","","placeholder","Enter your email",1,"form-control","shadow-sm",3,"ngModelChange","ngModel"],["type","text","name","userName","required","","placeholder","Choose a username",1,"form-control","shadow-sm",3,"ngModelChange","ngModel"],["name","role","required","",1,"form-select","shadow-sm",3,"ngModelChange","ngModel"],["value",""],["value","Farmer"],["value","Buyer"],["type","password","name","password","required","","placeholder","Enter a strong password",1,"form-control","shadow-sm",3,"ngModelChange","ngModel"],["class","col-md-6",4,"ngIf"],[1,"text-center","mt-4"],["type","submit",1,"btn","btn-success","btn-lg","px-5","shadow-sm"],[1,"bi","bi-person-plus","me-2"],["type","text","name","companyName","placeholder","Company Name",1,"form-control","shadow-sm",3,"ngModelChange","ngModel"],["type","text","name","companyType","placeholder","e.g., Agro Supplier, Exporter",1,"form-control","shadow-sm",3,"ngModelChange","ngModel"]],template:function(t,n){t&1&&(M(0,"form",0),st("ngSubmit",function(){return n.signup()}),M(1,"h2",1),I(2,"Create A Account In Agimandi"),T(),M(3,"div",2)(4,"div",3)(5,"label",4),I(6,"Name"),T(),M(7,"input",5),ct("ngModelChange",function(s){return lt(n.farmer.name,s)||(n.farmer.name=s),s}),T()(),M(8,"div",3)(9,"label",4),I(10,"Email"),T(),M(11,"input",6),ct("ngModelChange",function(s){return lt(n.farmer.email,s)||(n.farmer.email=s),s}),T()(),M(12,"div",3)(13,"label",4),I(14,"User Name"),T(),M(15,"input",7),ct("ngModelChange",function(s){return lt(n.farmer.userName,s)||(n.farmer.userName=s),s}),T()(),M(16,"div",3)(17,"label",4),I(18,"Role"),T(),M(19,"select",8),ct("ngModelChange",function(s){return lt(n.farmer.role,s)||(n.farmer.role=s),s}),M(20,"option",9),I(21,"-- Select Role --"),T(),M(22,"option",10),I(23,"Farmer"),T(),M(24,"option",11),I(25,"Buyer"),T()()(),M(26,"div",3)(27,"label",4),I(28,"Password"),T(),M(29,"input",12),ct("ngModelChange",function(s){return lt(n.farmer.password,s)||(n.farmer.password=s),s}),T()(),$e(30,kf,4,1,"div",13)(31,zf,4,1,"div",13),T(),M(32,"div",14)(33,"button",15),pe(34,"i",16),I(35," Sign Up "),T()()()),t&2&&(z(7),at("ngModel",n.farmer.name),z(4),at("ngModel",n.farmer.email),z(4),at("ngModel",n.farmer.userName),z(4),at("ngModel",n.farmer.role),z(10),at("ngModel",n.farmer.password),z(),re("ngIf",n.farmer.role==="Buyer"),z(),re("ngIf",n.farmer.role==="Buyer"))},dependencies:[Li,Di,No,Fo,Ri,Lo,Ii,Pi,Fr,Nr,Lr,Xt,Cn],styles:["form[_ngcontent-%COMP%]{max-width:600px;margin:30px auto;padding:30px;background:#fffffff2;border-radius:16px;box-shadow:0 8px 20px #00000026;display:flex;flex-direction:column;gap:16px;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif;transition:all .3s ease}label[_ngcontent-%COMP%]{font-weight:600;margin-bottom:5px;color:#333;font-size:15px}input[_ngcontent-%COMP%], select[_ngcontent-%COMP%]{width:100%;padding:12px 14px;margin-top:2px;border:1px solid #ccc;border-radius:8px;font-size:16px;transition:border-color .2s,box-shadow .2s;background-color:#fff}input[_ngcontent-%COMP%]:focus, select[_ngcontent-%COMP%]:focus{outline:none;border-color:#28a745;box-shadow:0 0 0 3px #28a74533}button[_ngcontent-%COMP%]{margin-top:20px;padding:12px;background:#28a745;color:#fff;border:none;border-radius:8px;cursor:pointer;font-size:18px;font-weight:600;transition:background .3s,transform .2s}button[_ngcontent-%COMP%]:hover{background:#218838;transform:scale(1.03)}button[_ngcontent-%COMP%]:active{transform:scale(.97)}@media (max-width: 600px){form[_ngcontent-%COMP%]{max-width:95%;padding:20px}button[_ngcontent-%COMP%]{font-size:16px;padding:10px}}@media (prefers-color-scheme: dark){form[_ngcontent-%COMP%]{background:#1e1e1ef2;color:#f1f1f1}input[_ngcontent-%COMP%], select[_ngcontent-%COMP%]{background-color:#444;color:#f1f1f1;border-color:#555}input[_ngcontent-%COMP%]:focus, select[_ngcontent-%COMP%]:focus{border-color:#28a745;box-shadow:0 0 0 3px #28a7454d}button[_ngcontent-%COMP%]{background-color:#28a745}button[_ngcontent-%COMP%]:hover{background-color:#218838}}"]})};var vu=Jh(_c());var nn=class i{constructor(){}selectedColorSubject=new Mo("#FFFFFF");selectedColor$=this.selectedColorSubject.asObservable();setColor(e){this.selectedColorSubject.next(e)}getColor(){return this.selectedColorSubject.getValue()}static \u0275fac=function(t){return new(t||i)};static \u0275prov=Tn({token:i,factory:i.\u0275fac,providedIn:"root"})};var Fi=class i{constructor(e,t,n){this.http=e;this.platformId=t;this.userInfo=n}apiUrl=Ur.AccountApiUrl+"Login/login";expiryDays=7;isBrowser(){return qt(this.platformId)}login(e){return this.http.post(this.apiUrl,e).pipe(Qh(t=>{if(!this.isBrowser())return;let n=new Date;n.setDate(n.getDate()+this.expiryDays);let r={auth_token:t.token,auth_token_expiry:n.getTime().toString(),user_name:t.name,user_role:t.role,user_email:t.email,nameid:t.id.toString()};Object.entries(r).forEach(([s,o])=>localStorage.setItem(s,o)),this.userInfo.refresh()}))}isLoggedIn(){if(!this.isBrowser())return!1;let e=localStorage.getItem("auth_token"),t=localStorage.getItem("auth_token_expiry"),n=Date.now();return!e||!t||n>+t?(this.logout(),!1):!0}getToken(){return this.isLoggedIn()?localStorage.getItem("auth_token"):null}logout(){if(!this.isBrowser())return;["auth_token","auth_token_expiry","user_name","user_role","user_email","nameid"].forEach(t=>localStorage.removeItem(t)),this.userInfo.clear()}static \u0275fac=function(t){return new(t||i)(ci(Io),ci(hn),ci(In))};static \u0275prov=Tn({token:i,factory:i.\u0275fac,providedIn:"root"})};var Vf=i=>({"background-color":i});function Hf(i,e){if(i&1&&(M(0,"div",50)(1,"div",51),pe(2,"img",52),M(3,"h3",53),I(4),T(),M(5,"p",54),I(6),T()()()),i&2){let t=e.$implicit;z(2),re("src","images/"+t.image,sr)("alt",t.title),z(2),Ro("",t.number,". ",t.title,""),z(2),St(t.description)}}function Gf(i,e){if(i&1&&(M(0,"div",55)(1,"h3",56),I(2),T(),M(3,"p",57),I(4),T()()),i&2){let t=e.$implicit;z(2),St(t.value),z(2),St(t.label)}}function Wf(i,e){if(i&1&&(M(0,"div",58),pe(1,"img",59),M(2,"h4",60),I(3),T(),M(4,"p",61),I(5),T()()),i&2){let t=e.$implicit;z(),re("alt",t.title),z(2),St(t.title),z(2),St(t.description)}}function Xf(i,e){if(i&1&&(M(0,"div",62)(1,"h4",63),I(2),T(),M(3,"p",64),I(4),T()()),i&2){let t=e.$implicit;z(2),St(t.question),z(2),St(t.answer)}}var Ho=class i{constructor(e,t,n,r){this.router=e;this.colorService=t;this.loginService=n;this.userInfo=r}selectedColor="";ngOnInit(){this.loginService.isLoggedIn()?console.log("User is logged in:",this.userInfo.getUserName()):this.router.navigate(["auth/login"]),this.colorService.selectedColor$.subscribe(e=>{this.selectedColor=e}),vu.init({duration:1e3})}goToRegister(){this.router.navigate(["auth/signup"])}steps=[{number:1,title:"Sign Up",description:"Create your free account as a Farmer or Buyer to access the AgriMandi platform.",image:"Register.JPG"},{number:2,title:"List or Browse Products",description:"Farmers can upload product details, while buyers explore available produce in real-time.",image:"list.webp"},{number:3,title:"Connect & Communicate",description:"Initiate direct chat or call between farmers and buyers for negotiation and clarity.",image:"trade.jpeg"},{number:4,title:"Secure Transactions",description:"Finalize deals and complete payments securely through integrated payment gateways.",image:"trade.jpeg"},{number:5,title:"Track & Rate",description:"Track your orders and leave feedback to build a trusted, transparent marketplace.",image:"trade.jpeg"}];impactStats=[{value:"10,000+",label:"Farmers Empowered"},{value:"50,000+",label:"Transactions Completed"},{value:"20+",label:"States Covered"}];blogs=[{id:1,title:"5 Tips for Selling Produce Online",description:"Learn how to optimize your listings and attract more buyers.",image:"blog1.jpg"},{id:2,title:"The Future of Digital Agriculture",description:"Discover how technology is shaping the agricultural industry.",image:"blog2.jpg"}];faqs=[{question:"How do I register?",answer:'Click the "Get Started" button and fill out the registration form to create an account.'},{question:"Is there a fee for using AgriMandi?",answer:"No, registering and using the platform is completely free for both farmers and buyers."},{question:"How are payments handled?",answer:"Payments are securely processed directly between farmers and buyers via integrated payment systems."}];static \u0275fac=function(t){return new(t||i)(ke(An),ke(nn),ke(Fi),ke(In))};static \u0275cmp=Dt({type:i,selectors:[["app-home"]],decls:115,vars:7,consts:[[1,"home-container","w-full","px-4","sm:px-6","lg:px-20","py-16","space-y-28","bg-gradient-to-b","from-[#f7fff5]","via-[#e7fce4]","to-[#d9f9d0]","border-y","border-green-100","rounded-b-[4rem]","shadow-xl","overflow-x-hidden"],["data-aos","fade-down",1,"relative","text-center","px-4","sm:px-6","lg:px-12","py-12","md:py-20","bg-gradient-to-r","from-[#e7f6d5]","to-[#f0fff4]","rounded-3xl","shadow-lg","overflow-hidden"],[1,"absolute","inset-0","-z-10","pointer-events-none"],[1,"animate-float-leaf","absolute","left-10","top-10","w-6","h-6","bg-green-200","rounded-full","opacity-50","blur-sm"],[1,"animate-float-leaf","delay-500","absolute","right-20","top-1/3","w-4","h-4","bg-green-400","rounded-full","opacity-40","blur-sm"],[1,"relative","inline-block"],[1,"absolute","left-0","bottom-0","w-full","h-1","bg-[#00ffee]","rounded-full","blur-sm","animate-pulse"],["data-aos","fade-up",1,"text-4xl","sm:text-5xl","lg:text-6xl","font-extrabold","tracking-tight","leading-tight","text-transparent","bg-clip-text","bg-gradient-to-r","from-green-600","to-emerald-400","drop-shadow-[0_2px_8px_rgba(0,0,0,0.25)]"],[1,"text-green-900","animate-pulse"],[1,"mt-3","mx-auto","h-1","w-24","bg-[#00ffee]","rounded-full","animate-slide-accent"],["data-aos","fade-up","data-aos-delay","200",1,"mt-6","text-base","sm:text-lg","lg:text-xl","text-gray-700","max-w-3xl","mx-auto","leading-relaxed","px-2","sm:px-0"],[1,"text-green-700"],[1,"text-green-600","font-semibold"],[1,"underline","decoration-green-300"],["data-aos","zoom-in-up",1,"features-section","px-4","sm:px-6","lg:px-20","py-20","bg-white","rounded-3xl","shadow-lg","border","border-green-100"],[1,"text-3xl","sm:text-4xl","font-extrabold","text-center","text-green-700","mb-14","tracking-tight"],[1,"text-green-800"],[1,"row","g-4"],[1,"col-12","col-md-6"],[1,"d-flex","align-items-start","p-4","rounded-4","bg-success-subtle","shadow-sm","h-100","transition","duration-300","hover:shadow-lg"],["src","images/3.jpg","alt","Direct Market",1,"rounded-3","object-cover","shadow","border","border-success-subtle","me-3",2,"width","80px","height","80px"],[1,"text-gray-800","lead","mb-0"],[1,"text-success"],["src","images/2.jpg","alt","Easy Negotiations",1,"rounded-3","object-cover","shadow","border","border-success-subtle","me-3",2,"width","80px","height","80px"],["src","images/6.jpeg","alt","Secure Payments",1,"rounded-3","object-cover","shadow","border","border-success-subtle","me-3",2,"width","80px","height","80px"],["src","images/5.jpeg","alt","Global Reach",1,"rounded-3","object-cover","shadow","border","border-success-subtle","me-3",2,"width","80px","height","80px"],["data-aos","fade-up",1,"how-it-works-section","px-4","sm:px-6","lg:px-20","py-20","bg-light","rounded-3xl","shadow-lg","border","border-green-100","text-center"],[1,"text-3xl","sm:text-4xl","font-extrabold","text-green-700","mb-14","tracking-tight"],[1,"row","g-4","justify-content-center"],["class","col-12 col-md-4",4,"ngFor","ngForOf"],[1,"text-center"],[1,"text-3xl","font-bold","text-green-700","mb-12"],[1,"grid","grid-cols-1","md:grid-cols-2","gap-8"],[1,"bg-green-100","p-6","rounded-lg","shadow"],[1,"italic","text-gray-700"],[1,"mt-4","font-semibold","text-green-800"],[1,"grid","grid-cols-2","md:grid-cols-4","gap-6"],["class","stat bg-white p-6 rounded-xl shadow-md",4,"ngFor","ngForOf"],[1,"text-3xl","font-bold","text-center","text-green-700","mb-12"],[1,"grid","grid-cols-1","md:grid-cols-3","gap-8"],["class","blog-post bg-white p-4 rounded-xl shadow hover:shadow-lg transition",4,"ngFor","ngForOf"],[1,"bg-green-600","text-white","text-center","py-12","rounded-lg","shadow-lg"],[1,"text-3xl","font-bold","mb-4"],[1,"mb-6","text-lg"],[1,"btn","btn-light","text-green-700","font-semibold","px-6","py-2","rounded-full","shadow",3,"click"],["class","faq-item bg-white p-6 rounded-xl shadow",4,"ngFor","ngForOf"],[1,"text-center","mt-20"],[1,"text-2xl","font-bold","mb-2","text-green-800"],[1,"text-gray-700","max-w-xl","mx-auto","mb-6"],[1,"btn","btn-success","px-6","py-2","rounded-full","shadow-md",3,"click","ngStyle"],[1,"col-12","col-md-4"],[1,"p-5","bg-white","rounded-4","shadow-sm","h-100","transition-all","duration-300","hover:shadow-xl","border","border-success-subtle","d-flex","flex-column","align-items-center"],[1,"rounded-circle","shadow","mb-3","object-cover","border","border-success-subtle",2,"width","80px","height","80px",3,"src","alt"],[1,"h5","fw-bold","text-success","mb-2"],[1,"text-secondary","small"],[1,"stat","bg-white","p-6","rounded-xl","shadow-md"],[1,"text-4xl","font-bold","text-green-600"],[1,"text-gray-700","text-sm","mt-2"],[1,"blog-post","bg-white","p-4","rounded-xl","shadow","hover:shadow-lg","transition"],["src","images/latest.png",1,"w-full","h-44","object-cover","rounded-lg","mb-4",3,"alt"],[1,"text-lg","font-semibold","mb-1","text-green-800"],[1,"text-sm","text-gray-600"],[1,"faq-item","bg-white","p-6","rounded-xl","shadow"],[1,"text-lg","font-semibold","text-green-800","mb-2"],[1,"text-gray-600"]],template:function(t,n){t&1&&(M(0,"div",0)(1,"header",1)(2,"div",2),pe(3,"div",3)(4,"div",4),T(),M(5,"div",5),pe(6,"span",6),M(7,"h1",7),I(8," Welcome to "),M(9,"span",8),I(10,"AgriMandi"),T()(),pe(11,"div",9),T(),M(12,"p",10),I(13," \u{1F331} "),M(14,"strong",11),I(15,"AgriMandi"),T(),I(16," is your "),M(17,"span",12),I(18,"gateway"),T(),I(19," to a direct connection between "),M(20,"span",13),I(21,"farmers"),T(),I(22," and "),M(23,"span",13),I(24,"buyers"),T(),I(25," \u2014 bringing fresh produce to your doorstep with just a click. \u{1F69C}\u{1F91D} "),T()(),M(26,"section",14)(27,"h2",15),I(28," \u{1F31F} Why Choose "),M(29,"span",16),I(30,"AgriMandi"),T(),I(31,"? "),T(),M(32,"div",17)(33,"div",18)(34,"div",19),pe(35,"img",20),M(36,"p",21),I(37," \u{1F33E} "),M(38,"strong",22),I(39,"Direct Market Access:"),T(),I(40," Empowering farmers to showcase their produce directly to buyers. "),T()()(),M(41,"div",18)(42,"div",19),pe(43,"img",23),M(44,"p",21),I(45," \u{1F4AC} "),M(46,"strong",22),I(47,"Easy Negotiations:"),T(),I(48," Transparent communication between farmers and consumers for better deals. "),T()()(),M(49,"div",18)(50,"div",19),pe(51,"img",24),M(52,"p",21),I(53," \u{1F4CA} "),M(54,"strong",22),I(55,"Efficient Transactions:"),T(),I(56," Simplified buying and selling process with secure payments. "),T()()(),M(57,"div",18)(58,"div",19),pe(59,"img",25),M(60,"p",21),I(61," \u{1F30D} "),M(62,"strong",22),I(63,"Broader Reach:"),T(),I(64," Expand your market beyond local boundaries. "),T()()()()(),M(65,"section",26)(66,"h2",27),I(67," \u2699\uFE0F How "),M(68,"span",16),I(69,"It Works"),T()(),M(70,"div",28),$e(71,Hf,7,5,"div",29),T()(),M(72,"section",30)(73,"h2",31),I(74,"What Our Users Say"),T(),M(75,"div",32)(76,"div",33)(77,"p",34),I(78,'"AgriMandi has revolutionized the way I sell my produce. The direct connection with buyers has increased my income!"'),T(),M(79,"h4",35),I(80,"- Ramesh Kumar, Farmer"),T()(),M(81,"div",33)(82,"p",34),I(83,'"Buying fresh produce directly from farmers has never been easier. I love the transparency and quality."'),T(),M(84,"h4",35),I(85,"- Anjali Sharma, Buyer"),T()()()(),M(86,"section",30)(87,"h2",31),I(88,"Our Impact"),T(),M(89,"div",36),$e(90,Gf,5,2,"div",37),T()(),M(91,"section")(92,"h2",38),I(93,"Latest Insights"),T(),M(94,"div",39),$e(95,Wf,6,3,"div",40),T()(),M(96,"section",41)(97,"h2",42),I(98,"Ready to Start?"),T(),M(99,"p",43),I(100,"Sign up today and experience the benefits of connecting directly with farmers and buyers. "),T(),M(101,"button",44),st("click",function(){return n.goToRegister()}),I(102," Join Now "),T()(),M(103,"section")(104,"h2",38),I(105,"Frequently Asked Questions"),T(),M(106,"div",32),$e(107,Xf,5,2,"div",45),T()(),M(108,"footer",46)(109,"h2",47),I(110,"Join AgriMandi Today!"),T(),M(111,"p",48),I(112,"Be part of the revolution in agriculture. Together, we can build a more sustainable and efficient food supply chain."),T(),M(113,"button",49),st("click",function(){return n.goToRegister()}),I(114," Get Started "),T()()()),t&2&&(z(71),re("ngForOf",n.steps),z(19),re("ngForOf",n.impactStats),z(5),re("ngForOf",n.blogs),z(12),re("ngForOf",n.faqs),z(6),re("ngStyle",Ft(5,Vf,n.selectedColor||"#198754")))},dependencies:[Xt,Yn,jn,Ai],encapsulation:2})};var vc=(i,e)=>({"bg-green-600 text-white border-green-600":i,"border-gray-300 text-gray-500":e}),yu=(i,e)=>({"border-green-500":i,"border-gray-300":e});function Yf(i,e){if(i&1&&(M(0,"option",27),I(1),T()),i&2){let t=e.$implicit;re("value",t),z(),St(t)}}function jf(i,e){if(i&1&&(M(0,"div",15)(1,"h2",16),I(2,"Basic Product Info"),T(),M(3,"div")(4,"label",17),I(5,"Product Name "),M(6,"span",18),I(7,"*"),T()(),pe(8,"input",19),T(),M(9,"div")(10,"label",17),I(11,"Description "),M(12,"span",18),I(13,"*"),T()(),pe(14,"textarea",20),T(),M(15,"div",21)(16,"div")(17,"label",17),I(18,"Category "),M(19,"span",18),I(20,"*"),T()(),M(21,"select",22)(22,"option",23),I(23,"Select a category"),T(),$e(24,Yf,2,2,"option",24),T()(),M(25,"div")(26,"label",17),I(27,"Type "),M(28,"span",18),I(29,"*"),T()(),pe(30,"input",25),T(),M(31,"div")(32,"label",17),I(33,"Variety "),M(34,"span",18),I(35,"*"),T()(),pe(36,"input",26),T()()()),i&2){let t=_e();z(24),re("ngForOf",t.categories)}}function $f(i,e){if(i&1&&(M(0,"option",27),I(1),T()),i&2){let t=e.$implicit;re("value",t),z(),St(t)}}function Kf(i,e){if(i&1&&(M(0,"option",27),I(1),T()),i&2){let t=e.$implicit;re("value",t),z(),St(t)}}function Jf(i,e){if(i&1&&(M(0,"option",27),I(1),T()),i&2){let t=e.$implicit;re("value",t),z(),St(t)}}function Zf(i,e){if(i&1&&(M(0,"option",27),I(1),T()),i&2){let t=e.$implicit;re("value",t),z(),St(t)}}function Qf(i,e){if(i&1&&(M(0,"div",15)(1,"h2",16),I(2,"Product Details"),T(),M(3,"div",21)(4,"div")(5,"label",17),I(6,"Grade "),M(7,"span",18),I(8,"*"),T()(),M(9,"select",28),$e(10,$f,2,2,"option",24),T()(),M(11,"div")(12,"label",17),I(13,"Quantity "),M(14,"span",18),I(15,"*"),T()(),pe(16,"input",29),T(),M(17,"div")(18,"label",17),I(19,"Unit "),M(20,"span",18),I(21,"*"),T()(),M(22,"select",30),$e(23,Kf,2,2,"option",24),T()()(),M(24,"div")(25,"label",17),I(26,"Price Per Unit (\u20B9) "),M(27,"span",18),I(28,"*"),T()(),pe(29,"input",31),T(),M(30,"div",32),pe(31,"input",33),M(32,"label",34),I(33,"Available for Sale"),T()(),M(34,"div",35)(35,"div")(36,"label",17),I(37,"State "),M(38,"span",18),I(39,"*"),T()(),M(40,"select",36)(41,"option",23),I(42,"Select a state"),T(),$e(43,Jf,2,2,"option",24),T()(),M(44,"div")(45,"label",17),I(46,"District "),M(47,"span",18),I(48,"*"),T()(),M(49,"select",37)(50,"option",23),I(51,"Select a district"),T(),$e(52,Zf,2,2,"option",24),T()()()()),i&2){let t=_e();z(10),re("ngForOf",t.grades),z(13),re("ngForOf",t.units),z(20),re("ngForOf",t.states),z(9),re("ngForOf",t.districts)}}function ep(i,e){if(i&1){let t=Et();M(0,"div",15)(1,"h2",16),I(2,"Availability & Upload"),T(),M(3,"div",35)(4,"div")(5,"label",17),I(6,"Harvest Date "),M(7,"span",18),I(8,"*"),T()(),pe(9,"input",38),T(),M(10,"div")(11,"label",17),I(12,"Expiry Date "),M(13,"span",18),I(14,"*"),T()(),pe(15,"input",39),T()(),M(16,"div")(17,"label",17),I(18,"Upload Images"),T(),M(19,"input",40),st("change",function(r){Ge(t);let s=_e();return We(s.onFileChange(r))}),T()()()}if(i&2){let t=_e();z(9),Eo("max",t.today),z(6),re("min",t.productForm.value.harvestDate)}}function tp(i,e){if(i&1){let t=Et();M(0,"button",41),st("click",function(){Ge(t);let r=_e();return We(r.goBack())}),I(1," \u2190 Back "),T()}}function np(i,e){if(i&1){let t=Et();M(0,"button",42),st("click",function(){Ge(t);let r=_e();return We(r.goNext())}),I(1," Next \u2192 "),T()}}function ip(i,e){if(i&1&&(M(0,"button",43),I(1," \u2705 Submit Product "),T()),i&2){let t=_e();re("disabled",t.productForm.invalid)}}var Go=class i{constructor(e,t,n,r){this.fb=e;this.productService=t;this.alertService=n;this.userInfo=r}productForm;today=new Date().toISOString().split("T")[0];currentStep=1;states=[];districts=[];RAJASTHAN_DISTRICTS=["Ajmer","Alwar","Banswara","Baran","Barmer","Bharatpur","Bhilwara","Bikaner","Bundi","Chittorgarh","Churu","Dausa","Dholpur","Dungarpur","Hanumangarh","Jaipur","Jaisalmer","Jalore","Jhalawar","Jhunjhunu","Jodhpur","Karauli","Kota","Nagaur","Pali","Pratapgarh","Rajsamand","Sawai Madhopur","Sikar","Sirohi","Sri Ganganagar","Tonk","Udaipur","Balotra","Beawar","Deeg","Didwana-Kuchaman","Dudu","Gangapur City","Jaipur North","Jaipur South","Jodhpur East","Jodhpur West","Khairthal-Tijara","Kotputli-Behror","Neem Ka Thana","Phalodi","Salumbar","Shahpura","Sanchore"];categories=["Grains","Fruits","Vegetables","Dairy","Flowers","Spices","Pulses","Oilseeds","Herbs","Others"];grades=["Standard","A","B","C","Organic","Premium"];units=["Kg","Quintal","Ton","Liters","Packets","Bunch","Dozen"];ngOnInit(){this.productForm=this.fb.group({name:["",[Rn.required,Rn.minLength(3)]],description:["",Rn.required],category:["",Rn.required],type:[""],variety:[""],state:[""],district:[""],grade:["Standard"],quantity:[1,[Rn.required,Rn.min(1)]],unit:["Kg",Rn.required],pricePerUnit:[0,[Rn.required,Rn.min(1)]],availability:[!0],location:[""],harvestDate:["",Rn.required],expiryDate:["",Rn.required],storageCondition:[""],packagingType:[""],certification:[""],farmerId:[0],status:["Pending"],imageUrl:[null]},{validators:this.expiryDateAfterHarvestDate("harvestDate","expiryDate")}),this.states=Object.keys(this.STATE_DISTRICTS),this.productForm.get("state")?.valueChanges.subscribe(e=>{console.log("Selected State:",e),this.districts=this.STATE_DISTRICTS[e]||[],this.productForm.patchValue({district:""})})}expiryDateAfterHarvestDate(e,t){return n=>{let r=n.get(e)?.value,s=n.get(t)?.value;if(r&&s){let o=new Date(r);return new Date(s)>=o?null:{expiryBeforeHarvest:!0}}return null}}get f(){return this.productForm.controls}submitProduct(){let e=this.userInfo.getUserEmail(),t=this.userInfo.getUserName();if(!e||!t){this.alertService.showAlert("User information missing in token!","error");return}if(this.productForm.invalid){this.productForm.markAllAsTouched(),this.alertService.showAlert("Please fill all required fields correctly.","error");return}this.productService.getFarmerId(e,t).subscribe({next:n=>{let r=new FormData;r.append("name",this.productForm.value.name),r.append("description",this.productForm.value.description),r.append("category",this.productForm.value.category),r.append("type",this.productForm.value.type),r.append("variety",this.productForm.value.variety),r.append("grade",this.productForm.value.grade),r.append("quantity",this.productForm.value.quantity),r.append("unit",this.productForm.value.unit),r.append("pricePerUnit",this.productForm.value.pricePerUnit),r.append("availability",this.productForm.value.availability),r.append("location",`${this.productForm.value.district}, ${this.productForm.value.state}`),r.append("harvestDate",this.productForm.value.harvestDate),r.append("expiryDate",this.productForm.value.expiryDate),r.append("storageCondition",this.productForm.value.storageCondition),r.append("packagingType",this.productForm.value.packagingType),r.append("certification",this.productForm.value.certification),r.append("farmerId",n.toString()),r.append("status","Pending");let s=this.productForm.get("imageUrl")?.value;if(s&&s.length>0)for(let o=0;o<s.length;o++)r.append("files",s[o]);this.productService.saveproduct(r).subscribe({next:o=>{console.log("\u2705 Product registered:",o),this.alertService.showAlert("Product added successfully!","success"),this.productForm.reset({availability:!0})},error:o=>{console.error("\u274C Failed to save product:",o),this.alertService.showAlert("Failed to add product! Please try again.","error")}})},error:n=>{console.error("\u274C Failed to get Farmer ID:",n),this.alertService.showAlert("Could not fetch Farmer ID. Please login again.","error")}})}onFileChange(e){e.target.files&&e.target.files.length>0&&this.productForm.patchValue({imageUrl:e.target.files})}goNext(){this.currentStep<3&&this.currentStep++}goBack(){this.currentStep>1&&this.currentStep--}STATE_DISTRICTS={"Andaman and Nicobar Island (UT)":["Nicobar","North and Middle Andaman","South Andaman"],"Andhra Pradesh":["Anantapur","Chittoor","East Godavari","Guntur","Krishna","Kurnool","Prakasam","Srikakulam","Sri Potti Sriramulu Nellore","Visakhapatnam","Vizianagaram","West Godavari","YSR District, Kadapa (Cuddapah)"],"Arunachal Pradesh":["Anjaw","Changlang","Dibang Valley","East Kameng","East Siang","Kamle","Kra Daadi","Kurung Kumey","Lepa Rada","Lohit","Longding","Lower Dibang Valley","Lower Siang","Lower Subansiri","Namsai","Pakke Kessang","Papum Pare","Shi Yomi","Siang","Tawang","Tirap","Upper Siang","Upper Subansiri","West Kameng","West Siang"],Assam:["Baksa","Barpeta","Biswanath","Bongaigaon","Cachar","Charaideo","Chirang","Darrang","Dhemaji","Dhubri","Dibrugarh","Dima Hasao (North Cachar Hills)","Goalpara","Golaghat","Hailakandi","Hojai","Jorhat","Kamrup","Kamrup Metropolitan","Karbi Anglong","Karimganj","Kokrajhar","Lakhimpur","Majuli","Morigaon","Nagaon","Nalbari","Sivasagar","Sonitpur","South Salamara-Mankachar","Tinsukia","Udalguri","West Karbi Anglong"],Bihar:["Araria","Arwal","Aurangabad","Banka","Begusarai","Bhagalpur","Bhojpur","Buxar","Darbhanga","East Champaran (Motihari)","Gaya","Gopalganj","Jamui","Jehanabad","Kaimur (Bhabua)","Katihar","Khagaria","Kishanganj","Lakhisarai","Madhepura","Madhubani","Munger (Monghyr)","Muzaffarpur","Nalanda","Nawada","Patna","Purnia (Purnea)","Rohtas","Saharsa","Samastipur","Saran","Sheikhpura","Sheohar","Sitamarhi","Siwan","Supaul","Vaishali","West Champaran"],"Chandigarh (UT)":["Chandigarh"],Chhattisgarh:["Balod","Baloda Bazar","Balrampur","Bastar","Bemetara","Bijapur","Bilaspur","Dantewada (South Bastar)","Dhamtari","Durg","Gariyaband","Janjgir-Champa","Jashpur","Kabirdham (Kawardha)","Kanker (North Bastar)","Kondagaon","Korba","Korea (Koriya)","Mahasamund","Mungeli","Narayanpur","Raigarh","Raipur","Rajnandgaon","Sukma","Surajpur  ","Surguja"],"Dadra and Nagar Haveli (UT)":["Dadra &amp; Nagar Haveli"],"Daman and Diu (UT)":["Daman","Diu"],"Delhi (NCT)":["Central Delhi","East Delhi","New Delhi","North Delhi","North East  Delhi","North West  Delhi","Shahdara","South Delhi","South East Delhi","South West  Delhi","West Delhi"],Goa:["North Goa","South Goa"],Gujarat:["Ahmedabad","Amreli","Anand","Aravalli","Banaskantha (Palanpur)","Bharuch","Bhavnagar","Botad","Chhota Udepur","Dahod","Dangs (Ahwa)","Devbhoomi Dwarka","Gandhinagar","Gir Somnath","Jamnagar","Junagadh","Kachchh","Kheda (Nadiad)","Mahisagar","Mehsana","Morbi","Narmada (Rajpipla)","Navsari","Panchmahal (Godhra)","Patan","Porbandar","Rajkot","Sabarkantha (Himmatnagar)","Surat","Surendranagar","Tapi (Vyara)","Vadodara","Valsad"],Haryana:["Ambala","Bhiwani","Charkhi Dadri","Faridabad","Fatehabad","Gurgaon","Hisar","Jhajjar","Jind","Kaithal","Karnal","Kurukshetra","Mahendragarh","Mewat","Palwal","Panchkula","Panipat","Rewari","Rohtak","Sirsa","Sonipat","Yamunanagar"],"Himachal Pradesh":["Bilaspur","Chamba","Hamirpur","Kangra","Kinnaur","Kullu","Lahaul &amp; Spiti","Mandi","Shimla","Sirmaur (Sirmour)","Solan","Una"],"Jammu and Kashmir(UT)":["Anantnag","Bandipore","Baramulla","Budgam","Doda","Ganderbal","Jammu","Kathua","Kishtwar","Kulgam","Kupwara","Poonch","Pulwama","Rajouri","Ramban","Reasi","Samba","Shopian","Srinagar","Udhampur"],Jharkhand:["Bokaro","Chatra","Deoghar","Dhanbad","Dumka","East Singhbhum","Garhwa","Giridih","Godda","Gumla","Hazaribag","Jamtara","Khunti","Koderma","Latehar","Lohardaga","Pakur","Palamu","Ramgarh","Ranchi","Sahibganj","Seraikela-Kharsawan","Simdega","West Singhbhum"],Karnataka:["Bagalkot","Ballari (Bellary)","Belagavi (Belgaum)","Bengaluru (Bangalore) Rural","Bengaluru (Bangalore) Urban","Bidar","Chamarajanagar","Chikballapur","Chikkamagaluru (Chikmagalur)","Chitradurga","Dakshina Kannada","Davangere","Dharwad","Gadag","Hassan","Haveri","Kalaburagi (Gulbarga)","Kodagu","Kolar","Koppal","Mandya","Mysuru (Mysore)","Raichur","Ramanagara","Shivamogga (Shimoga)","Tumakuru (Tumkur)","Udupi","Uttara Kannada (Karwar)","Vijayapura (Bijapur)","Yadgir"],Kerala:["Alappuzha","Ernakulam","Idukki","Kannur","Kasaragod","Kollam","Kottayam","Kozhikode","Malappuram","Palakkad","Pathanamthitta","Thiruvananthapuram","Thrissur","Wayanad"],"Ladakh(UT)":["Kargil","Leh"],"Lakshadweep (UT)":["Lakshadweep"],"Madhya Pradesh":["Agar Malwa","Alirajpur","Anuppur","Ashoknagar","Balaghat","Barwani","Betul","Bhind","Bhopal","Burhanpur","Chhatarpur","Chhindwara","Damoh","Datia","Dewas","Dhar","Dindori","Guna","Gwalior","Harda","Hoshangabad","Indore","Jabalpur","Jhabua","Katni","Khandwa","Khargone","Mandla","Mandsaur","Morena","Narsinghpur","Neemuch","Panna","Raisen","Rajgarh","Ratlam","Rewa","Sagar","Satna","Sehore","Seoni","Shahdol","Shajapur","Sheopur","Shivpuri","Sidhi","Singrauli","Tikamgarh","Ujjain","Umaria","Vidisha"],Maharashtra:["Ahmednagar","Akola","Amravati","Aurangabad","Beed","Bhandara","Buldhana","Chandrapur","Dhule","Gadchiroli","Gondia","Hingoli","Jalgaon","Jalna","Kolhapur","Latur","Mumbai City","Mumbai Suburban","Nagpur","Nanded","Nandurbar","Nashik","Osmanabad","Palghar","Parbhani","Pune","Raigad","Ratnagiri","Sangli","Satara","Sindhudurg","Solapur","Thane","Wardha","Washim","Yavatmal"],Manipur:["Bishnupur","Chandel","Churachandpur","Imphal East","Imphal West","Jiribam","Kakching","Kamjong","Kangpokpi","Noney","Pherzawl","Senapati","Tamenglong","Tengnoupal","Thoubal","Ukhrul"],Meghalaya:["East Garo Hills","East Jaintia Hills","East Khasi Hills","North Garo Hills","Ri Bhoi","South Garo Hills","South West Garo Hills ","South West Khasi Hills","West Garo Hills","West Jaintia Hills","West Khasi Hills"],Mizoram:["Aizawl","Champhai","Kolasib","Lawngtlai","Lunglei","Mamit","Saiha","Serchhip"],Nagaland:["Dimapur","Kiphire","Kohima","Longleng","Mokokchung","Mon","Peren","Phek","Tuensang","Wokha","Zunheboto"],Odisha:["Angul","Balangir","Balasore","Bargarh","Bhadrak","Boudh","Cuttack","Deogarh","Dhenkanal","Gajapati","Ganjam","Jagatsinghapur","Jajpur","Jharsuguda","Kalahandi","Kandhamal","Kendrapara","Kendujhar (Keonjhar)","Khordha","Koraput","Malkangiri","Mayurbhanj","Nabarangpur","Nayagarh","Nuapada","Puri","Rayagada","Sambalpur","Sonepur","Sundargarh"],"Puducherry (UT)":["Karaikal","Mahe","Pondicherry","Yanam"],Punjab:["Amritsar","Barnala","Bathinda","Faridkot","Fatehgarh Sahib","Fazilka","Ferozepur","Gurdaspur","Hoshiarpur","Jalandhar","Kapurthala","Ludhiana","Mansa","Moga","Muktsar","Nawanshahr (Shahid Bhagat Singh Nagar)","Pathankot","Patiala","Rupnagar","Sahibzada Ajit Singh Nagar (Mohali)","Sangrur","Tarn Taran"],Rajasthan:["Ajmer","Alwar","Banswara","Baran","Barmer","Bharatpur","Bhilwara","Bikaner","Bundi","Chittorgarh","Churu","Dausa","Dholpur","Dungarpur","Hanumangarh","Jaipur","Jaisalmer","Jalore","Jhalawar","Jhunjhunu","Jodhpur","Karauli","Kota","Nagaur","Pali","Pratapgarh","Rajsamand","Sawai Madhopur","Sikar","Sirohi","Sri Ganganagar","Tonk","Udaipur"],Sikkim:["East Sikkim","North Sikkim","South Sikkim","West Sikkim"],statename:[],"Tamil Nadu":["Ariyalur","Chennai","Coimbatore","Cuddalore","Dharmapuri","Dindigul","Erode","Kanchipuram","Kanyakumari","Karur","Krishnagiri","Madurai","Nagapattinam","Namakkal","Nilgiris","Perambalur","Pudukkottai","Ramanathapuram","Salem","Sivaganga","Thanjavur","Theni","Thoothukudi (Tuticorin)","Tiruchirappalli","Tirunelveli","Tiruppur","Tiruvallur","Tiruvannamalai","Tiruvarur","Vellore","Viluppuram","Virudhunagar"],Telangana:["Adilabad","Bhadradri Kothagudem","Hyderabad","Jagtial","Jangaon","Jayashankar Bhoopalpally","Jogulamba Gadwal","Kamareddy","Karimnagar","Khammam","Komaram Bheem Asifabad","Mahabubabad","Mahabubnagar","Mancherial","Medak","Medchal","Nagarkurnool","Nalgonda","Nirmal","Nizamabad","Peddapalli","Rajanna Sircilla","Rangareddy","Sangareddy","Siddipet","Suryapet","Vikarabad","Wanaparthy","Warangal (Rural)","Warangal (Urban)","Yadadri Bhuvanagiri"],Tripura:["Dhalai","Gomati","Khowai","North Tripura","Sepahijala","South Tripura","Unakoti","West Tripura"],Uttarakhand:["Almora","Bageshwar","Chamoli","Champawat","Dehradun","Haridwar","Nainital","Pauri Garhwal","Pithoragarh","Rudraprayag","Tehri Garhwal","Udham Singh Nagar","Uttarkashi"],"Uttar Pradesh":["Agra","Aligarh","Allahabad","Ambedkar Nagar","Amethi (Chatrapati Sahuji Mahraj Nagar)","Amroha (J.P. Nagar)","Auraiya","Azamgarh","Baghpat","Bahraich","Ballia","Balrampur","Banda","Barabanki","Bareilly","Basti","Bhadohi","Bijnor","Budaun","Bulandshahr","Chandauli","Chitrakoot","Deoria","Etah","Etawah","Faizabad","Farrukhabad","Fatehpur","Firozabad","Gautam Buddha Nagar","Ghaziabad","Ghazipur","Gonda","Gorakhpur","Hamirpur","Hapur (Panchsheel Nagar)","Hardoi","Hathras","Jalaun","Jaunpur","Jhansi","Kannauj","Kanpur Dehat","Kanpur Nagar","Kanshiram Nagar (Kasganj)","Kaushambi","Kushinagar (Padrauna)","Lakhimpur - Kheri","Lalitpur","Lucknow","Maharajganj","Mahoba","Mainpuri","Mathura","Mau","Meerut","Mirzapur","Moradabad","Muzaffarnagar","Pilibhit","Pratapgarh","RaeBareli","Rampur","Saharanpur","Sambhal (Bhim Nagar)","Sant Kabir Nagar","Shahjahanpur","Shamali (Prabuddh Nagar)","Shravasti","Siddharth Nagar","Sitapur","Sonbhadra","Sultanpur","Unnao","Varanasi"],"West Bengal":["Alipurduar","Bankura","Birbhum","Cooch Behar","Dakshin Dinajpur (South Dinajpur)","Darjeeling","Hooghly","Howrah","Jalpaiguri","Jhargram","Kalimpong","Kolkata","Malda","Murshidabad","Nadia","North 24 Parganas","Paschim Medinipur (West Medinipur)","Paschim (West) Burdwan (Bardhaman)","Purba Burdwan (Bardhaman)","Purba Medinipur (East Medinipur)","Purulia","South 24 Parganas","Uttar Dinajpur (North Dinajpur)"]};static \u0275fac=function(t){return new(t||i)(ke(xu),ke(Bo),ke($n),ke(In))};static \u0275cmp=Dt({type:i,selectors:[["app-product"]],decls:32,vars:33,consts:[[1,"w-full","bg-gradient-to-b","from-white","to-gray-50","dark:from-gray-900","dark:to-gray-800","py-12","px-4","sm:px-10","lg:px-20","transition-colors","duration-300"],[1,"max-w-7xl","mx-auto","text-center","mb-12"],[1,"text-4xl","sm:text-5xl","font-extrabold","tracking-tight","text-green-700","dark:text-green-400","mb-4"],[1,"text-lg","text-gray-600","dark:text-gray-300"],[1,"flex","justify-between","items-center","mb-10"],[1,"flex-1","flex","flex-col","items-center"],[1,"w-10","h-10","flex","items-center","justify-center","rounded-full","border-2",3,"ngClass"],[1,"mt-2","text-sm","font-medium","text-center"],[1,"flex-1","border-t-2",3,"ngClass"],[1,"space-y-6",3,"ngSubmit","formGroup"],["class","space-y-6",4,"ngIf"],[1,"flex","justify-between","mt-10"],["type","button","class","px-6 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-100 font-semibold rounded-xl shadow",3,"click",4,"ngIf"],["type","button","class","ml-auto px-6 py-2 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl shadow",3,"click",4,"ngIf"],["type","submit","class","ml-auto px-6 py-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl shadow",3,"disabled",4,"ngIf"],[1,"space-y-6"],[1,"text-2xl","font-bold","text-green-600","dark:text-green-400","mb-4"],[1,"block","font-semibold","mb-1"],[1,"text-red-500"],["type","text","formControlName","name","placeholder","E.g., Golden Apples",1,"w-full","rounded-lg","border","px-4","py-2","bg-white","dark:bg-gray-800","text-gray-900","dark:text-gray-100"],["formControlName","description","rows","3","placeholder","Briefly describe the product",1,"w-full","rounded-lg","border","px-4","py-2","bg-white","dark:bg-gray-800","text-gray-900","dark:text-gray-100"],[1,"grid","grid-cols-1","md:grid-cols-3","gap-6"],["formControlName","category",1,"w-full","rounded-lg","border","px-4","py-2","bg-white","dark:bg-gray-800","text-gray-900","dark:text-gray-100"],["value","","disabled",""],[3,"value",4,"ngFor","ngForOf"],["type","text","formControlName","type","placeholder","E.g., Fuji",1,"w-full","rounded-lg","border","px-4","py-2","bg-white","dark:bg-gray-800","text-gray-900","dark:text-gray-100"],["type","text","formControlName","variety","placeholder","E.g., Organic",1,"w-full","rounded-lg","border","px-4","py-2","bg-white","dark:bg-gray-800","text-gray-900","dark:text-gray-100"],[3,"value"],["formControlName","grade",1,"w-full","rounded-lg","border","px-4","py-2","bg-white","dark:bg-gray-800","text-gray-900","dark:text-gray-100"],["type","number","formControlName","quantity","min","0",1,"w-full","rounded-lg","border","px-4","py-2","bg-white","dark:bg-gray-800","text-gray-900","dark:text-gray-100"],["formControlName","unit",1,"w-full","rounded-lg","border","px-4","py-2","bg-white","dark:bg-gray-800","text-gray-900","dark:text-gray-100"],["type","number","formControlName","pricePerUnit","min","0","step","0.01",1,"w-full","rounded-lg","border","px-4","py-2","bg-white","dark:bg-gray-800","text-gray-900","dark:text-gray-100"],[1,"flex","items-center","gap-3"],["type","checkbox","formControlName","availability",1,"h-5","w-5","text-green-600","rounded","focus:ring-green-500","border-gray-300","dark:border-gray-600"],[1,"font-semibold"],[1,"grid","grid-cols-1","md:grid-cols-2","gap-6"],["formControlName","state",1,"w-full","rounded-lg","border","px-4","py-2","bg-white","dark:bg-gray-800","text-gray-900","dark:text-gray-100"],["formControlName","district",1,"w-full","rounded-lg","border","px-4","py-2","bg-white","dark:bg-gray-800","text-gray-900","dark:text-gray-100"],["type","date","formControlName","harvestDate",1,"w-full","rounded-lg","border","px-4","py-2","bg-white","dark:bg-gray-800","text-gray-900","dark:text-gray-100",3,"max"],["type","date","formControlName","expiryDate",1,"w-full","rounded-lg","border","px-4","py-2","bg-white","dark:bg-gray-800","text-gray-900","dark:text-gray-100",3,"min"],["type","file","multiple","",1,"block","w-full","text-sm","text-gray-500","file:mr-4","file:py-2","file:px-4","file:border-0","file:text-sm","file:font-semibold","file:bg-green-100","file:text-green-700","hover:file:bg-green-200",3,"change"],["type","button",1,"px-6","py-2","bg-gray-200","dark:bg-gray-700","hover:bg-gray-300","dark:hover:bg-gray-600","text-gray-800","dark:text-gray-100","font-semibold","rounded-xl","shadow",3,"click"],["type","button",1,"ml-auto","px-6","py-2","bg-green-500","hover:bg-green-600","text-white","font-bold","rounded-xl","shadow",3,"click"],["type","submit",1,"ml-auto","px-6","py-2","bg-green-600","hover:bg-green-700","text-white","font-bold","rounded-xl","shadow",3,"disabled"]],template:function(t,n){t&1&&(M(0,"div",0)(1,"div",1)(2,"h1",2),I(3," Add Your Fresh Product "),T(),M(4,"p",3),I(5," Please fill out the steps below to list your crop or item for sale. "),T()(),M(6,"div",4)(7,"div",5)(8,"div",6),I(9," 1 "),T(),M(10,"span",7),I(11,"Basic Info"),T()(),pe(12,"div",8),M(13,"div",5)(14,"div",6),I(15," 2 "),T(),M(16,"span",7),I(17,"Product Details"),T()(),pe(18,"div",8),M(19,"div",5)(20,"div",6),I(21," 3 "),T(),M(22,"span",7),I(23,"Ready to Sell"),T()()(),M(24,"form",9),st("ngSubmit",function(){return n.submitProduct()}),$e(25,jf,37,1,"div",10)(26,Qf,53,4,"div",10)(27,ep,20,2,"div",10),M(28,"div",11),$e(29,tp,2,0,"button",12)(30,np,2,0,"button",13)(31,ip,2,1,"button",14),T()()()),t&2&&(z(7),Ti("text-green-600",n.currentStep===1),z(),re("ngClass",pn(18,vc,n.currentStep===1,n.currentStep!==1)),z(4),re("ngClass",pn(21,yu,n.currentStep>=2,n.currentStep<2)),z(),Ti("text-green-600",n.currentStep===2),z(),re("ngClass",pn(24,vc,n.currentStep===2,n.currentStep!==2)),z(4),re("ngClass",pn(27,yu,n.currentStep>=3,n.currentStep<3)),z(),Ti("text-green-600",n.currentStep===3),z(),re("ngClass",pn(30,vc,n.currentStep===3,n.currentStep!==3)),z(4),re("formGroup",n.productForm),z(),re("ngIf",n.currentStep===1),z(),re("ngIf",n.currentStep===2),z(),re("ngIf",n.currentStep===3),z(2),re("ngIf",n.currentStep>1),z(),re("ngIf",n.currentStep<3),z(),re("ngIf",n.currentStep===3))},dependencies:[Uo,Di,No,Fo,Ri,Do,pu,Lo,Ii,Pi,_u,mu,gu,Xt,qn,Yn,Cn],encapsulation:2})};var Wo=class i{constructor(e,t,n,r){this.loginService=e;this.alertService=t;this.router=n;this.platformId=r}loginData={email:"",password:""};login(){this.loginService.login(this.loginData).subscribe({next:()=>{this.alertService.showAlert("Login successful!","success"),this.router.navigate(["components/product"])},error:()=>{this.alertService.showAlert("Login failed! Please check your credentials.","error")}})}testSuccess(){this.alertService.showAlert("Test success alert!","success")}testError(){this.alertService.showAlert("Test error alert!","error")}static \u0275fac=function(t){return new(t||i)(ke(Fi),ke($n),ke(An),ke(hn))};static \u0275cmp=Dt({type:i,selectors:[["app-login"]],decls:47,vars:2,consts:[[1,"min-h-[calc(100vh-120px)]","w-full","flex","flex-col","lg:flex-row","overflow-auto","pt-4","pb-4","bg-gray-50"],[1,"lg:w-[60%]","w-full","bg-gradient-to-br","from-green-100","to-green-200","p-8","md:p-12","flex","flex-col","justify-center","items-center","text-center","relative","overflow-hidden"],[1,"absolute","top-[-60px]","right-[-60px]","w-80","h-80","bg-green-300","rounded-full","opacity-30","blur-3xl","animate-pulse","z-0"],[1,"z-10"],[1,"text-4xl","md:text-5xl","font-extrabold","text-green-800","mb-4","md:mb-6","drop-shadow-lg"],[1,"text-gray-700","text-base","md:text-lg","max-w-md","md:max-w-xl","leading-relaxed","px-2","backdrop-blur-sm"],[1,"text-green-700","font-semibold"],["src","images/logo.jpg","alt","AgriMandi Logo",1,"w-32","md:w-48","mt-6","md:mt-10","shadow-md","rounded-full","border-4","border-white"],[1,"lg:w-[40%]","w-full","flex","items-center","justify-center","bg-white","relative","overflow-hidden"],[1,"w-full","max-w-sm","sm:max-w-md","px-6","sm:px-8","py-10","backdrop-blur-xl","bg-white/80","shadow-2xl","rounded-2xl","border","border-gray-200","transition-transform","duration-300","hover:scale-[1.01]","animate-fade-in-slide"],[1,"text-3xl","font-bold","text-center","text-green-700","mb-6"],[1,"space-y-5",3,"ngSubmit"],["for","email",1,"block","text-sm","font-semibold","text-gray-700","mb-1"],["type","email","id","email","name","email","required","",1,"w-full","px-4","py-2","border","border-gray-300","rounded-md","text-sm","focus:outline-none","focus:ring-2","focus:ring-green-500","shadow-sm",3,"ngModelChange","ngModel"],["for","password",1,"block","text-sm","font-semibold","text-gray-700","mb-1"],["type","password","id","password","name","password","required","",1,"w-full","px-4","py-2","border","border-gray-300","rounded-md","text-sm","focus:outline-none","focus:ring-2","focus:ring-green-500","shadow-sm",3,"ngModelChange","ngModel"],["type","submit",1,"w-full","py-2","bg-green-600","hover:bg-green-700","text-white","text-base","font-medium","rounded-md","transition","duration-200","shadow-md"],[1,"text-sm","text-gray-500","text-center","mt-4"],["href","auth/signup",1,"text-green-600","font-medium","hover:underline"],[1,"flex","items-center","justify-center","my-4"],[1,"w-full","h-px","bg-gray-300"],[1,"mx-4","text-sm","text-gray-500"],[1,"space-y-3"],["type","button",1,"w-full","flex","items-center","justify-center","gap-3","py-2","px-4","border","border-gray-300","rounded-md","shadow-sm","bg-white","hover:bg-gray-100","transition"],["src","https://www.svgrepo.com/show/475656/google-color.svg","alt","Google",1,"w-5","h-5"],[1,"text-sm","font-medium","text-gray-700"],["src","https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/facebook.svg","alt","Facebook",1,"w-5","h-5","fill-blue-600"]],template:function(t,n){t&1&&(M(0,"div",0)(1,"div",1),pe(2,"div",2),M(3,"div",3)(4,"h1",4),I(5,"\u{1F33F} AgriMandi"),T(),M(6,"p",5),I(7," Empowering farmers and buyers with seamless crop trading. "),pe(8,"br"),I(9," Join "),M(10,"strong",6),I(11,"AgriMandi"),T(),I(12," and grow with the future of smart agriculture. "),T(),pe(13,"img",7),T()(),M(14,"div",8)(15,"div",9)(16,"h2",10),I(17,"Login to AgriMandi"),T(),M(18,"form",11),st("ngSubmit",function(){return n.login()}),M(19,"div")(20,"label",12),I(21,"Email"),T(),M(22,"input",13),ct("ngModelChange",function(s){return lt(n.loginData.email,s)||(n.loginData.email=s),s}),T()(),M(23,"div")(24,"label",14),I(25,"Password"),T(),M(26,"input",15),ct("ngModelChange",function(s){return lt(n.loginData.password,s)||(n.loginData.password=s),s}),T()(),M(27,"button",16),I(28," Login "),T(),M(29,"p",17),I(30," Don\u2019t have an account? "),M(31,"a",18),I(32,"Sign up"),T()()(),M(33,"div",19),pe(34,"div",20),M(35,"span",21),I(36,"OR"),T(),pe(37,"div",20),T(),M(38,"div",22)(39,"button",23),pe(40,"img",24),M(41,"span",25),I(42,"Continue with Google"),T()(),M(43,"button",23),pe(44,"img",26),M(45,"span",25),I(46,"Continue with Facebook"),T()()()()()()),t&2&&(z(22),at("ngModel",n.loginData.email),z(4),at("ngModel",n.loginData.password))},dependencies:[Li,Di,Ri,Ii,Pi,Fr,Nr,Lr],encapsulation:2})};var Yt=class i{constructor(e,t){this.loginService=e;this.router=t}canActivate(){return this.loginService.isLoggedIn()?!0:(this.router.navigate(["auth/login"]),!1)}static \u0275fac=function(t){return new(t||i)(ci(Fi),ci(An))};static \u0275prov=Tn({token:i,factory:i.\u0275fac,providedIn:"root"})};var Ms=(i,e)=>({"bg-green-700 text-white shadow-md ring-2 ring-green-400":i,"bg-lime-100 text-green-800 hover:bg-lime-200":e}),sp=(i,e,t)=>({"bg-green-100 text-green-700":i,"bg-yellow-100 text-yellow-700":e,"bg-red-100 text-red-700":t}),op=(i,e)=>({"bg-green-200 text-green-800":i,"bg-red-200 text-red-800":e}),ap=i=>({label:"Phone Number",value:i}),lp=i=>({label:"Alternate Contact",value:i}),cp=i=>({label:"Address",value:i}),hp=i=>({label:"City",value:i}),up=i=>({label:"State",value:i}),dp=i=>({label:"Pincode",value:i}),fp=i=>({label:"Land Area",value:i}),pp=i=>({label:"Farming Type",value:i}),bu=(i,e,t,n,r,s,o,a)=>[i,e,t,n,r,s,o,a],mp=()=>({label:"Phone Number",name:"phoneNumber",type:"tel"}),gp=()=>({label:"Address",name:"address"}),_p=()=>({label:"State",name:"state"}),xp=()=>({label:"District",name:"district"}),vp=()=>({label:"Village",name:"village"}),yp=()=>({label:"Postal Code",name:"postalCode"}),bp=()=>({label:"Land Area (in acres)",name:"landArea",type:"number"}),Sp=()=>({label:"Farming Type",name:"farmingType"}),Mp=i=>({background:i});function wp(i,e){if(i&1){let t=Et();Qt(0),M(1,"button",9),st("click",function(){Ge(t);let r=_e();return We(r.activeTab="farm")}),pe(2,"i",14),M(3,"span"),I(4,"Land & Crops"),T()(),M(5,"button",9),st("click",function(){Ge(t);let r=_e();return We(r.activeTab="products")}),pe(6,"i",15),M(7,"span"),I(8,"Harvest Products"),T()(),en()}if(i&2){let t=_e();z(),re("ngClass",pn(2,Ms,t.activeTab==="farm",t.activeTab!=="farm")),z(4),re("ngClass",pn(5,Ms,t.activeTab==="products",t.activeTab!=="products"))}}function Ep(i,e){if(i&1){let t=Et();M(0,"div",17)(1,"div",18)(2,"div",19)(3,"div",20)(4,"div",21),pe(5,"img",22),M(6,"div",23)(7,"label",24),pe(8,"i",25),M(9,"input",26),st("change",function(r){Ge(t);let s=_e(2);return We(s.onFileSelect(r))}),T()()()(),M(10,"div",27)(11,"h2",28),I(12,"User Details"),T(),M(13,"div",29)(14,"p")(15,"span",30),I(16,"Name:"),T(),I(17),T(),M(18,"p")(19,"span",30),I(20,"Role:"),T(),I(21),T(),M(22,"p")(23,"span",30),I(24,"Email:"),T(),I(25),T()()()(),pe(26,"hr",31),T()()()}if(i&2){let t=_e(2);z(5),re("src",t.profileImageUrl||t.defaultProfileImage,sr),z(12),Nt(" ",t.loginData.userName," "),z(4),Nt(" ",t.loginData.userRole," "),z(4),Nt(" ",t.loginData.userEmail," ")}}function Tp(i,e){if(i&1&&(M(0,"div"),$e(1,Ep,27,4,"div",16),T()),i&2){let t=_e(),n=Pr(24);z(),re("ngIf",t.loginData==null?null:t.loginData.isLoggedIn)("ngIfElse",n)}}function Cp(i,e){i&1&&(M(0,"div",32),pe(1,"i",33),I(2," You are not logged in. "),T())}function Ap(i,e){if(i&1&&(M(0,"div",38)(1,"h4",39),I(2),T(),M(3,"div",40)(4,"p")(5,"span",41),I(6,"Category:"),T(),I(7),T(),M(8,"p")(9,"span",41),I(10,"Grade:"),T(),I(11),T(),M(12,"p")(13,"span",41),I(14,"Quantity:"),T(),I(15),T(),M(16,"p")(17,"span",41),I(18,"Price/Unit:"),T(),I(19),T(),M(20,"p")(21,"span",41),I(22,"Total Price:"),T(),I(23),T(),M(24,"p")(25,"span",41),I(26,"Status:"),T(),M(27,"span",42),I(28),T()(),M(29,"p")(30,"span",41),I(31,"Availability:"),T(),M(32,"span",43),I(33),T()()(),M(34,"div",44)(35,"button",45),I(36,"Edit"),T(),M(37,"button",46),I(38,"Delete"),T(),M(39,"button",47),I(40,"Mark as Sold"),T()()()),i&2){let t=e.$implicit;z(2),St(t.name),z(5),Nt(" ",t.category,""),z(4),Nt(" ",t.grade,""),z(4),Ro(" ",t.quantity," ",t.unit,""),z(4),Nt(" \u20B9",t.pricePerUnit,""),z(4),Nt(" \u20B9",t.totalPrice,""),z(4),re("ngClass",ru(11,sp,t.status==="Approved",t.status==="Pending",t.status==="Rejected")),z(),Nt(" ",t.status," "),z(4),re("ngClass",pn(15,op,t.availability,!t.availability)),z(),Nt(" ",t.availability?"Available":"Not Available"," ")}}function Rp(i,e){i&1&&(M(0,"div",48)(1,"p",49),I(2,"No products found. Add your first product to get started!"),T()())}function Ip(i,e){if(i&1&&(Qt(0),M(1,"div",36),$e(2,Ap,41,18,"div",37),T(),$e(3,Rp,3,0,"ng-template",null,1,Ci),en()),i&2){let t=_e(3);z(2),re("ngForOf",t.products1)}}function Pp(i,e){if(i&1&&(M(0,"div")(1,"h3",34),I(2,"Your Products"),T(),$e(3,Ip,5,1,"ng-container",35),T()),i&2){let t=_e(2),n=Pr(28);z(3),re("ngIf",t.products1.length>0)("ngIfElse",n)}}function Dp(i,e){if(i&1){let t=Et();M(0,"div",59)(1,"div",60)(2,"h3",61),I(3,"Your Farmer Profile"),T(),M(4,"button",62),st("click",function(){Ge(t);let r=_e(3);return We(r.onEditProfile())}),pe(5,"i",63),I(6," Edit Profile "),T()()()}}function Lp(i,e){if(i&1&&(Qt(0),M(1,"div",64)(2,"p",65),I(3),T(),M(4,"p",66),I(5),T()(),en()),i&2){let t=e.$implicit;z(3),Nt("",t.label," "),z(2),St(t.value||"N/A")}}function Np(i,e){if(i&1){let t=Et();Qt(0),M(1,"div",67)(2,"label",68),I(3),T(),M(4,"input",69),ct("ngModelChange",function(r){let s=Ge(t).$implicit,o=_e(3);return lt(o.farmerForm[s.name],r)||(o.farmerForm[s.name]=r),We(r)}),T()(),en()}if(i&2){let t=e.$implicit,n=_e(3);z(3),St(t.label),z(),Eo("name",t.name),at("ngModel",n.farmerForm[t.name]),re("type",t.type||"text")}}function Fp(i,e){if(i&1){let t=Et();M(0,"div"),$e(1,Dp,7,0,"div",50),M(2,"div",51),$e(3,Lp,6,2,"ng-container",52),T(),M(4,"div",53)(5,"h3",54),I(6,"Update Farmer Profile"),T(),M(7,"form",55,2),st("ngSubmit",function(){Ge(t);let r=_e(2);return We(r.submitFarmerForm())}),$e(9,Np,5,4,"ng-container",52),M(10,"div",56)(11,"button",57),pe(12,"i",58),I(13," Save Profile "),T()()()()()}if(i&2){let t=_e(2);z(),re("ngIf",t.farmerData),z(2),re("ngForOf",pc(20,bu,Ft(4,ap,t.farmerData.phoneNumber),Ft(6,lp,t.farmerData.phoneNumber),Ft(8,cp,t.farmerData.address),Ft(10,hp,t.farmerData.district),Ft(12,up,t.farmerData.state),Ft(14,dp,t.farmerData.postalCode),Ft(16,fp,t.farmerData.landArea+" acres"),Ft(18,pp,t.farmerData.farmingType))),z(6),re("ngForOf",pc(37,bu,fn(29,mp),fn(30,gp),fn(31,_p),fn(32,xp),fn(33,vp),fn(34,yp),fn(35,bp),fn(36,Sp))),z(2),re("ngStyle",Ft(46,Mp,t.selectedColor))}}function Up(i,e){if(i&1&&(Qt(0),$e(1,Pp,4,2,"div",12)(2,Fp,14,48,"div",12),en()),i&2){let t=_e();z(),re("ngIf",t.activeTab==="products"),z(),re("ngIf",t.activeTab==="personal")}}function Bp(i,e){if(i&1){let t=Et();Qt(0),M(1,"h3",70),I(2,"Update Buyer Details"),T(),M(3,"form",71),st("ngSubmit",function(){Ge(t);let r=_e();return We(r.submitBuyerForm())}),M(4,"div",67)(5,"label",72),I(6,"Contact Number"),T(),M(7,"input",73),ct("ngModelChange",function(r){Ge(t);let s=_e();return lt(s.buyerForm.contactNumber,r)||(s.buyerForm.contactNumber=r),We(r)}),T()(),M(8,"div",67)(9,"label",72),I(10,"Alternate Contact"),T(),M(11,"input",74),ct("ngModelChange",function(r){Ge(t);let s=_e();return lt(s.buyerForm.alternateContact,r)||(s.buyerForm.alternateContact=r),We(r)}),T()(),M(12,"div",67)(13,"label",72),I(14,"Address"),T(),M(15,"input",75),ct("ngModelChange",function(r){Ge(t);let s=_e();return lt(s.buyerForm.address,r)||(s.buyerForm.address=r),We(r)}),T()(),M(16,"div",67)(17,"label",72),I(18,"City"),T(),M(19,"input",76),ct("ngModelChange",function(r){Ge(t);let s=_e();return lt(s.buyerForm.city,r)||(s.buyerForm.city=r),We(r)}),T()(),M(20,"div",67)(21,"label",72),I(22,"State"),T(),M(23,"input",77),ct("ngModelChange",function(r){Ge(t);let s=_e();return lt(s.buyerForm.state,r)||(s.buyerForm.state=r),We(r)}),T()(),M(24,"div",67)(25,"label",72),I(26,"Pincode"),T(),M(27,"input",78),ct("ngModelChange",function(r){Ge(t);let s=_e();return lt(s.buyerForm.pincode,r)||(s.buyerForm.pincode=r),We(r)}),T()(),M(28,"div",67)(29,"label",72),I(30,"Country"),T(),M(31,"input",79),ct("ngModelChange",function(r){Ge(t);let s=_e();return lt(s.buyerForm.country,r)||(s.buyerForm.country=r),We(r)}),T()(),M(32,"div",67)(33,"label",72),I(34,"Company Name"),T(),M(35,"input",80),ct("ngModelChange",function(r){Ge(t);let s=_e();return lt(s.buyerForm.companyName,r)||(s.buyerForm.companyName=r),We(r)}),T()(),M(36,"div",67)(37,"label",72),I(38,"Company Type"),T(),M(39,"input",81),ct("ngModelChange",function(r){Ge(t);let s=_e();return lt(s.buyerForm.companyType,r)||(s.buyerForm.companyType=r),We(r)}),T()(),M(40,"div",67)(41,"label",72),I(42,"GST Number"),T(),M(43,"input",82),ct("ngModelChange",function(r){Ge(t);let s=_e();return lt(s.buyerForm.gstNumber,r)||(s.buyerForm.gstNumber=r),We(r)}),T()(),M(44,"div",67)(45,"label",72),I(46,"PAN Number"),T(),M(47,"input",83),ct("ngModelChange",function(r){Ge(t);let s=_e();return lt(s.buyerForm.panNumber,r)||(s.buyerForm.panNumber=r),We(r)}),T()(),M(48,"div",67)(49,"label",72),I(50,"Preferred Crops"),T(),M(51,"input",84),ct("ngModelChange",function(r){Ge(t);let s=_e();return lt(s.buyerForm.preferredCrops,r)||(s.buyerForm.preferredCrops=r),We(r)}),T()(),M(52,"div",67)(53,"label",72),I(54,"Budget Range"),T(),M(55,"input",85),ct("ngModelChange",function(r){Ge(t);let s=_e();return lt(s.buyerForm.budgetRange,r)||(s.buyerForm.budgetRange=r),We(r)}),T()(),M(56,"div",67)(57,"label",72),I(58,"Purchase Frequency"),T(),M(59,"input",86),ct("ngModelChange",function(r){Ge(t);let s=_e();return lt(s.buyerForm.purchaseFrequency,r)||(s.buyerForm.purchaseFrequency=r),We(r)}),T()(),M(60,"div",67)(61,"label",72),I(62,"Preferred Payment Method"),T(),M(63,"input",87),ct("ngModelChange",function(r){Ge(t);let s=_e();return lt(s.buyerForm.preferredPaymentMethod,r)||(s.buyerForm.preferredPaymentMethod=r),We(r)}),T()(),M(64,"div",67)(65,"label",72),I(66,"Geo Latitude"),T(),M(67,"input",88),ct("ngModelChange",function(r){Ge(t);let s=_e();return lt(s.buyerForm.geoLat,r)||(s.buyerForm.geoLat=r),We(r)}),T()(),M(68,"div",67)(69,"label",72),I(70,"Geo Longitude"),T(),M(71,"input",89),ct("ngModelChange",function(r){Ge(t);let s=_e();return lt(s.buyerForm.geoLong,r)||(s.buyerForm.geoLong=r),We(r)}),T()(),M(72,"div",67)(73,"label",72),I(74,"Total Orders"),T(),M(75,"input",90),ct("ngModelChange",function(r){Ge(t);let s=_e();return lt(s.buyerForm.totalOrders,r)||(s.buyerForm.totalOrders=r),We(r)}),T()(),M(76,"div",67)(77,"label",72),I(78,"Total Spent"),T(),M(79,"input",91),ct("ngModelChange",function(r){Ge(t);let s=_e();return lt(s.buyerForm.totalSpent,r)||(s.buyerForm.totalSpent=r),We(r)}),T()(),M(80,"div",67)(81,"label",72),I(82,"Loyalty Points"),T(),M(83,"input",92),ct("ngModelChange",function(r){Ge(t);let s=_e();return lt(s.buyerForm.loyaltyPoints,r)||(s.buyerForm.loyaltyPoints=r),We(r)}),T()(),M(84,"div",67)(85,"label",72),I(86,"Buyer Rating"),T(),M(87,"input",93),ct("ngModelChange",function(r){Ge(t);let s=_e();return lt(s.buyerForm.buyerRating,r)||(s.buyerForm.buyerRating=r),We(r)}),T()(),M(88,"div",67)(89,"label",72),I(90,"Last Purchase Date"),T(),M(91,"input",94),ct("ngModelChange",function(r){Ge(t);let s=_e();return lt(s.buyerForm.lastPurchaseDate,r)||(s.buyerForm.lastPurchaseDate=r),We(r)}),T()(),M(92,"div",56)(93,"button",95),pe(94,"i",96),I(95," Save Buyer Profile "),T()()(),en()}if(i&2){let t=_e();z(7),at("ngModel",t.buyerForm.contactNumber),z(4),at("ngModel",t.buyerForm.alternateContact),z(4),at("ngModel",t.buyerForm.address),z(4),at("ngModel",t.buyerForm.city),z(4),at("ngModel",t.buyerForm.state),z(4),at("ngModel",t.buyerForm.pincode),z(4),at("ngModel",t.buyerForm.country),z(4),at("ngModel",t.buyerForm.companyName),z(4),at("ngModel",t.buyerForm.companyType),z(4),at("ngModel",t.buyerForm.gstNumber),z(4),at("ngModel",t.buyerForm.panNumber),z(4),at("ngModel",t.buyerForm.preferredCrops),z(4),at("ngModel",t.buyerForm.budgetRange),z(4),at("ngModel",t.buyerForm.purchaseFrequency),z(4),at("ngModel",t.buyerForm.preferredPaymentMethod),z(4),at("ngModel",t.buyerForm.geoLat),z(4),at("ngModel",t.buyerForm.geoLong),z(4),at("ngModel",t.buyerForm.totalOrders),z(4),at("ngModel",t.buyerForm.totalSpent),z(4),at("ngModel",t.buyerForm.loyaltyPoints),z(4),at("ngModel",t.buyerForm.buyerRating),z(4),at("ngModel",t.buyerForm.lastPurchaseDate)}}function Op(i,e){if(i&1){let t=Et();M(0,"div",97)(1,"p",98),I(2,"No products found for your account."),T(),M(3,"button",99),st("click",function(){Ge(t);let r=_e();return We(r.openBuyerForm())}),I(4," Register as Buyer "),T()()}}function kp(i,e){i&1&&(M(0,"div",100)(1,"h4",101),I(2,"You are not logged in."),T(),M(3,"p"),I(4,"Please log in to view your dashboard."),T()())}var Xo=class i{constructor(e,t,n,r,s,o,a){this.router=e;this.productService=t;this.userService=n;this.alertService=r;this.platformId=s;this.colorService=o;this.userInfo=a;this.router.events.pipe(Ir(l=>l instanceof Dr)).subscribe(()=>this.Collectlogindata())}profileImageUrl="";defaultProfileImage="images/profile.jpeg";products1=[];buyerData={isVerified:!1,alternateContact:"",emailVerified:!1,phoneVerified:!1,address:"",city:"",state:"",country:"",pincode:"",geoLat:0,geoLong:0,companyName:"",companyType:"",gstNumber:"",panNumber:"",preferredCrops:"",budgetRange:"",purchaseFrequency:"",preferredPaymentMethod:"",lastPurchaseDate:"",totalOrders:0,totalSpent:0,loyaltyPoints:0,buyerRating:0};buyerid=0;loginData={isLoggedIn:!1,userName:"",userRole:"",userEmail:"",userid:0};activeTab="personal";isLoggedIn=!1;showBuyerForm=!1;buyerForm={user_id:0,contactNumber:"",alternateContact:"",emailVerified:!0,phoneVerified:!1,address:"",city:"",state:"",country:"India",pincode:"",geoLat:0,geoLong:0,companyName:"",companyType:"",gstNumber:"",panNumber:"",isVerified:!1,preferredCrops:"",budgetRange:"",purchaseFrequency:"",preferredPaymentMethod:"",lastPurchaseDate:new Date,totalOrders:0,totalSpent:0,loyaltyPoints:0,buyerRating:5};farmerForm={phoneNumber:null,address:null,state:null,district:null,village:null,postalCode:null,landArea:null,farmingType:"Conventional",farmerId:null};farmerData={name:"",email:"",phoneNumber:"",address:"",state:"",district:"",village:"",postalCode:"",landArea:0,farmingType:"",status:""};submitFarmerForm(){let e=this.loginData.userEmail,t=this.loginData.userName,n=Number(this.loginData.userid);e&&t&&n?this.userService.getFarmerId(e,t).subscribe({next:r=>{this.farmerForm.farmerId=Number(r);let s=Xn(pt({},this.farmerForm),{userId:n});this.userService.saveFarmer(s).subscribe({next:o=>{o.success?this.alertService.handleBackendResponse(o):alert("Unexpected response"),o.success?this.alertService.handleBackendResponse(o):alert("Unexpected response")},error:o=>{this.alertService.showAlert("Error saving farmer:",o),this.alertService.showAlert("Error saving farmer data","error")}})},error:r=>{this.alertService.showAlert("Error fetching farmer ID:","error"),this.alertService.showAlert("Could not fetch farmer ID","error")}}):this.alertService.showAlert("User information is missing. Please login again.","error")}fetchFarmerData(){this.userService.getFarmerData().subscribe({next:e=>{this.farmerData=e,console.log("Farmer data retrieved:",this.farmerData)},error:e=>{this.alertService.showAlert("Error fetching farmer data:","error")}})}selectedColor="";ngOnInit(){if(qt(this.platformId)){if(this.loginData){this.loginData.userRole==="FARMER"?this.fetchFarmerData():this.loginData.userRole==="BUYER"&&this.fetchbuyer_id();let e=Number(this.userInfo.getUserId());e&&this.getProfileImage(e)}this.colorService.selectedColor$.subscribe(e=>{this.selectedColor=e})}}fetchbuyer_id(){this.userService.Getbuyerid(this.loginData.userid).subscribe({next:e=>{this.buyerid=e,console.log("\u2705 Buyer ID retrieved:",this.buyerid),this.buyerid?this.fetchBuyerData():this.alertService.showAlert("\u274C Buyer ID is null or undefined","error")},error:e=>{this.alertService.showAlert("Error fetching buyer ID:",e)}})}fetchBuyerData(){this.userService.GetBuyerById(this.buyerid).subscribe({next:e=>{this.buyerData=e,console.log("\u2705 Buyer data retrieved:",this.buyerData)},error:e=>{this.alertService.showAlert("Error fetching buyer data:",e)}})}Collectlogindata(){if(qt(this.platformId)){let e=this.userInfo.getToken();this.loginData={isLoggedIn:!!e,userName:this.userInfo.getUserName()||"",userRole:this.userInfo.getUserRole()||"",userEmail:this.userInfo.getUserEmail()||"",userid:this.userInfo.getUserId()||0};let t=this.loginData.userid,n=this.loginData.userEmail,r=this.loginData.userRole;t&&n&&(r==="FARMER"&&(this.getProducts(t,n),this.fetchFarmerData()),this.buyerForm.user_id=t)}}openBuyerForm(){this.showBuyerForm=!0}submitBuyerForm(){this.userService.registerAsBuyer(this.buyerForm).subscribe({next:e=>{this.alertService.showAlert("Buyer registered successfully:","success"),this.alertService.showAlert("You are now registered as a Buyer!","success"),this.showBuyerForm=!1},error:e=>{this.alertService.showAlert("Error registering buyer:",e),this.alertService.showAlert("Error registering buyer","error")}})}getProducts(e,t){this.productService.getProductByFarmerId(e,t).subscribe({next:n=>{this.products1=n,console.log("Products fetched:",this.products1)},error:n=>{this.alertService.showAlert("Error fetching products:",n)}})}saveProfileImage(e){if(qt(this.platformId)){let t=Number(this.userInfo.getUserId());t!==0&&e?this.userService.uploadProfileImage(e,t).subscribe({next:n=>{n.success?(this.alertService.showAlert("Profile image saved successfully.","success"),this.getProfileImage(t)):this.alertService.showAlert("Failed to save profile image.","error")},error:n=>{this.alertService.showAlert("Error saving profile image:",n)}}):this.alertService.showAlert("User ID is invalid or no file selected.","error")}}getProfileImage(e){this.userService.getProfileImage(e).subscribe({next:t=>{let n=new FileReader;n.onload=()=>{this.profileImageUrl=n.result},n.readAsDataURL(t)},error:t=>{console.error("Error fetching profile image:",t),this.profileImageUrl=this.defaultProfileImage}})}onFileSelect(e){let t=e.target.files[0];t&&this.saveProfileImage(t)}onEditProfile(){console.log("Edit Profile Clicked")}static \u0275fac=function(t){return new(t||i)(ke(An),ke(Bo),ke(Oo),ke($n),ke(hn),ke(nn),ke(In))};static \u0275cmp=Dt({type:i,selectors:[["app-profileview"]],decls:31,vars:16,consts:[["notLoggedIn",""],["noProducts",""],["farmerFormRef","ngForm"],[1,"container","mx-auto","p-4"],[1,"text-3xl","font-extrabold","text-green-800","mb-6","flex","items-center","gap-3"],[1,"bi","bi-person-badge-fill","text-green-600","text-2xl"],[1,"tracking-wide"],[1,"text-lime-600"],[1,"flex","flex-wrap","justify-start","gap-3","border-b","border-green-300","pb-3","mb-6"],[1,"px-6","py-2.5","rounded-full","text-sm","font-semibold","flex","items-center","gap-2","transition","duration-200","ease-in-out","focus:outline-none",3,"click","ngClass"],[1,"bi","bi-person-fill"],[1,"bi","bi-geo-alt-fill"],[4,"ngIf"],[1,"bi","bi-truck"],[1,"bi","bi-tree-fill"],[1,"bi","bi-basket-fill"],["class","container-fluid px-4 py-5",4,"ngIf","ngIfElse"],[1,"container-fluid","px-4","py-5"],[1,"row"],[1,"w-full","bg-white/80","dark:bg-gray-800/80","backdrop-blur-lg","rounded-3xl","shadow-xl","border","border-gray-200","dark:border-gray-700","p-8","mt-5"],[1,"grid","grid-cols-1","md:grid-cols-3","gap-8","items-center"],[1,"relative","mx-auto","md:mx-0","w-48","h-48","group"],["alt","Profile Image",1,"w-full","h-full","object-cover","rounded-full","border-4","border-white","shadow-lg","transition","duration-300","group-hover:brightness-75",3,"src"],[1,"absolute","inset-0","flex","items-center","justify-center","bg-black/50","rounded-full","opacity-0","group-hover:opacity-100","transition-opacity","duration-300"],[1,"text-white","cursor-pointer","flex","flex-col","items-center"],[1,"bi","bi-camera-fill","text-3xl","mb-1"],["type","file","hidden","",3,"change"],[1,"md:col-span-2","text-center","md:text-left","space-y-4"],[1,"text-3xl","font-bold","text-gray-800","dark:text-gray-100"],[1,"text-lg","text-gray-700","dark:text-gray-300","space-y-2"],[1,"font-medium","text-gray-900","dark:text-gray-100"],[1,"my-5"],[1,"alert","alert-warning","text-center","p-4","shadow-sm","rounded"],[1,"bi","bi-exclamation-triangle-fill","me-2"],[1,"text-3xl","font-semibold","mb-6","text-gray-800","dark:text-white"],[4,"ngIf","ngIfElse"],[1,"grid","grid-cols-1","md:grid-cols-2","gap-6"],["class","bg-white dark:bg-gray-800 shadow-lg rounded-3xl p-6 transition duration-300 hover:shadow-xl border border-gray-200 dark:border-gray-700",4,"ngFor","ngForOf"],[1,"bg-white","dark:bg-gray-800","shadow-lg","rounded-3xl","p-6","transition","duration-300","hover:shadow-xl","border","border-gray-200","dark:border-gray-700"],[1,"text-xl","font-bold","text-gray-800","dark:text-white","mb-2"],[1,"text-gray-700","dark:text-gray-300","space-y-1","text-sm","md:text-base"],[1,"font-medium"],[1,"inline-block","rounded-full","px-3","py-1","text-xs","font-semibold",3,"ngClass"],[1,"inline-block","px-3","py-1","text-xs","font-semibold","rounded-full",3,"ngClass"],[1,"mt-4","flex","flex-wrap","gap-3"],[1,"px-4","py-2","bg-blue-600","text-white","text-sm","rounded-xl","hover:bg-blue-700","transition"],[1,"px-4","py-2","bg-red-500","text-white","text-sm","rounded-xl","hover:bg-red-600","transition"],[1,"px-4","py-2","bg-green-600","text-white","text-sm","rounded-xl","hover:bg-green-700","transition"],[1,"text-center","text-gray-500","dark:text-gray-400","py-10"],[1,"text-lg"],["class","mt-10",4,"ngIf"],[1,"grid","grid-cols-1","sm:grid-cols-2","md:grid-cols-3","gap-6"],[4,"ngFor","ngForOf"],[1,"card","shadow","border-0","rounded-4","p-4","my-5"],[1,"mb-4","text-center","fw-bold","text-success"],["novalidate","",1,"row","g-3","needs-validation",3,"ngSubmit"],[1,"col-12","text-center","mt-3"],["type","submit",1,"btn","px-5","py-2","fs-5","rounded-pill","shadow-sm","text-white","border-0",3,"ngStyle"],[1,"bi","bi-check-circle","me-2"],[1,"mt-10"],[1,"flex","items-center","justify-between","mb-6"],[1,"text-3xl","font-semibold","text-gray-800","dark:text-white"],[1,"bg-green-600","hover:bg-green-700","text-white","px-5","py-2","rounded-lg","shadow-md","transition","duration-300",3,"click"],[1,"bi","bi-pencil-square","mr-2"],[1,"bg-white","dark:bg-gray-800","border","border-gray-200","dark:border-gray-700","rounded-2xl","shadow-sm","p-4","transition","duration-300","hover:shadow-md"],[1,"text-sm","text-gray-500","dark:text-gray-400","uppercase","tracking-wide","font-medium"],[1,"mt-1","text-lg","font-semibold","text-gray-800","dark:text-white"],[1,"col-md-4"],[1,"form-label","fw-semibold"],["required","",1,"form-control","rounded-3",3,"ngModelChange","ngModel","name","type"],[1,"mb-4"],[1,"row","g-3",3,"ngSubmit"],[1,"form-label"],["name","contactNumber","required","",1,"form-control",3,"ngModelChange","ngModel"],["name","alternateContact",1,"form-control",3,"ngModelChange","ngModel"],["name","address","required","",1,"form-control",3,"ngModelChange","ngModel"],["name","city",1,"form-control",3,"ngModelChange","ngModel"],["name","state",1,"form-control",3,"ngModelChange","ngModel"],["name","pincode",1,"form-control",3,"ngModelChange","ngModel"],["name","country",1,"form-control",3,"ngModelChange","ngModel"],["name","companyName",1,"form-control",3,"ngModelChange","ngModel"],["name","companyType",1,"form-control",3,"ngModelChange","ngModel"],["name","gstNumber",1,"form-control",3,"ngModelChange","ngModel"],["name","panNumber",1,"form-control",3,"ngModelChange","ngModel"],["name","preferredCrops",1,"form-control",3,"ngModelChange","ngModel"],["name","budgetRange",1,"form-control",3,"ngModelChange","ngModel"],["name","purchaseFrequency",1,"form-control",3,"ngModelChange","ngModel"],["name","preferredPaymentMethod",1,"form-control",3,"ngModelChange","ngModel"],["type","number","name","geoLat",1,"form-control",3,"ngModelChange","ngModel"],["type","number","name","geoLong",1,"form-control",3,"ngModelChange","ngModel"],["type","number","name","totalOrders",1,"form-control",3,"ngModelChange","ngModel"],["type","number","name","totalSpent",1,"form-control",3,"ngModelChange","ngModel"],["type","number","name","loyaltyPoints",1,"form-control",3,"ngModelChange","ngModel"],["type","number","name","buyerRating","step","0.1",1,"form-control",3,"ngModelChange","ngModel"],["type","date","name","lastPurchaseDate",1,"form-control",3,"ngModelChange","ngModel"],["type","submit",1,"btn","btn-primary","px-5","py-2","fs-5","rounded-pill","shadow-sm"],[1,"bi","bi-save2","me-2"],[1,"text-center","my-4"],[1,"text-muted"],[1,"btn","btn-outline-primary",3,"click"],[1,"text-center","mt-5"],[1,"text-danger"]],template:function(t,n){if(t&1){let r=Et();M(0,"div",3)(1,"h2",4),pe(2,"i",5),M(3,"span",6),I(4,"My "),M(5,"span",7),I(6,"AgriMandi"),T(),I(7," Profile"),T()()(),M(8,"div",8)(9,"button",9),st("click",function(){return Ge(r),We(n.activeTab="personal")}),pe(10,"i",10),M(11,"span"),I(12,"My Profile"),T()(),M(13,"button",9),st("click",function(){return Ge(r),We(n.activeTab="address")}),pe(14,"i",11),M(15,"span"),I(16,"Farm Address"),T()(),$e(17,wp,9,8,"ng-container",12),M(18,"button",9),st("click",function(){return Ge(r),We(n.activeTab="orders")}),pe(19,"i",13),M(20,"span"),I(21,"Order Requests"),T()()(),$e(22,Tp,2,2,"div",12)(23,Cp,3,0,"ng-template",null,0,Ci)(25,Up,3,2,"ng-container",12)(26,Bp,96,22,"ng-container",12)(27,Op,5,0,"ng-template",null,1,Ci)(29,kp,5,0,"ng-template",null,0,Ci)}t&2&&(z(9),re("ngClass",pn(7,Ms,n.activeTab==="personal",n.activeTab!=="personal")),z(4),re("ngClass",pn(10,Ms,n.activeTab==="address",n.activeTab!=="address")),z(4),re("ngIf",n.loginData.userRole==="FARMER"),z(),re("ngClass",pn(13,Ms,n.activeTab==="orders",n.activeTab!=="orders")),z(4),re("ngIf",n.activeTab==="personal"),z(3),re("ngIf",n.loginData.userRole==="FARMER"),z(),re("ngIf",n.loginData.userRole==="BUYER"||n.showBuyerForm))},dependencies:[Xt,qn,Yn,Cn,jn,Li,Di,Ri,Do,Ii,Pi,Fr,Nr,Lr],encapsulation:2})};var Su=[{path:"",component:Ho},{path:"auth/signup",component:zo},{path:"auth/login",component:Wo},{path:"components/product",component:Go,canActivate:[Yt]},{path:"components/profileview",component:Xo,canActivate:[Yt]},{path:"products",loadComponent:()=>import("./chunk-X5SUU4TN.js").then(i=>i.ProductinventoryComponent),canActivate:[Yt]},{path:"products/:productid",loadComponent:()=>import("./chunk-X5SUU4TN.js").then(i=>i.ProductinventoryComponent),canActivate:[Yt],renderMode:"blocking"},{path:"buyer",loadComponent:()=>import("./chunk-BTXNA4O4.js").then(i=>i.BuyerComponent),canActivate:[Yt]},{path:"buyer/:buyerid",loadComponent:()=>import("./chunk-BTXNA4O4.js").then(i=>i.BuyerComponent),canActivate:[Yt],renderMode:"blocking"},{path:"notifications",loadComponent:()=>import("./chunk-726CD62J.js").then(i=>i.NotificationComponent),canActivate:[Yt],renderMode:"blocking"},{path:"orders",loadComponent:()=>import("./chunk-6IEX2BPS.js").then(i=>i.OrdersComponent),canActivate:[Yt],renderMode:"blocking"},{path:"payments",loadComponent:()=>import("./chunk-BFH36K67.js").then(i=>i.PaymentsComponent),canActivate:[Yt],renderMode:"blocking"},{path:"messages",loadComponent:()=>import("./chunk-GMNHW2CY.js").then(i=>i.MessageComponent),canActivate:[Yt],renderMode:"blocking"},{path:"help-center",loadComponent:()=>import("./chunk-63BC6AKW.js").then(i=>i.HelpCenterComponent),canActivate:[Yt],renderMode:"blocking"},{path:"dashboard",loadComponent:()=>import("./chunk-WIQRR7SW.js").then(i=>i.DashboardComponent),canActivate:[Yt],renderMode:"blocking"},{path:"farmers",loadComponent:()=>import("./chunk-7QUZV5FX.js").then(i=>i.FarmersComponent),canActivate:[Yt],renderMode:"blocking"},{path:"reports",loadComponent:()=>import("./chunk-7TN3GWLE.js").then(i=>i.ReportsComponent),canActivate:[Yt],renderMode:"blocking"},{path:"settings",loadComponent:()=>import("./chunk-LUERXDRZ.js").then(i=>i.SettingComponent),canActivate:[Yt],renderMode:"blocking"},{path:"**",redirectTo:""}];var Mu={providers:[ou({eventCoalescing:!0}),fu(Su),hu(),au(lu([])),eu(Li,Uo)]};var rn=class{sidebarVisibleSubject=new Mo(!1);sidebarVisible$=this.sidebarVisibleSubject.asObservable();setSidebarVisible(e){this.sidebarVisibleSubject.next(e)}toggleSidebar(){this.sidebarVisibleSubject.next(!this.sidebarVisibleSubject.value)}getSidebarVisible(){return this.sidebarVisibleSubject.value}};uc(rn,"\u0275fac",function(t){return new(t||rn)}),uc(rn,"\u0275prov",Tn({token:rn,factory:rn.\u0275fac,providedIn:"root"})),rn=Zh([tu({providedIn:"root"})],rn);var mn=class extends Error{constructor(e,t){let n=new.target.prototype;super(`${e}: Status code '${t}'`),this.statusCode=t,this.__proto__=n}},Ui=class extends Error{constructor(e="A timeout occurred."){let t=new.target.prototype;super(e),this.__proto__=t}},jt=class extends Error{constructor(e="An abort occurred."){let t=new.target.prototype;super(e),this.__proto__=t}},qo=class extends Error{constructor(e,t){let n=new.target.prototype;super(e),this.transport=t,this.errorType="UnsupportedTransportError",this.__proto__=n}},Yo=class extends Error{constructor(e,t){let n=new.target.prototype;super(e),this.transport=t,this.errorType="DisabledTransportError",this.__proto__=n}},jo=class extends Error{constructor(e,t){let n=new.target.prototype;super(e),this.transport=t,this.errorType="FailedToStartTransportError",this.__proto__=n}},ws=class extends Error{constructor(e){let t=new.target.prototype;super(e),this.errorType="FailedToNegotiateWithServerError",this.__proto__=t}},$o=class extends Error{constructor(e,t){let n=new.target.prototype;super(e),this.innerErrors=t,this.__proto__=n}};var Or=class{constructor(e,t,n){this.statusCode=e,this.statusText=t,this.content=n}},Jn=class{get(e,t){return this.send(Xn(pt({},t),{method:"GET",url:e}))}post(e,t){return this.send(Xn(pt({},t),{method:"POST",url:e}))}delete(e,t){return this.send(Xn(pt({},t),{method:"DELETE",url:e}))}getCookieString(e){return""}};var j=function(i){return i[i.Trace=0]="Trace",i[i.Debug=1]="Debug",i[i.Information=2]="Information",i[i.Warning=3]="Warning",i[i.Error=4]="Error",i[i.Critical=5]="Critical",i[i.None=6]="None",i}(j||{});var Zn=class{constructor(){}log(e,t){}};Zn.instance=new Zn;var zp="8.0.7",vt=class{static isRequired(e,t){if(e==null)throw new Error(`The '${t}' argument is required.`)}static isNotEmpty(e,t){if(!e||e.match(/^\s*$/))throw new Error(`The '${t}' argument should not be empty.`)}static isIn(e,t,n){if(!(e in t))throw new Error(`Unknown ${n} value: ${e}.`)}},yt=class i{static get isBrowser(){return!i.isNode&&typeof window=="object"&&typeof window.document=="object"}static get isWebWorker(){return!i.isNode&&typeof self=="object"&&"importScripts"in self}static get isReactNative(){return!i.isNode&&typeof window=="object"&&typeof window.document>"u"}static get isNode(){return typeof process<"u"&&process.release&&process.release.name==="node"}};function Bi(i,e){let t="";return On(i)?(t=`Binary data of length ${i.byteLength}`,e&&(t+=`. Content: '${Vp(i)}'`)):typeof i=="string"&&(t=`String data of length ${i.length}`,e&&(t+=`. Content: '${i}'`)),t}function Vp(i){let e=new Uint8Array(i),t="";return e.forEach(n=>{let r=n<16?"0":"";t+=`0x${r}${n.toString(16)} `}),t.substr(0,t.length-1)}function On(i){return i&&typeof ArrayBuffer<"u"&&(i instanceof ArrayBuffer||i.constructor&&i.constructor.name==="ArrayBuffer")}function Jo(i,e,t,n,r,s){return nt(this,null,function*(){let o={},[a,l]=Qn();o[a]=l,i.log(j.Trace,`(${e} transport) sending data. ${Bi(r,s.logMessageContent)}.`);let c=On(r)?"arraybuffer":"text",h=yield t.post(n,{content:r,headers:pt(pt({},o),s.headers),responseType:c,timeout:s.timeout,withCredentials:s.withCredentials});i.log(j.Trace,`(${e} transport) request complete. Response status: ${h.statusCode}.`)})}function wu(i){return i===void 0?new ar(j.Information):i===null?Zn.instance:i.log!==void 0?i:new ar(i)}var Ko=class{constructor(e,t){this._subject=e,this._observer=t}dispose(){let e=this._subject.observers.indexOf(this._observer);e>-1&&this._subject.observers.splice(e,1),this._subject.observers.length===0&&this._subject.cancelCallback&&this._subject.cancelCallback().catch(t=>{})}},ar=class{constructor(e){this._minLevel=e,this.out=console}log(e,t){if(e>=this._minLevel){let n=`[${new Date().toISOString()}] ${j[e]}: ${t}`;switch(e){case j.Critical:case j.Error:this.out.error(n);break;case j.Warning:this.out.warn(n);break;case j.Information:this.out.info(n);break;default:this.out.log(n);break}}}};function Qn(){let i="X-SignalR-User-Agent";return yt.isNode&&(i="User-Agent"),[i,Hp(zp,Gp(),Xp(),Wp())]}function Hp(i,e,t,n){let r="Microsoft SignalR/",s=i.split(".");return r+=`${s[0]}.${s[1]}`,r+=` (${i}; `,e&&e!==""?r+=`${e}; `:r+="Unknown OS; ",r+=`${t}`,n?r+=`; ${n}`:r+="; Unknown Runtime Version",r+=")",r}function Gp(){if(yt.isNode)switch(process.platform){case"win32":return"Windows NT";case"darwin":return"macOS";case"linux":return"Linux";default:return process.platform}else return""}function Wp(){if(yt.isNode)return process.versions.node}function Xp(){return yt.isNode?"NodeJS":"Browser"}function Zo(i){return i.stack?i.stack:i.message?i.message:`${i}`}function Eu(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("could not find global")}var Qo=class extends Jn{constructor(e){if(super(),this._logger=e,typeof fetch>"u"||yt.isNode){let t=typeof __webpack_require__=="function"?__non_webpack_require__:Rr;this._jar=new(t("tough-cookie")).CookieJar,typeof fetch>"u"?this._fetchType=t("node-fetch"):this._fetchType=fetch,this._fetchType=t("fetch-cookie")(this._fetchType,this._jar)}else this._fetchType=fetch.bind(Eu());if(typeof AbortController>"u"){let t=typeof __webpack_require__=="function"?__non_webpack_require__:Rr;this._abortControllerType=t("abort-controller")}else this._abortControllerType=AbortController}send(e){return nt(this,null,function*(){if(e.abortSignal&&e.abortSignal.aborted)throw new jt;if(!e.method)throw new Error("No method defined.");if(!e.url)throw new Error("No url defined.");let t=new this._abortControllerType,n;e.abortSignal&&(e.abortSignal.onabort=()=>{t.abort(),n=new jt});let r=null;if(e.timeout){let l=e.timeout;r=setTimeout(()=>{t.abort(),this._logger.log(j.Warning,"Timeout from HTTP request."),n=new Ui},l)}e.content===""&&(e.content=void 0),e.content&&(e.headers=e.headers||{},On(e.content)?e.headers["Content-Type"]="application/octet-stream":e.headers["Content-Type"]="text/plain;charset=UTF-8");let s;try{s=yield this._fetchType(e.url,{body:e.content,cache:"no-cache",credentials:e.withCredentials===!0?"include":"same-origin",headers:pt({"X-Requested-With":"XMLHttpRequest"},e.headers),method:e.method,mode:"cors",redirect:"follow",signal:t.signal})}catch(l){throw n||(this._logger.log(j.Warning,`Error from HTTP request. ${l}.`),l)}finally{r&&clearTimeout(r),e.abortSignal&&(e.abortSignal.onabort=null)}if(!s.ok){let l=yield Tu(s,"text");throw new mn(l||s.statusText,s.status)}let a=yield Tu(s,e.responseType);return new Or(s.status,s.statusText,a)})}getCookieString(e){let t="";return yt.isNode&&this._jar&&this._jar.getCookies(e,(n,r)=>t=r.join("; ")),t}};function Tu(i,e){let t;switch(e){case"arraybuffer":t=i.arrayBuffer();break;case"text":t=i.text();break;case"blob":case"document":case"json":throw new Error(`${e} is not supported.`);default:t=i.text();break}return t}var ea=class extends Jn{constructor(e){super(),this._logger=e}send(e){return e.abortSignal&&e.abortSignal.aborted?Promise.reject(new jt):e.method?e.url?new Promise((t,n)=>{let r=new XMLHttpRequest;r.open(e.method,e.url,!0),r.withCredentials=e.withCredentials===void 0?!0:e.withCredentials,r.setRequestHeader("X-Requested-With","XMLHttpRequest"),e.content===""&&(e.content=void 0),e.content&&(On(e.content)?r.setRequestHeader("Content-Type","application/octet-stream"):r.setRequestHeader("Content-Type","text/plain;charset=UTF-8"));let s=e.headers;s&&Object.keys(s).forEach(o=>{r.setRequestHeader(o,s[o])}),e.responseType&&(r.responseType=e.responseType),e.abortSignal&&(e.abortSignal.onabort=()=>{r.abort(),n(new jt)}),e.timeout&&(r.timeout=e.timeout),r.onload=()=>{e.abortSignal&&(e.abortSignal.onabort=null),r.status>=200&&r.status<300?t(new Or(r.status,r.statusText,r.response||r.responseText)):n(new mn(r.response||r.responseText||r.statusText,r.status))},r.onerror=()=>{this._logger.log(j.Warning,`Error from HTTP request. ${r.status}: ${r.statusText}.`),n(new mn(r.statusText,r.status))},r.ontimeout=()=>{this._logger.log(j.Warning,"Timeout from HTTP request."),n(new Ui)},r.send(e.content)}):Promise.reject(new Error("No url defined.")):Promise.reject(new Error("No method defined."))}};var ta=class extends Jn{constructor(e){if(super(),typeof fetch<"u"||yt.isNode)this._httpClient=new Qo(e);else if(typeof XMLHttpRequest<"u")this._httpClient=new ea(e);else throw new Error("No usable HttpClient found.")}send(e){return e.abortSignal&&e.abortSignal.aborted?Promise.reject(new jt):e.method?e.url?this._httpClient.send(e):Promise.reject(new Error("No url defined.")):Promise.reject(new Error("No method defined."))}getCookieString(e){return this._httpClient.getCookieString(e)}};var gn=class i{static write(e){return`${e}${i.RecordSeparator}`}static parse(e){if(e[e.length-1]!==i.RecordSeparator)throw new Error("Message is incomplete.");let t=e.split(i.RecordSeparator);return t.pop(),t}};gn.RecordSeparatorCode=30;gn.RecordSeparator=String.fromCharCode(gn.RecordSeparatorCode);var na=class{writeHandshakeRequest(e){return gn.write(JSON.stringify(e))}parseHandshakeResponse(e){let t,n;if(On(e)){let a=new Uint8Array(e),l=a.indexOf(gn.RecordSeparatorCode);if(l===-1)throw new Error("Message is incomplete.");let c=l+1;t=String.fromCharCode.apply(null,Array.prototype.slice.call(a.slice(0,c))),n=a.byteLength>c?a.slice(c).buffer:null}else{let a=e,l=a.indexOf(gn.RecordSeparator);if(l===-1)throw new Error("Message is incomplete.");let c=l+1;t=a.substring(0,c),n=a.length>c?a.substring(c):null}let r=gn.parse(t),s=JSON.parse(r[0]);if(s.type)throw new Error("Expected a handshake response from the server.");return[n,s]}};var Ze=function(i){return i[i.Invocation=1]="Invocation",i[i.StreamItem=2]="StreamItem",i[i.Completion=3]="Completion",i[i.StreamInvocation=4]="StreamInvocation",i[i.CancelInvocation=5]="CancelInvocation",i[i.Ping=6]="Ping",i[i.Close=7]="Close",i[i.Ack=8]="Ack",i[i.Sequence=9]="Sequence",i}(Ze||{});var ia=class{constructor(){this.observers=[]}next(e){for(let t of this.observers)t.next(e)}error(e){for(let t of this.observers)t.error&&t.error(e)}complete(){for(let e of this.observers)e.complete&&e.complete()}subscribe(e){return this.observers.push(e),new Ko(this,e)}};var ra=class{constructor(e,t,n){this._bufferSize=1e5,this._messages=[],this._totalMessageCount=0,this._waitForSequenceMessage=!1,this._nextReceivingSequenceId=1,this._latestReceivedSequenceId=0,this._bufferedByteCount=0,this._reconnectInProgress=!1,this._protocol=e,this._connection=t,this._bufferSize=n}_send(e){return nt(this,null,function*(){let t=this._protocol.writeMessage(e),n=Promise.resolve();if(this._isInvocationMessage(e)){this._totalMessageCount++;let r=()=>{},s=()=>{};On(t)?this._bufferedByteCount+=t.byteLength:this._bufferedByteCount+=t.length,this._bufferedByteCount>=this._bufferSize&&(n=new Promise((o,a)=>{r=o,s=a})),this._messages.push(new bc(t,this._totalMessageCount,r,s))}try{this._reconnectInProgress||(yield this._connection.send(t))}catch{this._disconnected()}yield n})}_ack(e){let t=-1;for(let n=0;n<this._messages.length;n++){let r=this._messages[n];if(r._id<=e.sequenceId)t=n,On(r._message)?this._bufferedByteCount-=r._message.byteLength:this._bufferedByteCount-=r._message.length,r._resolver();else if(this._bufferedByteCount<this._bufferSize)r._resolver();else break}t!==-1&&(this._messages=this._messages.slice(t+1))}_shouldProcessMessage(e){if(this._waitForSequenceMessage)return e.type!==Ze.Sequence?!1:(this._waitForSequenceMessage=!1,!0);if(!this._isInvocationMessage(e))return!0;let t=this._nextReceivingSequenceId;return this._nextReceivingSequenceId++,t<=this._latestReceivedSequenceId?(t===this._latestReceivedSequenceId&&this._ackTimer(),!1):(this._latestReceivedSequenceId=t,this._ackTimer(),!0)}_resetSequence(e){if(e.sequenceId>this._nextReceivingSequenceId){this._connection.stop(new Error("Sequence ID greater than amount of messages we've received."));return}this._nextReceivingSequenceId=e.sequenceId}_disconnected(){this._reconnectInProgress=!0,this._waitForSequenceMessage=!0}_resend(){return nt(this,null,function*(){let e=this._messages.length!==0?this._messages[0]._id:this._totalMessageCount+1;yield this._connection.send(this._protocol.writeMessage({type:Ze.Sequence,sequenceId:e}));let t=this._messages;for(let n of t)yield this._connection.send(n._message);this._reconnectInProgress=!1})}_dispose(e){e??(e=new Error("Unable to reconnect to server."));for(let t of this._messages)t._rejector(e)}_isInvocationMessage(e){switch(e.type){case Ze.Invocation:case Ze.StreamItem:case Ze.Completion:case Ze.StreamInvocation:case Ze.CancelInvocation:return!0;case Ze.Close:case Ze.Sequence:case Ze.Ping:case Ze.Ack:return!1}}_ackTimer(){this._ackTimerHandle===void 0&&(this._ackTimerHandle=setTimeout(()=>nt(this,null,function*(){try{this._reconnectInProgress||(yield this._connection.send(this._protocol.writeMessage({type:Ze.Ack,sequenceId:this._latestReceivedSequenceId})))}catch{}clearTimeout(this._ackTimerHandle),this._ackTimerHandle=void 0}),1e3))}},bc=class{constructor(e,t,n,r){this._message=e,this._id=t,this._resolver=n,this._rejector=r}};var qp=30*1e3,Yp=15*1e3,jp=1e5,Ct=function(i){return i.Disconnected="Disconnected",i.Connecting="Connecting",i.Connected="Connected",i.Disconnecting="Disconnecting",i.Reconnecting="Reconnecting",i}(Ct||{}),sa=class i{static create(e,t,n,r,s,o,a){return new i(e,t,n,r,s,o,a)}constructor(e,t,n,r,s,o,a){this._nextKeepAlive=0,this._freezeEventListener=()=>{this._logger.log(j.Warning,"The page is being frozen, this will likely lead to the connection being closed and messages being lost. For more information see the docs at https://learn.microsoft.com/aspnet/core/signalr/javascript-client#bsleep")},vt.isRequired(e,"connection"),vt.isRequired(t,"logger"),vt.isRequired(n,"protocol"),this.serverTimeoutInMilliseconds=s??qp,this.keepAliveIntervalInMilliseconds=o??Yp,this._statefulReconnectBufferSize=a??jp,this._logger=t,this._protocol=n,this.connection=e,this._reconnectPolicy=r,this._handshakeProtocol=new na,this.connection.onreceive=l=>this._processIncomingData(l),this.connection.onclose=l=>this._connectionClosed(l),this._callbacks={},this._methods={},this._closedCallbacks=[],this._reconnectingCallbacks=[],this._reconnectedCallbacks=[],this._invocationId=0,this._receivedHandshakeResponse=!1,this._connectionState=Ct.Disconnected,this._connectionStarted=!1,this._cachedPingMessage=this._protocol.writeMessage({type:Ze.Ping})}get state(){return this._connectionState}get connectionId(){return this.connection&&this.connection.connectionId||null}get baseUrl(){return this.connection.baseUrl||""}set baseUrl(e){if(this._connectionState!==Ct.Disconnected&&this._connectionState!==Ct.Reconnecting)throw new Error("The HubConnection must be in the Disconnected or Reconnecting state to change the url.");if(!e)throw new Error("The HubConnection url must be a valid url.");this.connection.baseUrl=e}start(){return this._startPromise=this._startWithStateTransitions(),this._startPromise}_startWithStateTransitions(){return nt(this,null,function*(){if(this._connectionState!==Ct.Disconnected)return Promise.reject(new Error("Cannot start a HubConnection that is not in the 'Disconnected' state."));this._connectionState=Ct.Connecting,this._logger.log(j.Debug,"Starting HubConnection.");try{yield this._startInternal(),yt.isBrowser&&window.document.addEventListener("freeze",this._freezeEventListener),this._connectionState=Ct.Connected,this._connectionStarted=!0,this._logger.log(j.Debug,"HubConnection connected successfully.")}catch(e){return this._connectionState=Ct.Disconnected,this._logger.log(j.Debug,`HubConnection failed to start successfully because of error '${e}'.`),Promise.reject(e)}})}_startInternal(){return nt(this,null,function*(){this._stopDuringStartError=void 0,this._receivedHandshakeResponse=!1;let e=new Promise((t,n)=>{this._handshakeResolver=t,this._handshakeRejecter=n});yield this.connection.start(this._protocol.transferFormat);try{let t=this._protocol.version;this.connection.features.reconnect||(t=1);let n={protocol:this._protocol.name,version:t};if(this._logger.log(j.Debug,"Sending handshake request."),yield this._sendMessage(this._handshakeProtocol.writeHandshakeRequest(n)),this._logger.log(j.Information,`Using HubProtocol '${this._protocol.name}'.`),this._cleanupTimeout(),this._resetTimeoutPeriod(),this._resetKeepAliveInterval(),yield e,this._stopDuringStartError)throw this._stopDuringStartError;(this.connection.features.reconnect||!1)&&(this._messageBuffer=new ra(this._protocol,this.connection,this._statefulReconnectBufferSize),this.connection.features.disconnected=this._messageBuffer._disconnected.bind(this._messageBuffer),this.connection.features.resend=()=>{if(this._messageBuffer)return this._messageBuffer._resend()}),this.connection.features.inherentKeepAlive||(yield this._sendMessage(this._cachedPingMessage))}catch(t){throw this._logger.log(j.Debug,`Hub handshake failed with error '${t}' during start(). Stopping HubConnection.`),this._cleanupTimeout(),this._cleanupPingTimer(),yield this.connection.stop(t),t}})}stop(){return nt(this,null,function*(){let e=this._startPromise;this.connection.features.reconnect=!1,this._stopPromise=this._stopInternal(),yield this._stopPromise;try{yield e}catch{}})}_stopInternal(e){if(this._connectionState===Ct.Disconnected)return this._logger.log(j.Debug,`Call to HubConnection.stop(${e}) ignored because it is already in the disconnected state.`),Promise.resolve();if(this._connectionState===Ct.Disconnecting)return this._logger.log(j.Debug,`Call to HttpConnection.stop(${e}) ignored because the connection is already in the disconnecting state.`),this._stopPromise;let t=this._connectionState;return this._connectionState=Ct.Disconnecting,this._logger.log(j.Debug,"Stopping HubConnection."),this._reconnectDelayHandle?(this._logger.log(j.Debug,"Connection stopped during reconnect delay. Done reconnecting."),clearTimeout(this._reconnectDelayHandle),this._reconnectDelayHandle=void 0,this._completeClose(),Promise.resolve()):(t===Ct.Connected&&this._sendCloseMessage(),this._cleanupTimeout(),this._cleanupPingTimer(),this._stopDuringStartError=e||new jt("The connection was stopped before the hub handshake could complete."),this.connection.stop(e))}_sendCloseMessage(){return nt(this,null,function*(){try{yield this._sendWithProtocol(this._createCloseMessage())}catch{}})}stream(e,...t){let[n,r]=this._replaceStreamingParams(t),s=this._createStreamInvocation(e,t,r),o,a=new ia;return a.cancelCallback=()=>{let l=this._createCancelInvocation(s.invocationId);return delete this._callbacks[s.invocationId],o.then(()=>this._sendWithProtocol(l))},this._callbacks[s.invocationId]=(l,c)=>{if(c){a.error(c);return}else l&&(l.type===Ze.Completion?l.error?a.error(new Error(l.error)):a.complete():a.next(l.item))},o=this._sendWithProtocol(s).catch(l=>{a.error(l),delete this._callbacks[s.invocationId]}),this._launchStreams(n,o),a}_sendMessage(e){return this._resetKeepAliveInterval(),this.connection.send(e)}_sendWithProtocol(e){return this._messageBuffer?this._messageBuffer._send(e):this._sendMessage(this._protocol.writeMessage(e))}send(e,...t){let[n,r]=this._replaceStreamingParams(t),s=this._sendWithProtocol(this._createInvocation(e,t,!0,r));return this._launchStreams(n,s),s}invoke(e,...t){let[n,r]=this._replaceStreamingParams(t),s=this._createInvocation(e,t,!1,r);return new Promise((a,l)=>{this._callbacks[s.invocationId]=(h,u)=>{if(u){l(u);return}else h&&(h.type===Ze.Completion?h.error?l(new Error(h.error)):a(h.result):l(new Error(`Unexpected message type: ${h.type}`)))};let c=this._sendWithProtocol(s).catch(h=>{l(h),delete this._callbacks[s.invocationId]});this._launchStreams(n,c)})}on(e,t){!e||!t||(e=e.toLowerCase(),this._methods[e]||(this._methods[e]=[]),this._methods[e].indexOf(t)===-1&&this._methods[e].push(t))}off(e,t){if(!e)return;e=e.toLowerCase();let n=this._methods[e];if(n)if(t){let r=n.indexOf(t);r!==-1&&(n.splice(r,1),n.length===0&&delete this._methods[e])}else delete this._methods[e]}onclose(e){e&&this._closedCallbacks.push(e)}onreconnecting(e){e&&this._reconnectingCallbacks.push(e)}onreconnected(e){e&&this._reconnectedCallbacks.push(e)}_processIncomingData(e){if(this._cleanupTimeout(),this._receivedHandshakeResponse||(e=this._processHandshakeResponse(e),this._receivedHandshakeResponse=!0),e){let t=this._protocol.parseMessages(e,this._logger);for(let n of t)if(!(this._messageBuffer&&!this._messageBuffer._shouldProcessMessage(n)))switch(n.type){case Ze.Invocation:this._invokeClientMethod(n).catch(r=>{this._logger.log(j.Error,`Invoke client method threw error: ${Zo(r)}`)});break;case Ze.StreamItem:case Ze.Completion:{let r=this._callbacks[n.invocationId];if(r){n.type===Ze.Completion&&delete this._callbacks[n.invocationId];try{r(n)}catch(s){this._logger.log(j.Error,`Stream callback threw error: ${Zo(s)}`)}}break}case Ze.Ping:break;case Ze.Close:{this._logger.log(j.Information,"Close message received from server.");let r=n.error?new Error("Server returned an error on close: "+n.error):void 0;n.allowReconnect===!0?this.connection.stop(r):this._stopPromise=this._stopInternal(r);break}case Ze.Ack:this._messageBuffer&&this._messageBuffer._ack(n);break;case Ze.Sequence:this._messageBuffer&&this._messageBuffer._resetSequence(n);break;default:this._logger.log(j.Warning,`Invalid message type: ${n.type}.`);break}}this._resetTimeoutPeriod()}_processHandshakeResponse(e){let t,n;try{[n,t]=this._handshakeProtocol.parseHandshakeResponse(e)}catch(r){let s="Error parsing handshake response: "+r;this._logger.log(j.Error,s);let o=new Error(s);throw this._handshakeRejecter(o),o}if(t.error){let r="Server returned handshake error: "+t.error;this._logger.log(j.Error,r);let s=new Error(r);throw this._handshakeRejecter(s),s}else this._logger.log(j.Debug,"Server handshake complete.");return this._handshakeResolver(),n}_resetKeepAliveInterval(){this.connection.features.inherentKeepAlive||(this._nextKeepAlive=new Date().getTime()+this.keepAliveIntervalInMilliseconds,this._cleanupPingTimer())}_resetTimeoutPeriod(){if((!this.connection.features||!this.connection.features.inherentKeepAlive)&&(this._timeoutHandle=setTimeout(()=>this.serverTimeout(),this.serverTimeoutInMilliseconds),this._pingServerHandle===void 0)){let e=this._nextKeepAlive-new Date().getTime();e<0&&(e=0),this._pingServerHandle=setTimeout(()=>nt(this,null,function*(){if(this._connectionState===Ct.Connected)try{yield this._sendMessage(this._cachedPingMessage)}catch{this._cleanupPingTimer()}}),e)}}serverTimeout(){this.connection.stop(new Error("Server timeout elapsed without receiving a message from the server."))}_invokeClientMethod(e){return nt(this,null,function*(){let t=e.target.toLowerCase(),n=this._methods[t];if(!n){this._logger.log(j.Warning,`No client method with the name '${t}' found.`),e.invocationId&&(this._logger.log(j.Warning,`No result given for '${t}' method and invocation ID '${e.invocationId}'.`),yield this._sendWithProtocol(this._createCompletionMessage(e.invocationId,"Client didn't provide a result.",null)));return}let r=n.slice(),s=!!e.invocationId,o,a,l;for(let c of r)try{let h=o;o=yield c.apply(this,e.arguments),s&&o&&h&&(this._logger.log(j.Error,`Multiple results provided for '${t}'. Sending error to server.`),l=this._createCompletionMessage(e.invocationId,"Client provided multiple results.",null)),a=void 0}catch(h){a=h,this._logger.log(j.Error,`A callback for the method '${t}' threw error '${h}'.`)}l?yield this._sendWithProtocol(l):s?(a?l=this._createCompletionMessage(e.invocationId,`${a}`,null):o!==void 0?l=this._createCompletionMessage(e.invocationId,null,o):(this._logger.log(j.Warning,`No result given for '${t}' method and invocation ID '${e.invocationId}'.`),l=this._createCompletionMessage(e.invocationId,"Client didn't provide a result.",null)),yield this._sendWithProtocol(l)):o&&this._logger.log(j.Error,`Result given for '${t}' method but server is not expecting a result.`)})}_connectionClosed(e){this._logger.log(j.Debug,`HubConnection.connectionClosed(${e}) called while in state ${this._connectionState}.`),this._stopDuringStartError=this._stopDuringStartError||e||new jt("The underlying connection was closed before the hub handshake could complete."),this._handshakeResolver&&this._handshakeResolver(),this._cancelCallbacksWithError(e||new Error("Invocation canceled due to the underlying connection being closed.")),this._cleanupTimeout(),this._cleanupPingTimer(),this._connectionState===Ct.Disconnecting?this._completeClose(e):this._connectionState===Ct.Connected&&this._reconnectPolicy?this._reconnect(e):this._connectionState===Ct.Connected&&this._completeClose(e)}_completeClose(e){if(this._connectionStarted){this._connectionState=Ct.Disconnected,this._connectionStarted=!1,this._messageBuffer&&(this._messageBuffer._dispose(e??new Error("Connection closed.")),this._messageBuffer=void 0),yt.isBrowser&&window.document.removeEventListener("freeze",this._freezeEventListener);try{this._closedCallbacks.forEach(t=>t.apply(this,[e]))}catch(t){this._logger.log(j.Error,`An onclose callback called with error '${e}' threw error '${t}'.`)}}}_reconnect(e){return nt(this,null,function*(){let t=Date.now(),n=0,r=e!==void 0?e:new Error("Attempting to reconnect due to a unknown error."),s=this._getNextRetryDelay(n++,0,r);if(s===null){this._logger.log(j.Debug,"Connection not reconnecting because the IRetryPolicy returned null on the first reconnect attempt."),this._completeClose(e);return}if(this._connectionState=Ct.Reconnecting,e?this._logger.log(j.Information,`Connection reconnecting because of error '${e}'.`):this._logger.log(j.Information,"Connection reconnecting."),this._reconnectingCallbacks.length!==0){try{this._reconnectingCallbacks.forEach(o=>o.apply(this,[e]))}catch(o){this._logger.log(j.Error,`An onreconnecting callback called with error '${e}' threw error '${o}'.`)}if(this._connectionState!==Ct.Reconnecting){this._logger.log(j.Debug,"Connection left the reconnecting state in onreconnecting callback. Done reconnecting.");return}}for(;s!==null;){if(this._logger.log(j.Information,`Reconnect attempt number ${n} will start in ${s} ms.`),yield new Promise(o=>{this._reconnectDelayHandle=setTimeout(o,s)}),this._reconnectDelayHandle=void 0,this._connectionState!==Ct.Reconnecting){this._logger.log(j.Debug,"Connection left the reconnecting state during reconnect delay. Done reconnecting.");return}try{if(yield this._startInternal(),this._connectionState=Ct.Connected,this._logger.log(j.Information,"HubConnection reconnected successfully."),this._reconnectedCallbacks.length!==0)try{this._reconnectedCallbacks.forEach(o=>o.apply(this,[this.connection.connectionId]))}catch(o){this._logger.log(j.Error,`An onreconnected callback called with connectionId '${this.connection.connectionId}; threw error '${o}'.`)}return}catch(o){if(this._logger.log(j.Information,`Reconnect attempt failed because of error '${o}'.`),this._connectionState!==Ct.Reconnecting){this._logger.log(j.Debug,`Connection moved to the '${this._connectionState}' from the reconnecting state during reconnect attempt. Done reconnecting.`),this._connectionState===Ct.Disconnecting&&this._completeClose();return}r=o instanceof Error?o:new Error(o.toString()),s=this._getNextRetryDelay(n++,Date.now()-t,r)}}this._logger.log(j.Information,`Reconnect retries have been exhausted after ${Date.now()-t} ms and ${n} failed attempts. Connection disconnecting.`),this._completeClose()})}_getNextRetryDelay(e,t,n){try{return this._reconnectPolicy.nextRetryDelayInMilliseconds({elapsedMilliseconds:t,previousRetryCount:e,retryReason:n})}catch(r){return this._logger.log(j.Error,`IRetryPolicy.nextRetryDelayInMilliseconds(${e}, ${t}) threw error '${r}'.`),null}}_cancelCallbacksWithError(e){let t=this._callbacks;this._callbacks={},Object.keys(t).forEach(n=>{let r=t[n];try{r(null,e)}catch(s){this._logger.log(j.Error,`Stream 'error' callback called with '${e}' threw error: ${Zo(s)}`)}})}_cleanupPingTimer(){this._pingServerHandle&&(clearTimeout(this._pingServerHandle),this._pingServerHandle=void 0)}_cleanupTimeout(){this._timeoutHandle&&clearTimeout(this._timeoutHandle)}_createInvocation(e,t,n,r){if(n)return r.length!==0?{arguments:t,streamIds:r,target:e,type:Ze.Invocation}:{arguments:t,target:e,type:Ze.Invocation};{let s=this._invocationId;return this._invocationId++,r.length!==0?{arguments:t,invocationId:s.toString(),streamIds:r,target:e,type:Ze.Invocation}:{arguments:t,invocationId:s.toString(),target:e,type:Ze.Invocation}}}_launchStreams(e,t){if(e.length!==0){t||(t=Promise.resolve());for(let n in e)e[n].subscribe({complete:()=>{t=t.then(()=>this._sendWithProtocol(this._createCompletionMessage(n)))},error:r=>{let s;r instanceof Error?s=r.message:r&&r.toString?s=r.toString():s="Unknown error",t=t.then(()=>this._sendWithProtocol(this._createCompletionMessage(n,s)))},next:r=>{t=t.then(()=>this._sendWithProtocol(this._createStreamItemMessage(n,r)))}})}}_replaceStreamingParams(e){let t=[],n=[];for(let r=0;r<e.length;r++){let s=e[r];if(this._isObservable(s)){let o=this._invocationId;this._invocationId++,t[o]=s,n.push(o.toString()),e.splice(r,1)}}return[t,n]}_isObservable(e){return e&&e.subscribe&&typeof e.subscribe=="function"}_createStreamInvocation(e,t,n){let r=this._invocationId;return this._invocationId++,n.length!==0?{arguments:t,invocationId:r.toString(),streamIds:n,target:e,type:Ze.StreamInvocation}:{arguments:t,invocationId:r.toString(),target:e,type:Ze.StreamInvocation}}_createCancelInvocation(e){return{invocationId:e,type:Ze.CancelInvocation}}_createStreamItemMessage(e,t){return{invocationId:e,item:t,type:Ze.StreamItem}}_createCompletionMessage(e,t,n){return t?{error:t,invocationId:e,type:Ze.Completion}:{invocationId:e,result:n,type:Ze.Completion}}_createCloseMessage(){return{type:Ze.Close}}};var $p=[0,2e3,1e4,3e4,null],Es=class{constructor(e){this._retryDelays=e!==void 0?[...e,null]:$p}nextRetryDelayInMilliseconds(e){return this._retryDelays[e.previousRetryCount]}};var lr=(()=>{class i{}return i.Authorization="Authorization",i.Cookie="Cookie",i})();var oa=class extends Jn{constructor(e,t){super(),this._innerClient=e,this._accessTokenFactory=t}send(e){return nt(this,null,function*(){let t=!0;this._accessTokenFactory&&(!this._accessToken||e.url&&e.url.indexOf("/negotiate?")>0)&&(t=!1,this._accessToken=yield this._accessTokenFactory()),this._setAuthorizationHeader(e);let n=yield this._innerClient.send(e);return t&&n.statusCode===401&&this._accessTokenFactory?(this._accessToken=yield this._accessTokenFactory(),this._setAuthorizationHeader(e),yield this._innerClient.send(e)):n})}_setAuthorizationHeader(e){e.headers||(e.headers={}),this._accessToken?e.headers[lr.Authorization]=`Bearer ${this._accessToken}`:this._accessTokenFactory&&e.headers[lr.Authorization]&&delete e.headers[lr.Authorization]}getCookieString(e){return this._innerClient.getCookieString(e)}};var Vt=function(i){return i[i.None=0]="None",i[i.WebSockets=1]="WebSockets",i[i.ServerSentEvents=2]="ServerSentEvents",i[i.LongPolling=4]="LongPolling",i}(Vt||{}),Ot=function(i){return i[i.Text=1]="Text",i[i.Binary=2]="Binary",i}(Ot||{});var aa=class{constructor(){this._isAborted=!1,this.onabort=null}abort(){this._isAborted||(this._isAborted=!0,this.onabort&&this.onabort())}get signal(){return this}get aborted(){return this._isAborted}};var Ts=class{get pollAborted(){return this._pollAbort.aborted}constructor(e,t,n){this._httpClient=e,this._logger=t,this._pollAbort=new aa,this._options=n,this._running=!1,this.onreceive=null,this.onclose=null}connect(e,t){return nt(this,null,function*(){if(vt.isRequired(e,"url"),vt.isRequired(t,"transferFormat"),vt.isIn(t,Ot,"transferFormat"),this._url=e,this._logger.log(j.Trace,"(LongPolling transport) Connecting."),t===Ot.Binary&&typeof XMLHttpRequest<"u"&&typeof new XMLHttpRequest().responseType!="string")throw new Error("Binary protocols over XmlHttpRequest not implementing advanced features are not supported.");let[n,r]=Qn(),s=pt({[n]:r},this._options.headers),o={abortSignal:this._pollAbort.signal,headers:s,timeout:1e5,withCredentials:this._options.withCredentials};t===Ot.Binary&&(o.responseType="arraybuffer");let a=`${e}&_=${Date.now()}`;this._logger.log(j.Trace,`(LongPolling transport) polling: ${a}.`);let l=yield this._httpClient.get(a,o);l.statusCode!==200?(this._logger.log(j.Error,`(LongPolling transport) Unexpected response code: ${l.statusCode}.`),this._closeError=new mn(l.statusText||"",l.statusCode),this._running=!1):this._running=!0,this._receiving=this._poll(this._url,o)})}_poll(e,t){return nt(this,null,function*(){try{for(;this._running;)try{let n=`${e}&_=${Date.now()}`;this._logger.log(j.Trace,`(LongPolling transport) polling: ${n}.`);let r=yield this._httpClient.get(n,t);r.statusCode===204?(this._logger.log(j.Information,"(LongPolling transport) Poll terminated by server."),this._running=!1):r.statusCode!==200?(this._logger.log(j.Error,`(LongPolling transport) Unexpected response code: ${r.statusCode}.`),this._closeError=new mn(r.statusText||"",r.statusCode),this._running=!1):r.content?(this._logger.log(j.Trace,`(LongPolling transport) data received. ${Bi(r.content,this._options.logMessageContent)}.`),this.onreceive&&this.onreceive(r.content)):this._logger.log(j.Trace,"(LongPolling transport) Poll timed out, reissuing.")}catch(n){this._running?n instanceof Ui?this._logger.log(j.Trace,"(LongPolling transport) Poll timed out, reissuing."):(this._closeError=n,this._running=!1):this._logger.log(j.Trace,`(LongPolling transport) Poll errored after shutdown: ${n.message}`)}}finally{this._logger.log(j.Trace,"(LongPolling transport) Polling complete."),this.pollAborted||this._raiseOnClose()}})}send(e){return nt(this,null,function*(){return this._running?Jo(this._logger,"LongPolling",this._httpClient,this._url,e,this._options):Promise.reject(new Error("Cannot send until the transport is connected"))})}stop(){return nt(this,null,function*(){this._logger.log(j.Trace,"(LongPolling transport) Stopping polling."),this._running=!1,this._pollAbort.abort();try{yield this._receiving,this._logger.log(j.Trace,`(LongPolling transport) sending DELETE request to ${this._url}.`);let e={},[t,n]=Qn();e[t]=n;let r={headers:pt(pt({},e),this._options.headers),timeout:this._options.timeout,withCredentials:this._options.withCredentials},s;try{yield this._httpClient.delete(this._url,r)}catch(o){s=o}s?s instanceof mn&&(s.statusCode===404?this._logger.log(j.Trace,"(LongPolling transport) A 404 response was returned from sending a DELETE request."):this._logger.log(j.Trace,`(LongPolling transport) Error sending a DELETE request: ${s}`)):this._logger.log(j.Trace,"(LongPolling transport) DELETE request accepted.")}finally{this._logger.log(j.Trace,"(LongPolling transport) Stop finished."),this._raiseOnClose()}})}_raiseOnClose(){if(this.onclose){let e="(LongPolling transport) Firing onclose event.";this._closeError&&(e+=" Error: "+this._closeError),this._logger.log(j.Trace,e),this.onclose(this._closeError)}}};var la=class{constructor(e,t,n,r){this._httpClient=e,this._accessToken=t,this._logger=n,this._options=r,this.onreceive=null,this.onclose=null}connect(e,t){return nt(this,null,function*(){return vt.isRequired(e,"url"),vt.isRequired(t,"transferFormat"),vt.isIn(t,Ot,"transferFormat"),this._logger.log(j.Trace,"(SSE transport) Connecting."),this._url=e,this._accessToken&&(e+=(e.indexOf("?")<0?"?":"&")+`access_token=${encodeURIComponent(this._accessToken)}`),new Promise((n,r)=>{let s=!1;if(t!==Ot.Text){r(new Error("The Server-Sent Events transport only supports the 'Text' transfer format"));return}let o;if(yt.isBrowser||yt.isWebWorker)o=new this._options.EventSource(e,{withCredentials:this._options.withCredentials});else{let a=this._httpClient.getCookieString(e),l={};l.Cookie=a;let[c,h]=Qn();l[c]=h,o=new this._options.EventSource(e,{withCredentials:this._options.withCredentials,headers:pt(pt({},l),this._options.headers)})}try{o.onmessage=a=>{if(this.onreceive)try{this._logger.log(j.Trace,`(SSE transport) data received. ${Bi(a.data,this._options.logMessageContent)}.`),this.onreceive(a.data)}catch(l){this._close(l);return}},o.onerror=a=>{s?this._close():r(new Error("EventSource failed to connect. The connection could not be found on the server, either the connection ID is not present on the server, or a proxy is refusing/buffering the connection. If you have multiple servers check that sticky sessions are enabled."))},o.onopen=()=>{this._logger.log(j.Information,`SSE connected to ${this._url}`),this._eventSource=o,s=!0,n()}}catch(a){r(a);return}})})}send(e){return nt(this,null,function*(){return this._eventSource?Jo(this._logger,"SSE",this._httpClient,this._url,e,this._options):Promise.reject(new Error("Cannot send until the transport is connected"))})}stop(){return this._close(),Promise.resolve()}_close(e){this._eventSource&&(this._eventSource.close(),this._eventSource=void 0,this.onclose&&this.onclose(e))}};var ca=class{constructor(e,t,n,r,s,o){this._logger=n,this._accessTokenFactory=t,this._logMessageContent=r,this._webSocketConstructor=s,this._httpClient=e,this.onreceive=null,this.onclose=null,this._headers=o}connect(e,t){return nt(this,null,function*(){vt.isRequired(e,"url"),vt.isRequired(t,"transferFormat"),vt.isIn(t,Ot,"transferFormat"),this._logger.log(j.Trace,"(WebSockets transport) Connecting.");let n;return this._accessTokenFactory&&(n=yield this._accessTokenFactory()),new Promise((r,s)=>{e=e.replace(/^http/,"ws");let o,a=this._httpClient.getCookieString(e),l=!1;if(yt.isNode||yt.isReactNative){let c={},[h,u]=Qn();c[h]=u,n&&(c[lr.Authorization]=`Bearer ${n}`),a&&(c[lr.Cookie]=a),o=new this._webSocketConstructor(e,void 0,{headers:pt(pt({},c),this._headers)})}else n&&(e+=(e.indexOf("?")<0?"?":"&")+`access_token=${encodeURIComponent(n)}`);o||(o=new this._webSocketConstructor(e)),t===Ot.Binary&&(o.binaryType="arraybuffer"),o.onopen=c=>{this._logger.log(j.Information,`WebSocket connected to ${e}.`),this._webSocket=o,l=!0,r()},o.onerror=c=>{let h=null;typeof ErrorEvent<"u"&&c instanceof ErrorEvent?h=c.error:h="There was an error with the transport",this._logger.log(j.Information,`(WebSockets transport) ${h}.`)},o.onmessage=c=>{if(this._logger.log(j.Trace,`(WebSockets transport) data received. ${Bi(c.data,this._logMessageContent)}.`),this.onreceive)try{this.onreceive(c.data)}catch(h){this._close(h);return}},o.onclose=c=>{if(l)this._close(c);else{let h=null;typeof ErrorEvent<"u"&&c instanceof ErrorEvent?h=c.error:h="WebSocket failed to connect. The connection could not be found on the server, either the endpoint may not be a SignalR endpoint, the connection ID is not present on the server, or there is a proxy blocking WebSockets. If you have multiple servers check that sticky sessions are enabled.",s(new Error(h))}}})})}send(e){return this._webSocket&&this._webSocket.readyState===this._webSocketConstructor.OPEN?(this._logger.log(j.Trace,`(WebSockets transport) sending data. ${Bi(e,this._logMessageContent)}.`),this._webSocket.send(e),Promise.resolve()):Promise.reject("WebSocket is not in the OPEN state")}stop(){return this._webSocket&&this._close(void 0),Promise.resolve()}_close(e){this._webSocket&&(this._webSocket.onclose=()=>{},this._webSocket.onmessage=()=>{},this._webSocket.onerror=()=>{},this._webSocket.close(),this._webSocket=void 0),this._logger.log(j.Trace,"(WebSockets transport) socket closed."),this.onclose&&(this._isCloseEvent(e)&&(e.wasClean===!1||e.code!==1e3)?this.onclose(new Error(`WebSocket closed with status code: ${e.code} (${e.reason||"no reason given"}).`)):e instanceof Error?this.onclose(e):this.onclose())}_isCloseEvent(e){return e&&typeof e.wasClean=="boolean"&&typeof e.code=="number"}};var Cu=100,ha=class{constructor(e,t={}){if(this._stopPromiseResolver=()=>{},this.features={},this._negotiateVersion=1,vt.isRequired(e,"url"),this._logger=wu(t.logger),this.baseUrl=this._resolveUrl(e),t=t||{},t.logMessageContent=t.logMessageContent===void 0?!1:t.logMessageContent,typeof t.withCredentials=="boolean"||t.withCredentials===void 0)t.withCredentials=t.withCredentials===void 0?!0:t.withCredentials;else throw new Error("withCredentials option was not a 'boolean' or 'undefined' value");t.timeout=t.timeout===void 0?100*1e3:t.timeout;let n=null,r=null;if(yt.isNode&&typeof Rr<"u"){let s=typeof __webpack_require__=="function"?__non_webpack_require__:Rr;n=s("ws"),r=s("eventsource")}!yt.isNode&&typeof WebSocket<"u"&&!t.WebSocket?t.WebSocket=WebSocket:yt.isNode&&!t.WebSocket&&n&&(t.WebSocket=n),!yt.isNode&&typeof EventSource<"u"&&!t.EventSource?t.EventSource=EventSource:yt.isNode&&!t.EventSource&&typeof r<"u"&&(t.EventSource=r),this._httpClient=new oa(t.httpClient||new ta(this._logger),t.accessTokenFactory),this._connectionState="Disconnected",this._connectionStarted=!1,this._options=t,this.onreceive=null,this.onclose=null}start(e){return nt(this,null,function*(){if(e=e||Ot.Binary,vt.isIn(e,Ot,"transferFormat"),this._logger.log(j.Debug,`Starting connection with transfer format '${Ot[e]}'.`),this._connectionState!=="Disconnected")return Promise.reject(new Error("Cannot start an HttpConnection that is not in the 'Disconnected' state."));if(this._connectionState="Connecting",this._startInternalPromise=this._startInternal(e),yield this._startInternalPromise,this._connectionState==="Disconnecting"){let t="Failed to start the HttpConnection before stop() was called.";return this._logger.log(j.Error,t),yield this._stopPromise,Promise.reject(new jt(t))}else if(this._connectionState!=="Connected"){let t="HttpConnection.startInternal completed gracefully but didn't enter the connection into the connected state!";return this._logger.log(j.Error,t),Promise.reject(new jt(t))}this._connectionStarted=!0})}send(e){return this._connectionState!=="Connected"?Promise.reject(new Error("Cannot send data if the connection is not in the 'Connected' State.")):(this._sendQueue||(this._sendQueue=new Sc(this.transport)),this._sendQueue.send(e))}stop(e){return nt(this,null,function*(){if(this._connectionState==="Disconnected")return this._logger.log(j.Debug,`Call to HttpConnection.stop(${e}) ignored because the connection is already in the disconnected state.`),Promise.resolve();if(this._connectionState==="Disconnecting")return this._logger.log(j.Debug,`Call to HttpConnection.stop(${e}) ignored because the connection is already in the disconnecting state.`),this._stopPromise;this._connectionState="Disconnecting",this._stopPromise=new Promise(t=>{this._stopPromiseResolver=t}),yield this._stopInternal(e),yield this._stopPromise})}_stopInternal(e){return nt(this,null,function*(){this._stopError=e;try{yield this._startInternalPromise}catch{}if(this.transport){try{yield this.transport.stop()}catch(t){this._logger.log(j.Error,`HttpConnection.transport.stop() threw error '${t}'.`),this._stopConnection()}this.transport=void 0}else this._logger.log(j.Debug,"HttpConnection.transport is undefined in HttpConnection.stop() because start() failed.")})}_startInternal(e){return nt(this,null,function*(){let t=this.baseUrl;this._accessTokenFactory=this._options.accessTokenFactory,this._httpClient._accessTokenFactory=this._accessTokenFactory;try{if(this._options.skipNegotiation)if(this._options.transport===Vt.WebSockets)this.transport=this._constructTransport(Vt.WebSockets),yield this._startTransport(t,e);else throw new Error("Negotiation can only be skipped when using the WebSocket transport directly.");else{let n=null,r=0;do{if(n=yield this._getNegotiationResponse(t),this._connectionState==="Disconnecting"||this._connectionState==="Disconnected")throw new jt("The connection was stopped during negotiation.");if(n.error)throw new Error(n.error);if(n.ProtocolVersion)throw new Error("Detected a connection attempt to an ASP.NET SignalR Server. This client only supports connecting to an ASP.NET Core SignalR Server. See https://aka.ms/signalr-core-differences for details.");if(n.url&&(t=n.url),n.accessToken){let s=n.accessToken;this._accessTokenFactory=()=>s,this._httpClient._accessToken=s,this._httpClient._accessTokenFactory=void 0}r++}while(n.url&&r<Cu);if(r===Cu&&n.url)throw new Error("Negotiate redirection limit exceeded.");yield this._createTransport(t,this._options.transport,n,e)}this.transport instanceof Ts&&(this.features.inherentKeepAlive=!0),this._connectionState==="Connecting"&&(this._logger.log(j.Debug,"The HttpConnection connected successfully."),this._connectionState="Connected")}catch(n){return this._logger.log(j.Error,"Failed to start the connection: "+n),this._connectionState="Disconnected",this.transport=void 0,this._stopPromiseResolver(),Promise.reject(n)}})}_getNegotiationResponse(e){return nt(this,null,function*(){let t={},[n,r]=Qn();t[n]=r;let s=this._resolveNegotiateUrl(e);this._logger.log(j.Debug,`Sending negotiation request: ${s}.`);try{let o=yield this._httpClient.post(s,{content:"",headers:pt(pt({},t),this._options.headers),timeout:this._options.timeout,withCredentials:this._options.withCredentials});if(o.statusCode!==200)return Promise.reject(new Error(`Unexpected status code returned from negotiate '${o.statusCode}'`));let a=JSON.parse(o.content);return(!a.negotiateVersion||a.negotiateVersion<1)&&(a.connectionToken=a.connectionId),a.useStatefulReconnect&&this._options._useStatefulReconnect!==!0?Promise.reject(new ws("Client didn't negotiate Stateful Reconnect but the server did.")):a}catch(o){let a="Failed to complete negotiation with the server: "+o;return o instanceof mn&&o.statusCode===404&&(a=a+" Either this is not a SignalR endpoint or there is a proxy blocking the connection."),this._logger.log(j.Error,a),Promise.reject(new ws(a))}})}_createConnectUrl(e,t){return t?e+(e.indexOf("?")===-1?"?":"&")+`id=${t}`:e}_createTransport(e,t,n,r){return nt(this,null,function*(){let s=this._createConnectUrl(e,n.connectionToken);if(this._isITransport(t)){this._logger.log(j.Debug,"Connection was provided an instance of ITransport, using that directly."),this.transport=t,yield this._startTransport(s,r),this.connectionId=n.connectionId;return}let o=[],a=n.availableTransports||[],l=n;for(let c of a){let h=this._resolveTransportOrError(c,t,r,l?.useStatefulReconnect===!0);if(h instanceof Error)o.push(`${c.transport} failed:`),o.push(h);else if(this._isITransport(h)){if(this.transport=h,!l){try{l=yield this._getNegotiationResponse(e)}catch(u){return Promise.reject(u)}s=this._createConnectUrl(e,l.connectionToken)}try{yield this._startTransport(s,r),this.connectionId=l.connectionId;return}catch(u){if(this._logger.log(j.Error,`Failed to start the transport '${c.transport}': ${u}`),l=void 0,o.push(new jo(`${c.transport} failed: ${u}`,Vt[c.transport])),this._connectionState!=="Connecting"){let f="Failed to select transport before stop() was called.";return this._logger.log(j.Debug,f),Promise.reject(new jt(f))}}}}return o.length>0?Promise.reject(new $o(`Unable to connect to the server with any of the available transports. ${o.join(" ")}`,o)):Promise.reject(new Error("None of the transports supported by the client are supported by the server."))})}_constructTransport(e){switch(e){case Vt.WebSockets:if(!this._options.WebSocket)throw new Error("'WebSocket' is not supported in your environment.");return new ca(this._httpClient,this._accessTokenFactory,this._logger,this._options.logMessageContent,this._options.WebSocket,this._options.headers||{});case Vt.ServerSentEvents:if(!this._options.EventSource)throw new Error("'EventSource' is not supported in your environment.");return new la(this._httpClient,this._httpClient._accessToken,this._logger,this._options);case Vt.LongPolling:return new Ts(this._httpClient,this._logger,this._options);default:throw new Error(`Unknown transport: ${e}.`)}}_startTransport(e,t){return this.transport.onreceive=this.onreceive,this.features.reconnect?this.transport.onclose=n=>nt(this,null,function*(){let r=!1;if(this.features.reconnect)try{this.features.disconnected(),yield this.transport.connect(e,t),yield this.features.resend()}catch{r=!0}else{this._stopConnection(n);return}r&&this._stopConnection(n)}):this.transport.onclose=n=>this._stopConnection(n),this.transport.connect(e,t)}_resolveTransportOrError(e,t,n,r){let s=Vt[e.transport];if(s==null)return this._logger.log(j.Debug,`Skipping transport '${e.transport}' because it is not supported by this client.`),new Error(`Skipping transport '${e.transport}' because it is not supported by this client.`);if(Kp(t,s))if(e.transferFormats.map(a=>Ot[a]).indexOf(n)>=0){if(s===Vt.WebSockets&&!this._options.WebSocket||s===Vt.ServerSentEvents&&!this._options.EventSource)return this._logger.log(j.Debug,`Skipping transport '${Vt[s]}' because it is not supported in your environment.'`),new qo(`'${Vt[s]}' is not supported in your environment.`,s);this._logger.log(j.Debug,`Selecting transport '${Vt[s]}'.`);try{return this.features.reconnect=s===Vt.WebSockets?r:void 0,this._constructTransport(s)}catch(a){return a}}else return this._logger.log(j.Debug,`Skipping transport '${Vt[s]}' because it does not support the requested transfer format '${Ot[n]}'.`),new Error(`'${Vt[s]}' does not support ${Ot[n]}.`);else return this._logger.log(j.Debug,`Skipping transport '${Vt[s]}' because it was disabled by the client.`),new Yo(`'${Vt[s]}' is disabled by the client.`,s)}_isITransport(e){return e&&typeof e=="object"&&"connect"in e}_stopConnection(e){if(this._logger.log(j.Debug,`HttpConnection.stopConnection(${e}) called while in state ${this._connectionState}.`),this.transport=void 0,e=this._stopError||e,this._stopError=void 0,this._connectionState==="Disconnected"){this._logger.log(j.Debug,`Call to HttpConnection.stopConnection(${e}) was ignored because the connection is already in the disconnected state.`);return}if(this._connectionState==="Connecting")throw this._logger.log(j.Warning,`Call to HttpConnection.stopConnection(${e}) was ignored because the connection is still in the connecting state.`),new Error(`HttpConnection.stopConnection(${e}) was called while the connection is still in the connecting state.`);if(this._connectionState==="Disconnecting"&&this._stopPromiseResolver(),e?this._logger.log(j.Error,`Connection disconnected with error '${e}'.`):this._logger.log(j.Information,"Connection disconnected."),this._sendQueue&&(this._sendQueue.stop().catch(t=>{this._logger.log(j.Error,`TransportSendQueue.stop() threw error '${t}'.`)}),this._sendQueue=void 0),this.connectionId=void 0,this._connectionState="Disconnected",this._connectionStarted){this._connectionStarted=!1;try{this.onclose&&this.onclose(e)}catch(t){this._logger.log(j.Error,`HttpConnection.onclose(${e}) threw error '${t}'.`)}}}_resolveUrl(e){if(e.lastIndexOf("https://",0)===0||e.lastIndexOf("http://",0)===0)return e;if(!yt.isBrowser)throw new Error(`Cannot resolve '${e}'.`);let t=window.document.createElement("a");return t.href=e,this._logger.log(j.Information,`Normalizing '${e}' to '${t.href}'.`),t.href}_resolveNegotiateUrl(e){let t=new URL(e);t.pathname.endsWith("/")?t.pathname+="negotiate":t.pathname+="/negotiate";let n=new URLSearchParams(t.searchParams);return n.has("negotiateVersion")||n.append("negotiateVersion",this._negotiateVersion.toString()),n.has("useStatefulReconnect")?n.get("useStatefulReconnect")==="true"&&(this._options._useStatefulReconnect=!0):this._options._useStatefulReconnect===!0&&n.append("useStatefulReconnect","true"),t.search=n.toString(),t.toString()}};function Kp(i,e){return!i||(e&i)!==0}var Sc=class i{constructor(e){this._transport=e,this._buffer=[],this._executing=!0,this._sendBufferedData=new kr,this._transportResult=new kr,this._sendLoopPromise=this._sendLoop()}send(e){return this._bufferData(e),this._transportResult||(this._transportResult=new kr),this._transportResult.promise}stop(){return this._executing=!1,this._sendBufferedData.resolve(),this._sendLoopPromise}_bufferData(e){if(this._buffer.length&&typeof this._buffer[0]!=typeof e)throw new Error(`Expected data to be of type ${typeof this._buffer} but was of type ${typeof e}`);this._buffer.push(e),this._sendBufferedData.resolve()}_sendLoop(){return nt(this,null,function*(){for(;;){if(yield this._sendBufferedData.promise,!this._executing){this._transportResult&&this._transportResult.reject("Connection stopped.");break}this._sendBufferedData=new kr;let e=this._transportResult;this._transportResult=void 0;let t=typeof this._buffer[0]=="string"?this._buffer.join(""):i._concatBuffers(this._buffer);this._buffer.length=0;try{yield this._transport.send(t),e.resolve()}catch(n){e.reject(n)}}})}static _concatBuffers(e){let t=e.map(s=>s.byteLength).reduce((s,o)=>s+o),n=new Uint8Array(t),r=0;for(let s of e)n.set(new Uint8Array(s),r),r+=s.byteLength;return n.buffer}},kr=class{constructor(){this.promise=new Promise((e,t)=>[this._resolver,this._rejecter]=[e,t])}resolve(){this._resolver()}reject(e){this._rejecter(e)}};var Jp="json",ua=class{constructor(){this.name=Jp,this.version=2,this.transferFormat=Ot.Text}parseMessages(e,t){if(typeof e!="string")throw new Error("Invalid input for JSON hub protocol. Expected a string.");if(!e)return[];t===null&&(t=Zn.instance);let n=gn.parse(e),r=[];for(let s of n){let o=JSON.parse(s);if(typeof o.type!="number")throw new Error("Invalid payload.");switch(o.type){case Ze.Invocation:this._isInvocationMessage(o);break;case Ze.StreamItem:this._isStreamItemMessage(o);break;case Ze.Completion:this._isCompletionMessage(o);break;case Ze.Ping:break;case Ze.Close:break;case Ze.Ack:this._isAckMessage(o);break;case Ze.Sequence:this._isSequenceMessage(o);break;default:t.log(j.Information,"Unknown message type '"+o.type+"' ignored.");continue}r.push(o)}return r}writeMessage(e){return gn.write(JSON.stringify(e))}_isInvocationMessage(e){this._assertNotEmptyString(e.target,"Invalid payload for Invocation message."),e.invocationId!==void 0&&this._assertNotEmptyString(e.invocationId,"Invalid payload for Invocation message.")}_isStreamItemMessage(e){if(this._assertNotEmptyString(e.invocationId,"Invalid payload for StreamItem message."),e.item===void 0)throw new Error("Invalid payload for StreamItem message.")}_isCompletionMessage(e){if(e.result&&e.error)throw new Error("Invalid payload for Completion message.");!e.result&&e.error&&this._assertNotEmptyString(e.error,"Invalid payload for Completion message."),this._assertNotEmptyString(e.invocationId,"Invalid payload for Completion message.")}_isAckMessage(e){if(typeof e.sequenceId!="number")throw new Error("Invalid SequenceId for Ack message.")}_isSequenceMessage(e){if(typeof e.sequenceId!="number")throw new Error("Invalid SequenceId for Sequence message.")}_assertNotEmptyString(e,t){if(typeof e!="string"||e==="")throw new Error(t)}};var Zp={trace:j.Trace,debug:j.Debug,info:j.Information,information:j.Information,warn:j.Warning,warning:j.Warning,error:j.Error,critical:j.Critical,none:j.None};function Qp(i){let e=Zp[i.toLowerCase()];if(typeof e<"u")return e;throw new Error(`Unknown log level: ${i}`)}var Cs=class{configureLogging(e){if(vt.isRequired(e,"logging"),em(e))this.logger=e;else if(typeof e=="string"){let t=Qp(e);this.logger=new ar(t)}else this.logger=new ar(e);return this}withUrl(e,t){return vt.isRequired(e,"url"),vt.isNotEmpty(e,"url"),this.url=e,typeof t=="object"?this.httpConnectionOptions=pt(pt({},this.httpConnectionOptions),t):this.httpConnectionOptions=Xn(pt({},this.httpConnectionOptions),{transport:t}),this}withHubProtocol(e){return vt.isRequired(e,"protocol"),this.protocol=e,this}withAutomaticReconnect(e){if(this.reconnectPolicy)throw new Error("A reconnectPolicy has already been set.");return e?Array.isArray(e)?this.reconnectPolicy=new Es(e):this.reconnectPolicy=e:this.reconnectPolicy=new Es,this}withServerTimeout(e){return vt.isRequired(e,"milliseconds"),this._serverTimeoutInMilliseconds=e,this}withKeepAliveInterval(e){return vt.isRequired(e,"milliseconds"),this._keepAliveIntervalInMilliseconds=e,this}withStatefulReconnect(e){return this.httpConnectionOptions===void 0&&(this.httpConnectionOptions={}),this.httpConnectionOptions._useStatefulReconnect=!0,this._statefulReconnectBufferSize=e?.bufferSize,this}build(){let e=this.httpConnectionOptions||{};if(e.logger===void 0&&(e.logger=this.logger),!this.url)throw new Error("The 'HubConnectionBuilder.withUrl' method must be called before building the connection.");let t=new ha(this.url,e);return sa.create(t,this.logger||Zn.instance,this.protocol||new ua,this.reconnectPolicy,this._serverTimeoutInMilliseconds,this._keepAliveIntervalInMilliseconds,this._statefulReconnectBufferSize)}};function em(i){return i.log!==void 0}var zr=class i{hubConnection;constructor(){this.hubConnection=new Cs().withUrl(`${Ur.BASE_URL}/notificationHub`).build()}startConnection(){return new dc(e=>{this.hubConnection.start().then(()=>{console.log("Connection established with SignalR hub"),e.next(),e.complete()}).catch(t=>{console.error("Error connecting to SignalR hub:",t),e.error(t)})})}receiveMessage(){return new dc(e=>{this.hubConnection.on("ReceiveMessage",t=>{console.log("Notification received:",t),e.next(t)})})}sendMessage(e){this.hubConnection.invoke("SendMessage",e)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=Tn({token:i,factory:i.\u0275fac,providedIn:"root"})};var nm=i=>({background:i,backdropFilter:"blur(15px)",WebkitBackdropFilter:"blur(15px)",borderRadius:"0 0 30px 30px"}),im=()=>["/notifications"];function rm(i,e){if(i&1&&(M(0,"span",23),I(1),T()),i&2){let t=_e(2);z(),Nt(" ",t.notificationCount," ")}}function sm(i,e){if(i&1&&(M(0,"div",18)(1,"a",19)(2,"button",20),pe(3,"i",21),$e(4,rm,2,1,"span",22),T()()()),i&2){let t=_e();z(),re("routerLink",fn(2,im)),z(3),re("ngIf",t.notificationCount>0)}}function om(i,e){if(i&1&&(M(0,"a",35),pe(1,"i",36),M(2,"span",37),I(3),T()()),i&2){let t=_e(2).$implicit;re("routerLink",t.routerLink),z(),re("ngClass",t.icon),z(2),St(t.label)}}function am(i,e){if(i&1){let t=Et();M(0,"button",38),st("click",function(r){Ge(t);let s=_e(2).$implicit;return We(s.click==null?null:s.click(r))}),pe(1,"i",36),M(2,"span",37),I(3),T()()}if(i&2){let t=_e(2).$implicit;re("ngClass",t.class||"text-gray-700"),z(),re("ngClass",t.icon),z(2),St(t.label)}}function lm(i,e){if(i&1&&(Qt(0),$e(1,om,4,3,"a",33)(2,am,4,3,"button",34),en()),i&2){let t=_e().$implicit;z(),re("ngIf",!t.isButton),z(),re("ngIf",t.isButton)}}function cm(i,e){if(i&1&&(Qt(0),$e(1,lm,3,2,"ng-container",32),en()),i&2){let t=e.$implicit;z(),re("ngIf",t.showIf())}}function hm(i,e){if(i&1&&(M(0,"div",30),$e(1,cm,2,1,"ng-container",31),T()),i&2){let t=_e(2);z(),re("ngForOf",t.dropdownLinks)}}function um(i,e){if(i&1){let t=Et();M(0,"div",24)(1,"button",25),st("click",function(){Ge(t);let r=_e();return We(r.toggleUserMenu())}),pe(2,"img",26),M(3,"span",27),I(4),T(),pe(5,"i",28),T(),$e(6,hm,2,1,"div",29),T()}if(i&2){let t=_e();z(2),re("src",t.profileImageUrl||t.defaultProfileImage,sr),z(2),St(t.username||"User"),z(2),re("ngIf",t.showUserMenu)}}function dm(i,e){i&1&&(M(0,"div",39)(1,"a",40),I(2," Login "),T(),M(3,"a",41),I(4," Sign Up "),T()())}function fm(i,e){if(i&1&&(M(0,"a",51),pe(1,"i",36),M(2,"span",37),I(3),T()()),i&2){let t=_e(2).$implicit;re("routerLink",t.routerLink),z(),re("ngClass",t.icon),z(2),St(t.label)}}function pm(i,e){if(i&1){let t=Et();M(0,"button",38),st("click",function(r){Ge(t);let s=_e(2).$implicit;return We(s.click==null?null:s.click(r))}),pe(1,"i",36),M(2,"span",37),I(3),T()()}if(i&2){let t=_e(2).$implicit;re("ngClass",t.class||"text-gray-700"),z(),re("ngClass",t.icon),z(2),St(t.label)}}function mm(i,e){if(i&1&&(Qt(0),$e(1,fm,4,3,"a",50)(2,pm,4,3,"button",34),en()),i&2){let t=_e().$implicit;z(),re("ngIf",!t.isButton),z(),re("ngIf",t.isButton)}}function gm(i,e){if(i&1&&(Qt(0),$e(1,mm,3,2,"ng-container",32),en()),i&2){let t=e.$implicit;z(),re("ngIf",t.showIf())}}function _m(i,e){if(i&1&&(M(0,"div",30),$e(1,gm,2,1,"ng-container",31),T()),i&2){let t=_e(3);z(),re("ngForOf",t.dropdownLinks)}}function xm(i,e){if(i&1){let t=Et();Qt(0),M(1,"div",24)(2,"button",46),st("click",function(){Ge(t);let r=_e(2);return We(r.toggleUserMenu())}),pe(3,"img",47),M(4,"span",48),I(5),T(),pe(6,"i",49),T(),$e(7,_m,2,1,"div",29),T(),en()}if(i&2){let t=_e(2);z(3),re("src",t.profileImageUrl||t.defaultProfileImage,sr),z(2),St(t.username||"User"),z(2),re("ngIf",t.showUserMenu)}}function vm(i,e){i&1&&(M(0,"div",52)(1,"a",53),I(2," Login "),T(),M(3,"a",54),I(4," Sign Up "),T()())}function ym(i,e){if(i&1&&(M(0,"div",42),pe(1,"input",43),M(2,"div",44),$e(3,xm,8,3,"ng-container",45)(4,vm,5,0,"ng-template",null,1,Ci),T()()),i&2){let t=Pr(5),n=_e();z(3),re("ngIf",n.isLoggedIn)("ngIfElse",t)}}var da=class i{constructor(e,t,n,r,s,o,a){this.router=e;this.platformId=t;this.colorService=n;this.layoutService=r;this.userService=s;this.signalrService=o;this.userInfo=a;this.router.events.pipe(Ir(l=>l instanceof Dr)).subscribe(()=>this.checkLoginStatus())}isLoggedIn=!1;isNavbarCollapsed=!0;sidebarVisible=!0;isDesktop=!0;selectedColor="";userRole=null;username=null;showUserMenu=!1;profileImageUrl="";defaultProfileImage="images/profile.jpeg";notificationCount=0;notifications=[];ngOnInit(){this.signalrService.receiveMessage().subscribe(t=>{this.notifications.push(t),this.notificationCount=this.notifications.length}),this.checkLoginStatus(),this.colorService.selectedColor$.subscribe(t=>this.selectedColor=t),this.layoutService.sidebarVisible$.subscribe(t=>this.sidebarVisible=t),typeof window<"u"&&(this.isDesktop=window.innerWidth>=768,window.addEventListener("resize",()=>{this.isDesktop=window.innerWidth>=768}));let e=Number(this.userInfo.getUserId());e&&this.getProfileImage(e)}checkLoginStatus(){qt(this.platformId)&&(this.userInfo.refresh(),this.isLoggedIn=!!this.userInfo.getToken(),this.userRole=this.userInfo.getUserRole(),this.username=this.userInfo.getUserName()||"User")}goToAddProduct(e){e.preventDefault(),this.showUserMenu=!1,this.router.navigate(["components/product"])}logout(){qt(this.platformId)&&localStorage.clear(),this.userInfo.clear(),this.isLoggedIn=!1,this.router.navigate(["/auth/login"])}mobileMenuOpen=!1;toggleUserMenu(){this.showUserMenu=!this.showUserMenu,console.log("Menu toggled:",this.showUserMenu)}onClickOutside(e){e.closest(".user-dropdown")!==null||(this.showUserMenu=!1)}getProfileImage(e){this.userService.getProfileImage(e).subscribe({next:t=>{let n=new FileReader;n.onload=()=>{this.profileImageUrl=n.result},n.readAsDataURL(t)},error:t=>{console.error("Error fetching profile image:",t),this.profileImageUrl=this.defaultProfileImage}})}toggleNavbar(){this.isNavbarCollapsed=!this.isNavbarCollapsed}dropdownLinks=[{label:"Profile",icon:"bi-person-circle",routerLink:"components/profileview",showIf:()=>!0,isButton:!1},{label:"Add Product",icon:"bi-plus-circle",click:e=>this.goToAddProduct(e),showIf:()=>this.userRole==="FARMER",isButton:!0},{label:"Logout",icon:"bi-box-arrow-right",click:()=>this.logout(),showIf:()=>!0,isButton:!0,class:"text-red-600 hover:bg-red-100"}];toggleSidebar(){window.dispatchEvent(new Event("toggle-sidebar"))}static \u0275fac=function(t){return new(t||i)(ke(An),ke(hn),ke(nn),ke(rn),ke(Oo),ke(zr),ke(In))};static \u0275cmp=Dt({type:i,selectors:[["app-navbar"]],hostBindings:function(t,n){t&1&&st("click",function(s){return n.onClickOutside(s.target)},!1,wo)},decls:19,vars:8,consts:[["authBtns",""],["mobileAuthBtns",""],[1,"fixed","top-0","left-0","w-full","z-50","backdrop-blur-xl","transition-all","duration-500","shadow-lg",3,"ngStyle"],["aria-label","Sidebar Button",1,"fixed","top-4","left-4","z-[1100]","flex","items-center","justify-center","w-12","h-12","rounded-full","bg-gradient-to-br","from-white/15","to-white/5","hover:from-white/20","hover:to-white/10","text-white","shadow-[0_4px_15px_rgba(0,0,0,0.25)]","backdrop-blur-xl","border","border-white/20","transition-all","duration-300","ease-in-out","overflow-hidden","hover:scale-110","hover:shadow-[0_0_25px_rgba(0,255,204,0.7)]","before:content-['']","before:absolute","before:inset-0","before:rounded-full","before:border-2","before:border-transparent","before:hover:border-[rgba(0,255,204,0.6)]","before:transition-all","before:duration-300",3,"click"],[1,"bi","bi-list","text-2xl","drop-shadow-[0_0_6px_rgba(0,255,204,0.8)]"],[1,"max-w-7xl","mx-auto","px-4","sm:px-6","lg:px-8"],[1,"flex","items-center","py-4"],["routerLink","/",1,"flex","items-center","gap-3","mr-auto"],["src","images/logo.jpg","alt","Logo",1,"w-10","h-10","object-contain","rounded-full","drop-shadow-[0_0_6px_rgba(0,255,204,0.8)]"],[1,"text-white","text-xl","sm:text-2xl","font-extrabold","tracking-wide","animate-pulse","drop-shadow-[0_0_15px_#00ffee]"],["aria-label","Toggle menu",1,"sm:hidden","text-white","text-2xl","p-2","focus:outline-none","focus:ring-2","focus:ring-[#00ffee]","rounded-lg",3,"click"],[1,"bi",3,"ngClass"],[1,"hidden","sm:flex","sm:items-center","gap-6","flex-1","justify-end"],[1,"w-full","max-w-md"],["type","text","placeholder","Search products, buyers...",1,"w-full","px-4","py-2","rounded-full","bg-white/90","text-gray-800","placeholder-gray-500","focus:outline-none","focus:ring-2","focus:ring-[#00ffee]","shadow-inner"],["class","relative",4,"ngIf"],["class","relative user-dropdown",4,"ngIf","ngIfElse"],["class","sm:hidden flex flex-col gap-4 pb-4 animate-fade-in-down",4,"ngIf"],[1,"relative"],[3,"routerLink"],[1,"p-2","rounded-full","hover:bg-white/10","transition","relative"],[1,"bi","bi-bell-fill","text-white","text-xl"],["class","absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full px-1.5 py-0.5 shadow-md",4,"ngIf"],[1,"absolute","-top-1","-right-1","bg-red-500","text-white","text-xs","font-bold","rounded-full","px-1.5","py-0.5","shadow-md"],[1,"relative","user-dropdown"],[1,"flex","items-center","gap-2","px-3","py-2","rounded-full","bg-white/10","hover:bg-white/20","transition","duration-300","focus:outline-none","backdrop-blur-md","border","border-white/20","shadow-md",3,"click"],["alt","User Avatar",1,"w-10","h-10","rounded-full","border-2","border-cyan-300","shadow-inner","ring-2","ring-white/30",3,"src"],[1,"text-white","font-medium","hidden","sm:inline-block","truncate","max-w-[120px]","tracking-wide","drop-shadow-sm"],[1,"bi","bi-caret-down-fill","text-white","text-sm","drop-shadow"],["class","absolute right-0 mt-3 w-56 bg-white rounded-xl shadow-xl z-50 py-2 animate-fade-in-down border border-gray-200",4,"ngIf"],[1,"absolute","right-0","mt-3","w-56","bg-white","rounded-xl","shadow-xl","z-50","py-2","animate-fade-in-down","border","border-gray-200"],[4,"ngFor","ngForOf"],[4,"ngIf"],["class","block px-4 py-3 text-gray-700 hover:bg-gray-100 hover:text-black transition duration-150 flex items-center gap-2",3,"routerLink",4,"ngIf"],["class","w-full text-left px-4 py-3 hover:bg-gray-100 hover:text-black transition duration-150 flex items-center gap-2",3,"ngClass","click",4,"ngIf"],[1,"block","px-4","py-3","text-gray-700","hover:bg-gray-100","hover:text-black","transition","duration-150","flex","items-center","gap-2",3,"routerLink"],[1,"bi","text-base",3,"ngClass"],[1,"text-sm","font-medium"],[1,"w-full","text-left","px-4","py-3","hover:bg-gray-100","hover:text-black","transition","duration-150","flex","items-center","gap-2",3,"click","ngClass"],[1,"flex","gap-3"],["routerLink","/auth/login",1,"px-4","py-2","border-2","border-[#00ffee]","text-[#00ffee]","font-medium","rounded-full","hover:bg-[#00ffee]","hover:text-black","transition"],["routerLink","/auth/signup",1,"px-4","py-2","bg-gradient-to-r","from-[#00ffcc]","to-[#00cc99]","text-white","font-medium","rounded-full","hover:shadow-[0_0_20px_#00ffee]","transition"],[1,"sm:hidden","flex","flex-col","gap-4","pb-4","animate-fade-in-down"],["type","text","placeholder","Search...",1,"w-full","px-4","py-2","rounded-full","bg-white/90","text-gray-800","focus:outline-none","focus:ring-2","focus:ring-[#00ffee]","shadow-inner","placeholder-gray-500"],[1,"flex","justify-between","items-center"],[4,"ngIf","ngIfElse"],[1,"flex","items-center","gap-2","rounded-full","px-2","py-1","hover:bg-white/10","transition","duration-300","focus:outline-none",3,"click"],[1,"w-9","h-9","rounded-full","border-2","border-[#00ffee]","shadow-md",3,"src"],[1,"text-white","font-medium","truncate","max-w-[100px]"],[1,"bi","bi-caret-down-fill","text-white","text-sm"],["class","w-full px-4 py-3 text-gray-700 hover:bg-gray-100 hover:text-black transition duration-150 flex items-center gap-2",3,"routerLink",4,"ngIf"],[1,"w-full","px-4","py-3","text-gray-700","hover:bg-gray-100","hover:text-black","transition","duration-150","flex","items-center","gap-2",3,"routerLink"],[1,"flex","gap-2","w-full"],["routerLink","/auth/login",1,"flex-1","text-center","px-4","py-2","border","border-[#00ffee]","text-[#00ffee]","rounded-full"],["routerLink","/auth/signup",1,"flex-1","text-center","px-4","py-2","bg-gradient-to-r","from-[#00ffcc]","to-[#00cc99]","text-white","rounded-full"]],template:function(t,n){if(t&1){let r=Et();M(0,"nav",2)(1,"button",3),st("click",function(){return Ge(r),We(n.toggleSidebar())}),pe(2,"i",4),T(),M(3,"div",5)(4,"div",6)(5,"a",7),pe(6,"img",8),M(7,"span",9),I(8," AgriMandi "),T()(),M(9,"button",10),st("click",function(){return Ge(r),We(n.mobileMenuOpen=!n.mobileMenuOpen)}),pe(10,"i",11),T(),M(11,"div",12)(12,"div",13),pe(13,"input",14),T(),$e(14,sm,5,3,"div",15)(15,um,7,3,"div",16)(16,dm,5,0,"ng-template",null,0,Ci),T()(),$e(18,ym,6,2,"div",17),T()()}if(t&2){let r=Pr(17);re("ngStyle",Ft(6,nm,n.selectedColor)),z(10),re("ngClass",n.mobileMenuOpen?"bi-x-lg":"bi-list"),z(4),re("ngIf",n.isLoggedIn),z(),re("ngIf",n.isLoggedIn)("ngIfElse",r),z(3),re("ngIf",n.mobileMenuOpen)}},dependencies:[Ai,Po,Xt,qn,Yn,Cn,jn],encapsulation:2})};var bm=(i,e,t,n)=>({"bg-green-600":i,"bg-red-600":e,"bg-yellow-500":t,"bg-blue-600":n});function Sm(i,e){if(i&1&&(M(0,"div",1)(1,"span",2),I(2),T()()),i&2){let t=_e();re("ngClass",su(2,bm,t.alertData.type==="success",t.alertData.type==="error",t.alertData.type==="warning",t.alertData.type==="info")),z(2),Nt(" ",t.alertData.message," ")}}var fa=class i{constructor(e){this.alertService=e;this.alertService.alert$.subscribe(t=>{console.log("\u{1F7E1} Alert received:",t),this.alertData=t})}alertData={message:"",type:"success"};static \u0275fac=function(t){return new(t||i)(ke($n))};static \u0275cmp=Dt({type:i,selectors:[["app-alert"]],decls:1,vars:1,consts:[["class","fixed z-[9999] right-5 top-[90px] max-w-sm w-auto px-6 py-4 rounded-lg shadow-2xl text-white transition-all duration-300 animate-fade-top",3,"ngClass",4,"ngIf"],[1,"fixed","z-[9999]","right-5","top-[90px]","max-w-sm","w-auto","px-6","py-4","rounded-lg","shadow-2xl","text-white","transition-all","duration-300","animate-fade-top",3,"ngClass"],[1,"font-semibold","tracking-wide","text-sm","sm:text-base"]],template:function(t,n){t&1&&$e(0,Sm,3,7,"div",0),t&2&&re("ngIf",n.alertData.message)},dependencies:[Xt,qn,Cn],styles:["@keyframes _ngcontent-%COMP%_fadeTop{0%{opacity:0;transform:translateY(-20px)}10%{opacity:1;transform:translateY(0)}90%{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(-20px)}}.animate-fade-top[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_fadeTop 4s ease-in-out forwards}"]})};var Rf=Jh(_c());var cl="176";var td=0,ch=1,nd=2;var hh=1,id=2,si=3,_i=0,Ht=1,Jt=2,Mi=0,pr=1,ho=2,uh=3,dh=4,rd=5,qi=100,sd=101,od=102,ad=103,ld=104,cd=200,hd=201,ud=202,dd=203,Ua=204,Ba=205,fd=206,pd=207,md=208,gd=209,_d=210,xd=211,vd=212,yd=213,bd=214,hl=0,ul=1,dl=2,mr=3,fl=4,pl=5,ml=6,gl=7,_l=0,Sd=1,Md=2,wi=0,wd=1,Ed=2,Td=3,Cd=4,Ad=5,Rd=6,Id=7;var $c=300,yr=301,br=302,xl=303,vl=304,uo=306,Oa=1e3,Xi=1001,ka=1002,Dn=1003,Pd=1004;var fo=1005;var Hn=1006,yl=1007;var er=1008;var Wn=1009,fh=1010,ph=1011,us=1012,bl=1013,tr=1014,oi=1015,ds=1016,Sl=1017,Ml=1018,fs=1020,mh=35902,gh=1021,_h=1022,Fn=1023,es=1026,ps=1027,xh=1028,wl=1029,vh=1030,El=1031;var Tl=1033,po=33776,mo=33777,go=33778,_o=33779,Cl=35840,Al=35841,Rl=35842,Il=35843,Pl=36196,Dl=37492,Ll=37496,Nl=37808,Fl=37809,Ul=37810,Bl=37811,Ol=37812,kl=37813,zl=37814,Vl=37815,Hl=37816,Gl=37817,Wl=37818,Xl=37819,ql=37820,Yl=37821,xo=36492,jl=36494,$l=36495,yh=36283,Kl=36284,Jl=36285,Zl=36286;var Us=2300,za=2301,Fa=2302,Kc=2400,Jc=2401,Zc=2402;var Dd=3200,Ld=3201;var Ql=0,Nd=1,Ei="",vn="srgb",gr="srgb-linear",Bs="linear",xt="srgb";var fr=7680;var Qc=519,Fd=512,Ud=513,Bd=514,bh=515,Od=516,kd=517,zd=518,Vd=519,eh=35044;var Sh="300 es",ti=2e3,Os=2001;var xi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Mc=Math.PI/180,ks=180/Math.PI;function ms(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(sn[i&255]+sn[i>>8&255]+sn[i>>16&255]+sn[i>>24&255]+"-"+sn[e&255]+sn[e>>8&255]+"-"+sn[e>>16&15|64]+sn[e>>24&255]+"-"+sn[t&63|128]+sn[t>>8&255]+"-"+sn[t>>16&255]+sn[t>>24&255]+sn[n&255]+sn[n>>8&255]+sn[n>>16&255]+sn[n>>24&255]).toLowerCase()}function ot(i,e,t){return Math.max(e,Math.min(t,i))}function Mm(i,e){return(i%e+e)%e}function wc(i,e,t){return(1-t)*i+t*e}function As(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function un(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var ge=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},et=class i{constructor(e,t,n,r,s,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c)}set(e,t,n,r,s,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],p=n[5],g=n[8],v=r[0],m=r[3],d=r[6],A=r[1],C=r[4],y=r[7],L=r[2],P=r[5],D=r[8];return s[0]=o*v+a*A+l*L,s[3]=o*m+a*C+l*P,s[6]=o*d+a*y+l*D,s[1]=c*v+h*A+u*L,s[4]=c*m+h*C+u*P,s[7]=c*d+h*y+u*D,s[2]=f*v+p*A+g*L,s[5]=f*m+p*C+g*P,s[8]=f*d+p*y+g*D,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*s*h+n*a*l+r*s*c-r*o*l}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,f=a*l-h*s,p=c*s-o*l,g=t*u+n*f+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=u*v,e[1]=(r*c-h*n)*v,e[2]=(a*n-r*o)*v,e[3]=f*v,e[4]=(h*t-r*l)*v,e[5]=(r*s-a*t)*v,e[6]=p*v,e[7]=(n*l-c*t)*v,e[8]=(o*t-n*s)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ec.makeScale(e,t)),this}rotate(e){return this.premultiply(Ec.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ec.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ec=new et;function Mh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function zs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Hd(){let i=zs("canvas");return i.style.display="block",i}var Ru={};function vo(i){i in Ru||(Ru[i]=!0,console.warn(i))}function Gd(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function Wd(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Xd(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var Iu=new et().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Pu=new et().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function wm(){let i={enabled:!0,workingColorSpace:gr,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===xt&&(r.r=gi(r.r),r.g=gi(r.g),r.b=gi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===xt&&(r.r=Qr(r.r),r.g=Qr(r.g),r.b=Qr(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ei?Bs:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[gr]:{primaries:e,whitePoint:n,transfer:Bs,toXYZ:Iu,fromXYZ:Pu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:vn},outputColorSpaceConfig:{drawingBufferColorSpace:vn}},[vn]:{primaries:e,whitePoint:n,transfer:xt,toXYZ:Iu,fromXYZ:Pu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:vn}}}),i}var dt=wm();function gi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Qr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Vr,Va=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Vr===void 0&&(Vr=zs("canvas")),Vr.width=e.width,Vr.height=e.height;let r=Vr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Vr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=zs("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=gi(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(gi(t[n]/255)*255):t[n]=gi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Em=0,ts=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Em++}),this.uuid=ms(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Tc(r[o].image)):s.push(Tc(r[o]))}else s=Tc(r);n.url=s}return t||(e.images[this.uuid]=n),n}};function Tc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Va.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Tm=0,nr=(()=>{class i extends xi{constructor(t=i.DEFAULT_IMAGE,n=i.DEFAULT_MAPPING,r=Xi,s=Xi,o=Hn,a=er,l=Fn,c=Wn,h=i.DEFAULT_ANISOTROPY,u=Ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Tm++}),this.uuid=ms(),this.name="",this.source=new ts(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=s,this.magFilter=o,this.minFilter=a,this.anisotropy=h,this.format=l,this.internalFormat=null,this.type=c,this.offset=new ge(0,0),this.repeat=new ge(1,1),this.center=new ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isTextureArray=t.isTextureArray,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==$c)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Oa:t.x=t.x-Math.floor(t.x);break;case Xi:t.x=t.x<0?0:1;break;case ka:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Oa:t.y=t.y-Math.floor(t.y);break;case Xi:t.y=t.y<0?0:1;break;case ka:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}return i.DEFAULT_IMAGE=null,i.DEFAULT_MAPPING=$c,i.DEFAULT_ANISOTROPY=1,i})(),Rt=class i{constructor(e=0,t=0,n=0,r=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s,l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],p=l[5],g=l[9],v=l[2],m=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let C=(c+1)/2,y=(p+1)/2,L=(d+1)/2,P=(h+f)/4,D=(u+v)/4,F=(g+m)/4;return C>y&&C>L?C<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(C),r=P/n,s=D/n):y>L?y<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),n=P/r,s=F/r):L<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(L),n=D/s,r=F/s),this.set(n,r,s,t),this}let A=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(f-h)*(f-h));return Math.abs(A)<.001&&(A=1),this.x=(m-g)/A,this.y=(u-v)/A,this.z=(f-h)/A,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this.w=ot(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this.w=ot(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ha=class extends xi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth?n.depth:1,this.scissor=new Rt(0,0,e,t),this.scissorTest=!1,this.viewport=new Rt(0,0,e,t);let r={width:e,height:t,depth:this.depth};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Hn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},n);let s=new nr(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new ts(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ii=class extends Ha{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Vs=class extends nr{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ga=class extends nr{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var vi=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],h=n[r+2],u=n[r+3],f=s[o+0],p=s[o+1],g=s[o+2],v=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=v;return}if(u!==v||l!==f||c!==p||h!==g){let m=1-a,d=l*f+c*p+h*g+u*v,A=d>=0?1:-1,C=1-d*d;if(C>Number.EPSILON){let L=Math.sqrt(C),P=Math.atan2(L,d*A);m=Math.sin(m*P)/L,a=Math.sin(a*P)/L}let y=a*A;if(l=l*m+f*y,c=c*m+p*y,h=h*m+g*y,u=u*m+v*y,m===1-a){let L=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=L,c*=L,h*=L,u*=L}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,s,o){let a=n[r],l=n[r+1],c=n[r+2],h=n[r+3],u=s[o],f=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+h*u+l*p-c*f,e[t+1]=l*g+h*f+c*u-a*p,e[t+2]=c*g+h*p+a*f-l*u,e[t+3]=h*g-a*u-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(r/2),u=a(s/2),f=l(n/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=f*h*u+c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u-f*p*g;break;case"YXZ":this._x=f*h*u+c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u+f*p*g;break;case"ZXY":this._x=f*h*u-c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u-f*p*g;break;case"ZYX":this._x=f*h*u-c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u+f*p*g;break;case"YZX":this._x=f*h*u+c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u-f*p*g;break;case"XZY":this._x=f*h*u-c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+a+u;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(n>a&&n>u){let p=2*Math.sqrt(1+n-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>u){let p=2*Math.sqrt(1+a-n-u);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-n-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ot(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+r*c-s*l,this._y=r*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-r*a,this._w=o*h-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,r=this._y,s=this._z,o=this._w,a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;let l=1-a*a;if(l<=Number.EPSILON){let p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=r*u+this._y*f,this._z=s*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},k=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Du.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Du.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*n),h=2*(a*t-s*r),u=2*(s*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-s*u,this.z=r+l*u+s*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Cc.copy(this).projectOnVector(e),this.sub(Cc)}reflect(e){return this.sub(Cc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Cc=new k,Du=new vi,Yi=class{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(kn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(kn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=kn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,kn):kn.fromBufferAttribute(s,o),kn.applyMatrix4(e.matrixWorld),this.expandByPoint(kn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),pa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),pa.copy(n.boundingBox)),pa.applyMatrix4(e.matrixWorld),this.union(pa)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,kn),kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Rs),ma.subVectors(this.max,Rs),Hr.subVectors(e.a,Rs),Gr.subVectors(e.b,Rs),Wr.subVectors(e.c,Rs),Oi.subVectors(Gr,Hr),ki.subVectors(Wr,Gr),cr.subVectors(Hr,Wr);let t=[0,-Oi.z,Oi.y,0,-ki.z,ki.y,0,-cr.z,cr.y,Oi.z,0,-Oi.x,ki.z,0,-ki.x,cr.z,0,-cr.x,-Oi.y,Oi.x,0,-ki.y,ki.x,0,-cr.y,cr.x,0];return!Ac(t,Hr,Gr,Wr,ma)||(t=[1,0,0,0,1,0,0,0,1],!Ac(t,Hr,Gr,Wr,ma))?!1:(ga.crossVectors(Oi,ki),t=[ga.x,ga.y,ga.z],Ac(t,Hr,Gr,Wr,ma))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,kn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(kn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(hi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},hi=[new k,new k,new k,new k,new k,new k,new k,new k],kn=new k,pa=new Yi,Hr=new k,Gr=new k,Wr=new k,Oi=new k,ki=new k,cr=new k,Rs=new k,ma=new k,ga=new k,hr=new k;function Ac(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){hr.fromArray(i,s);let a=r.x*Math.abs(hr.x)+r.y*Math.abs(hr.y)+r.z*Math.abs(hr.z),l=e.dot(hr),c=t.dot(hr),h=n.dot(hr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Cm=new Yi,Is=new k,Rc=new k,ns=class{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Cm.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Is.subVectors(e,this.center);let t=Is.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Is,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Rc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Is.copy(e.center).add(Rc)),this.expandByPoint(Is.copy(e.center).sub(Rc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},ui=new k,Ic=new k,_a=new k,zi=new k,Pc=new k,xa=new k,Dc=new k,Hs=class{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ui)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ui.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ui.copy(this.origin).addScaledVector(this.direction,t),ui.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Ic.copy(e).add(t).multiplyScalar(.5),_a.copy(t).sub(e).normalize(),zi.copy(this.origin).sub(Ic);let s=e.distanceTo(t)*.5,o=-this.direction.dot(_a),a=zi.dot(this.direction),l=-zi.dot(_a),c=zi.lengthSq(),h=Math.abs(1-o*o),u,f,p,g;if(h>0)if(u=o*l-a,f=o*a-l,g=s*h,u>=0)if(f>=-g)if(f<=g){let v=1/h;u*=v,f*=v,p=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=s,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;else f=-s,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*s+a)),f=u>0?-s:Math.min(Math.max(-s,-l),s),p=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(u=Math.max(0,-(o*s+a)),f=u>0?s:Math.min(Math.max(-s,-l),s),p=-u*u+f*(f+2*l)+c);else f=o>0?-s:s,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Ic).addScaledVector(_a,f),p}intersectSphere(e,t){ui.subVectors(e.center,this.origin);let n=ui.dot(this.direction),r=ui.dot(ui)-n*n,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),h>=0?(s=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),u>=0?(a=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,ui)!==null}intersectTriangle(e,t,n,r,s){Pc.subVectors(t,e),xa.subVectors(n,e),Dc.crossVectors(Pc,xa);let o=this.direction.dot(Dc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;zi.subVectors(this.origin,e);let l=a*this.direction.dot(xa.crossVectors(zi,xa));if(l<0)return null;let c=a*this.direction.dot(Pc.cross(zi));if(c<0||l+c>o)return null;let h=-a*zi.dot(Dc);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Tt=class i{constructor(e,t,n,r,s,o,a,l,c,h,u,f,p,g,v,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c,h,u,f,p,g,v,m)}set(e,t,n,r,s,o,a,l,c,h,u,f,p,g,v,m){let d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=g,d[11]=v,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,r=1/Xr.setFromMatrixColumn(e,0).length(),s=1/Xr.setFromMatrixColumn(e,1).length(),o=1/Xr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let f=o*h,p=o*u,g=a*h,v=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+g*c,t[5]=f-v*c,t[9]=-a*l,t[2]=v-f*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*h,p=l*u,g=c*h,v=c*u;t[0]=f+v*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=p*a-g,t[6]=v+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*h,p=l*u,g=c*h,v=c*u;t[0]=f-v*a,t[4]=-o*u,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*h,t[9]=v-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*h,p=o*u,g=a*h,v=a*u;t[0]=l*h,t[4]=g*c-p,t[8]=f*c+v,t[1]=l*u,t[5]=v*c+f,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,p=o*c,g=a*l,v=a*c;t[0]=l*h,t[4]=v-f*u,t[8]=g*u+p,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=p*u+g,t[10]=f-v*u}else if(e.order==="XZY"){let f=o*l,p=o*c,g=a*l,v=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+v,t[5]=o*h,t[9]=p*u-g,t[2]=g*u-p,t[6]=a*h,t[10]=v*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Am,e,Rm)}lookAt(e,t,n){let r=this.elements;return _n.subVectors(e,t),_n.lengthSq()===0&&(_n.z=1),_n.normalize(),Vi.crossVectors(n,_n),Vi.lengthSq()===0&&(Math.abs(n.z)===1?_n.x+=1e-4:_n.z+=1e-4,_n.normalize(),Vi.crossVectors(n,_n)),Vi.normalize(),va.crossVectors(_n,Vi),r[0]=Vi.x,r[4]=va.x,r[8]=_n.x,r[1]=Vi.y,r[5]=va.y,r[9]=_n.y,r[2]=Vi.z,r[6]=va.z,r[10]=_n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],p=n[13],g=n[2],v=n[6],m=n[10],d=n[14],A=n[3],C=n[7],y=n[11],L=n[15],P=r[0],D=r[4],F=r[8],S=r[12],_=r[1],R=r[5],V=r[9],H=r[13],Q=r[2],Z=r[6],J=r[10],ee=r[14],X=r[3],me=r[7],ve=r[11],be=r[15];return s[0]=o*P+a*_+l*Q+c*X,s[4]=o*D+a*R+l*Z+c*me,s[8]=o*F+a*V+l*J+c*ve,s[12]=o*S+a*H+l*ee+c*be,s[1]=h*P+u*_+f*Q+p*X,s[5]=h*D+u*R+f*Z+p*me,s[9]=h*F+u*V+f*J+p*ve,s[13]=h*S+u*H+f*ee+p*be,s[2]=g*P+v*_+m*Q+d*X,s[6]=g*D+v*R+m*Z+d*me,s[10]=g*F+v*V+m*J+d*ve,s[14]=g*S+v*H+m*ee+d*be,s[3]=A*P+C*_+y*Q+L*X,s[7]=A*D+C*R+y*Z+L*me,s[11]=A*F+C*V+y*J+L*ve,s[15]=A*S+C*H+y*ee+L*be,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],p=e[14],g=e[3],v=e[7],m=e[11],d=e[15];return g*(+s*l*u-r*c*u-s*a*f+n*c*f+r*a*p-n*l*p)+v*(+t*l*p-t*c*f+s*o*f-r*o*p+r*c*h-s*l*h)+m*(+t*c*u-t*a*p-s*o*u+n*o*p+s*a*h-n*c*h)+d*(-r*a*h-t*l*u+t*a*f+r*o*u-n*o*f+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],p=e[11],g=e[12],v=e[13],m=e[14],d=e[15],A=u*m*c-v*f*c+v*l*p-a*m*p-u*l*d+a*f*d,C=g*f*c-h*m*c-g*l*p+o*m*p+h*l*d-o*f*d,y=h*v*c-g*u*c+g*a*p-o*v*p-h*a*d+o*u*d,L=g*u*l-h*v*l-g*a*f+o*v*f+h*a*m-o*u*m,P=t*A+n*C+r*y+s*L;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/P;return e[0]=A*D,e[1]=(v*f*s-u*m*s-v*r*p+n*m*p+u*r*d-n*f*d)*D,e[2]=(a*m*s-v*l*s+v*r*c-n*m*c-a*r*d+n*l*d)*D,e[3]=(u*l*s-a*f*s-u*r*c+n*f*c+a*r*p-n*l*p)*D,e[4]=C*D,e[5]=(h*m*s-g*f*s+g*r*p-t*m*p-h*r*d+t*f*d)*D,e[6]=(g*l*s-o*m*s-g*r*c+t*m*c+o*r*d-t*l*d)*D,e[7]=(o*f*s-h*l*s+h*r*c-t*f*c-o*r*p+t*l*p)*D,e[8]=y*D,e[9]=(g*u*s-h*v*s-g*n*p+t*v*p+h*n*d-t*u*d)*D,e[10]=(o*v*s-g*a*s+g*n*c-t*v*c-o*n*d+t*a*d)*D,e[11]=(h*a*s-o*u*s-h*n*c+t*u*c+o*n*p-t*a*p)*D,e[12]=L*D,e[13]=(h*v*r-g*u*r+g*n*f-t*v*f-h*n*m+t*u*m)*D,e[14]=(g*a*r-o*v*r-g*n*l+t*v*l+o*n*m-t*a*m)*D,e[15]=(o*u*r-h*a*r+h*n*l-t*u*l-o*n*f+t*a*f)*D,this}scale(e){let t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,h*a+n,h*l-r*o,0,c*l-r*a,h*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,h=o+o,u=a+a,f=s*c,p=s*h,g=s*u,v=o*h,m=o*u,d=a*u,A=l*c,C=l*h,y=l*u,L=n.x,P=n.y,D=n.z;return r[0]=(1-(v+d))*L,r[1]=(p+y)*L,r[2]=(g-C)*L,r[3]=0,r[4]=(p-y)*P,r[5]=(1-(f+d))*P,r[6]=(m+A)*P,r[7]=0,r[8]=(g+C)*D,r[9]=(m-A)*D,r[10]=(1-(f+v))*D,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements,s=Xr.set(r[0],r[1],r[2]).length(),o=Xr.set(r[4],r[5],r[6]).length(),a=Xr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],zn.copy(this);let c=1/s,h=1/o,u=1/a;return zn.elements[0]*=c,zn.elements[1]*=c,zn.elements[2]*=c,zn.elements[4]*=h,zn.elements[5]*=h,zn.elements[6]*=h,zn.elements[8]*=u,zn.elements[9]*=u,zn.elements[10]*=u,t.setFromRotationMatrix(zn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=ti){let l=this.elements,c=2*s/(t-e),h=2*s/(n-r),u=(t+e)/(t-e),f=(n+r)/(n-r),p,g;if(a===ti)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Os)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=ti){let l=this.elements,c=1/(t-e),h=1/(n-r),u=1/(o-s),f=(t+e)*c,p=(n+r)*h,g,v;if(a===ti)g=(o+s)*u,v=-2*u;else if(a===Os)g=s*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Xr=new k,zn=new Tt,Am=new k(0,0,0),Rm=new k(1,1,1),Vi=new k,va=new k,_n=new k,Lu=new Tt,Nu=new vi,yi=(()=>{class i{constructor(t=0,n=0,r=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,r,s=this._order){return this._x=t,this._y=n,this._z=r,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,r=!0){let s=t.elements,o=s[0],a=s[4],l=s[8],c=s[1],h=s[5],u=s[9],f=s[2],p=s[6],g=s[10];switch(n){case"XYZ":this._y=Math.asin(ot(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,g),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(p,h),this._z=0);break;case"YXZ":this._x=Math.asin(-ot(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(l,g),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-f,o),this._z=0);break;case"ZXY":this._x=Math.asin(ot(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,g),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-ot(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,g),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(ot(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-f,o)):(this._x=0,this._y=Math.atan2(l,g));break;case"XZY":this._z=Math.asin(-ot(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,h),this._y=Math.atan2(l,o)):(this._x=Math.atan2(-u,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,r){return Lu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Lu,n,r)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return Nu.setFromEuler(this),this.setFromQuaternion(Nu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}return i.DEFAULT_ORDER="XYZ",i})(),is=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Im=0,Fu=new k,qr=new vi,di=new Tt,ya=new k,Ps=new k,Pm=new k,Dm=new vi,Uu=new k(1,0,0),Bu=new k(0,1,0),Ou=new k(0,0,1),ku={type:"added"},Lm={type:"removed"},Yr={type:"childadded",child:null},Lc={type:"childremoved",child:null},Ln=(()=>{class i extends xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Im++}),this.uuid=ms(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new k,n=new yi,r=new vi,s=new k(1,1,1);function o(){r.setFromEuler(n,!1)}function a(){n.setFromQuaternion(r,void 0,!1)}n._onChange(o),r._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Tt},normalMatrix:{value:new et}}),this.matrix=new Tt,this.matrixWorld=new Tt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new is,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return qr.setFromAxisAngle(t,n),this.quaternion.multiply(qr),this}rotateOnWorldAxis(t,n){return qr.setFromAxisAngle(t,n),this.quaternion.premultiply(qr),this}rotateX(t){return this.rotateOnAxis(Uu,t)}rotateY(t){return this.rotateOnAxis(Bu,t)}rotateZ(t){return this.rotateOnAxis(Ou,t)}translateOnAxis(t,n){return Fu.copy(t).applyQuaternion(this.quaternion),this.position.add(Fu.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(Uu,t)}translateY(t){return this.translateOnAxis(Bu,t)}translateZ(t){return this.translateOnAxis(Ou,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(di.copy(this.matrixWorld).invert())}lookAt(t,n,r){t.isVector3?ya.copy(t):ya.set(t,n,r);let s=this.parent;this.updateWorldMatrix(!0,!1),Ps.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?di.lookAt(Ps,ya,this.up):di.lookAt(ya,Ps,this.up),this.quaternion.setFromRotationMatrix(di),s&&(di.extractRotation(s.matrixWorld),qr.setFromRotationMatrix(di),this.quaternion.premultiply(qr.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ku),Yr.child=t,this.dispatchEvent(Yr),Yr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(Lm),Lc.child=t,this.dispatchEvent(Lc),Lc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),di.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),di.multiply(t.parent.matrixWorld)),t.applyMatrix4(di),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ku),Yr.child=t,this.dispatchEvent(Yr),Yr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let r=0,s=this.children.length;r<s;r++){let a=this.children[r].getObjectByProperty(t,n);if(a!==void 0)return a}}getObjectsByProperty(t,n,r=[]){this[t]===n&&r.push(this);let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].getObjectsByProperty(t,n,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ps,t,Pm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ps,Dm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);let n=this.children;for(let r=0,s=n.length;r<s;r++)n[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let n=this.children;for(let r=0,s=n.length;r<s;r++)n[r].traverseVisible(t)}traverseAncestors(t){let n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let n=this.children;for(let r=0,s=n.length;r<s;r++)n[r].updateMatrixWorld(t)}updateWorldMatrix(t,n){let r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){let n=t===void 0||typeof t=="string",r={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(l=>Xn(pt({},l),{boundingBox:l.boundingBox?{min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}:void 0,boundingSphere:l.boundingSphere?{radius:l.boundingSphere.radius,center:l.boundingSphere.center.toArray()}:void 0})),s.instanceInfo=this._instanceInfo.map(l=>pt({},l)),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function o(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);let l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){let c=l.shapes;if(Array.isArray(c))for(let h=0,u=c.length;h<u;h++){let f=c[h];o(t.shapes,f)}else o(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let l=[];for(let c=0,h=this.material.length;c<h;c++)l.push(o(t.materials,this.material[c]));s.material=l}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){let c=this.animations[l];s.animations.push(o(t.animations,c))}}if(n){let l=a(t.geometries),c=a(t.materials),h=a(t.textures),u=a(t.images),f=a(t.shapes),p=a(t.skeletons),g=a(t.animations),v=a(t.nodes);l.length>0&&(r.geometries=l),c.length>0&&(r.materials=c),h.length>0&&(r.textures=h),u.length>0&&(r.images=u),f.length>0&&(r.shapes=f),p.length>0&&(r.skeletons=p),g.length>0&&(r.animations=g),v.length>0&&(r.nodes=v)}return r.object=s,r;function a(l){let c=[];for(let h in l){let u=l[h];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let r=0;r<t.children.length;r++){let s=t.children[r];this.add(s.clone())}return this}}return i.DEFAULT_UP=new k(0,1,0),i.DEFAULT_MATRIX_AUTO_UPDATE=!0,i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0,i})(),Vn=new k,fi=new k,Nc=new k,pi=new k,jr=new k,$r=new k,zu=new k,Fc=new k,Uc=new k,Bc=new k,Oc=new Rt,kc=new Rt,zc=new Rt,Wi=class i{constructor(e=new k,t=new k,n=new k){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Vn.subVectors(e,t),r.cross(Vn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Vn.subVectors(r,t),fi.subVectors(n,t),Nc.subVectors(e,t);let o=Vn.dot(Vn),a=Vn.dot(fi),l=Vn.dot(Nc),c=fi.dot(fi),h=fi.dot(Nc),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;let f=1/u,p=(c*l-a*h)*f,g=(o*h-a*l)*f;return s.set(1-p-g,g,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,pi)===null?!1:pi.x>=0&&pi.y>=0&&pi.x+pi.y<=1}static getInterpolation(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,pi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,pi.x),l.addScaledVector(o,pi.y),l.addScaledVector(a,pi.z),l)}static getInterpolatedAttribute(e,t,n,r,s,o){return Oc.setScalar(0),kc.setScalar(0),zc.setScalar(0),Oc.fromBufferAttribute(e,t),kc.fromBufferAttribute(e,n),zc.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Oc,s.x),o.addScaledVector(kc,s.y),o.addScaledVector(zc,s.z),o}static isFrontFacing(e,t,n,r){return Vn.subVectors(n,t),fi.subVectors(e,t),Vn.cross(fi).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vn.subVectors(this.c,this.b),fi.subVectors(this.a,this.b),Vn.cross(fi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,s=this.c,o,a;jr.subVectors(r,n),$r.subVectors(s,n),Fc.subVectors(e,n);let l=jr.dot(Fc),c=$r.dot(Fc);if(l<=0&&c<=0)return t.copy(n);Uc.subVectors(e,r);let h=jr.dot(Uc),u=$r.dot(Uc);if(h>=0&&u<=h)return t.copy(r);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(jr,o);Bc.subVectors(e,s);let p=jr.dot(Bc),g=$r.dot(Bc);if(g>=0&&p<=g)return t.copy(s);let v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector($r,a);let m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return zu.subVectors(s,r),a=(u-h)/(u-h+(p-g)),t.copy(r).addScaledVector(zu,a);let d=1/(m+v+f);return o=v*d,a=f*d,t.copy(n).addScaledVector(jr,o).addScaledVector($r,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},qd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hi={h:0,s:0,l:0},ba={h:0,s:0,l:0};function Vc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Qe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=vn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=dt.workingColorSpace){return this.r=e,this.g=t,this.b=n,dt.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=dt.workingColorSpace){if(e=Mm(e,1),t=ot(t,0,1),n=ot(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Vc(o,s,e+1/3),this.g=Vc(o,s,e),this.b=Vc(o,s,e-1/3)}return dt.toWorkingColorSpace(this,r),this}setStyle(e,t=vn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=vn){let n=qd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=gi(e.r),this.g=gi(e.g),this.b=gi(e.b),this}copyLinearToSRGB(e){return this.r=Qr(e.r),this.g=Qr(e.g),this.b=Qr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=vn){return dt.fromWorkingColorSpace(on.copy(this),e),Math.round(ot(on.r*255,0,255))*65536+Math.round(ot(on.g*255,0,255))*256+Math.round(ot(on.b*255,0,255))}getHexString(e=vn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=dt.workingColorSpace){dt.fromWorkingColorSpace(on.copy(this),t);let n=on.r,r=on.g,s=on.b,o=Math.max(n,r,s),a=Math.min(n,r,s),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-n)/u+2;break;case s:l=(n-r)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=dt.workingColorSpace){return dt.fromWorkingColorSpace(on.copy(this),t),e.r=on.r,e.g=on.g,e.b=on.b,e}getStyle(e=vn){dt.fromWorkingColorSpace(on.copy(this),e);let t=on.r,n=on.g,r=on.b;return e!==vn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Hi),this.setHSL(Hi.h+e,Hi.s+t,Hi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Hi),e.getHSL(ba);let n=wc(Hi.h,ba.h,t),r=wc(Hi.s,ba.s,t),s=wc(Hi.l,ba.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},on=new Qe;Qe.NAMES=qd;var Nm=0,bi=class extends xi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Nm++}),this.uuid=ms(),this.name="",this.type="Material",this.blending=pr,this.side=_i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ua,this.blendDst=Ba,this.blendEquation=qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qe(0,0,0),this.blendAlpha=0,this.depthFunc=mr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fr,this.stencilZFail=fr,this.stencilZPass=fr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==pr&&(n.blending=this.blending),this.side!==_i&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ua&&(n.blendSrc=this.blendSrc),this.blendDst!==Ba&&(n.blendDst=this.blendDst),this.blendEquation!==qi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==mr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Qc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==fr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==fr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Gn=class extends bi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yi,this.combine=_l,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var kt=new k,Sa=new ge,Fm=0,yn=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Fm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=eh,this.updateRanges=[],this.gpuType=oi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Sa.fromBufferAttribute(this,t),Sa.applyMatrix3(e),this.setXY(t,Sa.x,Sa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix3(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix4(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyNormalMatrix(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.transformDirection(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=As(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=un(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=As(t,this.array)),t}setX(e,t){return this.normalized&&(t=un(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=As(t,this.array)),t}setY(e,t){return this.normalized&&(t=un(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=As(t,this.array)),t}setZ(e,t){return this.normalized&&(t=un(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=As(t,this.array)),t}setW(e,t){return this.normalized&&(t=un(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=un(t,this.array),n=un(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=un(t,this.array),n=un(n,this.array),r=un(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=un(t,this.array),n=un(n,this.array),r=un(r,this.array),s=un(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==eh&&(e.usage=this.usage),e}};var Gs=class extends yn{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ws=class extends yn{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Ut=class extends yn{constructor(e,t,n){super(new Float32Array(e),t,n)}},Um=0,Pn=new Tt,Hc=new Ln,Kr=new k,xn=new Yi,Ds=new Yi,$t=new k,Nn=class i extends xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Um++}),this.uuid=ms(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Mh(e)?Ws:Gs)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new et().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Pn.makeRotationFromQuaternion(e),this.applyMatrix4(Pn),this}rotateX(e){return Pn.makeRotationX(e),this.applyMatrix4(Pn),this}rotateY(e){return Pn.makeRotationY(e),this.applyMatrix4(Pn),this}rotateZ(e){return Pn.makeRotationZ(e),this.applyMatrix4(Pn),this}translate(e,t,n){return Pn.makeTranslation(e,t,n),this.applyMatrix4(Pn),this}scale(e,t,n){return Pn.makeScale(e,t,n),this.applyMatrix4(Pn),this}lookAt(e){return Hc.lookAt(e),Hc.updateMatrix(),this.applyMatrix4(Hc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Kr).negate(),this.translate(Kr.x,Kr.y,Kr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let r=0,s=e.length;r<s;r++){let o=e[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ut(n,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let s=t[n];xn.setFromBufferAttribute(s),this.morphTargetsRelative?($t.addVectors(this.boundingBox.min,xn.min),this.boundingBox.expandByPoint($t),$t.addVectors(this.boundingBox.max,xn.max),this.boundingBox.expandByPoint($t)):(this.boundingBox.expandByPoint(xn.min),this.boundingBox.expandByPoint(xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ns);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){let n=this.boundingSphere.center;if(xn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];Ds.setFromBufferAttribute(a),this.morphTargetsRelative?($t.addVectors(xn.min,Ds.min),xn.expandByPoint($t),$t.addVectors(xn.max,Ds.max),xn.expandByPoint($t)):(xn.expandByPoint(Ds.min),xn.expandByPoint(Ds.max))}xn.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)$t.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared($t));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)$t.fromBufferAttribute(a,c),l&&(Kr.fromBufferAttribute(e,c),$t.add(Kr)),r=Math.max(r,n.distanceToSquared($t))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yn(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let F=0;F<n.count;F++)a[F]=new k,l[F]=new k;let c=new k,h=new k,u=new k,f=new ge,p=new ge,g=new ge,v=new k,m=new k;function d(F,S,_){c.fromBufferAttribute(n,F),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,_),f.fromBufferAttribute(s,F),p.fromBufferAttribute(s,S),g.fromBufferAttribute(s,_),h.sub(c),u.sub(c),p.sub(f),g.sub(f);let R=1/(p.x*g.y-g.x*p.y);isFinite(R)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(R),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(R),a[F].add(v),a[S].add(v),a[_].add(v),l[F].add(m),l[S].add(m),l[_].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let F=0,S=A.length;F<S;++F){let _=A[F],R=_.start,V=_.count;for(let H=R,Q=R+V;H<Q;H+=3)d(e.getX(H+0),e.getX(H+1),e.getX(H+2))}let C=new k,y=new k,L=new k,P=new k;function D(F){L.fromBufferAttribute(r,F),P.copy(L);let S=a[F];C.copy(S),C.sub(L.multiplyScalar(L.dot(S))).normalize(),y.crossVectors(P,S);let R=y.dot(l[F])<0?-1:1;o.setXYZW(F,C.x,C.y,C.z,R)}for(let F=0,S=A.length;F<S;++F){let _=A[F],R=_.start,V=_.count;for(let H=R,Q=R+V;H<Q;H+=3)D(e.getX(H+0)),D(e.getX(H+1)),D(e.getX(H+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new yn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let r=new k,s=new k,o=new k,a=new k,l=new k,c=new k,h=new k,u=new k;if(e)for(let f=0,p=e.count;f<p;f+=3){let g=e.getX(f+0),v=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)$t.fromBufferAttribute(e,t),$t.normalize(),e.setXYZ(t,$t.x,$t.y,$t.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),p=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*h;for(let d=0;d<h;d++)f[g++]=c[p++]}return new yn(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=e(l,n);t.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],p=e(f,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let c in r){let h=r[c];this.setAttribute(c,h.clone(t))}let s=e.morphAttributes;for(let c in s){let h=[],u=s[c];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Vu=new Tt,ur=new Hs,Ma=new ns,Hu=new k,wa=new k,Ea=new k,Ta=new k,Gc=new k,Ca=new k,Gu=new k,Aa=new k,Mt=class extends Ln{constructor(e=new Nn,t=new Gn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){Ca.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=a[l],u=s[l];h!==0&&(Gc.fromBufferAttribute(u,e),o?Ca.addScaledVector(Gc,h):Ca.addScaledVector(Gc.sub(t),h))}t.add(Ca)}return t}raycast(e,t){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ma.copy(n.boundingSphere),Ma.applyMatrix4(s),ur.copy(e.ray).recast(e.near),!(Ma.containsPoint(ur.origin)===!1&&(ur.intersectSphere(Ma,Hu)===null||ur.origin.distanceToSquared(Hu)>(e.far-e.near)**2))&&(Vu.copy(s).invert(),ur.copy(e.ray).applyMatrix4(Vu),!(n.boundingBox!==null&&ur.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ur)))}_computeIntersections(e,t,n){let r,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){let m=f[g],d=o[m.materialIndex],A=Math.max(m.start,p.start),C=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=A,L=C;y<L;y+=3){let P=a.getX(y),D=a.getX(y+1),F=a.getX(y+2);r=Ra(this,d,e,n,c,h,u,P,D,F),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=g,d=v;m<d;m+=3){let A=a.getX(m),C=a.getX(m+1),y=a.getX(m+2);r=Ra(this,o,e,n,c,h,u,A,C,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){let m=f[g],d=o[m.materialIndex],A=Math.max(m.start,p.start),C=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=A,L=C;y<L;y+=3){let P=y,D=y+1,F=y+2;r=Ra(this,d,e,n,c,h,u,P,D,F),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=g,d=v;m<d;m+=3){let A=m,C=m+1,y=m+2;r=Ra(this,o,e,n,c,h,u,A,C,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}};function Bm(i,e,t,n,r,s,o,a){let l;if(e.side===Ht?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===_i,a),l===null)return null;Aa.copy(a),Aa.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Aa);return c<t.near||c>t.far?null:{distance:c,point:Aa.clone(),object:i}}function Ra(i,e,t,n,r,s,o,a,l,c){i.getVertexPosition(a,wa),i.getVertexPosition(l,Ea),i.getVertexPosition(c,Ta);let h=Bm(i,e,t,n,wa,Ea,Ta,Gu);if(h){let u=new k;Wi.getBarycoord(Gu,wa,Ea,Ta,u),r&&(h.uv=Wi.getInterpolatedAttribute(r,a,l,c,u,new ge)),s&&(h.uv1=Wi.getInterpolatedAttribute(s,a,l,c,u,new ge)),o&&(h.normal=Wi.getInterpolatedAttribute(o,a,l,c,u,new k),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new k,materialIndex:0};Wi.getNormal(wa,Ea,Ta,f.normal),h.face=f,h.barycoord=u}return h}var rs=class i extends Nn{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,p=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,r,o,2),g("x","z","y",1,-1,e,n,-t,r,o,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Ut(c,3)),this.setAttribute("normal",new Ut(h,3)),this.setAttribute("uv",new Ut(u,2));function g(v,m,d,A,C,y,L,P,D,F,S){let _=y/D,R=L/F,V=y/2,H=L/2,Q=P/2,Z=D+1,J=F+1,ee=0,X=0,me=new k;for(let ve=0;ve<J;ve++){let be=ve*R-H;for(let Ue=0;Ue<Z;Ue++){let Ye=Ue*_-V;me[v]=Ye*A,me[m]=be*C,me[d]=Q,c.push(me.x,me.y,me.z),me[v]=0,me[m]=0,me[d]=P>0?1:-1,h.push(me.x,me.y,me.z),u.push(Ue/D),u.push(1-ve/F),ee+=1}}for(let ve=0;ve<F;ve++)for(let be=0;be<D;be++){let Ue=f+be+Z*ve,Ye=f+be+Z*(ve+1),Y=f+(be+1)+Z*(ve+1),se=f+(be+1)+Z*ve;l.push(Ue,Ye,se),l.push(Ye,Y,se),X+=6}a.addGroup(p,X,S),p+=X,f+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Sr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function an(i){let e={};for(let t=0;t<i.length;t++){let n=Sr(i[t]);for(let r in n)e[r]=n[r]}return e}function Om(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function wh(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:dt.workingColorSpace}var Yd={clone:Sr,merge:an},km=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,bn=class extends bi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=km,this.fragmentShader=zm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Sr(e.uniforms),this.uniformsGroups=Om(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Xs=class extends Ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Tt,this.projectionMatrix=new Tt,this.projectionMatrixInverse=new Tt,this.coordinateSystem=ti}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Gi=new k,Wu=new ge,Xu=new ge,zt=class extends Xs{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ks*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Mc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ks*2*Math.atan(Math.tan(Mc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Gi.x,Gi.y).multiplyScalar(-e/Gi.z),Gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Gi.x,Gi.y).multiplyScalar(-e/Gi.z)}getViewSize(e,t){return this.getViewBounds(e,Wu,Xu),t.subVectors(Xu,Wu)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Mc*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Jr=-90,Zr=1,Wa=class extends Ln{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new zt(Jr,Zr,e,t);r.layers=this.layers,this.add(r);let s=new zt(Jr,Zr,e,t);s.layers=this.layers,this.add(s);let o=new zt(Jr,Zr,e,t);o.layers=this.layers,this.add(o);let a=new zt(Jr,Zr,e,t);a.layers=this.layers,this.add(a);let l=new zt(Jr,Zr,e,t);l.layers=this.layers,this.add(l);let c=new zt(Jr,Zr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,l]=t;for(let c of t)this.remove(c);if(e===ti)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Os)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,r),e.render(t,h),e.setRenderTarget(u,f,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},qs=class extends nr{constructor(e=[],t=yr,n,r,s,o,a,l,c,h){super(e,t,n,r,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Xa=class extends ii{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new qs(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Hn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new rs(5,5,5),s=new bn({name:"CubemapFromEquirect",uniforms:Sr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ht,blending:Mi});s.uniforms.tEquirect.value=t;let o=new Mt(r,s),a=t.minFilter;return t.minFilter===er&&(t.minFilter=Hn),new Wa(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}},mi=class extends Ln{constructor(){super(),this.isGroup=!0,this.type="Group"}},Vm={type:"move"},ss=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let v of e.hand.values()){let m=t.getJointPose(v,n),d=this._getHandJoint(c,v);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Vm)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new mi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var ji=class extends Ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new yi,this.environmentIntensity=1,this.environmentRotation=new yi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var Wc=new k,Hm=new k,Gm=new et,ei=class{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Wc.subVectors(n,t).cross(Hm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Wc),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Gm.getNormalMatrix(e),r=this.coplanarPoint(Wc).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},dr=new ns,Ia=new k,os=class{constructor(e=new ei,t=new ei,n=new ei,r=new ei,s=new ei,o=new ei){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ti){let n=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],h=r[5],u=r[6],f=r[7],p=r[8],g=r[9],v=r[10],m=r[11],d=r[12],A=r[13],C=r[14],y=r[15];if(n[0].setComponents(l-s,f-c,m-p,y-d).normalize(),n[1].setComponents(l+s,f+c,m+p,y+d).normalize(),n[2].setComponents(l+o,f+h,m+g,y+A).normalize(),n[3].setComponents(l-o,f-h,m-g,y-A).normalize(),n[4].setComponents(l-a,f-u,m-v,y-C).normalize(),t===ti)n[5].setComponents(l+a,f+u,m+v,y+C).normalize();else if(t===Os)n[5].setComponents(a,u,v,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),dr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),dr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(dr)}intersectsSprite(e){return dr.center.set(0,0,0),dr.radius=.7071067811865476,dr.applyMatrix4(e.matrixWorld),this.intersectsSphere(dr)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Ia.x=r.normal.x>0?e.max.x:e.min.x,Ia.y=r.normal.y>0?e.max.y:e.min.y,Ia.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ia)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ys=class extends nr{constructor(e,t,n=tr,r,s,o,a=Dn,l=Dn,c,h=es){if(h!==es&&h!==ps)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,r,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ts(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}};var Sn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,s=n.length,o;t?o=t:o=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=n[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===o)return r/(s-1);let h=n[r],f=n[r+1]-h,p=(o-h)/f;return(r+p)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);let o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new ge:new k);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new k,r=[],s=[],o=[],a=new k,l=new Tt;for(let p=0;p<=e;p++){let g=p/e;r[p]=this.getTangentAt(g,new k)}s[0]=new k,o[0]=new k;let c=Number.MAX_VALUE,h=Math.abs(r[0].x),u=Math.abs(r[0].y),f=Math.abs(r[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(ot(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(r[p],s[p])}if(t===!0){let p=Math.acos(ot(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],p*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},as=class extends Sn{constructor(e=0,t=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new ge){let n=t,r=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);let a=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*h-p*u+this.aX,c=f*u+p*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},qa=class extends as{constructor(e,t,n,r,s,o){super(e,t,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Eh(){let i=0,e=0,t=0,n=0;function r(s,o,a,l){i=s,e=a,t=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,u){let f=(o-s)/c-(a-s)/(c+h)+(a-o)/h,p=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,p*=h,r(o,a,f,p)},calc:function(s){let o=s*s,a=o*s;return i+e*s+t*o+n*a}}}var Pa=new k,Xc=new Eh,qc=new Eh,Yc=new Eh,Ya=class extends Sn{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new k){let n=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=r[(a-1)%s]:(Pa.subVectors(r[0],r[1]).add(r[0]),c=Pa);let u=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?h=r[(a+2)%s]:(Pa.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=Pa),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),p),v=Math.pow(u.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(h),p);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),Xc.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,v,m),qc.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,v,m),Yc.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(Xc.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),qc.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Yc.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(Xc.calc(l),qc.calc(l),Yc.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new k().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function qu(i,e,t,n,r){let s=(n-e)*.5,o=(r-t)*.5,a=i*i,l=i*a;return(2*t-2*n+s+o)*l+(-3*t+3*n-2*s-o)*a+s*i+t}function Wm(i,e){let t=1-i;return t*t*e}function Xm(i,e){return 2*(1-i)*i*e}function qm(i,e){return i*i*e}function Ns(i,e,t,n){return Wm(i,e)+Xm(i,t)+qm(i,n)}function Ym(i,e){let t=1-i;return t*t*t*e}function jm(i,e){let t=1-i;return 3*t*t*i*e}function $m(i,e){return 3*(1-i)*i*i*e}function Km(i,e){return i*i*i*e}function Fs(i,e,t,n,r){return Ym(i,e)+jm(i,t)+$m(i,n)+Km(i,r)}var js=class extends Sn{constructor(e=new ge,t=new ge,n=new ge,r=new ge){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new ge){let n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Fs(e,r.x,s.x,o.x,a.x),Fs(e,r.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ja=class extends Sn{constructor(e=new k,t=new k,n=new k,r=new k){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new k){let n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Fs(e,r.x,s.x,o.x,a.x),Fs(e,r.y,s.y,o.y,a.y),Fs(e,r.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},$s=class extends Sn{constructor(e=new ge,t=new ge){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ge){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ge){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},$a=class extends Sn{constructor(e=new k,t=new k){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new k){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new k){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ks=class extends Sn{constructor(e=new ge,t=new ge,n=new ge){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ge){let n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(Ns(e,r.x,s.x,o.x),Ns(e,r.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ka=class extends Sn{constructor(e=new k,t=new k,n=new k){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new k){let n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(Ns(e,r.x,s.x,o.x),Ns(e,r.y,s.y,o.y),Ns(e,r.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Js=class extends Sn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ge){let n=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],h=r[o>r.length-2?r.length-1:o+1],u=r[o>r.length-3?r.length-1:o+2];return n.set(qu(a,l.x,c.x,h.x,u.x),qu(a,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new ge().fromArray(r))}return this}},th=Object.freeze({__proto__:null,ArcCurve:qa,CatmullRomCurve3:Ya,CubicBezierCurve:js,CubicBezierCurve3:ja,EllipseCurve:as,LineCurve:$s,LineCurve3:$a,QuadraticBezierCurve:Ks,QuadraticBezierCurve3:Ka,SplineCurve:Js}),Ja=class extends Sn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new th[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),s=0;for(;s<r.length;){if(r[s]>=n){let o=r[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,s=this.curves;r<s.length;r++){let o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let r=e.curves[t];this.curves.push(new th[r.type]().fromJSON(r))}return this}},Zs=class extends Ja{constructor(e){super(),this.type="Path",this.currentPoint=new ge,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new $s(this.currentPoint.clone(),new ge(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let s=new Ks(this.currentPoint.clone(),new ge(e,t),new ge(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,o){let a=new js(this.currentPoint.clone(),new ge(e,t),new ge(n,r),new ge(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Js(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,r,s,o),this}absarc(e,t,n,r,s,o){return this.absellipse(e,t,n,n,r,s,o),this}ellipse(e,t,n,r,s,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,r,s,o,a,l),this}absellipse(e,t,n,r,s,o,a,l){let c=new as(e,t,n,r,s,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},$i=class extends Zs{constructor(e){super(e),this.uuid=ms(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let r=e.holes[t];this.holes.push(new Zs().fromJSON(r))}return this}};function Jm(i,e,t=2){let n=e&&e.length,r=n?e[0]*t:i.length,s=jd(i,0,r,t,!0),o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(n&&(s=ng(i,e,s,t)),i.length>80*t){a=1/0,l=1/0;let h=-1/0,u=-1/0;for(let f=t;f<r;f+=t){let p=i[f],g=i[f+1];p<a&&(a=p),g<l&&(l=g),p>h&&(h=p),g>u&&(u=g)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return Qs(s,o,t,a,l,c,0),o}function jd(i,e,t,n,r){let s;if(r===fg(i,e,t,n)>0)for(let o=e;o<t;o+=n)s=Yu(o/n|0,i[o],i[o+1],s);else for(let o=t-n;o>=e;o-=n)s=Yu(o/n|0,i[o],i[o+1],s);return s&&ls(s,s.next)&&(to(s),s=s.next),s}function _r(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(ls(t,t.next)||At(t.prev,t,t.next)===0)){if(to(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Qs(i,e,t,n,r,s,o){if(!i)return;!o&&s&&ag(i,n,r,s);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(s?Qm(i,n,r,s):Zm(i)){e.push(l.i,i.i,c.i),to(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=eg(_r(i),e),Qs(i,e,t,n,r,s,2)):o===2&&tg(i,e,t,n,r,s):Qs(_r(i),e,t,n,r,s,1);break}}}function Zm(i){let e=i.prev,t=i,n=i.next;if(At(e,t,n)>=0)return!1;let r=e.x,s=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=Math.min(r,s,o),u=Math.min(a,l,c),f=Math.max(r,s,o),p=Math.max(a,l,c),g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=p&&Ls(r,a,s,l,o,c,g.x,g.y)&&At(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Qm(i,e,t,n){let r=i.prev,s=i,o=i.next;if(At(r,s,o)>=0)return!1;let a=r.x,l=s.x,c=o.x,h=r.y,u=s.y,f=o.y,p=Math.min(a,l,c),g=Math.min(h,u,f),v=Math.max(a,l,c),m=Math.max(h,u,f),d=nh(p,g,e,t,n),A=nh(v,m,e,t,n),C=i.prevZ,y=i.nextZ;for(;C&&C.z>=d&&y&&y.z<=A;){if(C.x>=p&&C.x<=v&&C.y>=g&&C.y<=m&&C!==r&&C!==o&&Ls(a,h,l,u,c,f,C.x,C.y)&&At(C.prev,C,C.next)>=0||(C=C.prevZ,y.x>=p&&y.x<=v&&y.y>=g&&y.y<=m&&y!==r&&y!==o&&Ls(a,h,l,u,c,f,y.x,y.y)&&At(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;C&&C.z>=d;){if(C.x>=p&&C.x<=v&&C.y>=g&&C.y<=m&&C!==r&&C!==o&&Ls(a,h,l,u,c,f,C.x,C.y)&&At(C.prev,C,C.next)>=0)return!1;C=C.prevZ}for(;y&&y.z<=A;){if(y.x>=p&&y.x<=v&&y.y>=g&&y.y<=m&&y!==r&&y!==o&&Ls(a,h,l,u,c,f,y.x,y.y)&&At(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function eg(i,e){let t=i;do{let n=t.prev,r=t.next.next;!ls(n,r)&&Kd(n,t,t.next,r)&&eo(n,r)&&eo(r,n)&&(e.push(n.i,t.i,r.i),to(t),to(t.next),t=i=r),t=t.next}while(t!==i);return _r(t)}function tg(i,e,t,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&hg(o,a)){let l=Jd(o,a);o=_r(o,o.next),l=_r(l,l.next),Qs(o,e,t,n,r,s,0),Qs(l,e,t,n,r,s,0);return}a=a.next}o=o.next}while(o!==i)}function ng(i,e,t,n){let r=[];for(let s=0,o=e.length;s<o;s++){let a=e[s]*n,l=s<o-1?e[s+1]*n:i.length,c=jd(i,a,l,n,!1);c===c.next&&(c.steiner=!0),r.push(cg(c))}r.sort(ig);for(let s=0;s<r.length;s++)t=rg(r[s],t);return t}function ig(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=n-r}return t}function rg(i,e){let t=sg(i,e);if(!t)return e;let n=Jd(t,i);return _r(n,n.next),_r(t,t.next)}function sg(i,e){let t=e,n=i.x,r=i.y,s=-1/0,o;if(ls(i,t))return t;do{if(ls(i,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){let u=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>s&&(s=u,o=t.x<t.next.x?t:t.next,u===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&$d(r<c?n:s,r,l,c,r<c?s:n,r,t.x,t.y)){let u=Math.abs(r-t.y)/(n-t.x);eo(t,i)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&og(o,t)))&&(o=t,h=u)}t=t.next}while(t!==a);return o}function og(i,e){return At(i.prev,i,e.prev)<0&&At(e.next,i,i.next)<0}function ag(i,e,t,n){let r=i;do r.z===0&&(r.z=nh(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,lg(r)}function lg(i){let e,t=1;do{let n=i,r;i=null;let s=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(r=n,n=n.nextZ,a--):(r=o,o=o.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;n=o}s.nextZ=null,t*=2}while(e>1);return i}function nh(i,e,t,n,r){return i=(i-t)*r|0,e=(e-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function cg(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function $d(i,e,t,n,r,s,o,a){return(r-o)*(e-a)>=(i-o)*(s-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(n-a)}function Ls(i,e,t,n,r,s,o,a){return!(i===o&&e===a)&&$d(i,e,t,n,r,s,o,a)}function hg(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!ug(i,e)&&(eo(i,e)&&eo(e,i)&&dg(i,e)&&(At(i.prev,i,e.prev)||At(i,e.prev,e))||ls(i,e)&&At(i.prev,i,i.next)>0&&At(e.prev,e,e.next)>0)}function At(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function ls(i,e){return i.x===e.x&&i.y===e.y}function Kd(i,e,t,n){let r=La(At(i,e,t)),s=La(At(i,e,n)),o=La(At(t,n,i)),a=La(At(t,n,e));return!!(r!==s&&o!==a||r===0&&Da(i,t,e)||s===0&&Da(i,n,e)||o===0&&Da(t,i,n)||a===0&&Da(t,e,n))}function Da(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function La(i){return i>0?1:i<0?-1:0}function ug(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Kd(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function eo(i,e){return At(i.prev,i,i.next)<0?At(i,e,i.next)>=0&&At(i,i.prev,e)>=0:At(i,e,i.prev)<0||At(i,i.next,e)<0}function dg(i,e){let t=i,n=!1,r=(i.x+e.x)/2,s=(i.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Jd(i,e){let t=ih(i.i,i.x,i.y),n=ih(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function Yu(i,e,t,n){let r=ih(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function to(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ih(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function fg(i,e,t,n){let r=0;for(let s=e,o=t-n;s<t;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}var rh=class{static triangulate(e,t,n=2){return Jm(e,t,n)}},ni=class i{static area(e){let t=e.length,n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],r=[],s=[];ju(e),$u(n,e);let o=e.length;t.forEach(ju);for(let l=0;l<t.length;l++)r.push(o),o+=t[l].length,$u(n,t[l]);let a=rh.triangulate(n,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}};function ju(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function $u(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var no=class i extends Nn{constructor(e=new $i([new ge(.5,.5),new ge(-.5,.5),new ge(-.5,-.5),new ge(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new Ut(r,3)),this.setAttribute("uv",new Ut(s,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:p-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,d=t.extrudePath,A=t.UVGenerator!==void 0?t.UVGenerator:pg,C,y=!1,L,P,D,F;d&&(C=d.getSpacedPoints(h),y=!0,f=!1,L=d.computeFrenetFrames(h,!1),P=new k,D=new k,F=new k),f||(m=0,p=0,g=0,v=0);let S=a.extractPoints(c),_=S.shape,R=S.holes;if(!ni.isClockWise(_)){_=_.reverse();for(let w=0,fe=R.length;w<fe;w++){let oe=R[w];ni.isClockWise(oe)&&(R[w]=oe.reverse())}}function H(w){let oe=10000000000000001e-36,he=w[0];for(let te=1;te<=w.length;te++){let Fe=te%w.length,ae=w[Fe],E=ae.x-he.x,x=ae.y-he.y,O=E*E+x*x,K=Math.max(Math.abs(ae.x),Math.abs(ae.y),Math.abs(he.x),Math.abs(he.y)),ie=oe*K*K;if(O<=ie){w.splice(Fe,1),te--;continue}he=ae}}H(_),R.forEach(H);let Q=R.length,Z=_;for(let w=0;w<Q;w++){let fe=R[w];_=_.concat(fe)}function J(w,fe,oe){return fe||console.error("THREE.ExtrudeGeometry: vec does not exist"),w.clone().addScaledVector(fe,oe)}let ee=_.length;function X(w,fe,oe){let he,te,Fe,ae=w.x-fe.x,E=w.y-fe.y,x=oe.x-w.x,O=oe.y-w.y,K=ae*ae+E*E,ie=ae*O-E*x;if(Math.abs(ie)>Number.EPSILON){let q=Math.sqrt(K),Le=Math.sqrt(x*x+O*O),ye=fe.x-E/q,Be=fe.y+ae/q,Xe=oe.x-O/Le,le=oe.y+x/Le,Te=((Xe-ye)*O-(le-Be)*x)/(ae*O-E*x);he=ye+ae*Te-w.x,te=Be+E*Te-w.y;let He=he*he+te*te;if(He<=2)return new ge(he,te);Fe=Math.sqrt(He/2)}else{let q=!1;ae>Number.EPSILON?x>Number.EPSILON&&(q=!0):ae<-Number.EPSILON?x<-Number.EPSILON&&(q=!0):Math.sign(E)===Math.sign(O)&&(q=!0),q?(he=-E,te=ae,Fe=Math.sqrt(K)):(he=ae,te=E,Fe=Math.sqrt(K/2))}return new ge(he/Fe,te/Fe)}let me=[];for(let w=0,fe=Z.length,oe=fe-1,he=w+1;w<fe;w++,oe++,he++)oe===fe&&(oe=0),he===fe&&(he=0),me[w]=X(Z[w],Z[oe],Z[he]);let ve=[],be,Ue=me.concat();for(let w=0,fe=Q;w<fe;w++){let oe=R[w];be=[];for(let he=0,te=oe.length,Fe=te-1,ae=he+1;he<te;he++,Fe++,ae++)Fe===te&&(Fe=0),ae===te&&(ae=0),be[he]=X(oe[he],oe[Fe],oe[ae]);ve.push(be),Ue=Ue.concat(be)}let Ye;if(m===0)Ye=ni.triangulateShape(Z,R);else{let w=[],fe=[];for(let oe=0;oe<m;oe++){let he=oe/m,te=p*Math.cos(he*Math.PI/2),Fe=g*Math.sin(he*Math.PI/2)+v;for(let ae=0,E=Z.length;ae<E;ae++){let x=J(Z[ae],me[ae],Fe);Ve(x.x,x.y,-te),he===0&&w.push(x)}for(let ae=0,E=Q;ae<E;ae++){let x=R[ae];be=ve[ae];let O=[];for(let K=0,ie=x.length;K<ie;K++){let q=J(x[K],be[K],Fe);Ve(q.x,q.y,-te),he===0&&O.push(q)}he===0&&fe.push(O)}}Ye=ni.triangulateShape(w,fe)}let Y=Ye.length,se=g+v;for(let w=0;w<ee;w++){let fe=f?J(_[w],Ue[w],se):_[w];y?(D.copy(L.normals[0]).multiplyScalar(fe.x),P.copy(L.binormals[0]).multiplyScalar(fe.y),F.copy(C[0]).add(D).add(P),Ve(F.x,F.y,F.z)):Ve(fe.x,fe.y,0)}for(let w=1;w<=h;w++)for(let fe=0;fe<ee;fe++){let oe=f?J(_[fe],Ue[fe],se):_[fe];y?(D.copy(L.normals[w]).multiplyScalar(oe.x),P.copy(L.binormals[w]).multiplyScalar(oe.y),F.copy(C[w]).add(D).add(P),Ve(F.x,F.y,F.z)):Ve(oe.x,oe.y,u/h*w)}for(let w=m-1;w>=0;w--){let fe=w/m,oe=p*Math.cos(fe*Math.PI/2),he=g*Math.sin(fe*Math.PI/2)+v;for(let te=0,Fe=Z.length;te<Fe;te++){let ae=J(Z[te],me[te],he);Ve(ae.x,ae.y,u+oe)}for(let te=0,Fe=R.length;te<Fe;te++){let ae=R[te];be=ve[te];for(let E=0,x=ae.length;E<x;E++){let O=J(ae[E],be[E],he);y?Ve(O.x,O.y+C[h-1].y,C[h-1].x+oe):Ve(O.x,O.y,u+oe)}}}de(),ue();function de(){let w=r.length/3;if(f){let fe=0,oe=ee*fe;for(let he=0;he<Y;he++){let te=Ye[he];De(te[2]+oe,te[1]+oe,te[0]+oe)}fe=h+m*2,oe=ee*fe;for(let he=0;he<Y;he++){let te=Ye[he];De(te[0]+oe,te[1]+oe,te[2]+oe)}}else{for(let fe=0;fe<Y;fe++){let oe=Ye[fe];De(oe[2],oe[1],oe[0])}for(let fe=0;fe<Y;fe++){let oe=Ye[fe];De(oe[0]+ee*h,oe[1]+ee*h,oe[2]+ee*h)}}n.addGroup(w,r.length/3-w,0)}function ue(){let w=r.length/3,fe=0;Pe(Z,fe),fe+=Z.length;for(let oe=0,he=R.length;oe<he;oe++){let te=R[oe];Pe(te,fe),fe+=te.length}n.addGroup(w,r.length/3-w,1)}function Pe(w,fe){let oe=w.length;for(;--oe>=0;){let he=oe,te=oe-1;te<0&&(te=w.length-1);for(let Fe=0,ae=h+m*2;Fe<ae;Fe++){let E=ee*Fe,x=ee*(Fe+1),O=fe+he+E,K=fe+te+E,ie=fe+te+x,q=fe+he+x;qe(O,K,ie,q)}}}function Ve(w,fe,oe){l.push(w),l.push(fe),l.push(oe)}function De(w,fe,oe){Ie(w),Ie(fe),Ie(oe);let he=r.length/3,te=A.generateTopUV(n,r,he-3,he-2,he-1);Ne(te[0]),Ne(te[1]),Ne(te[2])}function qe(w,fe,oe,he){Ie(w),Ie(fe),Ie(he),Ie(fe),Ie(oe),Ie(he);let te=r.length/3,Fe=A.generateSideWallUV(n,r,te-6,te-3,te-2,te-1);Ne(Fe[0]),Ne(Fe[1]),Ne(Fe[3]),Ne(Fe[1]),Ne(Fe[2]),Ne(Fe[3])}function Ie(w){r.push(l[w*3+0]),r.push(l[w*3+1]),r.push(l[w*3+2])}function Ne(w){s.push(w.x),s.push(w.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return mg(t,n,e)}static fromJSON(e,t){let n=[];for(let s=0,o=e.shapes.length;s<o;s++){let a=t[e.shapes[s]];n.push(a)}let r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new th[r.type]().fromJSON(r)),new i(n,e.options)}},pg={generateTopUV:function(i,e,t,n,r){let s=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[r*3],h=e[r*3+1];return[new ge(s,o),new ge(a,l),new ge(c,h)]},generateSideWallUV:function(i,e,t,n,r,s){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],f=e[r*3],p=e[r*3+1],g=e[r*3+2],v=e[s*3],m=e[s*3+1],d=e[s*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new ge(o,1-l),new ge(c,1-u),new ge(f,1-g),new ge(v,1-d)]:[new ge(a,1-l),new ge(h,1-u),new ge(p,1-g),new ge(m,1-d)]}};function mg(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){let s=i[n];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var xr=class i extends Nn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,h=l+1,u=e/a,f=t/l,p=[],g=[],v=[],m=[];for(let d=0;d<h;d++){let A=d*f-o;for(let C=0;C<c;C++){let y=C*u-s;g.push(y,-A,0),v.push(0,0,1),m.push(C/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let A=0;A<a;A++){let C=A+c*d,y=A+c*(d+1),L=A+1+c*(d+1),P=A+1+c*d;p.push(C,y,P),p.push(y,L,P)}this.setIndex(p),this.setAttribute("position",new Ut(g,3)),this.setAttribute("normal",new Ut(v,3)),this.setAttribute("uv",new Ut(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},cs=class i extends Nn{constructor(e=.5,t=1,n=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:o},n=Math.max(3,n),r=Math.max(1,r);let a=[],l=[],c=[],h=[],u=e,f=(t-e)/r,p=new k,g=new ge;for(let v=0;v<=r;v++){for(let m=0;m<=n;m++){let d=s+m/n*o;p.x=u*Math.cos(d),p.y=u*Math.sin(d),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,h.push(g.x,g.y)}u+=f}for(let v=0;v<r;v++){let m=v*(n+1);for(let d=0;d<n;d++){let A=d+m,C=A,y=A+n+1,L=A+n+2,P=A+1;a.push(C,y,P),a.push(y,L,P)}}this.setIndex(a),this.setAttribute("position",new Ut(l,3)),this.setAttribute("normal",new Ut(c,3)),this.setAttribute("uv",new Ut(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},io=class i extends Nn{constructor(e=new $i([new ge(0,.5),new ge(-.5,-.5),new ge(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],r=[],s=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Ut(r,3)),this.setAttribute("normal",new Ut(s,3)),this.setAttribute("uv",new Ut(o,2));function c(h){let u=r.length/3,f=h.extractPoints(t),p=f.shape,g=f.holes;ni.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,d=g.length;m<d;m++){let A=g[m];ni.isClockWise(A)===!0&&(g[m]=A.reverse())}let v=ni.triangulateShape(p,g);for(let m=0,d=g.length;m<d;m++){let A=g[m];p=p.concat(A)}for(let m=0,d=p.length;m<d;m++){let A=p[m];r.push(A.x,A.y,0),s.push(0,0,1),o.push(A.x,A.y)}for(let m=0,d=v.length;m<d;m++){let A=v[m],C=A[0]+u,y=A[1]+u,L=A[2]+u;n.push(C,y,L),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return gg(t,e)}static fromJSON(e,t){let n=[];for(let r=0,s=e.shapes.length;r<s;r++){let o=t[e.shapes[r]];n.push(o)}return new i(n,e.curveSegments)}};function gg(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let r=i[t];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e}var Ki=class i extends Nn{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new k,f=new k,p=[],g=[],v=[],m=[];for(let d=0;d<=n;d++){let A=[],C=d/n,y=0;d===0&&o===0?y=.5/t:d===n&&l===Math.PI&&(y=-.5/t);for(let L=0;L<=t;L++){let P=L/t;u.x=-e*Math.cos(r+P*s)*Math.sin(o+C*a),u.y=e*Math.cos(o+C*a),u.z=e*Math.sin(r+P*s)*Math.sin(o+C*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),v.push(f.x,f.y,f.z),m.push(P+y,1-C),A.push(c++)}h.push(A)}for(let d=0;d<n;d++)for(let A=0;A<t;A++){let C=h[d][A+1],y=h[d][A],L=h[d+1][A],P=h[d+1][A+1];(d!==0||o>0)&&p.push(C,y,P),(d!==n-1||l<Math.PI)&&p.push(y,L,P)}this.setIndex(p),this.setAttribute("position",new Ut(g,3)),this.setAttribute("normal",new Ut(v,3)),this.setAttribute("uv",new Ut(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var ri=class extends bi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ql,this.normalScale=new ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var ro=class extends bi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ql,this.normalScale=new ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yi,this.combine=_l,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Za=class extends bi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Dd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Qa=class extends bi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Na(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function _g(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var vr=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=t[++n],e<r)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},el=class extends vr{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Kc,endingEnd:Kc}}intervalChanged_(e,t,n){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Jc:s=e,a=2*t-n;break;case Zc:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Jc:o=e,l=2*n-t;break;case Zc:o=1,l=n+r[1]-r[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(n-t)/(r-t),v=g*g,m=v*g,d=-f*m+2*f*v-f*g,A=(1+f)*m+(-1.5-2*f)*v+(-.5+f)*g+1,C=(-1-p)*m+(1.5+p)*v+.5*g,y=p*m-p*v;for(let L=0;L!==a;++L)s[L]=d*o[h+L]+A*o[c+L]+C*o[l+L]+y*o[u+L];return s}},tl=class extends vr{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(r-t),u=1-h;for(let f=0;f!==a;++f)s[f]=o[c+f]*u+o[l+f]*h;return s}},nl=class extends vr{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Mn=class{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Na(t,this.TimeBufferType),this.values=Na(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Na(e.times,Array),values:Na(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new nl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new tl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new el(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Us:t=this.InterpolantFactoryMethodDiscrete;break;case za:t=this.InterpolantFactoryMethodLinear;break;case Fa:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Us;case this.InterpolantFactoryMethodLinear:return za;case this.InterpolantFactoryMethodSmooth:return Fa}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,s=0,o=r-1;for(;s!==r&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&_g(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Fa,s=e.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(r)l=!0;else{let u=a*n,f=u-n,p=u+n;for(let g=0;g!==n;++g){let v=t[u+g];if(v!==t[f+g]||v!==t[p+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*n,f=o*n;for(let p=0;p!==n;++p)t[f+p]=t[u+p]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};Mn.prototype.ValueTypeName="";Mn.prototype.TimeBufferType=Float32Array;Mn.prototype.ValueBufferType=Float32Array;Mn.prototype.DefaultInterpolation=za;var Ji=class extends Mn{constructor(e,t,n){super(e,t,n)}};Ji.prototype.ValueTypeName="bool";Ji.prototype.ValueBufferType=Array;Ji.prototype.DefaultInterpolation=Us;Ji.prototype.InterpolantFactoryMethodLinear=void 0;Ji.prototype.InterpolantFactoryMethodSmooth=void 0;var il=class extends Mn{constructor(e,t,n,r){super(e,t,n,r)}};il.prototype.ValueTypeName="color";var rl=class extends Mn{constructor(e,t,n,r){super(e,t,n,r)}};rl.prototype.ValueTypeName="number";var sl=class extends vr{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(r-t),c=e*a;for(let h=c+a;c!==h;c+=4)vi.slerpFlat(s,0,o,c-a,o,c,l);return s}},so=class extends Mn{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new sl(this.times,this.values,this.getValueSize(),e)}};so.prototype.ValueTypeName="quaternion";so.prototype.InterpolantFactoryMethodSmooth=void 0;var Zi=class extends Mn{constructor(e,t,n){super(e,t,n)}};Zi.prototype.ValueTypeName="string";Zi.prototype.ValueBufferType=Array;Zi.prototype.DefaultInterpolation=Us;Zi.prototype.InterpolantFactoryMethodLinear=void 0;Zi.prototype.InterpolantFactoryMethodSmooth=void 0;var ol=class extends Mn{constructor(e,t,n,r){super(e,t,n,r)}};ol.prototype.ValueTypeName="vector";var hs=class extends Ln{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Qe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}};var jc=new Tt,Ku=new k,Ju=new k,al=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ge(512,512),this.mapType=Wn,this.map=null,this.mapPass=null,this.matrix=new Tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new os,this._frameExtents=new ge(1,1),this._viewportCount=1,this._viewports=[new Rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Ku.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ku),Ju.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ju),t.updateMatrixWorld(),jc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(jc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},sh=class extends al{constructor(){super(new zt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=ks*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},oo=class extends hs{constructor(e,t,n=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ln.DEFAULT_UP),this.updateMatrix(),this.target=new Ln,this.distance=n,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new sh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var ao=class extends Xs{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},oh=class extends al{constructor(){super(new ao(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Si=class extends hs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ln.DEFAULT_UP),this.updateMatrix(),this.target=new Ln,this.shadow=new oh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Qi=class extends hs{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var ll=class extends zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},lo=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Zu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Zu();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Zu(){return performance.now()}var Th="\\[\\]\\.:\\/",xg=new RegExp("["+Th+"]","g"),Ch="[^"+Th+"]",vg="[^"+Th.replace("\\.","")+"]",yg=/((?:WC+[\/:])*)/.source.replace("WC",Ch),bg=/(WCOD+)?/.source.replace("WCOD",vg),Sg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ch),Mg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ch),wg=new RegExp("^"+yg+bg+Sg+Mg+"$"),Eg=["material","materials","bones","map"],ah=class{constructor(e,t,n){let r=n||Lt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Lt=(()=>{class i{constructor(t,n,r){this.path=n,this.parsedPath=r||i.parseTrackName(n),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new i.Composite(t,n,r):new i(t,n,r)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(xg,"")}static parseTrackName(t){let n=wg.exec(t);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let r={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=r.nodeName&&r.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let o=r.nodeName.substring(s+1);Eg.indexOf(o)!==-1&&(r.nodeName=r.nodeName.substring(0,s),r.objectName=o)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return r}static findNode(t,n){if(n===void 0||n===""||n==="."||n===-1||n===t.name||n===t.uuid)return t;if(t.skeleton){let r=t.skeleton.getBoneByName(n);if(r!==void 0)return r}if(t.children){let r=function(o){for(let a=0;a<o.length;a++){let l=o[a];if(l.name===n||l.uuid===n)return l;let c=r(l.children);if(c)return c}return null},s=r(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,n){t[n]=this.targetObject[this.propertyName]}_getValue_array(t,n){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)t[n++]=r[s]}_getValue_arrayElement(t,n){t[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,n){this.resolvedProperty.toArray(t,n)}_setValue_direct(t,n){this.targetObject[this.propertyName]=t[n]}_setValue_direct_setNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,n){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[n++]}_setValue_array_setNeedsUpdate(t,n){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,n){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,n){this.resolvedProperty[this.propertyIndex]=t[n]}_setValue_arrayElement_setNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,n){this.resolvedProperty.fromArray(t,n)}_setValue_fromArray_setNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,n){this.bind(),this.getValue(t,n)}_setValue_unbound(t,n){this.bind(),this.setValue(t,n)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,s=n.propertyName,o=n.propertyIndex;if(t||(t=i.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let h=n.objectIndex;switch(r){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===h){h=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[r]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[r]}if(h!==void 0){if(t[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let a=t[s];if(a===void 0){let h=n.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",t);return}let l=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?l=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(o!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=o}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}return i.Composite=ah,i})();Lt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Lt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Lt.prototype.GetterByBindingType=[Lt.prototype._getValue_direct,Lt.prototype._getValue_array,Lt.prototype._getValue_arrayElement,Lt.prototype._getValue_toArray];Lt.prototype.SetterByBindingTypeAndVersioning=[[Lt.prototype._setValue_direct,Lt.prototype._setValue_direct_setNeedsUpdate,Lt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_array,Lt.prototype._setValue_array_setNeedsUpdate,Lt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_arrayElement,Lt.prototype._setValue_arrayElement_setNeedsUpdate,Lt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_fromArray,Lt.prototype._setValue_fromArray_setNeedsUpdate,Lt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var vM=new Float32Array(1);var Qu=new Tt,co=class{constructor(e,t,n=0,r=1/0){this.ray=new Hs(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new is,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Qu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Qu),this}intersectObject(e,t=!0,n=[]){return lh(e,this,n,t),n.sort(ed),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)lh(e[r],this,n,t);return n.sort(ed),n}};function ed(i,e){return i.distance-e.distance}function lh(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){let s=i.children;for(let o=0,a=s.length;o<a;o++)lh(s[o],e,t,!0)}}function Ah(i,e,t,n){let r=Tg(n);switch(t){case gh:return i*e;case xh:return i*e/r.components*r.byteLength;case wl:return i*e/r.components*r.byteLength;case vh:return i*e*2/r.components*r.byteLength;case El:return i*e*2/r.components*r.byteLength;case _h:return i*e*3/r.components*r.byteLength;case Fn:return i*e*4/r.components*r.byteLength;case Tl:return i*e*4/r.components*r.byteLength;case po:case mo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case go:case _o:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Al:case Il:return Math.max(i,16)*Math.max(e,8)/4;case Cl:case Rl:return Math.max(i,8)*Math.max(e,8)/2;case Pl:case Dl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ll:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Nl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Fl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ul:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Bl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ol:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case kl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case zl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Vl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Hl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Gl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Wl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Xl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ql:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Yl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case xo:case jl:case $l:return Math.ceil(i/4)*Math.ceil(e/4)*16;case yh:case Kl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Jl:case Zl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Tg(i){switch(i){case Wn:case fh:return{byteLength:1,components:1};case us:case ph:case ds:return{byteLength:2,components:1};case Sl:case Ml:return{byteLength:2,components:4};case tr:case bl:case oi:return{byteLength:4,components:1};case mh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:cl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=cl);function Sf(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Cg(i){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<u.length;p++){let g=u[f],v=u[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,u[f]=v)}u.length=f+1;for(let p=0,g=u.length;p<g;p++){let v=u[p];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var Ag=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Rg=`#ifdef USE_ALPHAHASH
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
#endif`,Ig=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Pg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Dg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Lg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ng=`#ifdef USE_AOMAP
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
#endif`,Fg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ug=`#ifdef USE_BATCHING
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
#endif`,Bg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Og=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,kg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Vg=`#ifdef USE_IRIDESCENCE
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
#endif`,Hg=`#ifdef USE_BUMPMAP
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
#endif`,Gg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Wg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Xg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Yg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,jg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,$g=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Kg=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Jg=`#define PI 3.141592653589793
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
} // validated`,Zg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Qg=`vec3 transformedNormal = objectNormal;
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
#endif`,e0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,t0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,n0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,i0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,r0="gl_FragColor = linearToOutputTexel( gl_FragColor );",s0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,o0=`#ifdef USE_ENVMAP
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
#endif`,a0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,l0=`#ifdef USE_ENVMAP
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
#endif`,c0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,h0=`#ifdef USE_ENVMAP
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
#endif`,u0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,d0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,f0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,p0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,m0=`#ifdef USE_GRADIENTMAP
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
}`,g0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,x0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,v0=`uniform bool receiveShadow;
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
#endif`,y0=`#ifdef USE_ENVMAP
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
#endif`,b0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,S0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,M0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,w0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,E0=`PhysicalMaterial material;
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
#endif`,T0=`struct PhysicalMaterial {
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
}`,C0=`
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
#endif`,A0=`#if defined( RE_IndirectDiffuse )
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
#endif`,R0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,I0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,P0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,D0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,L0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,N0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,F0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,U0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,B0=`#if defined( USE_POINTS_UV )
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
#endif`,O0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,k0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,z0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,V0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,H0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,G0=`#ifdef USE_MORPHTARGETS
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
#endif`,W0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,X0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,q0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Y0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,j0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,K0=`#ifdef USE_NORMALMAP
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
#endif`,J0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Z0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Q0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,e_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,t_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,n_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,i_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,r_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,s_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,o_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,a_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,l_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,c_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,h_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,u_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,d_=`float getShadowMask() {
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
}`,f_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,p_=`#ifdef USE_SKINNING
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
#endif`,m_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,g_=`#ifdef USE_SKINNING
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
#endif`,__=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,x_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,v_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,y_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,b_=`#ifdef USE_TRANSMISSION
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
#endif`,S_=`#ifdef USE_TRANSMISSION
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
#endif`,M_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,w_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,E_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,T_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,C_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,A_=`uniform sampler2D t2D;
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
}`,R_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,I_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,P_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,D_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,L_=`#include <common>
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
}`,N_=`#if DEPTH_PACKING == 3200
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
}`,F_=`#define DISTANCE
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
}`,U_=`#define DISTANCE
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
}`,B_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,O_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,k_=`uniform float scale;
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
}`,z_=`uniform vec3 diffuse;
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
}`,V_=`#include <common>
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
}`,H_=`uniform vec3 diffuse;
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
}`,G_=`#define LAMBERT
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
}`,W_=`#define LAMBERT
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
}`,X_=`#define MATCAP
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
}`,q_=`#define MATCAP
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
}`,Y_=`#define NORMAL
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
}`,j_=`#define NORMAL
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
}`,$_=`#define PHONG
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
}`,K_=`#define PHONG
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
}`,J_=`#define STANDARD
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
}`,Z_=`#define STANDARD
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
}`,Q_=`#define TOON
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
}`,ex=`#define TOON
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
}`,tx=`uniform float size;
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
}`,nx=`uniform vec3 diffuse;
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
}`,ix=`#include <common>
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
}`,rx=`uniform vec3 color;
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
}`,sx=`uniform float rotation;
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
}`,ox=`uniform vec3 diffuse;
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
}`,rt={alphahash_fragment:Ag,alphahash_pars_fragment:Rg,alphamap_fragment:Ig,alphamap_pars_fragment:Pg,alphatest_fragment:Dg,alphatest_pars_fragment:Lg,aomap_fragment:Ng,aomap_pars_fragment:Fg,batching_pars_vertex:Ug,batching_vertex:Bg,begin_vertex:Og,beginnormal_vertex:kg,bsdfs:zg,iridescence_fragment:Vg,bumpmap_pars_fragment:Hg,clipping_planes_fragment:Gg,clipping_planes_pars_fragment:Wg,clipping_planes_pars_vertex:Xg,clipping_planes_vertex:qg,color_fragment:Yg,color_pars_fragment:jg,color_pars_vertex:$g,color_vertex:Kg,common:Jg,cube_uv_reflection_fragment:Zg,defaultnormal_vertex:Qg,displacementmap_pars_vertex:e0,displacementmap_vertex:t0,emissivemap_fragment:n0,emissivemap_pars_fragment:i0,colorspace_fragment:r0,colorspace_pars_fragment:s0,envmap_fragment:o0,envmap_common_pars_fragment:a0,envmap_pars_fragment:l0,envmap_pars_vertex:c0,envmap_physical_pars_fragment:y0,envmap_vertex:h0,fog_vertex:u0,fog_pars_vertex:d0,fog_fragment:f0,fog_pars_fragment:p0,gradientmap_pars_fragment:m0,lightmap_pars_fragment:g0,lights_lambert_fragment:_0,lights_lambert_pars_fragment:x0,lights_pars_begin:v0,lights_toon_fragment:b0,lights_toon_pars_fragment:S0,lights_phong_fragment:M0,lights_phong_pars_fragment:w0,lights_physical_fragment:E0,lights_physical_pars_fragment:T0,lights_fragment_begin:C0,lights_fragment_maps:A0,lights_fragment_end:R0,logdepthbuf_fragment:I0,logdepthbuf_pars_fragment:P0,logdepthbuf_pars_vertex:D0,logdepthbuf_vertex:L0,map_fragment:N0,map_pars_fragment:F0,map_particle_fragment:U0,map_particle_pars_fragment:B0,metalnessmap_fragment:O0,metalnessmap_pars_fragment:k0,morphinstance_vertex:z0,morphcolor_vertex:V0,morphnormal_vertex:H0,morphtarget_pars_vertex:G0,morphtarget_vertex:W0,normal_fragment_begin:X0,normal_fragment_maps:q0,normal_pars_fragment:Y0,normal_pars_vertex:j0,normal_vertex:$0,normalmap_pars_fragment:K0,clearcoat_normal_fragment_begin:J0,clearcoat_normal_fragment_maps:Z0,clearcoat_pars_fragment:Q0,iridescence_pars_fragment:e_,opaque_fragment:t_,packing:n_,premultiplied_alpha_fragment:i_,project_vertex:r_,dithering_fragment:s_,dithering_pars_fragment:o_,roughnessmap_fragment:a_,roughnessmap_pars_fragment:l_,shadowmap_pars_fragment:c_,shadowmap_pars_vertex:h_,shadowmap_vertex:u_,shadowmask_pars_fragment:d_,skinbase_vertex:f_,skinning_pars_vertex:p_,skinning_vertex:m_,skinnormal_vertex:g_,specularmap_fragment:__,specularmap_pars_fragment:x_,tonemapping_fragment:v_,tonemapping_pars_fragment:y_,transmission_fragment:b_,transmission_pars_fragment:S_,uv_pars_fragment:M_,uv_pars_vertex:w_,uv_vertex:E_,worldpos_vertex:T_,background_vert:C_,background_frag:A_,backgroundCube_vert:R_,backgroundCube_frag:I_,cube_vert:P_,cube_frag:D_,depth_vert:L_,depth_frag:N_,distanceRGBA_vert:F_,distanceRGBA_frag:U_,equirect_vert:B_,equirect_frag:O_,linedashed_vert:k_,linedashed_frag:z_,meshbasic_vert:V_,meshbasic_frag:H_,meshlambert_vert:G_,meshlambert_frag:W_,meshmatcap_vert:X_,meshmatcap_frag:q_,meshnormal_vert:Y_,meshnormal_frag:j_,meshphong_vert:$_,meshphong_frag:K_,meshphysical_vert:J_,meshphysical_frag:Z_,meshtoon_vert:Q_,meshtoon_frag:ex,points_vert:tx,points_frag:nx,shadow_vert:ix,shadow_frag:rx,sprite_vert:sx,sprite_frag:ox},xe={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},envMapRotation:{value:new et},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},ai={basic:{uniforms:an([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:an([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Qe(0)}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:an([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:an([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:an([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new Qe(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:an([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:an([xe.points,xe.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:an([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:an([xe.common,xe.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:an([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:an([xe.sprite,xe.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new et}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distanceRGBA:{uniforms:an([xe.common,xe.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distanceRGBA_vert,fragmentShader:rt.distanceRGBA_frag},shadow:{uniforms:an([xe.lights,xe.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};ai.physical={uniforms:an([ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};var ec={r:0,b:0,g:0},Mr=new yi,ax=new Tt;function lx(i,e,t,n,r,s,o){let a=new Qe(0),l=s===!0?0:1,c,h,u=null,f=0,p=null;function g(C){let y=C.isScene===!0?C.background:null;return y&&y.isTexture&&(y=(C.backgroundBlurriness>0?t:e).get(y)),y}function v(C){let y=!1,L=g(C);L===null?d(a,l):L&&L.isColor&&(d(L,1),y=!0);let P=i.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(C,y){let L=g(y);L&&(L.isCubeTexture||L.mapping===uo)?(h===void 0&&(h=new Mt(new rs(1,1,1),new bn({name:"BackgroundCubeMaterial",uniforms:Sr(ai.backgroundCube.uniforms),vertexShader:ai.backgroundCube.vertexShader,fragmentShader:ai.backgroundCube.fragmentShader,side:Ht,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,D,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),Mr.copy(y.backgroundRotation),Mr.x*=-1,Mr.y*=-1,Mr.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Mr.y*=-1,Mr.z*=-1),h.material.uniforms.envMap.value=L,h.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(ax.makeRotationFromEuler(Mr)),h.material.toneMapped=dt.getTransfer(L.colorSpace)!==xt,(u!==L||f!==L.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=L,f=L.version,p=i.toneMapping),h.layers.enableAll(),C.unshift(h,h.geometry,h.material,0,0,null)):L&&L.isTexture&&(c===void 0&&(c=new Mt(new xr(2,2),new bn({name:"BackgroundMaterial",uniforms:Sr(ai.background.uniforms),vertexShader:ai.background.vertexShader,fragmentShader:ai.background.fragmentShader,side:_i,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=L,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=dt.getTransfer(L.colorSpace)!==xt,L.matrixAutoUpdate===!0&&L.updateMatrix(),c.material.uniforms.uvTransform.value.copy(L.matrix),(u!==L||f!==L.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=L,f=L.version,p=i.toneMapping),c.layers.enableAll(),C.unshift(c,c.geometry,c.material,0,0,null))}function d(C,y){C.getRGB(ec,wh(i)),n.buffers.color.setClear(ec.r,ec.g,ec.b,y,o)}function A(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(C,y=1){a.set(C),l=y,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(C){l=C,d(a,l)},render:v,addToRenderList:m,dispose:A}}function cx(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null),s=r,o=!1;function a(_,R,V,H,Q){let Z=!1,J=u(H,V,R);s!==J&&(s=J,c(s.object)),Z=p(_,H,V,Q),Z&&g(_,H,V,Q),Q!==null&&e.update(Q,i.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,y(_,R,V,H),Q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Q).buffer))}function l(){return i.createVertexArray()}function c(_){return i.bindVertexArray(_)}function h(_){return i.deleteVertexArray(_)}function u(_,R,V){let H=V.wireframe===!0,Q=n[_.id];Q===void 0&&(Q={},n[_.id]=Q);let Z=Q[R.id];Z===void 0&&(Z={},Q[R.id]=Z);let J=Z[H];return J===void 0&&(J=f(l()),Z[H]=J),J}function f(_){let R=[],V=[],H=[];for(let Q=0;Q<t;Q++)R[Q]=0,V[Q]=0,H[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:V,attributeDivisors:H,object:_,attributes:{},index:null}}function p(_,R,V,H){let Q=s.attributes,Z=R.attributes,J=0,ee=V.getAttributes();for(let X in ee)if(ee[X].location>=0){let ve=Q[X],be=Z[X];if(be===void 0&&(X==="instanceMatrix"&&_.instanceMatrix&&(be=_.instanceMatrix),X==="instanceColor"&&_.instanceColor&&(be=_.instanceColor)),ve===void 0||ve.attribute!==be||be&&ve.data!==be.data)return!0;J++}return s.attributesNum!==J||s.index!==H}function g(_,R,V,H){let Q={},Z=R.attributes,J=0,ee=V.getAttributes();for(let X in ee)if(ee[X].location>=0){let ve=Z[X];ve===void 0&&(X==="instanceMatrix"&&_.instanceMatrix&&(ve=_.instanceMatrix),X==="instanceColor"&&_.instanceColor&&(ve=_.instanceColor));let be={};be.attribute=ve,ve&&ve.data&&(be.data=ve.data),Q[X]=be,J++}s.attributes=Q,s.attributesNum=J,s.index=H}function v(){let _=s.newAttributes;for(let R=0,V=_.length;R<V;R++)_[R]=0}function m(_){d(_,0)}function d(_,R){let V=s.newAttributes,H=s.enabledAttributes,Q=s.attributeDivisors;V[_]=1,H[_]===0&&(i.enableVertexAttribArray(_),H[_]=1),Q[_]!==R&&(i.vertexAttribDivisor(_,R),Q[_]=R)}function A(){let _=s.newAttributes,R=s.enabledAttributes;for(let V=0,H=R.length;V<H;V++)R[V]!==_[V]&&(i.disableVertexAttribArray(V),R[V]=0)}function C(_,R,V,H,Q,Z,J){J===!0?i.vertexAttribIPointer(_,R,V,Q,Z):i.vertexAttribPointer(_,R,V,H,Q,Z)}function y(_,R,V,H){v();let Q=H.attributes,Z=V.getAttributes(),J=R.defaultAttributeValues;for(let ee in Z){let X=Z[ee];if(X.location>=0){let me=Q[ee];if(me===void 0&&(ee==="instanceMatrix"&&_.instanceMatrix&&(me=_.instanceMatrix),ee==="instanceColor"&&_.instanceColor&&(me=_.instanceColor)),me!==void 0){let ve=me.normalized,be=me.itemSize,Ue=e.get(me);if(Ue===void 0)continue;let Ye=Ue.buffer,Y=Ue.type,se=Ue.bytesPerElement,de=Y===i.INT||Y===i.UNSIGNED_INT||me.gpuType===bl;if(me.isInterleavedBufferAttribute){let ue=me.data,Pe=ue.stride,Ve=me.offset;if(ue.isInstancedInterleavedBuffer){for(let De=0;De<X.locationSize;De++)d(X.location+De,ue.meshPerAttribute);_.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let De=0;De<X.locationSize;De++)m(X.location+De);i.bindBuffer(i.ARRAY_BUFFER,Ye);for(let De=0;De<X.locationSize;De++)C(X.location+De,be/X.locationSize,Y,ve,Pe*se,(Ve+be/X.locationSize*De)*se,de)}else{if(me.isInstancedBufferAttribute){for(let ue=0;ue<X.locationSize;ue++)d(X.location+ue,me.meshPerAttribute);_.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let ue=0;ue<X.locationSize;ue++)m(X.location+ue);i.bindBuffer(i.ARRAY_BUFFER,Ye);for(let ue=0;ue<X.locationSize;ue++)C(X.location+ue,be/X.locationSize,Y,ve,be*se,be/X.locationSize*ue*se,de)}}else if(J!==void 0){let ve=J[ee];if(ve!==void 0)switch(ve.length){case 2:i.vertexAttrib2fv(X.location,ve);break;case 3:i.vertexAttrib3fv(X.location,ve);break;case 4:i.vertexAttrib4fv(X.location,ve);break;default:i.vertexAttrib1fv(X.location,ve)}}}}A()}function L(){F();for(let _ in n){let R=n[_];for(let V in R){let H=R[V];for(let Q in H)h(H[Q].object),delete H[Q];delete R[V]}delete n[_]}}function P(_){if(n[_.id]===void 0)return;let R=n[_.id];for(let V in R){let H=R[V];for(let Q in H)h(H[Q].object),delete H[Q];delete R[V]}delete n[_.id]}function D(_){for(let R in n){let V=n[R];if(V[_.id]===void 0)continue;let H=V[_.id];for(let Q in H)h(H[Q].object),delete H[Q];delete V[_.id]}}function F(){S(),o=!0,s!==r&&(s=r,c(s.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:F,resetDefaultState:S,dispose:L,releaseStatesOfGeometry:P,releaseStatesOfProgram:D,initAttributes:v,enableAttribute:m,disableUnusedAttributes:A}}function hx(i,e,t){let n;function r(c){n=c}function s(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];t.update(p,n,1)}function l(c,h,u,f){if(u===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],h[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v]*f[v];t.update(g,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function ux(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let D=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(D){return!(D!==Fn&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(D){let F=D===ds&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==Wn&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==oi&&!F)}function l(D){if(D==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),A=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),C=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,P=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:A,maxVaryings:C,maxFragmentUniforms:y,vertexTextures:L,maxSamples:P}}function dx(i){let e=this,t=null,n=0,r=!1,s=!1,o=new ei,a=new et,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let p=u.length!==0||f||n!==0||r;return r=f,n=u.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,p){let g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,d=i.get(u);if(!r||g===null||g.length===0||s&&!m)s?h(null):c();else{let A=s?0:n,C=A*4,y=d.clippingState||null;l.value=y,y=h(g,f,C,p);for(let L=0;L!==C;++L)y[L]=t[L];d.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,p,g){let v=u!==null?u.length:0,m=null;if(v!==0){if(m=l.value,g!==!0||m===null){let d=p+v*4,A=f.matrixWorldInverse;a.getNormalMatrix(A),(m===null||m.length<d)&&(m=new Float32Array(d));for(let C=0,y=p;C!==v;++C,y+=4)o.copy(u[C]).applyMatrix4(A,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function fx(i){let e=new WeakMap;function t(o,a){return a===xl?o.mapping=yr:a===vl&&(o.mapping=br),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===xl||a===vl)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Xa(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}var _s=4,Zd=[.125,.215,.35,.446,.526,.582],Tr=20,Rh=new ao,Qd=new Qe,Ih=null,Ph=0,Dh=0,Lh=!1,Er=(1+Math.sqrt(5))/2,gs=1/Er,ef=[new k(-Er,gs,0),new k(Er,gs,0),new k(-gs,0,Er),new k(gs,0,Er),new k(0,Er,-gs),new k(0,Er,gs),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)],px=new k,ic=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100,s={}){let{size:o=256,position:a=px}=s;Ih=this._renderer.getRenderTarget(),Ph=this._renderer.getActiveCubeFace(),Dh=this._renderer.getActiveMipmapLevel(),Lh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ih,Ph,Dh),this._renderer.xr.enabled=Lh,e.scissorTest=!1,tc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===yr||e.mapping===br?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ih=this._renderer.getRenderTarget(),Ph=this._renderer.getActiveCubeFace(),Dh=this._renderer.getActiveMipmapLevel(),Lh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Hn,minFilter:Hn,generateMipmaps:!1,type:ds,format:Fn,colorSpace:gr,depthBuffer:!1},r=tf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=tf(e,t,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=mx(s)),this._blurMaterial=gx(s,e,t)}return r}_compileMaterial(e){let t=new Mt(this._lodPlanes[0],e);this._renderer.compile(t,Rh)}_sceneToCubeUV(e,t,n,r,s){let l=new zt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,p=u.toneMapping;u.getClearColor(Qd),u.toneMapping=wi,u.autoClear=!1;let g=new Gn({name:"PMREM.Background",side:Ht,depthWrite:!1,depthTest:!1}),v=new Mt(new rs,g),m=!1,d=e.background;d?d.isColor&&(g.color.copy(d),e.background=null,m=!0):(g.color.copy(Qd),m=!0);for(let A=0;A<6;A++){let C=A%3;C===0?(l.up.set(0,c[A],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[A],s.y,s.z)):C===1?(l.up.set(0,0,c[A]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[A],s.z)):(l.up.set(0,c[A],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[A]));let y=this._cubeSize;tc(r,C*y,A>2?y:0,y,y),u.setRenderTarget(r),m&&u.render(v,l),u.render(e,l)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=p,u.autoClear=f,e.background=d}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===yr||e.mapping===br;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=rf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nf());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new Mt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let l=this._cubeSize;tc(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Rh)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=ef[(r-s-1)%ef.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Mt(this._lodPlanes[r],c),f=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Tr-1),v=s/g,m=isFinite(s)?1+Math.floor(h*v):Tr;m>Tr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Tr}`);let d=[],A=0;for(let D=0;D<Tr;++D){let F=D/v,S=Math.exp(-F*F/2);d.push(S),D===0?A+=S:D<m&&(A+=2*S)}for(let D=0;D<d.length;D++)d[D]=d[D]/A;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:C}=this;f.dTheta.value=g,f.mipInt.value=C-n;let y=this._sizeLods[r],L=3*y*(r>C-_s?r-C+_s:0),P=4*(this._cubeSize-y);tc(t,L,P,3*y,2*y),l.setRenderTarget(t),l.render(u,Rh)}};function mx(i){let e=[],t=[],n=[],r=i,s=i-_s+1+Zd.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);t.push(a);let l=1/a;o>i-_s?l=Zd[o-i+_s-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,v=3,m=2,d=1,A=new Float32Array(v*g*p),C=new Float32Array(m*g*p),y=new Float32Array(d*g*p);for(let P=0;P<p;P++){let D=P%3*2/3-1,F=P>2?0:-1,S=[D,F,0,D+2/3,F,0,D+2/3,F+1,0,D,F,0,D+2/3,F+1,0,D,F+1,0];A.set(S,v*g*P),C.set(f,m*g*P);let _=[P,P,P,P,P,P];y.set(_,d*g*P)}let L=new Nn;L.setAttribute("position",new yn(A,v)),L.setAttribute("uv",new yn(C,m)),L.setAttribute("faceIndex",new yn(y,d)),e.push(L),r>_s&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function tf(i,e,t){let n=new ii(i,e,t);return n.texture.mapping=uo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function tc(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function gx(i,e,t){let n=new Float32Array(Tr),r=new k(0,1,0);return new bn({name:"SphericalGaussianBlur",defines:{n:Tr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Gh(),fragmentShader:`

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
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function nf(){return new bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gh(),fragmentShader:`

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
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function rf(){return new bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function Gh(){return`

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
	`}function _x(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===xl||l===vl,h=l===yr||l===br;if(c||h){let u=e.get(a),f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new ic(i)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{let p=a.image;return c&&p&&p.height>0||h&&p&&r(p)?(t===null&&(t=new ic(i)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function r(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){let l=a.target;l.removeEventListener("dispose",s);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function xx(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let r=t(n);return r===null&&vo("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function vx(i,e,t,n){let r={},s=new WeakMap;function o(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete r[f.id];let p=s.get(f);p&&(e.remove(p),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(u){let f=u.attributes;for(let p in f)e.update(f[p],i.ARRAY_BUFFER)}function c(u){let f=[],p=u.index,g=u.attributes.position,v=0;if(p!==null){let A=p.array;v=p.version;for(let C=0,y=A.length;C<y;C+=3){let L=A[C+0],P=A[C+1],D=A[C+2];f.push(L,P,P,D,D,L)}}else if(g!==void 0){let A=g.array;v=g.version;for(let C=0,y=A.length/3-1;C<y;C+=3){let L=C+0,P=C+1,D=C+2;f.push(L,P,P,D,D,L)}}else return;let m=new(Mh(f)?Ws:Gs)(f,1);m.version=v;let d=s.get(u);d&&e.remove(d),s.set(u,m)}function h(u){let f=s.get(u);if(f){let p=u.index;p!==null&&f.version<p.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function yx(i,e,t){let n;function r(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,p){i.drawElements(n,p,s,f*o),t.update(p,n,1)}function c(f,p,g){g!==0&&(i.drawElementsInstanced(n,p,s,f*o,g),t.update(p,n,g))}function h(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];t.update(m,n,1)}function u(f,p,g,v){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)c(f[d]/o,p[d],v[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,s,f,0,v,0,g);let d=0;for(let A=0;A<g;A++)d+=p[A]*v[A];t.update(d,n,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function bx(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Sx(i,e,t){let n=new WeakMap,r=new Rt;function s(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let _=function(){F.dispose(),n.delete(a),a.removeEventListener("dispose",_)};var p=_;f!==void 0&&f.texture.dispose();let g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],A=a.morphAttributes.normal||[],C=a.morphAttributes.color||[],y=0;g===!0&&(y=1),v===!0&&(y=2),m===!0&&(y=3);let L=a.attributes.position.count*y,P=1;L>e.maxTextureSize&&(P=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);let D=new Float32Array(L*P*4*u),F=new Vs(D,L,P,u);F.type=oi,F.needsUpdate=!0;let S=y*4;for(let R=0;R<u;R++){let V=d[R],H=A[R],Q=C[R],Z=L*P*4*R;for(let J=0;J<V.count;J++){let ee=J*S;g===!0&&(r.fromBufferAttribute(V,J),D[Z+ee+0]=r.x,D[Z+ee+1]=r.y,D[Z+ee+2]=r.z,D[Z+ee+3]=0),v===!0&&(r.fromBufferAttribute(H,J),D[Z+ee+4]=r.x,D[Z+ee+5]=r.y,D[Z+ee+6]=r.z,D[Z+ee+7]=0),m===!0&&(r.fromBufferAttribute(Q,J),D[Z+ee+8]=r.x,D[Z+ee+9]=r.y,D[Z+ee+10]=r.z,D[Z+ee+11]=Q.itemSize===4?r.w:1)}}f={count:u,texture:F,size:new ge(L,P)},n.set(a,f),a.addEventListener("dispose",_)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];let v=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function Mx(i,e,t,n){let r=new WeakMap;function s(l){let c=n.render.frame,h=l.geometry,u=e.get(l,h);if(r.get(u)!==c&&(e.update(u),r.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return u}function o(){r=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}var Mf=new nr,sf=new Ys(1,1),wf=new Vs,Ef=new Ga,Tf=new qs,of=[],af=[],lf=new Float32Array(16),cf=new Float32Array(9),hf=new Float32Array(4);function vs(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,s=of[r];if(s===void 0&&(s=new Float32Array(r),of[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function Gt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Wt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function rc(i,e){let t=af[e];t===void 0&&(t=new Int32Array(e),af[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function wx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Ex(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;i.uniform2fv(this.addr,e),Wt(t,e)}}function Tx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Gt(t,e))return;i.uniform3fv(this.addr,e),Wt(t,e)}}function Cx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;i.uniform4fv(this.addr,e),Wt(t,e)}}function Ax(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Wt(t,e)}else{if(Gt(t,n))return;hf.set(n),i.uniformMatrix2fv(this.addr,!1,hf),Wt(t,n)}}function Rx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Wt(t,e)}else{if(Gt(t,n))return;cf.set(n),i.uniformMatrix3fv(this.addr,!1,cf),Wt(t,n)}}function Ix(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Wt(t,e)}else{if(Gt(t,n))return;lf.set(n),i.uniformMatrix4fv(this.addr,!1,lf),Wt(t,n)}}function Px(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Dx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;i.uniform2iv(this.addr,e),Wt(t,e)}}function Lx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;i.uniform3iv(this.addr,e),Wt(t,e)}}function Nx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;i.uniform4iv(this.addr,e),Wt(t,e)}}function Fx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Ux(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;i.uniform2uiv(this.addr,e),Wt(t,e)}}function Bx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;i.uniform3uiv(this.addr,e),Wt(t,e)}}function Ox(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;i.uniform4uiv(this.addr,e),Wt(t,e)}}function kx(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(sf.compareFunction=bh,s=sf):s=Mf,t.setTexture2D(e||s,r)}function zx(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Ef,r)}function Vx(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Tf,r)}function Hx(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||wf,r)}function Gx(i){switch(i){case 5126:return wx;case 35664:return Ex;case 35665:return Tx;case 35666:return Cx;case 35674:return Ax;case 35675:return Rx;case 35676:return Ix;case 5124:case 35670:return Px;case 35667:case 35671:return Dx;case 35668:case 35672:return Lx;case 35669:case 35673:return Nx;case 5125:return Fx;case 36294:return Ux;case 36295:return Bx;case 36296:return Ox;case 35678:case 36198:case 36298:case 36306:case 35682:return kx;case 35679:case 36299:case 36307:return zx;case 35680:case 36300:case 36308:case 36293:return Vx;case 36289:case 36303:case 36311:case 36292:return Hx}}function Wx(i,e){i.uniform1fv(this.addr,e)}function Xx(i,e){let t=vs(e,this.size,2);i.uniform2fv(this.addr,t)}function qx(i,e){let t=vs(e,this.size,3);i.uniform3fv(this.addr,t)}function Yx(i,e){let t=vs(e,this.size,4);i.uniform4fv(this.addr,t)}function jx(i,e){let t=vs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function $x(i,e){let t=vs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Kx(i,e){let t=vs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Jx(i,e){i.uniform1iv(this.addr,e)}function Zx(i,e){i.uniform2iv(this.addr,e)}function Qx(i,e){i.uniform3iv(this.addr,e)}function ev(i,e){i.uniform4iv(this.addr,e)}function tv(i,e){i.uniform1uiv(this.addr,e)}function nv(i,e){i.uniform2uiv(this.addr,e)}function iv(i,e){i.uniform3uiv(this.addr,e)}function rv(i,e){i.uniform4uiv(this.addr,e)}function sv(i,e,t){let n=this.cache,r=e.length,s=rc(t,r);Gt(n,s)||(i.uniform1iv(this.addr,s),Wt(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Mf,s[o])}function ov(i,e,t){let n=this.cache,r=e.length,s=rc(t,r);Gt(n,s)||(i.uniform1iv(this.addr,s),Wt(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Ef,s[o])}function av(i,e,t){let n=this.cache,r=e.length,s=rc(t,r);Gt(n,s)||(i.uniform1iv(this.addr,s),Wt(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Tf,s[o])}function lv(i,e,t){let n=this.cache,r=e.length,s=rc(t,r);Gt(n,s)||(i.uniform1iv(this.addr,s),Wt(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||wf,s[o])}function cv(i){switch(i){case 5126:return Wx;case 35664:return Xx;case 35665:return qx;case 35666:return Yx;case 35674:return jx;case 35675:return $x;case 35676:return Kx;case 5124:case 35670:return Jx;case 35667:case 35671:return Zx;case 35668:case 35672:return Qx;case 35669:case 35673:return ev;case 5125:return tv;case 36294:return nv;case 36295:return iv;case 36296:return rv;case 35678:case 36198:case 36298:case 36306:case 35682:return sv;case 35679:case 36299:case 36307:return ov;case 35680:case 36300:case 36308:case 36293:return av;case 36289:case 36303:case 36311:case 36292:return lv}}var Fh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Gx(t.type)}},Uh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=cv(t.type)}},Bh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],n)}}},Nh=/(\w+)(\])?(\[|\.)?/g;function uf(i,e){i.seq.push(e),i.map[e.id]=e}function hv(i,e,t){let n=i.name,r=n.length;for(Nh.lastIndex=0;;){let s=Nh.exec(n),o=Nh.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){uf(t,c===void 0?new Fh(a,i,e):new Uh(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new Bh(a),uf(t,u)),t=u}}}var xs=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);hv(s,o,this)}}setValue(e,t,n,r){let s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&n.push(o)}return n}};function df(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var uv=37297,dv=0;function fv(i,e){let t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var ff=new et;function pv(i){dt._getMatrix(ff,dt.workingColorSpace,i);let e=`mat3( ${ff.elements.map(t=>t.toFixed(4))} )`;switch(dt.getTransfer(i)){case Bs:return[e,"LinearTransferOETF"];case xt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function pf(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+fv(i.getShaderSource(e),o)}else return r}function mv(i,e){let t=pv(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function gv(i,e){let t;switch(e){case wd:t="Linear";break;case Ed:t="Reinhard";break;case Td:t="Cineon";break;case Cd:t="ACESFilmic";break;case Rd:t="AgX";break;case Id:t="Neutral";break;case Ad:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var nc=new k;function _v(){dt.getLuminanceCoefficients(nc);let i=nc.x.toFixed(4),e=nc.y.toFixed(4),t=nc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function xv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(yo).join(`
`)}function vv(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function yv(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(e,r),o=s.name,a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function yo(i){return i!==""}function mf(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function gf(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var bv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Oh(i){return i.replace(bv,Mv)}var Sv=new Map;function Mv(i,e){let t=rt[e];if(t===void 0){let n=Sv.get(e);if(n!==void 0)t=rt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Oh(t)}var wv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _f(i){return i.replace(wv,Ev)}function Ev(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function xf(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function Tv(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===hh?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===id?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===si&&(e="SHADOWMAP_TYPE_VSM"),e}function Cv(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case yr:case br:e="ENVMAP_TYPE_CUBE";break;case uo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Av(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case br:e="ENVMAP_MODE_REFRACTION";break}return e}function Rv(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case _l:e="ENVMAP_BLENDING_MULTIPLY";break;case Sd:e="ENVMAP_BLENDING_MIX";break;case Md:e="ENVMAP_BLENDING_ADD";break}return e}function Iv(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Pv(i,e,t,n){let r=i.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,l=Tv(t),c=Cv(t),h=Av(t),u=Rv(t),f=Iv(t),p=xv(t),g=vv(s),v=r.createProgram(),m,d,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(yo).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(yo).join(`
`),d.length>0&&(d+=`
`)):(m=[xf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(yo).join(`
`),d=[xf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==wi?"#define TONE_MAPPING":"",t.toneMapping!==wi?rt.tonemapping_pars_fragment:"",t.toneMapping!==wi?gv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,mv("linearToOutputTexel",t.outputColorSpace),_v(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(yo).join(`
`)),o=Oh(o),o=mf(o,t),o=gf(o,t),a=Oh(a),a=mf(a,t),a=gf(a,t),o=_f(o),a=_f(a),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===Sh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Sh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let C=A+m+o,y=A+d+a,L=df(r,r.VERTEX_SHADER,C),P=df(r,r.FRAGMENT_SHADER,y);r.attachShader(v,L),r.attachShader(v,P),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function D(R){if(i.debug.checkShaderErrors){let V=r.getProgramInfoLog(v).trim(),H=r.getShaderInfoLog(L).trim(),Q=r.getShaderInfoLog(P).trim(),Z=!0,J=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,v,L,P);else{let ee=pf(r,L,"vertex"),X=pf(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+V+`
`+ee+`
`+X)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(H===""||Q==="")&&(J=!1);J&&(R.diagnostics={runnable:Z,programLog:V,vertexShader:{log:H,prefix:m},fragmentShader:{log:Q,prefix:d}})}r.deleteShader(L),r.deleteShader(P),F=new xs(r,v),S=yv(r,v)}let F;this.getUniforms=function(){return F===void 0&&D(this),F};let S;this.getAttributes=function(){return S===void 0&&D(this),S};let _=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=r.getProgramParameter(v,uv)),_},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=dv++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=L,this.fragmentShader=P,this}var Dv=0,kh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new zh(e),t.set(e,n)),n}},zh=class{constructor(e){this.id=Dv++,this.code=e,this.usedTimes=0}};function Lv(i,e,t,n,r,s,o){let a=new is,l=new kh,c=new Set,h=[],u=r.logarithmicDepthBuffer,f=r.vertexTextures,p=r.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,_,R,V,H){let Q=V.fog,Z=H.geometry,J=S.isMeshStandardMaterial?V.environment:null,ee=(S.isMeshStandardMaterial?t:e).get(S.envMap||J),X=ee&&ee.mapping===uo?ee.image.height:null,me=g[S.type];S.precision!==null&&(p=r.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));let ve=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,be=ve!==void 0?ve.length:0,Ue=0;Z.morphAttributes.position!==void 0&&(Ue=1),Z.morphAttributes.normal!==void 0&&(Ue=2),Z.morphAttributes.color!==void 0&&(Ue=3);let Ye,Y,se,de;if(me){let _t=ai[me];Ye=_t.vertexShader,Y=_t.fragmentShader}else Ye=S.vertexShader,Y=S.fragmentShader,l.update(S),se=l.getVertexShaderID(S),de=l.getFragmentShaderID(S);let ue=i.getRenderTarget(),Pe=i.state.buffers.depth.getReversed(),Ve=H.isInstancedMesh===!0,De=H.isBatchedMesh===!0,qe=!!S.map,Ie=!!S.matcap,Ne=!!ee,w=!!S.aoMap,fe=!!S.lightMap,oe=!!S.bumpMap,he=!!S.normalMap,te=!!S.displacementMap,Fe=!!S.emissiveMap,ae=!!S.metalnessMap,E=!!S.roughnessMap,x=S.anisotropy>0,O=S.clearcoat>0,K=S.dispersion>0,ie=S.iridescence>0,q=S.sheen>0,Le=S.transmission>0,ye=x&&!!S.anisotropyMap,Be=O&&!!S.clearcoatMap,Xe=O&&!!S.clearcoatNormalMap,le=O&&!!S.clearcoatRoughnessMap,Te=ie&&!!S.iridescenceMap,He=ie&&!!S.iridescenceThicknessMap,Ke=q&&!!S.sheenColorMap,Ae=q&&!!S.sheenRoughnessMap,ht=!!S.specularMap,it=!!S.specularColorMap,bt=!!S.specularIntensityMap,N=Le&&!!S.transmissionMap,Me=Le&&!!S.thicknessMap,$=!!S.gradientMap,ne=!!S.alphaMap,Ee=S.alphaTest>0,we=!!S.alphaHash,tt=!!S.extensions,It=wi;S.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(It=i.toneMapping);let Zt={shaderID:me,shaderType:S.type,shaderName:S.name,vertexShader:Ye,fragmentShader:Y,defines:S.defines,customVertexShaderID:se,customFragmentShaderID:de,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:De,batchingColor:De&&H._colorsTexture!==null,instancing:Ve,instancingColor:Ve&&H.instanceColor!==null,instancingMorph:Ve&&H.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ue===null?i.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:gr,alphaToCoverage:!!S.alphaToCoverage,map:qe,matcap:Ie,envMap:Ne,envMapMode:Ne&&ee.mapping,envMapCubeUVHeight:X,aoMap:w,lightMap:fe,bumpMap:oe,normalMap:he,displacementMap:f&&te,emissiveMap:Fe,normalMapObjectSpace:he&&S.normalMapType===Nd,normalMapTangentSpace:he&&S.normalMapType===Ql,metalnessMap:ae,roughnessMap:E,anisotropy:x,anisotropyMap:ye,clearcoat:O,clearcoatMap:Be,clearcoatNormalMap:Xe,clearcoatRoughnessMap:le,dispersion:K,iridescence:ie,iridescenceMap:Te,iridescenceThicknessMap:He,sheen:q,sheenColorMap:Ke,sheenRoughnessMap:Ae,specularMap:ht,specularColorMap:it,specularIntensityMap:bt,transmission:Le,transmissionMap:N,thicknessMap:Me,gradientMap:$,opaque:S.transparent===!1&&S.blending===pr&&S.alphaToCoverage===!1,alphaMap:ne,alphaTest:Ee,alphaHash:we,combine:S.combine,mapUv:qe&&v(S.map.channel),aoMapUv:w&&v(S.aoMap.channel),lightMapUv:fe&&v(S.lightMap.channel),bumpMapUv:oe&&v(S.bumpMap.channel),normalMapUv:he&&v(S.normalMap.channel),displacementMapUv:te&&v(S.displacementMap.channel),emissiveMapUv:Fe&&v(S.emissiveMap.channel),metalnessMapUv:ae&&v(S.metalnessMap.channel),roughnessMapUv:E&&v(S.roughnessMap.channel),anisotropyMapUv:ye&&v(S.anisotropyMap.channel),clearcoatMapUv:Be&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:Xe&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:He&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ke&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&v(S.sheenRoughnessMap.channel),specularMapUv:ht&&v(S.specularMap.channel),specularColorMapUv:it&&v(S.specularColorMap.channel),specularIntensityMapUv:bt&&v(S.specularIntensityMap.channel),transmissionMapUv:N&&v(S.transmissionMap.channel),thicknessMapUv:Me&&v(S.thicknessMap.channel),alphaMapUv:ne&&v(S.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(he||x),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!Z.attributes.uv&&(qe||ne),fog:!!Q,useFog:S.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Pe,skinning:H.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:be,morphTextureStride:Ue,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:It,decodeVideoTexture:qe&&S.map.isVideoTexture===!0&&dt.getTransfer(S.map.colorSpace)===xt,decodeVideoTextureEmissive:Fe&&S.emissiveMap.isVideoTexture===!0&&dt.getTransfer(S.emissiveMap.colorSpace)===xt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Jt,flipSided:S.side===Ht,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:tt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(tt&&S.extensions.multiDraw===!0||De)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Zt.vertexUv1s=c.has(1),Zt.vertexUv2s=c.has(2),Zt.vertexUv3s=c.has(3),c.clear(),Zt}function d(S){let _=[];if(S.shaderID?_.push(S.shaderID):(_.push(S.customVertexShaderID),_.push(S.customFragmentShaderID)),S.defines!==void 0)for(let R in S.defines)_.push(R),_.push(S.defines[R]);return S.isRawShaderMaterial===!1&&(A(_,S),C(_,S),_.push(i.outputColorSpace)),_.push(S.customProgramCacheKey),_.join()}function A(S,_){S.push(_.precision),S.push(_.outputColorSpace),S.push(_.envMapMode),S.push(_.envMapCubeUVHeight),S.push(_.mapUv),S.push(_.alphaMapUv),S.push(_.lightMapUv),S.push(_.aoMapUv),S.push(_.bumpMapUv),S.push(_.normalMapUv),S.push(_.displacementMapUv),S.push(_.emissiveMapUv),S.push(_.metalnessMapUv),S.push(_.roughnessMapUv),S.push(_.anisotropyMapUv),S.push(_.clearcoatMapUv),S.push(_.clearcoatNormalMapUv),S.push(_.clearcoatRoughnessMapUv),S.push(_.iridescenceMapUv),S.push(_.iridescenceThicknessMapUv),S.push(_.sheenColorMapUv),S.push(_.sheenRoughnessMapUv),S.push(_.specularMapUv),S.push(_.specularColorMapUv),S.push(_.specularIntensityMapUv),S.push(_.transmissionMapUv),S.push(_.thicknessMapUv),S.push(_.combine),S.push(_.fogExp2),S.push(_.sizeAttenuation),S.push(_.morphTargetsCount),S.push(_.morphAttributeCount),S.push(_.numDirLights),S.push(_.numPointLights),S.push(_.numSpotLights),S.push(_.numSpotLightMaps),S.push(_.numHemiLights),S.push(_.numRectAreaLights),S.push(_.numDirLightShadows),S.push(_.numPointLightShadows),S.push(_.numSpotLightShadows),S.push(_.numSpotLightShadowsWithMaps),S.push(_.numLightProbes),S.push(_.shadowMapType),S.push(_.toneMapping),S.push(_.numClippingPlanes),S.push(_.numClipIntersection),S.push(_.depthPacking)}function C(S,_){a.disableAll(),_.supportsVertexTextures&&a.enable(0),_.instancing&&a.enable(1),_.instancingColor&&a.enable(2),_.instancingMorph&&a.enable(3),_.matcap&&a.enable(4),_.envMap&&a.enable(5),_.normalMapObjectSpace&&a.enable(6),_.normalMapTangentSpace&&a.enable(7),_.clearcoat&&a.enable(8),_.iridescence&&a.enable(9),_.alphaTest&&a.enable(10),_.vertexColors&&a.enable(11),_.vertexAlphas&&a.enable(12),_.vertexUv1s&&a.enable(13),_.vertexUv2s&&a.enable(14),_.vertexUv3s&&a.enable(15),_.vertexTangents&&a.enable(16),_.anisotropy&&a.enable(17),_.alphaHash&&a.enable(18),_.batching&&a.enable(19),_.dispersion&&a.enable(20),_.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),_.fog&&a.enable(0),_.useFog&&a.enable(1),_.flatShading&&a.enable(2),_.logarithmicDepthBuffer&&a.enable(3),_.reverseDepthBuffer&&a.enable(4),_.skinning&&a.enable(5),_.morphTargets&&a.enable(6),_.morphNormals&&a.enable(7),_.morphColors&&a.enable(8),_.premultipliedAlpha&&a.enable(9),_.shadowMapEnabled&&a.enable(10),_.doubleSided&&a.enable(11),_.flipSided&&a.enable(12),_.useDepthPacking&&a.enable(13),_.dithering&&a.enable(14),_.transmission&&a.enable(15),_.sheen&&a.enable(16),_.opaque&&a.enable(17),_.pointsUvs&&a.enable(18),_.decodeVideoTexture&&a.enable(19),_.decodeVideoTextureEmissive&&a.enable(20),_.alphaToCoverage&&a.enable(21),S.push(a.mask)}function y(S){let _=g[S.type],R;if(_){let V=ai[_];R=Yd.clone(V.uniforms)}else R=S.uniforms;return R}function L(S,_){let R;for(let V=0,H=h.length;V<H;V++){let Q=h[V];if(Q.cacheKey===_){R=Q,++R.usedTimes;break}}return R===void 0&&(R=new Pv(i,_,S,s),h.push(R)),R}function P(S){if(--S.usedTimes===0){let _=h.indexOf(S);h[_]=h[h.length-1],h.pop(),S.destroy()}}function D(S){l.remove(S)}function F(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:y,acquireProgram:L,releaseProgram:P,releaseShaderCache:D,programs:h,dispose:F}}function Nv(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function Fv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function vf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function yf(){let i=[],e=0,t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(u,f,p,g,v,m){let d=i[e];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},i[e]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=v,d.group=m),e++,d}function a(u,f,p,g,v,m){let d=o(u,f,p,g,v,m);p.transmission>0?n.push(d):p.transparent===!0?r.push(d):t.push(d)}function l(u,f,p,g,v,m){let d=o(u,f,p,g,v,m);p.transmission>0?n.unshift(d):p.transparent===!0?r.unshift(d):t.unshift(d)}function c(u,f){t.length>1&&t.sort(u||Fv),n.length>1&&n.sort(f||vf),r.length>1&&r.sort(f||vf)}function h(){for(let u=e,f=i.length;u<f;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:h,sort:c}}function Uv(){let i=new WeakMap;function e(n,r){let s=i.get(n),o;return s===void 0?(o=new yf,i.set(n,[o])):r>=s.length?(o=new yf,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Bv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new Qe};break;case"SpotLight":t={position:new k,direction:new k,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":t={color:new Qe,position:new k,halfWidth:new k,halfHeight:new k};break}return i[e.id]=t,t}}}function Ov(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var kv=0;function zv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Vv(i){let e=new Bv,t=Ov(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new k);let r=new k,s=new Tt,o=new Tt;function a(c){let h=0,u=0,f=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let p=0,g=0,v=0,m=0,d=0,A=0,C=0,y=0,L=0,P=0,D=0;c.sort(zv);for(let S=0,_=c.length;S<_;S++){let R=c[S],V=R.color,H=R.intensity,Q=R.distance,Z=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=V.r*H,u+=V.g*H,f+=V.b*H;else if(R.isLightProbe){for(let J=0;J<9;J++)n.probe[J].addScaledVector(R.sh.coefficients[J],H);D++}else if(R.isDirectionalLight){let J=e.get(R);if(J.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let ee=R.shadow,X=t.get(R);X.shadowIntensity=ee.intensity,X.shadowBias=ee.bias,X.shadowNormalBias=ee.normalBias,X.shadowRadius=ee.radius,X.shadowMapSize=ee.mapSize,n.directionalShadow[p]=X,n.directionalShadowMap[p]=Z,n.directionalShadowMatrix[p]=R.shadow.matrix,A++}n.directional[p]=J,p++}else if(R.isSpotLight){let J=e.get(R);J.position.setFromMatrixPosition(R.matrixWorld),J.color.copy(V).multiplyScalar(H),J.distance=Q,J.coneCos=Math.cos(R.angle),J.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),J.decay=R.decay,n.spot[v]=J;let ee=R.shadow;if(R.map&&(n.spotLightMap[L]=R.map,L++,ee.updateMatrices(R),R.castShadow&&P++),n.spotLightMatrix[v]=ee.matrix,R.castShadow){let X=t.get(R);X.shadowIntensity=ee.intensity,X.shadowBias=ee.bias,X.shadowNormalBias=ee.normalBias,X.shadowRadius=ee.radius,X.shadowMapSize=ee.mapSize,n.spotShadow[v]=X,n.spotShadowMap[v]=Z,y++}v++}else if(R.isRectAreaLight){let J=e.get(R);J.color.copy(V).multiplyScalar(H),J.halfWidth.set(R.width*.5,0,0),J.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=J,m++}else if(R.isPointLight){let J=e.get(R);if(J.color.copy(R.color).multiplyScalar(R.intensity),J.distance=R.distance,J.decay=R.decay,R.castShadow){let ee=R.shadow,X=t.get(R);X.shadowIntensity=ee.intensity,X.shadowBias=ee.bias,X.shadowNormalBias=ee.normalBias,X.shadowRadius=ee.radius,X.shadowMapSize=ee.mapSize,X.shadowCameraNear=ee.camera.near,X.shadowCameraFar=ee.camera.far,n.pointShadow[g]=X,n.pointShadowMap[g]=Z,n.pointShadowMatrix[g]=R.shadow.matrix,C++}n.point[g]=J,g++}else if(R.isHemisphereLight){let J=e.get(R);J.skyColor.copy(R.color).multiplyScalar(H),J.groundColor.copy(R.groundColor).multiplyScalar(H),n.hemi[d]=J,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xe.LTC_FLOAT_1,n.rectAreaLTC2=xe.LTC_FLOAT_2):(n.rectAreaLTC1=xe.LTC_HALF_1,n.rectAreaLTC2=xe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let F=n.hash;(F.directionalLength!==p||F.pointLength!==g||F.spotLength!==v||F.rectAreaLength!==m||F.hemiLength!==d||F.numDirectionalShadows!==A||F.numPointShadows!==C||F.numSpotShadows!==y||F.numSpotMaps!==L||F.numLightProbes!==D)&&(n.directional.length=p,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.pointShadow.length=C,n.pointShadowMap.length=C,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=A,n.pointShadowMatrix.length=C,n.spotLightMatrix.length=y+L-P,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=D,F.directionalLength=p,F.pointLength=g,F.spotLength=v,F.rectAreaLength=m,F.hemiLength=d,F.numDirectionalShadows=A,F.numPointShadows=C,F.numSpotShadows=y,F.numSpotMaps=L,F.numLightProbes=D,n.version=kv++)}function l(c,h){let u=0,f=0,p=0,g=0,v=0,m=h.matrixWorldInverse;for(let d=0,A=c.length;d<A;d++){let C=c[d];if(C.isDirectionalLight){let y=n.directional[u];y.direction.setFromMatrixPosition(C.matrixWorld),r.setFromMatrixPosition(C.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),u++}else if(C.isSpotLight){let y=n.spot[p];y.position.setFromMatrixPosition(C.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(C.matrixWorld),r.setFromMatrixPosition(C.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),p++}else if(C.isRectAreaLight){let y=n.rectArea[g];y.position.setFromMatrixPosition(C.matrixWorld),y.position.applyMatrix4(m),o.identity(),s.copy(C.matrixWorld),s.premultiply(m),o.extractRotation(s),y.halfWidth.set(C.width*.5,0,0),y.halfHeight.set(0,C.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(C.isPointLight){let y=n.point[f];y.position.setFromMatrixPosition(C.matrixWorld),y.position.applyMatrix4(m),f++}else if(C.isHemisphereLight){let y=n.hemi[v];y.direction.setFromMatrixPosition(C.matrixWorld),y.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:n}}function bf(i){let e=new Vv(i),t=[],n=[];function r(h){c.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function Hv(i){let e=new WeakMap;function t(r,s=0){let o=e.get(r),a;return o===void 0?(a=new bf(i),e.set(r,[a])):s>=o.length?(a=new bf(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var Gv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Wv=`uniform sampler2D shadow_pass;
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
}`;function Xv(i,e,t){let n=new os,r=new ge,s=new ge,o=new Rt,a=new Za({depthPacking:Ld}),l=new Qa,c={},h=t.maxTextureSize,u={[_i]:Ht,[Ht]:_i,[Jt]:Jt},f=new bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ge},radius:{value:4}},vertexShader:Gv,fragmentShader:Wv}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let g=new Nn;g.setAttribute("position",new yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Mt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hh;let d=this.type;this.render=function(P,D,F){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;let S=i.getRenderTarget(),_=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),V=i.state;V.setBlending(Mi),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);let H=d!==si&&this.type===si,Q=d===si&&this.type!==si;for(let Z=0,J=P.length;Z<J;Z++){let ee=P[Z],X=ee.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;r.copy(X.mapSize);let me=X.getFrameExtents();if(r.multiply(me),s.copy(X.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/me.x),r.x=s.x*me.x,X.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/me.y),r.y=s.y*me.y,X.mapSize.y=s.y)),X.map===null||H===!0||Q===!0){let be=this.type!==si?{minFilter:Dn,magFilter:Dn}:{};X.map!==null&&X.map.dispose(),X.map=new ii(r.x,r.y,be),X.map.texture.name=ee.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();let ve=X.getViewportCount();for(let be=0;be<ve;be++){let Ue=X.getViewport(be);o.set(s.x*Ue.x,s.y*Ue.y,s.x*Ue.z,s.y*Ue.w),V.viewport(o),X.updateMatrices(ee,be),n=X.getFrustum(),y(D,F,X.camera,ee,this.type)}X.isPointLightShadow!==!0&&this.type===si&&A(X,F),X.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(S,_,R)};function A(P,D){let F=e.update(v);f.defines.VSM_SAMPLES!==P.blurSamples&&(f.defines.VSM_SAMPLES=P.blurSamples,p.defines.VSM_SAMPLES=P.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new ii(r.x,r.y)),f.uniforms.shadow_pass.value=P.map.texture,f.uniforms.resolution.value=P.mapSize,f.uniforms.radius.value=P.radius,i.setRenderTarget(P.mapPass),i.clear(),i.renderBufferDirect(D,null,F,f,v,null),p.uniforms.shadow_pass.value=P.mapPass.texture,p.uniforms.resolution.value=P.mapSize,p.uniforms.radius.value=P.radius,i.setRenderTarget(P.map),i.clear(),i.renderBufferDirect(D,null,F,p,v,null)}function C(P,D,F,S){let _=null,R=F.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(R!==void 0)_=R;else if(_=F.isPointLight===!0?l:a,i.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){let V=_.uuid,H=D.uuid,Q=c[V];Q===void 0&&(Q={},c[V]=Q);let Z=Q[H];Z===void 0&&(Z=_.clone(),Q[H]=Z,D.addEventListener("dispose",L)),_=Z}if(_.visible=D.visible,_.wireframe=D.wireframe,S===si?_.side=D.shadowSide!==null?D.shadowSide:D.side:_.side=D.shadowSide!==null?D.shadowSide:u[D.side],_.alphaMap=D.alphaMap,_.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,_.map=D.map,_.clipShadows=D.clipShadows,_.clippingPlanes=D.clippingPlanes,_.clipIntersection=D.clipIntersection,_.displacementMap=D.displacementMap,_.displacementScale=D.displacementScale,_.displacementBias=D.displacementBias,_.wireframeLinewidth=D.wireframeLinewidth,_.linewidth=D.linewidth,F.isPointLight===!0&&_.isMeshDistanceMaterial===!0){let V=i.properties.get(_);V.light=F}return _}function y(P,D,F,S,_){if(P.visible===!1)return;if(P.layers.test(D.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&_===si)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,P.matrixWorld);let H=e.update(P),Q=P.material;if(Array.isArray(Q)){let Z=H.groups;for(let J=0,ee=Z.length;J<ee;J++){let X=Z[J],me=Q[X.materialIndex];if(me&&me.visible){let ve=C(P,me,S,_);P.onBeforeShadow(i,P,D,F,H,ve,X),i.renderBufferDirect(F,null,H,ve,P,X),P.onAfterShadow(i,P,D,F,H,ve,X)}}}else if(Q.visible){let Z=C(P,Q,S,_);P.onBeforeShadow(i,P,D,F,H,Z,null),i.renderBufferDirect(F,null,H,Z,P,null),P.onAfterShadow(i,P,D,F,H,Z,null)}}let V=P.children;for(let H=0,Q=V.length;H<Q;H++)y(V[H],D,F,S,_)}function L(P){P.target.removeEventListener("dispose",L);for(let F in c){let S=c[F],_=P.target.uuid;_ in S&&(S[_].dispose(),delete S[_])}}}var qv={[hl]:ul,[dl]:ml,[fl]:gl,[mr]:pl,[ul]:hl,[ml]:dl,[gl]:fl,[pl]:mr};function Yv(i,e){function t(){let N=!1,Me=new Rt,$=null,ne=new Rt(0,0,0,0);return{setMask:function(Ee){$!==Ee&&!N&&(i.colorMask(Ee,Ee,Ee,Ee),$=Ee)},setLocked:function(Ee){N=Ee},setClear:function(Ee,we,tt,It,Zt){Zt===!0&&(Ee*=It,we*=It,tt*=It),Me.set(Ee,we,tt,It),ne.equals(Me)===!1&&(i.clearColor(Ee,we,tt,It),ne.copy(Me))},reset:function(){N=!1,$=null,ne.set(-1,0,0,0)}}}function n(){let N=!1,Me=!1,$=null,ne=null,Ee=null;return{setReversed:function(we){if(Me!==we){let tt=e.get("EXT_clip_control");we?tt.clipControlEXT(tt.LOWER_LEFT_EXT,tt.ZERO_TO_ONE_EXT):tt.clipControlEXT(tt.LOWER_LEFT_EXT,tt.NEGATIVE_ONE_TO_ONE_EXT),Me=we;let It=Ee;Ee=null,this.setClear(It)}},getReversed:function(){return Me},setTest:function(we){we?ue(i.DEPTH_TEST):Pe(i.DEPTH_TEST)},setMask:function(we){$!==we&&!N&&(i.depthMask(we),$=we)},setFunc:function(we){if(Me&&(we=qv[we]),ne!==we){switch(we){case hl:i.depthFunc(i.NEVER);break;case ul:i.depthFunc(i.ALWAYS);break;case dl:i.depthFunc(i.LESS);break;case mr:i.depthFunc(i.LEQUAL);break;case fl:i.depthFunc(i.EQUAL);break;case pl:i.depthFunc(i.GEQUAL);break;case ml:i.depthFunc(i.GREATER);break;case gl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ne=we}},setLocked:function(we){N=we},setClear:function(we){Ee!==we&&(Me&&(we=1-we),i.clearDepth(we),Ee=we)},reset:function(){N=!1,$=null,ne=null,Ee=null,Me=!1}}}function r(){let N=!1,Me=null,$=null,ne=null,Ee=null,we=null,tt=null,It=null,Zt=null;return{setTest:function(_t){N||(_t?ue(i.STENCIL_TEST):Pe(i.STENCIL_TEST))},setMask:function(_t){Me!==_t&&!N&&(i.stencilMask(_t),Me=_t)},setFunc:function(_t,Un,li){($!==_t||ne!==Un||Ee!==li)&&(i.stencilFunc(_t,Un,li),$=_t,ne=Un,Ee=li)},setOp:function(_t,Un,li){(we!==_t||tt!==Un||It!==li)&&(i.stencilOp(_t,Un,li),we=_t,tt=Un,It=li)},setLocked:function(_t){N=_t},setClear:function(_t){Zt!==_t&&(i.clearStencil(_t),Zt=_t)},reset:function(){N=!1,Me=null,$=null,ne=null,Ee=null,we=null,tt=null,It=null,Zt=null}}}let s=new t,o=new n,a=new r,l=new WeakMap,c=new WeakMap,h={},u={},f=new WeakMap,p=[],g=null,v=!1,m=null,d=null,A=null,C=null,y=null,L=null,P=null,D=new Qe(0,0,0),F=0,S=!1,_=null,R=null,V=null,H=null,Q=null,Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),J=!1,ee=0,X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(X)[1]),J=ee>=1):X.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),J=ee>=2);let me=null,ve={},be=i.getParameter(i.SCISSOR_BOX),Ue=i.getParameter(i.VIEWPORT),Ye=new Rt().fromArray(be),Y=new Rt().fromArray(Ue);function se(N,Me,$,ne){let Ee=new Uint8Array(4),we=i.createTexture();i.bindTexture(N,we),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let tt=0;tt<$;tt++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(Me,0,i.RGBA,1,1,ne,0,i.RGBA,i.UNSIGNED_BYTE,Ee):i.texImage2D(Me+tt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ee);return we}let de={};de[i.TEXTURE_2D]=se(i.TEXTURE_2D,i.TEXTURE_2D,1),de[i.TEXTURE_CUBE_MAP]=se(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[i.TEXTURE_2D_ARRAY]=se(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),de[i.TEXTURE_3D]=se(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ue(i.DEPTH_TEST),o.setFunc(mr),oe(!1),he(ch),ue(i.CULL_FACE),w(Mi);function ue(N){h[N]!==!0&&(i.enable(N),h[N]=!0)}function Pe(N){h[N]!==!1&&(i.disable(N),h[N]=!1)}function Ve(N,Me){return u[N]!==Me?(i.bindFramebuffer(N,Me),u[N]=Me,N===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Me),N===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Me),!0):!1}function De(N,Me){let $=p,ne=!1;if(N){$=f.get(Me),$===void 0&&($=[],f.set(Me,$));let Ee=N.textures;if($.length!==Ee.length||$[0]!==i.COLOR_ATTACHMENT0){for(let we=0,tt=Ee.length;we<tt;we++)$[we]=i.COLOR_ATTACHMENT0+we;$.length=Ee.length,ne=!0}}else $[0]!==i.BACK&&($[0]=i.BACK,ne=!0);ne&&i.drawBuffers($)}function qe(N){return g!==N?(i.useProgram(N),g=N,!0):!1}let Ie={[qi]:i.FUNC_ADD,[sd]:i.FUNC_SUBTRACT,[od]:i.FUNC_REVERSE_SUBTRACT};Ie[ad]=i.MIN,Ie[ld]=i.MAX;let Ne={[cd]:i.ZERO,[hd]:i.ONE,[ud]:i.SRC_COLOR,[Ua]:i.SRC_ALPHA,[_d]:i.SRC_ALPHA_SATURATE,[md]:i.DST_COLOR,[fd]:i.DST_ALPHA,[dd]:i.ONE_MINUS_SRC_COLOR,[Ba]:i.ONE_MINUS_SRC_ALPHA,[gd]:i.ONE_MINUS_DST_COLOR,[pd]:i.ONE_MINUS_DST_ALPHA,[xd]:i.CONSTANT_COLOR,[vd]:i.ONE_MINUS_CONSTANT_COLOR,[yd]:i.CONSTANT_ALPHA,[bd]:i.ONE_MINUS_CONSTANT_ALPHA};function w(N,Me,$,ne,Ee,we,tt,It,Zt,_t){if(N===Mi){v===!0&&(Pe(i.BLEND),v=!1);return}if(v===!1&&(ue(i.BLEND),v=!0),N!==rd){if(N!==m||_t!==S){if((d!==qi||y!==qi)&&(i.blendEquation(i.FUNC_ADD),d=qi,y=qi),_t)switch(N){case pr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ho:i.blendFunc(i.ONE,i.ONE);break;case uh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case dh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case pr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ho:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case uh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case dh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}A=null,C=null,L=null,P=null,D.set(0,0,0),F=0,m=N,S=_t}return}Ee=Ee||Me,we=we||$,tt=tt||ne,(Me!==d||Ee!==y)&&(i.blendEquationSeparate(Ie[Me],Ie[Ee]),d=Me,y=Ee),($!==A||ne!==C||we!==L||tt!==P)&&(i.blendFuncSeparate(Ne[$],Ne[ne],Ne[we],Ne[tt]),A=$,C=ne,L=we,P=tt),(It.equals(D)===!1||Zt!==F)&&(i.blendColor(It.r,It.g,It.b,Zt),D.copy(It),F=Zt),m=N,S=!1}function fe(N,Me){N.side===Jt?Pe(i.CULL_FACE):ue(i.CULL_FACE);let $=N.side===Ht;Me&&($=!$),oe($),N.blending===pr&&N.transparent===!1?w(Mi):w(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),s.setMask(N.colorWrite);let ne=N.stencilWrite;a.setTest(ne),ne&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Fe(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ue(i.SAMPLE_ALPHA_TO_COVERAGE):Pe(i.SAMPLE_ALPHA_TO_COVERAGE)}function oe(N){_!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),_=N)}function he(N){N!==td?(ue(i.CULL_FACE),N!==R&&(N===ch?i.cullFace(i.BACK):N===nd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Pe(i.CULL_FACE),R=N}function te(N){N!==V&&(J&&i.lineWidth(N),V=N)}function Fe(N,Me,$){N?(ue(i.POLYGON_OFFSET_FILL),(H!==Me||Q!==$)&&(i.polygonOffset(Me,$),H=Me,Q=$)):Pe(i.POLYGON_OFFSET_FILL)}function ae(N){N?ue(i.SCISSOR_TEST):Pe(i.SCISSOR_TEST)}function E(N){N===void 0&&(N=i.TEXTURE0+Z-1),me!==N&&(i.activeTexture(N),me=N)}function x(N,Me,$){$===void 0&&(me===null?$=i.TEXTURE0+Z-1:$=me);let ne=ve[$];ne===void 0&&(ne={type:void 0,texture:void 0},ve[$]=ne),(ne.type!==N||ne.texture!==Me)&&(me!==$&&(i.activeTexture($),me=$),i.bindTexture(N,Me||de[N]),ne.type=N,ne.texture=Me)}function O(){let N=ve[me];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function K(){try{i.compressedTexImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ie(){try{i.compressedTexImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function q(){try{i.texSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Le(){try{i.texSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ye(){try{i.compressedTexSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Be(){try{i.compressedTexSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Xe(){try{i.texStorage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function le(){try{i.texStorage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Te(){try{i.texImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function He(){try{i.texImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ke(N){Ye.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),Ye.copy(N))}function Ae(N){Y.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),Y.copy(N))}function ht(N,Me){let $=c.get(Me);$===void 0&&($=new WeakMap,c.set(Me,$));let ne=$.get(N);ne===void 0&&(ne=i.getUniformBlockIndex(Me,N.name),$.set(N,ne))}function it(N,Me){let ne=c.get(Me).get(N);l.get(Me)!==ne&&(i.uniformBlockBinding(Me,ne,N.__bindingPointIndex),l.set(Me,ne))}function bt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},me=null,ve={},u={},f=new WeakMap,p=[],g=null,v=!1,m=null,d=null,A=null,C=null,y=null,L=null,P=null,D=new Qe(0,0,0),F=0,S=!1,_=null,R=null,V=null,H=null,Q=null,Ye.set(0,0,i.canvas.width,i.canvas.height),Y.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ue,disable:Pe,bindFramebuffer:Ve,drawBuffers:De,useProgram:qe,setBlending:w,setMaterial:fe,setFlipSided:oe,setCullFace:he,setLineWidth:te,setPolygonOffset:Fe,setScissorTest:ae,activeTexture:E,bindTexture:x,unbindTexture:O,compressedTexImage2D:K,compressedTexImage3D:ie,texImage2D:Te,texImage3D:He,updateUBOMapping:ht,uniformBlockBinding:it,texStorage2D:Xe,texStorage3D:le,texSubImage2D:q,texSubImage3D:Le,compressedTexSubImage2D:ye,compressedTexSubImage3D:Be,scissor:Ke,viewport:Ae,reset:bt}}function jv(i,e,t,n,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ge,h=new WeakMap,u,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,x){return p?new OffscreenCanvas(E,x):zs("canvas")}function v(E,x,O){let K=1,ie=ae(E);if((ie.width>O||ie.height>O)&&(K=O/Math.max(ie.width,ie.height)),K<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let q=Math.floor(K*ie.width),Le=Math.floor(K*ie.height);u===void 0&&(u=g(q,Le));let ye=x?g(q,Le):u;return ye.width=q,ye.height=Le,ye.getContext("2d").drawImage(E,0,0,q,Le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+q+"x"+Le+")."),ye}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),E;return E}function m(E){return E.generateMipmaps}function d(E){i.generateMipmap(E)}function A(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function C(E,x,O,K,ie=!1){if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let q=x;if(x===i.RED&&(O===i.FLOAT&&(q=i.R32F),O===i.HALF_FLOAT&&(q=i.R16F),O===i.UNSIGNED_BYTE&&(q=i.R8)),x===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(q=i.R8UI),O===i.UNSIGNED_SHORT&&(q=i.R16UI),O===i.UNSIGNED_INT&&(q=i.R32UI),O===i.BYTE&&(q=i.R8I),O===i.SHORT&&(q=i.R16I),O===i.INT&&(q=i.R32I)),x===i.RG&&(O===i.FLOAT&&(q=i.RG32F),O===i.HALF_FLOAT&&(q=i.RG16F),O===i.UNSIGNED_BYTE&&(q=i.RG8)),x===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(q=i.RG8UI),O===i.UNSIGNED_SHORT&&(q=i.RG16UI),O===i.UNSIGNED_INT&&(q=i.RG32UI),O===i.BYTE&&(q=i.RG8I),O===i.SHORT&&(q=i.RG16I),O===i.INT&&(q=i.RG32I)),x===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(q=i.RGB8UI),O===i.UNSIGNED_SHORT&&(q=i.RGB16UI),O===i.UNSIGNED_INT&&(q=i.RGB32UI),O===i.BYTE&&(q=i.RGB8I),O===i.SHORT&&(q=i.RGB16I),O===i.INT&&(q=i.RGB32I)),x===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(q=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(q=i.RGBA16UI),O===i.UNSIGNED_INT&&(q=i.RGBA32UI),O===i.BYTE&&(q=i.RGBA8I),O===i.SHORT&&(q=i.RGBA16I),O===i.INT&&(q=i.RGBA32I)),x===i.RGB&&O===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),x===i.RGBA){let Le=ie?Bs:dt.getTransfer(K);O===i.FLOAT&&(q=i.RGBA32F),O===i.HALF_FLOAT&&(q=i.RGBA16F),O===i.UNSIGNED_BYTE&&(q=Le===xt?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function y(E,x){let O;return E?x===null||x===tr||x===fs?O=i.DEPTH24_STENCIL8:x===oi?O=i.DEPTH32F_STENCIL8:x===us&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===tr||x===fs?O=i.DEPTH_COMPONENT24:x===oi?O=i.DEPTH_COMPONENT32F:x===us&&(O=i.DEPTH_COMPONENT16),O}function L(E,x){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==Dn&&E.minFilter!==Hn?Math.log2(Math.max(x.width,x.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?x.mipmaps.length:1}function P(E){let x=E.target;x.removeEventListener("dispose",P),F(x),x.isVideoTexture&&h.delete(x)}function D(E){let x=E.target;x.removeEventListener("dispose",D),_(x)}function F(E){let x=n.get(E);if(x.__webglInit===void 0)return;let O=E.source,K=f.get(O);if(K){let ie=K[x.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&S(E),Object.keys(K).length===0&&f.delete(O)}n.remove(E)}function S(E){let x=n.get(E);i.deleteTexture(x.__webglTexture);let O=E.source,K=f.get(O);delete K[x.__cacheKey],o.memory.textures--}function _(E){let x=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(x.__webglFramebuffer[K]))for(let ie=0;ie<x.__webglFramebuffer[K].length;ie++)i.deleteFramebuffer(x.__webglFramebuffer[K][ie]);else i.deleteFramebuffer(x.__webglFramebuffer[K]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[K])}else{if(Array.isArray(x.__webglFramebuffer))for(let K=0;K<x.__webglFramebuffer.length;K++)i.deleteFramebuffer(x.__webglFramebuffer[K]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let K=0;K<x.__webglColorRenderbuffer.length;K++)x.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[K]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let O=E.textures;for(let K=0,ie=O.length;K<ie;K++){let q=n.get(O[K]);q.__webglTexture&&(i.deleteTexture(q.__webglTexture),o.memory.textures--),n.remove(O[K])}n.remove(E)}let R=0;function V(){R=0}function H(){let E=R;return E>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+r.maxTextures),R+=1,E}function Q(E){let x=[];return x.push(E.wrapS),x.push(E.wrapT),x.push(E.wrapR||0),x.push(E.magFilter),x.push(E.minFilter),x.push(E.anisotropy),x.push(E.internalFormat),x.push(E.format),x.push(E.type),x.push(E.generateMipmaps),x.push(E.premultiplyAlpha),x.push(E.flipY),x.push(E.unpackAlignment),x.push(E.colorSpace),x.join()}function Z(E,x){let O=n.get(E);if(E.isVideoTexture&&te(E),E.isRenderTargetTexture===!1&&E.version>0&&O.__version!==E.version){let K=E.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(O,E,x);return}}t.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+x)}function J(E,x){let O=n.get(E);if(E.version>0&&O.__version!==E.version){Y(O,E,x);return}t.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+x)}function ee(E,x){let O=n.get(E);if(E.version>0&&O.__version!==E.version){Y(O,E,x);return}t.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+x)}function X(E,x){let O=n.get(E);if(E.version>0&&O.__version!==E.version){se(O,E,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+x)}let me={[Oa]:i.REPEAT,[Xi]:i.CLAMP_TO_EDGE,[ka]:i.MIRRORED_REPEAT},ve={[Dn]:i.NEAREST,[Pd]:i.NEAREST_MIPMAP_NEAREST,[fo]:i.NEAREST_MIPMAP_LINEAR,[Hn]:i.LINEAR,[yl]:i.LINEAR_MIPMAP_NEAREST,[er]:i.LINEAR_MIPMAP_LINEAR},be={[Fd]:i.NEVER,[Vd]:i.ALWAYS,[Ud]:i.LESS,[bh]:i.LEQUAL,[Bd]:i.EQUAL,[zd]:i.GEQUAL,[Od]:i.GREATER,[kd]:i.NOTEQUAL};function Ue(E,x){if(x.type===oi&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Hn||x.magFilter===yl||x.magFilter===fo||x.magFilter===er||x.minFilter===Hn||x.minFilter===yl||x.minFilter===fo||x.minFilter===er)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,me[x.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,me[x.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,me[x.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,ve[x.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,ve[x.minFilter]),x.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,be[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Dn||x.minFilter!==fo&&x.minFilter!==er||x.type===oi&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let O=e.get("EXT_texture_filter_anisotropic");i.texParameterf(E,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Ye(E,x){let O=!1;E.__webglInit===void 0&&(E.__webglInit=!0,x.addEventListener("dispose",P));let K=x.source,ie=f.get(K);ie===void 0&&(ie={},f.set(K,ie));let q=Q(x);if(q!==E.__cacheKey){ie[q]===void 0&&(ie[q]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,O=!0),ie[q].usedTimes++;let Le=ie[E.__cacheKey];Le!==void 0&&(ie[E.__cacheKey].usedTimes--,Le.usedTimes===0&&S(x)),E.__cacheKey=q,E.__webglTexture=ie[q].texture}return O}function Y(E,x,O){let K=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(K=i.TEXTURE_3D);let ie=Ye(E,x),q=x.source;t.bindTexture(K,E.__webglTexture,i.TEXTURE0+O);let Le=n.get(q);if(q.version!==Le.__version||ie===!0){t.activeTexture(i.TEXTURE0+O);let ye=dt.getPrimaries(dt.workingColorSpace),Be=x.colorSpace===Ei?null:dt.getPrimaries(x.colorSpace),Xe=x.colorSpace===Ei||ye===Be?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe);let le=v(x.image,!1,r.maxTextureSize);le=Fe(x,le);let Te=s.convert(x.format,x.colorSpace),He=s.convert(x.type),Ke=C(x.internalFormat,Te,He,x.colorSpace,x.isVideoTexture);Ue(K,x);let Ae,ht=x.mipmaps,it=x.isVideoTexture!==!0,bt=Le.__version===void 0||ie===!0,N=q.dataReady,Me=L(x,le);if(x.isDepthTexture)Ke=y(x.format===ps,x.type),bt&&(it?t.texStorage2D(i.TEXTURE_2D,1,Ke,le.width,le.height):t.texImage2D(i.TEXTURE_2D,0,Ke,le.width,le.height,0,Te,He,null));else if(x.isDataTexture)if(ht.length>0){it&&bt&&t.texStorage2D(i.TEXTURE_2D,Me,Ke,ht[0].width,ht[0].height);for(let $=0,ne=ht.length;$<ne;$++)Ae=ht[$],it?N&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,Ae.width,Ae.height,Te,He,Ae.data):t.texImage2D(i.TEXTURE_2D,$,Ke,Ae.width,Ae.height,0,Te,He,Ae.data);x.generateMipmaps=!1}else it?(bt&&t.texStorage2D(i.TEXTURE_2D,Me,Ke,le.width,le.height),N&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,le.width,le.height,Te,He,le.data)):t.texImage2D(i.TEXTURE_2D,0,Ke,le.width,le.height,0,Te,He,le.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){it&&bt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Me,Ke,ht[0].width,ht[0].height,le.depth);for(let $=0,ne=ht.length;$<ne;$++)if(Ae=ht[$],x.format!==Fn)if(Te!==null)if(it){if(N)if(x.layerUpdates.size>0){let Ee=Ah(Ae.width,Ae.height,x.format,x.type);for(let we of x.layerUpdates){let tt=Ae.data.subarray(we*Ee/Ae.data.BYTES_PER_ELEMENT,(we+1)*Ee/Ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,we,Ae.width,Ae.height,1,Te,tt)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,Ae.width,Ae.height,le.depth,Te,Ae.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,$,Ke,Ae.width,Ae.height,le.depth,0,Ae.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else it?N&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,Ae.width,Ae.height,le.depth,Te,He,Ae.data):t.texImage3D(i.TEXTURE_2D_ARRAY,$,Ke,Ae.width,Ae.height,le.depth,0,Te,He,Ae.data)}else{it&&bt&&t.texStorage2D(i.TEXTURE_2D,Me,Ke,ht[0].width,ht[0].height);for(let $=0,ne=ht.length;$<ne;$++)Ae=ht[$],x.format!==Fn?Te!==null?it?N&&t.compressedTexSubImage2D(i.TEXTURE_2D,$,0,0,Ae.width,Ae.height,Te,Ae.data):t.compressedTexImage2D(i.TEXTURE_2D,$,Ke,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?N&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,Ae.width,Ae.height,Te,He,Ae.data):t.texImage2D(i.TEXTURE_2D,$,Ke,Ae.width,Ae.height,0,Te,He,Ae.data)}else if(x.isDataArrayTexture)if(it){if(bt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Me,Ke,le.width,le.height,le.depth),N)if(x.layerUpdates.size>0){let $=Ah(le.width,le.height,x.format,x.type);for(let ne of x.layerUpdates){let Ee=le.data.subarray(ne*$/le.data.BYTES_PER_ELEMENT,(ne+1)*$/le.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ne,le.width,le.height,1,Te,He,Ee)}x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,Te,He,le.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ke,le.width,le.height,le.depth,0,Te,He,le.data);else if(x.isData3DTexture)it?(bt&&t.texStorage3D(i.TEXTURE_3D,Me,Ke,le.width,le.height,le.depth),N&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,Te,He,le.data)):t.texImage3D(i.TEXTURE_3D,0,Ke,le.width,le.height,le.depth,0,Te,He,le.data);else if(x.isFramebufferTexture){if(bt)if(it)t.texStorage2D(i.TEXTURE_2D,Me,Ke,le.width,le.height);else{let $=le.width,ne=le.height;for(let Ee=0;Ee<Me;Ee++)t.texImage2D(i.TEXTURE_2D,Ee,Ke,$,ne,0,Te,He,null),$>>=1,ne>>=1}}else if(ht.length>0){if(it&&bt){let $=ae(ht[0]);t.texStorage2D(i.TEXTURE_2D,Me,Ke,$.width,$.height)}for(let $=0,ne=ht.length;$<ne;$++)Ae=ht[$],it?N&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,Te,He,Ae):t.texImage2D(i.TEXTURE_2D,$,Ke,Te,He,Ae);x.generateMipmaps=!1}else if(it){if(bt){let $=ae(le);t.texStorage2D(i.TEXTURE_2D,Me,Ke,$.width,$.height)}N&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Te,He,le)}else t.texImage2D(i.TEXTURE_2D,0,Ke,Te,He,le);m(x)&&d(K),Le.__version=q.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function se(E,x,O){if(x.image.length!==6)return;let K=Ye(E,x),ie=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+O);let q=n.get(ie);if(ie.version!==q.__version||K===!0){t.activeTexture(i.TEXTURE0+O);let Le=dt.getPrimaries(dt.workingColorSpace),ye=x.colorSpace===Ei?null:dt.getPrimaries(x.colorSpace),Be=x.colorSpace===Ei||Le===ye?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);let Xe=x.isCompressedTexture||x.image[0].isCompressedTexture,le=x.image[0]&&x.image[0].isDataTexture,Te=[];for(let ne=0;ne<6;ne++)!Xe&&!le?Te[ne]=v(x.image[ne],!0,r.maxCubemapSize):Te[ne]=le?x.image[ne].image:x.image[ne],Te[ne]=Fe(x,Te[ne]);let He=Te[0],Ke=s.convert(x.format,x.colorSpace),Ae=s.convert(x.type),ht=C(x.internalFormat,Ke,Ae,x.colorSpace),it=x.isVideoTexture!==!0,bt=q.__version===void 0||K===!0,N=ie.dataReady,Me=L(x,He);Ue(i.TEXTURE_CUBE_MAP,x);let $;if(Xe){it&&bt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Me,ht,He.width,He.height);for(let ne=0;ne<6;ne++){$=Te[ne].mipmaps;for(let Ee=0;Ee<$.length;Ee++){let we=$[Ee];x.format!==Fn?Ke!==null?it?N&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ee,0,0,we.width,we.height,Ke,we.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ee,ht,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):it?N&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ee,0,0,we.width,we.height,Ke,Ae,we.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ee,ht,we.width,we.height,0,Ke,Ae,we.data)}}}else{if($=x.mipmaps,it&&bt){$.length>0&&Me++;let ne=ae(Te[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Me,ht,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(le){it?N&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Te[ne].width,Te[ne].height,Ke,Ae,Te[ne].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,ht,Te[ne].width,Te[ne].height,0,Ke,Ae,Te[ne].data);for(let Ee=0;Ee<$.length;Ee++){let tt=$[Ee].image[ne].image;it?N&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ee+1,0,0,tt.width,tt.height,Ke,Ae,tt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ee+1,ht,tt.width,tt.height,0,Ke,Ae,tt.data)}}else{it?N&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Ke,Ae,Te[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,ht,Ke,Ae,Te[ne]);for(let Ee=0;Ee<$.length;Ee++){let we=$[Ee];it?N&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ee+1,0,0,Ke,Ae,we.image[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ee+1,ht,Ke,Ae,we.image[ne])}}}m(x)&&d(i.TEXTURE_CUBE_MAP),q.__version=ie.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function de(E,x,O,K,ie,q){let Le=s.convert(O.format,O.colorSpace),ye=s.convert(O.type),Be=C(O.internalFormat,Le,ye,O.colorSpace),Xe=n.get(x),le=n.get(O);if(le.__renderTarget=x,!Xe.__hasExternalTextures){let Te=Math.max(1,x.width>>q),He=Math.max(1,x.height>>q);ie===i.TEXTURE_3D||ie===i.TEXTURE_2D_ARRAY?t.texImage3D(ie,q,Be,Te,He,x.depth,0,Le,ye,null):t.texImage2D(ie,q,Be,Te,He,0,Le,ye,null)}t.bindFramebuffer(i.FRAMEBUFFER,E),he(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,ie,le.__webglTexture,0,oe(x)):(ie===i.TEXTURE_2D||ie>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,ie,le.__webglTexture,q),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ue(E,x,O){if(i.bindRenderbuffer(i.RENDERBUFFER,E),x.depthBuffer){let K=x.depthTexture,ie=K&&K.isDepthTexture?K.type:null,q=y(x.stencilBuffer,ie),Le=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ye=oe(x);he(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ye,q,x.width,x.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,ye,q,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,q,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Le,i.RENDERBUFFER,E)}else{let K=x.textures;for(let ie=0;ie<K.length;ie++){let q=K[ie],Le=s.convert(q.format,q.colorSpace),ye=s.convert(q.type),Be=C(q.internalFormat,Le,ye,q.colorSpace),Xe=oe(x);O&&he(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Xe,Be,x.width,x.height):he(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Xe,Be,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,Be,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Pe(E,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,E),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let K=n.get(x.depthTexture);K.__renderTarget=x,(!K.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),Z(x.depthTexture,0);let ie=K.__webglTexture,q=oe(x);if(x.depthTexture.format===es)he(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ie,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ie,0);else if(x.depthTexture.format===ps)he(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ie,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function Ve(E){let x=n.get(E),O=E.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==E.depthTexture){let K=E.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),K){let ie=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,K.removeEventListener("dispose",ie)};K.addEventListener("dispose",ie),x.__depthDisposeCallback=ie}x.__boundDepthTexture=K}if(E.depthTexture&&!x.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");let K=E.texture.mipmaps;K&&K.length>0?Pe(x.__webglFramebuffer[0],E):Pe(x.__webglFramebuffer,E)}else if(O){x.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[K]),x.__webglDepthbuffer[K]===void 0)x.__webglDepthbuffer[K]=i.createRenderbuffer(),ue(x.__webglDepthbuffer[K],E,!1);else{let ie=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=x.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,ie,i.RENDERBUFFER,q)}}else{let K=E.texture.mipmaps;if(K&&K.length>0?t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),ue(x.__webglDepthbuffer,E,!1);else{let ie=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,ie,i.RENDERBUFFER,q)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function De(E,x,O){let K=n.get(E);x!==void 0&&de(K.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&Ve(E)}function qe(E){let x=E.texture,O=n.get(E),K=n.get(x);E.addEventListener("dispose",D);let ie=E.textures,q=E.isWebGLCubeRenderTarget===!0,Le=ie.length>1;if(Le||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=x.version,o.memory.textures++),q){O.__webglFramebuffer=[];for(let ye=0;ye<6;ye++)if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer[ye]=[];for(let Be=0;Be<x.mipmaps.length;Be++)O.__webglFramebuffer[ye][Be]=i.createFramebuffer()}else O.__webglFramebuffer[ye]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer=[];for(let ye=0;ye<x.mipmaps.length;ye++)O.__webglFramebuffer[ye]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(Le)for(let ye=0,Be=ie.length;ye<Be;ye++){let Xe=n.get(ie[ye]);Xe.__webglTexture===void 0&&(Xe.__webglTexture=i.createTexture(),o.memory.textures++)}if(E.samples>0&&he(E)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ye=0;ye<ie.length;ye++){let Be=ie[ye];O.__webglColorRenderbuffer[ye]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[ye]);let Xe=s.convert(Be.format,Be.colorSpace),le=s.convert(Be.type),Te=C(Be.internalFormat,Xe,le,Be.colorSpace,E.isXRRenderTarget===!0),He=oe(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,He,Te,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,O.__webglColorRenderbuffer[ye])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),ue(O.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(q){t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),Ue(i.TEXTURE_CUBE_MAP,x);for(let ye=0;ye<6;ye++)if(x.mipmaps&&x.mipmaps.length>0)for(let Be=0;Be<x.mipmaps.length;Be++)de(O.__webglFramebuffer[ye][Be],E,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Be);else de(O.__webglFramebuffer[ye],E,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0);m(x)&&d(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Le){for(let ye=0,Be=ie.length;ye<Be;ye++){let Xe=ie[ye],le=n.get(Xe);t.bindTexture(i.TEXTURE_2D,le.__webglTexture),Ue(i.TEXTURE_2D,Xe),de(O.__webglFramebuffer,E,Xe,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,0),m(Xe)&&d(i.TEXTURE_2D)}t.unbindTexture()}else{let ye=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ye=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ye,K.__webglTexture),Ue(ye,x),x.mipmaps&&x.mipmaps.length>0)for(let Be=0;Be<x.mipmaps.length;Be++)de(O.__webglFramebuffer[Be],E,x,i.COLOR_ATTACHMENT0,ye,Be);else de(O.__webglFramebuffer,E,x,i.COLOR_ATTACHMENT0,ye,0);m(x)&&d(ye),t.unbindTexture()}E.depthBuffer&&Ve(E)}function Ie(E){let x=E.textures;for(let O=0,K=x.length;O<K;O++){let ie=x[O];if(m(ie)){let q=A(E),Le=n.get(ie).__webglTexture;t.bindTexture(q,Le),d(q),t.unbindTexture()}}}let Ne=[],w=[];function fe(E){if(E.samples>0){if(he(E)===!1){let x=E.textures,O=E.width,K=E.height,ie=i.COLOR_BUFFER_BIT,q=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Le=n.get(E),ye=x.length>1;if(ye)for(let Xe=0;Xe<x.length;Xe++)t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Xe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Xe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer);let Be=E.texture.mipmaps;Be&&Be.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Le.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let Xe=0;Xe<x.length;Xe++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(ie|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(ie|=i.STENCIL_BUFFER_BIT)),ye){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Le.__webglColorRenderbuffer[Xe]);let le=n.get(x[Xe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,le,0)}i.blitFramebuffer(0,0,O,K,0,0,O,K,ie,i.NEAREST),l===!0&&(Ne.length=0,w.length=0,Ne.push(i.COLOR_ATTACHMENT0+Xe),E.depthBuffer&&E.resolveDepthBuffer===!1&&(Ne.push(q),w.push(q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,w)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ne))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ye)for(let Xe=0;Xe<x.length;Xe++){t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Xe,i.RENDERBUFFER,Le.__webglColorRenderbuffer[Xe]);let le=n.get(x[Xe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Xe,i.TEXTURE_2D,le,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){let x=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function oe(E){return Math.min(r.maxSamples,E.samples)}function he(E){let x=n.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function te(E){let x=o.render.frame;h.get(E)!==x&&(h.set(E,x),E.update())}function Fe(E,x){let O=E.colorSpace,K=E.format,ie=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||O!==gr&&O!==Ei&&(dt.getTransfer(O)===xt?(K!==Fn||ie!==Wn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),x}function ae(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=V,this.setTexture2D=Z,this.setTexture2DArray=J,this.setTexture3D=ee,this.setTextureCube=X,this.rebindTextures=De,this.setupRenderTarget=qe,this.updateRenderTargetMipmap=Ie,this.updateMultisampleRenderTarget=fe,this.setupDepthRenderbuffer=Ve,this.setupFrameBufferTexture=de,this.useMultisampledRTT=he}function $v(i,e){function t(n,r=Ei){let s,o=dt.getTransfer(r);if(n===Wn)return i.UNSIGNED_BYTE;if(n===Sl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ml)return i.UNSIGNED_SHORT_5_5_5_1;if(n===mh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===fh)return i.BYTE;if(n===ph)return i.SHORT;if(n===us)return i.UNSIGNED_SHORT;if(n===bl)return i.INT;if(n===tr)return i.UNSIGNED_INT;if(n===oi)return i.FLOAT;if(n===ds)return i.HALF_FLOAT;if(n===gh)return i.ALPHA;if(n===_h)return i.RGB;if(n===Fn)return i.RGBA;if(n===es)return i.DEPTH_COMPONENT;if(n===ps)return i.DEPTH_STENCIL;if(n===xh)return i.RED;if(n===wl)return i.RED_INTEGER;if(n===vh)return i.RG;if(n===El)return i.RG_INTEGER;if(n===Tl)return i.RGBA_INTEGER;if(n===po||n===mo||n===go||n===_o)if(o===xt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===po)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===mo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===go)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===_o)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===po)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===mo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===go)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===_o)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Cl||n===Al||n===Rl||n===Il)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Cl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Al)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Rl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Il)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Pl||n===Dl||n===Ll)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Pl||n===Dl)return o===xt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ll)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Nl||n===Fl||n===Ul||n===Bl||n===Ol||n===kl||n===zl||n===Vl||n===Hl||n===Gl||n===Wl||n===Xl||n===ql||n===Yl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Nl)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Fl)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ul)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Bl)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ol)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===kl)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===zl)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Vl)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Hl)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Gl)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Wl)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Xl)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ql)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Yl)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===xo||n===jl||n===$l)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===xo)return o===xt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===jl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===$l)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===yh||n===Kl||n===Jl||n===Zl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===xo)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Kl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Jl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Zl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===fs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Kv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Jv=`
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

}`,Vh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let r=new nr,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new bn({vertexShader:Kv,fragmentShader:Jv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Mt(new xr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Hh=class extends xi{constructor(e,t){super();let n=this,r=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,p=null,g=null,v=new Vh,m=t.getContextAttributes(),d=null,A=null,C=[],y=[],L=new ge,P=null,D=new zt;D.viewport=new Rt;let F=new zt;F.viewport=new Rt;let S=[D,F],_=new ll,R=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let se=C[Y];return se===void 0&&(se=new ss,C[Y]=se),se.getTargetRaySpace()},this.getControllerGrip=function(Y){let se=C[Y];return se===void 0&&(se=new ss,C[Y]=se),se.getGripSpace()},this.getHand=function(Y){let se=C[Y];return se===void 0&&(se=new ss,C[Y]=se),se.getHandSpace()};function H(Y){let se=y.indexOf(Y.inputSource);if(se===-1)return;let de=C[se];de!==void 0&&(de.update(Y.inputSource,Y.frame,c||o),de.dispatchEvent({type:Y.type,data:Y.inputSource}))}function Q(){r.removeEventListener("select",H),r.removeEventListener("selectstart",H),r.removeEventListener("selectend",H),r.removeEventListener("squeeze",H),r.removeEventListener("squeezestart",H),r.removeEventListener("squeezeend",H),r.removeEventListener("end",Q),r.removeEventListener("inputsourceschange",Z);for(let Y=0;Y<C.length;Y++){let se=y[Y];se!==null&&(y[Y]=null,C[Y].disconnect(se))}R=null,V=null,v.reset(),e.setRenderTarget(d),p=null,f=null,u=null,r=null,A=null,Ye.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=function(Y){return nt(this,null,function*(){if(r=Y,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",H),r.addEventListener("selectstart",H),r.addEventListener("selectend",H),r.addEventListener("squeeze",H),r.addEventListener("squeezestart",H),r.addEventListener("squeezeend",H),r.addEventListener("end",Q),r.addEventListener("inputsourceschange",Z),m.xrCompatible!==!0&&(yield t.makeXRCompatible()),P=e.getPixelRatio(),e.getSize(L),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let de=null,ue=null,Pe=null;m.depth&&(Pe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=m.stencil?ps:es,ue=m.stencil?fs:tr);let Ve={colorFormat:t.RGBA8,depthFormat:Pe,scaleFactor:s};u=new XRWebGLBinding(r,t),f=u.createProjectionLayer(Ve),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),A=new ii(f.textureWidth,f.textureHeight,{format:Fn,type:Wn,depthTexture:new Ys(f.textureWidth,f.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let de={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,de),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),A=new ii(p.framebufferWidth,p.framebufferHeight,{format:Fn,type:Wn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=yield r.requestReferenceSpace(a),Ye.setContext(r),Ye.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}})},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function Z(Y){for(let se=0;se<Y.removed.length;se++){let de=Y.removed[se],ue=y.indexOf(de);ue>=0&&(y[ue]=null,C[ue].disconnect(de))}for(let se=0;se<Y.added.length;se++){let de=Y.added[se],ue=y.indexOf(de);if(ue===-1){for(let Ve=0;Ve<C.length;Ve++)if(Ve>=y.length){y.push(de),ue=Ve;break}else if(y[Ve]===null){y[Ve]=de,ue=Ve;break}if(ue===-1)break}let Pe=C[ue];Pe&&Pe.connect(de)}}let J=new k,ee=new k;function X(Y,se,de){J.setFromMatrixPosition(se.matrixWorld),ee.setFromMatrixPosition(de.matrixWorld);let ue=J.distanceTo(ee),Pe=se.projectionMatrix.elements,Ve=de.projectionMatrix.elements,De=Pe[14]/(Pe[10]-1),qe=Pe[14]/(Pe[10]+1),Ie=(Pe[9]+1)/Pe[5],Ne=(Pe[9]-1)/Pe[5],w=(Pe[8]-1)/Pe[0],fe=(Ve[8]+1)/Ve[0],oe=De*w,he=De*fe,te=ue/(-w+fe),Fe=te*-w;if(se.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Fe),Y.translateZ(te),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Pe[10]===-1)Y.projectionMatrix.copy(se.projectionMatrix),Y.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{let ae=De+te,E=qe+te,x=oe-Fe,O=he+(ue-Fe),K=Ie*qe/E*ae,ie=Ne*qe/E*ae;Y.projectionMatrix.makePerspective(x,O,K,ie,ae,E),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function me(Y,se){se===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(se.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let se=Y.near,de=Y.far;v.texture!==null&&(v.depthNear>0&&(se=v.depthNear),v.depthFar>0&&(de=v.depthFar)),_.near=F.near=D.near=se,_.far=F.far=D.far=de,(R!==_.near||V!==_.far)&&(r.updateRenderState({depthNear:_.near,depthFar:_.far}),R=_.near,V=_.far),D.layers.mask=Y.layers.mask|2,F.layers.mask=Y.layers.mask|4,_.layers.mask=D.layers.mask|F.layers.mask;let ue=Y.parent,Pe=_.cameras;me(_,ue);for(let Ve=0;Ve<Pe.length;Ve++)me(Pe[Ve],ue);Pe.length===2?X(_,D,F):_.projectionMatrix.copy(D.projectionMatrix),ve(Y,_,ue)};function ve(Y,se,de){de===null?Y.matrix.copy(se.matrixWorld):(Y.matrix.copy(de.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(se.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(se.projectionMatrix),Y.projectionMatrixInverse.copy(se.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=ks*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(Y){l=Y,f!==null&&(f.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(_)};let be=null;function Ue(Y,se){if(h=se.getViewerPose(c||o),g=se,h!==null){let de=h.views;p!==null&&(e.setRenderTargetFramebuffer(A,p.framebuffer),e.setRenderTarget(A));let ue=!1;de.length!==_.cameras.length&&(_.cameras.length=0,ue=!0);for(let De=0;De<de.length;De++){let qe=de[De],Ie=null;if(p!==null)Ie=p.getViewport(qe);else{let w=u.getViewSubImage(f,qe);Ie=w.viewport,De===0&&(e.setRenderTargetTextures(A,w.colorTexture,w.depthStencilTexture),e.setRenderTarget(A))}let Ne=S[De];Ne===void 0&&(Ne=new zt,Ne.layers.enable(De),Ne.viewport=new Rt,S[De]=Ne),Ne.matrix.fromArray(qe.transform.matrix),Ne.matrix.decompose(Ne.position,Ne.quaternion,Ne.scale),Ne.projectionMatrix.fromArray(qe.projectionMatrix),Ne.projectionMatrixInverse.copy(Ne.projectionMatrix).invert(),Ne.viewport.set(Ie.x,Ie.y,Ie.width,Ie.height),De===0&&(_.matrix.copy(Ne.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),ue===!0&&_.cameras.push(Ne)}let Pe=r.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&u){let De=u.getDepthInformation(de[0]);De&&De.isValid&&De.texture&&v.init(e,De,r.renderState)}}for(let de=0;de<C.length;de++){let ue=y[de],Pe=C[de];ue!==null&&Pe!==void 0&&Pe.update(ue,se,c||o)}be&&be(Y,se),se.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:se}),g=null}let Ye=new Sf;Ye.setAnimationLoop(Ue),this.setAnimationLoop=function(Y){be=Y},this.dispose=function(){}}},wr=new yi,Zv=new Tt;function Qv(i,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,wh(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,A,C,y){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),u(m,d)):d.isMeshPhongMaterial?(s(m,d),h(m,d)):d.isMeshStandardMaterial?(s(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,y)):d.isMeshMatcapMaterial?(s(m,d),g(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),v(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,A,C):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Ht&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Ht&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let A=e.get(d),C=A.envMap,y=A.envMapRotation;C&&(m.envMap.value=C,wr.copy(y),wr.x*=-1,wr.y*=-1,wr.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(wr.y*=-1,wr.z*=-1),m.envMapRotation.value.setFromMatrix4(Zv.makeRotationFromEuler(wr)),m.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,A,C){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*A,m.scale.value=C*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,A){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ht&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function v(m,d){let A=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function ey(i,e,t,n){let r={},s={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,C){let y=C.program;n.uniformBlockBinding(A,y)}function c(A,C){let y=r[A.id];y===void 0&&(g(A),y=h(A),r[A.id]=y,A.addEventListener("dispose",m));let L=C.program;n.updateUBOMapping(A,L);let P=e.render.frame;s[A.id]!==P&&(f(A),s[A.id]=P)}function h(A){let C=u();A.__bindingPointIndex=C;let y=i.createBuffer(),L=A.__size,P=A.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,L,P),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,C,y),y}function u(){for(let A=0;A<a;A++)if(o.indexOf(A)===-1)return o.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(A){let C=r[A.id],y=A.uniforms,L=A.__cache;i.bindBuffer(i.UNIFORM_BUFFER,C);for(let P=0,D=y.length;P<D;P++){let F=Array.isArray(y[P])?y[P]:[y[P]];for(let S=0,_=F.length;S<_;S++){let R=F[S];if(p(R,P,S,L)===!0){let V=R.__offset,H=Array.isArray(R.value)?R.value:[R.value],Q=0;for(let Z=0;Z<H.length;Z++){let J=H[Z],ee=v(J);typeof J=="number"||typeof J=="boolean"?(R.__data[0]=J,i.bufferSubData(i.UNIFORM_BUFFER,V+Q,R.__data)):J.isMatrix3?(R.__data[0]=J.elements[0],R.__data[1]=J.elements[1],R.__data[2]=J.elements[2],R.__data[3]=0,R.__data[4]=J.elements[3],R.__data[5]=J.elements[4],R.__data[6]=J.elements[5],R.__data[7]=0,R.__data[8]=J.elements[6],R.__data[9]=J.elements[7],R.__data[10]=J.elements[8],R.__data[11]=0):(J.toArray(R.__data,Q),Q+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,V,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(A,C,y,L){let P=A.value,D=C+"_"+y;if(L[D]===void 0)return typeof P=="number"||typeof P=="boolean"?L[D]=P:L[D]=P.clone(),!0;{let F=L[D];if(typeof P=="number"||typeof P=="boolean"){if(F!==P)return L[D]=P,!0}else if(F.equals(P)===!1)return F.copy(P),!0}return!1}function g(A){let C=A.uniforms,y=0,L=16;for(let D=0,F=C.length;D<F;D++){let S=Array.isArray(C[D])?C[D]:[C[D]];for(let _=0,R=S.length;_<R;_++){let V=S[_],H=Array.isArray(V.value)?V.value:[V.value];for(let Q=0,Z=H.length;Q<Z;Q++){let J=H[Q],ee=v(J),X=y%L,me=X%ee.boundary,ve=X+me;y+=me,ve!==0&&L-ve<ee.storage&&(y+=L-ve),V.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=y,y+=ee.storage}}}let P=y%L;return P>0&&(y+=L-P),A.__size=y,A.__cache={},this}function v(A){let C={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(C.boundary=4,C.storage=4):A.isVector2?(C.boundary=8,C.storage=8):A.isVector3||A.isColor?(C.boundary=16,C.storage=12):A.isVector4?(C.boundary=16,C.storage=16):A.isMatrix3?(C.boundary=48,C.storage=48):A.isMatrix4?(C.boundary=64,C.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),C}function m(A){let C=A.target;C.removeEventListener("dispose",m);let y=o.indexOf(C.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(r[C.id]),delete r[C.id],delete s[C.id]}function d(){for(let A in r)i.deleteBuffer(r[A]);o=[],r={},s={}}return{bind:l,update:c,dispose:d}}var Cr=class{constructor(e={}){let{canvas:t=Hd(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let g=new Uint32Array(4),v=new Int32Array(4),m=null,d=null,A=[],C=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=wi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let y=this,L=!1;this._outputColorSpace=vn;let P=0,D=0,F=null,S=-1,_=null,R=new Rt,V=new Rt,H=null,Q=new Qe(0),Z=0,J=t.width,ee=t.height,X=1,me=null,ve=null,be=new Rt(0,0,J,ee),Ue=new Rt(0,0,J,ee),Ye=!1,Y=new os,se=!1,de=!1,ue=new Tt,Pe=new Tt,Ve=new k,De=new Rt,qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ie=!1;function Ne(){return F===null?X:1}let w=n;function fe(b,U){return t.getContext(b,U)}try{let b={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${cl}`),t.addEventListener("webglcontextlost",ne,!1),t.addEventListener("webglcontextrestored",Ee,!1),t.addEventListener("webglcontextcreationerror",we,!1),w===null){let U="webgl2";if(w=fe(U,b),w===null)throw fe(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let oe,he,te,Fe,ae,E,x,O,K,ie,q,Le,ye,Be,Xe,le,Te,He,Ke,Ae,ht,it,bt,N;function Me(){oe=new xx(w),oe.init(),it=new $v(w,oe),he=new ux(w,oe,e,it),te=new Yv(w,oe),he.reverseDepthBuffer&&f&&te.buffers.depth.setReversed(!0),Fe=new bx(w),ae=new Nv,E=new jv(w,oe,te,ae,he,it,Fe),x=new fx(y),O=new _x(y),K=new Cg(w),bt=new cx(w,K),ie=new vx(w,K,Fe,bt),q=new Mx(w,ie,K,Fe),Ke=new Sx(w,he,E),le=new dx(ae),Le=new Lv(y,x,O,oe,he,bt,le),ye=new Qv(y,ae),Be=new Uv,Xe=new Hv(oe),He=new lx(y,x,O,te,q,p,l),Te=new Xv(y,q,he),N=new ey(w,Fe,he,te),Ae=new hx(w,oe,Fe),ht=new yx(w,oe,Fe),Fe.programs=Le.programs,y.capabilities=he,y.extensions=oe,y.properties=ae,y.renderLists=Be,y.shadowMap=Te,y.state=te,y.info=Fe}Me();let $=new Hh(y,w);this.xr=$,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){let b=oe.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=oe.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(b){b!==void 0&&(X=b,this.setSize(J,ee,!1))},this.getSize=function(b){return b.set(J,ee)},this.setSize=function(b,U,G=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=b,ee=U,t.width=Math.floor(b*X),t.height=Math.floor(U*X),G===!0&&(t.style.width=b+"px",t.style.height=U+"px"),this.setViewport(0,0,b,U)},this.getDrawingBufferSize=function(b){return b.set(J*X,ee*X).floor()},this.setDrawingBufferSize=function(b,U,G){J=b,ee=U,X=G,t.width=Math.floor(b*G),t.height=Math.floor(U*G),this.setViewport(0,0,b,U)},this.getCurrentViewport=function(b){return b.copy(R)},this.getViewport=function(b){return b.copy(be)},this.setViewport=function(b,U,G,W){b.isVector4?be.set(b.x,b.y,b.z,b.w):be.set(b,U,G,W),te.viewport(R.copy(be).multiplyScalar(X).round())},this.getScissor=function(b){return b.copy(Ue)},this.setScissor=function(b,U,G,W){b.isVector4?Ue.set(b.x,b.y,b.z,b.w):Ue.set(b,U,G,W),te.scissor(V.copy(Ue).multiplyScalar(X).round())},this.getScissorTest=function(){return Ye},this.setScissorTest=function(b){te.setScissorTest(Ye=b)},this.setOpaqueSort=function(b){me=b},this.setTransparentSort=function(b){ve=b},this.getClearColor=function(b){return b.copy(He.getClearColor())},this.setClearColor=function(){He.setClearColor(...arguments)},this.getClearAlpha=function(){return He.getClearAlpha()},this.setClearAlpha=function(){He.setClearAlpha(...arguments)},this.clear=function(b=!0,U=!0,G=!0){let W=0;if(b){let B=!1;if(F!==null){let ce=F.texture.format;B=ce===Tl||ce===El||ce===wl}if(B){let ce=F.texture.type,Se=ce===Wn||ce===tr||ce===us||ce===fs||ce===Sl||ce===Ml,Ce=He.getClearColor(),Re=He.getClearAlpha(),Je=Ce.r,je=Ce.g,Oe=Ce.b;Se?(g[0]=Je,g[1]=je,g[2]=Oe,g[3]=Re,w.clearBufferuiv(w.COLOR,0,g)):(v[0]=Je,v[1]=je,v[2]=Oe,v[3]=Re,w.clearBufferiv(w.COLOR,0,v))}else W|=w.COLOR_BUFFER_BIT}U&&(W|=w.DEPTH_BUFFER_BIT),G&&(W|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ne,!1),t.removeEventListener("webglcontextrestored",Ee,!1),t.removeEventListener("webglcontextcreationerror",we,!1),He.dispose(),Be.dispose(),Xe.dispose(),ae.dispose(),x.dispose(),O.dispose(),q.dispose(),bt.dispose(),N.dispose(),Le.dispose(),$.dispose(),$.removeEventListener("sessionstart",Wh),$.removeEventListener("sessionend",Xh),ir.stop()};function ne(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function Ee(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;let b=Fe.autoReset,U=Te.enabled,G=Te.autoUpdate,W=Te.needsUpdate,B=Te.type;Me(),Fe.autoReset=b,Te.enabled=U,Te.autoUpdate=G,Te.needsUpdate=W,Te.type=B}function we(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function tt(b){let U=b.target;U.removeEventListener("dispose",tt),It(U)}function It(b){Zt(b),ae.remove(b)}function Zt(b){let U=ae.get(b).programs;U!==void 0&&(U.forEach(function(G){Le.releaseProgram(G)}),b.isShaderMaterial&&Le.releaseShaderCache(b))}this.renderBufferDirect=function(b,U,G,W,B,ce){U===null&&(U=qe);let Se=B.isMesh&&B.matrixWorld.determinant()<0,Ce=If(b,U,G,W,B);te.setMaterial(W,Se);let Re=G.index,Je=1;if(W.wireframe===!0){if(Re=ie.getWireframeAttribute(G),Re===void 0)return;Je=2}let je=G.drawRange,Oe=G.attributes.position,ut=je.start*Je,mt=(je.start+je.count)*Je;ce!==null&&(ut=Math.max(ut,ce.start*Je),mt=Math.min(mt,(ce.start+ce.count)*Je)),Re!==null?(ut=Math.max(ut,0),mt=Math.min(mt,Re.count)):Oe!=null&&(ut=Math.max(ut,0),mt=Math.min(mt,Oe.count));let Bt=mt-ut;if(Bt<0||Bt===1/0)return;bt.setup(B,W,Ce,G,Re);let Pt,ft=Ae;if(Re!==null&&(Pt=K.get(Re),ft=ht,ft.setIndex(Pt)),B.isMesh)W.wireframe===!0?(te.setLineWidth(W.wireframeLinewidth*Ne()),ft.setMode(w.LINES)):ft.setMode(w.TRIANGLES);else if(B.isLine){let ze=W.linewidth;ze===void 0&&(ze=1),te.setLineWidth(ze*Ne()),B.isLineSegments?ft.setMode(w.LINES):B.isLineLoop?ft.setMode(w.LINE_LOOP):ft.setMode(w.LINE_STRIP)}else B.isPoints?ft.setMode(w.POINTS):B.isSprite&&ft.setMode(w.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)vo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ft.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(oe.get("WEBGL_multi_draw"))ft.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{let ze=B._multiDrawStarts,Kt=B._multiDrawCounts,gt=B._multiDrawCount,Bn=Re?K.get(Re).bytesPerElement:1,Ar=ae.get(W).currentProgram.getUniforms();for(let dn=0;dn<gt;dn++)Ar.setValue(w,"_gl_DrawID",dn),ft.render(ze[dn]/Bn,Kt[dn])}else if(B.isInstancedMesh)ft.renderInstances(ut,Bt,B.count);else if(G.isInstancedBufferGeometry){let ze=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Kt=Math.min(G.instanceCount,ze);ft.renderInstances(ut,Bt,Kt)}else ft.render(ut,Bt)};function _t(b,U,G){b.transparent===!0&&b.side===Jt&&b.forceSinglePass===!1?(b.side=Ht,b.needsUpdate=!0,So(b,U,G),b.side=_i,b.needsUpdate=!0,So(b,U,G),b.side=Jt):So(b,U,G)}this.compile=function(b,U,G=null){G===null&&(G=b),d=Xe.get(G),d.init(U),C.push(d),G.traverseVisible(function(B){B.isLight&&B.layers.test(U.layers)&&(d.pushLight(B),B.castShadow&&d.pushShadow(B))}),b!==G&&b.traverseVisible(function(B){B.isLight&&B.layers.test(U.layers)&&(d.pushLight(B),B.castShadow&&d.pushShadow(B))}),d.setupLights();let W=new Set;return b.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;let ce=B.material;if(ce)if(Array.isArray(ce))for(let Se=0;Se<ce.length;Se++){let Ce=ce[Se];_t(Ce,G,B),W.add(Ce)}else _t(ce,G,B),W.add(ce)}),d=C.pop(),W},this.compileAsync=function(b,U,G=null){let W=this.compile(b,U,G);return new Promise(B=>{function ce(){if(W.forEach(function(Se){ae.get(Se).currentProgram.isReady()&&W.delete(Se)}),W.size===0){B(b);return}setTimeout(ce,10)}oe.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let Un=null;function li(b){Un&&Un(b)}function Wh(){ir.stop()}function Xh(){ir.start()}let ir=new Sf;ir.setAnimationLoop(li),typeof self<"u"&&ir.setContext(self),this.setAnimationLoop=function(b){Un=b,$.setAnimationLoop(b),b===null?ir.stop():ir.start()},$.addEventListener("sessionstart",Wh),$.addEventListener("sessionend",Xh),this.render=function(b,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(U),U=$.getCamera()),b.isScene===!0&&b.onBeforeRender(y,b,U,F),d=Xe.get(b,C.length),d.init(U),C.push(d),Pe.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Y.setFromProjectionMatrix(Pe),de=this.localClippingEnabled,se=le.init(this.clippingPlanes,de),m=Be.get(b,A.length),m.init(),A.push(m),$.enabled===!0&&$.isPresenting===!0){let ce=y.xr.getDepthSensingMesh();ce!==null&&cc(ce,U,-1/0,y.sortObjects)}cc(b,U,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(me,ve),Ie=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,Ie&&He.addToRenderList(m,b),this.info.render.frame++,se===!0&&le.beginShadows();let G=d.state.shadowsArray;Te.render(G,b,U),se===!0&&le.endShadows(),this.info.autoReset===!0&&this.info.reset();let W=m.opaque,B=m.transmissive;if(d.setupLights(),U.isArrayCamera){let ce=U.cameras;if(B.length>0)for(let Se=0,Ce=ce.length;Se<Ce;Se++){let Re=ce[Se];Yh(W,B,b,Re)}Ie&&He.render(b);for(let Se=0,Ce=ce.length;Se<Ce;Se++){let Re=ce[Se];qh(m,b,Re,Re.viewport)}}else B.length>0&&Yh(W,B,b,U),Ie&&He.render(b),qh(m,b,U);F!==null&&D===0&&(E.updateMultisampleRenderTarget(F),E.updateRenderTargetMipmap(F)),b.isScene===!0&&b.onAfterRender(y,b,U),bt.resetDefaultState(),S=-1,_=null,C.pop(),C.length>0?(d=C[C.length-1],se===!0&&le.setGlobalState(y.clippingPlanes,d.state.camera)):d=null,A.pop(),A.length>0?m=A[A.length-1]:m=null};function cc(b,U,G,W){if(b.visible===!1)return;if(b.layers.test(U.layers)){if(b.isGroup)G=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(U);else if(b.isLight)d.pushLight(b),b.castShadow&&d.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Y.intersectsSprite(b)){W&&De.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Pe);let Se=q.update(b),Ce=b.material;Ce.visible&&m.push(b,Se,Ce,G,De.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Y.intersectsObject(b))){let Se=q.update(b),Ce=b.material;if(W&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),De.copy(b.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),De.copy(Se.boundingSphere.center)),De.applyMatrix4(b.matrixWorld).applyMatrix4(Pe)),Array.isArray(Ce)){let Re=Se.groups;for(let Je=0,je=Re.length;Je<je;Je++){let Oe=Re[Je],ut=Ce[Oe.materialIndex];ut&&ut.visible&&m.push(b,Se,ut,G,De.z,Oe)}}else Ce.visible&&m.push(b,Se,Ce,G,De.z,null)}}let ce=b.children;for(let Se=0,Ce=ce.length;Se<Ce;Se++)cc(ce[Se],U,G,W)}function qh(b,U,G,W){let B=b.opaque,ce=b.transmissive,Se=b.transparent;d.setupLightsView(G),se===!0&&le.setGlobalState(y.clippingPlanes,G),W&&te.viewport(R.copy(W)),B.length>0&&bo(B,U,G),ce.length>0&&bo(ce,U,G),Se.length>0&&bo(Se,U,G),te.buffers.depth.setTest(!0),te.buffers.depth.setMask(!0),te.buffers.color.setMask(!0),te.setPolygonOffset(!1)}function Yh(b,U,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[W.id]===void 0&&(d.state.transmissionRenderTarget[W.id]=new ii(1,1,{generateMipmaps:!0,type:oe.has("EXT_color_buffer_half_float")||oe.has("EXT_color_buffer_float")?ds:Wn,minFilter:er,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:dt.workingColorSpace}));let ce=d.state.transmissionRenderTarget[W.id],Se=W.viewport||R;ce.setSize(Se.z*y.transmissionResolutionScale,Se.w*y.transmissionResolutionScale);let Ce=y.getRenderTarget();y.setRenderTarget(ce),y.getClearColor(Q),Z=y.getClearAlpha(),Z<1&&y.setClearColor(16777215,.5),y.clear(),Ie&&He.render(G);let Re=y.toneMapping;y.toneMapping=wi;let Je=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),d.setupLightsView(W),se===!0&&le.setGlobalState(y.clippingPlanes,W),bo(b,G,W),E.updateMultisampleRenderTarget(ce),E.updateRenderTargetMipmap(ce),oe.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let Oe=0,ut=U.length;Oe<ut;Oe++){let mt=U[Oe],Bt=mt.object,Pt=mt.geometry,ft=mt.material,ze=mt.group;if(ft.side===Jt&&Bt.layers.test(W.layers)){let Kt=ft.side;ft.side=Ht,ft.needsUpdate=!0,jh(Bt,G,W,Pt,ft,ze),ft.side=Kt,ft.needsUpdate=!0,je=!0}}je===!0&&(E.updateMultisampleRenderTarget(ce),E.updateRenderTargetMipmap(ce))}y.setRenderTarget(Ce),y.setClearColor(Q,Z),Je!==void 0&&(W.viewport=Je),y.toneMapping=Re}function bo(b,U,G){let W=U.isScene===!0?U.overrideMaterial:null;for(let B=0,ce=b.length;B<ce;B++){let Se=b[B],Ce=Se.object,Re=Se.geometry,Je=Se.group,je=Se.material;je.allowOverride===!0&&W!==null&&(je=W),Ce.layers.test(G.layers)&&jh(Ce,U,G,Re,je,Je)}}function jh(b,U,G,W,B,ce){b.onBeforeRender(y,U,G,W,B,ce),b.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),B.onBeforeRender(y,U,G,W,b,ce),B.transparent===!0&&B.side===Jt&&B.forceSinglePass===!1?(B.side=Ht,B.needsUpdate=!0,y.renderBufferDirect(G,U,W,B,b,ce),B.side=_i,B.needsUpdate=!0,y.renderBufferDirect(G,U,W,B,b,ce),B.side=Jt):y.renderBufferDirect(G,U,W,B,b,ce),b.onAfterRender(y,U,G,W,B,ce)}function So(b,U,G){U.isScene!==!0&&(U=qe);let W=ae.get(b),B=d.state.lights,ce=d.state.shadowsArray,Se=B.state.version,Ce=Le.getParameters(b,B.state,ce,U,G),Re=Le.getProgramCacheKey(Ce),Je=W.programs;W.environment=b.isMeshStandardMaterial?U.environment:null,W.fog=U.fog,W.envMap=(b.isMeshStandardMaterial?O:x).get(b.envMap||W.environment),W.envMapRotation=W.environment!==null&&b.envMap===null?U.environmentRotation:b.envMapRotation,Je===void 0&&(b.addEventListener("dispose",tt),Je=new Map,W.programs=Je);let je=Je.get(Re);if(je!==void 0){if(W.currentProgram===je&&W.lightsStateVersion===Se)return Kh(b,Ce),je}else Ce.uniforms=Le.getUniforms(b),b.onBeforeCompile(Ce,y),je=Le.acquireProgram(Ce,Re),Je.set(Re,je),W.uniforms=Ce.uniforms;let Oe=W.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Oe.clippingPlanes=le.uniform),Kh(b,Ce),W.needsLights=Df(b),W.lightsStateVersion=Se,W.needsLights&&(Oe.ambientLightColor.value=B.state.ambient,Oe.lightProbe.value=B.state.probe,Oe.directionalLights.value=B.state.directional,Oe.directionalLightShadows.value=B.state.directionalShadow,Oe.spotLights.value=B.state.spot,Oe.spotLightShadows.value=B.state.spotShadow,Oe.rectAreaLights.value=B.state.rectArea,Oe.ltc_1.value=B.state.rectAreaLTC1,Oe.ltc_2.value=B.state.rectAreaLTC2,Oe.pointLights.value=B.state.point,Oe.pointLightShadows.value=B.state.pointShadow,Oe.hemisphereLights.value=B.state.hemi,Oe.directionalShadowMap.value=B.state.directionalShadowMap,Oe.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Oe.spotShadowMap.value=B.state.spotShadowMap,Oe.spotLightMatrix.value=B.state.spotLightMatrix,Oe.spotLightMap.value=B.state.spotLightMap,Oe.pointShadowMap.value=B.state.pointShadowMap,Oe.pointShadowMatrix.value=B.state.pointShadowMatrix),W.currentProgram=je,W.uniformsList=null,je}function $h(b){if(b.uniformsList===null){let U=b.currentProgram.getUniforms();b.uniformsList=xs.seqWithValue(U.seq,b.uniforms)}return b.uniformsList}function Kh(b,U){let G=ae.get(b);G.outputColorSpace=U.outputColorSpace,G.batching=U.batching,G.batchingColor=U.batchingColor,G.instancing=U.instancing,G.instancingColor=U.instancingColor,G.instancingMorph=U.instancingMorph,G.skinning=U.skinning,G.morphTargets=U.morphTargets,G.morphNormals=U.morphNormals,G.morphColors=U.morphColors,G.morphTargetsCount=U.morphTargetsCount,G.numClippingPlanes=U.numClippingPlanes,G.numIntersection=U.numClipIntersection,G.vertexAlphas=U.vertexAlphas,G.vertexTangents=U.vertexTangents,G.toneMapping=U.toneMapping}function If(b,U,G,W,B){U.isScene!==!0&&(U=qe),E.resetTextureUnits();let ce=U.fog,Se=W.isMeshStandardMaterial?U.environment:null,Ce=F===null?y.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:gr,Re=(W.isMeshStandardMaterial?O:x).get(W.envMap||Se),Je=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,je=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Oe=!!G.morphAttributes.position,ut=!!G.morphAttributes.normal,mt=!!G.morphAttributes.color,Bt=wi;W.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(Bt=y.toneMapping);let Pt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ft=Pt!==void 0?Pt.length:0,ze=ae.get(W),Kt=d.state.lights;if(se===!0&&(de===!0||b!==_)){let ln=b===_&&W.id===S;le.setState(W,b,ln)}let gt=!1;W.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==Kt.state.version||ze.outputColorSpace!==Ce||B.isBatchedMesh&&ze.batching===!1||!B.isBatchedMesh&&ze.batching===!0||B.isBatchedMesh&&ze.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&ze.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&ze.instancing===!1||!B.isInstancedMesh&&ze.instancing===!0||B.isSkinnedMesh&&ze.skinning===!1||!B.isSkinnedMesh&&ze.skinning===!0||B.isInstancedMesh&&ze.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&ze.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&ze.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&ze.instancingMorph===!1&&B.morphTexture!==null||ze.envMap!==Re||W.fog===!0&&ze.fog!==ce||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==le.numPlanes||ze.numIntersection!==le.numIntersection)||ze.vertexAlphas!==Je||ze.vertexTangents!==je||ze.morphTargets!==Oe||ze.morphNormals!==ut||ze.morphColors!==mt||ze.toneMapping!==Bt||ze.morphTargetsCount!==ft)&&(gt=!0):(gt=!0,ze.__version=W.version);let Bn=ze.currentProgram;gt===!0&&(Bn=So(W,U,B));let Ar=!1,dn=!1,ys=!1,wt=Bn.getUniforms(),wn=ze.uniforms;if(te.useProgram(Bn.program)&&(Ar=!0,dn=!0,ys=!0),W.id!==S&&(S=W.id,dn=!0),Ar||_!==b){te.buffers.depth.getReversed()?(ue.copy(b.projectionMatrix),Wd(ue),Xd(ue),wt.setValue(w,"projectionMatrix",ue)):wt.setValue(w,"projectionMatrix",b.projectionMatrix),wt.setValue(w,"viewMatrix",b.matrixWorldInverse);let cn=wt.map.cameraPosition;cn!==void 0&&cn.setValue(w,Ve.setFromMatrixPosition(b.matrixWorld)),he.logarithmicDepthBuffer&&wt.setValue(w,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&wt.setValue(w,"isOrthographic",b.isOrthographicCamera===!0),_!==b&&(_=b,dn=!0,ys=!0)}if(B.isSkinnedMesh){wt.setOptional(w,B,"bindMatrix"),wt.setOptional(w,B,"bindMatrixInverse");let ln=B.skeleton;ln&&(ln.boneTexture===null&&ln.computeBoneTexture(),wt.setValue(w,"boneTexture",ln.boneTexture,E))}B.isBatchedMesh&&(wt.setOptional(w,B,"batchingTexture"),wt.setValue(w,"batchingTexture",B._matricesTexture,E),wt.setOptional(w,B,"batchingIdTexture"),wt.setValue(w,"batchingIdTexture",B._indirectTexture,E),wt.setOptional(w,B,"batchingColorTexture"),B._colorsTexture!==null&&wt.setValue(w,"batchingColorTexture",B._colorsTexture,E));let En=G.morphAttributes;if((En.position!==void 0||En.normal!==void 0||En.color!==void 0)&&Ke.update(B,G,Bn),(dn||ze.receiveShadow!==B.receiveShadow)&&(ze.receiveShadow=B.receiveShadow,wt.setValue(w,"receiveShadow",B.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(wn.envMap.value=Re,wn.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&U.environment!==null&&(wn.envMapIntensity.value=U.environmentIntensity),dn&&(wt.setValue(w,"toneMappingExposure",y.toneMappingExposure),ze.needsLights&&Pf(wn,ys),ce&&W.fog===!0&&ye.refreshFogUniforms(wn,ce),ye.refreshMaterialUniforms(wn,W,X,ee,d.state.transmissionRenderTarget[b.id]),xs.upload(w,$h(ze),wn,E)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(xs.upload(w,$h(ze),wn,E),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&wt.setValue(w,"center",B.center),wt.setValue(w,"modelViewMatrix",B.modelViewMatrix),wt.setValue(w,"normalMatrix",B.normalMatrix),wt.setValue(w,"modelMatrix",B.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){let ln=W.uniformsGroups;for(let cn=0,hc=ln.length;cn<hc;cn++){let rr=ln[cn];N.update(rr,Bn),N.bind(rr,Bn)}}return Bn}function Pf(b,U){b.ambientLightColor.needsUpdate=U,b.lightProbe.needsUpdate=U,b.directionalLights.needsUpdate=U,b.directionalLightShadows.needsUpdate=U,b.pointLights.needsUpdate=U,b.pointLightShadows.needsUpdate=U,b.spotLights.needsUpdate=U,b.spotLightShadows.needsUpdate=U,b.rectAreaLights.needsUpdate=U,b.hemisphereLights.needsUpdate=U}function Df(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(b,U,G){let W=ae.get(b);W.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),ae.get(b.texture).__webglTexture=U,ae.get(b.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:G,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,U){let G=ae.get(b);G.__webglFramebuffer=U,G.__useDefaultFramebuffer=U===void 0};let Lf=w.createFramebuffer();this.setRenderTarget=function(b,U=0,G=0){F=b,P=U,D=G;let W=!0,B=null,ce=!1,Se=!1;if(b){let Re=ae.get(b);if(Re.__useDefaultFramebuffer!==void 0)te.bindFramebuffer(w.FRAMEBUFFER,null),W=!1;else if(Re.__webglFramebuffer===void 0)E.setupRenderTarget(b);else if(Re.__hasExternalTextures)E.rebindTextures(b,ae.get(b.texture).__webglTexture,ae.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let Oe=b.depthTexture;if(Re.__boundDepthTexture!==Oe){if(Oe!==null&&ae.has(Oe)&&(b.width!==Oe.image.width||b.height!==Oe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(b)}}let Je=b.texture;(Je.isData3DTexture||Je.isDataArrayTexture||Je.isCompressedArrayTexture)&&(Se=!0);let je=ae.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(je[U])?B=je[U][G]:B=je[U],ce=!0):b.samples>0&&E.useMultisampledRTT(b)===!1?B=ae.get(b).__webglMultisampledFramebuffer:Array.isArray(je)?B=je[G]:B=je,R.copy(b.viewport),V.copy(b.scissor),H=b.scissorTest}else R.copy(be).multiplyScalar(X).floor(),V.copy(Ue).multiplyScalar(X).floor(),H=Ye;if(G!==0&&(B=Lf),te.bindFramebuffer(w.FRAMEBUFFER,B)&&W&&te.drawBuffers(b,B),te.viewport(R),te.scissor(V),te.setScissorTest(H),ce){let Re=ae.get(b.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+U,Re.__webglTexture,G)}else if(Se){let Re=ae.get(b.texture),Je=U;w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,Re.__webglTexture,G,Je)}else if(b!==null&&G!==0){let Re=ae.get(b.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,Re.__webglTexture,G)}S=-1},this.readRenderTargetPixels=function(b,U,G,W,B,ce,Se){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=ae.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Se!==void 0&&(Ce=Ce[Se]),Ce){te.bindFramebuffer(w.FRAMEBUFFER,Ce);try{let Re=b.texture,Je=Re.format,je=Re.type;if(!he.textureFormatReadable(Je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!he.textureTypeReadable(je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=b.width-W&&G>=0&&G<=b.height-B&&w.readPixels(U,G,W,B,it.convert(Je),it.convert(je),ce)}finally{let Re=F!==null?ae.get(F).__webglFramebuffer:null;te.bindFramebuffer(w.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=function(b,U,G,W,B,ce,Se){return nt(this,null,function*(){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=ae.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Se!==void 0&&(Ce=Ce[Se]),Ce)if(U>=0&&U<=b.width-W&&G>=0&&G<=b.height-B){te.bindFramebuffer(w.FRAMEBUFFER,Ce);let Re=b.texture,Je=Re.format,je=Re.type;if(!he.textureFormatReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!he.textureTypeReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Oe=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,Oe),w.bufferData(w.PIXEL_PACK_BUFFER,ce.byteLength,w.STREAM_READ),w.readPixels(U,G,W,B,it.convert(Je),it.convert(je),0);let ut=F!==null?ae.get(F).__webglFramebuffer:null;te.bindFramebuffer(w.FRAMEBUFFER,ut);let mt=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),yield Gd(w,mt,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,Oe),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,ce),w.deleteBuffer(Oe),w.deleteSync(mt),ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")})},this.copyFramebufferToTexture=function(b,U=null,G=0){let W=Math.pow(2,-G),B=Math.floor(b.image.width*W),ce=Math.floor(b.image.height*W),Se=U!==null?U.x:0,Ce=U!==null?U.y:0;E.setTexture2D(b,0),w.copyTexSubImage2D(w.TEXTURE_2D,G,0,0,Se,Ce,B,ce),te.unbindTexture()};let Nf=w.createFramebuffer(),Ff=w.createFramebuffer();this.copyTextureToTexture=function(b,U,G=null,W=null,B=0,ce=null){ce===null&&(B!==0?(vo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ce=B,B=0):ce=0);let Se,Ce,Re,Je,je,Oe,ut,mt,Bt,Pt=b.isCompressedTexture?b.mipmaps[ce]:b.image;if(G!==null)Se=G.max.x-G.min.x,Ce=G.max.y-G.min.y,Re=G.isBox3?G.max.z-G.min.z:1,Je=G.min.x,je=G.min.y,Oe=G.isBox3?G.min.z:0;else{let En=Math.pow(2,-B);Se=Math.floor(Pt.width*En),Ce=Math.floor(Pt.height*En),b.isDataArrayTexture?Re=Pt.depth:b.isData3DTexture?Re=Math.floor(Pt.depth*En):Re=1,Je=0,je=0,Oe=0}W!==null?(ut=W.x,mt=W.y,Bt=W.z):(ut=0,mt=0,Bt=0);let ft=it.convert(U.format),ze=it.convert(U.type),Kt;U.isData3DTexture?(E.setTexture3D(U,0),Kt=w.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(E.setTexture2DArray(U,0),Kt=w.TEXTURE_2D_ARRAY):(E.setTexture2D(U,0),Kt=w.TEXTURE_2D),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,U.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,U.unpackAlignment);let gt=w.getParameter(w.UNPACK_ROW_LENGTH),Bn=w.getParameter(w.UNPACK_IMAGE_HEIGHT),Ar=w.getParameter(w.UNPACK_SKIP_PIXELS),dn=w.getParameter(w.UNPACK_SKIP_ROWS),ys=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,Pt.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Pt.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Je),w.pixelStorei(w.UNPACK_SKIP_ROWS,je),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Oe);let wt=b.isDataArrayTexture||b.isData3DTexture,wn=U.isDataArrayTexture||U.isData3DTexture;if(b.isDepthTexture){let En=ae.get(b),ln=ae.get(U),cn=ae.get(En.__renderTarget),hc=ae.get(ln.__renderTarget);te.bindFramebuffer(w.READ_FRAMEBUFFER,cn.__webglFramebuffer),te.bindFramebuffer(w.DRAW_FRAMEBUFFER,hc.__webglFramebuffer);for(let rr=0;rr<Re;rr++)wt&&(w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,ae.get(b).__webglTexture,B,Oe+rr),w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,ae.get(U).__webglTexture,ce,Bt+rr)),w.blitFramebuffer(Je,je,Se,Ce,ut,mt,Se,Ce,w.DEPTH_BUFFER_BIT,w.NEAREST);te.bindFramebuffer(w.READ_FRAMEBUFFER,null),te.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else if(B!==0||b.isRenderTargetTexture||ae.has(b)){let En=ae.get(b),ln=ae.get(U);te.bindFramebuffer(w.READ_FRAMEBUFFER,Nf),te.bindFramebuffer(w.DRAW_FRAMEBUFFER,Ff);for(let cn=0;cn<Re;cn++)wt?w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,En.__webglTexture,B,Oe+cn):w.framebufferTexture2D(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,En.__webglTexture,B),wn?w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,ln.__webglTexture,ce,Bt+cn):w.framebufferTexture2D(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,ln.__webglTexture,ce),B!==0?w.blitFramebuffer(Je,je,Se,Ce,ut,mt,Se,Ce,w.COLOR_BUFFER_BIT,w.NEAREST):wn?w.copyTexSubImage3D(Kt,ce,ut,mt,Bt+cn,Je,je,Se,Ce):w.copyTexSubImage2D(Kt,ce,ut,mt,Je,je,Se,Ce);te.bindFramebuffer(w.READ_FRAMEBUFFER,null),te.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else wn?b.isDataTexture||b.isData3DTexture?w.texSubImage3D(Kt,ce,ut,mt,Bt,Se,Ce,Re,ft,ze,Pt.data):U.isCompressedArrayTexture?w.compressedTexSubImage3D(Kt,ce,ut,mt,Bt,Se,Ce,Re,ft,Pt.data):w.texSubImage3D(Kt,ce,ut,mt,Bt,Se,Ce,Re,ft,ze,Pt):b.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,ce,ut,mt,Se,Ce,ft,ze,Pt.data):b.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,ce,ut,mt,Pt.width,Pt.height,ft,Pt.data):w.texSubImage2D(w.TEXTURE_2D,ce,ut,mt,Se,Ce,ft,ze,Pt);w.pixelStorei(w.UNPACK_ROW_LENGTH,gt),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Bn),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Ar),w.pixelStorei(w.UNPACK_SKIP_ROWS,dn),w.pixelStorei(w.UNPACK_SKIP_IMAGES,ys),ce===0&&U.generateMipmaps&&w.generateMipmap(Kt),te.unbindTexture()},this.copyTextureToTexture3D=function(b,U,G=null,W=null,B=0){return vo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,U,G,W,B)},this.initRenderTarget=function(b){ae.get(b).__webglFramebuffer===void 0&&E.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?E.setTextureCube(b,0):b.isData3DTexture?E.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?E.setTexture2DArray(b,0):E.setTexture2D(b,0),te.unbindTexture()},this.resetState=function(){P=0,D=0,F=null,te.reset(),bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=dt._getDrawingBufferColorSpace(e),t.unpackColorSpace=dt._getUnpackColorSpace()}};var sc=class i{constructor(e,t){this.platformId=e;this.colorService=t}scene;camera;renderer;sun;clouds=[];animationId;angle=0;selectedColor="";ngOnInit(){qt(this.platformId)&&this.colorService.selectedColor$.subscribe(e=>{if(this.selectedColor=e,this.renderer){this.renderer.dispose();let t=document.querySelector("#background-wrapper canvas");t&&t.remove(),cancelAnimationFrame(this.animationId)}this.initThreeJS(this.selectedColor),this.animate()})}ngAfterViewInit(){qt(this.platformId)&&this.animate()}ngOnDestroy(){qt(this.platformId)&&(this.renderer.dispose(),cancelAnimationFrame(this.animationId))}onWindowResize(){this.camera&&this.renderer&&(this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight))}initThreeJS(e){let t;e.startsWith("#")?t=new Qe(e):t=new Qe(2664261),this.scene=new ji,this.camera=new zt(60,window.innerWidth/window.innerHeight,.1,2e3),this.camera.position.set(0,50,500),this.renderer=new Cr({antialias:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setClearColor(8900331),document.getElementById("background-wrapper")?.appendChild(this.renderer.domElement);let n=new Qi(16777215,.6),r=new Si(16777215,.6);r.position.set(100,200,100),this.scene.add(n,r);let s=new Ki(25,64,64),o=new ri({color:16768307,emissive:16755200,emissiveIntensity:1.5,metalness:.1,roughness:.4});this.sun=new Mt(s,o),this.sun.position.set(200,150,-300),this.scene.add(this.sun);let a=new Gn({color:16777164,transparent:!0,opacity:.25,depthWrite:!1}),l=new Mt(new Ki(50,32,32),a);l.position.copy(this.sun.position),this.scene.add(l);let c=new Si(16774064,1.2);c.position.copy(this.sun.position),this.scene.add(c);let h=new Ki(1e3,64,64),u=new bn({side:Ht,vertexShader:`
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
  `,uniforms:{}}),f=new Mt(h,u);this.scene.add(f);let p=1200,g=600,v=100,m=50,d=new xr(p,g,v,m);d.rotateX(-Math.PI/2);let A=d.attributes.position;for(let L=0;L<A.count;L++){let P=A.getX(L),D=A.getZ(L),F=Math.sin(P/80)*10+Math.cos(D/60)*8+Math.sin((P+D)/100)*5+(Math.random()-.5)*2;A.setY(L,F)}A.needsUpdate=!0,d.computeVertexNormals();let C=new ri({color:this.selectedColor,roughness:.9,metalness:.1,side:Jt}),y=new Mt(d,C);y.position.y=-180,this.scene.add(y),this.createClouds()}createClouds(){let e=new ro({color:16777215,transparent:!0,opacity:.85,depthWrite:!1});for(let t=0;t<7;t++){let n=new mi,r=[18,14,12,10,8],s=[[0,0,0],[-20,5,0],[20,5,0],[-10,10,5],[10,10,-5]];r.forEach((a,l)=>{let c=.9+Math.random()*.1,h=e.clone();h.color=new Qe(c,c,c);let u=new Mt(new Ki(a,32,32),h);u.position.set(...s[l]),n.add(u)}),n.position.set(Math.random()*1200-600,Math.random()*150+150,Math.random()*-200-250);let o=.8+Math.random()*.6;n.scale.set(o,o,o),this.clouds.push(n),this.scene.add(n)}}clock=new lo;animate=()=>{this.animationId=requestAnimationFrame(this.animate);let e=this.clock.getDelta(),t=this.clock.getElapsedTime(),n=500;this.camera.position.x=n*Math.sin(t*.1),this.camera.position.z=n*Math.cos(t*.1),this.camera.lookAt(0,0,0);let r=20;this.clouds.forEach(s=>{s.position.x+=r*e,s.position.x>600&&(s.position.x=-600)}),this.renderer.render(this.scene,this.camera)};static \u0275fac=function(t){return new(t||i)(ke(hn),ke(nn))};static \u0275cmp=Dt({type:i,selectors:[["app-design"]],hostBindings:function(t,n){t&1&&st("resize",function(){return n.onWindowResize()},!1,iu)},decls:1,vars:0,consts:[["id","background-wrapper"]],template:function(t,n){t&1&&pe(0,"div",0)},styles:["#background-wrapper[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%;overflow:hidden;z-index:0}"]})};var ty=["rendererContainer"],ny=["miniWheelContainer"],iy=["colorPicker"];function ry(i,e){i&1&&(M(0,"div",5),pe(1,"div",6,1)(3,"input",7,2),T())}var oc=class i{constructor(e,t){this.platformId=e;this.colorService=t;this.platformBrowser=qt(this.platformId),this.colorPicker=null}onEscape(e){this.showBigWheel=!1}rendererContainer;miniWheelContainer;colorPickerRef;colorSelected=new nu;showBigWheel=!1;colorPicker;platformBrowser;outsideClickListener;renderer=null;scene=null;camera=null;meshes=[];raycaster=null;mouse=new ge;defaultColor="#28a745";ngAfterViewInit(){this.platformBrowser&&(this.colorSelected.emit(this.defaultColor),this.colorService.setColor(this.defaultColor),this.colorPicker=this.colorPickerRef?.nativeElement,this.initMiniWheel())}ngOnDestroy(){this.disposeThreeResources(),this.outsideClickListener&&document.removeEventListener("click",this.outsideClickListener)}openColorWheel(){this.showBigWheel=!0,setTimeout(()=>{this.colorPicker=this.colorPickerRef?.nativeElement,this.colorPicker&&!this.colorPicker.hasAttribute("data-listener-added")&&(this.colorPicker.addEventListener("input",e=>{let t=e.target.value;this.colorSelected.emit(t),this.colorService.setColor(t),this.showBigWheel=!1}),this.colorPicker.setAttribute("data-listener-added","true")),this.initBigWheel(),this.addOutsideClickListener()},0)}addOutsideClickListener(){this.outsideClickListener=e=>{let t=this.rendererContainer?.nativeElement,n=this.colorPickerRef?.nativeElement;t&&n&&!t.contains(e.target)&&!n.contains(e.target)&&(n.style.visibility="hidden")},document.addEventListener("click",this.outsideClickListener)}initMiniWheel(){let e=this.miniWheelContainer.nativeElement,t=new ji,n=new zt(50,1,.1,1e3);n.position.z=6;let r=new Cr({alpha:!0,antialias:!0});r.setSize(100,100),r.setPixelRatio(window.devicePixelRatio),e.appendChild(r.domElement);let s=new Qi(16777215,.8),o=new Si(16777215,1);o.position.set(0,0,10),t.add(s,o);let a=2,l=8,c=["#4CAF50","#8BC34A","#CDDC39","#FFEB3B","#FF9800","#A1887F","#795548","#3E2723"];for(let g=0;g<l;g++){let v=g/l*Math.PI*2,m=(g+1)/l*Math.PI*2,d=new $i;d.moveTo(0,0),d.absarc(0,0,a,v,m,!1),d.lineTo(0,0);let A=new io(d);A.computeVertexNormals();let C=new ri({color:c[g],metalness:.5,roughness:.3,emissive:new Qe(c[g]),emissiveIntensity:.2,side:Jt}),y=new Mt(A,C);t.add(y)}let h=new cs(a*.95,a,64),u=new Gn({color:16777215,transparent:!0,opacity:.05,side:Jt}),f=new Mt(h,u);t.add(f);function p(){requestAnimationFrame(p),t.rotation.z+=.05,r.render(t,n)}p()}initBigWheel(){let e=this.rendererContainer.nativeElement,t=e.clientWidth,n=e.clientHeight;this.disposeThreeResources(),this.scene=new ji,this.camera=new zt(75,t/n,.1,1e3),this.camera.position.z=6,this.renderer=new Cr({alpha:!0,antialias:!0}),this.renderer.setSize(t,n),this.renderer.setPixelRatio(window.devicePixelRatio),e.appendChild(this.renderer.domElement);let r=new Qi(16777215,.6),s=new Si(16777215,1.5);s.position.set(3,3,5),s.castShadow=!0,this.scene.add(r,s);let o=new oo(16777215,1,10,Math.PI/4,.5,2);o.position.set(0,0,5),o.castShadow=!0,this.scene.add(o);let a=2.5,l=8,c=["#4CAF50","#8BC34A","#CDDC39","#FFEB3B","#FF9800","#A1887F","#795548","#3E2723"];this.meshes=[],this.raycaster=new co;for(let g=0;g<l;g++){let v=g/l*Math.PI*2,m=(g+1)/l*Math.PI*2,d=new $i;d.moveTo(0,0),d.absarc(0,0,a,v,m,!1),d.lineTo(0,0);let A={depth:.3,bevelEnabled:!0,bevelSize:.1,bevelSegments:2},C=new no(d,A),y=new ri({color:c[g],metalness:.6,roughness:.3,emissive:new Qe(c[g]),emissiveIntensity:.3,side:Jt}),L=new Mt(C,y);L.userData={colorIndex:g},this.meshes.push(L),this.scene.add(L);let P=new Gn({color:c[g],opacity:.2,transparent:!0,side:Ht,blending:ho}),D=new Mt(C.clone(),P);D.scale.multiplyScalar(1.1),this.scene.add(D)}let h=new cs(a*.9,a,64),u=new Gn({color:16777215,opacity:.07,transparent:!0,side:Jt}),f=new Mt(h,u);this.scene.add(f),this.renderer.domElement.addEventListener("click",g=>{let v=this.renderer.domElement.getBoundingClientRect();this.mouse.x=(g.clientX-v.left)/v.width*2-1,this.mouse.y=-((g.clientY-v.top)/v.height)*2+1,this.raycaster.setFromCamera(this.mouse,this.camera);let m=this.raycaster.intersectObjects(this.meshes);if(m.length>0){let d=m[0].object;if(d.material instanceof ri){let A=`#${d.material.color.getHexString()}`;console.log("Selected color:",A),this.colorSelected.emit(A),this.colorService.setColor(A),this.showBigWheel=!1,this.playClickSound(),this.addGlowEffect(d)}}});let p=()=>{requestAnimationFrame(p),this.scene.rotation.z+=0,this.renderer.render(this.scene,this.camera)};p()}playClickSound(){new Audio("path_to_sound_effect.mp3").play()}addGlowEffect(e){let t=e.material;t.emissiveIntensity=1.5,setTimeout(()=>{t.emissiveIntensity=.3},500)}disposeThreeResources(){this.scene&&(this.scene.traverse(e=>{e instanceof Mt&&(e.geometry.dispose(),e.material.dispose())}),this.scene=null),this.renderer&&(this.renderer.dispose(),this.renderer=null),this.raycaster&&(this.raycaster=null)}static \u0275fac=function(t){return new(t||i)(ke(hn),ke(nn))};static \u0275cmp=Dt({type:i,selectors:[["app-wheel"]],viewQuery:function(t,n){if(t&1&&(To(ty,5),To(ny,5),To(iy,5)),t&2){let r;Co(r=Ao())&&(n.rendererContainer=r.first),Co(r=Ao())&&(n.miniWheelContainer=r.first),Co(r=Ao())&&(n.colorPickerRef=r.first)}},hostBindings:function(t,n){t&1&&st("keydown.escape",function(s){return n.onEscape(s)},!1,wo)},outputs:{colorSelected:"colorSelected"},decls:4,vars:1,consts:[["miniWheelContainer",""],["rendererContainer",""],["colorPicker",""],[1,"wheel-wrapper","three-wheel",3,"click"],["class","overlay",4,"ngIf"],[1,"overlay"],["id","rendererContainer",1,"big-wheel-container"],["id","colorPicker","type","color",1,"color-picker"]],template:function(t,n){if(t&1){let r=Et();M(0,"div",3),st("click",function(){return Ge(r),We(n.openColorWheel())}),pe(1,"div",null,0),T(),$e(3,ry,5,0,"div",4)}t&2&&(z(3),re("ngIf",n.showBigWheel))},dependencies:[Xt,Cn],styles:[".wheel-wrapper.three-wheel[_ngcontent-%COMP%]{position:fixed;bottom:20px;right:20px;width:90px;height:90px;z-index:9999;cursor:pointer;border-radius:50%;box-shadow:0 0 12px #0fc,0 0 24px #0fc;transition:transform .3s ease;overflow:hidden;background-color:#ffffff1a;display:flex;align-items:center;justify-content:center}.wheel-wrapper.three-wheel[_ngcontent-%COMP%]:hover{transform:scale(1.05)}.wheel-wrapper[_ngcontent-%COMP%]   canvas[_ngcontent-%COMP%]{width:100%;height:100%;display:block;border-radius:50%;object-fit:cover;pointer-events:none}.overlay[_ngcontent-%COMP%]{position:fixed;top:0;left:0;z-index:1000;width:100vw;height:100vh;background:#0009;display:flex;justify-content:center;align-items:center;backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);animation:_ngcontent-%COMP%_fadeIn .3s ease-in-out}#rendererContainer[_ngcontent-%COMP%]{width:60vw;height:60vw;max-width:500px;max-height:500px;min-width:250px;min-height:250px;border-radius:50%;overflow:hidden;position:relative;z-index:1001;background:radial-gradient(circle at center,#00ffcc26,#0006);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);box-shadow:0 0 25px #00ffcc80,0 0 45px #00ffcc4d,inset 0 0 15px #0fc3;transition:all .4s ease}#rendererContainer[_ngcontent-%COMP%]:hover{box-shadow:0 0 30px #0fc9,0 0 60px #0fc6,inset 0 0 20px #00ffcc4d;transform:scale(1.02)}.big-wheel-container[_ngcontent-%COMP%]{width:100%;height:100%;position:relative}.big-wheel-container[_ngcontent-%COMP%]   canvas[_ngcontent-%COMP%]{width:100%!important;height:100%!important;display:block;pointer-events:auto}#colorPicker[_ngcontent-%COMP%]{position:absolute;visibility:hidden;z-index:2000}@keyframes _ngcontent-%COMP%_fadeIn{0%{opacity:0;transform:scale(.95)}to{opacity:1;transform:scale(1)}}@media (max-width: 600px){#rendererContainer[_ngcontent-%COMP%]{width:60vw;height:60vw;border-radius:50%}}.wheel-wrapper.three-wheel[_ngcontent-%COMP%]{width:70px;height:70px;bottom:15px;right:15px}"]})};var sy=i=>({backgroundColor:i}),Af=i=>({borderColor:i}),oy=()=>({backgroundColor:null,color:"white"}),ay=i=>({backgroundColor:i,color:"white"});function ly(i,e){if(i&1&&(Qt(0),M(1,"a",10),pe(2,"i"),I(3),T(),en()),i&2){let t=e.$implicit;z(),re("routerLink",t.path)("ngStyle",fn(5,oy)),z(),fc(t.icon+" text-xl"),z(),Nt(" ",t.label," ")}}function cy(i,e){if(i&1&&(Qt(0),M(1,"a",11),pe(2,"i"),I(3),M(4,"span",12),I(5),T()(),en()),i&2){let t=e.$implicit,n=_e();z(),re("ngStyle",Ft(6,ay,n.selectedColor||"#ffffff0d")),z(),fc(t.icon+" text-xl"),z(),Nt(" ",t.label," "),z(),re("ngClass",t.badgeClass),z(),Nt(" ",t.badge," ")}}var ac=class i{constructor(e,t,n,r,s){this.router=e;this.platformId=t;this.colorService=n;this.layoutService=r;this.userInfo=s}isLoggedIn=!1;sidebarVisible=!0;selectedColor="";toggleHandler;coreLinks=[{label:"Home",path:"/",icon:"bi bi-house-door-fill"},{label:"Dashboard",path:"/dashboard",icon:"bi bi-house-door-fill"},{label:"Products",path:"/products",icon:"bi bi-box-seam"},{label:"Farmers",path:"/farmers",icon:"bi bi-people-fill"},{label:"Buyers",path:"/buyer",icon:"bi bi-person-badge-fill"},{label:"Orders",path:"/orders",icon:"bi bi-bag-check-fill"},{label:"Payments",path:"/payments",icon:"bi bi-cash-stack"},{label:"Reports",path:"/reports",icon:"bi bi-clipboard-data-fill"},{label:"Help Center",path:"/help-center",icon:"bi bi-info-circle-fill"},{label:"Chat with Farmer/Buyer",path:"/messages",icon:"bi bi-chat-dots-fill"},{label:"Settings",path:"/settings",icon:"bi bi-gear-fill"}];futureLinks=[{label:"Leaf Disease Detection",icon:"bi bi-eye-fill",badge:"Beta Soon",badgeClass:"bg-gray-500 text-white"},{label:"Logistics Tracking",icon:"bi bi-truck-front-fill",badge:"Planned",badgeClass:"bg-yellow-500 text-black"},{label:"AI Crop Recommendation",icon:"bi bi-cpu-fill",badge:"In Design",badgeClass:"bg-gray-500 text-white"},{label:"User Audit Logs",icon:"bi bi-clock-history",badge:"Admin",badgeClass:"bg-pink-500 text-white"}];sidebarBackground="#14532d";ngOnInit(){this.layoutService.sidebarVisible$.subscribe(e=>{this.sidebarVisible=e,this.isopenandclose=e}),this.toggleHandler=()=>this.layoutService.toggleSidebar(),window.addEventListener("toggle-sidebar",this.toggleHandler),this.colorService.selectedColor$.subscribe(e=>{this.selectedColor=e,e==="#4CAF50"||e==="#8BC34A"?this.sidebarBackground="#1B5E20":this.sidebarBackground=e}),this.router.events.pipe(Ir(e=>e instanceof Dr)).subscribe(()=>{qt(this.platformId)&&(this.isLoggedIn=!!this.userInfo.getToken())})}isopenandclose=!1;toggleSidebar(){this.layoutService.toggleSidebar()}setSidebarState(e){this.isopenandclose=e,this.sidebarVisible=e,this.layoutService.toggleSidebar()}logout(){qt(this.platformId)&&localStorage.clear(),this.isLoggedIn=!1,this.router.navigate(["/auth/login"])}ngOnDestroy(){window.removeEventListener("toggle-sidebar",this.toggleHandler)}static \u0275fac=function(t){return new(t||i)(ke(An),ke(hn),ke(nn),ke(rn),ke(In))};static \u0275cmp=Dt({type:i,selectors:[["app-sidebar"]],decls:13,vars:15,consts:[[1,"fixed","top-0","left-0","h-full","w-64","backdrop-blur-md","backdrop-saturate-150","text-white","shadow-2xl","z-50","flex","flex-col",3,"ngStyle"],[1,"flex","items-center","justify-between","h-20","border-b","px-4",3,"ngStyle"],[1,"flex","items-center","gap-3"],["src","images/logo.jpg","alt","AgriMandi Logo",1,"h-12","w-12","rounded-full","shadow-lg","transition-transform","duration-300","hover:scale-110","hover:shadow-[0_0_15px_#00FF99]"],[1,"text-xl","font-extrabold","tracking-wider","text-white","animate-pulse","drop-shadow-[0_0_10px_#00FF99]"],["aria-label","Close Sidebar",1,"text-white","text-2xl","hover:opacity-80","transition",3,"click"],[1,"bi","bi-x-lg"],[1,"flex-1","overflow-y-auto","p-4","space-y-2","custom-scrollbar"],[4,"ngFor","ngForOf"],[1,"mt-6","pt-4","text-sm","text-white/80","uppercase","tracking-wider","border-t",3,"ngStyle"],["routerLinkActive","bg-white text-black border-l-4 border-yellow-300",1,"flex","items-center","gap-3","py-2","px-4","rounded-lg","hover:bg-white","hover:text-black","transition",3,"routerLink","ngStyle"],[1,"flex","items-center","gap-3","py-2","px-4","rounded-lg","transition","cursor-not-allowed","opacity-60",3,"ngStyle"],[1,"ml-auto","px-2","py-0.5","rounded-full","text-xs","shadow-md","animate-pulse",3,"ngClass"]],template:function(t,n){t&1&&(M(0,"div",0)(1,"div",1)(2,"div",2),pe(3,"img",3),M(4,"span",4),I(5," AgriMandi "),T()(),M(6,"button",5),st("click",function(){return n.toggleSidebar()}),pe(7,"i",6),T()(),M(8,"nav",7),$e(9,ly,4,6,"ng-container",8),M(10,"div",9),I(11," Coming Soon "),T(),$e(12,cy,6,8,"ng-container",8),T()()),t&2&&(Ti("translate-x-0",n.sidebarVisible)("-translate-x-full",!n.sidebarVisible),re("ngStyle",Ft(9,sy,n.sidebarBackground)),z(),re("ngStyle",Ft(11,Af,n.selectedColor||"#198754")),z(8),re("ngForOf",n.coreLinks),z(),re("ngStyle",Ft(13,Af,n.selectedColor||"#ffffff40")),z(2),re("ngForOf",n.futureLinks))},dependencies:[Xt,qn,Yn,jn,Ai,Po,du],styles:[".custom-scrollbar[_ngcontent-%COMP%]::-webkit-scrollbar{width:6px}.custom-scrollbar[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:transparent}.custom-scrollbar[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:#fff3;border-radius:10px}"]})};var hy=i=>({"background-color":i}),lc=class i{constructor(e,t,n){this.colorService=e;this.signalRService=t;this.layoutService=n}selectedColor="";sidebarVisible=!0;receivedMessage="";ngOnInit(){this.signalRService.startConnection(),typeof window<"u"&&Rf.init(),this.colorService.selectedColor$.subscribe(e=>{this.selectedColor=e}),this.layoutService.sidebarVisible$.subscribe(e=>{this.sidebarVisible=e}),this.signalRService.startConnection().subscribe(()=>{this.signalRService.receiveMessage().subscribe(e=>{this.receivedMessage=e})})}sendMessage(e){this.signalRService.sendMessage(e)}title="AgriMandi-Frontend";currentYear=new Date().getFullYear();showWheel=!1;openWheel(){this.showWheel=!0}onColorSelected(e){this.selectedColor=e,console.log("Color selected from wheel:",e),this.showWheel=!1}static \u0275fac=function(t){return new(t||i)(ke(nn),ke(zr),ke(rn))};static \u0275cmp=Dt({type:i,selectors:[["app-root"]],decls:37,vars:8,consts:[[1,"content-overlay","transition-all","duration-300"],[1,"pt-24"],[1,"main-content"],[1,"text-white","py-8","text-center","md:text-left","mt-16",3,"ngStyle"],[1,"container","mx-auto","px-4","grid","grid-cols-1","md:grid-cols-3","gap-8","items-center"],[1,"text-2xl","font-bold","mb-2","tracking-wider"],[1,"text-sm","opacity-80"],[1,"flex","justify-center","space-x-6","text-lg","mt-4","md:mt-0"],["href","https://github.com/VIKASHNAGAR786","target","_blank",1,"hover:text-[#00ffee]","transition"],[1,"bi","bi-github"],["href","https://linkedin.com/in/vikashnagar786","target","_blank",1,"hover:text-[#00ffee]","transition"],[1,"bi","bi-linkedin"],["href","mailto:vikashnagar872@gmail.com",1,"hover:text-[#00ffee]","transition"],[1,"bi","bi-envelope-fill"],["href","#",1,"hover:text-[#00ffee]","transition"],[1,"bi","bi-twitter-x"],[1,"bi","bi-facebook"],[1,"text-sm","text-gray-100","mt-6","md:mt-0","text-center","md:text-right"],[1,"text-[#00ffee]"],[1,"text-gray-400","text-xs"]],template:function(t,n){t&1&&(pe(0,"app-design")(1,"app-sidebar"),M(2,"div",0)(3,"header"),pe(4,"app-navbar"),T(),M(5,"div",1)(6,"main",2),pe(7,"router-outlet"),T()(),pe(8,"app-wheel")(9,"app-alert"),M(10,"footer",3)(11,"div",4)(12,"div")(13,"h2",5),I(14,"\u{1F331} AgriMandi"),T(),M(15,"p",6),I(16,"Empowering Farmers with Technology for a Better Tomorrow"),T()(),M(17,"div",7)(18,"a",8),pe(19,"i",9),T(),M(20,"a",10),pe(21,"i",11),T(),M(22,"a",12),pe(23,"i",13),T(),M(24,"a",14),pe(25,"i",15),T(),M(26,"a",14),pe(27,"i",16),T()(),M(28,"div",17)(29,"p"),I(30),T(),M(31,"p"),I(32,"Developed with \u{1F49A} by "),M(33,"strong",18),I(34,"Vikash Nagar"),T()(),M(35,"p",19),I(36,"Version 1.0.0"),T()()()()()),t&2&&(z(2),Ti("md:ml-64",n.sidebarVisible)("ml-0",!n.sidebarVisible),z(8),re("ngStyle",Ft(6,hy,n.selectedColor||"#198754")),z(20),Nt("\xA9 ",n.currentYear," AgriMandi. All rights reserved."))},dependencies:[Xt,jn,Ai,uu,da,fa,sc,oc,ac],styles:["body[_ngcontent-%COMP%]{margin:0;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif;display:flex;flex-direction:column;min-height:100vh;background-color:#b9f6ca;color:#333;scroll-behavior:smooth;overflow-x:hidden}main[_ngcontent-%COMP%]{flex:1}footer[_ngcontent-%COMP%]{font-size:14px;color:#fff;text-align:center;padding:10px 0;box-shadow:0 -2px 5px #0003}.content-overlay[_ngcontent-%COMP%]{position:relative;z-index:1}.main-content[_ngcontent-%COMP%]{padding:1rem}app-design[_ngcontent-%COMP%]{z-index:0;position:absolute;top:0;left:0}"]})};cu(lc,Mu).catch(i=>console.error(i));
