(this["webpackJsonptodos-list"]=this["webpackJsonptodos-list"]||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),c=n(18),o=n.n(c),l=(n(25),n(11)),r=n(20),i=(n(26),n(8)),d=n(0);function b(e){return Object(d.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(d.jsxs)("div",{className:"container-fluid",children:[Object(d.jsx)(i.b,{className:"navbar-brand",to:"/",children:e.title}),Object(d.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(d.jsx)("span",{className:"navbar-toggler-icon"})}),Object(d.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(d.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(i.b,{className:"nav-link active","aria-current":"page",to:"/",children:"Home"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(i.b,{className:"nav-link",to:"/about",children:"About"})})]}),e.searchBar?Object(d.jsxs)("form",{className:"d-flex",children:[Object(d.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(d.jsx)("button",{className:"btn btn-outline-success",type:"submit",children:"Search"})]}):""]})]})})}b.defaultProps={title:"Your Title Here",searchBar:!0};var j=function(e){var t=e.todo,n=e.onDelete;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("h4",{children:t.title}),Object(d.jsx)("p",{children:t.desc}),Object(d.jsx)("button",{className:"btn btn-sm btn-danger",onClick:function(){n(t)},children:"Delete"})]}),Object(d.jsx)("hr",{})]})},h=function(e){return Object(d.jsxs)("div",{className:"container",style:{minHeight:"70vh",margin:"40px auto"},children:[Object(d.jsx)("h3",{className:"my-3",children:"Todos List"}),0===e.todos.length?"No Todos to display":e.todos.map((function(t){return Object(d.jsx)(j,{todo:t,onDelete:e.onDelete},t.sno)}))]})},u=function(){return Object(d.jsx)("footer",{className:"bg-dark text-light py-3",children:Object(d.jsx)("p",{className:"text-center",children:"Copyright \xa9 MyTodosList.com"})})},m=function(e){var t=e.addTodo,n=Object(a.useState)(""),s=Object(l.a)(n,2),c=s[0],o=s[1],r=Object(a.useState)(""),i=Object(l.a)(r,2),b=i[0],j=i[1];return Object(d.jsxs)("div",{className:"container my-3",children:[Object(d.jsx)("h3",{children:"Add a Todo"}),Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),c&&b?(t(c,b),o(""),j("")):alert("Title or Description cannot be blank")},children:[Object(d.jsxs)("div",{className:"mb-3",children:[Object(d.jsx)("label",{htmlFor:"title",className:"form-label",children:"Todo Title"}),Object(d.jsx)("input",{type:"text",value:c,onChange:function(e){return o(e.target.value)},className:"form-control",id:"title","aria-describedby":"emailHelp"})]}),Object(d.jsxs)("div",{className:"mb-3",children:[Object(d.jsx)("label",{htmlFor:"desc",className:"form-label",children:"Todo Description"}),Object(d.jsx)("input",{type:"text",value:b,onChange:function(e){return j(e.target.value)},className:"form-control",id:"desc"})]}),Object(d.jsx)("button",{type:"submit",className:"btn btn-sm btn-success",children:"Add Todo"})]})]})},O=function(){return Object(d.jsxs)("div",{children:["This is an about component",Object(d.jsx)("p",{children:"List everything that you have to do, with the most important tasks at the top of the list, and the least important tasks at the bottom. By keeping such a list, you make sure that your tasks are written down all in one place so you don't forget anything important."})]})},x=n(2);var g=function(){var e;e=null===localStorage.getItem("todos")?[]:JSON.parse(localStorage.getItem("todos"));var t=function(e){console.log("I am ondelete of todo",e),j(o.filter((function(t){return t!==e}))),console.log("deleted",o),localStorage.setItem("todos",JSON.stringify(o))},n=function(e,t){console.log("I am adding this todo",e,t);var n={sno:0===o.length?0:o[o.length-1].sno+1,title:e,desc:t};j([].concat(Object(r.a)(o),[n])),console.log(n)},s=Object(a.useState)(e),c=Object(l.a)(s,2),o=c[0],j=c[1];return Object(a.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(o))}),[o]),Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(i.a,{children:[Object(d.jsx)(b,{title:"My Todos List",searchBar:!1}),Object(d.jsxs)(x.c,{children:[Object(d.jsx)(x.a,{exact:!0,path:"/",render:function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(m,{addTodo:n}),Object(d.jsx)(h,{todos:o,onDelete:t})]})}}),Object(d.jsx)(x.a,{exact:!0,path:"/about",children:Object(d.jsx)(O,{})})]}),Object(d.jsx)(u,{})]})})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,34)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),a(e),s(e),c(e),o(e)}))};o.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(g,{})}),document.getElementById("root")),p()}},[[33,1,2]]]);
//# sourceMappingURL=main.c8e47d0e.chunk.js.map