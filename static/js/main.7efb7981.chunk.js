(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),i=n(4),a=n.n(i),o=(n(13),n(5)),r=n(6),j=n(8),A=n(7),l=n(2),d=n(0),b=function(e){var t=e.icon_name,n=e.type,c=e.link,s=e.text;return Object(d.jsx)("a",{href:c,className:function(e){switch(e){case"social":return"social_item "+t;case"project":return"project_icon "+t;default:return"menu_item"}}(n),children:s})},u=function(e){var t=e.social;return Object(d.jsx)("nav",{id:"social_bar",children:t.map((function(e,t){return Object(d.jsx)(b,{icon_name:e.icon_name,link:e.link,type:"social",text:""},t)}))})},h=function(e){var t=e.pages;return Object(d.jsx)("nav",{id:"menu_bar",className:"main_nav",children:Object(d.jsx)("ul",{children:t.map((function(e,t){return Object(d.jsx)(b,{text:e.menu_name,link:e.link,type:"menu"},t)}))})})},p=n.p+"static/media/logo.103b5fa1.svg",O=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),n=t[0],s=t[1],i=Object(c.useState)([]),a=Object(l.a)(i,2),o=a[0],r=a[1];return Object(c.useEffect)((function(){fetch("nav.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then((function(e){s(e.social),r(e.pages)}))}),[]),Object(d.jsxs)("header",{className:"App-header",children:[Object(d.jsx)("img",{src:p,className:"App-logo",alt:"logo"}),Object(d.jsx)(h,{pages:o}),Object(d.jsx)(u,{social:n})]})},m=function(e){var t=e.id,n=e.title,c=e.component,s=e.data;return Object(d.jsxs)("div",{id:t,className:"page",children:[Object(d.jsx)("span",{className:"title",children:n}),c({data:s})]})},g=function(){return Object(d.jsxs)("div",{class:"page-content",children:[Object(d.jsx)("p",{children:"Hello World!"}),Object(d.jsx)("p",{children:"My name is Ju Hong Kim and I am a computer enthusiast. I love learning new things and expanding my knowledge. My background is in Computer Science and I am particularly interested in reading and learning about Systems Programming (though I am quite lacking in experience and knowledge). My current goals are to self-study more in depth about Operating Systems, learn the basics of embedded programming, and work on old and new projects to improve my skills."}),Object(d.jsx)("p",{children:"I initially self-studied programming on my free time around Middle School and High School particularly focusing on Web Design (Non Javascript Based Technologies) but got interested in Systems after being introduced to Linux."}),Object(d.jsx)("p",{children:"My hobbies outside of learning about Computers is to read manga and books, particularly Sci-fi Light Novels."}),Object(d.jsx)("p",{children:"I am currently working at IBM where I am currently enjoying utilizing their education resources to study on various subjects unrelated to work on my spare time."})]})},x=function(){return Object(d.jsxs)("div",{class:"page-content",children:[Object(d.jsxs)("p",{children:[Object(d.jsx)("b",{children:"Programming Languages:"})," C, Java, Python, Kotlin"]}),Object(d.jsxs)("p",{children:[Object(d.jsx)("b",{children:"Scripting Languages:"})," Perl and Bash"]}),Object(d.jsxs)("p",{children:[Object(d.jsx)("b",{children:"Web Languages and Technologies:"})," HTML, CSS, Javascript, PHP, SQL, MongoDB, NodeJS, React"]}),Object(d.jsxs)("p",{children:[Object(d.jsx)("b",{children:"Version Control:"})," Git and Clearcase"]}),Object(d.jsxs)("p",{children:[Object(d.jsx)("b",{children:"Note:"})," I would probably need a few hours to refresh myself on the syntaxes since it has been a while since I used many of them"]})]})},f=function(e){var t=e.title,n=e.date,c=e.tasks;return Object(d.jsxs)("div",{className:"job",children:[Object(d.jsx)("p",{className:"job_title",children:t}),Object(d.jsx)("p",{className:"job_date",children:n}),Object(d.jsx)("ul",{className:"job_desc",children:c.map((function(e,t){var n="task"+t;return Object(d.jsx)("li",{children:e},n)}))})]})},H=function(e){var t=e.data;return Object(d.jsx)("div",{class:"page-content",children:void 0!==t?t.map((function(e,t){var n="exp"+t,c=function(){return Object(d.jsx)("hr",{})};return 2===t&&(c=function(){return Object(d.jsx)("span",{})}),Object(d.jsxs)("div",{children:[Object(d.jsx)(f,{title:e.title,date:e.date,tasks:e.tasks}),c()]},n)})):Object(d.jsx)(c.Fragment,{})})},w="data:image/png;base64,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",y="data:image/png;base64,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",k=function(e){var t=e.handler;return Object(d.jsx)("div",{className:"project_type_icons",children:[{icon:"c_proj",logo:y},{icon:"web_proj",logo:w}].map((function(e){var n=e.icon,c=e.logo;return Object(d.jsx)("img",{className:"project_type",onClick:function(){t(n)},src:c,alt:n})}))})},B=function(e){var t=e.data,n=t.title,c=t.desc,s=t.tools,i=t.github,a=t.paper;return Object(d.jsxs)("div",{className:"project",children:[Object(d.jsx)("p",{className:"project_title",children:n}),Object(d.jsx)("p",{className:"project_desc",children:c}),Object(d.jsxs)("p",{className:"project_tools",children:[Object(d.jsx)("b",{children:"Languages & Tools"}),": ",s]}),Object(d.jsxs)("div",{className:"project_icons",children:[Object(d.jsx)(b,{icon_name:i.icon_name,link:i.link,type:"project"}),Object(d.jsx)(b,{icon_name:a.icon_name,link:a.link,type:"project"})]})]})},v=function(e){var t=e.data,n=t.c_proj,s=t.web_proj,i=Object(c.useState)("c_proj"),a=Object(l.a)(i,2),o=a[0],r=a[1],j={c_proj:n,web_proj:s};return Object(d.jsxs)(c.Fragment,{children:[Object(d.jsx)(k,{handler:function(e){r(e)}}),Object(d.jsx)("div",{class:"page-content",children:void 0!==j[o]?Object(d.jsxs)("div",{className:"content",children:[j[o].map((function(e,t){var n="proj"+t;return console.log(e),Object(d.jsxs)("div",{children:[Object(d.jsx)(B,{data:e}),Object(d.jsx)("hr",{})]},n)})),Object(d.jsx)("div",{id:"project_footer",children:Object(d.jsx)("a",{href:"https://github.com/zakuArbor",children:"Any many more on my github page"})})]}):Object(d.jsx)(c.Fragment,{})})]})},D=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),n=t[0],s=t[1],i=Object(c.useState)({}),a=Object(l.a)(i,2),o=a[0],r=a[1];return Object(c.useEffect)((function(){fetch("content.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then((function(e){s(e.experiences),r(e.projects)}))}),[]),Object(d.jsxs)(c.Fragment,{children:[Object(d.jsx)(m,{id:"about",title:"ABOUT",component:g}),Object(d.jsx)(m,{id:"skill",title:"SKILLS",component:x}),Object(d.jsx)(m,{id:"experience",title:"EXPERIENCES",component:H,data:n}),Object(d.jsx)(m,{id:"project",title:"PROJECTS",component:v,data:o})]})},P=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),n=t[0],s=t[1];return Object(c.useEffect)((function(){fetch("footer.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then((function(e){s(e.social)}))}),[]),Object(d.jsxs)("div",{className:"App-footer",children:[Object(d.jsx)(u,{social:n}),Object(d.jsxs)("div",{className:"credits",children:[Object(d.jsx)("a",{href:"https://iconscout.com/icons/c-programming",children:"C programming Icon"})," on ",Object(d.jsx)("a",{href:"https://iconscout.com",children:"Iconscout"}),Object(d.jsx)("br",{}),Object(d.jsx)("a",{href:"https://iconscout.com/icons/html-file",target:"_blank",rel:"noopener noreferrer",children:"Html File Icon"})," by ",Object(d.jsx)("a",{href:"https://iconscout.com/contributors/dinosoftlabs",children:"Dinosoft Lab"})," on ",Object(d.jsx)("a",{href:"https://iconscout.com",children:"Iconscout"})]})]})},N=(n(15),function(e){Object(j.a)(n,e);var t=Object(A.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(O,{}),Object(d.jsx)(D,{}),Object(d.jsx)(P,{})]})}}]),n}(c.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(N,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.7efb7981.chunk.js.map