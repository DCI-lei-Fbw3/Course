(this["webpackJsonpproduct-manager"]=this["webpackJsonpproduct-manager"]||[]).push([[0],{33:function(e,t,c){},34:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},62:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),o=c(25),s=c.n(o),a=c(8),j=(c(33),c(28)),i=(c(34),c(0));var u=function(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("h1",{children:"Product Manager"})})},d=c(9),l=Object(n.createContext)();var b=function(){var e=Object(n.useContext)(l),t=e.loggedIn,c=e.login,r=e.logout,o=Object(n.useState)(""),s=Object(d.a)(o,2),a=s[0],j=s[1],u=Object(n.useState)(""),b=Object(d.a)(u,2),O=b[0],x=b[1];return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h1",{children:"Login"}),t?Object(i.jsx)("button",{onClick:function(){r()},children:"Log out"}):Object(i.jsxs)("form",{onSubmit:function(e){e.preventDefault(),c(a,O)},children:[Object(i.jsx)("label",{htmlFor:"username",children:"Username"}),Object(i.jsx)("input",{type:"text",id:"username",placeholder:"Username",required:!0,value:a,onChange:function(e){j(e.target.value)}}),Object(i.jsx)("br",{}),Object(i.jsx)("label",{htmlFor:"password",children:"Password"}),Object(i.jsx)("input",{type:"password",id:"password",placeholder:"Password",required:!0,value:O,onChange:function(e){x(e.target.value)}}),Object(i.jsx)("br",{}),Object(i.jsx)("input",{type:"submit",value:"Log in"})]})]})};c(36);function O(e){return Object(i.jsxs)("div",{className:"ProductCard",children:[Object(i.jsxs)("div",{className:"ProductCardTitle",children:[Object(i.jsx)("span",{className:"ProductCardName",children:e.product.name}),Object(i.jsx)("span",{className:"ProductCardArticleNo",children:e.product.articleNo})]}),Object(i.jsx)("p",{children:e.product.description}),Object(i.jsx)("p",{className:"ProductCardPrice",children:e.product.price})]})}O.defaultProps={product:{articleNo:"xx-0000",name:"Product Name",description:"Product Description",price:1111.11}};var x=O,h=Object(n.createContext)();var p=function(){var e=Object(n.useContext)(h).products;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h1",{children:"Products"}),e.map((function(e){return Object(i.jsx)(x,{product:e})}))]})},m=c(2);c(37),c(38);var g=function(){var e=Object(n.useContext)(l),t=e.loggedIn,c=e.username,r=e.logout;return Object(i.jsx)("nav",{className:"MainNavigation",children:Object(i.jsxs)("ul",{children:[Object(i.jsxs)("li",{children:["Hi ",c,"!"]}),Object(i.jsx)("li",{children:Object(i.jsx)(a.b,{activeClassName:"active",exact:!0,to:"/",children:"Home"})}),Object(i.jsx)("li",{children:Object(i.jsx)(a.b,{activeClassName:"active",exact:!0,to:"/login",children:"Login"})}),Object(i.jsx)("li",{children:Object(i.jsx)(a.b,{activeClassName:"active",exact:!0,to:"/products",children:"Products"})}),t&&Object(i.jsx)("li",{className:"LogoutButton",children:Object(i.jsx)("button",{onClick:function(){r()},children:"Log out"})})]})})};var v=function(){return Object(i.jsx)("header",{className:"AppHeader",children:Object(i.jsx)(g,{})})},f=c(27),N=c.n(f);var C=function(e){var t=e.children,c=Object(n.useState)([]),r=Object(d.a)(c,2),o=r[0],s=r[1];return Object(n.useEffect)((function(){N.a.get("http://localhost:4444/products").then((function(e){return s(e.data)})).catch((function(e){return console.log(e)}))}),[]),Object(i.jsx)(h.Provider,{value:{products:o},children:t})};var P=function(){var e=Object(n.useContext)(l).loggedIn,t=function(t){return e?Object(i.jsx)(m.b,Object(j.a)({},t)):Object(i.jsx)(m.a,{to:"/login"})};return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(v,{}),Object(i.jsx)(C,{children:Object(i.jsx)("main",{children:Object(i.jsxs)(m.d,{children:[Object(i.jsx)(m.b,{path:"/",component:u,exact:!0}),Object(i.jsx)(m.b,{path:"/login",component:b}),Object(i.jsx)(m.b,{path:"/featured",component:b}),Object(i.jsx)(m.b,{path:"/top-products",component:b}),Object(i.jsx)(t,{path:"/products",component:p,exact:!0}),Object(i.jsx)(m.b,{component:function(){return Object(i.jsx)("h1",{children:"Not found"})}})]})})})]})};var w=function(e){var t=e.children,c=Object(m.g)(),r=Object(n.useState)(!1),o=Object(d.a)(r,2),s=o[0],a=o[1],j=Object(n.useState)(""),u=Object(d.a)(j,2),b=u[0],O=u[1];return Object(i.jsx)(l.Provider,{value:{loggedIn:s,username:b,login:function(e,t){O(e),a(!0),c.push("/products")},logout:function(){a(!1),O(""),c.push("/")}},children:t})};s.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(a.a,{children:Object(i.jsx)(w,{children:Object(i.jsx)(P,{})})})}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.7a85c463.chunk.js.map