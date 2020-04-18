(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{199:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return o})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return l}));var n=r(1),a=r(9),c=(r(0),r(222)),i={id:"elasticsearch-overview",title:"Elasticsearch Overview"},o={id:"elastic/elasticsearch/elasticsearch-overview",title:"Elasticsearch Overview",description:"Elasticsearch is a real-time, distributed storage, search, and analytic engine. It can be used for multiple purposes, but it excels in indexing streams of semi-structured data, such as logs or decoded network packets.",source:"@site/docs/elastic/elasticsearch/elasticsearch-overview.md",permalink:"/tech-documentation/docs/elastic/elasticsearch/elasticsearch-overview",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/elastic/elasticsearch/elasticsearch-overview.md"},s=[],u={rightToc:s};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Elasticsearch is a real-time, distributed storage, search, and analytic engine. It can be used for multiple purposes, but it excels in indexing streams of semi-structured data, such as logs or decoded network packets."),Object(c.b)("p",null,"Elasticsearch is a distributed document store. Elasticsearch stores complex data structures as serialized JSON documents, rather than in rows and columnar data.  "),Object(c.b)("p",null,"When a document is stored, it is indexed and fully searchable in near real-time due to its use of the inverted index data structure.  "))}l.isMDXComponent=!0},222:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o({},t,{},e)),r},d=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(r),f=n,m=d["".concat(i,".").concat(f)]||d[f]||p[f]||c;return r?a.a.createElement(m,o({ref:t},u,{components:r})):a.a.createElement(m,o({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,i=new Array(c);i[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var u=2;u<c;u++)i[u]=r[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);