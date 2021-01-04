(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{156:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return a})),n.d(r,"metadata",(function(){return i})),n.d(r,"rightToc",(function(){return c})),n.d(r,"default",(function(){return l}));var t=n(2),o=(n(0),n(181));const a={id:"docker-commands",title:"Docker Commands"},i={unversionedId:"infrastructure/containerization/docker/docker-commands",id:"infrastructure/containerization/docker/docker-commands",isDocsHomePage:!1,title:"Docker Commands",description:"docker ps - lists containers (default shows only running containers)",source:"@site/docs/infrastructure/containerization/docker/docker-commands.md",slug:"/infrastructure/containerization/docker/docker-commands",permalink:"/docs/infrastructure/containerization/docker/docker-commands",version:"current",sidebar:"containerization",previous:{title:"Docker Overview",permalink:"/docs/infrastructure/containerization/docker/docker-overview"}},c=[{value:"Dockerfile Keywords",id:"dockerfile-keywords",children:[]},{value:"Common Dockerfile Run Flags",id:"common-dockerfile-run-flags",children:[]}],s={rightToc:c};function l({components:e,...r}){return Object(o.b)("wrapper",Object(t.a)({},s,r,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"docker ps")," - lists containers (default shows only running containers)",Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("inlineCode",{parentName:"p"},"docker exec -it")," - container name /bin/bash  "),Object(o.b)("h2",{id:"dockerfile-keywords"},"Dockerfile Keywords"),Object(o.b)("p",null,"FROM - a pre-existing base image.",Object(o.b)("br",{parentName:"p"}),"\n","WORKDIR - specifies all subsequent actions should be taken from the directory specified. This should be a directory in your image filesystem.",Object(o.b)("br",{parentName:"p"}),"\n","COPY - copy a file from your host to another location. ( . refers to the present location).",Object(o.b)("br",{parentName:"p"}),"\n","RUN - runs a command inside your image file filesystem.  "),Object(o.b)("h2",{id:"common-dockerfile-run-flags"},"Common Dockerfile Run Flags"),Object(o.b)("p",null,"Build Command:",Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("inlineCode",{parentName:"p"},"docker build --tag <imagename> ."),Object(o.b)("br",{parentName:"p"}),"\n","Example: ",Object(o.b)("inlineCode",{parentName:"p"},"docker build --tag bulletinboard:1.0 ."),"  "),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"docker run --publish <port>:<port> --detach --name <appname> <image>"),Object(o.b)("br",{parentName:"p"}),"\n","Example: ",Object(o.b)("inlineCode",{parentName:"p"},"docker run --publish 8000:8080 --detach --name bb bulletinboard:1.0"),"  "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"--publish asks Docker to forward traffic incoming on the host\u2019s port 8000, to the container\u2019s port 8080. Containers have their own private set of ports, so if you want to reach one from the network, you have to forward traffic to it in this way. Otherwise, firewall rules will prevent all network traffic from reaching your container, as a default security posture."),Object(o.b)("li",{parentName:"ul"},"--detach asks Docker to run this container in the background."),Object(o.b)("li",{parentName:"ul"},"--name specifies a name with which you can refer to your container in subsequent commands")))}l.isMDXComponent=!0},181:function(e,r,n){"use strict";n.d(r,"a",(function(){return p})),n.d(r,"b",(function(){return m}));var t=n(0),o=n.n(t);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var r=o.a.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},p=function(e){var r=u(e.components);return o.a.createElement(l.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},b=o.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),b=t,m=p["".concat(i,".").concat(b)]||p[b]||d[b]||a;return n?o.a.createElement(m,c(c({ref:r},l),{},{components:n})):o.a.createElement(m,c({ref:r},l))}));function m(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var a=n.length,i=new Array(a);i[0]=b;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:t,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);