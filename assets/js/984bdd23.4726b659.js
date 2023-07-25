"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[18733],{35318:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>v});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=l(n),v=a,m=d["".concat(s,".").concat(v)]||d[v]||c[v]||i;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},42172:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>v,frontMatter:()=>p,metadata:()=>l,toc:()=>c});var r=n(25773),a=n(30808),i=(n(27378),n(35318)),o=["components"],p={id:"2_v0.14.1_to_v0.15.0",title:"v0.14.1 to v0.15.0",sidebar_label:"v0.14.1 to v0.15.0"},s=void 0,l={unversionedId:"7_upgrade_guides/2_v0.14.1_to_v0.15.0",id:"version-v1.1.1/7_upgrade_guides/2_v0.14.1_to_v0.15.0",title:"v0.14.1 to v0.15.0",description:"PR #189 changed the default Zookeeper init container image changed from busybox to bash. If you have overridden the NifiCluster.Spec.InitContainerImage then you need to change it to bash or one that contains a bash shell.",source:"@site/versioned_docs/version-v1.1.1/7_upgrade_guides/2_v0.14.1_to_v0.15.0.md",sourceDirName:"7_upgrade_guides",slug:"/7_upgrade_guides/2_v0.14.1_to_v0.15.0",permalink:"/nifikop/docs/v1.1.1/7_upgrade_guides/2_v0.14.1_to_v0.15.0",draft:!1,editUrl:"https://github.com/konpyutaika/nifikop/edit/master/site/website/versioned_docs/version-v1.1.1/7_upgrade_guides/2_v0.14.1_to_v0.15.0.md",tags:[],version:"v1.1.1",lastUpdatedBy:"Juldrixx",lastUpdatedAt:1681501119,formattedLastUpdatedAt:"Apr 14, 2023",frontMatter:{id:"2_v0.14.1_to_v0.15.0",title:"v0.14.1 to v0.15.0",sidebar_label:"v0.14.1 to v0.15.0"},sidebar:"docs",previous:{title:"v0.7.x to v0.8.0",permalink:"/nifikop/docs/v1.1.1/7_upgrade_guides/1_v0.7.x_to_v0.8.0"},next:{title:"v0.16.0 to v1.0.0",permalink:"/nifikop/docs/v1.1.1/7_upgrade_guides/3_v0.16.0_to_v1.0.0"}},u={},c=[{value:"Getting started",id:"getting-started",level:2}],d={toc:c};function v(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/konpyutaika/nifikop/pull/189"},"PR #189")," changed the default Zookeeper init container image changed from ",(0,i.kt)("inlineCode",{parentName:"p"},"busybox")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"bash"),". If you have overridden the ",(0,i.kt)("inlineCode",{parentName:"p"},"NifiCluster.Spec.InitContainerImage")," then you need to change it to ",(0,i.kt)("inlineCode",{parentName:"p"},"bash")," or one that contains a bash shell."),(0,i.kt)("h2",{id:"getting-started"},"Getting started"),(0,i.kt)("p",null,"If you haven't overridden the default ",(0,i.kt)("inlineCode",{parentName:"p"},"NifiCluster.Spec.InitContainerImage"),", then there are no special upgrade instructions. If you have, like for example below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: nifi.konpyutaika.com/v1alpha1\nkind: NifiCluster\nmetadata:\n  name: mynifi\nspec:\n  initContainerImage:\n    repository: busybox\n    tag: "1.34.0"\n')),(0,i.kt)("p",null,"Then you must change it to ",(0,i.kt)("inlineCode",{parentName:"p"},"bash")," or an image that contains a bash shell:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: nifi.konpyutaika.com/v1alpha1\nkind: NifiCluster\nmetadata:\n  name: mynifi\nspec:\n  initContainerImage:\n    repository: bash\n    tag: "5.2.2"\n')))}v.isMDXComponent=!0}}]);