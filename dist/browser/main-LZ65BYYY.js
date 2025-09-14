import{a as Mc}from"./chunk-YHHRACUJ.js";import{a as Ru,d as Iu}from"./chunk-BUBDGSDM.js";import{a as Fn,b as Hr}from"./chunk-AA542EW2.js";import{a as wu,b as Qn,c as Ln,d as ei,e as Bi,g as kr,i as ki,j as zi,k as ko,l as Eu,m as Tu,n as zo,o as Vo,p as Ho,q as Cu,r as zr,s as Au,t as xn,u as Go}from"./chunk-AA32GII2.js";import{a as Gr}from"./chunk-UQJSZBOT.js";import{a as Vr}from"./chunk-NLJOITTN.js";import{a as kt}from"./chunk-GMVHBDDR.js";import{a as Sc,d as Ui,e as _u,f as xu,g as vu,h as yu,i as Ni,k as bu,l as ln,m as Bo,n as Su,o as Mu,p as Oi}from"./chunk-6HB3LA7G.js";import{k as gn,l as _n,m as an,n as Fi,q as Ft,s as Bt}from"./chunk-5OO754BD.js";import{$ as Io,Ab as Oo,Cb as ot,Db as at,E as Di,Eb as lt,Ga as dr,Gb as bn,Hb as Wt,Ia as fu,Ib as on,Ja as Br,Jb as pu,Ka as U,Kb as mu,Lb as bc,Pa as Ae,Qb as Kn,S as lu,Sb as gu,Ua as Mt,V as rn,Y as cu,Za as ze,_ as Jn,a as dt,b as Zn,ba as hu,c as Nr,e as Jf,eb as te,f as ou,fb as Li,g as au,ga as Be,gb as Cs,h as vc,ha as ke,hb as y,i as nt,ia as Po,ib as w,ja as Do,jb as ce,kb as Qt,l as yc,lb as en,ma as uu,mb as vt,p as Or,pb as it,qa as du,qb as fe,rb as Lo,tb as Fo,ub as Uo,vb as No,wb as pi,xb as R,yb as wt,za as sn,zb as At}from"./chunk-SR3MDXF7.js";var Ec=Jf((Rs,wc)=>{"use strict";(function(i,e){typeof Rs=="object"&&typeof wc=="object"?wc.exports=e():typeof define=="function"&&define.amd?define([],e):typeof Rs=="object"?Rs.AOS=e():i.AOS=e()})(Rs,function(){return function(i){function e(n){if(t[n])return t[n].exports;var r=t[n]={exports:{},id:n,loaded:!1};return i[n].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var t={};return e.m=i,e.c=t,e.p="dist/",e(0)}([function(i,e,t){"use strict";function n(V){return V&&V.__esModule?V:{default:V}}var r=Object.assign||function(V){for(var H=1;H<arguments.length;H++){var Q=arguments[H];for(var K in Q)Object.prototype.hasOwnProperty.call(Q,K)&&(V[K]=Q[K])}return V},s=t(1),o=(n(s),t(6)),a=n(o),l=t(7),c=n(l),h=t(8),u=n(h),f=t(9),p=n(f),g=t(10),v=n(g),m=t(11),d=n(m),A=t(14),C=n(A),b=[],L=!1,P={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},D=function(){var V=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if(V&&(L=!0),L)return b=(0,d.default)(b,P),(0,v.default)(b,P.once),b},N=function(){b=(0,C.default)(),D()},M=function(){b.forEach(function(V,H){V.node.removeAttribute("data-aos"),V.node.removeAttribute("data-aos-easing"),V.node.removeAttribute("data-aos-duration"),V.node.removeAttribute("data-aos-delay")})},_=function(V){return V===!0||V==="mobile"&&p.default.mobile()||V==="phone"&&p.default.phone()||V==="tablet"&&p.default.tablet()||typeof V=="function"&&V()===!0},I=function(V){P=r(P,V),b=(0,C.default)();var H=document.all&&!window.atob;return _(P.disable)||H?M():(P.disableMutationObserver||u.default.isSupported()||(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),P.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",P.easing),document.querySelector("body").setAttribute("data-aos-duration",P.duration),document.querySelector("body").setAttribute("data-aos-delay",P.delay),P.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1?D(!0):P.startEvent==="load"?window.addEventListener(P.startEvent,function(){D(!0)}):document.addEventListener(P.startEvent,function(){D(!0)}),window.addEventListener("resize",(0,c.default)(D,P.debounceDelay,!0)),window.addEventListener("orientationchange",(0,c.default)(D,P.debounceDelay,!0)),window.addEventListener("scroll",(0,a.default)(function(){(0,v.default)(b,P.once)},P.throttleDelay)),P.disableMutationObserver||u.default.ready("[data-aos]",N),b)};i.exports={init:I,refresh:D,refreshHard:N}},function(i,e){},,,,,function(i,e){(function(t){"use strict";function n(_,I,V){function H(Pe){var Ue=Oe,E=$e;return Oe=$e=void 0,De=Pe,se=_.apply(E,Ue)}function Q(Pe){return De=Pe,pe=setTimeout(ee,I),We?H(Pe):se}function K(Pe){var Ue=Pe-de,E=Pe-De,me=I-Ue;return Le?N(me,Y-E):me}function J(Pe){var Ue=Pe-de,E=Pe-De;return de===void 0||Ue>=I||Ue<0||Le&&E>=Y}function ee(){var Pe=M();return J(Pe)?X(Pe):void(pe=setTimeout(ee,K(Pe)))}function X(Pe){return pe=void 0,Ye&&Oe?H(Pe):(Oe=$e=void 0,se)}function ge(){pe!==void 0&&clearTimeout(pe),De=0,Oe=de=$e=pe=void 0}function ve(){return pe===void 0?se:X(M())}function be(){var Pe=M(),Ue=J(Pe);if(Oe=arguments,$e=this,de=Pe,Ue){if(pe===void 0)return Q(de);if(Le)return pe=setTimeout(ee,I),H(de)}return pe===void 0&&(pe=setTimeout(ee,I)),se}var Oe,$e,Y,se,pe,de,De=0,We=!1,Le=!1,Ye=!0;if(typeof _!="function")throw new TypeError(h);return I=l(I)||0,s(V)&&(We=!!V.leading,Le="maxWait"in V,Y=Le?D(l(V.maxWait)||0,I):Y,Ye="trailing"in V?!!V.trailing:Ye),be.cancel=ge,be.flush=ve,be}function r(_,I,V){var H=!0,Q=!0;if(typeof _!="function")throw new TypeError(h);return s(V)&&(H="leading"in V?!!V.leading:H,Q="trailing"in V?!!V.trailing:Q),n(_,I,{leading:H,maxWait:I,trailing:Q})}function s(_){var I=typeof _>"u"?"undefined":c(_);return!!_&&(I=="object"||I=="function")}function o(_){return!!_&&(typeof _>"u"?"undefined":c(_))=="object"}function a(_){return(typeof _>"u"?"undefined":c(_))=="symbol"||o(_)&&P.call(_)==f}function l(_){if(typeof _=="number")return _;if(a(_))return u;if(s(_)){var I=typeof _.valueOf=="function"?_.valueOf():_;_=s(I)?I+"":I}if(typeof _!="string")return _===0?_:+_;_=_.replace(p,"");var V=v.test(_);return V||m.test(_)?d(_.slice(2),V?2:8):g.test(_)?u:+_}var c=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(_){return typeof _}:function(_){return _&&typeof Symbol=="function"&&_.constructor===Symbol&&_!==Symbol.prototype?"symbol":typeof _},h="Expected a function",u=NaN,f="[object Symbol]",p=/^\s+|\s+$/g,g=/^[-+]0x[0-9a-f]+$/i,v=/^0b[01]+$/i,m=/^0o[0-7]+$/i,d=parseInt,A=(typeof t>"u"?"undefined":c(t))=="object"&&t&&t.Object===Object&&t,C=(typeof self>"u"?"undefined":c(self))=="object"&&self&&self.Object===Object&&self,b=A||C||Function("return this")(),L=Object.prototype,P=L.toString,D=Math.max,N=Math.min,M=function(){return b.Date.now()};i.exports=r}).call(e,function(){return this}())},function(i,e){(function(t){"use strict";function n(M,_,I){function V(Ye){var Pe=be,Ue=Oe;return be=Oe=void 0,de=Ye,Y=M.apply(Ue,Pe)}function H(Ye){return de=Ye,se=setTimeout(J,_),De?V(Ye):Y}function Q(Ye){var Pe=Ye-pe,Ue=Ye-de,E=_-Pe;return We?D(E,$e-Ue):E}function K(Ye){var Pe=Ye-pe,Ue=Ye-de;return pe===void 0||Pe>=_||Pe<0||We&&Ue>=$e}function J(){var Ye=N();return K(Ye)?ee(Ye):void(se=setTimeout(J,Q(Ye)))}function ee(Ye){return se=void 0,Le&&be?V(Ye):(be=Oe=void 0,Y)}function X(){se!==void 0&&clearTimeout(se),de=0,be=pe=Oe=se=void 0}function ge(){return se===void 0?Y:ee(N())}function ve(){var Ye=N(),Pe=K(Ye);if(be=arguments,Oe=this,pe=Ye,Pe){if(se===void 0)return H(pe);if(We)return se=setTimeout(J,_),V(pe)}return se===void 0&&(se=setTimeout(J,_)),Y}var be,Oe,$e,Y,se,pe,de=0,De=!1,We=!1,Le=!0;if(typeof M!="function")throw new TypeError(c);return _=a(_)||0,r(I)&&(De=!!I.leading,We="maxWait"in I,$e=We?P(a(I.maxWait)||0,_):$e,Le="trailing"in I?!!I.trailing:Le),ve.cancel=X,ve.flush=ge,ve}function r(M){var _=typeof M>"u"?"undefined":l(M);return!!M&&(_=="object"||_=="function")}function s(M){return!!M&&(typeof M>"u"?"undefined":l(M))=="object"}function o(M){return(typeof M>"u"?"undefined":l(M))=="symbol"||s(M)&&L.call(M)==u}function a(M){if(typeof M=="number")return M;if(o(M))return h;if(r(M)){var _=typeof M.valueOf=="function"?M.valueOf():M;M=r(_)?_+"":_}if(typeof M!="string")return M===0?M:+M;M=M.replace(f,"");var I=g.test(M);return I||v.test(M)?m(M.slice(2),I?2:8):p.test(M)?h:+M}var l=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(M){return typeof M}:function(M){return M&&typeof Symbol=="function"&&M.constructor===Symbol&&M!==Symbol.prototype?"symbol":typeof M},c="Expected a function",h=NaN,u="[object Symbol]",f=/^\s+|\s+$/g,p=/^[-+]0x[0-9a-f]+$/i,g=/^0b[01]+$/i,v=/^0o[0-7]+$/i,m=parseInt,d=(typeof t>"u"?"undefined":l(t))=="object"&&t&&t.Object===Object&&t,A=(typeof self>"u"?"undefined":l(self))=="object"&&self&&self.Object===Object&&self,C=d||A||Function("return this")(),b=Object.prototype,L=b.toString,P=Math.max,D=Math.min,N=function(){return C.Date.now()};i.exports=n}).call(e,function(){return this}())},function(i,e){"use strict";function t(l){var c=void 0,h=void 0,u=void 0;for(c=0;c<l.length;c+=1)if(h=l[c],h.dataset&&h.dataset.aos||(u=h.children&&t(h.children)))return!0;return!1}function n(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function r(){return!!n()}function s(l,c){var h=window.document,u=n(),f=new u(o);a=c,f.observe(h.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function o(l){l&&l.forEach(function(c){var h=Array.prototype.slice.call(c.addedNodes),u=Array.prototype.slice.call(c.removedNodes),f=h.concat(u);if(t(f))return a()})}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){};e.default={isSupported:r,ready:s}},function(i,e){"use strict";function t(h,u){if(!(h instanceof u))throw new TypeError("Cannot call a class as a function")}function n(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function h(u,f){for(var p=0;p<f.length;p++){var g=f[p];g.enumerable=g.enumerable||!1,g.configurable=!0,"value"in g&&(g.writable=!0),Object.defineProperty(u,g.key,g)}}return function(u,f,p){return f&&h(u.prototype,f),p&&h(u,p),u}}(),s=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,o=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,a=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,l=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,c=function(){function h(){t(this,h)}return r(h,[{key:"phone",value:function(){var u=n();return!(!s.test(u)&&!o.test(u.substr(0,4)))}},{key:"mobile",value:function(){var u=n();return!(!a.test(u)&&!l.test(u.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),h}();e.default=new c},function(i,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=function(r,s,o){var a=r.node.getAttribute("data-aos-once");s>r.position?r.node.classList.add("aos-animate"):typeof a<"u"&&(a==="false"||!o&&a!=="true")&&r.node.classList.remove("aos-animate")},n=function(r,s){var o=window.pageYOffset,a=window.innerHeight;r.forEach(function(l,c){t(l,a+o,s)})};e.default=n},function(i,e,t){"use strict";function n(a){return a&&a.__esModule?a:{default:a}}Object.defineProperty(e,"__esModule",{value:!0});var r=t(12),s=n(r),o=function(a,l){return a.forEach(function(c,h){c.node.classList.add("aos-init"),c.position=(0,s.default)(c.node,l.offset)}),a};e.default=o},function(i,e,t){"use strict";function n(a){return a&&a.__esModule?a:{default:a}}Object.defineProperty(e,"__esModule",{value:!0});var r=t(13),s=n(r),o=function(a,l){var c=0,h=0,u=window.innerHeight,f={offset:a.getAttribute("data-aos-offset"),anchor:a.getAttribute("data-aos-anchor"),anchorPlacement:a.getAttribute("data-aos-anchor-placement")};switch(f.offset&&!isNaN(f.offset)&&(h=parseInt(f.offset)),f.anchor&&document.querySelectorAll(f.anchor)&&(a=document.querySelectorAll(f.anchor)[0]),c=(0,s.default)(a).top,f.anchorPlacement){case"top-bottom":break;case"center-bottom":c+=a.offsetHeight/2;break;case"bottom-bottom":c+=a.offsetHeight;break;case"top-center":c+=u/2;break;case"bottom-center":c+=u/2+a.offsetHeight;break;case"center-center":c+=u/2+a.offsetHeight/2;break;case"top-top":c+=u;break;case"bottom-top":c+=a.offsetHeight+u;break;case"center-top":c+=a.offsetHeight/2+u}return f.anchorPlacement||f.offset||isNaN(l)||(h=l),c+h};e.default=o},function(i,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=function(n){for(var r=0,s=0;n&&!isNaN(n.offsetLeft)&&!isNaN(n.offsetTop);)r+=n.offsetLeft-(n.tagName!="BODY"?n.scrollLeft:0),s+=n.offsetTop-(n.tagName!="BODY"?n.scrollTop:0),n=n.offsetParent;return{top:s,left:r}};e.default=t},function(i,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=function(n){return n=n||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(n,function(r){return{node:r}})};e.default=t}])})});var Wo=class i{constructor(e){this.http=e}apiUrl=Vr.AccountApiUrl+"Register/Register";Register(e){return this.http.post(this.apiUrl,e)}static \u0275fac=function(t){return new(t||i)(Jn(Ui))};static \u0275prov=rn({token:i,factory:i.\u0275fac,providedIn:"root"})};function ep(i,e){if(i&1){let t=vt();y(0,"div",3)(1,"label",4),R(2,"Company Name"),w(),y(3,"input",17),lt("ngModelChange",function(r){Be(t);let s=fe();return at(s.farmer.companyName,r)||(s.farmer.companyName=r),ke(r)}),w()()}if(i&2){let t=fe();U(3),ot("ngModel",t.farmer.companyName)}}function tp(i,e){if(i&1){let t=vt();y(0,"div",3)(1,"label",4),R(2,"Company Type"),w(),y(3,"input",18),lt("ngModelChange",function(r){Be(t);let s=fe();return at(s.farmer.companyType,r)||(s.farmer.companyType=r),ke(r)}),w()()}if(i&2){let t=fe();U(3),ot("ngModel",t.farmer.companyType)}}var Xo=class i{constructor(e,t){this.farmerService=e;this.alertService=t}farmer={name:"",userName:"",password:"",role:"",email:"",companyName:"",companyType:""};signup(){this.farmerService.Register(this.farmer).subscribe(e=>{console.log("\u2705 Farmer registered:",e),this.alertService.showAlert("Signup successful!","success")},e=>{console.error("\u274C Signup failed:",e),this.alertService.showAlert("Signup failed! Please try again.","error")})}field=[{label:"Name",name:"name",type:"text"},{label:"User Name",name:"userName",type:"text"},{label:"Password",name:"password",type:"text"},{label:"Role",name:"Role",type:"text"},{label:"Email",name:"email",type:"email"},{label:"Company Name",name:"companyName",type:"text"},{label:"Company Type",name:"companyType",type:"text"}];testSuccess(){this.alertService.showAlert("Test success alert!","success")}testError(){this.alertService.showAlert("Test error alert!","error")}static \u0275fac=function(t){return new(t||i)(Ae(Wo),Ae(Fn))};static \u0275cmp=Mt({type:i,selectors:[["app-signup"]],decls:36,vars:7,consts:[[1,"container","bg-white","p-4","p-md-5","rounded-4","shadow-lg","mt-4",3,"ngSubmit"],[1,"text-center","text-success","fw-bold","mb-4"],[1,"row","g-4"],[1,"col-md-6"],[1,"form-label","fw-semibold"],["type","text","name","name","required","","placeholder","Enter your name",1,"form-control","shadow-sm",3,"ngModelChange","ngModel"],["type","email","name","email","required","","placeholder","Enter your email",1,"form-control","shadow-sm",3,"ngModelChange","ngModel"],["type","text","name","userName","required","","placeholder","Choose a username",1,"form-control","shadow-sm",3,"ngModelChange","ngModel"],["name","role","required","",1,"form-select","shadow-sm",3,"ngModelChange","ngModel"],["value",""],["value","Farmer"],["value","Buyer"],["type","password","name","password","required","","placeholder","Enter a strong password",1,"form-control","shadow-sm",3,"ngModelChange","ngModel"],["class","col-md-6",4,"ngIf"],[1,"text-center","mt-4"],["type","submit",1,"btn","btn-success","btn-lg","px-5","shadow-sm"],[1,"bi","bi-person-plus","me-2"],["type","text","name","companyName","placeholder","Company Name",1,"form-control","shadow-sm",3,"ngModelChange","ngModel"],["type","text","name","companyType","placeholder","e.g., Agro Supplier, Exporter",1,"form-control","shadow-sm",3,"ngModelChange","ngModel"]],template:function(t,n){t&1&&(y(0,"form",0),it("ngSubmit",function(){return n.signup()}),y(1,"h2",1),R(2,"Create A Account In Agimandi"),w(),y(3,"div",2)(4,"div",3)(5,"label",4),R(6,"Name"),w(),y(7,"input",5),lt("ngModelChange",function(s){return at(n.farmer.name,s)||(n.farmer.name=s),s}),w()(),y(8,"div",3)(9,"label",4),R(10,"Email"),w(),y(11,"input",6),lt("ngModelChange",function(s){return at(n.farmer.email,s)||(n.farmer.email=s),s}),w()(),y(12,"div",3)(13,"label",4),R(14,"User Name"),w(),y(15,"input",7),lt("ngModelChange",function(s){return at(n.farmer.userName,s)||(n.farmer.userName=s),s}),w()(),y(16,"div",3)(17,"label",4),R(18,"Role"),w(),y(19,"select",8),lt("ngModelChange",function(s){return at(n.farmer.role,s)||(n.farmer.role=s),s}),y(20,"option",9),R(21,"-- Select Role --"),w(),y(22,"option",10),R(23,"Farmer"),w(),y(24,"option",11),R(25,"Buyer"),w()()(),y(26,"div",3)(27,"label",4),R(28,"Password"),w(),y(29,"input",12),lt("ngModelChange",function(s){return at(n.farmer.password,s)||(n.farmer.password=s),s}),w()(),ze(30,ep,4,1,"div",13)(31,tp,4,1,"div",13),w(),y(32,"div",14)(33,"button",15),ce(34,"i",16),R(35," Sign Up "),w()()()),t&2&&(U(7),ot("ngModel",n.farmer.name),U(4),ot("ngModel",n.farmer.email),U(4),ot("ngModel",n.farmer.userName),U(4),ot("ngModel",n.farmer.role),U(10),ot("ngModel",n.farmer.password),U(),te("ngIf",n.farmer.role==="Buyer"),U(),te("ngIf",n.farmer.role==="Buyer"))},dependencies:[xn,zi,Vo,Ho,Qn,zo,ei,Bi,zr,ki,kr,Ft,an],styles:["form[_ngcontent-%COMP%]{max-width:600px;margin:30px auto;padding:30px;background:#fffffff2;border-radius:16px;box-shadow:0 8px 20px #00000026;display:flex;flex-direction:column;gap:16px;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif;transition:all .3s ease}label[_ngcontent-%COMP%]{font-weight:600;margin-bottom:5px;color:#333;font-size:15px}input[_ngcontent-%COMP%], select[_ngcontent-%COMP%]{width:100%;padding:12px 14px;margin-top:2px;border:1px solid #ccc;border-radius:8px;font-size:16px;transition:border-color .2s,box-shadow .2s;background-color:#fff}input[_ngcontent-%COMP%]:focus, select[_ngcontent-%COMP%]:focus{outline:none;border-color:#28a745;box-shadow:0 0 0 3px #28a74533}button[_ngcontent-%COMP%]{margin-top:20px;padding:12px;background:#28a745;color:#fff;border:none;border-radius:8px;cursor:pointer;font-size:18px;font-weight:600;transition:background .3s,transform .2s}button[_ngcontent-%COMP%]:hover{background:#218838;transform:scale(1.03)}button[_ngcontent-%COMP%]:active{transform:scale(.97)}@media (max-width: 600px){form[_ngcontent-%COMP%]{max-width:95%;padding:20px}button[_ngcontent-%COMP%]{font-size:16px;padding:10px}}@media (prefers-color-scheme: dark){form[_ngcontent-%COMP%]{background:#1e1e1ef2;color:#f1f1f1}input[_ngcontent-%COMP%], select[_ngcontent-%COMP%]{background-color:#444;color:#f1f1f1;border-color:#555}input[_ngcontent-%COMP%]:focus, select[_ngcontent-%COMP%]:focus{border-color:#28a745;box-shadow:0 0 0 3px #28a7454d}button[_ngcontent-%COMP%]{background-color:#28a745}button[_ngcontent-%COMP%]:hover{background-color:#218838}}"]})};var Pu=ou(Ec());var cn=class i{constructor(){}selectedColorSubject=new Or("#FFFFFF");selectedColor$=this.selectedColorSubject.asObservable();setColor(e){this.selectedColorSubject.next(e)}getColor(){return this.selectedColorSubject.getValue()}static \u0275fac=function(t){return new(t||i)};static \u0275prov=rn({token:i,factory:i.\u0275fac,providedIn:"root"})};var Vi=class i{constructor(e,t,n){this.http=e;this.platformId=t;this.userInfo=n}apiUrl=Vr.AccountApiUrl+"Login/login";expiryDays=7;isBrowser(){return Bt(this.platformId)}login(e){return this.http.post(this.apiUrl,e).pipe(lu(t=>{if(!this.isBrowser())return;let n=new Date;n.setDate(n.getDate()+this.expiryDays);let r={auth_token:t.token,auth_token_expiry:n.getTime().toString(),user_name:t.name,user_role:t.role,user_email:t.email,nameid:t.id.toString()};Object.entries(r).forEach(([s,o])=>localStorage.setItem(s,o)),this.userInfo.refresh()}))}isLoggedIn(){if(!this.isBrowser())return!1;let e=localStorage.getItem("auth_token"),t=localStorage.getItem("auth_token_expiry"),n=Date.now();return!e||!t||n>+t?(this.logout(),!1):!0}getToken(){return this.isLoggedIn()?localStorage.getItem("auth_token"):null}logout(){if(!this.isBrowser())return;["auth_token","auth_token_expiry","user_name","user_role","user_email","nameid"].forEach(t=>localStorage.removeItem(t)),this.userInfo.clear()}static \u0275fac=function(t){return new(t||i)(Jn(Ui),Jn(sn),Jn(kt))};static \u0275prov=rn({token:i,factory:i.\u0275fac,providedIn:"root"})};function np(i,e){if(i&1&&(y(0,"div",45)(1,"div",46),ce(2,"img",47),y(3,"h3",48),R(4),w(),y(5,"p",49),R(6),w()()()),i&2){let t=e.$implicit;U(2),te("src","images/"+t.image,dr)("alt",t.title),U(2),Oo("",t.number,". ",t.title,""),U(2),wt(t.description)}}function ip(i,e){if(i&1&&(y(0,"div",50)(1,"h3",51),R(2),w(),y(3,"p",52),R(4),w()()),i&2){let t=e.$implicit;U(2),wt(t.value),U(2),wt(t.label)}}function rp(i,e){if(i&1&&(y(0,"div",53),ce(1,"img",54),y(2,"h4",55),R(3),w(),y(4,"p",56),R(5),w()()),i&2){let t=e.$implicit;U(),te("alt",t.title),U(2),wt(t.title),U(2),wt(t.description)}}function sp(i,e){if(i&1&&(y(0,"div",57)(1,"h4",58),R(2),w(),y(3,"p",59),R(4),w()()),i&2){let t=e.$implicit;U(2),wt(t.question),U(2),wt(t.answer)}}var Yo=class i{constructor(e,t,n,r){this.router=e;this.colorService=t;this.loginService=n;this.userInfo=r}selectedColor="";ngOnInit(){this.loginService.isLoggedIn()?console.log("User is logged in:",this.userInfo.getUserName()):this.router.navigate(["auth/login"]),this.colorService.selectedColor$.subscribe(e=>{this.selectedColor=e}),Pu.init({duration:1e3})}steps=[{number:1,title:"Sign Up",description:"Create your free account as a Farmer or Buyer to access the AgriMandi platform.",image:"Register.JPG"},{number:2,title:"List or Browse Products",description:"Farmers can upload product details, while buyers explore available produce in real-time.",image:"list.webp"},{number:3,title:"Connect & Communicate",description:"Initiate direct chat or call between farmers and buyers for negotiation and clarity.",image:"trade.jpeg"},{number:4,title:"Secure Transactions",description:"Finalize deals and complete payments securely through integrated payment gateways.",image:"trade.jpeg"},{number:5,title:"Track & Rate",description:"Track your orders and leave feedback to build a trusted, transparent marketplace.",image:"trade.jpeg"}];impactStats=[{value:"10,000+",label:"Farmers Empowered"},{value:"50,000+",label:"Transactions Completed"},{value:"20+",label:"States Covered"}];blogs=[{id:1,title:"5 Tips for Selling Produce Online",description:"Learn how to optimize your listings and attract more buyers.",image:"blog1.jpg"},{id:2,title:"The Future of Digital Agriculture",description:"Discover how technology is shaping the agricultural industry.",image:"blog2.jpg"}];faqs=[{question:"How do I register?",answer:'Click the "Get Started" button and fill out the registration form to create an account.'},{question:"Is there a fee for using AgriMandi?",answer:"No, registering and using the platform is completely free for both farmers and buyers."},{question:"How are payments handled?",answer:"Payments are securely processed directly between farmers and buyers via integrated payment systems."}];static \u0275fac=function(t){return new(t||i)(Ae(ln),Ae(cn),Ae(Vi),Ae(kt))};static \u0275cmp=Mt({type:i,selectors:[["app-home"]],decls:106,vars:4,consts:[[1,"home-container","w-full","px-4","sm:px-6","lg:px-20","py-16","space-y-28","bg-gradient-to-b","from-[#f7fff5]","via-[#e7fce4]","to-[#d9f9d0]","border-y","border-green-100","rounded-b-[4rem]","shadow-xl","overflow-x-hidden"],["data-aos","fade-down",1,"relative","text-center","px-4","sm:px-6","lg:px-12","py-12","md:py-20","bg-gradient-to-r","from-[#e7f6d5]","to-[#f0fff4]","rounded-3xl","shadow-lg","overflow-hidden"],[1,"absolute","inset-0","-z-10","pointer-events-none"],[1,"animate-float-leaf","absolute","left-10","top-10","w-6","h-6","bg-green-200","rounded-full","opacity-50","blur-sm"],[1,"animate-float-leaf","delay-500","absolute","right-20","top-1/3","w-4","h-4","bg-green-400","rounded-full","opacity-40","blur-sm"],[1,"relative","inline-block"],[1,"absolute","left-0","bottom-0","w-full","h-1","bg-[#00ffee]","rounded-full","blur-sm","animate-pulse"],["data-aos","fade-up",1,"text-4xl","sm:text-5xl","lg:text-6xl","font-extrabold","tracking-tight","leading-tight","text-transparent","bg-clip-text","bg-gradient-to-r","from-green-600","to-emerald-400","drop-shadow-[0_2px_8px_rgba(0,0,0,0.25)]"],[1,"text-green-900","animate-pulse"],[1,"mt-3","mx-auto","h-1","w-24","bg-[#00ffee]","rounded-full","animate-slide-accent"],["data-aos","fade-up","data-aos-delay","200",1,"mt-6","text-base","sm:text-lg","lg:text-xl","text-gray-700","max-w-3xl","mx-auto","leading-relaxed","px-2","sm:px-0"],[1,"text-green-700"],[1,"text-green-600","font-semibold"],[1,"underline","decoration-green-300"],["data-aos","zoom-in-up",1,"features-section","px-4","sm:px-6","lg:px-20","py-20","bg-white","rounded-3xl","shadow-lg","border","border-green-100"],[1,"text-3xl","sm:text-4xl","font-extrabold","text-center","text-green-700","mb-14","tracking-tight"],[1,"text-green-800"],[1,"row","g-4"],[1,"col-12","col-md-6"],[1,"d-flex","align-items-start","p-4","rounded-4","bg-success-subtle","shadow-sm","h-100","transition","duration-300","hover:shadow-lg"],["src","images/3.jpg","alt","Direct Market",1,"rounded-3","object-cover","shadow","border","border-success-subtle","me-3",2,"width","80px","height","80px"],[1,"text-gray-800","lead","mb-0"],[1,"text-success"],["src","images/2.jpg","alt","Easy Negotiations",1,"rounded-3","object-cover","shadow","border","border-success-subtle","me-3",2,"width","80px","height","80px"],["src","images/6.jpeg","alt","Secure Payments",1,"rounded-3","object-cover","shadow","border","border-success-subtle","me-3",2,"width","80px","height","80px"],["src","images/5.jpeg","alt","Global Reach",1,"rounded-3","object-cover","shadow","border","border-success-subtle","me-3",2,"width","80px","height","80px"],["data-aos","fade-up",1,"how-it-works-section","px-4","sm:px-6","lg:px-20","py-20","bg-light","rounded-3xl","shadow-lg","border","border-green-100","text-center"],[1,"text-3xl","sm:text-4xl","font-extrabold","text-green-700","mb-14","tracking-tight"],[1,"row","g-4","justify-content-center"],["class","col-12 col-md-4",4,"ngFor","ngForOf"],[1,"text-center"],[1,"text-3xl","font-bold","text-green-700","mb-12"],[1,"grid","grid-cols-1","md:grid-cols-2","gap-8"],[1,"bg-green-100","p-6","rounded-lg","shadow"],[1,"italic","text-gray-700"],[1,"mt-4","font-semibold","text-green-800"],[1,"grid","grid-cols-2","md:grid-cols-4","gap-6"],["class","stat bg-white p-6 rounded-xl shadow-md",4,"ngFor","ngForOf"],[1,"text-3xl","font-bold","text-center","text-green-700","mb-12"],[1,"grid","grid-cols-1","md:grid-cols-3","gap-8"],["class","blog-post bg-white p-4 rounded-xl shadow hover:shadow-lg transition",4,"ngFor","ngForOf"],["class","faq-item bg-white p-6 rounded-xl shadow",4,"ngFor","ngForOf"],[1,"text-center","mt-20"],[1,"text-2xl","font-bold","mb-2","text-green-800"],[1,"text-gray-700","max-w-xl","mx-auto","mb-6"],[1,"col-12","col-md-4"],[1,"p-5","bg-white","rounded-4","shadow-sm","h-100","transition-all","duration-300","hover:shadow-xl","border","border-success-subtle","d-flex","flex-column","align-items-center"],[1,"rounded-circle","shadow","mb-3","object-cover","border","border-success-subtle",2,"width","80px","height","80px",3,"src","alt"],[1,"h5","fw-bold","text-success","mb-2"],[1,"text-secondary","small"],[1,"stat","bg-white","p-6","rounded-xl","shadow-md"],[1,"text-4xl","font-bold","text-green-600"],[1,"text-gray-700","text-sm","mt-2"],[1,"blog-post","bg-white","p-4","rounded-xl","shadow","hover:shadow-lg","transition"],["src","images/latest.png",1,"w-full","h-44","object-cover","rounded-lg","mb-4",3,"alt"],[1,"text-lg","font-semibold","mb-1","text-green-800"],[1,"text-sm","text-gray-600"],[1,"faq-item","bg-white","p-6","rounded-xl","shadow"],[1,"text-lg","font-semibold","text-green-800","mb-2"],[1,"text-gray-600"]],template:function(t,n){t&1&&(y(0,"div",0)(1,"header",1)(2,"div",2),ce(3,"div",3)(4,"div",4),w(),y(5,"div",5),ce(6,"span",6),y(7,"h1",7),R(8," Welcome to "),y(9,"span",8),R(10,"AgriMandi"),w()(),ce(11,"div",9),w(),y(12,"p",10),R(13," \u{1F331} "),y(14,"strong",11),R(15,"AgriMandi"),w(),R(16," is your "),y(17,"span",12),R(18,"gateway"),w(),R(19," to a direct connection between "),y(20,"span",13),R(21,"farmers"),w(),R(22," and "),y(23,"span",13),R(24,"buyers"),w(),R(25," \u2014 bringing fresh produce to your doorstep with just a click. \u{1F69C}\u{1F91D} "),w()(),y(26,"section",14)(27,"h2",15),R(28," \u{1F31F} Why Choose "),y(29,"span",16),R(30,"AgriMandi"),w(),R(31,"? "),w(),y(32,"div",17)(33,"div",18)(34,"div",19),ce(35,"img",20),y(36,"p",21),R(37," \u{1F33E} "),y(38,"strong",22),R(39,"Direct Market Access:"),w(),R(40," Empowering farmers to showcase their produce directly to buyers. "),w()()(),y(41,"div",18)(42,"div",19),ce(43,"img",23),y(44,"p",21),R(45," \u{1F4AC} "),y(46,"strong",22),R(47,"Easy Negotiations:"),w(),R(48," Transparent communication between farmers and consumers for better deals. "),w()()(),y(49,"div",18)(50,"div",19),ce(51,"img",24),y(52,"p",21),R(53," \u{1F4CA} "),y(54,"strong",22),R(55,"Efficient Transactions:"),w(),R(56," Simplified buying and selling process with secure payments. "),w()()(),y(57,"div",18)(58,"div",19),ce(59,"img",25),y(60,"p",21),R(61," \u{1F30D} "),y(62,"strong",22),R(63,"Broader Reach:"),w(),R(64," Expand your market beyond local boundaries. "),w()()()()(),y(65,"section",26)(66,"h2",27),R(67," \u2699\uFE0F How "),y(68,"span",16),R(69,"It Works"),w()(),y(70,"div",28),ze(71,np,7,5,"div",29),w()(),y(72,"section",30)(73,"h2",31),R(74,"What Our Users Say"),w(),y(75,"div",32)(76,"div",33)(77,"p",34),R(78,'"AgriMandi has revolutionized the way I sell my produce. The direct connection with buyers has increased my income!"'),w(),y(79,"h4",35),R(80,"- Ramesh Kumar, Farmer"),w()(),y(81,"div",33)(82,"p",34),R(83,'"Buying fresh produce directly from farmers has never been easier. I love the transparency and quality."'),w(),y(84,"h4",35),R(85,"- Anjali Sharma, Buyer"),w()()()(),y(86,"section",30)(87,"h2",31),R(88,"Our Impact"),w(),y(89,"div",36),ze(90,ip,5,2,"div",37),w()(),y(91,"section")(92,"h2",38),R(93,"Latest Insights"),w(),y(94,"div",39),ze(95,rp,6,3,"div",40),w()(),y(96,"section")(97,"h2",38),R(98,"Frequently Asked Questions"),w(),y(99,"div",32),ze(100,sp,5,2,"div",41),w()(),y(101,"footer",42)(102,"h2",43),R(103,"Join AgriMandi Today!"),w(),y(104,"p",44),R(105,"Be part of the revolution in agriculture. Together, we can build a more sustainable and efficient food supply chain."),w()()()),t&2&&(U(71),te("ngForOf",n.steps),U(19),te("ngForOf",n.impactStats),U(5),te("ngForOf",n.blogs),U(5),te("ngForOf",n.faqs))},dependencies:[Ft,_n,Oi],encapsulation:2})};var Cc=(i,e)=>({"bg-green-600 text-white border-green-600":i,"border-gray-300 text-gray-500":e}),Du=(i,e)=>({"border-green-500":i,"border-gray-300":e});function op(i,e){i&1&&(y(0,"div",16)(1,"div",17)(2,"div",18),ce(3,"div",19),y(4,"div",20),Po(),y(5,"svg",21),ce(6,"path",22),w()()(),Do(),y(7,"p",23),R(8," Creating You Product "),w(),y(9,"div",24),ce(10,"div",25),w()()())}function ap(i,e){if(i&1&&(y(0,"option",38),R(1),w()),i&2){let t=e.$implicit;te("value",t),U(),wt(t)}}function lp(i,e){if(i&1&&(y(0,"div",26)(1,"h2",27),R(2,"Basic Product Info"),w(),y(3,"div")(4,"label",28),R(5,"Product Name "),y(6,"span",29),R(7,"*"),w()(),ce(8,"input",30),w(),y(9,"div")(10,"label",28),R(11,"Description "),y(12,"span",29),R(13,"*"),w()(),ce(14,"textarea",31),w(),y(15,"div",32)(16,"div")(17,"label",28),R(18,"Category "),y(19,"span",29),R(20,"*"),w()(),y(21,"select",33)(22,"option",34),R(23,"Select a category"),w(),ze(24,ap,2,2,"option",35),w()(),y(25,"div")(26,"label",28),R(27,"Type "),y(28,"span",29),R(29,"*"),w()(),ce(30,"input",36),w(),y(31,"div")(32,"label",28),R(33,"Variety "),y(34,"span",29),R(35,"*"),w()(),ce(36,"input",37),w()()()),i&2){let t=fe();U(24),te("ngForOf",t.categories)}}function cp(i,e){if(i&1&&(y(0,"option",38),R(1),w()),i&2){let t=e.$implicit;te("value",t),U(),wt(t)}}function hp(i,e){if(i&1&&(y(0,"option",38),R(1),w()),i&2){let t=e.$implicit;te("value",t),U(),wt(t)}}function up(i,e){if(i&1&&(y(0,"option",38),R(1),w()),i&2){let t=e.$implicit;te("value",t),U(),wt(t)}}function dp(i,e){if(i&1&&(y(0,"option",38),R(1),w()),i&2){let t=e.$implicit;te("value",t),U(),wt(t)}}function fp(i,e){if(i&1&&(y(0,"div",26)(1,"h2",27),R(2,"Product Details"),w(),y(3,"div",32)(4,"div")(5,"label",28),R(6,"Grade "),y(7,"span",29),R(8,"*"),w()(),y(9,"select",39),ze(10,cp,2,2,"option",35),w()(),y(11,"div")(12,"label",28),R(13,"Quantity "),y(14,"span",29),R(15,"*"),w()(),ce(16,"input",40),w(),y(17,"div")(18,"label",28),R(19,"Unit "),y(20,"span",29),R(21,"*"),w()(),y(22,"select",41),ze(23,hp,2,2,"option",35),w()()(),y(24,"div")(25,"label",28),R(26,"Price Per Unit (\u20B9) "),y(27,"span",29),R(28,"*"),w()(),ce(29,"input",42),w(),y(30,"div",43),ce(31,"input",44),y(32,"label",45),R(33,"Available for Sale"),w()(),y(34,"div",46)(35,"div")(36,"label",28),R(37,"State "),y(38,"span",29),R(39,"*"),w()(),y(40,"select",47)(41,"option",34),R(42,"Select a state"),w(),ze(43,up,2,2,"option",35),w()(),y(44,"div")(45,"label",28),R(46,"District "),y(47,"span",29),R(48,"*"),w()(),y(49,"select",48)(50,"option",34),R(51,"Select a district"),w(),ze(52,dp,2,2,"option",35),w()()()()),i&2){let t=fe();U(10),te("ngForOf",t.grades),U(13),te("ngForOf",t.units),U(20),te("ngForOf",t.states),U(9),te("ngForOf",t.districts)}}function pp(i,e){if(i&1){let t=vt();y(0,"div",26)(1,"h2",27),R(2,"Availability & Upload"),w(),y(3,"div",46)(4,"div")(5,"label",28),R(6,"Harvest Date "),y(7,"span",29),R(8,"*"),w()(),ce(9,"input",49),w(),y(10,"div")(11,"label",28),R(12,"Expiry Date "),y(13,"span",29),R(14,"*"),w()(),ce(15,"input",50),w()(),y(16,"div")(17,"label",28),R(18,"Upload Images"),w(),y(19,"input",51),it("change",function(r){Be(t);let s=fe();return ke(s.onFileChange(r))}),w()()()}if(i&2){let t=fe();U(9),Lo("max",t.today),U(6),te("min",t.productForm.value.harvestDate)}}function mp(i,e){if(i&1){let t=vt();y(0,"button",52),it("click",function(){Be(t);let r=fe();return ke(r.goBack())}),R(1," \u2190 Back "),w()}}function gp(i,e){if(i&1){let t=vt();y(0,"button",53),it("click",function(){Be(t);let r=fe();return ke(r.goNext())}),R(1," Next \u2192 "),w()}}function _p(i,e){if(i&1&&(y(0,"button",54),R(1," \u2705 Submit Product "),w()),i&2){let t=fe();te("disabled",t.productForm.invalid)}}var $o=class i{constructor(e,t,n,r){this.fb=e;this.productService=t;this.alertService=n;this.userInfo=r}productForm;today=new Date().toISOString().split("T")[0];currentStep=1;states=[];districts=[];categories=["Grains","Fruits","Vegetables","Dairy","Flowers","Spices","Pulses","Oilseeds","Herbs","Others"];grades=["Standard","A","B","C","Organic","Premium"];units=["Kg","Quintal","Ton","Liters","Packets","Bunch","Dozen"];loading=!1;ngOnInit(){this.productForm=this.fb.group({name:["",[Ln.required,Ln.minLength(3)]],description:["",Ln.required],category:["",Ln.required],type:[""],variety:[""],state:[""],district:[""],grade:["Standard"],quantity:[1,[Ln.required,Ln.min(1)]],unit:["Kg",Ln.required],pricePerUnit:[0,[Ln.required,Ln.min(1)]],availability:[!0],location:[""],harvestDate:["",Ln.required],expiryDate:["",Ln.required],storageCondition:[""],packagingType:[""],certification:[""],farmerId:[0],status:["Pending"],imageUrl:[null]},{validators:this.expiryDateAfterHarvestDate("harvestDate","expiryDate")}),this.states=Object.keys(Mc),this.productForm.get("state")?.valueChanges.subscribe(e=>{console.log("Selected State:",e),this.districts=Mc[e]||[],this.productForm.patchValue({district:""})})}expiryDateAfterHarvestDate(e,t){return n=>{let r=n.get(e)?.value,s=n.get(t)?.value;if(r&&s){let o=new Date(r);return new Date(s)>=o?null:{expiryBeforeHarvest:!0}}return null}}get f(){return this.productForm.controls}submitProduct(){let e=this.userInfo.getUserEmail(),t=this.userInfo.getUserName();if(!e||!t){this.alertService.showAlert("User information missing in token!","error");return}if(this.productForm.invalid){this.productForm.markAllAsTouched(),this.alertService.showAlert("Please fill all required fields correctly.","error");return}this.loading=!0,this.productService.getFarmerId(e,t).subscribe({next:n=>{let r=new FormData;r.append("name",this.productForm.value.name),r.append("description",this.productForm.value.description),r.append("category",this.productForm.value.category),r.append("type",this.productForm.value.type),r.append("variety",this.productForm.value.variety),r.append("grade",this.productForm.value.grade),r.append("quantity",this.productForm.value.quantity),r.append("unit",this.productForm.value.unit),r.append("pricePerUnit",this.productForm.value.pricePerUnit),r.append("availability",this.productForm.value.availability),r.append("location",`${this.productForm.value.district}, ${this.productForm.value.state}`),r.append("harvestDate",this.productForm.value.harvestDate),r.append("expiryDate",this.productForm.value.expiryDate),r.append("storageCondition",this.productForm.value.storageCondition),r.append("packagingType",this.productForm.value.packagingType),r.append("certification",this.productForm.value.certification),r.append("farmerId",n.toString()),r.append("status","Pending");let s=this.productForm.get("imageUrl")?.value;if(s&&s.length>0)for(let o=0;o<s.length;o++)r.append("files",s[o]);this.productService.saveproduct(r).subscribe({next:o=>{this.alertService.showAlert("Product added successfully!","success"),this.productForm.reset({availability:!0}),this.loading=!1},error:o=>{this.alertService.showAlert("Failed to add product! Please try again.","error"),this.loading=!1}})},error:n=>{this.alertService.showAlert("Could not fetch Farmer ID. Please login again.","error"),this.loading=!1}})}onFileChange(e){e.target.files&&e.target.files.length>0&&this.productForm.patchValue({imageUrl:e.target.files})}goNext(){this.currentStep<3&&this.currentStep++}goBack(){this.currentStep>1&&this.currentStep--}static \u0275fac=function(t){return new(t||i)(Ae(Au),Ae(Hr),Ae(Fn),Ae(kt))};static \u0275cmp=Mt({type:i,selectors:[["app-product"]],decls:33,vars:34,consts:[["class","fixed inset-0 flex items-center justify-center bg-gradient-to-br from-green-900/80 via-black/80 to-green-950/80 backdrop-blur-md z-50",4,"ngIf"],[1,"w-full","invert-dark","py-12","px-4","sm:px-10","lg:px-20","transition-colors","duration-300"],[1,"max-w-7xl","mx-auto","text-center","mb-12"],[1,"text-4xl","sm:text-5xl","font-extrabold","tracking-tight","text-green-700","dark:text-green-400","mb-4"],[1,"text-lg","text-gray-600","dark:text-gray-300"],[1,"flex","justify-between","items-center","mb-10"],[1,"flex-1","flex","flex-col","items-center"],[1,"w-10","h-10","flex","items-center","justify-center","rounded-full","border-2",3,"ngClass"],[1,"mt-2","text-sm","font-medium","text-center"],[1,"flex-1","border-t-2",3,"ngClass"],[1,"space-y-6",3,"ngSubmit","formGroup"],["class","space-y-6",4,"ngIf"],[1,"flex","justify-between","mt-10"],["type","button","class","px-6 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-100 font-semibold rounded-xl shadow",3,"click",4,"ngIf"],["type","button","class","ml-auto px-6 py-2 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl shadow",3,"click",4,"ngIf"],["type","submit","class","ml-auto px-6 py-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl shadow",3,"disabled",4,"ngIf"],[1,"fixed","inset-0","flex","items-center","justify-center","bg-gradient-to-br","from-green-900/80","via-black/80","to-green-950/80","backdrop-blur-md","z-50"],[1,"flex","flex-col","items-center","space-y-8"],[1,"relative"],[1,"w-24","h-24","rounded-full","border-4","border-transparent","border-t-green-400","animate-spin"],[1,"absolute","inset-4","bg-gradient-to-br","from-green-500","to-green-600","rounded-lg","shadow-lg","flex","items-center","justify-center"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke","currentColor",1,"w-8","h-8","text-white","animate-bounce"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M3 7l9-4 9 4-9 4-9-4zM3 17l9 4 9-4M3 12l9 4 9-4"],[1,"text-green-100","text-xl","font-bold","tracking-wide","animate-pulse"],[1,"w-64","h-3","bg-green-900","rounded-full","overflow-hidden","shadow-inner"],[1,"h-full","bg-gradient-to-r","from-green-400","to-green-600","animate-[progressFill_2s_infinite]"],[1,"space-y-6"],[1,"text-2xl","font-bold","text-green-600","dark:text-green-400","mb-4"],[1,"block","font-semibold","mb-1"],[1,"text-red-500"],["type","text","formControlName","name","placeholder","E.g., Golden Apples",1,"w-full","rounded-lg","border","px-4","py-2","bg-white","dark:bg-gray-800","text-gray-900","dark:text-gray-100","fancy-input","glass"],["formControlName","description","rows","3","placeholder","Briefly describe the product",1,"w-full","rounded-lg","border","px-4","py-2","bg-white","dark:bg-gray-800","text-gray-900","dark:text-gray-100","fancy-input","glass"],[1,"grid","grid-cols-1","md:grid-cols-3","gap-6"],["formControlName","category",1,"w-full","rounded-lg","border","px-4","py-2","bg-white","dark:bg-gray-800","text-gray-900","dark:text-gray-100"],["value","","disabled",""],[3,"value",4,"ngFor","ngForOf"],["type","text","formControlName","type","placeholder","E.g., Fuji",1,"w-full","rounded-lg","border","px-4","py-2","bg-white","dark:bg-gray-800","text-gray-900","dark:text-gray-100","fancy-input","glass"],["type","text","formControlName","variety","placeholder","E.g., Organic",1,"w-full","rounded-lg","border","px-4","py-2","bg-white","dark:bg-gray-800","text-gray-900","dark:text-gray-100","fancy-input","glass"],[3,"value"],["formControlName","grade",1,"w-full","rounded-lg","border","px-4","py-2","bg-white","dark:bg-gray-800","text-gray-900","dark:text-gray-100"],["type","number","formControlName","quantity","min","0",1,"w-full","rounded-lg","border","px-4","py-2","bg-white","dark:bg-gray-800","text-gray-900","dark:text-gray-100","fancy-input","glass"],["formControlName","unit",1,"w-full","rounded-lg","border","px-4","py-2","bg-white","dark:bg-gray-800","text-gray-900","dark:text-gray-100"],["type","number","formControlName","pricePerUnit","min","0","step","0.01",1,"w-full","rounded-lg","border","px-4","py-2","bg-white","dark:bg-gray-800","text-gray-900","dark:text-gray-100","fancy-input","glass"],[1,"flex","items-center","gap-3"],["type","checkbox","formControlName","availability",1,"h-5","w-5","text-green-600","rounded","focus:ring-green-500","border-gray-300","dark:border-gray-600","fancy-input","glass"],[1,"font-semibold"],[1,"grid","grid-cols-1","md:grid-cols-2","gap-6"],["formControlName","state",1,"w-full","rounded-lg","border","px-4","py-2","bg-white","dark:bg-gray-800","text-gray-900","dark:text-gray-100"],["formControlName","district",1,"w-full","rounded-lg","border","px-4","py-2","bg-white","dark:bg-gray-800","text-gray-900","dark:text-gray-100"],["type","date","formControlName","harvestDate",1,"w-full","rounded-lg","border","px-4","py-2","bg-white","dark:bg-gray-800","text-gray-900","dark:text-gray-100",3,"max"],["type","date","formControlName","expiryDate",1,"w-full","rounded-lg","border","px-4","py-2","bg-white","dark:bg-gray-800","text-gray-900","dark:text-gray-100",3,"min"],["type","file","multiple","",1,"block","w-full","text-sm","text-gray-500","file:mr-4","file:py-2","file:px-4","file:border-0","file:text-sm","file:font-semibold","file:bg-green-100","file:text-green-700","hover:file:bg-green-200",3,"change"],["type","button",1,"px-6","py-2","bg-gray-200","dark:bg-gray-700","hover:bg-gray-300","dark:hover:bg-gray-600","text-gray-800","dark:text-gray-100","font-semibold","rounded-xl","shadow",3,"click"],["type","button",1,"ml-auto","px-6","py-2","bg-green-500","hover:bg-green-600","text-white","font-bold","rounded-xl","shadow",3,"click"],["type","submit",1,"ml-auto","px-6","py-2","bg-green-600","hover:bg-green-700","text-white","font-bold","rounded-xl","shadow",3,"disabled"]],template:function(t,n){t&1&&(ze(0,op,11,0,"div",0),y(1,"div",1)(2,"div",2)(3,"h1",3),R(4," Add Your Fresh Product "),w(),y(5,"p",4),R(6," Please fill out the steps below to list your crop or item for sale. "),w()(),y(7,"div",5)(8,"div",6)(9,"div",7),R(10," 1 "),w(),y(11,"span",8),R(12,"Basic Info"),w()(),ce(13,"div",9),y(14,"div",6)(15,"div",7),R(16," 2 "),w(),y(17,"span",8),R(18,"Product Details"),w()(),ce(19,"div",9),y(20,"div",6)(21,"div",7),R(22," 3 "),w(),y(23,"span",8),R(24,"Ready to Sell"),w()()(),y(25,"form",10),it("ngSubmit",function(){return n.submitProduct()}),ze(26,lp,37,1,"div",11)(27,fp,53,4,"div",11)(28,pp,20,2,"div",11),y(29,"div",12),ze(30,mp,2,0,"button",13)(31,gp,2,0,"button",14)(32,_p,2,1,"button",15),w()()()),t&2&&(te("ngIf",n.loading),U(8),Li("text-green-600",n.currentStep===1),U(),te("ngClass",on(19,Cc,n.currentStep===1,n.currentStep!==1)),U(4),te("ngClass",on(22,Du,n.currentStep>=2,n.currentStep<2)),U(),Li("text-green-600",n.currentStep===2),U(),te("ngClass",on(25,Cc,n.currentStep===2,n.currentStep!==2)),U(4),te("ngClass",on(28,Du,n.currentStep>=3,n.currentStep<3)),U(),Li("text-green-600",n.currentStep===3),U(),te("ngClass",on(31,Cc,n.currentStep===3,n.currentStep!==3)),U(4),te("formGroup",n.productForm),U(),te("ngIf",n.currentStep===1),U(),te("ngIf",n.currentStep===2),U(),te("ngIf",n.currentStep===3),U(2),te("ngIf",n.currentStep>1),U(),te("ngIf",n.currentStep<3),U(),te("ngIf",n.currentStep===3))},dependencies:[Go,zi,Vo,Ho,Qn,ko,wu,zo,ei,Bi,Cu,Eu,Tu,Ft,gn,_n,an],styles:["@keyframes _ngcontent-%COMP%_progressFill{0%{width:0%}50%{width:70%}to{width:100%}}"]})};var jo=class i{constructor(e,t,n,r,s){this.loginService=e;this.alertService=t;this.router=n;this.platformId=r;this.userInfo=s}loginData={email:"",password:""};login(){this.loginService.login(this.loginData).subscribe({next:()=>{this.alertService.showAlert("Login successful!","success"),this.userInfo.getUserRole()==="FARMER"?this.router.navigate(["components/product"]):this.router.navigate(["/buyer"])},error:()=>{this.alertService.showAlert("Login failed! Please check your credentials.","error")}})}testSuccess(){this.alertService.showAlert("Test success alert!","success")}testError(){this.alertService.showAlert("Test error alert!","error")}static \u0275fac=function(t){return new(t||i)(Ae(Vi),Ae(Fn),Ae(ln),Ae(sn),Ae(kt))};static \u0275cmp=Mt({type:i,selectors:[["app-login"]],decls:47,vars:2,consts:[[1,"min-h-[calc(100vh-120px)]","w-full","flex","flex-col","lg:flex-row","overflow-auto","pt-4","pb-4","bg-gray-50"],[1,"lg:w-[60%]","w-full","bg-gradient-to-br","from-green-100","to-green-200","p-8","md:p-12","flex","flex-col","justify-center","items-center","text-center","relative","overflow-hidden"],[1,"absolute","top-[-60px]","right-[-60px]","w-80","h-80","bg-green-300","rounded-full","opacity-30","blur-3xl","animate-pulse","z-0"],[1,"z-10"],[1,"text-4xl","md:text-5xl","font-extrabold","text-green-800","mb-4","md:mb-6","drop-shadow-lg"],[1,"text-gray-700","text-base","md:text-lg","max-w-md","md:max-w-xl","leading-relaxed","px-2","backdrop-blur-sm"],[1,"text-green-700","font-semibold"],["src","images/logo.jpg","alt","AgriMandi Logo",1,"w-32","md:w-48","mt-6","md:mt-10","shadow-md","rounded-full","border-4","border-white"],[1,"lg:w-[40%]","w-full","flex","items-center","justify-center","bg-white","relative","overflow-hidden"],[1,"w-full","max-w-sm","sm:max-w-md","px-6","sm:px-8","py-10","backdrop-blur-xl","bg-white/80","shadow-2xl","rounded-2xl","border","border-gray-200","transition-transform","duration-300","hover:scale-[1.01]","animate-fade-in-slide"],[1,"text-3xl","font-bold","text-center","text-green-700","mb-6"],[1,"space-y-5",3,"ngSubmit"],["for","email",1,"block","text-sm","font-semibold","text-gray-700","mb-1"],["type","email","id","email","name","email","required","",1,"w-full","px-4","py-2","border","border-gray-300","rounded-md","text-sm","focus:outline-none","focus:ring-2","focus:ring-green-500","shadow-sm",3,"ngModelChange","ngModel"],["for","password",1,"block","text-sm","font-semibold","text-gray-700","mb-1"],["type","password","id","password","name","password","required","",1,"w-full","px-4","py-2","border","border-gray-300","rounded-md","text-sm","focus:outline-none","focus:ring-2","focus:ring-green-500","shadow-sm",3,"ngModelChange","ngModel"],["type","submit",1,"w-full","py-2","bg-green-600","hover:bg-green-700","text-white","text-base","font-medium","rounded-md","transition","duration-200","shadow-md"],[1,"text-sm","text-gray-500","text-center","mt-4"],["href","auth/signup",1,"text-green-600","font-medium","hover:underline"],[1,"flex","items-center","justify-center","my-4"],[1,"w-full","h-px","bg-gray-300"],[1,"mx-4","text-sm","text-gray-500"],[1,"space-y-3"],["type","button",1,"w-full","flex","items-center","justify-center","gap-3","py-2","px-4","border","border-gray-300","rounded-md","shadow-sm","bg-white","hover:bg-gray-100","transition"],["src","https://www.svgrepo.com/show/475656/google-color.svg","alt","Google",1,"w-5","h-5"],[1,"text-sm","font-medium","text-gray-700"],["src","https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/facebook.svg","alt","Facebook",1,"w-5","h-5","fill-blue-600"]],template:function(t,n){t&1&&(y(0,"div",0)(1,"div",1),ce(2,"div",2),y(3,"div",3)(4,"h1",4),R(5,"\u{1F33F} AgriMandi"),w(),y(6,"p",5),R(7," Empowering farmers and buyers with seamless crop trading. "),ce(8,"br"),R(9," Join "),y(10,"strong",6),R(11,"AgriMandi"),w(),R(12," and grow with the future of smart agriculture. "),w(),ce(13,"img",7),w()(),y(14,"div",8)(15,"div",9)(16,"h2",10),R(17,"Login to AgriMandi"),w(),y(18,"form",11),it("ngSubmit",function(){return n.login()}),y(19,"div")(20,"label",12),R(21,"Email"),w(),y(22,"input",13),lt("ngModelChange",function(s){return at(n.loginData.email,s)||(n.loginData.email=s),s}),w()(),y(23,"div")(24,"label",14),R(25,"Password"),w(),y(26,"input",15),lt("ngModelChange",function(s){return at(n.loginData.password,s)||(n.loginData.password=s),s}),w()(),y(27,"button",16),R(28," Login "),w(),y(29,"p",17),R(30," Don\u2019t have an account? "),y(31,"a",18),R(32,"Sign up"),w()()(),y(33,"div",19),ce(34,"div",20),y(35,"span",21),R(36,"OR"),w(),ce(37,"div",20),w(),y(38,"div",22)(39,"button",23),ce(40,"img",24),y(41,"span",25),R(42,"Continue with Google"),w()(),y(43,"button",23),ce(44,"img",26),y(45,"span",25),R(46,"Continue with Facebook"),w()()()()()()),t&2&&(U(22),ot("ngModel",n.loginData.email),U(4),ot("ngModel",n.loginData.password))},dependencies:[xn,zi,Qn,ei,Bi,zr,ki,kr],encapsulation:2})};var Xt=class i{constructor(e,t,n){this.loginService=e;this.userInfoService=t;this.router=n}checkLogin(e){let t=this.loginService.getToken();if(!t||!this.loginService.isLoggedIn())return this.router.parseUrl("/auth/login");if(this.userInfoService.isTokenExpired(t))return this.loginService.logout(),this.router.parseUrl("/auth/login");if(e&&e.length>0){let n=this.userInfoService.getUserRole();if(!n||!e.includes(n))return this.router.parseUrl("/unauthorized")}return!0}canActivate(e,t){let n=e.data.roles;return this.checkLogin(n)}canActivateChild(e,t){let n=e.data.roles;return this.checkLogin(n)}canLoad(e,t){let n=e.data?.roles;return this.checkLogin(n)}static \u0275fac=function(t){return new(t||i)(Jn(Vi),Jn(kt),Jn(ln))};static \u0275prov=rn({token:i,factory:i.\u0275fac,providedIn:"root"})};var xp=(i,e,t)=>({"bg-green-100 text-green-700":i,"bg-yellow-100 text-yellow-700":e,"bg-red-100 text-red-700":t}),vp=(i,e)=>({"bg-green-200 text-green-800":i,"bg-red-200 text-red-800":e});function yp(i,e){i&1&&(y(0,"div",4)(1,"div",5)(2,"div",6),ce(3,"div",7)(4,"div",8),w(),y(5,"p",9),R(6," \u{1F331} Fetching your products... "),w(),y(7,"div",10),ce(8,"div",11),w()()())}function bp(i,e){if(i&1&&(y(0,"div",14)(1,"h4",15),R(2),w(),y(3,"div",16)(4,"p")(5,"span",17),R(6,"Category:"),w(),R(7),w(),y(8,"p")(9,"span",17),R(10,"Grade:"),w(),R(11),w(),y(12,"p")(13,"span",17),R(14,"Quantity:"),w(),R(15),w(),y(16,"p")(17,"span",17),R(18,"Price/Unit:"),w(),R(19),w(),y(20,"p",18),R(21),w(),y(22,"p")(23,"span",17),R(24,"Status:"),w(),y(25,"span",19),R(26),w()(),y(27,"p")(28,"span",17),R(29,"Availability:"),w(),y(30,"span",20),R(31),w()()(),y(32,"div",21)(33,"button",22),R(34," Edit "),w(),y(35,"button",23),R(36," Delete "),w(),y(37,"button",24),R(38," Mark as Sold "),w()()()),i&2){let t=e.$implicit;U(2),At(" ",t.name," "),U(5),At(" ",t.category,""),U(4),At(" ",t.grade,""),U(4),Oo(" ",t.quantity," ",t.unit,""),U(4),At(" \u20B9",t.pricePerUnit,""),U(2),At(" Total: \u20B9",t.totalPrice," "),U(4),te("ngClass",pu(11,xp,t.status==="Approved",t.status==="Pending",t.status==="Rejected")),U(),At(" ",t.status," "),U(4),te("ngClass",on(15,vp,t.availability,!t.availability)),U(),At(" ",t.availability?"Available":"Not Available"," ")}}function Sp(i,e){if(i&1&&(Qt(0),y(1,"div",12),ze(2,bp,39,18,"div",13),w(),en()),i&2){let t=fe();U(2),te("ngForOf",t.products1)}}function Mp(i,e){if(i&1){let t=vt();y(0,"div",26)(1,"div",27),Po(),y(2,"svg",28),ce(3,"path",29),w()(),Do(),y(4,"p",30),R(5," No products found "),w(),y(6,"p",31),R(7," Add your first product to get started! "),w(),y(8,"button",32),it("click",function(){Be(t);let r=fe(2);return ke(r.openAddProductPage())}),R(9," + Add Product "),w()()}}function wp(i,e){if(i&1&&ze(0,Mp,10,0,"div",25),i&2){let t=fe();te("ngIf",!t.loading)}}var Zo=class i{constructor(e,t,n,r,s,o){this.router=e;this.productService=t;this.userService=n;this.alertService=r;this.userInfo=s;this.platformId=o;this.router.events.pipe(Di(a=>a instanceof Ni)).subscribe(()=>this.Collectlogindata())}ngOnInit(){this.Collectlogindata()}loading=!1;products1=[];loginData={isLoggedIn:!1,userName:"",userRole:"",userEmail:"",userid:0};Collectlogindata(){if(Bt(this.platformId)){let e=this.userInfo.getToken();this.loginData={isLoggedIn:!!e,userName:this.userInfo.getUserName()||"",userRole:this.userInfo.getUserRole()||"",userEmail:this.userInfo.getUserEmail()||"",userid:this.userInfo.getUserId()||0};let t=this.loginData.userid,n=this.loginData.userEmail,r=this.loginData.userRole;t&&n&&r==="FARMER"&&this.getProducts(t,n)}}getProducts(e,t){this.loading=!0,this.productService.getProductByFarmerId(e,t).subscribe({next:n=>{this.products1=n,this.loading=!1},error:n=>{this.alertService.showAlert("Error fetching products: ",n.message),this.loading=!1}})}openAddProductPage(){this.router.navigate(["/components/product"])}static \u0275fac=function(t){return new(t||i)(Ae(ln),Ae(Hr),Ae(Gr),Ae(Fn),Ae(kt),Ae(sn))};static \u0275cmp=Mt({type:i,selectors:[["app-self-productview"]],decls:6,vars:3,consts:[["noProducts",""],[1,"text-3xl","font-bold","mb-8","text-gray-900","dark:text-white","tracking-tight"],["class","fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md z-50",4,"ngIf"],[4,"ngIf","ngIfElse"],[1,"fixed","inset-0","flex","items-center","justify-center","bg-black","bg-opacity-50","backdrop-blur-md","z-50"],[1,"flex","flex-col","items-center","space-y-6"],[1,"relative"],[1,"w-20","h-20","rounded-full","border-4","border-transparent","border-t-green-500","animate-spin"],[1,"absolute","inset-0","rounded-full","border-4","border-green-400","opacity-30","blur-md"],[1,"text-white","text-lg","font-semibold","tracking-wide","animate-pulse"],[1,"w-48","h-2","bg-gray-700","rounded-full","overflow-hidden"],[1,"h-full","bg-green-500","animate-[progress_2s_infinite]"],[1,"grid","grid-cols-1","md:grid-cols-2","lg:grid-cols-3","gap-8"],["class","bg-white dark:bg-gray-800 shadow-md rounded-3xl p-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border border-gray-200 dark:border-gray-700",4,"ngFor","ngForOf"],[1,"bg-white","dark:bg-gray-800","shadow-md","rounded-3xl","p-6","transition-all","duration-300","hover:shadow-2xl","hover:-translate-y-1","border","border-gray-200","dark:border-gray-700"],[1,"text-xl","font-bold","text-gray-900","dark:text-white","mb-3"],[1,"text-gray-700","dark:text-gray-300","space-y-2","text-sm","md:text-base"],[1,"font-medium"],[1,"font-medium","text-gray-900","dark:text-gray-100"],[1,"ml-2","px-3","py-1","rounded-full","text-xs","font-semibold","tracking-wide",3,"ngClass"],[1,"ml-2","px-3","py-1","text-xs","font-semibold","rounded-full",3,"ngClass"],[1,"mt-6","flex","flex-wrap","gap-3"],[1,"px-4","py-2","bg-blue-600","text-white","text-sm","rounded-xl","shadow","hover:bg-blue-700","focus:ring-2","focus:ring-blue-400","transition"],[1,"px-4","py-2","bg-red-500","text-white","text-sm","rounded-xl","shadow","hover:bg-red-600","focus:ring-2","focus:ring-red-400","transition"],[1,"px-4","py-2","bg-green-600","text-white","text-sm","rounded-xl","shadow","hover:bg-green-700","focus:ring-2","focus:ring-green-400","transition"],["class","flex flex-col items-center justify-center py-16",4,"ngIf"],[1,"flex","flex-col","items-center","justify-center","py-16"],[1,"w-24","h-24","mb-6","text-gray-400"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke-width","1.5","stroke","currentColor",1,"w-full","h-full"],["stroke-linecap","round","stroke-linejoin","round","d","M21 12.75V6.75a2.25 2.25 0 00-2.25-2.25h-4.5A2.25 2.25 0 0012 6.75v6m0 0v6m0-6h6.75M12 12h-6.75"],[1,"text-lg","font-medium","text-gray-600","dark:text-gray-300"],[1,"text-sm","text-gray-400","dark:text-gray-500","mt-2"],[1,"mt-6","px-5","py-2","bg-green-600","text-white","rounded-xl","shadow","hover:bg-green-700","transition",3,"click"]],template:function(t,n){if(t&1&&(y(0,"h3",1),R(1,` Your Products
`),w(),ze(2,yp,9,0,"div",2)(3,Sp,3,1,"ng-container",3)(4,wp,1,1,"ng-template",null,0,Kn)),t&2){let r=pi(5);U(2),te("ngIf",n.loading),U(),te("ngIf",!n.loading&&n.products1.length>0)("ngIfElse",r)}},dependencies:[Ft,gn,_n,an,xn],encapsulation:2})};var Is=(i,e)=>({"bg-green-700 text-white shadow-md ring-2 ring-green-400":i,"bg-lime-100 text-green-800 hover:bg-lime-200":e}),Ep=i=>({label:"Phone Number",value:i}),Tp=i=>({label:"Alternate Contact",value:i}),Cp=i=>({label:"Address",value:i}),Ap=i=>({label:"City",value:i}),Rp=i=>({label:"State",value:i}),Ip=i=>({label:"Pincode",value:i}),Pp=i=>({label:"Land Area",value:i}),Dp=i=>({label:"Farming Type",value:i}),Uu=(i,e,t,n,r,s,o,a)=>[i,e,t,n,r,s,o,a],Lp=()=>({label:"Phone Number",name:"phoneNumber",type:"tel"}),Fp=()=>({label:"Address",name:"address"}),Up=()=>({label:"State",name:"state"}),Np=()=>({label:"District",name:"district"}),Op=()=>({label:"Village",name:"village"}),Bp=()=>({label:"Postal Code",name:"postalCode"}),kp=()=>({label:"Land Area (in acres)",name:"landArea",type:"number"}),zp=()=>({label:"Farming Type",name:"farmingType"}),Vp=i=>({background:i});function Hp(i,e){if(i&1){let t=vt();Qt(0),y(1,"button",8),it("click",function(){Be(t);let r=fe();return ke(r.activeTab="farm")}),ce(2,"i",13),y(3,"span"),R(4,"Land & Crops"),w()(),y(5,"button",8),it("click",function(){Be(t);let r=fe();return ke(r.activeTab="products")}),ce(6,"i",14),y(7,"span"),R(8,"Harvest Products"),w()(),en()}if(i&2){let t=fe();U(),te("ngClass",on(2,Is,t.activeTab==="farm",t.activeTab!=="farm")),U(4),te("ngClass",on(5,Is,t.activeTab==="products",t.activeTab!=="products"))}}function Gp(i,e){if(i&1){let t=vt();y(0,"div",16)(1,"div",17)(2,"div",18)(3,"div",19)(4,"div",20),ce(5,"img",21),y(6,"div",22)(7,"label",23),ce(8,"i",24),y(9,"input",25),it("change",function(r){Be(t);let s=fe(2);return ke(s.onFileSelect(r))}),w()()()(),y(10,"div",26)(11,"h2",27),R(12,"User Details"),w(),y(13,"div",28)(14,"p")(15,"span",29),R(16,"Name:"),w(),R(17),w(),y(18,"p")(19,"span",29),R(20,"Role:"),w(),R(21),w(),y(22,"p")(23,"span",29),R(24,"Email:"),w(),R(25),w()()()(),ce(26,"hr",30),w()()()}if(i&2){let t=fe(2);U(5),te("src",t.profileImageUrl||t.defaultProfileImage,dr),U(12),At(" ",t.loginData.userName," "),U(4),At(" ",t.loginData.userRole," "),U(4),At(" ",t.loginData.userEmail," ")}}function Wp(i,e){if(i&1&&(y(0,"div"),ze(1,Gp,27,4,"div",15),w()),i&2){let t=fe(),n=pi(24);U(),te("ngIf",t.loginData==null?null:t.loginData.isLoggedIn)("ngIfElse",n)}}function Xp(i,e){i&1&&(y(0,"div",31),ce(1,"i",32),R(2," You are not logged in. "),w())}function qp(i,e){i&1&&(y(0,"div"),ce(1,"app-self-productview"),w())}function Yp(i,e){if(i&1){let t=vt();y(0,"div",42)(1,"div",43)(2,"h3",44),R(3,"Your Farmer Profile"),w(),y(4,"button",45),it("click",function(){Be(t);let r=fe(3);return ke(r.onEditProfile())}),ce(5,"i",46),R(6," Edit Profile "),w()()()}}function $p(i,e){if(i&1&&(Qt(0),y(1,"div",47)(2,"p",48),R(3),w(),y(4,"p",49),R(5),w()(),en()),i&2){let t=e.$implicit;U(3),At("",t.label," "),U(2),wt(t.value||"N/A")}}function jp(i,e){if(i&1){let t=vt();Qt(0),y(1,"div",50)(2,"label",51),R(3),w(),y(4,"input",52),lt("ngModelChange",function(r){let s=Be(t).$implicit,o=fe(3);return at(o.farmerForm[s.name],r)||(o.farmerForm[s.name]=r),ke(r)}),w()(),en()}if(i&2){let t=e.$implicit,n=fe(3);U(3),wt(t.label),U(),Lo("name",t.name),ot("ngModel",n.farmerForm[t.name]),te("type",t.type||"text")}}function Zp(i,e){if(i&1){let t=vt();y(0,"div"),ze(1,Yp,7,0,"div",33),y(2,"div",34),ze(3,$p,6,2,"ng-container",35),w(),y(4,"div",36)(5,"h3",37),R(6,"Update Farmer Profile"),w(),y(7,"form",38,1),it("ngSubmit",function(){Be(t);let r=fe(2);return ke(r.submitFarmerForm())}),ze(9,jp,5,4,"ng-container",35),y(10,"div",39)(11,"button",40),ce(12,"i",41),R(13," Save Profile "),w()()()()()}if(i&2){let t=fe(2);U(),te("ngIf",t.farmerData),U(2),te("ngForOf",bc(20,Uu,Wt(4,Ep,t.farmerData.phoneNumber),Wt(6,Tp,t.farmerData.phoneNumber),Wt(8,Cp,t.farmerData.address),Wt(10,Ap,t.farmerData.district),Wt(12,Rp,t.farmerData.state),Wt(14,Ip,t.farmerData.postalCode),Wt(16,Pp,t.farmerData.landArea+" acres"),Wt(18,Dp,t.farmerData.farmingType))),U(6),te("ngForOf",bc(37,Uu,bn(29,Lp),bn(30,Fp),bn(31,Up),bn(32,Np),bn(33,Op),bn(34,Bp),bn(35,kp),bn(36,zp))),U(2),te("ngStyle",Wt(46,Vp,t.selectedColor))}}function Jp(i,e){if(i&1&&(Qt(0),ze(1,qp,2,0,"div",11)(2,Zp,14,48,"div",11),en()),i&2){let t=fe();U(),te("ngIf",t.activeTab==="products"),U(),te("ngIf",t.activeTab==="personal")}}function Kp(i,e){if(i&1){let t=vt();Qt(0),y(1,"h3",53),R(2,"Update Buyer Details"),w(),y(3,"form",54),it("ngSubmit",function(){Be(t);let r=fe();return ke(r.submitBuyerForm())}),y(4,"div",50)(5,"label",51),R(6,"Contact Number"),w(),y(7,"input",55),lt("ngModelChange",function(r){Be(t);let s=fe();return at(s.buyerForm.contactNumber,r)||(s.buyerForm.contactNumber=r),ke(r)}),w()(),y(8,"div",50)(9,"label",51),R(10,"Alternate Contact"),w(),y(11,"input",56),lt("ngModelChange",function(r){Be(t);let s=fe();return at(s.buyerForm.alternateContact,r)||(s.buyerForm.alternateContact=r),ke(r)}),w()(),y(12,"div",50)(13,"label",51),R(14,"Address"),w(),y(15,"input",57),lt("ngModelChange",function(r){Be(t);let s=fe();return at(s.buyerForm.address,r)||(s.buyerForm.address=r),ke(r)}),w()(),y(16,"div",50)(17,"label",51),R(18,"City"),w(),y(19,"input",58),lt("ngModelChange",function(r){Be(t);let s=fe();return at(s.buyerForm.city,r)||(s.buyerForm.city=r),ke(r)}),w()(),y(20,"div",50)(21,"label",51),R(22,"State"),w(),y(23,"input",59),lt("ngModelChange",function(r){Be(t);let s=fe();return at(s.buyerForm.state,r)||(s.buyerForm.state=r),ke(r)}),w()(),y(24,"div",50)(25,"label",51),R(26,"Pincode"),w(),y(27,"input",60),lt("ngModelChange",function(r){Be(t);let s=fe();return at(s.buyerForm.pincode,r)||(s.buyerForm.pincode=r),ke(r)}),w()(),y(28,"div",50)(29,"label",51),R(30,"Country"),w(),y(31,"input",61),lt("ngModelChange",function(r){Be(t);let s=fe();return at(s.buyerForm.country,r)||(s.buyerForm.country=r),ke(r)}),w()(),y(32,"div",50)(33,"label",51),R(34,"Company Name"),w(),y(35,"input",62),lt("ngModelChange",function(r){Be(t);let s=fe();return at(s.buyerForm.companyName,r)||(s.buyerForm.companyName=r),ke(r)}),w()(),y(36,"div",50)(37,"label",51),R(38,"Company Type"),w(),y(39,"input",63),lt("ngModelChange",function(r){Be(t);let s=fe();return at(s.buyerForm.companyType,r)||(s.buyerForm.companyType=r),ke(r)}),w()(),y(40,"div",50)(41,"label",51),R(42,"GST Number"),w(),y(43,"input",64),lt("ngModelChange",function(r){Be(t);let s=fe();return at(s.buyerForm.gstNumber,r)||(s.buyerForm.gstNumber=r),ke(r)}),w()(),y(44,"div",50)(45,"label",51),R(46,"PAN Number"),w(),y(47,"input",65),lt("ngModelChange",function(r){Be(t);let s=fe();return at(s.buyerForm.panNumber,r)||(s.buyerForm.panNumber=r),ke(r)}),w()(),y(48,"div",50)(49,"label",51),R(50,"Preferred Crops"),w(),y(51,"input",66),lt("ngModelChange",function(r){Be(t);let s=fe();return at(s.buyerForm.preferredCrops,r)||(s.buyerForm.preferredCrops=r),ke(r)}),w()(),y(52,"div",50)(53,"label",51),R(54,"Budget Range"),w(),y(55,"input",67),lt("ngModelChange",function(r){Be(t);let s=fe();return at(s.buyerForm.budgetRange,r)||(s.buyerForm.budgetRange=r),ke(r)}),w()(),y(56,"div",50)(57,"label",51),R(58,"Purchase Frequency"),w(),y(59,"input",68),lt("ngModelChange",function(r){Be(t);let s=fe();return at(s.buyerForm.purchaseFrequency,r)||(s.buyerForm.purchaseFrequency=r),ke(r)}),w()(),y(60,"div",50)(61,"label",51),R(62,"Preferred Payment Method"),w(),y(63,"input",69),lt("ngModelChange",function(r){Be(t);let s=fe();return at(s.buyerForm.preferredPaymentMethod,r)||(s.buyerForm.preferredPaymentMethod=r),ke(r)}),w()(),y(64,"div",50)(65,"label",51),R(66,"Geo Latitude"),w(),y(67,"input",70),lt("ngModelChange",function(r){Be(t);let s=fe();return at(s.buyerForm.geoLat,r)||(s.buyerForm.geoLat=r),ke(r)}),w()(),y(68,"div",50)(69,"label",51),R(70,"Geo Longitude"),w(),y(71,"input",71),lt("ngModelChange",function(r){Be(t);let s=fe();return at(s.buyerForm.geoLong,r)||(s.buyerForm.geoLong=r),ke(r)}),w()(),y(72,"div",50)(73,"label",51),R(74,"Total Orders"),w(),y(75,"input",72),lt("ngModelChange",function(r){Be(t);let s=fe();return at(s.buyerForm.totalOrders,r)||(s.buyerForm.totalOrders=r),ke(r)}),w()(),y(76,"div",50)(77,"label",51),R(78,"Total Spent"),w(),y(79,"input",73),lt("ngModelChange",function(r){Be(t);let s=fe();return at(s.buyerForm.totalSpent,r)||(s.buyerForm.totalSpent=r),ke(r)}),w()(),y(80,"div",50)(81,"label",51),R(82,"Loyalty Points"),w(),y(83,"input",74),lt("ngModelChange",function(r){Be(t);let s=fe();return at(s.buyerForm.loyaltyPoints,r)||(s.buyerForm.loyaltyPoints=r),ke(r)}),w()(),y(84,"div",50)(85,"label",51),R(86,"Buyer Rating"),w(),y(87,"input",75),lt("ngModelChange",function(r){Be(t);let s=fe();return at(s.buyerForm.buyerRating,r)||(s.buyerForm.buyerRating=r),ke(r)}),w()(),y(88,"div",50)(89,"label",51),R(90,"Last Purchase Date"),w(),y(91,"input",76),lt("ngModelChange",function(r){Be(t);let s=fe();return at(s.buyerForm.lastPurchaseDate,r)||(s.buyerForm.lastPurchaseDate=r),ke(r)}),w()(),y(92,"div",39)(93,"button",77),ce(94,"i",78),R(95," Save Buyer Profile "),w()()(),en()}if(i&2){let t=fe();U(7),ot("ngModel",t.buyerForm.contactNumber),U(4),ot("ngModel",t.buyerForm.alternateContact),U(4),ot("ngModel",t.buyerForm.address),U(4),ot("ngModel",t.buyerForm.city),U(4),ot("ngModel",t.buyerForm.state),U(4),ot("ngModel",t.buyerForm.pincode),U(4),ot("ngModel",t.buyerForm.country),U(4),ot("ngModel",t.buyerForm.companyName),U(4),ot("ngModel",t.buyerForm.companyType),U(4),ot("ngModel",t.buyerForm.gstNumber),U(4),ot("ngModel",t.buyerForm.panNumber),U(4),ot("ngModel",t.buyerForm.preferredCrops),U(4),ot("ngModel",t.buyerForm.budgetRange),U(4),ot("ngModel",t.buyerForm.purchaseFrequency),U(4),ot("ngModel",t.buyerForm.preferredPaymentMethod),U(4),ot("ngModel",t.buyerForm.geoLat),U(4),ot("ngModel",t.buyerForm.geoLong),U(4),ot("ngModel",t.buyerForm.totalOrders),U(4),ot("ngModel",t.buyerForm.totalSpent),U(4),ot("ngModel",t.buyerForm.loyaltyPoints),U(4),ot("ngModel",t.buyerForm.buyerRating),U(4),ot("ngModel",t.buyerForm.lastPurchaseDate)}}function Qp(i,e){i&1&&(y(0,"div",79)(1,"h4",80),R(2,"You are not logged in."),w(),y(3,"p"),R(4,"Please log in to view your dashboard."),w()())}var Jo=class i{constructor(e,t,n,r,s,o,a){this.router=e;this.productService=t;this.userService=n;this.alertService=r;this.platformId=s;this.colorService=o;this.userInfo=a;this.router.events.pipe(Di(l=>l instanceof Ni)).subscribe(()=>this.Collectlogindata())}profileImageUrl="";defaultProfileImage="images/profile.jpeg";products1=[];buyerData={isVerified:!1,alternateContact:"",emailVerified:!1,phoneVerified:!1,address:"",city:"",state:"",country:"",pincode:"",geoLat:0,geoLong:0,companyName:"",companyType:"",gstNumber:"",panNumber:"",preferredCrops:"",budgetRange:"",purchaseFrequency:"",preferredPaymentMethod:"",lastPurchaseDate:"",totalOrders:0,totalSpent:0,loyaltyPoints:0,buyerRating:0};buyerid=0;loginData={isLoggedIn:!1,userName:"",userRole:"",userEmail:"",userid:0};activeTab="personal";isLoggedIn=!1;showBuyerForm=!1;buyerForm={user_id:0,contactNumber:"",alternateContact:"",emailVerified:!0,phoneVerified:!1,address:"",city:"",state:"",country:"India",pincode:"",geoLat:0,geoLong:0,companyName:"",companyType:"",gstNumber:"",panNumber:"",isVerified:!1,preferredCrops:"",budgetRange:"",purchaseFrequency:"",preferredPaymentMethod:"",lastPurchaseDate:new Date,totalOrders:0,totalSpent:0,loyaltyPoints:0,buyerRating:5};farmerForm={phoneNumber:null,address:null,state:null,district:null,village:null,postalCode:null,landArea:null,farmingType:"Conventional",farmerId:null};farmerData={name:"",email:"",phoneNumber:"",address:"",state:"",district:"",village:"",postalCode:"",landArea:0,farmingType:"",status:""};submitFarmerForm(){let e=this.loginData.userEmail,t=this.loginData.userName,n=Number(this.loginData.userid);e&&t&&n?this.userService.getFarmerId(e,t).subscribe({next:r=>{this.farmerForm.farmerId=Number(r);let s=Zn(dt({},this.farmerForm),{userId:n});this.userService.saveFarmer(s).subscribe({next:o=>{o.success?this.alertService.handleBackendResponse(o):alert("Unexpected response"),o.success?this.alertService.handleBackendResponse(o):alert("Unexpected response")},error:o=>{this.alertService.showAlert("Error saving farmer:",o),this.alertService.showAlert("Error saving farmer data","error")}})},error:r=>{this.alertService.showAlert("Error fetching farmer ID:","error"),this.alertService.showAlert("Could not fetch farmer ID","error")}}):this.alertService.showAlert("User information is missing. Please login again.","error")}fetchFarmerData(){this.userService.getFarmerData().subscribe({next:e=>{this.farmerData=e,console.log("Farmer data retrieved:",this.farmerData)},error:e=>{this.alertService.showAlert("Error fetching farmer data:","error")}})}selectedColor="";ngOnInit(){if(Bt(this.platformId)){if(this.loginData){this.loginData.userRole==="FARMER"?this.fetchFarmerData():this.loginData.userRole==="BUYER"&&this.fetchbuyer_id();let e=Number(this.userInfo.getUserId());e&&this.getProfileImage(e)}this.colorService.selectedColor$.subscribe(e=>{this.selectedColor=e})}}fetchbuyer_id(){this.userService.Getbuyerid(this.loginData.userid).subscribe({next:e=>{this.buyerid=e,console.log("\u2705 Buyer ID retrieved:",this.buyerid),this.buyerid?this.fetchBuyerData():this.alertService.showAlert("\u274C Buyer ID is null or undefined","error")},error:e=>{this.alertService.showAlert("Error fetching buyer ID:",e)}})}fetchBuyerData(){this.userService.GetBuyerById(this.buyerid).subscribe({next:e=>{this.buyerData=e,console.log("\u2705 Buyer data retrieved:",this.buyerData)},error:e=>{this.alertService.showAlert("Error fetching buyer data:",e)}})}Collectlogindata(){if(Bt(this.platformId)){let e=this.userInfo.getToken();this.loginData={isLoggedIn:!!e,userName:this.userInfo.getUserName()||"",userRole:this.userInfo.getUserRole()||"",userEmail:this.userInfo.getUserEmail()||"",userid:this.userInfo.getUserId()||0};let t=this.loginData.userid,n=this.loginData.userEmail,r=this.loginData.userRole;t&&n&&(r==="FARMER"&&this.fetchFarmerData(),this.buyerForm.user_id=t)}}openBuyerForm(){this.showBuyerForm=!0}submitBuyerForm(){this.userService.registerAsBuyer(this.buyerForm).subscribe({next:e=>{this.alertService.showAlert("Buyer registered successfully:","success"),this.alertService.showAlert("You are now registered as a Buyer!","success"),this.showBuyerForm=!1},error:e=>{this.alertService.showAlert("Error registering buyer:",e),this.alertService.showAlert("Error registering buyer","error")}})}saveProfileImage(e){if(Bt(this.platformId)){let t=Number(this.userInfo.getUserId());t!==0&&e?this.userService.uploadProfileImage(e,t).subscribe({next:n=>{n.success?(this.alertService.showAlert("Profile image saved successfully.","success"),this.getProfileImage(t)):this.alertService.showAlert("Failed to save profile image.","error")},error:n=>{this.alertService.showAlert("Error saving profile image:",n)}}):this.alertService.showAlert("User ID is invalid or no file selected.","error")}}getProfileImage(e){this.userService.getProfileImage(e).subscribe({next:t=>{let n=new FileReader;n.onload=()=>{this.profileImageUrl=n.result},n.readAsDataURL(t)},error:t=>{console.error("Error fetching profile image:",t),this.profileImageUrl=this.defaultProfileImage}})}onFileSelect(e){let t=e.target.files[0];t&&this.saveProfileImage(t)}onEditProfile(){console.log("Edit Profile Clicked")}static \u0275fac=function(t){return new(t||i)(Ae(ln),Ae(Hr),Ae(Gr),Ae(Fn),Ae(sn),Ae(cn),Ae(kt))};static \u0275cmp=Mt({type:i,selectors:[["app-profileview"]],decls:29,vars:16,consts:[["notLoggedIn",""],["farmerFormRef","ngForm"],[1,"container","mx-auto","p-4"],[1,"text-3xl","font-extrabold","text-green-800","mb-6","-ml-16","flex","items-center","gap-3"],[1,"bi","bi-person-badge-fill","text-green-600","text-2xl"],[1,"tracking-wide"],[1,"text-lime-600"],[1,"flex","flex-wrap","justify-start","gap-3","border-b","border-green-300","pb-3","mb-6"],[1,"px-6","py-2.5","rounded-full","text-sm","font-semibold","flex","items-center","gap-2","transition","duration-200","ease-in-out","focus:outline-none",3,"click","ngClass"],[1,"bi","bi-person-fill"],[1,"bi","bi-geo-alt-fill"],[4,"ngIf"],[1,"bi","bi-truck"],[1,"bi","bi-tree-fill"],[1,"bi","bi-basket-fill"],["class","container-fluid px-4 py-5",4,"ngIf","ngIfElse"],[1,"container-fluid","px-4","py-5"],[1,"row"],[1,"w-full","bg-white/80","dark:bg-gray-800/80","backdrop-blur-lg","rounded-3xl","shadow-xl","border","border-gray-200","dark:border-gray-700","p-8","mt-5"],[1,"grid","grid-cols-1","md:grid-cols-3","gap-8","items-center"],[1,"relative","mx-auto","md:mx-0","w-48","h-48","group"],["alt","Profile Image",1,"w-full","h-full","object-cover","rounded-full","border-4","border-white","shadow-lg","transition","duration-300","group-hover:brightness-75",3,"src"],[1,"absolute","inset-0","flex","items-center","justify-center","bg-black/50","rounded-full","opacity-0","group-hover:opacity-100","transition-opacity","duration-300"],[1,"text-white","cursor-pointer","flex","flex-col","items-center"],[1,"bi","bi-camera-fill","text-3xl","mb-1"],["type","file","hidden","",3,"change"],[1,"md:col-span-2","text-center","md:text-left","space-y-4"],[1,"text-3xl","font-bold","text-gray-800","dark:text-gray-100"],[1,"text-lg","text-gray-700","dark:text-gray-300","space-y-2"],[1,"font-medium","text-gray-900","dark:text-gray-100"],[1,"my-5"],[1,"alert","alert-warning","text-center","p-4","shadow-sm","rounded"],[1,"bi","bi-exclamation-triangle-fill","me-2"],["class","mt-10",4,"ngIf"],[1,"grid","grid-cols-1","sm:grid-cols-2","md:grid-cols-3","gap-6"],[4,"ngFor","ngForOf"],[1,"card","shadow","border-0","rounded-4","p-4","my-5"],[1,"mb-4","text-center","fw-bold","text-success"],["novalidate","",1,"row","g-3","needs-validation",3,"ngSubmit"],[1,"col-12","text-center","mt-3"],["type","submit",1,"btn","px-5","py-2","fs-5","rounded-pill","shadow-sm","text-white","border-0",3,"ngStyle"],[1,"bi","bi-check-circle","me-2"],[1,"mt-10"],[1,"flex","items-center","justify-between","mb-6"],[1,"text-3xl","font-semibold","text-gray-800","dark:text-white"],[1,"bg-green-600","hover:bg-green-700","text-white","px-5","py-2","rounded-lg","shadow-md","transition","duration-300",3,"click"],[1,"bi","bi-pencil-square","mr-2"],[1,"bg-white","dark:bg-gray-800","border","border-gray-200","dark:border-gray-700","rounded-2xl","shadow-sm","p-4","transition","duration-300","hover:shadow-md"],[1,"text-sm","text-gray-500","dark:text-gray-400","uppercase","tracking-wide","font-medium"],[1,"mt-1","text-lg","font-semibold","text-gray-800","dark:text-white"],[1,"col-md-4"],[1,"form-label","fw-semibold"],["required","",1,"form-control","rounded-3",3,"ngModelChange","ngModel","name","type"],[1,"text-3xl","mb-4","fw-semibold"],[1,"row","g-3",3,"ngSubmit"],["name","contactNumber","required","",1,"form-control","rounded-3",3,"ngModelChange","ngModel"],["name","alternateContact",1,"form-control",3,"ngModelChange","ngModel"],["name","address","required","",1,"form-control",3,"ngModelChange","ngModel"],["name","city",1,"form-control",3,"ngModelChange","ngModel"],["name","state",1,"form-control",3,"ngModelChange","ngModel"],["name","pincode",1,"form-control",3,"ngModelChange","ngModel"],["name","country",1,"form-control",3,"ngModelChange","ngModel"],["name","companyName",1,"form-control",3,"ngModelChange","ngModel"],["name","companyType",1,"form-control",3,"ngModelChange","ngModel"],["name","gstNumber",1,"form-control",3,"ngModelChange","ngModel"],["name","panNumber",1,"form-control",3,"ngModelChange","ngModel"],["name","preferredCrops",1,"form-control",3,"ngModelChange","ngModel"],["name","budgetRange",1,"form-control",3,"ngModelChange","ngModel"],["name","purchaseFrequency",1,"form-control",3,"ngModelChange","ngModel"],["name","preferredPaymentMethod",1,"form-control",3,"ngModelChange","ngModel"],["type","number","name","geoLat",1,"form-control",3,"ngModelChange","ngModel"],["type","number","name","geoLong",1,"form-control",3,"ngModelChange","ngModel"],["type","number","name","totalOrders",1,"form-control",3,"ngModelChange","ngModel"],["type","number","name","totalSpent",1,"form-control",3,"ngModelChange","ngModel"],["type","number","name","loyaltyPoints",1,"form-control",3,"ngModelChange","ngModel"],["type","number","name","buyerRating","step","0.1",1,"form-control",3,"ngModelChange","ngModel"],["type","date","name","lastPurchaseDate",1,"form-control",3,"ngModelChange","ngModel"],["type","submit",1,"btn","btn-primary","px-5","py-2","fs-5","rounded-pill","shadow-sm"],[1,"bi","bi-save2","me-2"],[1,"text-center","mt-5"],[1,"text-danger"]],template:function(t,n){if(t&1){let r=vt();y(0,"div",2)(1,"h2",3),ce(2,"i",4),y(3,"span",5),R(4,"My "),y(5,"span",6),R(6,"AgriMandi"),w(),R(7," Profile"),w()()(),y(8,"div",7)(9,"button",8),it("click",function(){return Be(r),ke(n.activeTab="personal")}),ce(10,"i",9),y(11,"span"),R(12,"My Profile"),w()(),y(13,"button",8),it("click",function(){return Be(r),ke(n.activeTab="address")}),ce(14,"i",10),y(15,"span"),R(16,"Farm Address"),w()(),ze(17,Hp,9,8,"ng-container",11),y(18,"button",8),it("click",function(){return Be(r),ke(n.activeTab="orders")}),ce(19,"i",12),y(20,"span"),R(21,"Order Requests"),w()()(),ze(22,Wp,2,2,"div",11)(23,Xp,3,0,"ng-template",null,0,Kn)(25,Jp,3,2,"ng-container",11)(26,Kp,96,22,"ng-container",11)(27,Qp,5,0,"ng-template",null,0,Kn)}t&2&&(U(9),te("ngClass",on(7,Is,n.activeTab==="personal",n.activeTab!=="personal")),U(4),te("ngClass",on(10,Is,n.activeTab==="address",n.activeTab!=="address")),U(4),te("ngIf",n.loginData.userRole==="FARMER"),U(),te("ngClass",on(13,Is,n.activeTab==="orders",n.activeTab!=="orders")),U(4),te("ngIf",n.activeTab==="personal"),U(3),te("ngIf",n.loginData.userRole==="FARMER"),U(),te("ngIf",n.loginData.userRole==="BUYER"||n.showBuyerForm))},dependencies:[Ft,gn,_n,an,Fi,xn,zi,Qn,ko,ei,Bi,zr,ki,kr,Zo],encapsulation:2})};var Nu=[{path:"",component:Yo},{path:"auth/signup",component:Xo},{path:"auth/login",component:jo},{path:"components/product",component:$o,canActivate:[Xt],data:{roles:["FARMER","BUYER","ADMIN"]}},{path:"components/profileview",component:Jo,canActivate:[Xt],data:{roles:["FARMER","BUYER","ADMIN"]}},{path:"products",loadComponent:()=>import("./chunk-7MTM7SGR.js").then(i=>i.ProductinventoryComponent),canActivate:[Xt],data:{roles:["FARMER","BUYER","ADMIN"]}},{path:"products/:productid",loadComponent:()=>import("./chunk-N7QJCVWJ.js").then(i=>i.SingleProductViewComponent),canActivate:[Xt],data:{roles:["FARMER","BUYER","ADMIN"]}},{path:"buyer",loadComponent:()=>import("./chunk-LN4MZH55.js").then(i=>i.BuyerComponent),canActivate:[Xt],data:{roles:["FARMER","BUYER","ADMIN"]}},{path:"buyer/:buyerid",loadComponent:()=>import("./chunk-DUGF4AXX.js").then(i=>i.SingelbuyerviewComponent),canActivate:[Xt],data:{roles:["FARMER","BUYER","ADMIN"]}},{path:"notifications",loadComponent:()=>import("./chunk-64KQFYLX.js").then(i=>i.NotificationComponent),canActivate:[Xt],data:{roles:["FARMER","BUYER","ADMIN"]}},{path:"orders",loadComponent:()=>import("./chunk-53ILSACL.js").then(i=>i.OrdersComponent),canActivate:[Xt],data:{roles:["FARMER","BUYER","ADMIN"]}},{path:"payments",loadComponent:()=>import("./chunk-7U3QZU27.js").then(i=>i.PaymentsComponent),canActivate:[Xt],data:{roles:["FARMER","BUYER","ADMIN"]}},{path:"messages",loadComponent:()=>import("./chunk-E3QW2NI3.js").then(i=>i.MessageComponent),canActivate:[Xt],data:{roles:["BUYER","FARMER","ADMIN"]}},{path:"help-center",loadComponent:()=>import("./chunk-ULRGACRU.js").then(i=>i.HelpCenterComponent),canActivate:[Xt],data:{roles:["BUYER","FARMER","ADMIN"]}},{path:"mandi-rates",loadComponent:()=>import("./chunk-DYBXH7EG.js").then(i=>i.MandiRatesComponent),canActivate:[Xt],data:{roles:["FARMER","BUYER","ADMIN"]}},{path:"farmers",loadComponent:()=>import("./chunk-6YE2XPRD.js").then(i=>i.FarmersComponent),canActivate:[Xt],data:{roles:["FARMER","BUYER","ADMIN"]}},{path:"reports",loadComponent:()=>import("./chunk-FRURN42F.js").then(i=>i.ReportsComponent),canActivate:[Xt],data:{roles:["FARMER","BUYER","ADMIN"]}},{path:"settings",loadComponent:()=>import("./chunk-S57PHZEC.js").then(i=>i.SettingComponent),canActivate:[Xt],data:{roles:["ADMIN","BUYER","FARMER"]}},{path:"product-buy",loadComponent:()=>import("./chunk-6A4A3YYS.js").then(i=>i.ProductBuyComponent),canActivate:[Xt],data:{roles:["ADMIN","BUYER","FARMER"]}},{path:"**",redirectTo:""}];var Ac=new cu("TRANSLATE_HTTP_LOADER_CONFIG"),em=(()=>{class i{http;config;constructor(){this.config=dt({prefix:"/assets/i18n/",suffix:".json",enforceLoading:!1,useHttpBackend:!1},Io(Ac)),this.http=this.config.useHttpBackend?new Ui(Io(Sc)):Io(Ui)}getTranslation(t){let n=this.config.enforceLoading?`?enforceLoading=${Date.now()}`:"";return this.http.get(`${this.config.prefix}${t}${this.config.suffix}${n}`)}static \u0275fac=function(n){return new(n||i)};static \u0275prov=rn({token:i,factory:i.\u0275fac})}return i})();function Ou(i={}){let e=i.useHttpBackend??!1;return[{provide:Ac,useValue:i},{provide:Ru,useClass:em,deps:[e?Sc:Ui,Ac]}]}var Bu={providers:[gu({eventCoalescing:!0}),Mu(Nu),yu(),_u(xu([])),hu(xn,Go,Iu.forRoot()),...Ou({prefix:"./assets/i18n/",suffix:".json"})]};var tm=(i,e)=>({"bg-[#00ffee]/10":i,"hover:bg-[#00ffee]/10":e});function nm(i,e){if(i&1){let t=vt();y(0,"button",7),it("click",function(){Be(t);let r=fe();return r.query="",r.results=[],ke(r.highlightedIndex=-1)}),R(1," \u2715 "),w()}}function im(i,e){if(i&1&&ce(0,"i"),i&2){let t=fe().$implicit;Cs(t.icon+" text-[#00b8aa] text-lg")}}function rm(i,e){if(i&1){let t=vt();y(0,"li",12),it("click",function(){let r=Be(t).$implicit,s=fe(3);return ke(s.selectItem(r))}),ze(1,im,1,2,"i",13),y(2,"span",14),R(3),w()()}if(i&2){let t=e.$implicit,n=e.index,r=fe(3);te("ngClass",on(3,tm,r.isHighlighted(n),!r.isHighlighted(n))),U(),te("ngIf",t.icon),U(2),wt(t.label)}}function sm(i,e){if(i&1&&(y(0,"ul",10),ze(1,rm,4,6,"li",11),w()),i&2){let t=fe(2);U(),te("ngForOf",t.results)}}function om(i,e){i&1&&(y(0,"div",15),R(1," \u{1F6AB} No results found "),w())}function am(i,e){if(i&1&&(y(0,"div",8),ze(1,sm,2,1,"ul",9)(2,om,2,0,"ng-template",null,0,Kn),w()),i&2){let t=pi(3),n=fe();U(),te("ngIf",n.results.length>0)("ngIfElse",t)}}var Ko=class i{constructor(e,t){this.router=e;this.userInfo=t;this.userInfo.getUserRole()==="FARMER"&&this.coreLinks.push({label:"Add Product",path:"/components/product",icon:"bi bi-plus-circle"}),this.allItems=[...this.otherItems,...this.coreLinks]}ngOnInit(){}query="";results=[];highlightedIndex=-1;coreLinks=[{label:"Home",path:"/",icon:"bi bi-house-door-fill"},{label:"Mandi Rates",path:"/mandi-rates",icon:"bi bi-graph-up"},{label:"Products",path:"/products",icon:"bi bi-box-seam"},{label:"Chat with Farmer/Buyer",path:"/messages",icon:"bi bi-chat-dots-fill"},{label:"Buyers",path:"/buyer",icon:"bi bi-person-badge-fill"},{label:"Settings",path:"/settings",icon:"bi bi-gear-fill"},{label:"Orders",path:"/orders",icon:"bi bi-bag-check-fill"},{label:"Payments",path:"/payments",icon:"bi bi-cash-stack"},{label:"Reports",path:"/reports",icon:"bi bi-clipboard-data-fill"},{label:"Help Center",path:"/help-center",icon:"bi bi-info-circle-fill"}];otherItems=[{label:"Wheat"},{label:"Rice"},{label:"Mango"},{label:"Farmer: Ramesh"},{label:"Buyer: Vikash"},{label:"Product Dashboard"},{label:"Orders Tab"}];allItems=[];onSearch(){if(!this.query.trim()){this.results=[],this.highlightedIndex=-1;return}this.results=this.allItems.filter(e=>e.label.toLowerCase().includes(this.query.toLowerCase())),this.highlightedIndex=-1}selectItem(e){this.query="",this.results=[],this.highlightedIndex=-1,e.path?this.router.navigate([e.path]):console.log("Selected:",e.label)}handleKeyDown(e){this.results.length&&(e.key==="ArrowDown"?(e.preventDefault(),this.highlightedIndex=(this.highlightedIndex+1)%this.results.length):e.key==="ArrowUp"?(e.preventDefault(),this.highlightedIndex=(this.highlightedIndex-1+this.results.length)%this.results.length):e.key==="Enter"&&this.highlightedIndex>=0&&this.highlightedIndex<this.results.length&&this.selectItem(this.results[this.highlightedIndex]))}isHighlighted(e){return this.highlightedIndex===e}static \u0275fac=function(t){return new(t||i)(Ae(ln),Ae(kt))};static \u0275cmp=Mt({type:i,selectors:[["app-agrimandi-search"]],hostBindings:function(t,n){t&1&&it("keydown",function(s){return n.handleKeyDown(s)},!1,Br)},decls:7,vars:3,consts:[["noResults",""],[1,"relative","w-full","max-w-md"],[1,"relative","group"],[1,"absolute","left-3","top-1/2","-translate-y-1/2","text-gray-400","group-focus-within:text-[#00ffee]","transition-colors"],["type","text","placeholder","Search products, buyers, tabs...",1,"w-full","pl-10","pr-10","py-2.5","rounded-2xl","bg-white/80","text-gray-800","placeholder-gray-500","shadow-sm","focus:outline-none","focus:ring-2","focus:ring-[#00ffee]","focus:bg-white/95","backdrop-blur-sm","transition","duration-200",3,"ngModelChange","input","ngModel"],["class",`absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 
             hover:text-red-500 transition-colors`,"aria-label","Clear search",3,"click",4,"ngIf"],["class",`absolute left-0 right-0 mt-3 bg-white border border-gray-200 
           rounded-2xl shadow-xl overflow-hidden z-50 animate-fadeIn`,4,"ngIf"],["aria-label","Clear search",1,"absolute","right-3","top-1/2","-translate-y-1/2","text-gray-400","hover:text-red-500","transition-colors",3,"click"],[1,"absolute","left-0","right-0","mt-3","bg-white","border","border-gray-200","rounded-2xl","shadow-xl","overflow-hidden","z-50","animate-fadeIn"],["class","max-h-72 overflow-y-auto divide-y divide-gray-100",4,"ngIf","ngIfElse"],[1,"max-h-72","overflow-y-auto","divide-y","divide-gray-100"],["class","px-4 py-2.5 cursor-pointer flex items-center gap-3 transition",3,"ngClass","click",4,"ngFor","ngForOf"],[1,"px-4","py-2.5","cursor-pointer","flex","items-center","gap-3","transition",3,"click","ngClass"],[3,"class",4,"ngIf"],[1,"text-gray-800","font-medium"],[1,"px-4","py-3","text-gray-500","text-sm","text-center"]],template:function(t,n){t&1&&(y(0,"div",1)(1,"div",2)(2,"span",3),R(3," \u{1F50D} "),w(),y(4,"input",4),lt("ngModelChange",function(s){return at(n.query,s)||(n.query=s),s}),it("input",function(){return n.onSearch()}),w(),ze(5,nm,2,0,"button",5),w(),ze(6,am,4,2,"div",6),w()),t&2&&(U(4),ot("ngModel",n.query),U(),te("ngIf",n.query),U(),te("ngIf",n.query))},dependencies:[Ft,gn,_n,an,xn,Qn,ei,ki],encapsulation:2})};var hn=class{sidebarVisibleSubject=new Or(!1);sidebarVisible$=this.sidebarVisibleSubject.asObservable();setSidebarVisible(e){this.sidebarVisibleSubject.next(e)}toggleSidebar(){this.sidebarVisibleSubject.next(!this.sidebarVisibleSubject.value)}getSidebarVisible(){return this.sidebarVisibleSubject.value}};vc(hn,"\u0275fac",function(t){return new(t||hn)}),vc(hn,"\u0275prov",rn({token:hn,factory:hn.\u0275fac,providedIn:"root"})),hn=au([uu({providedIn:"root"})],hn);var Sn=class extends Error{constructor(e,t){let n=new.target.prototype;super(`${e}: Status code '${t}'`),this.statusCode=t,this.__proto__=n}},Gi=class extends Error{constructor(e="A timeout occurred."){let t=new.target.prototype;super(e),this.__proto__=t}},Zt=class extends Error{constructor(e="An abort occurred."){let t=new.target.prototype;super(e),this.__proto__=t}},Qo=class extends Error{constructor(e,t){let n=new.target.prototype;super(e),this.transport=t,this.errorType="UnsupportedTransportError",this.__proto__=n}},ea=class extends Error{constructor(e,t){let n=new.target.prototype;super(e),this.transport=t,this.errorType="DisabledTransportError",this.__proto__=n}},ta=class extends Error{constructor(e,t){let n=new.target.prototype;super(e),this.transport=t,this.errorType="FailedToStartTransportError",this.__proto__=n}},Ps=class extends Error{constructor(e){let t=new.target.prototype;super(e),this.errorType="FailedToNegotiateWithServerError",this.__proto__=t}},na=class extends Error{constructor(e,t){let n=new.target.prototype;super(e),this.innerErrors=t,this.__proto__=n}};var Wr=class{constructor(e,t,n){this.statusCode=e,this.statusText=t,this.content=n}},ni=class{get(e,t){return this.send(Zn(dt({},t),{method:"GET",url:e}))}post(e,t){return this.send(Zn(dt({},t),{method:"POST",url:e}))}delete(e,t){return this.send(Zn(dt({},t),{method:"DELETE",url:e}))}getCookieString(e){return""}};var $=function(i){return i[i.Trace=0]="Trace",i[i.Debug=1]="Debug",i[i.Information=2]="Information",i[i.Warning=3]="Warning",i[i.Error=4]="Error",i[i.Critical=5]="Critical",i[i.None=6]="None",i}($||{});var ii=class{constructor(){}log(e,t){}};ii.instance=new ii;var lm="8.0.7",yt=class{static isRequired(e,t){if(e==null)throw new Error(`The '${t}' argument is required.`)}static isNotEmpty(e,t){if(!e||e.match(/^\s*$/))throw new Error(`The '${t}' argument should not be empty.`)}static isIn(e,t,n){if(!(e in t))throw new Error(`Unknown ${n} value: ${e}.`)}},bt=class i{static get isBrowser(){return!i.isNode&&typeof window=="object"&&typeof window.document=="object"}static get isWebWorker(){return!i.isNode&&typeof self=="object"&&"importScripts"in self}static get isReactNative(){return!i.isNode&&typeof window=="object"&&typeof window.document>"u"}static get isNode(){return typeof process<"u"&&process.release&&process.release.name==="node"}};function Wi(i,e){let t="";return Gn(i)?(t=`Binary data of length ${i.byteLength}`,e&&(t+=`. Content: '${cm(i)}'`)):typeof i=="string"&&(t=`String data of length ${i.length}`,e&&(t+=`. Content: '${i}'`)),t}function cm(i){let e=new Uint8Array(i),t="";return e.forEach(n=>{let r=n<16?"0":"";t+=`0x${r}${n.toString(16)} `}),t.substr(0,t.length-1)}function Gn(i){return i&&typeof ArrayBuffer<"u"&&(i instanceof ArrayBuffer||i.constructor&&i.constructor.name==="ArrayBuffer")}function ra(i,e,t,n,r,s){return nt(this,null,function*(){let o={},[a,l]=ri();o[a]=l,i.log($.Trace,`(${e} transport) sending data. ${Wi(r,s.logMessageContent)}.`);let c=Gn(r)?"arraybuffer":"text",h=yield t.post(n,{content:r,headers:dt(dt({},o),s.headers),responseType:c,timeout:s.timeout,withCredentials:s.withCredentials});i.log($.Trace,`(${e} transport) request complete. Response status: ${h.statusCode}.`)})}function ku(i){return i===void 0?new pr($.Information):i===null?ii.instance:i.log!==void 0?i:new pr(i)}var ia=class{constructor(e,t){this._subject=e,this._observer=t}dispose(){let e=this._subject.observers.indexOf(this._observer);e>-1&&this._subject.observers.splice(e,1),this._subject.observers.length===0&&this._subject.cancelCallback&&this._subject.cancelCallback().catch(t=>{})}},pr=class{constructor(e){this._minLevel=e,this.out=console}log(e,t){if(e>=this._minLevel){let n=`[${new Date().toISOString()}] ${$[e]}: ${t}`;switch(e){case $.Critical:case $.Error:this.out.error(n);break;case $.Warning:this.out.warn(n);break;case $.Information:this.out.info(n);break;default:this.out.log(n);break}}}};function ri(){let i="X-SignalR-User-Agent";return bt.isNode&&(i="User-Agent"),[i,hm(lm,um(),fm(),dm())]}function hm(i,e,t,n){let r="Microsoft SignalR/",s=i.split(".");return r+=`${s[0]}.${s[1]}`,r+=` (${i}; `,e&&e!==""?r+=`${e}; `:r+="Unknown OS; ",r+=`${t}`,n?r+=`; ${n}`:r+="; Unknown Runtime Version",r+=")",r}function um(){if(bt.isNode)switch(process.platform){case"win32":return"Windows NT";case"darwin":return"macOS";case"linux":return"Linux";default:return process.platform}else return""}function dm(){if(bt.isNode)return process.versions.node}function fm(){return bt.isNode?"NodeJS":"Browser"}function sa(i){return i.stack?i.stack:i.message?i.message:`${i}`}function zu(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("could not find global")}var oa=class extends ni{constructor(e){if(super(),this._logger=e,typeof fetch>"u"||bt.isNode){let t=typeof __webpack_require__=="function"?__non_webpack_require__:Nr;this._jar=new(t("tough-cookie")).CookieJar,typeof fetch>"u"?this._fetchType=t("node-fetch"):this._fetchType=fetch,this._fetchType=t("fetch-cookie")(this._fetchType,this._jar)}else this._fetchType=fetch.bind(zu());if(typeof AbortController>"u"){let t=typeof __webpack_require__=="function"?__non_webpack_require__:Nr;this._abortControllerType=t("abort-controller")}else this._abortControllerType=AbortController}send(e){return nt(this,null,function*(){if(e.abortSignal&&e.abortSignal.aborted)throw new Zt;if(!e.method)throw new Error("No method defined.");if(!e.url)throw new Error("No url defined.");let t=new this._abortControllerType,n;e.abortSignal&&(e.abortSignal.onabort=()=>{t.abort(),n=new Zt});let r=null;if(e.timeout){let l=e.timeout;r=setTimeout(()=>{t.abort(),this._logger.log($.Warning,"Timeout from HTTP request."),n=new Gi},l)}e.content===""&&(e.content=void 0),e.content&&(e.headers=e.headers||{},Gn(e.content)?e.headers["Content-Type"]="application/octet-stream":e.headers["Content-Type"]="text/plain;charset=UTF-8");let s;try{s=yield this._fetchType(e.url,{body:e.content,cache:"no-cache",credentials:e.withCredentials===!0?"include":"same-origin",headers:dt({"X-Requested-With":"XMLHttpRequest"},e.headers),method:e.method,mode:"cors",redirect:"follow",signal:t.signal})}catch(l){throw n||(this._logger.log($.Warning,`Error from HTTP request. ${l}.`),l)}finally{r&&clearTimeout(r),e.abortSignal&&(e.abortSignal.onabort=null)}if(!s.ok){let l=yield Vu(s,"text");throw new Sn(l||s.statusText,s.status)}let a=yield Vu(s,e.responseType);return new Wr(s.status,s.statusText,a)})}getCookieString(e){let t="";return bt.isNode&&this._jar&&this._jar.getCookies(e,(n,r)=>t=r.join("; ")),t}};function Vu(i,e){let t;switch(e){case"arraybuffer":t=i.arrayBuffer();break;case"text":t=i.text();break;case"blob":case"document":case"json":throw new Error(`${e} is not supported.`);default:t=i.text();break}return t}var aa=class extends ni{constructor(e){super(),this._logger=e}send(e){return e.abortSignal&&e.abortSignal.aborted?Promise.reject(new Zt):e.method?e.url?new Promise((t,n)=>{let r=new XMLHttpRequest;r.open(e.method,e.url,!0),r.withCredentials=e.withCredentials===void 0?!0:e.withCredentials,r.setRequestHeader("X-Requested-With","XMLHttpRequest"),e.content===""&&(e.content=void 0),e.content&&(Gn(e.content)?r.setRequestHeader("Content-Type","application/octet-stream"):r.setRequestHeader("Content-Type","text/plain;charset=UTF-8"));let s=e.headers;s&&Object.keys(s).forEach(o=>{r.setRequestHeader(o,s[o])}),e.responseType&&(r.responseType=e.responseType),e.abortSignal&&(e.abortSignal.onabort=()=>{r.abort(),n(new Zt)}),e.timeout&&(r.timeout=e.timeout),r.onload=()=>{e.abortSignal&&(e.abortSignal.onabort=null),r.status>=200&&r.status<300?t(new Wr(r.status,r.statusText,r.response||r.responseText)):n(new Sn(r.response||r.responseText||r.statusText,r.status))},r.onerror=()=>{this._logger.log($.Warning,`Error from HTTP request. ${r.status}: ${r.statusText}.`),n(new Sn(r.statusText,r.status))},r.ontimeout=()=>{this._logger.log($.Warning,"Timeout from HTTP request."),n(new Gi)},r.send(e.content)}):Promise.reject(new Error("No url defined.")):Promise.reject(new Error("No method defined."))}};var la=class extends ni{constructor(e){if(super(),typeof fetch<"u"||bt.isNode)this._httpClient=new oa(e);else if(typeof XMLHttpRequest<"u")this._httpClient=new aa(e);else throw new Error("No usable HttpClient found.")}send(e){return e.abortSignal&&e.abortSignal.aborted?Promise.reject(new Zt):e.method?e.url?this._httpClient.send(e):Promise.reject(new Error("No url defined.")):Promise.reject(new Error("No method defined."))}getCookieString(e){return this._httpClient.getCookieString(e)}};var Mn=class i{static write(e){return`${e}${i.RecordSeparator}`}static parse(e){if(e[e.length-1]!==i.RecordSeparator)throw new Error("Message is incomplete.");let t=e.split(i.RecordSeparator);return t.pop(),t}};Mn.RecordSeparatorCode=30;Mn.RecordSeparator=String.fromCharCode(Mn.RecordSeparatorCode);var ca=class{writeHandshakeRequest(e){return Mn.write(JSON.stringify(e))}parseHandshakeResponse(e){let t,n;if(Gn(e)){let a=new Uint8Array(e),l=a.indexOf(Mn.RecordSeparatorCode);if(l===-1)throw new Error("Message is incomplete.");let c=l+1;t=String.fromCharCode.apply(null,Array.prototype.slice.call(a.slice(0,c))),n=a.byteLength>c?a.slice(c).buffer:null}else{let a=e,l=a.indexOf(Mn.RecordSeparator);if(l===-1)throw new Error("Message is incomplete.");let c=l+1;t=a.substring(0,c),n=a.length>c?a.substring(c):null}let r=Mn.parse(t),s=JSON.parse(r[0]);if(s.type)throw new Error("Expected a handshake response from the server.");return[n,s]}};var Ke=function(i){return i[i.Invocation=1]="Invocation",i[i.StreamItem=2]="StreamItem",i[i.Completion=3]="Completion",i[i.StreamInvocation=4]="StreamInvocation",i[i.CancelInvocation=5]="CancelInvocation",i[i.Ping=6]="Ping",i[i.Close=7]="Close",i[i.Ack=8]="Ack",i[i.Sequence=9]="Sequence",i}(Ke||{});var ha=class{constructor(){this.observers=[]}next(e){for(let t of this.observers)t.next(e)}error(e){for(let t of this.observers)t.error&&t.error(e)}complete(){for(let e of this.observers)e.complete&&e.complete()}subscribe(e){return this.observers.push(e),new ia(this,e)}};var ua=class{constructor(e,t,n){this._bufferSize=1e5,this._messages=[],this._totalMessageCount=0,this._waitForSequenceMessage=!1,this._nextReceivingSequenceId=1,this._latestReceivedSequenceId=0,this._bufferedByteCount=0,this._reconnectInProgress=!1,this._protocol=e,this._connection=t,this._bufferSize=n}_send(e){return nt(this,null,function*(){let t=this._protocol.writeMessage(e),n=Promise.resolve();if(this._isInvocationMessage(e)){this._totalMessageCount++;let r=()=>{},s=()=>{};Gn(t)?this._bufferedByteCount+=t.byteLength:this._bufferedByteCount+=t.length,this._bufferedByteCount>=this._bufferSize&&(n=new Promise((o,a)=>{r=o,s=a})),this._messages.push(new Ic(t,this._totalMessageCount,r,s))}try{this._reconnectInProgress||(yield this._connection.send(t))}catch{this._disconnected()}yield n})}_ack(e){let t=-1;for(let n=0;n<this._messages.length;n++){let r=this._messages[n];if(r._id<=e.sequenceId)t=n,Gn(r._message)?this._bufferedByteCount-=r._message.byteLength:this._bufferedByteCount-=r._message.length,r._resolver();else if(this._bufferedByteCount<this._bufferSize)r._resolver();else break}t!==-1&&(this._messages=this._messages.slice(t+1))}_shouldProcessMessage(e){if(this._waitForSequenceMessage)return e.type!==Ke.Sequence?!1:(this._waitForSequenceMessage=!1,!0);if(!this._isInvocationMessage(e))return!0;let t=this._nextReceivingSequenceId;return this._nextReceivingSequenceId++,t<=this._latestReceivedSequenceId?(t===this._latestReceivedSequenceId&&this._ackTimer(),!1):(this._latestReceivedSequenceId=t,this._ackTimer(),!0)}_resetSequence(e){if(e.sequenceId>this._nextReceivingSequenceId){this._connection.stop(new Error("Sequence ID greater than amount of messages we've received."));return}this._nextReceivingSequenceId=e.sequenceId}_disconnected(){this._reconnectInProgress=!0,this._waitForSequenceMessage=!0}_resend(){return nt(this,null,function*(){let e=this._messages.length!==0?this._messages[0]._id:this._totalMessageCount+1;yield this._connection.send(this._protocol.writeMessage({type:Ke.Sequence,sequenceId:e}));let t=this._messages;for(let n of t)yield this._connection.send(n._message);this._reconnectInProgress=!1})}_dispose(e){e??(e=new Error("Unable to reconnect to server."));for(let t of this._messages)t._rejector(e)}_isInvocationMessage(e){switch(e.type){case Ke.Invocation:case Ke.StreamItem:case Ke.Completion:case Ke.StreamInvocation:case Ke.CancelInvocation:return!0;case Ke.Close:case Ke.Sequence:case Ke.Ping:case Ke.Ack:return!1}}_ackTimer(){this._ackTimerHandle===void 0&&(this._ackTimerHandle=setTimeout(()=>nt(this,null,function*(){try{this._reconnectInProgress||(yield this._connection.send(this._protocol.writeMessage({type:Ke.Ack,sequenceId:this._latestReceivedSequenceId})))}catch{}clearTimeout(this._ackTimerHandle),this._ackTimerHandle=void 0}),1e3))}},Ic=class{constructor(e,t,n,r){this._message=e,this._id=t,this._resolver=n,this._rejector=r}};var pm=30*1e3,mm=15*1e3,gm=1e5,Rt=function(i){return i.Disconnected="Disconnected",i.Connecting="Connecting",i.Connected="Connected",i.Disconnecting="Disconnecting",i.Reconnecting="Reconnecting",i}(Rt||{}),da=class i{static create(e,t,n,r,s,o,a){return new i(e,t,n,r,s,o,a)}constructor(e,t,n,r,s,o,a){this._nextKeepAlive=0,this._freezeEventListener=()=>{this._logger.log($.Warning,"The page is being frozen, this will likely lead to the connection being closed and messages being lost. For more information see the docs at https://learn.microsoft.com/aspnet/core/signalr/javascript-client#bsleep")},yt.isRequired(e,"connection"),yt.isRequired(t,"logger"),yt.isRequired(n,"protocol"),this.serverTimeoutInMilliseconds=s??pm,this.keepAliveIntervalInMilliseconds=o??mm,this._statefulReconnectBufferSize=a??gm,this._logger=t,this._protocol=n,this.connection=e,this._reconnectPolicy=r,this._handshakeProtocol=new ca,this.connection.onreceive=l=>this._processIncomingData(l),this.connection.onclose=l=>this._connectionClosed(l),this._callbacks={},this._methods={},this._closedCallbacks=[],this._reconnectingCallbacks=[],this._reconnectedCallbacks=[],this._invocationId=0,this._receivedHandshakeResponse=!1,this._connectionState=Rt.Disconnected,this._connectionStarted=!1,this._cachedPingMessage=this._protocol.writeMessage({type:Ke.Ping})}get state(){return this._connectionState}get connectionId(){return this.connection&&this.connection.connectionId||null}get baseUrl(){return this.connection.baseUrl||""}set baseUrl(e){if(this._connectionState!==Rt.Disconnected&&this._connectionState!==Rt.Reconnecting)throw new Error("The HubConnection must be in the Disconnected or Reconnecting state to change the url.");if(!e)throw new Error("The HubConnection url must be a valid url.");this.connection.baseUrl=e}start(){return this._startPromise=this._startWithStateTransitions(),this._startPromise}_startWithStateTransitions(){return nt(this,null,function*(){if(this._connectionState!==Rt.Disconnected)return Promise.reject(new Error("Cannot start a HubConnection that is not in the 'Disconnected' state."));this._connectionState=Rt.Connecting,this._logger.log($.Debug,"Starting HubConnection.");try{yield this._startInternal(),bt.isBrowser&&window.document.addEventListener("freeze",this._freezeEventListener),this._connectionState=Rt.Connected,this._connectionStarted=!0,this._logger.log($.Debug,"HubConnection connected successfully.")}catch(e){return this._connectionState=Rt.Disconnected,this._logger.log($.Debug,`HubConnection failed to start successfully because of error '${e}'.`),Promise.reject(e)}})}_startInternal(){return nt(this,null,function*(){this._stopDuringStartError=void 0,this._receivedHandshakeResponse=!1;let e=new Promise((t,n)=>{this._handshakeResolver=t,this._handshakeRejecter=n});yield this.connection.start(this._protocol.transferFormat);try{let t=this._protocol.version;this.connection.features.reconnect||(t=1);let n={protocol:this._protocol.name,version:t};if(this._logger.log($.Debug,"Sending handshake request."),yield this._sendMessage(this._handshakeProtocol.writeHandshakeRequest(n)),this._logger.log($.Information,`Using HubProtocol '${this._protocol.name}'.`),this._cleanupTimeout(),this._resetTimeoutPeriod(),this._resetKeepAliveInterval(),yield e,this._stopDuringStartError)throw this._stopDuringStartError;(this.connection.features.reconnect||!1)&&(this._messageBuffer=new ua(this._protocol,this.connection,this._statefulReconnectBufferSize),this.connection.features.disconnected=this._messageBuffer._disconnected.bind(this._messageBuffer),this.connection.features.resend=()=>{if(this._messageBuffer)return this._messageBuffer._resend()}),this.connection.features.inherentKeepAlive||(yield this._sendMessage(this._cachedPingMessage))}catch(t){throw this._logger.log($.Debug,`Hub handshake failed with error '${t}' during start(). Stopping HubConnection.`),this._cleanupTimeout(),this._cleanupPingTimer(),yield this.connection.stop(t),t}})}stop(){return nt(this,null,function*(){let e=this._startPromise;this.connection.features.reconnect=!1,this._stopPromise=this._stopInternal(),yield this._stopPromise;try{yield e}catch{}})}_stopInternal(e){if(this._connectionState===Rt.Disconnected)return this._logger.log($.Debug,`Call to HubConnection.stop(${e}) ignored because it is already in the disconnected state.`),Promise.resolve();if(this._connectionState===Rt.Disconnecting)return this._logger.log($.Debug,`Call to HttpConnection.stop(${e}) ignored because the connection is already in the disconnecting state.`),this._stopPromise;let t=this._connectionState;return this._connectionState=Rt.Disconnecting,this._logger.log($.Debug,"Stopping HubConnection."),this._reconnectDelayHandle?(this._logger.log($.Debug,"Connection stopped during reconnect delay. Done reconnecting."),clearTimeout(this._reconnectDelayHandle),this._reconnectDelayHandle=void 0,this._completeClose(),Promise.resolve()):(t===Rt.Connected&&this._sendCloseMessage(),this._cleanupTimeout(),this._cleanupPingTimer(),this._stopDuringStartError=e||new Zt("The connection was stopped before the hub handshake could complete."),this.connection.stop(e))}_sendCloseMessage(){return nt(this,null,function*(){try{yield this._sendWithProtocol(this._createCloseMessage())}catch{}})}stream(e,...t){let[n,r]=this._replaceStreamingParams(t),s=this._createStreamInvocation(e,t,r),o,a=new ha;return a.cancelCallback=()=>{let l=this._createCancelInvocation(s.invocationId);return delete this._callbacks[s.invocationId],o.then(()=>this._sendWithProtocol(l))},this._callbacks[s.invocationId]=(l,c)=>{if(c){a.error(c);return}else l&&(l.type===Ke.Completion?l.error?a.error(new Error(l.error)):a.complete():a.next(l.item))},o=this._sendWithProtocol(s).catch(l=>{a.error(l),delete this._callbacks[s.invocationId]}),this._launchStreams(n,o),a}_sendMessage(e){return this._resetKeepAliveInterval(),this.connection.send(e)}_sendWithProtocol(e){return this._messageBuffer?this._messageBuffer._send(e):this._sendMessage(this._protocol.writeMessage(e))}send(e,...t){let[n,r]=this._replaceStreamingParams(t),s=this._sendWithProtocol(this._createInvocation(e,t,!0,r));return this._launchStreams(n,s),s}invoke(e,...t){let[n,r]=this._replaceStreamingParams(t),s=this._createInvocation(e,t,!1,r);return new Promise((a,l)=>{this._callbacks[s.invocationId]=(h,u)=>{if(u){l(u);return}else h&&(h.type===Ke.Completion?h.error?l(new Error(h.error)):a(h.result):l(new Error(`Unexpected message type: ${h.type}`)))};let c=this._sendWithProtocol(s).catch(h=>{l(h),delete this._callbacks[s.invocationId]});this._launchStreams(n,c)})}on(e,t){!e||!t||(e=e.toLowerCase(),this._methods[e]||(this._methods[e]=[]),this._methods[e].indexOf(t)===-1&&this._methods[e].push(t))}off(e,t){if(!e)return;e=e.toLowerCase();let n=this._methods[e];if(n)if(t){let r=n.indexOf(t);r!==-1&&(n.splice(r,1),n.length===0&&delete this._methods[e])}else delete this._methods[e]}onclose(e){e&&this._closedCallbacks.push(e)}onreconnecting(e){e&&this._reconnectingCallbacks.push(e)}onreconnected(e){e&&this._reconnectedCallbacks.push(e)}_processIncomingData(e){if(this._cleanupTimeout(),this._receivedHandshakeResponse||(e=this._processHandshakeResponse(e),this._receivedHandshakeResponse=!0),e){let t=this._protocol.parseMessages(e,this._logger);for(let n of t)if(!(this._messageBuffer&&!this._messageBuffer._shouldProcessMessage(n)))switch(n.type){case Ke.Invocation:this._invokeClientMethod(n).catch(r=>{this._logger.log($.Error,`Invoke client method threw error: ${sa(r)}`)});break;case Ke.StreamItem:case Ke.Completion:{let r=this._callbacks[n.invocationId];if(r){n.type===Ke.Completion&&delete this._callbacks[n.invocationId];try{r(n)}catch(s){this._logger.log($.Error,`Stream callback threw error: ${sa(s)}`)}}break}case Ke.Ping:break;case Ke.Close:{this._logger.log($.Information,"Close message received from server.");let r=n.error?new Error("Server returned an error on close: "+n.error):void 0;n.allowReconnect===!0?this.connection.stop(r):this._stopPromise=this._stopInternal(r);break}case Ke.Ack:this._messageBuffer&&this._messageBuffer._ack(n);break;case Ke.Sequence:this._messageBuffer&&this._messageBuffer._resetSequence(n);break;default:this._logger.log($.Warning,`Invalid message type: ${n.type}.`);break}}this._resetTimeoutPeriod()}_processHandshakeResponse(e){let t,n;try{[n,t]=this._handshakeProtocol.parseHandshakeResponse(e)}catch(r){let s="Error parsing handshake response: "+r;this._logger.log($.Error,s);let o=new Error(s);throw this._handshakeRejecter(o),o}if(t.error){let r="Server returned handshake error: "+t.error;this._logger.log($.Error,r);let s=new Error(r);throw this._handshakeRejecter(s),s}else this._logger.log($.Debug,"Server handshake complete.");return this._handshakeResolver(),n}_resetKeepAliveInterval(){this.connection.features.inherentKeepAlive||(this._nextKeepAlive=new Date().getTime()+this.keepAliveIntervalInMilliseconds,this._cleanupPingTimer())}_resetTimeoutPeriod(){if((!this.connection.features||!this.connection.features.inherentKeepAlive)&&(this._timeoutHandle=setTimeout(()=>this.serverTimeout(),this.serverTimeoutInMilliseconds),this._pingServerHandle===void 0)){let e=this._nextKeepAlive-new Date().getTime();e<0&&(e=0),this._pingServerHandle=setTimeout(()=>nt(this,null,function*(){if(this._connectionState===Rt.Connected)try{yield this._sendMessage(this._cachedPingMessage)}catch{this._cleanupPingTimer()}}),e)}}serverTimeout(){this.connection.stop(new Error("Server timeout elapsed without receiving a message from the server."))}_invokeClientMethod(e){return nt(this,null,function*(){let t=e.target.toLowerCase(),n=this._methods[t];if(!n){this._logger.log($.Warning,`No client method with the name '${t}' found.`),e.invocationId&&(this._logger.log($.Warning,`No result given for '${t}' method and invocation ID '${e.invocationId}'.`),yield this._sendWithProtocol(this._createCompletionMessage(e.invocationId,"Client didn't provide a result.",null)));return}let r=n.slice(),s=!!e.invocationId,o,a,l;for(let c of r)try{let h=o;o=yield c.apply(this,e.arguments),s&&o&&h&&(this._logger.log($.Error,`Multiple results provided for '${t}'. Sending error to server.`),l=this._createCompletionMessage(e.invocationId,"Client provided multiple results.",null)),a=void 0}catch(h){a=h,this._logger.log($.Error,`A callback for the method '${t}' threw error '${h}'.`)}l?yield this._sendWithProtocol(l):s?(a?l=this._createCompletionMessage(e.invocationId,`${a}`,null):o!==void 0?l=this._createCompletionMessage(e.invocationId,null,o):(this._logger.log($.Warning,`No result given for '${t}' method and invocation ID '${e.invocationId}'.`),l=this._createCompletionMessage(e.invocationId,"Client didn't provide a result.",null)),yield this._sendWithProtocol(l)):o&&this._logger.log($.Error,`Result given for '${t}' method but server is not expecting a result.`)})}_connectionClosed(e){this._logger.log($.Debug,`HubConnection.connectionClosed(${e}) called while in state ${this._connectionState}.`),this._stopDuringStartError=this._stopDuringStartError||e||new Zt("The underlying connection was closed before the hub handshake could complete."),this._handshakeResolver&&this._handshakeResolver(),this._cancelCallbacksWithError(e||new Error("Invocation canceled due to the underlying connection being closed.")),this._cleanupTimeout(),this._cleanupPingTimer(),this._connectionState===Rt.Disconnecting?this._completeClose(e):this._connectionState===Rt.Connected&&this._reconnectPolicy?this._reconnect(e):this._connectionState===Rt.Connected&&this._completeClose(e)}_completeClose(e){if(this._connectionStarted){this._connectionState=Rt.Disconnected,this._connectionStarted=!1,this._messageBuffer&&(this._messageBuffer._dispose(e??new Error("Connection closed.")),this._messageBuffer=void 0),bt.isBrowser&&window.document.removeEventListener("freeze",this._freezeEventListener);try{this._closedCallbacks.forEach(t=>t.apply(this,[e]))}catch(t){this._logger.log($.Error,`An onclose callback called with error '${e}' threw error '${t}'.`)}}}_reconnect(e){return nt(this,null,function*(){let t=Date.now(),n=0,r=e!==void 0?e:new Error("Attempting to reconnect due to a unknown error."),s=this._getNextRetryDelay(n++,0,r);if(s===null){this._logger.log($.Debug,"Connection not reconnecting because the IRetryPolicy returned null on the first reconnect attempt."),this._completeClose(e);return}if(this._connectionState=Rt.Reconnecting,e?this._logger.log($.Information,`Connection reconnecting because of error '${e}'.`):this._logger.log($.Information,"Connection reconnecting."),this._reconnectingCallbacks.length!==0){try{this._reconnectingCallbacks.forEach(o=>o.apply(this,[e]))}catch(o){this._logger.log($.Error,`An onreconnecting callback called with error '${e}' threw error '${o}'.`)}if(this._connectionState!==Rt.Reconnecting){this._logger.log($.Debug,"Connection left the reconnecting state in onreconnecting callback. Done reconnecting.");return}}for(;s!==null;){if(this._logger.log($.Information,`Reconnect attempt number ${n} will start in ${s} ms.`),yield new Promise(o=>{this._reconnectDelayHandle=setTimeout(o,s)}),this._reconnectDelayHandle=void 0,this._connectionState!==Rt.Reconnecting){this._logger.log($.Debug,"Connection left the reconnecting state during reconnect delay. Done reconnecting.");return}try{if(yield this._startInternal(),this._connectionState=Rt.Connected,this._logger.log($.Information,"HubConnection reconnected successfully."),this._reconnectedCallbacks.length!==0)try{this._reconnectedCallbacks.forEach(o=>o.apply(this,[this.connection.connectionId]))}catch(o){this._logger.log($.Error,`An onreconnected callback called with connectionId '${this.connection.connectionId}; threw error '${o}'.`)}return}catch(o){if(this._logger.log($.Information,`Reconnect attempt failed because of error '${o}'.`),this._connectionState!==Rt.Reconnecting){this._logger.log($.Debug,`Connection moved to the '${this._connectionState}' from the reconnecting state during reconnect attempt. Done reconnecting.`),this._connectionState===Rt.Disconnecting&&this._completeClose();return}r=o instanceof Error?o:new Error(o.toString()),s=this._getNextRetryDelay(n++,Date.now()-t,r)}}this._logger.log($.Information,`Reconnect retries have been exhausted after ${Date.now()-t} ms and ${n} failed attempts. Connection disconnecting.`),this._completeClose()})}_getNextRetryDelay(e,t,n){try{return this._reconnectPolicy.nextRetryDelayInMilliseconds({elapsedMilliseconds:t,previousRetryCount:e,retryReason:n})}catch(r){return this._logger.log($.Error,`IRetryPolicy.nextRetryDelayInMilliseconds(${e}, ${t}) threw error '${r}'.`),null}}_cancelCallbacksWithError(e){let t=this._callbacks;this._callbacks={},Object.keys(t).forEach(n=>{let r=t[n];try{r(null,e)}catch(s){this._logger.log($.Error,`Stream 'error' callback called with '${e}' threw error: ${sa(s)}`)}})}_cleanupPingTimer(){this._pingServerHandle&&(clearTimeout(this._pingServerHandle),this._pingServerHandle=void 0)}_cleanupTimeout(){this._timeoutHandle&&clearTimeout(this._timeoutHandle)}_createInvocation(e,t,n,r){if(n)return r.length!==0?{arguments:t,streamIds:r,target:e,type:Ke.Invocation}:{arguments:t,target:e,type:Ke.Invocation};{let s=this._invocationId;return this._invocationId++,r.length!==0?{arguments:t,invocationId:s.toString(),streamIds:r,target:e,type:Ke.Invocation}:{arguments:t,invocationId:s.toString(),target:e,type:Ke.Invocation}}}_launchStreams(e,t){if(e.length!==0){t||(t=Promise.resolve());for(let n in e)e[n].subscribe({complete:()=>{t=t.then(()=>this._sendWithProtocol(this._createCompletionMessage(n)))},error:r=>{let s;r instanceof Error?s=r.message:r&&r.toString?s=r.toString():s="Unknown error",t=t.then(()=>this._sendWithProtocol(this._createCompletionMessage(n,s)))},next:r=>{t=t.then(()=>this._sendWithProtocol(this._createStreamItemMessage(n,r)))}})}}_replaceStreamingParams(e){let t=[],n=[];for(let r=0;r<e.length;r++){let s=e[r];if(this._isObservable(s)){let o=this._invocationId;this._invocationId++,t[o]=s,n.push(o.toString()),e.splice(r,1)}}return[t,n]}_isObservable(e){return e&&e.subscribe&&typeof e.subscribe=="function"}_createStreamInvocation(e,t,n){let r=this._invocationId;return this._invocationId++,n.length!==0?{arguments:t,invocationId:r.toString(),streamIds:n,target:e,type:Ke.StreamInvocation}:{arguments:t,invocationId:r.toString(),target:e,type:Ke.StreamInvocation}}_createCancelInvocation(e){return{invocationId:e,type:Ke.CancelInvocation}}_createStreamItemMessage(e,t){return{invocationId:e,item:t,type:Ke.StreamItem}}_createCompletionMessage(e,t,n){return t?{error:t,invocationId:e,type:Ke.Completion}:{invocationId:e,result:n,type:Ke.Completion}}_createCloseMessage(){return{type:Ke.Close}}};var _m=[0,2e3,1e4,3e4,null],Ds=class{constructor(e){this._retryDelays=e!==void 0?[...e,null]:_m}nextRetryDelayInMilliseconds(e){return this._retryDelays[e.previousRetryCount]}};var mr=(()=>{class i{}return i.Authorization="Authorization",i.Cookie="Cookie",i})();var fa=class extends ni{constructor(e,t){super(),this._innerClient=e,this._accessTokenFactory=t}send(e){return nt(this,null,function*(){let t=!0;this._accessTokenFactory&&(!this._accessToken||e.url&&e.url.indexOf("/negotiate?")>0)&&(t=!1,this._accessToken=yield this._accessTokenFactory()),this._setAuthorizationHeader(e);let n=yield this._innerClient.send(e);return t&&n.statusCode===401&&this._accessTokenFactory?(this._accessToken=yield this._accessTokenFactory(),this._setAuthorizationHeader(e),yield this._innerClient.send(e)):n})}_setAuthorizationHeader(e){e.headers||(e.headers={}),this._accessToken?e.headers[mr.Authorization]=`Bearer ${this._accessToken}`:this._accessTokenFactory&&e.headers[mr.Authorization]&&delete e.headers[mr.Authorization]}getCookieString(e){return this._innerClient.getCookieString(e)}};var qt=function(i){return i[i.None=0]="None",i[i.WebSockets=1]="WebSockets",i[i.ServerSentEvents=2]="ServerSentEvents",i[i.LongPolling=4]="LongPolling",i}(qt||{}),Vt=function(i){return i[i.Text=1]="Text",i[i.Binary=2]="Binary",i}(Vt||{});var pa=class{constructor(){this._isAborted=!1,this.onabort=null}abort(){this._isAborted||(this._isAborted=!0,this.onabort&&this.onabort())}get signal(){return this}get aborted(){return this._isAborted}};var Ls=class{get pollAborted(){return this._pollAbort.aborted}constructor(e,t,n){this._httpClient=e,this._logger=t,this._pollAbort=new pa,this._options=n,this._running=!1,this.onreceive=null,this.onclose=null}connect(e,t){return nt(this,null,function*(){if(yt.isRequired(e,"url"),yt.isRequired(t,"transferFormat"),yt.isIn(t,Vt,"transferFormat"),this._url=e,this._logger.log($.Trace,"(LongPolling transport) Connecting."),t===Vt.Binary&&typeof XMLHttpRequest<"u"&&typeof new XMLHttpRequest().responseType!="string")throw new Error("Binary protocols over XmlHttpRequest not implementing advanced features are not supported.");let[n,r]=ri(),s=dt({[n]:r},this._options.headers),o={abortSignal:this._pollAbort.signal,headers:s,timeout:1e5,withCredentials:this._options.withCredentials};t===Vt.Binary&&(o.responseType="arraybuffer");let a=`${e}&_=${Date.now()}`;this._logger.log($.Trace,`(LongPolling transport) polling: ${a}.`);let l=yield this._httpClient.get(a,o);l.statusCode!==200?(this._logger.log($.Error,`(LongPolling transport) Unexpected response code: ${l.statusCode}.`),this._closeError=new Sn(l.statusText||"",l.statusCode),this._running=!1):this._running=!0,this._receiving=this._poll(this._url,o)})}_poll(e,t){return nt(this,null,function*(){try{for(;this._running;)try{let n=`${e}&_=${Date.now()}`;this._logger.log($.Trace,`(LongPolling transport) polling: ${n}.`);let r=yield this._httpClient.get(n,t);r.statusCode===204?(this._logger.log($.Information,"(LongPolling transport) Poll terminated by server."),this._running=!1):r.statusCode!==200?(this._logger.log($.Error,`(LongPolling transport) Unexpected response code: ${r.statusCode}.`),this._closeError=new Sn(r.statusText||"",r.statusCode),this._running=!1):r.content?(this._logger.log($.Trace,`(LongPolling transport) data received. ${Wi(r.content,this._options.logMessageContent)}.`),this.onreceive&&this.onreceive(r.content)):this._logger.log($.Trace,"(LongPolling transport) Poll timed out, reissuing.")}catch(n){this._running?n instanceof Gi?this._logger.log($.Trace,"(LongPolling transport) Poll timed out, reissuing."):(this._closeError=n,this._running=!1):this._logger.log($.Trace,`(LongPolling transport) Poll errored after shutdown: ${n.message}`)}}finally{this._logger.log($.Trace,"(LongPolling transport) Polling complete."),this.pollAborted||this._raiseOnClose()}})}send(e){return nt(this,null,function*(){return this._running?ra(this._logger,"LongPolling",this._httpClient,this._url,e,this._options):Promise.reject(new Error("Cannot send until the transport is connected"))})}stop(){return nt(this,null,function*(){this._logger.log($.Trace,"(LongPolling transport) Stopping polling."),this._running=!1,this._pollAbort.abort();try{yield this._receiving,this._logger.log($.Trace,`(LongPolling transport) sending DELETE request to ${this._url}.`);let e={},[t,n]=ri();e[t]=n;let r={headers:dt(dt({},e),this._options.headers),timeout:this._options.timeout,withCredentials:this._options.withCredentials},s;try{yield this._httpClient.delete(this._url,r)}catch(o){s=o}s?s instanceof Sn&&(s.statusCode===404?this._logger.log($.Trace,"(LongPolling transport) A 404 response was returned from sending a DELETE request."):this._logger.log($.Trace,`(LongPolling transport) Error sending a DELETE request: ${s}`)):this._logger.log($.Trace,"(LongPolling transport) DELETE request accepted.")}finally{this._logger.log($.Trace,"(LongPolling transport) Stop finished."),this._raiseOnClose()}})}_raiseOnClose(){if(this.onclose){let e="(LongPolling transport) Firing onclose event.";this._closeError&&(e+=" Error: "+this._closeError),this._logger.log($.Trace,e),this.onclose(this._closeError)}}};var ma=class{constructor(e,t,n,r){this._httpClient=e,this._accessToken=t,this._logger=n,this._options=r,this.onreceive=null,this.onclose=null}connect(e,t){return nt(this,null,function*(){return yt.isRequired(e,"url"),yt.isRequired(t,"transferFormat"),yt.isIn(t,Vt,"transferFormat"),this._logger.log($.Trace,"(SSE transport) Connecting."),this._url=e,this._accessToken&&(e+=(e.indexOf("?")<0?"?":"&")+`access_token=${encodeURIComponent(this._accessToken)}`),new Promise((n,r)=>{let s=!1;if(t!==Vt.Text){r(new Error("The Server-Sent Events transport only supports the 'Text' transfer format"));return}let o;if(bt.isBrowser||bt.isWebWorker)o=new this._options.EventSource(e,{withCredentials:this._options.withCredentials});else{let a=this._httpClient.getCookieString(e),l={};l.Cookie=a;let[c,h]=ri();l[c]=h,o=new this._options.EventSource(e,{withCredentials:this._options.withCredentials,headers:dt(dt({},l),this._options.headers)})}try{o.onmessage=a=>{if(this.onreceive)try{this._logger.log($.Trace,`(SSE transport) data received. ${Wi(a.data,this._options.logMessageContent)}.`),this.onreceive(a.data)}catch(l){this._close(l);return}},o.onerror=a=>{s?this._close():r(new Error("EventSource failed to connect. The connection could not be found on the server, either the connection ID is not present on the server, or a proxy is refusing/buffering the connection. If you have multiple servers check that sticky sessions are enabled."))},o.onopen=()=>{this._logger.log($.Information,`SSE connected to ${this._url}`),this._eventSource=o,s=!0,n()}}catch(a){r(a);return}})})}send(e){return nt(this,null,function*(){return this._eventSource?ra(this._logger,"SSE",this._httpClient,this._url,e,this._options):Promise.reject(new Error("Cannot send until the transport is connected"))})}stop(){return this._close(),Promise.resolve()}_close(e){this._eventSource&&(this._eventSource.close(),this._eventSource=void 0,this.onclose&&this.onclose(e))}};var ga=class{constructor(e,t,n,r,s,o){this._logger=n,this._accessTokenFactory=t,this._logMessageContent=r,this._webSocketConstructor=s,this._httpClient=e,this.onreceive=null,this.onclose=null,this._headers=o}connect(e,t){return nt(this,null,function*(){yt.isRequired(e,"url"),yt.isRequired(t,"transferFormat"),yt.isIn(t,Vt,"transferFormat"),this._logger.log($.Trace,"(WebSockets transport) Connecting.");let n;return this._accessTokenFactory&&(n=yield this._accessTokenFactory()),new Promise((r,s)=>{e=e.replace(/^http/,"ws");let o,a=this._httpClient.getCookieString(e),l=!1;if(bt.isNode||bt.isReactNative){let c={},[h,u]=ri();c[h]=u,n&&(c[mr.Authorization]=`Bearer ${n}`),a&&(c[mr.Cookie]=a),o=new this._webSocketConstructor(e,void 0,{headers:dt(dt({},c),this._headers)})}else n&&(e+=(e.indexOf("?")<0?"?":"&")+`access_token=${encodeURIComponent(n)}`);o||(o=new this._webSocketConstructor(e)),t===Vt.Binary&&(o.binaryType="arraybuffer"),o.onopen=c=>{this._logger.log($.Information,`WebSocket connected to ${e}.`),this._webSocket=o,l=!0,r()},o.onerror=c=>{let h=null;typeof ErrorEvent<"u"&&c instanceof ErrorEvent?h=c.error:h="There was an error with the transport",this._logger.log($.Information,`(WebSockets transport) ${h}.`)},o.onmessage=c=>{if(this._logger.log($.Trace,`(WebSockets transport) data received. ${Wi(c.data,this._logMessageContent)}.`),this.onreceive)try{this.onreceive(c.data)}catch(h){this._close(h);return}},o.onclose=c=>{if(l)this._close(c);else{let h=null;typeof ErrorEvent<"u"&&c instanceof ErrorEvent?h=c.error:h="WebSocket failed to connect. The connection could not be found on the server, either the endpoint may not be a SignalR endpoint, the connection ID is not present on the server, or there is a proxy blocking WebSockets. If you have multiple servers check that sticky sessions are enabled.",s(new Error(h))}}})})}send(e){return this._webSocket&&this._webSocket.readyState===this._webSocketConstructor.OPEN?(this._logger.log($.Trace,`(WebSockets transport) sending data. ${Wi(e,this._logMessageContent)}.`),this._webSocket.send(e),Promise.resolve()):Promise.reject("WebSocket is not in the OPEN state")}stop(){return this._webSocket&&this._close(void 0),Promise.resolve()}_close(e){this._webSocket&&(this._webSocket.onclose=()=>{},this._webSocket.onmessage=()=>{},this._webSocket.onerror=()=>{},this._webSocket.close(),this._webSocket=void 0),this._logger.log($.Trace,"(WebSockets transport) socket closed."),this.onclose&&(this._isCloseEvent(e)&&(e.wasClean===!1||e.code!==1e3)?this.onclose(new Error(`WebSocket closed with status code: ${e.code} (${e.reason||"no reason given"}).`)):e instanceof Error?this.onclose(e):this.onclose())}_isCloseEvent(e){return e&&typeof e.wasClean=="boolean"&&typeof e.code=="number"}};var Hu=100,_a=class{constructor(e,t={}){if(this._stopPromiseResolver=()=>{},this.features={},this._negotiateVersion=1,yt.isRequired(e,"url"),this._logger=ku(t.logger),this.baseUrl=this._resolveUrl(e),t=t||{},t.logMessageContent=t.logMessageContent===void 0?!1:t.logMessageContent,typeof t.withCredentials=="boolean"||t.withCredentials===void 0)t.withCredentials=t.withCredentials===void 0?!0:t.withCredentials;else throw new Error("withCredentials option was not a 'boolean' or 'undefined' value");t.timeout=t.timeout===void 0?100*1e3:t.timeout;let n=null,r=null;if(bt.isNode&&typeof Nr<"u"){let s=typeof __webpack_require__=="function"?__non_webpack_require__:Nr;n=s("ws"),r=s("eventsource")}!bt.isNode&&typeof WebSocket<"u"&&!t.WebSocket?t.WebSocket=WebSocket:bt.isNode&&!t.WebSocket&&n&&(t.WebSocket=n),!bt.isNode&&typeof EventSource<"u"&&!t.EventSource?t.EventSource=EventSource:bt.isNode&&!t.EventSource&&typeof r<"u"&&(t.EventSource=r),this._httpClient=new fa(t.httpClient||new la(this._logger),t.accessTokenFactory),this._connectionState="Disconnected",this._connectionStarted=!1,this._options=t,this.onreceive=null,this.onclose=null}start(e){return nt(this,null,function*(){if(e=e||Vt.Binary,yt.isIn(e,Vt,"transferFormat"),this._logger.log($.Debug,`Starting connection with transfer format '${Vt[e]}'.`),this._connectionState!=="Disconnected")return Promise.reject(new Error("Cannot start an HttpConnection that is not in the 'Disconnected' state."));if(this._connectionState="Connecting",this._startInternalPromise=this._startInternal(e),yield this._startInternalPromise,this._connectionState==="Disconnecting"){let t="Failed to start the HttpConnection before stop() was called.";return this._logger.log($.Error,t),yield this._stopPromise,Promise.reject(new Zt(t))}else if(this._connectionState!=="Connected"){let t="HttpConnection.startInternal completed gracefully but didn't enter the connection into the connected state!";return this._logger.log($.Error,t),Promise.reject(new Zt(t))}this._connectionStarted=!0})}send(e){return this._connectionState!=="Connected"?Promise.reject(new Error("Cannot send data if the connection is not in the 'Connected' State.")):(this._sendQueue||(this._sendQueue=new Pc(this.transport)),this._sendQueue.send(e))}stop(e){return nt(this,null,function*(){if(this._connectionState==="Disconnected")return this._logger.log($.Debug,`Call to HttpConnection.stop(${e}) ignored because the connection is already in the disconnected state.`),Promise.resolve();if(this._connectionState==="Disconnecting")return this._logger.log($.Debug,`Call to HttpConnection.stop(${e}) ignored because the connection is already in the disconnecting state.`),this._stopPromise;this._connectionState="Disconnecting",this._stopPromise=new Promise(t=>{this._stopPromiseResolver=t}),yield this._stopInternal(e),yield this._stopPromise})}_stopInternal(e){return nt(this,null,function*(){this._stopError=e;try{yield this._startInternalPromise}catch{}if(this.transport){try{yield this.transport.stop()}catch(t){this._logger.log($.Error,`HttpConnection.transport.stop() threw error '${t}'.`),this._stopConnection()}this.transport=void 0}else this._logger.log($.Debug,"HttpConnection.transport is undefined in HttpConnection.stop() because start() failed.")})}_startInternal(e){return nt(this,null,function*(){let t=this.baseUrl;this._accessTokenFactory=this._options.accessTokenFactory,this._httpClient._accessTokenFactory=this._accessTokenFactory;try{if(this._options.skipNegotiation)if(this._options.transport===qt.WebSockets)this.transport=this._constructTransport(qt.WebSockets),yield this._startTransport(t,e);else throw new Error("Negotiation can only be skipped when using the WebSocket transport directly.");else{let n=null,r=0;do{if(n=yield this._getNegotiationResponse(t),this._connectionState==="Disconnecting"||this._connectionState==="Disconnected")throw new Zt("The connection was stopped during negotiation.");if(n.error)throw new Error(n.error);if(n.ProtocolVersion)throw new Error("Detected a connection attempt to an ASP.NET SignalR Server. This client only supports connecting to an ASP.NET Core SignalR Server. See https://aka.ms/signalr-core-differences for details.");if(n.url&&(t=n.url),n.accessToken){let s=n.accessToken;this._accessTokenFactory=()=>s,this._httpClient._accessToken=s,this._httpClient._accessTokenFactory=void 0}r++}while(n.url&&r<Hu);if(r===Hu&&n.url)throw new Error("Negotiate redirection limit exceeded.");yield this._createTransport(t,this._options.transport,n,e)}this.transport instanceof Ls&&(this.features.inherentKeepAlive=!0),this._connectionState==="Connecting"&&(this._logger.log($.Debug,"The HttpConnection connected successfully."),this._connectionState="Connected")}catch(n){return this._logger.log($.Error,"Failed to start the connection: "+n),this._connectionState="Disconnected",this.transport=void 0,this._stopPromiseResolver(),Promise.reject(n)}})}_getNegotiationResponse(e){return nt(this,null,function*(){let t={},[n,r]=ri();t[n]=r;let s=this._resolveNegotiateUrl(e);this._logger.log($.Debug,`Sending negotiation request: ${s}.`);try{let o=yield this._httpClient.post(s,{content:"",headers:dt(dt({},t),this._options.headers),timeout:this._options.timeout,withCredentials:this._options.withCredentials});if(o.statusCode!==200)return Promise.reject(new Error(`Unexpected status code returned from negotiate '${o.statusCode}'`));let a=JSON.parse(o.content);return(!a.negotiateVersion||a.negotiateVersion<1)&&(a.connectionToken=a.connectionId),a.useStatefulReconnect&&this._options._useStatefulReconnect!==!0?Promise.reject(new Ps("Client didn't negotiate Stateful Reconnect but the server did.")):a}catch(o){let a="Failed to complete negotiation with the server: "+o;return o instanceof Sn&&o.statusCode===404&&(a=a+" Either this is not a SignalR endpoint or there is a proxy blocking the connection."),this._logger.log($.Error,a),Promise.reject(new Ps(a))}})}_createConnectUrl(e,t){return t?e+(e.indexOf("?")===-1?"?":"&")+`id=${t}`:e}_createTransport(e,t,n,r){return nt(this,null,function*(){let s=this._createConnectUrl(e,n.connectionToken);if(this._isITransport(t)){this._logger.log($.Debug,"Connection was provided an instance of ITransport, using that directly."),this.transport=t,yield this._startTransport(s,r),this.connectionId=n.connectionId;return}let o=[],a=n.availableTransports||[],l=n;for(let c of a){let h=this._resolveTransportOrError(c,t,r,l?.useStatefulReconnect===!0);if(h instanceof Error)o.push(`${c.transport} failed:`),o.push(h);else if(this._isITransport(h)){if(this.transport=h,!l){try{l=yield this._getNegotiationResponse(e)}catch(u){return Promise.reject(u)}s=this._createConnectUrl(e,l.connectionToken)}try{yield this._startTransport(s,r),this.connectionId=l.connectionId;return}catch(u){if(this._logger.log($.Error,`Failed to start the transport '${c.transport}': ${u}`),l=void 0,o.push(new ta(`${c.transport} failed: ${u}`,qt[c.transport])),this._connectionState!=="Connecting"){let f="Failed to select transport before stop() was called.";return this._logger.log($.Debug,f),Promise.reject(new Zt(f))}}}}return o.length>0?Promise.reject(new na(`Unable to connect to the server with any of the available transports. ${o.join(" ")}`,o)):Promise.reject(new Error("None of the transports supported by the client are supported by the server."))})}_constructTransport(e){switch(e){case qt.WebSockets:if(!this._options.WebSocket)throw new Error("'WebSocket' is not supported in your environment.");return new ga(this._httpClient,this._accessTokenFactory,this._logger,this._options.logMessageContent,this._options.WebSocket,this._options.headers||{});case qt.ServerSentEvents:if(!this._options.EventSource)throw new Error("'EventSource' is not supported in your environment.");return new ma(this._httpClient,this._httpClient._accessToken,this._logger,this._options);case qt.LongPolling:return new Ls(this._httpClient,this._logger,this._options);default:throw new Error(`Unknown transport: ${e}.`)}}_startTransport(e,t){return this.transport.onreceive=this.onreceive,this.features.reconnect?this.transport.onclose=n=>nt(this,null,function*(){let r=!1;if(this.features.reconnect)try{this.features.disconnected(),yield this.transport.connect(e,t),yield this.features.resend()}catch{r=!0}else{this._stopConnection(n);return}r&&this._stopConnection(n)}):this.transport.onclose=n=>this._stopConnection(n),this.transport.connect(e,t)}_resolveTransportOrError(e,t,n,r){let s=qt[e.transport];if(s==null)return this._logger.log($.Debug,`Skipping transport '${e.transport}' because it is not supported by this client.`),new Error(`Skipping transport '${e.transport}' because it is not supported by this client.`);if(xm(t,s))if(e.transferFormats.map(a=>Vt[a]).indexOf(n)>=0){if(s===qt.WebSockets&&!this._options.WebSocket||s===qt.ServerSentEvents&&!this._options.EventSource)return this._logger.log($.Debug,`Skipping transport '${qt[s]}' because it is not supported in your environment.'`),new Qo(`'${qt[s]}' is not supported in your environment.`,s);this._logger.log($.Debug,`Selecting transport '${qt[s]}'.`);try{return this.features.reconnect=s===qt.WebSockets?r:void 0,this._constructTransport(s)}catch(a){return a}}else return this._logger.log($.Debug,`Skipping transport '${qt[s]}' because it does not support the requested transfer format '${Vt[n]}'.`),new Error(`'${qt[s]}' does not support ${Vt[n]}.`);else return this._logger.log($.Debug,`Skipping transport '${qt[s]}' because it was disabled by the client.`),new ea(`'${qt[s]}' is disabled by the client.`,s)}_isITransport(e){return e&&typeof e=="object"&&"connect"in e}_stopConnection(e){if(this._logger.log($.Debug,`HttpConnection.stopConnection(${e}) called while in state ${this._connectionState}.`),this.transport=void 0,e=this._stopError||e,this._stopError=void 0,this._connectionState==="Disconnected"){this._logger.log($.Debug,`Call to HttpConnection.stopConnection(${e}) was ignored because the connection is already in the disconnected state.`);return}if(this._connectionState==="Connecting")throw this._logger.log($.Warning,`Call to HttpConnection.stopConnection(${e}) was ignored because the connection is still in the connecting state.`),new Error(`HttpConnection.stopConnection(${e}) was called while the connection is still in the connecting state.`);if(this._connectionState==="Disconnecting"&&this._stopPromiseResolver(),e?this._logger.log($.Error,`Connection disconnected with error '${e}'.`):this._logger.log($.Information,"Connection disconnected."),this._sendQueue&&(this._sendQueue.stop().catch(t=>{this._logger.log($.Error,`TransportSendQueue.stop() threw error '${t}'.`)}),this._sendQueue=void 0),this.connectionId=void 0,this._connectionState="Disconnected",this._connectionStarted){this._connectionStarted=!1;try{this.onclose&&this.onclose(e)}catch(t){this._logger.log($.Error,`HttpConnection.onclose(${e}) threw error '${t}'.`)}}}_resolveUrl(e){if(e.lastIndexOf("https://",0)===0||e.lastIndexOf("http://",0)===0)return e;if(!bt.isBrowser)throw new Error(`Cannot resolve '${e}'.`);let t=window.document.createElement("a");return t.href=e,this._logger.log($.Information,`Normalizing '${e}' to '${t.href}'.`),t.href}_resolveNegotiateUrl(e){let t=new URL(e);t.pathname.endsWith("/")?t.pathname+="negotiate":t.pathname+="/negotiate";let n=new URLSearchParams(t.searchParams);return n.has("negotiateVersion")||n.append("negotiateVersion",this._negotiateVersion.toString()),n.has("useStatefulReconnect")?n.get("useStatefulReconnect")==="true"&&(this._options._useStatefulReconnect=!0):this._options._useStatefulReconnect===!0&&n.append("useStatefulReconnect","true"),t.search=n.toString(),t.toString()}};function xm(i,e){return!i||(e&i)!==0}var Pc=class i{constructor(e){this._transport=e,this._buffer=[],this._executing=!0,this._sendBufferedData=new Xr,this._transportResult=new Xr,this._sendLoopPromise=this._sendLoop()}send(e){return this._bufferData(e),this._transportResult||(this._transportResult=new Xr),this._transportResult.promise}stop(){return this._executing=!1,this._sendBufferedData.resolve(),this._sendLoopPromise}_bufferData(e){if(this._buffer.length&&typeof this._buffer[0]!=typeof e)throw new Error(`Expected data to be of type ${typeof this._buffer} but was of type ${typeof e}`);this._buffer.push(e),this._sendBufferedData.resolve()}_sendLoop(){return nt(this,null,function*(){for(;;){if(yield this._sendBufferedData.promise,!this._executing){this._transportResult&&this._transportResult.reject("Connection stopped.");break}this._sendBufferedData=new Xr;let e=this._transportResult;this._transportResult=void 0;let t=typeof this._buffer[0]=="string"?this._buffer.join(""):i._concatBuffers(this._buffer);this._buffer.length=0;try{yield this._transport.send(t),e.resolve()}catch(n){e.reject(n)}}})}static _concatBuffers(e){let t=e.map(s=>s.byteLength).reduce((s,o)=>s+o),n=new Uint8Array(t),r=0;for(let s of e)n.set(new Uint8Array(s),r),r+=s.byteLength;return n.buffer}},Xr=class{constructor(){this.promise=new Promise((e,t)=>[this._resolver,this._rejecter]=[e,t])}resolve(){this._resolver()}reject(e){this._rejecter(e)}};var vm="json",xa=class{constructor(){this.name=vm,this.version=2,this.transferFormat=Vt.Text}parseMessages(e,t){if(typeof e!="string")throw new Error("Invalid input for JSON hub protocol. Expected a string.");if(!e)return[];t===null&&(t=ii.instance);let n=Mn.parse(e),r=[];for(let s of n){let o=JSON.parse(s);if(typeof o.type!="number")throw new Error("Invalid payload.");switch(o.type){case Ke.Invocation:this._isInvocationMessage(o);break;case Ke.StreamItem:this._isStreamItemMessage(o);break;case Ke.Completion:this._isCompletionMessage(o);break;case Ke.Ping:break;case Ke.Close:break;case Ke.Ack:this._isAckMessage(o);break;case Ke.Sequence:this._isSequenceMessage(o);break;default:t.log($.Information,"Unknown message type '"+o.type+"' ignored.");continue}r.push(o)}return r}writeMessage(e){return Mn.write(JSON.stringify(e))}_isInvocationMessage(e){this._assertNotEmptyString(e.target,"Invalid payload for Invocation message."),e.invocationId!==void 0&&this._assertNotEmptyString(e.invocationId,"Invalid payload for Invocation message.")}_isStreamItemMessage(e){if(this._assertNotEmptyString(e.invocationId,"Invalid payload for StreamItem message."),e.item===void 0)throw new Error("Invalid payload for StreamItem message.")}_isCompletionMessage(e){if(e.result&&e.error)throw new Error("Invalid payload for Completion message.");!e.result&&e.error&&this._assertNotEmptyString(e.error,"Invalid payload for Completion message."),this._assertNotEmptyString(e.invocationId,"Invalid payload for Completion message.")}_isAckMessage(e){if(typeof e.sequenceId!="number")throw new Error("Invalid SequenceId for Ack message.")}_isSequenceMessage(e){if(typeof e.sequenceId!="number")throw new Error("Invalid SequenceId for Sequence message.")}_assertNotEmptyString(e,t){if(typeof e!="string"||e==="")throw new Error(t)}};var ym={trace:$.Trace,debug:$.Debug,info:$.Information,information:$.Information,warn:$.Warning,warning:$.Warning,error:$.Error,critical:$.Critical,none:$.None};function bm(i){let e=ym[i.toLowerCase()];if(typeof e<"u")return e;throw new Error(`Unknown log level: ${i}`)}var Fs=class{configureLogging(e){if(yt.isRequired(e,"logging"),Sm(e))this.logger=e;else if(typeof e=="string"){let t=bm(e);this.logger=new pr(t)}else this.logger=new pr(e);return this}withUrl(e,t){return yt.isRequired(e,"url"),yt.isNotEmpty(e,"url"),this.url=e,typeof t=="object"?this.httpConnectionOptions=dt(dt({},this.httpConnectionOptions),t):this.httpConnectionOptions=Zn(dt({},this.httpConnectionOptions),{transport:t}),this}withHubProtocol(e){return yt.isRequired(e,"protocol"),this.protocol=e,this}withAutomaticReconnect(e){if(this.reconnectPolicy)throw new Error("A reconnectPolicy has already been set.");return e?Array.isArray(e)?this.reconnectPolicy=new Ds(e):this.reconnectPolicy=e:this.reconnectPolicy=new Ds,this}withServerTimeout(e){return yt.isRequired(e,"milliseconds"),this._serverTimeoutInMilliseconds=e,this}withKeepAliveInterval(e){return yt.isRequired(e,"milliseconds"),this._keepAliveIntervalInMilliseconds=e,this}withStatefulReconnect(e){return this.httpConnectionOptions===void 0&&(this.httpConnectionOptions={}),this.httpConnectionOptions._useStatefulReconnect=!0,this._statefulReconnectBufferSize=e?.bufferSize,this}build(){let e=this.httpConnectionOptions||{};if(e.logger===void 0&&(e.logger=this.logger),!this.url)throw new Error("The 'HubConnectionBuilder.withUrl' method must be called before building the connection.");let t=new _a(this.url,e);return da.create(t,this.logger||ii.instance,this.protocol||new xa,this.reconnectPolicy,this._serverTimeoutInMilliseconds,this._keepAliveIntervalInMilliseconds,this._statefulReconnectBufferSize)}};function Sm(i){return i.log!==void 0}var qr=class i{hubConnection;constructor(){this.hubConnection=new Fs().withUrl(`${Vr.BASE_URL}/notificationHub`).build()}startConnection(){return new yc(e=>{this.hubConnection.start().then(()=>{console.log("Connection established with SignalR hub"),e.next(),e.complete()}).catch(t=>{console.error("Error connecting to SignalR hub:",t),e.error(t)})})}receiveMessage(){return new yc(e=>{this.hubConnection.on("ReceiveMessage",t=>{console.log("Notification received:",t),e.next(t)})})}sendMessage(e){this.hubConnection.invoke("SendMessage",e)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=rn({token:i,factory:i.\u0275fac,providedIn:"root"})};var va=class i{searchQuery=new Or("");searchQuery$=this.searchQuery.asObservable();setSearchQuery(e){this.searchQuery.next(e)}constructor(){}static \u0275fac=function(t){return new(t||i)};static \u0275prov=rn({token:i,factory:i.\u0275fac,providedIn:"root"})};var Em=i=>({background:i,backdropFilter:"blur(15px)",WebkitBackdropFilter:"blur(15px)",borderRadius:"0 0 30px 30px"}),Tm=()=>["/notifications"];function Cm(i,e){if(i&1&&(y(0,"span",21),R(1),w()),i&2){let t=fe(2);U(),At(" ",t.notificationCount," ")}}function Am(i,e){if(i&1&&(y(0,"div",16)(1,"a",17)(2,"button",18),ce(3,"i",19),ze(4,Cm,2,1,"span",20),w()()()),i&2){let t=fe();U(),te("routerLink",bn(2,Tm)),U(3),te("ngIf",t.notificationCount>0)}}function Rm(i,e){if(i&1&&(y(0,"a",33),ce(1,"i",34),y(2,"span",35),R(3),w()()),i&2){let t=fe(2).$implicit;te("routerLink",t.routerLink),U(),te("ngClass",t.icon),U(2),wt(t.label)}}function Im(i,e){if(i&1){let t=vt();y(0,"button",36),it("click",function(r){Be(t);let s=fe(2).$implicit;return ke(s.click==null?null:s.click(r))}),ce(1,"i",34),y(2,"span",35),R(3),w()()}if(i&2){let t=fe(2).$implicit;te("ngClass",t.class||"text-gray-700"),U(),te("ngClass",t.icon),U(2),wt(t.label)}}function Pm(i,e){if(i&1&&(Qt(0),ze(1,Rm,4,3,"a",31)(2,Im,4,3,"button",32),en()),i&2){let t=fe().$implicit;U(),te("ngIf",!t.isButton),U(),te("ngIf",t.isButton)}}function Dm(i,e){if(i&1&&(Qt(0),ze(1,Pm,3,2,"ng-container",30),en()),i&2){let t=e.$implicit;U(),te("ngIf",t.showIf())}}function Lm(i,e){if(i&1&&(y(0,"div",28),ze(1,Dm,2,1,"ng-container",29),w()),i&2){let t=fe(2);U(),te("ngForOf",t.dropdownLinks)}}function Fm(i,e){if(i&1){let t=vt();y(0,"div",22)(1,"button",23),it("click",function(){Be(t);let r=fe();return ke(r.toggleUserMenu())}),ce(2,"img",24),y(3,"span",25),R(4),w(),ce(5,"i",26),w(),ze(6,Lm,2,1,"div",27),w()}if(i&2){let t=fe();U(2),te("src",t.profileImageUrl||t.defaultProfileImage,dr),U(2),wt(t.username||"User"),U(2),te("ngIf",t.showUserMenu)}}function Um(i,e){i&1&&(y(0,"div",37)(1,"a",38),R(2," Login "),w(),y(3,"a",39),R(4," Sign Up "),w()())}function Nm(i,e){if(i&1&&(y(0,"a",48),ce(1,"i",34),y(2,"span",35),R(3),w()()),i&2){let t=fe(2).$implicit;te("routerLink",t.routerLink),U(),te("ngClass",t.icon),U(2),wt(t.label)}}function Om(i,e){if(i&1){let t=vt();y(0,"button",36),it("click",function(r){Be(t);let s=fe(2).$implicit;return ke(s.click==null?null:s.click(r))}),ce(1,"i",34),y(2,"span",35),R(3),w()()}if(i&2){let t=fe(2).$implicit;te("ngClass",t.class||"text-gray-700"),U(),te("ngClass",t.icon),U(2),wt(t.label)}}function Bm(i,e){if(i&1&&(Qt(0),ze(1,Nm,4,3,"a",47)(2,Om,4,3,"button",32),en()),i&2){let t=fe().$implicit;U(),te("ngIf",!t.isButton),U(),te("ngIf",t.isButton)}}function km(i,e){if(i&1&&(Qt(0),ze(1,Bm,3,2,"ng-container",30),en()),i&2){let t=e.$implicit;U(),te("ngIf",t.showIf())}}function zm(i,e){if(i&1&&(y(0,"div",28),ze(1,km,2,1,"ng-container",29),w()),i&2){let t=fe(3);U(),te("ngForOf",t.dropdownLinks)}}function Vm(i,e){if(i&1){let t=vt();Qt(0),y(1,"div",22)(2,"button",43),it("click",function(){Be(t);let r=fe(2);return ke(r.toggleUserMenu())}),ce(3,"img",44),y(4,"span",45),R(5),w(),ce(6,"i",46),w(),ze(7,zm,2,1,"div",27),w(),en()}if(i&2){let t=fe(2);U(3),te("src",t.profileImageUrl||t.defaultProfileImage,dr),U(2),wt(t.username||"User"),U(2),te("ngIf",t.showUserMenu)}}function Hm(i,e){i&1&&(y(0,"div",49)(1,"a",50),R(2," Login "),w(),y(3,"a",51),R(4," Sign Up "),w()())}function Gm(i,e){if(i&1&&(y(0,"div",40),ce(1,"app-agrimandi-search"),y(2,"div",41),ze(3,Vm,8,3,"ng-container",42)(4,Hm,5,0,"ng-template",null,1,Kn),w()()),i&2){let t=pi(5),n=fe();U(3),te("ngIf",n.isLoggedIn)("ngIfElse",t)}}var ya=class i{constructor(e,t,n,r,s,o,a,l){this.router=e;this.platformId=t;this.colorService=n;this.layoutService=r;this.userService=s;this.signalrService=o;this.userInfo=a;this.searchService=l;this.router.events.pipe(Di(c=>c instanceof Ni)).subscribe(()=>this.checkLoginStatus())}isLoggedIn=!1;isNavbarCollapsed=!0;sidebarVisible=!0;isDesktop=!0;selectedColor="";userRole=null;username=null;showUserMenu=!1;profileImageUrl="";defaultProfileImage="images/profile.jpeg";notificationCount=0;notifications=[];ngOnInit(){this.signalrService.receiveMessage().subscribe(t=>{this.notifications.push(t),this.notificationCount=this.notifications.length}),this.checkLoginStatus(),this.colorService.selectedColor$.subscribe(t=>this.selectedColor=t),this.layoutService.sidebarVisible$.subscribe(t=>this.sidebarVisible=t),typeof window<"u"&&(this.isDesktop=window.innerWidth>=768,window.addEventListener("resize",()=>{this.isDesktop=window.innerWidth>=768}));let e=Number(this.userInfo.getUserId());e&&this.getProfileImage(e)}checkLoginStatus(){Bt(this.platformId)&&(this.userInfo.refresh(),this.isLoggedIn=!!this.userInfo.getToken(),this.userRole=this.userInfo.getUserRole(),this.username=this.userInfo.getUserName()||"User")}goToAddProduct(e){e.preventDefault(),this.showUserMenu=!1,this.router.navigate(["components/product"])}logout(){Bt(this.platformId)&&localStorage.clear(),this.userInfo.clear(),this.isLoggedIn=!1,this.router.navigate(["/auth/login"]).then(()=>{window.location.reload()})}mobileMenuOpen=!1;toggleUserMenu(){this.showUserMenu=!this.showUserMenu,console.log("Menu toggled:",this.showUserMenu)}onClickOutside(e){e.closest(".user-dropdown")!==null||(this.showUserMenu=!1)}getProfileImage(e){this.userService.getProfileImage(e).subscribe({next:t=>{let n=new FileReader;n.onload=()=>{this.profileImageUrl=n.result},n.readAsDataURL(t)},error:t=>{console.error("Error fetching profile image:",t),this.profileImageUrl=this.defaultProfileImage}})}toggleNavbar(){this.isNavbarCollapsed=!this.isNavbarCollapsed}dropdownLinks=[{label:"Profile",icon:"bi-person-circle",routerLink:"components/profileview",showIf:()=>!0,isButton:!1},{label:"Add Product",icon:"bi-plus-circle",click:e=>this.goToAddProduct(e),showIf:()=>this.userRole==="FARMER",isButton:!0},{label:"Logout",icon:"bi-box-arrow-right",click:()=>this.logout(),showIf:()=>!0,isButton:!0,class:"text-red-600 hover:bg-red-100"}];toggleSidebar(){window.dispatchEvent(new Event("toggle-sidebar"))}query1="";results=[];allItems=["Wheat","Rice","Mango","Farmer: Ramesh","Buyer: Vikash","Product Dashboard","Orders Tab"];onSearch(){if(!this.query1.trim()){this.results=[];return}this.results=this.allItems.filter(e=>e.toLowerCase().includes(this.query1.toLowerCase()))}selectItem(e){this.query1=e,this.results=[],console.log("Navigate or do action for:",e)}static \u0275fac=function(t){return new(t||i)(Ae(ln),Ae(sn),Ae(cn),Ae(hn),Ae(Gr),Ae(qr),Ae(kt),Ae(va))};static \u0275cmp=Mt({type:i,selectors:[["app-navbar"]],hostBindings:function(t,n){t&1&&it("click",function(s){return n.onClickOutside(s.target)},!1,Br)},decls:18,vars:8,consts:[["authBtns",""],["mobileAuthBtns",""],[1,"fixed","top-0","left-0","w-full","z-50","backdrop-blur-xl","transition-all","duration-500","shadow-lg",3,"ngStyle"],["aria-label","Sidebar Button",1,"fixed","top-4","left-4","z-[1100]","flex","items-center","justify-center","w-12","h-12","rounded-full","bg-gradient-to-br","from-white/15","to-white/5","hover:from-white/20","hover:to-white/10","text-white","shadow-[0_4px_15px_rgba(0,0,0,0.25)]","backdrop-blur-xl","border","border-white/20","transition-all","duration-300","ease-in-out","overflow-hidden","hover:scale-110","hover:shadow-[0_0_25px_rgba(0,255,204,0.7)]","before:content-['']","before:absolute","before:inset-0","before:rounded-full","before:border-2","before:border-transparent","before:hover:border-[rgba(0,255,204,0.6)]","before:transition-all","before:duration-300",3,"click"],[1,"bi","bi-list","text-2xl","drop-shadow-[0_0_6px_rgba(0,255,204,0.8)]"],[1,"max-w-7xl","mx-auto","px-4","sm:px-6","lg:px-8"],[1,"flex","items-center","py-4"],["routerLink","/",1,"flex","items-center","gap-3","mr-auto"],["src","images/logo.jpg","alt","Logo",1,"w-10","h-10","object-contain","rounded-full","drop-shadow-[0_0_6px_rgba(0,255,204,0.8)]"],[1,"text-white","text-xl","sm:text-2xl","font-extrabold","tracking-wide","animate-pulse","drop-shadow-[0_0_15px_#00ffee]"],["aria-label","Toggle menu",1,"sm:hidden","text-white","text-2xl","p-2","focus:outline-none","focus:ring-2","focus:ring-[#00ffee]","rounded-lg",3,"click"],[1,"bi",3,"ngClass"],[1,"hidden","sm:flex","sm:items-center","gap-6","flex-1","justify-end"],["class","relative",4,"ngIf"],["class","relative user-dropdown",4,"ngIf","ngIfElse"],["class","sm:hidden flex flex-col gap-4 pb-4 animate-fade-in-down",4,"ngIf"],[1,"relative"],[3,"routerLink"],[1,"p-2","rounded-full","hover:bg-white/10","transition","relative"],[1,"bi","bi-bell-fill","text-white","text-xl"],["class","absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full px-1.5 py-0.5 shadow-md",4,"ngIf"],[1,"absolute","-top-1","-right-1","bg-red-500","text-white","text-xs","font-bold","rounded-full","px-1.5","py-0.5","shadow-md"],[1,"relative","user-dropdown"],[1,"flex","items-center","gap-2","px-3","py-2","rounded-full","bg-white/10","hover:bg-white/20","transition","duration-300","focus:outline-none","backdrop-blur-md","border","border-white/20","shadow-md",3,"click"],["alt","User Avatar",1,"w-10","h-10","rounded-full","border-2","border-cyan-300","shadow-inner","ring-2","ring-white/30",3,"src"],[1,"text-white","font-medium","hidden","sm:inline-block","truncate","max-w-[120px]","tracking-wide","drop-shadow-sm"],[1,"bi","bi-caret-down-fill","text-white","text-sm","drop-shadow"],["class","absolute right-0 mt-3 w-56 bg-white rounded-xl shadow-xl z-50 py-2 animate-fade-in-down border border-gray-200",4,"ngIf"],[1,"absolute","right-0","mt-3","w-56","bg-white","rounded-xl","shadow-xl","z-50","py-2","animate-fade-in-down","border","border-gray-200"],[4,"ngFor","ngForOf"],[4,"ngIf"],["class","block px-4 py-3 text-gray-700 hover:bg-gray-100 hover:text-black transition duration-150 flex items-center gap-2",3,"routerLink",4,"ngIf"],["class","w-full text-left px-4 py-3 hover:bg-gray-100 hover:text-black transition duration-150 flex items-center gap-2",3,"ngClass","click",4,"ngIf"],[1,"block","px-4","py-3","text-gray-700","hover:bg-gray-100","hover:text-black","transition","duration-150","flex","items-center","gap-2",3,"routerLink"],[1,"bi","text-base",3,"ngClass"],[1,"text-sm","font-medium"],[1,"w-full","text-left","px-4","py-3","hover:bg-gray-100","hover:text-black","transition","duration-150","flex","items-center","gap-2",3,"click","ngClass"],[1,"flex","gap-3"],["routerLink","/auth/login",1,"px-4","py-2","border-2","border-[#00ffee]","text-[#00ffee]","font-medium","rounded-full","hover:bg-[#00ffee]","hover:text-black","transition"],["routerLink","/auth/signup",1,"px-4","py-2","bg-gradient-to-r","from-[#00ffcc]","to-[#00cc99]","text-white","font-medium","rounded-full","hover:shadow-[0_0_20px_#00ffee]","transition"],[1,"sm:hidden","flex","flex-col","gap-4","pb-4","animate-fade-in-down"],[1,"flex","justify-between","items-center"],[4,"ngIf","ngIfElse"],[1,"flex","items-center","gap-2","rounded-full","px-2","py-1","hover:bg-white/10","transition","duration-300","focus:outline-none",3,"click"],[1,"w-9","h-9","rounded-full","border-2","border-[#00ffee]","shadow-md",3,"src"],[1,"text-white","font-medium","truncate","max-w-[100px]"],[1,"bi","bi-caret-down-fill","text-white","text-sm"],["class","w-full px-4 py-3 text-gray-700 hover:bg-gray-100 hover:text-black transition duration-150 flex items-center gap-2",3,"routerLink",4,"ngIf"],[1,"w-full","px-4","py-3","text-gray-700","hover:bg-gray-100","hover:text-black","transition","duration-150","flex","items-center","gap-2",3,"routerLink"],[1,"flex","gap-2","w-full"],["routerLink","/auth/login",1,"flex-1","text-center","px-4","py-2","border","border-[#00ffee]","text-[#00ffee]","rounded-full"],["routerLink","/auth/signup",1,"flex-1","text-center","px-4","py-2","bg-gradient-to-r","from-[#00ffcc]","to-[#00cc99]","text-white","rounded-full"]],template:function(t,n){if(t&1){let r=vt();y(0,"nav",2)(1,"button",3),it("click",function(){return Be(r),ke(n.toggleSidebar())}),ce(2,"i",4),w(),y(3,"div",5)(4,"div",6)(5,"a",7),ce(6,"img",8),y(7,"span",9),R(8," AgriMandi "),w()(),y(9,"button",10),it("click",function(){return Be(r),ke(n.mobileMenuOpen=!n.mobileMenuOpen)}),ce(10,"i",11),w(),y(11,"div",12),ce(12,"app-agrimandi-search"),ze(13,Am,5,3,"div",13)(14,Fm,7,3,"div",14)(15,Um,5,0,"ng-template",null,0,Kn),w()(),ze(17,Gm,6,2,"div",15),w()()}if(t&2){let r=pi(16);te("ngStyle",Wt(6,Em,n.selectedColor)),U(10),te("ngClass",n.mobileMenuOpen?"bi-x-lg":"bi-list"),U(3),te("ngIf",n.isLoggedIn),U(),te("ngIf",n.isLoggedIn)("ngIfElse",r),U(3),te("ngIf",n.mobileMenuOpen)}},dependencies:[Oi,Bo,Ft,gn,_n,an,Fi,xn,Ko],encapsulation:2})};var Wm=(i,e,t,n)=>({"bg-green-600":i,"bg-red-600":e,"bg-yellow-500":t,"bg-blue-600":n});function Xm(i,e){if(i&1&&(y(0,"div",1)(1,"span",2),R(2),w()()),i&2){let t=fe();te("ngClass",mu(2,Wm,t.alertData.type==="success",t.alertData.type==="error",t.alertData.type==="warning",t.alertData.type==="info")),U(2),At(" ",t.alertData.message," ")}}var ba=class i{constructor(e){this.alertService=e;this.alertService.alert$.subscribe(t=>{console.log("\u{1F7E1} Alert received:",t),this.alertData=t})}alertData={message:"",type:"success"};static \u0275fac=function(t){return new(t||i)(Ae(Fn))};static \u0275cmp=Mt({type:i,selectors:[["app-alert"]],decls:1,vars:1,consts:[["class","fixed z-[9999] right-5 top-[90px] max-w-sm w-auto px-6 py-4 rounded-lg shadow-2xl text-white transition-all duration-300 animate-fade-top",3,"ngClass",4,"ngIf"],[1,"fixed","z-[9999]","right-5","top-[90px]","max-w-sm","w-auto","px-6","py-4","rounded-lg","shadow-2xl","text-white","transition-all","duration-300","animate-fade-top",3,"ngClass"],[1,"font-semibold","tracking-wide","text-sm","sm:text-base"]],template:function(t,n){t&1&&ze(0,Xm,3,7,"div",0),t&2&&te("ngIf",n.alertData.message)},dependencies:[Ft,gn,an],styles:["@keyframes _ngcontent-%COMP%_fadeTop{0%{opacity:0;transform:translateY(-20px)}10%{opacity:1;transform:translateY(0)}90%{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(-20px)}}.animate-fade-top[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_fadeTop 4s ease-in-out forwards}"]})};var Wf=ou(Ec());var _l="176";var gd=0,xh=1,_d=2;var vh=1,xd=2,hi=3,Mi=0,Yt=1,tn=2,Ri=0,br=1,xo=2,yh=3,bh=4,vd=5,Qi=100,yd=101,bd=102,Sd=103,Md=104,wd=200,Ed=201,Td=202,Cd=203,Wa=204,Xa=205,Ad=206,Rd=207,Id=208,Pd=209,Dd=210,Ld=211,Fd=212,Ud=213,Nd=214,xl=0,vl=1,yl=2,Sr=3,bl=4,Sl=5,Ml=6,wl=7,El=0,Od=1,Bd=2,Ii=0,kd=1,zd=2,Vd=3,Hd=4,Gd=5,Wd=6,Xd=7;var rh=300,Cr=301,Ar=302,Tl=303,Cl=304,vo=306,qa=1e3,Ki=1001,Ya=1002,On=1003,qd=1004;var yo=1005;var Yn=1006,Al=1007;var ar=1008;var jn=1009,Sh=1010,Mh=1011,_s=1012,Rl=1013,lr=1014,ui=1015,xs=1016,Il=1017,Pl=1018,vs=1020,wh=35902,Eh=1021,Th=1022,zn=1023,os=1026,ys=1027,Ch=1028,Dl=1029,Ah=1030,Ll=1031;var Fl=1033,bo=33776,So=33777,Mo=33778,wo=33779,Ul=35840,Nl=35841,Ol=35842,Bl=35843,kl=36196,zl=37492,Vl=37496,Hl=37808,Gl=37809,Wl=37810,Xl=37811,ql=37812,Yl=37813,$l=37814,jl=37815,Zl=37816,Jl=37817,Kl=37818,Ql=37819,ec=37820,tc=37821,Eo=36492,nc=36494,ic=36495,Rh=36283,rc=36284,sc=36285,oc=36286;var Gs=2300,$a=2301,Ga=2302,sh=2400,oh=2401,ah=2402;var Yd=3200,$d=3201;var ac=0,jd=1,Pi="",Tn="srgb",Mr="srgb-linear",Ws="linear",xt="srgb";var yr=7680;var lh=519,Zd=512,Jd=513,Kd=514,Ih=515,Qd=516,ef=517,tf=518,nf=519,ch=35044;var Ph="300 es",oi=2e3,Xs=2001;var wi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Dc=Math.PI/180,qs=180/Math.PI;function bs(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(un[i&255]+un[i>>8&255]+un[i>>16&255]+un[i>>24&255]+"-"+un[e&255]+un[e>>8&255]+"-"+un[e>>16&15|64]+un[e>>24&255]+"-"+un[t&63|128]+un[t>>8&255]+"-"+un[t>>16&255]+un[t>>24&255]+un[n&255]+un[n>>8&255]+un[n>>16&255]+un[n>>24&255]).toLowerCase()}function ct(i,e,t){return Math.max(e,Math.min(t,i))}function qm(i,e){return(i%e+e)%e}function Lc(i,e,t){return(1-t)*i+t*e}function Us(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function vn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var _e=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},et=class i{constructor(e,t,n,r,s,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c)}set(e,t,n,r,s,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],p=n[5],g=n[8],v=r[0],m=r[3],d=r[6],A=r[1],C=r[4],b=r[7],L=r[2],P=r[5],D=r[8];return s[0]=o*v+a*A+l*L,s[3]=o*m+a*C+l*P,s[6]=o*d+a*b+l*D,s[1]=c*v+h*A+u*L,s[4]=c*m+h*C+u*P,s[7]=c*d+h*b+u*D,s[2]=f*v+p*A+g*L,s[5]=f*m+p*C+g*P,s[8]=f*d+p*b+g*D,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*s*h+n*a*l+r*s*c-r*o*l}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,f=a*l-h*s,p=c*s-o*l,g=t*u+n*f+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=u*v,e[1]=(r*c-h*n)*v,e[2]=(a*n-r*o)*v,e[3]=f*v,e[4]=(h*t-r*l)*v,e[5]=(r*s-a*t)*v,e[6]=p*v,e[7]=(n*l-c*t)*v,e[8]=(o*t-n*s)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Fc.makeScale(e,t)),this}rotate(e){return this.premultiply(Fc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Fc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Fc=new et;function Dh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ys(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function rf(){let i=Ys("canvas");return i.style.display="block",i}var Wu={};function To(i){i in Wu||(Wu[i]=!0,console.warn(i))}function sf(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function of(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function af(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var Xu=new et().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),qu=new et().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ym(){let i={enabled:!0,workingColorSpace:Mr,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===xt&&(r.r=Si(r.r),r.g=Si(r.g),r.b=Si(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===xt&&(r.r=ss(r.r),r.g=ss(r.g),r.b=ss(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Pi?Ws:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Mr]:{primaries:e,whitePoint:n,transfer:Ws,toXYZ:Xu,fromXYZ:qu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Tn},outputColorSpaceConfig:{drawingBufferColorSpace:Tn}},[Tn]:{primaries:e,whitePoint:n,transfer:xt,toXYZ:Xu,fromXYZ:qu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Tn}}}),i}var ft=Ym();function Si(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ss(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Yr,ja=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Yr===void 0&&(Yr=Ys("canvas")),Yr.width=e.width,Yr.height=e.height;let r=Yr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Yr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ys("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Si(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Si(t[n]/255)*255):t[n]=Si(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},$m=0,as=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$m++}),this.uuid=bs(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Uc(r[o].image)):s.push(Uc(r[o]))}else s=Uc(r);n.url=s}return t||(e.images[this.uuid]=n),n}};function Uc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ja.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var jm=0,cr=(()=>{class i extends wi{constructor(t=i.DEFAULT_IMAGE,n=i.DEFAULT_MAPPING,r=Ki,s=Ki,o=Yn,a=ar,l=zn,c=jn,h=i.DEFAULT_ANISOTROPY,u=Pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jm++}),this.uuid=bs(),this.name="",this.source=new as(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=s,this.magFilter=o,this.minFilter=a,this.anisotropy=h,this.format=l,this.internalFormat=null,this.type=c,this.offset=new _e(0,0),this.repeat=new _e(1,1),this.center=new _e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isTextureArray=t.isTextureArray,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==rh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case qa:t.x=t.x-Math.floor(t.x);break;case Ki:t.x=t.x<0?0:1;break;case Ya:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case qa:t.y=t.y-Math.floor(t.y);break;case Ki:t.y=t.y<0?0:1;break;case Ya:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}return i.DEFAULT_IMAGE=null,i.DEFAULT_MAPPING=rh,i.DEFAULT_ANISOTROPY=1,i})(),Pt=class i{constructor(e=0,t=0,n=0,r=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s,l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],p=l[5],g=l[9],v=l[2],m=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let C=(c+1)/2,b=(p+1)/2,L=(d+1)/2,P=(h+f)/4,D=(u+v)/4,N=(g+m)/4;return C>b&&C>L?C<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(C),r=P/n,s=D/n):b>L?b<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),n=P/r,s=N/r):L<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(L),n=D/s,r=N/s),this.set(n,r,s,t),this}let A=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(f-h)*(f-h));return Math.abs(A)<.001&&(A=1),this.x=(m-g)/A,this.y=(u-v)/A,this.z=(f-h)/A,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this.z=ct(this.z,e.z,t.z),this.w=ct(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this.z=ct(this.z,e,t),this.w=ct(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Za=class extends wi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth?n.depth:1,this.scissor=new Pt(0,0,e,t),this.scissorTest=!1,this.viewport=new Pt(0,0,e,t);let r={width:e,height:t,depth:this.depth};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},n);let s=new cr(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new as(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},li=class extends Za{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},$s=class extends cr{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=On,this.minFilter=On,this.wrapR=Ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ja=class extends cr{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=On,this.minFilter=On,this.wrapR=Ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ei=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],h=n[r+2],u=n[r+3],f=s[o+0],p=s[o+1],g=s[o+2],v=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=v;return}if(u!==v||l!==f||c!==p||h!==g){let m=1-a,d=l*f+c*p+h*g+u*v,A=d>=0?1:-1,C=1-d*d;if(C>Number.EPSILON){let L=Math.sqrt(C),P=Math.atan2(L,d*A);m=Math.sin(m*P)/L,a=Math.sin(a*P)/L}let b=a*A;if(l=l*m+f*b,c=c*m+p*b,h=h*m+g*b,u=u*m+v*b,m===1-a){let L=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=L,c*=L,h*=L,u*=L}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,s,o){let a=n[r],l=n[r+1],c=n[r+2],h=n[r+3],u=s[o],f=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+h*u+l*p-c*f,e[t+1]=l*g+h*f+c*u-a*p,e[t+2]=c*g+h*p+a*f-l*u,e[t+3]=h*g-a*u-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(r/2),u=a(s/2),f=l(n/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=f*h*u+c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u-f*p*g;break;case"YXZ":this._x=f*h*u+c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u+f*p*g;break;case"ZXY":this._x=f*h*u-c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u-f*p*g;break;case"ZYX":this._x=f*h*u-c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u+f*p*g;break;case"YZX":this._x=f*h*u+c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u-f*p*g;break;case"XZY":this._x=f*h*u-c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+a+u;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(n>a&&n>u){let p=2*Math.sqrt(1+n-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>u){let p=2*Math.sqrt(1+a-n-u);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-n-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ct(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+r*c-s*l,this._y=r*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-r*a,this._w=o*h-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,r=this._y,s=this._z,o=this._w,a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;let l=1-a*a;if(l<=Number.EPSILON){let p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=r*u+this._y*f,this._z=s*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},z=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Yu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Yu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*n),h=2*(a*t-s*r),u=2*(s*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-s*u,this.z=r+l*u+s*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this.z=ct(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this.z=ct(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Nc.copy(this).projectOnVector(e),this.sub(Nc)}reflect(e){return this.sub(Nc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Nc=new z,Yu=new Ei,er=class{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Wn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Wn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Wn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Wn):Wn.fromBufferAttribute(s,o),Wn.applyMatrix4(e.matrixWorld),this.expandByPoint(Wn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Sa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Sa.copy(n.boundingBox)),Sa.applyMatrix4(e.matrixWorld),this.union(Sa)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Wn),Wn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ns),Ma.subVectors(this.max,Ns),$r.subVectors(e.a,Ns),jr.subVectors(e.b,Ns),Zr.subVectors(e.c,Ns),Xi.subVectors(jr,$r),qi.subVectors(Zr,jr),gr.subVectors($r,Zr);let t=[0,-Xi.z,Xi.y,0,-qi.z,qi.y,0,-gr.z,gr.y,Xi.z,0,-Xi.x,qi.z,0,-qi.x,gr.z,0,-gr.x,-Xi.y,Xi.x,0,-qi.y,qi.x,0,-gr.y,gr.x,0];return!Oc(t,$r,jr,Zr,Ma)||(t=[1,0,0,0,1,0,0,0,1],!Oc(t,$r,jr,Zr,Ma))?!1:(wa.crossVectors(Xi,qi),t=[wa.x,wa.y,wa.z],Oc(t,$r,jr,Zr,Ma))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Wn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Wn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(gi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},gi=[new z,new z,new z,new z,new z,new z,new z,new z],Wn=new z,Sa=new er,$r=new z,jr=new z,Zr=new z,Xi=new z,qi=new z,gr=new z,Ns=new z,Ma=new z,wa=new z,_r=new z;function Oc(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){_r.fromArray(i,s);let a=r.x*Math.abs(_r.x)+r.y*Math.abs(_r.y)+r.z*Math.abs(_r.z),l=e.dot(_r),c=t.dot(_r),h=n.dot(_r);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Zm=new er,Os=new z,Bc=new z,ls=class{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Zm.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Os.subVectors(e,this.center);let t=Os.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Os,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Bc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Os.copy(e.center).add(Bc)),this.expandByPoint(Os.copy(e.center).sub(Bc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},_i=new z,kc=new z,Ea=new z,Yi=new z,zc=new z,Ta=new z,Vc=new z,js=class{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_i)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=_i.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(_i.copy(this.origin).addScaledVector(this.direction,t),_i.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){kc.copy(e).add(t).multiplyScalar(.5),Ea.copy(t).sub(e).normalize(),Yi.copy(this.origin).sub(kc);let s=e.distanceTo(t)*.5,o=-this.direction.dot(Ea),a=Yi.dot(this.direction),l=-Yi.dot(Ea),c=Yi.lengthSq(),h=Math.abs(1-o*o),u,f,p,g;if(h>0)if(u=o*l-a,f=o*a-l,g=s*h,u>=0)if(f>=-g)if(f<=g){let v=1/h;u*=v,f*=v,p=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=s,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;else f=-s,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*s+a)),f=u>0?-s:Math.min(Math.max(-s,-l),s),p=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(u=Math.max(0,-(o*s+a)),f=u>0?s:Math.min(Math.max(-s,-l),s),p=-u*u+f*(f+2*l)+c);else f=o>0?-s:s,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(kc).addScaledVector(Ea,f),p}intersectSphere(e,t){_i.subVectors(e.center,this.origin);let n=_i.dot(this.direction),r=_i.dot(_i)-n*n,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),h>=0?(s=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),u>=0?(a=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,_i)!==null}intersectTriangle(e,t,n,r,s){zc.subVectors(t,e),Ta.subVectors(n,e),Vc.crossVectors(zc,Ta);let o=this.direction.dot(Vc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Yi.subVectors(this.origin,e);let l=a*this.direction.dot(Ta.crossVectors(Yi,Ta));if(l<0)return null;let c=a*this.direction.dot(zc.cross(Yi));if(c<0||l+c>o)return null;let h=-a*Yi.dot(Vc);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ct=class i{constructor(e,t,n,r,s,o,a,l,c,h,u,f,p,g,v,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c,h,u,f,p,g,v,m)}set(e,t,n,r,s,o,a,l,c,h,u,f,p,g,v,m){let d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=g,d[11]=v,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,r=1/Jr.setFromMatrixColumn(e,0).length(),s=1/Jr.setFromMatrixColumn(e,1).length(),o=1/Jr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let f=o*h,p=o*u,g=a*h,v=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+g*c,t[5]=f-v*c,t[9]=-a*l,t[2]=v-f*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*h,p=l*u,g=c*h,v=c*u;t[0]=f+v*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=p*a-g,t[6]=v+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*h,p=l*u,g=c*h,v=c*u;t[0]=f-v*a,t[4]=-o*u,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*h,t[9]=v-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*h,p=o*u,g=a*h,v=a*u;t[0]=l*h,t[4]=g*c-p,t[8]=f*c+v,t[1]=l*u,t[5]=v*c+f,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,p=o*c,g=a*l,v=a*c;t[0]=l*h,t[4]=v-f*u,t[8]=g*u+p,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=p*u+g,t[10]=f-v*u}else if(e.order==="XZY"){let f=o*l,p=o*c,g=a*l,v=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+v,t[5]=o*h,t[9]=p*u-g,t[2]=g*u-p,t[6]=a*h,t[10]=v*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Jm,e,Km)}lookAt(e,t,n){let r=this.elements;return wn.subVectors(e,t),wn.lengthSq()===0&&(wn.z=1),wn.normalize(),$i.crossVectors(n,wn),$i.lengthSq()===0&&(Math.abs(n.z)===1?wn.x+=1e-4:wn.z+=1e-4,wn.normalize(),$i.crossVectors(n,wn)),$i.normalize(),Ca.crossVectors(wn,$i),r[0]=$i.x,r[4]=Ca.x,r[8]=wn.x,r[1]=$i.y,r[5]=Ca.y,r[9]=wn.y,r[2]=$i.z,r[6]=Ca.z,r[10]=wn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],p=n[13],g=n[2],v=n[6],m=n[10],d=n[14],A=n[3],C=n[7],b=n[11],L=n[15],P=r[0],D=r[4],N=r[8],M=r[12],_=r[1],I=r[5],V=r[9],H=r[13],Q=r[2],K=r[6],J=r[10],ee=r[14],X=r[3],ge=r[7],ve=r[11],be=r[15];return s[0]=o*P+a*_+l*Q+c*X,s[4]=o*D+a*I+l*K+c*ge,s[8]=o*N+a*V+l*J+c*ve,s[12]=o*M+a*H+l*ee+c*be,s[1]=h*P+u*_+f*Q+p*X,s[5]=h*D+u*I+f*K+p*ge,s[9]=h*N+u*V+f*J+p*ve,s[13]=h*M+u*H+f*ee+p*be,s[2]=g*P+v*_+m*Q+d*X,s[6]=g*D+v*I+m*K+d*ge,s[10]=g*N+v*V+m*J+d*ve,s[14]=g*M+v*H+m*ee+d*be,s[3]=A*P+C*_+b*Q+L*X,s[7]=A*D+C*I+b*K+L*ge,s[11]=A*N+C*V+b*J+L*ve,s[15]=A*M+C*H+b*ee+L*be,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],p=e[14],g=e[3],v=e[7],m=e[11],d=e[15];return g*(+s*l*u-r*c*u-s*a*f+n*c*f+r*a*p-n*l*p)+v*(+t*l*p-t*c*f+s*o*f-r*o*p+r*c*h-s*l*h)+m*(+t*c*u-t*a*p-s*o*u+n*o*p+s*a*h-n*c*h)+d*(-r*a*h-t*l*u+t*a*f+r*o*u-n*o*f+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],p=e[11],g=e[12],v=e[13],m=e[14],d=e[15],A=u*m*c-v*f*c+v*l*p-a*m*p-u*l*d+a*f*d,C=g*f*c-h*m*c-g*l*p+o*m*p+h*l*d-o*f*d,b=h*v*c-g*u*c+g*a*p-o*v*p-h*a*d+o*u*d,L=g*u*l-h*v*l-g*a*f+o*v*f+h*a*m-o*u*m,P=t*A+n*C+r*b+s*L;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/P;return e[0]=A*D,e[1]=(v*f*s-u*m*s-v*r*p+n*m*p+u*r*d-n*f*d)*D,e[2]=(a*m*s-v*l*s+v*r*c-n*m*c-a*r*d+n*l*d)*D,e[3]=(u*l*s-a*f*s-u*r*c+n*f*c+a*r*p-n*l*p)*D,e[4]=C*D,e[5]=(h*m*s-g*f*s+g*r*p-t*m*p-h*r*d+t*f*d)*D,e[6]=(g*l*s-o*m*s-g*r*c+t*m*c+o*r*d-t*l*d)*D,e[7]=(o*f*s-h*l*s+h*r*c-t*f*c-o*r*p+t*l*p)*D,e[8]=b*D,e[9]=(g*u*s-h*v*s-g*n*p+t*v*p+h*n*d-t*u*d)*D,e[10]=(o*v*s-g*a*s+g*n*c-t*v*c-o*n*d+t*a*d)*D,e[11]=(h*a*s-o*u*s-h*n*c+t*u*c+o*n*p-t*a*p)*D,e[12]=L*D,e[13]=(h*v*r-g*u*r+g*n*f-t*v*f-h*n*m+t*u*m)*D,e[14]=(g*a*r-o*v*r-g*n*l+t*v*l+o*n*m-t*a*m)*D,e[15]=(o*u*r-h*a*r+h*n*l-t*u*l-o*n*f+t*a*f)*D,this}scale(e){let t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,h*a+n,h*l-r*o,0,c*l-r*a,h*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,h=o+o,u=a+a,f=s*c,p=s*h,g=s*u,v=o*h,m=o*u,d=a*u,A=l*c,C=l*h,b=l*u,L=n.x,P=n.y,D=n.z;return r[0]=(1-(v+d))*L,r[1]=(p+b)*L,r[2]=(g-C)*L,r[3]=0,r[4]=(p-b)*P,r[5]=(1-(f+d))*P,r[6]=(m+A)*P,r[7]=0,r[8]=(g+C)*D,r[9]=(m-A)*D,r[10]=(1-(f+v))*D,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements,s=Jr.set(r[0],r[1],r[2]).length(),o=Jr.set(r[4],r[5],r[6]).length(),a=Jr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Xn.copy(this);let c=1/s,h=1/o,u=1/a;return Xn.elements[0]*=c,Xn.elements[1]*=c,Xn.elements[2]*=c,Xn.elements[4]*=h,Xn.elements[5]*=h,Xn.elements[6]*=h,Xn.elements[8]*=u,Xn.elements[9]*=u,Xn.elements[10]*=u,t.setFromRotationMatrix(Xn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=oi){let l=this.elements,c=2*s/(t-e),h=2*s/(n-r),u=(t+e)/(t-e),f=(n+r)/(n-r),p,g;if(a===oi)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Xs)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=oi){let l=this.elements,c=1/(t-e),h=1/(n-r),u=1/(o-s),f=(t+e)*c,p=(n+r)*h,g,v;if(a===oi)g=(o+s)*u,v=-2*u;else if(a===Xs)g=s*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Jr=new z,Xn=new Ct,Jm=new z(0,0,0),Km=new z(1,1,1),$i=new z,Ca=new z,wn=new z,$u=new Ct,ju=new Ei,Ti=(()=>{class i{constructor(t=0,n=0,r=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,r,s=this._order){return this._x=t,this._y=n,this._z=r,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,r=!0){let s=t.elements,o=s[0],a=s[4],l=s[8],c=s[1],h=s[5],u=s[9],f=s[2],p=s[6],g=s[10];switch(n){case"XYZ":this._y=Math.asin(ct(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,g),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(p,h),this._z=0);break;case"YXZ":this._x=Math.asin(-ct(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(l,g),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-f,o),this._z=0);break;case"ZXY":this._x=Math.asin(ct(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,g),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-ct(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,g),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(ct(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-f,o)):(this._x=0,this._y=Math.atan2(l,g));break;case"XZY":this._z=Math.asin(-ct(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,h),this._y=Math.atan2(l,o)):(this._x=Math.atan2(-u,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,r){return $u.makeRotationFromQuaternion(t),this.setFromRotationMatrix($u,n,r)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return ju.setFromEuler(this),this.setFromQuaternion(ju,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}return i.DEFAULT_ORDER="XYZ",i})(),cs=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Qm=0,Zu=new z,Kr=new Ei,xi=new Ct,Aa=new z,Bs=new z,eg=new z,tg=new Ei,Ju=new z(1,0,0),Ku=new z(0,1,0),Qu=new z(0,0,1),ed={type:"added"},ng={type:"removed"},Qr={type:"childadded",child:null},Hc={type:"childremoved",child:null},Bn=(()=>{class i extends wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Qm++}),this.uuid=bs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new z,n=new Ti,r=new Ei,s=new z(1,1,1);function o(){r.setFromEuler(n,!1)}function a(){n.setFromQuaternion(r,void 0,!1)}n._onChange(o),r._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ct},normalMatrix:{value:new et}}),this.matrix=new Ct,this.matrixWorld=new Ct,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Kr.setFromAxisAngle(t,n),this.quaternion.multiply(Kr),this}rotateOnWorldAxis(t,n){return Kr.setFromAxisAngle(t,n),this.quaternion.premultiply(Kr),this}rotateX(t){return this.rotateOnAxis(Ju,t)}rotateY(t){return this.rotateOnAxis(Ku,t)}rotateZ(t){return this.rotateOnAxis(Qu,t)}translateOnAxis(t,n){return Zu.copy(t).applyQuaternion(this.quaternion),this.position.add(Zu.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(Ju,t)}translateY(t){return this.translateOnAxis(Ku,t)}translateZ(t){return this.translateOnAxis(Qu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(xi.copy(this.matrixWorld).invert())}lookAt(t,n,r){t.isVector3?Aa.copy(t):Aa.set(t,n,r);let s=this.parent;this.updateWorldMatrix(!0,!1),Bs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xi.lookAt(Bs,Aa,this.up):xi.lookAt(Aa,Bs,this.up),this.quaternion.setFromRotationMatrix(xi),s&&(xi.extractRotation(s.matrixWorld),Kr.setFromRotationMatrix(xi),this.quaternion.premultiply(Kr.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ed),Qr.child=t,this.dispatchEvent(Qr),Qr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(ng),Hc.child=t,this.dispatchEvent(Hc),Hc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),xi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),xi.multiply(t.parent.matrixWorld)),t.applyMatrix4(xi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ed),Qr.child=t,this.dispatchEvent(Qr),Qr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let r=0,s=this.children.length;r<s;r++){let a=this.children[r].getObjectByProperty(t,n);if(a!==void 0)return a}}getObjectsByProperty(t,n,r=[]){this[t]===n&&r.push(this);let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].getObjectsByProperty(t,n,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bs,t,eg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bs,tg,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);let n=this.children;for(let r=0,s=n.length;r<s;r++)n[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let n=this.children;for(let r=0,s=n.length;r<s;r++)n[r].traverseVisible(t)}traverseAncestors(t){let n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let n=this.children;for(let r=0,s=n.length;r<s;r++)n[r].updateMatrixWorld(t)}updateWorldMatrix(t,n){let r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){let n=t===void 0||typeof t=="string",r={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(l=>Zn(dt({},l),{boundingBox:l.boundingBox?{min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}:void 0,boundingSphere:l.boundingSphere?{radius:l.boundingSphere.radius,center:l.boundingSphere.center.toArray()}:void 0})),s.instanceInfo=this._instanceInfo.map(l=>dt({},l)),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function o(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);let l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){let c=l.shapes;if(Array.isArray(c))for(let h=0,u=c.length;h<u;h++){let f=c[h];o(t.shapes,f)}else o(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let l=[];for(let c=0,h=this.material.length;c<h;c++)l.push(o(t.materials,this.material[c]));s.material=l}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){let c=this.animations[l];s.animations.push(o(t.animations,c))}}if(n){let l=a(t.geometries),c=a(t.materials),h=a(t.textures),u=a(t.images),f=a(t.shapes),p=a(t.skeletons),g=a(t.animations),v=a(t.nodes);l.length>0&&(r.geometries=l),c.length>0&&(r.materials=c),h.length>0&&(r.textures=h),u.length>0&&(r.images=u),f.length>0&&(r.shapes=f),p.length>0&&(r.skeletons=p),g.length>0&&(r.animations=g),v.length>0&&(r.nodes=v)}return r.object=s,r;function a(l){let c=[];for(let h in l){let u=l[h];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let r=0;r<t.children.length;r++){let s=t.children[r];this.add(s.clone())}return this}}return i.DEFAULT_UP=new z(0,1,0),i.DEFAULT_MATRIX_AUTO_UPDATE=!0,i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0,i})(),qn=new z,vi=new z,Gc=new z,yi=new z,es=new z,ts=new z,td=new z,Wc=new z,Xc=new z,qc=new z,Yc=new Pt,$c=new Pt,jc=new Pt,Ji=class i{constructor(e=new z,t=new z,n=new z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),qn.subVectors(e,t),r.cross(qn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){qn.subVectors(r,t),vi.subVectors(n,t),Gc.subVectors(e,t);let o=qn.dot(qn),a=qn.dot(vi),l=qn.dot(Gc),c=vi.dot(vi),h=vi.dot(Gc),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;let f=1/u,p=(c*l-a*h)*f,g=(o*h-a*l)*f;return s.set(1-p-g,g,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,yi)===null?!1:yi.x>=0&&yi.y>=0&&yi.x+yi.y<=1}static getInterpolation(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,yi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,yi.x),l.addScaledVector(o,yi.y),l.addScaledVector(a,yi.z),l)}static getInterpolatedAttribute(e,t,n,r,s,o){return Yc.setScalar(0),$c.setScalar(0),jc.setScalar(0),Yc.fromBufferAttribute(e,t),$c.fromBufferAttribute(e,n),jc.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Yc,s.x),o.addScaledVector($c,s.y),o.addScaledVector(jc,s.z),o}static isFrontFacing(e,t,n,r){return qn.subVectors(n,t),vi.subVectors(e,t),qn.cross(vi).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qn.subVectors(this.c,this.b),vi.subVectors(this.a,this.b),qn.cross(vi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,s=this.c,o,a;es.subVectors(r,n),ts.subVectors(s,n),Wc.subVectors(e,n);let l=es.dot(Wc),c=ts.dot(Wc);if(l<=0&&c<=0)return t.copy(n);Xc.subVectors(e,r);let h=es.dot(Xc),u=ts.dot(Xc);if(h>=0&&u<=h)return t.copy(r);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(es,o);qc.subVectors(e,s);let p=es.dot(qc),g=ts.dot(qc);if(g>=0&&p<=g)return t.copy(s);let v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(ts,a);let m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return td.subVectors(s,r),a=(u-h)/(u-h+(p-g)),t.copy(r).addScaledVector(td,a);let d=1/(m+v+f);return o=v*d,a=f*d,t.copy(n).addScaledVector(es,o).addScaledVector(ts,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},lf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ji={h:0,s:0,l:0},Ra={h:0,s:0,l:0};function Zc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Qe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Tn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ft.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=ft.workingColorSpace){return this.r=e,this.g=t,this.b=n,ft.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=ft.workingColorSpace){if(e=qm(e,1),t=ct(t,0,1),n=ct(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Zc(o,s,e+1/3),this.g=Zc(o,s,e),this.b=Zc(o,s,e-1/3)}return ft.toWorkingColorSpace(this,r),this}setStyle(e,t=Tn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Tn){let n=lf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Si(e.r),this.g=Si(e.g),this.b=Si(e.b),this}copyLinearToSRGB(e){return this.r=ss(e.r),this.g=ss(e.g),this.b=ss(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tn){return ft.fromWorkingColorSpace(dn.copy(this),e),Math.round(ct(dn.r*255,0,255))*65536+Math.round(ct(dn.g*255,0,255))*256+Math.round(ct(dn.b*255,0,255))}getHexString(e=Tn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ft.workingColorSpace){ft.fromWorkingColorSpace(dn.copy(this),t);let n=dn.r,r=dn.g,s=dn.b,o=Math.max(n,r,s),a=Math.min(n,r,s),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-n)/u+2;break;case s:l=(n-r)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ft.workingColorSpace){return ft.fromWorkingColorSpace(dn.copy(this),t),e.r=dn.r,e.g=dn.g,e.b=dn.b,e}getStyle(e=Tn){ft.fromWorkingColorSpace(dn.copy(this),e);let t=dn.r,n=dn.g,r=dn.b;return e!==Tn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(ji),this.setHSL(ji.h+e,ji.s+t,ji.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ji),e.getHSL(Ra);let n=Lc(ji.h,Ra.h,t),r=Lc(ji.s,Ra.s,t),s=Lc(ji.l,Ra.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},dn=new Qe;Qe.NAMES=lf;var ig=0,Ci=class extends wi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ig++}),this.uuid=bs(),this.name="",this.type="Material",this.blending=br,this.side=Mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wa,this.blendDst=Xa,this.blendEquation=Qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qe(0,0,0),this.blendAlpha=0,this.depthFunc=Sr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=yr,this.stencilZFail=yr,this.stencilZPass=yr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==br&&(n.blending=this.blending),this.side!==Mi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Wa&&(n.blendSrc=this.blendSrc),this.blendDst!==Xa&&(n.blendDst=this.blendDst),this.blendEquation!==Qi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Sr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==lh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==yr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==yr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==yr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},$n=class extends Ci{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ti,this.combine=El,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Ht=new z,Ia=new _e,rg=0,Cn=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:rg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ch,this.updateRanges=[],this.gpuType=ui,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ia.fromBufferAttribute(this,t),Ia.applyMatrix3(e),this.setXY(t,Ia.x,Ia.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix3(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix4(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyNormalMatrix(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.transformDirection(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Us(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=vn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Us(t,this.array)),t}setX(e,t){return this.normalized&&(t=vn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Us(t,this.array)),t}setY(e,t){return this.normalized&&(t=vn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Us(t,this.array)),t}setZ(e,t){return this.normalized&&(t=vn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Us(t,this.array)),t}setW(e,t){return this.normalized&&(t=vn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=vn(t,this.array),n=vn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=vn(t,this.array),n=vn(n,this.array),r=vn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=vn(t,this.array),n=vn(n,this.array),r=vn(r,this.array),s=vn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ch&&(e.usage=this.usage),e}};var Zs=class extends Cn{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Js=class extends Cn{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Nt=class extends Cn{constructor(e,t,n){super(new Float32Array(e),t,n)}},sg=0,Nn=new Ct,Jc=new Bn,ns=new z,En=new er,ks=new er,Jt=new z,kn=class i extends wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sg++}),this.uuid=bs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Dh(e)?Js:Zs)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new et().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Nn.makeRotationFromQuaternion(e),this.applyMatrix4(Nn),this}rotateX(e){return Nn.makeRotationX(e),this.applyMatrix4(Nn),this}rotateY(e){return Nn.makeRotationY(e),this.applyMatrix4(Nn),this}rotateZ(e){return Nn.makeRotationZ(e),this.applyMatrix4(Nn),this}translate(e,t,n){return Nn.makeTranslation(e,t,n),this.applyMatrix4(Nn),this}scale(e,t,n){return Nn.makeScale(e,t,n),this.applyMatrix4(Nn),this}lookAt(e){return Jc.lookAt(e),Jc.updateMatrix(),this.applyMatrix4(Jc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ns).negate(),this.translate(ns.x,ns.y,ns.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let r=0,s=e.length;r<s;r++){let o=e[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Nt(n,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new er);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let s=t[n];En.setFromBufferAttribute(s),this.morphTargetsRelative?(Jt.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint(Jt),Jt.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint(Jt)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ls);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){let n=this.boundingSphere.center;if(En.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];ks.setFromBufferAttribute(a),this.morphTargetsRelative?(Jt.addVectors(En.min,ks.min),En.expandByPoint(Jt),Jt.addVectors(En.max,ks.max),En.expandByPoint(Jt)):(En.expandByPoint(ks.min),En.expandByPoint(ks.max))}En.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)Jt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Jt));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Jt.fromBufferAttribute(a,c),l&&(ns.fromBufferAttribute(e,c),Jt.add(ns)),r=Math.max(r,n.distanceToSquared(Jt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Cn(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let N=0;N<n.count;N++)a[N]=new z,l[N]=new z;let c=new z,h=new z,u=new z,f=new _e,p=new _e,g=new _e,v=new z,m=new z;function d(N,M,_){c.fromBufferAttribute(n,N),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,_),f.fromBufferAttribute(s,N),p.fromBufferAttribute(s,M),g.fromBufferAttribute(s,_),h.sub(c),u.sub(c),p.sub(f),g.sub(f);let I=1/(p.x*g.y-g.x*p.y);isFinite(I)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(I),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(I),a[N].add(v),a[M].add(v),a[_].add(v),l[N].add(m),l[M].add(m),l[_].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let N=0,M=A.length;N<M;++N){let _=A[N],I=_.start,V=_.count;for(let H=I,Q=I+V;H<Q;H+=3)d(e.getX(H+0),e.getX(H+1),e.getX(H+2))}let C=new z,b=new z,L=new z,P=new z;function D(N){L.fromBufferAttribute(r,N),P.copy(L);let M=a[N];C.copy(M),C.sub(L.multiplyScalar(L.dot(M))).normalize(),b.crossVectors(P,M);let I=b.dot(l[N])<0?-1:1;o.setXYZW(N,C.x,C.y,C.z,I)}for(let N=0,M=A.length;N<M;++N){let _=A[N],I=_.start,V=_.count;for(let H=I,Q=I+V;H<Q;H+=3)D(e.getX(H+0)),D(e.getX(H+1)),D(e.getX(H+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Cn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let r=new z,s=new z,o=new z,a=new z,l=new z,c=new z,h=new z,u=new z;if(e)for(let f=0,p=e.count;f<p;f+=3){let g=e.getX(f+0),v=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Jt.fromBufferAttribute(e,t),Jt.normalize(),e.setXYZ(t,Jt.x,Jt.y,Jt.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),p=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*h;for(let d=0;d<h;d++)f[g++]=c[p++]}return new Cn(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=e(l,n);t.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],p=e(f,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let c in r){let h=r[c];this.setAttribute(c,h.clone(t))}let s=e.morphAttributes;for(let c in s){let h=[],u=s[c];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},nd=new Ct,xr=new js,Pa=new ls,id=new z,Da=new z,La=new z,Fa=new z,Kc=new z,Ua=new z,rd=new z,Na=new z,Et=class extends Bn{constructor(e=new kn,t=new $n){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){Ua.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=a[l],u=s[l];h!==0&&(Kc.fromBufferAttribute(u,e),o?Ua.addScaledVector(Kc,h):Ua.addScaledVector(Kc.sub(t),h))}t.add(Ua)}return t}raycast(e,t){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Pa.copy(n.boundingSphere),Pa.applyMatrix4(s),xr.copy(e.ray).recast(e.near),!(Pa.containsPoint(xr.origin)===!1&&(xr.intersectSphere(Pa,id)===null||xr.origin.distanceToSquared(id)>(e.far-e.near)**2))&&(nd.copy(s).invert(),xr.copy(e.ray).applyMatrix4(nd),!(n.boundingBox!==null&&xr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,xr)))}_computeIntersections(e,t,n){let r,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){let m=f[g],d=o[m.materialIndex],A=Math.max(m.start,p.start),C=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let b=A,L=C;b<L;b+=3){let P=a.getX(b),D=a.getX(b+1),N=a.getX(b+2);r=Oa(this,d,e,n,c,h,u,P,D,N),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=g,d=v;m<d;m+=3){let A=a.getX(m),C=a.getX(m+1),b=a.getX(m+2);r=Oa(this,o,e,n,c,h,u,A,C,b),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){let m=f[g],d=o[m.materialIndex],A=Math.max(m.start,p.start),C=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let b=A,L=C;b<L;b+=3){let P=b,D=b+1,N=b+2;r=Oa(this,d,e,n,c,h,u,P,D,N),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=g,d=v;m<d;m+=3){let A=m,C=m+1,b=m+2;r=Oa(this,o,e,n,c,h,u,A,C,b),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}};function og(i,e,t,n,r,s,o,a){let l;if(e.side===Yt?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===Mi,a),l===null)return null;Na.copy(a),Na.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Na);return c<t.near||c>t.far?null:{distance:c,point:Na.clone(),object:i}}function Oa(i,e,t,n,r,s,o,a,l,c){i.getVertexPosition(a,Da),i.getVertexPosition(l,La),i.getVertexPosition(c,Fa);let h=og(i,e,t,n,Da,La,Fa,rd);if(h){let u=new z;Ji.getBarycoord(rd,Da,La,Fa,u),r&&(h.uv=Ji.getInterpolatedAttribute(r,a,l,c,u,new _e)),s&&(h.uv1=Ji.getInterpolatedAttribute(s,a,l,c,u,new _e)),o&&(h.normal=Ji.getInterpolatedAttribute(o,a,l,c,u,new z),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new z,materialIndex:0};Ji.getNormal(Da,La,Fa,f.normal),h.face=f,h.barycoord=u}return h}var hs=class i extends kn{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,p=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,r,o,2),g("x","z","y",1,-1,e,n,-t,r,o,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Nt(c,3)),this.setAttribute("normal",new Nt(h,3)),this.setAttribute("uv",new Nt(u,2));function g(v,m,d,A,C,b,L,P,D,N,M){let _=b/D,I=L/N,V=b/2,H=L/2,Q=P/2,K=D+1,J=N+1,ee=0,X=0,ge=new z;for(let ve=0;ve<J;ve++){let be=ve*I-H;for(let Oe=0;Oe<K;Oe++){let $e=Oe*_-V;ge[v]=$e*A,ge[m]=be*C,ge[d]=Q,c.push(ge.x,ge.y,ge.z),ge[v]=0,ge[m]=0,ge[d]=P>0?1:-1,h.push(ge.x,ge.y,ge.z),u.push(Oe/D),u.push(1-ve/N),ee+=1}}for(let ve=0;ve<N;ve++)for(let be=0;be<D;be++){let Oe=f+be+K*ve,$e=f+be+K*(ve+1),Y=f+(be+1)+K*(ve+1),se=f+(be+1)+K*ve;l.push(Oe,$e,se),l.push($e,Y,se),X+=6}a.addGroup(p,X,M),p+=X,f+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Rr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function fn(i){let e={};for(let t=0;t<i.length;t++){let n=Rr(i[t]);for(let r in n)e[r]=n[r]}return e}function ag(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Lh(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ft.workingColorSpace}var cf={clone:Rr,merge:fn},lg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,An=class extends Ci{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=lg,this.fragmentShader=cg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Rr(e.uniforms),this.uniformsGroups=ag(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Ks=class extends Bn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ct,this.projectionMatrix=new Ct,this.projectionMatrixInverse=new Ct,this.coordinateSystem=oi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Zi=new z,sd=new _e,od=new _e,Gt=class extends Ks{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=qs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Dc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qs*2*Math.atan(Math.tan(Dc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Zi.x,Zi.y).multiplyScalar(-e/Zi.z),Zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Zi.x,Zi.y).multiplyScalar(-e/Zi.z)}getViewSize(e,t){return this.getViewBounds(e,sd,od),t.subVectors(od,sd)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Dc*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},is=-90,rs=1,Ka=class extends Bn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Gt(is,rs,e,t);r.layers=this.layers,this.add(r);let s=new Gt(is,rs,e,t);s.layers=this.layers,this.add(s);let o=new Gt(is,rs,e,t);o.layers=this.layers,this.add(o);let a=new Gt(is,rs,e,t);a.layers=this.layers,this.add(a);let l=new Gt(is,rs,e,t);l.layers=this.layers,this.add(l);let c=new Gt(is,rs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,l]=t;for(let c of t)this.remove(c);if(e===oi)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Xs)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,r),e.render(t,h),e.setRenderTarget(u,f,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Qs=class extends cr{constructor(e=[],t=Cr,n,r,s,o,a,l,c,h){super(e,t,n,r,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Qa=class extends li{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Qs(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Yn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new hs(5,5,5),s=new An({name:"CubemapFromEquirect",uniforms:Rr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Yt,blending:Ri});s.uniforms.tEquirect.value=t;let o=new Et(r,s),a=t.minFilter;return t.minFilter===ar&&(t.minFilter=Yn),new Ka(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}},bi=class extends Bn{constructor(){super(),this.isGroup=!0,this.type="Group"}},hg={type:"move"},us=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let v of e.hand.values()){let m=t.getJointPose(v,n),d=this._getHandJoint(c,v);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(hg)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new bi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var tr=class extends Bn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ti,this.environmentIntensity=1,this.environmentRotation=new Ti,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var Qc=new z,ug=new z,dg=new et,si=class{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Qc.subVectors(n,t).cross(ug.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Qc),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||dg.getNormalMatrix(e),r=this.coplanarPoint(Qc).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},vr=new ls,Ba=new z,ds=class{constructor(e=new si,t=new si,n=new si,r=new si,s=new si,o=new si){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=oi){let n=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],h=r[5],u=r[6],f=r[7],p=r[8],g=r[9],v=r[10],m=r[11],d=r[12],A=r[13],C=r[14],b=r[15];if(n[0].setComponents(l-s,f-c,m-p,b-d).normalize(),n[1].setComponents(l+s,f+c,m+p,b+d).normalize(),n[2].setComponents(l+o,f+h,m+g,b+A).normalize(),n[3].setComponents(l-o,f-h,m-g,b-A).normalize(),n[4].setComponents(l-a,f-u,m-v,b-C).normalize(),t===oi)n[5].setComponents(l+a,f+u,m+v,b+C).normalize();else if(t===Xs)n[5].setComponents(a,u,v,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),vr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),vr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(vr)}intersectsSprite(e){return vr.center.set(0,0,0),vr.radius=.7071067811865476,vr.applyMatrix4(e.matrixWorld),this.intersectsSphere(vr)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Ba.x=r.normal.x>0?e.max.x:e.min.x,Ba.y=r.normal.y>0?e.max.y:e.min.y,Ba.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ba)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var eo=class extends cr{constructor(e,t,n=lr,r,s,o,a=On,l=On,c,h=os){if(h!==os&&h!==ys)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,r,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new as(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}};var Rn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,s=n.length,o;t?o=t:o=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=n[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===o)return r/(s-1);let h=n[r],f=n[r+1]-h,p=(o-h)/f;return(r+p)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);let o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new _e:new z);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new z,r=[],s=[],o=[],a=new z,l=new Ct;for(let p=0;p<=e;p++){let g=p/e;r[p]=this.getTangentAt(g,new z)}s[0]=new z,o[0]=new z;let c=Number.MAX_VALUE,h=Math.abs(r[0].x),u=Math.abs(r[0].y),f=Math.abs(r[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(ct(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(r[p],s[p])}if(t===!0){let p=Math.acos(ct(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],p*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},fs=class extends Rn{constructor(e=0,t=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new _e){let n=t,r=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);let a=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*h-p*u+this.aX,c=f*u+p*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},el=class extends fs{constructor(e,t,n,r,s,o){super(e,t,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Fh(){let i=0,e=0,t=0,n=0;function r(s,o,a,l){i=s,e=a,t=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,u){let f=(o-s)/c-(a-s)/(c+h)+(a-o)/h,p=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,p*=h,r(o,a,f,p)},calc:function(s){let o=s*s,a=o*s;return i+e*s+t*o+n*a}}}var ka=new z,eh=new Fh,th=new Fh,nh=new Fh,tl=class extends Rn{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new z){let n=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=r[(a-1)%s]:(ka.subVectors(r[0],r[1]).add(r[0]),c=ka);let u=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?h=r[(a+2)%s]:(ka.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=ka),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),p),v=Math.pow(u.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(h),p);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),eh.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,v,m),th.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,v,m),nh.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(eh.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),th.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),nh.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(eh.calc(l),th.calc(l),nh.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new z().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function ad(i,e,t,n,r){let s=(n-e)*.5,o=(r-t)*.5,a=i*i,l=i*a;return(2*t-2*n+s+o)*l+(-3*t+3*n-2*s-o)*a+s*i+t}function fg(i,e){let t=1-i;return t*t*e}function pg(i,e){return 2*(1-i)*i*e}function mg(i,e){return i*i*e}function Vs(i,e,t,n){return fg(i,e)+pg(i,t)+mg(i,n)}function gg(i,e){let t=1-i;return t*t*t*e}function _g(i,e){let t=1-i;return 3*t*t*i*e}function xg(i,e){return 3*(1-i)*i*i*e}function vg(i,e){return i*i*i*e}function Hs(i,e,t,n,r){return gg(i,e)+_g(i,t)+xg(i,n)+vg(i,r)}var to=class extends Rn{constructor(e=new _e,t=new _e,n=new _e,r=new _e){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new _e){let n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Hs(e,r.x,s.x,o.x,a.x),Hs(e,r.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},nl=class extends Rn{constructor(e=new z,t=new z,n=new z,r=new z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new z){let n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Hs(e,r.x,s.x,o.x,a.x),Hs(e,r.y,s.y,o.y,a.y),Hs(e,r.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},no=class extends Rn{constructor(e=new _e,t=new _e){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new _e){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new _e){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},il=class extends Rn{constructor(e=new z,t=new z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new z){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new z){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},io=class extends Rn{constructor(e=new _e,t=new _e,n=new _e){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new _e){let n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(Vs(e,r.x,s.x,o.x),Vs(e,r.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},rl=class extends Rn{constructor(e=new z,t=new z,n=new z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new z){let n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(Vs(e,r.x,s.x,o.x),Vs(e,r.y,s.y,o.y),Vs(e,r.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ro=class extends Rn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new _e){let n=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],h=r[o>r.length-2?r.length-1:o+1],u=r[o>r.length-3?r.length-1:o+2];return n.set(ad(a,l.x,c.x,h.x,u.x),ad(a,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new _e().fromArray(r))}return this}},hh=Object.freeze({__proto__:null,ArcCurve:el,CatmullRomCurve3:tl,CubicBezierCurve:to,CubicBezierCurve3:nl,EllipseCurve:fs,LineCurve:no,LineCurve3:il,QuadraticBezierCurve:io,QuadraticBezierCurve3:rl,SplineCurve:ro}),sl=class extends Rn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new hh[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),s=0;for(;s<r.length;){if(r[s]>=n){let o=r[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,s=this.curves;r<s.length;r++){let o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let r=e.curves[t];this.curves.push(new hh[r.type]().fromJSON(r))}return this}},so=class extends sl{constructor(e){super(),this.type="Path",this.currentPoint=new _e,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new no(this.currentPoint.clone(),new _e(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let s=new io(this.currentPoint.clone(),new _e(e,t),new _e(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,o){let a=new to(this.currentPoint.clone(),new _e(e,t),new _e(n,r),new _e(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new ro(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,r,s,o),this}absarc(e,t,n,r,s,o){return this.absellipse(e,t,n,n,r,s,o),this}ellipse(e,t,n,r,s,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,r,s,o,a,l),this}absellipse(e,t,n,r,s,o,a,l){let c=new fs(e,t,n,r,s,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},nr=class extends so{constructor(e){super(e),this.uuid=bs(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let r=e.holes[t];this.holes.push(new so().fromJSON(r))}return this}};function yg(i,e,t=2){let n=e&&e.length,r=n?e[0]*t:i.length,s=hf(i,0,r,t,!0),o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(n&&(s=Eg(i,e,s,t)),i.length>80*t){a=1/0,l=1/0;let h=-1/0,u=-1/0;for(let f=t;f<r;f+=t){let p=i[f],g=i[f+1];p<a&&(a=p),g<l&&(l=g),p>h&&(h=p),g>u&&(u=g)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return oo(s,o,t,a,l,c,0),o}function hf(i,e,t,n,r){let s;if(r===Ng(i,e,t,n)>0)for(let o=e;o<t;o+=n)s=ld(o/n|0,i[o],i[o+1],s);else for(let o=t-n;o>=e;o-=n)s=ld(o/n|0,i[o],i[o+1],s);return s&&ps(s,s.next)&&(lo(s),s=s.next),s}function wr(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(ps(t,t.next)||It(t.prev,t,t.next)===0)){if(lo(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function oo(i,e,t,n,r,s,o){if(!i)return;!o&&s&&Ig(i,n,r,s);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(s?Sg(i,n,r,s):bg(i)){e.push(l.i,i.i,c.i),lo(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Mg(wr(i),e),oo(i,e,t,n,r,s,2)):o===2&&wg(i,e,t,n,r,s):oo(wr(i),e,t,n,r,s,1);break}}}function bg(i){let e=i.prev,t=i,n=i.next;if(It(e,t,n)>=0)return!1;let r=e.x,s=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=Math.min(r,s,o),u=Math.min(a,l,c),f=Math.max(r,s,o),p=Math.max(a,l,c),g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=p&&zs(r,a,s,l,o,c,g.x,g.y)&&It(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Sg(i,e,t,n){let r=i.prev,s=i,o=i.next;if(It(r,s,o)>=0)return!1;let a=r.x,l=s.x,c=o.x,h=r.y,u=s.y,f=o.y,p=Math.min(a,l,c),g=Math.min(h,u,f),v=Math.max(a,l,c),m=Math.max(h,u,f),d=uh(p,g,e,t,n),A=uh(v,m,e,t,n),C=i.prevZ,b=i.nextZ;for(;C&&C.z>=d&&b&&b.z<=A;){if(C.x>=p&&C.x<=v&&C.y>=g&&C.y<=m&&C!==r&&C!==o&&zs(a,h,l,u,c,f,C.x,C.y)&&It(C.prev,C,C.next)>=0||(C=C.prevZ,b.x>=p&&b.x<=v&&b.y>=g&&b.y<=m&&b!==r&&b!==o&&zs(a,h,l,u,c,f,b.x,b.y)&&It(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;C&&C.z>=d;){if(C.x>=p&&C.x<=v&&C.y>=g&&C.y<=m&&C!==r&&C!==o&&zs(a,h,l,u,c,f,C.x,C.y)&&It(C.prev,C,C.next)>=0)return!1;C=C.prevZ}for(;b&&b.z<=A;){if(b.x>=p&&b.x<=v&&b.y>=g&&b.y<=m&&b!==r&&b!==o&&zs(a,h,l,u,c,f,b.x,b.y)&&It(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function Mg(i,e){let t=i;do{let n=t.prev,r=t.next.next;!ps(n,r)&&df(n,t,t.next,r)&&ao(n,r)&&ao(r,n)&&(e.push(n.i,t.i,r.i),lo(t),lo(t.next),t=i=r),t=t.next}while(t!==i);return wr(t)}function wg(i,e,t,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Lg(o,a)){let l=ff(o,a);o=wr(o,o.next),l=wr(l,l.next),oo(o,e,t,n,r,s,0),oo(l,e,t,n,r,s,0);return}a=a.next}o=o.next}while(o!==i)}function Eg(i,e,t,n){let r=[];for(let s=0,o=e.length;s<o;s++){let a=e[s]*n,l=s<o-1?e[s+1]*n:i.length,c=hf(i,a,l,n,!1);c===c.next&&(c.steiner=!0),r.push(Dg(c))}r.sort(Tg);for(let s=0;s<r.length;s++)t=Cg(r[s],t);return t}function Tg(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=n-r}return t}function Cg(i,e){let t=Ag(i,e);if(!t)return e;let n=ff(t,i);return wr(n,n.next),wr(t,t.next)}function Ag(i,e){let t=e,n=i.x,r=i.y,s=-1/0,o;if(ps(i,t))return t;do{if(ps(i,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){let u=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>s&&(s=u,o=t.x<t.next.x?t:t.next,u===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&uf(r<c?n:s,r,l,c,r<c?s:n,r,t.x,t.y)){let u=Math.abs(r-t.y)/(n-t.x);ao(t,i)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&Rg(o,t)))&&(o=t,h=u)}t=t.next}while(t!==a);return o}function Rg(i,e){return It(i.prev,i,e.prev)<0&&It(e.next,i,i.next)<0}function Ig(i,e,t,n){let r=i;do r.z===0&&(r.z=uh(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,Pg(r)}function Pg(i){let e,t=1;do{let n=i,r;i=null;let s=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(r=n,n=n.nextZ,a--):(r=o,o=o.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;n=o}s.nextZ=null,t*=2}while(e>1);return i}function uh(i,e,t,n,r){return i=(i-t)*r|0,e=(e-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Dg(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function uf(i,e,t,n,r,s,o,a){return(r-o)*(e-a)>=(i-o)*(s-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(n-a)}function zs(i,e,t,n,r,s,o,a){return!(i===o&&e===a)&&uf(i,e,t,n,r,s,o,a)}function Lg(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Fg(i,e)&&(ao(i,e)&&ao(e,i)&&Ug(i,e)&&(It(i.prev,i,e.prev)||It(i,e.prev,e))||ps(i,e)&&It(i.prev,i,i.next)>0&&It(e.prev,e,e.next)>0)}function It(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function ps(i,e){return i.x===e.x&&i.y===e.y}function df(i,e,t,n){let r=Va(It(i,e,t)),s=Va(It(i,e,n)),o=Va(It(t,n,i)),a=Va(It(t,n,e));return!!(r!==s&&o!==a||r===0&&za(i,t,e)||s===0&&za(i,n,e)||o===0&&za(t,i,n)||a===0&&za(t,e,n))}function za(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Va(i){return i>0?1:i<0?-1:0}function Fg(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&df(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function ao(i,e){return It(i.prev,i,i.next)<0?It(i,e,i.next)>=0&&It(i,i.prev,e)>=0:It(i,e,i.prev)<0||It(i,i.next,e)<0}function Ug(i,e){let t=i,n=!1,r=(i.x+e.x)/2,s=(i.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function ff(i,e){let t=dh(i.i,i.x,i.y),n=dh(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function ld(i,e,t,n){let r=dh(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function lo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function dh(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Ng(i,e,t,n){let r=0;for(let s=e,o=t-n;s<t;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}var fh=class{static triangulate(e,t,n=2){return yg(e,t,n)}},ai=class i{static area(e){let t=e.length,n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],r=[],s=[];cd(e),hd(n,e);let o=e.length;t.forEach(cd);for(let l=0;l<t.length;l++)r.push(o),o+=t[l].length,hd(n,t[l]);let a=fh.triangulate(n,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}};function cd(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function hd(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var co=class i extends kn{constructor(e=new nr([new _e(.5,.5),new _e(-.5,.5),new _e(-.5,-.5),new _e(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new Nt(r,3)),this.setAttribute("uv",new Nt(s,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:p-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,d=t.extrudePath,A=t.UVGenerator!==void 0?t.UVGenerator:Og,C,b=!1,L,P,D,N;d&&(C=d.getSpacedPoints(h),b=!0,f=!1,L=d.computeFrenetFrames(h,!1),P=new z,D=new z,N=new z),f||(m=0,p=0,g=0,v=0);let M=a.extractPoints(c),_=M.shape,I=M.holes;if(!ai.isClockWise(_)){_=_.reverse();for(let E=0,me=I.length;E<me;E++){let oe=I[E];ai.isClockWise(oe)&&(I[E]=oe.reverse())}}function H(E){let oe=10000000000000001e-36,ue=E[0];for(let ne=1;ne<=E.length;ne++){let Ne=ne%E.length,ae=E[Ne],T=ae.x-ue.x,x=ae.y-ue.y,k=T*T+x*x,Z=Math.max(Math.abs(ae.x),Math.abs(ae.y),Math.abs(ue.x),Math.abs(ue.y)),re=oe*Z*Z;if(k<=re){E.splice(Ne,1),ne--;continue}ue=ae}}H(_),I.forEach(H);let Q=I.length,K=_;for(let E=0;E<Q;E++){let me=I[E];_=_.concat(me)}function J(E,me,oe){return me||console.error("THREE.ExtrudeGeometry: vec does not exist"),E.clone().addScaledVector(me,oe)}let ee=_.length;function X(E,me,oe){let ue,ne,Ne,ae=E.x-me.x,T=E.y-me.y,x=oe.x-E.x,k=oe.y-E.y,Z=ae*ae+T*T,re=ae*k-T*x;if(Math.abs(re)>Number.EPSILON){let q=Math.sqrt(Z),Fe=Math.sqrt(x*x+k*k),ye=me.x-T/q,Ve=me.y+ae/q,qe=oe.x-k/Fe,le=oe.y+x/Fe,Te=((qe-ye)*k-(le-Ve)*x)/(ae*k-T*x);ue=ye+ae*Te-E.x,ne=Ve+T*Te-E.y;let Xe=ue*ue+ne*ne;if(Xe<=2)return new _e(ue,ne);Ne=Math.sqrt(Xe/2)}else{let q=!1;ae>Number.EPSILON?x>Number.EPSILON&&(q=!0):ae<-Number.EPSILON?x<-Number.EPSILON&&(q=!0):Math.sign(T)===Math.sign(k)&&(q=!0),q?(ue=-T,ne=ae,Ne=Math.sqrt(Z)):(ue=ae,ne=T,Ne=Math.sqrt(Z/2))}return new _e(ue/Ne,ne/Ne)}let ge=[];for(let E=0,me=K.length,oe=me-1,ue=E+1;E<me;E++,oe++,ue++)oe===me&&(oe=0),ue===me&&(ue=0),ge[E]=X(K[E],K[oe],K[ue]);let ve=[],be,Oe=ge.concat();for(let E=0,me=Q;E<me;E++){let oe=I[E];be=[];for(let ue=0,ne=oe.length,Ne=ne-1,ae=ue+1;ue<ne;ue++,Ne++,ae++)Ne===ne&&(Ne=0),ae===ne&&(ae=0),be[ue]=X(oe[ue],oe[Ne],oe[ae]);ve.push(be),Oe=Oe.concat(be)}let $e;if(m===0)$e=ai.triangulateShape(K,I);else{let E=[],me=[];for(let oe=0;oe<m;oe++){let ue=oe/m,ne=p*Math.cos(ue*Math.PI/2),Ne=g*Math.sin(ue*Math.PI/2)+v;for(let ae=0,T=K.length;ae<T;ae++){let x=J(K[ae],ge[ae],Ne);We(x.x,x.y,-ne),ue===0&&E.push(x)}for(let ae=0,T=Q;ae<T;ae++){let x=I[ae];be=ve[ae];let k=[];for(let Z=0,re=x.length;Z<re;Z++){let q=J(x[Z],be[Z],Ne);We(q.x,q.y,-ne),ue===0&&k.push(q)}ue===0&&me.push(k)}}$e=ai.triangulateShape(E,me)}let Y=$e.length,se=g+v;for(let E=0;E<ee;E++){let me=f?J(_[E],Oe[E],se):_[E];b?(D.copy(L.normals[0]).multiplyScalar(me.x),P.copy(L.binormals[0]).multiplyScalar(me.y),N.copy(C[0]).add(D).add(P),We(N.x,N.y,N.z)):We(me.x,me.y,0)}for(let E=1;E<=h;E++)for(let me=0;me<ee;me++){let oe=f?J(_[me],Oe[me],se):_[me];b?(D.copy(L.normals[E]).multiplyScalar(oe.x),P.copy(L.binormals[E]).multiplyScalar(oe.y),N.copy(C[E]).add(D).add(P),We(N.x,N.y,N.z)):We(oe.x,oe.y,u/h*E)}for(let E=m-1;E>=0;E--){let me=E/m,oe=p*Math.cos(me*Math.PI/2),ue=g*Math.sin(me*Math.PI/2)+v;for(let ne=0,Ne=K.length;ne<Ne;ne++){let ae=J(K[ne],ge[ne],ue);We(ae.x,ae.y,u+oe)}for(let ne=0,Ne=I.length;ne<Ne;ne++){let ae=I[ne];be=ve[ne];for(let T=0,x=ae.length;T<x;T++){let k=J(ae[T],be[T],ue);b?We(k.x,k.y+C[h-1].y,C[h-1].x+oe):We(k.x,k.y,u+oe)}}}pe(),de();function pe(){let E=r.length/3;if(f){let me=0,oe=ee*me;for(let ue=0;ue<Y;ue++){let ne=$e[ue];Le(ne[2]+oe,ne[1]+oe,ne[0]+oe)}me=h+m*2,oe=ee*me;for(let ue=0;ue<Y;ue++){let ne=$e[ue];Le(ne[0]+oe,ne[1]+oe,ne[2]+oe)}}else{for(let me=0;me<Y;me++){let oe=$e[me];Le(oe[2],oe[1],oe[0])}for(let me=0;me<Y;me++){let oe=$e[me];Le(oe[0]+ee*h,oe[1]+ee*h,oe[2]+ee*h)}}n.addGroup(E,r.length/3-E,0)}function de(){let E=r.length/3,me=0;De(K,me),me+=K.length;for(let oe=0,ue=I.length;oe<ue;oe++){let ne=I[oe];De(ne,me),me+=ne.length}n.addGroup(E,r.length/3-E,1)}function De(E,me){let oe=E.length;for(;--oe>=0;){let ue=oe,ne=oe-1;ne<0&&(ne=E.length-1);for(let Ne=0,ae=h+m*2;Ne<ae;Ne++){let T=ee*Ne,x=ee*(Ne+1),k=me+ue+T,Z=me+ne+T,re=me+ne+x,q=me+ue+x;Ye(k,Z,re,q)}}}function We(E,me,oe){l.push(E),l.push(me),l.push(oe)}function Le(E,me,oe){Pe(E),Pe(me),Pe(oe);let ue=r.length/3,ne=A.generateTopUV(n,r,ue-3,ue-2,ue-1);Ue(ne[0]),Ue(ne[1]),Ue(ne[2])}function Ye(E,me,oe,ue){Pe(E),Pe(me),Pe(ue),Pe(me),Pe(oe),Pe(ue);let ne=r.length/3,Ne=A.generateSideWallUV(n,r,ne-6,ne-3,ne-2,ne-1);Ue(Ne[0]),Ue(Ne[1]),Ue(Ne[3]),Ue(Ne[1]),Ue(Ne[2]),Ue(Ne[3])}function Pe(E){r.push(l[E*3+0]),r.push(l[E*3+1]),r.push(l[E*3+2])}function Ue(E){s.push(E.x),s.push(E.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Bg(t,n,e)}static fromJSON(e,t){let n=[];for(let s=0,o=e.shapes.length;s<o;s++){let a=t[e.shapes[s]];n.push(a)}let r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new hh[r.type]().fromJSON(r)),new i(n,e.options)}},Og={generateTopUV:function(i,e,t,n,r){let s=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[r*3],h=e[r*3+1];return[new _e(s,o),new _e(a,l),new _e(c,h)]},generateSideWallUV:function(i,e,t,n,r,s){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],f=e[r*3],p=e[r*3+1],g=e[r*3+2],v=e[s*3],m=e[s*3+1],d=e[s*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new _e(o,1-l),new _e(c,1-u),new _e(f,1-g),new _e(v,1-d)]:[new _e(a,1-l),new _e(h,1-u),new _e(p,1-g),new _e(m,1-d)]}};function Bg(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){let s=i[n];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Er=class i extends kn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,h=l+1,u=e/a,f=t/l,p=[],g=[],v=[],m=[];for(let d=0;d<h;d++){let A=d*f-o;for(let C=0;C<c;C++){let b=C*u-s;g.push(b,-A,0),v.push(0,0,1),m.push(C/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let A=0;A<a;A++){let C=A+c*d,b=A+c*(d+1),L=A+1+c*(d+1),P=A+1+c*d;p.push(C,b,P),p.push(b,L,P)}this.setIndex(p),this.setAttribute("position",new Nt(g,3)),this.setAttribute("normal",new Nt(v,3)),this.setAttribute("uv",new Nt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},ms=class i extends kn{constructor(e=.5,t=1,n=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:o},n=Math.max(3,n),r=Math.max(1,r);let a=[],l=[],c=[],h=[],u=e,f=(t-e)/r,p=new z,g=new _e;for(let v=0;v<=r;v++){for(let m=0;m<=n;m++){let d=s+m/n*o;p.x=u*Math.cos(d),p.y=u*Math.sin(d),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,h.push(g.x,g.y)}u+=f}for(let v=0;v<r;v++){let m=v*(n+1);for(let d=0;d<n;d++){let A=d+m,C=A,b=A+n+1,L=A+n+2,P=A+1;a.push(C,b,P),a.push(b,L,P)}}this.setIndex(a),this.setAttribute("position",new Nt(l,3)),this.setAttribute("normal",new Nt(c,3)),this.setAttribute("uv",new Nt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},ho=class i extends kn{constructor(e=new nr([new _e(0,.5),new _e(-.5,-.5),new _e(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],r=[],s=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Nt(r,3)),this.setAttribute("normal",new Nt(s,3)),this.setAttribute("uv",new Nt(o,2));function c(h){let u=r.length/3,f=h.extractPoints(t),p=f.shape,g=f.holes;ai.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,d=g.length;m<d;m++){let A=g[m];ai.isClockWise(A)===!0&&(g[m]=A.reverse())}let v=ai.triangulateShape(p,g);for(let m=0,d=g.length;m<d;m++){let A=g[m];p=p.concat(A)}for(let m=0,d=p.length;m<d;m++){let A=p[m];r.push(A.x,A.y,0),s.push(0,0,1),o.push(A.x,A.y)}for(let m=0,d=v.length;m<d;m++){let A=v[m],C=A[0]+u,b=A[1]+u,L=A[2]+u;n.push(C,b,L),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return kg(t,e)}static fromJSON(e,t){let n=[];for(let r=0,s=e.shapes.length;r<s;r++){let o=t[e.shapes[r]];n.push(o)}return new i(n,e.curveSegments)}};function kg(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let r=i[t];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e}var ir=class i extends kn{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new z,f=new z,p=[],g=[],v=[],m=[];for(let d=0;d<=n;d++){let A=[],C=d/n,b=0;d===0&&o===0?b=.5/t:d===n&&l===Math.PI&&(b=-.5/t);for(let L=0;L<=t;L++){let P=L/t;u.x=-e*Math.cos(r+P*s)*Math.sin(o+C*a),u.y=e*Math.cos(o+C*a),u.z=e*Math.sin(r+P*s)*Math.sin(o+C*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),v.push(f.x,f.y,f.z),m.push(P+b,1-C),A.push(c++)}h.push(A)}for(let d=0;d<n;d++)for(let A=0;A<t;A++){let C=h[d][A+1],b=h[d][A],L=h[d+1][A],P=h[d+1][A+1];(d!==0||o>0)&&p.push(C,b,P),(d!==n-1||l<Math.PI)&&p.push(b,L,P)}this.setIndex(p),this.setAttribute("position",new Nt(g,3)),this.setAttribute("normal",new Nt(v,3)),this.setAttribute("uv",new Nt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var ci=class extends Ci{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ac,this.normalScale=new _e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ti,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var uo=class extends Ci{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ac,this.normalScale=new _e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ti,this.combine=El,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ol=class extends Ci{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Yd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},al=class extends Ci{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ha(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function zg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Tr=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=t[++n],e<r)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ll=class extends Tr{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:sh,endingEnd:sh}}intervalChanged_(e,t,n){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case oh:s=e,a=2*t-n;break;case ah:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case oh:o=e,l=2*n-t;break;case ah:o=1,l=n+r[1]-r[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(n-t)/(r-t),v=g*g,m=v*g,d=-f*m+2*f*v-f*g,A=(1+f)*m+(-1.5-2*f)*v+(-.5+f)*g+1,C=(-1-p)*m+(1.5+p)*v+.5*g,b=p*m-p*v;for(let L=0;L!==a;++L)s[L]=d*o[h+L]+A*o[c+L]+C*o[l+L]+b*o[u+L];return s}},cl=class extends Tr{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(r-t),u=1-h;for(let f=0;f!==a;++f)s[f]=o[c+f]*u+o[l+f]*h;return s}},hl=class extends Tr{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},In=class{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ha(t,this.TimeBufferType),this.values=Ha(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ha(e.times,Array),values:Ha(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new hl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new cl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ll(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Gs:t=this.InterpolantFactoryMethodDiscrete;break;case $a:t=this.InterpolantFactoryMethodLinear;break;case Ga:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Gs;case this.InterpolantFactoryMethodLinear:return $a;case this.InterpolantFactoryMethodSmooth:return Ga}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,s=0,o=r-1;for(;s!==r&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&zg(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Ga,s=e.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(r)l=!0;else{let u=a*n,f=u-n,p=u+n;for(let g=0;g!==n;++g){let v=t[u+g];if(v!==t[f+g]||v!==t[p+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*n,f=o*n;for(let p=0;p!==n;++p)t[f+p]=t[u+p]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};In.prototype.ValueTypeName="";In.prototype.TimeBufferType=Float32Array;In.prototype.ValueBufferType=Float32Array;In.prototype.DefaultInterpolation=$a;var rr=class extends In{constructor(e,t,n){super(e,t,n)}};rr.prototype.ValueTypeName="bool";rr.prototype.ValueBufferType=Array;rr.prototype.DefaultInterpolation=Gs;rr.prototype.InterpolantFactoryMethodLinear=void 0;rr.prototype.InterpolantFactoryMethodSmooth=void 0;var ul=class extends In{constructor(e,t,n,r){super(e,t,n,r)}};ul.prototype.ValueTypeName="color";var dl=class extends In{constructor(e,t,n,r){super(e,t,n,r)}};dl.prototype.ValueTypeName="number";var fl=class extends Tr{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(r-t),c=e*a;for(let h=c+a;c!==h;c+=4)Ei.slerpFlat(s,0,o,c-a,o,c,l);return s}},fo=class extends In{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new fl(this.times,this.values,this.getValueSize(),e)}};fo.prototype.ValueTypeName="quaternion";fo.prototype.InterpolantFactoryMethodSmooth=void 0;var sr=class extends In{constructor(e,t,n){super(e,t,n)}};sr.prototype.ValueTypeName="string";sr.prototype.ValueBufferType=Array;sr.prototype.DefaultInterpolation=Gs;sr.prototype.InterpolantFactoryMethodLinear=void 0;sr.prototype.InterpolantFactoryMethodSmooth=void 0;var pl=class extends In{constructor(e,t,n,r){super(e,t,n,r)}};pl.prototype.ValueTypeName="vector";var gs=class extends Bn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Qe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}};var ih=new Ct,ud=new z,dd=new z,ml=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _e(512,512),this.mapType=jn,this.map=null,this.mapPass=null,this.matrix=new Ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ds,this._frameExtents=new _e(1,1),this._viewportCount=1,this._viewports=[new Pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;ud.setFromMatrixPosition(e.matrixWorld),t.position.copy(ud),dd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(dd),t.updateMatrixWorld(),ih.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ih),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ih)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ph=class extends ml{constructor(){super(new Gt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=qs*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},po=class extends gs{constructor(e,t,n=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Bn.DEFAULT_UP),this.updateMatrix(),this.target=new Bn,this.distance=n,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new ph}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var mo=class extends Ks{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},mh=class extends ml{constructor(){super(new mo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ai=class extends gs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Bn.DEFAULT_UP),this.updateMatrix(),this.target=new Bn,this.shadow=new mh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},or=class extends gs{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var gl=class extends Gt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},go=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=fd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=fd();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function fd(){return performance.now()}var Uh="\\[\\]\\.:\\/",Vg=new RegExp("["+Uh+"]","g"),Nh="[^"+Uh+"]",Hg="[^"+Uh.replace("\\.","")+"]",Gg=/((?:WC+[\/:])*)/.source.replace("WC",Nh),Wg=/(WCOD+)?/.source.replace("WCOD",Hg),Xg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Nh),qg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Nh),Yg=new RegExp("^"+Gg+Wg+Xg+qg+"$"),$g=["material","materials","bones","map"],gh=class{constructor(e,t,n){let r=n||Ut.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ut=(()=>{class i{constructor(t,n,r){this.path=n,this.parsedPath=r||i.parseTrackName(n),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new i.Composite(t,n,r):new i(t,n,r)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Vg,"")}static parseTrackName(t){let n=Yg.exec(t);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let r={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=r.nodeName&&r.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let o=r.nodeName.substring(s+1);$g.indexOf(o)!==-1&&(r.nodeName=r.nodeName.substring(0,s),r.objectName=o)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return r}static findNode(t,n){if(n===void 0||n===""||n==="."||n===-1||n===t.name||n===t.uuid)return t;if(t.skeleton){let r=t.skeleton.getBoneByName(n);if(r!==void 0)return r}if(t.children){let r=function(o){for(let a=0;a<o.length;a++){let l=o[a];if(l.name===n||l.uuid===n)return l;let c=r(l.children);if(c)return c}return null},s=r(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,n){t[n]=this.targetObject[this.propertyName]}_getValue_array(t,n){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)t[n++]=r[s]}_getValue_arrayElement(t,n){t[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,n){this.resolvedProperty.toArray(t,n)}_setValue_direct(t,n){this.targetObject[this.propertyName]=t[n]}_setValue_direct_setNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,n){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[n++]}_setValue_array_setNeedsUpdate(t,n){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,n){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,n){this.resolvedProperty[this.propertyIndex]=t[n]}_setValue_arrayElement_setNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,n){this.resolvedProperty.fromArray(t,n)}_setValue_fromArray_setNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,n){this.bind(),this.getValue(t,n)}_setValue_unbound(t,n){this.bind(),this.setValue(t,n)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,s=n.propertyName,o=n.propertyIndex;if(t||(t=i.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let h=n.objectIndex;switch(r){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===h){h=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[r]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[r]}if(h!==void 0){if(t[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let a=t[s];if(a===void 0){let h=n.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",t);return}let l=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?l=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(o!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=o}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}return i.Composite=gh,i})();Ut.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ut.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ut.prototype.GetterByBindingType=[Ut.prototype._getValue_direct,Ut.prototype._getValue_array,Ut.prototype._getValue_arrayElement,Ut.prototype._getValue_toArray];Ut.prototype.SetterByBindingTypeAndVersioning=[[Ut.prototype._setValue_direct,Ut.prototype._setValue_direct_setNeedsUpdate,Ut.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_array,Ut.prototype._setValue_array_setNeedsUpdate,Ut.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_arrayElement,Ut.prototype._setValue_arrayElement_setNeedsUpdate,Ut.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_fromArray,Ut.prototype._setValue_fromArray_setNeedsUpdate,Ut.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var fw=new Float32Array(1);var pd=new Ct,_o=class{constructor(e,t,n=0,r=1/0){this.ray=new js(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new cs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return pd.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(pd),this}intersectObject(e,t=!0,n=[]){return _h(e,this,n,t),n.sort(md),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)_h(e[r],this,n,t);return n.sort(md),n}};function md(i,e){return i.distance-e.distance}function _h(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){let s=i.children;for(let o=0,a=s.length;o<a;o++)_h(s[o],e,t,!0)}}function Oh(i,e,t,n){let r=jg(n);switch(t){case Eh:return i*e;case Ch:return i*e/r.components*r.byteLength;case Dl:return i*e/r.components*r.byteLength;case Ah:return i*e*2/r.components*r.byteLength;case Ll:return i*e*2/r.components*r.byteLength;case Th:return i*e*3/r.components*r.byteLength;case zn:return i*e*4/r.components*r.byteLength;case Fl:return i*e*4/r.components*r.byteLength;case bo:case So:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Mo:case wo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Nl:case Bl:return Math.max(i,16)*Math.max(e,8)/4;case Ul:case Ol:return Math.max(i,8)*Math.max(e,8)/2;case kl:case zl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Vl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Hl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Gl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Wl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Xl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ql:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Yl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case $l:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case jl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Zl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Jl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Kl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ql:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ec:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case tc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Eo:case nc:case ic:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Rh:case rc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case sc:case oc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function jg(i){switch(i){case jn:case Sh:return{byteLength:1,components:1};case _s:case Mh:case xs:return{byteLength:2,components:1};case Il:case Pl:return{byteLength:2,components:4};case lr:case Rl:case ui:return{byteLength:4,components:1};case wh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_l}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_l);function Of(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Zg(i){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<u.length;p++){let g=u[f],v=u[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,u[f]=v)}u.length=f+1;for(let p=0,g=u.length;p<g;p++){let v=u[p];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var Jg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Kg=`#ifdef USE_ALPHAHASH
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
#endif`,Qg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,e0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,t0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,n0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,i0=`#ifdef USE_AOMAP
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
#endif`,r0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,s0=`#ifdef USE_BATCHING
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
#endif`,o0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,a0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,l0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,c0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,h0=`#ifdef USE_IRIDESCENCE
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
#endif`,u0=`#ifdef USE_BUMPMAP
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
#endif`,d0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,f0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,p0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,m0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,g0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,x0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,v0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,y0=`#define PI 3.141592653589793
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
} // validated`,b0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,S0=`vec3 transformedNormal = objectNormal;
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
#endif`,M0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,w0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,E0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,T0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,C0="gl_FragColor = linearToOutputTexel( gl_FragColor );",A0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,R0=`#ifdef USE_ENVMAP
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
#endif`,I0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,P0=`#ifdef USE_ENVMAP
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
#endif`,D0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,L0=`#ifdef USE_ENVMAP
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
#endif`,F0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,U0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,N0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,O0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,B0=`#ifdef USE_GRADIENTMAP
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
}`,k0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,z0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,V0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,H0=`uniform bool receiveShadow;
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
#endif`,G0=`#ifdef USE_ENVMAP
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
#endif`,W0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,X0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,q0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Y0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$0=`PhysicalMaterial material;
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
#endif`,j0=`struct PhysicalMaterial {
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
}`,Z0=`
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
#endif`,J0=`#if defined( RE_IndirectDiffuse )
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
#endif`,K0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Q0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,e_=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,t_=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,n_=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,i_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,r_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,s_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,o_=`#if defined( USE_POINTS_UV )
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
#endif`,a_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,l_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,c_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,h_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,u_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,d_=`#ifdef USE_MORPHTARGETS
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
#endif`,f_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,p_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,m_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,g_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,__=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,x_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,v_=`#ifdef USE_NORMALMAP
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
#endif`,y_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,b_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,S_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,M_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,w_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,E_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,T_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,C_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,A_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,R_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,I_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,P_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,D_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,L_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,F_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,U_=`float getShadowMask() {
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
}`,N_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,O_=`#ifdef USE_SKINNING
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
#endif`,B_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,k_=`#ifdef USE_SKINNING
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
#endif`,z_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,V_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,H_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,G_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,W_=`#ifdef USE_TRANSMISSION
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
#endif`,X_=`#ifdef USE_TRANSMISSION
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
#endif`,q_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Y_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,j_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Z_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,J_=`uniform sampler2D t2D;
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
}`,K_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Q_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ex=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nx=`#include <common>
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
}`,ix=`#if DEPTH_PACKING == 3200
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
}`,rx=`#define DISTANCE
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
}`,sx=`#define DISTANCE
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
}`,ox=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ax=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lx=`uniform float scale;
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
}`,cx=`uniform vec3 diffuse;
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
}`,hx=`#include <common>
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
}`,ux=`uniform vec3 diffuse;
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
}`,dx=`#define LAMBERT
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
}`,fx=`#define LAMBERT
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
}`,px=`#define MATCAP
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
}`,mx=`#define MATCAP
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
}`,gx=`#define NORMAL
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
}`,_x=`#define NORMAL
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
}`,xx=`#define PHONG
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
}`,vx=`#define PHONG
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
}`,yx=`#define STANDARD
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
}`,bx=`#define STANDARD
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
}`,Sx=`#define TOON
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
}`,Mx=`#define TOON
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
}`,wx=`uniform float size;
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
}`,Ex=`uniform vec3 diffuse;
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
}`,Tx=`#include <common>
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
}`,Cx=`uniform vec3 color;
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
}`,Ax=`uniform float rotation;
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
}`,Rx=`uniform vec3 diffuse;
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
}`,st={alphahash_fragment:Jg,alphahash_pars_fragment:Kg,alphamap_fragment:Qg,alphamap_pars_fragment:e0,alphatest_fragment:t0,alphatest_pars_fragment:n0,aomap_fragment:i0,aomap_pars_fragment:r0,batching_pars_vertex:s0,batching_vertex:o0,begin_vertex:a0,beginnormal_vertex:l0,bsdfs:c0,iridescence_fragment:h0,bumpmap_pars_fragment:u0,clipping_planes_fragment:d0,clipping_planes_pars_fragment:f0,clipping_planes_pars_vertex:p0,clipping_planes_vertex:m0,color_fragment:g0,color_pars_fragment:_0,color_pars_vertex:x0,color_vertex:v0,common:y0,cube_uv_reflection_fragment:b0,defaultnormal_vertex:S0,displacementmap_pars_vertex:M0,displacementmap_vertex:w0,emissivemap_fragment:E0,emissivemap_pars_fragment:T0,colorspace_fragment:C0,colorspace_pars_fragment:A0,envmap_fragment:R0,envmap_common_pars_fragment:I0,envmap_pars_fragment:P0,envmap_pars_vertex:D0,envmap_physical_pars_fragment:G0,envmap_vertex:L0,fog_vertex:F0,fog_pars_vertex:U0,fog_fragment:N0,fog_pars_fragment:O0,gradientmap_pars_fragment:B0,lightmap_pars_fragment:k0,lights_lambert_fragment:z0,lights_lambert_pars_fragment:V0,lights_pars_begin:H0,lights_toon_fragment:W0,lights_toon_pars_fragment:X0,lights_phong_fragment:q0,lights_phong_pars_fragment:Y0,lights_physical_fragment:$0,lights_physical_pars_fragment:j0,lights_fragment_begin:Z0,lights_fragment_maps:J0,lights_fragment_end:K0,logdepthbuf_fragment:Q0,logdepthbuf_pars_fragment:e_,logdepthbuf_pars_vertex:t_,logdepthbuf_vertex:n_,map_fragment:i_,map_pars_fragment:r_,map_particle_fragment:s_,map_particle_pars_fragment:o_,metalnessmap_fragment:a_,metalnessmap_pars_fragment:l_,morphinstance_vertex:c_,morphcolor_vertex:h_,morphnormal_vertex:u_,morphtarget_pars_vertex:d_,morphtarget_vertex:f_,normal_fragment_begin:p_,normal_fragment_maps:m_,normal_pars_fragment:g_,normal_pars_vertex:__,normal_vertex:x_,normalmap_pars_fragment:v_,clearcoat_normal_fragment_begin:y_,clearcoat_normal_fragment_maps:b_,clearcoat_pars_fragment:S_,iridescence_pars_fragment:M_,opaque_fragment:w_,packing:E_,premultiplied_alpha_fragment:T_,project_vertex:C_,dithering_fragment:A_,dithering_pars_fragment:R_,roughnessmap_fragment:I_,roughnessmap_pars_fragment:P_,shadowmap_pars_fragment:D_,shadowmap_pars_vertex:L_,shadowmap_vertex:F_,shadowmask_pars_fragment:U_,skinbase_vertex:N_,skinning_pars_vertex:O_,skinning_vertex:B_,skinnormal_vertex:k_,specularmap_fragment:z_,specularmap_pars_fragment:V_,tonemapping_fragment:H_,tonemapping_pars_fragment:G_,transmission_fragment:W_,transmission_pars_fragment:X_,uv_pars_fragment:q_,uv_pars_vertex:Y_,uv_vertex:$_,worldpos_vertex:j_,background_vert:Z_,background_frag:J_,backgroundCube_vert:K_,backgroundCube_frag:Q_,cube_vert:ex,cube_frag:tx,depth_vert:nx,depth_frag:ix,distanceRGBA_vert:rx,distanceRGBA_frag:sx,equirect_vert:ox,equirect_frag:ax,linedashed_vert:lx,linedashed_frag:cx,meshbasic_vert:hx,meshbasic_frag:ux,meshlambert_vert:dx,meshlambert_frag:fx,meshmatcap_vert:px,meshmatcap_frag:mx,meshnormal_vert:gx,meshnormal_frag:_x,meshphong_vert:xx,meshphong_frag:vx,meshphysical_vert:yx,meshphysical_frag:bx,meshtoon_vert:Sx,meshtoon_frag:Mx,points_vert:wx,points_frag:Ex,shadow_vert:Tx,shadow_frag:Cx,sprite_vert:Ax,sprite_frag:Rx},xe={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},envMapRotation:{value:new et},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new _e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new _e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},di={basic:{uniforms:fn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:st.meshbasic_vert,fragmentShader:st.meshbasic_frag},lambert:{uniforms:fn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Qe(0)}}]),vertexShader:st.meshlambert_vert,fragmentShader:st.meshlambert_frag},phong:{uniforms:fn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30}}]),vertexShader:st.meshphong_vert,fragmentShader:st.meshphong_frag},standard:{uniforms:fn([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag},toon:{uniforms:fn([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new Qe(0)}}]),vertexShader:st.meshtoon_vert,fragmentShader:st.meshtoon_frag},matcap:{uniforms:fn([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:st.meshmatcap_vert,fragmentShader:st.meshmatcap_frag},points:{uniforms:fn([xe.points,xe.fog]),vertexShader:st.points_vert,fragmentShader:st.points_frag},dashed:{uniforms:fn([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:st.linedashed_vert,fragmentShader:st.linedashed_frag},depth:{uniforms:fn([xe.common,xe.displacementmap]),vertexShader:st.depth_vert,fragmentShader:st.depth_frag},normal:{uniforms:fn([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:st.meshnormal_vert,fragmentShader:st.meshnormal_frag},sprite:{uniforms:fn([xe.sprite,xe.fog]),vertexShader:st.sprite_vert,fragmentShader:st.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:st.background_vert,fragmentShader:st.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new et}},vertexShader:st.backgroundCube_vert,fragmentShader:st.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:st.cube_vert,fragmentShader:st.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:st.equirect_vert,fragmentShader:st.equirect_frag},distanceRGBA:{uniforms:fn([xe.common,xe.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:st.distanceRGBA_vert,fragmentShader:st.distanceRGBA_frag},shadow:{uniforms:fn([xe.lights,xe.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:st.shadow_vert,fragmentShader:st.shadow_frag}};di.physical={uniforms:fn([di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new _e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new _e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new _e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag};var lc={r:0,b:0,g:0},Ir=new Ti,Ix=new Ct;function Px(i,e,t,n,r,s,o){let a=new Qe(0),l=s===!0?0:1,c,h,u=null,f=0,p=null;function g(C){let b=C.isScene===!0?C.background:null;return b&&b.isTexture&&(b=(C.backgroundBlurriness>0?t:e).get(b)),b}function v(C){let b=!1,L=g(C);L===null?d(a,l):L&&L.isColor&&(d(L,1),b=!0);let P=i.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(C,b){let L=g(b);L&&(L.isCubeTexture||L.mapping===vo)?(h===void 0&&(h=new Et(new hs(1,1,1),new An({name:"BackgroundCubeMaterial",uniforms:Rr(di.backgroundCube.uniforms),vertexShader:di.backgroundCube.vertexShader,fragmentShader:di.backgroundCube.fragmentShader,side:Yt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,D,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),Ir.copy(b.backgroundRotation),Ir.x*=-1,Ir.y*=-1,Ir.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Ir.y*=-1,Ir.z*=-1),h.material.uniforms.envMap.value=L,h.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Ix.makeRotationFromEuler(Ir)),h.material.toneMapped=ft.getTransfer(L.colorSpace)!==xt,(u!==L||f!==L.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=L,f=L.version,p=i.toneMapping),h.layers.enableAll(),C.unshift(h,h.geometry,h.material,0,0,null)):L&&L.isTexture&&(c===void 0&&(c=new Et(new Er(2,2),new An({name:"BackgroundMaterial",uniforms:Rr(di.background.uniforms),vertexShader:di.background.vertexShader,fragmentShader:di.background.fragmentShader,side:Mi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=L,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=ft.getTransfer(L.colorSpace)!==xt,L.matrixAutoUpdate===!0&&L.updateMatrix(),c.material.uniforms.uvTransform.value.copy(L.matrix),(u!==L||f!==L.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=L,f=L.version,p=i.toneMapping),c.layers.enableAll(),C.unshift(c,c.geometry,c.material,0,0,null))}function d(C,b){C.getRGB(lc,Lh(i)),n.buffers.color.setClear(lc.r,lc.g,lc.b,b,o)}function A(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(C,b=1){a.set(C),l=b,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(C){l=C,d(a,l)},render:v,addToRenderList:m,dispose:A}}function Dx(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null),s=r,o=!1;function a(_,I,V,H,Q){let K=!1,J=u(H,V,I);s!==J&&(s=J,c(s.object)),K=p(_,H,V,Q),K&&g(_,H,V,Q),Q!==null&&e.update(Q,i.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,b(_,I,V,H),Q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Q).buffer))}function l(){return i.createVertexArray()}function c(_){return i.bindVertexArray(_)}function h(_){return i.deleteVertexArray(_)}function u(_,I,V){let H=V.wireframe===!0,Q=n[_.id];Q===void 0&&(Q={},n[_.id]=Q);let K=Q[I.id];K===void 0&&(K={},Q[I.id]=K);let J=K[H];return J===void 0&&(J=f(l()),K[H]=J),J}function f(_){let I=[],V=[],H=[];for(let Q=0;Q<t;Q++)I[Q]=0,V[Q]=0,H[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:V,attributeDivisors:H,object:_,attributes:{},index:null}}function p(_,I,V,H){let Q=s.attributes,K=I.attributes,J=0,ee=V.getAttributes();for(let X in ee)if(ee[X].location>=0){let ve=Q[X],be=K[X];if(be===void 0&&(X==="instanceMatrix"&&_.instanceMatrix&&(be=_.instanceMatrix),X==="instanceColor"&&_.instanceColor&&(be=_.instanceColor)),ve===void 0||ve.attribute!==be||be&&ve.data!==be.data)return!0;J++}return s.attributesNum!==J||s.index!==H}function g(_,I,V,H){let Q={},K=I.attributes,J=0,ee=V.getAttributes();for(let X in ee)if(ee[X].location>=0){let ve=K[X];ve===void 0&&(X==="instanceMatrix"&&_.instanceMatrix&&(ve=_.instanceMatrix),X==="instanceColor"&&_.instanceColor&&(ve=_.instanceColor));let be={};be.attribute=ve,ve&&ve.data&&(be.data=ve.data),Q[X]=be,J++}s.attributes=Q,s.attributesNum=J,s.index=H}function v(){let _=s.newAttributes;for(let I=0,V=_.length;I<V;I++)_[I]=0}function m(_){d(_,0)}function d(_,I){let V=s.newAttributes,H=s.enabledAttributes,Q=s.attributeDivisors;V[_]=1,H[_]===0&&(i.enableVertexAttribArray(_),H[_]=1),Q[_]!==I&&(i.vertexAttribDivisor(_,I),Q[_]=I)}function A(){let _=s.newAttributes,I=s.enabledAttributes;for(let V=0,H=I.length;V<H;V++)I[V]!==_[V]&&(i.disableVertexAttribArray(V),I[V]=0)}function C(_,I,V,H,Q,K,J){J===!0?i.vertexAttribIPointer(_,I,V,Q,K):i.vertexAttribPointer(_,I,V,H,Q,K)}function b(_,I,V,H){v();let Q=H.attributes,K=V.getAttributes(),J=I.defaultAttributeValues;for(let ee in K){let X=K[ee];if(X.location>=0){let ge=Q[ee];if(ge===void 0&&(ee==="instanceMatrix"&&_.instanceMatrix&&(ge=_.instanceMatrix),ee==="instanceColor"&&_.instanceColor&&(ge=_.instanceColor)),ge!==void 0){let ve=ge.normalized,be=ge.itemSize,Oe=e.get(ge);if(Oe===void 0)continue;let $e=Oe.buffer,Y=Oe.type,se=Oe.bytesPerElement,pe=Y===i.INT||Y===i.UNSIGNED_INT||ge.gpuType===Rl;if(ge.isInterleavedBufferAttribute){let de=ge.data,De=de.stride,We=ge.offset;if(de.isInstancedInterleavedBuffer){for(let Le=0;Le<X.locationSize;Le++)d(X.location+Le,de.meshPerAttribute);_.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Le=0;Le<X.locationSize;Le++)m(X.location+Le);i.bindBuffer(i.ARRAY_BUFFER,$e);for(let Le=0;Le<X.locationSize;Le++)C(X.location+Le,be/X.locationSize,Y,ve,De*se,(We+be/X.locationSize*Le)*se,pe)}else{if(ge.isInstancedBufferAttribute){for(let de=0;de<X.locationSize;de++)d(X.location+de,ge.meshPerAttribute);_.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let de=0;de<X.locationSize;de++)m(X.location+de);i.bindBuffer(i.ARRAY_BUFFER,$e);for(let de=0;de<X.locationSize;de++)C(X.location+de,be/X.locationSize,Y,ve,be*se,be/X.locationSize*de*se,pe)}}else if(J!==void 0){let ve=J[ee];if(ve!==void 0)switch(ve.length){case 2:i.vertexAttrib2fv(X.location,ve);break;case 3:i.vertexAttrib3fv(X.location,ve);break;case 4:i.vertexAttrib4fv(X.location,ve);break;default:i.vertexAttrib1fv(X.location,ve)}}}}A()}function L(){N();for(let _ in n){let I=n[_];for(let V in I){let H=I[V];for(let Q in H)h(H[Q].object),delete H[Q];delete I[V]}delete n[_]}}function P(_){if(n[_.id]===void 0)return;let I=n[_.id];for(let V in I){let H=I[V];for(let Q in H)h(H[Q].object),delete H[Q];delete I[V]}delete n[_.id]}function D(_){for(let I in n){let V=n[I];if(V[_.id]===void 0)continue;let H=V[_.id];for(let Q in H)h(H[Q].object),delete H[Q];delete V[_.id]}}function N(){M(),o=!0,s!==r&&(s=r,c(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:N,resetDefaultState:M,dispose:L,releaseStatesOfGeometry:P,releaseStatesOfProgram:D,initAttributes:v,enableAttribute:m,disableUnusedAttributes:A}}function Lx(i,e,t){let n;function r(c){n=c}function s(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];t.update(p,n,1)}function l(c,h,u,f){if(u===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],h[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v]*f[v];t.update(g,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Fx(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let D=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(D){return!(D!==zn&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(D){let N=D===xs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==jn&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==ui&&!N)}function l(D){if(D==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),A=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),C=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,P=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:A,maxVaryings:C,maxFragmentUniforms:b,vertexTextures:L,maxSamples:P}}function Ux(i){let e=this,t=null,n=0,r=!1,s=!1,o=new si,a=new et,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let p=u.length!==0||f||n!==0||r;return r=f,n=u.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,p){let g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,d=i.get(u);if(!r||g===null||g.length===0||s&&!m)s?h(null):c();else{let A=s?0:n,C=A*4,b=d.clippingState||null;l.value=b,b=h(g,f,C,p);for(let L=0;L!==C;++L)b[L]=t[L];d.clippingState=b,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,p,g){let v=u!==null?u.length:0,m=null;if(v!==0){if(m=l.value,g!==!0||m===null){let d=p+v*4,A=f.matrixWorldInverse;a.getNormalMatrix(A),(m===null||m.length<d)&&(m=new Float32Array(d));for(let C=0,b=p;C!==v;++C,b+=4)o.copy(u[C]).applyMatrix4(A,a),o.normal.toArray(m,b),m[b+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function Nx(i){let e=new WeakMap;function t(o,a){return a===Tl?o.mapping=Cr:a===Cl&&(o.mapping=Ar),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Tl||a===Cl)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Qa(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}var Ms=4,pf=[.125,.215,.35,.446,.526,.582],Lr=20,Bh=new mo,mf=new Qe,kh=null,zh=0,Vh=0,Hh=!1,Dr=(1+Math.sqrt(5))/2,Ss=1/Dr,gf=[new z(-Dr,Ss,0),new z(Dr,Ss,0),new z(-Ss,0,Dr),new z(Ss,0,Dr),new z(0,Dr,-Ss),new z(0,Dr,Ss),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)],Ox=new z,uc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100,s={}){let{size:o=256,position:a=Ox}=s;kh=this._renderer.getRenderTarget(),zh=this._renderer.getActiveCubeFace(),Vh=this._renderer.getActiveMipmapLevel(),Hh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(kh,zh,Vh),this._renderer.xr.enabled=Hh,e.scissorTest=!1,cc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Cr||e.mapping===Ar?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),kh=this._renderer.getRenderTarget(),zh=this._renderer.getActiveCubeFace(),Vh=this._renderer.getActiveMipmapLevel(),Hh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Yn,minFilter:Yn,generateMipmaps:!1,type:xs,format:zn,colorSpace:Mr,depthBuffer:!1},r=_f(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_f(e,t,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Bx(s)),this._blurMaterial=kx(s,e,t)}return r}_compileMaterial(e){let t=new Et(this._lodPlanes[0],e);this._renderer.compile(t,Bh)}_sceneToCubeUV(e,t,n,r,s){let l=new Gt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,p=u.toneMapping;u.getClearColor(mf),u.toneMapping=Ii,u.autoClear=!1;let g=new $n({name:"PMREM.Background",side:Yt,depthWrite:!1,depthTest:!1}),v=new Et(new hs,g),m=!1,d=e.background;d?d.isColor&&(g.color.copy(d),e.background=null,m=!0):(g.color.copy(mf),m=!0);for(let A=0;A<6;A++){let C=A%3;C===0?(l.up.set(0,c[A],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[A],s.y,s.z)):C===1?(l.up.set(0,0,c[A]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[A],s.z)):(l.up.set(0,c[A],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[A]));let b=this._cubeSize;cc(r,C*b,A>2?b:0,b,b),u.setRenderTarget(r),m&&u.render(v,l),u.render(e,l)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=p,u.autoClear=f,e.background=d}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===Cr||e.mapping===Ar;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=vf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xf());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new Et(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let l=this._cubeSize;cc(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Bh)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=gf[(r-s-1)%gf.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Et(this._lodPlanes[r],c),f=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Lr-1),v=s/g,m=isFinite(s)?1+Math.floor(h*v):Lr;m>Lr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Lr}`);let d=[],A=0;for(let D=0;D<Lr;++D){let N=D/v,M=Math.exp(-N*N/2);d.push(M),D===0?A+=M:D<m&&(A+=2*M)}for(let D=0;D<d.length;D++)d[D]=d[D]/A;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:C}=this;f.dTheta.value=g,f.mipInt.value=C-n;let b=this._sizeLods[r],L=3*b*(r>C-Ms?r-C+Ms:0),P=4*(this._cubeSize-b);cc(t,L,P,3*b,2*b),l.setRenderTarget(t),l.render(u,Bh)}};function Bx(i){let e=[],t=[],n=[],r=i,s=i-Ms+1+pf.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);t.push(a);let l=1/a;o>i-Ms?l=pf[o-i+Ms-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,v=3,m=2,d=1,A=new Float32Array(v*g*p),C=new Float32Array(m*g*p),b=new Float32Array(d*g*p);for(let P=0;P<p;P++){let D=P%3*2/3-1,N=P>2?0:-1,M=[D,N,0,D+2/3,N,0,D+2/3,N+1,0,D,N,0,D+2/3,N+1,0,D,N+1,0];A.set(M,v*g*P),C.set(f,m*g*P);let _=[P,P,P,P,P,P];b.set(_,d*g*P)}let L=new kn;L.setAttribute("position",new Cn(A,v)),L.setAttribute("uv",new Cn(C,m)),L.setAttribute("faceIndex",new Cn(b,d)),e.push(L),r>Ms&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function _f(i,e,t){let n=new li(i,e,t);return n.texture.mapping=vo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function cc(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function kx(i,e,t){let n=new Float32Array(Lr),r=new z(0,1,0);return new An({name:"SphericalGaussianBlur",defines:{n:Lr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Kh(),fragmentShader:`

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
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function xf(){return new An({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kh(),fragmentShader:`

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
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function vf(){return new An({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function Kh(){return`

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
	`}function zx(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Tl||l===Cl,h=l===Cr||l===Ar;if(c||h){let u=e.get(a),f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new uc(i)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{let p=a.image;return c&&p&&p.height>0||h&&p&&r(p)?(t===null&&(t=new uc(i)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function r(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){let l=a.target;l.removeEventListener("dispose",s);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Vx(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let r=t(n);return r===null&&To("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Hx(i,e,t,n){let r={},s=new WeakMap;function o(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete r[f.id];let p=s.get(f);p&&(e.remove(p),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(u){let f=u.attributes;for(let p in f)e.update(f[p],i.ARRAY_BUFFER)}function c(u){let f=[],p=u.index,g=u.attributes.position,v=0;if(p!==null){let A=p.array;v=p.version;for(let C=0,b=A.length;C<b;C+=3){let L=A[C+0],P=A[C+1],D=A[C+2];f.push(L,P,P,D,D,L)}}else if(g!==void 0){let A=g.array;v=g.version;for(let C=0,b=A.length/3-1;C<b;C+=3){let L=C+0,P=C+1,D=C+2;f.push(L,P,P,D,D,L)}}else return;let m=new(Dh(f)?Js:Zs)(f,1);m.version=v;let d=s.get(u);d&&e.remove(d),s.set(u,m)}function h(u){let f=s.get(u);if(f){let p=u.index;p!==null&&f.version<p.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Gx(i,e,t){let n;function r(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,p){i.drawElements(n,p,s,f*o),t.update(p,n,1)}function c(f,p,g){g!==0&&(i.drawElementsInstanced(n,p,s,f*o,g),t.update(p,n,g))}function h(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];t.update(m,n,1)}function u(f,p,g,v){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)c(f[d]/o,p[d],v[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,s,f,0,v,0,g);let d=0;for(let A=0;A<g;A++)d+=p[A]*v[A];t.update(d,n,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Wx(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Xx(i,e,t){let n=new WeakMap,r=new Pt;function s(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let _=function(){N.dispose(),n.delete(a),a.removeEventListener("dispose",_)};var p=_;f!==void 0&&f.texture.dispose();let g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],A=a.morphAttributes.normal||[],C=a.morphAttributes.color||[],b=0;g===!0&&(b=1),v===!0&&(b=2),m===!0&&(b=3);let L=a.attributes.position.count*b,P=1;L>e.maxTextureSize&&(P=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);let D=new Float32Array(L*P*4*u),N=new $s(D,L,P,u);N.type=ui,N.needsUpdate=!0;let M=b*4;for(let I=0;I<u;I++){let V=d[I],H=A[I],Q=C[I],K=L*P*4*I;for(let J=0;J<V.count;J++){let ee=J*M;g===!0&&(r.fromBufferAttribute(V,J),D[K+ee+0]=r.x,D[K+ee+1]=r.y,D[K+ee+2]=r.z,D[K+ee+3]=0),v===!0&&(r.fromBufferAttribute(H,J),D[K+ee+4]=r.x,D[K+ee+5]=r.y,D[K+ee+6]=r.z,D[K+ee+7]=0),m===!0&&(r.fromBufferAttribute(Q,J),D[K+ee+8]=r.x,D[K+ee+9]=r.y,D[K+ee+10]=r.z,D[K+ee+11]=Q.itemSize===4?r.w:1)}}f={count:u,texture:N,size:new _e(L,P)},n.set(a,f),a.addEventListener("dispose",_)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];let v=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function qx(i,e,t,n){let r=new WeakMap;function s(l){let c=n.render.frame,h=l.geometry,u=e.get(l,h);if(r.get(u)!==c&&(e.update(u),r.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return u}function o(){r=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}var Bf=new cr,yf=new eo(1,1),kf=new $s,zf=new Ja,Vf=new Qs,bf=[],Sf=[],Mf=new Float32Array(16),wf=new Float32Array(9),Ef=new Float32Array(4);function Es(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,s=bf[r];if(s===void 0&&(s=new Float32Array(r),bf[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function $t(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function jt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function dc(i,e){let t=Sf[e];t===void 0&&(t=new Int32Array(e),Sf[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Yx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function $x(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;i.uniform2fv(this.addr,e),jt(t,e)}}function jx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if($t(t,e))return;i.uniform3fv(this.addr,e),jt(t,e)}}function Zx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;i.uniform4fv(this.addr,e),jt(t,e)}}function Jx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if($t(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),jt(t,e)}else{if($t(t,n))return;Ef.set(n),i.uniformMatrix2fv(this.addr,!1,Ef),jt(t,n)}}function Kx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if($t(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),jt(t,e)}else{if($t(t,n))return;wf.set(n),i.uniformMatrix3fv(this.addr,!1,wf),jt(t,n)}}function Qx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if($t(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),jt(t,e)}else{if($t(t,n))return;Mf.set(n),i.uniformMatrix4fv(this.addr,!1,Mf),jt(t,n)}}function ev(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function tv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;i.uniform2iv(this.addr,e),jt(t,e)}}function nv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;i.uniform3iv(this.addr,e),jt(t,e)}}function iv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;i.uniform4iv(this.addr,e),jt(t,e)}}function rv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function sv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;i.uniform2uiv(this.addr,e),jt(t,e)}}function ov(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;i.uniform3uiv(this.addr,e),jt(t,e)}}function av(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;i.uniform4uiv(this.addr,e),jt(t,e)}}function lv(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(yf.compareFunction=Ih,s=yf):s=Bf,t.setTexture2D(e||s,r)}function cv(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||zf,r)}function hv(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Vf,r)}function uv(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||kf,r)}function dv(i){switch(i){case 5126:return Yx;case 35664:return $x;case 35665:return jx;case 35666:return Zx;case 35674:return Jx;case 35675:return Kx;case 35676:return Qx;case 5124:case 35670:return ev;case 35667:case 35671:return tv;case 35668:case 35672:return nv;case 35669:case 35673:return iv;case 5125:return rv;case 36294:return sv;case 36295:return ov;case 36296:return av;case 35678:case 36198:case 36298:case 36306:case 35682:return lv;case 35679:case 36299:case 36307:return cv;case 35680:case 36300:case 36308:case 36293:return hv;case 36289:case 36303:case 36311:case 36292:return uv}}function fv(i,e){i.uniform1fv(this.addr,e)}function pv(i,e){let t=Es(e,this.size,2);i.uniform2fv(this.addr,t)}function mv(i,e){let t=Es(e,this.size,3);i.uniform3fv(this.addr,t)}function gv(i,e){let t=Es(e,this.size,4);i.uniform4fv(this.addr,t)}function _v(i,e){let t=Es(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function xv(i,e){let t=Es(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function vv(i,e){let t=Es(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function yv(i,e){i.uniform1iv(this.addr,e)}function bv(i,e){i.uniform2iv(this.addr,e)}function Sv(i,e){i.uniform3iv(this.addr,e)}function Mv(i,e){i.uniform4iv(this.addr,e)}function wv(i,e){i.uniform1uiv(this.addr,e)}function Ev(i,e){i.uniform2uiv(this.addr,e)}function Tv(i,e){i.uniform3uiv(this.addr,e)}function Cv(i,e){i.uniform4uiv(this.addr,e)}function Av(i,e,t){let n=this.cache,r=e.length,s=dc(t,r);$t(n,s)||(i.uniform1iv(this.addr,s),jt(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Bf,s[o])}function Rv(i,e,t){let n=this.cache,r=e.length,s=dc(t,r);$t(n,s)||(i.uniform1iv(this.addr,s),jt(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||zf,s[o])}function Iv(i,e,t){let n=this.cache,r=e.length,s=dc(t,r);$t(n,s)||(i.uniform1iv(this.addr,s),jt(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Vf,s[o])}function Pv(i,e,t){let n=this.cache,r=e.length,s=dc(t,r);$t(n,s)||(i.uniform1iv(this.addr,s),jt(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||kf,s[o])}function Dv(i){switch(i){case 5126:return fv;case 35664:return pv;case 35665:return mv;case 35666:return gv;case 35674:return _v;case 35675:return xv;case 35676:return vv;case 5124:case 35670:return yv;case 35667:case 35671:return bv;case 35668:case 35672:return Sv;case 35669:case 35673:return Mv;case 5125:return wv;case 36294:return Ev;case 36295:return Tv;case 36296:return Cv;case 35678:case 36198:case 36298:case 36306:case 35682:return Av;case 35679:case 36299:case 36307:return Rv;case 35680:case 36300:case 36308:case 36293:return Iv;case 36289:case 36303:case 36311:case 36292:return Pv}}var Wh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=dv(t.type)}},Xh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Dv(t.type)}},qh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],n)}}},Gh=/(\w+)(\])?(\[|\.)?/g;function Tf(i,e){i.seq.push(e),i.map[e.id]=e}function Lv(i,e,t){let n=i.name,r=n.length;for(Gh.lastIndex=0;;){let s=Gh.exec(n),o=Gh.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Tf(t,c===void 0?new Wh(a,i,e):new Xh(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new qh(a),Tf(t,u)),t=u}}}var ws=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);Lv(s,o,this)}}setValue(e,t,n,r){let s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&n.push(o)}return n}};function Cf(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Fv=37297,Uv=0;function Nv(i,e){let t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Af=new et;function Ov(i){ft._getMatrix(Af,ft.workingColorSpace,i);let e=`mat3( ${Af.elements.map(t=>t.toFixed(4))} )`;switch(ft.getTransfer(i)){case Ws:return[e,"LinearTransferOETF"];case xt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Rf(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Nv(i.getShaderSource(e),o)}else return r}function Bv(i,e){let t=Ov(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function kv(i,e){let t;switch(e){case kd:t="Linear";break;case zd:t="Reinhard";break;case Vd:t="Cineon";break;case Hd:t="ACESFilmic";break;case Wd:t="AgX";break;case Xd:t="Neutral";break;case Gd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var hc=new z;function zv(){ft.getLuminanceCoefficients(hc);let i=hc.x.toFixed(4),e=hc.y.toFixed(4),t=hc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Vv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Co).join(`
`)}function Hv(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Gv(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(e,r),o=s.name,a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Co(i){return i!==""}function If(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Pf(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Wv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yh(i){return i.replace(Wv,qv)}var Xv=new Map;function qv(i,e){let t=st[e];if(t===void 0){let n=Xv.get(e);if(n!==void 0)t=st[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Yh(t)}var Yv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Df(i){return i.replace(Yv,$v)}function $v(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Lf(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function jv(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===vh?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===xd?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===hi&&(e="SHADOWMAP_TYPE_VSM"),e}function Zv(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Cr:case Ar:e="ENVMAP_TYPE_CUBE";break;case vo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Jv(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ar:e="ENVMAP_MODE_REFRACTION";break}return e}function Kv(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case El:e="ENVMAP_BLENDING_MULTIPLY";break;case Od:e="ENVMAP_BLENDING_MIX";break;case Bd:e="ENVMAP_BLENDING_ADD";break}return e}function Qv(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function ey(i,e,t,n){let r=i.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,l=jv(t),c=Zv(t),h=Jv(t),u=Kv(t),f=Qv(t),p=Vv(t),g=Hv(s),v=r.createProgram(),m,d,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Co).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Co).join(`
`),d.length>0&&(d+=`
`)):(m=[Lf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Co).join(`
`),d=[Lf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ii?"#define TONE_MAPPING":"",t.toneMapping!==Ii?st.tonemapping_pars_fragment:"",t.toneMapping!==Ii?kv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",st.colorspace_pars_fragment,Bv("linearToOutputTexel",t.outputColorSpace),zv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Co).join(`
`)),o=Yh(o),o=If(o,t),o=Pf(o,t),a=Yh(a),a=If(a,t),a=Pf(a,t),o=Df(o),a=Df(a),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===Ph?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ph?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let C=A+m+o,b=A+d+a,L=Cf(r,r.VERTEX_SHADER,C),P=Cf(r,r.FRAGMENT_SHADER,b);r.attachShader(v,L),r.attachShader(v,P),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function D(I){if(i.debug.checkShaderErrors){let V=r.getProgramInfoLog(v).trim(),H=r.getShaderInfoLog(L).trim(),Q=r.getShaderInfoLog(P).trim(),K=!0,J=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(K=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,v,L,P);else{let ee=Rf(r,L,"vertex"),X=Rf(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+V+`
`+ee+`
`+X)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(H===""||Q==="")&&(J=!1);J&&(I.diagnostics={runnable:K,programLog:V,vertexShader:{log:H,prefix:m},fragmentShader:{log:Q,prefix:d}})}r.deleteShader(L),r.deleteShader(P),N=new ws(r,v),M=Gv(r,v)}let N;this.getUniforms=function(){return N===void 0&&D(this),N};let M;this.getAttributes=function(){return M===void 0&&D(this),M};let _=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=r.getProgramParameter(v,Fv)),_},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Uv++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=L,this.fragmentShader=P,this}var ty=0,$h=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new jh(e),t.set(e,n)),n}},jh=class{constructor(e){this.id=ty++,this.code=e,this.usedTimes=0}};function ny(i,e,t,n,r,s,o){let a=new cs,l=new $h,c=new Set,h=[],u=r.logarithmicDepthBuffer,f=r.vertexTextures,p=r.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,_,I,V,H){let Q=V.fog,K=H.geometry,J=M.isMeshStandardMaterial?V.environment:null,ee=(M.isMeshStandardMaterial?t:e).get(M.envMap||J),X=ee&&ee.mapping===vo?ee.image.height:null,ge=g[M.type];M.precision!==null&&(p=r.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));let ve=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,be=ve!==void 0?ve.length:0,Oe=0;K.morphAttributes.position!==void 0&&(Oe=1),K.morphAttributes.normal!==void 0&&(Oe=2),K.morphAttributes.color!==void 0&&(Oe=3);let $e,Y,se,pe;if(ge){let _t=di[ge];$e=_t.vertexShader,Y=_t.fragmentShader}else $e=M.vertexShader,Y=M.fragmentShader,l.update(M),se=l.getVertexShaderID(M),pe=l.getFragmentShaderID(M);let de=i.getRenderTarget(),De=i.state.buffers.depth.getReversed(),We=H.isInstancedMesh===!0,Le=H.isBatchedMesh===!0,Ye=!!M.map,Pe=!!M.matcap,Ue=!!ee,E=!!M.aoMap,me=!!M.lightMap,oe=!!M.bumpMap,ue=!!M.normalMap,ne=!!M.displacementMap,Ne=!!M.emissiveMap,ae=!!M.metalnessMap,T=!!M.roughnessMap,x=M.anisotropy>0,k=M.clearcoat>0,Z=M.dispersion>0,re=M.iridescence>0,q=M.sheen>0,Fe=M.transmission>0,ye=x&&!!M.anisotropyMap,Ve=k&&!!M.clearcoatMap,qe=k&&!!M.clearcoatNormalMap,le=k&&!!M.clearcoatRoughnessMap,Te=re&&!!M.iridescenceMap,Xe=re&&!!M.iridescenceThicknessMap,Ze=q&&!!M.sheenColorMap,Re=q&&!!M.sheenRoughnessMap,ht=!!M.specularMap,rt=!!M.specularColorMap,St=!!M.specularIntensityMap,F=Fe&&!!M.transmissionMap,Me=Fe&&!!M.thicknessMap,j=!!M.gradientMap,ie=!!M.alphaMap,Ee=M.alphaTest>0,we=!!M.alphaHash,tt=!!M.extensions,Dt=Ii;M.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(Dt=i.toneMapping);let nn={shaderID:ge,shaderType:M.type,shaderName:M.name,vertexShader:$e,fragmentShader:Y,defines:M.defines,customVertexShaderID:se,customFragmentShaderID:pe,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:Le,batchingColor:Le&&H._colorsTexture!==null,instancing:We,instancingColor:We&&H.instanceColor!==null,instancingMorph:We&&H.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:de===null?i.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:Mr,alphaToCoverage:!!M.alphaToCoverage,map:Ye,matcap:Pe,envMap:Ue,envMapMode:Ue&&ee.mapping,envMapCubeUVHeight:X,aoMap:E,lightMap:me,bumpMap:oe,normalMap:ue,displacementMap:f&&ne,emissiveMap:Ne,normalMapObjectSpace:ue&&M.normalMapType===jd,normalMapTangentSpace:ue&&M.normalMapType===ac,metalnessMap:ae,roughnessMap:T,anisotropy:x,anisotropyMap:ye,clearcoat:k,clearcoatMap:Ve,clearcoatNormalMap:qe,clearcoatRoughnessMap:le,dispersion:Z,iridescence:re,iridescenceMap:Te,iridescenceThicknessMap:Xe,sheen:q,sheenColorMap:Ze,sheenRoughnessMap:Re,specularMap:ht,specularColorMap:rt,specularIntensityMap:St,transmission:Fe,transmissionMap:F,thicknessMap:Me,gradientMap:j,opaque:M.transparent===!1&&M.blending===br&&M.alphaToCoverage===!1,alphaMap:ie,alphaTest:Ee,alphaHash:we,combine:M.combine,mapUv:Ye&&v(M.map.channel),aoMapUv:E&&v(M.aoMap.channel),lightMapUv:me&&v(M.lightMap.channel),bumpMapUv:oe&&v(M.bumpMap.channel),normalMapUv:ue&&v(M.normalMap.channel),displacementMapUv:ne&&v(M.displacementMap.channel),emissiveMapUv:Ne&&v(M.emissiveMap.channel),metalnessMapUv:ae&&v(M.metalnessMap.channel),roughnessMapUv:T&&v(M.roughnessMap.channel),anisotropyMapUv:ye&&v(M.anisotropyMap.channel),clearcoatMapUv:Ve&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:qe&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:Xe&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ze&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:Re&&v(M.sheenRoughnessMap.channel),specularMapUv:ht&&v(M.specularMap.channel),specularColorMapUv:rt&&v(M.specularColorMap.channel),specularIntensityMapUv:St&&v(M.specularIntensityMap.channel),transmissionMapUv:F&&v(M.transmissionMap.channel),thicknessMapUv:Me&&v(M.thicknessMap.channel),alphaMapUv:ie&&v(M.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(ue||x),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!K.attributes.uv&&(Ye||ie),fog:!!Q,useFog:M.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:De,skinning:H.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:be,morphTextureStride:Oe,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:Dt,decodeVideoTexture:Ye&&M.map.isVideoTexture===!0&&ft.getTransfer(M.map.colorSpace)===xt,decodeVideoTextureEmissive:Ne&&M.emissiveMap.isVideoTexture===!0&&ft.getTransfer(M.emissiveMap.colorSpace)===xt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===tn,flipSided:M.side===Yt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:tt&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(tt&&M.extensions.multiDraw===!0||Le)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return nn.vertexUv1s=c.has(1),nn.vertexUv2s=c.has(2),nn.vertexUv3s=c.has(3),c.clear(),nn}function d(M){let _=[];if(M.shaderID?_.push(M.shaderID):(_.push(M.customVertexShaderID),_.push(M.customFragmentShaderID)),M.defines!==void 0)for(let I in M.defines)_.push(I),_.push(M.defines[I]);return M.isRawShaderMaterial===!1&&(A(_,M),C(_,M),_.push(i.outputColorSpace)),_.push(M.customProgramCacheKey),_.join()}function A(M,_){M.push(_.precision),M.push(_.outputColorSpace),M.push(_.envMapMode),M.push(_.envMapCubeUVHeight),M.push(_.mapUv),M.push(_.alphaMapUv),M.push(_.lightMapUv),M.push(_.aoMapUv),M.push(_.bumpMapUv),M.push(_.normalMapUv),M.push(_.displacementMapUv),M.push(_.emissiveMapUv),M.push(_.metalnessMapUv),M.push(_.roughnessMapUv),M.push(_.anisotropyMapUv),M.push(_.clearcoatMapUv),M.push(_.clearcoatNormalMapUv),M.push(_.clearcoatRoughnessMapUv),M.push(_.iridescenceMapUv),M.push(_.iridescenceThicknessMapUv),M.push(_.sheenColorMapUv),M.push(_.sheenRoughnessMapUv),M.push(_.specularMapUv),M.push(_.specularColorMapUv),M.push(_.specularIntensityMapUv),M.push(_.transmissionMapUv),M.push(_.thicknessMapUv),M.push(_.combine),M.push(_.fogExp2),M.push(_.sizeAttenuation),M.push(_.morphTargetsCount),M.push(_.morphAttributeCount),M.push(_.numDirLights),M.push(_.numPointLights),M.push(_.numSpotLights),M.push(_.numSpotLightMaps),M.push(_.numHemiLights),M.push(_.numRectAreaLights),M.push(_.numDirLightShadows),M.push(_.numPointLightShadows),M.push(_.numSpotLightShadows),M.push(_.numSpotLightShadowsWithMaps),M.push(_.numLightProbes),M.push(_.shadowMapType),M.push(_.toneMapping),M.push(_.numClippingPlanes),M.push(_.numClipIntersection),M.push(_.depthPacking)}function C(M,_){a.disableAll(),_.supportsVertexTextures&&a.enable(0),_.instancing&&a.enable(1),_.instancingColor&&a.enable(2),_.instancingMorph&&a.enable(3),_.matcap&&a.enable(4),_.envMap&&a.enable(5),_.normalMapObjectSpace&&a.enable(6),_.normalMapTangentSpace&&a.enable(7),_.clearcoat&&a.enable(8),_.iridescence&&a.enable(9),_.alphaTest&&a.enable(10),_.vertexColors&&a.enable(11),_.vertexAlphas&&a.enable(12),_.vertexUv1s&&a.enable(13),_.vertexUv2s&&a.enable(14),_.vertexUv3s&&a.enable(15),_.vertexTangents&&a.enable(16),_.anisotropy&&a.enable(17),_.alphaHash&&a.enable(18),_.batching&&a.enable(19),_.dispersion&&a.enable(20),_.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),_.fog&&a.enable(0),_.useFog&&a.enable(1),_.flatShading&&a.enable(2),_.logarithmicDepthBuffer&&a.enable(3),_.reverseDepthBuffer&&a.enable(4),_.skinning&&a.enable(5),_.morphTargets&&a.enable(6),_.morphNormals&&a.enable(7),_.morphColors&&a.enable(8),_.premultipliedAlpha&&a.enable(9),_.shadowMapEnabled&&a.enable(10),_.doubleSided&&a.enable(11),_.flipSided&&a.enable(12),_.useDepthPacking&&a.enable(13),_.dithering&&a.enable(14),_.transmission&&a.enable(15),_.sheen&&a.enable(16),_.opaque&&a.enable(17),_.pointsUvs&&a.enable(18),_.decodeVideoTexture&&a.enable(19),_.decodeVideoTextureEmissive&&a.enable(20),_.alphaToCoverage&&a.enable(21),M.push(a.mask)}function b(M){let _=g[M.type],I;if(_){let V=di[_];I=cf.clone(V.uniforms)}else I=M.uniforms;return I}function L(M,_){let I;for(let V=0,H=h.length;V<H;V++){let Q=h[V];if(Q.cacheKey===_){I=Q,++I.usedTimes;break}}return I===void 0&&(I=new ey(i,_,M,s),h.push(I)),I}function P(M){if(--M.usedTimes===0){let _=h.indexOf(M);h[_]=h[h.length-1],h.pop(),M.destroy()}}function D(M){l.remove(M)}function N(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:b,acquireProgram:L,releaseProgram:P,releaseShaderCache:D,programs:h,dispose:N}}function iy(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function ry(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Ff(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Uf(){let i=[],e=0,t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(u,f,p,g,v,m){let d=i[e];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},i[e]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=v,d.group=m),e++,d}function a(u,f,p,g,v,m){let d=o(u,f,p,g,v,m);p.transmission>0?n.push(d):p.transparent===!0?r.push(d):t.push(d)}function l(u,f,p,g,v,m){let d=o(u,f,p,g,v,m);p.transmission>0?n.unshift(d):p.transparent===!0?r.unshift(d):t.unshift(d)}function c(u,f){t.length>1&&t.sort(u||ry),n.length>1&&n.sort(f||Ff),r.length>1&&r.sort(f||Ff)}function h(){for(let u=e,f=i.length;u<f;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:h,sort:c}}function sy(){let i=new WeakMap;function e(n,r){let s=i.get(n),o;return s===void 0?(o=new Uf,i.set(n,[o])):r>=s.length?(o=new Uf,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function oy(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new Qe};break;case"SpotLight":t={position:new z,direction:new z,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":t={color:new Qe,position:new z,halfWidth:new z,halfHeight:new z};break}return i[e.id]=t,t}}}function ay(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var ly=0;function cy(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function hy(i){let e=new oy,t=ay(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new z);let r=new z,s=new Ct,o=new Ct;function a(c){let h=0,u=0,f=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let p=0,g=0,v=0,m=0,d=0,A=0,C=0,b=0,L=0,P=0,D=0;c.sort(cy);for(let M=0,_=c.length;M<_;M++){let I=c[M],V=I.color,H=I.intensity,Q=I.distance,K=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=V.r*H,u+=V.g*H,f+=V.b*H;else if(I.isLightProbe){for(let J=0;J<9;J++)n.probe[J].addScaledVector(I.sh.coefficients[J],H);D++}else if(I.isDirectionalLight){let J=e.get(I);if(J.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let ee=I.shadow,X=t.get(I);X.shadowIntensity=ee.intensity,X.shadowBias=ee.bias,X.shadowNormalBias=ee.normalBias,X.shadowRadius=ee.radius,X.shadowMapSize=ee.mapSize,n.directionalShadow[p]=X,n.directionalShadowMap[p]=K,n.directionalShadowMatrix[p]=I.shadow.matrix,A++}n.directional[p]=J,p++}else if(I.isSpotLight){let J=e.get(I);J.position.setFromMatrixPosition(I.matrixWorld),J.color.copy(V).multiplyScalar(H),J.distance=Q,J.coneCos=Math.cos(I.angle),J.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),J.decay=I.decay,n.spot[v]=J;let ee=I.shadow;if(I.map&&(n.spotLightMap[L]=I.map,L++,ee.updateMatrices(I),I.castShadow&&P++),n.spotLightMatrix[v]=ee.matrix,I.castShadow){let X=t.get(I);X.shadowIntensity=ee.intensity,X.shadowBias=ee.bias,X.shadowNormalBias=ee.normalBias,X.shadowRadius=ee.radius,X.shadowMapSize=ee.mapSize,n.spotShadow[v]=X,n.spotShadowMap[v]=K,b++}v++}else if(I.isRectAreaLight){let J=e.get(I);J.color.copy(V).multiplyScalar(H),J.halfWidth.set(I.width*.5,0,0),J.halfHeight.set(0,I.height*.5,0),n.rectArea[m]=J,m++}else if(I.isPointLight){let J=e.get(I);if(J.color.copy(I.color).multiplyScalar(I.intensity),J.distance=I.distance,J.decay=I.decay,I.castShadow){let ee=I.shadow,X=t.get(I);X.shadowIntensity=ee.intensity,X.shadowBias=ee.bias,X.shadowNormalBias=ee.normalBias,X.shadowRadius=ee.radius,X.shadowMapSize=ee.mapSize,X.shadowCameraNear=ee.camera.near,X.shadowCameraFar=ee.camera.far,n.pointShadow[g]=X,n.pointShadowMap[g]=K,n.pointShadowMatrix[g]=I.shadow.matrix,C++}n.point[g]=J,g++}else if(I.isHemisphereLight){let J=e.get(I);J.skyColor.copy(I.color).multiplyScalar(H),J.groundColor.copy(I.groundColor).multiplyScalar(H),n.hemi[d]=J,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xe.LTC_FLOAT_1,n.rectAreaLTC2=xe.LTC_FLOAT_2):(n.rectAreaLTC1=xe.LTC_HALF_1,n.rectAreaLTC2=xe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let N=n.hash;(N.directionalLength!==p||N.pointLength!==g||N.spotLength!==v||N.rectAreaLength!==m||N.hemiLength!==d||N.numDirectionalShadows!==A||N.numPointShadows!==C||N.numSpotShadows!==b||N.numSpotMaps!==L||N.numLightProbes!==D)&&(n.directional.length=p,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.pointShadow.length=C,n.pointShadowMap.length=C,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=A,n.pointShadowMatrix.length=C,n.spotLightMatrix.length=b+L-P,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=D,N.directionalLength=p,N.pointLength=g,N.spotLength=v,N.rectAreaLength=m,N.hemiLength=d,N.numDirectionalShadows=A,N.numPointShadows=C,N.numSpotShadows=b,N.numSpotMaps=L,N.numLightProbes=D,n.version=ly++)}function l(c,h){let u=0,f=0,p=0,g=0,v=0,m=h.matrixWorldInverse;for(let d=0,A=c.length;d<A;d++){let C=c[d];if(C.isDirectionalLight){let b=n.directional[u];b.direction.setFromMatrixPosition(C.matrixWorld),r.setFromMatrixPosition(C.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(m),u++}else if(C.isSpotLight){let b=n.spot[p];b.position.setFromMatrixPosition(C.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(C.matrixWorld),r.setFromMatrixPosition(C.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(m),p++}else if(C.isRectAreaLight){let b=n.rectArea[g];b.position.setFromMatrixPosition(C.matrixWorld),b.position.applyMatrix4(m),o.identity(),s.copy(C.matrixWorld),s.premultiply(m),o.extractRotation(s),b.halfWidth.set(C.width*.5,0,0),b.halfHeight.set(0,C.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),g++}else if(C.isPointLight){let b=n.point[f];b.position.setFromMatrixPosition(C.matrixWorld),b.position.applyMatrix4(m),f++}else if(C.isHemisphereLight){let b=n.hemi[v];b.direction.setFromMatrixPosition(C.matrixWorld),b.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:n}}function Nf(i){let e=new hy(i),t=[],n=[];function r(h){c.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function uy(i){let e=new WeakMap;function t(r,s=0){let o=e.get(r),a;return o===void 0?(a=new Nf(i),e.set(r,[a])):s>=o.length?(a=new Nf(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var dy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fy=`uniform sampler2D shadow_pass;
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
}`;function py(i,e,t){let n=new ds,r=new _e,s=new _e,o=new Pt,a=new ol({depthPacking:$d}),l=new al,c={},h=t.maxTextureSize,u={[Mi]:Yt,[Yt]:Mi,[tn]:tn},f=new An({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _e},radius:{value:4}},vertexShader:dy,fragmentShader:fy}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let g=new kn;g.setAttribute("position",new Cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Et(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vh;let d=this.type;this.render=function(P,D,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;let M=i.getRenderTarget(),_=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),V=i.state;V.setBlending(Ri),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);let H=d!==hi&&this.type===hi,Q=d===hi&&this.type!==hi;for(let K=0,J=P.length;K<J;K++){let ee=P[K],X=ee.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;r.copy(X.mapSize);let ge=X.getFrameExtents();if(r.multiply(ge),s.copy(X.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/ge.x),r.x=s.x*ge.x,X.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/ge.y),r.y=s.y*ge.y,X.mapSize.y=s.y)),X.map===null||H===!0||Q===!0){let be=this.type!==hi?{minFilter:On,magFilter:On}:{};X.map!==null&&X.map.dispose(),X.map=new li(r.x,r.y,be),X.map.texture.name=ee.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();let ve=X.getViewportCount();for(let be=0;be<ve;be++){let Oe=X.getViewport(be);o.set(s.x*Oe.x,s.y*Oe.y,s.x*Oe.z,s.y*Oe.w),V.viewport(o),X.updateMatrices(ee,be),n=X.getFrustum(),b(D,N,X.camera,ee,this.type)}X.isPointLightShadow!==!0&&this.type===hi&&A(X,N),X.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(M,_,I)};function A(P,D){let N=e.update(v);f.defines.VSM_SAMPLES!==P.blurSamples&&(f.defines.VSM_SAMPLES=P.blurSamples,p.defines.VSM_SAMPLES=P.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new li(r.x,r.y)),f.uniforms.shadow_pass.value=P.map.texture,f.uniforms.resolution.value=P.mapSize,f.uniforms.radius.value=P.radius,i.setRenderTarget(P.mapPass),i.clear(),i.renderBufferDirect(D,null,N,f,v,null),p.uniforms.shadow_pass.value=P.mapPass.texture,p.uniforms.resolution.value=P.mapSize,p.uniforms.radius.value=P.radius,i.setRenderTarget(P.map),i.clear(),i.renderBufferDirect(D,null,N,p,v,null)}function C(P,D,N,M){let _=null,I=N.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(I!==void 0)_=I;else if(_=N.isPointLight===!0?l:a,i.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){let V=_.uuid,H=D.uuid,Q=c[V];Q===void 0&&(Q={},c[V]=Q);let K=Q[H];K===void 0&&(K=_.clone(),Q[H]=K,D.addEventListener("dispose",L)),_=K}if(_.visible=D.visible,_.wireframe=D.wireframe,M===hi?_.side=D.shadowSide!==null?D.shadowSide:D.side:_.side=D.shadowSide!==null?D.shadowSide:u[D.side],_.alphaMap=D.alphaMap,_.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,_.map=D.map,_.clipShadows=D.clipShadows,_.clippingPlanes=D.clippingPlanes,_.clipIntersection=D.clipIntersection,_.displacementMap=D.displacementMap,_.displacementScale=D.displacementScale,_.displacementBias=D.displacementBias,_.wireframeLinewidth=D.wireframeLinewidth,_.linewidth=D.linewidth,N.isPointLight===!0&&_.isMeshDistanceMaterial===!0){let V=i.properties.get(_);V.light=N}return _}function b(P,D,N,M,_){if(P.visible===!1)return;if(P.layers.test(D.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&_===hi)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,P.matrixWorld);let H=e.update(P),Q=P.material;if(Array.isArray(Q)){let K=H.groups;for(let J=0,ee=K.length;J<ee;J++){let X=K[J],ge=Q[X.materialIndex];if(ge&&ge.visible){let ve=C(P,ge,M,_);P.onBeforeShadow(i,P,D,N,H,ve,X),i.renderBufferDirect(N,null,H,ve,P,X),P.onAfterShadow(i,P,D,N,H,ve,X)}}}else if(Q.visible){let K=C(P,Q,M,_);P.onBeforeShadow(i,P,D,N,H,K,null),i.renderBufferDirect(N,null,H,K,P,null),P.onAfterShadow(i,P,D,N,H,K,null)}}let V=P.children;for(let H=0,Q=V.length;H<Q;H++)b(V[H],D,N,M,_)}function L(P){P.target.removeEventListener("dispose",L);for(let N in c){let M=c[N],_=P.target.uuid;_ in M&&(M[_].dispose(),delete M[_])}}}var my={[xl]:vl,[yl]:Ml,[bl]:wl,[Sr]:Sl,[vl]:xl,[Ml]:yl,[wl]:bl,[Sl]:Sr};function gy(i,e){function t(){let F=!1,Me=new Pt,j=null,ie=new Pt(0,0,0,0);return{setMask:function(Ee){j!==Ee&&!F&&(i.colorMask(Ee,Ee,Ee,Ee),j=Ee)},setLocked:function(Ee){F=Ee},setClear:function(Ee,we,tt,Dt,nn){nn===!0&&(Ee*=Dt,we*=Dt,tt*=Dt),Me.set(Ee,we,tt,Dt),ie.equals(Me)===!1&&(i.clearColor(Ee,we,tt,Dt),ie.copy(Me))},reset:function(){F=!1,j=null,ie.set(-1,0,0,0)}}}function n(){let F=!1,Me=!1,j=null,ie=null,Ee=null;return{setReversed:function(we){if(Me!==we){let tt=e.get("EXT_clip_control");we?tt.clipControlEXT(tt.LOWER_LEFT_EXT,tt.ZERO_TO_ONE_EXT):tt.clipControlEXT(tt.LOWER_LEFT_EXT,tt.NEGATIVE_ONE_TO_ONE_EXT),Me=we;let Dt=Ee;Ee=null,this.setClear(Dt)}},getReversed:function(){return Me},setTest:function(we){we?de(i.DEPTH_TEST):De(i.DEPTH_TEST)},setMask:function(we){j!==we&&!F&&(i.depthMask(we),j=we)},setFunc:function(we){if(Me&&(we=my[we]),ie!==we){switch(we){case xl:i.depthFunc(i.NEVER);break;case vl:i.depthFunc(i.ALWAYS);break;case yl:i.depthFunc(i.LESS);break;case Sr:i.depthFunc(i.LEQUAL);break;case bl:i.depthFunc(i.EQUAL);break;case Sl:i.depthFunc(i.GEQUAL);break;case Ml:i.depthFunc(i.GREATER);break;case wl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ie=we}},setLocked:function(we){F=we},setClear:function(we){Ee!==we&&(Me&&(we=1-we),i.clearDepth(we),Ee=we)},reset:function(){F=!1,j=null,ie=null,Ee=null,Me=!1}}}function r(){let F=!1,Me=null,j=null,ie=null,Ee=null,we=null,tt=null,Dt=null,nn=null;return{setTest:function(_t){F||(_t?de(i.STENCIL_TEST):De(i.STENCIL_TEST))},setMask:function(_t){Me!==_t&&!F&&(i.stencilMask(_t),Me=_t)},setFunc:function(_t,Vn,fi){(j!==_t||ie!==Vn||Ee!==fi)&&(i.stencilFunc(_t,Vn,fi),j=_t,ie=Vn,Ee=fi)},setOp:function(_t,Vn,fi){(we!==_t||tt!==Vn||Dt!==fi)&&(i.stencilOp(_t,Vn,fi),we=_t,tt=Vn,Dt=fi)},setLocked:function(_t){F=_t},setClear:function(_t){nn!==_t&&(i.clearStencil(_t),nn=_t)},reset:function(){F=!1,Me=null,j=null,ie=null,Ee=null,we=null,tt=null,Dt=null,nn=null}}}let s=new t,o=new n,a=new r,l=new WeakMap,c=new WeakMap,h={},u={},f=new WeakMap,p=[],g=null,v=!1,m=null,d=null,A=null,C=null,b=null,L=null,P=null,D=new Qe(0,0,0),N=0,M=!1,_=null,I=null,V=null,H=null,Q=null,K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),J=!1,ee=0,X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(X)[1]),J=ee>=1):X.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),J=ee>=2);let ge=null,ve={},be=i.getParameter(i.SCISSOR_BOX),Oe=i.getParameter(i.VIEWPORT),$e=new Pt().fromArray(be),Y=new Pt().fromArray(Oe);function se(F,Me,j,ie){let Ee=new Uint8Array(4),we=i.createTexture();i.bindTexture(F,we),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let tt=0;tt<j;tt++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(Me,0,i.RGBA,1,1,ie,0,i.RGBA,i.UNSIGNED_BYTE,Ee):i.texImage2D(Me+tt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ee);return we}let pe={};pe[i.TEXTURE_2D]=se(i.TEXTURE_2D,i.TEXTURE_2D,1),pe[i.TEXTURE_CUBE_MAP]=se(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),pe[i.TEXTURE_2D_ARRAY]=se(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),pe[i.TEXTURE_3D]=se(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),de(i.DEPTH_TEST),o.setFunc(Sr),oe(!1),ue(xh),de(i.CULL_FACE),E(Ri);function de(F){h[F]!==!0&&(i.enable(F),h[F]=!0)}function De(F){h[F]!==!1&&(i.disable(F),h[F]=!1)}function We(F,Me){return u[F]!==Me?(i.bindFramebuffer(F,Me),u[F]=Me,F===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Me),F===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Me),!0):!1}function Le(F,Me){let j=p,ie=!1;if(F){j=f.get(Me),j===void 0&&(j=[],f.set(Me,j));let Ee=F.textures;if(j.length!==Ee.length||j[0]!==i.COLOR_ATTACHMENT0){for(let we=0,tt=Ee.length;we<tt;we++)j[we]=i.COLOR_ATTACHMENT0+we;j.length=Ee.length,ie=!0}}else j[0]!==i.BACK&&(j[0]=i.BACK,ie=!0);ie&&i.drawBuffers(j)}function Ye(F){return g!==F?(i.useProgram(F),g=F,!0):!1}let Pe={[Qi]:i.FUNC_ADD,[yd]:i.FUNC_SUBTRACT,[bd]:i.FUNC_REVERSE_SUBTRACT};Pe[Sd]=i.MIN,Pe[Md]=i.MAX;let Ue={[wd]:i.ZERO,[Ed]:i.ONE,[Td]:i.SRC_COLOR,[Wa]:i.SRC_ALPHA,[Dd]:i.SRC_ALPHA_SATURATE,[Id]:i.DST_COLOR,[Ad]:i.DST_ALPHA,[Cd]:i.ONE_MINUS_SRC_COLOR,[Xa]:i.ONE_MINUS_SRC_ALPHA,[Pd]:i.ONE_MINUS_DST_COLOR,[Rd]:i.ONE_MINUS_DST_ALPHA,[Ld]:i.CONSTANT_COLOR,[Fd]:i.ONE_MINUS_CONSTANT_COLOR,[Ud]:i.CONSTANT_ALPHA,[Nd]:i.ONE_MINUS_CONSTANT_ALPHA};function E(F,Me,j,ie,Ee,we,tt,Dt,nn,_t){if(F===Ri){v===!0&&(De(i.BLEND),v=!1);return}if(v===!1&&(de(i.BLEND),v=!0),F!==vd){if(F!==m||_t!==M){if((d!==Qi||b!==Qi)&&(i.blendEquation(i.FUNC_ADD),d=Qi,b=Qi),_t)switch(F){case br:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case xo:i.blendFunc(i.ONE,i.ONE);break;case yh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case bh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case br:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case xo:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case yh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case bh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}A=null,C=null,L=null,P=null,D.set(0,0,0),N=0,m=F,M=_t}return}Ee=Ee||Me,we=we||j,tt=tt||ie,(Me!==d||Ee!==b)&&(i.blendEquationSeparate(Pe[Me],Pe[Ee]),d=Me,b=Ee),(j!==A||ie!==C||we!==L||tt!==P)&&(i.blendFuncSeparate(Ue[j],Ue[ie],Ue[we],Ue[tt]),A=j,C=ie,L=we,P=tt),(Dt.equals(D)===!1||nn!==N)&&(i.blendColor(Dt.r,Dt.g,Dt.b,nn),D.copy(Dt),N=nn),m=F,M=!1}function me(F,Me){F.side===tn?De(i.CULL_FACE):de(i.CULL_FACE);let j=F.side===Yt;Me&&(j=!j),oe(j),F.blending===br&&F.transparent===!1?E(Ri):E(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),s.setMask(F.colorWrite);let ie=F.stencilWrite;a.setTest(ie),ie&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Ne(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?de(i.SAMPLE_ALPHA_TO_COVERAGE):De(i.SAMPLE_ALPHA_TO_COVERAGE)}function oe(F){_!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),_=F)}function ue(F){F!==gd?(de(i.CULL_FACE),F!==I&&(F===xh?i.cullFace(i.BACK):F===_d?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):De(i.CULL_FACE),I=F}function ne(F){F!==V&&(J&&i.lineWidth(F),V=F)}function Ne(F,Me,j){F?(de(i.POLYGON_OFFSET_FILL),(H!==Me||Q!==j)&&(i.polygonOffset(Me,j),H=Me,Q=j)):De(i.POLYGON_OFFSET_FILL)}function ae(F){F?de(i.SCISSOR_TEST):De(i.SCISSOR_TEST)}function T(F){F===void 0&&(F=i.TEXTURE0+K-1),ge!==F&&(i.activeTexture(F),ge=F)}function x(F,Me,j){j===void 0&&(ge===null?j=i.TEXTURE0+K-1:j=ge);let ie=ve[j];ie===void 0&&(ie={type:void 0,texture:void 0},ve[j]=ie),(ie.type!==F||ie.texture!==Me)&&(ge!==j&&(i.activeTexture(j),ge=j),i.bindTexture(F,Me||pe[F]),ie.type=F,ie.texture=Me)}function k(){let F=ve[ge];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function Z(){try{i.compressedTexImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function re(){try{i.compressedTexImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function q(){try{i.texSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Fe(){try{i.texSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ye(){try{i.compressedTexSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ve(){try{i.compressedTexSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function qe(){try{i.texStorage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function le(){try{i.texStorage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Te(){try{i.texImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Xe(){try{i.texImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ze(F){$e.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),$e.copy(F))}function Re(F){Y.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),Y.copy(F))}function ht(F,Me){let j=c.get(Me);j===void 0&&(j=new WeakMap,c.set(Me,j));let ie=j.get(F);ie===void 0&&(ie=i.getUniformBlockIndex(Me,F.name),j.set(F,ie))}function rt(F,Me){let ie=c.get(Me).get(F);l.get(Me)!==ie&&(i.uniformBlockBinding(Me,ie,F.__bindingPointIndex),l.set(Me,ie))}function St(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ge=null,ve={},u={},f=new WeakMap,p=[],g=null,v=!1,m=null,d=null,A=null,C=null,b=null,L=null,P=null,D=new Qe(0,0,0),N=0,M=!1,_=null,I=null,V=null,H=null,Q=null,$e.set(0,0,i.canvas.width,i.canvas.height),Y.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:de,disable:De,bindFramebuffer:We,drawBuffers:Le,useProgram:Ye,setBlending:E,setMaterial:me,setFlipSided:oe,setCullFace:ue,setLineWidth:ne,setPolygonOffset:Ne,setScissorTest:ae,activeTexture:T,bindTexture:x,unbindTexture:k,compressedTexImage2D:Z,compressedTexImage3D:re,texImage2D:Te,texImage3D:Xe,updateUBOMapping:ht,uniformBlockBinding:rt,texStorage2D:qe,texStorage3D:le,texSubImage2D:q,texSubImage3D:Fe,compressedTexSubImage2D:ye,compressedTexSubImage3D:Ve,scissor:Ze,viewport:Re,reset:St}}function _y(i,e,t,n,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new _e,h=new WeakMap,u,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,x){return p?new OffscreenCanvas(T,x):Ys("canvas")}function v(T,x,k){let Z=1,re=ae(T);if((re.width>k||re.height>k)&&(Z=k/Math.max(re.width,re.height)),Z<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let q=Math.floor(Z*re.width),Fe=Math.floor(Z*re.height);u===void 0&&(u=g(q,Fe));let ye=x?g(q,Fe):u;return ye.width=q,ye.height=Fe,ye.getContext("2d").drawImage(T,0,0,q,Fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+q+"x"+Fe+")."),ye}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),T;return T}function m(T){return T.generateMipmaps}function d(T){i.generateMipmap(T)}function A(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function C(T,x,k,Z,re=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let q=x;if(x===i.RED&&(k===i.FLOAT&&(q=i.R32F),k===i.HALF_FLOAT&&(q=i.R16F),k===i.UNSIGNED_BYTE&&(q=i.R8)),x===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(q=i.R8UI),k===i.UNSIGNED_SHORT&&(q=i.R16UI),k===i.UNSIGNED_INT&&(q=i.R32UI),k===i.BYTE&&(q=i.R8I),k===i.SHORT&&(q=i.R16I),k===i.INT&&(q=i.R32I)),x===i.RG&&(k===i.FLOAT&&(q=i.RG32F),k===i.HALF_FLOAT&&(q=i.RG16F),k===i.UNSIGNED_BYTE&&(q=i.RG8)),x===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(q=i.RG8UI),k===i.UNSIGNED_SHORT&&(q=i.RG16UI),k===i.UNSIGNED_INT&&(q=i.RG32UI),k===i.BYTE&&(q=i.RG8I),k===i.SHORT&&(q=i.RG16I),k===i.INT&&(q=i.RG32I)),x===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(q=i.RGB8UI),k===i.UNSIGNED_SHORT&&(q=i.RGB16UI),k===i.UNSIGNED_INT&&(q=i.RGB32UI),k===i.BYTE&&(q=i.RGB8I),k===i.SHORT&&(q=i.RGB16I),k===i.INT&&(q=i.RGB32I)),x===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(q=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(q=i.RGBA16UI),k===i.UNSIGNED_INT&&(q=i.RGBA32UI),k===i.BYTE&&(q=i.RGBA8I),k===i.SHORT&&(q=i.RGBA16I),k===i.INT&&(q=i.RGBA32I)),x===i.RGB&&k===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),x===i.RGBA){let Fe=re?Ws:ft.getTransfer(Z);k===i.FLOAT&&(q=i.RGBA32F),k===i.HALF_FLOAT&&(q=i.RGBA16F),k===i.UNSIGNED_BYTE&&(q=Fe===xt?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function b(T,x){let k;return T?x===null||x===lr||x===vs?k=i.DEPTH24_STENCIL8:x===ui?k=i.DEPTH32F_STENCIL8:x===_s&&(k=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===lr||x===vs?k=i.DEPTH_COMPONENT24:x===ui?k=i.DEPTH_COMPONENT32F:x===_s&&(k=i.DEPTH_COMPONENT16),k}function L(T,x){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==On&&T.minFilter!==Yn?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function P(T){let x=T.target;x.removeEventListener("dispose",P),N(x),x.isVideoTexture&&h.delete(x)}function D(T){let x=T.target;x.removeEventListener("dispose",D),_(x)}function N(T){let x=n.get(T);if(x.__webglInit===void 0)return;let k=T.source,Z=f.get(k);if(Z){let re=Z[x.__cacheKey];re.usedTimes--,re.usedTimes===0&&M(T),Object.keys(Z).length===0&&f.delete(k)}n.remove(T)}function M(T){let x=n.get(T);i.deleteTexture(x.__webglTexture);let k=T.source,Z=f.get(k);delete Z[x.__cacheKey],o.memory.textures--}function _(T){let x=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(x.__webglFramebuffer[Z]))for(let re=0;re<x.__webglFramebuffer[Z].length;re++)i.deleteFramebuffer(x.__webglFramebuffer[Z][re]);else i.deleteFramebuffer(x.__webglFramebuffer[Z]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[Z])}else{if(Array.isArray(x.__webglFramebuffer))for(let Z=0;Z<x.__webglFramebuffer.length;Z++)i.deleteFramebuffer(x.__webglFramebuffer[Z]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Z=0;Z<x.__webglColorRenderbuffer.length;Z++)x.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[Z]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let k=T.textures;for(let Z=0,re=k.length;Z<re;Z++){let q=n.get(k[Z]);q.__webglTexture&&(i.deleteTexture(q.__webglTexture),o.memory.textures--),n.remove(k[Z])}n.remove(T)}let I=0;function V(){I=0}function H(){let T=I;return T>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),I+=1,T}function Q(T){let x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function K(T,x){let k=n.get(T);if(T.isVideoTexture&&ne(T),T.isRenderTargetTexture===!1&&T.version>0&&k.__version!==T.version){let Z=T.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(k,T,x);return}}t.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+x)}function J(T,x){let k=n.get(T);if(T.version>0&&k.__version!==T.version){Y(k,T,x);return}t.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+x)}function ee(T,x){let k=n.get(T);if(T.version>0&&k.__version!==T.version){Y(k,T,x);return}t.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+x)}function X(T,x){let k=n.get(T);if(T.version>0&&k.__version!==T.version){se(k,T,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+x)}let ge={[qa]:i.REPEAT,[Ki]:i.CLAMP_TO_EDGE,[Ya]:i.MIRRORED_REPEAT},ve={[On]:i.NEAREST,[qd]:i.NEAREST_MIPMAP_NEAREST,[yo]:i.NEAREST_MIPMAP_LINEAR,[Yn]:i.LINEAR,[Al]:i.LINEAR_MIPMAP_NEAREST,[ar]:i.LINEAR_MIPMAP_LINEAR},be={[Zd]:i.NEVER,[nf]:i.ALWAYS,[Jd]:i.LESS,[Ih]:i.LEQUAL,[Kd]:i.EQUAL,[tf]:i.GEQUAL,[Qd]:i.GREATER,[ef]:i.NOTEQUAL};function Oe(T,x){if(x.type===ui&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Yn||x.magFilter===Al||x.magFilter===yo||x.magFilter===ar||x.minFilter===Yn||x.minFilter===Al||x.minFilter===yo||x.minFilter===ar)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,ge[x.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,ge[x.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,ge[x.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,ve[x.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,ve[x.minFilter]),x.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,be[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===On||x.minFilter!==yo&&x.minFilter!==ar||x.type===ui&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let k=e.get("EXT_texture_filter_anisotropic");i.texParameterf(T,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function $e(T,x){let k=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",P));let Z=x.source,re=f.get(Z);re===void 0&&(re={},f.set(Z,re));let q=Q(x);if(q!==T.__cacheKey){re[q]===void 0&&(re[q]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,k=!0),re[q].usedTimes++;let Fe=re[T.__cacheKey];Fe!==void 0&&(re[T.__cacheKey].usedTimes--,Fe.usedTimes===0&&M(x)),T.__cacheKey=q,T.__webglTexture=re[q].texture}return k}function Y(T,x,k){let Z=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Z=i.TEXTURE_3D);let re=$e(T,x),q=x.source;t.bindTexture(Z,T.__webglTexture,i.TEXTURE0+k);let Fe=n.get(q);if(q.version!==Fe.__version||re===!0){t.activeTexture(i.TEXTURE0+k);let ye=ft.getPrimaries(ft.workingColorSpace),Ve=x.colorSpace===Pi?null:ft.getPrimaries(x.colorSpace),qe=x.colorSpace===Pi||ye===Ve?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe);let le=v(x.image,!1,r.maxTextureSize);le=Ne(x,le);let Te=s.convert(x.format,x.colorSpace),Xe=s.convert(x.type),Ze=C(x.internalFormat,Te,Xe,x.colorSpace,x.isVideoTexture);Oe(Z,x);let Re,ht=x.mipmaps,rt=x.isVideoTexture!==!0,St=Fe.__version===void 0||re===!0,F=q.dataReady,Me=L(x,le);if(x.isDepthTexture)Ze=b(x.format===ys,x.type),St&&(rt?t.texStorage2D(i.TEXTURE_2D,1,Ze,le.width,le.height):t.texImage2D(i.TEXTURE_2D,0,Ze,le.width,le.height,0,Te,Xe,null));else if(x.isDataTexture)if(ht.length>0){rt&&St&&t.texStorage2D(i.TEXTURE_2D,Me,Ze,ht[0].width,ht[0].height);for(let j=0,ie=ht.length;j<ie;j++)Re=ht[j],rt?F&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,Re.width,Re.height,Te,Xe,Re.data):t.texImage2D(i.TEXTURE_2D,j,Ze,Re.width,Re.height,0,Te,Xe,Re.data);x.generateMipmaps=!1}else rt?(St&&t.texStorage2D(i.TEXTURE_2D,Me,Ze,le.width,le.height),F&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,le.width,le.height,Te,Xe,le.data)):t.texImage2D(i.TEXTURE_2D,0,Ze,le.width,le.height,0,Te,Xe,le.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){rt&&St&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Me,Ze,ht[0].width,ht[0].height,le.depth);for(let j=0,ie=ht.length;j<ie;j++)if(Re=ht[j],x.format!==zn)if(Te!==null)if(rt){if(F)if(x.layerUpdates.size>0){let Ee=Oh(Re.width,Re.height,x.format,x.type);for(let we of x.layerUpdates){let tt=Re.data.subarray(we*Ee/Re.data.BYTES_PER_ELEMENT,(we+1)*Ee/Re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,we,Re.width,Re.height,1,Te,tt)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,Re.width,Re.height,le.depth,Te,Re.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,j,Ze,Re.width,Re.height,le.depth,0,Re.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else rt?F&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,Re.width,Re.height,le.depth,Te,Xe,Re.data):t.texImage3D(i.TEXTURE_2D_ARRAY,j,Ze,Re.width,Re.height,le.depth,0,Te,Xe,Re.data)}else{rt&&St&&t.texStorage2D(i.TEXTURE_2D,Me,Ze,ht[0].width,ht[0].height);for(let j=0,ie=ht.length;j<ie;j++)Re=ht[j],x.format!==zn?Te!==null?rt?F&&t.compressedTexSubImage2D(i.TEXTURE_2D,j,0,0,Re.width,Re.height,Te,Re.data):t.compressedTexImage2D(i.TEXTURE_2D,j,Ze,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?F&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,Re.width,Re.height,Te,Xe,Re.data):t.texImage2D(i.TEXTURE_2D,j,Ze,Re.width,Re.height,0,Te,Xe,Re.data)}else if(x.isDataArrayTexture)if(rt){if(St&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Me,Ze,le.width,le.height,le.depth),F)if(x.layerUpdates.size>0){let j=Oh(le.width,le.height,x.format,x.type);for(let ie of x.layerUpdates){let Ee=le.data.subarray(ie*j/le.data.BYTES_PER_ELEMENT,(ie+1)*j/le.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ie,le.width,le.height,1,Te,Xe,Ee)}x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,Te,Xe,le.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ze,le.width,le.height,le.depth,0,Te,Xe,le.data);else if(x.isData3DTexture)rt?(St&&t.texStorage3D(i.TEXTURE_3D,Me,Ze,le.width,le.height,le.depth),F&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,Te,Xe,le.data)):t.texImage3D(i.TEXTURE_3D,0,Ze,le.width,le.height,le.depth,0,Te,Xe,le.data);else if(x.isFramebufferTexture){if(St)if(rt)t.texStorage2D(i.TEXTURE_2D,Me,Ze,le.width,le.height);else{let j=le.width,ie=le.height;for(let Ee=0;Ee<Me;Ee++)t.texImage2D(i.TEXTURE_2D,Ee,Ze,j,ie,0,Te,Xe,null),j>>=1,ie>>=1}}else if(ht.length>0){if(rt&&St){let j=ae(ht[0]);t.texStorage2D(i.TEXTURE_2D,Me,Ze,j.width,j.height)}for(let j=0,ie=ht.length;j<ie;j++)Re=ht[j],rt?F&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,Te,Xe,Re):t.texImage2D(i.TEXTURE_2D,j,Ze,Te,Xe,Re);x.generateMipmaps=!1}else if(rt){if(St){let j=ae(le);t.texStorage2D(i.TEXTURE_2D,Me,Ze,j.width,j.height)}F&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Te,Xe,le)}else t.texImage2D(i.TEXTURE_2D,0,Ze,Te,Xe,le);m(x)&&d(Z),Fe.__version=q.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function se(T,x,k){if(x.image.length!==6)return;let Z=$e(T,x),re=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+k);let q=n.get(re);if(re.version!==q.__version||Z===!0){t.activeTexture(i.TEXTURE0+k);let Fe=ft.getPrimaries(ft.workingColorSpace),ye=x.colorSpace===Pi?null:ft.getPrimaries(x.colorSpace),Ve=x.colorSpace===Pi||Fe===ye?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);let qe=x.isCompressedTexture||x.image[0].isCompressedTexture,le=x.image[0]&&x.image[0].isDataTexture,Te=[];for(let ie=0;ie<6;ie++)!qe&&!le?Te[ie]=v(x.image[ie],!0,r.maxCubemapSize):Te[ie]=le?x.image[ie].image:x.image[ie],Te[ie]=Ne(x,Te[ie]);let Xe=Te[0],Ze=s.convert(x.format,x.colorSpace),Re=s.convert(x.type),ht=C(x.internalFormat,Ze,Re,x.colorSpace),rt=x.isVideoTexture!==!0,St=q.__version===void 0||Z===!0,F=re.dataReady,Me=L(x,Xe);Oe(i.TEXTURE_CUBE_MAP,x);let j;if(qe){rt&&St&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Me,ht,Xe.width,Xe.height);for(let ie=0;ie<6;ie++){j=Te[ie].mipmaps;for(let Ee=0;Ee<j.length;Ee++){let we=j[Ee];x.format!==zn?Ze!==null?rt?F&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ee,0,0,we.width,we.height,Ze,we.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ee,ht,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):rt?F&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ee,0,0,we.width,we.height,Ze,Re,we.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ee,ht,we.width,we.height,0,Ze,Re,we.data)}}}else{if(j=x.mipmaps,rt&&St){j.length>0&&Me++;let ie=ae(Te[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Me,ht,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(le){rt?F&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Te[ie].width,Te[ie].height,Ze,Re,Te[ie].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,ht,Te[ie].width,Te[ie].height,0,Ze,Re,Te[ie].data);for(let Ee=0;Ee<j.length;Ee++){let tt=j[Ee].image[ie].image;rt?F&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ee+1,0,0,tt.width,tt.height,Ze,Re,tt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ee+1,ht,tt.width,tt.height,0,Ze,Re,tt.data)}}else{rt?F&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Ze,Re,Te[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,ht,Ze,Re,Te[ie]);for(let Ee=0;Ee<j.length;Ee++){let we=j[Ee];rt?F&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ee+1,0,0,Ze,Re,we.image[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ee+1,ht,Ze,Re,we.image[ie])}}}m(x)&&d(i.TEXTURE_CUBE_MAP),q.__version=re.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function pe(T,x,k,Z,re,q){let Fe=s.convert(k.format,k.colorSpace),ye=s.convert(k.type),Ve=C(k.internalFormat,Fe,ye,k.colorSpace),qe=n.get(x),le=n.get(k);if(le.__renderTarget=x,!qe.__hasExternalTextures){let Te=Math.max(1,x.width>>q),Xe=Math.max(1,x.height>>q);re===i.TEXTURE_3D||re===i.TEXTURE_2D_ARRAY?t.texImage3D(re,q,Ve,Te,Xe,x.depth,0,Fe,ye,null):t.texImage2D(re,q,Ve,Te,Xe,0,Fe,ye,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),ue(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,re,le.__webglTexture,0,oe(x)):(re===i.TEXTURE_2D||re>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,re,le.__webglTexture,q),t.bindFramebuffer(i.FRAMEBUFFER,null)}function de(T,x,k){if(i.bindRenderbuffer(i.RENDERBUFFER,T),x.depthBuffer){let Z=x.depthTexture,re=Z&&Z.isDepthTexture?Z.type:null,q=b(x.stencilBuffer,re),Fe=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ye=oe(x);ue(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ye,q,x.width,x.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,ye,q,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,q,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Fe,i.RENDERBUFFER,T)}else{let Z=x.textures;for(let re=0;re<Z.length;re++){let q=Z[re],Fe=s.convert(q.format,q.colorSpace),ye=s.convert(q.type),Ve=C(q.internalFormat,Fe,ye,q.colorSpace),qe=oe(x);k&&ue(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,qe,Ve,x.width,x.height):ue(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,qe,Ve,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,Ve,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function De(T,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Z=n.get(x.depthTexture);Z.__renderTarget=x,(!Z.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),K(x.depthTexture,0);let re=Z.__webglTexture,q=oe(x);if(x.depthTexture.format===os)ue(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,re,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,re,0);else if(x.depthTexture.format===ys)ue(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,re,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function We(T){let x=n.get(T),k=T.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==T.depthTexture){let Z=T.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),Z){let re=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,Z.removeEventListener("dispose",re)};Z.addEventListener("dispose",re),x.__depthDisposeCallback=re}x.__boundDepthTexture=Z}if(T.depthTexture&&!x.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");let Z=T.texture.mipmaps;Z&&Z.length>0?De(x.__webglFramebuffer[0],T):De(x.__webglFramebuffer,T)}else if(k){x.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[Z]),x.__webglDepthbuffer[Z]===void 0)x.__webglDepthbuffer[Z]=i.createRenderbuffer(),de(x.__webglDepthbuffer[Z],T,!1);else{let re=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=x.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,q)}}else{let Z=T.texture.mipmaps;if(Z&&Z.length>0?t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),de(x.__webglDepthbuffer,T,!1);else{let re=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,q)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Le(T,x,k){let Z=n.get(T);x!==void 0&&pe(Z.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&We(T)}function Ye(T){let x=T.texture,k=n.get(T),Z=n.get(x);T.addEventListener("dispose",D);let re=T.textures,q=T.isWebGLCubeRenderTarget===!0,Fe=re.length>1;if(Fe||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=x.version,o.memory.textures++),q){k.__webglFramebuffer=[];for(let ye=0;ye<6;ye++)if(x.mipmaps&&x.mipmaps.length>0){k.__webglFramebuffer[ye]=[];for(let Ve=0;Ve<x.mipmaps.length;Ve++)k.__webglFramebuffer[ye][Ve]=i.createFramebuffer()}else k.__webglFramebuffer[ye]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){k.__webglFramebuffer=[];for(let ye=0;ye<x.mipmaps.length;ye++)k.__webglFramebuffer[ye]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(Fe)for(let ye=0,Ve=re.length;ye<Ve;ye++){let qe=n.get(re[ye]);qe.__webglTexture===void 0&&(qe.__webglTexture=i.createTexture(),o.memory.textures++)}if(T.samples>0&&ue(T)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ye=0;ye<re.length;ye++){let Ve=re[ye];k.__webglColorRenderbuffer[ye]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[ye]);let qe=s.convert(Ve.format,Ve.colorSpace),le=s.convert(Ve.type),Te=C(Ve.internalFormat,qe,le,Ve.colorSpace,T.isXRRenderTarget===!0),Xe=oe(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Xe,Te,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,k.__webglColorRenderbuffer[ye])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),de(k.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(q){t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),Oe(i.TEXTURE_CUBE_MAP,x);for(let ye=0;ye<6;ye++)if(x.mipmaps&&x.mipmaps.length>0)for(let Ve=0;Ve<x.mipmaps.length;Ve++)pe(k.__webglFramebuffer[ye][Ve],T,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ve);else pe(k.__webglFramebuffer[ye],T,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0);m(x)&&d(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Fe){for(let ye=0,Ve=re.length;ye<Ve;ye++){let qe=re[ye],le=n.get(qe);t.bindTexture(i.TEXTURE_2D,le.__webglTexture),Oe(i.TEXTURE_2D,qe),pe(k.__webglFramebuffer,T,qe,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,0),m(qe)&&d(i.TEXTURE_2D)}t.unbindTexture()}else{let ye=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ye=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ye,Z.__webglTexture),Oe(ye,x),x.mipmaps&&x.mipmaps.length>0)for(let Ve=0;Ve<x.mipmaps.length;Ve++)pe(k.__webglFramebuffer[Ve],T,x,i.COLOR_ATTACHMENT0,ye,Ve);else pe(k.__webglFramebuffer,T,x,i.COLOR_ATTACHMENT0,ye,0);m(x)&&d(ye),t.unbindTexture()}T.depthBuffer&&We(T)}function Pe(T){let x=T.textures;for(let k=0,Z=x.length;k<Z;k++){let re=x[k];if(m(re)){let q=A(T),Fe=n.get(re).__webglTexture;t.bindTexture(q,Fe),d(q),t.unbindTexture()}}}let Ue=[],E=[];function me(T){if(T.samples>0){if(ue(T)===!1){let x=T.textures,k=T.width,Z=T.height,re=i.COLOR_BUFFER_BIT,q=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Fe=n.get(T),ye=x.length>1;if(ye)for(let qe=0;qe<x.length;qe++)t.bindFramebuffer(i.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+qe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+qe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer);let Ve=T.texture.mipmaps;Ve&&Ve.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer);for(let qe=0;qe<x.length;qe++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(re|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(re|=i.STENCIL_BUFFER_BIT)),ye){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Fe.__webglColorRenderbuffer[qe]);let le=n.get(x[qe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,le,0)}i.blitFramebuffer(0,0,k,Z,0,0,k,Z,re,i.NEAREST),l===!0&&(Ue.length=0,E.length=0,Ue.push(i.COLOR_ATTACHMENT0+qe),T.depthBuffer&&T.resolveDepthBuffer===!1&&(Ue.push(q),E.push(q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,E)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ue))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ye)for(let qe=0;qe<x.length;qe++){t.bindFramebuffer(i.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+qe,i.RENDERBUFFER,Fe.__webglColorRenderbuffer[qe]);let le=n.get(x[qe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+qe,i.TEXTURE_2D,le,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){let x=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function oe(T){return Math.min(r.maxSamples,T.samples)}function ue(T){let x=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function ne(T){let x=o.render.frame;h.get(T)!==x&&(h.set(T,x),T.update())}function Ne(T,x){let k=T.colorSpace,Z=T.format,re=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||k!==Mr&&k!==Pi&&(ft.getTransfer(k)===xt?(Z!==zn||re!==jn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),x}function ae(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=V,this.setTexture2D=K,this.setTexture2DArray=J,this.setTexture3D=ee,this.setTextureCube=X,this.rebindTextures=Le,this.setupRenderTarget=Ye,this.updateRenderTargetMipmap=Pe,this.updateMultisampleRenderTarget=me,this.setupDepthRenderbuffer=We,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=ue}function xy(i,e){function t(n,r=Pi){let s,o=ft.getTransfer(r);if(n===jn)return i.UNSIGNED_BYTE;if(n===Il)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Pl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===wh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Sh)return i.BYTE;if(n===Mh)return i.SHORT;if(n===_s)return i.UNSIGNED_SHORT;if(n===Rl)return i.INT;if(n===lr)return i.UNSIGNED_INT;if(n===ui)return i.FLOAT;if(n===xs)return i.HALF_FLOAT;if(n===Eh)return i.ALPHA;if(n===Th)return i.RGB;if(n===zn)return i.RGBA;if(n===os)return i.DEPTH_COMPONENT;if(n===ys)return i.DEPTH_STENCIL;if(n===Ch)return i.RED;if(n===Dl)return i.RED_INTEGER;if(n===Ah)return i.RG;if(n===Ll)return i.RG_INTEGER;if(n===Fl)return i.RGBA_INTEGER;if(n===bo||n===So||n===Mo||n===wo)if(o===xt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===bo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===So)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Mo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===wo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===bo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===So)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Mo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===wo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ul||n===Nl||n===Ol||n===Bl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Ul)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Nl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ol)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Bl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===kl||n===zl||n===Vl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===kl||n===zl)return o===xt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Vl)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Hl||n===Gl||n===Wl||n===Xl||n===ql||n===Yl||n===$l||n===jl||n===Zl||n===Jl||n===Kl||n===Ql||n===ec||n===tc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Hl)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Gl)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Wl)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Xl)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ql)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Yl)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===$l)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===jl)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Zl)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Jl)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Kl)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ql)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ec)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===tc)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Eo||n===nc||n===ic)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Eo)return o===xt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===nc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ic)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Rh||n===rc||n===sc||n===oc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Eo)return s.COMPRESSED_RED_RGTC1_EXT;if(n===rc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===sc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===oc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===vs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var vy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,yy=`
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

}`,Zh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let r=new cr,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new An({vertexShader:vy,fragmentShader:yy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Et(new Er(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Jh=class extends wi{constructor(e,t){super();let n=this,r=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,p=null,g=null,v=new Zh,m=t.getContextAttributes(),d=null,A=null,C=[],b=[],L=new _e,P=null,D=new Gt;D.viewport=new Pt;let N=new Gt;N.viewport=new Pt;let M=[D,N],_=new gl,I=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let se=C[Y];return se===void 0&&(se=new us,C[Y]=se),se.getTargetRaySpace()},this.getControllerGrip=function(Y){let se=C[Y];return se===void 0&&(se=new us,C[Y]=se),se.getGripSpace()},this.getHand=function(Y){let se=C[Y];return se===void 0&&(se=new us,C[Y]=se),se.getHandSpace()};function H(Y){let se=b.indexOf(Y.inputSource);if(se===-1)return;let pe=C[se];pe!==void 0&&(pe.update(Y.inputSource,Y.frame,c||o),pe.dispatchEvent({type:Y.type,data:Y.inputSource}))}function Q(){r.removeEventListener("select",H),r.removeEventListener("selectstart",H),r.removeEventListener("selectend",H),r.removeEventListener("squeeze",H),r.removeEventListener("squeezestart",H),r.removeEventListener("squeezeend",H),r.removeEventListener("end",Q),r.removeEventListener("inputsourceschange",K);for(let Y=0;Y<C.length;Y++){let se=b[Y];se!==null&&(b[Y]=null,C[Y].disconnect(se))}I=null,V=null,v.reset(),e.setRenderTarget(d),p=null,f=null,u=null,r=null,A=null,$e.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=function(Y){return nt(this,null,function*(){if(r=Y,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",H),r.addEventListener("selectstart",H),r.addEventListener("selectend",H),r.addEventListener("squeeze",H),r.addEventListener("squeezestart",H),r.addEventListener("squeezeend",H),r.addEventListener("end",Q),r.addEventListener("inputsourceschange",K),m.xrCompatible!==!0&&(yield t.makeXRCompatible()),P=e.getPixelRatio(),e.getSize(L),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let pe=null,de=null,De=null;m.depth&&(De=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=m.stencil?ys:os,de=m.stencil?vs:lr);let We={colorFormat:t.RGBA8,depthFormat:De,scaleFactor:s};u=new XRWebGLBinding(r,t),f=u.createProjectionLayer(We),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),A=new li(f.textureWidth,f.textureHeight,{format:zn,type:jn,depthTexture:new eo(f.textureWidth,f.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let pe={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,pe),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),A=new li(p.framebufferWidth,p.framebufferHeight,{format:zn,type:jn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=yield r.requestReferenceSpace(a),$e.setContext(r),$e.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}})},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function K(Y){for(let se=0;se<Y.removed.length;se++){let pe=Y.removed[se],de=b.indexOf(pe);de>=0&&(b[de]=null,C[de].disconnect(pe))}for(let se=0;se<Y.added.length;se++){let pe=Y.added[se],de=b.indexOf(pe);if(de===-1){for(let We=0;We<C.length;We++)if(We>=b.length){b.push(pe),de=We;break}else if(b[We]===null){b[We]=pe,de=We;break}if(de===-1)break}let De=C[de];De&&De.connect(pe)}}let J=new z,ee=new z;function X(Y,se,pe){J.setFromMatrixPosition(se.matrixWorld),ee.setFromMatrixPosition(pe.matrixWorld);let de=J.distanceTo(ee),De=se.projectionMatrix.elements,We=pe.projectionMatrix.elements,Le=De[14]/(De[10]-1),Ye=De[14]/(De[10]+1),Pe=(De[9]+1)/De[5],Ue=(De[9]-1)/De[5],E=(De[8]-1)/De[0],me=(We[8]+1)/We[0],oe=Le*E,ue=Le*me,ne=de/(-E+me),Ne=ne*-E;if(se.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Ne),Y.translateZ(ne),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),De[10]===-1)Y.projectionMatrix.copy(se.projectionMatrix),Y.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{let ae=Le+ne,T=Ye+ne,x=oe-Ne,k=ue+(de-Ne),Z=Pe*Ye/T*ae,re=Ue*Ye/T*ae;Y.projectionMatrix.makePerspective(x,k,Z,re,ae,T),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function ge(Y,se){se===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(se.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let se=Y.near,pe=Y.far;v.texture!==null&&(v.depthNear>0&&(se=v.depthNear),v.depthFar>0&&(pe=v.depthFar)),_.near=N.near=D.near=se,_.far=N.far=D.far=pe,(I!==_.near||V!==_.far)&&(r.updateRenderState({depthNear:_.near,depthFar:_.far}),I=_.near,V=_.far),D.layers.mask=Y.layers.mask|2,N.layers.mask=Y.layers.mask|4,_.layers.mask=D.layers.mask|N.layers.mask;let de=Y.parent,De=_.cameras;ge(_,de);for(let We=0;We<De.length;We++)ge(De[We],de);De.length===2?X(_,D,N):_.projectionMatrix.copy(D.projectionMatrix),ve(Y,_,de)};function ve(Y,se,pe){pe===null?Y.matrix.copy(se.matrixWorld):(Y.matrix.copy(pe.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(se.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(se.projectionMatrix),Y.projectionMatrixInverse.copy(se.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=qs*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(Y){l=Y,f!==null&&(f.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(_)};let be=null;function Oe(Y,se){if(h=se.getViewerPose(c||o),g=se,h!==null){let pe=h.views;p!==null&&(e.setRenderTargetFramebuffer(A,p.framebuffer),e.setRenderTarget(A));let de=!1;pe.length!==_.cameras.length&&(_.cameras.length=0,de=!0);for(let Le=0;Le<pe.length;Le++){let Ye=pe[Le],Pe=null;if(p!==null)Pe=p.getViewport(Ye);else{let E=u.getViewSubImage(f,Ye);Pe=E.viewport,Le===0&&(e.setRenderTargetTextures(A,E.colorTexture,E.depthStencilTexture),e.setRenderTarget(A))}let Ue=M[Le];Ue===void 0&&(Ue=new Gt,Ue.layers.enable(Le),Ue.viewport=new Pt,M[Le]=Ue),Ue.matrix.fromArray(Ye.transform.matrix),Ue.matrix.decompose(Ue.position,Ue.quaternion,Ue.scale),Ue.projectionMatrix.fromArray(Ye.projectionMatrix),Ue.projectionMatrixInverse.copy(Ue.projectionMatrix).invert(),Ue.viewport.set(Pe.x,Pe.y,Pe.width,Pe.height),Le===0&&(_.matrix.copy(Ue.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),de===!0&&_.cameras.push(Ue)}let De=r.enabledFeatures;if(De&&De.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&u){let Le=u.getDepthInformation(pe[0]);Le&&Le.isValid&&Le.texture&&v.init(e,Le,r.renderState)}}for(let pe=0;pe<C.length;pe++){let de=b[pe],De=C[pe];de!==null&&De!==void 0&&De.update(de,se,c||o)}be&&be(Y,se),se.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:se}),g=null}let $e=new Of;$e.setAnimationLoop(Oe),this.setAnimationLoop=function(Y){be=Y},this.dispose=function(){}}},Pr=new Ti,by=new Ct;function Sy(i,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Lh(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,A,C,b){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),u(m,d)):d.isMeshPhongMaterial?(s(m,d),h(m,d)):d.isMeshStandardMaterial?(s(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,b)):d.isMeshMatcapMaterial?(s(m,d),g(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),v(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,A,C):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Yt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Yt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let A=e.get(d),C=A.envMap,b=A.envMapRotation;C&&(m.envMap.value=C,Pr.copy(b),Pr.x*=-1,Pr.y*=-1,Pr.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Pr.y*=-1,Pr.z*=-1),m.envMapRotation.value.setFromMatrix4(by.makeRotationFromEuler(Pr)),m.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,A,C){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*A,m.scale.value=C*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,A){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Yt&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function v(m,d){let A=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function My(i,e,t,n){let r={},s={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,C){let b=C.program;n.uniformBlockBinding(A,b)}function c(A,C){let b=r[A.id];b===void 0&&(g(A),b=h(A),r[A.id]=b,A.addEventListener("dispose",m));let L=C.program;n.updateUBOMapping(A,L);let P=e.render.frame;s[A.id]!==P&&(f(A),s[A.id]=P)}function h(A){let C=u();A.__bindingPointIndex=C;let b=i.createBuffer(),L=A.__size,P=A.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,L,P),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,C,b),b}function u(){for(let A=0;A<a;A++)if(o.indexOf(A)===-1)return o.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(A){let C=r[A.id],b=A.uniforms,L=A.__cache;i.bindBuffer(i.UNIFORM_BUFFER,C);for(let P=0,D=b.length;P<D;P++){let N=Array.isArray(b[P])?b[P]:[b[P]];for(let M=0,_=N.length;M<_;M++){let I=N[M];if(p(I,P,M,L)===!0){let V=I.__offset,H=Array.isArray(I.value)?I.value:[I.value],Q=0;for(let K=0;K<H.length;K++){let J=H[K],ee=v(J);typeof J=="number"||typeof J=="boolean"?(I.__data[0]=J,i.bufferSubData(i.UNIFORM_BUFFER,V+Q,I.__data)):J.isMatrix3?(I.__data[0]=J.elements[0],I.__data[1]=J.elements[1],I.__data[2]=J.elements[2],I.__data[3]=0,I.__data[4]=J.elements[3],I.__data[5]=J.elements[4],I.__data[6]=J.elements[5],I.__data[7]=0,I.__data[8]=J.elements[6],I.__data[9]=J.elements[7],I.__data[10]=J.elements[8],I.__data[11]=0):(J.toArray(I.__data,Q),Q+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,V,I.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(A,C,b,L){let P=A.value,D=C+"_"+b;if(L[D]===void 0)return typeof P=="number"||typeof P=="boolean"?L[D]=P:L[D]=P.clone(),!0;{let N=L[D];if(typeof P=="number"||typeof P=="boolean"){if(N!==P)return L[D]=P,!0}else if(N.equals(P)===!1)return N.copy(P),!0}return!1}function g(A){let C=A.uniforms,b=0,L=16;for(let D=0,N=C.length;D<N;D++){let M=Array.isArray(C[D])?C[D]:[C[D]];for(let _=0,I=M.length;_<I;_++){let V=M[_],H=Array.isArray(V.value)?V.value:[V.value];for(let Q=0,K=H.length;Q<K;Q++){let J=H[Q],ee=v(J),X=b%L,ge=X%ee.boundary,ve=X+ge;b+=ge,ve!==0&&L-ve<ee.storage&&(b+=L-ve),V.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=b,b+=ee.storage}}}let P=b%L;return P>0&&(b+=L-P),A.__size=b,A.__cache={},this}function v(A){let C={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(C.boundary=4,C.storage=4):A.isVector2?(C.boundary=8,C.storage=8):A.isVector3||A.isColor?(C.boundary=16,C.storage=12):A.isVector4?(C.boundary=16,C.storage=16):A.isMatrix3?(C.boundary=48,C.storage=48):A.isMatrix4?(C.boundary=64,C.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),C}function m(A){let C=A.target;C.removeEventListener("dispose",m);let b=o.indexOf(C.__bindingPointIndex);o.splice(b,1),i.deleteBuffer(r[C.id]),delete r[C.id],delete s[C.id]}function d(){for(let A in r)i.deleteBuffer(r[A]);o=[],r={},s={}}return{bind:l,update:c,dispose:d}}var Fr=class{constructor(e={}){let{canvas:t=rf(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let g=new Uint32Array(4),v=new Int32Array(4),m=null,d=null,A=[],C=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ii,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let b=this,L=!1;this._outputColorSpace=Tn;let P=0,D=0,N=null,M=-1,_=null,I=new Pt,V=new Pt,H=null,Q=new Qe(0),K=0,J=t.width,ee=t.height,X=1,ge=null,ve=null,be=new Pt(0,0,J,ee),Oe=new Pt(0,0,J,ee),$e=!1,Y=new ds,se=!1,pe=!1,de=new Ct,De=new Ct,We=new z,Le=new Pt,Ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Pe=!1;function Ue(){return N===null?X:1}let E=n;function me(S,O){return t.getContext(S,O)}try{let S={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${_l}`),t.addEventListener("webglcontextlost",ie,!1),t.addEventListener("webglcontextrestored",Ee,!1),t.addEventListener("webglcontextcreationerror",we,!1),E===null){let O="webgl2";if(E=me(O,S),E===null)throw me(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let oe,ue,ne,Ne,ae,T,x,k,Z,re,q,Fe,ye,Ve,qe,le,Te,Xe,Ze,Re,ht,rt,St,F;function Me(){oe=new Vx(E),oe.init(),rt=new xy(E,oe),ue=new Fx(E,oe,e,rt),ne=new gy(E,oe),ue.reverseDepthBuffer&&f&&ne.buffers.depth.setReversed(!0),Ne=new Wx(E),ae=new iy,T=new _y(E,oe,ne,ae,ue,rt,Ne),x=new Nx(b),k=new zx(b),Z=new Zg(E),St=new Dx(E,Z),re=new Hx(E,Z,Ne,St),q=new qx(E,re,Z,Ne),Ze=new Xx(E,ue,T),le=new Ux(ae),Fe=new ny(b,x,k,oe,ue,St,le),ye=new Sy(b,ae),Ve=new sy,qe=new uy(oe),Xe=new Px(b,x,k,ne,q,p,l),Te=new py(b,q,ue),F=new My(E,Ne,ue,ne),Re=new Lx(E,oe,Ne),ht=new Gx(E,oe,Ne),Ne.programs=Fe.programs,b.capabilities=ue,b.extensions=oe,b.properties=ae,b.renderLists=Ve,b.shadowMap=Te,b.state=ne,b.info=Ne}Me();let j=new Jh(b,E);this.xr=j,this.getContext=function(){return E},this.getContextAttributes=function(){return E.getContextAttributes()},this.forceContextLoss=function(){let S=oe.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=oe.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(S){S!==void 0&&(X=S,this.setSize(J,ee,!1))},this.getSize=function(S){return S.set(J,ee)},this.setSize=function(S,O,G=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=S,ee=O,t.width=Math.floor(S*X),t.height=Math.floor(O*X),G===!0&&(t.style.width=S+"px",t.style.height=O+"px"),this.setViewport(0,0,S,O)},this.getDrawingBufferSize=function(S){return S.set(J*X,ee*X).floor()},this.setDrawingBufferSize=function(S,O,G){J=S,ee=O,X=G,t.width=Math.floor(S*G),t.height=Math.floor(O*G),this.setViewport(0,0,S,O)},this.getCurrentViewport=function(S){return S.copy(I)},this.getViewport=function(S){return S.copy(be)},this.setViewport=function(S,O,G,W){S.isVector4?be.set(S.x,S.y,S.z,S.w):be.set(S,O,G,W),ne.viewport(I.copy(be).multiplyScalar(X).round())},this.getScissor=function(S){return S.copy(Oe)},this.setScissor=function(S,O,G,W){S.isVector4?Oe.set(S.x,S.y,S.z,S.w):Oe.set(S,O,G,W),ne.scissor(V.copy(Oe).multiplyScalar(X).round())},this.getScissorTest=function(){return $e},this.setScissorTest=function(S){ne.setScissorTest($e=S)},this.setOpaqueSort=function(S){ge=S},this.setTransparentSort=function(S){ve=S},this.getClearColor=function(S){return S.copy(Xe.getClearColor())},this.setClearColor=function(){Xe.setClearColor(...arguments)},this.getClearAlpha=function(){return Xe.getClearAlpha()},this.setClearAlpha=function(){Xe.setClearAlpha(...arguments)},this.clear=function(S=!0,O=!0,G=!0){let W=0;if(S){let B=!1;if(N!==null){let he=N.texture.format;B=he===Fl||he===Ll||he===Dl}if(B){let he=N.texture.type,Se=he===jn||he===lr||he===_s||he===vs||he===Il||he===Pl,Ce=Xe.getClearColor(),Ie=Xe.getClearAlpha(),Je=Ce.r,je=Ce.g,He=Ce.b;Se?(g[0]=Je,g[1]=je,g[2]=He,g[3]=Ie,E.clearBufferuiv(E.COLOR,0,g)):(v[0]=Je,v[1]=je,v[2]=He,v[3]=Ie,E.clearBufferiv(E.COLOR,0,v))}else W|=E.COLOR_BUFFER_BIT}O&&(W|=E.DEPTH_BUFFER_BIT),G&&(W|=E.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),E.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ie,!1),t.removeEventListener("webglcontextrestored",Ee,!1),t.removeEventListener("webglcontextcreationerror",we,!1),Xe.dispose(),Ve.dispose(),qe.dispose(),ae.dispose(),x.dispose(),k.dispose(),q.dispose(),St.dispose(),F.dispose(),Fe.dispose(),j.dispose(),j.removeEventListener("sessionstart",Qh),j.removeEventListener("sessionend",eu),hr.stop()};function ie(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function Ee(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;let S=Ne.autoReset,O=Te.enabled,G=Te.autoUpdate,W=Te.needsUpdate,B=Te.type;Me(),Ne.autoReset=S,Te.enabled=O,Te.autoUpdate=G,Te.needsUpdate=W,Te.type=B}function we(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function tt(S){let O=S.target;O.removeEventListener("dispose",tt),Dt(O)}function Dt(S){nn(S),ae.remove(S)}function nn(S){let O=ae.get(S).programs;O!==void 0&&(O.forEach(function(G){Fe.releaseProgram(G)}),S.isShaderMaterial&&Fe.releaseShaderCache(S))}this.renderBufferDirect=function(S,O,G,W,B,he){O===null&&(O=Ye);let Se=B.isMesh&&B.matrixWorld.determinant()<0,Ce=Xf(S,O,G,W,B);ne.setMaterial(W,Se);let Ie=G.index,Je=1;if(W.wireframe===!0){if(Ie=re.getWireframeAttribute(G),Ie===void 0)return;Je=2}let je=G.drawRange,He=G.attributes.position,ut=je.start*Je,mt=(je.start+je.count)*Je;he!==null&&(ut=Math.max(ut,he.start*Je),mt=Math.min(mt,(he.start+he.count)*Je)),Ie!==null?(ut=Math.max(ut,0),mt=Math.min(mt,Ie.count)):He!=null&&(ut=Math.max(ut,0),mt=Math.min(mt,He.count));let Ot=mt-ut;if(Ot<0||Ot===1/0)return;St.setup(B,W,Ce,G,Ie);let Lt,pt=Re;if(Ie!==null&&(Lt=Z.get(Ie),pt=ht,pt.setIndex(Lt)),B.isMesh)W.wireframe===!0?(ne.setLineWidth(W.wireframeLinewidth*Ue()),pt.setMode(E.LINES)):pt.setMode(E.TRIANGLES);else if(B.isLine){let Ge=W.linewidth;Ge===void 0&&(Ge=1),ne.setLineWidth(Ge*Ue()),B.isLineSegments?pt.setMode(E.LINES):B.isLineLoop?pt.setMode(E.LINE_LOOP):pt.setMode(E.LINE_STRIP)}else B.isPoints?pt.setMode(E.POINTS):B.isSprite&&pt.setMode(E.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)To("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),pt.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(oe.get("WEBGL_multi_draw"))pt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{let Ge=B._multiDrawStarts,Kt=B._multiDrawCounts,gt=B._multiDrawCount,Hn=Ie?Z.get(Ie).bytesPerElement:1,Ur=ae.get(W).currentProgram.getUniforms();for(let yn=0;yn<gt;yn++)Ur.setValue(E,"_gl_DrawID",yn),pt.render(Ge[yn]/Hn,Kt[yn])}else if(B.isInstancedMesh)pt.renderInstances(ut,Ot,B.count);else if(G.isInstancedBufferGeometry){let Ge=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Kt=Math.min(G.instanceCount,Ge);pt.renderInstances(ut,Ot,Kt)}else pt.render(ut,Ot)};function _t(S,O,G){S.transparent===!0&&S.side===tn&&S.forceSinglePass===!1?(S.side=Yt,S.needsUpdate=!0,Ro(S,O,G),S.side=Mi,S.needsUpdate=!0,Ro(S,O,G),S.side=tn):Ro(S,O,G)}this.compile=function(S,O,G=null){G===null&&(G=S),d=qe.get(G),d.init(O),C.push(d),G.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(d.pushLight(B),B.castShadow&&d.pushShadow(B))}),S!==G&&S.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(d.pushLight(B),B.castShadow&&d.pushShadow(B))}),d.setupLights();let W=new Set;return S.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;let he=B.material;if(he)if(Array.isArray(he))for(let Se=0;Se<he.length;Se++){let Ce=he[Se];_t(Ce,G,B),W.add(Ce)}else _t(he,G,B),W.add(he)}),d=C.pop(),W},this.compileAsync=function(S,O,G=null){let W=this.compile(S,O,G);return new Promise(B=>{function he(){if(W.forEach(function(Se){ae.get(Se).currentProgram.isReady()&&W.delete(Se)}),W.size===0){B(S);return}setTimeout(he,10)}oe.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let Vn=null;function fi(S){Vn&&Vn(S)}function Qh(){hr.stop()}function eu(){hr.start()}let hr=new Of;hr.setAnimationLoop(fi),typeof self<"u"&&hr.setContext(self),this.setAnimationLoop=function(S){Vn=S,j.setAnimationLoop(S),S===null?hr.stop():hr.start()},j.addEventListener("sessionstart",Qh),j.addEventListener("sessionend",eu),this.render=function(S,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(O),O=j.getCamera()),S.isScene===!0&&S.onBeforeRender(b,S,O,N),d=qe.get(S,C.length),d.init(O),C.push(d),De.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Y.setFromProjectionMatrix(De),pe=this.localClippingEnabled,se=le.init(this.clippingPlanes,pe),m=Ve.get(S,A.length),m.init(),A.push(m),j.enabled===!0&&j.isPresenting===!0){let he=b.xr.getDepthSensingMesh();he!==null&&_c(he,O,-1/0,b.sortObjects)}_c(S,O,0,b.sortObjects),m.finish(),b.sortObjects===!0&&m.sort(ge,ve),Pe=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,Pe&&Xe.addToRenderList(m,S),this.info.render.frame++,se===!0&&le.beginShadows();let G=d.state.shadowsArray;Te.render(G,S,O),se===!0&&le.endShadows(),this.info.autoReset===!0&&this.info.reset();let W=m.opaque,B=m.transmissive;if(d.setupLights(),O.isArrayCamera){let he=O.cameras;if(B.length>0)for(let Se=0,Ce=he.length;Se<Ce;Se++){let Ie=he[Se];nu(W,B,S,Ie)}Pe&&Xe.render(S);for(let Se=0,Ce=he.length;Se<Ce;Se++){let Ie=he[Se];tu(m,S,Ie,Ie.viewport)}}else B.length>0&&nu(W,B,S,O),Pe&&Xe.render(S),tu(m,S,O);N!==null&&D===0&&(T.updateMultisampleRenderTarget(N),T.updateRenderTargetMipmap(N)),S.isScene===!0&&S.onAfterRender(b,S,O),St.resetDefaultState(),M=-1,_=null,C.pop(),C.length>0?(d=C[C.length-1],se===!0&&le.setGlobalState(b.clippingPlanes,d.state.camera)):d=null,A.pop(),A.length>0?m=A[A.length-1]:m=null};function _c(S,O,G,W){if(S.visible===!1)return;if(S.layers.test(O.layers)){if(S.isGroup)G=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(O);else if(S.isLight)d.pushLight(S),S.castShadow&&d.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Y.intersectsSprite(S)){W&&Le.setFromMatrixPosition(S.matrixWorld).applyMatrix4(De);let Se=q.update(S),Ce=S.material;Ce.visible&&m.push(S,Se,Ce,G,Le.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||Y.intersectsObject(S))){let Se=q.update(S),Ce=S.material;if(W&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Le.copy(S.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),Le.copy(Se.boundingSphere.center)),Le.applyMatrix4(S.matrixWorld).applyMatrix4(De)),Array.isArray(Ce)){let Ie=Se.groups;for(let Je=0,je=Ie.length;Je<je;Je++){let He=Ie[Je],ut=Ce[He.materialIndex];ut&&ut.visible&&m.push(S,Se,ut,G,Le.z,He)}}else Ce.visible&&m.push(S,Se,Ce,G,Le.z,null)}}let he=S.children;for(let Se=0,Ce=he.length;Se<Ce;Se++)_c(he[Se],O,G,W)}function tu(S,O,G,W){let B=S.opaque,he=S.transmissive,Se=S.transparent;d.setupLightsView(G),se===!0&&le.setGlobalState(b.clippingPlanes,G),W&&ne.viewport(I.copy(W)),B.length>0&&Ao(B,O,G),he.length>0&&Ao(he,O,G),Se.length>0&&Ao(Se,O,G),ne.buffers.depth.setTest(!0),ne.buffers.depth.setMask(!0),ne.buffers.color.setMask(!0),ne.setPolygonOffset(!1)}function nu(S,O,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[W.id]===void 0&&(d.state.transmissionRenderTarget[W.id]=new li(1,1,{generateMipmaps:!0,type:oe.has("EXT_color_buffer_half_float")||oe.has("EXT_color_buffer_float")?xs:jn,minFilter:ar,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ft.workingColorSpace}));let he=d.state.transmissionRenderTarget[W.id],Se=W.viewport||I;he.setSize(Se.z*b.transmissionResolutionScale,Se.w*b.transmissionResolutionScale);let Ce=b.getRenderTarget();b.setRenderTarget(he),b.getClearColor(Q),K=b.getClearAlpha(),K<1&&b.setClearColor(16777215,.5),b.clear(),Pe&&Xe.render(G);let Ie=b.toneMapping;b.toneMapping=Ii;let Je=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),d.setupLightsView(W),se===!0&&le.setGlobalState(b.clippingPlanes,W),Ao(S,G,W),T.updateMultisampleRenderTarget(he),T.updateRenderTargetMipmap(he),oe.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let He=0,ut=O.length;He<ut;He++){let mt=O[He],Ot=mt.object,Lt=mt.geometry,pt=mt.material,Ge=mt.group;if(pt.side===tn&&Ot.layers.test(W.layers)){let Kt=pt.side;pt.side=Yt,pt.needsUpdate=!0,iu(Ot,G,W,Lt,pt,Ge),pt.side=Kt,pt.needsUpdate=!0,je=!0}}je===!0&&(T.updateMultisampleRenderTarget(he),T.updateRenderTargetMipmap(he))}b.setRenderTarget(Ce),b.setClearColor(Q,K),Je!==void 0&&(W.viewport=Je),b.toneMapping=Ie}function Ao(S,O,G){let W=O.isScene===!0?O.overrideMaterial:null;for(let B=0,he=S.length;B<he;B++){let Se=S[B],Ce=Se.object,Ie=Se.geometry,Je=Se.group,je=Se.material;je.allowOverride===!0&&W!==null&&(je=W),Ce.layers.test(G.layers)&&iu(Ce,O,G,Ie,je,Je)}}function iu(S,O,G,W,B,he){S.onBeforeRender(b,O,G,W,B,he),S.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),B.onBeforeRender(b,O,G,W,S,he),B.transparent===!0&&B.side===tn&&B.forceSinglePass===!1?(B.side=Yt,B.needsUpdate=!0,b.renderBufferDirect(G,O,W,B,S,he),B.side=Mi,B.needsUpdate=!0,b.renderBufferDirect(G,O,W,B,S,he),B.side=tn):b.renderBufferDirect(G,O,W,B,S,he),S.onAfterRender(b,O,G,W,B,he)}function Ro(S,O,G){O.isScene!==!0&&(O=Ye);let W=ae.get(S),B=d.state.lights,he=d.state.shadowsArray,Se=B.state.version,Ce=Fe.getParameters(S,B.state,he,O,G),Ie=Fe.getProgramCacheKey(Ce),Je=W.programs;W.environment=S.isMeshStandardMaterial?O.environment:null,W.fog=O.fog,W.envMap=(S.isMeshStandardMaterial?k:x).get(S.envMap||W.environment),W.envMapRotation=W.environment!==null&&S.envMap===null?O.environmentRotation:S.envMapRotation,Je===void 0&&(S.addEventListener("dispose",tt),Je=new Map,W.programs=Je);let je=Je.get(Ie);if(je!==void 0){if(W.currentProgram===je&&W.lightsStateVersion===Se)return su(S,Ce),je}else Ce.uniforms=Fe.getUniforms(S),S.onBeforeCompile(Ce,b),je=Fe.acquireProgram(Ce,Ie),Je.set(Ie,je),W.uniforms=Ce.uniforms;let He=W.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(He.clippingPlanes=le.uniform),su(S,Ce),W.needsLights=Yf(S),W.lightsStateVersion=Se,W.needsLights&&(He.ambientLightColor.value=B.state.ambient,He.lightProbe.value=B.state.probe,He.directionalLights.value=B.state.directional,He.directionalLightShadows.value=B.state.directionalShadow,He.spotLights.value=B.state.spot,He.spotLightShadows.value=B.state.spotShadow,He.rectAreaLights.value=B.state.rectArea,He.ltc_1.value=B.state.rectAreaLTC1,He.ltc_2.value=B.state.rectAreaLTC2,He.pointLights.value=B.state.point,He.pointLightShadows.value=B.state.pointShadow,He.hemisphereLights.value=B.state.hemi,He.directionalShadowMap.value=B.state.directionalShadowMap,He.directionalShadowMatrix.value=B.state.directionalShadowMatrix,He.spotShadowMap.value=B.state.spotShadowMap,He.spotLightMatrix.value=B.state.spotLightMatrix,He.spotLightMap.value=B.state.spotLightMap,He.pointShadowMap.value=B.state.pointShadowMap,He.pointShadowMatrix.value=B.state.pointShadowMatrix),W.currentProgram=je,W.uniformsList=null,je}function ru(S){if(S.uniformsList===null){let O=S.currentProgram.getUniforms();S.uniformsList=ws.seqWithValue(O.seq,S.uniforms)}return S.uniformsList}function su(S,O){let G=ae.get(S);G.outputColorSpace=O.outputColorSpace,G.batching=O.batching,G.batchingColor=O.batchingColor,G.instancing=O.instancing,G.instancingColor=O.instancingColor,G.instancingMorph=O.instancingMorph,G.skinning=O.skinning,G.morphTargets=O.morphTargets,G.morphNormals=O.morphNormals,G.morphColors=O.morphColors,G.morphTargetsCount=O.morphTargetsCount,G.numClippingPlanes=O.numClippingPlanes,G.numIntersection=O.numClipIntersection,G.vertexAlphas=O.vertexAlphas,G.vertexTangents=O.vertexTangents,G.toneMapping=O.toneMapping}function Xf(S,O,G,W,B){O.isScene!==!0&&(O=Ye),T.resetTextureUnits();let he=O.fog,Se=W.isMeshStandardMaterial?O.environment:null,Ce=N===null?b.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Mr,Ie=(W.isMeshStandardMaterial?k:x).get(W.envMap||Se),Je=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,je=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),He=!!G.morphAttributes.position,ut=!!G.morphAttributes.normal,mt=!!G.morphAttributes.color,Ot=Ii;W.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Ot=b.toneMapping);let Lt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,pt=Lt!==void 0?Lt.length:0,Ge=ae.get(W),Kt=d.state.lights;if(se===!0&&(pe===!0||S!==_)){let pn=S===_&&W.id===M;le.setState(W,S,pn)}let gt=!1;W.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==Kt.state.version||Ge.outputColorSpace!==Ce||B.isBatchedMesh&&Ge.batching===!1||!B.isBatchedMesh&&Ge.batching===!0||B.isBatchedMesh&&Ge.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Ge.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Ge.instancing===!1||!B.isInstancedMesh&&Ge.instancing===!0||B.isSkinnedMesh&&Ge.skinning===!1||!B.isSkinnedMesh&&Ge.skinning===!0||B.isInstancedMesh&&Ge.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Ge.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Ge.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Ge.instancingMorph===!1&&B.morphTexture!==null||Ge.envMap!==Ie||W.fog===!0&&Ge.fog!==he||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==le.numPlanes||Ge.numIntersection!==le.numIntersection)||Ge.vertexAlphas!==Je||Ge.vertexTangents!==je||Ge.morphTargets!==He||Ge.morphNormals!==ut||Ge.morphColors!==mt||Ge.toneMapping!==Ot||Ge.morphTargetsCount!==pt)&&(gt=!0):(gt=!0,Ge.__version=W.version);let Hn=Ge.currentProgram;gt===!0&&(Hn=Ro(W,O,B));let Ur=!1,yn=!1,Ts=!1,Tt=Hn.getUniforms(),Pn=Ge.uniforms;if(ne.useProgram(Hn.program)&&(Ur=!0,yn=!0,Ts=!0),W.id!==M&&(M=W.id,yn=!0),Ur||_!==S){ne.buffers.depth.getReversed()?(de.copy(S.projectionMatrix),of(de),af(de),Tt.setValue(E,"projectionMatrix",de)):Tt.setValue(E,"projectionMatrix",S.projectionMatrix),Tt.setValue(E,"viewMatrix",S.matrixWorldInverse);let mn=Tt.map.cameraPosition;mn!==void 0&&mn.setValue(E,We.setFromMatrixPosition(S.matrixWorld)),ue.logarithmicDepthBuffer&&Tt.setValue(E,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Tt.setValue(E,"isOrthographic",S.isOrthographicCamera===!0),_!==S&&(_=S,yn=!0,Ts=!0)}if(B.isSkinnedMesh){Tt.setOptional(E,B,"bindMatrix"),Tt.setOptional(E,B,"bindMatrixInverse");let pn=B.skeleton;pn&&(pn.boneTexture===null&&pn.computeBoneTexture(),Tt.setValue(E,"boneTexture",pn.boneTexture,T))}B.isBatchedMesh&&(Tt.setOptional(E,B,"batchingTexture"),Tt.setValue(E,"batchingTexture",B._matricesTexture,T),Tt.setOptional(E,B,"batchingIdTexture"),Tt.setValue(E,"batchingIdTexture",B._indirectTexture,T),Tt.setOptional(E,B,"batchingColorTexture"),B._colorsTexture!==null&&Tt.setValue(E,"batchingColorTexture",B._colorsTexture,T));let Dn=G.morphAttributes;if((Dn.position!==void 0||Dn.normal!==void 0||Dn.color!==void 0)&&Ze.update(B,G,Hn),(yn||Ge.receiveShadow!==B.receiveShadow)&&(Ge.receiveShadow=B.receiveShadow,Tt.setValue(E,"receiveShadow",B.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Pn.envMap.value=Ie,Pn.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&O.environment!==null&&(Pn.envMapIntensity.value=O.environmentIntensity),yn&&(Tt.setValue(E,"toneMappingExposure",b.toneMappingExposure),Ge.needsLights&&qf(Pn,Ts),he&&W.fog===!0&&ye.refreshFogUniforms(Pn,he),ye.refreshMaterialUniforms(Pn,W,X,ee,d.state.transmissionRenderTarget[S.id]),ws.upload(E,ru(Ge),Pn,T)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(ws.upload(E,ru(Ge),Pn,T),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Tt.setValue(E,"center",B.center),Tt.setValue(E,"modelViewMatrix",B.modelViewMatrix),Tt.setValue(E,"normalMatrix",B.normalMatrix),Tt.setValue(E,"modelMatrix",B.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){let pn=W.uniformsGroups;for(let mn=0,xc=pn.length;mn<xc;mn++){let ur=pn[mn];F.update(ur,Hn),F.bind(ur,Hn)}}return Hn}function qf(S,O){S.ambientLightColor.needsUpdate=O,S.lightProbe.needsUpdate=O,S.directionalLights.needsUpdate=O,S.directionalLightShadows.needsUpdate=O,S.pointLights.needsUpdate=O,S.pointLightShadows.needsUpdate=O,S.spotLights.needsUpdate=O,S.spotLightShadows.needsUpdate=O,S.rectAreaLights.needsUpdate=O,S.hemisphereLights.needsUpdate=O}function Yf(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(S,O,G){let W=ae.get(S);W.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),ae.get(S.texture).__webglTexture=O,ae.get(S.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:G,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,O){let G=ae.get(S);G.__webglFramebuffer=O,G.__useDefaultFramebuffer=O===void 0};let $f=E.createFramebuffer();this.setRenderTarget=function(S,O=0,G=0){N=S,P=O,D=G;let W=!0,B=null,he=!1,Se=!1;if(S){let Ie=ae.get(S);if(Ie.__useDefaultFramebuffer!==void 0)ne.bindFramebuffer(E.FRAMEBUFFER,null),W=!1;else if(Ie.__webglFramebuffer===void 0)T.setupRenderTarget(S);else if(Ie.__hasExternalTextures)T.rebindTextures(S,ae.get(S.texture).__webglTexture,ae.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let He=S.depthTexture;if(Ie.__boundDepthTexture!==He){if(He!==null&&ae.has(He)&&(S.width!==He.image.width||S.height!==He.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(S)}}let Je=S.texture;(Je.isData3DTexture||Je.isDataArrayTexture||Je.isCompressedArrayTexture)&&(Se=!0);let je=ae.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(je[O])?B=je[O][G]:B=je[O],he=!0):S.samples>0&&T.useMultisampledRTT(S)===!1?B=ae.get(S).__webglMultisampledFramebuffer:Array.isArray(je)?B=je[G]:B=je,I.copy(S.viewport),V.copy(S.scissor),H=S.scissorTest}else I.copy(be).multiplyScalar(X).floor(),V.copy(Oe).multiplyScalar(X).floor(),H=$e;if(G!==0&&(B=$f),ne.bindFramebuffer(E.FRAMEBUFFER,B)&&W&&ne.drawBuffers(S,B),ne.viewport(I),ne.scissor(V),ne.setScissorTest(H),he){let Ie=ae.get(S.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_CUBE_MAP_POSITIVE_X+O,Ie.__webglTexture,G)}else if(Se){let Ie=ae.get(S.texture),Je=O;E.framebufferTextureLayer(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,Ie.__webglTexture,G,Je)}else if(S!==null&&G!==0){let Ie=ae.get(S.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,Ie.__webglTexture,G)}M=-1},this.readRenderTargetPixels=function(S,O,G,W,B,he,Se){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=ae.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Se!==void 0&&(Ce=Ce[Se]),Ce){ne.bindFramebuffer(E.FRAMEBUFFER,Ce);try{let Ie=S.texture,Je=Ie.format,je=Ie.type;if(!ue.textureFormatReadable(Je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ue.textureTypeReadable(je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=S.width-W&&G>=0&&G<=S.height-B&&E.readPixels(O,G,W,B,rt.convert(Je),rt.convert(je),he)}finally{let Ie=N!==null?ae.get(N).__webglFramebuffer:null;ne.bindFramebuffer(E.FRAMEBUFFER,Ie)}}},this.readRenderTargetPixelsAsync=function(S,O,G,W,B,he,Se){return nt(this,null,function*(){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=ae.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Se!==void 0&&(Ce=Ce[Se]),Ce)if(O>=0&&O<=S.width-W&&G>=0&&G<=S.height-B){ne.bindFramebuffer(E.FRAMEBUFFER,Ce);let Ie=S.texture,Je=Ie.format,je=Ie.type;if(!ue.textureFormatReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ue.textureTypeReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let He=E.createBuffer();E.bindBuffer(E.PIXEL_PACK_BUFFER,He),E.bufferData(E.PIXEL_PACK_BUFFER,he.byteLength,E.STREAM_READ),E.readPixels(O,G,W,B,rt.convert(Je),rt.convert(je),0);let ut=N!==null?ae.get(N).__webglFramebuffer:null;ne.bindFramebuffer(E.FRAMEBUFFER,ut);let mt=E.fenceSync(E.SYNC_GPU_COMMANDS_COMPLETE,0);return E.flush(),yield sf(E,mt,4),E.bindBuffer(E.PIXEL_PACK_BUFFER,He),E.getBufferSubData(E.PIXEL_PACK_BUFFER,0,he),E.deleteBuffer(He),E.deleteSync(mt),he}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")})},this.copyFramebufferToTexture=function(S,O=null,G=0){let W=Math.pow(2,-G),B=Math.floor(S.image.width*W),he=Math.floor(S.image.height*W),Se=O!==null?O.x:0,Ce=O!==null?O.y:0;T.setTexture2D(S,0),E.copyTexSubImage2D(E.TEXTURE_2D,G,0,0,Se,Ce,B,he),ne.unbindTexture()};let jf=E.createFramebuffer(),Zf=E.createFramebuffer();this.copyTextureToTexture=function(S,O,G=null,W=null,B=0,he=null){he===null&&(B!==0?(To("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),he=B,B=0):he=0);let Se,Ce,Ie,Je,je,He,ut,mt,Ot,Lt=S.isCompressedTexture?S.mipmaps[he]:S.image;if(G!==null)Se=G.max.x-G.min.x,Ce=G.max.y-G.min.y,Ie=G.isBox3?G.max.z-G.min.z:1,Je=G.min.x,je=G.min.y,He=G.isBox3?G.min.z:0;else{let Dn=Math.pow(2,-B);Se=Math.floor(Lt.width*Dn),Ce=Math.floor(Lt.height*Dn),S.isDataArrayTexture?Ie=Lt.depth:S.isData3DTexture?Ie=Math.floor(Lt.depth*Dn):Ie=1,Je=0,je=0,He=0}W!==null?(ut=W.x,mt=W.y,Ot=W.z):(ut=0,mt=0,Ot=0);let pt=rt.convert(O.format),Ge=rt.convert(O.type),Kt;O.isData3DTexture?(T.setTexture3D(O,0),Kt=E.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(T.setTexture2DArray(O,0),Kt=E.TEXTURE_2D_ARRAY):(T.setTexture2D(O,0),Kt=E.TEXTURE_2D),E.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,O.flipY),E.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),E.pixelStorei(E.UNPACK_ALIGNMENT,O.unpackAlignment);let gt=E.getParameter(E.UNPACK_ROW_LENGTH),Hn=E.getParameter(E.UNPACK_IMAGE_HEIGHT),Ur=E.getParameter(E.UNPACK_SKIP_PIXELS),yn=E.getParameter(E.UNPACK_SKIP_ROWS),Ts=E.getParameter(E.UNPACK_SKIP_IMAGES);E.pixelStorei(E.UNPACK_ROW_LENGTH,Lt.width),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,Lt.height),E.pixelStorei(E.UNPACK_SKIP_PIXELS,Je),E.pixelStorei(E.UNPACK_SKIP_ROWS,je),E.pixelStorei(E.UNPACK_SKIP_IMAGES,He);let Tt=S.isDataArrayTexture||S.isData3DTexture,Pn=O.isDataArrayTexture||O.isData3DTexture;if(S.isDepthTexture){let Dn=ae.get(S),pn=ae.get(O),mn=ae.get(Dn.__renderTarget),xc=ae.get(pn.__renderTarget);ne.bindFramebuffer(E.READ_FRAMEBUFFER,mn.__webglFramebuffer),ne.bindFramebuffer(E.DRAW_FRAMEBUFFER,xc.__webglFramebuffer);for(let ur=0;ur<Ie;ur++)Tt&&(E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,ae.get(S).__webglTexture,B,He+ur),E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,ae.get(O).__webglTexture,he,Ot+ur)),E.blitFramebuffer(Je,je,Se,Ce,ut,mt,Se,Ce,E.DEPTH_BUFFER_BIT,E.NEAREST);ne.bindFramebuffer(E.READ_FRAMEBUFFER,null),ne.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else if(B!==0||S.isRenderTargetTexture||ae.has(S)){let Dn=ae.get(S),pn=ae.get(O);ne.bindFramebuffer(E.READ_FRAMEBUFFER,jf),ne.bindFramebuffer(E.DRAW_FRAMEBUFFER,Zf);for(let mn=0;mn<Ie;mn++)Tt?E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,Dn.__webglTexture,B,He+mn):E.framebufferTexture2D(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,Dn.__webglTexture,B),Pn?E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,pn.__webglTexture,he,Ot+mn):E.framebufferTexture2D(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,pn.__webglTexture,he),B!==0?E.blitFramebuffer(Je,je,Se,Ce,ut,mt,Se,Ce,E.COLOR_BUFFER_BIT,E.NEAREST):Pn?E.copyTexSubImage3D(Kt,he,ut,mt,Ot+mn,Je,je,Se,Ce):E.copyTexSubImage2D(Kt,he,ut,mt,Je,je,Se,Ce);ne.bindFramebuffer(E.READ_FRAMEBUFFER,null),ne.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else Pn?S.isDataTexture||S.isData3DTexture?E.texSubImage3D(Kt,he,ut,mt,Ot,Se,Ce,Ie,pt,Ge,Lt.data):O.isCompressedArrayTexture?E.compressedTexSubImage3D(Kt,he,ut,mt,Ot,Se,Ce,Ie,pt,Lt.data):E.texSubImage3D(Kt,he,ut,mt,Ot,Se,Ce,Ie,pt,Ge,Lt):S.isDataTexture?E.texSubImage2D(E.TEXTURE_2D,he,ut,mt,Se,Ce,pt,Ge,Lt.data):S.isCompressedTexture?E.compressedTexSubImage2D(E.TEXTURE_2D,he,ut,mt,Lt.width,Lt.height,pt,Lt.data):E.texSubImage2D(E.TEXTURE_2D,he,ut,mt,Se,Ce,pt,Ge,Lt);E.pixelStorei(E.UNPACK_ROW_LENGTH,gt),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,Hn),E.pixelStorei(E.UNPACK_SKIP_PIXELS,Ur),E.pixelStorei(E.UNPACK_SKIP_ROWS,yn),E.pixelStorei(E.UNPACK_SKIP_IMAGES,Ts),he===0&&O.generateMipmaps&&E.generateMipmap(Kt),ne.unbindTexture()},this.copyTextureToTexture3D=function(S,O,G=null,W=null,B=0){return To('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,O,G,W,B)},this.initRenderTarget=function(S){ae.get(S).__webglFramebuffer===void 0&&T.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?T.setTextureCube(S,0):S.isData3DTexture?T.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?T.setTexture2DArray(S,0):T.setTexture2D(S,0),ne.unbindTexture()},this.resetState=function(){P=0,D=0,N=null,ne.reset(),St.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ft._getDrawingBufferColorSpace(e),t.unpackColorSpace=ft._getUnpackColorSpace()}};var fc=class i{constructor(e,t){this.platformId=e;this.colorService=t}scene;camera;renderer;sun;clouds=[];animationId;angle=0;selectedColor="";ngOnInit(){Bt(this.platformId)&&this.colorService.selectedColor$.subscribe(e=>{if(this.selectedColor=e,this.renderer){this.renderer.dispose();let t=document.querySelector("#background-wrapper canvas");t&&t.remove(),cancelAnimationFrame(this.animationId)}this.initThreeJS(this.selectedColor),this.animate()})}ngAfterViewInit(){Bt(this.platformId)&&this.animate()}ngOnDestroy(){Bt(this.platformId)&&(this.renderer.dispose(),cancelAnimationFrame(this.animationId))}onWindowResize(){this.camera&&this.renderer&&(this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight))}initThreeJS(e){let t;e.startsWith("#")?t=new Qe(e):t=new Qe(2664261),this.scene=new tr,this.camera=new Gt(60,window.innerWidth/window.innerHeight,.1,2e3),this.camera.position.set(0,50,500),this.renderer=new Fr({antialias:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setClearColor(8900331),document.getElementById("background-wrapper")?.appendChild(this.renderer.domElement);let n=new or(16777215,.6),r=new Ai(16777215,.6);r.position.set(100,200,100),this.scene.add(n,r);let s=new ir(25,64,64),o=new ci({color:16768307,emissive:16755200,emissiveIntensity:1.5,metalness:.1,roughness:.4});this.sun=new Et(s,o),this.sun.position.set(200,150,-300),this.scene.add(this.sun);let a=new $n({color:16777164,transparent:!0,opacity:.25,depthWrite:!1}),l=new Et(new ir(50,32,32),a);l.position.copy(this.sun.position),this.scene.add(l);let c=new Ai(16774064,1.2);c.position.copy(this.sun.position),this.scene.add(c);let h=new ir(1e3,64,64),u=new An({side:Yt,vertexShader:`
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
  `,uniforms:{}}),f=new Et(h,u);this.scene.add(f);let p=1200,g=600,v=100,m=50,d=new Er(p,g,v,m);d.rotateX(-Math.PI/2);let A=d.attributes.position;for(let L=0;L<A.count;L++){let P=A.getX(L),D=A.getZ(L),N=Math.sin(P/80)*10+Math.cos(D/60)*8+Math.sin((P+D)/100)*5+(Math.random()-.5)*2;A.setY(L,N)}A.needsUpdate=!0,d.computeVertexNormals();let C=new ci({color:this.selectedColor,roughness:.9,metalness:.1,side:tn}),b=new Et(d,C);b.position.y=-180,this.scene.add(b),this.createClouds()}createClouds(){let e=new uo({color:16777215,transparent:!0,opacity:.85,depthWrite:!1});for(let t=0;t<7;t++){let n=new bi,r=[18,14,12,10,8],s=[[0,0,0],[-20,5,0],[20,5,0],[-10,10,5],[10,10,-5]];r.forEach((a,l)=>{let c=.9+Math.random()*.1,h=e.clone();h.color=new Qe(c,c,c);let u=new Et(new ir(a,32,32),h);u.position.set(...s[l]),n.add(u)}),n.position.set(Math.random()*1200-600,Math.random()*150+150,Math.random()*-200-250);let o=.8+Math.random()*.6;n.scale.set(o,o,o),this.clouds.push(n),this.scene.add(n)}}clock=new go;animate=()=>{this.animationId=requestAnimationFrame(this.animate);let e=this.clock.getDelta(),t=this.clock.getElapsedTime(),n=500;this.camera.position.x=n*Math.sin(t*.1),this.camera.position.z=n*Math.cos(t*.1),this.camera.lookAt(0,0,0);let r=20;this.clouds.forEach(s=>{s.position.x+=r*e,s.position.x>600&&(s.position.x=-600)}),this.renderer.render(this.scene,this.camera)};static \u0275fac=function(t){return new(t||i)(Ae(sn),Ae(cn))};static \u0275cmp=Mt({type:i,selectors:[["app-design"]],hostBindings:function(t,n){t&1&&it("resize",function(){return n.onWindowResize()},!1,fu)},decls:1,vars:0,consts:[["id","background-wrapper"]],template:function(t,n){t&1&&ce(0,"div",0)},styles:["#background-wrapper[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%;overflow:hidden;z-index:0}"]})};var wy=["rendererContainer"],Ey=["miniWheelContainer"],Ty=["colorPicker"];function Cy(i,e){i&1&&(y(0,"div",5),ce(1,"div",6,1)(3,"input",7,2),w())}var pc=class i{constructor(e,t){this.platformId=e;this.colorService=t;this.platformBrowser=Bt(this.platformId),this.colorPicker=null}onEscape(e){this.showBigWheel=!1}rendererContainer;miniWheelContainer;colorPickerRef;colorSelected=new du;showBigWheel=!1;colorPicker;platformBrowser;outsideClickListener;renderer=null;scene=null;camera=null;meshes=[];raycaster=null;mouse=new _e;defaultColor="#28a745";ngAfterViewInit(){this.platformBrowser&&(this.colorSelected.emit(this.defaultColor),this.colorService.setColor(this.defaultColor),this.colorPicker=this.colorPickerRef?.nativeElement,this.initMiniWheel())}ngOnDestroy(){this.disposeThreeResources(),this.outsideClickListener&&document.removeEventListener("click",this.outsideClickListener)}openColorWheel(){this.showBigWheel=!0,setTimeout(()=>{this.colorPicker=this.colorPickerRef?.nativeElement,this.colorPicker&&!this.colorPicker.hasAttribute("data-listener-added")&&(this.colorPicker.addEventListener("input",e=>{let t=e.target.value;this.colorSelected.emit(t),this.colorService.setColor(t),this.showBigWheel=!1}),this.colorPicker.setAttribute("data-listener-added","true")),this.initBigWheel(),this.addOutsideClickListener()},0)}addOutsideClickListener(){this.outsideClickListener=e=>{let t=this.rendererContainer?.nativeElement,n=this.colorPickerRef?.nativeElement;t&&n&&!t.contains(e.target)&&!n.contains(e.target)&&(n.style.visibility="hidden")},document.addEventListener("click",this.outsideClickListener)}initMiniWheel(){let e=this.miniWheelContainer.nativeElement,t=new tr,n=new Gt(50,1,.1,1e3);n.position.z=6;let r=new Fr({alpha:!0,antialias:!0});r.setSize(100,100),r.setPixelRatio(window.devicePixelRatio),e.appendChild(r.domElement);let s=new or(16777215,.8),o=new Ai(16777215,1);o.position.set(0,0,10),t.add(s,o);let a=2,l=8,c=["#4CAF50","#8BC34A","#CDDC39","#FFEB3B","#FF9800","#A1887F","#795548","#3E2723"];for(let g=0;g<l;g++){let v=g/l*Math.PI*2,m=(g+1)/l*Math.PI*2,d=new nr;d.moveTo(0,0),d.absarc(0,0,a,v,m,!1),d.lineTo(0,0);let A=new ho(d);A.computeVertexNormals();let C=new ci({color:c[g],metalness:.5,roughness:.3,emissive:new Qe(c[g]),emissiveIntensity:.2,side:tn}),b=new Et(A,C);t.add(b)}let h=new ms(a*.95,a,64),u=new $n({color:16777215,transparent:!0,opacity:.05,side:tn}),f=new Et(h,u);t.add(f);function p(){requestAnimationFrame(p),t.rotation.z+=.05,r.render(t,n)}p()}initBigWheel(){let e=this.rendererContainer.nativeElement,t=e.clientWidth,n=e.clientHeight;this.disposeThreeResources(),this.scene=new tr,this.camera=new Gt(75,t/n,.1,1e3),this.camera.position.z=6,this.renderer=new Fr({alpha:!0,antialias:!0}),this.renderer.setSize(t,n),this.renderer.setPixelRatio(window.devicePixelRatio),e.appendChild(this.renderer.domElement);let r=new or(16777215,.6),s=new Ai(16777215,1.5);s.position.set(3,3,5),s.castShadow=!0,this.scene.add(r,s);let o=new po(16777215,1,10,Math.PI/4,.5,2);o.position.set(0,0,5),o.castShadow=!0,this.scene.add(o);let a=2.5,l=8,c=["#4CAF50","#8BC34A","#CDDC39","#FFEB3B","#FF9800","#A1887F","#795548","#3E2723"];this.meshes=[],this.raycaster=new _o;for(let g=0;g<l;g++){let v=g/l*Math.PI*2,m=(g+1)/l*Math.PI*2,d=new nr;d.moveTo(0,0),d.absarc(0,0,a,v,m,!1),d.lineTo(0,0);let A={depth:.3,bevelEnabled:!0,bevelSize:.1,bevelSegments:2},C=new co(d,A),b=new ci({color:c[g],metalness:.6,roughness:.3,emissive:new Qe(c[g]),emissiveIntensity:.3,side:tn}),L=new Et(C,b);L.userData={colorIndex:g},this.meshes.push(L),this.scene.add(L);let P=new $n({color:c[g],opacity:.2,transparent:!0,side:Yt,blending:xo}),D=new Et(C.clone(),P);D.scale.multiplyScalar(1.1),this.scene.add(D)}let h=new ms(a*.9,a,64),u=new $n({color:16777215,opacity:.07,transparent:!0,side:tn}),f=new Et(h,u);this.scene.add(f),this.renderer.domElement.addEventListener("click",g=>{let v=this.renderer.domElement.getBoundingClientRect();this.mouse.x=(g.clientX-v.left)/v.width*2-1,this.mouse.y=-((g.clientY-v.top)/v.height)*2+1,this.raycaster.setFromCamera(this.mouse,this.camera);let m=this.raycaster.intersectObjects(this.meshes);if(m.length>0){let d=m[0].object;if(d.material instanceof ci){let A=`#${d.material.color.getHexString()}`;console.log("Selected color:",A),this.colorSelected.emit(A),this.colorService.setColor(A),this.showBigWheel=!1,this.playClickSound(),this.addGlowEffect(d)}}});let p=()=>{requestAnimationFrame(p),this.scene.rotation.z+=0,this.renderer.render(this.scene,this.camera)};p()}playClickSound(){new Audio("path_to_sound_effect.mp3").play()}addGlowEffect(e){let t=e.material;t.emissiveIntensity=1.5,setTimeout(()=>{t.emissiveIntensity=.3},500)}disposeThreeResources(){this.scene&&(this.scene.traverse(e=>{e instanceof Et&&(e.geometry.dispose(),e.material.dispose())}),this.scene=null),this.renderer&&(this.renderer.dispose(),this.renderer=null),this.raycaster&&(this.raycaster=null)}static \u0275fac=function(t){return new(t||i)(Ae(sn),Ae(cn))};static \u0275cmp=Mt({type:i,selectors:[["app-wheel"]],viewQuery:function(t,n){if(t&1&&(Fo(wy,5),Fo(Ey,5),Fo(Ty,5)),t&2){let r;Uo(r=No())&&(n.rendererContainer=r.first),Uo(r=No())&&(n.miniWheelContainer=r.first),Uo(r=No())&&(n.colorPickerRef=r.first)}},hostBindings:function(t,n){t&1&&it("keydown.escape",function(s){return n.onEscape(s)},!1,Br)},outputs:{colorSelected:"colorSelected"},decls:4,vars:1,consts:[["miniWheelContainer",""],["rendererContainer",""],["colorPicker",""],[1,"wheel-wrapper","three-wheel",3,"click"],["class","overlay",4,"ngIf"],[1,"overlay"],["id","rendererContainer",1,"big-wheel-container"],["id","colorPicker","type","color",1,"color-picker"]],template:function(t,n){if(t&1){let r=vt();y(0,"div",3),it("click",function(){return Be(r),ke(n.openColorWheel())}),ce(1,"div",null,0),w(),ze(3,Cy,5,0,"div",4)}t&2&&(U(3),te("ngIf",n.showBigWheel))},dependencies:[Ft,an],styles:[".wheel-wrapper.three-wheel[_ngcontent-%COMP%]{position:fixed;bottom:20px;right:20px;width:90px;height:90px;z-index:9999;cursor:pointer;border-radius:50%;box-shadow:0 0 12px #0fc,0 0 24px #0fc;transition:transform .3s ease;overflow:hidden;background-color:#ffffff1a;display:flex;align-items:center;justify-content:center}.wheel-wrapper.three-wheel[_ngcontent-%COMP%]:hover{transform:scale(1.05)}.wheel-wrapper[_ngcontent-%COMP%]   canvas[_ngcontent-%COMP%]{width:100%;height:100%;display:block;border-radius:50%;object-fit:cover;pointer-events:none}.overlay[_ngcontent-%COMP%]{position:fixed;top:0;left:0;z-index:1000;width:100vw;height:100vh;background:#0009;display:flex;justify-content:center;align-items:center;backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);animation:_ngcontent-%COMP%_fadeIn .3s ease-in-out}#rendererContainer[_ngcontent-%COMP%]{width:60vw;height:60vw;max-width:500px;max-height:500px;min-width:250px;min-height:250px;border-radius:50%;overflow:hidden;position:relative;z-index:1001;background:radial-gradient(circle at center,#00ffcc26,#0006);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);box-shadow:0 0 25px #00ffcc80,0 0 45px #00ffcc4d,inset 0 0 15px #0fc3;transition:all .4s ease}#rendererContainer[_ngcontent-%COMP%]:hover{box-shadow:0 0 30px #0fc9,0 0 60px #0fc6,inset 0 0 20px #00ffcc4d;transform:scale(1.02)}.big-wheel-container[_ngcontent-%COMP%]{width:100%;height:100%;position:relative}.big-wheel-container[_ngcontent-%COMP%]   canvas[_ngcontent-%COMP%]{width:100%!important;height:100%!important;display:block;pointer-events:auto}#colorPicker[_ngcontent-%COMP%]{position:absolute;visibility:hidden;z-index:2000}@keyframes _ngcontent-%COMP%_fadeIn{0%{opacity:0;transform:scale(.95)}to{opacity:1;transform:scale(1)}}@media (max-width: 600px){#rendererContainer[_ngcontent-%COMP%]{width:60vw;height:60vw;border-radius:50%}}.wheel-wrapper.three-wheel[_ngcontent-%COMP%]{width:70px;height:70px;bottom:15px;right:15px}"]})};var Ay=i=>({backgroundColor:i}),Gf=i=>({borderColor:i}),Ry=()=>({backgroundColor:null,color:"white"}),Iy=i=>({backgroundColor:i,color:"white"});function Py(i,e){if(i&1&&(Qt(0),y(1,"a",10),ce(2,"i"),R(3),w(),en()),i&2){let t=e.$implicit;U(),te("routerLink",t.path)("ngStyle",bn(5,Ry)),U(),Cs(t.icon+" text-xl"),U(),At(" ",t.label," ")}}function Dy(i,e){if(i&1&&(Qt(0),y(1,"a",11),ce(2,"i"),R(3),y(4,"span",12),R(5),w()(),en()),i&2){let t=e.$implicit,n=fe();U(),te("ngStyle",Wt(6,Iy,n.selectedColor||"#ffffff0d")),U(),Cs(t.icon+" text-xl"),U(),At(" ",t.label," "),U(),te("ngClass",t.badgeClass),U(),At(" ",t.badge," ")}}var mc=class i{constructor(e,t,n,r,s){this.router=e;this.platformId=t;this.colorService=n;this.layoutService=r;this.userInfo=s}isLoggedIn=!1;sidebarVisible=!0;selectedColor="";toggleHandler;coreLinks=[{label:"Home",path:"/",icon:"bi bi-house-door-fill"},{label:"Mandi Rates",path:"/mandi-rates",icon:"bi bi-graph-up"},{label:"Products",path:"/products",icon:"bi bi-box-seam"},{label:"Chat with Farmer/Buyer",path:"/messages",icon:"bi bi-chat-dots-fill"},{label:"Buyers",path:"/buyer",icon:"bi bi-person-badge-fill"},{label:"Settings",path:"/settings",icon:"bi bi-gear-fill"},{label:"Orders",path:"/orders",icon:"bi bi-bag-check-fill"},{label:"Payments",path:"/payments",icon:"bi bi-cash-stack"},{label:"Reports",path:"/reports",icon:"bi bi-clipboard-data-fill"},{label:"Help Center",path:"/help-center",icon:"bi bi-info-circle-fill"}];futureLinks=[{label:"Leaf Disease Detection",icon:"bi bi-eye-fill",badge:"Beta Soon",badgeClass:"bg-gray-500 text-white"},{label:"Logistics Tracking",icon:"bi bi-truck-front-fill",badge:"Planned",badgeClass:"bg-yellow-500 text-black"},{label:"AI Crop Recommendation",icon:"bi bi-cpu-fill",badge:"In Design",badgeClass:"bg-gray-500 text-white"},{label:"User Audit Logs",icon:"bi bi-clock-history",badge:"Admin",badgeClass:"bg-pink-500 text-white"}];sidebarBackground="#14532d";ngOnInit(){this.layoutService.sidebarVisible$.subscribe(e=>{this.sidebarVisible=e,this.isopenandclose=e}),this.toggleHandler=()=>this.layoutService.toggleSidebar(),window.addEventListener("toggle-sidebar",this.toggleHandler),this.colorService.selectedColor$.subscribe(e=>{this.selectedColor=e,e==="#4CAF50"||e==="#8BC34A"?this.sidebarBackground="#1B5E20":this.sidebarBackground=e}),this.router.events.pipe(Di(e=>e instanceof Ni)).subscribe(()=>{Bt(this.platformId)&&(this.isLoggedIn=!!this.userInfo.getToken())})}isopenandclose=!1;toggleSidebar(){this.layoutService.toggleSidebar()}setSidebarState(e){this.isopenandclose=e,this.sidebarVisible=e,this.layoutService.toggleSidebar()}logout(){Bt(this.platformId)&&localStorage.clear(),this.isLoggedIn=!1,this.router.navigate(["/auth/login"])}ngOnDestroy(){window.removeEventListener("toggle-sidebar",this.toggleHandler)}static \u0275fac=function(t){return new(t||i)(Ae(ln),Ae(sn),Ae(cn),Ae(hn),Ae(kt))};static \u0275cmp=Mt({type:i,selectors:[["app-sidebar"]],decls:13,vars:15,consts:[[1,"fixed","top-0","left-0","h-full","w-64","backdrop-blur-md","backdrop-saturate-150","text-white","shadow-2xl","z-50","flex","flex-col",3,"ngStyle"],[1,"flex","items-center","justify-between","h-20","border-b","px-4",3,"ngStyle"],[1,"flex","items-center","gap-3"],["src","images/logo.jpg","alt","AgriMandi Logo",1,"h-12","w-12","rounded-full","shadow-lg","transition-transform","duration-300","hover:scale-110","hover:shadow-[0_0_15px_#00FF99]"],[1,"text-xl","font-extrabold","tracking-wider","text-white","animate-pulse","drop-shadow-[0_0_10px_#00FF99]"],["aria-label","Close Sidebar",1,"text-white","text-2xl","hover:opacity-80","transition",3,"click"],[1,"bi","bi-x-lg"],[1,"flex-1","overflow-y-auto","p-4","space-y-2","custom-scrollbar"],[4,"ngFor","ngForOf"],[1,"mt-6","pt-4","text-sm","text-white/80","uppercase","tracking-wider","border-t",3,"ngStyle"],["routerLinkActive","bg-white text-black border-l-4 border-yellow-300",1,"flex","items-center","gap-3","py-2","px-4","rounded-lg","hover:bg-white","hover:text-black","transition",3,"routerLink","ngStyle"],[1,"flex","items-center","gap-3","py-2","px-4","rounded-lg","transition","cursor-not-allowed","opacity-60",3,"ngStyle"],[1,"ml-auto","px-2","py-0.5","rounded-full","text-xs","shadow-md","animate-pulse",3,"ngClass"]],template:function(t,n){t&1&&(y(0,"div",0)(1,"div",1)(2,"div",2),ce(3,"img",3),y(4,"span",4),R(5," AgriMandi "),w()(),y(6,"button",5),it("click",function(){return n.toggleSidebar()}),ce(7,"i",6),w()(),y(8,"nav",7),ze(9,Py,4,6,"ng-container",8),y(10,"div",9),R(11," Coming Soon "),w(),ze(12,Dy,6,8,"ng-container",8),w()()),t&2&&(Li("translate-x-0",n.sidebarVisible)("-translate-x-full",!n.sidebarVisible),te("ngStyle",Wt(9,Ay,n.sidebarBackground)),U(),te("ngStyle",Wt(11,Gf,n.selectedColor||"#198754")),U(8),te("ngForOf",n.coreLinks),U(),te("ngStyle",Wt(13,Gf,n.selectedColor||"#ffffff40")),U(2),te("ngForOf",n.futureLinks))},dependencies:[Ft,gn,_n,Fi,Oi,Bo,Su],styles:[".custom-scrollbar[_ngcontent-%COMP%]::-webkit-scrollbar{width:6px}.custom-scrollbar[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:transparent}.custom-scrollbar[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:#fff3;border-radius:10px}"]})};var Ly=i=>({"background-color":i}),gc=class i{constructor(e,t,n){this.colorService=e;this.signalRService=t;this.layoutService=n}selectedColor="";sidebarVisible=!0;receivedMessage="";ngOnInit(){this.signalRService.startConnection(),typeof window<"u"&&Wf.init(),this.colorService.selectedColor$.subscribe(e=>{this.selectedColor=e}),this.layoutService.sidebarVisible$.subscribe(e=>{this.sidebarVisible=e}),this.signalRService.startConnection().subscribe(()=>{this.signalRService.receiveMessage().subscribe(e=>{this.receivedMessage=e})})}sendMessage(e){this.signalRService.sendMessage(e)}title="AgriMandi-Frontend";currentYear=new Date().getFullYear();showWheel=!1;openWheel(){this.showWheel=!0}onColorSelected(e){this.selectedColor=e,console.log("Color selected from wheel:",e),this.showWheel=!1}static \u0275fac=function(t){return new(t||i)(Ae(cn),Ae(qr),Ae(hn))};static \u0275cmp=Mt({type:i,selectors:[["app-root"]],decls:37,vars:8,consts:[[1,"content-overlay","transition-all","duration-300"],[1,"pt-24"],[1,"main-content"],[1,"text-white","py-8","text-center","md:text-left","mt-16",3,"ngStyle"],[1,"container","mx-auto","px-4","grid","grid-cols-1","md:grid-cols-3","gap-8","items-center"],[1,"text-2xl","font-bold","mb-2","tracking-wider"],[1,"text-sm","opacity-80"],[1,"flex","justify-center","space-x-6","text-lg","mt-4","md:mt-0"],["href","https://github.com/VIKASHNAGAR786","target","_blank",1,"hover:text-[#00ffee]","transition"],[1,"bi","bi-github"],["href","https://linkedin.com/in/vikashnagar786","target","_blank",1,"hover:text-[#00ffee]","transition"],[1,"bi","bi-linkedin"],["href","mailto:vikashnagar872@gmail.com",1,"hover:text-[#00ffee]","transition"],[1,"bi","bi-envelope-fill"],["href","#",1,"hover:text-[#00ffee]","transition"],[1,"bi","bi-twitter-x"],[1,"bi","bi-facebook"],[1,"text-sm","text-gray-100","mt-6","md:mt-0","text-center","md:text-right"],[1,"text-[#00ffee]"],[1,"text-gray-400","text-xs"]],template:function(t,n){t&1&&(ce(0,"app-design")(1,"app-sidebar"),y(2,"div",0)(3,"header"),ce(4,"app-navbar"),w(),y(5,"div",1)(6,"main",2),ce(7,"router-outlet"),w()(),ce(8,"app-wheel")(9,"app-alert"),y(10,"footer",3)(11,"div",4)(12,"div")(13,"h2",5),R(14,"\u{1F331} AgriMandi"),w(),y(15,"p",6),R(16,"Empowering Farmers with Technology for a Better Tomorrow"),w()(),y(17,"div",7)(18,"a",8),ce(19,"i",9),w(),y(20,"a",10),ce(21,"i",11),w(),y(22,"a",12),ce(23,"i",13),w(),y(24,"a",14),ce(25,"i",15),w(),y(26,"a",14),ce(27,"i",16),w()(),y(28,"div",17)(29,"p"),R(30),w(),y(31,"p"),R(32,"Developed with \u{1F49A} by "),y(33,"strong",18),R(34,"Vikash Nagar"),w()(),y(35,"p",19),R(36,"Version 1.0.0"),w()()()()()),t&2&&(U(2),Li("md:ml-64",n.sidebarVisible)("ml-0",!n.sidebarVisible),U(8),te("ngStyle",Wt(6,Ly,n.selectedColor||"#198754")),U(20),At("\xA9 ",n.currentYear," AgriMandi. All rights reserved."))},dependencies:[Ft,Fi,Oi,bu,ya,ba,fc,pc,mc],styles:["body[_ngcontent-%COMP%]{margin:0;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif;display:flex;flex-direction:column;min-height:100vh;background-color:#b9f6ca;color:#333;scroll-behavior:smooth;overflow-x:hidden}main[_ngcontent-%COMP%]{flex:1}footer[_ngcontent-%COMP%]{font-size:14px;color:#fff;text-align:center;padding:10px 0;box-shadow:0 -2px 5px #0003}.content-overlay[_ngcontent-%COMP%]{position:relative;z-index:1}.main-content[_ngcontent-%COMP%]{padding:1rem}app-design[_ngcontent-%COMP%]{z-index:0;position:absolute;top:0;left:0}"]})};vu(gc,Bu).catch(i=>console.error(i));
