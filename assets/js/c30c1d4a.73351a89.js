"use strict";(self.webpackChunkstorybook_addon_badges_docs=self.webpackChunkstorybook_addon_badges_docs||[]).push([[486],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>m});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var d=n.createContext({}),l=function(e){var t=n.useContext(d),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},p=function(e){var t=l(e.components);return n.createElement(d.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,d=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=l(o),g=r,m=c["".concat(d,".").concat(g)]||c[g]||u[g]||a;return o?n.createElement(m,s(s({ref:t},p),{},{components:o})):n.createElement(m,s({ref:t},p))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,s=new Array(a);s[0]=g;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[c]="string"==typeof e?e:r,s[1]=i;for(var l=2;l<a;l++)s[l]=o[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}g.displayName="MDXCreateElement"},7862:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var n=o(7462),r=(o(7294),o(3905));const a={},s="Adding Tooltips to Badges",i={unversionedId:"customising-badges/adding-tooltips-to-badges",id:"customising-badges/adding-tooltips-to-badges",title:"Adding Tooltips to Badges",description:"It's easy to add tooltips to your badges, simply add a small amount of config and voil\xe0.",source:"@site/docs/customising-badges/adding-tooltips-to-badges.md",sourceDirName:"customising-badges",slug:"/customising-badges/adding-tooltips-to-badges",permalink:"/storybook-addon-badges/docs/customising-badges/adding-tooltips-to-badges",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Adding Styles to Badges",permalink:"/storybook-addon-badges/docs/customising-badges/adding-styles-to-badges"}},d={},l=[{value:"Customising <code>preview.ts</code>",id:"customising-previewts",level:2},{value:"Advanced Tooltips",id:"advanced-tooltips",level:2}],p={toc:l},c="wrapper";function u(e){let{components:t,...o}=e;return(0,r.kt)(c,(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"adding-tooltips-to-badges"},"Adding Tooltips to Badges"),(0,r.kt)("p",null,"It's easy to add tooltips to your badges, simply add a small amount of config and voil\xe0."),(0,r.kt)("h2",{id:"customising-previewts"},"Customising ",(0,r.kt)("inlineCode",{parentName:"h2"},"preview.ts")),(0,r.kt)("p",null,"To do this, you can customise ",(0,r.kt)("inlineCode",{parentName:"p"},".storybook/preview.ts")," to add a simple string tooltip to\nyour parameters."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title=".storybook/preview.ts"',title:'".storybook/preview.ts"'},"import { addParameters } from '@storybook/react';\n\naddParameters({\n    badgesConfig: {\n        beta: {\n            title: 'Beta',\n            tooltip: 'This component is deprecated, please avoid using it.',\n        },\n    },\n});\n")),(0,r.kt)("p",null,"Now when you hover over your badge, a tooltip will appear."),(0,r.kt)("h2",{id:"advanced-tooltips"},"Advanced Tooltips"),(0,r.kt)("p",null,"As the Badges addon uses the Storybook tooltip under the hood, you can configure\nmore advanced functionality such as titles, links, and buttons"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title=".storybook/preview.ts"',title:'".storybook/preview.ts"'},"addParameters({\n    badgesConfig: {\n        beta: {\n            tooltip: {\n                title: 'This is Beta',\n                desc: 'Be ready to receive updates frequently and leave a feedback',\n                links: [\n                    { title: 'Read more', href: 'http://path/to/your/docs' },\n                    { title: 'Leave feedback', onClick: () => alert('thanks for the feedback') },\n                ],\n            },\n        },\n    },\n});\n")))}u.isMDXComponent=!0}}]);