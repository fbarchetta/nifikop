"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[13645],{35318:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),v=p(n),m=a,d=v["".concat(s,".").concat(m)]||v[m]||u[m]||i;return n?r.createElement(d,o(o({ref:t},c),{},{components:n})):r.createElement(d,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=v;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}v.displayName="MDXCreateElement"},14130:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var r=n(25773),a=n(30808),i=(n(27378),n(35318)),o=["components"],l={id:"3_v0.16.0_to_v1.0.0",title:"v0.16.0 to v1.0.0",sidebar_label:"v0.16.0 to v1.0.0"},s="Getting started",p={unversionedId:"7_upgrade_guides/3_v0.16.0_to_v1.0.0",id:"version-v1.0.0/7_upgrade_guides/3_v0.16.0_to_v1.0.0",title:"v0.16.0 to v1.0.0",description:"Moving from v0.16.0 to v1.0.0 version implies the migration of some CRD versions from v1alpha1 to v1:",source:"@site/versioned_docs/version-v1.0.0/7_upgrade_guides/3_v0.16.0_to_v1.0.0.md",sourceDirName:"7_upgrade_guides",slug:"/7_upgrade_guides/3_v0.16.0_to_v1.0.0",permalink:"/nifikop/docs/v1.0.0/7_upgrade_guides/3_v0.16.0_to_v1.0.0",draft:!1,editUrl:"https://github.com/konpyutaika/nifikop/edit/master/site/website/versioned_docs/version-v1.0.0/7_upgrade_guides/3_v0.16.0_to_v1.0.0.md",tags:[],version:"v1.0.0",lastUpdatedBy:"Juldrixx",lastUpdatedAt:1669025338,formattedLastUpdatedAt:"Nov 21, 2022",frontMatter:{id:"3_v0.16.0_to_v1.0.0",title:"v0.16.0 to v1.0.0",sidebar_label:"v0.16.0 to v1.0.0"},sidebar:"docs",previous:{title:"v0.14.1 to v0.15.0",permalink:"/nifikop/docs/v1.0.0/7_upgrade_guides/2_v0.14.1_to_v0.15.0"}},c={},u=[],v={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"getting-started"},"Getting started"),(0,i.kt)("p",null,"Moving from ",(0,i.kt)("inlineCode",{parentName:"p"},"v0.16.0")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"v1.0.0")," version implies the migration of some CRD versions from ",(0,i.kt)("inlineCode",{parentName:"p"},"v1alpha1")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"v1"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"NifiCluster"),(0,i.kt)("li",{parentName:"ul"},"NifiDataflow"),(0,i.kt)("li",{parentName:"ul"},"NifiParameterContext"),(0,i.kt)("li",{parentName:"ul"},"NifiRegistryClient"),(0,i.kt)("li",{parentName:"ul"},"NifiUser"),(0,i.kt)("li",{parentName:"ul"},"NifiUserGroup")),(0,i.kt)("p",null,"To manage this resource version migration, you have to: "),(0,i.kt)("p",null,"1 - Upgrade your NifiKop helm chart release, that will enable conversion webhook in the operator pod (as the ",(0,i.kt)("inlineCode",{parentName:"p"},"webhook.enabled")," values is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," by default).\n2 - Patch the CRDs associated to the resources with : "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"...\nannotations:\n    cert-manager.io/inject-ca-from: ${namespace}/${certificate_name}\n...\nspec:\n  ...\n  conversion:\n    strategy: Webhook\n    webhook:\n      clientConfig:\n        service:\n          namespace: ${namespace}\n          name: ${webhook_service_name}\n          path: /convert\n      conversionReviewVersions:\n        - v1\n        - v1alpha1\n  ...\n")),(0,i.kt)("p",null,"Where :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"namespace"),": is the namespace in which you will deploy your helm chart."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"certificate_name"),": is ",(0,i.kt)("inlineCode",{parentName:"li"},"${helm release name}-webhook-cert")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"webhook_service_name"),": is ",(0,i.kt)("inlineCode",{parentName:"li"},"${helm release name}-webhook-cert"))))}m.isMDXComponent=!0}}]);