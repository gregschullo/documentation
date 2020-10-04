(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{160:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,b=p["".concat(c,".").concat(m)]||p[m]||d[m]||i;return n?r.a.createElement(b,o(o({ref:t},l),{},{components:n})):r.a.createElement(b,o({ref:t},l))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var l=2;l<i;l++)c[l]=n[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},93:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var a=n(2),r=n(6),i=(n(0),n(160)),c={id:"java-syntax",title:"Java Syntax"},o={unversionedId:"dev/java/java-syntax",id:"dev/java/java-syntax",isDocsHomePage:!1,title:"Java Syntax",description:"Basic Syntax",source:"@site/docs/dev/java/java-syntax.md",slug:"/dev/java/java-syntax",permalink:"/tech-documentation/docs/dev/java/java-syntax",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/dev/java/java-syntax.md",version:"current"},s=[{value:"Basic Syntax",id:"basic-syntax",children:[{value:"Print Line",id:"print-line",children:[]},{value:"main() Method",id:"main-method",children:[]},{value:"Classes",id:"classes",children:[]},{value:"Statements",id:"statements",children:[]},{value:"Comments",id:"comments",children:[]},{value:"Whitespace",id:"whitespace",children:[]},{value:"Compiling",id:"compiling",children:[]}]}],l={rightToc:s};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"basic-syntax"},"Basic Syntax"),Object(i.b)("h3",{id:"print-line"},"Print Line"),Object(i.b)("p",null,"In Java, System.out.pringln() can print to the console:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"System is a class from the core library provided by Java"),Object(i.b)("li",{parentName:"ul"},"out is an object that controls output"),Object(i.b)("li",{parentName:"ul"},"println() is a method associated with that object that receives a single argument")),Object(i.b)("h3",{id:"main-method"},"main() Method"),Object(i.b)("p",null,"In Java, every application must contain a main() method, which is the entry point for the application. All other methods are invoked from the main() method."),Object(i.b)("p",null,"The signature of the method is public static void main(String[] args) { }. It accepts a single argument: an array of elements of type String."),Object(i.b)("h3",{id:"classes"},"Classes"),Object(i.b)("p",null,"In Java, a class represents a single concept."),Object(i.b)("p",null,"A Java program must have one class whose name is the same as the program filename."),Object(i.b)("p",null,"In the example, the Person class must be declared in a program file named Person.java."),Object(i.b)("h3",{id:"statements"},"Statements"),Object(i.b)("p",null,"In Java, a statement is a line of code that executes a task and is terminated with a ;."),Object(i.b)("h3",{id:"comments"},"Comments"),Object(i.b)("p",null,"In Java, comments are bits of text that are ignored by the compiler. They are used to increase the readability of a program."),Object(i.b)("p",null,"Single line comments are made by using // and multi-line comments are made by starting with /",Object(i.b)("em",{parentName:"p"}," and ending with "),"/."),Object(i.b)("h3",{id:"whitespace"},"Whitespace"),Object(i.b)("p",null,"Whitespace, including spaces and newlines, between statements ignored."),Object(i.b)("h3",{id:"compiling"},"Compiling"),Object(i.b)("p",null,"In Java, when we compile a program, each individual class is converted into a .class file, which is known as byte code."),Object(i.b)("p",null,"The JVM (Java Virtual Machine) is used to run the byte code."))}u.isMDXComponent=!0}}]);