(this.webpackJsonpshopping=this.webpackJsonpshopping||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var r=n(1),c=n.n(r),i=n(7),a=n.n(i),o=(n(14),n(4)),d=(n(15),n(0));function u(t){var e=t.addCart,n=t.id,r=t.product,c=t.change;return Object(d.jsxs)("div",{children:[Object(d.jsxs)("li",{children:[r.title," || ",r.price,"\u20ac || ",r.inventory]},n),0===r.inventory?Object(d.jsx)("button",{style:{background:"red",border:"none"},children:"Sold out"}):Object(d.jsx)("button",{style:{background:"darkgreen",color:"white"},onClick:function(){return e(),void c(n)},children:"Shop me"})]})}function s(t){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h3",{children:"Shopping Cart"}),t.cart.map((function(t){return Object(d.jsxs)("div",{children:[t.id," - ",t.name," - ",t.amount," pieces"]})}))]})}var j=Object(r.createContext)(),p=n(9),l=n(6);function b(t,e){switch(e.type){case"shop":return t.cart.find((function(t,n){return t.id===e.payload.id}))?{cart:t.cart.map((function(t){return t.id===e.payload.id?Object(l.a)(Object(l.a)({},t),{},{amount:t.amount+1,storage:t.storage-1}):t}))}:{cart:[].concat(Object(p.a)(t.cart),[{id:e.payload.id,name:e.payload.title,amount:1,storage:e.payload.inventory}])};default:return t}}function h(t){function e(t){var e=l.map((function(e){return e.id===t&&(e.inventory=e.inventory-1),e}));h(e)}var n=Object(r.useReducer)(b,{cart:[]}),c=Object(o.a)(n,2),i=c[0],a=c[1],p=Object(r.useContext)(j),l=p.data,h=p.setData;return Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:"Products"}),l.map((function(t){return Object(d.jsx)(u,{product:t,id:t.id,addCart:function(){return a({type:"shop",payload:t})},change:e})})),Object(d.jsx)(s,{cart:i.cart})]})}var O=n(8);var v=function(){var t=Object(r.useState)(O),e=Object(o.a)(t,2),n=e[0],c=e[1];return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(j.Provider,{value:{data:n,setData:c},children:Object(d.jsx)(h,{})})})};a.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(v,{})}),document.getElementById("root"))},8:function(t){t.exports=JSON.parse('[{"id":1,"title":"iPad 4 Mini","price":500.01,"inventory":2},{"id":2,"title":"H&M T-Shirt White","price":10.99,"inventory":10},{"id":3,"title":"Charli XCX - Sucker CD","price":19.99,"inventory":5}]')}},[[17,1,2]]]);
//# sourceMappingURL=main.f9970c3a.chunk.js.map