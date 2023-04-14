/*! For license information please see c4f5d8e4.16b1a374.js.LICENSE.txt */
(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[64195],{25560:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>f});var a=n(25773),r=n(27378),i=n(60042),s=n.n(i),o=n(83595),l=n(81884),c=n(50353),m=n(98948);const u={section:"section_rC2D",sectionAlt:"sectionAlt_XiGz",sectionInner:"sectionInner_Y4r1",featureImage:"featureImage_yA8i",announcement:"announcement_FsS0",announcementDark:"announcementDark_tzC4",announcementInner:"announcementInner_RsrQ",hero:"hero_syme",heroInner:"heroInner_VWeJ",heroProjectTagline:"heroProjectTagline_EkV5",heroProjectKeywords:"heroProjectKeywords_uRRc",heroLogo:"heroLogo_jM6J",jackInTheBox:"jackInTheBox_S9I6",indexCtas:"indexCtas_hUA_",indexCtasGetStartedButton:"indexCtasGetStartedButton_UQaK",indexCtasGitHubButtonWrapper:"indexCtasGitHubButtonWrapper_AOht",indexCtasGitHubButton:"indexCtasGitHubButton_sMIS"};var p=[{title:r.createElement(r.Fragment,null,"Kubernetes Operator"),imageUrl:"img/operator-sdk.png",description:r.createElement(r.Fragment,null,"NiFiKop will define a new Kubernetes object named NifiCluster which will be used to describe and instantiate a Nifi Cluster in Kubernetes")},{title:r.createElement(r.Fragment,null,"Open-Source"),imageUrl:"img/open_source.svg",description:r.createElement(r.Fragment,null,"Open source software released under the Apache 2.0 license.")},{title:r.createElement(r.Fragment,null,"NiFi Cluster in K8S"),imageUrl:"img/kubernetes.png",description:r.createElement(r.Fragment,null,"NiFiKop is a Kubernetes custom controller which will loop over events on NifiCluster objects and reconcile with kubernetes resources needed to create a valid NiFi Cluster deployment.")},{title:r.createElement(r.Fragment,null,"Space Scoped"),imageUrl:"img/namespace.png",description:r.createElement(r.Fragment,null,"NiFiKop is listening is a Multi-Namespace scoped operator (not cluster wide), and is able to manage several Nifi Clusters within these namespaces.")},{title:r.createElement(r.Fragment,null,"User and group management"),imageUrl:"img/users.png",description:r.createElement(r.Fragment,null,"NiFiKop allows you to define users and groups with their access policies using K8s resources. This way you can fully automate your NiFi cluster setup using yaml configurations.")},{title:r.createElement(r.Fragment,null,"Dataflow lifecycle management"),imageUrl:"img/dataflow.png",description:r.createElement(r.Fragment,null,"NiFiKop allows you to define NiFi registry client, parameter context and datflow using K8s resources. This way you can fully automate your Dataflow deployment and let the operator manage is lifecycle.")}];function d(e){var t=e.imageUrl,n=e.title,a=e.description,i=(0,m.Z)(t);return r.createElement("div",{className:s()("col col--4",u.feature)},i&&r.createElement("div",{className:"text--center"},r.createElement("img",{className:u.featureImage,src:i,alt:n})),r.createElement("h3",null,n),r.createElement("p",null,a))}function g(e){var t=e.imageUrl,n=e.title,a=e.organizationLink,i=(0,m.Z)(t);return r.createElement("div",{className:s()("col col--4",u.feature)},i&&r.createElement("div",{className:"text--center"},r.createElement("a",{href:a},r.createElement("img",{className:u.featureImage,src:i,alt:n}))))}var h=[{imageUrl:"img/orange_logo.png",title:"Orange",organizationLink:"https://www.orange.fr/portail"},{imageUrl:"img/influxdata_full_navy.svg",title:"InfluxData",organizationLink:"https://www.influxdata.com/"},{imageUrl:"",title:"",organizationLink:"/"}];const f=function(){var e=(0,c.Z)().siteConfig,t=(e=void 0===e?{}:e).customFields,n=void 0===t?{}:t;return r.createElement(o.Z,{permalink:"/",description:n.description},r.createElement("div",{className:u.hero},r.createElement("div",{className:u.heroInner},r.createElement("h1",{className:u.heroProjectTagline},r.createElement("img",{alt:"NiFiKop",className:u.heroLogo,src:(0,m.Z)("img/nifikop.png")}),"Open-Source, Apache ",r.createElement("span",{className:u.heroProjectKeywords},"NiFi")," ","operator for ",r.createElement("span",{className:u.heroProjectKeywords},"Kubernetes")," "),r.createElement("div",{className:u.indexCtas},r.createElement(l.Z,{className:u.indexCtasGetStartedButton,to:(0,m.Z)("docs/2_deploy_nifikop/1_quick_start")},"Get Started"),r.createElement("span",{className:u.indexCtasGitHubButtonWrapper},r.createElement("iframe",{className:u.indexCtasGitHubButton,src:"https://ghbtns.com/github-btn.html?user=konpyutaika&repo=nifikop&type=star&count=true&size=large",width:160,height:30,title:"GitHub Stars"}))))),r.createElement("div",{className:s()(u.announcement,u.announcementDark)},r.createElement("div",{className:u.announcementInner},"The ",r.createElement("span",{className:u.heroProjectKeywords},"NiFiKop")," NiFi Kubernetes operator makes it ",r.createElement("span",{className:u.heroProjectKeywords},"easy")," to run Apache NiFi on Kubernetes. Apache NiFI is a free, open-source solution that support powerful and ",r.createElement("span",{className:u.heroProjectKeywords},"scalable")," directed graphs of ",r.createElement("span",{className:u.heroProjectKeywords},"data routing"),", transformation, and system ",r.createElement("span",{className:u.heroProjectKeywords},"mediation logic"),".")),r.createElement("div",{className:u.section},p&&p.length&&r.createElement("section",{className:u.features},r.createElement("div",{className:"container"},r.createElement("div",{className:"row"},p.map((function(e,t){return r.createElement(d,(0,a.Z)({key:t},e))})))))),r.createElement("div",{className:u.section},r.createElement("section",null,r.createElement("div",{className:s()(u.announcement,u.announcementDark)},r.createElement("div",{className:u.announcementInner},"Join the open source community that uses and contributes to ",r.createElement("span",{className:u.heroProjectKeywords},"NiFiKop"),", and reinvent how to work with ",r.createElement("span",{className:u.heroProjectKeywords},"Apache NiFi"),"!"))),h&&h.length&&r.createElement("section",{className:u.features},r.createElement("div",{className:s()(u.announcement,u.announcementDark)},r.createElement("div",{className:"row"},h.map((function(e,t){return r.createElement(g,(0,a.Z)({key:t},e))})))))))}},60042:(e,t)=>{var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)){if(n.length){var s=r.apply(null,n);s&&e.push(s)}}else if("object"===i){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var o in n)a.call(n,o)&&n[o]&&e.push(o)}}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()}}]);