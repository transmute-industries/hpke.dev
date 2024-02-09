"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[745],{9309:function(e,t,n){var r=n(891);t.Z=void 0;var o=r(n(9438)),i=n(3827);t.Z=(0,o.default)((0,i.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close")},1066:function(e,t,n){var r=n(891);t.Z=void 0;var o=r(n(9438)),i=n(3827);t.Z=(0,o.default)((0,i.jsx)("path",{d:"M21 21.78 4.22 5 3 6.22l2.04 2.04C4.42 8.6 4 9.25 4 10v10c0 1.1.9 2 2 2h12c.23 0 .45-.05.66-.12L19.78 23zM8.9 6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H9.66L20 18.34V10c0-1.1-.9-2-2-2h-1V6c0-2.76-2.24-5-5-5-2.56 0-4.64 1.93-4.94 4.4L8.9 7.24z"}),"NoEncryption")},5884:function(e,t,n){n.d(t,{Z:function(){return b}});var r=n(444),o=n(2110),i=n(4090),a=n(3167),c=n(6860),l=n(8836),u=n(3043),s=n(4198),f=n(3827),p=(0,s.Z)((0,f.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person"),d=n(5749);let v=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],m=e=>{let{classes:t,variant:n,colorDefault:r}=e;return(0,c.Z)({root:["root",n,r&&"colorDefault"],img:["img"],fallback:["fallback"]},d.$,t)},g=(0,l.ZP)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,t[n.variant],n.colorDefault&&t.colorDefault]}})(e=>{let{theme:t}=e;return{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:t.typography.fontFamily,fontSize:t.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none",variants:[{props:{variant:"rounded"},style:{borderRadius:(t.vars||t).shape.borderRadius}},{props:{variant:"square"},style:{borderRadius:0}},{props:{colorDefault:!0},style:(0,o.Z)({color:(t.vars||t).palette.background.default},t.vars?{backgroundColor:t.vars.palette.Avatar.defaultBg}:(0,o.Z)({backgroundColor:t.palette.grey[400]},t.applyStyles("dark",{backgroundColor:t.palette.grey[600]})))}]}}),y=(0,l.ZP)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(e,t)=>t.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),h=(0,l.ZP)(p,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(e,t)=>t.fallback})({width:"75%",height:"75%"});var b=i.forwardRef(function(e,t){let n=(0,u.Z)({props:e,name:"MuiAvatar"}),{alt:c,children:l,className:s,component:p="div",imgProps:d,sizes:b,src:w,srcSet:x,variant:E="circular"}=n,D=(0,r.Z)(n,v),O=null,k=function(e){let{crossOrigin:t,referrerPolicy:n,src:r,srcSet:o}=e,[a,c]=i.useState(!1);return i.useEffect(()=>{if(!r&&!o)return;c(!1);let e=!0,i=new Image;return i.onload=()=>{e&&c("loaded")},i.onerror=()=>{e&&c("error")},i.crossOrigin=t,i.referrerPolicy=n,i.src=r,o&&(i.srcset=o),()=>{e=!1}},[t,n,r,o]),a}((0,o.Z)({},d,{src:w,srcSet:x})),j=w||x,A=j&&"error"!==k,S=(0,o.Z)({},n,{colorDefault:!A,component:p,variant:E}),P=m(S);return O=A?(0,f.jsx)(y,(0,o.Z)({alt:c,srcSet:x,src:w,sizes:b,ownerState:S,className:P.img},d)):l||0===l?l:j&&c?c[0]:(0,f.jsx)(h,{ownerState:S,className:P.fallback}),(0,f.jsx)(g,(0,o.Z)({as:p,ownerState:S,className:(0,a.Z)(P.root,s),ref:t},D,{children:O}))})},5749:function(e,t,n){n.d(t,{$:function(){return i}});var r=n(8399),o=n(7520);function i(e){return(0,o.ZP)("MuiAvatar",e)}let a=(0,r.Z)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);t.Z=a},4962:function(e,t,n){n.d(t,{Z:function(){return U}});var r=n(444),o=n(2110),i=n(4090),a=n(6860),c=n(5197),l=n(4255),u=n(7606),s=n(6319),f=n(3827);function p(e){return e.substring(2).toLowerCase()}function d(e){let{children:t,disableReactTree:n=!1,mouseEvent:r="onClick",onClickAway:o,touchEvent:a="onTouchEnd"}=e,c=i.useRef(!1),d=i.useRef(null),v=i.useRef(!1),m=i.useRef(!1);i.useEffect(()=>(setTimeout(()=>{v.current=!0},0),()=>{v.current=!1}),[]);let g=(0,l.Z)(t.ref,d),y=(0,u.Z)(e=>{let t=m.current;m.current=!1;let r=(0,s.Z)(d.current);if(v.current&&d.current&&(!("clientX"in e)||!(r.documentElement.clientWidth<e.clientX)&&!(r.documentElement.clientHeight<e.clientY))){if(c.current){c.current=!1;return}(e.composedPath?e.composedPath().indexOf(d.current)>-1:!r.documentElement.contains(e.target)||d.current.contains(e.target))||!n&&t||o(e)}}),h=e=>n=>{m.current=!0;let r=t.props[e];r&&r(n)},b={ref:g};return!1!==a&&(b[a]=h(a)),i.useEffect(()=>{if(!1!==a){let e=p(a),t=(0,s.Z)(d.current),n=()=>{c.current=!0};return t.addEventListener(e,y),t.addEventListener("touchmove",n),()=>{t.removeEventListener(e,y),t.removeEventListener("touchmove",n)}}},[y,a]),!1!==r&&(b[r]=h(r)),i.useEffect(()=>{if(!1!==r){let e=p(r),t=(0,s.Z)(d.current);return t.addEventListener(e,y),()=>{t.removeEventListener(e,y)}}},[y,r]),(0,f.jsx)(i.Fragment,{children:i.cloneElement(t,b)})}var v=n(8056),m=n(8508),g=n(8836),y=n(368),h=n(3043),b=n(5135),w=n(1184),x=n(5985),E=n(3758);let D=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function O(e){return"scale(".concat(e,", ").concat(e**2,")")}let k={entering:{opacity:1,transform:O(1)},entered:{opacity:1,transform:"none"}},j="undefined"!=typeof navigator&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),A=i.forwardRef(function(e,t){let{addEndListener:n,appear:a=!0,children:c,easing:l,in:u,onEnter:s,onEntered:p,onEntering:d,onExit:m,onExited:g,onExiting:h,style:b,timeout:A="auto",TransitionComponent:S=w.ZP}=e,P=(0,r.Z)(e,D),C=(0,v.Z)(),Z=i.useRef(),F=(0,y.Z)(),R=i.useRef(null),z=(0,E.Z)(R,c.ref,t),T=e=>t=>{if(e){let n=R.current;void 0===t?e(n):e(n,t)}},M=T(d),L=T((e,t)=>{let n;(0,x.n)(e);let{duration:r,delay:o,easing:i}=(0,x.C)({style:b,timeout:A,easing:l},{mode:"enter"});"auto"===A?(n=F.transitions.getAutoHeightDuration(e.clientHeight),Z.current=n):n=r,e.style.transition=[F.transitions.create("opacity",{duration:n,delay:o}),F.transitions.create("transform",{duration:j?n:.666*n,delay:o,easing:i})].join(","),s&&s(e,t)}),I=T(p),_=T(h),B=T(e=>{let t;let{duration:n,delay:r,easing:o}=(0,x.C)({style:b,timeout:A,easing:l},{mode:"exit"});"auto"===A?(t=F.transitions.getAutoHeightDuration(e.clientHeight),Z.current=t):t=n,e.style.transition=[F.transitions.create("opacity",{duration:t,delay:r}),F.transitions.create("transform",{duration:j?t:.666*t,delay:j?r:r||.333*t,easing:o})].join(","),e.style.opacity=0,e.style.transform=O(.75),m&&m(e)}),N=T(g);return(0,f.jsx)(S,(0,o.Z)({appear:a,in:u,nodeRef:R,onEnter:L,onEntered:I,onEntering:M,onExit:B,onExited:N,onExiting:_,addEndListener:e=>{"auto"===A&&C.start(Z.current||0,e),n&&n(R.current,e)},timeout:"auto"===A?null:A},P,{children:(e,t)=>i.cloneElement(c,(0,o.Z)({style:(0,o.Z)({opacity:0,transform:O(.75),visibility:"exited"!==e||u?void 0:"hidden"},k[e],b,c.props.style),ref:z},t))}))});A.muiSupportAuto=!0;var S=n(3167),P=n(1696),C=n(7630),Z=n(8399),F=n(7520);function R(e){return(0,F.ZP)("MuiSnackbarContent",e)}(0,Z.Z)("MuiSnackbarContent",["root","message","action"]);let z=["action","className","message","role"],T=e=>{let{classes:t}=e;return(0,a.Z)({root:["root"],action:["action"],message:["message"]},R,t)},M=(0,g.ZP)(C.Z,{name:"MuiSnackbarContent",slot:"Root",overridesResolver:(e,t)=>t.root})(e=>{let{theme:t}=e,n="light"===t.palette.mode?.8:.98,r=(0,P._4)(t.palette.background.default,n);return(0,o.Z)({},t.typography.body2,{color:t.vars?t.vars.palette.SnackbarContent.color:t.palette.getContrastText(r),backgroundColor:t.vars?t.vars.palette.SnackbarContent.bg:r,display:"flex",alignItems:"center",flexWrap:"wrap",padding:"6px 16px",borderRadius:(t.vars||t).shape.borderRadius,flexGrow:1,[t.breakpoints.up("sm")]:{flexGrow:"initial",minWidth:288}})}),L=(0,g.ZP)("div",{name:"MuiSnackbarContent",slot:"Message",overridesResolver:(e,t)=>t.message})({padding:"8px 0"}),I=(0,g.ZP)("div",{name:"MuiSnackbarContent",slot:"Action",overridesResolver:(e,t)=>t.action})({display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}),_=i.forwardRef(function(e,t){let n=(0,h.Z)({props:e,name:"MuiSnackbarContent"}),{action:i,className:a,message:c,role:l="alert"}=n,u=(0,r.Z)(n,z),s=T(n);return(0,f.jsxs)(M,(0,o.Z)({role:l,square:!0,elevation:6,className:(0,S.Z)(s.root,a),ownerState:n,ref:t},u,{children:[(0,f.jsx)(L,{className:s.message,ownerState:n,children:c}),i?(0,f.jsx)(I,{className:s.action,ownerState:n,children:i}):null]}))});function B(e){return(0,F.ZP)("MuiSnackbar",e)}(0,Z.Z)("MuiSnackbar",["root","anchorOriginTopCenter","anchorOriginBottomCenter","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft"]);let N=["onEnter","onExited"],H=["action","anchorOrigin","autoHideDuration","children","className","ClickAwayListenerProps","ContentProps","disableWindowBlurListener","message","onBlur","onClose","onFocus","onMouseEnter","onMouseLeave","open","resumeHideDuration","TransitionComponent","transitionDuration","TransitionProps"],K=e=>{let{classes:t,anchorOrigin:n}=e,r={root:["root","anchorOrigin".concat((0,b.Z)(n.vertical)).concat((0,b.Z)(n.horizontal))]};return(0,a.Z)(r,B,t)},W=(0,g.ZP)("div",{name:"MuiSnackbar",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,t["anchorOrigin".concat((0,b.Z)(n.anchorOrigin.vertical)).concat((0,b.Z)(n.anchorOrigin.horizontal))]]}})(e=>{let{theme:t,ownerState:n}=e;return(0,o.Z)({zIndex:(t.vars||t).zIndex.snackbar,position:"fixed",display:"flex",left:8,right:8,justifyContent:"center",alignItems:"center"},"top"===n.anchorOrigin.vertical?{top:8}:{bottom:8},"left"===n.anchorOrigin.horizontal&&{justifyContent:"flex-start"},"right"===n.anchorOrigin.horizontal&&{justifyContent:"flex-end"},{[t.breakpoints.up("sm")]:(0,o.Z)({},"top"===n.anchorOrigin.vertical?{top:24}:{bottom:24},"center"===n.anchorOrigin.horizontal&&{left:"50%",right:"auto",transform:"translateX(-50%)"},"left"===n.anchorOrigin.horizontal&&{left:24,right:"auto"},"right"===n.anchorOrigin.horizontal&&{right:24,left:"auto"})})});var U=i.forwardRef(function(e,t){let n=(0,h.Z)({props:e,name:"MuiSnackbar"}),a=(0,y.Z)(),l={enter:a.transitions.duration.enteringScreen,exit:a.transitions.duration.leavingScreen},{action:s,anchorOrigin:{vertical:p,horizontal:g}={vertical:"bottom",horizontal:"left"},autoHideDuration:b=null,children:w,className:x,ClickAwayListenerProps:E,ContentProps:D,disableWindowBlurListener:O=!1,message:k,open:j,TransitionComponent:S=A,transitionDuration:P=l,TransitionProps:{onEnter:C,onExited:Z}={}}=n,F=(0,r.Z)(n.TransitionProps,N),R=(0,r.Z)(n,H),z=(0,o.Z)({},n,{anchorOrigin:{vertical:p,horizontal:g},autoHideDuration:b,disableWindowBlurListener:O,TransitionComponent:S,transitionDuration:P}),T=K(z),{getRootProps:M,onClickAway:L}=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{autoHideDuration:t=null,disableWindowBlurListener:n=!1,onClose:r,open:a,resumeHideDuration:c}=e,l=(0,v.Z)();i.useEffect(()=>{if(a)return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)};function e(e){e.defaultPrevented||"Escape"!==e.key&&"Esc"!==e.key||null==r||r(e,"escapeKeyDown")}},[a,r]);let s=(0,u.Z)((e,t)=>{null==r||r(e,t)}),f=(0,u.Z)(e=>{r&&null!=e&&l.start(e,()=>{s(null,"timeout")})});i.useEffect(()=>(a&&f(t),l.clear),[a,t,f,l]);let p=l.clear,d=i.useCallback(()=>{null!=t&&f(null!=c?c:.5*t)},[t,c,f]),g=e=>t=>{let n=e.onBlur;null==n||n(t),d()},y=e=>t=>{let n=e.onFocus;null==n||n(t),p()},h=e=>t=>{let n=e.onMouseEnter;null==n||n(t),p()},b=e=>t=>{let n=e.onMouseLeave;null==n||n(t),d()};return i.useEffect(()=>{if(!n&&a)return window.addEventListener("focus",d),window.addEventListener("blur",p),()=>{window.removeEventListener("focus",d),window.removeEventListener("blur",p)}},[n,a,d,p]),{getRootProps:function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=(0,o.Z)({},(0,m._)(e),(0,m._)(t));return(0,o.Z)({role:"presentation"},t,n,{onBlur:g(n),onFocus:y(n),onMouseEnter:h(n),onMouseLeave:b(n)})},onClickAway:e=>{null==r||r(e,"clickaway")}}}((0,o.Z)({},z)),[I,B]=i.useState(!0),U=(0,c.y)({elementType:W,getSlotProps:M,externalForwardedProps:R,ownerState:z,additionalProps:{ref:t},className:[T.root,x]});return!j&&I?null:(0,f.jsx)(d,(0,o.Z)({onClickAway:L},E,{children:(0,f.jsx)(W,(0,o.Z)({},U,{children:(0,f.jsx)(S,(0,o.Z)({appear:!0,in:j,timeout:P,direction:"top"===p?"down":"up",onEnter:(e,t)=>{B(!1),C&&C(e,t)},onExited:e=>{B(!0),Z&&Z(e)}},F,{children:w||(0,f.jsx)(_,(0,o.Z)({message:k,action:s},D))}))}))}))})},5057:function(e,t){t.Z=function(e,t){if(e&&t){var n=Array.isArray(t)?t:t.split(","),r=e.name||"",o=(e.type||"").toLowerCase(),i=o.replace(/\/.*$/,"");return n.some(function(e){var t=e.trim().toLowerCase();return"."===t.charAt(0)?r.toLowerCase().endsWith(t):t.endsWith("/*")?i===t.replace(/\/.*$/,""):o===t})}return!0}},8314:function(e,t,n){var r=n(1811);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,i,a){if(a!==r){var c=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return n.PropTypes=n,n}},4404:function(e,t,n){e.exports=n(8314)()},1811:function(e){e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},7453:function(e,t,n){n.d(t,{uI:function(){return et}});var r=n(4090),o=n(4404),i=n.n(o);function a(e,t,n,r){return new(n||(n=Promise))(function(o,i){function a(e){try{l(r.next(e))}catch(e){i(e)}}function c(e){try{l(r.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?o(e.value):((t=e.value)instanceof n?t:new n(function(e){e(t)})).then(a,c)}l((r=r.apply(e,t||[])).next())})}function c(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(c){return function(l){return function(c){if(n)throw TypeError("Generator is already executing.");for(;i&&(i=0,c[0]&&(a=0)),a;)try{if(n=1,r&&(o=2&c[0]?r.return:c[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,c[1])).done)return o;switch(r=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return a.label++,{value:c[1],done:!1};case 5:a.label++,r=c[1],c=[0];continue;case 7:c=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===c[0]||2===c[0])){a=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){a.label=c[1];break}if(6===c[0]&&a.label<o[1]){a.label=o[1],o=c;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(c);break}o[2]&&a.ops.pop(),a.trys.pop();continue}c=t.call(e,a)}catch(e){c=[6,e],r=0}finally{n=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,l])}}}function l(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,i=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)a.push(r.value)}catch(e){o={error:e}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return a}function u(e,t,n){if(n||2==arguments.length)for(var r,o=0,i=t.length;o<i;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))}"function"==typeof SuppressedError&&SuppressedError;var s=new Map([["aac","audio/aac"],["abw","application/x-abiword"],["arc","application/x-freearc"],["avif","image/avif"],["avi","video/x-msvideo"],["azw","application/vnd.amazon.ebook"],["bin","application/octet-stream"],["bmp","image/bmp"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["cda","application/x-cdf"],["csh","application/x-csh"],["css","text/css"],["csv","text/csv"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["eot","application/vnd.ms-fontobject"],["epub","application/epub+zip"],["gz","application/gzip"],["gif","image/gif"],["heic","image/heic"],["heif","image/heif"],["htm","text/html"],["html","text/html"],["ico","image/vnd.microsoft.icon"],["ics","text/calendar"],["jar","application/java-archive"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["js","text/javascript"],["json","application/json"],["jsonld","application/ld+json"],["mid","audio/midi"],["midi","audio/midi"],["mjs","text/javascript"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mpeg","video/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["opus","audio/opus"],["otf","font/otf"],["png","image/png"],["pdf","application/pdf"],["php","application/x-httpd-php"],["ppt","application/vnd.ms-powerpoint"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["rar","application/vnd.rar"],["rtf","application/rtf"],["sh","application/x-sh"],["svg","image/svg+xml"],["swf","application/x-shockwave-flash"],["tar","application/x-tar"],["tif","image/tiff"],["tiff","image/tiff"],["ts","video/mp2t"],["ttf","font/ttf"],["txt","text/plain"],["vsd","application/vnd.visio"],["wav","audio/wav"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["woff","font/woff"],["woff2","font/woff2"],["xhtml","application/xhtml+xml"],["xls","application/vnd.ms-excel"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xml","application/xml"],["xul","application/vnd.mozilla.xul+xml"],["zip","application/zip"],["7z","application/x-7z-compressed"],["mkv","video/x-matroska"],["mov","video/quicktime"],["msg","application/vnd.ms-outlook"]]);function f(e,t){var n=function(e){var t=e.name;if(t&&-1!==t.lastIndexOf(".")&&!e.type){var n=t.split(".").pop().toLowerCase(),r=s.get(n);r&&Object.defineProperty(e,"type",{value:r,writable:!1,configurable:!1,enumerable:!0})}return e}(e);if("string"!=typeof n.path){var r=e.webkitRelativePath;Object.defineProperty(n,"path",{value:"string"==typeof t?t:"string"==typeof r&&r.length>0?r:e.name,writable:!1,configurable:!1,enumerable:!0})}return n}var p=[".DS_Store","Thumbs.db"];function d(e){return"object"==typeof e&&null!==e}function v(e){return e.filter(function(e){return -1===p.indexOf(e.name)})}function m(e){if(null===e)return[];for(var t=[],n=0;n<e.length;n++){var r=e[n];t.push(r)}return t}function g(e){if("function"!=typeof e.webkitGetAsEntry)return y(e);var t=e.webkitGetAsEntry();return t&&t.isDirectory?b(t):y(e)}function y(e){var t=e.getAsFile();return t?Promise.resolve(f(t)):Promise.reject("".concat(e," is not a File"))}function h(e){return a(this,void 0,void 0,function(){return c(this,function(t){return[2,e.isDirectory?b(e):function(e){return a(this,void 0,void 0,function(){return c(this,function(t){return[2,new Promise(function(t,n){e.file(function(n){t(f(n,e.fullPath))},function(e){n(e)})})]})})}(e)]})})}function b(e){var t=e.createReader();return new Promise(function(e,n){var r=[];!function o(){var i=this;t.readEntries(function(t){return a(i,void 0,void 0,function(){var i;return c(this,function(a){switch(a.label){case 0:if(t.length)return[3,5];a.label=1;case 1:return a.trys.push([1,3,,4]),[4,Promise.all(r)];case 2:return e(a.sent()),[3,4];case 3:return n(a.sent()),[3,4];case 4:return[3,6];case 5:i=Promise.all(t.map(h)),r.push(i),o(),a.label=6;case 6:return[2]}})})},function(e){n(e)})}()})}var w=n(5057);function x(e){return function(e){if(Array.isArray(e))return A(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||j(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(Object(n),!0).forEach(function(t){O(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function k(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n,r,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var i=[],a=!0,c=!1;try{for(o=o.call(e);!(a=(n=o.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(e){c=!0,r=e}finally{try{a||null==o.return||o.return()}finally{if(c)throw r}}return i}}(e,t)||j(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function j(e,t){if(e){if("string"==typeof e)return A(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return A(e,t)}}function A(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var S=function(e){var t=Array.isArray(e=Array.isArray(e)&&1===e.length?e[0]:e)?"one of ".concat(e.join(", ")):e;return{code:"file-invalid-type",message:"File type must be ".concat(t)}},P=function(e){return{code:"file-too-large",message:"File is larger than ".concat(e," ").concat(1===e?"byte":"bytes")}},C=function(e){return{code:"file-too-small",message:"File is smaller than ".concat(e," ").concat(1===e?"byte":"bytes")}},Z={code:"too-many-files",message:"Too many files"};function F(e,t){var n="application/x-moz-file"===e.type||(0,w.Z)(e,t);return[n,n?null:S(t)]}function R(e,t,n){if(z(e.size)){if(z(t)&&z(n)){if(e.size>n)return[!1,P(n)];if(e.size<t)return[!1,C(t)]}else if(z(t)&&e.size<t)return[!1,C(t)];else if(z(n)&&e.size>n)return[!1,P(n)]}return[!0,null]}function z(e){return null!=e}function T(e){return"function"==typeof e.isPropagationStopped?e.isPropagationStopped():void 0!==e.cancelBubble&&e.cancelBubble}function M(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,function(e){return"Files"===e||"application/x-moz-file"===e}):!!e.target&&!!e.target.files}function L(e){e.preventDefault()}function I(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){for(var n=arguments.length,r=Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return t.some(function(t){return!T(e)&&t&&t.apply(void 0,[e].concat(r)),T(e)})}}function _(e){return"audio/*"===e||"video/*"===e||"image/*"===e||"text/*"===e||/\w+\/[-+.\w]+/g.test(e)}function B(e){return/^.*\.[\w]+$/.test(e)}var N=["children"],H=["open"],K=["refKey","role","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"],W=["refKey","onChange","onClick"];function U(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n,r,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var i=[],a=!0,c=!1;try{for(o=o.call(e);!(a=(n=o.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(e){c=!0,r=e}finally{try{a||null==o.return||o.return()}finally{if(c)throw r}}return i}}(e,t)||$(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function $(e,t){if(e){if("string"==typeof e)return q(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return q(e,t)}}function q(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function G(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function V(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?G(Object(n),!0).forEach(function(t){X(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):G(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function X(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Y(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var J=(0,r.forwardRef)(function(e,t){var n=e.children,o=et(Y(e,N)),i=o.open,a=Y(o,H);return(0,r.useImperativeHandle)(t,function(){return{open:i}},[i]),r.createElement(r.Fragment,null,n(V(V({},a),{},{open:i})))});J.displayName="Dropzone";var Q={disabled:!1,getFilesFromEvent:function(e){return a(this,void 0,void 0,function(){return c(this,function(t){return d(e)&&d(e.dataTransfer)?[2,function(e,t){return a(this,void 0,void 0,function(){var n;return c(this,function(r){switch(r.label){case 0:if(!e.items)return[3,2];if(n=m(e.items).filter(function(e){return"file"===e.kind}),"drop"!==t)return[2,n];return[4,Promise.all(n.map(g))];case 1:return[2,v(function e(t){return t.reduce(function(t,n){return u(u([],l(t),!1),l(Array.isArray(n)?e(n):[n]),!1)},[])}(r.sent()))];case 2:return[2,v(m(e.files).map(function(e){return f(e)}))]}})})}(e.dataTransfer,e.type)]:d(e)&&d(e.target)?[2,m(e.target.files).map(function(e){return f(e)})]:Array.isArray(e)&&e.every(function(e){return"getFile"in e&&"function"==typeof e.getFile})?[2,function(e){return a(this,void 0,void 0,function(){return c(this,function(t){switch(t.label){case 0:return[4,Promise.all(e.map(function(e){return e.getFile()}))];case 1:return[2,t.sent().map(function(e){return f(e)})]}})})}(e)]:[2,[]]})})},maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null,useFsAccessApi:!0,autoFocus:!1};J.defaultProps=Q,J.propTypes={children:i().func,accept:i().objectOf(i().arrayOf(i().string)),multiple:i().bool,preventDropOnDocument:i().bool,noClick:i().bool,noKeyboard:i().bool,noDrag:i().bool,noDragEventsBubbling:i().bool,minSize:i().number,maxSize:i().number,maxFiles:i().number,disabled:i().bool,getFilesFromEvent:i().func,onFileDialogCancel:i().func,onFileDialogOpen:i().func,useFsAccessApi:i().bool,autoFocus:i().bool,onDragEnter:i().func,onDragLeave:i().func,onDragOver:i().func,onDrop:i().func,onDropAccepted:i().func,onDropRejected:i().func,onError:i().func,validator:i().func};var ee={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,acceptedFiles:[],fileRejections:[]};function et(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=V(V({},Q),e),n=t.accept,o=t.disabled,i=t.getFilesFromEvent,a=t.maxSize,c=t.minSize,l=t.multiple,u=t.maxFiles,s=t.onDragEnter,f=t.onDragLeave,p=t.onDragOver,d=t.onDrop,v=t.onDropAccepted,m=t.onDropRejected,g=t.onFileDialogCancel,y=t.onFileDialogOpen,h=t.useFsAccessApi,b=t.autoFocus,w=t.preventDropOnDocument,E=t.noClick,j=t.noKeyboard,A=t.noDrag,S=t.noDragEventsBubbling,P=t.onError,C=t.validator,N=(0,r.useMemo)(function(){return function(e){if(z(e))return Object.entries(e).reduce(function(e,t){var n=k(t,2),r=n[0],o=n[1];return[].concat(x(e),[r],x(o))},[]).filter(function(e){return _(e)||B(e)}).join(",")}(n)},[n]),H=(0,r.useMemo)(function(){return z(n)?[{description:"Files",accept:Object.entries(n).filter(function(e){var t=k(e,2),n=t[0],r=t[1],o=!0;return _(n)||(console.warn('Skipped "'.concat(n,'" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')),o=!1),Array.isArray(r)&&r.every(B)||(console.warn('Skipped "'.concat(n,'" because an invalid file extension was provided.')),o=!1),o}).reduce(function(e,t){var n=k(t,2),r=n[0],o=n[1];return D(D({},e),{},O({},r,o))},{})}]:n},[n]),G=(0,r.useMemo)(function(){return"function"==typeof y?y:er},[y]),J=(0,r.useMemo)(function(){return"function"==typeof g?g:er},[g]),et=(0,r.useRef)(null),eo=(0,r.useRef)(null),ei=U((0,r.useReducer)(en,ee),2),ea=ei[0],ec=ei[1],el=ea.isFocused,eu=ea.isFileDialogActive,es=(0,r.useRef)(window.isSecureContext&&h&&"showOpenFilePicker"in window),ef=function(){!es.current&&eu&&setTimeout(function(){eo.current&&!eo.current.files.length&&(ec({type:"closeDialog"}),J())},300)};(0,r.useEffect)(function(){return window.addEventListener("focus",ef,!1),function(){window.removeEventListener("focus",ef,!1)}},[eo,eu,J,es]);var ep=(0,r.useRef)([]),ed=function(e){et.current&&et.current.contains(e.target)||(e.preventDefault(),ep.current=[])};(0,r.useEffect)(function(){return w&&(document.addEventListener("dragover",L,!1),document.addEventListener("drop",ed,!1)),function(){w&&(document.removeEventListener("dragover",L),document.removeEventListener("drop",ed))}},[et,w]),(0,r.useEffect)(function(){return!o&&b&&et.current&&et.current.focus(),function(){}},[et,b,o]);var ev=(0,r.useCallback)(function(e){P?P(e):console.error(e)},[P]),em=(0,r.useCallback)(function(e){var t;e.preventDefault(),e.persist(),eS(e),ep.current=[].concat(function(e){if(Array.isArray(e))return q(e)}(t=ep.current)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||$(t)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),[e.target]),M(e)&&Promise.resolve(i(e)).then(function(t){if(!T(e)||S){var n,r,o,i,f,p,d,v,m=t.length,g=m>0&&(r=(n={files:t,accept:N,minSize:c,maxSize:a,multiple:l,maxFiles:u,validator:C}).files,o=n.accept,i=n.minSize,f=n.maxSize,p=n.multiple,d=n.maxFiles,v=n.validator,(!!p||!(r.length>1))&&(!p||!(d>=1)||!(r.length>d))&&r.every(function(e){var t=k(F(e,o),1)[0],n=k(R(e,i,f),1)[0],r=v?v(e):null;return t&&n&&!r}));ec({isDragAccept:g,isDragReject:m>0&&!g,isDragActive:!0,type:"setDraggedFiles"}),s&&s(e)}}).catch(function(e){return ev(e)})},[i,s,ev,S,N,c,a,l,u,C]),eg=(0,r.useCallback)(function(e){e.preventDefault(),e.persist(),eS(e);var t=M(e);if(t&&e.dataTransfer)try{e.dataTransfer.dropEffect="copy"}catch(e){}return t&&p&&p(e),!1},[p,S]),ey=(0,r.useCallback)(function(e){e.preventDefault(),e.persist(),eS(e);var t=ep.current.filter(function(e){return et.current&&et.current.contains(e)}),n=t.indexOf(e.target);-1!==n&&t.splice(n,1),ep.current=t,!(t.length>0)&&(ec({type:"setDraggedFiles",isDragActive:!1,isDragAccept:!1,isDragReject:!1}),M(e)&&f&&f(e))},[et,f,S]),eh=(0,r.useCallback)(function(e,t){var n=[],r=[];e.forEach(function(e){var t=U(F(e,N),2),o=t[0],i=t[1],l=U(R(e,c,a),2),u=l[0],s=l[1],f=C?C(e):null;if(o&&u&&!f)n.push(e);else{var p=[i,s];f&&(p=p.concat(f)),r.push({file:e,errors:p.filter(function(e){return e})})}}),(!l&&n.length>1||l&&u>=1&&n.length>u)&&(n.forEach(function(e){r.push({file:e,errors:[Z]})}),n.splice(0)),ec({acceptedFiles:n,fileRejections:r,type:"setFiles"}),d&&d(n,r,t),r.length>0&&m&&m(r,t),n.length>0&&v&&v(n,t)},[ec,l,N,c,a,u,d,v,m,C]),eb=(0,r.useCallback)(function(e){e.preventDefault(),e.persist(),eS(e),ep.current=[],M(e)&&Promise.resolve(i(e)).then(function(t){(!T(e)||S)&&eh(t,e)}).catch(function(e){return ev(e)}),ec({type:"reset"})},[i,eh,ev,S]),ew=(0,r.useCallback)(function(){if(es.current){ec({type:"openDialog"}),G(),window.showOpenFilePicker({multiple:l,types:H}).then(function(e){return i(e)}).then(function(e){eh(e,null),ec({type:"closeDialog"})}).catch(function(e){e instanceof DOMException&&("AbortError"===e.name||e.code===e.ABORT_ERR)?(J(e),ec({type:"closeDialog"})):e instanceof DOMException&&("SecurityError"===e.name||e.code===e.SECURITY_ERR)?(es.current=!1,eo.current?(eo.current.value=null,eo.current.click()):ev(Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))):ev(e)});return}eo.current&&(ec({type:"openDialog"}),G(),eo.current.value=null,eo.current.click())},[ec,G,J,h,eh,ev,H,l]),ex=(0,r.useCallback)(function(e){et.current&&et.current.isEqualNode(e.target)&&(" "===e.key||"Enter"===e.key||32===e.keyCode||13===e.keyCode)&&(e.preventDefault(),ew())},[et,ew]),eE=(0,r.useCallback)(function(){ec({type:"focus"})},[]),eD=(0,r.useCallback)(function(){ec({type:"blur"})},[]),eO=(0,r.useCallback)(function(){E||(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.navigator.userAgent;return -1!==e.indexOf("MSIE")||-1!==e.indexOf("Trident/")||-1!==e.indexOf("Edge/")}()?setTimeout(ew,0):ew())},[E,ew]),ek=function(e){return o?null:e},ej=function(e){return j?null:ek(e)},eA=function(e){return A?null:ek(e)},eS=function(e){S&&e.stopPropagation()},eP=(0,r.useMemo)(function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.refKey,n=e.role,r=e.onKeyDown,i=e.onFocus,a=e.onBlur,c=e.onClick,l=e.onDragEnter,u=e.onDragOver,s=e.onDragLeave,f=e.onDrop,p=Y(e,K);return V(V(X({onKeyDown:ej(I(r,ex)),onFocus:ej(I(i,eE)),onBlur:ej(I(a,eD)),onClick:ek(I(c,eO)),onDragEnter:eA(I(l,em)),onDragOver:eA(I(u,eg)),onDragLeave:eA(I(s,ey)),onDrop:eA(I(f,eb)),role:"string"==typeof n&&""!==n?n:"presentation"},void 0===t?"ref":t,et),o||j?{}:{tabIndex:0}),p)}},[et,ex,eE,eD,eO,em,eg,ey,eb,j,A,o]),eC=(0,r.useCallback)(function(e){e.stopPropagation()},[]),eZ=(0,r.useMemo)(function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.refKey,n=e.onChange,r=e.onClick,o=Y(e,W);return V(V({},X({accept:N,multiple:l,type:"file",style:{display:"none"},onChange:ek(I(n,eb)),onClick:ek(I(r,eC)),tabIndex:-1},void 0===t?"ref":t,eo)),o)}},[eo,n,l,eb,o]);return V(V({},ea),{},{isFocused:el&&!o,getRootProps:eP,getInputProps:eZ,rootRef:et,inputRef:eo,open:ek(ew)})}function en(e,t){switch(t.type){case"focus":return V(V({},e),{},{isFocused:!0});case"blur":return V(V({},e),{},{isFocused:!1});case"openDialog":return V(V({},ee),{},{isFileDialogActive:!0});case"closeDialog":return V(V({},e),{},{isFileDialogActive:!1});case"setDraggedFiles":return V(V({},e),{},{isDragActive:t.isDragActive,isDragAccept:t.isDragAccept,isDragReject:t.isDragReject});case"setFiles":return V(V({},e),{},{acceptedFiles:t.acceptedFiles,fileRejections:t.fileRejections});case"reset":return V({},ee);default:return e}}function er(){}}}]);