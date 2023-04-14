"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[90030],{35318:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(27378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return n?o.createElement(h,a(a({ref:t},c),{},{components:n})):o.createElement(h,a({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var p=2;p<r;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},15762:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var o=n(25773),i=n(30808),r=(n(27378),n(35318)),a=["components"],l={id:"0_contribution_organization",title:"Contribution organization",sidebar_label:"Contribution organization"},s=void 0,p={unversionedId:"6_contributing/0_contribution_organization",id:"6_contributing/0_contribution_organization",title:"Contribution organization",description:"New ownership for more community oriented",source:"@site/../docs/6_contributing/0_contribution_organization.md",sourceDirName:"6_contributing",slug:"/6_contributing/0_contribution_organization",permalink:"/nifikop/docs/next/6_contributing/0_contribution_organization",draft:!1,editUrl:"https://github.com/konpyutaika/nifikop/edit/master/site/website/../docs/6_contributing/0_contribution_organization.md",tags:[],version:"current",lastUpdatedBy:"Alexandre Guitton",lastUpdatedAt:1648230436,formattedLastUpdatedAt:"Mar 25, 2022",frontMatter:{id:"0_contribution_organization",title:"Contribution organization",sidebar_label:"Contribution organization"},sidebar:"docs",previous:{title:"NiFi NodeGroup Autoscaler",permalink:"/nifikop/docs/next/5_references/7_nifi_nodegroup_autoscaler"},next:{title:"Developer guide",permalink:"/nifikop/docs/next/6_contributing/1_developer_guide"}},c={},u=[{value:"New ownership for more community oriented",id:"new-ownership-for-more-community-oriented",level:2},{value:"Organizations",id:"organizations",level:2},{value:"Slack channel",id:"slack-channel",level:3},{value:"Tech scoping",id:"tech-scoping",level:3},{value:"Teams",id:"teams",level:3},{value:"NiFiKop Leads",id:"nifikop-leads",level:4},{value:"NiFiKop Contributors",id:"nifikop-contributors",level:4}],d={toc:u};function m(e){var t=e.components,n=(0,i.Z)(e,a);return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"new-ownership-for-more-community-oriented"},"New ownership for more community oriented"),(0,r.kt)("p",null,"The NiFiKop operator was originally started by Orange in March 2020 as ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Orange-OpenSource/nifikop"},"Orange-OpenSource/nifikop"),",\nand then forked as ",(0,r.kt)("inlineCode",{parentName:"p"},"konpyutaika/nifikop")," in March 20222 : but this is the same codebase and the same developers."),(0,r.kt)("p",null,"We made this decision in concert with Orange team, because some legal restrictions would not have allowed to involve and serve external community around this operator efficiently.\nTherefore,we have chosen to fork the source code into another organization and repository, which will allow a more open ownership and community-oriented development."),(0,r.kt)("p",null,"It is important to notice that Orange will still continue to work and contribute to the operator, but as part of the community :)"),(0,r.kt)("h2",{id:"organizations"},"Organizations"),(0,r.kt)("p",null,"With this ownership move, we decided to set up a new project management, with the aims to be more and more community-oriented"),(0,r.kt)("h3",{id:"slack-channel"},"Slack channel"),(0,r.kt)("p",null,"One of the most important topics we want to improve is probably the communication around the operator's development.\nTo achieve this, we have created a new Slack open to anyone who wants ",(0,r.kt)("a",{parentName:"p",href:"https://join.slack.com/t/konpytika/shared_invite/zt-14md072lv-Jr8mqYoeUrqzfZF~YGUpXA"},"to join"),",\nwith two main channels:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://konpytika.slack.com/archives/C035FHN1MNG"},"#nifikop-news"),": There we will announce each new release, and communicate about next objectives for the operator."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://konpytika.slack.com/archives/C035X6KP684"},"#nifikop-discussion"),": Direct discussion between each member of the community to design new needs, fix issues and help each other.")),(0,r.kt)("h3",{id:"tech-scoping"},"Tech scoping"),(0,r.kt)("p",null,"As we want to involve as much as possible the people on the operator, we will introduce a new support for brainstorming and designing new major features."),(0,r.kt)("p",null,"This is the Tech Scoping, whose main objective is to describe the problem statement that we are trying to solve,\nthe different approaches that could solve it, and together discuss and challenge them to define the solution to be implemented."),(0,r.kt)("p",null,"You can find all the tech scoping in this ",(0,r.kt)("a",{parentName:"p",href:"https://drive.google.com/drive/folders/1-A__UxEdRBZrwEUJu4lMF4LJtIstrnT0?usp=sharing"},"Google Drive repository")),(0,r.kt)("h3",{id:"teams"},"Teams"),(0,r.kt)("h4",{id:"nifikop-leads"},"NiFiKop Leads"),(0,r.kt)("p",null,"This group is currently composed of : "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/erdrix"},"Alexandre Guitton")," as original owner and developer of the operator"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/juldrixx"},"Julien Guitton")," as representative of Orange contribution")),(0,r.kt)("p",null,"The mains objectives of this group are to : "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Define the global roadmap of the operator,"),(0,r.kt)("li",{parentName:"ul"},"Ensure the reviews and validations of the PRs,"),(0,r.kt)("li",{parentName:"ul"},"Review and validate the Tech Scoping.")),(0,r.kt)("p",null,"This group aims to be more representative of the community, so if the operator community grows or if there is a needs, we would be happy to have more people in this group :)"),(0,r.kt)("h4",{id:"nifikop-contributors"},"NiFiKop Contributors"),(0,r.kt)("p",null,"This group is currently composed of : "),(0,r.kt)("p",null,"The mains objectives of this group are to : "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Manage issues to help people,"),(0,r.kt)("li",{parentName:"ul"},"Review PRs (not validation),"),(0,r.kt)("li",{parentName:"ul"},"Create and edit Tech Scoping for new features.")),(0,r.kt)("p",null,"This is an open group, so feel free to contact a NiFiKop Leader on Slack to join :)"))}m.isMDXComponent=!0}}]);