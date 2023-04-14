"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[20429],{35318:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>m});var a=n(27378);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},d=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),c=p(n),m=r,g=c["".concat(s,".").concat(m)]||c[m]||u[m]||i;return n?a.createElement(g,l(l({ref:e},d),{},{components:n})):a.createElement(g,l({ref:e},d))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},93688:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var a=n(25773),r=n(30808),i=(n(27378),n(35318)),l=["components"],o={id:"3_node_config",title:"Node configuration",sidebar_label:"Node configuration"},s=void 0,p={unversionedId:"5_references/1_nifi_cluster/3_node_config",id:"version-v0.11.0/5_references/1_nifi_cluster/3_node_config",title:"Node configuration",description:"NodeConfig defines the node configuration",source:"@site/versioned_docs/version-v0.11.0/5_references/1_nifi_cluster/3_node_config.md",sourceDirName:"5_references/1_nifi_cluster",slug:"/5_references/1_nifi_cluster/3_node_config",permalink:"/nifikop/docs/v0.11.0/5_references/1_nifi_cluster/3_node_config",draft:!1,editUrl:"https://github.com/konpyutaika/nifikop/edit/master/site/website/versioned_docs/version-v0.11.0/5_references/1_nifi_cluster/3_node_config.md",tags:[],version:"v0.11.0",lastUpdatedBy:"Juldrixx",lastUpdatedAt:1655925825,formattedLastUpdatedAt:"Jun 22, 2022",frontMatter:{id:"3_node_config",title:"Node configuration",sidebar_label:"Node configuration"},sidebar:"version-v0.11.0/docs",previous:{title:"Read only configurations",permalink:"/nifikop/docs/v0.11.0/5_references/1_nifi_cluster/2_read_only_config"},next:{title:"Node",permalink:"/nifikop/docs/v0.11.0/5_references/1_nifi_cluster/4_node"}},d={},u=[{value:"NodeConfig",id:"nodeconfig",level:2},{value:"StorageConfig",id:"storageconfig",level:2},{value:"ExternalVolumeConfig",id:"externalvolumeconfig",level:2},{value:"Metadata",id:"metadata",level:2}],c={toc:u};function m(t){var e=t.components,n=(0,r.Z)(t,l);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"NodeConfig defines the node configuration"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'   default_group:\n      # provenanceStorage allow to specify the maximum amount of data provenance information to store at a time\n      # https://nifi.apache.org/docs/nifi-docs/html/administration-guide.html#write-ahead-provenance-repository-properties\n      provenanceStorage: "10 GB"\n      #RunAsUser define the id of the user to run in the Nifi image\n      # +kubebuilder:validation:Minimum=1\n      runAsUser: 1000\n      # Set this to true if the instance is a node in a cluster.\n      # https://nifi.apache.org/docs/nifi-docs/html/administration-guide.html#basic-cluster-setup\n      isNode: true\n      # Additionnal metadata to merge to the pod associated\n      podMetadata:\n        annotations:\n          node-annotation: "node-annotation-value"\n        labels:\n          node-label: "node-label-value"\n      # Docker image used by the operator to create the node associated\n      # https://hub.docker.com/r/apache/nifi/\n#      image: "apache/nifi:1.11.2"\n      # nodeAffinity can be specified, operator populates this value if new pvc added later to node\n      # https://kubernetes.io/docs/concepts/configuration/assign-pod-node/#node-affinity\n#      nodeAffinity:\n      # imagePullPolicy define the pull policy for NiFi cluster docker image\n      imagePullPolicy: IfNotPresent\n      # priorityClassName define the name of the priority class to be applied to these nodes\n      priorityClassName: "example-priority-class-name"\n      # externalVolumeConfigs specifies a list of volume to mount into the main container.\n      externalVolumeConfigs:\n        - name: example-volume\n          mountPath: "/opt/nifi/example"\n          secret:\n            secretName: "raw-controller"\n      # storageConfigs specifies the node related configs\n      storageConfigs:\n        # Name of the storage config, used to name PV to reuse into sidecars for example.\n        - name: provenance-repository\n          # Path where the volume will be mount into the main nifi container inside the pod.\n          mountPath: "/opt/nifi/provenance_repository"\n          # Kubernetes PVC spec\n          # https://kubernetes.io/docs/tasks/configure-pod-container/configure-persistent-volume-storage/#create-a-persistentvolumeclaim\n          pvcSpec:\n            accessModes:\n              - ReadWriteOnce\n            storageClassName: "standard"\n            resources:\n              requests:\n                storage: 10Gi\n        - mountPath: "/opt/nifi/nifi-current/logs"\n          name: logs\n          pvcSpec:\n            accessModes:\n              - ReadWriteOnce\n            storageClassName: "standard"\n            resources:\n              requests:\n                storage: 10Gi\n')),(0,i.kt)("h2",{id:"nodeconfig"},"NodeConfig"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"provenanceStorage"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"provenanceStorage allow to specify the maximum amount of data provenance information to store at a time: ",(0,i.kt)("a",{parentName:"td",href:"https://nifi.apache.org/docs/nifi-docs/html/administration-guide.html#write-ahead-provenance-repository-properties"},"write-ahead-provenance-repository-properties")),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},'"8 GB"')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"runAsUser"),(0,i.kt)("td",{parentName:"tr",align:null},"int64"),(0,i.kt)("td",{parentName:"tr",align:null},"define the id of the user to run in the Nifi image"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"1000")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"fsGroup"),(0,i.kt)("td",{parentName:"tr",align:null},"int64"),(0,i.kt)("td",{parentName:"tr",align:null},"define the id of the group for each volumes in Nifi image"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"1000")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"isNode"),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"Set this to true if the instance is a node in a cluster: ",(0,i.kt)("a",{parentName:"td",href:"https://nifi.apache.org/docs/nifi-docs/html/administration-guide.html#basic-cluster-setup"},"basic-cluster-setup")),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"true")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"image"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Docker image used by the operator to create the node associated. ",(0,i.kt)("a",{parentName:"td",href:"https://hub.docker.com/r/apache/nifi/"},"Nifi docker registry")),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},'""')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"imagePullPolicy"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://godoc.org/k8s.io/api/core/v1#PullPolicy"},"PullPolicy")),(0,i.kt)("td",{parentName:"tr",align:null},"define the pull policy for NiFi cluster docker image.)"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},'""')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"nodeAffinity"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"operator populates this value if new pvc added later to node ",(0,i.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/configuration/assign-pod-node/#node-affinity"},"node-affinity")),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"nil")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"storageConfigs"),(0,i.kt)("td",{parentName:"tr",align:null},"[","  ","]",(0,i.kt)("a",{parentName:"td",href:"#storageconfig"},"StorageConfig")),(0,i.kt)("td",{parentName:"tr",align:null},"specifies the node related configs."),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"nil")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"externalVolumeConfigs"),(0,i.kt)("td",{parentName:"tr",align:null},"[","  ","]",(0,i.kt)("a",{parentName:"td",href:"#externalvolumeconfig"},"ExternalVolumeConfig")),(0,i.kt)("td",{parentName:"tr",align:null},"specifies a list of volume to mount into the main container."),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"nil")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"serviceAccountName"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"specifies the serviceAccount used for this specific node."),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},'"default"')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"resourcesRequirements"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://godoc.org/k8s.io/api/core/v1#ResourceRequirements"},"ResourceRequirements")),(0,i.kt)("td",{parentName:"tr",align:null},"works exactly like Container resources, the user can specify the limit and the requests through this property ",(0,i.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/"},"manage-compute-resources-container"),"."),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"nil")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"imagePullSecrets"),(0,i.kt)("td",{parentName:"tr",align:null},"[","  ","]",(0,i.kt)("a",{parentName:"td",href:"https://godoc.org/k8s.io/api/core/v1#TypedLocalObjectReference"},"LocalObjectReference")),(0,i.kt)("td",{parentName:"tr",align:null},"specifies the secret to use when using private registry."),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"nil")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"nodeSelector"),(0,i.kt)("td",{parentName:"tr",align:null},"map","[","string","]","string"),(0,i.kt)("td",{parentName:"tr",align:null},"nodeSelector can be specified, which set the pod to fit on a node ",(0,i.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/configuration/assign-pod-node/#nodeselector"},"nodeselector")),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"nil")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"tolerations"),(0,i.kt)("td",{parentName:"tr",align:null},"[","  ","]",(0,i.kt)("a",{parentName:"td",href:"https://godoc.org/k8s.io/api/core/v1#Toleration"},"Toleration")),(0,i.kt)("td",{parentName:"tr",align:null},"tolerations can be specified, which set the pod's tolerations ",(0,i.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/configuration/taint-and-toleration/#concepts"},"taint-and-toleration"),"."),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"nil")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"podMetadata"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#metadata"},"Metadata")),(0,i.kt)("td",{parentName:"tr",align:null},"define additionnal metadata to merge to the pod associated."),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"nil")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"priorityClassName"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Specify the name of the priority class to apply to pods created with this node config"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"nil")))),(0,i.kt)("h2",{id:"storageconfig"},"StorageConfig"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"name"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Name of the storage config, used to name PV to reuse into sidecars for example."),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"mountPath"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Path where the volume will be mount into the main nifi container inside the pod."),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"pvcSpec"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://godoc.org/k8s.io/api/core/v1#PersistentVolumeClaimSpec"},"PersistentVolumeClaimSpec")),(0,i.kt)("td",{parentName:"tr",align:null},"Kubernetes PVC spec. ",(0,i.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/tasks/configure-pod-container/configure-persistent-volume-storage/#create-a-persistentvolumeclaim"},"create-a-persistentvolumeclaim"),"."),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null},"-")))),(0,i.kt)("h2",{id:"externalvolumeconfig"},"ExternalVolumeConfig"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://pkg.go.dev/k8s.io/api/core/v1#VolumeMount"},"VolueMount")),(0,i.kt)("td",{parentName:"tr",align:null},"describes a mounting of a Volume within a container."),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://pkg.go.dev/k8s.io/api/core/v1#VolumeSource"},"VolumeSource")),(0,i.kt)("td",{parentName:"tr",align:null},"VolumeSource represents the location and type of the mounted volume."),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null},"-")))),(0,i.kt)("h2",{id:"metadata"},"Metadata"),(0,i.kt)("p",null,"| annotations | map","[","string","]","string | Additionnal annotation to merge to the pod associated ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/#syntax-and-character-set"},"annotations"),". |No|nil|\n| nodeLabels  | map","[","string","]","string | Additionnal labels to merge to the pod associated ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#syntax-and-character-set"},"labels"),".               |No|nil|"))}m.isMDXComponent=!0}}]);