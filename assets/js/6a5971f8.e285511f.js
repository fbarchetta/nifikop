"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[1920],{35318:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,g=u["".concat(p,".").concat(m)]||u[m]||c[m]||l;return n?a.createElement(g,i(i({ref:t},d),{},{components:n})):a.createElement(g,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},68237:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(25773),r=n(30808),l=(n(27378),n(35318)),i=["components"],o={id:"7_external_service_config",title:"External Service Config",sidebar_label:"External Service Config"},p=void 0,s={unversionedId:"5_references/1_nifi_cluster/7_external_service_config",id:"version-v1.3.0/5_references/1_nifi_cluster/7_external_service_config",title:"External Service Config",description:"ListenersConfig defines the Nifi listener types :",source:"@site/versioned_docs/version-v1.3.0/5_references/1_nifi_cluster/7_external_service_config.md",sourceDirName:"5_references/1_nifi_cluster",slug:"/5_references/1_nifi_cluster/7_external_service_config",permalink:"/nifikop/docs/5_references/1_nifi_cluster/7_external_service_config",draft:!1,editUrl:"https://github.com/konpyutaika/nifikop/edit/master/site/website/versioned_docs/version-v1.3.0/5_references/1_nifi_cluster/7_external_service_config.md",tags:[],version:"v1.3.0",lastUpdatedBy:"Juldrixx",lastUpdatedAt:1692604575,formattedLastUpdatedAt:"Aug 21, 2023",frontMatter:{id:"7_external_service_config",title:"External Service Config",sidebar_label:"External Service Config"},sidebar:"docs",previous:{title:"Listeners Config",permalink:"/nifikop/docs/5_references/1_nifi_cluster/6_listeners_config"},next:{title:"NiFi User",permalink:"/nifikop/docs/5_references/2_nifi_user"}},d={},c=[{value:"ExternalServiceConfig",id:"externalserviceconfig",level:2},{value:"ExternalServiceSpec",id:"externalservicespec",level:2},{value:"PortConfig",id:"portconfig",level:2},{value:"Metadata",id:"metadata",level:2}],u={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"ListenersConfig defines the Nifi listener types :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'  externalServices:\n    - name: "clusterip"\n      spec:\n        type: ClusterIP\n        portConfigs:\n          - port: 8080\n            internalListenerName: "http"\n      metadata:\n        annotations:\n          toto: tata\n        labels:\n          titi: tutu\n')),(0,l.kt)("h2",{id:"externalserviceconfig"},"ExternalServiceConfig"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"must be unique within a namespace. Name is primarily intended for creation idempotence and configuration."),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"metadata"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#metadata"},"Metadata")),(0,l.kt)("td",{parentName:"tr",align:null},"define additionnal metadata to merge to the service associated."),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"spec"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#externalservicespec"},"ExternalServiceSpec")),(0,l.kt)("td",{parentName:"tr",align:null},"defines the behavior of a service."),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h2",{id:"externalservicespec"},"ExternalServiceSpec"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"portConfigs"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"[","  ","]",(0,l.kt)("a",{parentName:"td",href:"#portconfig"},"PortConfig")),(0,l.kt)("td",{parentName:"tr",align:null},"Contains the list port for the service and the associated listener"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"clusterIP"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"More info: ",(0,l.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies"},"https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies")),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"type"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://godoc.org/k8s.io/api/core/v1#ServiceType"},"ServiceType")),(0,l.kt)("td",{parentName:"tr",align:null},"type determines how the Service is exposed. Defaults to ClusterIP. Valid options are ExternalName, ClusterIP, NodePort, and LoadBalancer."),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"externalIPs"),(0,l.kt)("td",{parentName:"tr",align:null},"[","  ","]","string"),(0,l.kt)("td",{parentName:"tr",align:null},"externalIPs is a list of IP addresses for which nodes in the cluster will also accept traffic for this service.  These IPs are not managed by Kubernetes"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"loadBalancerIP"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Only applies to Service Type: LoadBalancer. LoadBalancer will get created with the IP specified in this field."),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"loadBalancerSourceRanges"),(0,l.kt)("td",{parentName:"tr",align:null},"[","  ","]","string"),(0,l.kt)("td",{parentName:"tr",align:null},"If specified and supported by the platform, this will restrict traffic through the cloud-provider load-balancer will be restricted to the specified client IPs"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"externalName"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"externalName is the external reference that kubedns or equivalent will return as a CNAME record for this service. No proxying will be involved."),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-")))),(0,l.kt)("h2",{id:"portconfig"},"PortConfig"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"port"),(0,l.kt)("td",{parentName:"tr",align:null},"int32"),(0,l.kt)("td",{parentName:"tr",align:null},"The port that will be exposed by this service."),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"internalListenerName"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the listener which will be used as target container."),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")))),(0,l.kt)("h2",{id:"metadata"},"Metadata"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"annotations"),(0,l.kt)("td",{parentName:"tr",align:null},"map","[","string","]","string"),(0,l.kt)("td",{parentName:"tr",align:null},"Additionnal annotation to merge to the service associated ",(0,l.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/#syntax-and-character-set"},"annotations"),"."),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"nil")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"labels"),(0,l.kt)("td",{parentName:"tr",align:null},"map","[","string","]","string"),(0,l.kt)("td",{parentName:"tr",align:null},"Additionnal labels to merge to the service associated ",(0,l.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#syntax-and-character-set"},"labels"),"."),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"nil")))))}m.isMDXComponent=!0}}]);