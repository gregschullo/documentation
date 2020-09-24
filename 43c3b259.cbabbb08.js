(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{165:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(1),c=n(9),a=(n(0),n(226)),o={id:"elasticsearch-on-minikube",title:"Elasticsearch on Minikube"},i={id:"monitoring-alerting/elastic/elasticsearch/elasticsearch-on-minikube",title:"Elasticsearch on Minikube",description:"kubectl apply -f https://download.elastic.co/downloads/ec  ",source:"@site/docs/monitoring-alerting/elastic/elasticsearch/elasticsearch-on-minikube.md",permalink:"/tech-documentation/docs/monitoring-alerting/elastic/elasticsearch/elasticsearch-on-minikube",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/monitoring-alerting/elastic/elasticsearch/elasticsearch-on-minikube.md"},l=[],s={rightToc:l};function u(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"kubectl apply -f ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://download.elastic.co/downloads/ec"}),"https://download.elastic.co/downloads/ec"),"  "),Object(a.b)("p",null,"minikube dashboard  "),Object(a.b)("p",null,'kubectl run elasticsearch --image=docker.elastic.co/elasticsearch/elasticsearch:6.2.1 --env="discovery.type=single-node" --port=9200'),Object(a.b)("h1",{id:"kubectl-apply--f-quickstart-esyml"},"kubectl apply -f ./quickstart-es.yml"),Object(a.b)("p",null,"kubectl get elasticsearch  "),Object(a.b)("p",null,"kubectl apply -f ./quickstart-kibana.yml  "),Object(a.b)("p",null,"kubectl get kibana  "),Object(a.b)("p",null,"kubectl port-forward service/quickstart-kibana 5601  "),Object(a.b)("p",null,"echo $(kubectl get secret quickstart-elastic-user -o=json)"))}u.isMDXComponent=!0},226:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),c=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var s=c.a.createContext({}),u=function(e){var t=c.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},p=function(e){var t=u(e.components);return c.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},f=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),f=r,d=p["".concat(o,".").concat(f)]||p[f]||b[f]||a;return n?c.a.createElement(d,i({ref:t},s,{components:n})):c.a.createElement(d,i({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<a;s++)o[s]=n[s];return c.a.createElement.apply(null,o)}return c.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);