(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{193:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return f}));var n=t(0),o=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),l=function(e){var r=o.a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=l(e.components);return o.a.createElement(u.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},d=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(t),d=n,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||a;return t?o.a.createElement(f,i(i({ref:r},u),{},{components:t})):o.a.createElement(f,i({ref:r},u))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,s=new Array(a);s[0]=d;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var u=2;u<a;u++)s[u]=t[u];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},70:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return s})),t.d(r,"metadata",(function(){return i})),t.d(r,"rightToc",(function(){return c})),t.d(r,"default",(function(){return l}));var n=t(2),o=t(6),a=(t(0),t(193)),s={id:"microservices",title:"Microservices"},i={unversionedId:"infrastructure/microservices",id:"infrastructure/microservices",isDocsHomePage:!1,title:"Microservices",description:"Many enterprises are developing their software on a microservices architecture. Applications are built as small and independent pieces, but still interconnected, modular services. Each service runs a unique process meant to meet a particular business goal. For example, one microservice may track inventory levels of products and another may handle serving personalized recommendations to customers. There are web servers, databases, load balancers, routers, and more components that must work together to form a coherent whole. This architecture is not easy.",source:"@site/docs/infrastructure/microservices.md",slug:"/infrastructure/microservices",permalink:"/docs/infrastructure/microservices",version:"current"},c=[],u={rightToc:c};function l(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Many enterprises are developing their software on a microservices architecture. Applications are built as small and independent pieces, but still interconnected, modular services. Each service runs a unique process meant to meet a particular business goal. For example, one microservice may track inventory levels of products and another may handle serving personalized recommendations to customers. There are web servers, databases, load balancers, routers, and more components that must work together to form a coherent whole. This architecture is not easy.  "),Object(a.b)("p",null,'The good news is that as this modular, distributed infrastructure continues to evolve, businesses can do things with software that simply weren\'t possible before. By shifting to what are also called "loosely coupled services" that can be developed and released independently of each other, developed by similarly organized teams who are empowered to make changes, time to market for businesses can be radically reduced. But these new capabilities come at a price. With so many points of possible failure in your system, this makes your business extremely vulnerable.  '))}l.isMDXComponent=!0}}]);