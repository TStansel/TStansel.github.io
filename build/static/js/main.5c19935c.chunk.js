(this["webpackJsonpreact-test"]=this["webpackJsonpreact-test"]||[]).push([[0],{23:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a(1),i=a(14),c=a.n(i),r=a(15),l=a(7),o=(a(56),a(57),["btn--primary","btn--outline"]),d=["btn--medium","btn--large"],j=function(e){var t=e.children,a=e.type,n=e.onClick,i=e.buttonStyle,c=e.buttonSize,r=o.includes(i)?i:o[0],j=d.includes(c)?c:d[0];return Object(s.jsx)(l.Link,{to:"footer",className:"btn-mobile",children:Object(s.jsx)("button",{className:"btn ".concat(r," ").concat(j),onClick:n,type:a,children:t})})};var b=function(){var e=Object(n.useState)(!1),t=Object(r.a)(e,2),a=t[0],i=t[1],c=Object(n.useState)(!0),o=Object(r.a)(c,2),d=o[0],b=o[1],m=Object(n.useState)(!0),h=Object(r.a)(m,2),u=h[0],p=h[1],x=function(){return i(!1)},f=function(){l.animateScroll.scrollToTop()},O=function(){x(),f()},g=function(){window.innerWidth<=960?(b(!1),p(!1)):(b(!0),p(!0))};return Object(n.useEffect)((function(){g()}),[]),window.addEventListener("resize",g),Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("nav",{className:"navbar",children:Object(s.jsxs)("div",{className:"navbar-container",children:[u?Object(s.jsx)(l.Link,{to:"/",className:"navbar-logo",onClick:f,children:"Thomas Stansel"}):Object(s.jsx)(l.Link,{to:"/",className:"navbar-logo",onClick:O,children:"T.S"}),Object(s.jsx)("div",{className:"menu-icon",onClick:function(){return i(!a)},children:Object(s.jsx)("i",{className:a?"fas fa-times":"fas fa-bars"})}),Object(s.jsxs)("ul",{className:a?"nav-menu active":"nav-menu",children:[Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(l.Link,{to:"home",className:"nav-links",onClick:O,activeClass:"active",spy:!0,smooth:!0,offset:-70,duration:500,children:"Home"})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(l.Link,{to:"experience",className:"nav-links",onClick:x,activeClass:"active",spy:!0,smooth:!0,offset:-110,duration:700,children:"Where I've Worked"})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(l.Link,{to:"projects",className:"nav-links",onClick:x,activeClass:"active",spy:!0,smooth:!0,offset:-110,duration:700,children:"Projects"})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(l.Link,{to:"mountains",className:"nav-links",onClick:x,activeClass:"active",spy:!0,smooth:!0,offset:-110,duration:700,children:"National Parks"})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(l.Link,{to:"footer",className:"nav-links-mobile",onClick:x,activeClass:"active",spy:!0,smooth:!0,offset:-110,duration:700,children:"Contact"})})]}),d&&Object(s.jsx)(j,{buttonStyle:"btn--outline",onClick:function(){l.animateScroll.scrollToBottom()},children:"Contact"})]})})})},m=a(39),h=a(2),u=(a(23),a(58),a(41));var p=function(){return Object(s.jsx)("div",{className:"main-container",children:Object(s.jsxs)("h2",{children:["Hello, I'm Thomas Stansel",Object(s.jsx)("br",{}),Object(s.jsxs)(u.a,{interval:1300,children:[Object(s.jsx)("span",{children:"Software engineer"}),Object(s.jsx)("span",{children:"Byu cs student"}),Object(s.jsx)("span",{children:"Lover of national parks"}),Object(s.jsx)("span",{children:"Life-long learner"})]})]})})};var x=function(e){return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("li",{className:"exp-cards-item",children:Object(s.jsxs)("div",{className:"exp-cards-item-link",children:[Object(s.jsx)("div",{className:"exp-cards-item-pic-wrap",children:Object(s.jsx)("a",{href:e.link,children:Object(s.jsx)("img",{className:"exp-cards-item-img",alt:e.label,src:e.src})})}),Object(s.jsxs)("div",{className:"exp-cards-item-info",children:[Object(s.jsx)("h5",{className:"exp-cards-item-title",children:e.text}),Object(s.jsx)("h5",{className:"exp-cards-item-description",children:e.description}),Object(s.jsxs)("div",{className:"exp-icon-links",children:[Object(s.jsx)("i",{className:e.icon1}),Object(s.jsx)("i",{className:e.icon2})]})]})]})})})},f=(a(66),a.p+"static/media/byu-icon.05fa0846.png"),O=a.p+"static/media/CapitalOne-icon.bc3a5144.png",g=a.p+"static/media/Bluehost-icon.f18c0794.png",v=a.p+"static/media/taxbit-icon.5eaafa65.png",y=a.p+"static/media/aws.42796768.jpg";var N=function(){return Object(s.jsxs)("div",{className:"exp-cards",children:[Object(s.jsx)("h1",{className:"exp-header",id:"experience",children:"Where I've Worked"}),Object(s.jsx)("div",{className:"exp-cards-container",children:Object(s.jsxs)("div",{className:"exp-cards-wrapper",children:[Object(s.jsxs)("ul",{className:"exp-cards-items",children:[Object(s.jsx)(x,{src:y,text:"SDE Intern",label:"AWS",link:"https://aws.amazon.com",description:"Current"}),Object(s.jsx)(x,{src:v,text:"SWE Intern",label:"Taxbit",link:"https://taxbit.com",description:"Saved 15 hours per incident by architecting and creating a tool to extract execution data from AWS step functions and make the data queryable using a no code solution. Increased reliability and maintainability by writing dozens of unit, integration, and property tests."}),Object(s.jsx)(x,{src:O,text:"SWE Intern",label:"Capital One",link:"https://www.capitalone.com",description:"Using Python and AWS, updated one project to have to up to date secruity mandates in place and then pulled in several new data fields into an API that handles transaction data for credit cards."})]}),Object(s.jsxs)("ul",{className:"exp-cards-items",children:[Object(s.jsx)(x,{src:g,text:"SWE Intern",label:"Bluehost",link:"https://www.bluehost.com",description:"Created several API endpoints in Perl and Python to implement data from 3rd party sources  and to report on a variety of metrics for customer notifications. Also updated legacy Perl code and wrote documentation and unit tests for updates."}),Object(s.jsx)(x,{src:O,text:"SWE Intern",label:"Capital One",link:"https://www.capitalone.com",description:"Using Python and AWS Lambdas, added on to an existing internal tool to allow for teams to easily identify any resources that were insecure or out of date. Provided immediate results by identifying insecure resources teams did not know were insecure."}),Object(s.jsx)(x,{src:f,text:"Student SWE",label:"BYU OIT",link:"https://oit.byu.edu",description:" Using React-Native and AWS added onto an existing internal mobile application to allow managers to efficiently manage their teams and schedules. Created screens saved time and resources for the team that previously managed all schedules."})]})]})})]})};var k=function(e){return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("li",{className:"cards-item",children:Object(s.jsxs)("div",{className:"cards-item-link",children:[Object(s.jsx)("div",{className:"icon-container",children:Object(s.jsx)("i",{className:e.icon})}),Object(s.jsxs)("div",{className:"cards-item-info",children:[Object(s.jsx)("h5",{className:"cards-item-title",children:e.text}),Object(s.jsx)("h5",{className:"cards-item-description",children:e.description}),Object(s.jsxs)("div",{className:"icon-links",children:[null!=e.github?Object(s.jsx)("a",{target:"_blank",href:e.github,children:Object(s.jsx)("i",{className:"fab fa-github"})}):null,null!=e.youtube?Object(s.jsx)("a",{href:e.youtube,children:Object(s.jsx)("i",{class:"fab fa-youtube",href:e.youtube})}):null]})]})]})})})};a(67);var w=function(){return Object(s.jsxs)("div",{className:"cards",children:[Object(s.jsx)("h1",{id:"projects",children:"Projects"}),Object(s.jsx)("div",{className:"cards-container",children:Object(s.jsxs)("div",{className:"cards-wrapper",children:[Object(s.jsxs)("ul",{className:"cards-items",children:[Object(s.jsx)(k,{icon:"fab fa-slack",text:"Gravity",label:"Java",description:"A slack app built to take each new message, look for a similar message in the history of the slack channel using machine learning, and reccomend the thread of that found message as a potential answer. At peak, had 400 users and ~60,000 events hitting the system per day.",github:"https://github.com/TStansel/Gravity",youtube:"https://www.youtube.com/watch?v=m3pYBpD28oU"}),Object(s.jsx)(k,{icon:"fab fa-react",text:"Athena",label:"Athena",description:"A mobile app built to make finding internships/jobs easier to find and easier to apply to. Only requires the  user's information to be entered once and then the user is only shown jobs that match their qualifications. Using a Tinder-like structure to show the office space and other company information, applying is done through simply clicking a few buttons.",github:"https://github.com/TStansel/Sandbox",youtube:"https://www.youtube.com/watch?v=Anzb4yPA3rE"}),Object(s.jsx)(k,{icon:"fab fa-python",text:"AlexaCAPS",label:"Alexa",description:"An Alexa Skill that is triggered when the student asks for their university's Counseling and Psychological Services(CAPS) phone number. A lambda function then uses web scraping to get the specfied university's CAPS number and gives it back to the student through the Alexa device.",github:"https://github.com/TStansel/AlexaCAPS"})]}),Object(s.jsxs)("ul",{className:"cards-items",children:[Object(s.jsx)(k,{icon:"fab fa-python",text:"TherAssist",label:"Python",description:" Using a pre-trained machine learning modal, the application is able to detect the face, and reognize the emotion on it. This allows the application to time how long it takes the user to replicate a displayed emotion.",github:"https://github.com/arianneghislainerull/defHacks--TeamName--project",youtube:"https://youtu.be/smWooWXbKfM"}),Object(s.jsx)(k,{icon:"fab fa-android",text:"Tweeter",label:"Android",description:"Class project to create a Twitter clone using proper design patterns. Implemented the Template-Method Pattern, the Observer Pattern, the Facade pattern, and others.  Uses AWS API Gateway, AWS Lambda, and AWS DynamoDB to interact with and keep the data consistent."})]})]})})]})};var S=function(e){return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("li",{className:"mtn-cards-item",children:Object(s.jsxs)("div",{className:"mtn-cards-item-link",children:[Object(s.jsx)("div",{className:"mtn-cards-item-pic-wrap",children:Object(s.jsx)("img",{className:"mtn-cards-item-img",alt:e.label,src:e.src})}),Object(s.jsxs)("div",{className:"mtn-cards-item-info",children:[Object(s.jsx)("h5",{className:"mtn-cards-item-title",children:e.text}),Object(s.jsx)("h5",{className:"mtn-cards-item-description",children:e.description}),Object(s.jsxs)("div",{className:"mtn-icon-links",children:[Object(s.jsx)("i",{className:e.icon1}),Object(s.jsx)("i",{className:e.icon2})]})]})]})})})},A=(a(68),a.p+"static/media/Capital_reef.c144b5b5.png"),C=a.p+"static/media/yellowstone.467943a8.jpg",P=a.p+"static/media/Great_basin.ed467ecb.png",T=a.p+"static/media/grandTeton.ca9684ba.jpg",W=a.p+"static/media/zions.102416ac.jpg",I=a.p+"static/media/gateway.5fd01a2e.png",L=a.p+"static/media/9parks12days.f6620adf.gif";var G=function(){return Object(s.jsxs)("div",{className:"mtn-cards",children:[Object(s.jsx)("h1",{className:"mtn-header",id:"mountains",children:"National Parks"}),Object(s.jsx)("h3",{className:"mtn-desc",id:"mtn-desc",children:"My wife and I have a goal to visit all the National Parks in the US these are some of the ones we've gone to so far!"}),Object(s.jsx)("div",{className:"mtn-cards-container",children:Object(s.jsxs)("div",{className:"mtn-cards-wrapper",children:[Object(s.jsxs)("ul",{className:"mtn-cards-items",children:[Object(s.jsx)(S,{src:I,text:"Gateway Arch",label:"Gateway Arch",description:" Gateway Arch in September 2021"}),Object(s.jsx)(S,{src:L,text:"9 Parks 12 Days",label:"9_Parks_12_Days",description:"Rented a sprinter van and went to 9 parks in 12 days in August 2021"}),Object(s.jsx)(S,{src:W,text:"Zion",label:"Angels Landing",description:"End of Angels Landing Hike in Febuary 2021"}),Object(s.jsx)(S,{src:P,text:"Great Basin",label:"Great Basin",description:"Summit of Wheeler Peak in September 2020"})]}),Object(s.jsxs)("ul",{className:"mtn-cards-items",children:[Object(s.jsx)(S,{src:T,text:"Grand Tetons",label:"Grand Tetons",description:" Picture of the Grand Tetons in August 2020"}),Object(s.jsx)(S,{src:C,text:"Yellowstone",label:"Grand Canyon of Yellowstone",description:"Grand Canyon of Yellowstone in August 2020"}),Object(s.jsx)(S,{src:A,text:"Capital Reef",label:"Capital Reef",description:"Small Outlook over Capital Reef in May 2020"})]})]})})]})},_=(a(69),a.p+"static/media/Thomas_Stansel_Resume.abbd59cc.pdf");var E=function(){return Object(s.jsx)("div",{className:"footer-container",id:"footer",children:Object(s.jsxs)("section",{className:"footer-subscription",children:[Object(s.jsx)("p",{className:"footer-subscription-heading",children:"Thanks for checking out my site!"}),Object(s.jsx)("p",{className:"footer-subscription-text",children:"I'm always looking to meet new people, so feel free to connect with me below."}),Object(s.jsxs)("div",{className:"footer-icons",children:[Object(s.jsx)("a",{target:"_blank",href:"https://github.com/TStansel",children:Object(s.jsx)("i",{className:"fab fa-github-square"})}),Object(s.jsx)("a",{target:"_blank",href:"https://www.linkedin.com/in/thomas-stansel/",children:Object(s.jsx)("i",{className:"fab fa-linkedin"})}),Object(s.jsx)("a",{target:"_blank",href:"mailto:thomas.s.stansel@gmail.com",children:Object(s.jsx)("i",{className:"fas fa-envelope-square"})}),Object(s.jsx)("a",{target:"_blank",href:_,children:Object(s.jsx)("i",{className:"fas fa-file-alt"})})]})]})})};var B=function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(p,{id:"home"}),Object(s.jsx)(N,{id:"experience"}),Object(s.jsx)(w,{id:"projects"}),Object(s.jsx)(G,{id:"mountains"}),Object(s.jsx)(E,{id:"footer"})]})};var U=function(){return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)(m.a,{children:[Object(s.jsx)(b,{}),Object(s.jsx)(h.c,{children:Object(s.jsx)(h.a,{path:"/",exact:!0,component:B})})]})})};c.a.render(Object(s.jsx)(U,{}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.5c19935c.chunk.js.map