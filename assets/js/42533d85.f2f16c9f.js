"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[50134],{35318:(t,e,a)=>{a.d(e,{Zo:()=>o,kt:()=>N});var n=a(27378);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var d=n.createContext({}),u=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},o=function(t){var e=u(t.components);return n.createElement(d.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,d=t.parentName,o=p(t,["components","mdxType","originalType","parentName"]),k=u(a),N=l,s=k["".concat(d,".").concat(N)]||k[N]||m[N]||r;return a?n.createElement(s,i(i({ref:e},o),{},{components:a})):n.createElement(s,i({ref:e},o))}));function N(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,i=new Array(r);i[0]=k;var p={};for(var d in e)hasOwnProperty.call(e,d)&&(p[d]=e[d]);p.originalType=t,p.mdxType="string"==typeof t?t:l,i[1]=p;for(var u=2;u<r;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},61400:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>d,default:()=>N,frontMatter:()=>p,metadata:()=>u,toc:()=>m});var n=a(25773),l=a(30808),r=(a(27378),a(35318)),i=["components"],p={id:"5_nifi_dataflow",title:"NiFi Dataflow",sidebar_label:"NiFi Dataflow"},d=void 0,u={unversionedId:"5_references/5_nifi_dataflow",id:"version-v0.15.0/5_references/5_nifi_dataflow",title:"NiFi Dataflow",description:"NifiDataflow is the Schema for the NiFi dataflow API.",source:"@site/versioned_docs/version-v0.15.0/5_references/5_nifi_dataflow.md",sourceDirName:"5_references",slug:"/5_references/5_nifi_dataflow",permalink:"/nifikop/docs/v0.15.0/5_references/5_nifi_dataflow",draft:!1,editUrl:"https://github.com/konpyutaika/nifikop/edit/master/site/website/versioned_docs/version-v0.15.0/5_references/5_nifi_dataflow.md",tags:[],version:"v0.15.0",lastUpdatedBy:"Juldrixx",lastUpdatedAt:1666864026,formattedLastUpdatedAt:"Oct 27, 2022",frontMatter:{id:"5_nifi_dataflow",title:"NiFi Dataflow",sidebar_label:"NiFi Dataflow"},sidebar:"docs",previous:{title:"NiFi Parameter Context",permalink:"/nifikop/docs/v0.15.0/5_references/4_nifi_parameter_context"},next:{title:"NiFi UserGroup",permalink:"/nifikop/docs/v0.15.0/5_references/6_nifi_usergroup"}},o={},m=[{value:"NifiDataflow",id:"nifidataflow",level:2},{value:"NifiDataflowsSpec",id:"nifidataflowsspec",level:2},{value:"NifiDataflowStatus",id:"nifidataflowstatus",level:2},{value:"DataflowUpdateStrategy",id:"dataflowupdatestrategy",level:2},{value:"DataflowState",id:"dataflowstate",level:2},{value:"UpdateRequest",id:"updaterequest",level:2},{value:"DropRequest",id:"droprequest",level:2},{value:"DataflowUpdateRequestType",id:"dataflowupdaterequesttype",level:2},{value:"FlowPosition",id:"flowposition",level:2}],k={toc:m};function N(t){var e=t.components,a=(0,l.Z)(t,i);return(0,r.kt)("wrapper",(0,n.Z)({},k,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"NifiDataflow")," is the Schema for the NiFi dataflow API."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: nifi.konpyutaika.com/v1alpha1\nkind: NifiDataflow\nmetadata:\n  name: dataflow-lifecycle\nspec:\n  parentProcessGroupID: "16cfd2ec-0174-1000-0000-00004b9b35cc"\n  bucketId: "01ced6cc-0378-4893-9403-f6c70d080d4f"\n  flowId: "9b2fb465-fb45-49e7-94fe-45b16b642ac9"\n  flowVersion: 2\n  flowPosition:\n    posX: 0\n    posY: 0\n  syncMode: always\n  skipInvalidControllerService: true\n  skipInvalidComponent: true\n  clusterRef:\n    name: nc\n    namespace: nifikop\n  registryClientRef:\n    name: squidflow\n    namespace: nifikop\n  parameterContextRef:\n    name: dataflow-lifecycle\n    namespace: nifikop\n  updateStrategy: drain\n')),(0,r.kt)("h2",{id:"nifidataflow"},"NifiDataflow"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"metadata"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://godoc.org/k8s.io/apimachinery/pkg/apis/meta/v1#ObjectMeta"},"ObjectMetadata")),(0,r.kt)("td",{parentName:"tr",align:null},"is metadata that all persisted resources must have, which includes all objects dataflows must create."),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"nil")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"spec"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#NifiDataflowspec"},"NifiDataflowSpec")),(0,r.kt)("td",{parentName:"tr",align:null},"defines the desired state of NifiDataflow."),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"nil")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"status"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#NifiDataflowstatus"},"NifiDataflowStatus")),(0,r.kt)("td",{parentName:"tr",align:null},"defines the observed state of NifiDataflow."),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"nil")))),(0,r.kt)("h2",{id:"nifidataflowsspec"},"NifiDataflowsSpec"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"parentProcessGroupID"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"the UUID of the parent process group where you want to deploy your dataflow, if not set deploy at root level."),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bucketId"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"the UUID of the Bucket containing the flow."),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"flowId"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"the UUID of the flow to run."),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"flowVersion"),(0,r.kt)("td",{parentName:"tr",align:null},"*int32"),(0,r.kt)("td",{parentName:"tr",align:null},"the version of the flow to run."),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"flowPosition"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#flowposition"},"FlowPosition")),(0,r.kt)("td",{parentName:"tr",align:null},"the position of your dataflow in the canvas."),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"syncMode"),(0,r.kt)("td",{parentName:"tr",align:null},'Enum={"never","always","once"}'),(0,r.kt)("td",{parentName:"tr",align:null},"if the flow will be synchronized once, continuously or never."),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"always")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"skipInvalidControllerService"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"whether the flow is considered as ran if some controller services are still invalid or not."),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"skipInvalidComponent"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"whether the flow is considered as ran if some components are still invalid or not."),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"updateStrategy"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#dataflowupdatestrategy"},"DataflowUpdateStrategy")),(0,r.kt)("td",{parentName:"tr",align:null},"describes the way the operator will deal with data when a dataflow will be updated : Drop or Drain"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"drain")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"clusterRef"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"./2_nifi_user#clusterreference"},"ClusterReference")),(0,r.kt)("td",{parentName:"tr",align:null},"contains the reference to the NifiCluster with the one the user is linked."),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"parameterContextRef"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"./4_nifi_parameter_context#parametercontextreference"},"ParameterContextReference")),(0,r.kt)("td",{parentName:"tr",align:null},"contains the reference to the ParameterContext with the one the dataflow is linked."),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"registryClientRef"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"./3_nifi_registry_client#registryclientreference"},"RegistryClientReference")),(0,r.kt)("td",{parentName:"tr",align:null},"contains the reference to the NifiRegistry with the one the dataflow is linked."),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"-")))),(0,r.kt)("h2",{id:"nifidataflowstatus"},"NifiDataflowStatus"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"processGroupID"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"process Group ID."),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"state"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#dataflowstate"},"DataflowState")),(0,r.kt)("td",{parentName:"tr",align:null},"the dataflow current state."),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"latestUpdateRequest"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#updaterequest"},"UpdateRequest")),(0,r.kt)("td",{parentName:"tr",align:null},"the latest update request sent."),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"latestDropRequest"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#droprequest"},"DropRequest")),(0,r.kt)("td",{parentName:"tr",align:null},"the latest queue drop request sent."),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"-")))),(0,r.kt)("h2",{id:"dataflowupdatestrategy"},"DataflowUpdateStrategy"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DrainStrategy"),(0,r.kt)("td",{parentName:"tr",align:null},"drain"),(0,r.kt)("td",{parentName:"tr",align:null},"leads to shutting down only input components (Input processors, remote input process group) and dropping all flowfiles from the flow.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DropStrategy"),(0,r.kt)("td",{parentName:"tr",align:null},"drop"),(0,r.kt)("td",{parentName:"tr",align:null},"leads to shutting down all components and dropping all flowfiles from the flow.")))),(0,r.kt)("h2",{id:"dataflowstate"},"DataflowState"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DataflowStateCreated"),(0,r.kt)("td",{parentName:"tr",align:null},"Created"),(0,r.kt)("td",{parentName:"tr",align:null},"describes the status of a NifiDataflow as created.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DataflowStateStarting"),(0,r.kt)("td",{parentName:"tr",align:null},"Starting"),(0,r.kt)("td",{parentName:"tr",align:null},"describes the status of a NifiDataflow as starting.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DataflowStateRan"),(0,r.kt)("td",{parentName:"tr",align:null},"Ran"),(0,r.kt)("td",{parentName:"tr",align:null},"describes the status of a NifiDataflow as running.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DataflowStateOutOfSync"),(0,r.kt)("td",{parentName:"tr",align:null},"OutOfSync"),(0,r.kt)("td",{parentName:"tr",align:null},"describes the status of a NifiDataflow as out of sync.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DataflowStateInSync"),(0,r.kt)("td",{parentName:"tr",align:null},"InSync"),(0,r.kt)("td",{parentName:"tr",align:null},"describes the status of a NifiDataflow as in sync.")))),(0,r.kt)("h2",{id:"updaterequest"},"UpdateRequest"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"type"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#dataflowupdaterequesttype"},"DataflowUpdateRequestType")),(0,r.kt)("td",{parentName:"tr",align:null},"defines the type of versioned flow update request."),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"id"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"the id of the update request."),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"uri"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"the uri for this request."),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lastUpdated"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"the last time this request was updated."),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"complete"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"whether or not this request has completed."),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"failureReason"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"an explication of why the request failed, or null if this request has not failed."),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"percentCompleted"),(0,r.kt)("td",{parentName:"tr",align:null},"int32"),(0,r.kt)("td",{parentName:"tr",align:null},"the percentage complete of the request, between 0 and 100."),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"state"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"the state of the request."),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"-")))),(0,r.kt)("h2",{id:"droprequest"},"DropRequest"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"connectionId"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"the connection id."),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"id"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"the id for this drop request."),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"uri"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"the uri for this request."),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lastUpdated"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"the last time this request was updated."),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"finished"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"whether the request has finished."),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"failureReason"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"an explication of why the request failed, or null if this request has not failed."),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"percentCompleted"),(0,r.kt)("td",{parentName:"tr",align:null},"int32"),(0,r.kt)("td",{parentName:"tr",align:null},"the percentage complete of the request, between 0 and 100."),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"currentCount"),(0,r.kt)("td",{parentName:"tr",align:null},"int32"),(0,r.kt)("td",{parentName:"tr",align:null},"the number of flow files currently queued."),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"currentSize"),(0,r.kt)("td",{parentName:"tr",align:null},"int64"),(0,r.kt)("td",{parentName:"tr",align:null},"the size of flow files currently queued in bytes."),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"current"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"the count and size of flow files currently queued."),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"originalCount"),(0,r.kt)("td",{parentName:"tr",align:null},"int32"),(0,r.kt)("td",{parentName:"tr",align:null},"the number of flow files to be dropped as a result of this request."),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"originalSize"),(0,r.kt)("td",{parentName:"tr",align:null},"int64"),(0,r.kt)("td",{parentName:"tr",align:null},"the size of flow files to be dropped as a result of this request in bytes."),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"original"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"the count and size of flow files to be dropped as a result of this request."),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"droppedCount"),(0,r.kt)("td",{parentName:"tr",align:null},"int32"),(0,r.kt)("td",{parentName:"tr",align:null},"the number of flow files that have been dropped thus far."),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"droppedSize"),(0,r.kt)("td",{parentName:"tr",align:null},"int64"),(0,r.kt)("td",{parentName:"tr",align:null},"the size of flow files currently queued in bytes."),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Dropped"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"the count and size of flow files that have been dropped thus far."),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"state"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"the state of the request."),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"-")))),(0,r.kt)("h2",{id:"dataflowupdaterequesttype"},"DataflowUpdateRequestType"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RevertRequestType"),(0,r.kt)("td",{parentName:"tr",align:null},"Revert"),(0,r.kt)("td",{parentName:"tr",align:null},"defines a revert changes request.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"UpdateRequestType"),(0,r.kt)("td",{parentName:"tr",align:null},"Update"),(0,r.kt)("td",{parentName:"tr",align:null},"defines an update version request.")))),(0,r.kt)("h2",{id:"flowposition"},"FlowPosition"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"posX"),(0,r.kt)("td",{parentName:"tr",align:null},"int64"),(0,r.kt)("td",{parentName:"tr",align:null},"the x coordinate."),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"posY"),(0,r.kt)("td",{parentName:"tr",align:null},"int64"),(0,r.kt)("td",{parentName:"tr",align:null},"the y coordinate."),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"-")))))}N.isMDXComponent=!0}}]);