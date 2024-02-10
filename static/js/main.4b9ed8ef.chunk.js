(this["webpackJsonpvesna-grujanic-portfolio"]=this["webpackJsonpvesna-grujanic-portfolio"]||[]).push([[0],{44:function(e,t,a){},46:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var s=a(1),c=a.n(s),n=a(10),o=a.n(n),r=a(68),l=a(64),i=a(69),d=a(31),j=a.n(d),b=(a(44),a(2));const m=e=>{let{switchHandler:t,checked:a}=e;return Object(b.jsx)("div",{className:"d-flex align-items-center",children:Object(b.jsx)(j.a,{checked:a,onChange:t,onColor:"#BADAD9",onHandleColor:"#3B6564",handleDiameter:30,uncheckedIcon:!1,checkedIcon:!1,boxShadow:"0px 1px 5px rgba(0, 0, 0, 0.6)",activeBoxShadow:"0px 0px 1px 10px rgba(255, 255, 255, 0.8)",height:20,width:48,className:"react-switch",id:"material-switch"})})};a(46);const h=Object(s.createContext)(),x={light:{name:"light",textColor:"rgb(36, 41, 47)",bgColor:"rgb(240, 240, 240)",textSecondaryColor:"rgb(226, 159, 42)",introImage:"light-intro-image",skillsAndContactImg:"light-skills-and-contact-img"},dark:{name:"dark",textColor:"rgb(186, 218, 217)",bgColor:"rgb(13, 17, 23)",textSecondaryColor:"rgb(96, 186, 184)",introImage:"dark-intro-image",skillsAndContactImg:"dark-skills-and-contact-img"}},p=e=>{const[t,a]=Object(s.useState)(x.light);return Object(b.jsx)(h.Provider,{value:{themeStyle:t,themeStyleToggle:()=>a((e=>e.name===x.light.name?x.dark:x.light))},children:e.children})},g=()=>{const[e,t]=Object(s.useState)(!1),a=Object(s.useContext)(h),c=a.themeStyle.textColor,n=a.themeStyle.skillsAndContactImg;return Object(b.jsx)(r.a,{expand:"lg",variant:"dark",bg:"dark",className:"container-fluid ".concat(n),children:Object(b.jsxs)(l.a,{children:[Object(b.jsx)(r.a.Toggle,{"aria-controls":"navbar-nav"}),Object(b.jsx)(r.a.Collapse,{id:"navbar-nav",style:{color:c},children:Object(b.jsxs)(i.a,{className:"fs-5 ms-auto",children:[Object(b.jsx)(i.a.Link,{href:"#about-me",style:{color:c},children:"about"}),Object(b.jsx)(i.a.Link,{href:"#skills",style:{color:c},children:"skills"}),Object(b.jsx)(i.a.Link,{href:"#projects",style:{color:c},children:"projects"}),Object(b.jsx)(i.a.Link,{href:"#contact",style:{color:c},children:"contact"}),Object(b.jsx)(i.a.Link,{children:Object(b.jsx)(m,{switchHandler:()=>{t(!e),a.themeStyleToggle()},checked:e})})]})})]})})};a(51);const O=()=>{const e=Object(s.useContext)(h),t=e.themeStyle.introImage,a=e.themeStyle.textSecondaryColor;return Object(b.jsx)(l.a,{fluid:!0,className:"intro-wrapper ".concat(t),children:Object(b.jsx)(l.a,{className:"my-name",children:Object(b.jsxs)("div",{className:"first-and-last-name mb-5 pt-5",children:[Object(b.jsx)("a",{href:"#about-me",className:"text-decoration-none",children:Object(b.jsx)("span",{className:"logo",style:{color:a},"data-aos":"fade-down","data-aos-delay":"500",children:"Vesna"})}),Object(b.jsx)("h1",{className:"last-name","data-aos":"fade-down","data-aos-delay":"100",children:"GRUJANI\u0106"}),Object(b.jsx)("div",{className:"intro-subtitle my-5",children:Object(b.jsx)("div",{className:"intro-subtitle-wrapper tracking-in-expand pt-5",children:Object(b.jsx)("p",{className:"fs-4 intro-subtitle-content",children:"Frontend web developer based in Belgrade."})})})]})})})};var u=a(65),f=a(66),y=a(34),N=a(35),v=a(33);a(52);const w=()=>{const e=Object(s.useContext)(h).themeStyle.textSecondaryColor;return Object(b.jsx)(l.a,{fluid:!0,id:"about-me",className:"py-5 my-5",children:Object(b.jsxs)(l.a,{children:[Object(b.jsx)("h2",{className:"text-center fw-bold pt-5","data-aos":"fade-down",children:"ABOUT ME"}),Object(b.jsx)(u.a,{className:"py-5 mb-5",children:Object(b.jsx)(f.a,{sm:12,"data-aos":"fade-up",children:Object(b.jsx)("p",{className:"fs-4 fw-normal text-center m-auto col-md-8",children:"Hello, I'm Vesna, a frontend web developer highly motivated to continuously enhance my skills and deliver functional, visually appealing web applications."})})}),Object(b.jsxs)(u.a,{className:"g-4 md:g-0",children:[Object(b.jsxs)(f.a,{sm:12,md:6,lg:4,className:"text-center","data-aos":"fade-up","data-aos-delay":"100",children:[Object(b.jsx)(v.a,{style:{color:e},size:"30px"}),Object(b.jsx)("h4",{children:"WORK"}),Object(b.jsx)("p",{children:"Vast/Vroom - 6 months"}),Object(b.jsx)("p",{children:"Helbiz DOO, Serbia - 18 months"})]}),Object(b.jsxs)(f.a,{sm:12,md:6,lg:4,className:"text-center","data-aos":"fade-up","data-aos-delay":"200",children:[Object(b.jsx)(y.a,{style:{color:e},size:"30px"}),Object(b.jsx)("h4",{children:"CERTIFICATES"}),Object(b.jsx)("p",{className:"fw-bold",children:"Front End Bootcamp"}),Object(b.jsx)("p",{children:"Belgrade Institute of Technology \u2013 BIT"}),Object(b.jsx)("p",{className:"fw-bold pt-3",children:"Quality Assurance Manual Software Testing Course"}),Object(b.jsx)("p",{children:"TNation Academy, Belgrade"})]}),Object(b.jsxs)(f.a,{sm:12,md:6,lg:4,className:"text-center","data-aos":"fade-up","data-aos-delay":"300",children:[Object(b.jsx)(N.a,{style:{color:e},size:"30px"}),Object(b.jsx)("h4",{children:"EDUCATION"}),Object(b.jsx)("p",{className:"fw-bold",children:"Master of Pharmacy"}),Object(b.jsx)("p",{children:"Faculty of Pharmacy, Univerity of Belgrade"})]})]})]})})};var k=a(23),C=a(13),S=a(29),A=a(26);a(53);const T=()=>{const e=Object(s.useContext)(h).themeStyle.skillsAndContactImg,t=[{name:"JavaScript",icon:Object(b.jsx)(A.b,{size:"100px",className:"border p-2"})},{name:"TypeScript",icon:Object(b.jsx)(C.f,{size:"100px",className:"border p-2"})},{name:"React",icon:Object(b.jsx)(C.d,{size:"100px",className:"border p-2"})},{name:"NEXT.js",icon:Object(b.jsx)(C.b,{size:"100px",className:"border p-2"})},{name:"Vue.js",icon:Object(b.jsx)(S.b,{size:"100px",className:"border p-2"})},{name:"Nuxt",icon:Object(b.jsx)(C.c,{size:"100px",className:"border p-2"})},{name:"HTML5",icon:Object(b.jsx)(k.a,{size:"100px",className:"border p-2"})},{name:"CSS3",icon:Object(b.jsx)(A.a,{size:"100px",className:"border p-2"})},{name:"SASS",icon:Object(b.jsx)(A.c,{size:"100px",className:"border p-2"})},{name:"Tailwind CSS",icon:Object(b.jsx)(C.e,{size:"100px",className:"border p-2"})},{name:"Bootstrap 5",icon:Object(b.jsx)(C.a,{size:"100px",className:"border p-2"})},{name:"Git",icon:Object(b.jsx)(S.a,{size:"100px",className:"border p-2"})}];return Object(b.jsx)(l.a,{fluid:!0,id:"skills",className:"py-5 my-5 ".concat(e),children:Object(b.jsxs)(l.a,{className:"py-5 text-center",children:[Object(b.jsx)("h2",{className:"fw-bold py-5","data-aos":"fade-down",children:"SKILLS"}),Object(b.jsx)(u.a,{className:"justify-content-between py-5 g-2",children:t.map(((e,t)=>Object(b.jsxs)(f.a,{"data-aos":"fade-up","data-aos-delay":100*t,xs:6,sm:4,md:3,lg:2,className:"mb-2 md:mb-4",children:[e.icon,Object(b.jsx)("p",{children:e.name})]},e.name)))})]})})},I=[{id:1,name:"Interview Reports",img:"/images/reports.png",code:"https://github.com/vesnaguja/interview-reports",text:"A SPA for tracking information about companies, candidates and job interviews."},{id:2,name:"Marvel Heroes Team",img:"/images/marvel.png",code:"https://github.com/vesnaguja/marvel-heroes-team",live:"https://vesnaguja.github.io/marvel-heroes-team/",text:"A SPA for searching, browsing and adding heroes to \u201cMy team\u201d."},{id:3,name:"React Users",img:"/images/react-users.png",code:"https://github.com/vesnaguja/react-users",live:"https://vesnaguja.github.io/react-users/",text:"A SPA for searching users and displaying results in list or grid view."},{id:4,name:"Rick And Morty",img:"/images/rick-and-morty.png",code:"https://github.com/vesnaguja/RickAndMorty",live:"https://vesnaguja.github.io/RickAndMorty/",text:"A web application for browsing Rick and Morty characters."},{id:5,name:"Bit Show",img:"/images/bit-show.png",code:"https://github.com/vesnaguja/BitShow",live:"https://vesnaguja.github.io/BitShow/",text:"An application for searching TV shows and displaying detailed info for each show."}];var z=a(70),B=a(67);a(54);const M=e=>{let{project:t}=e;const a=Object(s.useContext)(h),c=a.themeStyle.textSecondaryColor,n=a.themeStyle.bgColor;return Object(b.jsx)(f.a,{sm:12,md:6,lg:4,xl:2,className:"d-flex",children:Object(b.jsxs)(z.a,{className:"project-card flex-fill",children:[Object(b.jsx)("div",{className:"project-img-wrapper",children:Object(b.jsx)(z.a.Img,{variant:"top",src:"/portfolio"+t.img,className:"project-img",alt:"project image"})}),Object(b.jsxs)(z.a.Body,{className:"d-flex flex-column justify-content-between",children:[Object(b.jsx)(z.a.Title,{className:"fw-bold",children:t.name}),Object(b.jsx)(z.a.Text,{className:"fw-normal",children:t.text}),Object(b.jsxs)("div",{className:"d-flex justify-content-between buttons-wrapper",children:[Object(b.jsx)("a",{href:t.code,target:"_blank",rel:"noreferrer",children:Object(b.jsx)(B.a,{className:"code-button fw-bold mt-auto",variant:"outline",style:{color:c,border:c},children:"Code"})}),Object(b.jsx)("a",{href:t.live,target:"_blank",rel:"noreferrer",children:void 0===t.live?"":Object(b.jsx)(B.a,{className:"live-button fw-bold mt-auto",style:{backgroundColor:c,border:c,color:n},children:"Live"})})]})]})]})})};a(55);const E=()=>Object(b.jsxs)(l.a,{id:"projects",className:"py-5 my-5",children:[Object(b.jsx)("h2",{className:"projects-title text-center py-5","data-aos":"fade-down",children:"PROJECTS"}),Object(b.jsx)(l.a,{fluid:!0,children:Object(b.jsx)(u.a,{className:"justify-content-center g-3",children:I.map((e=>Object(b.jsx)(M,{project:e},e.id)))})})]});var L=a(36),R=a(37);const D=()=>Object(b.jsx)("footer",{className:"container-fluid mt-5",children:Object(b.jsxs)("div",{className:"container text-center p-3",children:["\xa9 2021 - ",(new Date).getFullYear()," Copyright: Vesna Grujani\u0107"]})});a(56);const P=()=>{const e=Object(s.useContext)(h),t=e.themeStyle.skillsAndContactImg,a=e.themeStyle.textColor;return Object(b.jsxs)(l.a,{fluid:!0,id:"contact",className:"light-skills-and-contact-img ".concat(t," pt-5 mt-5"),children:[Object(b.jsxs)(l.a,{className:"py-5 my-5 text-center",children:[Object(b.jsx)("h2",{className:"fw-bold py-5","data-aos":"fade-down",children:"CONTACT"}),Object(b.jsx)("a",{href:"mailto:vesna.grujanic@gmail.com",className:"text-decoration-none fs-4 contact-email",style:{color:a},children:"vesna.grujanic@gmail.com"}),Object(b.jsxs)("section",{className:"sotial-media pt-3",children:[Object(b.jsx)("a",{className:"btn btn-link btn-floating btn-lg m-1",href:"https://github.com/vesnaguja",target:"_blank",rel:"noreferrer",role:"button",style:{color:a},children:Object(b.jsx)(L.a,{className:"contact-icon",size:"50px"})}),Object(b.jsx)("a",{className:"btn btn-link btn-floating btn-lg m-1",href:"https://www.linkedin.com/in/vesna-grujani%C4%87-3504b21ab/",target:"_blank",rel:"noreferrer",role:"button",style:{color:a},children:Object(b.jsx)(R.a,{className:"contact-icon",size:"50px"})})]})]}),Object(b.jsx)(D,{})]})};a(57);const H=()=>{const[e,t]=Object(s.useState)(!1),a=Object(s.useContext)(h),c=a.themeStyle.textSecondaryColor,n=a.themeStyle.bgColor;Object(s.useEffect)((()=>{window.addEventListener("scroll",(()=>{window.pageYOffset>300?t(!0):t(!1)}))}),[]);return Object(b.jsx)(s.Fragment,{children:e&&Object(b.jsx)(k.b,{onClick:()=>{window.scrollTo(0,0)},size:"50px",style:{color:n,backgroundColor:c},className:"back-to-top"})})};var V=a(38),F=a.n(V);a(58),a(59),a(60);var J=()=>{const e=Object(s.useContext)(h).themeStyle.name;return Object(s.useEffect)((()=>{F.a.init({disable:!1,startEvent:"DOMContentLoaded",initClassName:"aos-init",animatedClassName:"aos-animate",useClassNames:!0,disableMutationObserver:!1,debounceDelay:50,throttleDelay:99,offset:100,delay:0,duration:1e3,easing:"ease",once:!1,mirror:!1,anchorPlacement:"top-bottom"})}),[]),Object(b.jsxs)("div",{style:{backgroundColor:"dark"===e?"rgb(13, 17, 23)":"rgb(240, 240, 240)",color:"dark"===e?"rgb(191, 209, 217)":"rgb(36, 41, 47)"},children:[Object(b.jsx)(g,{}),Object(b.jsx)(O,{}),Object(b.jsx)(w,{}),Object(b.jsx)(T,{}),Object(b.jsx)(E,{}),Object(b.jsx)(P,{}),Object(b.jsx)(H,{})]})};a(61);o.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(p,{children:Object(b.jsx)(J,{})})}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.4b9ed8ef.chunk.js.map