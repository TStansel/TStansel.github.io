(this["webpackJsonpreact-test"]=this["webpackJsonpreact-test"]||[]).push([[0],{23:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a(1),i=a(14),c=a.n(i),r=a(15),l=a(7),o=(a(56),a(57),["btn--primary","btn--outline"]),d=["btn--medium","btn--large"],j=function(e){var t=e.children,a=e.type,n=e.onClick,i=e.buttonStyle,c=e.buttonSize,r=o.includes(i)?i:o[0],j=d.includes(c)?c:d[0];return Object(s.jsx)(l.Link,{to:"footer",className:"btn-mobile",children:Object(s.jsx)("button",{className:"btn ".concat(r," ").concat(j),onClick:n,type:a,children:t})})};var m=function(){var e=Object(n.useState)(!1),t=Object(r.a)(e,2),a=t[0],i=t[1],c=Object(n.useState)(!0),o=Object(r.a)(c,2),d=o[0],m=o[1],b=Object(n.useState)(!0),h=Object(r.a)(b,2),u=h[0],p=h[1],x=function(){return i(!1)},f=function(){l.animateScroll.scrollToTop()},O=function(){x(),f()},v=function(){window.innerWidth<=960?(m(!1),p(!1)):(m(!0),p(!0))};return Object(n.useEffect)((function(){v()}),[]),window.addEventListener("resize",v),Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("nav",{className:"navbar",children:Object(s.jsxs)("div",{className:"navbar-container",children:[u?Object(s.jsx)(l.Link,{to:"/",className:"navbar-logo",onClick:f,children:"Thomas Stansel"}):Object(s.jsx)(l.Link,{to:"/",className:"navbar-logo",onClick:O,children:"T.S"}),Object(s.jsx)("div",{className:"menu-icon",onClick:function(){return i(!a)},children:Object(s.jsx)("i",{className:a?"fas fa-times":"fas fa-bars"})}),Object(s.jsxs)("ul",{className:a?"nav-menu active":"nav-menu",children:[Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(l.Link,{to:"home",className:"nav-links",onClick:O,activeClass:"active",spy:!0,smooth:!0,offset:-70,duration:500,children:"Home"})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(l.Link,{to:"experience",className:"nav-links",onClick:x,activeClass:"active",spy:!0,smooth:!0,offset:-110,duration:700,children:"Where I've Worked"})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(l.Link,{to:"projects",className:"nav-links",onClick:x,activeClass:"active",spy:!0,smooth:!0,offset:-110,duration:700,children:"Projects"})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(l.Link,{to:"mountains",className:"nav-links",onClick:x,activeClass:"active",spy:!0,smooth:!0,offset:-110,duration:700,children:"National Parks"})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(l.Link,{to:"footer",className:"nav-links-mobile",onClick:x,activeClass:"active",spy:!0,smooth:!0,offset:-110,duration:700,children:"Contact"})})]}),d&&Object(s.jsx)(j,{buttonStyle:"btn--outline",onClick:function(){l.animateScroll.scrollToBottom()},children:"Contact"})]})})})},b=a(39),h=a(2),u=(a(23),a(58),a(41));var p=function(){return Object(s.jsx)("div",{className:"main-container",children:Object(s.jsxs)("h2",{children:["Hello, I'm Thomas Stansel",Object(s.jsx)("br",{}),Object(s.jsxs)(u.a,{interval:1300,children:[Object(s.jsx)("span",{children:"Software engineer"}),Object(s.jsx)("span",{children:"Byu cs student"}),Object(s.jsx)("span",{children:"Lover of national parks"}),Object(s.jsx)("span",{children:"Life-long learner"})]})]})})};var x=function(e){return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("li",{className:"exp-cards-item",children:Object(s.jsxs)("div",{className:"exp-cards-item-link",children:[Object(s.jsx)("div",{className:"exp-cards-item-pic-wrap",children:Object(s.jsx)("a",{href:e.link,children:Object(s.jsx)("img",{className:"exp-cards-item-img",alt:e.label,src:e.src})})}),Object(s.jsxs)("div",{className:"exp-cards-item-info",children:[Object(s.jsx)("h5",{className:"exp-cards-item-title",children:e.text}),Object(s.jsx)("h5",{className:"exp-cards-item-description",children:e.description}),Object(s.jsxs)("div",{className:"exp-icon-links",children:[Object(s.jsx)("i",{className:e.icon1}),Object(s.jsx)("i",{className:e.icon2})]})]})]})})})},f=(a(66),a.p+"static/media/byu-icon.05fa0846.png"),O=a.p+"static/media/CapitalOne-icon.bc3a5144.jpeg",v=a.p+"static/media/Bluehost-icon.f18c0794.png";var A=function(){return Object(s.jsxs)("div",{className:"exp-cards",children:[Object(s.jsx)("h1",{className:"exp-header",id:"experience",children:"Where I've Worked"}),Object(s.jsx)("div",{className:"exp-cards-container",children:Object(s.jsxs)("div",{className:"exp-cards-wrapper",children:[Object(s.jsxs)("ul",{className:"exp-cards-items",children:[Object(s.jsx)(x,{src:"data:image/png;base64,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",text:"SWE Intern",label:"Novarad",link:"https://www.novarad.net",description:"Current"}),Object(s.jsx)(x,{src:O,text:"SWE Intern",label:"Capital One",link:"https://www.capitalone.com",description:"Using Python and AWS, updated one project to have to up to date secruity mandates in place and then pulled in several new data fields into an API that handles transaction data for credit cards."})]}),Object(s.jsxs)("ul",{className:"exp-cards-items",children:[Object(s.jsx)(x,{src:v,text:"SWE Intern",label:"Bluehost",link:"https://www.bluehost.com",description:"Created several API endpoints in Perl and Python to implement data from 3rd party sources  and to report on a variety of metrics for customer notifications. Also updated legacy Perl code and wrote documentation and unit tests for updates."}),Object(s.jsx)(x,{src:O,text:"SWE Intern",label:"Capital One",link:"https://www.capitalone.com",description:"Using Python and AWS Lambdas, added on to an existing internal tool to allow for teams to easily identify any resources that were insecure or out of date. Provided immediate results by identifying insecure resources teams did not know were insecure."}),Object(s.jsx)(x,{src:f,text:"Student SWE",label:"BYU OIT",link:"https://oit.byu.edu",description:" Using React-Native and AWS added onto an existing internal mobile application to allow managers to efficiently manage their teams and schedules. Created screens saved time and resources for the team that previously managed all schedules."})]})]})})]})};var N=function(e){return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("li",{className:"cards-item",children:Object(s.jsxs)("div",{className:"cards-item-link",children:[Object(s.jsx)("div",{className:"icon-container",children:Object(s.jsx)("i",{className:e.icon})}),Object(s.jsxs)("div",{className:"cards-item-info",children:[Object(s.jsx)("h5",{className:"cards-item-title",children:e.text}),Object(s.jsx)("h5",{className:"cards-item-description",children:e.description}),Object(s.jsxs)("div",{className:"icon-links",children:[null!=e.github?Object(s.jsx)("a",{target:"_blank",href:e.github,children:Object(s.jsx)("i",{className:"fab fa-github"})}):null,null!=e.youtube?Object(s.jsx)("a",{href:e.youtube,children:Object(s.jsx)("i",{class:"fab fa-youtube",href:e.youtube})}):null]})]})]})})})};a(67);var g=function(){return Object(s.jsxs)("div",{className:"cards",children:[Object(s.jsx)("h1",{id:"projects",children:"Projects"}),Object(s.jsx)("div",{className:"cards-container",children:Object(s.jsxs)("div",{className:"cards-wrapper",children:[Object(s.jsxs)("ul",{className:"cards-items",children:[Object(s.jsx)(N,{icon:"fab fa-react",text:"Athena",label:"Athena",description:"A mobile app built to make finding internships/jobs easier to find and easier to apply to. Only requires the  user's information to be entered once and then the user is only shown jobs that match their qualifications. Using a Tinder-like structure to show the office space and other company information, applying is done through simply clicking a few buttons.",github:"https://github.com/TStansel/Sandbox",youtube:"https://www.youtube.com/watch?v=Anzb4yPA3rE"}),Object(s.jsx)(N,{icon:"fab fa-python",text:"AlexaCAPS",label:"Alexa",description:"An Alexa Skill that is triggered when the student asks for their university's Counseling and Psychological Services(CAPS) phone number. A lambda function then uses web scraping to get the specfied university's CAPS number and gives it back to the student through the Alexa device.",github:"https://github.com/TStansel/AlexaCAPS"})]}),Object(s.jsxs)("ul",{className:"cards-items",children:[Object(s.jsx)(N,{icon:"fab fa-python",text:"TherAssist",label:"Python",description:" Using a pre-trained machine learning modal, the application is able to detect the face, and reognize the emotion on it. This allows the application to time how long it takes the user to replicate a displayed emotion. For a demo, click the Youtube link below.",github:"https://github.com/arianneghislainerull/defHacks--TeamName--project",youtube:"https://youtu.be/smWooWXbKfM"}),Object(s.jsx)(N,{icon:"fab fa-android",text:"Family Map Client",label:"Android",description:"Using the Google Map API and the API created in the Family Map Server, markers for each of the user's and their family's events are displayed on a map. Filters were created to allow the user to filter out certain events from being shown on the map."}),Object(s.jsx)(N,{icon:"fab fa-java",text:"Family Map Server",label:"Java",description:"A server and API for the Family Map Client. This project was responsible for generating four generations of data for the user and storing it in a SQL server. This project also created an API that allowed the Android app to access this data."})]})]})})]})};var k=function(e){return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("li",{className:"mtn-cards-item",children:Object(s.jsxs)("div",{className:"mtn-cards-item-link",children:[Object(s.jsx)("div",{className:"mtn-cards-item-pic-wrap",children:Object(s.jsx)("img",{className:"mtn-cards-item-img",alt:e.label,src:e.src})}),Object(s.jsxs)("div",{className:"mtn-cards-item-info",children:[Object(s.jsx)("h5",{className:"mtn-cards-item-title",children:e.text}),Object(s.jsx)("h5",{className:"mtn-cards-item-description",children:e.description}),Object(s.jsxs)("div",{className:"mtn-icon-links",children:[Object(s.jsx)("i",{className:e.icon1}),Object(s.jsx)("i",{className:e.icon2})]})]})]})})})},w=(a(68),a.p+"static/media/Capital_reef.c144b5b5.png"),y=a.p+"static/media/yellowstone.467943a8.jpg",C=a.p+"static/media/Great_basin.ed467ecb.JPG",S=a.p+"static/media/grandTeton.ca9684ba.jpg",F=a.p+"static/media/zions.102416ac.jpg",L=a.p+"static/media/guadalupe.ec3925c9.JPG";var M=function(){return Object(s.jsxs)("div",{className:"mtn-cards",children:[Object(s.jsx)("h1",{className:"mtn-header",id:"mountains",children:"National Parks"}),Object(s.jsx)("h3",{className:"mtn-desc",id:"mtn-desc",children:"I have a goal to visit all the National Parks in the US these are the ones I've gone to so far!"}),Object(s.jsx)("div",{className:"mtn-cards-container",children:Object(s.jsxs)("div",{className:"mtn-cards-wrapper",children:[Object(s.jsxs)("ul",{className:"mtn-cards-items",children:[Object(s.jsx)(k,{src:F,text:"Zions",label:"Angels Landing",description:"End of Angels Landing Hike in Febuary 2021"}),Object(s.jsx)(k,{src:C,text:"Great Basin",label:"Great Basin",description:"Summit of Wheeler Peak in September 2020"}),Object(s.jsx)(k,{src:S,text:"Grand Tetons",label:"Grand Tetons",description:" Picture of the Grand Tetons in August 2020"})]}),Object(s.jsxs)("ul",{className:"mtn-cards-items",children:[Object(s.jsx)(k,{src:y,text:"Yellowstone",label:"Ol' Faithful",description:"Grand Canyon of Yellowstone in August 2020"}),Object(s.jsx)(k,{src:w,text:"Capital Reef",label:"Capital Reef",description:"Small Outlook over Capital Reef in May 2020"}),Object(s.jsx)(k,{src:L,text:"Guadalupe Mountains",label:"Guadalupe Moutains",description:" Summit of Guadalupe Peak in August 2016"})]})]})})]})},T=(a(69),a.p+"static/media/Thomas_Stansel_Resume.e647d362.pdf");var E=function(){return Object(s.jsx)("div",{className:"footer-container",id:"footer",children:Object(s.jsxs)("section",{className:"footer-subscription",children:[Object(s.jsx)("p",{className:"footer-subscription-heading",children:"Thanks for checking out my site!"}),Object(s.jsx)("p",{className:"footer-subscription-text",children:"I'm always looking to meet new people, so feel free to connect with me below."}),Object(s.jsxs)("div",{className:"footer-icons",children:[Object(s.jsx)("a",{target:"_blank",href:"https://github.com/TStansel",children:Object(s.jsx)("i",{className:"fab fa-github-square"})}),Object(s.jsx)("a",{target:"_blank",href:"https://www.linkedin.com/in/thomas-stansel/",children:Object(s.jsx)("i",{className:"fab fa-linkedin"})}),Object(s.jsx)("a",{target:"_blank",href:"mailto:thomas.s.stansel@gmail.com",children:Object(s.jsx)("i",{className:"fas fa-envelope-square"})}),Object(s.jsx)("a",{target:"_blank",href:T,children:Object(s.jsx)("i",{className:"fas fa-file-alt"})})]})]})})};var D=function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(p,{id:"home"}),Object(s.jsx)(A,{id:"experience"}),Object(s.jsx)(g,{id:"projects"}),Object(s.jsx)(M,{id:"mountains"}),Object(s.jsx)(E,{id:"footer"})]})};var G=function(){return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)(b.a,{children:[Object(s.jsx)(m,{}),Object(s.jsx)(h.c,{children:Object(s.jsx)(h.a,{path:"/",exact:!0,component:D})})]})})};c.a.render(Object(s.jsx)(G,{}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.bb7c5397.chunk.js.map