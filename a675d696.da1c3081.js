(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{135:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return o})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return l}));var n=r(2),s=r(6),a=(r(0),r(193)),i={id:"cypress-dashboards",title:"Cypress Dashboards"},o={unversionedId:"qa/cypress/cypress-dashboards",id:"qa/cypress/cypress-dashboards",isDocsHomePage:!1,title:"Cypress Dashboards",description:"Record Test Runs",source:"@site/docs/qa/cypress/cypress-dashboards.md",slug:"/qa/cypress/cypress-dashboards",permalink:"/docs/qa/cypress/cypress-dashboards",version:"current",sidebar:"cypress",previous:{title:"Cypress Overview",permalink:"/docs/qa/cypress/cypress-overview"},next:{title:"Cypress Commands",permalink:"/docs/qa/cypress/cypress-commands"}},c=[{value:"Record Test Runs",id:"record-test-runs",children:[]},{value:"Run in CI",id:"run-in-ci",children:[]},{value:"Parallelize Tests",id:"parallelize-tests",children:[]},{value:"Integrate with GitHub",id:"integrate-with-github",children:[]}],u={rightToc:c};function l(e){var t=e.components,r=Object(s.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"record-test-runs"},"Record Test Runs"),Object(a.b)("p",null,"Everything in the dashboard revolves around test recordings. The first step is to enable recording in Test Runner, which allows you to view screenshots and videos at the point where tests failed, see how many tests are pending, skipped, failed, or passed, and get the entire stack trace of failed tests.  "),Object(a.b)("h2",{id:"run-in-ci"},"Run in CI"),Object(a.b)("p",null,"Integrating with your CI provider further enhances the power of your test suite by giving you the ability to run your test suite automatically on every commit and enabling automatic load balancing and parallelization, ensuring tests run fast to save valuable developer time.  "),Object(a.b)("h2",{id:"parallelize-tests"},"Parallelize Tests"),Object(a.b)("p",null,"After integrating with CI, you're ready to start running tests in parallel across many virtual machines. Parallelization allows you to reduce your test suite runtime from hours to minutes by using CI machines to maximize performance and save your team time and money by running your test suite as fast as possible.  "),Object(a.b)("h2",{id:"integrate-with-github"},"Integrate with GitHub"),Object(a.b)("p",null,"Get ultimate visibility by integrating Cypress into your GitHub workflow. You'll be able to see run statistics, specific test failures, screenshots, and more as PR comments, see status of test runs as GitHub commit status checks, and prevent PR merges until all your Cypress tests pass.  "))}l.isMDXComponent=!0},193:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return b}));var n=r(0),s=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var u=s.a.createContext({}),l=function(e){var t=s.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return s.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return s.a.createElement(s.a.Fragment,{},t)}},y=s.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(r),y=n,b=p["".concat(i,".").concat(y)]||p[y]||d[y]||a;return r?s.a.createElement(b,o(o({ref:t},u),{},{components:r})):s.a.createElement(b,o({ref:t},u))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=y;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var u=2;u<a;u++)i[u]=r[u];return s.a.createElement.apply(null,i)}return s.a.createElement.apply(null,r)}y.displayName="MDXCreateElement"}}]);