"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[3995],{5318:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>c});var n=a(7378);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(a),c=l,k=m["".concat(s,".").concat(c)]||m[c]||d[c]||r;return a?n.createElement(k,i(i({ref:t},u),{},{components:a})):n.createElement(k,i({ref:t},u))}));function c(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9798:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7378),l=a(8944);const r="tabItem_wHwb";function i(e){var t=e.children,a=e.hidden,i=e.className;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,i),hidden:a},t)}},3337:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(5773),l=a(7378),r=a(8944),i=a(6457),o=a(784),s=a(9947),p=a(3457);const u="tabList_J5MA",d="tabItem_l0OV";function m(e){var t,a,i=e.lazy,m=e.block,c=e.defaultValue,k=e.values,f=e.groupId,h=e.className,g=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),N=null!=k?k:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,o.l)(N,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===c?c:null!=(t=null!=c?c:null==(a=g.find((function(e){return e.props.default})))?void 0:a.props.value)?t:g[0].props.value;if(null!==b&&!N.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+N.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=(0,s.U)(),C=v.tabGroupChoices,_=v.setTabGroupChoices,w=(0,l.useState)(b),T=w[0],O=w[1],I=[],D=(0,p.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var E=C[f];null!=E&&E!==T&&N.some((function(e){return e.value===E}))&&O(E)}var x=function(e){var t=e.currentTarget,a=I.indexOf(t),n=N[a].value;n!==T&&(D(t),O(n),null!=f&&_(f,String(n)))},P=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n,l=I.indexOf(e.currentTarget)+1;a=null!=(n=I[l])?n:I[0];break;case"ArrowLeft":var r,i=I.indexOf(e.currentTarget)-1;a=null!=(r=I[i])?r:I[I.length-1]}null==(t=a)||t.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",u)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":m},h)},N.map((function(e){var t=e.value,a=e.label,i=e.attributes;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return I.push(e)},onKeyDown:P,onFocus:x,onClick:x},i,{className:(0,r.Z)("tabs__item",d,null==i?void 0:i.className,{"tabs__item--active":T===t})}),null!=a?a:t)}))),i?(0,l.cloneElement)(g.filter((function(e){return e.props.value===T}))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},g.map((function(e,t){return(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function c(e){var t=(0,i.Z)();return l.createElement(m,(0,n.Z)({key:String(t)},e))}},8182:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>f,frontMatter:()=>p,metadata:()=>d,toc:()=>c});var n=a(5773),l=a(808),r=(a(7378),a(5318)),i=a(3337),o=a(9798),s=["components"],p={id:"2_customizable_install_with_helm",title:"Customizable install with Helm",sidebar_label:"Customizable install with Helm"},u=void 0,d={unversionedId:"2_deploy_nifikop/2_customizable_install_with_helm",id:"version-v0.14.1/2_deploy_nifikop/2_customizable_install_with_helm",title:"Customizable install with Helm",description:"Prerequisites",source:"@site/versioned_docs/version-v0.14.1/2_deploy_nifikop/2_customizable_install_with_helm.md",sourceDirName:"2_deploy_nifikop",slug:"/2_deploy_nifikop/2_customizable_install_with_helm",permalink:"/nifikop/docs/2_deploy_nifikop/2_customizable_install_with_helm",draft:!1,editUrl:"https://github.com/konpyutaika/nifikop/edit/master/site/website/versioned_docs/version-v0.14.1/2_deploy_nifikop/2_customizable_install_with_helm.md",tags:[],version:"v0.14.1",lastUpdatedBy:"Juldrixx",lastUpdatedAt:1664176632,formattedLastUpdatedAt:"Sep 26, 2022",frontMatter:{id:"2_customizable_install_with_helm",title:"Customizable install with Helm",sidebar_label:"Customizable install with Helm"},sidebar:"docs",previous:{title:"Quick start",permalink:"/nifikop/docs/2_deploy_nifikop/1_quick_start"},next:{title:"Design Principles",permalink:"/nifikop/docs/3_manage_nifi/1_manage_clusters/0_design_principles"}},m={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Introduction",id:"introduction",level:2},{value:"Configuration",id:"configuration",level:3},{value:"Installing the Chart",id:"installing-the-chart",level:3},{value:"Listing deployed charts",id:"listing-deployed-charts",level:3},{value:"Get Status for the helm deployment",id:"get-status-for-the-helm-deployment",level:3},{value:"Uninstaling the Charts",id:"uninstaling-the-charts",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Install of the CRD",id:"install-of-the-crd",level:3}],k={toc:c};function f(e){var t=e.components,a=(0,l.Z)(e,s);return(0,r.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Perform any necessary ",(0,r.kt)("a",{parentName:"li",href:"./1_quick_start"},"plateform-specific setup")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/helm/helm#install"},"Install a Helm client")," with a version higher than 3")),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"This Helm chart install NiFiKop the Nifi Kubernetes operator to create/configure/manage NiFi\nclusters in a Kubernetes Namespace."),(0,r.kt)("p",null,"It will use Custom Ressources Definition CRDs:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"nificlusters.nifi.konpyutaika.com"),","),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"nifiusers.nifi.konpyutaika.com"),","),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"nifiusergroups.nifi.konpyutaika.com"),","),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"nifiregistryclients.nifi.konpyutaika.com"),","),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"nifiparametercontexts.nifi.konpyutaika.com"),","),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"nifidataflows.nifi.konpyutaika.com"),","),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"nifinodegroupautoscalers.nifi.konpyutaika.com"),",")),(0,r.kt)("h3",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"The following tables lists the configurable parameters of the NiFi Operator Helm chart and their default values."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"image.repository")),(0,r.kt)("td",{parentName:"tr",align:null},"Image"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ghcr.io/konpyutaika/docker-images/nifikop"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"image.tag")),(0,r.kt)("td",{parentName:"tr",align:null},"Image tag"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"v0.14.1-release"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"image.pullPolicy")),(0,r.kt)("td",{parentName:"tr",align:null},"Image pull policy"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Always"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"image.imagePullSecrets.enabled")),(0,r.kt)("td",{parentName:"tr",align:null},"Enable tue use of secret for docker image"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"image.imagePullSecrets.name")),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the secret to connect to docker registry"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"certManager.enabled")),(0,r.kt)("td",{parentName:"tr",align:null},"Enable cert-manager integration"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"rbacEnable")),(0,r.kt)("td",{parentName:"tr",align:null},"If true, create & use RBAC resources"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"labels")),(0,r.kt)("td",{parentName:"tr",align:null},"Labels to add to all deployed resources"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{}"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"annotations")),(0,r.kt)("td",{parentName:"tr",align:null},"Annotations to add to all deployed resources"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{}"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"resources")),(0,r.kt)("td",{parentName:"tr",align:null},"Pod resource requests & limits"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{}"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"metrics.enabled")),(0,r.kt)("td",{parentName:"tr",align:null},"deploy service for metrics"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"metrics.port")),(0,r.kt)("td",{parentName:"tr",align:null},"Set port for operator metrics"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"8081"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"logLevel")),(0,r.kt)("td",{parentName:"tr",align:null},"Log level to output"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Info"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"logEncoding")),(0,r.kt)("td",{parentName:"tr",align:null},"Log encoding to use. Either ",(0,r.kt)("inlineCode",{parentName:"td"},"json")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"console")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"json"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"certManager.clusterScoped")),(0,r.kt)("td",{parentName:"tr",align:null},"If true setup cluster scoped resources"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"namespaces")),(0,r.kt)("td",{parentName:"tr",align:null},"List of namespaces where Operator watches for custom resources. Make sure the operator ServiceAccount is granted ",(0,r.kt)("inlineCode",{parentName:"td"},"get")," permissions on this ",(0,r.kt)("inlineCode",{parentName:"td"},"Node")," resource when using limited RBACs."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'""')," i.e. all namespaces")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"nodeSelector")),(0,r.kt)("td",{parentName:"tr",align:null},"Node selector configuration for operator pod"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{}"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"affinity")),(0,r.kt)("td",{parentName:"tr",align:null},"Node affinity configuration for operator pod"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{}"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"tolerations")),(0,r.kt)("td",{parentName:"tr",align:null},"Toleration configuration for operator pod"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{}"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"serviceAccount.create")),(0,r.kt)("td",{parentName:"tr",align:null},"Whether the SA creation is delegated to the chart or not"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"serviceAccount.name")),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the SA used for NiFiKop deployment"),(0,r.kt)("td",{parentName:"tr",align:null},"release name")))),(0,r.kt)("p",null,"Specify each parameter using the ",(0,r.kt)("inlineCode",{parentName:"p"},"--set key=value[,key=value]")," argument to ",(0,r.kt)("inlineCode",{parentName:"p"},"helm install"),". For example,"),(0,r.kt)("p",null,"Alternatively, a YAML file that specifies the values for the above parameters can be provided while installing the chart. For example,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"$ helm install nifikop \\\n      konpyutaika/nifikop \\\n      -f values.yaml\n")),(0,r.kt)("h3",{id:"installing-the-chart"},"Installing the Chart"),(0,r.kt)("admonition",{title:"Skip CRDs",type:"important"},(0,r.kt)("p",{parentName:"admonition"},"In the case where you don't want to deploy the crds using helm (",(0,r.kt)("inlineCode",{parentName:"p"},"--skip-crds"),") you need to deploy manually the crds beforehand:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f https://raw.githubusercontent.com/konpyutaika/nifikop/master/config/crd/bases/nifi.konpyutaika.com_nificlusters.yaml\nkubectl apply -f https://raw.githubusercontent.com/konpyutaika/nifikop/master/config/crd/bases/nifi.konpyutaika.com_nifiusers.yaml\nkubectl apply -f https://raw.githubusercontent.com/konpyutaika/nifikop/master/config/crd/bases/nifi.konpyutaika.com_nifiusergroups.yaml\nkubectl apply -f https://raw.githubusercontent.com/konpyutaika/nifikop/master/config/crd/bases/nifi.konpyutaika.com_nifidataflows.yaml\nkubectl apply -f https://raw.githubusercontent.com/konpyutaika/nifikop/master/config/crd/bases/nifi.konpyutaika.com_nifiparametercontexts.yaml\nkubectl apply -f https://raw.githubusercontent.com/konpyutaika/nifikop/master/config/crd/bases/nifi.konpyutaika.com_nifiregistryclients.yaml\nkubectl apply -f https://raw.githubusercontent.com/konpyutaika/nifikop/master/config/crd/bases/nifi.konpyutaika.com_nifinodegroupautoscalers.yaml\n"))),(0,r.kt)(i.Z,{defaultValue:"dryrun",values:[{label:"dry run",value:"dryrun"},{label:"release name",value:"rn"},{label:"set parameters",value:"set-params"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"dryrun",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'helm install nifikop konpyutaika/nifikop \\\n    --dry-run \\\n    --set logLevel=Debug \\\n    --set namespaces={"nifikop"}\n'))),(0,r.kt)(o.Z,{value:"rn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"helm install <release name> konpyutaika/nifikop\n"))),(0,r.kt)(o.Z,{value:"set-params",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'helm install nifikop konpyutaika/nifikop --set namespaces={"nifikop"}\n')))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"the ",(0,r.kt)("inlineCode",{parentName:"p"},"--replace")," flag allow you to reuses a charts release name")),(0,r.kt)("h3",{id:"listing-deployed-charts"},"Listing deployed charts"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"helm list\n")),(0,r.kt)("h3",{id:"get-status-for-the-helm-deployment"},"Get Status for the helm deployment"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"helm status nifikop\n")),(0,r.kt)("h2",{id:"uninstaling-the-charts"},"Uninstaling the Charts"),(0,r.kt)("p",null,"If you want to delete the operator from your Kubernetes cluster, the operator deployment\nshould be deleted."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"helm del nifikop\n")),(0,r.kt)("p",null,"The command removes all the Kubernetes components associated with the chart and deletes the helm release."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The CRD created by the chart are not removed by default and should be manually cleaned up (if required)")),(0,r.kt)("p",null,"Manually delete the CRD:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl delete crd nificlusters.nifi.konpyutaika.com\nkubectl delete crd nifiusers.nifi.konpyutaika.com\nkubectl delete crd nifiusergroups.nifi.konpyutaika.com\nkubectl delete crd nifiregistryclients.nifi.konpyutaika.com\nkubectl delete crd nifiparametercontexts.nifi.konpyutaika.com\nkubectl delete crd nifidataflows.nifi.konpyutaika.com\n")),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"If you delete the CRD then\nIt will delete ",(0,r.kt)("strong",{parentName:"p"},"ALL")," Clusters that has been created using this CRD!!!\nPlease never delete a CRD without very good care")),(0,r.kt)("p",null,"Helm always keeps records of what releases happened. Need to see the deleted releases ?"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"helm list --deleted\n")),(0,r.kt)("p",null,"Need to see all of the releases (deleted and currently deployed, as well as releases that\nfailed) ?"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"helm list --all\n")),(0,r.kt)("p",null,"Because Helm keeps records of deleted releases, a release name cannot be re-used. (If you really need to re-use a\nrelease name, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"--replace")," flag, but it will simply re-use the existing release and replace its\nresources.)"),(0,r.kt)("p",null,"Note that because releases are preserved in this way, you can rollback a deleted resource, and have it re-activate."),(0,r.kt)("p",null,"To purge a release"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"helm delete --purge nifikop\n")),(0,r.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,r.kt)("h3",{id:"install-of-the-crd"},"Install of the CRD"),(0,r.kt)("p",null,"By default, the chart will install the CRDs, but this installation is global for the whole\ncluster, and you may want to not modify the already deployed CRDs."),(0,r.kt)("p",null,"In this case there is a parameter to say to not install the CRDs :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'$ helm install --name nifikop ./helm/nifikop --set namespaces={"nifikop"} --skip-crds\n')))}f.isMDXComponent=!0}}]);