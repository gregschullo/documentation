(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{166:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return o})),t.d(r,"rightToc",(function(){return c})),t.d(r,"default",(function(){return l}));var n=t(2),a=(t(0),t(181));const i={id:"risk-and-error-budget",title:"Risk and Error Budget"},o={unversionedId:"sre/availability/risk-and-error-budget",id:"sre/availability/risk-and-error-budget",isDocsHomePage:!1,title:"Risk and Error Budget",description:"Error Budget - Acknowledges accidents are normal. Error budgets quantify accidents and risks.",source:"@site/docs/sre/availability/risk-and-error-budget.md",slug:"/sre/availability/risk-and-error-budget",permalink:"/docs/sre/availability/risk-and-error-budget",version:"current"},c=[{value:"Risk Analysis",id:"risk-analysis",children:[]},{value:"More Risk and Error Budget Resources",id:"more-risk-and-error-budget-resources",children:[]}],s={rightToc:c};function l({components:e,...r}){return Object(a.b)("wrapper",Object(n.a)({},s,r,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Error Budget")," - Acknowledges accidents are normal. Error budgets quantify accidents and risks."),Object(a.b)("p",null,"A certain amount of risk must be accepted in order to deliver new products and features.",Object(a.b)("br",{parentName:"p"}),"\n","Amount of acceptable risk is an application driven decision.  "),Object(a.b)("p",null,"An error budget is a quantitative measurement shared between the product and SRE team. This allows for a balance between development and stability.  "),Object(a.b)("p",null,"It is important to have error budgets defined from top to bottom, for every component in the application stack. This allows for errors to be budgeted for occurrences that may not be directly related to planned application code or infrastructure changes.  "),Object(a.b)("p",null,"Trying to achieve 100% availability is unrealistic as it is almost guaranteed application dependencies cannot promise 100% availability.  "),Object(a.b)("h2",{id:"risk-analysis"},"Risk Analysis"),Object(a.b)("p",null,"List of items that may cause an SLO violation.  "),Object(a.b)("p",null,"A need exists to determine how often each failure is likely to happen and how severe it will be if and when it occurs.  "),Object(a.b)("h2",{id:"more-risk-and-error-budget-resources"},"More Risk and Error Budget Resources"),Object(a.b)("p",null,Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.youtube.com/watch?v=4kGu1_M7Igg&list=PLIivdWyY5sqJrKl7D2u-gmis8h9K66qoj&index=6"}),"Managing Risks as an SRE - Google Cloud Platform"),"  "))}l.isMDXComponent=!0},181:function(e,r,t){"use strict";t.d(r,"a",(function(){return d})),t.d(r,"b",(function(){return f}));var n=t(0),a=t.n(n);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),u=function(e){var r=a.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},d=function(e){var r=u(e.components);return a.a.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},b=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(t),b=n,f=d["".concat(o,".").concat(b)]||d[b]||p[b]||i;return t?a.a.createElement(f,c(c({ref:r},l),{},{components:t})):a.a.createElement(f,c({ref:r},l))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=b;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var l=2;l<i;l++)o[l]=t[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);