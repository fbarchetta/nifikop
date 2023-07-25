"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[9e4],{35318:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var i=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||a;return n?i.createElement(f,s(s({ref:t},u),{},{components:n})):i.createElement(f,s({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var p=2;p<a;p++)s[p]=n[p];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},72178:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var i=n(25773),r=n(30808),a=(n(27378),n(35318)),s=["components"],o={id:"0_design_principles",title:"Design Principles",sidebar_label:"Design Principles"},l=void 0,p={unversionedId:"3_manage_nifi/1_manage_clusters/0_design_principles",id:"version-v1.1.1/3_manage_nifi/1_manage_clusters/0_design_principles",title:"Design Principles",description:"Pod level management",source:"@site/versioned_docs/version-v1.1.1/3_manage_nifi/1_manage_clusters/0_design_principles.md",sourceDirName:"3_manage_nifi/1_manage_clusters",slug:"/3_manage_nifi/1_manage_clusters/0_design_principles",permalink:"/nifikop/docs/v1.1.1/3_manage_nifi/1_manage_clusters/0_design_principles",draft:!1,editUrl:"https://github.com/konpyutaika/nifikop/edit/master/site/website/versioned_docs/version-v1.1.1/3_manage_nifi/1_manage_clusters/0_design_principles.md",tags:[],version:"v1.1.1",lastUpdatedBy:"Juldrixx",lastUpdatedAt:1681501119,formattedLastUpdatedAt:"Apr 14, 2023",frontMatter:{id:"0_design_principles",title:"Design Principles",sidebar_label:"Design Principles"},sidebar:"docs",previous:{title:"Customizable install with Helm",permalink:"/nifikop/docs/v1.1.1/2_deploy_nifikop/2_customizable_install_with_helm"},next:{title:"Quick start",permalink:"/nifikop/docs/v1.1.1/3_manage_nifi/1_manage_clusters/1_deploy_cluster/1_quick_start"}},u={},c=[{value:"Pod level management",id:"pod-level-management",level:2}],d={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,s);return(0,a.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"pod-level-management"},"Pod level management"),(0,a.kt)("p",null,"NiFi is a stateful application. The first piece of the puzzle is the Node, which is a simple server capable of createing/forming a cluster with other Nodes. Every Node has his own ",(0,a.kt)("strong",{parentName:"p"},"unique")," configuration which differs slightly from all others."),(0,a.kt)("p",null,"All NiFi on Kubernetes setup use ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/"},"StatefulSet")," to create a NiFi Cluster. Just to quickly recap from the K8s docs:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"StatefulSet manages the deployment and scaling of a set of Pods, and provide guarantees about their ordering and uniqueness. Like a Deployment, a StatefulSet manages Pods that are based on an identical container spec. Unlike a Deployment, a StatefulSet maintains sticky identities for each of its Pods. These pods are created from the same spec, but are not interchangeable: each has a persistent identifier that is maintained across any rescheduling.")),(0,a.kt)("p",null,"How does this looks from the perspective of Apache NiFi ?"),(0,a.kt)("p",null,"With StatefulSet we get :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"unique Node IDs generated during Pod startup"),(0,a.kt)("li",{parentName:"ul"},"networking between Nodes with headless services"),(0,a.kt)("li",{parentName:"ul"},"unique Persistent Volumes for Nodes")),(0,a.kt)("p",null,"Using StatefulSet we ",(0,a.kt)("strong",{parentName:"p"},"lose")," the ability to :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"modify the configuration of unique Nodes"),(0,a.kt)("li",{parentName:"ul"},"remove a specific Node from a cluster (StatefulSet always removes the most recently created Node)"),(0,a.kt)("li",{parentName:"ul"},"use multiple, different Persistent Volumes for each Node")),(0,a.kt)("p",null,"The NiFi Operator uses ",(0,a.kt)("inlineCode",{parentName:"p"},"simple")," Pods, ConfigMaps, and PersistentVolumeClaims, instead of StatefulSet (based on the design used by ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/banzaicloud/kafka-operator"},"Banzai Cloud Kafka Operator"),").\nUsing these resources allows us to build an Operator which is better suited to NiFi."),(0,a.kt)("p",null,"With the NiFi operator we can:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"modify the configuration of unique Nodes"),(0,a.kt)("li",{parentName:"ul"},"remove specific Nodes from clusters"),(0,a.kt)("li",{parentName:"ul"},"use multiple Persistent Volumes for each Node")))}m.isMDXComponent=!0}}]);