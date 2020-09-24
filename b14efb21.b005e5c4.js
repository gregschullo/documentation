(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{200:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return i}));var r=n(1),a=n(9),o=(n(0),n(226)),l={id:"ruby-control-structures",title:"Ruby Control Structures"},s={id:"dev/ruby/ruby-control-structures",title:"Ruby Control Structures",description:"## Ruby Arrays",source:"@site/docs/dev/ruby/ruby-control-structures.md",permalink:"/tech-documentation/docs/dev/ruby/ruby-control-structures",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/dev/ruby/ruby-control-structures.md"},c=[{value:"Ruby Arrays",id:"ruby-arrays",children:[]},{value:"Ruby Hashes and Symbols",id:"ruby-hashes-and-symbols",children:[]},{value:"Ruby Conditional Statements",id:"ruby-conditional-statements",children:[]},{value:"Ruby Unless, Until, and While",id:"ruby-unless-until-and-while",children:[]},{value:"Ruby Methods",id:"ruby-methods",children:[]}],u={rightToc:c};function i(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"ruby-arrays"},"Ruby Arrays"),Object(o.b)("p",null,"Empty Array"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ruby"}),"myArray = [ ]\n")),Object(o.b)("p",null,"Array with contents"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ruby"}),"myArray = [1, 2, 3]\n")),Object(o.b)("p",null,"Defining locations in array with values"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ruby"}),"myArray = [ ]\nmyArray [0] = 1\nmyArray [1] = 2\nmyArray [2] = 3\n")),Object(o.b)("h2",{id:"ruby-hashes-and-symbols"},"Ruby Hashes and Symbols"),Object(o.b)("p",null,"Hashes are similar to arrays. Basically, the difference is how you get data. Hashes are defined using Hash.new or myHash={ }."),Object(o.b)("p",null,"Example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ruby"}),'myHash={\n  "Key" => "value",\n  "Key1" => "value1",\n}\n')),Object(o.b)("p",null,"puts myHash",'["Key"]'),Object(o.b)("p",null,"Commas in this example separate input"),Object(o.b)("p",null,"Another way to create a Hash is:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ruby"}),'myHash = Hash.new()\nmyHash["Key"] = "value"\nmyHash["Key1"] = "value1"\nputs myHash["Key"]\n')),Object(o.b)("p",null,"Instead of using a string as the key, you can use symbols."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ruby"}),'myHash=Hash.new()\nmyHash[:Key]="value"\nmyHash[:Key2]="value2"\nputs myHash[:Key]\n')),Object(o.b)("p",null,"When using myHash={} with symbols, symbols are used differently, like this"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ruby"}),'myHash={\n  Key: "value",\n  Key2: "value2",\n}\n\nputs myHash[:Key]\n')),Object(o.b)("h2",{id:"ruby-conditional-statements"},"Ruby Conditional Statements"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ruby"}),"if condition\n  do something\nend\n\nif condition\n  do something\n\nelse\n  do something else\nend\n\nif condition\n  do something\n\nelsif different condition\n  do something\n\nelse\n  another different thing to be done\nend\n")),Object(o.b)("h2",{id:"ruby-unless-until-and-while"},"Ruby Unless, Until, and While"),Object(o.b)("p",null,"The unless statement syntax is almost identical to the if statement."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ruby"}),"unless condition\n  thing to be done if the condition is false\nend\n")),Object(o.b)("p",null,"While statements will keep doing what's in the loop until the condition is false."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ruby"}),"while condition\n  something to do\nend\n")),Object(o.b)("p",null,"Until statements are the opposite of while statements. They will keep doing what is in the loop until the condition is true"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ruby"}),"until condition\n  something to do\nend\n")),Object(o.b)("h2",{id:"ruby-methods"},"Ruby Methods"),Object(o.b)("p",null,"Methods are reusable sections of code that perform specific tasks in our program. It makes our code much easier to fix if there are bugs and it helps separate our concerns."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ruby"}),"def methodName\n  #method code here\nend\n")),Object(o.b)("p",null,"The def keyword is the header of the method. This will include the name of the method along with any parameter the method will take (if we want it to have any). The body of the method will contain the code that we want the method to carry out. The method ends with the end keyword."),Object(o.b)("p",null,"To call a method in Ruby, we just type the method name."),Object(o.b)("p",null,"Methods with Parameters"))}i.isMDXComponent=!0},226:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return p}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),i=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},b=function(e){var t=i(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),b=i(n),d=r,p=b["".concat(l,".").concat(d)]||b[d]||y[d]||o;return n?a.a.createElement(p,s({ref:t},u,{components:n})):a.a.createElement(p,s({ref:t},u))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var u=2;u<o;u++)l[u]=n[u];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);