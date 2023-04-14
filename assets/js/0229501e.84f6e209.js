"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[73667],{35318:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,g=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?a.createElement(g,l(l({ref:t},u),{},{components:n})):a.createElement(g,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},39798:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(27378),r=n(38944);const i="tabItem_wHwb";function l(e){var t=e.children,n=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,l),hidden:n},t)}},33337:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(25773),r=n(27378),i=n(38944),l=n(76457),o=n(70784),s=n(49947),c=n(83457);const u="tabList_J5MA",p="tabItem_l0OV";function d(e){var t,n,l=e.lazy,d=e.block,m=e.defaultValue,g=e.values,k=e.groupId,h=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=g?g:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,o.l)(y,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===m?m:null!=(t=null!=m?m:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:f[0].props.value;if(null!==N&&!y.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=(0,s.U)(),w=v.tabGroupChoices,_=v.setTabGroupChoices,C=(0,r.useState)(N),T=C[0],A=C[1],E=[],S=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var x=w[k];null!=x&&x!==T&&y.some((function(e){return e.value===x}))&&A(x)}var O=function(e){var t=e.currentTarget,n=E.indexOf(t),a=y[n].value;a!==T&&(S(t),A(a),null!=k&&_(k,String(a)))},R=function(e){var t,n=null;switch(e.key){case"Enter":O(e);break;case"ArrowRight":var a,r=E.indexOf(e.currentTarget)+1;n=null!=(a=E[r])?a:E[0];break;case"ArrowLeft":var i,l=E.indexOf(e.currentTarget)-1;n=null!=(i=E[l])?i:E[E.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":d},h)},y.map((function(e){var t=e.value,n=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return E.push(e)},onKeyDown:R,onClick:O},l,{className:(0,i.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),l?(0,r.cloneElement)(f.filter((function(e){return e.props.value===T}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function m(e){var t=(0,l.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},43072:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>k,frontMatter:()=>c,metadata:()=>p,toc:()=>m});var a=n(25773),r=n(30808),i=(n(27378),n(35318)),l=n(33337),o=n(39798),s=["components"],c={slug:"2020-06-30-secured_nifi_cluster_on_gcp_with_external_dns",title:"Secured NiFi cluster with NiFiKop with external dns on the Google Cloud Platform",author:"Alexandre Guitton",author_title:"Alexandre Guitton",author_url:"https://github.com/erdrix",author_image_url:"https://avatars0.githubusercontent.com/u/10503351?s=460&u=ea08d802388c79c17655c314296be58814391572&v=4",tags:["gke","nifikop","secured","oidc","google cloud platform","google cloud","gcp","kubernetes"]},u=void 0,p={permalink:"/nifikop/blog/2020-06-30-secured_nifi_cluster_on_gcp_with_external_dns",source:"@site/blog/2020-06-30-secured_nifi_cluster_on_gcp_with_external_dns.md",title:"Secured NiFi cluster with NiFiKop with external dns on the Google Cloud Platform",description:"Objectives",date:"2020-06-30T00:00:00.000Z",formattedDate:"June 30, 2020",tags:[{label:"gke",permalink:"/nifikop/blog/tags/gke"},{label:"nifikop",permalink:"/nifikop/blog/tags/nifikop"},{label:"secured",permalink:"/nifikop/blog/tags/secured"},{label:"oidc",permalink:"/nifikop/blog/tags/oidc"},{label:"google cloud platform",permalink:"/nifikop/blog/tags/google-cloud-platform"},{label:"google cloud",permalink:"/nifikop/blog/tags/google-cloud"},{label:"gcp",permalink:"/nifikop/blog/tags/gcp"},{label:"kubernetes",permalink:"/nifikop/blog/tags/kubernetes"}],readingTime:8.085,hasTruncateMarker:!1,authors:[{name:"Alexandre Guitton",title:"Alexandre Guitton",url:"https://github.com/erdrix",imageURL:"https://avatars0.githubusercontent.com/u/10503351?s=460&u=ea08d802388c79c17655c314296be58814391572&v=4"}],frontMatter:{slug:"2020-06-30-secured_nifi_cluster_on_gcp_with_external_dns",title:"Secured NiFi cluster with NiFiKop with external dns on the Google Cloud Platform",author:"Alexandre Guitton",author_title:"Alexandre Guitton",author_url:"https://github.com/erdrix",author_image_url:"https://avatars0.githubusercontent.com/u/10503351?s=460&u=ea08d802388c79c17655c314296be58814391572&v=4",tags:["gke","nifikop","secured","oidc","google cloud platform","google cloud","gcp","kubernetes"]},nextItem:{title:"Secured NiFi cluster with NiFiKop on the Google Cloud Platform",permalink:"/nifikop/blog/secured_nifi_cluster_on_gcp"}},d={authorsImageUrls:[void 0]},m=[{value:"Objectives",id:"objectives",level:2},{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"Disclaimer",id:"disclaimer",level:3},{value:"Create OAuth Credentials",id:"create-oauth-credentials",level:3},{value:"Create service account",id:"create-service-account",level:3},{value:"Deploy secured cluster",id:"deploy-secured-cluster",level:2},{value:"Deploy GKE cluster with Terraform",id:"deploy-gke-cluster-with-terraform",level:3},{value:"Deployment",id:"deployment",level:4},{value:"Explanations",id:"explanations",level:4},{value:"Deploy NiFiKop",id:"deploy-nifikop",level:3},{value:"Deploy Let&#39;s encrypt issuer",id:"deploy-lets-encrypt-issuer",level:3},{value:"Deploy Secured NiFi cluster",id:"deploy-secured-nifi-cluster",level:3},{value:"Access to your secured NiFi Cluster",id:"access-to-your-secured-nifi-cluster",level:3},{value:"Cleaning",id:"cleaning",level:2}],g={toc:m};function k(e){var t=e.components,c=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},g,c,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"objectives"},"Objectives"),(0,i.kt)("p",null,"This article is pretty similar to the ",(0,i.kt)("a",{parentName:"p",href:"/nifikop/blog/secured_nifi_cluster_on_gcp"},"Secured NiFi cluster with NiFiKop on the Google Cloud Platform")," one."),(0,i.kt)("p",null,"This time, we will also use ",(0,i.kt)("strong",{parentName:"p"},"NiFiKop")," and ",(0,i.kt)("strong",{parentName:"p"},"Terraform")," to quickly : "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"deploy ",(0,i.kt)("strong",{parentName:"li"},"a GKE cluster")," to host our NiFi cluster,"),(0,i.kt)("li",{parentName:"ul"},"deploy ",(0,i.kt)("strong",{parentName:"li"},"a ",(0,i.kt)("inlineCode",{parentName:"strong"},"cert-manager")," issuer")," as a convenient way to generate TLS certificates,"),(0,i.kt)("li",{parentName:"ul"},"deploy ",(0,i.kt)("strong",{parentName:"li"},"a zookeeper instance")," to manage cluster coordination and state across the cluster, "),(0,i.kt)("li",{parentName:"ul"},"deploy ",(0,i.kt)("strong",{parentName:"li"},"X secured NiFi instances in cluster mode")),(0,i.kt)("li",{parentName:"ul"},"configure ",(0,i.kt)("strong",{parentName:"li"},"NiFi to use OpenId connect")," for authentication"),(0,i.kt)("li",{parentName:"ul"},"configure ",(0,i.kt)("strong",{parentName:"li"},"HTTPS loadbalancer with Client Ip affinity")," to access the NiFi cluster"),(0,i.kt)("li",{parentName:"ul"},"dynamically re-size the cluster")),(0,i.kt)("p",null,"We will  :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"deploy ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/kubernetes-sigs/external-dns"},"external DNS")," instead of manually declare our DNS names."),(0,i.kt)("li",{parentName:"ul"},"delegate the certificates authority to ",(0,i.kt)("a",{parentName:"li",href:"https://letsencrypt.org/"},"Let's Encrypt"))),(0,i.kt)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You have your own domain (",(0,i.kt)("a",{parentName:"li",href:"https://domains.google/"},"you can create one with Google"),") : it will be used to map a domain on the NiFi's web interface. In this post, we will use : ",(0,i.kt)("inlineCode",{parentName:"li"},"trycatchlearn.fr"),". ")),(0,i.kt)("h3",{id:"disclaimer"},"Disclaimer"),(0,i.kt)("p",null,"This article can get you started for a production deployment, but should not used as so. There are still some steps needed such as Zookeeper, GKE configuration etc."),(0,i.kt)("h3",{id:"create-oauth-credentials"},"Create OAuth Credentials"),(0,i.kt)("p",null,"First step is to create the OAuth Credential : "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Go to your GCP project, and in the left bar : ",(0,i.kt)("strong",{parentName:"li"},"APIs & Services > Credentials")),(0,i.kt)("li",{parentName:"ul"},"Click on ",(0,i.kt)("inlineCode",{parentName:"li"},"CREATE CREDENTIALS : OAuth client ID")),(0,i.kt)("li",{parentName:"ul"},"Select ",(0,i.kt)("inlineCode",{parentName:"li"},"Web Application")),(0,i.kt)("li",{parentName:"ul"},"Give a name such as ",(0,i.kt)("inlineCode",{parentName:"li"},"SecuredNifi"),". "),(0,i.kt)("li",{parentName:"ul"},"For ",(0,i.kt)("inlineCode",{parentName:"li"},"Authorised JavaScript origins"),", use your own domain. I'm using : ",(0,i.kt)("inlineCode",{parentName:"li"},"https://nifi.orange.trycatchlearn.fr:8443")),(0,i.kt)("li",{parentName:"ul"},"For ",(0,i.kt)("inlineCode",{parentName:"li"},"Authorised redirect URIs")," it's your previous URI + ",(0,i.kt)("inlineCode",{parentName:"li"},"/nifi-api/access/oidc/callback"),", for me : ",(0,i.kt)("inlineCode",{parentName:"li"},"https://nifi.orange.trycatchlearn.fr:8443/nifi-api/access/oidc/callback"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"OAuth credentials",src:n(20907).Z,width:"695",height:"820"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Create the OAuth credentials")),(0,i.kt)("p",null,"Once the credentials are created, you will get a client ID and a client secret that you will need in ",(0,i.kt)("inlineCode",{parentName:"p"},"NifiCluster")," definition."),(0,i.kt)("h3",{id:"create-service-account"},"Create service account"),(0,i.kt)("p",null,"For the GKE cluster deployment you need a service account with ",(0,i.kt)("inlineCode",{parentName:"p"},"Editor")," role, and ",(0,i.kt)("inlineCode",{parentName:"p"},"Kubernetes Engine Admin"),"."),(0,i.kt)("h2",{id:"deploy-secured-cluster"},"Deploy secured cluster"),(0,i.kt)("p",null,"Once you have completed the above prerequisites, deploying you NiFi cluster will only take three steps and few minutes."),(0,i.kt)("p",null,"Open your Google Cloud Console in your GCP project and run : "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/Okonpyutaika/nifikop.git\ncd nifikop/docs/tutorials/secured_nifi_cluster_on_gcp_with_external_dns\n")),(0,i.kt)("h3",{id:"deploy-gke-cluster-with-terraform"},"Deploy GKE cluster with Terraform"),(0,i.kt)("h4",{id:"deployment"},"Deployment"),(0,i.kt)("p",null,"You can configure variables before running the deployment in the file ",(0,i.kt)("inlineCode",{parentName:"p"},"terraform/env/demo.tfvars")," : "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"project")," : GCP project ID"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"region")," : GCP region"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"zone")," : GCP zone"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"cluster_machines_types")," : defines the machine type for GKE cluster nodes"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"min_node")," : minimum number of nodes in the NodePool. Must be >=0 and <= max_node_count."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"max_node")," : maximum number of nodes in the NodePool. Must be >= min_node_count."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"initial_node_count")," : the number of nodes to create in this cluster's default node pool."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"preemptible")," : true/false using preemptibles nodes.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"cd terraform\n./start.sh <service account key's path>\n")),(0,i.kt)("p",null,"This operation could take 15 minutes (time to the GKE cluster and its nodes to setup)"),(0,i.kt)("p",null,"Once the deployment is ready load the GKE configuration : "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"gcloud container clusters get-credentials nifi-cluster --zone <configured gcp zone> --project <GCP project's id>\n")),(0,i.kt)("h4",{id:"explanations"},"Explanations"),(0,i.kt)("p",null,"The first step is to deploy a GKE cluster, with the required configuration, you can for example check the nodes configuration : "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"kubectl get nodes\nNAME                                                  STATUS   ROLES    AGE    VERSION\ngke-nifi-cluster-tracking-ptf20200520-a1aec8fe-2dl3   Ready    <none>   110m   v1.15.9-gke.24\ngke-nifi-cluster-tracking-ptf20200520-a1aec8fe-5bzb   Ready    <none>   110m   v1.15.9-gke.24\ngke-nifi-cluster-tracking-ptf20200520-a1aec8fe-5t3l   Ready    <none>   110m   v1.15.9-gke.24\ngke-nifi-cluster-tracking-ptf20200520-a1aec8fe-w86j   Ready    <none>   110m   v1.15.9-gke.24\n")),(0,i.kt)("p",null,"Once the cluster is deployed, we created all the required namespaces : "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"kubectl get namespaces\nNAME              STATUS   AGE\ncert-manager      Active   16m\ndefault           Active   27m\nkube-node-lease   Active   27m\nkube-public       Active   27m\nkube-system       Active   27m\nnifikop           Active   16m\nzookeeper         Active   16m\n")),(0,i.kt)("p",null,"In the ",(0,i.kt)("inlineCode",{parentName:"p"},"cert-manager")," namespace we deployed a ",(0,i.kt)("inlineCode",{parentName:"p"},"cert-manager")," stack in a cluster-wide scope, which will be responsible for all the certificates generation."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"in this post, we will let ",(0,i.kt)("inlineCode",{parentName:"p"},"let's encrypt")," act as certificate authority.\nFor more informations check ",(0,i.kt)("a",{parentName:"p",href:"/nifikop/docs/3_manage_nifi/1_manage_clusters/1_deploy_cluster/4_ssl_configuration#using-an-existing-issuer"},"documentation page"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"kubectl -n cert-manager get pods\nNAME                                       READY   STATUS    RESTARTS   AGE\ncert-manager-55fff7f85f-74nf5              1/1     Running   0          72m\ncert-manager-cainjector-54c4796c5d-mfbbx   1/1     Running   0          72m\ncert-manager-webhook-77ccf5c8b4-m6ws4      1/1     Running   2          72m\n")),(0,i.kt)("p",null,"It will also deploy the Zookeeper cluster based on the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/bitnami/charts/tree/master/bitnami/zookeeper"},"bitnami helm chart")," : "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"kubectl -n zookeeper get pods\nNAME          READY   STATUS    RESTARTS   AGE\nzookeeper-0   1/1     Running   0          74m\nzookeeper-1   1/1     Running   0          74m\nzookeeper-2   1/1     Running   0          74m\n")),(0,i.kt)("p",null,"And finally it deploys the ",(0,i.kt)("inlineCode",{parentName:"p"},"NiFiKop")," operator which is ready to create NiFi clusters : "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"kubectl -n nifikop get pods\nNAME                            READY   STATUS    RESTARTS   AGE\nexternal-dns-5d588c6cd6-dw44f   1/1     Running   0          2m58s\n")),(0,i.kt)("h3",{id:"deploy-nifikop"},"Deploy NiFiKop"),(0,i.kt)("p",null,"Now we have to deploy the ",(0,i.kt)("inlineCode",{parentName:"p"},"NiFiKop")," operator : "),(0,i.kt)("p",null,"Deploy the NiFiKop crds : "),(0,i.kt)(l.Z,{defaultValue:"k8s16+",values:[{label:"k8s version 1.16+",value:"k8s16+"},{label:"k8s previous versions",value:"k8sprev"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"k8s16+",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f https://raw.githubusercontent.com/Orange-OpenSource/nifikop/master/deploy/crds/nifi.orange.com_nificlusters_crd.yaml\nkubectl apply -f https://raw.githubusercontent.com/Orange-OpenSource/nifikop/master/deploy/crds/nifi.orange.com_nifiusers_crd.yaml\n"))),(0,i.kt)(o.Z,{value:"k8sprev",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f https://raw.githubusercontent.com/Orange-OpenSource/nifikop/master/deploy/crds/v1beta1/nifi.orange.com_nificlusters_crd.yaml\nkubectl apply -f https://raw.githubusercontent.com/Orange-OpenSource/nifikop/master/deploy/crds/v1beta1/nifi.orange.com_nifiusers_crd.yaml\n")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo add orange-incubator https://orange-kubernetes-charts-incubator.storage.googleapis.com/\nhelm repo update\n")),(0,i.kt)(l.Z,{defaultValue:"helm3",values:[{label:"helm 3",value:"helm3"},{label:"helm previous",value:"helm"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"helm3",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# You have to create the namespace before executing following command\nhelm install nifikop \\\n    --namespace=nifikop \\\n    --set image.tag=v0.2.1-release \\\n    orange-incubator/nifikop\n"))),(0,i.kt)(o.Z,{value:"helm",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"helm install --name=nifikop \\\n    --namespace=nifikop \\\n    --set image.tag=v0.2.1-release \\\n    orange-incubator/nifikop\n")))),(0,i.kt)("h3",{id:"deploy-lets-encrypt-issuer"},"Deploy Let's encrypt issuer"),(0,i.kt)("p",null,"As mentioned at the start of the article, we want to delegate the certificate authority to ",(0,i.kt)("a",{parentName:"p",href:"https://letsencrypt.org/"},"Let's Encrypt"),", so to do this with ",(0,i.kt)("inlineCode",{parentName:"p"},"cert-manager")," we have to create an issuer.\nSo edit the ",(0,i.kt)("inlineCode",{parentName:"p"},"kubernetes/nifi/letsencryptissuer.yaml")," and set it with your own values :  "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: cert-manager.io/v1alpha2\nkind: Issuer\nmetadata:\n  name: letsencrypt-staging\nspec:\n  acme:\n    # You must replace this email address with your own.\n    # Let\'s Encrypt will use this to contact you about expiring\n    # certificates, and issues related to your account.\n    email: <your email>\n    server: https://acme-staging-v02.api.letsencrypt.org/directory\n    privateKeySecretRef:\n      # Secret resource used to store the account\'s private key.\n      name: example-issuer-account-key\n    # Add a single challenge solver, HTTP01 using nginx\n    solvers:\n      - http01:\n          ingress:\n            ingressTemplate:\n              metadata:\n                annotations:\n                  "external-dns.alpha.kubernetes.io/ttl": "5"\n')),(0,i.kt)("p",null,"You just have to change the ",(0,i.kt)("inlineCode",{parentName:"p"},"Spec.Acme.Email")," field with your own email.\nYou can also change the acme server to prod one ",(0,i.kt)("inlineCode",{parentName:"p"},"https://acme-v02.api.letsencrypt.org/directory")),(0,i.kt)("p",null,"Once the configuration is ok, you can deploy the ",(0,i.kt)("inlineCode",{parentName:"p"},"Issuer")," : "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"cd ..\nkubectl create -f kubernetes/nifi/letsencryptissuer.yaml\n")),(0,i.kt)("h3",{id:"deploy-secured-nifi-cluster"},"Deploy Secured NiFi cluster"),(0,i.kt)("p",null,"You will now deploy your secured cluster to do so edit the ",(0,i.kt)("inlineCode",{parentName:"p"},"kubernetes/nifi/secured_nifi_cluster.yaml")," and set with your own values : "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: nifi.orange.com/v1alpha1\nkind: NifiCluster\nmetadata:\n  name: securednificluster\n  namespace: nifi\nspec:\n  ...\n  initialAdminUser: <your google account email>\n  readOnlyConfig:\n    # NifiProperties configuration that will be applied to the node.\n    nifiProperties:\n      webProxyHosts:\n        - <nifi's hostname>:8443\n      # Additionnals nifi.properties configuration that will override the one produced based\n      # on template and configurations.\n      overrideConfigs: |\n        ...\n        nifi.security.user.oidc.client.id=<oidc client's id>\n        nifi.security.user.oidc.client.secret=<oidc client's secret>\n        ...\n    ...\n  ...\n  listenersConfig:\n    useExternalDNS: true\n    clusterDomain: <nifi's domain name>\n    sslSecrets:\n      tlsSecretName: \"test-nifikop\"\n      create: true\n      issuerRef:\n        name: letsencrypt-staging\n        kind: Issuer\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Spec.InitialAdminUser")," : Your GCP account email (this will give you the admin role into the NiFi cluster), in my case ",(0,i.kt)("inlineCode",{parentName:"li"},"alexandre.guitton@orange.com")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Spec.ReadOnlyConfig.NifiProperties.WebProxyHosts","[","0","]")," : The web hostname configured in the Oauth section, in my case ",(0,i.kt)("inlineCode",{parentName:"li"},"nifi.orange.trycatchlearn.fr")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Spec.ReadOnlyConfig.NifiProperties.OverrideConfigs")," : you have to set the following properties : ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"nifi.security.user.oidc.client.id")," : OAuth Client ID"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"nifi.security.user.oidc.client.secret")," : OAuth Client secret"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Spec.ListenersConfig.ClusterDomain")," : This the domain name you configure into your ",(0,i.kt)("inlineCode",{parentName:"li"},"External DNS")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"Cloud DNS")," zone. In my case ",(0,i.kt)("inlineCode",{parentName:"li"},"orange.trycatchlearn.fr"))),(0,i.kt)("p",null,"Once the configuration is ok, you can deploy the ",(0,i.kt)("inlineCode",{parentName:"p"},"NifiCluster")," : "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"kubectl create -f kubernetes/nifi/secured_nifi_cluster.yaml\n")),(0,i.kt)("p",null,"The first time can take some time, the ",(0,i.kt)("inlineCode",{parentName:"p"},"cert-manager")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Let's encrypt")," will check that you are able to manage the dns zone, so if you check the pods :  "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"kubectl get pods -n nifikop\nNAME                            READY   STATUS    RESTARTS   AGE\ncm-acme-http-solver-4fg5b       1/1     Running   0          18s\ncm-acme-http-solver-6sw9x       1/1     Running   0          20s\ncm-acme-http-solver-bpzvm       1/1     Running   0          20s\ncm-acme-http-solver-f8xvs       1/1     Running   0          19s\ncm-acme-http-solver-k997c       1/1     Running   0          17s\ncm-acme-http-solver-l5fzz       1/1     Running   0          18s\nexternal-dns-569bf79b57-hjmtt   1/1     Running   0          9h\nnifikop-56cb587d96-p8vdf        1/1     Running   0          29s\n")),(0,i.kt)("p",null,"And check the ingresses : "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get ingresses -n nifikop\nNAME                        HOSTS                                                 ADDRESS          PORTS   AGE\ncm-acme-http-solver-4pff9   nifi-2-node.nifi-headless.orange.trycatchlearn.fr                      80      2m27s\ncm-acme-http-solver-cfsf4   nifi-0-node.nifi-headless.orange.trycatchlearn.fr     34.120.24.109    80      2m30s\ncm-acme-http-solver-hn8jj   nifi-controller.nifikop.mgt.orange.trycatchlearn.fr   34.120.90.24     80      2m29s\ncm-acme-http-solver-llhsp   nifi-1-node.nifi-headless.orange.trycatchlearn.fr                      80      2m27s\ncm-acme-http-solver-v8dmm   nifi-headless.orange.trycatchlearn.fr                 34.120.201.215   80      2m28s\ncm-acme-http-solver-xvs9f   nifi.orange.trycatchlearn.fr                          35.244.202.176   80      2m27s\n")),(0,i.kt)("p",null,"You can see some ngnix instances that are used to validate all the dns names you required into your certificates (for nodes and services)."),(0,i.kt)("p",null,"After some times your cluster should be running : "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"kubectl get pods -n nifikop\nNAME                            READY   STATUS    RESTARTS   AGE\nexternal-dns-569bf79b57-hjmtt   1/1     Running   0          9h\nnifi-0-nodekmhgz                1/1     Running   0          27m\nnifi-1-node4465q                1/1     Running   0          27m\nnifi-2-node5jwwx                1/1     Running   0          27m\nnifikop-56cb587d96-p8vdf        1/1     Running   0          40m\n")),(0,i.kt)("h3",{id:"access-to-your-secured-nifi-cluster"},"Access to your secured NiFi Cluster"),(0,i.kt)("p",null,"You can now access the NiFi cluster using the loadbalancer service hostname ",(0,i.kt)("inlineCode",{parentName:"p"},"<nifi's cluster name>.<DNS name>"),", in my case it's ",(0,i.kt)("a",{parentName:"p",href:"https://nifi.orange.trycatchlearn.fr:8443/nifi"},"https://nifi.orange.trycatchlearn.fr:8443/nifi")," and authenticate on the cluster using the admin account email address configured in the ",(0,i.kt)("inlineCode",{parentName:"p"},"NifiCluster")," resource."),(0,i.kt)("p",null,"Here is my 3-nodes secured NiFi cluster up and running : "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"3 nodes cluster",src:n(67333).Z,width:"1913",height:"587"})),(0,i.kt)("p",null,"3-nodes secured NiFi cluster : "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"3 nodes",src:n(86793).Z,width:"1861",height:"234"})),(0,i.kt)("p",null,"You can now update the authorizations and add additional users/groups."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Just have a look on ",(0,i.kt)("a",{parentName:"p",href:"https://orange-opensource.github.io/nifikop/docs/3_tasks/2_security/1_ssl#operator-access-policies"},"documentation's page")," to finish cleaning setup.\nAnd you can now start to play with scaling, following the ",(0,i.kt)("a",{parentName:"p",href:"https://orange-opensource.github.io/nifikop/docs/3_tasks/2_security/1_ssl#scale-up---node-declaration"},"documentation's page"))),(0,i.kt)("h2",{id:"cleaning"},"Cleaning"),(0,i.kt)("p",null,"Start to remove you NiFi cluster and NiFiKop operator : "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl delete nificlusters.nifi.orange.com nifi -n nifikop\nhelm del nifikop\nkubectl delete crds nificlusters.nifi.orange.com\nkubectl delete crds nifiusers.nifi.orange.com\nkubectl delete issuers.cert-manager.io letsencrypt-staging -n nifikop\n")),(0,i.kt)("p",null,"To destroy all resources you created, you just need to run : "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-consol"},"cd terraform\n./destroy.sh <service account key's path>\n")))}k.isMDXComponent=!0},86793:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/3_nodes-09ddf2fa04ee827ae2632a3019ca2aab.png"},67333:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/3_nodes_cluster-97f4c386a2bec5bd0ab11c3b90ca1f7d.png"},20907:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/oauth_credentials-531aa57e08dcc1e4a0a0bace39d779c3.png"}}]);