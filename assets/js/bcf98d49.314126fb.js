"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[50083],{35318:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(o,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},36811:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var r=n(25773),a=n(30808),i=(n(27378),n(35318)),l=["components"],s={id:"4_ssl_configuration",title:"SSL configuration",sidebar_label:"SSL configuration"},o=void 0,c={unversionedId:"3_manage_nifi/1_manage_clusters/1_deploy_cluster/4_ssl_configuration",id:"version-v0.14.1/3_manage_nifi/1_manage_clusters/1_deploy_cluster/4_ssl_configuration",title:"SSL configuration",description:"The NiFi operator makes securing your NiFi cluster with SSL. You may provide your own certificates, or instruct the operator to create them for from your cluster configuration.",source:"@site/versioned_docs/version-v0.14.1/3_manage_nifi/1_manage_clusters/1_deploy_cluster/4_ssl_configuration.md",sourceDirName:"3_manage_nifi/1_manage_clusters/1_deploy_cluster",slug:"/3_manage_nifi/1_manage_clusters/1_deploy_cluster/4_ssl_configuration",permalink:"/nifikop/docs/v0.14.1/3_manage_nifi/1_manage_clusters/1_deploy_cluster/4_ssl_configuration",draft:!1,editUrl:"https://github.com/konpyutaika/nifikop/edit/master/site/website/versioned_docs/version-v0.14.1/3_manage_nifi/1_manage_clusters/1_deploy_cluster/4_ssl_configuration.md",tags:[],version:"v0.14.1",lastUpdatedBy:"Alexandre Guitton",lastUpdatedAt:1664048197,formattedLastUpdatedAt:"Sep 24, 2022",frontMatter:{id:"4_ssl_configuration",title:"SSL configuration",sidebar_label:"SSL configuration"},sidebar:"docs",previous:{title:"Istio service mesh",permalink:"/nifikop/docs/v0.14.1/3_manage_nifi/1_manage_clusters/1_deploy_cluster/3_expose_cluster/2_istio_service_mesh"},next:{title:"OpenId Connect",permalink:"/nifikop/docs/v0.14.1/3_manage_nifi/1_manage_clusters/1_deploy_cluster/5_users_authentication/1_oidc"}},u={},p=[{value:"Using an existing Issuer",id:"using-an-existing-issuer",level:2},{value:"Example : Let&#39;s encrypt",id:"example--lets-encrypt",level:3},{value:"Create SSL credentials",id:"create-ssl-credentials",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"NiFi operator")," makes securing your NiFi cluster with SSL. You may provide your own certificates, or instruct the operator to create them for from your cluster configuration."),(0,i.kt)("p",null,"Below this is an example configuration required to secure your cluster with SSL :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: nifi.konpyutaika.com/v1alpha1\nkind: NifiCluster\n...\nspec:\n  ...\n  readOnlyConfig:\n    # NifiProperties configuration that will be applied to the node.\n    nifiProperties:\n      webProxyHosts:\n        - nifistandard2.trycatchlearn.fr:8443\n        ...\n  ...\n  listenersConfig:\n    internalListeners:\n      - type: "https"\n        name: "https"\n        containerPort: 8443\n      - type: "cluster"\n        name: "cluster"\n        containerPort: 6007\n      - type: "s2s"\n        name: "s2s"\n        containerPort: 10000\n    sslSecrets:\n      tlsSecretName: "test-nifikop"\n      create: true\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"readOnlyConfig.nifiProperties.webProxyHosts")," : A list of allowed HTTP Host header values to consider when NiFi is running securely and will be receiving requests to a different host","[:port]"," than it is bound to. ",(0,i.kt)("a",{parentName:"li",href:"https://nifi.apache.org/docs/nifi-docs/html/administration-guide.html#web-properties"},"web-properties"))),(0,i.kt)("p",null,"If ",(0,i.kt)("inlineCode",{parentName:"p"},"listenersConfig.sslSecrets.create")," is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),", the operator will look for the secret at ",(0,i.kt)("inlineCode",{parentName:"p"},"listenersConfig.sslSecrets.tlsSecretName")," and expect these values :"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"key"),(0,i.kt)("th",{parentName:"tr",align:null},"value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"caCert"),(0,i.kt)("td",{parentName:"tr",align:null},"The CA certificate")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"caKey"),(0,i.kt)("td",{parentName:"tr",align:null},"The CA private key")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"clientCert"),(0,i.kt)("td",{parentName:"tr",align:null},"A client certificate (this will be used by operator for NiFI operations)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"clientKey"),(0,i.kt)("td",{parentName:"tr",align:null},"The private key for clientCert")))),(0,i.kt)("h2",{id:"using-an-existing-issuer"},"Using an existing Issuer"),(0,i.kt)("p",null,"As described in the ",(0,i.kt)("a",{parentName:"p",href:"/nifikop/docs/v0.14.1/5_references/1_nifi_cluster/6_listeners_config#sslsecrets"},"Reference section"),", instead of using a self-signed certificate as CA, you can use an existing one.\nIn order to do so, you only have to refer it into your ",(0,i.kt)("inlineCode",{parentName:"p"},"Spec.ListenerConfig.SslSecrets.IssuerRef")," field."),(0,i.kt)("h3",{id:"example--lets-encrypt"},"Example : Let's encrypt"),(0,i.kt)("p",null,"Let's say you have an existing DNS server, with ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/kubernetes-sigs/external-dns"},"external dns")," deployed into your cluster's namespace.\nYou can easily use Let's encrypt as authority for your certificate."),(0,i.kt)("p",null,"To do this, you have to :"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Create an issuer :")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: cert-manager.io/v1alpha2\nkind: Issuer\nmetadata:\n  name: letsencrypt-staging\nspec:\n  acme:\n    # You must replace this email address with your own.\n    # Let\'s Encrypt will use this to contact you about expiring\n    # certificates, and issues related to your account.\n    email: <your email address>\n    server: https://acme-staging-v02.api.letsencrypt.org/directory\n    privateKeySecretRef:\n      # Secret resource used to store the account\'s private key.\n      name: example-issuer-account-key\n    # Add a single challenge solver, HTTP01 using nginx\n    solvers:\n      - http01:\n          ingress:\n            ingressTemplate:\n              metadata:\n                annotations:\n                  "external-dns.alpha.kubernetes.io/ttl": "5"\n')),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Setup External dns and correctly create your issuer into your cluster configuration :")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: nifi.konpyutaika.com/v1alpha1\nkind: NifiCluster\n...\nspec:\n  ...\n  clusterSecure: true\n  siteToSiteSecure: true\n  ...\n  listenersConfig:\n    clusterDomain: <DNS zone name>\n    useExternalDNS: true\n    ...\n    sslSecrets:\n      tlsSecretName: "test-nifikop"\n      create: true\n      issuerRef:\n        name: letsencrypt-staging\n        kind: Issuer\n')),(0,i.kt)("h2",{id:"create-ssl-credentials"},"Create SSL credentials"),(0,i.kt)("p",null,"You may use ",(0,i.kt)("inlineCode",{parentName:"p"},"NifiUser")," resource to create new certificates for your applications, allowing them to query your Nifi cluster."),(0,i.kt)("p",null,"To create a new client you will need to generate new certificates sign by the CA. The operator can automate this for you using the ",(0,i.kt)("inlineCode",{parentName:"p"},"NifiUser")," CRD :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"cat << EOF | kubectl apply -n nifi -f -\napiVersion:  nifi.konpyutaika.com/v1alpha1\nkind: NifiUser\nmetadata:\n  name: example-client\n  namespace: nifi\nspec:\n  clusterRef:\n    name: nifi\n  secretName: example-client-secret\nEOF\n")),(0,i.kt)("p",null,"This will create a user and store its credentials in the secret ",(0,i.kt)("inlineCode",{parentName:"p"},"example-client-secret"),". The secret contains these fields :"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"key"),(0,i.kt)("th",{parentName:"tr",align:null},"value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ca.crt"),(0,i.kt)("td",{parentName:"tr",align:null},"The CA certificate")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"tls.crt"),(0,i.kt)("td",{parentName:"tr",align:null},"The user certificate")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"tls.key"),(0,i.kt)("td",{parentName:"tr",align:null},"The user private key")))),(0,i.kt)("p",null,"You can then mount these secret to your pod. Alternatively, you can write them to your local machine by running:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"kubectl get secret example-client-secret -o jsonpath=\"{['data']['ca\\.crt']}\" | base64 -d > ca.crt\nkubectl get secret example-client-secret -o jsonpath=\"{['data']['tls\\.crt']}\" | base64 -d > tls.crt\nkubectl get secret example-client-secret -o jsonpath=\"{['data']['tls\\.key']}\" | base64 -d > tls.key\n")),(0,i.kt)("p",null,"The operator can also include a Java keystore format (JKS) with your user secret if you'd like. Add ",(0,i.kt)("inlineCode",{parentName:"p"},"includeJKS"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," to the ",(0,i.kt)("inlineCode",{parentName:"p"},"spec")," like shown above, and then the user-secret will gain these additional fields :"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"key"),(0,i.kt)("th",{parentName:"tr",align:null},"value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"tls.jks"),(0,i.kt)("td",{parentName:"tr",align:null},"The java keystore containing both the user keys and the CA (use this for your keystore AND truststore)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"pass.txt"),(0,i.kt)("td",{parentName:"tr",align:null},"The password to decrypt the JKS (this will be randomly generated)")))))}m.isMDXComponent=!0}}]);