(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{123:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return u}));var n=a(2),i=a(6),r=(a(0),a(174)),o={id:"operational-healing",title:"Operational Healing"},l={unversionedId:"sre/reliability/operational-healing",id:"sre/reliability/operational-healing",isDocsHomePage:!1,title:"Operational Healing",description:'Operational healing, better thought of as "fault tolerance", is the recovery from errors or issues in an application by some automated means. This page outlines the practices of healing, automation, and self-healing.',source:"@site/docs/sre/reliability/operational-healing.md",slug:"/sre/reliability/operational-healing",permalink:"/docs/sre/reliability/operational-healing",version:"current",sidebar:"reliability",previous:{title:"Reliability Roadmap",permalink:"/docs/sre/reliability/reliability-roadmap"},next:{title:"Chaos Engineering",permalink:"/docs/sre/reliability/chaos-engineering"}},s=[{value:"Healing",id:"healing",children:[]},{value:"Automation",id:"automation",children:[]},{value:"Self-Healing",id:"self-healing",children:[]}],c={rightToc:s};function u(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,'Operational healing, better thought of as "fault tolerance", is the recovery from errors or issues in an application by some automated means. This page outlines the practices of healing, automation, and self-healing.'),Object(r.b)("p",null,'Applications can only successfully heal from their failures when they have best in class monitoring infrastructure and a solid understanding of how the application functions. There is no "one size fits all" approach where operational healing is concerned and architecting for resiliency through operational healing will be unique for every application with a wide array of solutions as every application is different.'),Object(r.b)("h2",{id:"healing"},"Healing"),Object(r.b)("p",null,"Application healing is where steps are taken by a team to address issues or abnormalities in an application or service to restore it to a healthy, desired state."),Object(r.b)("p",null,"Ensuring adequate component redundancy or replication is an important consideration while designing a healing policy. In the event that one component instance fails, malfunctions, or is attacked, it can be replaced with another component version that offers equivalent functionalities."),Object(r.b)("p",null,"Know your application. This an important idea in many areas, not just where operational healing is concerned. Manual healing must take place before any automation or self-healing to ensure the healing process is understood. Time is often wasted if production problems in your application or service are not understood before self-healing actions are attempted to be implemented."),Object(r.b)("p",null,"Basic questions to ask when starting to think about understanding your application, healing, and architecting for resiliency:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Is your application monitored?",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Deploy holistic logging and monitoring systems"))),Object(r.b)("li",{parentName:"ul"},"Does your application have a fallback mechanism?"),Object(r.b)("li",{parentName:"ul"},'Does your application have a baseline established for what is "healthy\u201d?',Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Setting up automated alerts is a great starting point to understanding which errors or problematic scenarios are most common."),Object(r.b)("li",{parentName:"ul"},"Log and monitor failures to give operational insight"))),Object(r.b)("li",{parentName:"ul"},"What measures are taken when the application fails?")),Object(r.b)("p",null,"Prevention is always better than cure, but trying to plan for and solve every contingency, while a noble goal, is unrealistic. It is important to consider this and not let attempting to plan for every possible scenario be a hinderance in delivering value to your application. Having a flexible and efficient resilience and recovery design is almost always better than attempting to prevent absolutely everything."),Object(r.b)("h2",{id:"automation"},"Automation"),Object(r.b)("p",null,"Automation is the idea of transforming predictable, repeatable manual tasks or process into code in order to perform these tasks automatically in an attempt to streamline development and service efforts."),Object(r.b)("p",null,"It is valuable to understand why the automation aspect of application resiliency is important. Automation is something that is heard about at often in an enterprise and is seen as a practice that adds value, but the why of automation and how it impacts operations is often excluded from the conversations surrounding it. Automation is important because it reduces human time recovery and increases efficiency, results in a reduction of human errors, reduces mean time to detection and mean time to resolution, increases an application's or service's availability and increases the performance of those applications or services, and it reduces manual, human tasks around the organization which allows for employees to shift their focus to other issues or tasks elsewhere."),Object(r.b)("p",null,"In many cases, automation leads to self-healing (fault tolerance) as handling errors or known application limitation without human intervention is an anchor of self-healing."),Object(r.b)("h2",{id:"self-healing"},"Self-Healing"),Object(r.b)("p",null,"Self-healing is a paradigm to automatically recover an application or service from a customer-impacted state to an available, healthy, desired, and running state without manual human intervention. The standards of what constitutes acceptable behavior will vary both with time and from user to user. There is no industry defined road-map to achieve an operational healing, autonomous state for IT Infrastructure."),Object(r.b)("p",null,"Self-healing is about designing a system capable of making decisions by continually checking and optimizing its current state and adapting to conditions as they change. The goal is to respond to failures gracefully and ensure application availability is as high as possible."),Object(r.b)("p",null,"Other articles relating to Operational Healing can be found at:\n",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/azure/architecture/guide/design-principles/self-healing"}),"Azure Self Healing Design Principles"),"\n",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://technologyconversations.com/2016/01/26/self-healing-systems/"}),"Self Healing Systems")))}u.isMDXComponent=!0},174:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=i.a.createContext({}),u=function(e){var t=i.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=u(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(a),d=n,m=p["".concat(o,".").concat(d)]||p[d]||h[d]||r;return a?i.a.createElement(m,l(l({ref:t},c),{},{components:a})):i.a.createElement(m,l({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<r;c++)o[c]=a[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);