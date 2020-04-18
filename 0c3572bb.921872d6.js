(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{144:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(1),c=r(9),a=(r(0),r(222)),o={id:"elasticsearch-on-minikube",title:"Elasticsearch on Minikube"},i={id:"elastic/elasticsearch/elasticsearch-on-minikube",title:"Elasticsearch on Minikube",description:"kubectl apply -f https://download.elastic.co/downloads/ec  ",source:"@site/docs/elastic/elasticsearch/elasticsearch-on-minikube.md",permalink:"/tech-documentation/docs/elastic/elasticsearch/elasticsearch-on-minikube",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/elastic/elasticsearch/elasticsearch-on-minikube.md"},l=[],s={rightToc:l};function u(e){var t=e.components,r=Object(c.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"kubectl apply -f ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://download.elastic.co/downloads/ec"}),"https://download.elastic.co/downloads/ec"),"  "),Object(a.b)("p",null,"minikube dashboard  "),Object(a.b)("p",null,'kubectl run elasticsearch --image=docker.elastic.co/elasticsearch/elasticsearch:6.2.1 --env="discovery.type=single-node" --port=9200'),Object(a.b)("h1",{id:"kubectl-apply--f-quickstart-esyml"},"kubectl apply -f ./quickstart-es.yml"),Object(a.b)("p",null,"kubectl get elasticsearch  "),Object(a.b)("p",null,"kubectl apply -f ./quickstart-kibana.yml  "),Object(a.b)("p",null,"kubectl get kibana  "),Object(a.b)("p",null,"kubectl port-forward service/quickstart-kibana 5601  "),Object(a.b)("p",null,"echo $(kubectl get secret quickstart-elastic-user -o=json)"))}u.isMDXComponent=!0},222:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return d}));var n=r(0),c=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var s=c.a.createContext({}),u=function(e){var t=c.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i({},t,{},e)),r},p=function(e){var t=u(e.components);return c.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},f=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(r),f=n,d=p["".concat(o,".").concat(f)]||p[f]||b[f]||a;return r?c.a.createElement(d,i({ref:t},s,{components:r})):c.a.createElement(d,i({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var s=2;s<a;s++)o[s]=r[s];return c.a.createElement.apply(null,o)}return c.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);