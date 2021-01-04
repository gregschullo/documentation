(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{167:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return c}));var r=n(2),a=(n(0),n(181));const o={id:"node.js-overview",title:"Node.js Overview"},i={unversionedId:"dev/javascript/node.js/node.js-overview",id:"dev/javascript/node.js/node.js-overview",isDocsHomePage:!1,title:"Node.js Overview",description:"Node.js is an opensource and cross-platform runtime environment for executing Javascript code outside of a browser.",source:"@site/docs/dev/javascript/node.js/node.js-overview.md",slug:"/dev/javascript/node.js/node.js-overview",permalink:"/docs/dev/javascript/node.js/node.js-overview",version:"current",sidebar:"javascript",previous:{title:"Javascript Control Structures",permalink:"/docs/dev/javascript/javascript-control-structures"},next:{title:"Angular",permalink:"/docs/dev/javascript/angular/angular"}},s=[{value:"Node.js Architecture",id:"nodejs-architecture",children:[]},{value:"How Node.js Works",id:"how-nodejs-works",children:[]},{value:"Node.js Module System",id:"nodejs-module-system",children:[]},{value:"Built in Node.js Modules",id:"built-in-nodejs-modules",children:[{value:"Path",id:"path",children:[]}]},{value:"Events",id:"events",children:[{value:"Classes",id:"classes",children:[]},{value:"Listener",id:"listener",children:[]}]},{value:"Event Arguments",id:"event-arguments",children:[]},{value:"HTTP Module",id:"http-module",children:[]}],l={rightToc:s};function c({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Node.js is an opensource and cross-platform runtime environment for executing Javascript code outside of a browser.",Object(a.b)("br",{parentName:"p"}),"\n","Node.js is ideal for building highly-scalable, data-intensive, and real-time apps.",Object(a.b)("br",{parentName:"p"}),"\n","Node.js is easy to get started with and is great for prototyping and agile development.",Object(a.b)("br",{parentName:"p"}),"\n","Node.js is great for building highly scalable services.",Object(a.b)("br",{parentName:"p"}),"\n","Node.js uses Javascript.",Object(a.b)("br",{parentName:"p"}),"\n","Node.js has a large ecosystem of open-source libraries.  "),Object(a.b)("h2",{id:"nodejs-architecture"},"Node.js Architecture"),Object(a.b)("p",null,"JS Code -> JS Engine -> Machine Code"),Object(a.b)("p",null,"Node.js is NOT a programming language.",Object(a.b)("br",{parentName:"p"}),"\n","Node.js is NOT a framework.  "),Object(a.b)("h2",{id:"how-nodejs-works"},"How Node.js Works"),Object(a.b)("p",null,"Node.js is great for scalability because of its non-blocking, asynchronous behavior by default.",Object(a.b)("br",{parentName:"p"}),"\n","Node.js is ideal for I/O intensive applications due to its asynchronous, threading architecture.",Object(a.b)("br",{parentName:"p"}),"\n","Do not use Node.js for CPU intensive applications, such as video encoding or image manipulation service.  "),Object(a.b)("h2",{id:"nodejs-module-system"},"Node.js Module System"),Object(a.b)("p",null,"Global Objects"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"An object that always exits in the global scope. In Javascript, there's always a global object defined.  "),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Examples:",Object(a.b)("br",{parentName:"li"}),"console.log();",Object(a.b)("br",{parentName:"li"}),"setTimeout();",Object(a.b)("br",{parentName:"li"}),"setInterval();",Object(a.b)("br",{parentName:"li"}),"clearInterval();")),Object(a.b)("p",{parentName:"li"},"window.setTimeout();")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Variables defined locally are not transferred to the global objects.  ")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Local variables defined the same as globals take precedence over global definitions.  "),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"As a rule of thumb, avoid assigning variables as global variables.  ")))),Object(a.b)("p",null,"Every file in Node.js is referred to as a module.  "),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},'each Node.js application has at least one file (module) referred to as the "main" module.  ')),Object(a.b)("p",null,"./ indicates the current folder  "),Object(a.b)("p",null,"Require function is used to call and use a module.  "),Object(a.b)("p",null,"Best practice is to store values retrieved from other modules in constant variables.  "),Object(a.b)("p",null,"Node.js does not execute code directly. It wraps it and executes each module inside of a function. This is called the Modular Wrapper Function.  "),Object(a.b)("h2",{id:"built-in-nodejs-modules"},"Built in Node.js Modules"),Object(a.b)("p",null,"Modules are similar to Javascript libraries. A module is a set of functions you want to use."),Object(a.b)("h3",{id:"path"},"Path"),Object(a.b)("p",null,"Using Path -> const path = require('path');",Object(a.b)("br",{parentName:"p"}),"\n","parse method -> path.parse",Object(a.b)("br",{parentName:"p"}),"\n","Example:  var pathObj = path.parse(_filename);",Object(a.b)("br",{parentName:"p"}),"\n","console.log(pathObj);  "),Object(a.b)("p",null,"Only use asynchronous methods.  "),Object(a.b)("h2",{id:"events"},"Events"),Object(a.b)("p",null,"A signal that something has happened.  "),Object(a.b)("h3",{id:"classes"},"Classes"),Object(a.b)("p",null,"The first word of each string is capitalized to indicate a class.  "),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Example: const EventEmitter  ")),Object(a.b)("p",null,"A class is a container for many related methods.  "),Object(a.b)("h3",{id:"listener"},"Listener"),Object(a.b)("p",null,"A function that is called when an event is raised.  "),Object(a.b)("h2",{id:"event-arguments"},"Event Arguments"),Object(a.b)("p",null,"Functions defined withing a class do not need the function keyword.",Object(a.b)("br",{parentName:"p"}),"\n",'When a function is in a class, it is then referred to as a "method" of that class.  '),Object(a.b)("h2",{id:"http-module"},"HTTP Module"),Object(a.b)("p",null,"Build a simple web server with this module.  "))}c.isMDXComponent=!0},181:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return j}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),d=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=d(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=d(n),p=r,j=b["".concat(i,".").concat(p)]||b[p]||u[p]||o;return n?a.a.createElement(j,s(s({ref:t},c),{},{components:n})):a.a.createElement(j,s({ref:t},c))}));function j(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);