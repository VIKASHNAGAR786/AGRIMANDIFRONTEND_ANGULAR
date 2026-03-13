import{a as Sc}from"./chunk-YHHRACUJ.js";import{a as Hr}from"./chunk-B5NFW3MS.js";import{a as Du,b as Qn,c as Dn,d as ei,e as ti,g as Ni,i as Ui,j as ni,k as zo,l as Lu,m as Fu,n as Vo,o as Ho,p as Go,q as Nu,r as Br,s as Uu,t as Ln,u as Wo}from"./chunk-Z7DTUX4I.js";import{a as Fn}from"./chunk-NB56DMUW.js";import{a as Ou,b as ku,c as Vr,d as Oi}from"./chunk-IKN254QO.js";import{a as Gr}from"./chunk-NRHV3U2D.js";import{a as zr}from"./chunk-NLJOITTN.js";import{a as Ot}from"./chunk-YBPMFFFJ.js";import{a as bc,d as Di,e as Eu,f as Cu,g as Tu,h as Au,i as Li,k as Ru,l as _n,m as kr,n as Iu,o as Pu,p as Fi}from"./chunk-DHGDOEYB.js";import{k as gn,l as rn,m as In,n as Mu,o as wu,p as Pn,t as Lt,v as qt}from"./chunk-6O2EGTZO.js";import{$a as ze,Ab as I,Ba as tn,Bb as ht,Cb as wt,Db as yu,E as Pi,Fb as st,Gb as ot,H as uu,Hb as at,Ia as xu,Ja as ar,Jb as Vn,K as du,Kb as Nt,La as Is,Lb as nn,Ma as L,Mb as bu,Nb as yc,Ob as mi,Pb as gi,Ra as De,Sb as lr,U as fu,Ub as Su,Wa as Ct,X as en,_ as pu,a as ft,aa as Kn,b as Jn,ba as Lo,c as Lr,da as mu,e as ip,f as lu,fb as Ur,g as cu,gb as Q,h as _c,hb as vu,i as nt,ia as Ae,ib as mn,j as Fr,ja as Re,jb as vc,ka as Fo,kb as v,l as xc,la as No,lb as w,mb as ce,nb as un,o as hu,oa as gu,ob as dn,p as Nr,pb as vt,sa as _u,sb as Qe,tb as _e,ub as Uo,wb as Oo,xb as ko,yb as Bo,zb as Or}from"./chunk-QSYLZYIW.js";var wc=ip((Ds,Mc)=>{"use strict";(function(i,e){typeof Ds=="object"&&typeof Mc=="object"?Mc.exports=e():typeof define=="function"&&define.amd?define([],e):typeof Ds=="object"?Ds.AOS=e():i.AOS=e()})(Ds,function(){return function(i){function e(n){if(t[n])return t[n].exports;var r=t[n]={exports:{},id:n,loaded:!1};return i[n].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var t={};return e.m=i,e.c=t,e.p="dist/",e(0)}([function(i,e,t){"use strict";function n(V){return V&&V.__esModule?V:{default:V}}var r=Object.assign||function(V){for(var H=1;H<arguments.length;H++){var ee=arguments[H];for(var K in ee)Object.prototype.hasOwnProperty.call(ee,K)&&(V[K]=ee[K])}return V},s=t(1),o=(n(s),t(6)),a=n(o),l=t(7),c=n(l),h=t(8),u=n(h),d=t(9),p=n(d),g=t(10),y=n(g),m=t(11),f=n(m),A=t(14),T=n(A),S=[],F=!1,D={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},P=function(){var V=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if(V&&(F=!0),F)return S=(0,f.default)(S,D),(0,y.default)(S,D.once),S},U=function(){S=(0,T.default)(),P()},M=function(){S.forEach(function(V,H){V.node.removeAttribute("data-aos"),V.node.removeAttribute("data-aos-easing"),V.node.removeAttribute("data-aos-duration"),V.node.removeAttribute("data-aos-delay")})},_=function(V){return V===!0||V==="mobile"&&p.default.mobile()||V==="phone"&&p.default.phone()||V==="tablet"&&p.default.tablet()||typeof V=="function"&&V()===!0},R=function(V){D=r(D,V),S=(0,T.default)();var H=document.all&&!window.atob;return _(D.disable)||H?M():(D.disableMutationObserver||u.default.isSupported()||(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),D.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",D.easing),document.querySelector("body").setAttribute("data-aos-duration",D.duration),document.querySelector("body").setAttribute("data-aos-delay",D.delay),D.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1?P(!0):D.startEvent==="load"?window.addEventListener(D.startEvent,function(){P(!0)}):document.addEventListener(D.startEvent,function(){P(!0)}),window.addEventListener("resize",(0,c.default)(P,D.debounceDelay,!0)),window.addEventListener("orientationchange",(0,c.default)(P,D.debounceDelay,!0)),window.addEventListener("scroll",(0,a.default)(function(){(0,y.default)(S,D.once)},D.throttleDelay)),D.disableMutationObserver||u.default.ready("[data-aos]",U),S)};i.exports={init:R,refresh:P,refreshHard:U}},function(i,e){},,,,,function(i,e){(function(t){"use strict";function n(_,R,V){function H(Le){var Oe=Be,E=$e;return Be=$e=void 0,Fe=Le,se=_.apply(E,Oe)}function ee(Le){return Fe=Le,fe=setTimeout(te,R),We?H(Le):se}function K(Le){var Oe=Le-de,E=Le-Fe,pe=R-Oe;return Ne?U(pe,Y-E):pe}function J(Le){var Oe=Le-de,E=Le-Fe;return de===void 0||Oe>=R||Oe<0||Ne&&E>=Y}function te(){var Le=M();return J(Le)?X(Le):void(fe=setTimeout(te,K(Le)))}function X(Le){return fe=void 0,Ye&&Be?H(Le):(Be=$e=void 0,se)}function me(){fe!==void 0&&clearTimeout(fe),Fe=0,Be=de=$e=fe=void 0}function ve(){return fe===void 0?se:X(M())}function be(){var Le=M(),Oe=J(Le);if(Be=arguments,$e=this,de=Le,Oe){if(fe===void 0)return ee(de);if(Ne)return fe=setTimeout(te,R),H(de)}return fe===void 0&&(fe=setTimeout(te,R)),se}var Be,$e,Y,se,fe,de,Fe=0,We=!1,Ne=!1,Ye=!0;if(typeof _!="function")throw new TypeError(h);return R=l(R)||0,s(V)&&(We=!!V.leading,Ne="maxWait"in V,Y=Ne?P(l(V.maxWait)||0,R):Y,Ye="trailing"in V?!!V.trailing:Ye),be.cancel=me,be.flush=ve,be}function r(_,R,V){var H=!0,ee=!0;if(typeof _!="function")throw new TypeError(h);return s(V)&&(H="leading"in V?!!V.leading:H,ee="trailing"in V?!!V.trailing:ee),n(_,R,{leading:H,maxWait:R,trailing:ee})}function s(_){var R=typeof _>"u"?"undefined":c(_);return!!_&&(R=="object"||R=="function")}function o(_){return!!_&&(typeof _>"u"?"undefined":c(_))=="object"}function a(_){return(typeof _>"u"?"undefined":c(_))=="symbol"||o(_)&&D.call(_)==d}function l(_){if(typeof _=="number")return _;if(a(_))return u;if(s(_)){var R=typeof _.valueOf=="function"?_.valueOf():_;_=s(R)?R+"":R}if(typeof _!="string")return _===0?_:+_;_=_.replace(p,"");var V=y.test(_);return V||m.test(_)?f(_.slice(2),V?2:8):g.test(_)?u:+_}var c=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(_){return typeof _}:function(_){return _&&typeof Symbol=="function"&&_.constructor===Symbol&&_!==Symbol.prototype?"symbol":typeof _},h="Expected a function",u=NaN,d="[object Symbol]",p=/^\s+|\s+$/g,g=/^[-+]0x[0-9a-f]+$/i,y=/^0b[01]+$/i,m=/^0o[0-7]+$/i,f=parseInt,A=(typeof t>"u"?"undefined":c(t))=="object"&&t&&t.Object===Object&&t,T=(typeof self>"u"?"undefined":c(self))=="object"&&self&&self.Object===Object&&self,S=A||T||Function("return this")(),F=Object.prototype,D=F.toString,P=Math.max,U=Math.min,M=function(){return S.Date.now()};i.exports=r}).call(e,function(){return this}())},function(i,e){(function(t){"use strict";function n(M,_,R){function V(Ye){var Le=be,Oe=Be;return be=Be=void 0,de=Ye,Y=M.apply(Oe,Le)}function H(Ye){return de=Ye,se=setTimeout(J,_),Fe?V(Ye):Y}function ee(Ye){var Le=Ye-fe,Oe=Ye-de,E=_-Le;return We?P(E,$e-Oe):E}function K(Ye){var Le=Ye-fe,Oe=Ye-de;return fe===void 0||Le>=_||Le<0||We&&Oe>=$e}function J(){var Ye=U();return K(Ye)?te(Ye):void(se=setTimeout(J,ee(Ye)))}function te(Ye){return se=void 0,Ne&&be?V(Ye):(be=Be=void 0,Y)}function X(){se!==void 0&&clearTimeout(se),de=0,be=fe=Be=se=void 0}function me(){return se===void 0?Y:te(U())}function ve(){var Ye=U(),Le=K(Ye);if(be=arguments,Be=this,fe=Ye,Le){if(se===void 0)return H(fe);if(We)return se=setTimeout(J,_),V(fe)}return se===void 0&&(se=setTimeout(J,_)),Y}var be,Be,$e,Y,se,fe,de=0,Fe=!1,We=!1,Ne=!0;if(typeof M!="function")throw new TypeError(c);return _=a(_)||0,r(R)&&(Fe=!!R.leading,We="maxWait"in R,$e=We?D(a(R.maxWait)||0,_):$e,Ne="trailing"in R?!!R.trailing:Ne),ve.cancel=X,ve.flush=me,ve}function r(M){var _=typeof M>"u"?"undefined":l(M);return!!M&&(_=="object"||_=="function")}function s(M){return!!M&&(typeof M>"u"?"undefined":l(M))=="object"}function o(M){return(typeof M>"u"?"undefined":l(M))=="symbol"||s(M)&&F.call(M)==u}function a(M){if(typeof M=="number")return M;if(o(M))return h;if(r(M)){var _=typeof M.valueOf=="function"?M.valueOf():M;M=r(_)?_+"":_}if(typeof M!="string")return M===0?M:+M;M=M.replace(d,"");var R=g.test(M);return R||y.test(M)?m(M.slice(2),R?2:8):p.test(M)?h:+M}var l=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(M){return typeof M}:function(M){return M&&typeof Symbol=="function"&&M.constructor===Symbol&&M!==Symbol.prototype?"symbol":typeof M},c="Expected a function",h=NaN,u="[object Symbol]",d=/^\s+|\s+$/g,p=/^[-+]0x[0-9a-f]+$/i,g=/^0b[01]+$/i,y=/^0o[0-7]+$/i,m=parseInt,f=(typeof t>"u"?"undefined":l(t))=="object"&&t&&t.Object===Object&&t,A=(typeof self>"u"?"undefined":l(self))=="object"&&self&&self.Object===Object&&self,T=f||A||Function("return this")(),S=Object.prototype,F=S.toString,D=Math.max,P=Math.min,U=function(){return T.Date.now()};i.exports=n}).call(e,function(){return this}())},function(i,e){"use strict";function t(l){var c=void 0,h=void 0,u=void 0;for(c=0;c<l.length;c+=1)if(h=l[c],h.dataset&&h.dataset.aos||(u=h.children&&t(h.children)))return!0;return!1}function n(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function r(){return!!n()}function s(l,c){var h=window.document,u=n(),d=new u(o);a=c,d.observe(h.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function o(l){l&&l.forEach(function(c){var h=Array.prototype.slice.call(c.addedNodes),u=Array.prototype.slice.call(c.removedNodes),d=h.concat(u);if(t(d))return a()})}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){};e.default={isSupported:r,ready:s}},function(i,e){"use strict";function t(h,u){if(!(h instanceof u))throw new TypeError("Cannot call a class as a function")}function n(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function h(u,d){for(var p=0;p<d.length;p++){var g=d[p];g.enumerable=g.enumerable||!1,g.configurable=!0,"value"in g&&(g.writable=!0),Object.defineProperty(u,g.key,g)}}return function(u,d,p){return d&&h(u.prototype,d),p&&h(u,p),u}}(),s=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,o=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,a=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,l=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,c=function(){function h(){t(this,h)}return r(h,[{key:"phone",value:function(){var u=n();return!(!s.test(u)&&!o.test(u.substr(0,4)))}},{key:"mobile",value:function(){var u=n();return!(!a.test(u)&&!l.test(u.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),h}();e.default=new c},function(i,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=function(r,s,o){var a=r.node.getAttribute("data-aos-once");s>r.position?r.node.classList.add("aos-animate"):typeof a<"u"&&(a==="false"||!o&&a!=="true")&&r.node.classList.remove("aos-animate")},n=function(r,s){var o=window.pageYOffset,a=window.innerHeight;r.forEach(function(l,c){t(l,a+o,s)})};e.default=n},function(i,e,t){"use strict";function n(a){return a&&a.__esModule?a:{default:a}}Object.defineProperty(e,"__esModule",{value:!0});var r=t(12),s=n(r),o=function(a,l){return a.forEach(function(c,h){c.node.classList.add("aos-init"),c.position=(0,s.default)(c.node,l.offset)}),a};e.default=o},function(i,e,t){"use strict";function n(a){return a&&a.__esModule?a:{default:a}}Object.defineProperty(e,"__esModule",{value:!0});var r=t(13),s=n(r),o=function(a,l){var c=0,h=0,u=window.innerHeight,d={offset:a.getAttribute("data-aos-offset"),anchor:a.getAttribute("data-aos-anchor"),anchorPlacement:a.getAttribute("data-aos-anchor-placement")};switch(d.offset&&!isNaN(d.offset)&&(h=parseInt(d.offset)),d.anchor&&document.querySelectorAll(d.anchor)&&(a=document.querySelectorAll(d.anchor)[0]),c=(0,s.default)(a).top,d.anchorPlacement){case"top-bottom":break;case"center-bottom":c+=a.offsetHeight/2;break;case"bottom-bottom":c+=a.offsetHeight;break;case"top-center":c+=u/2;break;case"bottom-center":c+=u/2+a.offsetHeight;break;case"center-center":c+=u/2+a.offsetHeight/2;break;case"top-top":c+=u;break;case"bottom-top":c+=a.offsetHeight+u;break;case"center-top":c+=a.offsetHeight/2+u}return d.anchorPlacement||d.offset||isNaN(l)||(h=l),c+h};e.default=o},function(i,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=function(n){for(var r=0,s=0;n&&!isNaN(n.offsetLeft)&&!isNaN(n.offsetTop);)r+=n.offsetLeft-(n.tagName!="BODY"?n.scrollLeft:0),s+=n.offsetTop-(n.tagName!="BODY"?n.scrollTop:0),n=n.offsetParent;return{top:s,left:r}};e.default=t},function(i,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=function(n){return n=n||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(n,function(r){return{node:r}})};e.default=t}])})});var Xo=class i{constructor(e){this.http=e}apiUrl=zr.AccountApiUrl+"Register/Register";Register(e){return this.http.post(this.apiUrl,e)}static \u0275fac=function(t){return new(t||i)(Kn(Di))};static \u0275prov=en({token:i,factory:i.\u0275fac,providedIn:"root"})};function op(i,e){if(i&1){let t=vt();v(0,"div",3)(1,"label",4),I(2,"Company Name"),w(),v(3,"input",17),at("ngModelChange",function(r){Ae(t);let s=_e();return ot(s.farmer.companyName,r)||(s.farmer.companyName=r),Re(r)}),w()()}if(i&2){let t=_e();L(3),st("ngModel",t.farmer.companyName)}}function ap(i,e){if(i&1){let t=vt();v(0,"div",3)(1,"label",4),I(2,"Company Type"),w(),v(3,"input",18),at("ngModelChange",function(r){Ae(t);let s=_e();return ot(s.farmer.companyType,r)||(s.farmer.companyType=r),Re(r)}),w()()}if(i&2){let t=_e();L(3),st("ngModel",t.farmer.companyType)}}var qo=class i{constructor(e,t){this.farmerService=e;this.alertService=t}farmer={name:"",userName:"",password:"",role:"",email:"",companyName:"",companyType:""};signup(){this.farmerService.Register(this.farmer).subscribe(e=>{console.log("\u2705 Farmer registered:",e),this.alertService.showAlert("Signup successful!","success")},e=>{console.error("\u274C Signup failed:",e),this.alertService.showAlert("Signup failed! Please try again.","error")})}field=[{label:"Name",name:"name",type:"text"},{label:"User Name",name:"userName",type:"text"},{label:"Password",name:"password",type:"text"},{label:"Role",name:"Role",type:"text"},{label:"Email",name:"email",type:"email"},{label:"Company Name",name:"companyName",type:"text"},{label:"Company Type",name:"companyType",type:"text"}];testSuccess(){this.alertService.showAlert("Test success alert!","success")}testError(){this.alertService.showAlert("Test error alert!","error")}static \u0275fac=function(t){return new(t||i)(De(Xo),De(Fn))};static \u0275cmp=Ct({type:i,selectors:[["app-signup"]],decls:36,vars:7,consts:[[1,"container","bg-white","p-4","p-md-5","rounded-4","shadow-lg","mt-4",3,"ngSubmit"],[1,"text-center","text-success","fw-bold","mb-4"],[1,"row","g-4"],[1,"col-md-6"],[1,"form-label","fw-semibold"],["type","text","name","name","required","","placeholder","Enter your name",1,"form-control","shadow-sm",3,"ngModelChange","ngModel"],["type","email","name","email","required","","placeholder","Enter your email",1,"form-control","shadow-sm",3,"ngModelChange","ngModel"],["type","text","name","userName","required","","placeholder","Choose a username",1,"form-control","shadow-sm",3,"ngModelChange","ngModel"],["name","role","required","",1,"form-select","shadow-sm",3,"ngModelChange","ngModel"],["value",""],["value","Farmer"],["value","Buyer"],["type","password","name","password","required","","placeholder","Enter a strong password",1,"form-control","shadow-sm",3,"ngModelChange","ngModel"],["class","col-md-6",4,"ngIf"],[1,"text-center","mt-4"],["type","submit",1,"btn","btn-success","btn-lg","px-5","shadow-sm"],[1,"bi","bi-person-plus","me-2"],["type","text","name","companyName","placeholder","Company Name",1,"form-control","shadow-sm",3,"ngModelChange","ngModel"],["type","text","name","companyType","placeholder","e.g., Agro Supplier, Exporter",1,"form-control","shadow-sm",3,"ngModelChange","ngModel"]],template:function(t,n){t&1&&(v(0,"form",0),Qe("ngSubmit",function(){return n.signup()}),v(1,"h2",1),I(2,"Create A Account In Agimandi"),w(),v(3,"div",2)(4,"div",3)(5,"label",4),I(6,"Name"),w(),v(7,"input",5),at("ngModelChange",function(s){return ot(n.farmer.name,s)||(n.farmer.name=s),s}),w()(),v(8,"div",3)(9,"label",4),I(10,"Email"),w(),v(11,"input",6),at("ngModelChange",function(s){return ot(n.farmer.email,s)||(n.farmer.email=s),s}),w()(),v(12,"div",3)(13,"label",4),I(14,"User Name"),w(),v(15,"input",7),at("ngModelChange",function(s){return ot(n.farmer.userName,s)||(n.farmer.userName=s),s}),w()(),v(16,"div",3)(17,"label",4),I(18,"Role"),w(),v(19,"select",8),at("ngModelChange",function(s){return ot(n.farmer.role,s)||(n.farmer.role=s),s}),v(20,"option",9),I(21,"-- Select Role --"),w(),v(22,"option",10),I(23,"Farmer"),w(),v(24,"option",11),I(25,"Buyer"),w()()(),v(26,"div",3)(27,"label",4),I(28,"Password"),w(),v(29,"input",12),at("ngModelChange",function(s){return ot(n.farmer.password,s)||(n.farmer.password=s),s}),w()(),ze(30,op,4,1,"div",13)(31,ap,4,1,"div",13),w(),v(32,"div",14)(33,"button",15),ce(34,"i",16),I(35," Sign Up "),w()()()),t&2&&(L(7),st("ngModel",n.farmer.name),L(4),st("ngModel",n.farmer.email),L(4),st("ngModel",n.farmer.userName),L(4),st("ngModel",n.farmer.role),L(10),st("ngModel",n.farmer.password),L(),Q("ngIf",n.farmer.role==="Buyer"),L(),Q("ngIf",n.farmer.role==="Buyer"))},dependencies:[Ln,ni,Ho,Go,Qn,Vo,ei,ti,Br,Ui,Ni,Lt,In],styles:["form[_ngcontent-%COMP%]{max-width:600px;margin:30px auto;padding:30px;background:#fffffff2;border-radius:16px;box-shadow:0 8px 20px #00000026;display:flex;flex-direction:column;gap:16px;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif;transition:all .3s ease}label[_ngcontent-%COMP%]{font-weight:600;margin-bottom:5px;color:#333;font-size:15px}input[_ngcontent-%COMP%], select[_ngcontent-%COMP%]{width:100%;padding:12px 14px;margin-top:2px;border:1px solid #ccc;border-radius:8px;font-size:16px;transition:border-color .2s,box-shadow .2s;background-color:#fff}input[_ngcontent-%COMP%]:focus, select[_ngcontent-%COMP%]:focus{outline:none;border-color:#28a745;box-shadow:0 0 0 3px #28a74533}button[_ngcontent-%COMP%]{margin-top:20px;padding:12px;background:#28a745;color:#fff;border:none;border-radius:8px;cursor:pointer;font-size:18px;font-weight:600;transition:background .3s,transform .2s}button[_ngcontent-%COMP%]:hover{background:#218838;transform:scale(1.03)}button[_ngcontent-%COMP%]:active{transform:scale(.97)}@media (max-width: 600px){form[_ngcontent-%COMP%]{max-width:95%;padding:20px}button[_ngcontent-%COMP%]{font-size:16px;padding:10px}}@media (prefers-color-scheme: dark){form[_ngcontent-%COMP%]{background:#1e1e1ef2;color:#f1f1f1}input[_ngcontent-%COMP%], select[_ngcontent-%COMP%]{background-color:#444;color:#f1f1f1;border-color:#555}input[_ngcontent-%COMP%]:focus, select[_ngcontent-%COMP%]:focus{border-color:#28a745;box-shadow:0 0 0 3px #28a7454d}button[_ngcontent-%COMP%]{background-color:#28a745}button[_ngcontent-%COMP%]:hover{background-color:#218838}}"]})};var Bu=lu(wc());var sn=class i{constructor(){}selectedColorSubject=new Nr("#FFFFFF");selectedColor$=this.selectedColorSubject.asObservable();setColor(e){this.selectedColorSubject.next(e)}getColor(){return this.selectedColorSubject.getValue()}static \u0275fac=function(t){return new(t||i)};static \u0275prov=en({token:i,factory:i.\u0275fac,providedIn:"root"})};var ki=class i{constructor(e,t,n){this.http=e;this.platformId=t;this.userInfo=n}apiUrl=zr.AccountApiUrl+"Login/login";expiryDays=7;isBrowser(){return qt(this.platformId)}login(e){return this.http.post(this.apiUrl,e).pipe(fu(t=>{if(!this.isBrowser())return;let n=new Date;n.setDate(n.getDate()+this.expiryDays);let r={auth_token:t.token,auth_token_expiry:n.getTime().toString(),user_name:t.name,user_role:t.role,user_email:t.email,nameid:t.id.toString(),lang:"en"};Object.entries(r).forEach(([s,o])=>localStorage.setItem(s,o)),this.userInfo.refresh()}))}isLoggedIn(){if(!this.isBrowser())return!1;let e=localStorage.getItem("auth_token"),t=localStorage.getItem("auth_token_expiry"),n=Date.now();return!e||!t||n>+t?(this.logout(),!1):!0}getToken(){return this.isLoggedIn()?localStorage.getItem("auth_token"):null}logout(){if(!this.isBrowser())return;["auth_token","auth_token_expiry","user_name","user_role","user_email","nameid"].forEach(t=>localStorage.removeItem(t)),this.userInfo.clear()}static \u0275fac=function(t){return new(t||i)(Kn(Di),Kn(tn),Kn(Ot))};static \u0275prov=en({token:i,factory:i.\u0275fac,providedIn:"root"})};function lp(i,e){if(i&1&&(v(0,"div",38),ce(1,"i",39),v(2,"div")(3,"h3"),I(4),w(),v(5,"p"),I(6),w()()()),i&2){let t=e.$implicit;L(),Q("ngClass",t.icon),L(3),ht(t.title),L(2),ht(t.detail)}}function cp(i,e){if(i&1&&(v(0,"article",40)(1,"h3"),I(2),w(),v(3,"p"),I(4),w()()),i&2){let t=e.$implicit;L(2),ht(t.value),L(2),ht(t.label)}}function hp(i,e){if(i&1&&(v(0,"p"),I(1),w()),i&2){let t=e.$implicit;L(),ht(t)}}function up(i,e){if(i&1&&(v(0,"article",41)(1,"div",42)(2,"span",43),ce(3,"i",39),w(),v(4,"span",44),I(5),w()(),v(6,"h3"),I(7),w(),v(8,"p"),I(9),w()()),i&2){let t=e.$implicit;L(3),Q("ngClass",t.icon),L(2),ht(t.accent),L(2),ht(t.title),L(2),ht(t.description)}}function dp(i,e){if(i&1&&(v(0,"article",45),ce(1,"img",46),v(2,"div")(3,"h3"),I(4),w(),v(5,"p"),I(6),w()()()),i&2){let t=e.$implicit;L(),Q("src",t.image,ar)("alt",t.title),L(3),ht(t.title),L(2),ht(t.description)}}function fp(i,e){if(i&1&&(v(0,"article",47)(1,"div",48),I(2),w(),v(3,"div",49)(4,"h3"),ce(5,"i",39),I(6),w(),v(7,"p"),I(8),w()()()),i&2){let t=e.$implicit;L(2),ht(t.number),L(3),Q("ngClass",t.icon),L(),wt(" ",t.title," "),L(2),ht(t.description)}}function pp(i,e){if(i&1&&(v(0,"article",50)(1,"p"),I(2),w(),v(3,"h4"),I(4),w(),v(5,"span"),I(6),w()()),i&2){let t=e.$implicit;L(2),wt('"',t.quote,'"'),L(2),ht(t.name),L(2),ht(t.role)}}function mp(i,e){if(i&1&&(v(0,"article",51),ce(1,"img",46),v(2,"div")(3,"h3"),I(4),w(),v(5,"p"),I(6),w()()()),i&2){let t=e.$implicit;L(),Q("src",t.image,ar)("alt",t.title),L(3),ht(t.title),L(2),ht(t.description)}}function gp(i,e){if(i&1&&(v(0,"article",52)(1,"h3"),I(2),w(),v(3,"p"),I(4),w()()),i&2){let t=e.$implicit;L(2),ht(t.question),L(2),ht(t.answer)}}var $o=class i{constructor(e,t,n,r){this.router=e;this.colorService=t;this.loginService=n;this.userInfo=r}selectedColor="#22c55e";currentUserName="";subscriptions=new Fr;heroHighlights=[{icon:"bi-shield-check",title:"Verified Profiles",detail:"Trusted farmers and buyers on every transaction"},{icon:"bi-graph-up-arrow",title:"Live Market Insights",detail:"Better price discovery with mandi intelligence"},{icon:"bi-lightning-charge",title:"Fast Trade Workflow",detail:"List, negotiate, and close deals in minutes"}];metrics=[{value:"10K+",label:"Farmers Onboarded"},{value:"50K+",label:"Successful Orders"},{value:"20+",label:"States Active"},{value:"4.8/5",label:"Average User Rating"}];projectNarrative=["AgriMandi is built to bridge the gap between farmers and buyers through a transparent digital marketplace. The platform focuses on fair pricing, faster negotiations, and dependable trade relationships.","In many regions, farmers still face fragmented market access and delayed price visibility. AgriMandi improves this by enabling direct discovery, verified communication, and structured transaction workflows.","Our goal is to represent the true spirit of Indian agriculture: local strength, regional diversity, and technology-enabled growth that benefits both producers and procurement partners."];indiaMarketFacts=[{title:"Diverse Crop Ecosystem",description:"India has one of the world's most diverse agricultural landscapes, from cereals and pulses to horticulture and cash crops.",icon:"bi-flower1",accent:"Production"},{title:"Mandi-Driven Trade Backbone",description:"Traditional mandi networks remain central to price discovery, aggregation, and regional commodity movement.",icon:"bi-shop-window",accent:"Markets"},{title:"Millions of Smallholders",description:"A large share of production comes from small and marginal farmers, making market accessibility and trust critical.",icon:"bi-people",accent:"Community"},{title:"Digital Transformation Opportunity",description:"Modern platforms can reduce information gaps, improve buyer reach, and create stronger farm-to-market efficiency.",icon:"bi-cpu",accent:"Technology"}];features=[{title:"Direct Farm-to-Buyer Marketplace",description:"Farmers publish produce instantly and buyers discover quality stock without unnecessary intermediaries.",image:"images/3.jpg"},{title:"Transparent Communication",description:"Negotiation flows are simple and documented so both sides can trade with confidence and clarity.",image:"images/2.jpg"},{title:"Secure and Structured Transactions",description:"From order confirmation to payment, each step is designed to reduce risk and improve accountability.",image:"images/6.jpeg"},{title:"Regional Reach with Local Trust",description:"Scale your network beyond local mandis while preserving trust through verified identities and reviews.",image:"images/5.jpeg"}];steps=[{number:1,title:"Create Account",description:"Join as a farmer or buyer with a verified profile and basic business information.",icon:"bi-person-plus"},{number:2,title:"List or Discover Produce",description:"Farmers add quantity, quality and expected price while buyers search using smart filters.",icon:"bi-search"},{number:3,title:"Connect and Negotiate",description:"Use chat and contact tools to finalize price, delivery plan, and order requirements.",icon:"bi-chat-dots"},{number:4,title:"Place Order Securely",description:"Confirm transaction details with secure workflows built for transparent trading.",icon:"bi-shield-lock"},{number:5,title:"Track and Rate Experience",description:"Monitor order completion and leave feedback to strengthen marketplace trust.",icon:"bi-star"}];testimonials=[{quote:"AgriMandi helped me connect with more serious buyers in less time. My produce sells faster and at better rates.",name:"Ramesh Kumar",role:"Farmer, Madhya Pradesh"},{quote:"The platform makes procurement simple. We can compare quality and close deals directly with farmers we trust.",name:"Anjali Sharma",role:"Retail Buyer, Jaipur"}];insights=[{title:"5 Ways Farmers Can Improve Listing Performance",description:"Practical steps to write better product listings that attract faster and higher-quality responses.",image:"images/latest.png"},{title:"Digital Agriculture Trends in 2026",description:"A quick look at market connectivity, pricing intelligence, and technology adoption in agriculture.",image:"images/latest.png"},{title:"How Buyers Can Source Better at Scale",description:"Build repeatable sourcing operations while maintaining quality and transparent trade relationships.",image:"images/latest.png"}];faqs=[{question:"How do I start using AgriMandi?",answer:"Sign up with your role, complete your profile, and begin listing or browsing produce immediately."},{question:"Is AgriMandi free for farmers and buyers?",answer:"Yes. Registration and core marketplace usage are free for both farmers and buyers."},{question:"How is trust maintained in transactions?",answer:"Verified accounts, transparent communication, and feedback-driven reputation improve trade confidence."},{question:"Can I use AgriMandi across states?",answer:"Yes. The platform is designed to connect participants from multiple states and trading regions."}];ngOnInit(){if(!this.loginService.isLoggedIn()){this.router.navigate(["auth/login"]);return}this.subscriptions.add(this.colorService.selectedColor$.subscribe(e=>{this.selectedColor=e||"#22c55e"})),this.currentUserName=this.userInfo.getUserName()||"AgriMandi User",Bu.init({duration:700,once:!0,easing:"ease-out-cubic"})}ngOnDestroy(){this.subscriptions.unsubscribe()}static \u0275fac=function(t){return new(t||i)(De(_n),De(sn),De(ki),De(Ot))};static \u0275cmp=Ct({type:i,selectors:[["app-home"]],decls:86,vars:18,consts:[[1,"home-shell"],["data-aos","fade-up",1,"hero"],[1,"hero__content"],[1,"hero__eyebrow"],[1,"hero__title"],[1,"hero__subtitle",3,"innerHTML"],[1,"hero__user"],[1,"hero__actions"],["routerLink","/components/product",1,"btn","btn--primary"],["routerLink","/components/help-center",1,"btn","btn--ghost"],["data-aos","zoom-in","data-aos-delay","120",1,"hero__panel"],["class","highlight-card",4,"ngFor","ngForOf"],["data-aos","fade-up",1,"metrics"],["class","metric",4,"ngFor","ngForOf"],["data-aos","fade-up",1,"section","about-market"],["aria-hidden","true",1,"about-market__flag-line"],[1,"section__head"],[1,"section__eyebrow"],[1,"about-market__layout"],[1,"about-market__story"],[4,"ngFor","ngForOf"],[1,"about-market__facts"],["class","market-fact",4,"ngFor","ngForOf"],["data-aos","fade-up",1,"section"],[1,"feature-grid"],["class","feature",4,"ngFor","ngForOf"],[1,"timeline"],["class","timeline__item",4,"ngFor","ngForOf"],["data-aos","fade-up",1,"split"],[1,"split__col"],[1,"section__head","section__head--left"],["class","quote",4,"ngFor","ngForOf"],["class","insight",4,"ngFor","ngForOf"],[1,"faq-grid"],["class","faq",4,"ngFor","ngForOf"],["data-aos","fade-up",1,"cta"],["routerLink","/components/productinventory",1,"btn","btn--primary"],["routerLink","/components/orders",1,"btn","btn--ghost"],[1,"highlight-card"],[1,"bi",3,"ngClass"],[1,"metric"],[1,"market-fact"],[1,"market-fact__top"],[1,"market-fact__icon"],[1,"market-fact__accent"],[1,"feature"],[3,"src","alt"],[1,"timeline__item"],[1,"timeline__badge"],[1,"timeline__body"],[1,"quote"],[1,"insight"],[1,"faq"]],template:function(t,n){t&1&&(v(0,"main",0)(1,"section",1)(2,"div",2)(3,"p",3),I(4,"Digital Agriculture Marketplace"),w(),v(5,"h1",4),I(6),mi(7,"translate"),w(),ce(8,"p",5),mi(9,"translate"),v(10,"p",6),I(11,"Welcome back, "),v(12,"strong"),I(13),w()(),v(14,"div",7)(15,"a",8),I(16,"Start Trading"),w(),v(17,"a",9),I(18,"Explore Help Center"),w()()(),v(19,"div",10),ze(20,lp,7,3,"div",11),w()(),v(21,"section",12),ze(22,cp,5,2,"article",13),w(),v(23,"section",14),ce(24,"div",15),v(25,"div",16)(26,"p",17),I(27,"About The Project"),w(),v(28,"h2"),I(29,"Built to represent India's agriculture market with clarity and trust"),w()(),v(30,"div",18)(31,"div",19),ze(32,hp,2,1,"p",20),w(),v(33,"div",21),ze(34,up,10,4,"article",22),w()()(),v(35,"section",23)(36,"div",16)(37,"p",17),I(38,"Core Value"),w(),v(39,"h2"),I(40,"Why professionals choose AgriMandi"),w(),v(41,"p"),I(42," A reliable platform designed to improve transparency, speed, and trust across the agriculture trading lifecycle. "),w()(),v(43,"div",24),ze(44,dp,7,4,"article",25),w()(),v(45,"section",23)(46,"div",16)(47,"p",17),I(48,"Workflow"),w(),v(49,"h2"),I(50,"How trading works on AgriMandi"),w()(),v(51,"div",26),ze(52,fp,9,4,"article",27),w()(),v(53,"section",28)(54,"div",29)(55,"div",30)(56,"p",17),I(57,"User Voices"),w(),v(58,"h2"),I(59,"Trusted by farmers and buyers"),w()(),ze(60,pp,7,3,"article",31),w(),v(61,"div",29)(62,"div",30)(63,"p",17),I(64,"Knowledge Hub"),w(),v(65,"h2"),I(66,"Latest insights from the marketplace"),w()(),ze(67,mp,7,4,"article",32),w()(),v(68,"section",23)(69,"div",16)(70,"p",17),I(71,"FAQ"),w(),v(72,"h2"),I(73,"Frequently asked questions"),w()(),v(74,"div",33),ze(75,gp,5,2,"article",34),w()(),v(76,"section",35)(77,"h2"),I(78,"Build a stronger agricultural supply chain with AgriMandi"),w(),v(79,"p"),I(80," Empower farmers, accelerate sourcing for buyers, and unlock transparent trade outcomes at scale. "),w(),v(81,"div",7)(82,"a",36),I(83,"View Product Inventory"),w(),v(84,"a",37),I(85,"Track Orders"),w()()()()),t&2&&(vu("--theme-color",n.selectedColor),L(6),ht(gi(7,14,"WELCOME_MESSAGE")),L(2),Q("innerHTML",gi(9,16,"ABOUT_PARAGRAPH"),xu),L(5),ht(n.currentUserName),L(7),Q("ngForOf",n.heroHighlights),L(2),Q("ngForOf",n.metrics),L(10),Q("ngForOf",n.projectNarrative),L(2),Q("ngForOf",n.indiaMarketFacts),L(10),Q("ngForOf",n.features),L(8),Q("ngForOf",n.steps),L(8),Q("ngForOf",n.testimonials),L(7),Q("ngForOf",n.insights),L(8),Q("ngForOf",n.faqs))},dependencies:[Lt,gn,rn,Fi,kr,Oi,Vr],styles:['[_nghost-%COMP%]{--theme-color: #22c55e;--theme-dark: #157f45;--surface: #ffffff;--text: #102118;--muted: #4b6355}.home-shell[_ngcontent-%COMP%]{position:relative;z-index:1;width:100%;max-width:100%;margin:12px 0 32px;padding:18px 24px;display:grid;gap:20px;color:var(--text)}.hero[_ngcontent-%COMP%], .section[_ngcontent-%COMP%], .split[_ngcontent-%COMP%], .metrics[_ngcontent-%COMP%], .cta[_ngcontent-%COMP%]{background:#ffffff75;border:1px solid rgba(255,255,255,.36);border-radius:24px;backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);box-shadow:0 18px 40px #0c2b1c1a}.hero[_ngcontent-%COMP%]{padding:28px;display:grid;gap:20px;grid-template-columns:1.3fr 1fr;background:linear-gradient(140deg,#ffffff85,#e3ffec5c)}.hero__eyebrow[_ngcontent-%COMP%], .section__eyebrow[_ngcontent-%COMP%]{margin:0;font-size:12px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:color-mix(in srgb,var(--theme-color) 70%,#0f3f24 30%)}.hero__title[_ngcontent-%COMP%]{margin:10px 0;font-size:clamp(1.8rem,2.7vw,2.8rem);line-height:1.16;font-weight:800}.hero__subtitle[_ngcontent-%COMP%]{margin:0;color:var(--muted);line-height:1.7;font-size:15px}.hero__user[_ngcontent-%COMP%]{margin:14px 0 0;font-size:14px;color:#1d4d31}.hero__actions[_ngcontent-%COMP%]{margin-top:20px;display:flex;flex-wrap:wrap;gap:12px}.btn[_ngcontent-%COMP%]{display:inline-flex;align-items:center;justify-content:center;min-height:42px;border-radius:12px;padding:0 16px;text-decoration:none;font-weight:700;font-size:14px;transition:all .2s ease}.btn--primary[_ngcontent-%COMP%]{color:#fff;background:linear-gradient(135deg,var(--theme-dark),var(--theme-color))}.btn--primary[_ngcontent-%COMP%]:hover{transform:translateY(-1px);box-shadow:0 10px 24px #157f4540}.btn--ghost[_ngcontent-%COMP%]{color:#1f4f33;border:1px solid rgba(31,79,51,.25);background:#ffffffb3}.btn--ghost[_ngcontent-%COMP%]:hover{background:#e2ffebcc}.hero__panel[_ngcontent-%COMP%]{display:grid;gap:12px}.highlight-card[_ngcontent-%COMP%]{background:#ffffff6b;border:1px solid rgba(13,116,58,.15);border-radius:16px;padding:12px;display:grid;grid-template-columns:38px 1fr;gap:12px;align-items:start}.highlight-card[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{width:38px;height:38px;border-radius:10px;display:inline-flex;align-items:center;justify-content:center;font-size:18px;color:#fff;background:linear-gradient(135deg,#157f45,#22c55e)}.highlight-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0 0 4px;font-size:15px}.highlight-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;font-size:13px;color:var(--muted)}.metrics[_ngcontent-%COMP%]{padding:16px;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px}.metric[_ngcontent-%COMP%]{background:#f5fff86b;border:1px solid rgba(25,119,64,.1);border-radius:14px;padding:14px;text-align:center}.metric[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;font-size:1.4rem;color:#15653a}.metric[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:6px 0 0;font-size:12px;color:var(--muted)}.section[_ngcontent-%COMP%], .split[_ngcontent-%COMP%], .cta[_ngcontent-%COMP%]{padding:24px}.section__head[_ngcontent-%COMP%]{text-align:center;max-width:760px;margin:0 auto 18px}.section__head--left[_ngcontent-%COMP%]{text-align:left;margin:0 0 14px}.section__head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:8px 0;font-size:clamp(1.35rem,2vw,2rem)}.section__head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;color:var(--muted);line-height:1.65}.about-market[_ngcontent-%COMP%]{position:relative;overflow:hidden;background:radial-gradient(circle at 0% 0%,rgba(255,255,255,.26),transparent 40%),linear-gradient(145deg,#f8fffa80,#e9fbef57)}.about-market[_ngcontent-%COMP%]:before{content:"";position:absolute;inset:-60% auto auto -15%;width:320px;height:320px;border-radius:50%;background:radial-gradient(circle,#22c55e29,#22c55e00);pointer-events:none}.about-market__flag-line[_ngcontent-%COMP%]{height:4px;border-radius:999px;margin:-8px auto 18px;max-width:220px;background:linear-gradient(90deg,#f93,#fff,#138808);box-shadow:0 4px 12px #1143282e}.about-market__layout[_ngcontent-%COMP%]{display:grid;grid-template-columns:1.1fr 1fr;gap:14px}.about-market__story[_ngcontent-%COMP%]{background:#ffffff70;border-radius:16px;padding:18px;border:1px solid rgba(18,110,56,.12);box-shadow:inset 0 1px #ffffff59}.about-market__story[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 10px;color:#234736;line-height:1.78;font-size:15px}.about-market__story[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:first-child:first-letter{font-size:30px;font-weight:700;line-height:1;color:#0d6537;padding-right:2px}.about-market__story[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child{margin-bottom:0}.about-market__facts[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}.market-fact[_ngcontent-%COMP%]{background:#ffffff75;border-radius:14px;padding:12px 13px;border:1px solid rgba(17,106,54,.12);transition:transform .2s ease,box-shadow .2s ease,border-color .2s ease}.market-fact[_ngcontent-%COMP%]:hover{transform:translateY(-2px);border-color:#0f6a353d;box-shadow:0 10px 24px #0942231f}.market-fact__top[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;margin-bottom:8px}.market-fact__icon[_ngcontent-%COMP%]{width:30px;height:30px;border-radius:8px;display:inline-flex;align-items:center;justify-content:center;font-size:14px;color:#fff;background:linear-gradient(135deg,#157f45,#22c55e)}.market-fact__accent[_ngcontent-%COMP%]{font-size:10px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#0f5f34;padding:3px 7px;border-radius:999px;background:#1065331a}.market-fact[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0 0 6px;font-size:14px;color:#0f5f34}.market-fact[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;font-size:12.5px;line-height:1.55;color:var(--muted)}.feature-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}.feature[_ngcontent-%COMP%]{display:grid;grid-template-columns:82px 1fr;gap:12px;align-items:center;background:#ffffff75;border-radius:16px;padding:12px;border:1px solid rgba(22,128,67,.12)}.feature[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:82px;height:82px;border-radius:12px;object-fit:cover}.feature[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0 0 6px;font-size:15px}.feature[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;font-size:13px;color:var(--muted);line-height:1.55}.timeline[_ngcontent-%COMP%]{display:grid;gap:12px}.timeline__item[_ngcontent-%COMP%]{display:grid;grid-template-columns:44px 1fr;gap:12px;align-items:start;background:#ffffff75;border:1px solid rgba(19,112,57,.12);border-radius:14px;padding:12px}.timeline__badge[_ngcontent-%COMP%]{width:44px;height:44px;border-radius:12px;background:linear-gradient(135deg,#157f45,#22c55e);color:#fff;display:inline-flex;align-items:center;justify-content:center;font-weight:700}.timeline__body[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;font-size:15px;display:inline-flex;align-items:center;gap:8px}.timeline__body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:6px 0 0;color:var(--muted);font-size:13px;line-height:1.6}.split[_ngcontent-%COMP%]{display:grid;gap:16px;grid-template-columns:1fr 1fr}.quote[_ngcontent-%COMP%], .insight[_ngcontent-%COMP%], .faq[_ngcontent-%COMP%]{background:#ffffff75;border:1px solid rgba(15,103,51,.12);border-radius:14px}.quote[_ngcontent-%COMP%]{padding:14px;margin-bottom:10px}.quote[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;color:#244836;line-height:1.6;font-style:italic}.quote[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin:10px 0 2px;font-size:14px}.quote[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--muted);font-size:12px}.insight[_ngcontent-%COMP%]{padding:12px;margin-bottom:10px;display:grid;grid-template-columns:88px 1fr;gap:12px;align-items:center}.insight[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:88px;height:72px;object-fit:cover;border-radius:10px}.insight[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0 0 5px;font-size:14px}.insight[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;font-size:12px;color:var(--muted)}.faq-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}.faq[_ngcontent-%COMP%]{padding:14px}.faq[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0 0 8px;font-size:15px}.faq[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;font-size:13px;color:var(--muted);line-height:1.6}.cta[_ngcontent-%COMP%]{text-align:center;background:linear-gradient(140deg,#effff575,#d7fbe557)}.cta[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;font-size:clamp(1.35rem,2.3vw,2rem)}.cta[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{max-width:720px;margin:10px auto 0;color:var(--muted)}.cta[_ngcontent-%COMP%]   .hero__actions[_ngcontent-%COMP%]{justify-content:center}@media (max-width: 1024px){.home-shell[_ngcontent-%COMP%]{padding:14px 16px}.hero[_ngcontent-%COMP%]{grid-template-columns:1fr}.metrics[_ngcontent-%COMP%]{grid-template-columns:repeat(2,minmax(0,1fr))}.split[_ngcontent-%COMP%], .about-market__layout[_ngcontent-%COMP%]{grid-template-columns:1fr}}@media (max-width: 768px){.home-shell[_ngcontent-%COMP%]{margin:8px 0 24px;padding:12px}.hero[_ngcontent-%COMP%], .section[_ngcontent-%COMP%], .split[_ngcontent-%COMP%], .metrics[_ngcontent-%COMP%], .cta[_ngcontent-%COMP%]{border-radius:16px;padding:14px}.feature-grid[_ngcontent-%COMP%], .faq-grid[_ngcontent-%COMP%], .about-market__facts[_ngcontent-%COMP%], .feature[_ngcontent-%COMP%], .insight[_ngcontent-%COMP%]{grid-template-columns:1fr}.feature[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .insight[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:150px}}']})};var Tc=(i,e)=>({"bg-green-600 text-white border-green-600":i,"border-gray-300 text-gray-500":e}),zu=(i,e)=>({"border-green-500":i,"border-gray-300":e});function _p(i,e){i&1&&(v(0,"div",16)(1,"div",17)(2,"div",18),ce(3,"div",19),v(4,"div",20),Fo(),v(5,"svg",21),ce(6,"path",22),w()()(),No(),v(7,"p",23),I(8," Creating You Product "),w(),v(9,"div",24),ce(10,"div",25),w()()())}function xp(i,e){if(i&1&&(v(0,"option",38),I(1),mi(2,"translate"),w()),i&2){let t=e.$implicit;Q("value",t),L(),ht(gi(2,2,t))}}function vp(i,e){if(i&1&&(v(0,"div",26)(1,"h2",27),I(2,"Basic Product Info"),w(),v(3,"div")(4,"label",28),I(5,"Product Name "),v(6,"span",29),I(7,"*"),w()(),ce(8,"input",30),w(),v(9,"div")(10,"label",28),I(11,"Description "),v(12,"span",29),I(13,"*"),w()(),ce(14,"textarea",31),w(),v(15,"div",32)(16,"div")(17,"label",28),I(18,"Category "),v(19,"span",29),I(20,"*"),w()(),v(21,"select",33)(22,"option",34),I(23,"Select a category"),w(),ze(24,xp,3,4,"option",35),w()(),v(25,"div")(26,"label",28),I(27,"Type "),v(28,"span",29),I(29,"*"),w()(),ce(30,"input",36),w(),v(31,"div")(32,"label",28),I(33,"Variety "),v(34,"span",29),I(35,"*"),w()(),ce(36,"input",37),w()()()),i&2){let t=_e();L(24),Q("ngForOf",t.categories)}}function yp(i,e){if(i&1&&(v(0,"option",38),I(1),mi(2,"translate"),w()),i&2){let t=e.$implicit;Q("value",t),L(),ht(gi(2,2,t))}}function bp(i,e){if(i&1&&(v(0,"option",38),I(1),mi(2,"translate"),w()),i&2){let t=e.$implicit;Q("value",t),L(),ht(gi(2,2,t))}}function Sp(i,e){if(i&1&&(v(0,"option",38),I(1),w()),i&2){let t=e.$implicit;Q("value",t),L(),ht(t)}}function Mp(i,e){if(i&1&&(v(0,"option",38),I(1),w()),i&2){let t=e.$implicit;Q("value",t),L(),ht(t)}}function wp(i,e){if(i&1&&(v(0,"div",26)(1,"h2",27),I(2,"Product Details"),w(),v(3,"div",32)(4,"div")(5,"label",28),I(6,"Grade "),v(7,"span",29),I(8,"*"),w()(),v(9,"select",39),ze(10,yp,3,4,"option",35),w()(),v(11,"div")(12,"label",28),I(13,"Quantity "),v(14,"span",29),I(15,"*"),w()(),ce(16,"input",40),w(),v(17,"div")(18,"label",28),I(19,"Unit "),v(20,"span",29),I(21,"*"),w()(),v(22,"select",41),ze(23,bp,3,4,"option",35),w()()(),v(24,"div")(25,"label",28),I(26,"Price Per Unit (\u20B9) "),v(27,"span",29),I(28,"*"),w()(),ce(29,"input",42),w(),v(30,"div",43),ce(31,"input",44),v(32,"label",45),I(33,"Available for Sale"),w()(),v(34,"div",46)(35,"div")(36,"label",28),I(37,"State "),v(38,"span",29),I(39,"*"),w()(),v(40,"select",47)(41,"option",34),I(42,"Select a state"),w(),ze(43,Sp,2,2,"option",35),w()(),v(44,"div")(45,"label",28),I(46,"District "),v(47,"span",29),I(48,"*"),w()(),v(49,"select",48)(50,"option",34),I(51,"Select a district"),w(),ze(52,Mp,2,2,"option",35),w()()()()),i&2){let t=_e();L(10),Q("ngForOf",t.grades),L(13),Q("ngForOf",t.units),L(20),Q("ngForOf",t.states),L(9),Q("ngForOf",t.districts)}}function Ep(i,e){if(i&1){let t=vt();v(0,"div",26)(1,"h2",27),I(2,"Availability & Upload"),w(),v(3,"div",46)(4,"div")(5,"label",28),I(6,"Harvest Date "),v(7,"span",29),I(8,"*"),w()(),ce(9,"input",49),w(),v(10,"div")(11,"label",28),I(12,"Expiry Date "),v(13,"span",29),I(14,"*"),w()(),ce(15,"input",50),w()(),v(16,"div")(17,"label",28),I(18,"Upload Images"),w(),v(19,"input",51),Qe("change",function(r){Ae(t);let s=_e();return Re(s.onFileChange(r))}),w()()()}if(i&2){let t=_e();L(9),Uo("max",t.today),L(6),Q("min",t.productForm.value.harvestDate)}}function Cp(i,e){if(i&1){let t=vt();v(0,"button",52),Qe("click",function(){Ae(t);let r=_e();return Re(r.goBack())}),I(1," \u2190 Back "),w()}}function Tp(i,e){if(i&1){let t=vt();v(0,"button",53),Qe("click",function(){Ae(t);let r=_e();return Re(r.goNext())}),I(1," Next \u2192 "),w()}}function Ap(i,e){if(i&1&&(v(0,"button",54),I(1," \u2705 Submit Product "),w()),i&2){let t=_e();Q("disabled",t.productForm.invalid)}}var jo=class i{constructor(e,t,n,r){this.fb=e;this.productService=t;this.alertService=n;this.userInfo=r}productForm;today=new Date().toISOString().split("T")[0];currentStep=1;states=[];districts=[];categories=["Grains","Fruits","Vegetables","Dairy","Flowers","Spices","Pulses","Oilseeds","Herbs","Others"];grades=["Standard","A","B","C","Organic","Premium"];units=["Kg","Quintal","Ton","Liters","Packets","Bunch","Dozen"];loading=!1;ngOnInit(){this.productForm=this.fb.group({name:["",[Dn.required,Dn.minLength(3)]],description:["",Dn.required],category:["",Dn.required],type:[""],variety:[""],state:[""],district:[""],grade:["Standard"],quantity:[1,[Dn.required,Dn.min(1)]],unit:["Kg",Dn.required],pricePerUnit:[0,[Dn.required,Dn.min(1)]],availability:[!0],location:[""],harvestDate:["",Dn.required],expiryDate:["",Dn.required],storageCondition:[""],packagingType:[""],certification:[""],farmerId:[0],status:["Pending"],imageUrl:[null]},{validators:this.expiryDateAfterHarvestDate("harvestDate","expiryDate")}),this.states=Object.keys(Sc),this.productForm.get("state")?.valueChanges.subscribe(e=>{console.log("Selected State:",e),this.districts=Sc[e]||[],this.productForm.patchValue({district:""})})}expiryDateAfterHarvestDate(e,t){return n=>{let r=n.get(e)?.value,s=n.get(t)?.value;if(r&&s){let o=new Date(r);return new Date(s)>=o?null:{expiryBeforeHarvest:!0}}return null}}get f(){return this.productForm.controls}submitProduct(){let e=this.userInfo.getUserEmail(),t=this.userInfo.getUserName();if(!e||!t){this.alertService.showAlert("User information missing in token!","error");return}if(this.productForm.invalid){this.productForm.markAllAsTouched(),this.alertService.showAlert("Please fill all required fields correctly.","error");return}this.loading=!0,this.productService.getFarmerId(e,t).subscribe({next:n=>{let r=new FormData;r.append("name",this.productForm.value.name),r.append("description",this.productForm.value.description),r.append("category",this.productForm.value.category),r.append("type",this.productForm.value.type),r.append("variety",this.productForm.value.variety),r.append("grade",this.productForm.value.grade),r.append("quantity",this.productForm.value.quantity),r.append("unit",this.productForm.value.unit),r.append("pricePerUnit",this.productForm.value.pricePerUnit),r.append("availability",this.productForm.value.availability),r.append("location",`${this.productForm.value.district}, ${this.productForm.value.state}`),r.append("harvestDate",this.productForm.value.harvestDate),r.append("expiryDate",this.productForm.value.expiryDate),r.append("storageCondition",this.productForm.value.storageCondition),r.append("packagingType",this.productForm.value.packagingType),r.append("certification",this.productForm.value.certification),r.append("farmerId",n.toString()),r.append("status","Pending");let s=this.productForm.get("imageUrl")?.value;if(s&&s.length>0)for(let o=0;o<s.length;o++)r.append("files",s[o]);this.productService.saveproduct(r).subscribe({next:o=>{this.alertService.showAlert("Product added successfully!","success"),this.productForm.reset({availability:!0}),this.loading=!1},error:o=>{this.alertService.showAlert("Failed to add product! Please try again.","error"),this.loading=!1}})},error:n=>{this.alertService.showAlert("Could not fetch Farmer ID. Please login again.","error"),this.loading=!1}})}onFileChange(e){e.target.files&&e.target.files.length>0&&this.productForm.patchValue({imageUrl:e.target.files})}goNext(){this.currentStep<3&&this.currentStep++}goBack(){this.currentStep>1&&this.currentStep--}static \u0275fac=function(t){return new(t||i)(De(Uu),De(Hr),De(Fn),De(Ot))};static \u0275cmp=Ct({type:i,selectors:[["app-product"]],decls:33,vars:34,consts:[["class","fixed inset-0 flex items-center justify-center bg-gradient-to-br from-green-900/80 via-black/80 to-green-950/80 backdrop-blur-md z-50",4,"ngIf"],[1,"w-full","invert-dark","py-12","px-4","sm:px-10","lg:px-20","transition-colors","duration-300"],[1,"max-w-7xl","mx-auto","text-center","mb-12"],[1,"text-4xl","sm:text-5xl","font-extrabold","tracking-tight","text-green-700","dark:text-green-400","mb-4"],[1,"text-lg","text-gray-600","dark:text-gray-300"],[1,"flex","justify-between","items-center","mb-10"],[1,"flex-1","flex","flex-col","items-center"],[1,"w-10","h-10","flex","items-center","justify-center","rounded-full","border-2",3,"ngClass"],[1,"mt-2","text-sm","font-medium","text-center"],[1,"flex-1","border-t-2",3,"ngClass"],[1,"space-y-6",3,"ngSubmit","formGroup"],["class","space-y-6",4,"ngIf"],[1,"flex","justify-between","mt-10"],["type","button","class","px-6 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-100 font-semibold rounded-xl shadow",3,"click",4,"ngIf"],["type","button","class","ml-auto px-6 py-2 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl shadow",3,"click",4,"ngIf"],["type","submit","class","ml-auto px-6 py-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl shadow",3,"disabled",4,"ngIf"],[1,"fixed","inset-0","flex","items-center","justify-center","bg-gradient-to-br","from-green-900/80","via-black/80","to-green-950/80","backdrop-blur-md","z-50"],[1,"flex","flex-col","items-center","space-y-8"],[1,"relative"],[1,"w-24","h-24","rounded-full","border-4","border-transparent","border-t-green-400","animate-spin"],[1,"absolute","inset-4","bg-gradient-to-br","from-green-500","to-green-600","rounded-lg","shadow-lg","flex","items-center","justify-center"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke","currentColor",1,"w-8","h-8","text-white","animate-bounce"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M3 7l9-4 9 4-9 4-9-4zM3 17l9 4 9-4M3 12l9 4 9-4"],[1,"text-green-100","text-xl","font-bold","tracking-wide","animate-pulse"],[1,"w-64","h-3","bg-green-900","rounded-full","overflow-hidden","shadow-inner"],[1,"h-full","bg-gradient-to-r","from-green-400","to-green-600","animate-[progressFill_2s_infinite]"],[1,"space-y-6"],[1,"text-2xl","font-bold","text-green-600","dark:text-green-400","mb-4"],[1,"block","font-semibold","mb-1"],[1,"text-red-500"],["type","text","formControlName","name","placeholder","E.g., Golden Apples",1,"w-full","rounded-lg","border","px-4","py-2","bg-white","dark:bg-gray-800","text-gray-900","dark:text-gray-100","fancy-input","glass"],["formControlName","description","rows","3","placeholder","Briefly describe the product",1,"w-full","rounded-lg","border","px-4","py-2","bg-white","dark:bg-gray-800","text-gray-900","dark:text-gray-100","fancy-input","glass"],[1,"grid","grid-cols-1","md:grid-cols-3","gap-6"],["formControlName","category",1,"w-full","rounded-lg","border","px-4","py-2","bg-white","dark:bg-gray-800","text-gray-900","dark:text-gray-100"],["value","","disabled",""],[3,"value",4,"ngFor","ngForOf"],["type","text","formControlName","type","placeholder","E.g., Fuji",1,"w-full","rounded-lg","border","px-4","py-2","bg-white","dark:bg-gray-800","text-gray-900","dark:text-gray-100","fancy-input","glass"],["type","text","formControlName","variety","placeholder","E.g., Organic",1,"w-full","rounded-lg","border","px-4","py-2","bg-white","dark:bg-gray-800","text-gray-900","dark:text-gray-100","fancy-input","glass"],[3,"value"],["formControlName","grade",1,"w-full","rounded-lg","border","px-4","py-2","bg-white","dark:bg-gray-800","text-gray-900","dark:text-gray-100"],["type","number","formControlName","quantity","min","0",1,"w-full","rounded-lg","border","px-4","py-2","bg-white","dark:bg-gray-800","text-gray-900","dark:text-gray-100","fancy-input","glass"],["formControlName","unit",1,"w-full","rounded-lg","border","px-4","py-2","bg-white","dark:bg-gray-800","text-gray-900","dark:text-gray-100"],["type","number","formControlName","pricePerUnit","min","0","step","0.01",1,"w-full","rounded-lg","border","px-4","py-2","bg-white","dark:bg-gray-800","text-gray-900","dark:text-gray-100","fancy-input","glass"],[1,"flex","items-center","gap-3"],["type","checkbox","formControlName","availability",1,"h-5","w-5","text-green-600","rounded","focus:ring-green-500","border-gray-300","dark:border-gray-600","fancy-input","glass"],[1,"font-semibold"],[1,"grid","grid-cols-1","md:grid-cols-2","gap-6"],["formControlName","state",1,"w-full","rounded-lg","border","px-4","py-2","bg-white","dark:bg-gray-800","text-gray-900","dark:text-gray-100"],["formControlName","district",1,"w-full","rounded-lg","border","px-4","py-2","bg-white","dark:bg-gray-800","text-gray-900","dark:text-gray-100"],["type","date","formControlName","harvestDate",1,"w-full","rounded-lg","border","px-4","py-2","bg-white","dark:bg-gray-800","text-gray-900","dark:text-gray-100",3,"max"],["type","date","formControlName","expiryDate",1,"w-full","rounded-lg","border","px-4","py-2","bg-white","dark:bg-gray-800","text-gray-900","dark:text-gray-100",3,"min"],["type","file","multiple","",1,"block","w-full","text-sm","text-gray-500","file:mr-4","file:py-2","file:px-4","file:border-0","file:text-sm","file:font-semibold","file:bg-green-100","file:text-green-700","hover:file:bg-green-200",3,"change"],["type","button",1,"px-6","py-2","bg-gray-200","dark:bg-gray-700","hover:bg-gray-300","dark:hover:bg-gray-600","text-gray-800","dark:text-gray-100","font-semibold","rounded-xl","shadow",3,"click"],["type","button",1,"ml-auto","px-6","py-2","bg-green-500","hover:bg-green-600","text-white","font-bold","rounded-xl","shadow",3,"click"],["type","submit",1,"ml-auto","px-6","py-2","bg-green-600","hover:bg-green-700","text-white","font-bold","rounded-xl","shadow",3,"disabled"]],template:function(t,n){t&1&&(ze(0,_p,11,0,"div",0),v(1,"div",1)(2,"div",2)(3,"h1",3),I(4," Add Your Fresh Product "),w(),v(5,"p",4),I(6," Please fill out the steps below to list your crop or item for sale. "),w()(),v(7,"div",5)(8,"div",6)(9,"div",7),I(10," 1 "),w(),v(11,"span",8),I(12,"Basic Info"),w()(),ce(13,"div",9),v(14,"div",6)(15,"div",7),I(16," 2 "),w(),v(17,"span",8),I(18,"Product Details"),w()(),ce(19,"div",9),v(20,"div",6)(21,"div",7),I(22," 3 "),w(),v(23,"span",8),I(24,"Ready to Sell"),w()()(),v(25,"form",10),Qe("ngSubmit",function(){return n.submitProduct()}),ze(26,vp,37,1,"div",11)(27,wp,53,4,"div",11)(28,Ep,20,2,"div",11),v(29,"div",12),ze(30,Cp,2,0,"button",13)(31,Tp,2,0,"button",14)(32,Ap,2,1,"button",15),w()()()),t&2&&(Q("ngIf",n.loading),L(8),mn("text-green-600",n.currentStep===1),L(),Q("ngClass",nn(19,Tc,n.currentStep===1,n.currentStep!==1)),L(4),Q("ngClass",nn(22,zu,n.currentStep>=2,n.currentStep<2)),L(),mn("text-green-600",n.currentStep===2),L(),Q("ngClass",nn(25,Tc,n.currentStep===2,n.currentStep!==2)),L(4),Q("ngClass",nn(28,zu,n.currentStep>=3,n.currentStep<3)),L(),mn("text-green-600",n.currentStep===3),L(),Q("ngClass",nn(31,Tc,n.currentStep===3,n.currentStep!==3)),L(4),Q("formGroup",n.productForm),L(),Q("ngIf",n.currentStep===1),L(),Q("ngIf",n.currentStep===2),L(),Q("ngIf",n.currentStep===3),L(2),Q("ngIf",n.currentStep>1),L(),Q("ngIf",n.currentStep<3),L(),Q("ngIf",n.currentStep===3))},dependencies:[Wo,ni,Ho,Go,Qn,zo,Du,Vo,ei,ti,Nu,Lu,Fu,Lt,gn,rn,In,Oi,Vr],styles:["@keyframes _ngcontent-%COMP%_progressFill{0%{width:0%}50%{width:70%}to{width:100%}}"]})};var Zo=class i{constructor(e,t,n,r,s){this.loginService=e;this.alertService=t;this.router=n;this.platformId=r;this.userInfo=s}loginData={email:"",password:""};login(){this.loginService.login(this.loginData).subscribe({next:()=>{this.alertService.showAlert("Login successful!","success"),this.userInfo.getUserRole()==="FARMER"?this.router.navigate(["components/product"]):this.router.navigate(["/buyer"])},error:()=>{this.alertService.showAlert("Login failed! Please check your credentials.","error")}})}testSuccess(){this.alertService.showAlert("Test success alert!","success")}testError(){this.alertService.showAlert("Test error alert!","error")}static \u0275fac=function(t){return new(t||i)(De(ki),De(Fn),De(_n),De(tn),De(Ot))};static \u0275cmp=Ct({type:i,selectors:[["app-login"]],decls:47,vars:2,consts:[[1,"min-h-[calc(100vh-120px)]","w-full","flex","flex-col","lg:flex-row","overflow-auto","pt-4","pb-4","bg-gray-50"],[1,"lg:w-[60%]","w-full","bg-gradient-to-br","from-green-100","to-green-200","p-8","md:p-12","flex","flex-col","justify-center","items-center","text-center","relative","overflow-hidden"],[1,"absolute","top-[-60px]","right-[-60px]","w-80","h-80","bg-green-300","rounded-full","opacity-30","blur-3xl","animate-pulse","z-0"],[1,"z-10"],[1,"text-4xl","md:text-5xl","font-extrabold","text-green-800","mb-4","md:mb-6","drop-shadow-lg"],[1,"text-gray-700","text-base","md:text-lg","max-w-md","md:max-w-xl","leading-relaxed","px-2","backdrop-blur-sm"],[1,"text-green-700","font-semibold"],["src","images/logo.jpg","alt","AgriMandi Logo",1,"w-32","md:w-48","mt-6","md:mt-10","shadow-md","rounded-full","border-4","border-white"],[1,"lg:w-[40%]","w-full","flex","items-center","justify-center","bg-white","relative","overflow-hidden"],[1,"w-full","max-w-sm","sm:max-w-md","px-6","sm:px-8","py-10","backdrop-blur-xl","bg-white/80","shadow-2xl","rounded-2xl","border","border-gray-200","transition-transform","duration-300","hover:scale-[1.01]","animate-fade-in-slide"],[1,"text-3xl","font-bold","text-center","text-green-700","mb-6"],[1,"space-y-5",3,"ngSubmit"],["for","email",1,"block","text-sm","font-semibold","text-gray-700","mb-1"],["type","email","id","email","name","email","required","",1,"w-full","px-4","py-2","border","border-gray-300","rounded-md","text-sm","focus:outline-none","focus:ring-2","focus:ring-green-500","shadow-sm",3,"ngModelChange","ngModel"],["for","password",1,"block","text-sm","font-semibold","text-gray-700","mb-1"],["type","password","id","password","name","password","required","",1,"w-full","px-4","py-2","border","border-gray-300","rounded-md","text-sm","focus:outline-none","focus:ring-2","focus:ring-green-500","shadow-sm",3,"ngModelChange","ngModel"],["type","submit",1,"w-full","py-2","bg-green-600","hover:bg-green-700","text-white","text-base","font-medium","rounded-md","transition","duration-200","shadow-md"],[1,"text-sm","text-gray-500","text-center","mt-4"],["href","auth/signup",1,"text-green-600","font-medium","hover:underline"],[1,"flex","items-center","justify-center","my-4"],[1,"w-full","h-px","bg-gray-300"],[1,"mx-4","text-sm","text-gray-500"],[1,"space-y-3"],["type","button",1,"w-full","flex","items-center","justify-center","gap-3","py-2","px-4","border","border-gray-300","rounded-md","shadow-sm","bg-white","hover:bg-gray-100","transition"],["src","https://www.svgrepo.com/show/475656/google-color.svg","alt","Google",1,"w-5","h-5"],[1,"text-sm","font-medium","text-gray-700"],["src","https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/facebook.svg","alt","Facebook",1,"w-5","h-5","fill-blue-600"]],template:function(t,n){t&1&&(v(0,"div",0)(1,"div",1),ce(2,"div",2),v(3,"div",3)(4,"h1",4),I(5,"\u{1F33F} AgriMandi"),w(),v(6,"p",5),I(7," Empowering farmers and buyers with seamless crop trading. "),ce(8,"br"),I(9," Join "),v(10,"strong",6),I(11,"AgriMandi"),w(),I(12," and grow with the future of smart agriculture. "),w(),ce(13,"img",7),w()(),v(14,"div",8)(15,"div",9)(16,"h2",10),I(17,"Login to AgriMandi"),w(),v(18,"form",11),Qe("ngSubmit",function(){return n.login()}),v(19,"div")(20,"label",12),I(21,"Email"),w(),v(22,"input",13),at("ngModelChange",function(s){return ot(n.loginData.email,s)||(n.loginData.email=s),s}),w()(),v(23,"div")(24,"label",14),I(25,"Password"),w(),v(26,"input",15),at("ngModelChange",function(s){return ot(n.loginData.password,s)||(n.loginData.password=s),s}),w()(),v(27,"button",16),I(28," Login "),w(),v(29,"p",17),I(30," Don\u2019t have an account? "),v(31,"a",18),I(32,"Sign up"),w()()(),v(33,"div",19),ce(34,"div",20),v(35,"span",21),I(36,"OR"),w(),ce(37,"div",20),w(),v(38,"div",22)(39,"button",23),ce(40,"img",24),v(41,"span",25),I(42,"Continue with Google"),w()(),v(43,"button",23),ce(44,"img",26),v(45,"span",25),I(46,"Continue with Facebook"),w()()()()()()),t&2&&(L(22),st("ngModel",n.loginData.email),L(4),st("ngModel",n.loginData.password))},dependencies:[Ln,ni,Qn,ei,ti,Br,Ui,Ni],encapsulation:2})};var Vt=class i{constructor(e,t,n){this.loginService=e;this.userInfoService=t;this.router=n}checkLogin(e){let t=this.loginService.getToken();if(!t||!this.loginService.isLoggedIn())return this.router.parseUrl("/auth/login");if(this.userInfoService.isTokenExpired(t))return this.loginService.logout(),this.router.parseUrl("/auth/login");if(e&&e.length>0){let n=this.userInfoService.getUserRole();if(!n||!e.includes(n))return this.router.parseUrl("/unauthorized")}return!0}canActivate(e,t){let n=e.data.roles;return this.checkLogin(n)}canActivateChild(e,t){let n=e.data.roles;return this.checkLogin(n)}canLoad(e,t){let n=e.data?.roles;return this.checkLogin(n)}static \u0275fac=function(t){return new(t||i)(Kn(ki),Kn(Ot),Kn(_n))};static \u0275prov=en({token:i,factory:i.\u0275fac,providedIn:"root"})};var Rp=(i,e,t)=>({"bg-green-100 text-green-700":i,"bg-yellow-100 text-yellow-700":e,"bg-red-100 text-red-700":t}),Ip=(i,e)=>({"bg-green-200 text-green-800":i,"bg-red-200 text-red-800":e});function Pp(i,e){i&1&&(v(0,"div",4)(1,"div",5)(2,"div",6),ce(3,"div",7)(4,"div",8),w(),v(5,"p",9),I(6," \u{1F331} Fetching your products... "),w(),v(7,"div",10),ce(8,"div",11),w()()())}function Dp(i,e){if(i&1&&(v(0,"div",14)(1,"h4",15),I(2),w(),v(3,"div",16)(4,"p")(5,"span",17),I(6,"Category:"),w(),I(7),w(),v(8,"p")(9,"span",17),I(10,"Grade:"),w(),I(11),w(),v(12,"p")(13,"span",17),I(14,"Quantity:"),w(),I(15),w(),v(16,"p")(17,"span",17),I(18,"Price/Unit:"),w(),I(19),w(),v(20,"p",18),I(21),w(),v(22,"p")(23,"span",17),I(24,"Status:"),w(),v(25,"span",19),I(26),w()(),v(27,"p")(28,"span",17),I(29,"Availability:"),w(),v(30,"span",20),I(31),w()()(),v(32,"div",21)(33,"button",22),I(34," Edit "),w(),v(35,"button",23),I(36," Delete "),w(),v(37,"button",24),I(38," Mark as Sold "),w()()()),i&2){let t=e.$implicit;L(2),wt(" ",t.name," "),L(5),wt(" ",t.category,""),L(4),wt(" ",t.grade,""),L(4),yu(" ",t.quantity," ",t.unit,""),L(4),wt(" \u20B9",t.pricePerUnit,""),L(2),wt(" Total: \u20B9",t.totalPrice," "),L(4),Q("ngClass",bu(11,Rp,t.status==="Approved",t.status==="Pending",t.status==="Rejected")),L(),wt(" ",t.status," "),L(4),Q("ngClass",nn(15,Ip,t.availability,!t.availability)),L(),wt(" ",t.availability?"Available":"Not Available"," ")}}function Lp(i,e){if(i&1&&(un(0),v(1,"div",12),ze(2,Dp,39,18,"div",13),w(),dn()),i&2){let t=_e();L(2),Q("ngForOf",t.products1)}}function Fp(i,e){if(i&1){let t=vt();v(0,"div",26)(1,"div",27),Fo(),v(2,"svg",28),ce(3,"path",29),w()(),No(),v(4,"p",30),I(5," No products found "),w(),v(6,"p",31),I(7," Add your first product to get started! "),w(),v(8,"button",32),Qe("click",function(){Ae(t);let r=_e(2);return Re(r.openAddProductPage())}),I(9," + Add Product "),w()()}}function Np(i,e){if(i&1&&ze(0,Fp,10,0,"div",25),i&2){let t=_e();Q("ngIf",!t.loading)}}var Jo=class i{constructor(e,t,n,r,s,o){this.router=e;this.productService=t;this.userService=n;this.alertService=r;this.userInfo=s;this.platformId=o;this.router.events.pipe(Pi(a=>a instanceof Li)).subscribe(()=>this.Collectlogindata())}ngOnInit(){this.Collectlogindata()}loading=!1;products1=[];loginData={isLoggedIn:!1,userName:"",userRole:"",userEmail:"",userid:0};Collectlogindata(){if(qt(this.platformId)){let e=this.userInfo.getToken();this.loginData={isLoggedIn:!!e,userName:this.userInfo.getUserName()||"",userRole:this.userInfo.getUserRole()||"",userEmail:this.userInfo.getUserEmail()||"",userid:this.userInfo.getUserId()||0};let t=this.loginData.userid,n=this.loginData.userEmail,r=this.loginData.userRole;t&&n&&r==="FARMER"&&this.getProducts(t,n)}}getProducts(e,t){this.loading=!0,this.productService.getProductByFarmerId(e,t).subscribe({next:n=>{this.products1=n,this.loading=!1},error:n=>{this.alertService.showAlert("Error fetching products: ",n.message),this.loading=!1}})}openAddProductPage(){this.router.navigate(["/components/product"])}static \u0275fac=function(t){return new(t||i)(De(_n),De(Hr),De(Gr),De(Fn),De(Ot),De(tn))};static \u0275cmp=Ct({type:i,selectors:[["app-self-productview"]],decls:6,vars:3,consts:[["noProducts",""],[1,"text-3xl","font-bold","mb-8","text-gray-900","dark:text-white","tracking-tight"],["class","fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md z-50",4,"ngIf"],[4,"ngIf","ngIfElse"],[1,"fixed","inset-0","flex","items-center","justify-center","bg-black","bg-opacity-50","backdrop-blur-md","z-50"],[1,"flex","flex-col","items-center","space-y-6"],[1,"relative"],[1,"w-20","h-20","rounded-full","border-4","border-transparent","border-t-green-500","animate-spin"],[1,"absolute","inset-0","rounded-full","border-4","border-green-400","opacity-30","blur-md"],[1,"text-white","text-lg","font-semibold","tracking-wide","animate-pulse"],[1,"w-48","h-2","bg-gray-700","rounded-full","overflow-hidden"],[1,"h-full","bg-green-500","animate-[progress_2s_infinite]"],[1,"grid","grid-cols-1","md:grid-cols-2","lg:grid-cols-3","gap-8"],["class","bg-white dark:bg-gray-800 shadow-md rounded-3xl p-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border border-gray-200 dark:border-gray-700",4,"ngFor","ngForOf"],[1,"bg-white","dark:bg-gray-800","shadow-md","rounded-3xl","p-6","transition-all","duration-300","hover:shadow-2xl","hover:-translate-y-1","border","border-gray-200","dark:border-gray-700"],[1,"text-xl","font-bold","text-gray-900","dark:text-white","mb-3"],[1,"text-gray-700","dark:text-gray-300","space-y-2","text-sm","md:text-base"],[1,"font-medium"],[1,"font-medium","text-gray-900","dark:text-gray-100"],[1,"ml-2","px-3","py-1","rounded-full","text-xs","font-semibold","tracking-wide",3,"ngClass"],[1,"ml-2","px-3","py-1","text-xs","font-semibold","rounded-full",3,"ngClass"],[1,"mt-6","flex","flex-wrap","gap-3"],[1,"px-4","py-2","bg-blue-600","text-white","text-sm","rounded-xl","shadow","hover:bg-blue-700","focus:ring-2","focus:ring-blue-400","transition"],[1,"px-4","py-2","bg-red-500","text-white","text-sm","rounded-xl","shadow","hover:bg-red-600","focus:ring-2","focus:ring-red-400","transition"],[1,"px-4","py-2","bg-green-600","text-white","text-sm","rounded-xl","shadow","hover:bg-green-700","focus:ring-2","focus:ring-green-400","transition"],["class","flex flex-col items-center justify-center py-16",4,"ngIf"],[1,"flex","flex-col","items-center","justify-center","py-16"],[1,"w-24","h-24","mb-6","text-gray-400"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke-width","1.5","stroke","currentColor",1,"w-full","h-full"],["stroke-linecap","round","stroke-linejoin","round","d","M21 12.75V6.75a2.25 2.25 0 00-2.25-2.25h-4.5A2.25 2.25 0 0012 6.75v6m0 0v6m0-6h6.75M12 12h-6.75"],[1,"text-lg","font-medium","text-gray-600","dark:text-gray-300"],[1,"text-sm","text-gray-400","dark:text-gray-500","mt-2"],[1,"mt-6","px-5","py-2","bg-green-600","text-white","rounded-xl","shadow","hover:bg-green-700","transition",3,"click"]],template:function(t,n){if(t&1&&(v(0,"h3",1),I(1,` Your Products
`),w(),ze(2,Pp,9,0,"div",2)(3,Lp,3,1,"ng-container",3)(4,Np,1,1,"ng-template",null,0,lr)),t&2){let r=Or(5);L(2),Q("ngIf",n.loading),L(),Q("ngIf",!n.loading&&n.products1.length>0)("ngIfElse",r)}},dependencies:[Lt,gn,rn,In,Ln],encapsulation:2})};var Ls=(i,e)=>({"bg-green-700 text-white shadow-md ring-2 ring-green-400":i,"bg-lime-100 text-green-800 hover:bg-lime-200":e}),Up=i=>({label:"Phone Number",value:i}),Op=i=>({label:"Alternate Contact",value:i}),kp=i=>({label:"Address",value:i}),Bp=i=>({label:"City",value:i}),zp=i=>({label:"State",value:i}),Vp=i=>({label:"Pincode",value:i}),Hp=i=>({label:"Land Area",value:i}),Gp=i=>({label:"Farming Type",value:i}),Gu=(i,e,t,n,r,s,o,a)=>[i,e,t,n,r,s,o,a],Wp=()=>({label:"Phone Number",name:"phoneNumber",type:"tel"}),Xp=()=>({label:"Address",name:"address"}),qp=()=>({label:"State",name:"state"}),Yp=()=>({label:"District",name:"district"}),$p=()=>({label:"Village",name:"village"}),jp=()=>({label:"Postal Code",name:"postalCode"}),Zp=()=>({label:"Land Area (in acres)",name:"landArea",type:"number"}),Jp=()=>({label:"Farming Type",name:"farmingType"}),Kp=i=>({background:i});function Qp(i,e){if(i&1){let t=vt();un(0),v(1,"button",8),Qe("click",function(){Ae(t);let r=_e();return Re(r.activeTab="farm")}),ce(2,"i",13),v(3,"span"),I(4,"Land & Crops"),w()(),v(5,"button",8),Qe("click",function(){Ae(t);let r=_e();return Re(r.activeTab="products")}),ce(6,"i",14),v(7,"span"),I(8,"Harvest Products"),w()(),dn()}if(i&2){let t=_e();L(),Q("ngClass",nn(2,Ls,t.activeTab==="farm",t.activeTab!=="farm")),L(4),Q("ngClass",nn(5,Ls,t.activeTab==="products",t.activeTab!=="products"))}}function em(i,e){if(i&1){let t=vt();v(0,"div",16)(1,"div",17)(2,"div",18)(3,"div",19)(4,"div",20),ce(5,"img",21),v(6,"div",22)(7,"label",23),ce(8,"i",24),v(9,"input",25),Qe("change",function(r){Ae(t);let s=_e(2);return Re(s.onFileSelect(r))}),w()()()(),v(10,"div",26)(11,"h2",27),I(12,"User Details"),w(),v(13,"div",28)(14,"p")(15,"span",29),I(16,"Name:"),w(),I(17),w(),v(18,"p")(19,"span",29),I(20,"Role:"),w(),I(21),w(),v(22,"p")(23,"span",29),I(24,"Email:"),w(),I(25),w()()()(),ce(26,"hr",30),w()()()}if(i&2){let t=_e(2);L(5),Q("src",t.profileImageUrl||t.defaultProfileImage,ar),L(12),wt(" ",t.loginData.userName," "),L(4),wt(" ",t.loginData.userRole," "),L(4),wt(" ",t.loginData.userEmail," ")}}function tm(i,e){if(i&1&&(v(0,"div"),ze(1,em,27,4,"div",15),w()),i&2){let t=_e(),n=Or(24);L(),Q("ngIf",t.loginData==null?null:t.loginData.isLoggedIn)("ngIfElse",n)}}function nm(i,e){i&1&&(v(0,"div",31),ce(1,"i",32),I(2," You are not logged in. "),w())}function im(i,e){i&1&&(v(0,"div"),ce(1,"app-self-productview"),w())}function rm(i,e){if(i&1){let t=vt();v(0,"div",42)(1,"div",43)(2,"h3",44),I(3,"Your Farmer Profile"),w(),v(4,"button",45),Qe("click",function(){Ae(t);let r=_e(3);return Re(r.onEditProfile())}),ce(5,"i",46),I(6," Edit Profile "),w()()()}}function sm(i,e){if(i&1&&(un(0),v(1,"div",47)(2,"p",48),I(3),w(),v(4,"p",49),I(5),w()(),dn()),i&2){let t=e.$implicit;L(3),wt("",t.label," "),L(2),ht(t.value||"N/A")}}function om(i,e){if(i&1){let t=vt();un(0),v(1,"div",50)(2,"label",51),I(3),w(),v(4,"input",52),at("ngModelChange",function(r){let s=Ae(t).$implicit,o=_e(3);return ot(o.farmerForm[s.name],r)||(o.farmerForm[s.name]=r),Re(r)}),w()(),dn()}if(i&2){let t=e.$implicit,n=_e(3);L(3),ht(t.label),L(),Uo("name",t.name),st("ngModel",n.farmerForm[t.name]),Q("type",t.type||"text")}}function am(i,e){if(i&1){let t=vt();v(0,"div"),ze(1,rm,7,0,"div",33),v(2,"div",34),ze(3,sm,6,2,"ng-container",35),w(),v(4,"div",36)(5,"h3",37),I(6,"Update Farmer Profile"),w(),v(7,"form",38,1),Qe("ngSubmit",function(){Ae(t);let r=_e(2);return Re(r.submitFarmerForm())}),ze(9,om,5,4,"ng-container",35),v(10,"div",39)(11,"button",40),ce(12,"i",41),I(13," Save Profile "),w()()()()()}if(i&2){let t=_e(2);L(),Q("ngIf",t.farmerData),L(2),Q("ngForOf",yc(20,Gu,Nt(4,Up,t.farmerData.phoneNumber),Nt(6,Op,t.farmerData.phoneNumber),Nt(8,kp,t.farmerData.address),Nt(10,Bp,t.farmerData.district),Nt(12,zp,t.farmerData.state),Nt(14,Vp,t.farmerData.postalCode),Nt(16,Hp,t.farmerData.landArea+" acres"),Nt(18,Gp,t.farmerData.farmingType))),L(6),Q("ngForOf",yc(37,Gu,Vn(29,Wp),Vn(30,Xp),Vn(31,qp),Vn(32,Yp),Vn(33,$p),Vn(34,jp),Vn(35,Zp),Vn(36,Jp))),L(2),Q("ngStyle",Nt(46,Kp,t.selectedColor))}}function lm(i,e){if(i&1&&(un(0),ze(1,im,2,0,"div",11)(2,am,14,48,"div",11),dn()),i&2){let t=_e();L(),Q("ngIf",t.activeTab==="products"),L(),Q("ngIf",t.activeTab==="personal")}}function cm(i,e){if(i&1){let t=vt();un(0),v(1,"h3",53),I(2,"Update Buyer Details"),w(),v(3,"form",54),Qe("ngSubmit",function(){Ae(t);let r=_e();return Re(r.submitBuyerForm())}),v(4,"div",50)(5,"label",51),I(6,"Contact Number"),w(),v(7,"input",55),at("ngModelChange",function(r){Ae(t);let s=_e();return ot(s.buyerForm.contactNumber,r)||(s.buyerForm.contactNumber=r),Re(r)}),w()(),v(8,"div",50)(9,"label",51),I(10,"Alternate Contact"),w(),v(11,"input",56),at("ngModelChange",function(r){Ae(t);let s=_e();return ot(s.buyerForm.alternateContact,r)||(s.buyerForm.alternateContact=r),Re(r)}),w()(),v(12,"div",50)(13,"label",51),I(14,"Address"),w(),v(15,"input",57),at("ngModelChange",function(r){Ae(t);let s=_e();return ot(s.buyerForm.address,r)||(s.buyerForm.address=r),Re(r)}),w()(),v(16,"div",50)(17,"label",51),I(18,"City"),w(),v(19,"input",58),at("ngModelChange",function(r){Ae(t);let s=_e();return ot(s.buyerForm.city,r)||(s.buyerForm.city=r),Re(r)}),w()(),v(20,"div",50)(21,"label",51),I(22,"State"),w(),v(23,"input",59),at("ngModelChange",function(r){Ae(t);let s=_e();return ot(s.buyerForm.state,r)||(s.buyerForm.state=r),Re(r)}),w()(),v(24,"div",50)(25,"label",51),I(26,"Pincode"),w(),v(27,"input",60),at("ngModelChange",function(r){Ae(t);let s=_e();return ot(s.buyerForm.pincode,r)||(s.buyerForm.pincode=r),Re(r)}),w()(),v(28,"div",50)(29,"label",51),I(30,"Country"),w(),v(31,"input",61),at("ngModelChange",function(r){Ae(t);let s=_e();return ot(s.buyerForm.country,r)||(s.buyerForm.country=r),Re(r)}),w()(),v(32,"div",50)(33,"label",51),I(34,"Company Name"),w(),v(35,"input",62),at("ngModelChange",function(r){Ae(t);let s=_e();return ot(s.buyerForm.companyName,r)||(s.buyerForm.companyName=r),Re(r)}),w()(),v(36,"div",50)(37,"label",51),I(38,"Company Type"),w(),v(39,"input",63),at("ngModelChange",function(r){Ae(t);let s=_e();return ot(s.buyerForm.companyType,r)||(s.buyerForm.companyType=r),Re(r)}),w()(),v(40,"div",50)(41,"label",51),I(42,"GST Number"),w(),v(43,"input",64),at("ngModelChange",function(r){Ae(t);let s=_e();return ot(s.buyerForm.gstNumber,r)||(s.buyerForm.gstNumber=r),Re(r)}),w()(),v(44,"div",50)(45,"label",51),I(46,"PAN Number"),w(),v(47,"input",65),at("ngModelChange",function(r){Ae(t);let s=_e();return ot(s.buyerForm.panNumber,r)||(s.buyerForm.panNumber=r),Re(r)}),w()(),v(48,"div",50)(49,"label",51),I(50,"Preferred Crops"),w(),v(51,"input",66),at("ngModelChange",function(r){Ae(t);let s=_e();return ot(s.buyerForm.preferredCrops,r)||(s.buyerForm.preferredCrops=r),Re(r)}),w()(),v(52,"div",50)(53,"label",51),I(54,"Budget Range"),w(),v(55,"input",67),at("ngModelChange",function(r){Ae(t);let s=_e();return ot(s.buyerForm.budgetRange,r)||(s.buyerForm.budgetRange=r),Re(r)}),w()(),v(56,"div",50)(57,"label",51),I(58,"Purchase Frequency"),w(),v(59,"input",68),at("ngModelChange",function(r){Ae(t);let s=_e();return ot(s.buyerForm.purchaseFrequency,r)||(s.buyerForm.purchaseFrequency=r),Re(r)}),w()(),v(60,"div",50)(61,"label",51),I(62,"Preferred Payment Method"),w(),v(63,"input",69),at("ngModelChange",function(r){Ae(t);let s=_e();return ot(s.buyerForm.preferredPaymentMethod,r)||(s.buyerForm.preferredPaymentMethod=r),Re(r)}),w()(),v(64,"div",50)(65,"label",51),I(66,"Geo Latitude"),w(),v(67,"input",70),at("ngModelChange",function(r){Ae(t);let s=_e();return ot(s.buyerForm.geoLat,r)||(s.buyerForm.geoLat=r),Re(r)}),w()(),v(68,"div",50)(69,"label",51),I(70,"Geo Longitude"),w(),v(71,"input",71),at("ngModelChange",function(r){Ae(t);let s=_e();return ot(s.buyerForm.geoLong,r)||(s.buyerForm.geoLong=r),Re(r)}),w()(),v(72,"div",50)(73,"label",51),I(74,"Total Orders"),w(),v(75,"input",72),at("ngModelChange",function(r){Ae(t);let s=_e();return ot(s.buyerForm.totalOrders,r)||(s.buyerForm.totalOrders=r),Re(r)}),w()(),v(76,"div",50)(77,"label",51),I(78,"Total Spent"),w(),v(79,"input",73),at("ngModelChange",function(r){Ae(t);let s=_e();return ot(s.buyerForm.totalSpent,r)||(s.buyerForm.totalSpent=r),Re(r)}),w()(),v(80,"div",50)(81,"label",51),I(82,"Loyalty Points"),w(),v(83,"input",74),at("ngModelChange",function(r){Ae(t);let s=_e();return ot(s.buyerForm.loyaltyPoints,r)||(s.buyerForm.loyaltyPoints=r),Re(r)}),w()(),v(84,"div",50)(85,"label",51),I(86,"Buyer Rating"),w(),v(87,"input",75),at("ngModelChange",function(r){Ae(t);let s=_e();return ot(s.buyerForm.buyerRating,r)||(s.buyerForm.buyerRating=r),Re(r)}),w()(),v(88,"div",50)(89,"label",51),I(90,"Last Purchase Date"),w(),v(91,"input",76),at("ngModelChange",function(r){Ae(t);let s=_e();return ot(s.buyerForm.lastPurchaseDate,r)||(s.buyerForm.lastPurchaseDate=r),Re(r)}),w()(),v(92,"div",39)(93,"button",77),ce(94,"i",78),I(95," Save Buyer Profile "),w()()(),dn()}if(i&2){let t=_e();L(7),st("ngModel",t.buyerForm.contactNumber),L(4),st("ngModel",t.buyerForm.alternateContact),L(4),st("ngModel",t.buyerForm.address),L(4),st("ngModel",t.buyerForm.city),L(4),st("ngModel",t.buyerForm.state),L(4),st("ngModel",t.buyerForm.pincode),L(4),st("ngModel",t.buyerForm.country),L(4),st("ngModel",t.buyerForm.companyName),L(4),st("ngModel",t.buyerForm.companyType),L(4),st("ngModel",t.buyerForm.gstNumber),L(4),st("ngModel",t.buyerForm.panNumber),L(4),st("ngModel",t.buyerForm.preferredCrops),L(4),st("ngModel",t.buyerForm.budgetRange),L(4),st("ngModel",t.buyerForm.purchaseFrequency),L(4),st("ngModel",t.buyerForm.preferredPaymentMethod),L(4),st("ngModel",t.buyerForm.geoLat),L(4),st("ngModel",t.buyerForm.geoLong),L(4),st("ngModel",t.buyerForm.totalOrders),L(4),st("ngModel",t.buyerForm.totalSpent),L(4),st("ngModel",t.buyerForm.loyaltyPoints),L(4),st("ngModel",t.buyerForm.buyerRating),L(4),st("ngModel",t.buyerForm.lastPurchaseDate)}}function hm(i,e){i&1&&(v(0,"div",79)(1,"h4",80),I(2,"You are not logged in."),w(),v(3,"p"),I(4,"Please log in to view your dashboard."),w()())}var Ko=class i{constructor(e,t,n,r,s,o,a){this.router=e;this.productService=t;this.userService=n;this.alertService=r;this.platformId=s;this.colorService=o;this.userInfo=a;this.router.events.pipe(Pi(l=>l instanceof Li)).subscribe(()=>this.Collectlogindata())}profileImageUrl="";defaultProfileImage="images/profile.jpeg";products1=[];buyerData={isVerified:!1,alternateContact:"",emailVerified:!1,phoneVerified:!1,address:"",city:"",state:"",country:"",pincode:"",geoLat:0,geoLong:0,companyName:"",companyType:"",gstNumber:"",panNumber:"",preferredCrops:"",budgetRange:"",purchaseFrequency:"",preferredPaymentMethod:"",lastPurchaseDate:"",totalOrders:0,totalSpent:0,loyaltyPoints:0,buyerRating:0};buyerid=0;loginData={isLoggedIn:!1,userName:"",userRole:"",userEmail:"",userid:0};activeTab="personal";isLoggedIn=!1;showBuyerForm=!1;buyerForm={user_id:0,contactNumber:"",alternateContact:"",emailVerified:!0,phoneVerified:!1,address:"",city:"",state:"",country:"India",pincode:"",geoLat:0,geoLong:0,companyName:"",companyType:"",gstNumber:"",panNumber:"",isVerified:!1,preferredCrops:"",budgetRange:"",purchaseFrequency:"",preferredPaymentMethod:"",lastPurchaseDate:new Date,totalOrders:0,totalSpent:0,loyaltyPoints:0,buyerRating:5};farmerForm={phoneNumber:null,address:null,state:null,district:null,village:null,postalCode:null,landArea:null,farmingType:"Conventional",farmerId:null};farmerData={name:"",email:"",phoneNumber:"",address:"",state:"",district:"",village:"",postalCode:"",landArea:0,farmingType:"",status:""};submitFarmerForm(){let e=this.loginData.userEmail,t=this.loginData.userName,n=Number(this.loginData.userid);e&&t&&n?this.userService.getFarmerId(e,t).subscribe({next:r=>{this.farmerForm.farmerId=Number(r);let s=Jn(ft({},this.farmerForm),{userId:n});this.userService.saveFarmer(s).subscribe({next:o=>{o.success?this.alertService.handleBackendResponse(o):alert("Unexpected response"),o.success?this.alertService.handleBackendResponse(o):alert("Unexpected response")},error:o=>{this.alertService.showAlert("Error saving farmer:",o),this.alertService.showAlert("Error saving farmer data","error")}})},error:r=>{this.alertService.showAlert("Error fetching farmer ID:","error"),this.alertService.showAlert("Could not fetch farmer ID","error")}}):this.alertService.showAlert("User information is missing. Please login again.","error")}fetchFarmerData(){this.userService.getFarmerData().subscribe({next:e=>{this.farmerData=e,console.log("Farmer data retrieved:",this.farmerData)},error:e=>{this.alertService.showAlert("Error fetching farmer data:","error")}})}selectedColor="";ngOnInit(){if(qt(this.platformId)){if(this.loginData){this.loginData.userRole==="FARMER"?this.fetchFarmerData():this.loginData.userRole==="BUYER"&&this.fetchbuyer_id();let e=Number(this.userInfo.getUserId());e&&this.getProfileImage(e)}this.colorService.selectedColor$.subscribe(e=>{this.selectedColor=e})}}fetchbuyer_id(){this.userService.Getbuyerid(this.loginData.userid).subscribe({next:e=>{this.buyerid=e,console.log("\u2705 Buyer ID retrieved:",this.buyerid),this.buyerid?this.fetchBuyerData():this.alertService.showAlert("\u274C Buyer ID is null or undefined","error")},error:e=>{this.alertService.showAlert("Error fetching buyer ID:",e)}})}fetchBuyerData(){this.userService.GetBuyerById(this.buyerid).subscribe({next:e=>{this.buyerData=e,console.log("\u2705 Buyer data retrieved:",this.buyerData)},error:e=>{this.alertService.showAlert("Error fetching buyer data:",e)}})}Collectlogindata(){if(qt(this.platformId)){let e=this.userInfo.getToken();this.loginData={isLoggedIn:!!e,userName:this.userInfo.getUserName()||"",userRole:this.userInfo.getUserRole()||"",userEmail:this.userInfo.getUserEmail()||"",userid:this.userInfo.getUserId()||0};let t=this.loginData.userid,n=this.loginData.userEmail,r=this.loginData.userRole;t&&n&&(r==="FARMER"&&this.fetchFarmerData(),this.buyerForm.user_id=t)}}openBuyerForm(){this.showBuyerForm=!0}submitBuyerForm(){this.userService.registerAsBuyer(this.buyerForm).subscribe({next:e=>{this.alertService.showAlert("Buyer registered successfully:","success"),this.alertService.showAlert("You are now registered as a Buyer!","success"),this.showBuyerForm=!1},error:e=>{this.alertService.showAlert("Error registering buyer:",e),this.alertService.showAlert("Error registering buyer","error")}})}saveProfileImage(e){if(qt(this.platformId)){let t=Number(this.userInfo.getUserId());t!==0&&e?this.userService.uploadProfileImage(e,t).subscribe({next:n=>{n.success?(this.alertService.showAlert("Profile image saved successfully.","success"),this.getProfileImage(t)):this.alertService.showAlert("Failed to save profile image.","error")},error:n=>{this.alertService.showAlert("Error saving profile image:",n)}}):this.alertService.showAlert("User ID is invalid or no file selected.","error")}}getProfileImage(e){this.userService.getProfileImage(e).subscribe({next:t=>{let n=new FileReader;n.onload=()=>{this.profileImageUrl=n.result},n.readAsDataURL(t)},error:t=>{console.error("Error fetching profile image:",t),this.profileImageUrl=this.defaultProfileImage}})}onFileSelect(e){let t=e.target.files[0];t&&this.saveProfileImage(t)}onEditProfile(){console.log("Edit Profile Clicked")}static \u0275fac=function(t){return new(t||i)(De(_n),De(Hr),De(Gr),De(Fn),De(tn),De(sn),De(Ot))};static \u0275cmp=Ct({type:i,selectors:[["app-profileview"]],decls:29,vars:16,consts:[["notLoggedIn",""],["farmerFormRef","ngForm"],[1,"container","mx-auto","p-4"],[1,"text-3xl","font-extrabold","text-green-800","mb-6","-ml-16","flex","items-center","gap-3"],[1,"bi","bi-person-badge-fill","text-green-600","text-2xl"],[1,"tracking-wide"],[1,"text-lime-600"],[1,"flex","flex-wrap","justify-start","gap-3","border-b","border-green-300","pb-3","mb-6"],[1,"px-6","py-2.5","rounded-full","text-sm","font-semibold","flex","items-center","gap-2","transition","duration-200","ease-in-out","focus:outline-none",3,"click","ngClass"],[1,"bi","bi-person-fill"],[1,"bi","bi-geo-alt-fill"],[4,"ngIf"],[1,"bi","bi-truck"],[1,"bi","bi-tree-fill"],[1,"bi","bi-basket-fill"],["class","container-fluid px-4 py-5",4,"ngIf","ngIfElse"],[1,"container-fluid","px-4","py-5"],[1,"row"],[1,"w-full","bg-white/80","dark:bg-gray-800/80","backdrop-blur-lg","rounded-3xl","shadow-xl","border","border-gray-200","dark:border-gray-700","p-8","mt-5"],[1,"grid","grid-cols-1","md:grid-cols-3","gap-8","items-center"],[1,"relative","mx-auto","md:mx-0","w-48","h-48","group"],["alt","Profile Image",1,"w-full","h-full","object-cover","rounded-full","border-4","border-white","shadow-lg","transition","duration-300","group-hover:brightness-75",3,"src"],[1,"absolute","inset-0","flex","items-center","justify-center","bg-black/50","rounded-full","opacity-0","group-hover:opacity-100","transition-opacity","duration-300"],[1,"text-white","cursor-pointer","flex","flex-col","items-center"],[1,"bi","bi-camera-fill","text-3xl","mb-1"],["type","file","hidden","",3,"change"],[1,"md:col-span-2","text-center","md:text-left","space-y-4"],[1,"text-3xl","font-bold","text-gray-800","dark:text-gray-100"],[1,"text-lg","text-gray-700","dark:text-gray-300","space-y-2"],[1,"font-medium","text-gray-900","dark:text-gray-100"],[1,"my-5"],[1,"alert","alert-warning","text-center","p-4","shadow-sm","rounded"],[1,"bi","bi-exclamation-triangle-fill","me-2"],["class","mt-10",4,"ngIf"],[1,"grid","grid-cols-1","sm:grid-cols-2","md:grid-cols-3","gap-6"],[4,"ngFor","ngForOf"],[1,"card","shadow","border-0","rounded-4","p-4","my-5"],[1,"mb-4","text-center","fw-bold","text-success"],["novalidate","",1,"row","g-3","needs-validation",3,"ngSubmit"],[1,"col-12","text-center","mt-3"],["type","submit",1,"btn","px-5","py-2","fs-5","rounded-pill","shadow-sm","text-white","border-0",3,"ngStyle"],[1,"bi","bi-check-circle","me-2"],[1,"mt-10"],[1,"flex","items-center","justify-between","mb-6"],[1,"text-3xl","font-semibold","text-gray-800","dark:text-white"],[1,"bg-green-600","hover:bg-green-700","text-white","px-5","py-2","rounded-lg","shadow-md","transition","duration-300",3,"click"],[1,"bi","bi-pencil-square","mr-2"],[1,"bg-white","dark:bg-gray-800","border","border-gray-200","dark:border-gray-700","rounded-2xl","shadow-sm","p-4","transition","duration-300","hover:shadow-md"],[1,"text-sm","text-gray-500","dark:text-gray-400","uppercase","tracking-wide","font-medium"],[1,"mt-1","text-lg","font-semibold","text-gray-800","dark:text-white"],[1,"col-md-4"],[1,"form-label","fw-semibold"],["required","",1,"form-control","rounded-3",3,"ngModelChange","ngModel","name","type"],[1,"text-3xl","mb-4","fw-semibold"],[1,"row","g-3",3,"ngSubmit"],["name","contactNumber","required","",1,"form-control","rounded-3",3,"ngModelChange","ngModel"],["name","alternateContact",1,"form-control",3,"ngModelChange","ngModel"],["name","address","required","",1,"form-control",3,"ngModelChange","ngModel"],["name","city",1,"form-control",3,"ngModelChange","ngModel"],["name","state",1,"form-control",3,"ngModelChange","ngModel"],["name","pincode",1,"form-control",3,"ngModelChange","ngModel"],["name","country",1,"form-control",3,"ngModelChange","ngModel"],["name","companyName",1,"form-control",3,"ngModelChange","ngModel"],["name","companyType",1,"form-control",3,"ngModelChange","ngModel"],["name","gstNumber",1,"form-control",3,"ngModelChange","ngModel"],["name","panNumber",1,"form-control",3,"ngModelChange","ngModel"],["name","preferredCrops",1,"form-control",3,"ngModelChange","ngModel"],["name","budgetRange",1,"form-control",3,"ngModelChange","ngModel"],["name","purchaseFrequency",1,"form-control",3,"ngModelChange","ngModel"],["name","preferredPaymentMethod",1,"form-control",3,"ngModelChange","ngModel"],["type","number","name","geoLat",1,"form-control",3,"ngModelChange","ngModel"],["type","number","name","geoLong",1,"form-control",3,"ngModelChange","ngModel"],["type","number","name","totalOrders",1,"form-control",3,"ngModelChange","ngModel"],["type","number","name","totalSpent",1,"form-control",3,"ngModelChange","ngModel"],["type","number","name","loyaltyPoints",1,"form-control",3,"ngModelChange","ngModel"],["type","number","name","buyerRating","step","0.1",1,"form-control",3,"ngModelChange","ngModel"],["type","date","name","lastPurchaseDate",1,"form-control",3,"ngModelChange","ngModel"],["type","submit",1,"btn","btn-primary","px-5","py-2","fs-5","rounded-pill","shadow-sm"],[1,"bi","bi-save2","me-2"],[1,"text-center","mt-5"],[1,"text-danger"]],template:function(t,n){if(t&1){let r=vt();v(0,"div",2)(1,"h2",3),ce(2,"i",4),v(3,"span",5),I(4,"My "),v(5,"span",6),I(6,"AgriMandi"),w(),I(7," Profile"),w()()(),v(8,"div",7)(9,"button",8),Qe("click",function(){return Ae(r),Re(n.activeTab="personal")}),ce(10,"i",9),v(11,"span"),I(12,"My Profile"),w()(),v(13,"button",8),Qe("click",function(){return Ae(r),Re(n.activeTab="address")}),ce(14,"i",10),v(15,"span"),I(16,"Farm Address"),w()(),ze(17,Qp,9,8,"ng-container",11),v(18,"button",8),Qe("click",function(){return Ae(r),Re(n.activeTab="orders")}),ce(19,"i",12),v(20,"span"),I(21,"Order Requests"),w()()(),ze(22,tm,2,2,"div",11)(23,nm,3,0,"ng-template",null,0,lr)(25,lm,3,2,"ng-container",11)(26,cm,96,22,"ng-container",11)(27,hm,5,0,"ng-template",null,0,lr)}t&2&&(L(9),Q("ngClass",nn(7,Ls,n.activeTab==="personal",n.activeTab!=="personal")),L(4),Q("ngClass",nn(10,Ls,n.activeTab==="address",n.activeTab!=="address")),L(4),Q("ngIf",n.loginData.userRole==="FARMER"),L(),Q("ngClass",nn(13,Ls,n.activeTab==="orders",n.activeTab!=="orders")),L(4),Q("ngIf",n.activeTab==="personal"),L(3),Q("ngIf",n.loginData.userRole==="FARMER"),L(),Q("ngIf",n.loginData.userRole==="BUYER"||n.showBuyerForm))},dependencies:[Lt,gn,rn,In,Pn,Ln,ni,Qn,zo,ei,ti,Br,Ui,Ni,Jo],encapsulation:2})};var Wu=[{path:"",component:$o},{path:"auth/signup",component:qo},{path:"auth/login",component:Zo},{path:"components/product",component:jo,canActivate:[Vt],data:{roles:["FARMER","BUYER","ADMIN"]}},{path:"components/profileview",component:Ko,canActivate:[Vt],data:{roles:["FARMER","BUYER","ADMIN"]}},{path:"products",loadComponent:()=>import("./chunk-GSTTYURD.js").then(i=>i.ProductinventoryComponent),canActivate:[Vt],data:{roles:["FARMER","BUYER","ADMIN"]}},{path:"products/:productid",loadComponent:()=>import("./chunk-GQUJP276.js").then(i=>i.SingleProductViewComponent),canActivate:[Vt],data:{roles:["FARMER","BUYER","ADMIN"]}},{path:"buyer",loadComponent:()=>import("./chunk-WOAXZ3NO.js").then(i=>i.BuyerComponent),canActivate:[Vt],data:{roles:["FARMER","BUYER","ADMIN"]}},{path:"buyer/:buyerid",loadComponent:()=>import("./chunk-WPFMMHKU.js").then(i=>i.SingelbuyerviewComponent),canActivate:[Vt],data:{roles:["FARMER","BUYER","ADMIN"]}},{path:"notifications",loadComponent:()=>import("./chunk-ZLQED3FX.js").then(i=>i.NotificationComponent),canActivate:[Vt],data:{roles:["FARMER","BUYER","ADMIN"]}},{path:"orders",loadComponent:()=>import("./chunk-6O5M7L6X.js").then(i=>i.OrdersComponent),canActivate:[Vt],data:{roles:["FARMER","BUYER","ADMIN"]}},{path:"payments",loadComponent:()=>import("./chunk-CYDOC45Q.js").then(i=>i.PaymentsComponent),canActivate:[Vt],data:{roles:["FARMER","BUYER","ADMIN"]}},{path:"messages",loadComponent:()=>import("./chunk-EBNAXCCP.js").then(i=>i.MessageComponent),canActivate:[Vt],data:{roles:["BUYER","FARMER","ADMIN"]}},{path:"help-center",loadComponent:()=>import("./chunk-RM5KQO3V.js").then(i=>i.HelpCenterComponent),canActivate:[Vt],data:{roles:["BUYER","FARMER","ADMIN"]}},{path:"mandi-rates",loadComponent:()=>import("./chunk-ECG2LXQ7.js").then(i=>i.MandiRatesComponent),canActivate:[Vt],data:{roles:["FARMER","BUYER","ADMIN"]}},{path:"farmers",loadComponent:()=>import("./chunk-BAXAKLMT.js").then(i=>i.FarmersComponent),canActivate:[Vt],data:{roles:["FARMER","BUYER","ADMIN"]}},{path:"reports",loadComponent:()=>import("./chunk-B7CZEPAY.js").then(i=>i.ReportsComponent),canActivate:[Vt],data:{roles:["FARMER","BUYER","ADMIN"]}},{path:"settings",loadComponent:()=>import("./chunk-NPAHJU2O.js").then(i=>i.SettingComponent),canActivate:[Vt],data:{roles:["ADMIN","BUYER","FARMER"]}},{path:"product-buy",loadComponent:()=>import("./chunk-M6YN7XJK.js").then(i=>i.ProductBuyComponent),canActivate:[Vt],data:{roles:["ADMIN","BUYER","FARMER"]}},{path:"**",redirectTo:""}];var Ac=new pu("TRANSLATE_HTTP_LOADER_CONFIG"),um=(()=>{class i{http;config;constructor(){this.config=ft({prefix:"/assets/i18n/",suffix:".json",enforceLoading:!1,useHttpBackend:!1},Lo(Ac)),this.http=this.config.useHttpBackend?new Di(Lo(bc)):Lo(Di)}getTranslation(t){let n=this.config.enforceLoading?`?enforceLoading=${Date.now()}`:"";return this.http.get(`${this.config.prefix}${t}${this.config.suffix}${n}`)}static \u0275fac=function(n){return new(n||i)};static \u0275prov=en({token:i,factory:i.\u0275fac})}return i})();function Xu(i={}){let e=i.useHttpBackend??!1;return[{provide:Ac,useValue:i},{provide:Ou,useClass:um,deps:[e?bc:Di,Ac]}]}var qu={providers:[Su({eventCoalescing:!0}),Pu(Wu),Au(),Eu(Cu([])),mu(Ln,Wo,Oi.forRoot()),...Xu({prefix:"./assets/i18n/",suffix:".json"})]};var on=class{sidebarVisibleSubject=new Nr(!1);sidebarVisible$=this.sidebarVisibleSubject.asObservable();setSidebarVisible(e){this.sidebarVisibleSubject.next(e)}toggleSidebar(){this.sidebarVisibleSubject.next(!this.sidebarVisibleSubject.value)}getSidebarVisible(){return this.sidebarVisibleSubject.value}};_c(on,"\u0275fac",function(t){return new(t||on)}),_c(on,"\u0275prov",en({token:on,factory:on.\u0275fac,providedIn:"root"})),on=cu([gu({providedIn:"root"})],on);var yn=class extends Error{constructor(e,t){let n=new.target.prototype;super(`${e}: Status code '${t}'`),this.statusCode=t,this.__proto__=n}},Bi=class extends Error{constructor(e="A timeout occurred."){let t=new.target.prototype;super(e),this.__proto__=t}},Yt=class extends Error{constructor(e="An abort occurred."){let t=new.target.prototype;super(e),this.__proto__=t}},Qo=class extends Error{constructor(e,t){let n=new.target.prototype;super(e),this.transport=t,this.errorType="UnsupportedTransportError",this.__proto__=n}},ea=class extends Error{constructor(e,t){let n=new.target.prototype;super(e),this.transport=t,this.errorType="DisabledTransportError",this.__proto__=n}},ta=class extends Error{constructor(e,t){let n=new.target.prototype;super(e),this.transport=t,this.errorType="FailedToStartTransportError",this.__proto__=n}},Fs=class extends Error{constructor(e){let t=new.target.prototype;super(e),this.errorType="FailedToNegotiateWithServerError",this.__proto__=t}},na=class extends Error{constructor(e,t){let n=new.target.prototype;super(e),this.innerErrors=t,this.__proto__=n}};var Wr=class{constructor(e,t,n){this.statusCode=e,this.statusText=t,this.content=n}},ri=class{get(e,t){return this.send(Jn(ft({},t),{method:"GET",url:e}))}post(e,t){return this.send(Jn(ft({},t),{method:"POST",url:e}))}delete(e,t){return this.send(Jn(ft({},t),{method:"DELETE",url:e}))}getCookieString(e){return""}};var $=function(i){return i[i.Trace=0]="Trace",i[i.Debug=1]="Debug",i[i.Information=2]="Information",i[i.Warning=3]="Warning",i[i.Error=4]="Error",i[i.Critical=5]="Critical",i[i.None=6]="None",i}($||{});var si=class{constructor(){}log(e,t){}};si.instance=new si;var dm="8.0.7",bt=class{static isRequired(e,t){if(e==null)throw new Error(`The '${t}' argument is required.`)}static isNotEmpty(e,t){if(!e||e.match(/^\s*$/))throw new Error(`The '${t}' argument should not be empty.`)}static isIn(e,t,n){if(!(e in t))throw new Error(`Unknown ${n} value: ${e}.`)}},St=class i{static get isBrowser(){return!i.isNode&&typeof window=="object"&&typeof window.document=="object"}static get isWebWorker(){return!i.isNode&&typeof self=="object"&&"importScripts"in self}static get isReactNative(){return!i.isNode&&typeof window=="object"&&typeof window.document>"u"}static get isNode(){return typeof process<"u"&&process.release&&process.release.name==="node"}};function zi(i,e){let t="";return Gn(i)?(t=`Binary data of length ${i.byteLength}`,e&&(t+=`. Content: '${fm(i)}'`)):typeof i=="string"&&(t=`String data of length ${i.length}`,e&&(t+=`. Content: '${i}'`)),t}function fm(i){let e=new Uint8Array(i),t="";return e.forEach(n=>{let r=n<16?"0":"";t+=`0x${r}${n.toString(16)} `}),t.substr(0,t.length-1)}function Gn(i){return i&&typeof ArrayBuffer<"u"&&(i instanceof ArrayBuffer||i.constructor&&i.constructor.name==="ArrayBuffer")}function ra(i,e,t,n,r,s){return nt(this,null,function*(){let o={},[a,l]=oi();o[a]=l,i.log($.Trace,`(${e} transport) sending data. ${zi(r,s.logMessageContent)}.`);let c=Gn(r)?"arraybuffer":"text",h=yield t.post(n,{content:r,headers:ft(ft({},o),s.headers),responseType:c,timeout:s.timeout,withCredentials:s.withCredentials});i.log($.Trace,`(${e} transport) request complete. Response status: ${h.statusCode}.`)})}function Yu(i){return i===void 0?new ur($.Information):i===null?si.instance:i.log!==void 0?i:new ur(i)}var ia=class{constructor(e,t){this._subject=e,this._observer=t}dispose(){let e=this._subject.observers.indexOf(this._observer);e>-1&&this._subject.observers.splice(e,1),this._subject.observers.length===0&&this._subject.cancelCallback&&this._subject.cancelCallback().catch(t=>{})}},ur=class{constructor(e){this._minLevel=e,this.out=console}log(e,t){if(e>=this._minLevel){let n=`[${new Date().toISOString()}] ${$[e]}: ${t}`;switch(e){case $.Critical:case $.Error:this.out.error(n);break;case $.Warning:this.out.warn(n);break;case $.Information:this.out.info(n);break;default:this.out.log(n);break}}}};function oi(){let i="X-SignalR-User-Agent";return St.isNode&&(i="User-Agent"),[i,pm(dm,mm(),_m(),gm())]}function pm(i,e,t,n){let r="Microsoft SignalR/",s=i.split(".");return r+=`${s[0]}.${s[1]}`,r+=` (${i}; `,e&&e!==""?r+=`${e}; `:r+="Unknown OS; ",r+=`${t}`,n?r+=`; ${n}`:r+="; Unknown Runtime Version",r+=")",r}function mm(){if(St.isNode)switch(process.platform){case"win32":return"Windows NT";case"darwin":return"macOS";case"linux":return"Linux";default:return process.platform}else return""}function gm(){if(St.isNode)return process.versions.node}function _m(){return St.isNode?"NodeJS":"Browser"}function sa(i){return i.stack?i.stack:i.message?i.message:`${i}`}function $u(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("could not find global")}var oa=class extends ri{constructor(e){if(super(),this._logger=e,typeof fetch>"u"||St.isNode){let t=typeof __webpack_require__=="function"?__non_webpack_require__:Lr;this._jar=new(t("tough-cookie")).CookieJar,typeof fetch>"u"?this._fetchType=t("node-fetch"):this._fetchType=fetch,this._fetchType=t("fetch-cookie")(this._fetchType,this._jar)}else this._fetchType=fetch.bind($u());if(typeof AbortController>"u"){let t=typeof __webpack_require__=="function"?__non_webpack_require__:Lr;this._abortControllerType=t("abort-controller")}else this._abortControllerType=AbortController}send(e){return nt(this,null,function*(){if(e.abortSignal&&e.abortSignal.aborted)throw new Yt;if(!e.method)throw new Error("No method defined.");if(!e.url)throw new Error("No url defined.");let t=new this._abortControllerType,n;e.abortSignal&&(e.abortSignal.onabort=()=>{t.abort(),n=new Yt});let r=null;if(e.timeout){let l=e.timeout;r=setTimeout(()=>{t.abort(),this._logger.log($.Warning,"Timeout from HTTP request."),n=new Bi},l)}e.content===""&&(e.content=void 0),e.content&&(e.headers=e.headers||{},Gn(e.content)?e.headers["Content-Type"]="application/octet-stream":e.headers["Content-Type"]="text/plain;charset=UTF-8");let s;try{s=yield this._fetchType(e.url,{body:e.content,cache:"no-cache",credentials:e.withCredentials===!0?"include":"same-origin",headers:ft({"X-Requested-With":"XMLHttpRequest"},e.headers),method:e.method,mode:"cors",redirect:"follow",signal:t.signal})}catch(l){throw n||(this._logger.log($.Warning,`Error from HTTP request. ${l}.`),l)}finally{r&&clearTimeout(r),e.abortSignal&&(e.abortSignal.onabort=null)}if(!s.ok){let l=yield ju(s,"text");throw new yn(l||s.statusText,s.status)}let a=yield ju(s,e.responseType);return new Wr(s.status,s.statusText,a)})}getCookieString(e){let t="";return St.isNode&&this._jar&&this._jar.getCookies(e,(n,r)=>t=r.join("; ")),t}};function ju(i,e){let t;switch(e){case"arraybuffer":t=i.arrayBuffer();break;case"text":t=i.text();break;case"blob":case"document":case"json":throw new Error(`${e} is not supported.`);default:t=i.text();break}return t}var aa=class extends ri{constructor(e){super(),this._logger=e}send(e){return e.abortSignal&&e.abortSignal.aborted?Promise.reject(new Yt):e.method?e.url?new Promise((t,n)=>{let r=new XMLHttpRequest;r.open(e.method,e.url,!0),r.withCredentials=e.withCredentials===void 0?!0:e.withCredentials,r.setRequestHeader("X-Requested-With","XMLHttpRequest"),e.content===""&&(e.content=void 0),e.content&&(Gn(e.content)?r.setRequestHeader("Content-Type","application/octet-stream"):r.setRequestHeader("Content-Type","text/plain;charset=UTF-8"));let s=e.headers;s&&Object.keys(s).forEach(o=>{r.setRequestHeader(o,s[o])}),e.responseType&&(r.responseType=e.responseType),e.abortSignal&&(e.abortSignal.onabort=()=>{r.abort(),n(new Yt)}),e.timeout&&(r.timeout=e.timeout),r.onload=()=>{e.abortSignal&&(e.abortSignal.onabort=null),r.status>=200&&r.status<300?t(new Wr(r.status,r.statusText,r.response||r.responseText)):n(new yn(r.response||r.responseText||r.statusText,r.status))},r.onerror=()=>{this._logger.log($.Warning,`Error from HTTP request. ${r.status}: ${r.statusText}.`),n(new yn(r.statusText,r.status))},r.ontimeout=()=>{this._logger.log($.Warning,"Timeout from HTTP request."),n(new Bi)},r.send(e.content)}):Promise.reject(new Error("No url defined.")):Promise.reject(new Error("No method defined."))}};var la=class extends ri{constructor(e){if(super(),typeof fetch<"u"||St.isNode)this._httpClient=new oa(e);else if(typeof XMLHttpRequest<"u")this._httpClient=new aa(e);else throw new Error("No usable HttpClient found.")}send(e){return e.abortSignal&&e.abortSignal.aborted?Promise.reject(new Yt):e.method?e.url?this._httpClient.send(e):Promise.reject(new Error("No url defined.")):Promise.reject(new Error("No method defined."))}getCookieString(e){return this._httpClient.getCookieString(e)}};var bn=class i{static write(e){return`${e}${i.RecordSeparator}`}static parse(e){if(e[e.length-1]!==i.RecordSeparator)throw new Error("Message is incomplete.");let t=e.split(i.RecordSeparator);return t.pop(),t}};bn.RecordSeparatorCode=30;bn.RecordSeparator=String.fromCharCode(bn.RecordSeparatorCode);var ca=class{writeHandshakeRequest(e){return bn.write(JSON.stringify(e))}parseHandshakeResponse(e){let t,n;if(Gn(e)){let a=new Uint8Array(e),l=a.indexOf(bn.RecordSeparatorCode);if(l===-1)throw new Error("Message is incomplete.");let c=l+1;t=String.fromCharCode.apply(null,Array.prototype.slice.call(a.slice(0,c))),n=a.byteLength>c?a.slice(c).buffer:null}else{let a=e,l=a.indexOf(bn.RecordSeparator);if(l===-1)throw new Error("Message is incomplete.");let c=l+1;t=a.substring(0,c),n=a.length>c?a.substring(c):null}let r=bn.parse(t),s=JSON.parse(r[0]);if(s.type)throw new Error("Expected a handshake response from the server.");return[n,s]}};var Ke=function(i){return i[i.Invocation=1]="Invocation",i[i.StreamItem=2]="StreamItem",i[i.Completion=3]="Completion",i[i.StreamInvocation=4]="StreamInvocation",i[i.CancelInvocation=5]="CancelInvocation",i[i.Ping=6]="Ping",i[i.Close=7]="Close",i[i.Ack=8]="Ack",i[i.Sequence=9]="Sequence",i}(Ke||{});var ha=class{constructor(){this.observers=[]}next(e){for(let t of this.observers)t.next(e)}error(e){for(let t of this.observers)t.error&&t.error(e)}complete(){for(let e of this.observers)e.complete&&e.complete()}subscribe(e){return this.observers.push(e),new ia(this,e)}};var ua=class{constructor(e,t,n){this._bufferSize=1e5,this._messages=[],this._totalMessageCount=0,this._waitForSequenceMessage=!1,this._nextReceivingSequenceId=1,this._latestReceivedSequenceId=0,this._bufferedByteCount=0,this._reconnectInProgress=!1,this._protocol=e,this._connection=t,this._bufferSize=n}_send(e){return nt(this,null,function*(){let t=this._protocol.writeMessage(e),n=Promise.resolve();if(this._isInvocationMessage(e)){this._totalMessageCount++;let r=()=>{},s=()=>{};Gn(t)?this._bufferedByteCount+=t.byteLength:this._bufferedByteCount+=t.length,this._bufferedByteCount>=this._bufferSize&&(n=new Promise((o,a)=>{r=o,s=a})),this._messages.push(new Ic(t,this._totalMessageCount,r,s))}try{this._reconnectInProgress||(yield this._connection.send(t))}catch{this._disconnected()}yield n})}_ack(e){let t=-1;for(let n=0;n<this._messages.length;n++){let r=this._messages[n];if(r._id<=e.sequenceId)t=n,Gn(r._message)?this._bufferedByteCount-=r._message.byteLength:this._bufferedByteCount-=r._message.length,r._resolver();else if(this._bufferedByteCount<this._bufferSize)r._resolver();else break}t!==-1&&(this._messages=this._messages.slice(t+1))}_shouldProcessMessage(e){if(this._waitForSequenceMessage)return e.type!==Ke.Sequence?!1:(this._waitForSequenceMessage=!1,!0);if(!this._isInvocationMessage(e))return!0;let t=this._nextReceivingSequenceId;return this._nextReceivingSequenceId++,t<=this._latestReceivedSequenceId?(t===this._latestReceivedSequenceId&&this._ackTimer(),!1):(this._latestReceivedSequenceId=t,this._ackTimer(),!0)}_resetSequence(e){if(e.sequenceId>this._nextReceivingSequenceId){this._connection.stop(new Error("Sequence ID greater than amount of messages we've received."));return}this._nextReceivingSequenceId=e.sequenceId}_disconnected(){this._reconnectInProgress=!0,this._waitForSequenceMessage=!0}_resend(){return nt(this,null,function*(){let e=this._messages.length!==0?this._messages[0]._id:this._totalMessageCount+1;yield this._connection.send(this._protocol.writeMessage({type:Ke.Sequence,sequenceId:e}));let t=this._messages;for(let n of t)yield this._connection.send(n._message);this._reconnectInProgress=!1})}_dispose(e){e??(e=new Error("Unable to reconnect to server."));for(let t of this._messages)t._rejector(e)}_isInvocationMessage(e){switch(e.type){case Ke.Invocation:case Ke.StreamItem:case Ke.Completion:case Ke.StreamInvocation:case Ke.CancelInvocation:return!0;case Ke.Close:case Ke.Sequence:case Ke.Ping:case Ke.Ack:return!1}}_ackTimer(){this._ackTimerHandle===void 0&&(this._ackTimerHandle=setTimeout(()=>nt(this,null,function*(){try{this._reconnectInProgress||(yield this._connection.send(this._protocol.writeMessage({type:Ke.Ack,sequenceId:this._latestReceivedSequenceId})))}catch{}clearTimeout(this._ackTimerHandle),this._ackTimerHandle=void 0}),1e3))}},Ic=class{constructor(e,t,n,r){this._message=e,this._id=t,this._resolver=n,this._rejector=r}};var xm=30*1e3,vm=15*1e3,ym=1e5,At=function(i){return i.Disconnected="Disconnected",i.Connecting="Connecting",i.Connected="Connected",i.Disconnecting="Disconnecting",i.Reconnecting="Reconnecting",i}(At||{}),da=class i{static create(e,t,n,r,s,o,a){return new i(e,t,n,r,s,o,a)}constructor(e,t,n,r,s,o,a){this._nextKeepAlive=0,this._freezeEventListener=()=>{this._logger.log($.Warning,"The page is being frozen, this will likely lead to the connection being closed and messages being lost. For more information see the docs at https://learn.microsoft.com/aspnet/core/signalr/javascript-client#bsleep")},bt.isRequired(e,"connection"),bt.isRequired(t,"logger"),bt.isRequired(n,"protocol"),this.serverTimeoutInMilliseconds=s??xm,this.keepAliveIntervalInMilliseconds=o??vm,this._statefulReconnectBufferSize=a??ym,this._logger=t,this._protocol=n,this.connection=e,this._reconnectPolicy=r,this._handshakeProtocol=new ca,this.connection.onreceive=l=>this._processIncomingData(l),this.connection.onclose=l=>this._connectionClosed(l),this._callbacks={},this._methods={},this._closedCallbacks=[],this._reconnectingCallbacks=[],this._reconnectedCallbacks=[],this._invocationId=0,this._receivedHandshakeResponse=!1,this._connectionState=At.Disconnected,this._connectionStarted=!1,this._cachedPingMessage=this._protocol.writeMessage({type:Ke.Ping})}get state(){return this._connectionState}get connectionId(){return this.connection&&this.connection.connectionId||null}get baseUrl(){return this.connection.baseUrl||""}set baseUrl(e){if(this._connectionState!==At.Disconnected&&this._connectionState!==At.Reconnecting)throw new Error("The HubConnection must be in the Disconnected or Reconnecting state to change the url.");if(!e)throw new Error("The HubConnection url must be a valid url.");this.connection.baseUrl=e}start(){return this._startPromise=this._startWithStateTransitions(),this._startPromise}_startWithStateTransitions(){return nt(this,null,function*(){if(this._connectionState!==At.Disconnected)return Promise.reject(new Error("Cannot start a HubConnection that is not in the 'Disconnected' state."));this._connectionState=At.Connecting,this._logger.log($.Debug,"Starting HubConnection.");try{yield this._startInternal(),St.isBrowser&&window.document.addEventListener("freeze",this._freezeEventListener),this._connectionState=At.Connected,this._connectionStarted=!0,this._logger.log($.Debug,"HubConnection connected successfully.")}catch(e){return this._connectionState=At.Disconnected,this._logger.log($.Debug,`HubConnection failed to start successfully because of error '${e}'.`),Promise.reject(e)}})}_startInternal(){return nt(this,null,function*(){this._stopDuringStartError=void 0,this._receivedHandshakeResponse=!1;let e=new Promise((t,n)=>{this._handshakeResolver=t,this._handshakeRejecter=n});yield this.connection.start(this._protocol.transferFormat);try{let t=this._protocol.version;this.connection.features.reconnect||(t=1);let n={protocol:this._protocol.name,version:t};if(this._logger.log($.Debug,"Sending handshake request."),yield this._sendMessage(this._handshakeProtocol.writeHandshakeRequest(n)),this._logger.log($.Information,`Using HubProtocol '${this._protocol.name}'.`),this._cleanupTimeout(),this._resetTimeoutPeriod(),this._resetKeepAliveInterval(),yield e,this._stopDuringStartError)throw this._stopDuringStartError;(this.connection.features.reconnect||!1)&&(this._messageBuffer=new ua(this._protocol,this.connection,this._statefulReconnectBufferSize),this.connection.features.disconnected=this._messageBuffer._disconnected.bind(this._messageBuffer),this.connection.features.resend=()=>{if(this._messageBuffer)return this._messageBuffer._resend()}),this.connection.features.inherentKeepAlive||(yield this._sendMessage(this._cachedPingMessage))}catch(t){throw this._logger.log($.Debug,`Hub handshake failed with error '${t}' during start(). Stopping HubConnection.`),this._cleanupTimeout(),this._cleanupPingTimer(),yield this.connection.stop(t),t}})}stop(){return nt(this,null,function*(){let e=this._startPromise;this.connection.features.reconnect=!1,this._stopPromise=this._stopInternal(),yield this._stopPromise;try{yield e}catch{}})}_stopInternal(e){if(this._connectionState===At.Disconnected)return this._logger.log($.Debug,`Call to HubConnection.stop(${e}) ignored because it is already in the disconnected state.`),Promise.resolve();if(this._connectionState===At.Disconnecting)return this._logger.log($.Debug,`Call to HttpConnection.stop(${e}) ignored because the connection is already in the disconnecting state.`),this._stopPromise;let t=this._connectionState;return this._connectionState=At.Disconnecting,this._logger.log($.Debug,"Stopping HubConnection."),this._reconnectDelayHandle?(this._logger.log($.Debug,"Connection stopped during reconnect delay. Done reconnecting."),clearTimeout(this._reconnectDelayHandle),this._reconnectDelayHandle=void 0,this._completeClose(),Promise.resolve()):(t===At.Connected&&this._sendCloseMessage(),this._cleanupTimeout(),this._cleanupPingTimer(),this._stopDuringStartError=e||new Yt("The connection was stopped before the hub handshake could complete."),this.connection.stop(e))}_sendCloseMessage(){return nt(this,null,function*(){try{yield this._sendWithProtocol(this._createCloseMessage())}catch{}})}stream(e,...t){let[n,r]=this._replaceStreamingParams(t),s=this._createStreamInvocation(e,t,r),o,a=new ha;return a.cancelCallback=()=>{let l=this._createCancelInvocation(s.invocationId);return delete this._callbacks[s.invocationId],o.then(()=>this._sendWithProtocol(l))},this._callbacks[s.invocationId]=(l,c)=>{if(c){a.error(c);return}else l&&(l.type===Ke.Completion?l.error?a.error(new Error(l.error)):a.complete():a.next(l.item))},o=this._sendWithProtocol(s).catch(l=>{a.error(l),delete this._callbacks[s.invocationId]}),this._launchStreams(n,o),a}_sendMessage(e){return this._resetKeepAliveInterval(),this.connection.send(e)}_sendWithProtocol(e){return this._messageBuffer?this._messageBuffer._send(e):this._sendMessage(this._protocol.writeMessage(e))}send(e,...t){let[n,r]=this._replaceStreamingParams(t),s=this._sendWithProtocol(this._createInvocation(e,t,!0,r));return this._launchStreams(n,s),s}invoke(e,...t){let[n,r]=this._replaceStreamingParams(t),s=this._createInvocation(e,t,!1,r);return new Promise((a,l)=>{this._callbacks[s.invocationId]=(h,u)=>{if(u){l(u);return}else h&&(h.type===Ke.Completion?h.error?l(new Error(h.error)):a(h.result):l(new Error(`Unexpected message type: ${h.type}`)))};let c=this._sendWithProtocol(s).catch(h=>{l(h),delete this._callbacks[s.invocationId]});this._launchStreams(n,c)})}on(e,t){!e||!t||(e=e.toLowerCase(),this._methods[e]||(this._methods[e]=[]),this._methods[e].indexOf(t)===-1&&this._methods[e].push(t))}off(e,t){if(!e)return;e=e.toLowerCase();let n=this._methods[e];if(n)if(t){let r=n.indexOf(t);r!==-1&&(n.splice(r,1),n.length===0&&delete this._methods[e])}else delete this._methods[e]}onclose(e){e&&this._closedCallbacks.push(e)}onreconnecting(e){e&&this._reconnectingCallbacks.push(e)}onreconnected(e){e&&this._reconnectedCallbacks.push(e)}_processIncomingData(e){if(this._cleanupTimeout(),this._receivedHandshakeResponse||(e=this._processHandshakeResponse(e),this._receivedHandshakeResponse=!0),e){let t=this._protocol.parseMessages(e,this._logger);for(let n of t)if(!(this._messageBuffer&&!this._messageBuffer._shouldProcessMessage(n)))switch(n.type){case Ke.Invocation:this._invokeClientMethod(n).catch(r=>{this._logger.log($.Error,`Invoke client method threw error: ${sa(r)}`)});break;case Ke.StreamItem:case Ke.Completion:{let r=this._callbacks[n.invocationId];if(r){n.type===Ke.Completion&&delete this._callbacks[n.invocationId];try{r(n)}catch(s){this._logger.log($.Error,`Stream callback threw error: ${sa(s)}`)}}break}case Ke.Ping:break;case Ke.Close:{this._logger.log($.Information,"Close message received from server.");let r=n.error?new Error("Server returned an error on close: "+n.error):void 0;n.allowReconnect===!0?this.connection.stop(r):this._stopPromise=this._stopInternal(r);break}case Ke.Ack:this._messageBuffer&&this._messageBuffer._ack(n);break;case Ke.Sequence:this._messageBuffer&&this._messageBuffer._resetSequence(n);break;default:this._logger.log($.Warning,`Invalid message type: ${n.type}.`);break}}this._resetTimeoutPeriod()}_processHandshakeResponse(e){let t,n;try{[n,t]=this._handshakeProtocol.parseHandshakeResponse(e)}catch(r){let s="Error parsing handshake response: "+r;this._logger.log($.Error,s);let o=new Error(s);throw this._handshakeRejecter(o),o}if(t.error){let r="Server returned handshake error: "+t.error;this._logger.log($.Error,r);let s=new Error(r);throw this._handshakeRejecter(s),s}else this._logger.log($.Debug,"Server handshake complete.");return this._handshakeResolver(),n}_resetKeepAliveInterval(){this.connection.features.inherentKeepAlive||(this._nextKeepAlive=new Date().getTime()+this.keepAliveIntervalInMilliseconds,this._cleanupPingTimer())}_resetTimeoutPeriod(){if((!this.connection.features||!this.connection.features.inherentKeepAlive)&&(this._timeoutHandle=setTimeout(()=>this.serverTimeout(),this.serverTimeoutInMilliseconds),this._pingServerHandle===void 0)){let e=this._nextKeepAlive-new Date().getTime();e<0&&(e=0),this._pingServerHandle=setTimeout(()=>nt(this,null,function*(){if(this._connectionState===At.Connected)try{yield this._sendMessage(this._cachedPingMessage)}catch{this._cleanupPingTimer()}}),e)}}serverTimeout(){this.connection.stop(new Error("Server timeout elapsed without receiving a message from the server."))}_invokeClientMethod(e){return nt(this,null,function*(){let t=e.target.toLowerCase(),n=this._methods[t];if(!n){this._logger.log($.Warning,`No client method with the name '${t}' found.`),e.invocationId&&(this._logger.log($.Warning,`No result given for '${t}' method and invocation ID '${e.invocationId}'.`),yield this._sendWithProtocol(this._createCompletionMessage(e.invocationId,"Client didn't provide a result.",null)));return}let r=n.slice(),s=!!e.invocationId,o,a,l;for(let c of r)try{let h=o;o=yield c.apply(this,e.arguments),s&&o&&h&&(this._logger.log($.Error,`Multiple results provided for '${t}'. Sending error to server.`),l=this._createCompletionMessage(e.invocationId,"Client provided multiple results.",null)),a=void 0}catch(h){a=h,this._logger.log($.Error,`A callback for the method '${t}' threw error '${h}'.`)}l?yield this._sendWithProtocol(l):s?(a?l=this._createCompletionMessage(e.invocationId,`${a}`,null):o!==void 0?l=this._createCompletionMessage(e.invocationId,null,o):(this._logger.log($.Warning,`No result given for '${t}' method and invocation ID '${e.invocationId}'.`),l=this._createCompletionMessage(e.invocationId,"Client didn't provide a result.",null)),yield this._sendWithProtocol(l)):o&&this._logger.log($.Error,`Result given for '${t}' method but server is not expecting a result.`)})}_connectionClosed(e){this._logger.log($.Debug,`HubConnection.connectionClosed(${e}) called while in state ${this._connectionState}.`),this._stopDuringStartError=this._stopDuringStartError||e||new Yt("The underlying connection was closed before the hub handshake could complete."),this._handshakeResolver&&this._handshakeResolver(),this._cancelCallbacksWithError(e||new Error("Invocation canceled due to the underlying connection being closed.")),this._cleanupTimeout(),this._cleanupPingTimer(),this._connectionState===At.Disconnecting?this._completeClose(e):this._connectionState===At.Connected&&this._reconnectPolicy?this._reconnect(e):this._connectionState===At.Connected&&this._completeClose(e)}_completeClose(e){if(this._connectionStarted){this._connectionState=At.Disconnected,this._connectionStarted=!1,this._messageBuffer&&(this._messageBuffer._dispose(e??new Error("Connection closed.")),this._messageBuffer=void 0),St.isBrowser&&window.document.removeEventListener("freeze",this._freezeEventListener);try{this._closedCallbacks.forEach(t=>t.apply(this,[e]))}catch(t){this._logger.log($.Error,`An onclose callback called with error '${e}' threw error '${t}'.`)}}}_reconnect(e){return nt(this,null,function*(){let t=Date.now(),n=0,r=e!==void 0?e:new Error("Attempting to reconnect due to a unknown error."),s=this._getNextRetryDelay(n++,0,r);if(s===null){this._logger.log($.Debug,"Connection not reconnecting because the IRetryPolicy returned null on the first reconnect attempt."),this._completeClose(e);return}if(this._connectionState=At.Reconnecting,e?this._logger.log($.Information,`Connection reconnecting because of error '${e}'.`):this._logger.log($.Information,"Connection reconnecting."),this._reconnectingCallbacks.length!==0){try{this._reconnectingCallbacks.forEach(o=>o.apply(this,[e]))}catch(o){this._logger.log($.Error,`An onreconnecting callback called with error '${e}' threw error '${o}'.`)}if(this._connectionState!==At.Reconnecting){this._logger.log($.Debug,"Connection left the reconnecting state in onreconnecting callback. Done reconnecting.");return}}for(;s!==null;){if(this._logger.log($.Information,`Reconnect attempt number ${n} will start in ${s} ms.`),yield new Promise(o=>{this._reconnectDelayHandle=setTimeout(o,s)}),this._reconnectDelayHandle=void 0,this._connectionState!==At.Reconnecting){this._logger.log($.Debug,"Connection left the reconnecting state during reconnect delay. Done reconnecting.");return}try{if(yield this._startInternal(),this._connectionState=At.Connected,this._logger.log($.Information,"HubConnection reconnected successfully."),this._reconnectedCallbacks.length!==0)try{this._reconnectedCallbacks.forEach(o=>o.apply(this,[this.connection.connectionId]))}catch(o){this._logger.log($.Error,`An onreconnected callback called with connectionId '${this.connection.connectionId}; threw error '${o}'.`)}return}catch(o){if(this._logger.log($.Information,`Reconnect attempt failed because of error '${o}'.`),this._connectionState!==At.Reconnecting){this._logger.log($.Debug,`Connection moved to the '${this._connectionState}' from the reconnecting state during reconnect attempt. Done reconnecting.`),this._connectionState===At.Disconnecting&&this._completeClose();return}r=o instanceof Error?o:new Error(o.toString()),s=this._getNextRetryDelay(n++,Date.now()-t,r)}}this._logger.log($.Information,`Reconnect retries have been exhausted after ${Date.now()-t} ms and ${n} failed attempts. Connection disconnecting.`),this._completeClose()})}_getNextRetryDelay(e,t,n){try{return this._reconnectPolicy.nextRetryDelayInMilliseconds({elapsedMilliseconds:t,previousRetryCount:e,retryReason:n})}catch(r){return this._logger.log($.Error,`IRetryPolicy.nextRetryDelayInMilliseconds(${e}, ${t}) threw error '${r}'.`),null}}_cancelCallbacksWithError(e){let t=this._callbacks;this._callbacks={},Object.keys(t).forEach(n=>{let r=t[n];try{r(null,e)}catch(s){this._logger.log($.Error,`Stream 'error' callback called with '${e}' threw error: ${sa(s)}`)}})}_cleanupPingTimer(){this._pingServerHandle&&(clearTimeout(this._pingServerHandle),this._pingServerHandle=void 0)}_cleanupTimeout(){this._timeoutHandle&&clearTimeout(this._timeoutHandle)}_createInvocation(e,t,n,r){if(n)return r.length!==0?{arguments:t,streamIds:r,target:e,type:Ke.Invocation}:{arguments:t,target:e,type:Ke.Invocation};{let s=this._invocationId;return this._invocationId++,r.length!==0?{arguments:t,invocationId:s.toString(),streamIds:r,target:e,type:Ke.Invocation}:{arguments:t,invocationId:s.toString(),target:e,type:Ke.Invocation}}}_launchStreams(e,t){if(e.length!==0){t||(t=Promise.resolve());for(let n in e)e[n].subscribe({complete:()=>{t=t.then(()=>this._sendWithProtocol(this._createCompletionMessage(n)))},error:r=>{let s;r instanceof Error?s=r.message:r&&r.toString?s=r.toString():s="Unknown error",t=t.then(()=>this._sendWithProtocol(this._createCompletionMessage(n,s)))},next:r=>{t=t.then(()=>this._sendWithProtocol(this._createStreamItemMessage(n,r)))}})}}_replaceStreamingParams(e){let t=[],n=[];for(let r=0;r<e.length;r++){let s=e[r];if(this._isObservable(s)){let o=this._invocationId;this._invocationId++,t[o]=s,n.push(o.toString()),e.splice(r,1)}}return[t,n]}_isObservable(e){return e&&e.subscribe&&typeof e.subscribe=="function"}_createStreamInvocation(e,t,n){let r=this._invocationId;return this._invocationId++,n.length!==0?{arguments:t,invocationId:r.toString(),streamIds:n,target:e,type:Ke.StreamInvocation}:{arguments:t,invocationId:r.toString(),target:e,type:Ke.StreamInvocation}}_createCancelInvocation(e){return{invocationId:e,type:Ke.CancelInvocation}}_createStreamItemMessage(e,t){return{invocationId:e,item:t,type:Ke.StreamItem}}_createCompletionMessage(e,t,n){return t?{error:t,invocationId:e,type:Ke.Completion}:{invocationId:e,result:n,type:Ke.Completion}}_createCloseMessage(){return{type:Ke.Close}}};var bm=[0,2e3,1e4,3e4,null],Ns=class{constructor(e){this._retryDelays=e!==void 0?[...e,null]:bm}nextRetryDelayInMilliseconds(e){return this._retryDelays[e.previousRetryCount]}};var dr=(()=>{class i{}return i.Authorization="Authorization",i.Cookie="Cookie",i})();var fa=class extends ri{constructor(e,t){super(),this._innerClient=e,this._accessTokenFactory=t}send(e){return nt(this,null,function*(){let t=!0;this._accessTokenFactory&&(!this._accessToken||e.url&&e.url.indexOf("/negotiate?")>0)&&(t=!1,this._accessToken=yield this._accessTokenFactory()),this._setAuthorizationHeader(e);let n=yield this._innerClient.send(e);return t&&n.statusCode===401&&this._accessTokenFactory?(this._accessToken=yield this._accessTokenFactory(),this._setAuthorizationHeader(e),yield this._innerClient.send(e)):n})}_setAuthorizationHeader(e){e.headers||(e.headers={}),this._accessToken?e.headers[dr.Authorization]=`Bearer ${this._accessToken}`:this._accessTokenFactory&&e.headers[dr.Authorization]&&delete e.headers[dr.Authorization]}getCookieString(e){return this._innerClient.getCookieString(e)}};var Ht=function(i){return i[i.None=0]="None",i[i.WebSockets=1]="WebSockets",i[i.ServerSentEvents=2]="ServerSentEvents",i[i.LongPolling=4]="LongPolling",i}(Ht||{}),kt=function(i){return i[i.Text=1]="Text",i[i.Binary=2]="Binary",i}(kt||{});var pa=class{constructor(){this._isAborted=!1,this.onabort=null}abort(){this._isAborted||(this._isAborted=!0,this.onabort&&this.onabort())}get signal(){return this}get aborted(){return this._isAborted}};var Us=class{get pollAborted(){return this._pollAbort.aborted}constructor(e,t,n){this._httpClient=e,this._logger=t,this._pollAbort=new pa,this._options=n,this._running=!1,this.onreceive=null,this.onclose=null}connect(e,t){return nt(this,null,function*(){if(bt.isRequired(e,"url"),bt.isRequired(t,"transferFormat"),bt.isIn(t,kt,"transferFormat"),this._url=e,this._logger.log($.Trace,"(LongPolling transport) Connecting."),t===kt.Binary&&typeof XMLHttpRequest<"u"&&typeof new XMLHttpRequest().responseType!="string")throw new Error("Binary protocols over XmlHttpRequest not implementing advanced features are not supported.");let[n,r]=oi(),s=ft({[n]:r},this._options.headers),o={abortSignal:this._pollAbort.signal,headers:s,timeout:1e5,withCredentials:this._options.withCredentials};t===kt.Binary&&(o.responseType="arraybuffer");let a=`${e}&_=${Date.now()}`;this._logger.log($.Trace,`(LongPolling transport) polling: ${a}.`);let l=yield this._httpClient.get(a,o);l.statusCode!==200?(this._logger.log($.Error,`(LongPolling transport) Unexpected response code: ${l.statusCode}.`),this._closeError=new yn(l.statusText||"",l.statusCode),this._running=!1):this._running=!0,this._receiving=this._poll(this._url,o)})}_poll(e,t){return nt(this,null,function*(){try{for(;this._running;)try{let n=`${e}&_=${Date.now()}`;this._logger.log($.Trace,`(LongPolling transport) polling: ${n}.`);let r=yield this._httpClient.get(n,t);r.statusCode===204?(this._logger.log($.Information,"(LongPolling transport) Poll terminated by server."),this._running=!1):r.statusCode!==200?(this._logger.log($.Error,`(LongPolling transport) Unexpected response code: ${r.statusCode}.`),this._closeError=new yn(r.statusText||"",r.statusCode),this._running=!1):r.content?(this._logger.log($.Trace,`(LongPolling transport) data received. ${zi(r.content,this._options.logMessageContent)}.`),this.onreceive&&this.onreceive(r.content)):this._logger.log($.Trace,"(LongPolling transport) Poll timed out, reissuing.")}catch(n){this._running?n instanceof Bi?this._logger.log($.Trace,"(LongPolling transport) Poll timed out, reissuing."):(this._closeError=n,this._running=!1):this._logger.log($.Trace,`(LongPolling transport) Poll errored after shutdown: ${n.message}`)}}finally{this._logger.log($.Trace,"(LongPolling transport) Polling complete."),this.pollAborted||this._raiseOnClose()}})}send(e){return nt(this,null,function*(){return this._running?ra(this._logger,"LongPolling",this._httpClient,this._url,e,this._options):Promise.reject(new Error("Cannot send until the transport is connected"))})}stop(){return nt(this,null,function*(){this._logger.log($.Trace,"(LongPolling transport) Stopping polling."),this._running=!1,this._pollAbort.abort();try{yield this._receiving,this._logger.log($.Trace,`(LongPolling transport) sending DELETE request to ${this._url}.`);let e={},[t,n]=oi();e[t]=n;let r={headers:ft(ft({},e),this._options.headers),timeout:this._options.timeout,withCredentials:this._options.withCredentials},s;try{yield this._httpClient.delete(this._url,r)}catch(o){s=o}s?s instanceof yn&&(s.statusCode===404?this._logger.log($.Trace,"(LongPolling transport) A 404 response was returned from sending a DELETE request."):this._logger.log($.Trace,`(LongPolling transport) Error sending a DELETE request: ${s}`)):this._logger.log($.Trace,"(LongPolling transport) DELETE request accepted.")}finally{this._logger.log($.Trace,"(LongPolling transport) Stop finished."),this._raiseOnClose()}})}_raiseOnClose(){if(this.onclose){let e="(LongPolling transport) Firing onclose event.";this._closeError&&(e+=" Error: "+this._closeError),this._logger.log($.Trace,e),this.onclose(this._closeError)}}};var ma=class{constructor(e,t,n,r){this._httpClient=e,this._accessToken=t,this._logger=n,this._options=r,this.onreceive=null,this.onclose=null}connect(e,t){return nt(this,null,function*(){return bt.isRequired(e,"url"),bt.isRequired(t,"transferFormat"),bt.isIn(t,kt,"transferFormat"),this._logger.log($.Trace,"(SSE transport) Connecting."),this._url=e,this._accessToken&&(e+=(e.indexOf("?")<0?"?":"&")+`access_token=${encodeURIComponent(this._accessToken)}`),new Promise((n,r)=>{let s=!1;if(t!==kt.Text){r(new Error("The Server-Sent Events transport only supports the 'Text' transfer format"));return}let o;if(St.isBrowser||St.isWebWorker)o=new this._options.EventSource(e,{withCredentials:this._options.withCredentials});else{let a=this._httpClient.getCookieString(e),l={};l.Cookie=a;let[c,h]=oi();l[c]=h,o=new this._options.EventSource(e,{withCredentials:this._options.withCredentials,headers:ft(ft({},l),this._options.headers)})}try{o.onmessage=a=>{if(this.onreceive)try{this._logger.log($.Trace,`(SSE transport) data received. ${zi(a.data,this._options.logMessageContent)}.`),this.onreceive(a.data)}catch(l){this._close(l);return}},o.onerror=a=>{s?this._close():r(new Error("EventSource failed to connect. The connection could not be found on the server, either the connection ID is not present on the server, or a proxy is refusing/buffering the connection. If you have multiple servers check that sticky sessions are enabled."))},o.onopen=()=>{this._logger.log($.Information,`SSE connected to ${this._url}`),this._eventSource=o,s=!0,n()}}catch(a){r(a);return}})})}send(e){return nt(this,null,function*(){return this._eventSource?ra(this._logger,"SSE",this._httpClient,this._url,e,this._options):Promise.reject(new Error("Cannot send until the transport is connected"))})}stop(){return this._close(),Promise.resolve()}_close(e){this._eventSource&&(this._eventSource.close(),this._eventSource=void 0,this.onclose&&this.onclose(e))}};var ga=class{constructor(e,t,n,r,s,o){this._logger=n,this._accessTokenFactory=t,this._logMessageContent=r,this._webSocketConstructor=s,this._httpClient=e,this.onreceive=null,this.onclose=null,this._headers=o}connect(e,t){return nt(this,null,function*(){bt.isRequired(e,"url"),bt.isRequired(t,"transferFormat"),bt.isIn(t,kt,"transferFormat"),this._logger.log($.Trace,"(WebSockets transport) Connecting.");let n;return this._accessTokenFactory&&(n=yield this._accessTokenFactory()),new Promise((r,s)=>{e=e.replace(/^http/,"ws");let o,a=this._httpClient.getCookieString(e),l=!1;if(St.isNode||St.isReactNative){let c={},[h,u]=oi();c[h]=u,n&&(c[dr.Authorization]=`Bearer ${n}`),a&&(c[dr.Cookie]=a),o=new this._webSocketConstructor(e,void 0,{headers:ft(ft({},c),this._headers)})}else n&&(e+=(e.indexOf("?")<0?"?":"&")+`access_token=${encodeURIComponent(n)}`);o||(o=new this._webSocketConstructor(e)),t===kt.Binary&&(o.binaryType="arraybuffer"),o.onopen=c=>{this._logger.log($.Information,`WebSocket connected to ${e}.`),this._webSocket=o,l=!0,r()},o.onerror=c=>{let h=null;typeof ErrorEvent<"u"&&c instanceof ErrorEvent?h=c.error:h="There was an error with the transport",this._logger.log($.Information,`(WebSockets transport) ${h}.`)},o.onmessage=c=>{if(this._logger.log($.Trace,`(WebSockets transport) data received. ${zi(c.data,this._logMessageContent)}.`),this.onreceive)try{this.onreceive(c.data)}catch(h){this._close(h);return}},o.onclose=c=>{if(l)this._close(c);else{let h=null;typeof ErrorEvent<"u"&&c instanceof ErrorEvent?h=c.error:h="WebSocket failed to connect. The connection could not be found on the server, either the endpoint may not be a SignalR endpoint, the connection ID is not present on the server, or there is a proxy blocking WebSockets. If you have multiple servers check that sticky sessions are enabled.",s(new Error(h))}}})})}send(e){return this._webSocket&&this._webSocket.readyState===this._webSocketConstructor.OPEN?(this._logger.log($.Trace,`(WebSockets transport) sending data. ${zi(e,this._logMessageContent)}.`),this._webSocket.send(e),Promise.resolve()):Promise.reject("WebSocket is not in the OPEN state")}stop(){return this._webSocket&&this._close(void 0),Promise.resolve()}_close(e){this._webSocket&&(this._webSocket.onclose=()=>{},this._webSocket.onmessage=()=>{},this._webSocket.onerror=()=>{},this._webSocket.close(),this._webSocket=void 0),this._logger.log($.Trace,"(WebSockets transport) socket closed."),this.onclose&&(this._isCloseEvent(e)&&(e.wasClean===!1||e.code!==1e3)?this.onclose(new Error(`WebSocket closed with status code: ${e.code} (${e.reason||"no reason given"}).`)):e instanceof Error?this.onclose(e):this.onclose())}_isCloseEvent(e){return e&&typeof e.wasClean=="boolean"&&typeof e.code=="number"}};var Zu=100,_a=class{constructor(e,t={}){if(this._stopPromiseResolver=()=>{},this.features={},this._negotiateVersion=1,bt.isRequired(e,"url"),this._logger=Yu(t.logger),this.baseUrl=this._resolveUrl(e),t=t||{},t.logMessageContent=t.logMessageContent===void 0?!1:t.logMessageContent,typeof t.withCredentials=="boolean"||t.withCredentials===void 0)t.withCredentials=t.withCredentials===void 0?!0:t.withCredentials;else throw new Error("withCredentials option was not a 'boolean' or 'undefined' value");t.timeout=t.timeout===void 0?100*1e3:t.timeout;let n=null,r=null;if(St.isNode&&typeof Lr<"u"){let s=typeof __webpack_require__=="function"?__non_webpack_require__:Lr;n=s("ws"),r=s("eventsource")}!St.isNode&&typeof WebSocket<"u"&&!t.WebSocket?t.WebSocket=WebSocket:St.isNode&&!t.WebSocket&&n&&(t.WebSocket=n),!St.isNode&&typeof EventSource<"u"&&!t.EventSource?t.EventSource=EventSource:St.isNode&&!t.EventSource&&typeof r<"u"&&(t.EventSource=r),this._httpClient=new fa(t.httpClient||new la(this._logger),t.accessTokenFactory),this._connectionState="Disconnected",this._connectionStarted=!1,this._options=t,this.onreceive=null,this.onclose=null}start(e){return nt(this,null,function*(){if(e=e||kt.Binary,bt.isIn(e,kt,"transferFormat"),this._logger.log($.Debug,`Starting connection with transfer format '${kt[e]}'.`),this._connectionState!=="Disconnected")return Promise.reject(new Error("Cannot start an HttpConnection that is not in the 'Disconnected' state."));if(this._connectionState="Connecting",this._startInternalPromise=this._startInternal(e),yield this._startInternalPromise,this._connectionState==="Disconnecting"){let t="Failed to start the HttpConnection before stop() was called.";return this._logger.log($.Error,t),yield this._stopPromise,Promise.reject(new Yt(t))}else if(this._connectionState!=="Connected"){let t="HttpConnection.startInternal completed gracefully but didn't enter the connection into the connected state!";return this._logger.log($.Error,t),Promise.reject(new Yt(t))}this._connectionStarted=!0})}send(e){return this._connectionState!=="Connected"?Promise.reject(new Error("Cannot send data if the connection is not in the 'Connected' State.")):(this._sendQueue||(this._sendQueue=new Pc(this.transport)),this._sendQueue.send(e))}stop(e){return nt(this,null,function*(){if(this._connectionState==="Disconnected")return this._logger.log($.Debug,`Call to HttpConnection.stop(${e}) ignored because the connection is already in the disconnected state.`),Promise.resolve();if(this._connectionState==="Disconnecting")return this._logger.log($.Debug,`Call to HttpConnection.stop(${e}) ignored because the connection is already in the disconnecting state.`),this._stopPromise;this._connectionState="Disconnecting",this._stopPromise=new Promise(t=>{this._stopPromiseResolver=t}),yield this._stopInternal(e),yield this._stopPromise})}_stopInternal(e){return nt(this,null,function*(){this._stopError=e;try{yield this._startInternalPromise}catch{}if(this.transport){try{yield this.transport.stop()}catch(t){this._logger.log($.Error,`HttpConnection.transport.stop() threw error '${t}'.`),this._stopConnection()}this.transport=void 0}else this._logger.log($.Debug,"HttpConnection.transport is undefined in HttpConnection.stop() because start() failed.")})}_startInternal(e){return nt(this,null,function*(){let t=this.baseUrl;this._accessTokenFactory=this._options.accessTokenFactory,this._httpClient._accessTokenFactory=this._accessTokenFactory;try{if(this._options.skipNegotiation)if(this._options.transport===Ht.WebSockets)this.transport=this._constructTransport(Ht.WebSockets),yield this._startTransport(t,e);else throw new Error("Negotiation can only be skipped when using the WebSocket transport directly.");else{let n=null,r=0;do{if(n=yield this._getNegotiationResponse(t),this._connectionState==="Disconnecting"||this._connectionState==="Disconnected")throw new Yt("The connection was stopped during negotiation.");if(n.error)throw new Error(n.error);if(n.ProtocolVersion)throw new Error("Detected a connection attempt to an ASP.NET SignalR Server. This client only supports connecting to an ASP.NET Core SignalR Server. See https://aka.ms/signalr-core-differences for details.");if(n.url&&(t=n.url),n.accessToken){let s=n.accessToken;this._accessTokenFactory=()=>s,this._httpClient._accessToken=s,this._httpClient._accessTokenFactory=void 0}r++}while(n.url&&r<Zu);if(r===Zu&&n.url)throw new Error("Negotiate redirection limit exceeded.");yield this._createTransport(t,this._options.transport,n,e)}this.transport instanceof Us&&(this.features.inherentKeepAlive=!0),this._connectionState==="Connecting"&&(this._logger.log($.Debug,"The HttpConnection connected successfully."),this._connectionState="Connected")}catch(n){return this._logger.log($.Error,"Failed to start the connection: "+n),this._connectionState="Disconnected",this.transport=void 0,this._stopPromiseResolver(),Promise.reject(n)}})}_getNegotiationResponse(e){return nt(this,null,function*(){let t={},[n,r]=oi();t[n]=r;let s=this._resolveNegotiateUrl(e);this._logger.log($.Debug,`Sending negotiation request: ${s}.`);try{let o=yield this._httpClient.post(s,{content:"",headers:ft(ft({},t),this._options.headers),timeout:this._options.timeout,withCredentials:this._options.withCredentials});if(o.statusCode!==200)return Promise.reject(new Error(`Unexpected status code returned from negotiate '${o.statusCode}'`));let a=JSON.parse(o.content);return(!a.negotiateVersion||a.negotiateVersion<1)&&(a.connectionToken=a.connectionId),a.useStatefulReconnect&&this._options._useStatefulReconnect!==!0?Promise.reject(new Fs("Client didn't negotiate Stateful Reconnect but the server did.")):a}catch(o){let a="Failed to complete negotiation with the server: "+o;return o instanceof yn&&o.statusCode===404&&(a=a+" Either this is not a SignalR endpoint or there is a proxy blocking the connection."),this._logger.log($.Error,a),Promise.reject(new Fs(a))}})}_createConnectUrl(e,t){return t?e+(e.indexOf("?")===-1?"?":"&")+`id=${t}`:e}_createTransport(e,t,n,r){return nt(this,null,function*(){let s=this._createConnectUrl(e,n.connectionToken);if(this._isITransport(t)){this._logger.log($.Debug,"Connection was provided an instance of ITransport, using that directly."),this.transport=t,yield this._startTransport(s,r),this.connectionId=n.connectionId;return}let o=[],a=n.availableTransports||[],l=n;for(let c of a){let h=this._resolveTransportOrError(c,t,r,l?.useStatefulReconnect===!0);if(h instanceof Error)o.push(`${c.transport} failed:`),o.push(h);else if(this._isITransport(h)){if(this.transport=h,!l){try{l=yield this._getNegotiationResponse(e)}catch(u){return Promise.reject(u)}s=this._createConnectUrl(e,l.connectionToken)}try{yield this._startTransport(s,r),this.connectionId=l.connectionId;return}catch(u){if(this._logger.log($.Error,`Failed to start the transport '${c.transport}': ${u}`),l=void 0,o.push(new ta(`${c.transport} failed: ${u}`,Ht[c.transport])),this._connectionState!=="Connecting"){let d="Failed to select transport before stop() was called.";return this._logger.log($.Debug,d),Promise.reject(new Yt(d))}}}}return o.length>0?Promise.reject(new na(`Unable to connect to the server with any of the available transports. ${o.join(" ")}`,o)):Promise.reject(new Error("None of the transports supported by the client are supported by the server."))})}_constructTransport(e){switch(e){case Ht.WebSockets:if(!this._options.WebSocket)throw new Error("'WebSocket' is not supported in your environment.");return new ga(this._httpClient,this._accessTokenFactory,this._logger,this._options.logMessageContent,this._options.WebSocket,this._options.headers||{});case Ht.ServerSentEvents:if(!this._options.EventSource)throw new Error("'EventSource' is not supported in your environment.");return new ma(this._httpClient,this._httpClient._accessToken,this._logger,this._options);case Ht.LongPolling:return new Us(this._httpClient,this._logger,this._options);default:throw new Error(`Unknown transport: ${e}.`)}}_startTransport(e,t){return this.transport.onreceive=this.onreceive,this.features.reconnect?this.transport.onclose=n=>nt(this,null,function*(){let r=!1;if(this.features.reconnect)try{this.features.disconnected(),yield this.transport.connect(e,t),yield this.features.resend()}catch{r=!0}else{this._stopConnection(n);return}r&&this._stopConnection(n)}):this.transport.onclose=n=>this._stopConnection(n),this.transport.connect(e,t)}_resolveTransportOrError(e,t,n,r){let s=Ht[e.transport];if(s==null)return this._logger.log($.Debug,`Skipping transport '${e.transport}' because it is not supported by this client.`),new Error(`Skipping transport '${e.transport}' because it is not supported by this client.`);if(Sm(t,s))if(e.transferFormats.map(a=>kt[a]).indexOf(n)>=0){if(s===Ht.WebSockets&&!this._options.WebSocket||s===Ht.ServerSentEvents&&!this._options.EventSource)return this._logger.log($.Debug,`Skipping transport '${Ht[s]}' because it is not supported in your environment.'`),new Qo(`'${Ht[s]}' is not supported in your environment.`,s);this._logger.log($.Debug,`Selecting transport '${Ht[s]}'.`);try{return this.features.reconnect=s===Ht.WebSockets?r:void 0,this._constructTransport(s)}catch(a){return a}}else return this._logger.log($.Debug,`Skipping transport '${Ht[s]}' because it does not support the requested transfer format '${kt[n]}'.`),new Error(`'${Ht[s]}' does not support ${kt[n]}.`);else return this._logger.log($.Debug,`Skipping transport '${Ht[s]}' because it was disabled by the client.`),new ea(`'${Ht[s]}' is disabled by the client.`,s)}_isITransport(e){return e&&typeof e=="object"&&"connect"in e}_stopConnection(e){if(this._logger.log($.Debug,`HttpConnection.stopConnection(${e}) called while in state ${this._connectionState}.`),this.transport=void 0,e=this._stopError||e,this._stopError=void 0,this._connectionState==="Disconnected"){this._logger.log($.Debug,`Call to HttpConnection.stopConnection(${e}) was ignored because the connection is already in the disconnected state.`);return}if(this._connectionState==="Connecting")throw this._logger.log($.Warning,`Call to HttpConnection.stopConnection(${e}) was ignored because the connection is still in the connecting state.`),new Error(`HttpConnection.stopConnection(${e}) was called while the connection is still in the connecting state.`);if(this._connectionState==="Disconnecting"&&this._stopPromiseResolver(),e?this._logger.log($.Error,`Connection disconnected with error '${e}'.`):this._logger.log($.Information,"Connection disconnected."),this._sendQueue&&(this._sendQueue.stop().catch(t=>{this._logger.log($.Error,`TransportSendQueue.stop() threw error '${t}'.`)}),this._sendQueue=void 0),this.connectionId=void 0,this._connectionState="Disconnected",this._connectionStarted){this._connectionStarted=!1;try{this.onclose&&this.onclose(e)}catch(t){this._logger.log($.Error,`HttpConnection.onclose(${e}) threw error '${t}'.`)}}}_resolveUrl(e){if(e.lastIndexOf("https://",0)===0||e.lastIndexOf("http://",0)===0)return e;if(!St.isBrowser)throw new Error(`Cannot resolve '${e}'.`);let t=window.document.createElement("a");return t.href=e,this._logger.log($.Information,`Normalizing '${e}' to '${t.href}'.`),t.href}_resolveNegotiateUrl(e){let t=new URL(e);t.pathname.endsWith("/")?t.pathname+="negotiate":t.pathname+="/negotiate";let n=new URLSearchParams(t.searchParams);return n.has("negotiateVersion")||n.append("negotiateVersion",this._negotiateVersion.toString()),n.has("useStatefulReconnect")?n.get("useStatefulReconnect")==="true"&&(this._options._useStatefulReconnect=!0):this._options._useStatefulReconnect===!0&&n.append("useStatefulReconnect","true"),t.search=n.toString(),t.toString()}};function Sm(i,e){return!i||(e&i)!==0}var Pc=class i{constructor(e){this._transport=e,this._buffer=[],this._executing=!0,this._sendBufferedData=new Xr,this._transportResult=new Xr,this._sendLoopPromise=this._sendLoop()}send(e){return this._bufferData(e),this._transportResult||(this._transportResult=new Xr),this._transportResult.promise}stop(){return this._executing=!1,this._sendBufferedData.resolve(),this._sendLoopPromise}_bufferData(e){if(this._buffer.length&&typeof this._buffer[0]!=typeof e)throw new Error(`Expected data to be of type ${typeof this._buffer} but was of type ${typeof e}`);this._buffer.push(e),this._sendBufferedData.resolve()}_sendLoop(){return nt(this,null,function*(){for(;;){if(yield this._sendBufferedData.promise,!this._executing){this._transportResult&&this._transportResult.reject("Connection stopped.");break}this._sendBufferedData=new Xr;let e=this._transportResult;this._transportResult=void 0;let t=typeof this._buffer[0]=="string"?this._buffer.join(""):i._concatBuffers(this._buffer);this._buffer.length=0;try{yield this._transport.send(t),e.resolve()}catch(n){e.reject(n)}}})}static _concatBuffers(e){let t=e.map(s=>s.byteLength).reduce((s,o)=>s+o),n=new Uint8Array(t),r=0;for(let s of e)n.set(new Uint8Array(s),r),r+=s.byteLength;return n.buffer}},Xr=class{constructor(){this.promise=new Promise((e,t)=>[this._resolver,this._rejecter]=[e,t])}resolve(){this._resolver()}reject(e){this._rejecter(e)}};var Mm="json",xa=class{constructor(){this.name=Mm,this.version=2,this.transferFormat=kt.Text}parseMessages(e,t){if(typeof e!="string")throw new Error("Invalid input for JSON hub protocol. Expected a string.");if(!e)return[];t===null&&(t=si.instance);let n=bn.parse(e),r=[];for(let s of n){let o=JSON.parse(s);if(typeof o.type!="number")throw new Error("Invalid payload.");switch(o.type){case Ke.Invocation:this._isInvocationMessage(o);break;case Ke.StreamItem:this._isStreamItemMessage(o);break;case Ke.Completion:this._isCompletionMessage(o);break;case Ke.Ping:break;case Ke.Close:break;case Ke.Ack:this._isAckMessage(o);break;case Ke.Sequence:this._isSequenceMessage(o);break;default:t.log($.Information,"Unknown message type '"+o.type+"' ignored.");continue}r.push(o)}return r}writeMessage(e){return bn.write(JSON.stringify(e))}_isInvocationMessage(e){this._assertNotEmptyString(e.target,"Invalid payload for Invocation message."),e.invocationId!==void 0&&this._assertNotEmptyString(e.invocationId,"Invalid payload for Invocation message.")}_isStreamItemMessage(e){if(this._assertNotEmptyString(e.invocationId,"Invalid payload for StreamItem message."),e.item===void 0)throw new Error("Invalid payload for StreamItem message.")}_isCompletionMessage(e){if(e.result&&e.error)throw new Error("Invalid payload for Completion message.");!e.result&&e.error&&this._assertNotEmptyString(e.error,"Invalid payload for Completion message."),this._assertNotEmptyString(e.invocationId,"Invalid payload for Completion message.")}_isAckMessage(e){if(typeof e.sequenceId!="number")throw new Error("Invalid SequenceId for Ack message.")}_isSequenceMessage(e){if(typeof e.sequenceId!="number")throw new Error("Invalid SequenceId for Sequence message.")}_assertNotEmptyString(e,t){if(typeof e!="string"||e==="")throw new Error(t)}};var wm={trace:$.Trace,debug:$.Debug,info:$.Information,information:$.Information,warn:$.Warning,warning:$.Warning,error:$.Error,critical:$.Critical,none:$.None};function Em(i){let e=wm[i.toLowerCase()];if(typeof e<"u")return e;throw new Error(`Unknown log level: ${i}`)}var Os=class{configureLogging(e){if(bt.isRequired(e,"logging"),Cm(e))this.logger=e;else if(typeof e=="string"){let t=Em(e);this.logger=new ur(t)}else this.logger=new ur(e);return this}withUrl(e,t){return bt.isRequired(e,"url"),bt.isNotEmpty(e,"url"),this.url=e,typeof t=="object"?this.httpConnectionOptions=ft(ft({},this.httpConnectionOptions),t):this.httpConnectionOptions=Jn(ft({},this.httpConnectionOptions),{transport:t}),this}withHubProtocol(e){return bt.isRequired(e,"protocol"),this.protocol=e,this}withAutomaticReconnect(e){if(this.reconnectPolicy)throw new Error("A reconnectPolicy has already been set.");return e?Array.isArray(e)?this.reconnectPolicy=new Ns(e):this.reconnectPolicy=e:this.reconnectPolicy=new Ns,this}withServerTimeout(e){return bt.isRequired(e,"milliseconds"),this._serverTimeoutInMilliseconds=e,this}withKeepAliveInterval(e){return bt.isRequired(e,"milliseconds"),this._keepAliveIntervalInMilliseconds=e,this}withStatefulReconnect(e){return this.httpConnectionOptions===void 0&&(this.httpConnectionOptions={}),this.httpConnectionOptions._useStatefulReconnect=!0,this._statefulReconnectBufferSize=e?.bufferSize,this}build(){let e=this.httpConnectionOptions||{};if(e.logger===void 0&&(e.logger=this.logger),!this.url)throw new Error("The 'HubConnectionBuilder.withUrl' method must be called before building the connection.");let t=new _a(this.url,e);return da.create(t,this.logger||si.instance,this.protocol||new xa,this.reconnectPolicy,this._serverTimeoutInMilliseconds,this._keepAliveIntervalInMilliseconds,this._statefulReconnectBufferSize)}};function Cm(i){return i.log!==void 0}var qr=class i{hubConnection;constructor(){this.hubConnection=new Os().withUrl(`${zr.BASE_URL}/notificationHub`).build()}startConnection(){return new xc(e=>{this.hubConnection.start().then(()=>{console.log("Connection established with SignalR hub"),e.next(),e.complete()}).catch(t=>{console.error("Error connecting to SignalR hub:",t),e.error(t)})})}receiveMessage(){return new xc(e=>{this.hubConnection.on("ReceiveMessage",t=>{console.log("Notification received:",t),e.next(t)})})}sendMessage(e){this.hubConnection.invoke("SendMessage",e)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=en({token:i,factory:i.\u0275fac,providedIn:"root"})};var va=class i{searchQuery=new Nr("");searchQuery$=this.searchQuery.asObservable();setSearchQuery(e){this.searchQuery.next(e)}constructor(){}static \u0275fac=function(t){return new(t||i)};static \u0275prov=en({token:i,factory:i.\u0275fac,providedIn:"root"})};var Rm=i=>({background:i});function Im(i,e){if(i&1){let t=vt();v(0,"button",23),Qe("click",function(){Ae(t);let r=_e();return Re(r.clearSearch())}),ce(1,"i",24),w()}}function Pm(i,e){if(i&1){let t=vt();v(0,"li",28),Qe("mousedown",function(){let r=Ae(t).$implicit,s=_e(2);return Re(s.selectSuggestion(r))}),v(1,"span",29),ce(2,"i",30),I(3),w(),v(4,"span",31),I(5),w()()}if(i&2){let t=e.$implicit,n=e.index,r=_e(2);mn("is-active",n===r.highlightedSuggestionIndex),Q("id",r.getSuggestionId(n)),Ur("aria-selected",n===r.highlightedSuggestionIndex),L(2),Q("ngClass",t.icon),L(),wt(" ",t.label," "),L(2),ht(t.type)}}function Dm(i,e){i&1&&(v(0,"li",32),I(1," No matching results found "),w())}function Lm(i,e){if(i&1&&(v(0,"ul",25),ze(1,Pm,6,7,"li",26)(2,Dm,2,0,"li",27),w()),i&2){let t=_e();L(),Q("ngForOf",t.searchSuggestions),L(),Q("ngIf",t.searchSuggestions.length===0)}}function Fm(i,e){if(i&1&&(v(0,"span",38),I(1),w()),i&2){let t=_e(2);L(),ht(t.notificationCount)}}function Nm(i,e){i&1&&(v(0,"div",43),I(1,"No new notifications"),w())}function Um(i,e){if(i&1&&(v(0,"button",44),ce(1,"i",45),v(2,"span"),I(3),w()()),i&2){let t=e.$implicit;L(3),ht(t)}}function Om(i,e){if(i&1&&(v(0,"div",39)(1,"div",40),I(2,"Recent Notifications"),w(),ze(3,Nm,2,0,"div",41)(4,Um,4,1,"button",42),w()),i&2){let t=_e(2);L(3),Q("ngIf",t.visibleNotifications.length===0),L(),Q("ngForOf",t.visibleNotifications)}}function km(i,e){if(i&1){let t=vt();v(0,"div",33)(1,"button",34),Qe("click",function(){Ae(t);let r=_e();return Re(r.toggleNotificationMenu())}),ce(2,"i",35),ze(3,Fm,2,1,"span",36),w(),ze(4,Om,5,2,"div",37),w()}if(i&2){let t=_e();L(),Ur("aria-expanded",t.showNotificationMenu),L(2),Q("ngIf",t.notificationCount>0),L(),Q("ngIf",t.showNotificationMenu)}}function Bm(i,e){if(i&1){let t=vt();v(0,"button",54),Qe("click",function(r){let s=Ae(t).$implicit,o=_e(3);return Re(o.onProfileMenuSelect(s,r))}),ce(1,"i",30),v(2,"span"),I(3),w()()}if(i&2){let t=e.$implicit;mn("dropdown-item--danger",t.class==="danger"),Q("hidden",!t.showIf()),L(),Q("ngClass",t.icon),L(2),ht(t.label)}}function zm(i,e){if(i&1&&(v(0,"div",52),ze(1,Bm,4,5,"button",53),w()),i&2){let t=_e(2);L(),Q("ngForOf",t.profileMenuItems)}}function Vm(i,e){if(i&1){let t=vt();un(0),v(1,"div",46)(2,"button",47),Qe("click",function(){Ae(t);let r=_e();return Re(r.toggleUserMenu())}),ce(3,"img",48),v(4,"span",49),I(5),w(),ce(6,"i",50),w(),ze(7,zm,2,1,"div",51),w(),dn()}if(i&2){let t=_e();L(2),Ur("aria-expanded",t.showUserMenu),L(),Q("src",t.profileImageUrl||t.defaultProfileImage,ar),L(2),ht(t.username||"User"),L(2),Q("ngIf",t.showUserMenu)}}function Hm(i,e){i&1&&(v(0,"div",55)(1,"a",56),I(2,"Login"),w(),v(3,"a",57),I(4,"Sign Up"),w()())}function Gm(i,e){if(i&1){let t=vt();v(0,"button",23),Qe("click",function(){Ae(t);let r=_e();return Re(r.clearSearch())}),ce(1,"i",24),w()}}var ya=class i{constructor(e,t,n,r,s,o,a,l){this.router=e;this.platformId=t;this.colorService=n;this.layoutService=r;this.userService=s;this.signalrService=o;this.userInfo=a;this.searchService=l;this.subscriptions.add(this.router.events.pipe(Pi(c=>c instanceof Li)).subscribe(()=>this.checkLoginStatus()))}isLoggedIn=!1;isNavbarCollapsed=!0;sidebarVisible=!0;sidebarActive=!1;isDesktop=!0;mobileMenuOpen=!1;selectedColor="";userRole=null;username=null;showUserMenu=!1;showNotificationMenu=!1;profileImageUrl="";defaultProfileImage="images/profile.jpeg";notificationCount=0;notifications=[];searchQuery="";searchSuggestions=[];searchOpen=!1;highlightedSuggestionIndex=-1;subscriptions=new Fr;searchInput$=new hu;searchDirectory={Products:["Wheat","Rice","Tomatoes","Potato","Mustard Oil","Onion","Cotton"],Farmers:["Rajesh Sharma","Mahesh Kumar","Sohan Lal","Pooja Devi"],Buyers:["Green Valley Traders","FreshKart Retail","Mandi House Buyers"],Categories:["Grains","Vegetables","Fruits","Pulses","Oil Seeds"]};ngOnInit(){this.subscriptions.add(this.signalrService.receiveMessage().subscribe(t=>{this.notifications.unshift(t),this.notificationCount=this.notifications.length})),this.subscriptions.add(this.searchInput$.pipe(uu(300),du()).subscribe(t=>this.buildSuggestions(t))),this.checkLoginStatus(),this.subscriptions.add(this.colorService.selectedColor$.subscribe(t=>this.selectedColor=t)),this.subscriptions.add(this.layoutService.sidebarVisible$.subscribe(t=>this.sidebarVisible=t)),typeof window<"u"&&(this.isDesktop=window.innerWidth>=768,window.addEventListener("resize",()=>{this.isDesktop=window.innerWidth>=768}));let e=Number(this.userInfo.getUserId());e&&this.getProfileImage(e),this.buildSuggestions("")}ngOnDestroy(){this.subscriptions.unsubscribe()}checkLoginStatus(){qt(this.platformId)&&(this.userInfo.refresh(),this.isLoggedIn=!!this.userInfo.getToken(),this.userRole=this.userInfo.getUserRole(),this.username=this.userInfo.getUserName()||"User")}goToAddProduct(e){e.preventDefault(),this.showUserMenu=!1,this.router.navigate(["/components/product"])}logout(){qt(this.platformId)&&localStorage.clear(),this.userInfo.clear(),this.isLoggedIn=!1,this.closeAllOverlays(),this.router.navigate(["/auth/login"]).then(()=>{window.location.reload()})}toggleSidebar(){this.sidebarActive=!this.sidebarActive,window.dispatchEvent(new Event("toggle-sidebar"))}toggleUserMenu(){this.showUserMenu=!this.showUserMenu,this.showUserMenu&&(this.showNotificationMenu=!1)}toggleNotificationMenu(){this.showNotificationMenu=!this.showNotificationMenu,this.showNotificationMenu&&(this.showUserMenu=!1,this.notificationCount=0)}closeAllOverlays(){this.showUserMenu=!1,this.showNotificationMenu=!1,this.searchOpen=!1,this.highlightedSuggestionIndex=-1}onEscape(){this.closeAllOverlays()}onClickOutside(e){if(!(e instanceof HTMLElement)){this.closeAllOverlays();return}let t=e.closest(".user-dropdown")!==null,n=e.closest(".notification-dropdown")!==null,r=e.closest(".search-shell")!==null;t||(this.showUserMenu=!1),n||(this.showNotificationMenu=!1),r||(this.searchOpen=!1,this.highlightedSuggestionIndex=-1)}openSearchDropdown(){this.searchOpen=!0,this.buildSuggestions(this.searchQuery)}onSearchInputChange(e){this.searchQuery=e,this.searchInput$.next(e),this.searchOpen=!0}onSearchKeydown(e){if(!this.searchOpen||this.searchSuggestions.length===0){e.key==="Escape"&&(this.searchOpen=!1);return}e.key==="ArrowDown"&&(e.preventDefault(),this.highlightedSuggestionIndex=(this.highlightedSuggestionIndex+1)%this.searchSuggestions.length),e.key==="ArrowUp"&&(e.preventDefault(),this.highlightedSuggestionIndex=(this.highlightedSuggestionIndex-1+this.searchSuggestions.length)%this.searchSuggestions.length),e.key==="Enter"&&this.highlightedSuggestionIndex>=0&&(e.preventDefault(),this.selectSuggestion(this.searchSuggestions[this.highlightedSuggestionIndex]))}submitSearch(){let e=this.searchQuery.trim();e&&(this.searchService.setSearchQuery(e),this.searchOpen=!1,this.highlightedSuggestionIndex=-1)}clearSearch(){this.searchQuery="",this.searchSuggestions=this.getDefaultSuggestions(),this.searchOpen=!0,this.highlightedSuggestionIndex=-1,this.searchService.setSearchQuery("")}selectSuggestion(e){this.searchQuery=e.label,this.searchService.setSearchQuery(e.label),this.searchOpen=!1,this.highlightedSuggestionIndex=-1}getSuggestionId(e){return`search-suggestion-${e}`}get visibleNotifications(){return this.notifications.slice(0,5)}onProfileMenuSelect(e,t){if(t.preventDefault(),this.showUserMenu=!1,this.mobileMenuOpen=!1,e.action){e.action();return}e.routerLink&&this.router.navigate([e.routerLink])}buildSuggestions(e){let t=e.trim().toLowerCase();if(!t){this.searchSuggestions=this.getDefaultSuggestions(),this.highlightedSuggestionIndex=-1;return}let n={Products:"bi-box-seam",Farmers:"bi-person-badge",Buyers:"bi-briefcase",Categories:"bi-tags"},r=[];Object.keys(this.searchDirectory).forEach(s=>{this.searchDirectory[s].filter(o=>o.toLowerCase().includes(t)).forEach(o=>{r.push({type:s,label:o,icon:n[s]})})}),this.searchSuggestions=r.slice(0,8),this.highlightedSuggestionIndex=-1}getDefaultSuggestions(){let e={Products:"bi-box-seam",Farmers:"bi-person-badge",Buyers:"bi-briefcase",Categories:"bi-tags"};return Object.keys(this.searchDirectory).map(t=>({type:t,label:this.searchDirectory[t][0],icon:e[t]}))}getProfileImage(e){this.userService.getProfileImage(e).subscribe({next:t=>{let n=new FileReader;n.onload=()=>{this.profileImageUrl=n.result},n.readAsDataURL(t)},error:()=>{this.profileImageUrl=this.defaultProfileImage}})}toggleNavbar(){this.isNavbarCollapsed=!this.isNavbarCollapsed}profileMenuItems=[{label:"My Profile",icon:"bi-person-circle",routerLink:"/components/profileview",showIf:()=>!0},{label:"My Products",icon:"bi-box2",routerLink:"/components/productinventory",showIf:()=>this.userRole==="FARMER"},{label:"Orders",icon:"bi-receipt",routerLink:"/components/orders",showIf:()=>!0},{label:"Settings",icon:"bi-gear",routerLink:"/components/setting",showIf:()=>!0},{label:"Add Product",icon:"bi-plus-circle",action:()=>this.router.navigate(["/components/product"]),showIf:()=>this.userRole==="FARMER"},{label:"Logout",icon:"bi-box-arrow-right",action:()=>this.logout(),showIf:()=>!0,class:"danger"}];static \u0275fac=function(t){return new(t||i)(De(_n),De(tn),De(sn),De(on),De(Gr),De(qr),De(Ot),De(va))};static \u0275cmp=Ct({type:i,selectors:[["app-navbar"]],hostBindings:function(t,n){t&1&&Qe("keydown.escape",function(){return n.onEscape()},!1,Is)("click",function(s){return n.onClickOutside(s.target)},!1,Is)},decls:28,vars:21,consts:[["authButtons",""],[1,"agri-navbar",3,"ngStyle"],[1,"agri-navbar__inner"],[1,"agri-navbar__row","agri-navbar__row--primary"],[1,"agri-navbar__left"],["type","button","aria-label","Open sidebar",1,"menu-toggle",3,"click"],[1,"bi","bi-list"],["routerLink","/","aria-label","Go to home",1,"brand-link"],["src","images/logo.jpg","alt","AgriMandi logo",1,"brand-logo"],[1,"brand-name"],[1,"agri-navbar__center"],[1,"search-form","search-form--desktop",3,"submit"],[1,"search-shell"],["aria-hidden","true",1,"bi","bi-search","search-icon"],["type","text","name","globalSearchDesktop","placeholder","Search products, farmers, buyers...","autocomplete","off","aria-label","Global search","aria-autocomplete","list","aria-controls","global-search-list",1,"search-input",3,"ngModelChange","focus","input","keydown","ngModel"],["type","button","class","search-clear","aria-label","Clear search",3,"click",4,"ngIf"],["id","global-search-list","class","search-suggestions","role","listbox",4,"ngIf"],[1,"agri-navbar__right"],["class","notification-dropdown",4,"ngIf"],[4,"ngIf","ngIfElse"],[1,"agri-navbar__row","agri-navbar__row--mobile-search"],[1,"search-form",3,"submit"],["type","text","name","globalSearchMobile","placeholder","Search products, farmers, buyers...","autocomplete","off","aria-label","Global search","aria-autocomplete","list","aria-controls","global-search-list",1,"search-input",3,"ngModelChange","focus","input","keydown","ngModel"],["type","button","aria-label","Clear search",1,"search-clear",3,"click"],[1,"bi","bi-x-circle"],["id","global-search-list","role","listbox",1,"search-suggestions"],["class","search-suggestion-item","role","option",3,"id","is-active","mousedown",4,"ngFor","ngForOf"],["class","search-empty",4,"ngIf"],["role","option",1,"search-suggestion-item",3,"mousedown","id"],[1,"suggestion-main"],["aria-hidden","true",1,"bi",3,"ngClass"],[1,"suggestion-type"],[1,"search-empty"],[1,"notification-dropdown"],["type","button","aria-label","Open notifications",1,"icon-btn",3,"click"],["aria-hidden","true",1,"bi","bi-bell-fill"],["class","notification-badge",4,"ngIf"],["class","dropdown-panel notification-panel",4,"ngIf"],[1,"notification-badge"],[1,"dropdown-panel","notification-panel"],[1,"dropdown-header"],["class","dropdown-empty",4,"ngIf"],["type","button","class","dropdown-item",4,"ngFor","ngForOf"],[1,"dropdown-empty"],["type","button",1,"dropdown-item"],["aria-hidden","true",1,"bi","bi-dot"],[1,"user-dropdown"],["type","button","aria-label","Open user profile menu",1,"profile-btn",3,"click"],["alt","User avatar",1,"profile-avatar",3,"src"],[1,"profile-name"],["aria-hidden","true",1,"bi","bi-chevron-down","profile-arrow"],["class","dropdown-panel profile-panel",4,"ngIf"],[1,"dropdown-panel","profile-panel"],["type","button","class","dropdown-item",3,"dropdown-item--danger","hidden","click",4,"ngFor","ngForOf"],["type","button",1,"dropdown-item",3,"click","hidden"],[1,"auth-actions"],["routerLink","/auth/login",1,"btn","btn--ghost"],["routerLink","/auth/signup",1,"btn","btn--solid"]],template:function(t,n){if(t&1){let r=vt();v(0,"nav",1)(1,"div",2)(2,"div",3)(3,"div",4)(4,"button",5),Qe("click",function(){return Ae(r),Re(n.toggleSidebar())}),ce(5,"i",6),w(),v(6,"a",7),ce(7,"img",8),v(8,"span",9),I(9,"AgriMandi"),w()()(),v(10,"div",10)(11,"form",11),Qe("submit",function(){return Ae(r),Re(n.submitSearch())}),v(12,"div",12),ce(13,"i",13),v(14,"input",14),at("ngModelChange",function(o){return Ae(r),ot(n.searchQuery,o)||(n.searchQuery=o),Re(o)}),Qe("focus",function(){return Ae(r),Re(n.openSearchDropdown())})("input",function(){return Ae(r),Re(n.onSearchInputChange(n.searchQuery))})("keydown",function(o){return Ae(r),Re(n.onSearchKeydown(o))}),w(),ze(15,Im,2,0,"button",15)(16,Lm,3,2,"ul",16),w()()(),v(17,"div",17),ze(18,km,5,3,"div",18)(19,Vm,8,4,"ng-container",19)(20,Hm,5,0,"ng-template",null,0,lr),w()(),v(22,"div",20)(23,"form",21),Qe("submit",function(){return Ae(r),Re(n.submitSearch())}),v(24,"div",12),ce(25,"i",13),v(26,"input",22),at("ngModelChange",function(o){return Ae(r),ot(n.searchQuery,o)||(n.searchQuery=o),Re(o)}),Qe("focus",function(){return Ae(r),Re(n.openSearchDropdown())})("input",function(){return Ae(r),Re(n.onSearchInputChange(n.searchQuery))})("keydown",function(o){return Ae(r),Re(n.onSearchKeydown(o))}),w(),ze(27,Gm,2,0,"button",15),w()()()()()}if(t&2){let r=Or(21);Q("ngStyle",Nt(19,Rm,n.selectedColor||"rgba(34, 197, 94, 0.85)")),L(4),mn("is-active",n.sidebarActive),L(8),mn("is-open",n.searchOpen),L(2),st("ngModel",n.searchQuery),Ur("aria-expanded",n.searchOpen)("aria-activedescendant",n.highlightedSuggestionIndex>=0?n.getSuggestionId(n.highlightedSuggestionIndex):null),L(),Q("ngIf",n.searchQuery),L(),Q("ngIf",n.searchOpen),L(2),Q("ngIf",n.isLoggedIn),L(),Q("ngIf",n.isLoggedIn)("ngIfElse",r),L(5),mn("is-open",n.searchOpen),L(2),st("ngModel",n.searchQuery),Ur("aria-expanded",n.searchOpen)("aria-activedescendant",n.highlightedSuggestionIndex>=0?n.getSuggestionId(n.highlightedSuggestionIndex):null),L(),Q("ngIf",n.searchQuery)}},dependencies:[Fi,kr,Lt,gn,rn,In,Pn,Ln,ni,Qn,ei,ti,Ui,Ni],styles:["[_nghost-%COMP%]{--nav-primary: #22c55e;--nav-primary-dark: #16a34a;--nav-bg-light: #f8fafc;--nav-text-dark: #1f2937;--nav-hover: rgba(255, 255, 255, .15);--nav-border: rgba(255, 255, 255, .24)}.agri-navbar[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;z-index:900;box-shadow:0 14px 34px #081c1540;backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px)}.agri-navbar__inner[_ngcontent-%COMP%]{max-width:100%;margin:0 auto;padding:6px 24px 8px;border-radius:0 0 20px 20px}.agri-navbar__row[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}.agri-navbar__row--primary[_ngcontent-%COMP%]{min-height:64px;gap:16px}.agri-navbar__left[_ngcontent-%COMP%], .agri-navbar__right[_ngcontent-%COMP%]{display:flex;align-items:center;gap:16px}.agri-navbar__center[_ngcontent-%COMP%]{flex:1;display:flex;justify-content:center;min-width:0}.menu-toggle[_ngcontent-%COMP%]{width:40px;height:40px;border:0;border-radius:12px;display:inline-flex;align-items:center;justify-content:center;font-size:20px;color:#fff;background:#ffffff1f;transition:transform .2s ease,background-color .2s ease}.menu-toggle[_ngcontent-%COMP%]:hover{background:var(--nav-hover)}.menu-toggle.is-active[_ngcontent-%COMP%]{transform:rotate(90deg)}.brand-link[_ngcontent-%COMP%]{display:inline-flex;align-items:center;text-decoration:none;gap:10px;transition:transform .2s ease}.brand-link[_ngcontent-%COMP%]:hover{transform:scale(1.03)}.brand-logo[_ngcontent-%COMP%]{width:36px;height:36px;border-radius:50%;object-fit:cover;border:2px solid rgba(255,255,255,.6)}.brand-name[_ngcontent-%COMP%]{color:#fff;font-size:22px;font-weight:600;letter-spacing:.2px}.search-form[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center}.search-form--desktop[_ngcontent-%COMP%]{max-width:380px}.search-shell[_ngcontent-%COMP%]{width:100%;position:relative;background:#ffffffd9;border-radius:30px;border:1px solid rgba(16,45,29,.08);display:flex;align-items:center;min-height:40px;transition:box-shadow .2s ease,border-color .2s ease}.search-shell.is-open[_ngcontent-%COMP%], .search-shell[_ngcontent-%COMP%]:focus-within{border-color:#22c55eb8;box-shadow:0 0 0 4px #22c55e33}.search-icon[_ngcontent-%COMP%]{position:absolute;left:14px;color:#64748b;font-size:16px}.search-input[_ngcontent-%COMP%]{width:100%;height:40px;border:0;background:transparent;padding:0 38px;font-size:14px;color:var(--nav-text-dark);outline:none}.search-input[_ngcontent-%COMP%]::placeholder{color:#94a3b8}.search-clear[_ngcontent-%COMP%]{position:absolute;right:12px;border:0;background:transparent;color:#6b7280;font-size:16px}.search-suggestions[_ngcontent-%COMP%]{position:absolute;top:calc(100% + 8px);left:0;width:100%;list-style:none;margin:0;padding:8px;background:#fff;border-radius:14px;box-shadow:0 16px 28px #0f172a29;border:1px solid rgba(15,23,42,.08);max-height:280px;overflow-y:auto;z-index:950}.search-suggestion-item[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:10px 12px;border-radius:10px;cursor:pointer;color:#1f2937}.search-suggestion-item[_ngcontent-%COMP%]:hover, .search-suggestion-item.is-active[_ngcontent-%COMP%]{background:#effdf3}.suggestion-main[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:8px}.suggestion-type[_ngcontent-%COMP%]{font-size:11px;font-weight:600;color:#15803d;background:#dcfce7;border-radius:999px;padding:3px 8px}.search-empty[_ngcontent-%COMP%]{color:#64748b;padding:10px 12px;font-size:13px}.icon-btn[_ngcontent-%COMP%], .profile-btn[_ngcontent-%COMP%]{border:0;background:#ffffff1f;color:#fff;transition:background-color .2s ease,transform .2s ease}.icon-btn[_ngcontent-%COMP%]:hover, .profile-btn[_ngcontent-%COMP%]:hover{background:var(--nav-hover)}.icon-btn[_ngcontent-%COMP%]{width:38px;height:38px;border-radius:12px;position:relative;display:inline-flex;align-items:center;justify-content:center;font-size:20px}.icon-btn[_ngcontent-%COMP%]:hover{transform:scale(1.05)}.notification-badge[_ngcontent-%COMP%]{position:absolute;top:6px;right:6px;min-width:16px;height:16px;line-height:16px;font-size:10px;font-weight:700;text-align:center;border-radius:999px;background:#ef4444;color:#fff}.profile-btn[_ngcontent-%COMP%]{min-height:38px;border-radius:30px;display:inline-flex;align-items:center;gap:8px;padding:6px 12px}.profile-avatar[_ngcontent-%COMP%]{width:34px;height:34px;border-radius:50%;object-fit:cover;border:2px solid rgba(255,255,255,.65)}.profile-name[_ngcontent-%COMP%]{font-size:14px;max-width:130px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.profile-arrow[_ngcontent-%COMP%]{font-size:11px}.notification-dropdown[_ngcontent-%COMP%], .user-dropdown[_ngcontent-%COMP%]{position:relative}.dropdown-panel[_ngcontent-%COMP%]{position:absolute;right:0;top:calc(100% + 10px);width:220px;background:#fff;border-radius:14px;border:1px solid rgba(15,23,42,.08);box-shadow:0 16px 28px #0f172a29;padding:8px;animation:_ngcontent-%COMP%_fade-slide .16s ease;z-index:960}.notification-panel[_ngcontent-%COMP%]{width:280px}.dropdown-header[_ngcontent-%COMP%]{font-size:13px;font-weight:700;color:#0f172a;padding:8px 10px}.dropdown-empty[_ngcontent-%COMP%]{font-size:13px;color:#64748b;padding:8px 10px}.dropdown-item[_ngcontent-%COMP%]{width:100%;border:0;background:transparent;border-radius:10px;padding:10px;display:inline-flex;align-items:center;gap:8px;color:#1f2937;text-align:left}.dropdown-item[_ngcontent-%COMP%]:hover{background:#f1f5f9}.dropdown-item--danger[_ngcontent-%COMP%]{color:#dc2626}.auth-actions[_ngcontent-%COMP%]{display:flex;gap:8px}.btn[_ngcontent-%COMP%]{border-radius:30px;padding:9px 14px;font-size:14px;font-weight:600;text-decoration:none;transition:all .2s ease}.btn--ghost[_ngcontent-%COMP%]{color:#fff;border:1px solid rgba(255,255,255,.75)}.btn--ghost[_ngcontent-%COMP%]:hover{background:var(--nav-hover)}.btn--solid[_ngcontent-%COMP%]{color:#115e35;background:#dcfce7}.btn--solid[_ngcontent-%COMP%]:hover{background:#bbf7d0}.agri-navbar__row--mobile-search[_ngcontent-%COMP%]{display:none;padding-top:8px}@keyframes _ngcontent-%COMP%_fade-slide{0%{opacity:0;transform:translateY(-6px)}to{opacity:1;transform:translateY(0)}}@media (max-width: 1024px){.search-form--desktop[_ngcontent-%COMP%]{max-width:250px}.profile-name[_ngcontent-%COMP%]{display:none}}@media (max-width: 768px){.agri-navbar__inner[_ngcontent-%COMP%]{padding:6px 16px 8px}.agri-navbar__center[_ngcontent-%COMP%]{display:none}.brand-name[_ngcontent-%COMP%]{font-size:20px}.notification-panel[_ngcontent-%COMP%], .dropdown-panel[_ngcontent-%COMP%]{right:-8px;max-width:calc(100vw - 24px)}.agri-navbar__row--mobile-search[_ngcontent-%COMP%]{display:flex}.auth-actions[_ngcontent-%COMP%]{gap:6px}.btn[_ngcontent-%COMP%]{padding:8px 10px;font-size:13px}}"]})};var Wm=i=>({color:i}),Xm=(i,e)=>({"width.%":i,"background-color":e});function qm(i,e){i&1&&ce(0,"i",15)}function Ym(i,e){i&1&&ce(0,"i",16)}function $m(i,e){i&1&&ce(0,"i",17)}function jm(i,e){i&1&&ce(0,"i",18)}function Zm(i,e){if(i&1){let t=vt();v(0,"div",2),Qe("click",function(){let r=Ae(t).$implicit,s=_e();return Re(s.closeAlert(r.id))}),v(1,"div",3)(2,"div",4)(3,"span",5),un(4,6),ze(5,qm,1,0,"i",7)(6,Ym,1,0,"i",8)(7,$m,1,0,"i",9)(8,jm,1,0,"i",10),dn(),w(),v(9,"span",11),I(10),w()(),v(11,"button",12),Qe("click",function(r){let s=Ae(t).$implicit;return _e().closeAlert(s.id),Re(r.stopPropagation())}),w()(),v(12,"div",13),ce(13,"div",14),w()()}if(i&2){let t=e.$implicit,n=_e();Q("ngClass",n.getAlertClasses(t.type)),L(3),Q("ngStyle",Nt(9,Wm,n.getIconColor(t.type))),L(),Q("ngSwitch",t.type),L(),Q("ngSwitchCase","success"),L(),Q("ngSwitchCase","error"),L(),Q("ngSwitchCase","warning"),L(),Q("ngSwitchCase","info"),L(2),wt(" ",t.message," "),L(3),Q("ngStyle",nn(11,Xm,n.progressMap[t.id],n.getProgressColor(t.type)))}}var ba=class i{constructor(e){this.alertService=e;this.alertService.alerts$.subscribe(t=>{this.alerts=t,t.forEach(n=>{this.timers[n.id]||this.startTimer(n.id)})})}alerts=[];progressMap={};timers={};startTimer(e){this.progressMap[e]=100;let t=4e3,n=50,r=n/t*100;this.timers[e]=setInterval(()=>{this.progressMap[e]-=r,this.progressMap[e]<=0&&(this.progressMap[e]=0,clearInterval(this.timers[e]),this.closeAlert(e))},n)}closeAlert(e){clearInterval(this.timers[e]),delete this.timers[e],delete this.progressMap[e],this.alertService.removeAlert(e)}getAlertClasses(e){switch(e){case"success":return["bg-gradient-to-r","from-green-600","to-green-700"];case"error":return["bg-gradient-to-r","from-red-600","to-red-700"];case"warning":return["bg-gradient-to-r","from-yellow-500","to-yellow-600"];case"info":return["bg-gradient-to-r","from-blue-600","to-blue-700"];default:return["bg-gray-600"]}}getProgressColor(e){switch(e){case"success":return"#34D399";case"error":return"#F87171";case"warning":return"#FBBF24";case"info":return"#60A5FA";default:return"#ffffff"}}getIconColor(e){switch(e){case"success":return"#10B981";case"error":return"#EF4444";case"warning":return"#F59E0B";case"info":return"#3B82F6";default:return"#FFFFFF"}}static \u0275fac=function(t){return new(t||i)(De(Fn))};static \u0275cmp=Ct({type:i,selectors:[["app-alert"]],decls:2,vars:1,consts:[[1,"fixed","top-20","right-5","sm:right-10","flex","flex-col","gap-3","z-[9999]"],["class","rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 transform scale-95 animate-[slideFade_0.5s_ease-out_1] w-[90%] sm:w-[400px] cursor-pointer",3,"ngClass","click",4,"ngFor","ngForOf"],[1,"rounded-2xl","shadow-2xl","overflow-hidden","transition-all","duration-300","transform","scale-95","animate-[slideFade_0.5s_ease-out_1]","w-[90%]","sm:w-[400px]","cursor-pointer",3,"click","ngClass"],[1,"d-flex","justify-between","items-center","px-5","py-4","gap-3"],[1,"d-flex","items-center","gap-3","flex-1"],[1,"text-2xl","sm:text-3xl",3,"ngStyle"],[3,"ngSwitch"],["class","bi bi-check-circle-fill",4,"ngSwitchCase"],["class","bi bi-x-circle-fill",4,"ngSwitchCase"],["class","bi bi-exclamation-triangle-fill",4,"ngSwitchCase"],["class","bi bi-info-circle-fill",4,"ngSwitchCase"],[1,"fw-bold","tracking-wide","text-base","sm:text-lg","text-white","drop-shadow-lg"],["type","button","aria-label","Close",1,"btn-close","btn-close-white","ms-3","hover:scale-110","transition-transform",3,"click"],[1,"h-1","w-full","rounded-full","bg-white/30"],[1,"h-1","rounded-full","transition-all","duration-50",3,"ngStyle"],[1,"bi","bi-check-circle-fill"],[1,"bi","bi-x-circle-fill"],[1,"bi","bi-exclamation-triangle-fill"],[1,"bi","bi-info-circle-fill"]],template:function(t,n){t&1&&(v(0,"div",0),ze(1,Zm,14,14,"div",1),w()),t&2&&(L(),Q("ngForOf",n.alerts))},dependencies:[Lt,gn,rn,Pn,Mu,wu],encapsulation:2})};var Zf=lu(wc());function Jm(i,e){if(i&1&&ce(0,"span",8),i&2){let t=e.index,n=_e();Q("ngStyle",n.getParticleStyle(t))}}var Sa=class i{constructor(e,t){this.platformId=e;this.colorService=t}selectedColor="#22c55e";styleVars={};particles=Array.from({length:12},(e,t)=>t);subscriptions=new Fr;ngOnInit(){qt(this.platformId)&&(this.subscriptions.add(this.colorService.selectedColor$.subscribe(e=>{this.selectedColor=this.normalizeHexColor(e)||"#22c55e",this.setThemeVariables()})),this.setThemeVariables())}ngAfterViewInit(){}ngOnDestroy(){this.subscriptions.unsubscribe()}getParticleStyle(e){let t=(e*8+6)%95,n=8+e%5*5,r=e%6*.7,s=12+e%4*4;return{left:`${t}%`,width:`${n}px`,height:`${n}px`,animationDelay:`${r}s`,animationDuration:`${s}s`}}setThemeVariables(){let e=this.adjustShade(this.selectedColor,-25),t=this.adjustShade(this.selectedColor,18);this.styleVars={"--bg-primary":this.selectedColor,"--bg-dark":e,"--bg-soft":t}}normalizeHexColor(e){let t=e?.trim();if(!t)return null;let n=/^#([A-Fa-f0-9]{6})$/,r=/^#([A-Fa-f0-9]{3})$/;if(n.test(t))return t;let s=t.match(r);if(s){let[o,a,l]=s[1].split("");return`#${o}${o}${a}${a}${l}${l}`}return null}adjustShade(e,t){let n=e.replace("#",""),r=parseInt(n,16),s=t/100,o=r>>16&255,a=r>>8&255,l=r&255,c=u=>{let d=u+(s>=0?(255-u)*s:u*s);return Math.max(0,Math.min(255,Math.round(d)))};return`#${(c(o)<<16|c(a)<<8|c(l)).toString(16).padStart(6,"0")}`}static \u0275fac=function(t){return new(t||i)(De(tn),De(sn))};static \u0275cmp=Ct({type:i,selectors:[["app-design"]],decls:8,vars:2,consts:[["id","background-wrapper","aria-hidden","true",3,"ngStyle"],[1,"bg-gradient-layer"],[1,"bg-grid-layer"],[1,"bg-orb","bg-orb--left"],[1,"bg-orb","bg-orb--right"],[1,"bg-orb","bg-orb--bottom"],[1,"particle-field"],["class","particle",3,"ngStyle",4,"ngFor","ngForOf"],[1,"particle",3,"ngStyle"]],template:function(t,n){t&1&&(v(0,"div",0),ce(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),v(6,"div",6),ze(7,Jm,1,1,"span",7),w()()),t&2&&(Q("ngStyle",n.styleVars),L(7),Q("ngForOf",n.particles))},dependencies:[Lt,rn,Pn],styles:["#background-wrapper[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%;overflow:hidden;z-index:0;pointer-events:none;--bg-primary: #22c55e;--bg-dark: #168241;--bg-soft: #61d888}.bg-gradient-layer[_ngcontent-%COMP%]{position:absolute;inset:0;background:radial-gradient(circle at 15% 20%,color-mix(in srgb,var(--bg-soft) 65%,#ffffff 35%) 0%,transparent 40%),radial-gradient(circle at 84% 10%,color-mix(in srgb,var(--bg-primary) 75%,#ffffff 25%) 0%,transparent 42%),linear-gradient(130deg,var(--bg-dark) 0%,var(--bg-primary) 52%,var(--bg-soft) 100%);filter:saturate(1.1)}.bg-grid-layer[_ngcontent-%COMP%]{position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.08) 1px,transparent 1px);background-size:48px 48px;mask-image:linear-gradient(to bottom,rgba(0,0,0,.5),transparent 78%);opacity:.45}.bg-orb[_ngcontent-%COMP%]{position:absolute;border-radius:999px;filter:blur(2px);opacity:.35;mix-blend-mode:screen;animation:_ngcontent-%COMP%_pulse-orb 9s ease-in-out infinite}.bg-orb--left[_ngcontent-%COMP%]{width:420px;height:420px;left:-120px;top:-90px;background:radial-gradient(circle,#ffffff6b,#fff0 70%)}.bg-orb--right[_ngcontent-%COMP%]{width:360px;height:360px;right:-80px;top:60px;background:radial-gradient(circle,#e9fff273,#e9fff200 72%);animation-delay:1.8s}.bg-orb--bottom[_ngcontent-%COMP%]{width:540px;height:540px;left:25%;bottom:-300px;background:radial-gradient(circle,#ffffff47,#fff0 74%);animation-delay:3.3s}.particle-field[_ngcontent-%COMP%]{position:absolute;inset:0}.particle[_ngcontent-%COMP%]{position:absolute;bottom:-24px;border-radius:999px;background:#ffffff80;box-shadow:0 0 0 4px #ffffff0f;animation-name:_ngcontent-%COMP%_float-up;animation-timing-function:linear;animation-iteration-count:infinite}@keyframes _ngcontent-%COMP%_float-up{0%{transform:translateZ(0) scale(1);opacity:0}10%{opacity:.65}80%{opacity:.35}to{transform:translate3d(24px,-105vh,0) scale(1.25);opacity:0}}@keyframes _ngcontent-%COMP%_pulse-orb{0%,to{transform:translateY(0) scale(1)}50%{transform:translateY(-16px) scale(1.05)}}@media (max-width: 768px){.bg-grid-layer[_ngcontent-%COMP%]{opacity:.28;background-size:36px 36px}.bg-orb--left[_ngcontent-%COMP%], .bg-orb--right[_ngcontent-%COMP%]{width:280px;height:280px}.bg-orb--bottom[_ngcontent-%COMP%]{width:360px;height:360px;left:8%}}"]})};var xl="176";var Md=0,xh=1,wd=2;var vh=1,Ed=2,ui=3,wi=0,Kt=1,fn=2,Ai=0,vr=1,yo=2,yh=3,bh=4,Cd=5,ji=100,Td=101,Ad=102,Rd=103,Id=104,Pd=200,Dd=201,Ld=202,Fd=203,Xa=204,qa=205,Nd=206,Ud=207,Od=208,kd=209,Bd=210,zd=211,Vd=212,Hd=213,Gd=214,vl=0,yl=1,bl=2,yr=3,Sl=4,Ml=5,wl=6,El=7,Sh=0,Wd=1,Xd=2,Ri=0,qd=1,Yd=2,$d=3,jd=4,Zd=5,Jd=6,Kd=7;var rh=300,Er=301,Cr=302,Cl=303,Tl=304,bo=306,Ya=1e3,$i=1001,$a=1002,Un=1003,Qd=1004;var So=1005;var Yn=1006,Al=1007;var nr=1008;var Zn=1009,Mh=1010,wh=1011,ys=1012,Rl=1013,ir=1014,di=1015,bs=1016,Il=1017,Pl=1018,Ss=1020,Eh=35902,Ch=1021,Th=1022,kn=1023,os=1026,Ms=1027,Ah=1028,Dl=1029,Rh=1030,Ll=1031;var Fl=1033,Mo=33776,wo=33777,Eo=33778,Co=33779,Nl=35840,Ul=35841,Ol=35842,kl=35843,Bl=36196,zl=37492,Vl=37496,Hl=37808,Gl=37809,Wl=37810,Xl=37811,ql=37812,Yl=37813,$l=37814,jl=37815,Zl=37816,Jl=37817,Kl=37818,Ql=37819,ec=37820,tc=37821,To=36492,nc=36494,ic=36495,Ih=36283,rc=36284,sc=36285,oc=36286;var qs=2300,ja=2301,Wa=2302,sh=2400,oh=2401,ah=2402;var ef=3200,tf=3201;var Ph=0,nf=1,Ii="",wn="srgb",br="srgb-linear",Ys="linear",yt="srgb";var _r=7680;var lh=519,rf=512,sf=513,of=514,Dh=515,af=516,lf=517,cf=518,hf=519,ch=35044;var Lh="300 es",li=2e3,$s=2001;var Ei=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},an=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Dc=Math.PI/180,js=180/Math.PI;function ws(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(an[i&255]+an[i>>8&255]+an[i>>16&255]+an[i>>24&255]+"-"+an[e&255]+an[e>>8&255]+"-"+an[e>>16&15|64]+an[e>>24&255]+"-"+an[t&63|128]+an[t>>8&255]+"-"+an[t>>16&255]+an[t>>24&255]+an[n&255]+an[n>>8&255]+an[n>>16&255]+an[n>>24&255]).toLowerCase()}function lt(i,e,t){return Math.max(e,Math.min(t,i))}function Km(i,e){return(i%e+e)%e}function Lc(i,e,t){return(1-t)*i+t*e}function ks(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function xn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var ge=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},et=class i{constructor(e,t,n,r,s,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c)}set(e,t,n,r,s,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],y=r[0],m=r[3],f=r[6],A=r[1],T=r[4],S=r[7],F=r[2],D=r[5],P=r[8];return s[0]=o*y+a*A+l*F,s[3]=o*m+a*T+l*D,s[6]=o*f+a*S+l*P,s[1]=c*y+h*A+u*F,s[4]=c*m+h*T+u*D,s[7]=c*f+h*S+u*P,s[2]=d*y+p*A+g*F,s[5]=d*m+p*T+g*D,s[8]=d*f+p*S+g*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*s*h+n*a*l+r*s*c-r*o*l}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*s,p=c*s-o*l,g=t*u+n*d+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return e[0]=u*y,e[1]=(r*c-h*n)*y,e[2]=(a*n-r*o)*y,e[3]=d*y,e[4]=(h*t-r*l)*y,e[5]=(r*s-a*t)*y,e[6]=p*y,e[7]=(n*l-c*t)*y,e[8]=(o*t-n*s)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Fc.makeScale(e,t)),this}rotate(e){return this.premultiply(Fc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Fc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Fc=new et;function Fh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Zs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function uf(){let i=Zs("canvas");return i.style.display="block",i}var Ku={};function Ao(i){i in Ku||(Ku[i]=!0,console.warn(i))}function df(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function ff(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function pf(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var Qu=new et().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ed=new et().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Qm(){let i={enabled:!0,workingColorSpace:br,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===yt&&(r.r=Mi(r.r),r.g=Mi(r.g),r.b=Mi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===yt&&(r.r=ss(r.r),r.g=ss(r.g),r.b=ss(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ii?Ys:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[br]:{primaries:e,whitePoint:n,transfer:Ys,toXYZ:Qu,fromXYZ:ed,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:wn},outputColorSpaceConfig:{drawingBufferColorSpace:wn}},[wn]:{primaries:e,whitePoint:n,transfer:yt,toXYZ:Qu,fromXYZ:ed,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:wn}}}),i}var pt=Qm();function Mi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ss(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Yr,Za=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Yr===void 0&&(Yr=Zs("canvas")),Yr.width=e.width,Yr.height=e.height;let r=Yr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Yr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Zs("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Mi(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Mi(t[n]/255)*255):t[n]=Mi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},eg=0,as=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:eg++}),this.uuid=ws(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Nc(r[o].image)):s.push(Nc(r[o]))}else s=Nc(r);n.url=s}return t||(e.images[this.uuid]=n),n}};function Nc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Za.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var tg=0,rr=(()=>{class i extends Ei{constructor(t=i.DEFAULT_IMAGE,n=i.DEFAULT_MAPPING,r=$i,s=$i,o=Yn,a=nr,l=kn,c=Zn,h=i.DEFAULT_ANISOTROPY,u=Ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tg++}),this.uuid=ws(),this.name="",this.source=new as(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=s,this.magFilter=o,this.minFilter=a,this.anisotropy=h,this.format=l,this.internalFormat=null,this.type=c,this.offset=new ge(0,0),this.repeat=new ge(1,1),this.center=new ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isTextureArray=t.isTextureArray,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==rh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ya:t.x=t.x-Math.floor(t.x);break;case $i:t.x=t.x<0?0:1;break;case $a:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ya:t.y=t.y-Math.floor(t.y);break;case $i:t.y=t.y<0?0:1;break;case $a:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}return i.DEFAULT_IMAGE=null,i.DEFAULT_MAPPING=rh,i.DEFAULT_ANISOTROPY=1,i})(),It=class i{constructor(e=0,t=0,n=0,r=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],g=l[9],y=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+y)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let T=(c+1)/2,S=(p+1)/2,F=(f+1)/2,D=(h+d)/4,P=(u+y)/4,U=(g+m)/4;return T>S&&T>F?T<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(T),r=D/n,s=P/n):S>F?S<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),n=D/r,s=U/r):F<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(F),n=P/s,r=U/s),this.set(n,r,s,t),this}let A=Math.sqrt((m-g)*(m-g)+(u-y)*(u-y)+(d-h)*(d-h));return Math.abs(A)<.001&&(A=1),this.x=(m-g)/A,this.y=(u-y)/A,this.z=(d-h)/A,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this.z=lt(this.z,e.z,t.z),this.w=lt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this.z=lt(this.z,e,t),this.w=lt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ja=class extends Ei{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth?n.depth:1,this.scissor=new It(0,0,e,t),this.scissorTest=!1,this.viewport=new It(0,0,e,t);let r={width:e,height:t,depth:this.depth};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},n);let s=new rr(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new as(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},hi=class extends Ja{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Js=class extends rr{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Un,this.minFilter=Un,this.wrapR=$i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ka=class extends rr{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Un,this.minFilter=Un,this.wrapR=$i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ci=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],h=n[r+2],u=n[r+3],d=s[o+0],p=s[o+1],g=s[o+2],y=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=y;return}if(u!==y||l!==d||c!==p||h!==g){let m=1-a,f=l*d+c*p+h*g+u*y,A=f>=0?1:-1,T=1-f*f;if(T>Number.EPSILON){let F=Math.sqrt(T),D=Math.atan2(F,f*A);m=Math.sin(m*D)/F,a=Math.sin(a*D)/F}let S=a*A;if(l=l*m+d*S,c=c*m+p*S,h=h*m+g*S,u=u*m+y*S,m===1-a){let F=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=F,c*=F,h*=F,u*=F}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,s,o){let a=n[r],l=n[r+1],c=n[r+2],h=n[r+3],u=s[o],d=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+h*u+l*p-c*d,e[t+1]=l*g+h*d+c*u-a*p,e[t+2]=c*g+h*p+a*d-l*u,e[t+3]=h*g-a*u-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(r/2),u=a(s/2),d=l(n/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(n>a&&n>u){let p=2*Math.sqrt(1+n-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>u){let p=2*Math.sqrt(1+a-n-u);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-n-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(lt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+r*c-s*l,this._y=r*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-r*a,this._w=o*h-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,r=this._y,s=this._z,o=this._w,a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;let l=1-a*a;if(l<=Number.EPSILON){let p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=r*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},z=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(td.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(td.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*n),h=2*(a*t-s*r),u=2*(s*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-s*u,this.z=r+l*u+s*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this.z=lt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this.z=lt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Uc.copy(this).projectOnVector(e),this.sub(Uc)}reflect(e){return this.sub(Uc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Uc=new z,td=new Ci,Zi=class{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Wn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Wn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Wn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Wn):Wn.fromBufferAttribute(s,o),Wn.applyMatrix4(e.matrixWorld),this.expandByPoint(Wn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ma.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ma.copy(n.boundingBox)),Ma.applyMatrix4(e.matrixWorld),this.union(Ma)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Wn),Wn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Bs),wa.subVectors(this.max,Bs),$r.subVectors(e.a,Bs),jr.subVectors(e.b,Bs),Zr.subVectors(e.c,Bs),Vi.subVectors(jr,$r),Hi.subVectors(Zr,jr),fr.subVectors($r,Zr);let t=[0,-Vi.z,Vi.y,0,-Hi.z,Hi.y,0,-fr.z,fr.y,Vi.z,0,-Vi.x,Hi.z,0,-Hi.x,fr.z,0,-fr.x,-Vi.y,Vi.x,0,-Hi.y,Hi.x,0,-fr.y,fr.x,0];return!Oc(t,$r,jr,Zr,wa)||(t=[1,0,0,0,1,0,0,0,1],!Oc(t,$r,jr,Zr,wa))?!1:(Ea.crossVectors(Vi,Hi),t=[Ea.x,Ea.y,Ea.z],Oc(t,$r,jr,Zr,wa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Wn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Wn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},xi=[new z,new z,new z,new z,new z,new z,new z,new z],Wn=new z,Ma=new Zi,$r=new z,jr=new z,Zr=new z,Vi=new z,Hi=new z,fr=new z,Bs=new z,wa=new z,Ea=new z,pr=new z;function Oc(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){pr.fromArray(i,s);let a=r.x*Math.abs(pr.x)+r.y*Math.abs(pr.y)+r.z*Math.abs(pr.z),l=e.dot(pr),c=t.dot(pr),h=n.dot(pr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var ng=new Zi,zs=new z,kc=new z,ls=class{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):ng.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;zs.subVectors(e,this.center);let t=zs.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(zs,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(kc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(zs.copy(e.center).add(kc)),this.expandByPoint(zs.copy(e.center).sub(kc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},vi=new z,Bc=new z,Ca=new z,Gi=new z,zc=new z,Ta=new z,Vc=new z,Ks=class{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,vi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=vi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(vi.copy(this.origin).addScaledVector(this.direction,t),vi.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Bc.copy(e).add(t).multiplyScalar(.5),Ca.copy(t).sub(e).normalize(),Gi.copy(this.origin).sub(Bc);let s=e.distanceTo(t)*.5,o=-this.direction.dot(Ca),a=Gi.dot(this.direction),l=-Gi.dot(Ca),c=Gi.lengthSq(),h=Math.abs(1-o*o),u,d,p,g;if(h>0)if(u=o*l-a,d=o*a-l,g=s*h,u>=0)if(d>=-g)if(d<=g){let y=1/h;u*=y,d*=y,p=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=s,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Bc).addScaledVector(Ca,d),p}intersectSphere(e,t){vi.subVectors(e.center,this.origin);let n=vi.dot(this.direction),r=vi.dot(vi)-n*n,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,vi)!==null}intersectTriangle(e,t,n,r,s){zc.subVectors(t,e),Ta.subVectors(n,e),Vc.crossVectors(zc,Ta);let o=this.direction.dot(Vc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Gi.subVectors(this.origin,e);let l=a*this.direction.dot(Ta.crossVectors(Gi,Ta));if(l<0)return null;let c=a*this.direction.dot(zc.cross(Gi));if(c<0||l+c>o)return null;let h=-a*Gi.dot(Vc);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Tt=class i{constructor(e,t,n,r,s,o,a,l,c,h,u,d,p,g,y,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c,h,u,d,p,g,y,m)}set(e,t,n,r,s,o,a,l,c,h,u,d,p,g,y,m){let f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=y,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,r=1/Jr.setFromMatrixColumn(e,0).length(),s=1/Jr.setFromMatrixColumn(e,1).length(),o=1/Jr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let d=o*h,p=o*u,g=a*h,y=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+g*c,t[5]=d-y*c,t[9]=-a*l,t[2]=y-d*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*h,p=l*u,g=c*h,y=c*u;t[0]=d+y*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=p*a-g,t[6]=y+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*h,p=l*u,g=c*h,y=c*u;t[0]=d-y*a,t[4]=-o*u,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*h,t[9]=y-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*h,p=o*u,g=a*h,y=a*u;t[0]=l*h,t[4]=g*c-p,t[8]=d*c+y,t[1]=l*u,t[5]=y*c+d,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,p=o*c,g=a*l,y=a*c;t[0]=l*h,t[4]=y-d*u,t[8]=g*u+p,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=p*u+g,t[10]=d-y*u}else if(e.order==="XZY"){let d=o*l,p=o*c,g=a*l,y=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+y,t[5]=o*h,t[9]=p*u-g,t[2]=g*u-p,t[6]=a*h,t[10]=y*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ig,e,rg)}lookAt(e,t,n){let r=this.elements;return Sn.subVectors(e,t),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),Wi.crossVectors(n,Sn),Wi.lengthSq()===0&&(Math.abs(n.z)===1?Sn.x+=1e-4:Sn.z+=1e-4,Sn.normalize(),Wi.crossVectors(n,Sn)),Wi.normalize(),Aa.crossVectors(Sn,Wi),r[0]=Wi.x,r[4]=Aa.x,r[8]=Sn.x,r[1]=Wi.y,r[5]=Aa.y,r[9]=Sn.y,r[2]=Wi.z,r[6]=Aa.z,r[10]=Sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],y=n[6],m=n[10],f=n[14],A=n[3],T=n[7],S=n[11],F=n[15],D=r[0],P=r[4],U=r[8],M=r[12],_=r[1],R=r[5],V=r[9],H=r[13],ee=r[2],K=r[6],J=r[10],te=r[14],X=r[3],me=r[7],ve=r[11],be=r[15];return s[0]=o*D+a*_+l*ee+c*X,s[4]=o*P+a*R+l*K+c*me,s[8]=o*U+a*V+l*J+c*ve,s[12]=o*M+a*H+l*te+c*be,s[1]=h*D+u*_+d*ee+p*X,s[5]=h*P+u*R+d*K+p*me,s[9]=h*U+u*V+d*J+p*ve,s[13]=h*M+u*H+d*te+p*be,s[2]=g*D+y*_+m*ee+f*X,s[6]=g*P+y*R+m*K+f*me,s[10]=g*U+y*V+m*J+f*ve,s[14]=g*M+y*H+m*te+f*be,s[3]=A*D+T*_+S*ee+F*X,s[7]=A*P+T*R+S*K+F*me,s[11]=A*U+T*V+S*J+F*ve,s[15]=A*M+T*H+S*te+F*be,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],p=e[14],g=e[3],y=e[7],m=e[11],f=e[15];return g*(+s*l*u-r*c*u-s*a*d+n*c*d+r*a*p-n*l*p)+y*(+t*l*p-t*c*d+s*o*d-r*o*p+r*c*h-s*l*h)+m*(+t*c*u-t*a*p-s*o*u+n*o*p+s*a*h-n*c*h)+f*(-r*a*h-t*l*u+t*a*d+r*o*u-n*o*d+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],p=e[11],g=e[12],y=e[13],m=e[14],f=e[15],A=u*m*c-y*d*c+y*l*p-a*m*p-u*l*f+a*d*f,T=g*d*c-h*m*c-g*l*p+o*m*p+h*l*f-o*d*f,S=h*y*c-g*u*c+g*a*p-o*y*p-h*a*f+o*u*f,F=g*u*l-h*y*l-g*a*d+o*y*d+h*a*m-o*u*m,D=t*A+n*T+r*S+s*F;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/D;return e[0]=A*P,e[1]=(y*d*s-u*m*s-y*r*p+n*m*p+u*r*f-n*d*f)*P,e[2]=(a*m*s-y*l*s+y*r*c-n*m*c-a*r*f+n*l*f)*P,e[3]=(u*l*s-a*d*s-u*r*c+n*d*c+a*r*p-n*l*p)*P,e[4]=T*P,e[5]=(h*m*s-g*d*s+g*r*p-t*m*p-h*r*f+t*d*f)*P,e[6]=(g*l*s-o*m*s-g*r*c+t*m*c+o*r*f-t*l*f)*P,e[7]=(o*d*s-h*l*s+h*r*c-t*d*c-o*r*p+t*l*p)*P,e[8]=S*P,e[9]=(g*u*s-h*y*s-g*n*p+t*y*p+h*n*f-t*u*f)*P,e[10]=(o*y*s-g*a*s+g*n*c-t*y*c-o*n*f+t*a*f)*P,e[11]=(h*a*s-o*u*s-h*n*c+t*u*c+o*n*p-t*a*p)*P,e[12]=F*P,e[13]=(h*y*r-g*u*r+g*n*d-t*y*d-h*n*m+t*u*m)*P,e[14]=(g*a*r-o*y*r-g*n*l+t*y*l+o*n*m-t*a*m)*P,e[15]=(o*u*r-h*a*r+h*n*l-t*u*l-o*n*d+t*a*d)*P,this}scale(e){let t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,h*a+n,h*l-r*o,0,c*l-r*a,h*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,h=o+o,u=a+a,d=s*c,p=s*h,g=s*u,y=o*h,m=o*u,f=a*u,A=l*c,T=l*h,S=l*u,F=n.x,D=n.y,P=n.z;return r[0]=(1-(y+f))*F,r[1]=(p+S)*F,r[2]=(g-T)*F,r[3]=0,r[4]=(p-S)*D,r[5]=(1-(d+f))*D,r[6]=(m+A)*D,r[7]=0,r[8]=(g+T)*P,r[9]=(m-A)*P,r[10]=(1-(d+y))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements,s=Jr.set(r[0],r[1],r[2]).length(),o=Jr.set(r[4],r[5],r[6]).length(),a=Jr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Xn.copy(this);let c=1/s,h=1/o,u=1/a;return Xn.elements[0]*=c,Xn.elements[1]*=c,Xn.elements[2]*=c,Xn.elements[4]*=h,Xn.elements[5]*=h,Xn.elements[6]*=h,Xn.elements[8]*=u,Xn.elements[9]*=u,Xn.elements[10]*=u,t.setFromRotationMatrix(Xn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=li){let l=this.elements,c=2*s/(t-e),h=2*s/(n-r),u=(t+e)/(t-e),d=(n+r)/(n-r),p,g;if(a===li)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===$s)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=li){let l=this.elements,c=1/(t-e),h=1/(n-r),u=1/(o-s),d=(t+e)*c,p=(n+r)*h,g,y;if(a===li)g=(o+s)*u,y=-2*u;else if(a===$s)g=s*u,y=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Jr=new z,Xn=new Tt,ig=new z(0,0,0),rg=new z(1,1,1),Wi=new z,Aa=new z,Sn=new z,nd=new Tt,id=new Ci,Ji=(()=>{class i{constructor(t=0,n=0,r=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,r,s=this._order){return this._x=t,this._y=n,this._z=r,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,r=!0){let s=t.elements,o=s[0],a=s[4],l=s[8],c=s[1],h=s[5],u=s[9],d=s[2],p=s[6],g=s[10];switch(n){case"XYZ":this._y=Math.asin(lt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,g),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(p,h),this._z=0);break;case"YXZ":this._x=Math.asin(-lt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(l,g),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(lt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,g),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-lt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,g),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(lt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(l,g));break;case"XZY":this._z=Math.asin(-lt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,h),this._y=Math.atan2(l,o)):(this._x=Math.atan2(-u,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,r){return nd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(nd,n,r)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return id.setFromEuler(this),this.setFromQuaternion(id,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}return i.DEFAULT_ORDER="XYZ",i})(),cs=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},sg=0,rd=new z,Kr=new Ci,yi=new Tt,Ra=new z,Vs=new z,og=new z,ag=new Ci,sd=new z(1,0,0),od=new z(0,1,0),ad=new z(0,0,1),ld={type:"added"},lg={type:"removed"},Qr={type:"childadded",child:null},Hc={type:"childremoved",child:null},On=(()=>{class i extends Ei{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sg++}),this.uuid=ws(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new z,n=new Ji,r=new Ci,s=new z(1,1,1);function o(){r.setFromEuler(n,!1)}function a(){n.setFromQuaternion(r,void 0,!1)}n._onChange(o),r._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Tt},normalMatrix:{value:new et}}),this.matrix=new Tt,this.matrixWorld=new Tt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Kr.setFromAxisAngle(t,n),this.quaternion.multiply(Kr),this}rotateOnWorldAxis(t,n){return Kr.setFromAxisAngle(t,n),this.quaternion.premultiply(Kr),this}rotateX(t){return this.rotateOnAxis(sd,t)}rotateY(t){return this.rotateOnAxis(od,t)}rotateZ(t){return this.rotateOnAxis(ad,t)}translateOnAxis(t,n){return rd.copy(t).applyQuaternion(this.quaternion),this.position.add(rd.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(sd,t)}translateY(t){return this.translateOnAxis(od,t)}translateZ(t){return this.translateOnAxis(ad,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(yi.copy(this.matrixWorld).invert())}lookAt(t,n,r){t.isVector3?Ra.copy(t):Ra.set(t,n,r);let s=this.parent;this.updateWorldMatrix(!0,!1),Vs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yi.lookAt(Vs,Ra,this.up):yi.lookAt(Ra,Vs,this.up),this.quaternion.setFromRotationMatrix(yi),s&&(yi.extractRotation(s.matrixWorld),Kr.setFromRotationMatrix(yi),this.quaternion.premultiply(Kr.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ld),Qr.child=t,this.dispatchEvent(Qr),Qr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(lg),Hc.child=t,this.dispatchEvent(Hc),Hc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),yi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),yi.multiply(t.parent.matrixWorld)),t.applyMatrix4(yi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ld),Qr.child=t,this.dispatchEvent(Qr),Qr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let r=0,s=this.children.length;r<s;r++){let a=this.children[r].getObjectByProperty(t,n);if(a!==void 0)return a}}getObjectsByProperty(t,n,r=[]){this[t]===n&&r.push(this);let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].getObjectsByProperty(t,n,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vs,t,og),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vs,ag,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);let n=this.children;for(let r=0,s=n.length;r<s;r++)n[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let n=this.children;for(let r=0,s=n.length;r<s;r++)n[r].traverseVisible(t)}traverseAncestors(t){let n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let n=this.children;for(let r=0,s=n.length;r<s;r++)n[r].updateMatrixWorld(t)}updateWorldMatrix(t,n){let r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){let n=t===void 0||typeof t=="string",r={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(l=>Jn(ft({},l),{boundingBox:l.boundingBox?{min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}:void 0,boundingSphere:l.boundingSphere?{radius:l.boundingSphere.radius,center:l.boundingSphere.center.toArray()}:void 0})),s.instanceInfo=this._instanceInfo.map(l=>ft({},l)),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function o(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);let l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){let c=l.shapes;if(Array.isArray(c))for(let h=0,u=c.length;h<u;h++){let d=c[h];o(t.shapes,d)}else o(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let l=[];for(let c=0,h=this.material.length;c<h;c++)l.push(o(t.materials,this.material[c]));s.material=l}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){let c=this.animations[l];s.animations.push(o(t.animations,c))}}if(n){let l=a(t.geometries),c=a(t.materials),h=a(t.textures),u=a(t.images),d=a(t.shapes),p=a(t.skeletons),g=a(t.animations),y=a(t.nodes);l.length>0&&(r.geometries=l),c.length>0&&(r.materials=c),h.length>0&&(r.textures=h),u.length>0&&(r.images=u),d.length>0&&(r.shapes=d),p.length>0&&(r.skeletons=p),g.length>0&&(r.animations=g),y.length>0&&(r.nodes=y)}return r.object=s,r;function a(l){let c=[];for(let h in l){let u=l[h];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let r=0;r<t.children.length;r++){let s=t.children[r];this.add(s.clone())}return this}}return i.DEFAULT_UP=new z(0,1,0),i.DEFAULT_MATRIX_AUTO_UPDATE=!0,i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0,i})(),qn=new z,bi=new z,Gc=new z,Si=new z,es=new z,ts=new z,cd=new z,Wc=new z,Xc=new z,qc=new z,Yc=new It,$c=new It,jc=new It,Yi=class i{constructor(e=new z,t=new z,n=new z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),qn.subVectors(e,t),r.cross(qn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){qn.subVectors(r,t),bi.subVectors(n,t),Gc.subVectors(e,t);let o=qn.dot(qn),a=qn.dot(bi),l=qn.dot(Gc),c=bi.dot(bi),h=bi.dot(Gc),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;let d=1/u,p=(c*l-a*h)*d,g=(o*h-a*l)*d;return s.set(1-p-g,g,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Si)===null?!1:Si.x>=0&&Si.y>=0&&Si.x+Si.y<=1}static getInterpolation(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,Si)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Si.x),l.addScaledVector(o,Si.y),l.addScaledVector(a,Si.z),l)}static getInterpolatedAttribute(e,t,n,r,s,o){return Yc.setScalar(0),$c.setScalar(0),jc.setScalar(0),Yc.fromBufferAttribute(e,t),$c.fromBufferAttribute(e,n),jc.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Yc,s.x),o.addScaledVector($c,s.y),o.addScaledVector(jc,s.z),o}static isFrontFacing(e,t,n,r){return qn.subVectors(n,t),bi.subVectors(e,t),qn.cross(bi).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qn.subVectors(this.c,this.b),bi.subVectors(this.a,this.b),qn.cross(bi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,s=this.c,o,a;es.subVectors(r,n),ts.subVectors(s,n),Wc.subVectors(e,n);let l=es.dot(Wc),c=ts.dot(Wc);if(l<=0&&c<=0)return t.copy(n);Xc.subVectors(e,r);let h=es.dot(Xc),u=ts.dot(Xc);if(h>=0&&u<=h)return t.copy(r);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(es,o);qc.subVectors(e,s);let p=es.dot(qc),g=ts.dot(qc);if(g>=0&&p<=g)return t.copy(s);let y=p*c-l*g;if(y<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(ts,a);let m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return cd.subVectors(s,r),a=(u-h)/(u-h+(p-g)),t.copy(r).addScaledVector(cd,a);let f=1/(m+y+d);return o=y*f,a=d*f,t.copy(n).addScaledVector(es,o).addScaledVector(ts,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},mf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xi={h:0,s:0,l:0},Ia={h:0,s:0,l:0};function Zc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var ct=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=wn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,pt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=pt.workingColorSpace){return this.r=e,this.g=t,this.b=n,pt.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=pt.workingColorSpace){if(e=Km(e,1),t=lt(t,0,1),n=lt(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Zc(o,s,e+1/3),this.g=Zc(o,s,e),this.b=Zc(o,s,e-1/3)}return pt.toWorkingColorSpace(this,r),this}setStyle(e,t=wn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=wn){let n=mf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Mi(e.r),this.g=Mi(e.g),this.b=Mi(e.b),this}copyLinearToSRGB(e){return this.r=ss(e.r),this.g=ss(e.g),this.b=ss(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=wn){return pt.fromWorkingColorSpace(ln.copy(this),e),Math.round(lt(ln.r*255,0,255))*65536+Math.round(lt(ln.g*255,0,255))*256+Math.round(lt(ln.b*255,0,255))}getHexString(e=wn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=pt.workingColorSpace){pt.fromWorkingColorSpace(ln.copy(this),t);let n=ln.r,r=ln.g,s=ln.b,o=Math.max(n,r,s),a=Math.min(n,r,s),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-n)/u+2;break;case s:l=(n-r)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=pt.workingColorSpace){return pt.fromWorkingColorSpace(ln.copy(this),t),e.r=ln.r,e.g=ln.g,e.b=ln.b,e}getStyle(e=wn){pt.fromWorkingColorSpace(ln.copy(this),e);let t=ln.r,n=ln.g,r=ln.b;return e!==wn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Xi),this.setHSL(Xi.h+e,Xi.s+t,Xi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Xi),e.getHSL(Ia);let n=Lc(Xi.h,Ia.h,t),r=Lc(Xi.s,Ia.s,t),s=Lc(Xi.l,Ia.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ln=new ct;ct.NAMES=mf;var cg=0,Ki=class extends Ei{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cg++}),this.uuid=ws(),this.name="",this.type="Material",this.blending=vr,this.side=wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xa,this.blendDst=qa,this.blendEquation=ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ct(0,0,0),this.blendAlpha=0,this.depthFunc=yr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_r,this.stencilZFail=_r,this.stencilZPass=_r,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==vr&&(n.blending=this.blending),this.side!==wi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Xa&&(n.blendSrc=this.blendSrc),this.blendDst!==qa&&(n.blendDst=this.blendDst),this.blendEquation!==ji&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==yr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==lh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_r&&(n.stencilFail=this.stencilFail),this.stencilZFail!==_r&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==_r&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Ti=class extends Ki{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ji,this.combine=Sh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Bt=new z,Pa=new ge,hg=0,En=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:hg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ch,this.updateRanges=[],this.gpuType=di,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Pa.fromBufferAttribute(this,t),Pa.applyMatrix3(e),this.setXY(t,Pa.x,Pa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix3(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix4(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyNormalMatrix(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.transformDirection(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ks(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=xn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ks(t,this.array)),t}setX(e,t){return this.normalized&&(t=xn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ks(t,this.array)),t}setY(e,t){return this.normalized&&(t=xn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ks(t,this.array)),t}setZ(e,t){return this.normalized&&(t=xn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ks(t,this.array)),t}setW(e,t){return this.normalized&&(t=xn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=xn(t,this.array),n=xn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=xn(t,this.array),n=xn(n,this.array),r=xn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=xn(t,this.array),n=xn(n,this.array),r=xn(r,this.array),s=xn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ch&&(e.usage=this.usage),e}};var Qs=class extends En{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var eo=class extends En{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Zt=class extends En{constructor(e,t,n){super(new Float32Array(e),t,n)}},ug=0,Nn=new Tt,Jc=new On,ns=new z,Mn=new Zi,Hs=new Zi,$t=new z,$n=class i extends Ei{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ug++}),this.uuid=ws(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Fh(e)?eo:Qs)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new et().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Nn.makeRotationFromQuaternion(e),this.applyMatrix4(Nn),this}rotateX(e){return Nn.makeRotationX(e),this.applyMatrix4(Nn),this}rotateY(e){return Nn.makeRotationY(e),this.applyMatrix4(Nn),this}rotateZ(e){return Nn.makeRotationZ(e),this.applyMatrix4(Nn),this}translate(e,t,n){return Nn.makeTranslation(e,t,n),this.applyMatrix4(Nn),this}scale(e,t,n){return Nn.makeScale(e,t,n),this.applyMatrix4(Nn),this}lookAt(e){return Jc.lookAt(e),Jc.updateMatrix(),this.applyMatrix4(Jc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ns).negate(),this.translate(ns.x,ns.y,ns.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let r=0,s=e.length;r<s;r++){let o=e[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Zt(n,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let s=t[n];Mn.setFromBufferAttribute(s),this.morphTargetsRelative?($t.addVectors(this.boundingBox.min,Mn.min),this.boundingBox.expandByPoint($t),$t.addVectors(this.boundingBox.max,Mn.max),this.boundingBox.expandByPoint($t)):(this.boundingBox.expandByPoint(Mn.min),this.boundingBox.expandByPoint(Mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ls);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){let n=this.boundingSphere.center;if(Mn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];Hs.setFromBufferAttribute(a),this.morphTargetsRelative?($t.addVectors(Mn.min,Hs.min),Mn.expandByPoint($t),$t.addVectors(Mn.max,Hs.max),Mn.expandByPoint($t)):(Mn.expandByPoint(Hs.min),Mn.expandByPoint(Hs.max))}Mn.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)$t.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared($t));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)$t.fromBufferAttribute(a,c),l&&(ns.fromBufferAttribute(e,c),$t.add(ns)),r=Math.max(r,n.distanceToSquared($t))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new En(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let U=0;U<n.count;U++)a[U]=new z,l[U]=new z;let c=new z,h=new z,u=new z,d=new ge,p=new ge,g=new ge,y=new z,m=new z;function f(U,M,_){c.fromBufferAttribute(n,U),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,_),d.fromBufferAttribute(s,U),p.fromBufferAttribute(s,M),g.fromBufferAttribute(s,_),h.sub(c),u.sub(c),p.sub(d),g.sub(d);let R=1/(p.x*g.y-g.x*p.y);isFinite(R)&&(y.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(R),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(R),a[U].add(y),a[M].add(y),a[_].add(y),l[U].add(m),l[M].add(m),l[_].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let U=0,M=A.length;U<M;++U){let _=A[U],R=_.start,V=_.count;for(let H=R,ee=R+V;H<ee;H+=3)f(e.getX(H+0),e.getX(H+1),e.getX(H+2))}let T=new z,S=new z,F=new z,D=new z;function P(U){F.fromBufferAttribute(r,U),D.copy(F);let M=a[U];T.copy(M),T.sub(F.multiplyScalar(F.dot(M))).normalize(),S.crossVectors(D,M);let R=S.dot(l[U])<0?-1:1;o.setXYZW(U,T.x,T.y,T.z,R)}for(let U=0,M=A.length;U<M;++U){let _=A[U],R=_.start,V=_.count;for(let H=R,ee=R+V;H<ee;H+=3)P(e.getX(H+0)),P(e.getX(H+1)),P(e.getX(H+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new En(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let r=new z,s=new z,o=new z,a=new z,l=new z,c=new z,h=new z,u=new z;if(e)for(let d=0,p=e.count;d<p;d+=3){let g=e.getX(d+0),y=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,y),o.fromBufferAttribute(t,m),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)$t.fromBufferAttribute(e,t),$t.normalize(),e.setXYZ(t,$t.x,$t.y,$t.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),p=0,g=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?p=l[y]*a.data.stride+a.offset:p=l[y]*h;for(let f=0;f<h;f++)d[g++]=c[p++]}return new En(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=e(l,n);t.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],p=e(d,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let c in r){let h=r[c];this.setAttribute(c,h.clone(t))}let s=e.morphAttributes;for(let c in s){let h=[],u=s[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},hd=new Tt,mr=new Ks,Da=new ls,ud=new z,La=new z,Fa=new z,Na=new z,Kc=new z,Ua=new z,dd=new z,Oa=new z,Gt=class extends On{constructor(e=new $n,t=new Ti){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){Ua.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=a[l],u=s[l];h!==0&&(Kc.fromBufferAttribute(u,e),o?Ua.addScaledVector(Kc,h):Ua.addScaledVector(Kc.sub(t),h))}t.add(Ua)}return t}raycast(e,t){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Da.copy(n.boundingSphere),Da.applyMatrix4(s),mr.copy(e.ray).recast(e.near),!(Da.containsPoint(mr.origin)===!1&&(mr.intersectSphere(Da,ud)===null||mr.origin.distanceToSquared(ud)>(e.far-e.near)**2))&&(hd.copy(s).invert(),mr.copy(e.ray).applyMatrix4(hd),!(n.boundingBox!==null&&mr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,mr)))}_computeIntersections(e,t,n){let r,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=d.length;g<y;g++){let m=d[g],f=o[m.materialIndex],A=Math.max(m.start,p.start),T=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let S=A,F=T;S<F;S+=3){let D=a.getX(S),P=a.getX(S+1),U=a.getX(S+2);r=ka(this,f,e,n,c,h,u,D,P,U),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let m=g,f=y;m<f;m+=3){let A=a.getX(m),T=a.getX(m+1),S=a.getX(m+2);r=ka(this,o,e,n,c,h,u,A,T,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,y=d.length;g<y;g++){let m=d[g],f=o[m.materialIndex],A=Math.max(m.start,p.start),T=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=A,F=T;S<F;S+=3){let D=S,P=S+1,U=S+2;r=ka(this,f,e,n,c,h,u,D,P,U),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let m=g,f=y;m<f;m+=3){let A=m,T=m+1,S=m+2;r=ka(this,o,e,n,c,h,u,A,T,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}};function dg(i,e,t,n,r,s,o,a){let l;if(e.side===Kt?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===wi,a),l===null)return null;Oa.copy(a),Oa.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Oa);return c<t.near||c>t.far?null:{distance:c,point:Oa.clone(),object:i}}function ka(i,e,t,n,r,s,o,a,l,c){i.getVertexPosition(a,La),i.getVertexPosition(l,Fa),i.getVertexPosition(c,Na);let h=dg(i,e,t,n,La,Fa,Na,dd);if(h){let u=new z;Yi.getBarycoord(dd,La,Fa,Na,u),r&&(h.uv=Yi.getInterpolatedAttribute(r,a,l,c,u,new ge)),s&&(h.uv1=Yi.getInterpolatedAttribute(s,a,l,c,u,new ge)),o&&(h.normal=Yi.getInterpolatedAttribute(o,a,l,c,u,new z),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new z,materialIndex:0};Yi.getNormal(La,Fa,Na,d.normal),h.face=d,h.barycoord=u}return h}var hs=class i extends $n{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,p=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,r,o,2),g("x","z","y",1,-1,e,n,-t,r,o,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Zt(c,3)),this.setAttribute("normal",new Zt(h,3)),this.setAttribute("uv",new Zt(u,2));function g(y,m,f,A,T,S,F,D,P,U,M){let _=S/P,R=F/U,V=S/2,H=F/2,ee=D/2,K=P+1,J=U+1,te=0,X=0,me=new z;for(let ve=0;ve<J;ve++){let be=ve*R-H;for(let Be=0;Be<K;Be++){let $e=Be*_-V;me[y]=$e*A,me[m]=be*T,me[f]=ee,c.push(me.x,me.y,me.z),me[y]=0,me[m]=0,me[f]=D>0?1:-1,h.push(me.x,me.y,me.z),u.push(Be/P),u.push(1-ve/U),te+=1}}for(let ve=0;ve<U;ve++)for(let be=0;be<P;be++){let Be=d+be+K*ve,$e=d+be+K*(ve+1),Y=d+(be+1)+K*(ve+1),se=d+(be+1)+K*ve;l.push(Be,$e,se),l.push($e,Y,se),X+=6}a.addGroup(p,X,M),p+=X,d+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Tr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function cn(i){let e={};for(let t=0;t<i.length;t++){let n=Tr(i[t]);for(let r in n)e[r]=n[r]}return e}function fg(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Nh(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:pt.workingColorSpace}var gf={clone:Tr,merge:cn},pg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,jn=class extends Ki{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pg,this.fragmentShader=mg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Tr(e.uniforms),this.uniformsGroups=fg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},to=class extends On{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Tt,this.projectionMatrix=new Tt,this.projectionMatrixInverse=new Tt,this.coordinateSystem=li}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},qi=new z,fd=new ge,pd=new ge,jt=class extends to{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=js*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Dc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return js*2*Math.atan(Math.tan(Dc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(qi.x,qi.y).multiplyScalar(-e/qi.z),qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(qi.x,qi.y).multiplyScalar(-e/qi.z)}getViewSize(e,t){return this.getViewBounds(e,fd,pd),t.subVectors(pd,fd)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Dc*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},is=-90,rs=1,Qa=class extends On{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new jt(is,rs,e,t);r.layers=this.layers,this.add(r);let s=new jt(is,rs,e,t);s.layers=this.layers,this.add(s);let o=new jt(is,rs,e,t);o.layers=this.layers,this.add(o);let a=new jt(is,rs,e,t);a.layers=this.layers,this.add(a);let l=new jt(is,rs,e,t);l.layers=this.layers,this.add(l);let c=new jt(is,rs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,l]=t;for(let c of t)this.remove(c);if(e===li)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===$s)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,r),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},no=class extends rr{constructor(e=[],t=Er,n,r,s,o,a,l,c,h){super(e,t,n,r,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},el=class extends hi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new no(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Yn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new hs(5,5,5),s=new jn({name:"CubemapFromEquirect",uniforms:Tr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Kt,blending:Ai});s.uniforms.tEquirect.value=t;let o=new Gt(r,s),a=t.minFilter;return t.minFilter===nr&&(t.minFilter=Yn),new Qa(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}},xr=class extends On{constructor(){super(),this.isGroup=!0,this.type="Group"}},gg={type:"move"},us=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let y of e.hand.values()){let m=t.getJointPose(y,n),f=this._getHandJoint(c,y);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(gg)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new xr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var ds=class extends On{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ji,this.environmentIntensity=1,this.environmentRotation=new Ji,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var Qc=new z,_g=new z,xg=new et,ai=class{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Qc.subVectors(n,t).cross(_g.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Qc),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||xg.getNormalMatrix(e),r=this.coplanarPoint(Qc).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},gr=new ls,Ba=new z,fs=class{constructor(e=new ai,t=new ai,n=new ai,r=new ai,s=new ai,o=new ai){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=li){let n=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],h=r[5],u=r[6],d=r[7],p=r[8],g=r[9],y=r[10],m=r[11],f=r[12],A=r[13],T=r[14],S=r[15];if(n[0].setComponents(l-s,d-c,m-p,S-f).normalize(),n[1].setComponents(l+s,d+c,m+p,S+f).normalize(),n[2].setComponents(l+o,d+h,m+g,S+A).normalize(),n[3].setComponents(l-o,d-h,m-g,S-A).normalize(),n[4].setComponents(l-a,d-u,m-y,S-T).normalize(),t===li)n[5].setComponents(l+a,d+u,m+y,S+T).normalize();else if(t===$s)n[5].setComponents(a,u,y,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),gr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),gr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(gr)}intersectsSprite(e){return gr.center.set(0,0,0),gr.radius=.7071067811865476,gr.applyMatrix4(e.matrixWorld),this.intersectsSphere(gr)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Ba.x=r.normal.x>0?e.max.x:e.min.x,Ba.y=r.normal.y>0?e.max.y:e.min.y,Ba.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ba)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var io=class extends rr{constructor(e,t,n=ir,r,s,o,a=Un,l=Un,c,h=os){if(h!==os&&h!==Ms)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,r,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new as(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}};var Cn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,s=n.length,o;t?o=t:o=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=n[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===o)return r/(s-1);let h=n[r],d=n[r+1]-h,p=(o-h)/d;return(r+p)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);let o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new ge:new z);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new z,r=[],s=[],o=[],a=new z,l=new Tt;for(let p=0;p<=e;p++){let g=p/e;r[p]=this.getTangentAt(g,new z)}s[0]=new z,o[0]=new z;let c=Number.MAX_VALUE,h=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(lt(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(r[p],s[p])}if(t===!0){let p=Math.acos(lt(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],p*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},ps=class extends Cn{constructor(e=0,t=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new ge){let n=t,r=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);let a=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},tl=class extends ps{constructor(e,t,n,r,s,o){super(e,t,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Uh(){let i=0,e=0,t=0,n=0;function r(s,o,a,l){i=s,e=a,t=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,u){let d=(o-s)/c-(a-s)/(c+h)+(a-o)/h,p=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,p*=h,r(o,a,d,p)},calc:function(s){let o=s*s,a=o*s;return i+e*s+t*o+n*a}}}var za=new z,eh=new Uh,th=new Uh,nh=new Uh,nl=class extends Cn{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new z){let n=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=r[(a-1)%s]:(za.subVectors(r[0],r[1]).add(r[0]),c=za);let u=r[a%s],d=r[(a+1)%s];if(this.closed||a+2<s?h=r[(a+2)%s]:(za.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=za),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),p),y=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),eh.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,y,m),th.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,y,m),nh.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,y,m)}else this.curveType==="catmullrom"&&(eh.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),th.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),nh.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(eh.calc(l),th.calc(l),nh.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new z().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function md(i,e,t,n,r){let s=(n-e)*.5,o=(r-t)*.5,a=i*i,l=i*a;return(2*t-2*n+s+o)*l+(-3*t+3*n-2*s-o)*a+s*i+t}function vg(i,e){let t=1-i;return t*t*e}function yg(i,e){return 2*(1-i)*i*e}function bg(i,e){return i*i*e}function Ws(i,e,t,n){return vg(i,e)+yg(i,t)+bg(i,n)}function Sg(i,e){let t=1-i;return t*t*t*e}function Mg(i,e){let t=1-i;return 3*t*t*i*e}function wg(i,e){return 3*(1-i)*i*i*e}function Eg(i,e){return i*i*i*e}function Xs(i,e,t,n,r){return Sg(i,e)+Mg(i,t)+wg(i,n)+Eg(i,r)}var ro=class extends Cn{constructor(e=new ge,t=new ge,n=new ge,r=new ge){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new ge){let n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Xs(e,r.x,s.x,o.x,a.x),Xs(e,r.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},il=class extends Cn{constructor(e=new z,t=new z,n=new z,r=new z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new z){let n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Xs(e,r.x,s.x,o.x,a.x),Xs(e,r.y,s.y,o.y,a.y),Xs(e,r.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},so=class extends Cn{constructor(e=new ge,t=new ge){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ge){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ge){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},rl=class extends Cn{constructor(e=new z,t=new z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new z){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new z){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},oo=class extends Cn{constructor(e=new ge,t=new ge,n=new ge){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ge){let n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(Ws(e,r.x,s.x,o.x),Ws(e,r.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},sl=class extends Cn{constructor(e=new z,t=new z,n=new z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new z){let n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(Ws(e,r.x,s.x,o.x),Ws(e,r.y,s.y,o.y),Ws(e,r.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ao=class extends Cn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ge){let n=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],h=r[o>r.length-2?r.length-1:o+1],u=r[o>r.length-3?r.length-1:o+2];return n.set(md(a,l.x,c.x,h.x,u.x),md(a,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new ge().fromArray(r))}return this}},hh=Object.freeze({__proto__:null,ArcCurve:tl,CatmullRomCurve3:nl,CubicBezierCurve:ro,CubicBezierCurve3:il,EllipseCurve:ps,LineCurve:so,LineCurve3:rl,QuadraticBezierCurve:oo,QuadraticBezierCurve3:sl,SplineCurve:ao}),ol=class extends Cn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new hh[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),s=0;for(;s<r.length;){if(r[s]>=n){let o=r[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,s=this.curves;r<s.length;r++){let o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let r=e.curves[t];this.curves.push(new hh[r.type]().fromJSON(r))}return this}},lo=class extends ol{constructor(e){super(),this.type="Path",this.currentPoint=new ge,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new so(this.currentPoint.clone(),new ge(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let s=new oo(this.currentPoint.clone(),new ge(e,t),new ge(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,o){let a=new ro(this.currentPoint.clone(),new ge(e,t),new ge(n,r),new ge(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new ao(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,r,s,o),this}absarc(e,t,n,r,s,o){return this.absellipse(e,t,n,n,r,s,o),this}ellipse(e,t,n,r,s,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,r,s,o,a,l),this}absellipse(e,t,n,r,s,o,a,l){let c=new ps(e,t,n,r,s,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Qi=class extends lo{constructor(e){super(e),this.uuid=ws(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let r=e.holes[t];this.holes.push(new lo().fromJSON(r))}return this}};function Cg(i,e,t=2){let n=e&&e.length,r=n?e[0]*t:i.length,s=_f(i,0,r,t,!0),o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(n&&(s=Pg(i,e,s,t)),i.length>80*t){a=1/0,l=1/0;let h=-1/0,u=-1/0;for(let d=t;d<r;d+=t){let p=i[d],g=i[d+1];p<a&&(a=p),g<l&&(l=g),p>h&&(h=p),g>u&&(u=g)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return co(s,o,t,a,l,c,0),o}function _f(i,e,t,n,r){let s;if(r===Hg(i,e,t,n)>0)for(let o=e;o<t;o+=n)s=gd(o/n|0,i[o],i[o+1],s);else for(let o=t-n;o>=e;o-=n)s=gd(o/n|0,i[o],i[o+1],s);return s&&ms(s,s.next)&&(uo(s),s=s.next),s}function Sr(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(ms(t,t.next)||Rt(t.prev,t,t.next)===0)){if(uo(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function co(i,e,t,n,r,s,o){if(!i)return;!o&&s&&Ug(i,n,r,s);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(s?Ag(i,n,r,s):Tg(i)){e.push(l.i,i.i,c.i),uo(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Rg(Sr(i),e),co(i,e,t,n,r,s,2)):o===2&&Ig(i,e,t,n,r,s):co(Sr(i),e,t,n,r,s,1);break}}}function Tg(i){let e=i.prev,t=i,n=i.next;if(Rt(e,t,n)>=0)return!1;let r=e.x,s=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=Math.min(r,s,o),u=Math.min(a,l,c),d=Math.max(r,s,o),p=Math.max(a,l,c),g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=p&&Gs(r,a,s,l,o,c,g.x,g.y)&&Rt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Ag(i,e,t,n){let r=i.prev,s=i,o=i.next;if(Rt(r,s,o)>=0)return!1;let a=r.x,l=s.x,c=o.x,h=r.y,u=s.y,d=o.y,p=Math.min(a,l,c),g=Math.min(h,u,d),y=Math.max(a,l,c),m=Math.max(h,u,d),f=uh(p,g,e,t,n),A=uh(y,m,e,t,n),T=i.prevZ,S=i.nextZ;for(;T&&T.z>=f&&S&&S.z<=A;){if(T.x>=p&&T.x<=y&&T.y>=g&&T.y<=m&&T!==r&&T!==o&&Gs(a,h,l,u,c,d,T.x,T.y)&&Rt(T.prev,T,T.next)>=0||(T=T.prevZ,S.x>=p&&S.x<=y&&S.y>=g&&S.y<=m&&S!==r&&S!==o&&Gs(a,h,l,u,c,d,S.x,S.y)&&Rt(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;T&&T.z>=f;){if(T.x>=p&&T.x<=y&&T.y>=g&&T.y<=m&&T!==r&&T!==o&&Gs(a,h,l,u,c,d,T.x,T.y)&&Rt(T.prev,T,T.next)>=0)return!1;T=T.prevZ}for(;S&&S.z<=A;){if(S.x>=p&&S.x<=y&&S.y>=g&&S.y<=m&&S!==r&&S!==o&&Gs(a,h,l,u,c,d,S.x,S.y)&&Rt(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function Rg(i,e){let t=i;do{let n=t.prev,r=t.next.next;!ms(n,r)&&vf(n,t,t.next,r)&&ho(n,r)&&ho(r,n)&&(e.push(n.i,t.i,r.i),uo(t),uo(t.next),t=i=r),t=t.next}while(t!==i);return Sr(t)}function Ig(i,e,t,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Bg(o,a)){let l=yf(o,a);o=Sr(o,o.next),l=Sr(l,l.next),co(o,e,t,n,r,s,0),co(l,e,t,n,r,s,0);return}a=a.next}o=o.next}while(o!==i)}function Pg(i,e,t,n){let r=[];for(let s=0,o=e.length;s<o;s++){let a=e[s]*n,l=s<o-1?e[s+1]*n:i.length,c=_f(i,a,l,n,!1);c===c.next&&(c.steiner=!0),r.push(kg(c))}r.sort(Dg);for(let s=0;s<r.length;s++)t=Lg(r[s],t);return t}function Dg(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=n-r}return t}function Lg(i,e){let t=Fg(i,e);if(!t)return e;let n=yf(t,i);return Sr(n,n.next),Sr(t,t.next)}function Fg(i,e){let t=e,n=i.x,r=i.y,s=-1/0,o;if(ms(i,t))return t;do{if(ms(i,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){let u=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>s&&(s=u,o=t.x<t.next.x?t:t.next,u===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&xf(r<c?n:s,r,l,c,r<c?s:n,r,t.x,t.y)){let u=Math.abs(r-t.y)/(n-t.x);ho(t,i)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&Ng(o,t)))&&(o=t,h=u)}t=t.next}while(t!==a);return o}function Ng(i,e){return Rt(i.prev,i,e.prev)<0&&Rt(e.next,i,i.next)<0}function Ug(i,e,t,n){let r=i;do r.z===0&&(r.z=uh(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,Og(r)}function Og(i){let e,t=1;do{let n=i,r;i=null;let s=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(r=n,n=n.nextZ,a--):(r=o,o=o.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;n=o}s.nextZ=null,t*=2}while(e>1);return i}function uh(i,e,t,n,r){return i=(i-t)*r|0,e=(e-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function kg(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function xf(i,e,t,n,r,s,o,a){return(r-o)*(e-a)>=(i-o)*(s-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(n-a)}function Gs(i,e,t,n,r,s,o,a){return!(i===o&&e===a)&&xf(i,e,t,n,r,s,o,a)}function Bg(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!zg(i,e)&&(ho(i,e)&&ho(e,i)&&Vg(i,e)&&(Rt(i.prev,i,e.prev)||Rt(i,e.prev,e))||ms(i,e)&&Rt(i.prev,i,i.next)>0&&Rt(e.prev,e,e.next)>0)}function Rt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function ms(i,e){return i.x===e.x&&i.y===e.y}function vf(i,e,t,n){let r=Ha(Rt(i,e,t)),s=Ha(Rt(i,e,n)),o=Ha(Rt(t,n,i)),a=Ha(Rt(t,n,e));return!!(r!==s&&o!==a||r===0&&Va(i,t,e)||s===0&&Va(i,n,e)||o===0&&Va(t,i,n)||a===0&&Va(t,e,n))}function Va(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Ha(i){return i>0?1:i<0?-1:0}function zg(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&vf(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function ho(i,e){return Rt(i.prev,i,i.next)<0?Rt(i,e,i.next)>=0&&Rt(i,i.prev,e)>=0:Rt(i,e,i.prev)<0||Rt(i,i.next,e)<0}function Vg(i,e){let t=i,n=!1,r=(i.x+e.x)/2,s=(i.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function yf(i,e){let t=dh(i.i,i.x,i.y),n=dh(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function gd(i,e,t,n){let r=dh(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function uo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function dh(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Hg(i,e,t,n){let r=0;for(let s=e,o=t-n;s<t;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}var fh=class{static triangulate(e,t,n=2){return Cg(e,t,n)}},ci=class i{static area(e){let t=e.length,n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],r=[],s=[];_d(e),xd(n,e);let o=e.length;t.forEach(_d);for(let l=0;l<t.length;l++)r.push(o),o+=t[l].length,xd(n,t[l]);let a=fh.triangulate(n,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}};function _d(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function xd(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var fo=class i extends $n{constructor(e=new Qi([new ge(.5,.5),new ge(-.5,.5),new ge(-.5,-.5),new ge(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new Zt(r,3)),this.setAttribute("uv",new Zt(s,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:p-.1,y=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,f=t.extrudePath,A=t.UVGenerator!==void 0?t.UVGenerator:Gg,T,S=!1,F,D,P,U;f&&(T=f.getSpacedPoints(h),S=!0,d=!1,F=f.computeFrenetFrames(h,!1),D=new z,P=new z,U=new z),d||(m=0,p=0,g=0,y=0);let M=a.extractPoints(c),_=M.shape,R=M.holes;if(!ci.isClockWise(_)){_=_.reverse();for(let E=0,pe=R.length;E<pe;E++){let oe=R[E];ci.isClockWise(oe)&&(R[E]=oe.reverse())}}function H(E){let oe=10000000000000001e-36,ue=E[0];for(let ne=1;ne<=E.length;ne++){let ke=ne%E.length,ae=E[ke],C=ae.x-ue.x,x=ae.y-ue.y,B=C*C+x*x,Z=Math.max(Math.abs(ae.x),Math.abs(ae.y),Math.abs(ue.x),Math.abs(ue.y)),re=oe*Z*Z;if(B<=re){E.splice(ke,1),ne--;continue}ue=ae}}H(_),R.forEach(H);let ee=R.length,K=_;for(let E=0;E<ee;E++){let pe=R[E];_=_.concat(pe)}function J(E,pe,oe){return pe||console.error("THREE.ExtrudeGeometry: vec does not exist"),E.clone().addScaledVector(pe,oe)}let te=_.length;function X(E,pe,oe){let ue,ne,ke,ae=E.x-pe.x,C=E.y-pe.y,x=oe.x-E.x,B=oe.y-E.y,Z=ae*ae+C*C,re=ae*B-C*x;if(Math.abs(re)>Number.EPSILON){let q=Math.sqrt(Z),Ue=Math.sqrt(x*x+B*B),ye=pe.x-C/q,Ve=pe.y+ae/q,qe=oe.x-B/Ue,le=oe.y+x/Ue,Ce=((qe-ye)*B-(le-Ve)*x)/(ae*B-C*x);ue=ye+ae*Ce-E.x,ne=Ve+C*Ce-E.y;let Xe=ue*ue+ne*ne;if(Xe<=2)return new ge(ue,ne);ke=Math.sqrt(Xe/2)}else{let q=!1;ae>Number.EPSILON?x>Number.EPSILON&&(q=!0):ae<-Number.EPSILON?x<-Number.EPSILON&&(q=!0):Math.sign(C)===Math.sign(B)&&(q=!0),q?(ue=-C,ne=ae,ke=Math.sqrt(Z)):(ue=ae,ne=C,ke=Math.sqrt(Z/2))}return new ge(ue/ke,ne/ke)}let me=[];for(let E=0,pe=K.length,oe=pe-1,ue=E+1;E<pe;E++,oe++,ue++)oe===pe&&(oe=0),ue===pe&&(ue=0),me[E]=X(K[E],K[oe],K[ue]);let ve=[],be,Be=me.concat();for(let E=0,pe=ee;E<pe;E++){let oe=R[E];be=[];for(let ue=0,ne=oe.length,ke=ne-1,ae=ue+1;ue<ne;ue++,ke++,ae++)ke===ne&&(ke=0),ae===ne&&(ae=0),be[ue]=X(oe[ue],oe[ke],oe[ae]);ve.push(be),Be=Be.concat(be)}let $e;if(m===0)$e=ci.triangulateShape(K,R);else{let E=[],pe=[];for(let oe=0;oe<m;oe++){let ue=oe/m,ne=p*Math.cos(ue*Math.PI/2),ke=g*Math.sin(ue*Math.PI/2)+y;for(let ae=0,C=K.length;ae<C;ae++){let x=J(K[ae],me[ae],ke);We(x.x,x.y,-ne),ue===0&&E.push(x)}for(let ae=0,C=ee;ae<C;ae++){let x=R[ae];be=ve[ae];let B=[];for(let Z=0,re=x.length;Z<re;Z++){let q=J(x[Z],be[Z],ke);We(q.x,q.y,-ne),ue===0&&B.push(q)}ue===0&&pe.push(B)}}$e=ci.triangulateShape(E,pe)}let Y=$e.length,se=g+y;for(let E=0;E<te;E++){let pe=d?J(_[E],Be[E],se):_[E];S?(P.copy(F.normals[0]).multiplyScalar(pe.x),D.copy(F.binormals[0]).multiplyScalar(pe.y),U.copy(T[0]).add(P).add(D),We(U.x,U.y,U.z)):We(pe.x,pe.y,0)}for(let E=1;E<=h;E++)for(let pe=0;pe<te;pe++){let oe=d?J(_[pe],Be[pe],se):_[pe];S?(P.copy(F.normals[E]).multiplyScalar(oe.x),D.copy(F.binormals[E]).multiplyScalar(oe.y),U.copy(T[E]).add(P).add(D),We(U.x,U.y,U.z)):We(oe.x,oe.y,u/h*E)}for(let E=m-1;E>=0;E--){let pe=E/m,oe=p*Math.cos(pe*Math.PI/2),ue=g*Math.sin(pe*Math.PI/2)+y;for(let ne=0,ke=K.length;ne<ke;ne++){let ae=J(K[ne],me[ne],ue);We(ae.x,ae.y,u+oe)}for(let ne=0,ke=R.length;ne<ke;ne++){let ae=R[ne];be=ve[ne];for(let C=0,x=ae.length;C<x;C++){let B=J(ae[C],be[C],ue);S?We(B.x,B.y+T[h-1].y,T[h-1].x+oe):We(B.x,B.y,u+oe)}}}fe(),de();function fe(){let E=r.length/3;if(d){let pe=0,oe=te*pe;for(let ue=0;ue<Y;ue++){let ne=$e[ue];Ne(ne[2]+oe,ne[1]+oe,ne[0]+oe)}pe=h+m*2,oe=te*pe;for(let ue=0;ue<Y;ue++){let ne=$e[ue];Ne(ne[0]+oe,ne[1]+oe,ne[2]+oe)}}else{for(let pe=0;pe<Y;pe++){let oe=$e[pe];Ne(oe[2],oe[1],oe[0])}for(let pe=0;pe<Y;pe++){let oe=$e[pe];Ne(oe[0]+te*h,oe[1]+te*h,oe[2]+te*h)}}n.addGroup(E,r.length/3-E,0)}function de(){let E=r.length/3,pe=0;Fe(K,pe),pe+=K.length;for(let oe=0,ue=R.length;oe<ue;oe++){let ne=R[oe];Fe(ne,pe),pe+=ne.length}n.addGroup(E,r.length/3-E,1)}function Fe(E,pe){let oe=E.length;for(;--oe>=0;){let ue=oe,ne=oe-1;ne<0&&(ne=E.length-1);for(let ke=0,ae=h+m*2;ke<ae;ke++){let C=te*ke,x=te*(ke+1),B=pe+ue+C,Z=pe+ne+C,re=pe+ne+x,q=pe+ue+x;Ye(B,Z,re,q)}}}function We(E,pe,oe){l.push(E),l.push(pe),l.push(oe)}function Ne(E,pe,oe){Le(E),Le(pe),Le(oe);let ue=r.length/3,ne=A.generateTopUV(n,r,ue-3,ue-2,ue-1);Oe(ne[0]),Oe(ne[1]),Oe(ne[2])}function Ye(E,pe,oe,ue){Le(E),Le(pe),Le(ue),Le(pe),Le(oe),Le(ue);let ne=r.length/3,ke=A.generateSideWallUV(n,r,ne-6,ne-3,ne-2,ne-1);Oe(ke[0]),Oe(ke[1]),Oe(ke[3]),Oe(ke[1]),Oe(ke[2]),Oe(ke[3])}function Le(E){r.push(l[E*3+0]),r.push(l[E*3+1]),r.push(l[E*3+2])}function Oe(E){s.push(E.x),s.push(E.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Wg(t,n,e)}static fromJSON(e,t){let n=[];for(let s=0,o=e.shapes.length;s<o;s++){let a=t[e.shapes[s]];n.push(a)}let r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new hh[r.type]().fromJSON(r)),new i(n,e.options)}},Gg={generateTopUV:function(i,e,t,n,r){let s=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[r*3],h=e[r*3+1];return[new ge(s,o),new ge(a,l),new ge(c,h)]},generateSideWallUV:function(i,e,t,n,r,s){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[r*3],p=e[r*3+1],g=e[r*3+2],y=e[s*3],m=e[s*3+1],f=e[s*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new ge(o,1-l),new ge(c,1-u),new ge(d,1-g),new ge(y,1-f)]:[new ge(a,1-l),new ge(h,1-u),new ge(p,1-g),new ge(m,1-f)]}};function Wg(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){let s=i[n];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var po=class i extends $n{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,h=l+1,u=e/a,d=t/l,p=[],g=[],y=[],m=[];for(let f=0;f<h;f++){let A=f*d-o;for(let T=0;T<c;T++){let S=T*u-s;g.push(S,-A,0),y.push(0,0,1),m.push(T/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let A=0;A<a;A++){let T=A+c*f,S=A+c*(f+1),F=A+1+c*(f+1),D=A+1+c*f;p.push(T,S,D),p.push(S,F,D)}this.setIndex(p),this.setAttribute("position",new Zt(g,3)),this.setAttribute("normal",new Zt(y,3)),this.setAttribute("uv",new Zt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},gs=class i extends $n{constructor(e=.5,t=1,n=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:o},n=Math.max(3,n),r=Math.max(1,r);let a=[],l=[],c=[],h=[],u=e,d=(t-e)/r,p=new z,g=new ge;for(let y=0;y<=r;y++){for(let m=0;m<=n;m++){let f=s+m/n*o;p.x=u*Math.cos(f),p.y=u*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,h.push(g.x,g.y)}u+=d}for(let y=0;y<r;y++){let m=y*(n+1);for(let f=0;f<n;f++){let A=f+m,T=A,S=A+n+1,F=A+n+2,D=A+1;a.push(T,S,D),a.push(S,F,D)}}this.setIndex(a),this.setAttribute("position",new Zt(l,3)),this.setAttribute("normal",new Zt(c,3)),this.setAttribute("uv",new Zt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},mo=class i extends $n{constructor(e=new Qi([new ge(0,.5),new ge(-.5,-.5),new ge(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],r=[],s=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Zt(r,3)),this.setAttribute("normal",new Zt(s,3)),this.setAttribute("uv",new Zt(o,2));function c(h){let u=r.length/3,d=h.extractPoints(t),p=d.shape,g=d.holes;ci.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,f=g.length;m<f;m++){let A=g[m];ci.isClockWise(A)===!0&&(g[m]=A.reverse())}let y=ci.triangulateShape(p,g);for(let m=0,f=g.length;m<f;m++){let A=g[m];p=p.concat(A)}for(let m=0,f=p.length;m<f;m++){let A=p[m];r.push(A.x,A.y,0),s.push(0,0,1),o.push(A.x,A.y)}for(let m=0,f=y.length;m<f;m++){let A=y[m],T=A[0]+u,S=A[1]+u,F=A[2]+u;n.push(T,S,F),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Xg(t,e)}static fromJSON(e,t){let n=[];for(let r=0,s=e.shapes.length;r<s;r++){let o=t[e.shapes[r]];n.push(o)}return new i(n,e.curveSegments)}};function Xg(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let r=i[t];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e}var Mr=class extends Ki{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ct(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ph,this.normalScale=new ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ji,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var al=class extends Ki{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ef,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ll=class extends Ki{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ga(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function qg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var wr=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=t[++n],e<r)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},cl=class extends wr{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:sh,endingEnd:sh}}intervalChanged_(e,t,n){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case oh:s=e,a=2*t-n;break;case ah:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case oh:o=e,l=2*n-t;break;case ah:o=1,l=n+r[1]-r[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(n-t)/(r-t),y=g*g,m=y*g,f=-d*m+2*d*y-d*g,A=(1+d)*m+(-1.5-2*d)*y+(-.5+d)*g+1,T=(-1-p)*m+(1.5+p)*y+.5*g,S=p*m-p*y;for(let F=0;F!==a;++F)s[F]=f*o[h+F]+A*o[c+F]+T*o[l+F]+S*o[u+F];return s}},hl=class extends wr{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(r-t),u=1-h;for(let d=0;d!==a;++d)s[d]=o[c+d]*u+o[l+d]*h;return s}},ul=class extends wr{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Tn=class{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ga(t,this.TimeBufferType),this.values=Ga(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ga(e.times,Array),values:Ga(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ul(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new hl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new cl(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case qs:t=this.InterpolantFactoryMethodDiscrete;break;case ja:t=this.InterpolantFactoryMethodLinear;break;case Wa:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return qs;case this.InterpolantFactoryMethodLinear:return ja;case this.InterpolantFactoryMethodSmooth:return Wa}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,s=0,o=r-1;for(;s!==r&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&qg(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Wa,s=e.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(r)l=!0;else{let u=a*n,d=u-n,p=u+n;for(let g=0;g!==n;++g){let y=t[u+g];if(y!==t[d+g]||y!==t[p+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*n,d=o*n;for(let p=0;p!==n;++p)t[d+p]=t[u+p]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};Tn.prototype.ValueTypeName="";Tn.prototype.TimeBufferType=Float32Array;Tn.prototype.ValueBufferType=Float32Array;Tn.prototype.DefaultInterpolation=ja;var er=class extends Tn{constructor(e,t,n){super(e,t,n)}};er.prototype.ValueTypeName="bool";er.prototype.ValueBufferType=Array;er.prototype.DefaultInterpolation=qs;er.prototype.InterpolantFactoryMethodLinear=void 0;er.prototype.InterpolantFactoryMethodSmooth=void 0;var dl=class extends Tn{constructor(e,t,n,r){super(e,t,n,r)}};dl.prototype.ValueTypeName="color";var fl=class extends Tn{constructor(e,t,n,r){super(e,t,n,r)}};fl.prototype.ValueTypeName="number";var pl=class extends wr{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(r-t),c=e*a;for(let h=c+a;c!==h;c+=4)Ci.slerpFlat(s,0,o,c-a,o,c,l);return s}},go=class extends Tn{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new pl(this.times,this.values,this.getValueSize(),e)}};go.prototype.ValueTypeName="quaternion";go.prototype.InterpolantFactoryMethodSmooth=void 0;var tr=class extends Tn{constructor(e,t,n){super(e,t,n)}};tr.prototype.ValueTypeName="string";tr.prototype.ValueBufferType=Array;tr.prototype.DefaultInterpolation=qs;tr.prototype.InterpolantFactoryMethodLinear=void 0;tr.prototype.InterpolantFactoryMethodSmooth=void 0;var ml=class extends Tn{constructor(e,t,n,r){super(e,t,n,r)}};ml.prototype.ValueTypeName="vector";var _s=class extends On{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ct(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}};var ih=new Tt,vd=new z,yd=new z,gl=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ge(512,512),this.mapType=Zn,this.map=null,this.mapPass=null,this.matrix=new Tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fs,this._frameExtents=new ge(1,1),this._viewportCount=1,this._viewports=[new It(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;vd.setFromMatrixPosition(e.matrixWorld),t.position.copy(vd),yd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(yd),t.updateMatrixWorld(),ih.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ih),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ih)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ph=class extends gl{constructor(){super(new jt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=js*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},_o=class extends _s{constructor(e,t,n=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(On.DEFAULT_UP),this.updateMatrix(),this.target=new On,this.distance=n,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new ph}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var xo=class extends to{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},mh=class extends gl{constructor(){super(new xo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},xs=class extends _s{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(On.DEFAULT_UP),this.updateMatrix(),this.target=new On,this.shadow=new mh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},vs=class extends _s{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var _l=class extends jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Oh="\\[\\]\\.:\\/",Yg=new RegExp("["+Oh+"]","g"),kh="[^"+Oh+"]",$g="[^"+Oh.replace("\\.","")+"]",jg=/((?:WC+[\/:])*)/.source.replace("WC",kh),Zg=/(WCOD+)?/.source.replace("WCOD",$g),Jg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",kh),Kg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",kh),Qg=new RegExp("^"+jg+Zg+Jg+Kg+"$"),e0=["material","materials","bones","map"],gh=class{constructor(e,t,n){let r=n||Ft.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ft=(()=>{class i{constructor(t,n,r){this.path=n,this.parsedPath=r||i.parseTrackName(n),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new i.Composite(t,n,r):new i(t,n,r)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Yg,"")}static parseTrackName(t){let n=Qg.exec(t);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let r={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=r.nodeName&&r.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let o=r.nodeName.substring(s+1);e0.indexOf(o)!==-1&&(r.nodeName=r.nodeName.substring(0,s),r.objectName=o)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return r}static findNode(t,n){if(n===void 0||n===""||n==="."||n===-1||n===t.name||n===t.uuid)return t;if(t.skeleton){let r=t.skeleton.getBoneByName(n);if(r!==void 0)return r}if(t.children){let r=function(o){for(let a=0;a<o.length;a++){let l=o[a];if(l.name===n||l.uuid===n)return l;let c=r(l.children);if(c)return c}return null},s=r(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,n){t[n]=this.targetObject[this.propertyName]}_getValue_array(t,n){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)t[n++]=r[s]}_getValue_arrayElement(t,n){t[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,n){this.resolvedProperty.toArray(t,n)}_setValue_direct(t,n){this.targetObject[this.propertyName]=t[n]}_setValue_direct_setNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,n){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[n++]}_setValue_array_setNeedsUpdate(t,n){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,n){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,n){this.resolvedProperty[this.propertyIndex]=t[n]}_setValue_arrayElement_setNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,n){this.resolvedProperty.fromArray(t,n)}_setValue_fromArray_setNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,n){this.bind(),this.getValue(t,n)}_setValue_unbound(t,n){this.bind(),this.setValue(t,n)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,s=n.propertyName,o=n.propertyIndex;if(t||(t=i.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let h=n.objectIndex;switch(r){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===h){h=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[r]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[r]}if(h!==void 0){if(t[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let a=t[s];if(a===void 0){let h=n.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",t);return}let l=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?l=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(o!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=o}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}return i.Composite=gh,i})();Ft.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ft.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ft.prototype.GetterByBindingType=[Ft.prototype._getValue_direct,Ft.prototype._getValue_array,Ft.prototype._getValue_arrayElement,Ft.prototype._getValue_toArray];Ft.prototype.SetterByBindingTypeAndVersioning=[[Ft.prototype._setValue_direct,Ft.prototype._setValue_direct_setNeedsUpdate,Ft.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ft.prototype._setValue_array,Ft.prototype._setValue_array_setNeedsUpdate,Ft.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ft.prototype._setValue_arrayElement,Ft.prototype._setValue_arrayElement_setNeedsUpdate,Ft.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ft.prototype._setValue_fromArray,Ft.prototype._setValue_fromArray_setNeedsUpdate,Ft.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Pw=new Float32Array(1);var bd=new Tt,vo=class{constructor(e,t,n=0,r=1/0){this.ray=new Ks(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new cs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return bd.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(bd),this}intersectObject(e,t=!0,n=[]){return _h(e,this,n,t),n.sort(Sd),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)_h(e[r],this,n,t);return n.sort(Sd),n}};function Sd(i,e){return i.distance-e.distance}function _h(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){let s=i.children;for(let o=0,a=s.length;o<a;o++)_h(s[o],e,t,!0)}}function Bh(i,e,t,n){let r=t0(n);switch(t){case Ch:return i*e;case Ah:return i*e/r.components*r.byteLength;case Dl:return i*e/r.components*r.byteLength;case Rh:return i*e*2/r.components*r.byteLength;case Ll:return i*e*2/r.components*r.byteLength;case Th:return i*e*3/r.components*r.byteLength;case kn:return i*e*4/r.components*r.byteLength;case Fl:return i*e*4/r.components*r.byteLength;case Mo:case wo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Eo:case Co:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ul:case kl:return Math.max(i,16)*Math.max(e,8)/4;case Nl:case Ol:return Math.max(i,8)*Math.max(e,8)/2;case Bl:case zl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Vl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Hl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Gl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Wl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Xl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ql:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Yl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case $l:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case jl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Zl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Jl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Kl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ql:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ec:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case tc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case To:case nc:case ic:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Ih:case rc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case sc:case oc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function t0(i){switch(i){case Zn:case Mh:return{byteLength:1,components:1};case ys:case wh:case bs:return{byteLength:2,components:1};case Il:case Pl:return{byteLength:2,components:4};case ir:case Rl:case di:return{byteLength:4,components:1};case Eh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xl);function Wf(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function n0(i){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){let g=u[d],y=u[p];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++d,u[d]=y)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){let y=u[p];i.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var i0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,r0=`#ifdef USE_ALPHAHASH
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
#endif`,s0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,o0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,a0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,l0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,c0=`#ifdef USE_AOMAP
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
#endif`,h0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,u0=`#ifdef USE_BATCHING
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
#endif`,d0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,f0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,p0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,m0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,g0=`#ifdef USE_IRIDESCENCE
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
#endif`,_0=`#ifdef USE_BUMPMAP
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
#endif`,x0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,v0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,y0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,b0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,S0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,M0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,w0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,E0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,C0=`#define PI 3.141592653589793
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
} // validated`,T0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,A0=`vec3 transformedNormal = objectNormal;
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
#endif`,R0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,I0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,P0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,D0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,L0="gl_FragColor = linearToOutputTexel( gl_FragColor );",F0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,N0=`#ifdef USE_ENVMAP
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
#endif`,U0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,O0=`#ifdef USE_ENVMAP
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
#endif`,k0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,B0=`#ifdef USE_ENVMAP
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
#endif`,z0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,V0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,H0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,G0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,W0=`#ifdef USE_GRADIENTMAP
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
}`,X0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,q0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Y0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$0=`uniform bool receiveShadow;
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
#endif`,j0=`#ifdef USE_ENVMAP
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
#endif`,Z0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,J0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,K0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Q0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,e_=`PhysicalMaterial material;
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
#endif`,t_=`struct PhysicalMaterial {
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
}`,n_=`
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
#endif`,i_=`#if defined( RE_IndirectDiffuse )
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
#endif`,r_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,s_=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,o_=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,a_=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,l_=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,c_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,h_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,u_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,d_=`#if defined( USE_POINTS_UV )
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
#endif`,f_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,p_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,m_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,g_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,__=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,x_=`#ifdef USE_MORPHTARGETS
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
#endif`,v_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,y_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,b_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,S_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,M_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,w_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,E_=`#ifdef USE_NORMALMAP
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
#endif`,C_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,T_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,A_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,R_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,I_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,P_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,D_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,L_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,F_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,N_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,U_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,O_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,k_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,B_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,z_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,V_=`float getShadowMask() {
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
}`,H_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,G_=`#ifdef USE_SKINNING
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
#endif`,W_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,X_=`#ifdef USE_SKINNING
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
#endif`,q_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Y_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,j_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Z_=`#ifdef USE_TRANSMISSION
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
#endif`,J_=`#ifdef USE_TRANSMISSION
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
#endif`,K_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Q_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ex=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,nx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ix=`uniform sampler2D t2D;
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
}`,rx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ox=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ax=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lx=`#include <common>
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
}`,cx=`#if DEPTH_PACKING == 3200
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
}`,hx=`#define DISTANCE
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
}`,ux=`#define DISTANCE
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
}`,dx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,px=`uniform float scale;
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
}`,mx=`uniform vec3 diffuse;
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
}`,gx=`#include <common>
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
}`,_x=`uniform vec3 diffuse;
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
}`,xx=`#define LAMBERT
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
}`,vx=`#define LAMBERT
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
}`,yx=`#define MATCAP
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
}`,bx=`#define MATCAP
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
}`,Sx=`#define NORMAL
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
}`,Mx=`#define NORMAL
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
}`,wx=`#define PHONG
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
}`,Ex=`#define PHONG
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
}`,Cx=`#define STANDARD
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
}`,Tx=`#define STANDARD
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
}`,Ax=`#define TOON
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
}`,Rx=`#define TOON
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
}`,Ix=`uniform float size;
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
}`,Px=`uniform vec3 diffuse;
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
}`,Dx=`#include <common>
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
}`,Lx=`uniform vec3 color;
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
}`,Fx=`uniform float rotation;
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
}`,Nx=`uniform vec3 diffuse;
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
}`,rt={alphahash_fragment:i0,alphahash_pars_fragment:r0,alphamap_fragment:s0,alphamap_pars_fragment:o0,alphatest_fragment:a0,alphatest_pars_fragment:l0,aomap_fragment:c0,aomap_pars_fragment:h0,batching_pars_vertex:u0,batching_vertex:d0,begin_vertex:f0,beginnormal_vertex:p0,bsdfs:m0,iridescence_fragment:g0,bumpmap_pars_fragment:_0,clipping_planes_fragment:x0,clipping_planes_pars_fragment:v0,clipping_planes_pars_vertex:y0,clipping_planes_vertex:b0,color_fragment:S0,color_pars_fragment:M0,color_pars_vertex:w0,color_vertex:E0,common:C0,cube_uv_reflection_fragment:T0,defaultnormal_vertex:A0,displacementmap_pars_vertex:R0,displacementmap_vertex:I0,emissivemap_fragment:P0,emissivemap_pars_fragment:D0,colorspace_fragment:L0,colorspace_pars_fragment:F0,envmap_fragment:N0,envmap_common_pars_fragment:U0,envmap_pars_fragment:O0,envmap_pars_vertex:k0,envmap_physical_pars_fragment:j0,envmap_vertex:B0,fog_vertex:z0,fog_pars_vertex:V0,fog_fragment:H0,fog_pars_fragment:G0,gradientmap_pars_fragment:W0,lightmap_pars_fragment:X0,lights_lambert_fragment:q0,lights_lambert_pars_fragment:Y0,lights_pars_begin:$0,lights_toon_fragment:Z0,lights_toon_pars_fragment:J0,lights_phong_fragment:K0,lights_phong_pars_fragment:Q0,lights_physical_fragment:e_,lights_physical_pars_fragment:t_,lights_fragment_begin:n_,lights_fragment_maps:i_,lights_fragment_end:r_,logdepthbuf_fragment:s_,logdepthbuf_pars_fragment:o_,logdepthbuf_pars_vertex:a_,logdepthbuf_vertex:l_,map_fragment:c_,map_pars_fragment:h_,map_particle_fragment:u_,map_particle_pars_fragment:d_,metalnessmap_fragment:f_,metalnessmap_pars_fragment:p_,morphinstance_vertex:m_,morphcolor_vertex:g_,morphnormal_vertex:__,morphtarget_pars_vertex:x_,morphtarget_vertex:v_,normal_fragment_begin:y_,normal_fragment_maps:b_,normal_pars_fragment:S_,normal_pars_vertex:M_,normal_vertex:w_,normalmap_pars_fragment:E_,clearcoat_normal_fragment_begin:C_,clearcoat_normal_fragment_maps:T_,clearcoat_pars_fragment:A_,iridescence_pars_fragment:R_,opaque_fragment:I_,packing:P_,premultiplied_alpha_fragment:D_,project_vertex:L_,dithering_fragment:F_,dithering_pars_fragment:N_,roughnessmap_fragment:U_,roughnessmap_pars_fragment:O_,shadowmap_pars_fragment:k_,shadowmap_pars_vertex:B_,shadowmap_vertex:z_,shadowmask_pars_fragment:V_,skinbase_vertex:H_,skinning_pars_vertex:G_,skinning_vertex:W_,skinnormal_vertex:X_,specularmap_fragment:q_,specularmap_pars_fragment:Y_,tonemapping_fragment:$_,tonemapping_pars_fragment:j_,transmission_fragment:Z_,transmission_pars_fragment:J_,uv_pars_fragment:K_,uv_pars_vertex:Q_,uv_vertex:ex,worldpos_vertex:tx,background_vert:nx,background_frag:ix,backgroundCube_vert:rx,backgroundCube_frag:sx,cube_vert:ox,cube_frag:ax,depth_vert:lx,depth_frag:cx,distanceRGBA_vert:hx,distanceRGBA_frag:ux,equirect_vert:dx,equirect_frag:fx,linedashed_vert:px,linedashed_frag:mx,meshbasic_vert:gx,meshbasic_frag:_x,meshlambert_vert:xx,meshlambert_frag:vx,meshmatcap_vert:yx,meshmatcap_frag:bx,meshnormal_vert:Sx,meshnormal_frag:Mx,meshphong_vert:wx,meshphong_frag:Ex,meshphysical_vert:Cx,meshphysical_frag:Tx,meshtoon_vert:Ax,meshtoon_frag:Rx,points_vert:Ix,points_frag:Px,shadow_vert:Dx,shadow_frag:Lx,sprite_vert:Fx,sprite_frag:Nx},xe={common:{diffuse:{value:new ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},envMapRotation:{value:new et},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new ct(16777215)},opacity:{value:1},center:{value:new ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},fi={basic:{uniforms:cn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:cn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new ct(0)}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:cn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new ct(0)},specular:{value:new ct(1118481)},shininess:{value:30}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:cn([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:cn([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new ct(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:cn([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:cn([xe.points,xe.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:cn([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:cn([xe.common,xe.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:cn([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:cn([xe.sprite,xe.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new et}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distanceRGBA:{uniforms:cn([xe.common,xe.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distanceRGBA_vert,fragmentShader:rt.distanceRGBA_frag},shadow:{uniforms:cn([xe.lights,xe.fog,{color:{value:new ct(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};fi.physical={uniforms:cn([fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new ct(0)},specularColor:{value:new ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};var ac={r:0,b:0,g:0},Ar=new Ji,Ux=new Tt;function Ox(i,e,t,n,r,s,o){let a=new ct(0),l=s===!0?0:1,c,h,u=null,d=0,p=null;function g(T){let S=T.isScene===!0?T.background:null;return S&&S.isTexture&&(S=(T.backgroundBlurriness>0?t:e).get(S)),S}function y(T){let S=!1,F=g(T);F===null?f(a,l):F&&F.isColor&&(f(F,1),S=!0);let D=i.xr.getEnvironmentBlendMode();D==="additive"?n.buffers.color.setClear(0,0,0,1,o):D==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(T,S){let F=g(S);F&&(F.isCubeTexture||F.mapping===bo)?(h===void 0&&(h=new Gt(new hs(1,1,1),new jn({name:"BackgroundCubeMaterial",uniforms:Tr(fi.backgroundCube.uniforms),vertexShader:fi.backgroundCube.vertexShader,fragmentShader:fi.backgroundCube.fragmentShader,side:Kt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,P,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),Ar.copy(S.backgroundRotation),Ar.x*=-1,Ar.y*=-1,Ar.z*=-1,F.isCubeTexture&&F.isRenderTargetTexture===!1&&(Ar.y*=-1,Ar.z*=-1),h.material.uniforms.envMap.value=F,h.material.uniforms.flipEnvMap.value=F.isCubeTexture&&F.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Ux.makeRotationFromEuler(Ar)),h.material.toneMapped=pt.getTransfer(F.colorSpace)!==yt,(u!==F||d!==F.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=F,d=F.version,p=i.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null)):F&&F.isTexture&&(c===void 0&&(c=new Gt(new po(2,2),new jn({name:"BackgroundMaterial",uniforms:Tr(fi.background.uniforms),vertexShader:fi.background.vertexShader,fragmentShader:fi.background.fragmentShader,side:wi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=F,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=pt.getTransfer(F.colorSpace)!==yt,F.matrixAutoUpdate===!0&&F.updateMatrix(),c.material.uniforms.uvTransform.value.copy(F.matrix),(u!==F||d!==F.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=F,d=F.version,p=i.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function f(T,S){T.getRGB(ac,Nh(i)),n.buffers.color.setClear(ac.r,ac.g,ac.b,S,o)}function A(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(T,S=1){a.set(T),l=S,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,f(a,l)},render:y,addToRenderList:m,dispose:A}}function kx(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null),s=r,o=!1;function a(_,R,V,H,ee){let K=!1,J=u(H,V,R);s!==J&&(s=J,c(s.object)),K=p(_,H,V,ee),K&&g(_,H,V,ee),ee!==null&&e.update(ee,i.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,S(_,R,V,H),ee!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(ee).buffer))}function l(){return i.createVertexArray()}function c(_){return i.bindVertexArray(_)}function h(_){return i.deleteVertexArray(_)}function u(_,R,V){let H=V.wireframe===!0,ee=n[_.id];ee===void 0&&(ee={},n[_.id]=ee);let K=ee[R.id];K===void 0&&(K={},ee[R.id]=K);let J=K[H];return J===void 0&&(J=d(l()),K[H]=J),J}function d(_){let R=[],V=[],H=[];for(let ee=0;ee<t;ee++)R[ee]=0,V[ee]=0,H[ee]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:V,attributeDivisors:H,object:_,attributes:{},index:null}}function p(_,R,V,H){let ee=s.attributes,K=R.attributes,J=0,te=V.getAttributes();for(let X in te)if(te[X].location>=0){let ve=ee[X],be=K[X];if(be===void 0&&(X==="instanceMatrix"&&_.instanceMatrix&&(be=_.instanceMatrix),X==="instanceColor"&&_.instanceColor&&(be=_.instanceColor)),ve===void 0||ve.attribute!==be||be&&ve.data!==be.data)return!0;J++}return s.attributesNum!==J||s.index!==H}function g(_,R,V,H){let ee={},K=R.attributes,J=0,te=V.getAttributes();for(let X in te)if(te[X].location>=0){let ve=K[X];ve===void 0&&(X==="instanceMatrix"&&_.instanceMatrix&&(ve=_.instanceMatrix),X==="instanceColor"&&_.instanceColor&&(ve=_.instanceColor));let be={};be.attribute=ve,ve&&ve.data&&(be.data=ve.data),ee[X]=be,J++}s.attributes=ee,s.attributesNum=J,s.index=H}function y(){let _=s.newAttributes;for(let R=0,V=_.length;R<V;R++)_[R]=0}function m(_){f(_,0)}function f(_,R){let V=s.newAttributes,H=s.enabledAttributes,ee=s.attributeDivisors;V[_]=1,H[_]===0&&(i.enableVertexAttribArray(_),H[_]=1),ee[_]!==R&&(i.vertexAttribDivisor(_,R),ee[_]=R)}function A(){let _=s.newAttributes,R=s.enabledAttributes;for(let V=0,H=R.length;V<H;V++)R[V]!==_[V]&&(i.disableVertexAttribArray(V),R[V]=0)}function T(_,R,V,H,ee,K,J){J===!0?i.vertexAttribIPointer(_,R,V,ee,K):i.vertexAttribPointer(_,R,V,H,ee,K)}function S(_,R,V,H){y();let ee=H.attributes,K=V.getAttributes(),J=R.defaultAttributeValues;for(let te in K){let X=K[te];if(X.location>=0){let me=ee[te];if(me===void 0&&(te==="instanceMatrix"&&_.instanceMatrix&&(me=_.instanceMatrix),te==="instanceColor"&&_.instanceColor&&(me=_.instanceColor)),me!==void 0){let ve=me.normalized,be=me.itemSize,Be=e.get(me);if(Be===void 0)continue;let $e=Be.buffer,Y=Be.type,se=Be.bytesPerElement,fe=Y===i.INT||Y===i.UNSIGNED_INT||me.gpuType===Rl;if(me.isInterleavedBufferAttribute){let de=me.data,Fe=de.stride,We=me.offset;if(de.isInstancedInterleavedBuffer){for(let Ne=0;Ne<X.locationSize;Ne++)f(X.location+Ne,de.meshPerAttribute);_.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Ne=0;Ne<X.locationSize;Ne++)m(X.location+Ne);i.bindBuffer(i.ARRAY_BUFFER,$e);for(let Ne=0;Ne<X.locationSize;Ne++)T(X.location+Ne,be/X.locationSize,Y,ve,Fe*se,(We+be/X.locationSize*Ne)*se,fe)}else{if(me.isInstancedBufferAttribute){for(let de=0;de<X.locationSize;de++)f(X.location+de,me.meshPerAttribute);_.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let de=0;de<X.locationSize;de++)m(X.location+de);i.bindBuffer(i.ARRAY_BUFFER,$e);for(let de=0;de<X.locationSize;de++)T(X.location+de,be/X.locationSize,Y,ve,be*se,be/X.locationSize*de*se,fe)}}else if(J!==void 0){let ve=J[te];if(ve!==void 0)switch(ve.length){case 2:i.vertexAttrib2fv(X.location,ve);break;case 3:i.vertexAttrib3fv(X.location,ve);break;case 4:i.vertexAttrib4fv(X.location,ve);break;default:i.vertexAttrib1fv(X.location,ve)}}}}A()}function F(){U();for(let _ in n){let R=n[_];for(let V in R){let H=R[V];for(let ee in H)h(H[ee].object),delete H[ee];delete R[V]}delete n[_]}}function D(_){if(n[_.id]===void 0)return;let R=n[_.id];for(let V in R){let H=R[V];for(let ee in H)h(H[ee].object),delete H[ee];delete R[V]}delete n[_.id]}function P(_){for(let R in n){let V=n[R];if(V[_.id]===void 0)continue;let H=V[_.id];for(let ee in H)h(H[ee].object),delete H[ee];delete V[_.id]}}function U(){M(),o=!0,s!==r&&(s=r,c(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:U,resetDefaultState:M,dispose:F,releaseStatesOfGeometry:D,releaseStatesOfProgram:P,initAttributes:y,enableAttribute:m,disableUnusedAttributes:A}}function Bx(i,e,t){let n;function r(c){n=c}function s(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];t.update(p,n,1)}function l(c,h,u,d){if(u===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let y=0;y<u;y++)g+=h[y]*d[y];t.update(g,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function zx(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let P=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(P){return!(P!==kn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){let U=P===bs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==Zn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==di&&!U)}function l(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),A=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),F=g>0,D=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:A,maxVaryings:T,maxFragmentUniforms:S,vertexTextures:F,maxSamples:D}}function Vx(i){let e=this,t=null,n=0,r=!1,s=!1,o=new ai,a=new et,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let p=u.length!==0||d||n!==0||r;return r=d,n=u.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,p){let g=u.clippingPlanes,y=u.clipIntersection,m=u.clipShadows,f=i.get(u);if(!r||g===null||g.length===0||s&&!m)s?h(null):c();else{let A=s?0:n,T=A*4,S=f.clippingState||null;l.value=S,S=h(g,d,T,p);for(let F=0;F!==T;++F)S[F]=t[F];f.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,p,g){let y=u!==null?u.length:0,m=null;if(y!==0){if(m=l.value,g!==!0||m===null){let f=p+y*4,A=d.matrixWorldInverse;a.getNormalMatrix(A),(m===null||m.length<f)&&(m=new Float32Array(f));for(let T=0,S=p;T!==y;++T,S+=4)o.copy(u[T]).applyMatrix4(A,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function Hx(i){let e=new WeakMap;function t(o,a){return a===Cl?o.mapping=Er:a===Tl&&(o.mapping=Cr),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Cl||a===Tl)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new el(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}var Cs=4,bf=[.125,.215,.35,.446,.526,.582],Pr=20,zh=new xo,Sf=new ct,Vh=null,Hh=0,Gh=0,Wh=!1,Ir=(1+Math.sqrt(5))/2,Es=1/Ir,Mf=[new z(-Ir,Es,0),new z(Ir,Es,0),new z(-Es,0,Ir),new z(Es,0,Ir),new z(0,Ir,-Es),new z(0,Ir,Es),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)],Gx=new z,hc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100,s={}){let{size:o=256,position:a=Gx}=s;Vh=this._renderer.getRenderTarget(),Hh=this._renderer.getActiveCubeFace(),Gh=this._renderer.getActiveMipmapLevel(),Wh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ef(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Vh,Hh,Gh),this._renderer.xr.enabled=Wh,e.scissorTest=!1,lc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Er||e.mapping===Cr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Vh=this._renderer.getRenderTarget(),Hh=this._renderer.getActiveCubeFace(),Gh=this._renderer.getActiveMipmapLevel(),Wh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Yn,minFilter:Yn,generateMipmaps:!1,type:bs,format:kn,colorSpace:br,depthBuffer:!1},r=wf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wf(e,t,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Wx(s)),this._blurMaterial=Xx(s,e,t)}return r}_compileMaterial(e){let t=new Gt(this._lodPlanes[0],e);this._renderer.compile(t,zh)}_sceneToCubeUV(e,t,n,r,s){let l=new jt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,p=u.toneMapping;u.getClearColor(Sf),u.toneMapping=Ri,u.autoClear=!1;let g=new Ti({name:"PMREM.Background",side:Kt,depthWrite:!1,depthTest:!1}),y=new Gt(new hs,g),m=!1,f=e.background;f?f.isColor&&(g.color.copy(f),e.background=null,m=!0):(g.color.copy(Sf),m=!0);for(let A=0;A<6;A++){let T=A%3;T===0?(l.up.set(0,c[A],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[A],s.y,s.z)):T===1?(l.up.set(0,0,c[A]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[A],s.z)):(l.up.set(0,c[A],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[A]));let S=this._cubeSize;lc(r,T*S,A>2?S:0,S,S),u.setRenderTarget(r),m&&u.render(y,l),u.render(e,l)}y.geometry.dispose(),y.material.dispose(),u.toneMapping=p,u.autoClear=d,e.background=f}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===Er||e.mapping===Cr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ef());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new Gt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let l=this._cubeSize;lc(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,zh)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Mf[(r-s-1)%Mf.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Gt(this._lodPlanes[r],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Pr-1),y=s/g,m=isFinite(s)?1+Math.floor(h*y):Pr;m>Pr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Pr}`);let f=[],A=0;for(let P=0;P<Pr;++P){let U=P/y,M=Math.exp(-U*U/2);f.push(M),P===0?A+=M:P<m&&(A+=2*M)}for(let P=0;P<f.length;P++)f[P]=f[P]/A;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:T}=this;d.dTheta.value=g,d.mipInt.value=T-n;let S=this._sizeLods[r],F=3*S*(r>T-Cs?r-T+Cs:0),D=4*(this._cubeSize-S);lc(t,F,D,3*S,2*S),l.setRenderTarget(t),l.render(u,zh)}};function Wx(i){let e=[],t=[],n=[],r=i,s=i-Cs+1+bf.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);t.push(a);let l=1/a;o>i-Cs?l=bf[o-i+Cs-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,y=3,m=2,f=1,A=new Float32Array(y*g*p),T=new Float32Array(m*g*p),S=new Float32Array(f*g*p);for(let D=0;D<p;D++){let P=D%3*2/3-1,U=D>2?0:-1,M=[P,U,0,P+2/3,U,0,P+2/3,U+1,0,P,U,0,P+2/3,U+1,0,P,U+1,0];A.set(M,y*g*D),T.set(d,m*g*D);let _=[D,D,D,D,D,D];S.set(_,f*g*D)}let F=new $n;F.setAttribute("position",new En(A,y)),F.setAttribute("uv",new En(T,m)),F.setAttribute("faceIndex",new En(S,f)),e.push(F),r>Cs&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function wf(i,e,t){let n=new hi(i,e,t);return n.texture.mapping=bo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function lc(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Xx(i,e,t){let n=new Float32Array(Pr),r=new z(0,1,0);return new jn({name:"SphericalGaussianBlur",defines:{n:Pr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:eu(),fragmentShader:`

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
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function Ef(){return new jn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:eu(),fragmentShader:`

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
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function Cf(){return new jn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:eu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function eu(){return`

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
	`}function qx(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Cl||l===Tl,h=l===Er||l===Cr;if(c||h){let u=e.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new hc(i)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{let p=a.image;return c&&p&&p.height>0||h&&p&&r(p)?(t===null&&(t=new hc(i)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function r(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){let l=a.target;l.removeEventListener("dispose",s);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Yx(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let r=t(n);return r===null&&Ao("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function $x(i,e,t,n){let r={},s=new WeakMap;function o(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete r[d.id];let p=s.get(d);p&&(e.remove(p),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let p in d)e.update(d[p],i.ARRAY_BUFFER)}function c(u){let d=[],p=u.index,g=u.attributes.position,y=0;if(p!==null){let A=p.array;y=p.version;for(let T=0,S=A.length;T<S;T+=3){let F=A[T+0],D=A[T+1],P=A[T+2];d.push(F,D,D,P,P,F)}}else if(g!==void 0){let A=g.array;y=g.version;for(let T=0,S=A.length/3-1;T<S;T+=3){let F=T+0,D=T+1,P=T+2;d.push(F,D,D,P,P,F)}}else return;let m=new(Fh(d)?eo:Qs)(d,1);m.version=y;let f=s.get(u);f&&e.remove(f),s.set(u,m)}function h(u){let d=s.get(u);if(d){let p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function jx(i,e,t){let n;function r(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,p){i.drawElements(n,p,s,d*o),t.update(p,n,1)}function c(d,p,g){g!==0&&(i.drawElementsInstanced(n,p,s,d*o,g),t.update(p,n,g))}function h(d,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];t.update(m,n,1)}function u(d,p,g,y){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/o,p[f],y[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,s,d,0,y,0,g);let f=0;for(let A=0;A<g;A++)f+=p[A]*y[A];t.update(f,n,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Zx(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Jx(i,e,t){let n=new WeakMap,r=new It;function s(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let _=function(){U.dispose(),n.delete(a),a.removeEventListener("dispose",_)};var p=_;d!==void 0&&d.texture.dispose();let g=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],A=a.morphAttributes.normal||[],T=a.morphAttributes.color||[],S=0;g===!0&&(S=1),y===!0&&(S=2),m===!0&&(S=3);let F=a.attributes.position.count*S,D=1;F>e.maxTextureSize&&(D=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);let P=new Float32Array(F*D*4*u),U=new Js(P,F,D,u);U.type=di,U.needsUpdate=!0;let M=S*4;for(let R=0;R<u;R++){let V=f[R],H=A[R],ee=T[R],K=F*D*4*R;for(let J=0;J<V.count;J++){let te=J*M;g===!0&&(r.fromBufferAttribute(V,J),P[K+te+0]=r.x,P[K+te+1]=r.y,P[K+te+2]=r.z,P[K+te+3]=0),y===!0&&(r.fromBufferAttribute(H,J),P[K+te+4]=r.x,P[K+te+5]=r.y,P[K+te+6]=r.z,P[K+te+7]=0),m===!0&&(r.fromBufferAttribute(ee,J),P[K+te+8]=r.x,P[K+te+9]=r.y,P[K+te+10]=r.z,P[K+te+11]=ee.itemSize===4?r.w:1)}}d={count:u,texture:U,size:new ge(F,D)},n.set(a,d),a.addEventListener("dispose",_)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];let y=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",y),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:s}}function Kx(i,e,t,n){let r=new WeakMap;function s(l){let c=n.render.frame,h=l.geometry,u=e.get(l,h);if(r.get(u)!==c&&(e.update(u),r.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return u}function o(){r=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}var Xf=new rr,Tf=new io(1,1),qf=new Js,Yf=new Ka,$f=new no,Af=[],Rf=[],If=new Float32Array(16),Pf=new Float32Array(9),Df=new Float32Array(4);function As(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,s=Af[r];if(s===void 0&&(s=new Float32Array(r),Af[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function Wt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Xt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function uc(i,e){let t=Rf[e];t===void 0&&(t=new Int32Array(e),Rf[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Qx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function ev(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;i.uniform2fv(this.addr,e),Xt(t,e)}}function tv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Wt(t,e))return;i.uniform3fv(this.addr,e),Xt(t,e)}}function nv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;i.uniform4fv(this.addr,e),Xt(t,e)}}function iv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,n))return;Df.set(n),i.uniformMatrix2fv(this.addr,!1,Df),Xt(t,n)}}function rv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,n))return;Pf.set(n),i.uniformMatrix3fv(this.addr,!1,Pf),Xt(t,n)}}function sv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,n))return;If.set(n),i.uniformMatrix4fv(this.addr,!1,If),Xt(t,n)}}function ov(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function av(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;i.uniform2iv(this.addr,e),Xt(t,e)}}function lv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;i.uniform3iv(this.addr,e),Xt(t,e)}}function cv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;i.uniform4iv(this.addr,e),Xt(t,e)}}function hv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function uv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;i.uniform2uiv(this.addr,e),Xt(t,e)}}function dv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;i.uniform3uiv(this.addr,e),Xt(t,e)}}function fv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;i.uniform4uiv(this.addr,e),Xt(t,e)}}function pv(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Tf.compareFunction=Dh,s=Tf):s=Xf,t.setTexture2D(e||s,r)}function mv(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Yf,r)}function gv(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||$f,r)}function _v(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||qf,r)}function xv(i){switch(i){case 5126:return Qx;case 35664:return ev;case 35665:return tv;case 35666:return nv;case 35674:return iv;case 35675:return rv;case 35676:return sv;case 5124:case 35670:return ov;case 35667:case 35671:return av;case 35668:case 35672:return lv;case 35669:case 35673:return cv;case 5125:return hv;case 36294:return uv;case 36295:return dv;case 36296:return fv;case 35678:case 36198:case 36298:case 36306:case 35682:return pv;case 35679:case 36299:case 36307:return mv;case 35680:case 36300:case 36308:case 36293:return gv;case 36289:case 36303:case 36311:case 36292:return _v}}function vv(i,e){i.uniform1fv(this.addr,e)}function yv(i,e){let t=As(e,this.size,2);i.uniform2fv(this.addr,t)}function bv(i,e){let t=As(e,this.size,3);i.uniform3fv(this.addr,t)}function Sv(i,e){let t=As(e,this.size,4);i.uniform4fv(this.addr,t)}function Mv(i,e){let t=As(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function wv(i,e){let t=As(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Ev(i,e){let t=As(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Cv(i,e){i.uniform1iv(this.addr,e)}function Tv(i,e){i.uniform2iv(this.addr,e)}function Av(i,e){i.uniform3iv(this.addr,e)}function Rv(i,e){i.uniform4iv(this.addr,e)}function Iv(i,e){i.uniform1uiv(this.addr,e)}function Pv(i,e){i.uniform2uiv(this.addr,e)}function Dv(i,e){i.uniform3uiv(this.addr,e)}function Lv(i,e){i.uniform4uiv(this.addr,e)}function Fv(i,e,t){let n=this.cache,r=e.length,s=uc(t,r);Wt(n,s)||(i.uniform1iv(this.addr,s),Xt(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Xf,s[o])}function Nv(i,e,t){let n=this.cache,r=e.length,s=uc(t,r);Wt(n,s)||(i.uniform1iv(this.addr,s),Xt(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Yf,s[o])}function Uv(i,e,t){let n=this.cache,r=e.length,s=uc(t,r);Wt(n,s)||(i.uniform1iv(this.addr,s),Xt(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||$f,s[o])}function Ov(i,e,t){let n=this.cache,r=e.length,s=uc(t,r);Wt(n,s)||(i.uniform1iv(this.addr,s),Xt(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||qf,s[o])}function kv(i){switch(i){case 5126:return vv;case 35664:return yv;case 35665:return bv;case 35666:return Sv;case 35674:return Mv;case 35675:return wv;case 35676:return Ev;case 5124:case 35670:return Cv;case 35667:case 35671:return Tv;case 35668:case 35672:return Av;case 35669:case 35673:return Rv;case 5125:return Iv;case 36294:return Pv;case 36295:return Dv;case 36296:return Lv;case 35678:case 36198:case 36298:case 36306:case 35682:return Fv;case 35679:case 36299:case 36307:return Nv;case 35680:case 36300:case 36308:case 36293:return Uv;case 36289:case 36303:case 36311:case 36292:return Ov}}var qh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=xv(t.type)}},Yh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=kv(t.type)}},$h=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],n)}}},Xh=/(\w+)(\])?(\[|\.)?/g;function Lf(i,e){i.seq.push(e),i.map[e.id]=e}function Bv(i,e,t){let n=i.name,r=n.length;for(Xh.lastIndex=0;;){let s=Xh.exec(n),o=Xh.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Lf(t,c===void 0?new qh(a,i,e):new Yh(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new $h(a),Lf(t,u)),t=u}}}var Ts=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);Bv(s,o,this)}}setValue(e,t,n,r){let s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&n.push(o)}return n}};function Ff(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var zv=37297,Vv=0;function Hv(i,e){let t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Nf=new et;function Gv(i){pt._getMatrix(Nf,pt.workingColorSpace,i);let e=`mat3( ${Nf.elements.map(t=>t.toFixed(4))} )`;switch(pt.getTransfer(i)){case Ys:return[e,"LinearTransferOETF"];case yt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Uf(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Hv(i.getShaderSource(e),o)}else return r}function Wv(i,e){let t=Gv(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Xv(i,e){let t;switch(e){case qd:t="Linear";break;case Yd:t="Reinhard";break;case $d:t="Cineon";break;case jd:t="ACESFilmic";break;case Jd:t="AgX";break;case Kd:t="Neutral";break;case Zd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var cc=new z;function qv(){pt.getLuminanceCoefficients(cc);let i=cc.x.toFixed(4),e=cc.y.toFixed(4),t=cc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Yv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ro).join(`
`)}function $v(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function jv(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(e,r),o=s.name,a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Ro(i){return i!==""}function Of(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function kf(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Zv=/^[ \t]*#include +<([\w\d./]+)>/gm;function jh(i){return i.replace(Zv,Kv)}var Jv=new Map;function Kv(i,e){let t=rt[e];if(t===void 0){let n=Jv.get(e);if(n!==void 0)t=rt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return jh(t)}var Qv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bf(i){return i.replace(Qv,ey)}function ey(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function zf(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function ty(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===vh?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ed?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ui&&(e="SHADOWMAP_TYPE_VSM"),e}function ny(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Er:case Cr:e="ENVMAP_TYPE_CUBE";break;case bo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function iy(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Cr:e="ENVMAP_MODE_REFRACTION";break}return e}function ry(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Sh:e="ENVMAP_BLENDING_MULTIPLY";break;case Wd:e="ENVMAP_BLENDING_MIX";break;case Xd:e="ENVMAP_BLENDING_ADD";break}return e}function sy(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function oy(i,e,t,n){let r=i.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,l=ty(t),c=ny(t),h=iy(t),u=ry(t),d=sy(t),p=Yv(t),g=$v(s),y=r.createProgram(),m,f,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ro).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ro).join(`
`),f.length>0&&(f+=`
`)):(m=[zf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ro).join(`
`),f=[zf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ri?"#define TONE_MAPPING":"",t.toneMapping!==Ri?rt.tonemapping_pars_fragment:"",t.toneMapping!==Ri?Xv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,Wv("linearToOutputTexel",t.outputColorSpace),qv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ro).join(`
`)),o=jh(o),o=Of(o,t),o=kf(o,t),a=jh(a),a=Of(a,t),a=kf(a,t),o=Bf(o),a=Bf(a),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===Lh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Lh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let T=A+m+o,S=A+f+a,F=Ff(r,r.VERTEX_SHADER,T),D=Ff(r,r.FRAGMENT_SHADER,S);r.attachShader(y,F),r.attachShader(y,D),t.index0AttributeName!==void 0?r.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function P(R){if(i.debug.checkShaderErrors){let V=r.getProgramInfoLog(y).trim(),H=r.getShaderInfoLog(F).trim(),ee=r.getShaderInfoLog(D).trim(),K=!0,J=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(K=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,y,F,D);else{let te=Uf(r,F,"vertex"),X=Uf(r,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+V+`
`+te+`
`+X)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(H===""||ee==="")&&(J=!1);J&&(R.diagnostics={runnable:K,programLog:V,vertexShader:{log:H,prefix:m},fragmentShader:{log:ee,prefix:f}})}r.deleteShader(F),r.deleteShader(D),U=new Ts(r,y),M=jv(r,y)}let U;this.getUniforms=function(){return U===void 0&&P(this),U};let M;this.getAttributes=function(){return M===void 0&&P(this),M};let _=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=r.getProgramParameter(y,zv)),_},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Vv++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=F,this.fragmentShader=D,this}var ay=0,Zh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Jh(e),t.set(e,n)),n}},Jh=class{constructor(e){this.id=ay++,this.code=e,this.usedTimes=0}};function ly(i,e,t,n,r,s,o){let a=new cs,l=new Zh,c=new Set,h=[],u=r.logarithmicDepthBuffer,d=r.vertexTextures,p=r.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,_,R,V,H){let ee=V.fog,K=H.geometry,J=M.isMeshStandardMaterial?V.environment:null,te=(M.isMeshStandardMaterial?t:e).get(M.envMap||J),X=te&&te.mapping===bo?te.image.height:null,me=g[M.type];M.precision!==null&&(p=r.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));let ve=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,be=ve!==void 0?ve.length:0,Be=0;K.morphAttributes.position!==void 0&&(Be=1),K.morphAttributes.normal!==void 0&&(Be=2),K.morphAttributes.color!==void 0&&(Be=3);let $e,Y,se,fe;if(me){let xt=fi[me];$e=xt.vertexShader,Y=xt.fragmentShader}else $e=M.vertexShader,Y=M.fragmentShader,l.update(M),se=l.getVertexShaderID(M),fe=l.getFragmentShaderID(M);let de=i.getRenderTarget(),Fe=i.state.buffers.depth.getReversed(),We=H.isInstancedMesh===!0,Ne=H.isBatchedMesh===!0,Ye=!!M.map,Le=!!M.matcap,Oe=!!te,E=!!M.aoMap,pe=!!M.lightMap,oe=!!M.bumpMap,ue=!!M.normalMap,ne=!!M.displacementMap,ke=!!M.emissiveMap,ae=!!M.metalnessMap,C=!!M.roughnessMap,x=M.anisotropy>0,B=M.clearcoat>0,Z=M.dispersion>0,re=M.iridescence>0,q=M.sheen>0,Ue=M.transmission>0,ye=x&&!!M.anisotropyMap,Ve=B&&!!M.clearcoatMap,qe=B&&!!M.clearcoatNormalMap,le=B&&!!M.clearcoatRoughnessMap,Ce=re&&!!M.iridescenceMap,Xe=re&&!!M.iridescenceThicknessMap,Ze=q&&!!M.sheenColorMap,Ie=q&&!!M.sheenRoughnessMap,ut=!!M.specularMap,it=!!M.specularColorMap,Mt=!!M.specularIntensityMap,N=Ue&&!!M.transmissionMap,Me=Ue&&!!M.thicknessMap,j=!!M.gradientMap,ie=!!M.alphaMap,Ee=M.alphaTest>0,we=!!M.alphaHash,tt=!!M.extensions,Pt=Ri;M.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(Pt=i.toneMapping);let Qt={shaderID:me,shaderType:M.type,shaderName:M.name,vertexShader:$e,fragmentShader:Y,defines:M.defines,customVertexShaderID:se,customFragmentShaderID:fe,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:Ne,batchingColor:Ne&&H._colorsTexture!==null,instancing:We,instancingColor:We&&H.instanceColor!==null,instancingMorph:We&&H.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:de===null?i.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:br,alphaToCoverage:!!M.alphaToCoverage,map:Ye,matcap:Le,envMap:Oe,envMapMode:Oe&&te.mapping,envMapCubeUVHeight:X,aoMap:E,lightMap:pe,bumpMap:oe,normalMap:ue,displacementMap:d&&ne,emissiveMap:ke,normalMapObjectSpace:ue&&M.normalMapType===nf,normalMapTangentSpace:ue&&M.normalMapType===Ph,metalnessMap:ae,roughnessMap:C,anisotropy:x,anisotropyMap:ye,clearcoat:B,clearcoatMap:Ve,clearcoatNormalMap:qe,clearcoatRoughnessMap:le,dispersion:Z,iridescence:re,iridescenceMap:Ce,iridescenceThicknessMap:Xe,sheen:q,sheenColorMap:Ze,sheenRoughnessMap:Ie,specularMap:ut,specularColorMap:it,specularIntensityMap:Mt,transmission:Ue,transmissionMap:N,thicknessMap:Me,gradientMap:j,opaque:M.transparent===!1&&M.blending===vr&&M.alphaToCoverage===!1,alphaMap:ie,alphaTest:Ee,alphaHash:we,combine:M.combine,mapUv:Ye&&y(M.map.channel),aoMapUv:E&&y(M.aoMap.channel),lightMapUv:pe&&y(M.lightMap.channel),bumpMapUv:oe&&y(M.bumpMap.channel),normalMapUv:ue&&y(M.normalMap.channel),displacementMapUv:ne&&y(M.displacementMap.channel),emissiveMapUv:ke&&y(M.emissiveMap.channel),metalnessMapUv:ae&&y(M.metalnessMap.channel),roughnessMapUv:C&&y(M.roughnessMap.channel),anisotropyMapUv:ye&&y(M.anisotropyMap.channel),clearcoatMapUv:Ve&&y(M.clearcoatMap.channel),clearcoatNormalMapUv:qe&&y(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&y(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&y(M.iridescenceMap.channel),iridescenceThicknessMapUv:Xe&&y(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ze&&y(M.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&y(M.sheenRoughnessMap.channel),specularMapUv:ut&&y(M.specularMap.channel),specularColorMapUv:it&&y(M.specularColorMap.channel),specularIntensityMapUv:Mt&&y(M.specularIntensityMap.channel),transmissionMapUv:N&&y(M.transmissionMap.channel),thicknessMapUv:Me&&y(M.thicknessMap.channel),alphaMapUv:ie&&y(M.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(ue||x),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!K.attributes.uv&&(Ye||ie),fog:!!ee,useFog:M.fog===!0,fogExp2:!!ee&&ee.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Fe,skinning:H.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:be,morphTextureStride:Be,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Pt,decodeVideoTexture:Ye&&M.map.isVideoTexture===!0&&pt.getTransfer(M.map.colorSpace)===yt,decodeVideoTextureEmissive:ke&&M.emissiveMap.isVideoTexture===!0&&pt.getTransfer(M.emissiveMap.colorSpace)===yt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===fn,flipSided:M.side===Kt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:tt&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(tt&&M.extensions.multiDraw===!0||Ne)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Qt.vertexUv1s=c.has(1),Qt.vertexUv2s=c.has(2),Qt.vertexUv3s=c.has(3),c.clear(),Qt}function f(M){let _=[];if(M.shaderID?_.push(M.shaderID):(_.push(M.customVertexShaderID),_.push(M.customFragmentShaderID)),M.defines!==void 0)for(let R in M.defines)_.push(R),_.push(M.defines[R]);return M.isRawShaderMaterial===!1&&(A(_,M),T(_,M),_.push(i.outputColorSpace)),_.push(M.customProgramCacheKey),_.join()}function A(M,_){M.push(_.precision),M.push(_.outputColorSpace),M.push(_.envMapMode),M.push(_.envMapCubeUVHeight),M.push(_.mapUv),M.push(_.alphaMapUv),M.push(_.lightMapUv),M.push(_.aoMapUv),M.push(_.bumpMapUv),M.push(_.normalMapUv),M.push(_.displacementMapUv),M.push(_.emissiveMapUv),M.push(_.metalnessMapUv),M.push(_.roughnessMapUv),M.push(_.anisotropyMapUv),M.push(_.clearcoatMapUv),M.push(_.clearcoatNormalMapUv),M.push(_.clearcoatRoughnessMapUv),M.push(_.iridescenceMapUv),M.push(_.iridescenceThicknessMapUv),M.push(_.sheenColorMapUv),M.push(_.sheenRoughnessMapUv),M.push(_.specularMapUv),M.push(_.specularColorMapUv),M.push(_.specularIntensityMapUv),M.push(_.transmissionMapUv),M.push(_.thicknessMapUv),M.push(_.combine),M.push(_.fogExp2),M.push(_.sizeAttenuation),M.push(_.morphTargetsCount),M.push(_.morphAttributeCount),M.push(_.numDirLights),M.push(_.numPointLights),M.push(_.numSpotLights),M.push(_.numSpotLightMaps),M.push(_.numHemiLights),M.push(_.numRectAreaLights),M.push(_.numDirLightShadows),M.push(_.numPointLightShadows),M.push(_.numSpotLightShadows),M.push(_.numSpotLightShadowsWithMaps),M.push(_.numLightProbes),M.push(_.shadowMapType),M.push(_.toneMapping),M.push(_.numClippingPlanes),M.push(_.numClipIntersection),M.push(_.depthPacking)}function T(M,_){a.disableAll(),_.supportsVertexTextures&&a.enable(0),_.instancing&&a.enable(1),_.instancingColor&&a.enable(2),_.instancingMorph&&a.enable(3),_.matcap&&a.enable(4),_.envMap&&a.enable(5),_.normalMapObjectSpace&&a.enable(6),_.normalMapTangentSpace&&a.enable(7),_.clearcoat&&a.enable(8),_.iridescence&&a.enable(9),_.alphaTest&&a.enable(10),_.vertexColors&&a.enable(11),_.vertexAlphas&&a.enable(12),_.vertexUv1s&&a.enable(13),_.vertexUv2s&&a.enable(14),_.vertexUv3s&&a.enable(15),_.vertexTangents&&a.enable(16),_.anisotropy&&a.enable(17),_.alphaHash&&a.enable(18),_.batching&&a.enable(19),_.dispersion&&a.enable(20),_.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),_.fog&&a.enable(0),_.useFog&&a.enable(1),_.flatShading&&a.enable(2),_.logarithmicDepthBuffer&&a.enable(3),_.reverseDepthBuffer&&a.enable(4),_.skinning&&a.enable(5),_.morphTargets&&a.enable(6),_.morphNormals&&a.enable(7),_.morphColors&&a.enable(8),_.premultipliedAlpha&&a.enable(9),_.shadowMapEnabled&&a.enable(10),_.doubleSided&&a.enable(11),_.flipSided&&a.enable(12),_.useDepthPacking&&a.enable(13),_.dithering&&a.enable(14),_.transmission&&a.enable(15),_.sheen&&a.enable(16),_.opaque&&a.enable(17),_.pointsUvs&&a.enable(18),_.decodeVideoTexture&&a.enable(19),_.decodeVideoTextureEmissive&&a.enable(20),_.alphaToCoverage&&a.enable(21),M.push(a.mask)}function S(M){let _=g[M.type],R;if(_){let V=fi[_];R=gf.clone(V.uniforms)}else R=M.uniforms;return R}function F(M,_){let R;for(let V=0,H=h.length;V<H;V++){let ee=h[V];if(ee.cacheKey===_){R=ee,++R.usedTimes;break}}return R===void 0&&(R=new oy(i,_,M,s),h.push(R)),R}function D(M){if(--M.usedTimes===0){let _=h.indexOf(M);h[_]=h[h.length-1],h.pop(),M.destroy()}}function P(M){l.remove(M)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:S,acquireProgram:F,releaseProgram:D,releaseShaderCache:P,programs:h,dispose:U}}function cy(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function hy(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Vf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Hf(){let i=[],e=0,t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(u,d,p,g,y,m){let f=i[e];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:y,group:m},i[e]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=y,f.group=m),e++,f}function a(u,d,p,g,y,m){let f=o(u,d,p,g,y,m);p.transmission>0?n.push(f):p.transparent===!0?r.push(f):t.push(f)}function l(u,d,p,g,y,m){let f=o(u,d,p,g,y,m);p.transmission>0?n.unshift(f):p.transparent===!0?r.unshift(f):t.unshift(f)}function c(u,d){t.length>1&&t.sort(u||hy),n.length>1&&n.sort(d||Vf),r.length>1&&r.sort(d||Vf)}function h(){for(let u=e,d=i.length;u<d;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:h,sort:c}}function uy(){let i=new WeakMap;function e(n,r){let s=i.get(n),o;return s===void 0?(o=new Hf,i.set(n,[o])):r>=s.length?(o=new Hf,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function dy(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new ct};break;case"SpotLight":t={position:new z,direction:new z,color:new ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new ct,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new ct,groundColor:new ct};break;case"RectAreaLight":t={color:new ct,position:new z,halfWidth:new z,halfHeight:new z};break}return i[e.id]=t,t}}}function fy(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var py=0;function my(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function gy(i){let e=new dy,t=fy(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new z);let r=new z,s=new Tt,o=new Tt;function a(c){let h=0,u=0,d=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let p=0,g=0,y=0,m=0,f=0,A=0,T=0,S=0,F=0,D=0,P=0;c.sort(my);for(let M=0,_=c.length;M<_;M++){let R=c[M],V=R.color,H=R.intensity,ee=R.distance,K=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=V.r*H,u+=V.g*H,d+=V.b*H;else if(R.isLightProbe){for(let J=0;J<9;J++)n.probe[J].addScaledVector(R.sh.coefficients[J],H);P++}else if(R.isDirectionalLight){let J=e.get(R);if(J.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let te=R.shadow,X=t.get(R);X.shadowIntensity=te.intensity,X.shadowBias=te.bias,X.shadowNormalBias=te.normalBias,X.shadowRadius=te.radius,X.shadowMapSize=te.mapSize,n.directionalShadow[p]=X,n.directionalShadowMap[p]=K,n.directionalShadowMatrix[p]=R.shadow.matrix,A++}n.directional[p]=J,p++}else if(R.isSpotLight){let J=e.get(R);J.position.setFromMatrixPosition(R.matrixWorld),J.color.copy(V).multiplyScalar(H),J.distance=ee,J.coneCos=Math.cos(R.angle),J.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),J.decay=R.decay,n.spot[y]=J;let te=R.shadow;if(R.map&&(n.spotLightMap[F]=R.map,F++,te.updateMatrices(R),R.castShadow&&D++),n.spotLightMatrix[y]=te.matrix,R.castShadow){let X=t.get(R);X.shadowIntensity=te.intensity,X.shadowBias=te.bias,X.shadowNormalBias=te.normalBias,X.shadowRadius=te.radius,X.shadowMapSize=te.mapSize,n.spotShadow[y]=X,n.spotShadowMap[y]=K,S++}y++}else if(R.isRectAreaLight){let J=e.get(R);J.color.copy(V).multiplyScalar(H),J.halfWidth.set(R.width*.5,0,0),J.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=J,m++}else if(R.isPointLight){let J=e.get(R);if(J.color.copy(R.color).multiplyScalar(R.intensity),J.distance=R.distance,J.decay=R.decay,R.castShadow){let te=R.shadow,X=t.get(R);X.shadowIntensity=te.intensity,X.shadowBias=te.bias,X.shadowNormalBias=te.normalBias,X.shadowRadius=te.radius,X.shadowMapSize=te.mapSize,X.shadowCameraNear=te.camera.near,X.shadowCameraFar=te.camera.far,n.pointShadow[g]=X,n.pointShadowMap[g]=K,n.pointShadowMatrix[g]=R.shadow.matrix,T++}n.point[g]=J,g++}else if(R.isHemisphereLight){let J=e.get(R);J.skyColor.copy(R.color).multiplyScalar(H),J.groundColor.copy(R.groundColor).multiplyScalar(H),n.hemi[f]=J,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xe.LTC_FLOAT_1,n.rectAreaLTC2=xe.LTC_FLOAT_2):(n.rectAreaLTC1=xe.LTC_HALF_1,n.rectAreaLTC2=xe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let U=n.hash;(U.directionalLength!==p||U.pointLength!==g||U.spotLength!==y||U.rectAreaLength!==m||U.hemiLength!==f||U.numDirectionalShadows!==A||U.numPointShadows!==T||U.numSpotShadows!==S||U.numSpotMaps!==F||U.numLightProbes!==P)&&(n.directional.length=p,n.spot.length=y,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=A,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=S+F-D,n.spotLightMap.length=F,n.numSpotLightShadowsWithMaps=D,n.numLightProbes=P,U.directionalLength=p,U.pointLength=g,U.spotLength=y,U.rectAreaLength=m,U.hemiLength=f,U.numDirectionalShadows=A,U.numPointShadows=T,U.numSpotShadows=S,U.numSpotMaps=F,U.numLightProbes=P,n.version=py++)}function l(c,h){let u=0,d=0,p=0,g=0,y=0,m=h.matrixWorldInverse;for(let f=0,A=c.length;f<A;f++){let T=c[f];if(T.isDirectionalLight){let S=n.directional[u];S.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),u++}else if(T.isSpotLight){let S=n.spot[p];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),p++}else if(T.isRectAreaLight){let S=n.rectArea[g];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(m),o.identity(),s.copy(T.matrixWorld),s.premultiply(m),o.extractRotation(s),S.halfWidth.set(T.width*.5,0,0),S.halfHeight.set(0,T.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(T.isPointLight){let S=n.point[d];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(m),d++}else if(T.isHemisphereLight){let S=n.hemi[y];S.direction.setFromMatrixPosition(T.matrixWorld),S.direction.transformDirection(m),y++}}}return{setup:a,setupView:l,state:n}}function Gf(i){let e=new gy(i),t=[],n=[];function r(h){c.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function _y(i){let e=new WeakMap;function t(r,s=0){let o=e.get(r),a;return o===void 0?(a=new Gf(i),e.set(r,[a])):s>=o.length?(a=new Gf(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var xy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vy=`uniform sampler2D shadow_pass;
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
}`;function yy(i,e,t){let n=new fs,r=new ge,s=new ge,o=new It,a=new al({depthPacking:tf}),l=new ll,c={},h=t.maxTextureSize,u={[wi]:Kt,[Kt]:wi,[fn]:fn},d=new jn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ge},radius:{value:4}},vertexShader:xy,fragmentShader:vy}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let g=new $n;g.setAttribute("position",new En(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Gt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vh;let f=this.type;this.render=function(D,P,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||D.length===0)return;let M=i.getRenderTarget(),_=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),V=i.state;V.setBlending(Ai),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);let H=f!==ui&&this.type===ui,ee=f===ui&&this.type!==ui;for(let K=0,J=D.length;K<J;K++){let te=D[K],X=te.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;r.copy(X.mapSize);let me=X.getFrameExtents();if(r.multiply(me),s.copy(X.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/me.x),r.x=s.x*me.x,X.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/me.y),r.y=s.y*me.y,X.mapSize.y=s.y)),X.map===null||H===!0||ee===!0){let be=this.type!==ui?{minFilter:Un,magFilter:Un}:{};X.map!==null&&X.map.dispose(),X.map=new hi(r.x,r.y,be),X.map.texture.name=te.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();let ve=X.getViewportCount();for(let be=0;be<ve;be++){let Be=X.getViewport(be);o.set(s.x*Be.x,s.y*Be.y,s.x*Be.z,s.y*Be.w),V.viewport(o),X.updateMatrices(te,be),n=X.getFrustum(),S(P,U,X.camera,te,this.type)}X.isPointLightShadow!==!0&&this.type===ui&&A(X,U),X.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(M,_,R)};function A(D,P){let U=e.update(y);d.defines.VSM_SAMPLES!==D.blurSamples&&(d.defines.VSM_SAMPLES=D.blurSamples,p.defines.VSM_SAMPLES=D.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new hi(r.x,r.y)),d.uniforms.shadow_pass.value=D.map.texture,d.uniforms.resolution.value=D.mapSize,d.uniforms.radius.value=D.radius,i.setRenderTarget(D.mapPass),i.clear(),i.renderBufferDirect(P,null,U,d,y,null),p.uniforms.shadow_pass.value=D.mapPass.texture,p.uniforms.resolution.value=D.mapSize,p.uniforms.radius.value=D.radius,i.setRenderTarget(D.map),i.clear(),i.renderBufferDirect(P,null,U,p,y,null)}function T(D,P,U,M){let _=null,R=U.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(R!==void 0)_=R;else if(_=U.isPointLight===!0?l:a,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){let V=_.uuid,H=P.uuid,ee=c[V];ee===void 0&&(ee={},c[V]=ee);let K=ee[H];K===void 0&&(K=_.clone(),ee[H]=K,P.addEventListener("dispose",F)),_=K}if(_.visible=P.visible,_.wireframe=P.wireframe,M===ui?_.side=P.shadowSide!==null?P.shadowSide:P.side:_.side=P.shadowSide!==null?P.shadowSide:u[P.side],_.alphaMap=P.alphaMap,_.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,_.map=P.map,_.clipShadows=P.clipShadows,_.clippingPlanes=P.clippingPlanes,_.clipIntersection=P.clipIntersection,_.displacementMap=P.displacementMap,_.displacementScale=P.displacementScale,_.displacementBias=P.displacementBias,_.wireframeLinewidth=P.wireframeLinewidth,_.linewidth=P.linewidth,U.isPointLight===!0&&_.isMeshDistanceMaterial===!0){let V=i.properties.get(_);V.light=U}return _}function S(D,P,U,M,_){if(D.visible===!1)return;if(D.layers.test(P.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&_===ui)&&(!D.frustumCulled||n.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,D.matrixWorld);let H=e.update(D),ee=D.material;if(Array.isArray(ee)){let K=H.groups;for(let J=0,te=K.length;J<te;J++){let X=K[J],me=ee[X.materialIndex];if(me&&me.visible){let ve=T(D,me,M,_);D.onBeforeShadow(i,D,P,U,H,ve,X),i.renderBufferDirect(U,null,H,ve,D,X),D.onAfterShadow(i,D,P,U,H,ve,X)}}}else if(ee.visible){let K=T(D,ee,M,_);D.onBeforeShadow(i,D,P,U,H,K,null),i.renderBufferDirect(U,null,H,K,D,null),D.onAfterShadow(i,D,P,U,H,K,null)}}let V=D.children;for(let H=0,ee=V.length;H<ee;H++)S(V[H],P,U,M,_)}function F(D){D.target.removeEventListener("dispose",F);for(let U in c){let M=c[U],_=D.target.uuid;_ in M&&(M[_].dispose(),delete M[_])}}}var by={[vl]:yl,[bl]:wl,[Sl]:El,[yr]:Ml,[yl]:vl,[wl]:bl,[El]:Sl,[Ml]:yr};function Sy(i,e){function t(){let N=!1,Me=new It,j=null,ie=new It(0,0,0,0);return{setMask:function(Ee){j!==Ee&&!N&&(i.colorMask(Ee,Ee,Ee,Ee),j=Ee)},setLocked:function(Ee){N=Ee},setClear:function(Ee,we,tt,Pt,Qt){Qt===!0&&(Ee*=Pt,we*=Pt,tt*=Pt),Me.set(Ee,we,tt,Pt),ie.equals(Me)===!1&&(i.clearColor(Ee,we,tt,Pt),ie.copy(Me))},reset:function(){N=!1,j=null,ie.set(-1,0,0,0)}}}function n(){let N=!1,Me=!1,j=null,ie=null,Ee=null;return{setReversed:function(we){if(Me!==we){let tt=e.get("EXT_clip_control");we?tt.clipControlEXT(tt.LOWER_LEFT_EXT,tt.ZERO_TO_ONE_EXT):tt.clipControlEXT(tt.LOWER_LEFT_EXT,tt.NEGATIVE_ONE_TO_ONE_EXT),Me=we;let Pt=Ee;Ee=null,this.setClear(Pt)}},getReversed:function(){return Me},setTest:function(we){we?de(i.DEPTH_TEST):Fe(i.DEPTH_TEST)},setMask:function(we){j!==we&&!N&&(i.depthMask(we),j=we)},setFunc:function(we){if(Me&&(we=by[we]),ie!==we){switch(we){case vl:i.depthFunc(i.NEVER);break;case yl:i.depthFunc(i.ALWAYS);break;case bl:i.depthFunc(i.LESS);break;case yr:i.depthFunc(i.LEQUAL);break;case Sl:i.depthFunc(i.EQUAL);break;case Ml:i.depthFunc(i.GEQUAL);break;case wl:i.depthFunc(i.GREATER);break;case El:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ie=we}},setLocked:function(we){N=we},setClear:function(we){Ee!==we&&(Me&&(we=1-we),i.clearDepth(we),Ee=we)},reset:function(){N=!1,j=null,ie=null,Ee=null,Me=!1}}}function r(){let N=!1,Me=null,j=null,ie=null,Ee=null,we=null,tt=null,Pt=null,Qt=null;return{setTest:function(xt){N||(xt?de(i.STENCIL_TEST):Fe(i.STENCIL_TEST))},setMask:function(xt){Me!==xt&&!N&&(i.stencilMask(xt),Me=xt)},setFunc:function(xt,Bn,pi){(j!==xt||ie!==Bn||Ee!==pi)&&(i.stencilFunc(xt,Bn,pi),j=xt,ie=Bn,Ee=pi)},setOp:function(xt,Bn,pi){(we!==xt||tt!==Bn||Pt!==pi)&&(i.stencilOp(xt,Bn,pi),we=xt,tt=Bn,Pt=pi)},setLocked:function(xt){N=xt},setClear:function(xt){Qt!==xt&&(i.clearStencil(xt),Qt=xt)},reset:function(){N=!1,Me=null,j=null,ie=null,Ee=null,we=null,tt=null,Pt=null,Qt=null}}}let s=new t,o=new n,a=new r,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,p=[],g=null,y=!1,m=null,f=null,A=null,T=null,S=null,F=null,D=null,P=new ct(0,0,0),U=0,M=!1,_=null,R=null,V=null,H=null,ee=null,K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),J=!1,te=0,X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(X)[1]),J=te>=1):X.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),J=te>=2);let me=null,ve={},be=i.getParameter(i.SCISSOR_BOX),Be=i.getParameter(i.VIEWPORT),$e=new It().fromArray(be),Y=new It().fromArray(Be);function se(N,Me,j,ie){let Ee=new Uint8Array(4),we=i.createTexture();i.bindTexture(N,we),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let tt=0;tt<j;tt++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(Me,0,i.RGBA,1,1,ie,0,i.RGBA,i.UNSIGNED_BYTE,Ee):i.texImage2D(Me+tt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ee);return we}let fe={};fe[i.TEXTURE_2D]=se(i.TEXTURE_2D,i.TEXTURE_2D,1),fe[i.TEXTURE_CUBE_MAP]=se(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),fe[i.TEXTURE_2D_ARRAY]=se(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),fe[i.TEXTURE_3D]=se(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),de(i.DEPTH_TEST),o.setFunc(yr),oe(!1),ue(xh),de(i.CULL_FACE),E(Ai);function de(N){h[N]!==!0&&(i.enable(N),h[N]=!0)}function Fe(N){h[N]!==!1&&(i.disable(N),h[N]=!1)}function We(N,Me){return u[N]!==Me?(i.bindFramebuffer(N,Me),u[N]=Me,N===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Me),N===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Me),!0):!1}function Ne(N,Me){let j=p,ie=!1;if(N){j=d.get(Me),j===void 0&&(j=[],d.set(Me,j));let Ee=N.textures;if(j.length!==Ee.length||j[0]!==i.COLOR_ATTACHMENT0){for(let we=0,tt=Ee.length;we<tt;we++)j[we]=i.COLOR_ATTACHMENT0+we;j.length=Ee.length,ie=!0}}else j[0]!==i.BACK&&(j[0]=i.BACK,ie=!0);ie&&i.drawBuffers(j)}function Ye(N){return g!==N?(i.useProgram(N),g=N,!0):!1}let Le={[ji]:i.FUNC_ADD,[Td]:i.FUNC_SUBTRACT,[Ad]:i.FUNC_REVERSE_SUBTRACT};Le[Rd]=i.MIN,Le[Id]=i.MAX;let Oe={[Pd]:i.ZERO,[Dd]:i.ONE,[Ld]:i.SRC_COLOR,[Xa]:i.SRC_ALPHA,[Bd]:i.SRC_ALPHA_SATURATE,[Od]:i.DST_COLOR,[Nd]:i.DST_ALPHA,[Fd]:i.ONE_MINUS_SRC_COLOR,[qa]:i.ONE_MINUS_SRC_ALPHA,[kd]:i.ONE_MINUS_DST_COLOR,[Ud]:i.ONE_MINUS_DST_ALPHA,[zd]:i.CONSTANT_COLOR,[Vd]:i.ONE_MINUS_CONSTANT_COLOR,[Hd]:i.CONSTANT_ALPHA,[Gd]:i.ONE_MINUS_CONSTANT_ALPHA};function E(N,Me,j,ie,Ee,we,tt,Pt,Qt,xt){if(N===Ai){y===!0&&(Fe(i.BLEND),y=!1);return}if(y===!1&&(de(i.BLEND),y=!0),N!==Cd){if(N!==m||xt!==M){if((f!==ji||S!==ji)&&(i.blendEquation(i.FUNC_ADD),f=ji,S=ji),xt)switch(N){case vr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case yo:i.blendFunc(i.ONE,i.ONE);break;case yh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case bh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case vr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case yo:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case yh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case bh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}A=null,T=null,F=null,D=null,P.set(0,0,0),U=0,m=N,M=xt}return}Ee=Ee||Me,we=we||j,tt=tt||ie,(Me!==f||Ee!==S)&&(i.blendEquationSeparate(Le[Me],Le[Ee]),f=Me,S=Ee),(j!==A||ie!==T||we!==F||tt!==D)&&(i.blendFuncSeparate(Oe[j],Oe[ie],Oe[we],Oe[tt]),A=j,T=ie,F=we,D=tt),(Pt.equals(P)===!1||Qt!==U)&&(i.blendColor(Pt.r,Pt.g,Pt.b,Qt),P.copy(Pt),U=Qt),m=N,M=!1}function pe(N,Me){N.side===fn?Fe(i.CULL_FACE):de(i.CULL_FACE);let j=N.side===Kt;Me&&(j=!j),oe(j),N.blending===vr&&N.transparent===!1?E(Ai):E(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),s.setMask(N.colorWrite);let ie=N.stencilWrite;a.setTest(ie),ie&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),ke(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?de(i.SAMPLE_ALPHA_TO_COVERAGE):Fe(i.SAMPLE_ALPHA_TO_COVERAGE)}function oe(N){_!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),_=N)}function ue(N){N!==Md?(de(i.CULL_FACE),N!==R&&(N===xh?i.cullFace(i.BACK):N===wd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Fe(i.CULL_FACE),R=N}function ne(N){N!==V&&(J&&i.lineWidth(N),V=N)}function ke(N,Me,j){N?(de(i.POLYGON_OFFSET_FILL),(H!==Me||ee!==j)&&(i.polygonOffset(Me,j),H=Me,ee=j)):Fe(i.POLYGON_OFFSET_FILL)}function ae(N){N?de(i.SCISSOR_TEST):Fe(i.SCISSOR_TEST)}function C(N){N===void 0&&(N=i.TEXTURE0+K-1),me!==N&&(i.activeTexture(N),me=N)}function x(N,Me,j){j===void 0&&(me===null?j=i.TEXTURE0+K-1:j=me);let ie=ve[j];ie===void 0&&(ie={type:void 0,texture:void 0},ve[j]=ie),(ie.type!==N||ie.texture!==Me)&&(me!==j&&(i.activeTexture(j),me=j),i.bindTexture(N,Me||fe[N]),ie.type=N,ie.texture=Me)}function B(){let N=ve[me];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Z(){try{i.compressedTexImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function re(){try{i.compressedTexImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function q(){try{i.texSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ue(){try{i.texSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ye(){try{i.compressedTexSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ve(){try{i.compressedTexSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function qe(){try{i.texStorage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function le(){try{i.texStorage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ce(){try{i.texImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Xe(){try{i.texImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ze(N){$e.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),$e.copy(N))}function Ie(N){Y.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),Y.copy(N))}function ut(N,Me){let j=c.get(Me);j===void 0&&(j=new WeakMap,c.set(Me,j));let ie=j.get(N);ie===void 0&&(ie=i.getUniformBlockIndex(Me,N.name),j.set(N,ie))}function it(N,Me){let ie=c.get(Me).get(N);l.get(Me)!==ie&&(i.uniformBlockBinding(Me,ie,N.__bindingPointIndex),l.set(Me,ie))}function Mt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},me=null,ve={},u={},d=new WeakMap,p=[],g=null,y=!1,m=null,f=null,A=null,T=null,S=null,F=null,D=null,P=new ct(0,0,0),U=0,M=!1,_=null,R=null,V=null,H=null,ee=null,$e.set(0,0,i.canvas.width,i.canvas.height),Y.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:de,disable:Fe,bindFramebuffer:We,drawBuffers:Ne,useProgram:Ye,setBlending:E,setMaterial:pe,setFlipSided:oe,setCullFace:ue,setLineWidth:ne,setPolygonOffset:ke,setScissorTest:ae,activeTexture:C,bindTexture:x,unbindTexture:B,compressedTexImage2D:Z,compressedTexImage3D:re,texImage2D:Ce,texImage3D:Xe,updateUBOMapping:ut,uniformBlockBinding:it,texStorage2D:qe,texStorage3D:le,texSubImage2D:q,texSubImage3D:Ue,compressedTexSubImage2D:ye,compressedTexSubImage3D:Ve,scissor:Ze,viewport:Ie,reset:Mt}}function My(i,e,t,n,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ge,h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,x){return p?new OffscreenCanvas(C,x):Zs("canvas")}function y(C,x,B){let Z=1,re=ae(C);if((re.width>B||re.height>B)&&(Z=B/Math.max(re.width,re.height)),Z<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let q=Math.floor(Z*re.width),Ue=Math.floor(Z*re.height);u===void 0&&(u=g(q,Ue));let ye=x?g(q,Ue):u;return ye.width=q,ye.height=Ue,ye.getContext("2d").drawImage(C,0,0,q,Ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+q+"x"+Ue+")."),ye}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),C;return C}function m(C){return C.generateMipmaps}function f(C){i.generateMipmap(C)}function A(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(C,x,B,Z,re=!1){if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let q=x;if(x===i.RED&&(B===i.FLOAT&&(q=i.R32F),B===i.HALF_FLOAT&&(q=i.R16F),B===i.UNSIGNED_BYTE&&(q=i.R8)),x===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(q=i.R8UI),B===i.UNSIGNED_SHORT&&(q=i.R16UI),B===i.UNSIGNED_INT&&(q=i.R32UI),B===i.BYTE&&(q=i.R8I),B===i.SHORT&&(q=i.R16I),B===i.INT&&(q=i.R32I)),x===i.RG&&(B===i.FLOAT&&(q=i.RG32F),B===i.HALF_FLOAT&&(q=i.RG16F),B===i.UNSIGNED_BYTE&&(q=i.RG8)),x===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(q=i.RG8UI),B===i.UNSIGNED_SHORT&&(q=i.RG16UI),B===i.UNSIGNED_INT&&(q=i.RG32UI),B===i.BYTE&&(q=i.RG8I),B===i.SHORT&&(q=i.RG16I),B===i.INT&&(q=i.RG32I)),x===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(q=i.RGB8UI),B===i.UNSIGNED_SHORT&&(q=i.RGB16UI),B===i.UNSIGNED_INT&&(q=i.RGB32UI),B===i.BYTE&&(q=i.RGB8I),B===i.SHORT&&(q=i.RGB16I),B===i.INT&&(q=i.RGB32I)),x===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(q=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(q=i.RGBA16UI),B===i.UNSIGNED_INT&&(q=i.RGBA32UI),B===i.BYTE&&(q=i.RGBA8I),B===i.SHORT&&(q=i.RGBA16I),B===i.INT&&(q=i.RGBA32I)),x===i.RGB&&B===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),x===i.RGBA){let Ue=re?Ys:pt.getTransfer(Z);B===i.FLOAT&&(q=i.RGBA32F),B===i.HALF_FLOAT&&(q=i.RGBA16F),B===i.UNSIGNED_BYTE&&(q=Ue===yt?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function S(C,x){let B;return C?x===null||x===ir||x===Ss?B=i.DEPTH24_STENCIL8:x===di?B=i.DEPTH32F_STENCIL8:x===ys&&(B=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===ir||x===Ss?B=i.DEPTH_COMPONENT24:x===di?B=i.DEPTH_COMPONENT32F:x===ys&&(B=i.DEPTH_COMPONENT16),B}function F(C,x){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Un&&C.minFilter!==Yn?Math.log2(Math.max(x.width,x.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?x.mipmaps.length:1}function D(C){let x=C.target;x.removeEventListener("dispose",D),U(x),x.isVideoTexture&&h.delete(x)}function P(C){let x=C.target;x.removeEventListener("dispose",P),_(x)}function U(C){let x=n.get(C);if(x.__webglInit===void 0)return;let B=C.source,Z=d.get(B);if(Z){let re=Z[x.__cacheKey];re.usedTimes--,re.usedTimes===0&&M(C),Object.keys(Z).length===0&&d.delete(B)}n.remove(C)}function M(C){let x=n.get(C);i.deleteTexture(x.__webglTexture);let B=C.source,Z=d.get(B);delete Z[x.__cacheKey],o.memory.textures--}function _(C){let x=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(x.__webglFramebuffer[Z]))for(let re=0;re<x.__webglFramebuffer[Z].length;re++)i.deleteFramebuffer(x.__webglFramebuffer[Z][re]);else i.deleteFramebuffer(x.__webglFramebuffer[Z]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[Z])}else{if(Array.isArray(x.__webglFramebuffer))for(let Z=0;Z<x.__webglFramebuffer.length;Z++)i.deleteFramebuffer(x.__webglFramebuffer[Z]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Z=0;Z<x.__webglColorRenderbuffer.length;Z++)x.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[Z]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let B=C.textures;for(let Z=0,re=B.length;Z<re;Z++){let q=n.get(B[Z]);q.__webglTexture&&(i.deleteTexture(q.__webglTexture),o.memory.textures--),n.remove(B[Z])}n.remove(C)}let R=0;function V(){R=0}function H(){let C=R;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),R+=1,C}function ee(C){let x=[];return x.push(C.wrapS),x.push(C.wrapT),x.push(C.wrapR||0),x.push(C.magFilter),x.push(C.minFilter),x.push(C.anisotropy),x.push(C.internalFormat),x.push(C.format),x.push(C.type),x.push(C.generateMipmaps),x.push(C.premultiplyAlpha),x.push(C.flipY),x.push(C.unpackAlignment),x.push(C.colorSpace),x.join()}function K(C,x){let B=n.get(C);if(C.isVideoTexture&&ne(C),C.isRenderTargetTexture===!1&&C.version>0&&B.__version!==C.version){let Z=C.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(B,C,x);return}}t.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+x)}function J(C,x){let B=n.get(C);if(C.version>0&&B.__version!==C.version){Y(B,C,x);return}t.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+x)}function te(C,x){let B=n.get(C);if(C.version>0&&B.__version!==C.version){Y(B,C,x);return}t.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+x)}function X(C,x){let B=n.get(C);if(C.version>0&&B.__version!==C.version){se(B,C,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+x)}let me={[Ya]:i.REPEAT,[$i]:i.CLAMP_TO_EDGE,[$a]:i.MIRRORED_REPEAT},ve={[Un]:i.NEAREST,[Qd]:i.NEAREST_MIPMAP_NEAREST,[So]:i.NEAREST_MIPMAP_LINEAR,[Yn]:i.LINEAR,[Al]:i.LINEAR_MIPMAP_NEAREST,[nr]:i.LINEAR_MIPMAP_LINEAR},be={[rf]:i.NEVER,[hf]:i.ALWAYS,[sf]:i.LESS,[Dh]:i.LEQUAL,[of]:i.EQUAL,[cf]:i.GEQUAL,[af]:i.GREATER,[lf]:i.NOTEQUAL};function Be(C,x){if(x.type===di&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Yn||x.magFilter===Al||x.magFilter===So||x.magFilter===nr||x.minFilter===Yn||x.minFilter===Al||x.minFilter===So||x.minFilter===nr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,me[x.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,me[x.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,me[x.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,ve[x.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,ve[x.minFilter]),x.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,be[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Un||x.minFilter!==So&&x.minFilter!==nr||x.type===di&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let B=e.get("EXT_texture_filter_anisotropic");i.texParameterf(C,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function $e(C,x){let B=!1;C.__webglInit===void 0&&(C.__webglInit=!0,x.addEventListener("dispose",D));let Z=x.source,re=d.get(Z);re===void 0&&(re={},d.set(Z,re));let q=ee(x);if(q!==C.__cacheKey){re[q]===void 0&&(re[q]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,B=!0),re[q].usedTimes++;let Ue=re[C.__cacheKey];Ue!==void 0&&(re[C.__cacheKey].usedTimes--,Ue.usedTimes===0&&M(x)),C.__cacheKey=q,C.__webglTexture=re[q].texture}return B}function Y(C,x,B){let Z=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Z=i.TEXTURE_3D);let re=$e(C,x),q=x.source;t.bindTexture(Z,C.__webglTexture,i.TEXTURE0+B);let Ue=n.get(q);if(q.version!==Ue.__version||re===!0){t.activeTexture(i.TEXTURE0+B);let ye=pt.getPrimaries(pt.workingColorSpace),Ve=x.colorSpace===Ii?null:pt.getPrimaries(x.colorSpace),qe=x.colorSpace===Ii||ye===Ve?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe);let le=y(x.image,!1,r.maxTextureSize);le=ke(x,le);let Ce=s.convert(x.format,x.colorSpace),Xe=s.convert(x.type),Ze=T(x.internalFormat,Ce,Xe,x.colorSpace,x.isVideoTexture);Be(Z,x);let Ie,ut=x.mipmaps,it=x.isVideoTexture!==!0,Mt=Ue.__version===void 0||re===!0,N=q.dataReady,Me=F(x,le);if(x.isDepthTexture)Ze=S(x.format===Ms,x.type),Mt&&(it?t.texStorage2D(i.TEXTURE_2D,1,Ze,le.width,le.height):t.texImage2D(i.TEXTURE_2D,0,Ze,le.width,le.height,0,Ce,Xe,null));else if(x.isDataTexture)if(ut.length>0){it&&Mt&&t.texStorage2D(i.TEXTURE_2D,Me,Ze,ut[0].width,ut[0].height);for(let j=0,ie=ut.length;j<ie;j++)Ie=ut[j],it?N&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,Ie.width,Ie.height,Ce,Xe,Ie.data):t.texImage2D(i.TEXTURE_2D,j,Ze,Ie.width,Ie.height,0,Ce,Xe,Ie.data);x.generateMipmaps=!1}else it?(Mt&&t.texStorage2D(i.TEXTURE_2D,Me,Ze,le.width,le.height),N&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,le.width,le.height,Ce,Xe,le.data)):t.texImage2D(i.TEXTURE_2D,0,Ze,le.width,le.height,0,Ce,Xe,le.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){it&&Mt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Me,Ze,ut[0].width,ut[0].height,le.depth);for(let j=0,ie=ut.length;j<ie;j++)if(Ie=ut[j],x.format!==kn)if(Ce!==null)if(it){if(N)if(x.layerUpdates.size>0){let Ee=Bh(Ie.width,Ie.height,x.format,x.type);for(let we of x.layerUpdates){let tt=Ie.data.subarray(we*Ee/Ie.data.BYTES_PER_ELEMENT,(we+1)*Ee/Ie.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,we,Ie.width,Ie.height,1,Ce,tt)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,Ie.width,Ie.height,le.depth,Ce,Ie.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,j,Ze,Ie.width,Ie.height,le.depth,0,Ie.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else it?N&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,Ie.width,Ie.height,le.depth,Ce,Xe,Ie.data):t.texImage3D(i.TEXTURE_2D_ARRAY,j,Ze,Ie.width,Ie.height,le.depth,0,Ce,Xe,Ie.data)}else{it&&Mt&&t.texStorage2D(i.TEXTURE_2D,Me,Ze,ut[0].width,ut[0].height);for(let j=0,ie=ut.length;j<ie;j++)Ie=ut[j],x.format!==kn?Ce!==null?it?N&&t.compressedTexSubImage2D(i.TEXTURE_2D,j,0,0,Ie.width,Ie.height,Ce,Ie.data):t.compressedTexImage2D(i.TEXTURE_2D,j,Ze,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?N&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,Ie.width,Ie.height,Ce,Xe,Ie.data):t.texImage2D(i.TEXTURE_2D,j,Ze,Ie.width,Ie.height,0,Ce,Xe,Ie.data)}else if(x.isDataArrayTexture)if(it){if(Mt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Me,Ze,le.width,le.height,le.depth),N)if(x.layerUpdates.size>0){let j=Bh(le.width,le.height,x.format,x.type);for(let ie of x.layerUpdates){let Ee=le.data.subarray(ie*j/le.data.BYTES_PER_ELEMENT,(ie+1)*j/le.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ie,le.width,le.height,1,Ce,Xe,Ee)}x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,Ce,Xe,le.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ze,le.width,le.height,le.depth,0,Ce,Xe,le.data);else if(x.isData3DTexture)it?(Mt&&t.texStorage3D(i.TEXTURE_3D,Me,Ze,le.width,le.height,le.depth),N&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,Ce,Xe,le.data)):t.texImage3D(i.TEXTURE_3D,0,Ze,le.width,le.height,le.depth,0,Ce,Xe,le.data);else if(x.isFramebufferTexture){if(Mt)if(it)t.texStorage2D(i.TEXTURE_2D,Me,Ze,le.width,le.height);else{let j=le.width,ie=le.height;for(let Ee=0;Ee<Me;Ee++)t.texImage2D(i.TEXTURE_2D,Ee,Ze,j,ie,0,Ce,Xe,null),j>>=1,ie>>=1}}else if(ut.length>0){if(it&&Mt){let j=ae(ut[0]);t.texStorage2D(i.TEXTURE_2D,Me,Ze,j.width,j.height)}for(let j=0,ie=ut.length;j<ie;j++)Ie=ut[j],it?N&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,Ce,Xe,Ie):t.texImage2D(i.TEXTURE_2D,j,Ze,Ce,Xe,Ie);x.generateMipmaps=!1}else if(it){if(Mt){let j=ae(le);t.texStorage2D(i.TEXTURE_2D,Me,Ze,j.width,j.height)}N&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ce,Xe,le)}else t.texImage2D(i.TEXTURE_2D,0,Ze,Ce,Xe,le);m(x)&&f(Z),Ue.__version=q.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function se(C,x,B){if(x.image.length!==6)return;let Z=$e(C,x),re=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+B);let q=n.get(re);if(re.version!==q.__version||Z===!0){t.activeTexture(i.TEXTURE0+B);let Ue=pt.getPrimaries(pt.workingColorSpace),ye=x.colorSpace===Ii?null:pt.getPrimaries(x.colorSpace),Ve=x.colorSpace===Ii||Ue===ye?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);let qe=x.isCompressedTexture||x.image[0].isCompressedTexture,le=x.image[0]&&x.image[0].isDataTexture,Ce=[];for(let ie=0;ie<6;ie++)!qe&&!le?Ce[ie]=y(x.image[ie],!0,r.maxCubemapSize):Ce[ie]=le?x.image[ie].image:x.image[ie],Ce[ie]=ke(x,Ce[ie]);let Xe=Ce[0],Ze=s.convert(x.format,x.colorSpace),Ie=s.convert(x.type),ut=T(x.internalFormat,Ze,Ie,x.colorSpace),it=x.isVideoTexture!==!0,Mt=q.__version===void 0||Z===!0,N=re.dataReady,Me=F(x,Xe);Be(i.TEXTURE_CUBE_MAP,x);let j;if(qe){it&&Mt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Me,ut,Xe.width,Xe.height);for(let ie=0;ie<6;ie++){j=Ce[ie].mipmaps;for(let Ee=0;Ee<j.length;Ee++){let we=j[Ee];x.format!==kn?Ze!==null?it?N&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ee,0,0,we.width,we.height,Ze,we.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ee,ut,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):it?N&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ee,0,0,we.width,we.height,Ze,Ie,we.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ee,ut,we.width,we.height,0,Ze,Ie,we.data)}}}else{if(j=x.mipmaps,it&&Mt){j.length>0&&Me++;let ie=ae(Ce[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Me,ut,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(le){it?N&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Ce[ie].width,Ce[ie].height,Ze,Ie,Ce[ie].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,ut,Ce[ie].width,Ce[ie].height,0,Ze,Ie,Ce[ie].data);for(let Ee=0;Ee<j.length;Ee++){let tt=j[Ee].image[ie].image;it?N&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ee+1,0,0,tt.width,tt.height,Ze,Ie,tt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ee+1,ut,tt.width,tt.height,0,Ze,Ie,tt.data)}}else{it?N&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Ze,Ie,Ce[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,ut,Ze,Ie,Ce[ie]);for(let Ee=0;Ee<j.length;Ee++){let we=j[Ee];it?N&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ee+1,0,0,Ze,Ie,we.image[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ee+1,ut,Ze,Ie,we.image[ie])}}}m(x)&&f(i.TEXTURE_CUBE_MAP),q.__version=re.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function fe(C,x,B,Z,re,q){let Ue=s.convert(B.format,B.colorSpace),ye=s.convert(B.type),Ve=T(B.internalFormat,Ue,ye,B.colorSpace),qe=n.get(x),le=n.get(B);if(le.__renderTarget=x,!qe.__hasExternalTextures){let Ce=Math.max(1,x.width>>q),Xe=Math.max(1,x.height>>q);re===i.TEXTURE_3D||re===i.TEXTURE_2D_ARRAY?t.texImage3D(re,q,Ve,Ce,Xe,x.depth,0,Ue,ye,null):t.texImage2D(re,q,Ve,Ce,Xe,0,Ue,ye,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),ue(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,re,le.__webglTexture,0,oe(x)):(re===i.TEXTURE_2D||re>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,re,le.__webglTexture,q),t.bindFramebuffer(i.FRAMEBUFFER,null)}function de(C,x,B){if(i.bindRenderbuffer(i.RENDERBUFFER,C),x.depthBuffer){let Z=x.depthTexture,re=Z&&Z.isDepthTexture?Z.type:null,q=S(x.stencilBuffer,re),Ue=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ye=oe(x);ue(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ye,q,x.width,x.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,ye,q,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,q,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ue,i.RENDERBUFFER,C)}else{let Z=x.textures;for(let re=0;re<Z.length;re++){let q=Z[re],Ue=s.convert(q.format,q.colorSpace),ye=s.convert(q.type),Ve=T(q.internalFormat,Ue,ye,q.colorSpace),qe=oe(x);B&&ue(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,qe,Ve,x.width,x.height):ue(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,qe,Ve,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,Ve,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Fe(C,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Z=n.get(x.depthTexture);Z.__renderTarget=x,(!Z.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),K(x.depthTexture,0);let re=Z.__webglTexture,q=oe(x);if(x.depthTexture.format===os)ue(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,re,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,re,0);else if(x.depthTexture.format===Ms)ue(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,re,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function We(C){let x=n.get(C),B=C.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==C.depthTexture){let Z=C.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),Z){let re=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,Z.removeEventListener("dispose",re)};Z.addEventListener("dispose",re),x.__depthDisposeCallback=re}x.__boundDepthTexture=Z}if(C.depthTexture&&!x.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");let Z=C.texture.mipmaps;Z&&Z.length>0?Fe(x.__webglFramebuffer[0],C):Fe(x.__webglFramebuffer,C)}else if(B){x.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[Z]),x.__webglDepthbuffer[Z]===void 0)x.__webglDepthbuffer[Z]=i.createRenderbuffer(),de(x.__webglDepthbuffer[Z],C,!1);else{let re=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=x.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,q)}}else{let Z=C.texture.mipmaps;if(Z&&Z.length>0?t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),de(x.__webglDepthbuffer,C,!1);else{let re=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,q)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ne(C,x,B){let Z=n.get(C);x!==void 0&&fe(Z.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&We(C)}function Ye(C){let x=C.texture,B=n.get(C),Z=n.get(x);C.addEventListener("dispose",P);let re=C.textures,q=C.isWebGLCubeRenderTarget===!0,Ue=re.length>1;if(Ue||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=x.version,o.memory.textures++),q){B.__webglFramebuffer=[];for(let ye=0;ye<6;ye++)if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer[ye]=[];for(let Ve=0;Ve<x.mipmaps.length;Ve++)B.__webglFramebuffer[ye][Ve]=i.createFramebuffer()}else B.__webglFramebuffer[ye]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer=[];for(let ye=0;ye<x.mipmaps.length;ye++)B.__webglFramebuffer[ye]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(Ue)for(let ye=0,Ve=re.length;ye<Ve;ye++){let qe=n.get(re[ye]);qe.__webglTexture===void 0&&(qe.__webglTexture=i.createTexture(),o.memory.textures++)}if(C.samples>0&&ue(C)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ye=0;ye<re.length;ye++){let Ve=re[ye];B.__webglColorRenderbuffer[ye]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[ye]);let qe=s.convert(Ve.format,Ve.colorSpace),le=s.convert(Ve.type),Ce=T(Ve.internalFormat,qe,le,Ve.colorSpace,C.isXRRenderTarget===!0),Xe=oe(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,Xe,Ce,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,B.__webglColorRenderbuffer[ye])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),de(B.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(q){t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),Be(i.TEXTURE_CUBE_MAP,x);for(let ye=0;ye<6;ye++)if(x.mipmaps&&x.mipmaps.length>0)for(let Ve=0;Ve<x.mipmaps.length;Ve++)fe(B.__webglFramebuffer[ye][Ve],C,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ve);else fe(B.__webglFramebuffer[ye],C,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0);m(x)&&f(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ue){for(let ye=0,Ve=re.length;ye<Ve;ye++){let qe=re[ye],le=n.get(qe);t.bindTexture(i.TEXTURE_2D,le.__webglTexture),Be(i.TEXTURE_2D,qe),fe(B.__webglFramebuffer,C,qe,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,0),m(qe)&&f(i.TEXTURE_2D)}t.unbindTexture()}else{let ye=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ye=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ye,Z.__webglTexture),Be(ye,x),x.mipmaps&&x.mipmaps.length>0)for(let Ve=0;Ve<x.mipmaps.length;Ve++)fe(B.__webglFramebuffer[Ve],C,x,i.COLOR_ATTACHMENT0,ye,Ve);else fe(B.__webglFramebuffer,C,x,i.COLOR_ATTACHMENT0,ye,0);m(x)&&f(ye),t.unbindTexture()}C.depthBuffer&&We(C)}function Le(C){let x=C.textures;for(let B=0,Z=x.length;B<Z;B++){let re=x[B];if(m(re)){let q=A(C),Ue=n.get(re).__webglTexture;t.bindTexture(q,Ue),f(q),t.unbindTexture()}}}let Oe=[],E=[];function pe(C){if(C.samples>0){if(ue(C)===!1){let x=C.textures,B=C.width,Z=C.height,re=i.COLOR_BUFFER_BIT,q=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ue=n.get(C),ye=x.length>1;if(ye)for(let qe=0;qe<x.length;qe++)t.bindFramebuffer(i.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+qe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+qe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer);let Ve=C.texture.mipmaps;Ve&&Ve.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer);for(let qe=0;qe<x.length;qe++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(re|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(re|=i.STENCIL_BUFFER_BIT)),ye){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ue.__webglColorRenderbuffer[qe]);let le=n.get(x[qe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,le,0)}i.blitFramebuffer(0,0,B,Z,0,0,B,Z,re,i.NEAREST),l===!0&&(Oe.length=0,E.length=0,Oe.push(i.COLOR_ATTACHMENT0+qe),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Oe.push(q),E.push(q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,E)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Oe))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ye)for(let qe=0;qe<x.length;qe++){t.bindFramebuffer(i.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+qe,i.RENDERBUFFER,Ue.__webglColorRenderbuffer[qe]);let le=n.get(x[qe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+qe,i.TEXTURE_2D,le,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){let x=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function oe(C){return Math.min(r.maxSamples,C.samples)}function ue(C){let x=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function ne(C){let x=o.render.frame;h.get(C)!==x&&(h.set(C,x),C.update())}function ke(C,x){let B=C.colorSpace,Z=C.format,re=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||B!==br&&B!==Ii&&(pt.getTransfer(B)===yt?(Z!==kn||re!==Zn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),x}function ae(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=V,this.setTexture2D=K,this.setTexture2DArray=J,this.setTexture3D=te,this.setTextureCube=X,this.rebindTextures=Ne,this.setupRenderTarget=Ye,this.updateRenderTargetMipmap=Le,this.updateMultisampleRenderTarget=pe,this.setupDepthRenderbuffer=We,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=ue}function wy(i,e){function t(n,r=Ii){let s,o=pt.getTransfer(r);if(n===Zn)return i.UNSIGNED_BYTE;if(n===Il)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Pl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Eh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Mh)return i.BYTE;if(n===wh)return i.SHORT;if(n===ys)return i.UNSIGNED_SHORT;if(n===Rl)return i.INT;if(n===ir)return i.UNSIGNED_INT;if(n===di)return i.FLOAT;if(n===bs)return i.HALF_FLOAT;if(n===Ch)return i.ALPHA;if(n===Th)return i.RGB;if(n===kn)return i.RGBA;if(n===os)return i.DEPTH_COMPONENT;if(n===Ms)return i.DEPTH_STENCIL;if(n===Ah)return i.RED;if(n===Dl)return i.RED_INTEGER;if(n===Rh)return i.RG;if(n===Ll)return i.RG_INTEGER;if(n===Fl)return i.RGBA_INTEGER;if(n===Mo||n===wo||n===Eo||n===Co)if(o===yt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Mo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===wo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Eo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Co)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Mo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===wo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Eo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Co)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Nl||n===Ul||n===Ol||n===kl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Nl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ul)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ol)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===kl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Bl||n===zl||n===Vl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Bl||n===zl)return o===yt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Vl)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Hl||n===Gl||n===Wl||n===Xl||n===ql||n===Yl||n===$l||n===jl||n===Zl||n===Jl||n===Kl||n===Ql||n===ec||n===tc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Hl)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Gl)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Wl)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Xl)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ql)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Yl)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===$l)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===jl)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Zl)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Jl)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Kl)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ql)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ec)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===tc)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===To||n===nc||n===ic)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===To)return o===yt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===nc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ic)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ih||n===rc||n===sc||n===oc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===To)return s.COMPRESSED_RED_RGTC1_EXT;if(n===rc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===sc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===oc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ss?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Ey=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Cy=`
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

}`,Kh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let r=new rr,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new jn({vertexShader:Ey,fragmentShader:Cy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Gt(new po(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Qh=class extends Ei{constructor(e,t){super();let n=this,r=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,g=null,y=new Kh,m=t.getContextAttributes(),f=null,A=null,T=[],S=[],F=new ge,D=null,P=new jt;P.viewport=new It;let U=new jt;U.viewport=new It;let M=[P,U],_=new _l,R=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let se=T[Y];return se===void 0&&(se=new us,T[Y]=se),se.getTargetRaySpace()},this.getControllerGrip=function(Y){let se=T[Y];return se===void 0&&(se=new us,T[Y]=se),se.getGripSpace()},this.getHand=function(Y){let se=T[Y];return se===void 0&&(se=new us,T[Y]=se),se.getHandSpace()};function H(Y){let se=S.indexOf(Y.inputSource);if(se===-1)return;let fe=T[se];fe!==void 0&&(fe.update(Y.inputSource,Y.frame,c||o),fe.dispatchEvent({type:Y.type,data:Y.inputSource}))}function ee(){r.removeEventListener("select",H),r.removeEventListener("selectstart",H),r.removeEventListener("selectend",H),r.removeEventListener("squeeze",H),r.removeEventListener("squeezestart",H),r.removeEventListener("squeezeend",H),r.removeEventListener("end",ee),r.removeEventListener("inputsourceschange",K);for(let Y=0;Y<T.length;Y++){let se=S[Y];se!==null&&(S[Y]=null,T[Y].disconnect(se))}R=null,V=null,y.reset(),e.setRenderTarget(f),p=null,d=null,u=null,r=null,A=null,$e.stop(),n.isPresenting=!1,e.setPixelRatio(D),e.setSize(F.width,F.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=function(Y){return nt(this,null,function*(){if(r=Y,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",H),r.addEventListener("selectstart",H),r.addEventListener("selectend",H),r.addEventListener("squeeze",H),r.addEventListener("squeezestart",H),r.addEventListener("squeezeend",H),r.addEventListener("end",ee),r.addEventListener("inputsourceschange",K),m.xrCompatible!==!0&&(yield t.makeXRCompatible()),D=e.getPixelRatio(),e.getSize(F),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let fe=null,de=null,Fe=null;m.depth&&(Fe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=m.stencil?Ms:os,de=m.stencil?Ss:ir);let We={colorFormat:t.RGBA8,depthFormat:Fe,scaleFactor:s};u=new XRWebGLBinding(r,t),d=u.createProjectionLayer(We),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),A=new hi(d.textureWidth,d.textureHeight,{format:kn,type:Zn,depthTexture:new io(d.textureWidth,d.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let fe={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,fe),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),A=new hi(p.framebufferWidth,p.framebufferHeight,{format:kn,type:Zn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=yield r.requestReferenceSpace(a),$e.setContext(r),$e.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}})},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function K(Y){for(let se=0;se<Y.removed.length;se++){let fe=Y.removed[se],de=S.indexOf(fe);de>=0&&(S[de]=null,T[de].disconnect(fe))}for(let se=0;se<Y.added.length;se++){let fe=Y.added[se],de=S.indexOf(fe);if(de===-1){for(let We=0;We<T.length;We++)if(We>=S.length){S.push(fe),de=We;break}else if(S[We]===null){S[We]=fe,de=We;break}if(de===-1)break}let Fe=T[de];Fe&&Fe.connect(fe)}}let J=new z,te=new z;function X(Y,se,fe){J.setFromMatrixPosition(se.matrixWorld),te.setFromMatrixPosition(fe.matrixWorld);let de=J.distanceTo(te),Fe=se.projectionMatrix.elements,We=fe.projectionMatrix.elements,Ne=Fe[14]/(Fe[10]-1),Ye=Fe[14]/(Fe[10]+1),Le=(Fe[9]+1)/Fe[5],Oe=(Fe[9]-1)/Fe[5],E=(Fe[8]-1)/Fe[0],pe=(We[8]+1)/We[0],oe=Ne*E,ue=Ne*pe,ne=de/(-E+pe),ke=ne*-E;if(se.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(ke),Y.translateZ(ne),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Fe[10]===-1)Y.projectionMatrix.copy(se.projectionMatrix),Y.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{let ae=Ne+ne,C=Ye+ne,x=oe-ke,B=ue+(de-ke),Z=Le*Ye/C*ae,re=Oe*Ye/C*ae;Y.projectionMatrix.makePerspective(x,B,Z,re,ae,C),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function me(Y,se){se===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(se.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let se=Y.near,fe=Y.far;y.texture!==null&&(y.depthNear>0&&(se=y.depthNear),y.depthFar>0&&(fe=y.depthFar)),_.near=U.near=P.near=se,_.far=U.far=P.far=fe,(R!==_.near||V!==_.far)&&(r.updateRenderState({depthNear:_.near,depthFar:_.far}),R=_.near,V=_.far),P.layers.mask=Y.layers.mask|2,U.layers.mask=Y.layers.mask|4,_.layers.mask=P.layers.mask|U.layers.mask;let de=Y.parent,Fe=_.cameras;me(_,de);for(let We=0;We<Fe.length;We++)me(Fe[We],de);Fe.length===2?X(_,P,U):_.projectionMatrix.copy(P.projectionMatrix),ve(Y,_,de)};function ve(Y,se,fe){fe===null?Y.matrix.copy(se.matrixWorld):(Y.matrix.copy(fe.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(se.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(se.projectionMatrix),Y.projectionMatrixInverse.copy(se.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=js*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(_)};let be=null;function Be(Y,se){if(h=se.getViewerPose(c||o),g=se,h!==null){let fe=h.views;p!==null&&(e.setRenderTargetFramebuffer(A,p.framebuffer),e.setRenderTarget(A));let de=!1;fe.length!==_.cameras.length&&(_.cameras.length=0,de=!0);for(let Ne=0;Ne<fe.length;Ne++){let Ye=fe[Ne],Le=null;if(p!==null)Le=p.getViewport(Ye);else{let E=u.getViewSubImage(d,Ye);Le=E.viewport,Ne===0&&(e.setRenderTargetTextures(A,E.colorTexture,E.depthStencilTexture),e.setRenderTarget(A))}let Oe=M[Ne];Oe===void 0&&(Oe=new jt,Oe.layers.enable(Ne),Oe.viewport=new It,M[Ne]=Oe),Oe.matrix.fromArray(Ye.transform.matrix),Oe.matrix.decompose(Oe.position,Oe.quaternion,Oe.scale),Oe.projectionMatrix.fromArray(Ye.projectionMatrix),Oe.projectionMatrixInverse.copy(Oe.projectionMatrix).invert(),Oe.viewport.set(Le.x,Le.y,Le.width,Le.height),Ne===0&&(_.matrix.copy(Oe.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),de===!0&&_.cameras.push(Oe)}let Fe=r.enabledFeatures;if(Fe&&Fe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&u){let Ne=u.getDepthInformation(fe[0]);Ne&&Ne.isValid&&Ne.texture&&y.init(e,Ne,r.renderState)}}for(let fe=0;fe<T.length;fe++){let de=S[fe],Fe=T[fe];de!==null&&Fe!==void 0&&Fe.update(de,se,c||o)}be&&be(Y,se),se.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:se}),g=null}let $e=new Wf;$e.setAnimationLoop(Be),this.setAnimationLoop=function(Y){be=Y},this.dispose=function(){}}},Rr=new Ji,Ty=new Tt;function Ay(i,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Nh(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,A,T,S){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),u(m,f)):f.isMeshPhongMaterial?(s(m,f),h(m,f)):f.isMeshStandardMaterial?(s(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,S)):f.isMeshMatcapMaterial?(s(m,f),g(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),y(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,A,T):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Kt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Kt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let A=e.get(f),T=A.envMap,S=A.envMapRotation;T&&(m.envMap.value=T,Rr.copy(S),Rr.x*=-1,Rr.y*=-1,Rr.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Rr.y*=-1,Rr.z*=-1),m.envMapRotation.value.setFromMatrix4(Ty.makeRotationFromEuler(Rr)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,A,T){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*A,m.scale.value=T*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,A){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Kt&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function y(m,f){let A=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Ry(i,e,t,n){let r={},s={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,T){let S=T.program;n.uniformBlockBinding(A,S)}function c(A,T){let S=r[A.id];S===void 0&&(g(A),S=h(A),r[A.id]=S,A.addEventListener("dispose",m));let F=T.program;n.updateUBOMapping(A,F);let D=e.render.frame;s[A.id]!==D&&(d(A),s[A.id]=D)}function h(A){let T=u();A.__bindingPointIndex=T;let S=i.createBuffer(),F=A.__size,D=A.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,F,D),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,S),S}function u(){for(let A=0;A<a;A++)if(o.indexOf(A)===-1)return o.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(A){let T=r[A.id],S=A.uniforms,F=A.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let D=0,P=S.length;D<P;D++){let U=Array.isArray(S[D])?S[D]:[S[D]];for(let M=0,_=U.length;M<_;M++){let R=U[M];if(p(R,D,M,F)===!0){let V=R.__offset,H=Array.isArray(R.value)?R.value:[R.value],ee=0;for(let K=0;K<H.length;K++){let J=H[K],te=y(J);typeof J=="number"||typeof J=="boolean"?(R.__data[0]=J,i.bufferSubData(i.UNIFORM_BUFFER,V+ee,R.__data)):J.isMatrix3?(R.__data[0]=J.elements[0],R.__data[1]=J.elements[1],R.__data[2]=J.elements[2],R.__data[3]=0,R.__data[4]=J.elements[3],R.__data[5]=J.elements[4],R.__data[6]=J.elements[5],R.__data[7]=0,R.__data[8]=J.elements[6],R.__data[9]=J.elements[7],R.__data[10]=J.elements[8],R.__data[11]=0):(J.toArray(R.__data,ee),ee+=te.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,V,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(A,T,S,F){let D=A.value,P=T+"_"+S;if(F[P]===void 0)return typeof D=="number"||typeof D=="boolean"?F[P]=D:F[P]=D.clone(),!0;{let U=F[P];if(typeof D=="number"||typeof D=="boolean"){if(U!==D)return F[P]=D,!0}else if(U.equals(D)===!1)return U.copy(D),!0}return!1}function g(A){let T=A.uniforms,S=0,F=16;for(let P=0,U=T.length;P<U;P++){let M=Array.isArray(T[P])?T[P]:[T[P]];for(let _=0,R=M.length;_<R;_++){let V=M[_],H=Array.isArray(V.value)?V.value:[V.value];for(let ee=0,K=H.length;ee<K;ee++){let J=H[ee],te=y(J),X=S%F,me=X%te.boundary,ve=X+me;S+=me,ve!==0&&F-ve<te.storage&&(S+=F-ve),V.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=S,S+=te.storage}}}let D=S%F;return D>0&&(S+=F-D),A.__size=S,A.__cache={},this}function y(A){let T={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(T.boundary=4,T.storage=4):A.isVector2?(T.boundary=8,T.storage=8):A.isVector3||A.isColor?(T.boundary=16,T.storage=12):A.isVector4?(T.boundary=16,T.storage=16):A.isMatrix3?(T.boundary=48,T.storage=48):A.isMatrix4?(T.boundary=64,T.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),T}function m(A){let T=A.target;T.removeEventListener("dispose",m);let S=o.indexOf(T.__bindingPointIndex);o.splice(S,1),i.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function f(){for(let A in r)i.deleteBuffer(r[A]);o=[],r={},s={}}return{bind:l,update:c,dispose:f}}var Io=class{constructor(e={}){let{canvas:t=uf(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let g=new Uint32Array(4),y=new Int32Array(4),m=null,f=null,A=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ri,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let S=this,F=!1;this._outputColorSpace=wn;let D=0,P=0,U=null,M=-1,_=null,R=new It,V=new It,H=null,ee=new ct(0),K=0,J=t.width,te=t.height,X=1,me=null,ve=null,be=new It(0,0,J,te),Be=new It(0,0,J,te),$e=!1,Y=new fs,se=!1,fe=!1,de=new Tt,Fe=new Tt,We=new z,Ne=new It,Ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Le=!1;function Oe(){return U===null?X:1}let E=n;function pe(b,O){return t.getContext(b,O)}try{let b={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${xl}`),t.addEventListener("webglcontextlost",ie,!1),t.addEventListener("webglcontextrestored",Ee,!1),t.addEventListener("webglcontextcreationerror",we,!1),E===null){let O="webgl2";if(E=pe(O,b),E===null)throw pe(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let oe,ue,ne,ke,ae,C,x,B,Z,re,q,Ue,ye,Ve,qe,le,Ce,Xe,Ze,Ie,ut,it,Mt,N;function Me(){oe=new Yx(E),oe.init(),it=new wy(E,oe),ue=new zx(E,oe,e,it),ne=new Sy(E,oe),ue.reverseDepthBuffer&&d&&ne.buffers.depth.setReversed(!0),ke=new Zx(E),ae=new cy,C=new My(E,oe,ne,ae,ue,it,ke),x=new Hx(S),B=new qx(S),Z=new n0(E),Mt=new kx(E,Z),re=new $x(E,Z,ke,Mt),q=new Kx(E,re,Z,ke),Ze=new Jx(E,ue,C),le=new Vx(ae),Ue=new ly(S,x,B,oe,ue,Mt,le),ye=new Ay(S,ae),Ve=new uy,qe=new _y(oe),Xe=new Ox(S,x,B,ne,q,p,l),Ce=new yy(S,q,ue),N=new Ry(E,ke,ue,ne),Ie=new Bx(E,oe,ke),ut=new jx(E,oe,ke),ke.programs=Ue.programs,S.capabilities=ue,S.extensions=oe,S.properties=ae,S.renderLists=Ve,S.shadowMap=Ce,S.state=ne,S.info=ke}Me();let j=new Qh(S,E);this.xr=j,this.getContext=function(){return E},this.getContextAttributes=function(){return E.getContextAttributes()},this.forceContextLoss=function(){let b=oe.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=oe.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(b){b!==void 0&&(X=b,this.setSize(J,te,!1))},this.getSize=function(b){return b.set(J,te)},this.setSize=function(b,O,G=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=b,te=O,t.width=Math.floor(b*X),t.height=Math.floor(O*X),G===!0&&(t.style.width=b+"px",t.style.height=O+"px"),this.setViewport(0,0,b,O)},this.getDrawingBufferSize=function(b){return b.set(J*X,te*X).floor()},this.setDrawingBufferSize=function(b,O,G){J=b,te=O,X=G,t.width=Math.floor(b*G),t.height=Math.floor(O*G),this.setViewport(0,0,b,O)},this.getCurrentViewport=function(b){return b.copy(R)},this.getViewport=function(b){return b.copy(be)},this.setViewport=function(b,O,G,W){b.isVector4?be.set(b.x,b.y,b.z,b.w):be.set(b,O,G,W),ne.viewport(R.copy(be).multiplyScalar(X).round())},this.getScissor=function(b){return b.copy(Be)},this.setScissor=function(b,O,G,W){b.isVector4?Be.set(b.x,b.y,b.z,b.w):Be.set(b,O,G,W),ne.scissor(V.copy(Be).multiplyScalar(X).round())},this.getScissorTest=function(){return $e},this.setScissorTest=function(b){ne.setScissorTest($e=b)},this.setOpaqueSort=function(b){me=b},this.setTransparentSort=function(b){ve=b},this.getClearColor=function(b){return b.copy(Xe.getClearColor())},this.setClearColor=function(){Xe.setClearColor(...arguments)},this.getClearAlpha=function(){return Xe.getClearAlpha()},this.setClearAlpha=function(){Xe.setClearAlpha(...arguments)},this.clear=function(b=!0,O=!0,G=!0){let W=0;if(b){let k=!1;if(U!==null){let he=U.texture.format;k=he===Fl||he===Ll||he===Dl}if(k){let he=U.texture.type,Se=he===Zn||he===ir||he===ys||he===Ss||he===Il||he===Pl,Te=Xe.getClearColor(),Pe=Xe.getClearAlpha(),Je=Te.r,je=Te.g,He=Te.b;Se?(g[0]=Je,g[1]=je,g[2]=He,g[3]=Pe,E.clearBufferuiv(E.COLOR,0,g)):(y[0]=Je,y[1]=je,y[2]=He,y[3]=Pe,E.clearBufferiv(E.COLOR,0,y))}else W|=E.COLOR_BUFFER_BIT}O&&(W|=E.DEPTH_BUFFER_BIT),G&&(W|=E.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),E.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ie,!1),t.removeEventListener("webglcontextrestored",Ee,!1),t.removeEventListener("webglcontextcreationerror",we,!1),Xe.dispose(),Ve.dispose(),qe.dispose(),ae.dispose(),x.dispose(),B.dispose(),q.dispose(),Mt.dispose(),N.dispose(),Ue.dispose(),j.dispose(),j.removeEventListener("sessionstart",tu),j.removeEventListener("sessionend",nu),sr.stop()};function ie(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),F=!0}function Ee(){console.log("THREE.WebGLRenderer: Context Restored."),F=!1;let b=ke.autoReset,O=Ce.enabled,G=Ce.autoUpdate,W=Ce.needsUpdate,k=Ce.type;Me(),ke.autoReset=b,Ce.enabled=O,Ce.autoUpdate=G,Ce.needsUpdate=W,Ce.type=k}function we(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function tt(b){let O=b.target;O.removeEventListener("dispose",tt),Pt(O)}function Pt(b){Qt(b),ae.remove(b)}function Qt(b){let O=ae.get(b).programs;O!==void 0&&(O.forEach(function(G){Ue.releaseProgram(G)}),b.isShaderMaterial&&Ue.releaseShaderCache(b))}this.renderBufferDirect=function(b,O,G,W,k,he){O===null&&(O=Ye);let Se=k.isMesh&&k.matrixWorld.determinant()<0,Te=Jf(b,O,G,W,k);ne.setMaterial(W,Se);let Pe=G.index,Je=1;if(W.wireframe===!0){if(Pe=re.getWireframeAttribute(G),Pe===void 0)return;Je=2}let je=G.drawRange,He=G.attributes.position,dt=je.start*Je,gt=(je.start+je.count)*Je;he!==null&&(dt=Math.max(dt,he.start*Je),gt=Math.min(gt,(he.start+he.count)*Je)),Pe!==null?(dt=Math.max(dt,0),gt=Math.min(gt,Pe.count)):He!=null&&(dt=Math.max(dt,0),gt=Math.min(gt,He.count));let Ut=gt-dt;if(Ut<0||Ut===1/0)return;Mt.setup(k,W,Te,G,Pe);let Dt,mt=Ie;if(Pe!==null&&(Dt=Z.get(Pe),mt=ut,mt.setIndex(Dt)),k.isMesh)W.wireframe===!0?(ne.setLineWidth(W.wireframeLinewidth*Oe()),mt.setMode(E.LINES)):mt.setMode(E.TRIANGLES);else if(k.isLine){let Ge=W.linewidth;Ge===void 0&&(Ge=1),ne.setLineWidth(Ge*Oe()),k.isLineSegments?mt.setMode(E.LINES):k.isLineLoop?mt.setMode(E.LINE_LOOP):mt.setMode(E.LINE_STRIP)}else k.isPoints?mt.setMode(E.POINTS):k.isSprite&&mt.setMode(E.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)Ao("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),mt.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(oe.get("WEBGL_multi_draw"))mt.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let Ge=k._multiDrawStarts,Jt=k._multiDrawCounts,_t=k._multiDrawCount,zn=Pe?Z.get(Pe).bytesPerElement:1,Dr=ae.get(W).currentProgram.getUniforms();for(let vn=0;vn<_t;vn++)Dr.setValue(E,"_gl_DrawID",vn),mt.render(Ge[vn]/zn,Jt[vn])}else if(k.isInstancedMesh)mt.renderInstances(dt,Ut,k.count);else if(G.isInstancedBufferGeometry){let Ge=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Jt=Math.min(G.instanceCount,Ge);mt.renderInstances(dt,Ut,Jt)}else mt.render(dt,Ut)};function xt(b,O,G){b.transparent===!0&&b.side===fn&&b.forceSinglePass===!1?(b.side=Kt,b.needsUpdate=!0,Do(b,O,G),b.side=wi,b.needsUpdate=!0,Do(b,O,G),b.side=fn):Do(b,O,G)}this.compile=function(b,O,G=null){G===null&&(G=b),f=qe.get(G),f.init(O),T.push(f),G.traverseVisible(function(k){k.isLight&&k.layers.test(O.layers)&&(f.pushLight(k),k.castShadow&&f.pushShadow(k))}),b!==G&&b.traverseVisible(function(k){k.isLight&&k.layers.test(O.layers)&&(f.pushLight(k),k.castShadow&&f.pushShadow(k))}),f.setupLights();let W=new Set;return b.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let he=k.material;if(he)if(Array.isArray(he))for(let Se=0;Se<he.length;Se++){let Te=he[Se];xt(Te,G,k),W.add(Te)}else xt(he,G,k),W.add(he)}),f=T.pop(),W},this.compileAsync=function(b,O,G=null){let W=this.compile(b,O,G);return new Promise(k=>{function he(){if(W.forEach(function(Se){ae.get(Se).currentProgram.isReady()&&W.delete(Se)}),W.size===0){k(b);return}setTimeout(he,10)}oe.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let Bn=null;function pi(b){Bn&&Bn(b)}function tu(){sr.stop()}function nu(){sr.start()}let sr=new Wf;sr.setAnimationLoop(pi),typeof self<"u"&&sr.setContext(self),this.setAnimationLoop=function(b){Bn=b,j.setAnimationLoop(b),b===null?sr.stop():sr.start()},j.addEventListener("sessionstart",tu),j.addEventListener("sessionend",nu),this.render=function(b,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(O),O=j.getCamera()),b.isScene===!0&&b.onBeforeRender(S,b,O,U),f=qe.get(b,T.length),f.init(O),T.push(f),Fe.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Y.setFromProjectionMatrix(Fe),fe=this.localClippingEnabled,se=le.init(this.clippingPlanes,fe),m=Ve.get(b,A.length),m.init(),A.push(m),j.enabled===!0&&j.isPresenting===!0){let he=S.xr.getDepthSensingMesh();he!==null&&mc(he,O,-1/0,S.sortObjects)}mc(b,O,0,S.sortObjects),m.finish(),S.sortObjects===!0&&m.sort(me,ve),Le=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,Le&&Xe.addToRenderList(m,b),this.info.render.frame++,se===!0&&le.beginShadows();let G=f.state.shadowsArray;Ce.render(G,b,O),se===!0&&le.endShadows(),this.info.autoReset===!0&&this.info.reset();let W=m.opaque,k=m.transmissive;if(f.setupLights(),O.isArrayCamera){let he=O.cameras;if(k.length>0)for(let Se=0,Te=he.length;Se<Te;Se++){let Pe=he[Se];ru(W,k,b,Pe)}Le&&Xe.render(b);for(let Se=0,Te=he.length;Se<Te;Se++){let Pe=he[Se];iu(m,b,Pe,Pe.viewport)}}else k.length>0&&ru(W,k,b,O),Le&&Xe.render(b),iu(m,b,O);U!==null&&P===0&&(C.updateMultisampleRenderTarget(U),C.updateRenderTargetMipmap(U)),b.isScene===!0&&b.onAfterRender(S,b,O),Mt.resetDefaultState(),M=-1,_=null,T.pop(),T.length>0?(f=T[T.length-1],se===!0&&le.setGlobalState(S.clippingPlanes,f.state.camera)):f=null,A.pop(),A.length>0?m=A[A.length-1]:m=null};function mc(b,O,G,W){if(b.visible===!1)return;if(b.layers.test(O.layers)){if(b.isGroup)G=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(O);else if(b.isLight)f.pushLight(b),b.castShadow&&f.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Y.intersectsSprite(b)){W&&Ne.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Fe);let Se=q.update(b),Te=b.material;Te.visible&&m.push(b,Se,Te,G,Ne.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Y.intersectsObject(b))){let Se=q.update(b),Te=b.material;if(W&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ne.copy(b.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),Ne.copy(Se.boundingSphere.center)),Ne.applyMatrix4(b.matrixWorld).applyMatrix4(Fe)),Array.isArray(Te)){let Pe=Se.groups;for(let Je=0,je=Pe.length;Je<je;Je++){let He=Pe[Je],dt=Te[He.materialIndex];dt&&dt.visible&&m.push(b,Se,dt,G,Ne.z,He)}}else Te.visible&&m.push(b,Se,Te,G,Ne.z,null)}}let he=b.children;for(let Se=0,Te=he.length;Se<Te;Se++)mc(he[Se],O,G,W)}function iu(b,O,G,W){let k=b.opaque,he=b.transmissive,Se=b.transparent;f.setupLightsView(G),se===!0&&le.setGlobalState(S.clippingPlanes,G),W&&ne.viewport(R.copy(W)),k.length>0&&Po(k,O,G),he.length>0&&Po(he,O,G),Se.length>0&&Po(Se,O,G),ne.buffers.depth.setTest(!0),ne.buffers.depth.setMask(!0),ne.buffers.color.setMask(!0),ne.setPolygonOffset(!1)}function ru(b,O,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[W.id]===void 0&&(f.state.transmissionRenderTarget[W.id]=new hi(1,1,{generateMipmaps:!0,type:oe.has("EXT_color_buffer_half_float")||oe.has("EXT_color_buffer_float")?bs:Zn,minFilter:nr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:pt.workingColorSpace}));let he=f.state.transmissionRenderTarget[W.id],Se=W.viewport||R;he.setSize(Se.z*S.transmissionResolutionScale,Se.w*S.transmissionResolutionScale);let Te=S.getRenderTarget();S.setRenderTarget(he),S.getClearColor(ee),K=S.getClearAlpha(),K<1&&S.setClearColor(16777215,.5),S.clear(),Le&&Xe.render(G);let Pe=S.toneMapping;S.toneMapping=Ri;let Je=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),f.setupLightsView(W),se===!0&&le.setGlobalState(S.clippingPlanes,W),Po(b,G,W),C.updateMultisampleRenderTarget(he),C.updateRenderTargetMipmap(he),oe.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let He=0,dt=O.length;He<dt;He++){let gt=O[He],Ut=gt.object,Dt=gt.geometry,mt=gt.material,Ge=gt.group;if(mt.side===fn&&Ut.layers.test(W.layers)){let Jt=mt.side;mt.side=Kt,mt.needsUpdate=!0,su(Ut,G,W,Dt,mt,Ge),mt.side=Jt,mt.needsUpdate=!0,je=!0}}je===!0&&(C.updateMultisampleRenderTarget(he),C.updateRenderTargetMipmap(he))}S.setRenderTarget(Te),S.setClearColor(ee,K),Je!==void 0&&(W.viewport=Je),S.toneMapping=Pe}function Po(b,O,G){let W=O.isScene===!0?O.overrideMaterial:null;for(let k=0,he=b.length;k<he;k++){let Se=b[k],Te=Se.object,Pe=Se.geometry,Je=Se.group,je=Se.material;je.allowOverride===!0&&W!==null&&(je=W),Te.layers.test(G.layers)&&su(Te,O,G,Pe,je,Je)}}function su(b,O,G,W,k,he){b.onBeforeRender(S,O,G,W,k,he),b.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),k.onBeforeRender(S,O,G,W,b,he),k.transparent===!0&&k.side===fn&&k.forceSinglePass===!1?(k.side=Kt,k.needsUpdate=!0,S.renderBufferDirect(G,O,W,k,b,he),k.side=wi,k.needsUpdate=!0,S.renderBufferDirect(G,O,W,k,b,he),k.side=fn):S.renderBufferDirect(G,O,W,k,b,he),b.onAfterRender(S,O,G,W,k,he)}function Do(b,O,G){O.isScene!==!0&&(O=Ye);let W=ae.get(b),k=f.state.lights,he=f.state.shadowsArray,Se=k.state.version,Te=Ue.getParameters(b,k.state,he,O,G),Pe=Ue.getProgramCacheKey(Te),Je=W.programs;W.environment=b.isMeshStandardMaterial?O.environment:null,W.fog=O.fog,W.envMap=(b.isMeshStandardMaterial?B:x).get(b.envMap||W.environment),W.envMapRotation=W.environment!==null&&b.envMap===null?O.environmentRotation:b.envMapRotation,Je===void 0&&(b.addEventListener("dispose",tt),Je=new Map,W.programs=Je);let je=Je.get(Pe);if(je!==void 0){if(W.currentProgram===je&&W.lightsStateVersion===Se)return au(b,Te),je}else Te.uniforms=Ue.getUniforms(b),b.onBeforeCompile(Te,S),je=Ue.acquireProgram(Te,Pe),Je.set(Pe,je),W.uniforms=Te.uniforms;let He=W.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(He.clippingPlanes=le.uniform),au(b,Te),W.needsLights=Qf(b),W.lightsStateVersion=Se,W.needsLights&&(He.ambientLightColor.value=k.state.ambient,He.lightProbe.value=k.state.probe,He.directionalLights.value=k.state.directional,He.directionalLightShadows.value=k.state.directionalShadow,He.spotLights.value=k.state.spot,He.spotLightShadows.value=k.state.spotShadow,He.rectAreaLights.value=k.state.rectArea,He.ltc_1.value=k.state.rectAreaLTC1,He.ltc_2.value=k.state.rectAreaLTC2,He.pointLights.value=k.state.point,He.pointLightShadows.value=k.state.pointShadow,He.hemisphereLights.value=k.state.hemi,He.directionalShadowMap.value=k.state.directionalShadowMap,He.directionalShadowMatrix.value=k.state.directionalShadowMatrix,He.spotShadowMap.value=k.state.spotShadowMap,He.spotLightMatrix.value=k.state.spotLightMatrix,He.spotLightMap.value=k.state.spotLightMap,He.pointShadowMap.value=k.state.pointShadowMap,He.pointShadowMatrix.value=k.state.pointShadowMatrix),W.currentProgram=je,W.uniformsList=null,je}function ou(b){if(b.uniformsList===null){let O=b.currentProgram.getUniforms();b.uniformsList=Ts.seqWithValue(O.seq,b.uniforms)}return b.uniformsList}function au(b,O){let G=ae.get(b);G.outputColorSpace=O.outputColorSpace,G.batching=O.batching,G.batchingColor=O.batchingColor,G.instancing=O.instancing,G.instancingColor=O.instancingColor,G.instancingMorph=O.instancingMorph,G.skinning=O.skinning,G.morphTargets=O.morphTargets,G.morphNormals=O.morphNormals,G.morphColors=O.morphColors,G.morphTargetsCount=O.morphTargetsCount,G.numClippingPlanes=O.numClippingPlanes,G.numIntersection=O.numClipIntersection,G.vertexAlphas=O.vertexAlphas,G.vertexTangents=O.vertexTangents,G.toneMapping=O.toneMapping}function Jf(b,O,G,W,k){O.isScene!==!0&&(O=Ye),C.resetTextureUnits();let he=O.fog,Se=W.isMeshStandardMaterial?O.environment:null,Te=U===null?S.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:br,Pe=(W.isMeshStandardMaterial?B:x).get(W.envMap||Se),Je=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,je=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),He=!!G.morphAttributes.position,dt=!!G.morphAttributes.normal,gt=!!G.morphAttributes.color,Ut=Ri;W.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(Ut=S.toneMapping);let Dt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,mt=Dt!==void 0?Dt.length:0,Ge=ae.get(W),Jt=f.state.lights;if(se===!0&&(fe===!0||b!==_)){let hn=b===_&&W.id===M;le.setState(W,b,hn)}let _t=!1;W.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==Jt.state.version||Ge.outputColorSpace!==Te||k.isBatchedMesh&&Ge.batching===!1||!k.isBatchedMesh&&Ge.batching===!0||k.isBatchedMesh&&Ge.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Ge.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Ge.instancing===!1||!k.isInstancedMesh&&Ge.instancing===!0||k.isSkinnedMesh&&Ge.skinning===!1||!k.isSkinnedMesh&&Ge.skinning===!0||k.isInstancedMesh&&Ge.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Ge.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Ge.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Ge.instancingMorph===!1&&k.morphTexture!==null||Ge.envMap!==Pe||W.fog===!0&&Ge.fog!==he||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==le.numPlanes||Ge.numIntersection!==le.numIntersection)||Ge.vertexAlphas!==Je||Ge.vertexTangents!==je||Ge.morphTargets!==He||Ge.morphNormals!==dt||Ge.morphColors!==gt||Ge.toneMapping!==Ut||Ge.morphTargetsCount!==mt)&&(_t=!0):(_t=!0,Ge.__version=W.version);let zn=Ge.currentProgram;_t===!0&&(zn=Do(W,O,k));let Dr=!1,vn=!1,Rs=!1,Et=zn.getUniforms(),An=Ge.uniforms;if(ne.useProgram(zn.program)&&(Dr=!0,vn=!0,Rs=!0),W.id!==M&&(M=W.id,vn=!0),Dr||_!==b){ne.buffers.depth.getReversed()?(de.copy(b.projectionMatrix),ff(de),pf(de),Et.setValue(E,"projectionMatrix",de)):Et.setValue(E,"projectionMatrix",b.projectionMatrix),Et.setValue(E,"viewMatrix",b.matrixWorldInverse);let pn=Et.map.cameraPosition;pn!==void 0&&pn.setValue(E,We.setFromMatrixPosition(b.matrixWorld)),ue.logarithmicDepthBuffer&&Et.setValue(E,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Et.setValue(E,"isOrthographic",b.isOrthographicCamera===!0),_!==b&&(_=b,vn=!0,Rs=!0)}if(k.isSkinnedMesh){Et.setOptional(E,k,"bindMatrix"),Et.setOptional(E,k,"bindMatrixInverse");let hn=k.skeleton;hn&&(hn.boneTexture===null&&hn.computeBoneTexture(),Et.setValue(E,"boneTexture",hn.boneTexture,C))}k.isBatchedMesh&&(Et.setOptional(E,k,"batchingTexture"),Et.setValue(E,"batchingTexture",k._matricesTexture,C),Et.setOptional(E,k,"batchingIdTexture"),Et.setValue(E,"batchingIdTexture",k._indirectTexture,C),Et.setOptional(E,k,"batchingColorTexture"),k._colorsTexture!==null&&Et.setValue(E,"batchingColorTexture",k._colorsTexture,C));let Rn=G.morphAttributes;if((Rn.position!==void 0||Rn.normal!==void 0||Rn.color!==void 0)&&Ze.update(k,G,zn),(vn||Ge.receiveShadow!==k.receiveShadow)&&(Ge.receiveShadow=k.receiveShadow,Et.setValue(E,"receiveShadow",k.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(An.envMap.value=Pe,An.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&O.environment!==null&&(An.envMapIntensity.value=O.environmentIntensity),vn&&(Et.setValue(E,"toneMappingExposure",S.toneMappingExposure),Ge.needsLights&&Kf(An,Rs),he&&W.fog===!0&&ye.refreshFogUniforms(An,he),ye.refreshMaterialUniforms(An,W,X,te,f.state.transmissionRenderTarget[b.id]),Ts.upload(E,ou(Ge),An,C)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Ts.upload(E,ou(Ge),An,C),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Et.setValue(E,"center",k.center),Et.setValue(E,"modelViewMatrix",k.modelViewMatrix),Et.setValue(E,"normalMatrix",k.normalMatrix),Et.setValue(E,"modelMatrix",k.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){let hn=W.uniformsGroups;for(let pn=0,gc=hn.length;pn<gc;pn++){let or=hn[pn];N.update(or,zn),N.bind(or,zn)}}return zn}function Kf(b,O){b.ambientLightColor.needsUpdate=O,b.lightProbe.needsUpdate=O,b.directionalLights.needsUpdate=O,b.directionalLightShadows.needsUpdate=O,b.pointLights.needsUpdate=O,b.pointLightShadows.needsUpdate=O,b.spotLights.needsUpdate=O,b.spotLightShadows.needsUpdate=O,b.rectAreaLights.needsUpdate=O,b.hemisphereLights.needsUpdate=O}function Qf(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(b,O,G){let W=ae.get(b);W.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),ae.get(b.texture).__webglTexture=O,ae.get(b.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:G,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,O){let G=ae.get(b);G.__webglFramebuffer=O,G.__useDefaultFramebuffer=O===void 0};let ep=E.createFramebuffer();this.setRenderTarget=function(b,O=0,G=0){U=b,D=O,P=G;let W=!0,k=null,he=!1,Se=!1;if(b){let Pe=ae.get(b);if(Pe.__useDefaultFramebuffer!==void 0)ne.bindFramebuffer(E.FRAMEBUFFER,null),W=!1;else if(Pe.__webglFramebuffer===void 0)C.setupRenderTarget(b);else if(Pe.__hasExternalTextures)C.rebindTextures(b,ae.get(b.texture).__webglTexture,ae.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let He=b.depthTexture;if(Pe.__boundDepthTexture!==He){if(He!==null&&ae.has(He)&&(b.width!==He.image.width||b.height!==He.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(b)}}let Je=b.texture;(Je.isData3DTexture||Je.isDataArrayTexture||Je.isCompressedArrayTexture)&&(Se=!0);let je=ae.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(je[O])?k=je[O][G]:k=je[O],he=!0):b.samples>0&&C.useMultisampledRTT(b)===!1?k=ae.get(b).__webglMultisampledFramebuffer:Array.isArray(je)?k=je[G]:k=je,R.copy(b.viewport),V.copy(b.scissor),H=b.scissorTest}else R.copy(be).multiplyScalar(X).floor(),V.copy(Be).multiplyScalar(X).floor(),H=$e;if(G!==0&&(k=ep),ne.bindFramebuffer(E.FRAMEBUFFER,k)&&W&&ne.drawBuffers(b,k),ne.viewport(R),ne.scissor(V),ne.setScissorTest(H),he){let Pe=ae.get(b.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_CUBE_MAP_POSITIVE_X+O,Pe.__webglTexture,G)}else if(Se){let Pe=ae.get(b.texture),Je=O;E.framebufferTextureLayer(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,Pe.__webglTexture,G,Je)}else if(b!==null&&G!==0){let Pe=ae.get(b.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,Pe.__webglTexture,G)}M=-1},this.readRenderTargetPixels=function(b,O,G,W,k,he,Se){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=ae.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Se!==void 0&&(Te=Te[Se]),Te){ne.bindFramebuffer(E.FRAMEBUFFER,Te);try{let Pe=b.texture,Je=Pe.format,je=Pe.type;if(!ue.textureFormatReadable(Je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ue.textureTypeReadable(je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=b.width-W&&G>=0&&G<=b.height-k&&E.readPixels(O,G,W,k,it.convert(Je),it.convert(je),he)}finally{let Pe=U!==null?ae.get(U).__webglFramebuffer:null;ne.bindFramebuffer(E.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=function(b,O,G,W,k,he,Se){return nt(this,null,function*(){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=ae.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Se!==void 0&&(Te=Te[Se]),Te)if(O>=0&&O<=b.width-W&&G>=0&&G<=b.height-k){ne.bindFramebuffer(E.FRAMEBUFFER,Te);let Pe=b.texture,Je=Pe.format,je=Pe.type;if(!ue.textureFormatReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ue.textureTypeReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let He=E.createBuffer();E.bindBuffer(E.PIXEL_PACK_BUFFER,He),E.bufferData(E.PIXEL_PACK_BUFFER,he.byteLength,E.STREAM_READ),E.readPixels(O,G,W,k,it.convert(Je),it.convert(je),0);let dt=U!==null?ae.get(U).__webglFramebuffer:null;ne.bindFramebuffer(E.FRAMEBUFFER,dt);let gt=E.fenceSync(E.SYNC_GPU_COMMANDS_COMPLETE,0);return E.flush(),yield df(E,gt,4),E.bindBuffer(E.PIXEL_PACK_BUFFER,He),E.getBufferSubData(E.PIXEL_PACK_BUFFER,0,he),E.deleteBuffer(He),E.deleteSync(gt),he}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")})},this.copyFramebufferToTexture=function(b,O=null,G=0){let W=Math.pow(2,-G),k=Math.floor(b.image.width*W),he=Math.floor(b.image.height*W),Se=O!==null?O.x:0,Te=O!==null?O.y:0;C.setTexture2D(b,0),E.copyTexSubImage2D(E.TEXTURE_2D,G,0,0,Se,Te,k,he),ne.unbindTexture()};let tp=E.createFramebuffer(),np=E.createFramebuffer();this.copyTextureToTexture=function(b,O,G=null,W=null,k=0,he=null){he===null&&(k!==0?(Ao("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),he=k,k=0):he=0);let Se,Te,Pe,Je,je,He,dt,gt,Ut,Dt=b.isCompressedTexture?b.mipmaps[he]:b.image;if(G!==null)Se=G.max.x-G.min.x,Te=G.max.y-G.min.y,Pe=G.isBox3?G.max.z-G.min.z:1,Je=G.min.x,je=G.min.y,He=G.isBox3?G.min.z:0;else{let Rn=Math.pow(2,-k);Se=Math.floor(Dt.width*Rn),Te=Math.floor(Dt.height*Rn),b.isDataArrayTexture?Pe=Dt.depth:b.isData3DTexture?Pe=Math.floor(Dt.depth*Rn):Pe=1,Je=0,je=0,He=0}W!==null?(dt=W.x,gt=W.y,Ut=W.z):(dt=0,gt=0,Ut=0);let mt=it.convert(O.format),Ge=it.convert(O.type),Jt;O.isData3DTexture?(C.setTexture3D(O,0),Jt=E.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(C.setTexture2DArray(O,0),Jt=E.TEXTURE_2D_ARRAY):(C.setTexture2D(O,0),Jt=E.TEXTURE_2D),E.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,O.flipY),E.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),E.pixelStorei(E.UNPACK_ALIGNMENT,O.unpackAlignment);let _t=E.getParameter(E.UNPACK_ROW_LENGTH),zn=E.getParameter(E.UNPACK_IMAGE_HEIGHT),Dr=E.getParameter(E.UNPACK_SKIP_PIXELS),vn=E.getParameter(E.UNPACK_SKIP_ROWS),Rs=E.getParameter(E.UNPACK_SKIP_IMAGES);E.pixelStorei(E.UNPACK_ROW_LENGTH,Dt.width),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,Dt.height),E.pixelStorei(E.UNPACK_SKIP_PIXELS,Je),E.pixelStorei(E.UNPACK_SKIP_ROWS,je),E.pixelStorei(E.UNPACK_SKIP_IMAGES,He);let Et=b.isDataArrayTexture||b.isData3DTexture,An=O.isDataArrayTexture||O.isData3DTexture;if(b.isDepthTexture){let Rn=ae.get(b),hn=ae.get(O),pn=ae.get(Rn.__renderTarget),gc=ae.get(hn.__renderTarget);ne.bindFramebuffer(E.READ_FRAMEBUFFER,pn.__webglFramebuffer),ne.bindFramebuffer(E.DRAW_FRAMEBUFFER,gc.__webglFramebuffer);for(let or=0;or<Pe;or++)Et&&(E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,ae.get(b).__webglTexture,k,He+or),E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,ae.get(O).__webglTexture,he,Ut+or)),E.blitFramebuffer(Je,je,Se,Te,dt,gt,Se,Te,E.DEPTH_BUFFER_BIT,E.NEAREST);ne.bindFramebuffer(E.READ_FRAMEBUFFER,null),ne.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else if(k!==0||b.isRenderTargetTexture||ae.has(b)){let Rn=ae.get(b),hn=ae.get(O);ne.bindFramebuffer(E.READ_FRAMEBUFFER,tp),ne.bindFramebuffer(E.DRAW_FRAMEBUFFER,np);for(let pn=0;pn<Pe;pn++)Et?E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,Rn.__webglTexture,k,He+pn):E.framebufferTexture2D(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,Rn.__webglTexture,k),An?E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,hn.__webglTexture,he,Ut+pn):E.framebufferTexture2D(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,hn.__webglTexture,he),k!==0?E.blitFramebuffer(Je,je,Se,Te,dt,gt,Se,Te,E.COLOR_BUFFER_BIT,E.NEAREST):An?E.copyTexSubImage3D(Jt,he,dt,gt,Ut+pn,Je,je,Se,Te):E.copyTexSubImage2D(Jt,he,dt,gt,Je,je,Se,Te);ne.bindFramebuffer(E.READ_FRAMEBUFFER,null),ne.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else An?b.isDataTexture||b.isData3DTexture?E.texSubImage3D(Jt,he,dt,gt,Ut,Se,Te,Pe,mt,Ge,Dt.data):O.isCompressedArrayTexture?E.compressedTexSubImage3D(Jt,he,dt,gt,Ut,Se,Te,Pe,mt,Dt.data):E.texSubImage3D(Jt,he,dt,gt,Ut,Se,Te,Pe,mt,Ge,Dt):b.isDataTexture?E.texSubImage2D(E.TEXTURE_2D,he,dt,gt,Se,Te,mt,Ge,Dt.data):b.isCompressedTexture?E.compressedTexSubImage2D(E.TEXTURE_2D,he,dt,gt,Dt.width,Dt.height,mt,Dt.data):E.texSubImage2D(E.TEXTURE_2D,he,dt,gt,Se,Te,mt,Ge,Dt);E.pixelStorei(E.UNPACK_ROW_LENGTH,_t),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,zn),E.pixelStorei(E.UNPACK_SKIP_PIXELS,Dr),E.pixelStorei(E.UNPACK_SKIP_ROWS,vn),E.pixelStorei(E.UNPACK_SKIP_IMAGES,Rs),he===0&&O.generateMipmaps&&E.generateMipmap(Jt),ne.unbindTexture()},this.copyTextureToTexture3D=function(b,O,G=null,W=null,k=0){return Ao('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,O,G,W,k)},this.initRenderTarget=function(b){ae.get(b).__webglFramebuffer===void 0&&C.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?C.setTextureCube(b,0):b.isData3DTexture?C.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?C.setTexture2DArray(b,0):C.setTexture2D(b,0),ne.unbindTexture()},this.resetState=function(){D=0,P=0,U=null,ne.reset(),Mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=pt._getDrawingBufferColorSpace(e),t.unpackColorSpace=pt._getUnpackColorSpace()}};var Py=["rendererContainer"],Dy=["miniWheelContainer"],Ly=["colorPicker"];function Fy(i,e){i&1&&(v(0,"div",5),ce(1,"div",6,1)(3,"input",7,2),w())}var dc=class i{constructor(e,t){this.platformId=e;this.colorService=t;this.platformBrowser=qt(this.platformId),this.colorPicker=null}onEscape(e){this.showBigWheel=!1}rendererContainer;miniWheelContainer;colorPickerRef;colorSelected=new _u;showBigWheel=!1;colorPicker;platformBrowser;outsideClickListener;renderer=null;scene=null;camera=null;meshes=[];raycaster=null;mouse=new ge;defaultColor="#28a745";ngAfterViewInit(){this.platformBrowser&&(this.colorSelected.emit(this.defaultColor),this.colorService.setColor(this.defaultColor),this.colorPicker=this.colorPickerRef?.nativeElement,this.initMiniWheel())}ngOnDestroy(){this.disposeThreeResources(),this.outsideClickListener&&document.removeEventListener("click",this.outsideClickListener)}openColorWheel(){this.showBigWheel=!0,setTimeout(()=>{this.colorPicker=this.colorPickerRef?.nativeElement,this.colorPicker&&!this.colorPicker.hasAttribute("data-listener-added")&&(this.colorPicker.addEventListener("input",e=>{let t=e.target.value;this.colorSelected.emit(t),this.colorService.setColor(t),this.showBigWheel=!1}),this.colorPicker.setAttribute("data-listener-added","true")),this.initBigWheel(),this.addOutsideClickListener()},0)}addOutsideClickListener(){this.outsideClickListener=e=>{let t=this.rendererContainer?.nativeElement,n=this.colorPickerRef?.nativeElement;t&&n&&!t.contains(e.target)&&!n.contains(e.target)&&(n.style.visibility="hidden")},document.addEventListener("click",this.outsideClickListener)}initMiniWheel(){let e=this.miniWheelContainer.nativeElement,t=new ds,n=new jt(50,1,.1,1e3);n.position.z=6;let r=new Io({alpha:!0,antialias:!0});r.setSize(100,100),r.setPixelRatio(window.devicePixelRatio),e.appendChild(r.domElement);let s=new vs(16777215,.8),o=new xs(16777215,1);o.position.set(0,0,10),t.add(s,o);let a=2,l=8,c=["#4CAF50","#8BC34A","#CDDC39","#FFEB3B","#FF9800","#A1887F","#795548","#3E2723"];for(let g=0;g<l;g++){let y=g/l*Math.PI*2,m=(g+1)/l*Math.PI*2,f=new Qi;f.moveTo(0,0),f.absarc(0,0,a,y,m,!1),f.lineTo(0,0);let A=new mo(f);A.computeVertexNormals();let T=new Mr({color:c[g],metalness:.5,roughness:.3,emissive:new ct(c[g]),emissiveIntensity:.2,side:fn}),S=new Gt(A,T);t.add(S)}let h=new gs(a*.95,a,64),u=new Ti({color:16777215,transparent:!0,opacity:.05,side:fn}),d=new Gt(h,u);t.add(d);function p(){requestAnimationFrame(p),t.rotation.z+=.05,r.render(t,n)}p()}initBigWheel(){let e=this.rendererContainer.nativeElement,t=e.clientWidth,n=e.clientHeight;this.disposeThreeResources(),this.scene=new ds,this.camera=new jt(75,t/n,.1,1e3),this.camera.position.z=6,this.renderer=new Io({alpha:!0,antialias:!0}),this.renderer.setSize(t,n),this.renderer.setPixelRatio(window.devicePixelRatio),e.appendChild(this.renderer.domElement);let r=new vs(16777215,.6),s=new xs(16777215,1.5);s.position.set(3,3,5),s.castShadow=!0,this.scene.add(r,s);let o=new _o(16777215,1,10,Math.PI/4,.5,2);o.position.set(0,0,5),o.castShadow=!0,this.scene.add(o);let a=2.5,l=8,c=["#4CAF50","#8BC34A","#CDDC39","#FFEB3B","#FF9800","#A1887F","#795548","#3E2723"];this.meshes=[],this.raycaster=new vo;for(let g=0;g<l;g++){let y=g/l*Math.PI*2,m=(g+1)/l*Math.PI*2,f=new Qi;f.moveTo(0,0),f.absarc(0,0,a,y,m,!1),f.lineTo(0,0);let A={depth:.3,bevelEnabled:!0,bevelSize:.1,bevelSegments:2},T=new fo(f,A),S=new Mr({color:c[g],metalness:.6,roughness:.3,emissive:new ct(c[g]),emissiveIntensity:.3,side:fn}),F=new Gt(T,S);F.userData={colorIndex:g},this.meshes.push(F),this.scene.add(F);let D=new Ti({color:c[g],opacity:.2,transparent:!0,side:Kt,blending:yo}),P=new Gt(T.clone(),D);P.scale.multiplyScalar(1.1),this.scene.add(P)}let h=new gs(a*.9,a,64),u=new Ti({color:16777215,opacity:.07,transparent:!0,side:fn}),d=new Gt(h,u);this.scene.add(d),this.renderer.domElement.addEventListener("click",g=>{let y=this.renderer.domElement.getBoundingClientRect();this.mouse.x=(g.clientX-y.left)/y.width*2-1,this.mouse.y=-((g.clientY-y.top)/y.height)*2+1,this.raycaster.setFromCamera(this.mouse,this.camera);let m=this.raycaster.intersectObjects(this.meshes);if(m.length>0){let f=m[0].object;if(f.material instanceof Mr){let A=`#${f.material.color.getHexString()}`;console.log("Selected color:",A),this.colorSelected.emit(A),this.colorService.setColor(A),this.showBigWheel=!1,this.playClickSound(),this.addGlowEffect(f)}}});let p=()=>{requestAnimationFrame(p),this.scene.rotation.z+=0,this.renderer.render(this.scene,this.camera)};p()}playClickSound(){new Audio("path_to_sound_effect.mp3").play()}addGlowEffect(e){let t=e.material;t.emissiveIntensity=1.5,setTimeout(()=>{t.emissiveIntensity=.3},500)}disposeThreeResources(){this.scene&&(this.scene.traverse(e=>{e instanceof Gt&&(e.geometry.dispose(),e.material.dispose())}),this.scene=null),this.renderer&&(this.renderer.dispose(),this.renderer=null),this.raycaster&&(this.raycaster=null)}static \u0275fac=function(t){return new(t||i)(De(tn),De(sn))};static \u0275cmp=Ct({type:i,selectors:[["app-wheel"]],viewQuery:function(t,n){if(t&1&&(Oo(Py,5),Oo(Dy,5),Oo(Ly,5)),t&2){let r;ko(r=Bo())&&(n.rendererContainer=r.first),ko(r=Bo())&&(n.miniWheelContainer=r.first),ko(r=Bo())&&(n.colorPickerRef=r.first)}},hostBindings:function(t,n){t&1&&Qe("keydown.escape",function(s){return n.onEscape(s)},!1,Is)},outputs:{colorSelected:"colorSelected"},decls:4,vars:1,consts:[["miniWheelContainer",""],["rendererContainer",""],["colorPicker",""],[1,"wheel-wrapper","three-wheel",3,"click"],["class","overlay",4,"ngIf"],[1,"overlay"],["id","rendererContainer",1,"big-wheel-container"],["id","colorPicker","type","color",1,"color-picker"]],template:function(t,n){if(t&1){let r=vt();v(0,"div",3),Qe("click",function(){return Ae(r),Re(n.openColorWheel())}),ce(1,"div",null,0),w(),ze(3,Fy,5,0,"div",4)}t&2&&(L(3),Q("ngIf",n.showBigWheel))},dependencies:[Lt,In],styles:[".wheel-wrapper.three-wheel[_ngcontent-%COMP%]{position:fixed;bottom:20px;right:20px;width:90px;height:90px;z-index:9999;cursor:pointer;border-radius:50%;box-shadow:0 0 12px #0fc,0 0 24px #0fc;transition:transform .3s ease;overflow:hidden;background-color:#ffffff1a;display:flex;align-items:center;justify-content:center}.wheel-wrapper.three-wheel[_ngcontent-%COMP%]:hover{transform:scale(1.05)}.wheel-wrapper[_ngcontent-%COMP%]   canvas[_ngcontent-%COMP%]{width:100%;height:100%;display:block;border-radius:50%;object-fit:cover;pointer-events:none}.overlay[_ngcontent-%COMP%]{position:fixed;top:0;left:0;z-index:1000;width:100vw;height:100vh;background:#0009;display:flex;justify-content:center;align-items:center;backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);animation:_ngcontent-%COMP%_fadeIn .3s ease-in-out}#rendererContainer[_ngcontent-%COMP%]{width:60vw;height:60vw;max-width:500px;max-height:500px;min-width:250px;min-height:250px;border-radius:50%;overflow:hidden;position:relative;z-index:1001;background:radial-gradient(circle at center,#00ffcc26,#0006);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);box-shadow:0 0 25px #00ffcc80,0 0 45px #00ffcc4d,inset 0 0 15px #0fc3;transition:all .4s ease}#rendererContainer[_ngcontent-%COMP%]:hover{box-shadow:0 0 30px #0fc9,0 0 60px #0fc6,inset 0 0 20px #00ffcc4d;transform:scale(1.02)}.big-wheel-container[_ngcontent-%COMP%]{width:100%;height:100%;position:relative}.big-wheel-container[_ngcontent-%COMP%]   canvas[_ngcontent-%COMP%]{width:100%!important;height:100%!important;display:block;pointer-events:auto}#colorPicker[_ngcontent-%COMP%]{position:absolute;visibility:hidden;z-index:2000}@keyframes _ngcontent-%COMP%_fadeIn{0%{opacity:0;transform:scale(.95)}to{opacity:1;transform:scale(1)}}@media (max-width: 600px){#rendererContainer[_ngcontent-%COMP%]{width:60vw;height:60vw;border-radius:50%}}.wheel-wrapper.three-wheel[_ngcontent-%COMP%]{width:70px;height:70px;bottom:15px;right:15px}"]})};var Ny=i=>({backgroundColor:i}),jf=i=>({borderColor:i}),Uy=()=>({backgroundColor:null,color:"white"}),Oy=i=>({backgroundColor:i,color:"white"});function ky(i,e){if(i&1&&(un(0),v(1,"a",10),ce(2,"i"),I(3),mi(4,"translate"),w(),dn()),i&2){let t=e.$implicit;L(),Q("routerLink",t.path)("ngStyle",Vn(7,Uy)),L(),vc(t.icon+" text-xl"),L(),wt(" ",gi(4,5,t.label)," ")}}function By(i,e){if(i&1&&(un(0),v(1,"a",11),ce(2,"i"),I(3),v(4,"span",12),I(5),w()(),dn()),i&2){let t=e.$implicit,n=_e();L(),Q("ngStyle",Nt(6,Oy,n.selectedColor||"#ffffff0d")),L(),vc(t.icon+" text-xl"),L(),wt(" ",t.label," "),L(),Q("ngClass",t.badgeClass),L(),wt(" ",t.badge," ")}}var fc=class i{constructor(e,t,n,r,s){this.router=e;this.platformId=t;this.colorService=n;this.layoutService=r;this.userInfo=s}isLoggedIn=!1;sidebarVisible=!0;selectedColor="";toggleHandler;coreLinks=[{label:"SIDEBARMENU.HOME",path:"/",icon:"bi bi-house-door-fill"},{label:"SIDEBARMENU.MANDI_RATES",path:"/mandi-rates",icon:"bi bi-graph-up"},{label:"SIDEBARMENU.PRODUCTS",path:"/products",icon:"bi bi-box-seam"},{label:"SIDEBARMENU.CHAT",path:"/messages",icon:"bi bi-chat-dots-fill"},{label:"SIDEBARMENU.BUYERS",path:"/buyer",icon:"bi bi-person-badge-fill"},{label:"SIDEBARMENU.SETTINGS",path:"/settings",icon:"bi bi-gear-fill"},{label:"SIDEBARMENU.ORDERS",path:"/orders",icon:"bi bi-bag-check-fill"},{label:"SIDEBARMENU.PAYMENTS",path:"/payments",icon:"bi bi-cash-stack"},{label:"SIDEBARMENU.REPORTS",path:"/reports",icon:"bi bi-clipboard-data-fill"},{label:"SIDEBARMENU.HELP",path:"/help-center",icon:"bi bi-info-circle-fill"}];futureLinks=[{label:"Leaf Disease Detection",icon:"bi bi-eye-fill",badge:"Beta Soon",badgeClass:"bg-gray-500 text-white"},{label:"Logistics Tracking",icon:"bi bi-truck-front-fill",badge:"Planned",badgeClass:"bg-yellow-500 text-black"},{label:"AI Crop Recommendation",icon:"bi bi-cpu-fill",badge:"In Design",badgeClass:"bg-gray-500 text-white"},{label:"User Audit Logs",icon:"bi bi-clock-history",badge:"Admin",badgeClass:"bg-pink-500 text-white"}];sidebarBackground="#14532d";ngOnInit(){this.layoutService.sidebarVisible$.subscribe(e=>{this.sidebarVisible=e,this.isopenandclose=e}),this.toggleHandler=()=>this.layoutService.toggleSidebar(),window.addEventListener("toggle-sidebar",this.toggleHandler),this.colorService.selectedColor$.subscribe(e=>{this.selectedColor=e,e==="#4CAF50"||e==="#8BC34A"?this.sidebarBackground="#1B5E20":this.sidebarBackground=e}),this.router.events.pipe(Pi(e=>e instanceof Li)).subscribe(()=>{qt(this.platformId)&&(this.isLoggedIn=!!this.userInfo.getToken())})}isopenandclose=!1;toggleSidebar(){this.layoutService.toggleSidebar()}setSidebarState(e){this.isopenandclose=e,this.sidebarVisible=e,this.layoutService.toggleSidebar()}logout(){qt(this.platformId)&&localStorage.clear(),this.isLoggedIn=!1,this.router.navigate(["/auth/login"])}ngOnDestroy(){window.removeEventListener("toggle-sidebar",this.toggleHandler)}static \u0275fac=function(t){return new(t||i)(De(_n),De(tn),De(sn),De(on),De(Ot))};static \u0275cmp=Ct({type:i,selectors:[["app-sidebar"]],decls:13,vars:15,consts:[[1,"fixed","top-0","left-0","h-full","w-64","backdrop-blur-md","backdrop-saturate-150","text-white","shadow-2xl","z-50","flex","flex-col",3,"ngStyle"],[1,"flex","items-center","justify-between","h-20","border-b","px-4",3,"ngStyle"],[1,"flex","items-center","gap-3"],["src","images/logo.jpg","alt","AgriMandi Logo",1,"h-12","w-12","rounded-full","shadow-lg","transition-transform","duration-300","hover:scale-110","hover:shadow-[0_0_15px_#00FF99]"],[1,"text-xl","font-extrabold","tracking-wider","text-white","animate-pulse","drop-shadow-[0_0_10px_#00FF99]"],["aria-label","Close Sidebar",1,"text-white","text-2xl","hover:opacity-80","transition",3,"click"],[1,"bi","bi-x-lg"],[1,"flex-1","overflow-y-auto","p-4","space-y-2","custom-scrollbar"],[4,"ngFor","ngForOf"],[1,"mt-6","pt-4","text-sm","text-white/80","uppercase","tracking-wider","border-t",3,"ngStyle"],["routerLinkActive","bg-white text-black border-l-4 border-yellow-300",1,"flex","items-center","gap-3","py-2","px-4","rounded-lg","hover:bg-white","hover:text-black","transition",3,"routerLink","ngStyle"],[1,"flex","items-center","gap-3","py-2","px-4","rounded-lg","transition","cursor-not-allowed","opacity-60",3,"ngStyle"],[1,"ml-auto","px-2","py-0.5","rounded-full","text-xs","shadow-md","animate-pulse",3,"ngClass"]],template:function(t,n){t&1&&(v(0,"div",0)(1,"div",1)(2,"div",2),ce(3,"img",3),v(4,"span",4),I(5," AgriMandi "),w()(),v(6,"button",5),Qe("click",function(){return n.toggleSidebar()}),ce(7,"i",6),w()(),v(8,"nav",7),ze(9,ky,5,8,"ng-container",8),v(10,"div",9),I(11," Coming Soon "),w(),ze(12,By,6,8,"ng-container",8),w()()),t&2&&(mn("translate-x-0",n.sidebarVisible)("-translate-x-full",!n.sidebarVisible),Q("ngStyle",Nt(9,Ny,n.sidebarBackground)),L(),Q("ngStyle",Nt(11,jf,n.selectedColor||"#198754")),L(8),Q("ngForOf",n.coreLinks),L(),Q("ngStyle",Nt(13,jf,n.selectedColor||"#ffffff40")),L(2),Q("ngForOf",n.futureLinks))},dependencies:[Lt,gn,rn,Pn,Fi,kr,Iu,Oi,Vr],styles:[".custom-scrollbar[_ngcontent-%COMP%]::-webkit-scrollbar{width:6px}.custom-scrollbar[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:transparent}.custom-scrollbar[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:#fff3;border-radius:10px}"]})};var zy=i=>({"background-color":i}),pc=class i{constructor(e,t,n,r,s){this.colorService=e;this.signalRService=t;this.layoutService=n;this.userInfo=r;this.translate=s;s.addLangs(["en","hi"]);let o=this.userInfo.getUserLang()??"en";s.setDefaultLang(o),s.use(o)}selectedColor="";sidebarVisible=!0;receivedMessage="";ngOnInit(){this.signalRService.startConnection(),typeof window<"u"&&Zf.init(),this.colorService.selectedColor$.subscribe(e=>{this.selectedColor=e}),this.layoutService.sidebarVisible$.subscribe(e=>{this.sidebarVisible=e}),this.signalRService.startConnection().subscribe(()=>{this.signalRService.receiveMessage().subscribe(e=>{this.receivedMessage=e})})}sendMessage(e){this.signalRService.sendMessage(e)}title="AgriMandi-Frontend";currentYear=new Date().getFullYear();showWheel=!1;openWheel(){this.showWheel=!0}onColorSelected(e){this.selectedColor=e,console.log("Color selected from wheel:",e),this.showWheel=!1}static \u0275fac=function(t){return new(t||i)(De(sn),De(qr),De(on),De(Ot),De(ku))};static \u0275cmp=Ct({type:i,selectors:[["app-root"]],decls:37,vars:8,consts:[[1,"content-overlay","transition-all","duration-300"],[1,"pt-24"],[1,"main-content"],[1,"text-white","py-8","text-center","md:text-left","mt-16",3,"ngStyle"],[1,"container","mx-auto","px-4","grid","grid-cols-1","md:grid-cols-3","gap-8","items-center"],[1,"text-2xl","font-bold","mb-2","tracking-wider"],[1,"text-sm","opacity-80"],[1,"flex","justify-center","space-x-6","text-lg","mt-4","md:mt-0"],["href","https://github.com/VIKASHNAGAR786","target","_blank",1,"hover:text-[#00ffee]","transition"],[1,"bi","bi-github"],["href","https://linkedin.com/in/vikashnagar786","target","_blank",1,"hover:text-[#00ffee]","transition"],[1,"bi","bi-linkedin"],["href","mailto:vikashnagar872@gmail.com",1,"hover:text-[#00ffee]","transition"],[1,"bi","bi-envelope-fill"],["href","#",1,"hover:text-[#00ffee]","transition"],[1,"bi","bi-twitter-x"],[1,"bi","bi-facebook"],[1,"text-sm","text-gray-100","mt-6","md:mt-0","text-center","md:text-right"],[1,"text-[#00ffee]"],[1,"text-gray-400","text-xs"]],template:function(t,n){t&1&&(ce(0,"app-design")(1,"app-sidebar"),v(2,"div",0)(3,"header"),ce(4,"app-navbar"),w(),v(5,"div",1)(6,"main",2),ce(7,"router-outlet"),w()(),ce(8,"app-wheel")(9,"app-alert"),v(10,"footer",3)(11,"div",4)(12,"div")(13,"h2",5),I(14,"\u{1F331} AgriMandi"),w(),v(15,"p",6),I(16,"Empowering Farmers with Technology for a Better Tomorrow"),w()(),v(17,"div",7)(18,"a",8),ce(19,"i",9),w(),v(20,"a",10),ce(21,"i",11),w(),v(22,"a",12),ce(23,"i",13),w(),v(24,"a",14),ce(25,"i",15),w(),v(26,"a",14),ce(27,"i",16),w()(),v(28,"div",17)(29,"p"),I(30),w(),v(31,"p"),I(32,"Developed with \u{1F49A} by "),v(33,"strong",18),I(34,"Vikash Nagar"),w()(),v(35,"p",19),I(36,"Version 1.0.0"),w()()()()()),t&2&&(L(2),mn("md:ml-64",n.sidebarVisible)("ml-0",!n.sidebarVisible),L(8),Q("ngStyle",Nt(6,zy,n.selectedColor||"#198754")),L(20),wt("\xA9 ",n.currentYear," AgriMandi. All rights reserved."))},dependencies:[Lt,Pn,Fi,Ru,ya,ba,Sa,dc,fc],styles:["body[_ngcontent-%COMP%]{margin:0;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif;display:flex;flex-direction:column;min-height:100vh;background-color:#b9f6ca;color:#333;scroll-behavior:smooth;overflow-x:hidden}main[_ngcontent-%COMP%]{flex:1}footer[_ngcontent-%COMP%]{font-size:14px;color:#fff;text-align:center;padding:10px 0;box-shadow:0 -2px 5px #0003}.content-overlay[_ngcontent-%COMP%]{position:relative;z-index:1}.main-content[_ngcontent-%COMP%]{padding:1rem}app-design[_ngcontent-%COMP%]{z-index:0;position:absolute;top:0;left:0}"]})};Tu(pc,qu).catch(i=>console.error(i));
