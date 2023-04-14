"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[23263],{35318:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=l(n),d=r,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||i;return n?a.createElement(f,s(s({ref:t},u),{},{components:n})):a.createElement(f,s({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var l=2;l<i;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},38823:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(25773),r=n(30808),i=(n(27378),n(35318)),s=["components"],o={id:"1_users_management",title:"Users management",sidebar_label:"Users management"},c=void 0,l={unversionedId:"3_manage_nifi/2_manage_users_and_accesses/1_users_management",id:"version-v1.1.0/3_manage_nifi/2_manage_users_and_accesses/1_users_management",title:"Users management",description:"The NifiUser resource was already introduced for the SSL credentials concerns.",source:"@site/versioned_docs/version-v1.1.0/3_manage_nifi/2_manage_users_and_accesses/1_users_management.md",sourceDirName:"3_manage_nifi/2_manage_users_and_accesses",slug:"/3_manage_nifi/2_manage_users_and_accesses/1_users_management",permalink:"/nifikop/docs/v1.1.0/3_manage_nifi/2_manage_users_and_accesses/1_users_management",draft:!1,editUrl:"https://github.com/konpyutaika/nifikop/edit/master/site/website/versioned_docs/version-v1.1.0/3_manage_nifi/2_manage_users_and_accesses/1_users_management.md",tags:[],version:"v1.1.0",lastUpdatedBy:"Juldrixx",lastUpdatedAt:1679343499,formattedLastUpdatedAt:"Mar 20, 2023",frontMatter:{id:"1_users_management",title:"Users management",sidebar_label:"Users management"},sidebar:"docs",previous:{title:"External cluster",permalink:"/nifikop/docs/v1.1.0/3_manage_nifi/1_manage_clusters/3_external_cluster"},next:{title:"Groups management",permalink:"/nifikop/docs/v1.1.0/3_manage_nifi/2_manage_users_and_accesses/2_groups_management"}},u={},p=[],m={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"NifiUser")," resource was already introduced for the ",(0,i.kt)("a",{parentName:"p",href:"../1_manage_clusters/1_deploy_cluster/4_ssl_configuration#create-ssl-credentials"},"SSL credentials")," concerns.\nWhat we are covering here is the NiFi user management part introduced in this resource."),(0,i.kt)("p",null,"When you create a ",(0,i.kt)("inlineCode",{parentName:"p"},"NifiUser")," resource the operator will :"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Try to check if a user already exists with the same name on the NiFi cluster, if it does, the operator will set ",(0,i.kt)("a",{parentName:"li",href:"../1_manage_clusters/1_deploy_cluster/4_ssl_configuration#create-ssl-credentials"},"NifiUser.Status.Id")," to bind it with the kubernetes resource."),(0,i.kt)("li",{parentName:"ol"},"If no user is found, the operator will create and manage it (i.e it will ensure the synchronisation with the NiFi Cluster).")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: nifi.konpyutaika.com/v1\nkind: NifiUser\nmetadata:\n  name: aguitton\nspec:\n  # identity field is use to define the user identity on NiFi cluster side,\n  # it use full when the user\'s name doesn\'t suite with Kubernetes resource name.\n  identity: alexandre.guitton@konpyutaika.com\n  # Contains the reference to the NifiCluster with the one the registry client is linked.\n  clusterRef:\n    name: nc\n    namespace: nifikop\n  # Whether or not the the operator also include a Java keystore format (JKS) with you secret\n  includeJKS: false\n  # Whether or not a certificate will be created for this user.\n  createCert: false\n  # defines the list of access policies that will be granted to the group.\n  accessPolicies:\n      # defines the kind of access policy, could be "global" or "component".\n    - type: component\n      # defines the kind of action that will be granted, could be "read" or "write"\n      action: read\n      # resource defines the kind of resource targeted by this access policies, please refer to the following page :\n      # https://nifi.apache.org/docs/nifi-docs/html/administration-guide.html#access-policies\n      resource: /data\n      # componentType is used if the type is "component", it\'s allow to define the kind of component on which is the\n      # access policy\n      componentType: "process-groups"\n      # componentId is used if the type is "component", it\'s allow to define the id of the component on which is the\n      # access policy\n      componentId: ""\n')),(0,i.kt)("p",null,"By default the user name that will be used is the name of the resource."),(0,i.kt)("p",null,"But as there are some constraints on this name (e.g ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#dns-subdomain-names"},"RFC 1123"),") that doesn't match with those applied on NiFi, you can override it with the ",(0,i.kt)("inlineCode",{parentName:"p"},"NifiUser.Spec.Identity")," field which is more permissive.\nIn the example above the kubernetes resource name will be ",(0,i.kt)("inlineCode",{parentName:"p"},"aguitton")," but the NiFi use created on the cluster will be ",(0,i.kt)("inlineCode",{parentName:"p"},"alexandre.guitton@konpyutaika.com"),"."),(0,i.kt)("p",null,"In the case the user will not authenticate himself using TLS authentication, the operator doesn't have to create a certificate, so just set ",(0,i.kt)("inlineCode",{parentName:"p"},"NifiUser.Spec.CreateCert")," to false."),(0,i.kt)("p",null,"For each user, you have the ability to define a list of ",(0,i.kt)("a",{parentName:"p",href:"../../5_references/2_nifi_user#accesspolicy"},"AccessPolicies")," to give a list of access to your user.\nIn the example above we are giving to user ",(0,i.kt)("inlineCode",{parentName:"p"},"alexandre.guitton@konpyutaika.com")," the right to view metadata et content for the root process group in flowfile queues in outbound connections and through provenance events."))}d.isMDXComponent=!0}}]);