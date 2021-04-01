(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[155],{5318:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.default=e.exports,e.exports.__esModule=!0},862:function(e,n,t){var r=t(8).default;function i(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}e.exports=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!==typeof e)return{default:e};var n=i();if(n&&n.has(e))return n.get(e);var t={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var s=o?Object.getOwnPropertyDescriptor(e,a):null;s&&(s.get||s.set)?Object.defineProperty(t,a,s):t[a]=e[a]}return t.default=e,n&&n.set(e,t),t},e.exports.default=e.exports,e.exports.__esModule=!0},8:function(e){function n(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?(e.exports=n=function(e){return typeof e},e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.default=e.exports,e.exports.__esModule=!0),n(t)}e.exports=n,e.exports.default=e.exports,e.exports.__esModule=!0},8463:function(e,n,t){"use strict";var r=t(2122),i=t(2949),o=t(7294),a=(t(5697),t(6010)),s=t(9895),u=t(4670),c=o.forwardRef((function(e,n){var t=e.classes,u=e.className,c=e.raised,d=void 0!==c&&c,l=(0,i.Z)(e,["classes","className","raised"]);return o.createElement(s.Z,(0,r.Z)({className:(0,a.Z)(t.root,u),elevation:d?8:1,ref:n},l))}));n.Z=(0,u.Z)({root:{overflow:"hidden"}},{name:"MuiCard"})(c)},7446:function(e,n,t){"use strict";var r=t(2122),i=t(2949),o=t(7294),a=(t(5697),t(6010)),s=t(4670),u=["video","audio","picture","iframe","img"],c=o.forwardRef((function(e,n){var t=e.children,s=e.classes,c=e.className,d=e.component,l=void 0===d?"div":d,f=e.image,p=e.src,m=e.style,g=(0,i.Z)(e,["children","classes","className","component","image","src","style"]),v=-1!==u.indexOf(l),x=!v&&f?(0,r.Z)({backgroundImage:'url("'.concat(f,'")')},m):m;return o.createElement(l,(0,r.Z)({className:(0,a.Z)(s.root,c,v&&s.media,-1!=="picture img".indexOf(l)&&s.img),ref:n,style:x,src:v?f||p:void 0},g),t)}));n.Z=(0,s.Z)({root:{display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},media:{width:"100%"},img:{objectFit:"cover"}},{name:"MuiCardMedia"})(c)},9895:function(e,n,t){"use strict";var r=t(2949),i=t(2122),o=t(7294),a=(t(5697),t(6010)),s=t(4670),u=o.forwardRef((function(e,n){var t=e.classes,s=e.className,u=e.component,c=void 0===u?"div":u,d=e.square,l=void 0!==d&&d,f=e.elevation,p=void 0===f?1:f,m=e.variant,g=void 0===m?"elevation":m,v=(0,r.Z)(e,["classes","className","component","square","elevation","variant"]);return o.createElement(c,(0,i.Z)({className:(0,a.Z)(t.root,s,"outlined"===g?t.outlined:t["elevation".concat(p)],!l&&t.rounded),ref:n},v))}));n.Z=(0,s.Z)((function(e){var n={};return e.shadows.forEach((function(e,t){n["elevation".concat(t)]={boxShadow:e}})),(0,i.Z)({root:{backgroundColor:e.palette.background.paper,color:e.palette.text.primary,transition:e.transitions.create("box-shadow")},rounded:{borderRadius:e.shape.borderRadius},outlined:{border:"1px solid ".concat(e.palette.divider)}},n)}),{name:"MuiPaper"})(u)},545:function(e,n,t){"use strict";t.r(n),t.d(n,{capitalize:function(){return r.Z},createChainedFunction:function(){return i},createSvgIcon:function(){return o.Z},debounce:function(){return a},deprecatedPropType:function(){return s},isMuiElement:function(){return c},ownerDocument:function(){return d},ownerWindow:function(){return l},requirePropFactory:function(){return f},setRef:function(){return p.Z},unstable_useId:function(){return h},unsupportedProp:function(){return m},useControlled:function(){return g},useEventCallback:function(){return v.Z},useForkRef:function(){return x.Z},useIsFocusVisible:function(){return b.Z}});var r=t(3871);function i(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return n.reduce((function(e,n){return null==n?e:function(){for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];e.apply(this,r),n.apply(this,r)}}),(function(){}))}var o=t(5209);function a(e){var n,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:166;function r(){for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];var a=this,s=function(){e.apply(a,i)};clearTimeout(n),n=setTimeout(s,t)}return r.clear=function(){clearTimeout(n)},r}function s(e,n){return function(){return null}}var u=t(7294);function c(e,n){return u.isValidElement(e)&&-1!==n.indexOf(e.type.muiName)}function d(e){return e&&e.ownerDocument||document}function l(e){return d(e).defaultView||window}function f(e){return function(){return null}}var p=t(4236);function m(e,n,t,r,i){return null}function g(e){var n=e.controlled,t=e.default,r=(e.name,e.state,u.useRef(void 0!==n).current),i=u.useState(t),o=i[0],a=i[1];return[r?n:o,u.useCallback((function(e){r||a(e)}),[])]}var v=t(5192),x=t(3834);function h(e){var n=u.useState(e),t=n[0],r=n[1],i=e||t;return u.useEffect((function(){null==t&&r("mui-".concat(Math.round(1e5*Math.random())))}),[t]),i}var b=t(4896)},2108:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return r.createSvgIcon}});var r=t(545)},1618:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return g},AboutMe:function(){return v}});var r=t(5893),i=(t(7294),t(7525)),o=t(5962),a=t.n(o),s=t(1749),u=t(2318),c=t(8463),d=t(7446),l=t(7748),f=t(3457),p=t(2849),m=t(1380),g=!0,v=function(e){e.topics;var n=(0,f.Z)("(min-width:700px)");return(0,r.jsxs)(s.Z,{container:!0,children:[(0,r.jsx)(s.Z,{item:!0,xs:12,className:a().headings,children:(0,r.jsxs)(l.Z,{p:5,children:[(0,r.jsx)(u.Z,{variant:n?"h1":"h4",children:"About Me"}),(0,r.jsx)("div",{className:i["image-container"],children:(0,r.jsx)(c.Z,{className:i["small-image"],children:(0,r.jsx)(d.Z,{component:"img",image:"/large/headshot.png"})})}),(0,r.jsx)("div",{className:i["post-container"],children:(0,r.jsx)(u.Z,{variant:"body1",children:"Hi! I'm Ben. I'm a software engineer and a ..."})})]})}),(0,r.jsx)(s.Z,{item:!0,xs:12,children:(0,r.jsx)(p.Z,{})}),(0,r.jsx)(s.Z,{item:!0,xs:12,children:(0,r.jsx)(m.Z,{})})]})};n.default=v},1380:function(e,n,t){"use strict";var r=t(5893),i=(t(7294),t(2318)),o=t(1120),a=t(5811),s=t(12),u=(0,o.Z)({buttonPadding:{margin:"20px",padding:3},buttonPaddingNoMargin:{marginRight:"10px",marginTop:"3px"},innerTypo:{margin:"5px",verticalAlign:"middle",display:"inline"},icon:{verticalAlign:"middle"},addressText:{margin:"5px",verticalAlign:"middle",display:"inline"},outerCryptoDiv:{display:"inline",margin:"20px"},donationsText:{display:"inline",verticalAlign:"middle"}});function c(e){var n=u();return(0,r.jsxs)("div",{className:n.outerCryptoDiv,children:[(0,r.jsx)(a.KBS,{className:n.icon}),(0,r.jsx)(i.Z,{className:n.addressText,variant:"body1",children:e.address})]})}function d(e){var n=u();return(0,r.jsxs)("div",{className:n.outerCryptoDiv,children:[(0,r.jsx)(a.e8Q,{className:n.icon}),(0,r.jsx)(i.Z,{className:n.addressText,variant:"body1",children:e.address})]})}n.Z=function(e){var n=e.noMargin,t=void 0===n?void 0:n;u();return(0,r.jsxs)("div",{style:t?{}:{width:"90%",margin:"auto",textAlign:"center",display:"block"},children:[(0,r.jsx)(c,{address:s.K3}),(0,r.jsx)(d,{address:s.xb})]})}},2849:function(e,n,t){"use strict";var r=t(5893),i=(t(7294),t(2318)),o=t(1120),a=t(4704),s=t(4363),u=t(2516),c=(0,o.Z)({buttonPadding:{margin:"20px",padding:3},buttonPaddingNoMargin:{marginRight:"10px",marginTop:"3px"},innerTypo:{margin:"5px",verticalAlign:"middle",display:"inline"},icon:{verticalAlign:"middle"}});n.Z=function(e){var n=e.noMargin,t=void 0===n?void 0:n,o=c();return(0,r.jsxs)("div",{style:t?{}:{width:"90%",margin:"auto",textAlign:"center",display:"block"},children:[(0,r.jsxs)("a",{className:t?o.buttonPaddingNoMargin:o.buttonPadding,href:"https://twitter.com/benschreck",children:[(0,r.jsx)(a.Z,{className:o.icon}),(0,r.jsx)(i.Z,{className:o.innerTypo,children:"@benschreck"})]}),(0,r.jsxs)("a",{className:t?o.buttonPaddingNoMargin:o.buttonPadding,href:"https://www.instagram.com/culturedben",children:[(0,r.jsx)(s.Z,{className:o.icon}),(0,r.jsx)(i.Z,{className:o.innerTypo,children:"@culturedben"})]}),(0,r.jsxs)("a",{className:t?o.buttonPaddingNoMargin:o.buttonPadding,href:"https://www.github.com/bschreck",children:[(0,r.jsx)(u.Z,{className:o.icon}),(0,r.jsx)(i.Z,{className:o.innerTypo,children:"@bschreck"})]})]})}},12:function(e,n,t){"use strict";t.d(n,{A1:function(){return r},mG:function(){return i},_n:function(){return o},K3:function(){return a},xb:function(){return s}});var r="Self Cultured",i="Self Cultured",o="https://selfcultured.com",a="3J1xDQzftuUd4D9yGVuA9iygdL8MpwvsQx",s="0xA9A7e60b09d40B2eCE537D7AC3514Cb1A7074dd6"},5587:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/aboutme",function(){return t(1618)}])},5962:function(e){e.exports={headings:"Shared_headings__r3y72",secondHeading:"Shared_secondHeading__gqAxO"}},7525:function(e){e.exports={"text-content":"Slug_text-content__27_rB",image:"Slug_image__2eezG","small-image":"Slug_small-image__1qUO4",info:"Slug_info__TcOjX","post-container":"Slug_post-container__1UtK8","image-container":"Slug_image-container__3EmBs"}}},function(e){e.O(0,[774,361,150,425],(function(){return n=5587,e(e.s=n);var n}));var n=e.O();_N_E=n}]);