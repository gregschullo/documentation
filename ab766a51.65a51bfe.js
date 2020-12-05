(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{129:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return o})),i.d(t,"metadata",(function(){return l})),i.d(t,"rightToc",(function(){return s})),i.d(t,"default",(function(){return d}));var r=i(2),n=i(6),a=(i(0),i(174)),o={id:"resiliency-strategies",title:"Resiliency Strategies"},l={unversionedId:"sre/reliability/resiliency-strategies",id:"sre/reliability/resiliency-strategies",isDocsHomePage:!1,title:"Resiliency Strategies",description:"Resiliency strategies are actions taken to handle issues experienced by an application or system.",source:"@site/docs/sre/reliability/resiliency-strategies.md",slug:"/sre/reliability/resiliency-strategies",permalink:"/docs/sre/reliability/resiliency-strategies",version:"current",sidebar:"reliability",previous:{title:"Application Resiliency",permalink:"/docs/sre/reliability/application-resiliency"},next:{title:"Reliability Roadmap",permalink:"/docs/sre/reliability/reliability-roadmap"}},s=[{value:"Basic Resiliency Patterns",id:"basic-resiliency-patterns",children:[{value:"Exception Handling",id:"exception-handling",children:[]},{value:"Retry",id:"retry",children:[]},{value:"Timeout",id:"timeout",children:[]},{value:"Failover",id:"failover",children:[]},{value:"Fallback",id:"fallback",children:[]},{value:"Governors / Bulkhead",id:"governors--bulkhead",children:[]},{value:"Circuit Breakers",id:"circuit-breakers",children:[]}]}],c={rightToc:s};function d(e){var t=e.components,i=Object(n.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},c,i,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Resiliency strategies are actions taken to handle issues experienced by an application or system.  "),Object(a.b)("h2",{id:"basic-resiliency-patterns"},"Basic Resiliency Patterns"),Object(a.b)("p",null,"Resiliency strategies are actions taken to handle issues experienced by the application or system.  "),Object(a.b)("h3",{id:"exception-handling"},"Exception Handling"),Object(a.b)("p",null,"Exception handling is the process of responding to occurrences of exceptions thrown during a program's execution.  "),Object(a.b)("p",null,"Error handling and design for all dependencies that could be unavailable or return an error is critical. Each type of technology is going to have protocol or implement specific errors and exceptions. Proper design dictates understanding the taxonomy of both transient and technology specific error conditions and coding to properly handle those conditions. Such exceptions could be related to connectivity, network communication, service availability, or service error. In addition, from a service functionality perspective, each can return errors such as invalid inputs, information not found, etc."),Object(a.b)("h3",{id:"retry"},"Retry"),Object(a.b)("p",null,"There are types of errors where it is advisable to retry an operation. For example, network type errors can be transient in nature and may shortly resolve themselves. However, when trying to design or mitigate a ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/sre/reliability/failure#cascading-failure"}),"cascading failure")," scenario, endless retrying a failing operation is unwarranted."),Object(a.b)("p",null,"The concept of retry relies on an endpoint or transaction specific policy that defines parameters that control the behavior. A list of error type or exceptions should be explicitly defined to separate out non-recoverable from recoverable errors. For example, a service that is returning an internal null pointer exception in all likelihood will act the same when repeatably called. However, a bandwidth or rate limiting type exception is definitely recoverable. In addition to the condition for retry, the number of consecutive retries and the delay between attempts should be bounded. A single retry attempt with a delay of 50ms would be a nominal scenario."),Object(a.b)("h3",{id:"timeout"},"Timeout"),Object(a.b)("p",null,"A timeout is the time to wait before interrupting a dependency call and throwing an exception.  "),Object(a.b)("p",null,"To determine timeout, use historical or testing statistics of dependencies.",Object(a.b)("br",{parentName:"p"}),"\n","For example, if both the average and maximum transaction times are determined for a service, then a client doesn\u2019t need to wait past these values. If through testing or metrics it is determined that the greatest response time Service A will take is 700ms then our client can take action after 700ms rather than waiting for the default timeout of the service at 5000ms. The goal being to free-up resources involved in the dependency calls as soon as possible. Also, the usage of timeout values can decrease user wait times and ultimately improve their experience.  "),Object(a.b)("h3",{id:"failover"},"Failover"),Object(a.b)("p",null,"Failover is providing the means to switch to a redundant or standby service or hardware upon a failure or failures to your application.  "),Object(a.b)("p",null,"Infrastructure should be deployed to have multiple instances of technology for a given service so a failure of one component doesn\u2019t bring down an entire service. Examples of these infrastructures include, but are not limited to, load balancers, gateways, and firewalls. As such, the client needs the ability to detect an error condition and failover to different isolated technology instances.  "),Object(a.b)("h3",{id:"fallback"},"Fallback"),Object(a.b)("p",null,"A fallback is a plan of action or defined behavior that may be used if a defined error or failure occurs in your application.  "),Object(a.b)("p",null,"If a dependency is unavailable or is returning an error after a retry, then a strategy should be implemented for this situation. Fallback solutions are often very specific to the system they are designed for.  "),Object(a.b)("p",null,"An example of a fallback may be a situation where your application is capped at receiving 200 messages. At this point any additional messages will automatically send new messages over the threshold to a different service to handle them and process them as the original system would.",Object(a.b)("br",{parentName:"p"}),"\n","Another example of a fallback may be where a CSS file is written to handle media queries, but the code is written with the ability to fall back and use a different CSS file if the browser a user is utilizing does not support media queries.  "),Object(a.b)("h3",{id:"governors--bulkhead"},"Governors / Bulkhead"),Object(a.b)("p",null,"A governor constrains actions to a fixed-size resource pool to prevent a large amount of calls from over utilizing a resource.  "),Object(a.b)("p",null,"An example of where a governor could be utilized is when an application is capable of handling a large load, but will fail if the rate of use climbs too quickly. A governor can be put in place to control the amount of requests being sent to the application and can allow for a more graceful increase in requests to avoid bringing down the application.  "),Object(a.b)("h3",{id:"circuit-breakers"},"Circuit Breakers"),Object(a.b)("p",null,"A circuit breaker is deployed to prevent making calls to dependencies that are failing.  "),Object(a.b)("p",null,"If a dependency is performing normally, the circuit breaker remains in a closed state and calls proceed through the circuit breaker unimpeded. If a certain number of errors occur in a defined period of time, the circuit breakers goes into an open state. While a circuit breaker is in an open state, all calls to the dependency are short circuited and a failure exception is returned. After a given timeout period, the circuit breaker will move into a half-open state and attempt to make a new call to the underlying dependency. If successful, the state will be reset to closed and if it fails will be returned to an open state and have to wait another timeout period."))}d.isMDXComponent=!0},174:function(e,t,i){"use strict";i.d(t,"a",(function(){return u})),i.d(t,"b",(function(){return f}));var r=i(0),n=i.n(r);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var c=n.a.createContext({}),d=function(e){var t=n.a.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},u=function(e){var t=d(e.components);return n.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(e,t){var i=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(i),b=r,f=u["".concat(o,".").concat(b)]||u[b]||p[b]||a;return i?n.a.createElement(f,l(l({ref:t},c),{},{components:i})):n.a.createElement(f,l({ref:t},c))}));function f(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=i.length,o=new Array(a);o[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<a;c++)o[c]=i[c];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,i)}b.displayName="MDXCreateElement"}}]);