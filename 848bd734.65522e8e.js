(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{185:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(1),a=n(9),o=(n(0),n(226)),i={id:"monitoring-glossary",title:"Monitoring Glossary"},c={id:"monitoring-alerting/monitoring-glossary",title:"Monitoring Glossary",description:"Application - A program in which you interact with",source:"@site/docs/monitoring-alerting/monitoring-glossary.md",permalink:"/tech-documentation/docs/monitoring-alerting/monitoring-glossary",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/monitoring-alerting/monitoring-glossary.md"},s=[],l={rightToc:s};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Application - A program in which you interact with"),Object(o.b)("p",null,"Process - The filename that runs when you launch an application. A process can manage multiple services."),Object(o.b)("p",null,"Service - A process that runs in the background (you do not directly interact with it). A service can start as soon as the OS is booted and can run even if you are logged off your account. Only one instance of a service can run at one time. A service can manage multiple processes."),Object(o.b)("p",null,"APM - monitoring and management of performance and availability of software applications. APM strives to detect and diagnose complex application performance problems to maintain an expected level of service."),Object(o.b)("p",null,"Metrics (Time Series Data) - aggregated measurements over time. Examples include throughput over time, average response time over a one minute interval, or CPU utilization of time."),Object(o.b)("p",null,"Events - discrete events that happen at a specific moment in time. Examples include a log or error being reported or a configuration change.\n\u2022 Some events are aggregated over time to create metrics (for example: a count of errors over time)."),Object(o.b)("p",null,"Logs - files that record\xa0events\xa0that occur in an\xa0operating system\xa0or\xa0software"),Object(o.b)("p",null,"Traces - a complete picture of a single\xa0transaction, down to the database queries and exact invocation patterns. With traces, you get much deeper visibility into a single slow transaction, which can help you understand a broader problem"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"\u2022 transaction - one logical unit of work in an application. This term primarily refers to server-side transactions monitored\n")),Object(o.b)("p",null,"Thread - "),Object(o.b)("p",null,"Transaction - one of the system level calls generated by an action that is logged on your system. "),Object(o.b)("p",null,"Transaction trace - a stack trace of a transaction."),Object(o.b)("p",null,"Apdex_t = the goal time of the transaction. "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},'apdex_t "tolerating" = a load time greater than the apdex_t value, but less than 4 times that number (e.x. if the apdex_t is .5, apdex_t "tolerating" is between .51 and 1.99)'),Object(o.b)("li",{parentName:"ul"},'apdex_t "frustrated" = a load time 4x greater than the apdex_t value. ')),Object(o.b)("p",null,"Key transactions - transactions you have decided are really important, this enables more detailed alerting options."),Object(o.b)("p",null,"Telemetry - "),Object(o.b)("p",null,"Key Performance Indicator (KPI) - a recurring saved search that returns the value of performance metric, such as CPU load percentage, memory used percentage, response time, and so on."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Defining KPIs for APIs being used is a critical part of understanding not just how they work but how well they can work and the impact they have on your services. Some KPIs are 'soft' - your documentation, the formal definitions of how the API works, and other are 'hard' - focusing on the underlying functionality of the service being measured.")))}u.isMDXComponent=!0},226:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,b=p["".concat(i,".").concat(d)]||p[d]||m[d]||o;return n?a.a.createElement(b,c({ref:t},l,{components:n})):a.a.createElement(b,c({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);