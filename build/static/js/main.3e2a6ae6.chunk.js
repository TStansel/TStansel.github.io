(this["webpackJsonpreact-test"]=this["webpackJsonpreact-test"]||[]).push([[0],{23:function(e,t,A){},56:function(e,t,A){},57:function(e,t,A){},58:function(e,t,A){},66:function(e,t,A){},67:function(e,t,A){},68:function(e,t,A){},69:function(e,t,A){},70:function(e,t,A){},73:function(e,t,A){"use strict";A.r(t);var a=A(0),s=A(1),i=A(15),n=A.n(i),c=A(9),r=A(7),o=(A(56),A(57),["btn--primary","btn--outline"]),l=["btn--medium","btn--large"],d=function(e){var t=e.children,A=e.type,s=e.onClick,i=e.buttonStyle,n=e.buttonSize,c=o.includes(i)?i:o[0],d=l.includes(n)?n:l[0];return Object(a.jsx)(r.Link,{to:"footer",className:"btn-mobile",children:Object(a.jsx)("button",{className:"btn ".concat(c," ").concat(d),onClick:s,type:A,children:t})})};var j=function(){var e=Object(s.useState)(!1),t=Object(c.a)(e,2),A=t[0],i=t[1],n=Object(s.useState)(!0),o=Object(c.a)(n,2),l=o[0],j=o[1],b=Object(s.useState)(!0),m=Object(c.a)(b,2),u=m[0],h=m[1],p=function(){return i(!1)},f=function(){r.animateScroll.scrollToTop()},x=function(){p(),f()},O=function(){window.innerWidth<=960?(j(!1),h(!1)):(j(!0),h(!0))};return Object(s.useEffect)((function(){O()}),[]),window.addEventListener("resize",O),Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("nav",{className:"navbar",children:Object(a.jsxs)("div",{className:"navbar-container",children:[u?Object(a.jsx)(r.Link,{to:"/",className:"navbar-logo",onClick:f,children:"Thomas Stansel"}):Object(a.jsx)(r.Link,{to:"/",className:"navbar-logo",onClick:x,children:"T.S"}),Object(a.jsx)("div",{className:"menu-icon",onClick:function(){return i(!A)},children:Object(a.jsx)("i",{className:A?"fas fa-times":"fas fa-bars"})}),Object(a.jsxs)("ul",{className:A?"nav-menu active":"nav-menu",children:[Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(r.Link,{to:"home",className:"nav-links",onClick:x,activeClass:"active",spy:!0,smooth:!0,offset:-70,duration:500,children:"Home"})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(r.Link,{to:"experience",className:"nav-links",onClick:p,activeClass:"active",spy:!0,smooth:!0,offset:-110,duration:700,children:"Where I've Worked"})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(r.Link,{to:"projects",className:"nav-links",onClick:p,activeClass:"active",spy:!0,smooth:!0,offset:-110,duration:700,children:"Projects"})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(r.Link,{to:"mountains",className:"nav-links",onClick:p,activeClass:"active",spy:!0,smooth:!0,offset:-110,duration:700,children:"National Parks"})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(r.Link,{to:"footer",className:"nav-links-mobile",onClick:p,activeClass:"active",spy:!0,smooth:!0,offset:-110,duration:700,children:"Contact"})})]}),l&&Object(a.jsx)(d,{buttonStyle:"btn--outline",onClick:function(){r.animateScroll.scrollToBottom()},children:"Contact"})]})})})},b=A(39),m=A(2),u=(A(23),A(58),A(41));var h=function(){return Object(a.jsx)("div",{className:"main-container",children:Object(a.jsxs)("h2",{children:["Hello, I'm Thomas",Object(a.jsx)("br",{}),Object(a.jsxs)(u.a,{interval:1300,children:[Object(a.jsx)("span",{children:"Software engineer"}),Object(a.jsx)("span",{children:"Byu cs student"}),Object(a.jsx)("span",{children:"Lover of national parks"}),Object(a.jsx)("span",{children:"Swe at Lucid"}),Object(a.jsx)("span",{children:"Life-long learner"})]})]})})};var p=function(e){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("li",{className:"exp-cards-item",children:Object(a.jsxs)("div",{className:"exp-cards-item-link",children:[Object(a.jsx)("div",{className:"exp-cards-item-pic-wrap",children:Object(a.jsx)("a",{href:e.link,children:Object(a.jsx)("img",{className:"exp-cards-item-img",alt:e.label,src:e.src})})}),Object(a.jsxs)("div",{className:"exp-cards-item-info",children:[Object(a.jsx)("h5",{className:"exp-cards-item-title",children:e.text}),Object(a.jsx)("h5",{className:"exp-cards-item-description",children:e.description}),Object(a.jsxs)("div",{className:"exp-icon-links",children:[Object(a.jsx)("i",{className:e.icon1}),Object(a.jsx)("i",{className:e.icon2})]})]})]})})})};var f=function(e){return Object(a.jsx)("svg",{className:e.className,height:e.height,width:e.width,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",children:Object(a.jsx)("path",{fill:e.fill,d:"M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"})})};A(66);var x=function(e){var t=Object(s.useState)(""),A=Object(c.a)(t,2),i=A[0],n=A[1],r=Object(s.useState)("0px"),o=Object(c.a)(r,2),l=o[0],d=o[1],j=Object(s.useState)("dropdown__icon"),b=Object(c.a)(j,2),m=b[0],u=b[1],h=Object(s.useRef)(null);return Object(a.jsxs)("div",{className:"dropdown__section",children:[Object(a.jsxs)("button",{className:"dropdown ".concat(i),onClick:function(){n(""===i?"active":""),d("active"===i?"0px":"".concat(h.current.scrollHeight,"px")),u("active"===i?"dropdown__icon":"dropdown__icon rotate")},children:[Object(a.jsx)("p",{className:"dropdown__title",children:e.title}),Object(a.jsx)(f,{className:"".concat(m),width:10,fill:"#777"})]}),Object(a.jsx)("div",{ref:h,style:{maxHeight:"".concat(l)},className:"dropdown__content",children:e.content})]})},O=(A(67),A.p+"static/media/byu-icon.05fa0846.png"),v=A.p+"static/media/CapitalOne-icon.bc3a5144.png",N=A.p+"static/media/taxbit-icon.5eaafa65.png",y=A.p+"static/media/aws.42796768.jpg",w=A.p+"static/media/lucid.235cc292.png";var g=function(){return Object(a.jsxs)("div",{className:"exp-cards",children:[Object(a.jsx)("h1",{className:"exp-header",id:"experience",children:"Where I've Worked"}),Object(a.jsx)("div",{className:"exp-cards-container",children:Object(a.jsx)("div",{className:"exp-cards-wrapper",children:Object(a.jsx)("ul",{className:"exp-cards-items",children:Object(a.jsx)(p,{src:w,text:"Software Engineer - New Grad",label:"Lucid",link:"https://lucid.co/",description:"Current"})})})}),Object(a.jsx)(x,{title:"Internships",content:Object(a.jsx)("div",{className:"exp-cards-container-internships",children:Object(a.jsxs)("div",{className:"exp-cards-wrapper-internships",children:[Object(a.jsxs)("ul",{className:"exp-cards-items-internships",children:[Object(a.jsx)(p,{src:"data:image/jpeg;base64,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",text:"SWE Intern",label:"Lyft",link:"https://www.lyft.com",description:"Increased test coverage by ~30% through updating an internal testing library to include major pieces of the directions object. Shortened the time it takes for new elements of the directions object to be added to this internal testing library for future increased coverage."}),Object(a.jsx)(p,{src:y,text:"SDE Intern",label:"AWS",link:"https://aws.amazon.com",description:"Provided new analytics for customers by starting development on a new endpoint that identifies common reasons behind AWS Connect calls. Created 2 new cloud infrastructures to maintain the needed step functions, lambdas, and pipelines."}),Object(a.jsx)(p,{src:N,text:"SWE Intern",label:"Taxbit",link:"https://taxbit.com",description:"Saved 15 hours per incident by architecting and creating a tool to extract execution data from AWS step functions and make the data queryable using a no code solution. Increased reliability and maintainability by writing dozens of unit, integration, and property tests."})]}),Object(a.jsxs)("ul",{className:"exp-cards-items",children:[Object(a.jsx)(p,{src:v,text:"SWE Intern",label:"Capital One",link:"https://www.capitalone.com",description:"Saved 3 hours per week by automating the joining of several data tables, with new data points, into an API with 10,000 requests per day. Updated an application to be security compliant by fetching previously hard-coded credentials from an API."}),Object(a.jsx)(p,{src:"data:image/jpeg;base64,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",text:"SWE Intern",label:"Bluehost",link:"https://www.bluehost.com",description:"Automated a 10 hour per month process of repetitive work by creating a series of APIs. Increased code coverage by 10% by writing unit tests for and refactoring legacy code."}),Object(a.jsx)(p,{src:v,text:"SWE Intern",label:"Capital One",link:"https://www.capitalone.com",description:"Identified 12 insecure AWS resources by building a solution to auto-scan resources and to then alert the owners. Saved time for 4500 employees, within one year, by identifying an undocumented intricate process for an internal CI/CD tool and writing documentation for it."}),Object(a.jsx)(p,{src:O,text:"SWE Intern",label:"BYU OIT",link:"https://oit.byu.edu",description:" Saved 4 hours a week by allowing managers to directly update on-call schedules instead of the Monitoring Team. Led a team of 2 for creation of screens."})]})]})})})]})};var k=function(e){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("li",{className:"cards-item",children:Object(a.jsxs)("div",{className:"cards-item-link",children:[Object(a.jsx)("div",{className:"icon-container",children:Object(a.jsx)("i",{className:e.icon,id:"project-icon"})}),Object(a.jsxs)("div",{className:"cards-item-info",children:[Object(a.jsx)("h5",{className:"cards-item-title",children:e.text}),Object(a.jsx)("h5",{className:"cards-item-description",children:e.description}),Object(a.jsxs)("div",{className:"icon-links",children:[null!=e.github?Object(a.jsx)("a",{target:"_blank",href:e.github,children:Object(a.jsx)("i",{className:"fab fa-github"})}):null,null!=e.youtube?Object(a.jsx)("a",{href:e.youtube,children:Object(a.jsx)("i",{class:"fab fa-youtube",href:e.youtube})}):null]})]})]})})})};A(68);var T=function(){return Object(a.jsxs)("div",{className:"cards",children:[Object(a.jsx)("h1",{id:"projects",children:"Projects"}),Object(a.jsx)("div",{className:"cards-container",children:Object(a.jsxs)("div",{className:"cards-wrapper",children:[Object(a.jsxs)("ul",{className:"cards-items",children:[Object(a.jsx)(k,{icon:"fab fa-slack",text:"Gravity",label:"Typescript",description:"A slack app built to take each new message, look for a similar message in the history of the slack channel using machine learning, and reccomend the thread of that found message as a potential answer. At peak, had 400 users and ~60,000 events hitting the system per day.",github:"https://github.com/TStansel/Gravity",youtube:"https://www.youtube.com/watch?v=m3pYBpD28oU"}),Object(a.jsx)(k,{icon:"fab fa-python",text:"TherAssist",label:"Python",description:" Using a pre-trained machine learning modal, the application is able to detect the face, and reognize the emotion on it. This allows the application to time how long it takes the user to replicate a displayed emotion.",github:"https://github.com/arianneghislainerull/defHacks--TeamName--project",youtube:"https://youtu.be/smWooWXbKfM"})]}),Object(a.jsxs)("ul",{className:"cards-items",children:[Object(a.jsx)(k,{icon:"fab fa-android",text:"Tweeter",label:"Android",description:"Class project to create a Twitter clone using proper design patterns. Implemented the Template-Method Pattern, the Observer Pattern, the Facade pattern, and others.  Uses AWS API Gateway, AWS Lambda, and AWS DynamoDB to interact with and keep the data consistent."}),Object(a.jsx)(k,{icon:"fab fa-react",text:"Athena",label:"Athena",description:"A mobile app built to make finding internships/jobs easier to find and easier to apply to. Only requires the  user's information to be entered once and then the user is only shown jobs that match their qualifications. Using a Tinder-like structure to show the office space and other company information, applying is done through simply clicking a few buttons.",github:"https://github.com/TStansel/Sandbox",youtube:"https://www.youtube.com/watch?v=Anzb4yPA3rE"}),Object(a.jsx)(k,{icon:"fab fa-python",text:"AlexaCAPS",label:"Alexa",description:"An Alexa Skill that is triggered when the student asks for their university's Counseling and Psychological Services(CAPS) phone number. A lambda function then uses web scraping to get the specfied university's CAPS number and gives it back to the student through the Alexa device.",github:"https://github.com/TStansel/AlexaCAPS"})]})]})})]})};var P=function(e){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("li",{className:"mtn-cards-item",children:Object(a.jsxs)("div",{className:"mtn-cards-item-link",children:[Object(a.jsx)("div",{className:"mtn-cards-item-pic-wrap",children:Object(a.jsx)("img",{className:"mtn-cards-item-img",alt:e.label,src:e.src})}),Object(a.jsxs)("div",{className:"mtn-cards-item-info",children:[Object(a.jsx)("h5",{className:"mtn-cards-item-title",children:e.text}),Object(a.jsx)("h5",{className:"mtn-cards-item-description",children:e.description}),Object(a.jsxs)("div",{className:"mtn-icon-links",children:[Object(a.jsx)("i",{className:e.icon1}),Object(a.jsx)("i",{className:e.icon2})]})]})]})})})},L=(A(69),A.p+"static/media/Capital_reef.c144b5b5.png"),W=A.p+"static/media/yellowstone.467943a8.jpg",G=A.p+"static/media/Great_basin.ed467ecb.png",M=A.p+"static/media/grandTeton.ca9684ba.jpg",S=A.p+"static/media/zions.102416ac.jpg",Z=A.p+"static/media/gateway.5fd01a2e.png",H=A.p+"static/media/9parks12days.f6620adf.gif";var C=function(){return Object(a.jsxs)("div",{className:"mtn-cards",children:[Object(a.jsx)("h1",{className:"mtn-header",id:"mountains",children:"National Parks"}),Object(a.jsx)("h3",{className:"mtn-desc",id:"mtn-desc",children:"My wife and I have a goal to visit all the National Parks in the US these are some of the ones we've gone to so far!"}),Object(a.jsx)("div",{className:"mtn-cards-container",children:Object(a.jsxs)("div",{className:"mtn-cards-wrapper",children:[Object(a.jsxs)("ul",{className:"mtn-cards-items",children:[Object(a.jsx)(P,{src:Z,text:"Gateway Arch",label:"Gateway Arch",description:" Gateway Arch in September 2021"}),Object(a.jsx)(P,{src:H,text:"9 Parks 12 Days",label:"9_Parks_12_Days",description:"Rented a sprinter van and went to 9 parks in 12 days in August 2021"}),Object(a.jsx)(P,{src:S,text:"Zion",label:"Angels Landing",description:"End of Angels Landing Hike in Febuary 2021"})]}),Object(a.jsxs)("ul",{className:"mtn-cards-items",children:[Object(a.jsx)(P,{src:G,text:"Great Basin",label:"Great Basin",description:"Summit of Wheeler Peak in September 2020"}),Object(a.jsx)(P,{src:M,text:"Grand Tetons",label:"Grand Tetons",description:" Picture of the Grand Tetons in August 2020"}),Object(a.jsx)(P,{src:W,text:"Yellowstone",label:"Grand Canyon of Yellowstone",description:"Grand Canyon of Yellowstone in August 2020"}),Object(a.jsx)(P,{src:L,text:"Capital Reef",label:"Capital Reef",description:"Small Outlook over Capital Reef in May 2020"})]})]})})]})},z=(A(70),A.p+"static/media/Thomas_Stansel_Resume.594e5a72.pdf");var D=function(){return Object(a.jsx)("div",{className:"footer-container",id:"footer",children:Object(a.jsxs)("section",{className:"footer-subscription",children:[Object(a.jsx)("p",{className:"footer-subscription-heading",children:"Thanks for checking out my site!"}),Object(a.jsx)("p",{className:"footer-subscription-text",children:"I'm always looking to meet new people, so feel free to connect with me below."}),Object(a.jsxs)("div",{className:"footer-icons",children:[Object(a.jsx)("a",{target:"_blank",href:"https://github.com/TStansel",children:Object(a.jsx)("i",{className:"fab fa-github-square"})}),Object(a.jsx)("a",{target:"_blank",href:"https://www.linkedin.com/in/thomas-stansel/",children:Object(a.jsx)("i",{className:"fab fa-linkedin"})}),Object(a.jsx)("a",{target:"_blank",href:"mailto:thomas.s.stansel@gmail.com",children:Object(a.jsx)("i",{className:"fas fa-envelope-square"})}),Object(a.jsx)("a",{target:"_blank",href:z,children:Object(a.jsx)("i",{className:"fas fa-file-alt"})})]})]})})};var E=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(h,{id:"home"}),Object(a.jsx)(g,{id:"experience"}),Object(a.jsx)(T,{id:"projects"}),Object(a.jsx)(C,{id:"mountains"}),Object(a.jsx)(D,{id:"footer"})]})};var V=function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)(b.a,{children:[Object(a.jsx)(j,{}),Object(a.jsx)(m.c,{children:Object(a.jsx)(m.a,{path:"/",exact:!0,component:E})})]})})};n.a.render(Object(a.jsx)(V,{}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.3e2a6ae6.chunk.js.map