(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{160:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return d}));var r=t(0),i=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=i.a.createContext({}),s=function(e){var n=i.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},b=function(e){var n=s(e.components);return i.a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},m=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=s(t),m=r,d=b["".concat(o,".").concat(m)]||b[m]||p[m]||a;return t?i.a.createElement(d,u(u({ref:n},l),{},{components:t})):i.a.createElement(d,u({ref:n},l))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=m;var u={};for(var c in n)hasOwnProperty.call(n,c)&&(u[c]=n[c]);u.originalType=e,u.mdxType="string"==typeof e?e:r,o[1]=u;for(var l=2;l<a;l++)o[l]=t[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},74:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return u})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return s}));var r=t(2),i=t(6),a=(t(0),t(160)),o={id:"installing-minikube",title:"Installing Minikube"},u={unversionedId:"infrastructure/containerization/kubernetes/installing-minikube",id:"infrastructure/containerization/kubernetes/installing-minikube",isDocsHomePage:!1,title:"Installing Minikube",description:"Prerequisites",source:"@site/docs/infrastructure/containerization/kubernetes/installing-minikube.md",slug:"/infrastructure/containerization/kubernetes/installing-minikube",permalink:"/tech-documentation/docs/infrastructure/containerization/kubernetes/installing-minikube",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/infrastructure/containerization/kubernetes/installing-minikube.md",version:"current"},c=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Install Minikube on MacOS",id:"install-minikube-on-macos",children:[{value:"Successful Output",id:"successful-output",children:[]}]}],l={rightToc:c};function s(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(a.b)("p",null,"kubectl",Object(a.b)("br",{parentName:"p"}),"\n","A Hypervisor such as Hyperkit, VirtualBox, or VMware fusion.  "),Object(a.b)("h2",{id:"install-minikube-on-macos"},"Install Minikube on MacOS"),Object(a.b)("p",null,"Install the latest version of minikube  "),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-terminal"}),"curl -Lo minikube https://storage.googleapis.com/minikube/releases/latest/minikube-darwin-amd64 \\\n  && chmod +x minikube\n")),Object(a.b)("p",null,"Add the minikube executable to your path",Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("inlineCode",{parentName:"p"},"sudo mv minikube /usr/local/bin"),"  "),Object(a.b)("p",null,"Alternatively, install minikube with Homebrew",Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("inlineCode",{parentName:"p"},"brew install minikube"),"  "),Object(a.b)("p",null,"Confirm successful installation of the Hypervisor and minikube.\n",Object(a.b)("inlineCode",{parentName:"p"},"minikube start --driver=virtualbox"),"  "),Object(a.b)("p",null,"Reference the Kubernetes documentation for a ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://kubernetes.io/docs/setup/learning-environment/minikube/#specifying-the-vm-driver"}),"full list of VM drivers")," if not using VirtualBox.  "),Object(a.b)("h3",{id:"successful-output"},"Successful Output"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-terminal"}),'minikube start --driver=virtualbox\n\ud83d\ude04  minikube v1.9.0 on Darwin 10.15.3\n\u2728  Using the virtualbox driver based on user configuration\n\ud83d\udcbf  Downloading VM boot image ...\n    > minikube-v1.9.0.iso.sha256: 65 B / 65 B [--------------] 100.00% ? p/s 0s\n    > minikube-v1.9.0.iso: 174.93 MiB / 174.93 MiB [-] 100.00% 9.84 MiB p/s 18s\n\ud83d\udcbe  Downloading Kubernetes v1.18.0 preload ...\n    > preloaded-images-k8s-v2-v1.18.0-docker-overlay2-amd64.tar.lz4: 542.91 MiB\n\ud83d\udd25  Creating virtualbox VM (CPUs=2, Memory=4000MB, Disk=20000MB) ...\n\ud83d\udc33  Preparing Kubernetes v1.18.0 on Docker 19.03.8 ...\n\ud83c\udf1f  Enabling addons: default-storageclass, storage-provisioner\n\ud83c\udfc4  Done! kubectl is now configured to use "minikube"\n')),Object(a.b)("p",null,"To check the status of the cluster, run:",Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("inlineCode",{parentName:"p"},"minikube status"),"  "),Object(a.b)("p",null,"Output should be similar to the following:",Object(a.b)("br",{parentName:"p"}),"\n","m01",Object(a.b)("br",{parentName:"p"}),"\n","host: Running",Object(a.b)("br",{parentName:"p"}),"\n","kubelet: Running",Object(a.b)("br",{parentName:"p"}),"\n","apiserver: Running",Object(a.b)("br",{parentName:"p"}),"\n","kubeconfig: Configured  "),Object(a.b)("p",null,"minikube delete  "),Object(a.b)("p",null,"minikube start --cpus 4 --memory 6144"))}s.isMDXComponent=!0}}]);