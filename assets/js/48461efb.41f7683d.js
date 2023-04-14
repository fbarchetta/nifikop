"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[33430],{35318:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(27378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),f=o,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||a;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},93473:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var n=r(25773),o=r(30808),a=(r(27378),r(35318)),i=["components"],s={id:"2_design_principles",title:"Design Principles",sidebar_label:"Design Principles"},l=void 0,c={unversionedId:"1_concepts/2_design_principles",id:"1_concepts/2_design_principles",title:"Design Principles",description:"This operator is built following the logic implied by the [operator sdk framework] (https://sdk.operatorframework.io/).",source:"@site/../docs/1_concepts/2_design_principles.md",sourceDirName:"1_concepts",slug:"/1_concepts/2_design_principles",permalink:"/nifikop/docs/next/1_concepts/2_design_principles",draft:!1,editUrl:"https://github.com/konpyutaika/nifikop/edit/master/site/website/../docs/1_concepts/2_design_principles.md",tags:[],version:"current",lastUpdatedBy:"Juldrixx",lastUpdatedAt:1664176632,formattedLastUpdatedAt:"Sep 26, 2022",frontMatter:{id:"2_design_principles",title:"Design Principles",sidebar_label:"Design Principles"},sidebar:"docs",previous:{title:"Start here",permalink:"/nifikop/docs/next/1_concepts/1_start_here"},next:{title:"Features",permalink:"/nifikop/docs/next/1_concepts/3_features"}},p={},u=[{value:"Separation of concerns",id:"separation-of-concerns",level:2},{value:"One controller per resource",id:"one-controller-per-resource",level:2}],d={toc:u};function f(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This operator is built following the logic implied by the ","[operator sdk framework]"," (",(0,a.kt)("a",{parentName:"p",href:"https://sdk.operatorframework.io/"},"https://sdk.operatorframework.io/"),").\nWhat we want to offer with NiFiKop is that we provide as much automation as possible to manage NiFi at scale and in the most automated way possible."),(0,a.kt)("h2",{id:"separation-of-concerns"},"Separation of concerns"),(0,a.kt)("p",null,"Kubernetes is designed for automation. Right out of the box, the Kubernetes core has a lot of automation features built in. You can use Kubernetes to automate the deployment and execution of workloads, and you can automate how Kubernetes does it."),(0,a.kt)("p",null,"The Kubernetes operator model concept allows you to extend cluster behavior without changing the Kubernetes code itself by binding controllers to one or more custom resources. Operators are clients of the Kubernetes API that act as controllers for a custom resource."),(0,a.kt)("p",null,"There are two things we can think of when we talk about operators in Kubernetes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Automate the deployment of my entire stack."),(0,a.kt)("li",{parentName:"ul"},"Automate the actions required by the deployment.")),(0,a.kt)("p",null,"For NiFiKop, we focus primarily on NiFi for the stack concept, what does that mean?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"We do not manage other components that can be integrated with NiFi Cluster like Prometheus, Zookeeper, NiFi registry etc."),(0,a.kt)("li",{parentName:"ul"},"We want to provide as many tools as possible to automate the work on NiFi (cluster deployment, data flow and user management, etc.).")),(0,a.kt)("p",null,"We consider that for NiFiKop to be a low-level operator, focused on NiFi and only NiFi, and if we want to manage a complex stack with e.g. Zookeeper, NiFi Registry, Prometheus etc. we need something else working at a higher level, like Helm charts or another operator controlling NiFiKop and other resources."),(0,a.kt)("h2",{id:"one-controller-per-resource"},"One controller per resource"),(0,a.kt)("p",null,"The operator should reflect as much as possible the behavior of the solution we want to automate. If we take our case with NiFi, what we can say is that:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You can have one or more NiFi clusters"),(0,a.kt)("li",{parentName:"ul"},"On your cluster you can define a NiFi registry client, but it is not mandatory."),(0,a.kt)("li",{parentName:"ul"},"You can also define users and groups and deploy a DataFlow if you want.")),(0,a.kt)("p",null,"This means that your cluster is not defined by what is deployed on it, and what you deploy on it does not depend on it.\nTo be more explicit, just because I deploy a NiFi cluster doesn't mean the DataFlow deployed on it will stay there, we can move the DataFlow from one cluster to another."),(0,a.kt)("p",null,"To manage this, we need to create different kinds of resources (",(0,a.kt)("a",{parentName:"p",href:"../5_references/1_nifi_cluster"},"NifiCluster"),", ",(0,a.kt)("a",{parentName:"p",href:"../5_references/5_nifi_dataflow"},"NifiDataflow"),", ",(0,a.kt)("a",{parentName:"p",href:"../5_references/4_nifi_parameter_context"},"NifiParameterContext"),", ",(0,a.kt)("a",{parentName:"p",href:"../5_references/2_nifi_user"},"NifiUser"),", ",(0,a.kt)("a",{parentName:"p",href:"../5_references/6_nifi_usergroup"},"NifiUserGroup"),", ",(0,a.kt)("a",{parentName:"p",href:"../5_references/3_nifi_registry_client"},"NifiRegistryClient"),", ",(0,a.kt)("a",{parentName:"p",href:"../5_references/7_nifi_nodegroup_autoscaler"},"NifiNodeGroupAutoscaler"),") with one controller per resource that will manage its own resource.\nIn this way, we can say:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"I deploy a NiFiCluster"),(0,a.kt)("li",{parentName:"ul"},"I define a NiFiDataflow that will be deployed on this cluster, and if I want to change cluster, I just have to change the ",(0,a.kt)("inlineCode",{parentName:"li"},"ClusterRef")," to change cluster")))}f.isMDXComponent=!0}}]);