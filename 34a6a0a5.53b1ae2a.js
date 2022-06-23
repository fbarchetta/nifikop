(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{156:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return b}));var a=n(2),r=n(6),i=(n(0),n(558)),o=n(562),c=n(563),s={id:"1_getting_started",title:"Getting Started",sidebar_label:"Getting Started"},l={unversionedId:"2_setup/1_getting_started",id:"version-v0.11.0/2_setup/1_getting_started",isDocsHomePage:!1,title:"Getting Started",description:"The operator installs the 1.12.1 version of Apache NiFi, can run on Minikube v0.33.1+ and Kubernetes 1.21.0+, and require Helm 3.",source:"@site/versioned_docs/version-v0.11.0/2_setup/1_getting_started.md",slug:"/2_setup/1_getting_started",permalink:"/nifikop/docs/2_setup/1_getting_started",editUrl:"https://github.com/konpyutaika/nifikop/edit/master/site/website/versioned_docs/version-v0.11.0/2_setup/1_getting_started.md",version:"v0.11.0",lastUpdatedBy:"Juldrixx",lastUpdatedAt:1655925825,sidebar_label:"Getting Started",sidebar:"version-v0.11.0/docs",previous:{title:"Roadmap",permalink:"/nifikop/docs/1_concepts/4_roadmap"},next:{title:"Google Kubernetes Engine",permalink:"/nifikop/docs/2_setup/2_platform_setup/1_gke"}},u=[{value:"Prerequisites",id:"prerequisites",children:[{value:"Install Zookeeper",id:"install-zookeeper",children:[]},{value:"Install cert-manager",id:"install-cert-manager",children:[]}]},{value:"Installation",id:"installation",children:[]},{value:"Installing with Helm",id:"installing-with-helm",children:[]},{value:"Create custom storage class",id:"create-custom-storage-class",children:[]},{value:"Deploy NiFi cluster",id:"deploy-nifi-cluster",children:[]}],p={rightToc:u};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The operator installs the 1.12.1 version of Apache NiFi, can run on Minikube v0.33.1+ and ",Object(i.b)("strong",{parentName:"p"},"Kubernetes 1.21.0+"),", and require ",Object(i.b)("strong",{parentName:"p"},"Helm 3"),"."),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"The operator supports NiFi 1.11.0+"))),Object(i.b)("p",null,"As a pre-requisite it needs a Kubernetes cluster. Also, NiFi requires Zookeeper so you need to first have a Zookeeper cluster if you don't already have one."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"We believe in the ",Object(i.b)("inlineCode",{parentName:"p"},"separation of concerns")," principle, thus the NiFi operator does not install nor manage Zookeeper.")),Object(i.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(i.b)("h3",{id:"install-zookeeper"},"Install Zookeeper"),Object(i.b)("p",null,"To install Zookeeper we recommend using the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/bitnami/charts/tree/master/bitnami/zookeeper"}),"Bitnami's Zookeeper chart"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"helm repo add bitnami https://charts.bitnami.com/bitnami\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# You have to create the namespace before executing following command\nhelm install zookeeper bitnami/zookeeper \\\n    --set resources.requests.memory=256Mi \\\n    --set resources.requests.cpu=250m \\\n    --set resources.limits.memory=256Mi \\\n    --set resources.limits.cpu=250m \\\n    --set global.storageClass=standard \\\n    --set networkPolicy.enabled=true \\\n    --set replicaCount=3\n")),Object(i.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Replace the ",Object(i.b)("inlineCode",{parentName:"p"},"storageClass")," parameter value with your own."))),Object(i.b)("h3",{id:"install-cert-manager"},"Install cert-manager"),Object(i.b)("p",null,"The NiFiKop operator uses ",Object(i.b)("inlineCode",{parentName:"p"},"cert-manager")," for issuing certificates to users and and nodes, so you'll need to have it setup in case you want to deploy a secured cluster with authentication enabled. The minimum supported cert-manager version is v1.0."),Object(i.b)(o.a,{defaultValue:"directly",values:[{label:"Directly",value:"directly"},{label:"helm 3",value:"helm3"}],mdxType:"Tabs"},Object(i.b)(c.a,{value:"directly",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# Install the CustomResourceDefinitions and cert-manager itself\nkubectl apply -f \\\n    https://github.com/jetstack/cert-manager/releases/download/v1.7.2/cert-manager.yaml\n"))),Object(i.b)(c.a,{value:"helm3",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# Install CustomResourceDefinitions first\nkubectl apply --validate=false -f \\\n   https://github.com/jetstack/cert-manager/releases/download/v1.7.2/cert-manager.crds.yaml\n\n# Add the jetstack helm repo\nhelm repo add jetstack https://charts.jetstack.io\nhelm repo update\n\n# You have to create the namespace before executing following command\nhelm install cert-manager \\\n    --namespace cert-manager \\\n    --version v1.7.2 jetstack/cert-manager\n")))),Object(i.b)("h2",{id:"installation"},"Installation"),Object(i.b)("h2",{id:"installing-with-helm"},"Installing with Helm"),Object(i.b)("p",null,"You can deploy the operator using a Helm chart ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/konpyutaika/nifikop/tree/master/helm"}),"Helm chart"),":"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"To install an other version of the operator use ",Object(i.b)("inlineCode",{parentName:"p"},"helm install --name=nifikop --namespace=nifi --set operator.image.tag=x.y.z konpyutaika-incubator/nifikop"))),Object(i.b)("p",null,"In the case where you don't want to deploy the crds using helm (",Object(i.b)("inlineCode",{parentName:"p"},"--skip-crds"),"), you have to deploy manually the crds :"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"kubectl apply -f https://raw.githubusercontent.com/konpyutaika/nifikop/master/config/crd/bases/nifi.konpyutaika.com_nificlusters.yaml\nkubectl apply -f https://raw.githubusercontent.com/konpyutaika/nifikop/master/config/crd/bases/nifi.konpyutaika.com_nifiusers.yaml\nkubectl apply -f https://raw.githubusercontent.com/konpyutaika/nifikop/master/config/crd/bases/nifi.konpyutaika.com_nifiusergroups.yaml\nkubectl apply -f https://raw.githubusercontent.com/konpyutaika/nifikop/master/config/crd/bases/nifi.konpyutaika.com_nifidataflows.yaml\nkubectl apply -f https://raw.githubusercontent.com/konpyutaika/nifikop/master/config/crd/bases/nifi.konpyutaika.com_nifiparametercontexts.yaml\nkubectl apply -f https://raw.githubusercontent.com/konpyutaika/nifikop/master/config/crd/bases/nifi.konpyutaika.com_nifiregistryclients.yaml\n")),Object(i.b)("p",null,"Now deploy the helm chart :"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'# You have to create the namespace before executing following command\nhelm install nifikop \\\n    oci://ghcr.io/konpyutaika/helm-charts/nifikop \\\n    --namespace=nifi \\\n    --version 0.11.0 \\\n    --set image.tag=v0.11.0-release \\\n    --set resources.requests.memory=256Mi \\\n    --set resources.requests.cpu=250m \\\n    --set resources.limits.memory=256Mi \\\n    --set resources.limits.cpu=250m \\\n    --set namespaces={"nifi"}\n')),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Add the following parameter if you are using this instance to only deploy unsecured clusters : ",Object(i.b)("inlineCode",{parentName:"p"},"--set certManager.enabled=false")))),Object(i.b)("h2",{id:"create-custom-storage-class"},"Create custom storage class"),Object(i.b)("p",null,"We recommend to use a ",Object(i.b)("strong",{parentName:"p"},"custom StorageClass")," to leverage the volume binding mode ",Object(i.b)("inlineCode",{parentName:"p"},"WaitForFirstConsumer")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"apiVersion: storage.k8s.io/v1\nkind: StorageClass\nmetadata:\n  name: exampleStorageclass\nparameters:\n  type: pd-standard\nprovisioner: kubernetes.io/gce-pd\nreclaimPolicy: Delete\nvolumeBindingMode: WaitForFirstConsumer\n")),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Remember to set your NiFiCluster CR properly to use the newly created StorageClass."))),Object(i.b)("h2",{id:"deploy-nifi-cluster"},"Deploy NiFi cluster"),Object(i.b)("p",null,"And after you can deploy a simple NiFi cluster."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# Add your zookeeper svc name to the configuration\nkubectl create -n nifi -f config/samples/simplenificluster.yaml\n")))}b.isMDXComponent=!0},558:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,d=p["".concat(o,".").concat(m)]||p[m]||b[m]||i;return n?r.a.createElement(d,c(c({ref:t},l),{},{components:n})):r.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},559:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},560:function(e,t,n){"use strict";var a=n(0),r=n(561);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},561:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},562:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(560),o=n(559),c=n(52),s=n.n(c),l=37,u=39;t.a=function(e){var t=e.block,n=e.children,c=e.defaultValue,p=e.values,b=e.groupId,m=e.className,d=Object(i.a)(),f=d.tabGroupChoices,h=d.setTabGroupChoices,g=Object(a.useState)(c),v=g[0],O=g[1],j=Object(a.useState)(!1),y=j[0],k=j[1];if(null!=b){var N=f[b];null!=N&&N!==v&&p.some((function(e){return e.value===N}))&&O(N)}var w=function(e){O(e),null!=b&&h(b,e)},C=[],_=function(e){e.metaKey||e.altKey||e.ctrlKey||k(!0)},x=function(){k(!1)};return Object(a.useEffect)((function(){return window.addEventListener("keydown",_),window.addEventListener("mousedown",x),function(){window.removeEventListener("keydown",_),window.removeEventListener("mousedown",x)}}),[]),r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":t},m)},p.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":v===t,className:Object(o.a)("tabs__item",s.a.tabItem,{"tabs__item--active":v===t}),style:y?{}:{outline:"none"},key:t,ref:function(e){return C.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(C,e.target,e),_(e)},onFocus:function(){return w(t)},onClick:function(){w(t),k(!1)},onPointerDown:function(){return k(!1)}},n)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===v}))[0]))}},563:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("div",null,e.children)}}}]);