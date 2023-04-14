"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[76695],{35318:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(27378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(h,a(a({ref:t},c),{},{components:n})):r.createElement(h,a({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},50200:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>p,toc:()=>u});var r=n(25773),i=n(30808),o=(n(27378),n(35318)),a=["components"],s={id:"1_kubernetes_service",title:"Kubernetes service",sidebar_label:"Kubernetes service"},l=void 0,p={unversionedId:"3_manage_nifi/1_manage_clusters/1_deploy_cluster/3_expose_cluster/1_kubernetes_service",id:"version-v0.16.0/3_manage_nifi/1_manage_clusters/1_deploy_cluster/3_expose_cluster/1_kubernetes_service",title:"Kubernetes service",description:"The purpose of this section is to explain how expose your NiFi cluster and access it in and out of kubernetes.",source:"@site/versioned_docs/version-v0.16.0/3_manage_nifi/1_manage_clusters/1_deploy_cluster/3_expose_cluster/1_kubernetes_service.md",sourceDirName:"3_manage_nifi/1_manage_clusters/1_deploy_cluster/3_expose_cluster",slug:"/3_manage_nifi/1_manage_clusters/1_deploy_cluster/3_expose_cluster/1_kubernetes_service",permalink:"/nifikop/docs/v0.16.0/3_manage_nifi/1_manage_clusters/1_deploy_cluster/3_expose_cluster/1_kubernetes_service",draft:!1,editUrl:"https://github.com/konpyutaika/nifikop/edit/master/site/website/versioned_docs/version-v0.16.0/3_manage_nifi/1_manage_clusters/1_deploy_cluster/3_expose_cluster/1_kubernetes_service.md",tags:[],version:"v0.16.0",lastUpdatedBy:"Juldrixx",lastUpdatedAt:1668697208,formattedLastUpdatedAt:"Nov 17, 2022",frontMatter:{id:"1_kubernetes_service",title:"Kubernetes service",sidebar_label:"Kubernetes service"},sidebar:"docs",previous:{title:"Nodes configuration",permalink:"/nifikop/docs/v0.16.0/3_manage_nifi/1_manage_clusters/1_deploy_cluster/2_nodes_configuration"},next:{title:"Istio service mesh",permalink:"/nifikop/docs/v0.16.0/3_manage_nifi/1_manage_clusters/1_deploy_cluster/3_expose_cluster/2_istio_service_mesh"}},c={},u=[{value:"Listener configuration",id:"listener-configuration",level:2},{value:"Headless vs All service mode",id:"headless-vs-all-service-mode",level:2},{value:"External service configuration",id:"external-service-configuration",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The purpose of this section is to explain how expose your NiFi cluster and access it in and out of kubernetes."),(0,o.kt)("h2",{id:"listener-configuration"},"Listener configuration"),(0,o.kt)("p",null,"The first part to manage when you are configuring your cluster is the ports that will be used for the internal need of NiFi, we will call them ",(0,o.kt)("inlineCode",{parentName:"p"},"internal listeners"),"\nThere is 6 types of ",(0,o.kt)("inlineCode",{parentName:"p"},"internal listeners")," : "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"cluster"),": Define the node\u2019s protocol port (used by cluster nodes to discuss together)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"http/https"),": The HTTP or HTTPS port used to expose NiFi cluster UI (",(0,o.kt)("strong",{parentName:"li"},"Note"),": use only one of them !)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"s2s"),": The remote input socket port for Site-to-Site communication"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"load-balance"),": Cluster node load balancing port"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"prometheus"),": Port that will be used to expose the promotheus reporting task")),(0,o.kt)("p",null,"To configure these listeners you must use the ",(0,o.kt)("a",{parentName:"p",href:"../../../../5_references/1_nifi_cluster/6_listeners_config#internallistener"},"Spec.ListernersConfig.InternalListeners")," field : "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'listenersConfig:\n  internalListeners:\n    - type: "https"\n      name: "https"\n      containerPort: 8443\n    - type: "cluster"\n      name: "cluster"\n      containerPort: 6007\n    - type: "s2s"\n      name: "s2s"\n      containerPort: 10000\n    - type: "prometheus"\n      name: "prometheus"\n      containerPort: 9090\n    - type: "load-balance"\n      name: "load-balance"\n      containerPort: 6342\n')),(0,o.kt)("p",null,"Here we defined a listener by specifying : "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"type"),": one of the six described above (e.g ",(0,o.kt)("inlineCode",{parentName:"li"},"https"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"name"),": name of the port that will be attached to pod (e.g ",(0,o.kt)("inlineCode",{parentName:"li"},"https"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"containerPort"),": port that will be used by the container inside the pod and configured in NiFi configuration for the listener (e.g ",(0,o.kt)("inlineCode",{parentName:"li"},"8443"),")")),(0,o.kt)("p",null,"If you look at the yaml description of the deployed pod, you should have something like this : "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"    ports:\n    - containerPort: 8443\n      name: https\n      protocol: TCP\n    - containerPort: 6007\n      name: cluster\n      protocol: TCP\n    - containerPort: 6342\n      name: load-balance\n      protocol: TCP\n    - containerPort: 10000\n      name: s2s\n      protocol: TCP\n    - containerPort: 9090\n      name: prometheus\n      protocol: TCP\n")),(0,o.kt)("admonition",{type:"important"},(0,o.kt)("p",{parentName:"admonition"},"Really important thing, you can add additional ",(0,o.kt)("inlineCode",{parentName:"p"},"internal listeners")," without type, it means that these listeners are not related to internal NiFi behaviour.\nIt might be really useful, if you are exposing a NiFi processor through a port (e.g http endpoint to receive HTTP request inside of NiFi) :"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'listenersConfig:\n  internalListeners:\n    ...\n    - name: "http-tracking"\n      containerPort: 8081\n'))),(0,o.kt)("h2",{id:"headless-vs-all-service-mode"},"Headless vs All service mode"),(0,o.kt)("p",null,"To internally expose the NiFi cluster nodes, there is one major constraint which is that each node must be accessible one by one by the controller and the other nodes!"),(0,o.kt)("p",null,"To do this, a single traditional Kubernetes service will not suffice, as it will balance the traffic between all nodes, which is not what we want."),(0,o.kt)("p",null,"There are two ways to solve this problem:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Use a ",(0,o.kt)("a",{parentName:"strong",href:"https://kubernetes.io/docs/concepts/services-networking/service/#headless-services"},"headless service")),": this is the most appropriate way to expose your nodes internally, using this method you will simply deploy a service that will allow you to access each pod one by one via DNS resolution."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Use one service per node"),": this way we create one service per node, giving you one cluster IP per node to access a single node directly!")),(0,o.kt)("p",null,"To configure how you want to expose your NiFi node internally, you simply set the ",(0,o.kt)("inlineCode",{parentName:"p"},"Spec.HeadlessEnabled")," field, if true you will be in the first mode, if not in the second."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"In most cases, the ",(0,o.kt)("inlineCode",{parentName:"p"},"headless mode")," should be used. An example where you need the other mode would be integration with Istio service mesh, which does not support headless service integration.")),(0,o.kt)("h2",{id:"external-service-configuration"},"External service configuration"),(0,o.kt)("p",null,"Once you have considered how to expose your service internally in the k8s cluster, you may want to expose your cluster externally, for example to give access to your cluster to your users, or to expose your prometheus endpoint.\nTo configure the external exposure of your cluster pods, you should use the ",(0,o.kt)("a",{parentName:"p",href:"../../../../5_references/1_nifi_cluster/7_external_service_config"},"Spec.ExternalServices")," field."),(0,o.kt)("p",null,"It takes as configuration:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"name"),": which will be used to name the kubernetes service."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"spec"),":",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"type"),": how the service is exposed (following the definition of ",(0,o.kt)("a",{parentName:"li",href:"https://godoc.org/k8s.io/api/core/v1#ServiceType"},"ServiceType"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"portConfigs")," : a list of port configurations:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"port")," : the port that will be used by the service to expose the associated ",(0,o.kt)("inlineCode",{parentName:"li"},"internal listener"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"internalListernerName")," : name of the ",(0,o.kt)("inlineCode",{parentName:"li"},"internal listener")," to expose")))))),(0,o.kt)("p",null,"If we take a concrete example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'listenersConfig:\n  internalListeners:\n    - type: "https"\n      name: "https"\n      containerPort: 8443\n    - type: "cluster"\n      name: "cluster"\n      containerPort: 6007\n    - type: "s2s"\n      name: "s2s"\n      containerPort: 10000\n    - type: "prometheus"\n      name: "prometheus"\n      containerPort: 9090\n    - type: "load-balance"\n      name: "load-balance"\n      containerPort: 6342\n    - name: "http-tracking"\n      containerPort: 8081\nexternalServices:\n  - name: cluster-access\n    spec:\n      portConfigs:\n        - internalListenerName: https\n          port: 443\n        - internalListenerName: http-tracking\n          port: 80\n      type: LoadBalancer\n')),(0,o.kt)("p",null,"Here, we expose our ",(0,o.kt)("inlineCode",{parentName:"p"},"internal listeners"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"https")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"http-tracking")," through a Kubernetes service: ",(0,o.kt)("inlineCode",{parentName:"p"},"cluster-access"),", with two different ports: ",(0,o.kt)("inlineCode",{parentName:"p"},"443")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"80"),".\nIf you look at the services, you should see something like this."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"kubectl get services\nNAME                TYPE           CLUSTER-IP    EXTERNAL-IP      PORT(S)                                AGE\ncluster-access      LoadBalancer   10.88.21.98   35.180.241.132   443:30421/TCP,80:30521/TCP             20d\n")),(0,o.kt)("p",null,"If you add the ",(0,o.kt)("inlineCode",{parentName:"p"},"external ip")," in your ",(0,o.kt)("inlineCode",{parentName:"p"},"Spec.ReadOnlyConfig.NifiProperties.WebProxyHosts")," field, you will be able to access your cluster by: ",(0,o.kt)("inlineCode",{parentName:"p"},"https://<external-ip>")," and your NiFi processor http endpoint by: ",(0,o.kt)("inlineCode",{parentName:"p"},"http://<external-ip>"),"."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"For any additional configuration please refer to ",(0,o.kt)("a",{parentName:"p",href:"../../../../5_references/1_nifi_cluster/7_external_service_config"},"this page"),".")))}m.isMDXComponent=!0}}]);