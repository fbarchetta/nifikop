(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{175:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return s}));var n=a(2),r=a(6),c=(a(0),a(558)),b={id:"2_nifi_user",title:"NiFi User",sidebar_label:"NiFi User"},l={unversionedId:"5_references/2_nifi_user",id:"version-v0.11.0/5_references/2_nifi_user",isDocsHomePage:!1,title:"NiFi User",description:"NifiUser is the Schema for the nifi users API.",source:"@site/versioned_docs/version-v0.11.0/5_references/2_nifi_user.md",slug:"/5_references/2_nifi_user",permalink:"/nifikop/docs/5_references/2_nifi_user",editUrl:"https://github.com/konpyutaika/nifikop/edit/master/site/website/versioned_docs/version-v0.11.0/5_references/2_nifi_user.md",version:"v0.11.0",lastUpdatedBy:"Juldrixx",lastUpdatedAt:1655925825,sidebar_label:"NiFi User",sidebar:"version-v0.11.0/docs",previous:{title:"External Service Config",permalink:"/nifikop/docs/5_references/1_nifi_cluster/7_external_service_config"},next:{title:"NiFi Registry Client",permalink:"/nifikop/docs/5_references/3_nifi_registry_client"}},i=[{value:"NifiUser",id:"nifiuser",children:[]},{value:"NifiUserSpec",id:"nifiuserspec",children:[]},{value:"NifiUserStatus",id:"nifiuserstatus",children:[]},{value:"ClusterReference",id:"clusterreference",children:[]},{value:"AccessPolicy",id:"accesspolicy",children:[]},{value:"AccessPolicyType",id:"accesspolicytype",children:[]},{value:"AccessPolicyAction",id:"accesspolicyaction",children:[]},{value:"AccessPolicyResource",id:"accesspolicyresource",children:[]}],o={rightToc:i};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"NifiUser")," is the Schema for the nifi users API."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"apiVersion: nifi.konpyutaika.com/v1alpha1\nkind: NifiUser\nmetadata:\n  name: aguitton\nspec:\n  identity: alexandre.guitton@orange.com\n  clusterRef:\n    name: nc\n    namespace: nifikop\n  createCert: false\n")),Object(c.b)("h2",{id:"nifiuser"},"NifiUser"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Field"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"metadata"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"https://godoc.org/k8s.io/apimachinery/pkg/apis/meta/v1#ObjectMeta"}),"ObjectMetadata")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"is metadata that all persisted resources must have, which includes all objects users must create."),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"nil")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"spec"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"#nifiuserspec"}),"NifiUserSpec")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"defines the desired state of NifiUser."),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"nil")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"status"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"#nifiuserstatus"}),"NifiUserStatus")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"defines the observed state of NifiUser."),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"nil")))),Object(c.b)("h2",{id:"nifiuserspec"},"NifiUserSpec"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Field"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"identity"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"used to define the user identity on NiFi cluster side, when the user's name doesn't suit with Kubernetes resource name."),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"secretName"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"name of the secret where all cert resources will be stored."),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"clusterRef"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"#clusterreference"}),"ClusterReference")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"contains the reference to the NifiCluster with the one the user is linked."),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DNSNames"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"["," ","]","string"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"list of DNSNames that the user will used to request the NifiCluster (allowing to create the right certificates associated)."),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"includeJKS"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"whether or not the the operator also include a Java keystore format (JKS) with you secret."),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"createCert"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"whether or not a certificate will be created for this user."),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"accessPolicies"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"["," ","]",Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"#accesspolicy"}),"AccessPolicy")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"defines the list of access policies that will be granted to the group."),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"[]")))),Object(c.b)("h2",{id:"nifiuserstatus"},"NifiUserStatus"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Field"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"id"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"the nifi user's node id."),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"version"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"the last nifi  user's node revision version catched."),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")))),Object(c.b)("h2",{id:"clusterreference"},"ClusterReference"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Field"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"name"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"name of the NifiCluster."),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"namespace"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"the NifiCluster namespace location."),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")))),Object(c.b)("h2",{id:"accesspolicy"},"AccessPolicy"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Field"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"type"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"#accesspolicytype"}),"AccessPolicyType")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'defines the kind of access policy, could be "global" or "component".'),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"action"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"#accesspolicyaction"}),"AccessPolicyAction")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'defines the kind of action that will be granted, could be "read" or "write".'),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"resource"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"#accesspolicyresource"}),"AccessPolicyResource")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"defines the kind of resource targeted by this access policies, please refer to the following page : ",Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"https://nifi.apache.org/docs/nifi-docs/html/administration-guide.html#access-policies"}),"https://nifi.apache.org/docs/nifi-docs/html/administration-guide.html#access-policies")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"componentType"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'used if the type is "component", it allows to define the kind of component on which is the access policy.'),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"componentId"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'used if the type is "component", it allows to define the id of the component on which is the access policy.'),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")))),Object(c.b)("h2",{id:"accesspolicytype"},"AccessPolicyType"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Value"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"GlobalAccessPolicyType"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"global"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Global access policies govern the following system level authorizations")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ComponentAccessPolicyType"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"component"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Component level access policies govern the following component level authorizations")))),Object(c.b)("h2",{id:"accesspolicyaction"},"AccessPolicyAction"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Value"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ReadAccessPolicyAction"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"read"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Allows users to view")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"WriteAccessPolicyAction"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"write"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Allows users to modify")))),Object(c.b)("h2",{id:"accesspolicyresource"},"AccessPolicyResource"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Value"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"FlowAccessPolicyResource"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"/flow"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"About the UI")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ControllerAccessPolicyResource"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"/controller"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"about the controller including Reporting Tasks, Controller Services, Parameter Contexts and Nodes in the Cluster")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ParameterContextAccessPolicyResource"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"/parameter-context"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'About the Parameter Contexts. Access to Parameter Contexts are inherited from the "access the controller" policies unless overridden.')),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ProvenanceAccessPolicyResource"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"/provenance"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Allows users to submit a Provenance Search and request Event Lineage")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"RestrictedComponentsAccessPolicyResource"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"/restricted-components"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"About the restricted components assuming other permissions are sufficient. The restricted components may indicate which specific permissions are required. Permissions can be granted for specific restrictions or be granted regardless of restrictions. If permission is granted regardless of restrictions, the user can create/modify all restricted components.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"PoliciesAccessPolicyResource"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"/policies"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"About the policies for all components")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"TenantsAccessPolicyResource"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"/tenants"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"About the users and user groups")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"SiteToSiteAccessPolicyResource"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"/site-to-site"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Allows other NiFi instances to retrieve Site-To-Site details")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"SystemAccessPolicyResource"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"/system"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Allows users to view System Diagnostics")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ProxyAccessPolicyResource"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"/proxy"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Allows proxy machines to send requests on the behalf of others")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"CountersAccessPolicyResource"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"/counters"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"About counters")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ComponentsAccessPolicyResource"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"/"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"About the component configuration details")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OperationAccessPolicyResource"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"/operation"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"to operate components by changing component run status (start/stop/enable/disable), remote port transmission status, or terminating processor threads")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ProvenanceDataAccessPolicyResource"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"/provenance-data"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"to view provenance events generated by this component")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DataAccessPolicyResource"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"/data"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"About metadata and content for this component in flowfile queues in outbound connections and through provenance events")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"PoliciesComponentAccessPolicyResource"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"/policies"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DataTransferAccessPolicyResource"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"/data-transfer"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Allows a port to receive data from NiFi instances")))))}s.isMDXComponent=!0},558:function(e,t,a){"use strict";a.d(t,"a",(function(){return O})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),s=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},O=function(e){var t=s(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},j={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,b=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),O=s(a),p=n,u=O["".concat(b,".").concat(p)]||O[p]||j[p]||c;return a?r.a.createElement(u,l(l({ref:t},o),{},{components:a})):r.a.createElement(u,l({ref:t},o))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,b=new Array(c);b[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,b[1]=l;for(var o=2;o<c;o++)b[o]=a[o];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);