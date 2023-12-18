(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var a,s=c(7),n=c.n(s),l=c(2),i=c(1),d=(c(13),c(14),c(4)),o=c.n(d),r=c(0),j=function(e){var t=e.todos,c=e.onTodoSelect,a=e.selectedTodo;return Object(r.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"#"}),Object(r.jsx)("th",{children:Object(r.jsx)("span",{className:"icon",children:Object(r.jsx)("i",{className:"fas fa-check"})})}),Object(r.jsx)("th",{children:"Title"}),Object(r.jsx)("th",{children:" "})]})}),Object(r.jsx)("tbody",{children:t.map((function(e){return Object(r.jsxs)("tr",{"data-cy":"todo",className:"",children:[Object(r.jsx)("td",{className:"is-vcentered",children:e.id}),Object(r.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(r.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(r.jsx)("i",{className:"fas fa-check"})})}),Object(r.jsx)("td",{className:"is-vcentered is-expanded",children:Object(r.jsx)("p",{className:o()({"has-text-danger":!e.completed,"has-text-success":e.completed}),children:e.title})}),Object(r.jsx)("td",{className:"has-text-right is-vcentered",children:Object(r.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return c(e)},children:Object(r.jsx)("span",{className:"icon",children:Object(r.jsx)("i",{className:o()("far",{"fa-eye":(null===a||void 0===a?void 0:a.id)!==e.id,"fa-eye-slash":(null===a||void 0===a?void 0:a.id)&&a.id===e.id})})})})})]},e.id)}))})]})};!function(e){e.all="all",e.active="active",e.completed="completed"}(a||(a={}));var u=function(e){var t=e.searchQuery,c=e.onQueryChange,s=e.handleClearQuery,n=e.onFilterSelect;return Object(r.jsxs)("form",{className:"field has-addons",children:[Object(r.jsx)("p",{className:"control",children:Object(r.jsx)("span",{className:"select",children:Object(r.jsxs)("select",{"data-cy":"statusSelect",onChange:function(e){return n(e)},defaultValue:a.all,children:[Object(r.jsx)("option",{value:"all",children:"All"}),Object(r.jsx)("option",{value:"active",children:"Active"}),Object(r.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(r.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(r.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:t,onChange:function(e){return c(e)}}),Object(r.jsx)("span",{className:"icon is-left",children:Object(r.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(r.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:!!t.length&&Object(r.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:s,"aria-label":"Clear Search"})})]})]})},h=(c(16),function(){return Object(r.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(r.jsx)("div",{className:"Loader__content"})})});function b(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=1e3,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var m=function(e){var t=e.selectedTodo,c=e.handleCloseTodo,a=Object(i.useState)(null),s=Object(l.a)(a,2),n=s[0],d=s[1];return Object(i.useEffect)((function(){var e;return(e=t.userId,b("/users/".concat(e))).then(d),function(){d(null)}}),[t.userId]),Object(r.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(r.jsx)("div",{className:"modal-background"}),n?Object(r.jsxs)("div",{className:"modal-card",children:[Object(r.jsxs)("header",{className:"modal-card-head",children:[Object(r.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(t.id)}),Object(r.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){return c()}})]}),Object(r.jsxs)("div",{className:"modal-card-body",children:[Object(r.jsx)("p",{className:"block","data-cy":"modal-title",children:t.title}),Object(r.jsxs)("p",{className:"block","data-cy":"modal-user",children:[Object(r.jsx)("strong",{className:o()({"has-text-success":t.completed,"has-text-danger":!t.completed}),children:t.completed?"Done":"Planned"})," by ",Object(r.jsx)("a",{href:"mailto:".concat(n.email),children:n.name})]})]})]}):Object(r.jsx)(h,{})]})},O=c(8),x=function(e,t){var c=Object(O.a)(e);if(t)switch(t){case a.active:c=e.filter((function(e){return!e.completed}));break;case a.completed:c=e.filter((function(e){return e.completed}));case a.all:}return c},f=function(){var e=Object(i.useState)([]),t=Object(l.a)(e,2),c=t[0],s=t[1],n=Object(i.useState)(!0),d=Object(l.a)(n,2),o=d[0],O=d[1],f=Object(i.useState)(null),v=Object(l.a)(f,2),p=v[0],N=v[1],y=Object(i.useState)(""),g=Object(l.a)(y,2),C=g[0],S=g[1],k=Object(i.useState)(a.all),T=Object(l.a)(k,2),w=T[0],Q=T[1];Object(i.useEffect)((function(){b("/todos").then((function(e){O(!1),s(e)}))}),[]);var _=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a.all,c=arguments.length>2?arguments[2]:void 0,s=x(e,t);if(c){var n=c.toLowerCase();s=s.filter((function(e){return e.title.toLowerCase().includes(n)}))}return s}(c,w,C);return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"section",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"box",children:[Object(r.jsx)("h1",{className:"title",children:"Todos:"}),Object(r.jsx)("div",{className:"block",children:Object(r.jsx)(u,{searchQuery:C,onQueryChange:function(e){S(e.target.value)},handleClearQuery:function(){S("")},onFilterSelect:function(e){Q(e.target.value)}})}),Object(r.jsxs)("div",{className:"block",children:[o&&Object(r.jsx)(h,{}),!!_.length&&Object(r.jsx)(j,{todos:_,onTodoSelect:function(e){N(e)},selectedTodo:p})]})]})})}),p&&Object(r.jsx)(m,{selectedTodo:p,handleCloseTodo:function(){N(null)}})]})};n.a.render(Object(r.jsx)(f,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.90e3be03.chunk.js.map