(this.webpackJsonpjobseeker=this.webpackJsonpjobseeker||[]).push([[0],{42:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var c=n(6),r=n(5),a=n.n(r),o=n(33),s=n.n(o),u=(n(42),n(25)),i=n(0),j=n.n(i),b=n(3),l=n(12),d=n(22),p=n(11),O=function(e){var t=e.color,n=e.text,r=e.onClick;return Object(c.jsx)("button",{onClick:r,style:{backgroundColor:t},className:"btn",children:n})};O.defaultProps={color:"steelblue"};var f=O,h=function(e){var t=e.title,n=e.onAdd,r=e.showAdd,a=Object(p.e)();return Object(c.jsxs)("header",{className:"header",children:[Object(c.jsx)("h1",{children:t}),"/"===a.pathname&&Object(c.jsx)(f,{color:r?"red":"green",text:r?"Close":"Add",onClick:n})]})};h.defaultProps={title:"Job seeker"};var x=h,m=function(){return Object(c.jsxs)("footer",{children:[Object(c.jsx)("p",{children:"Copyright \xa9 2021"}),Object(c.jsx)(d.b,{to:"/about",children:"About"})]})},v=n(35),g=function(e){var t=e.job,n=e.onDelete,r=e.onToggle;return Object(c.jsxs)("div",{className:"job",onDoubleClick:function(){return r(t.id)},children:[Object(c.jsxs)("h3",{children:[t.companyName," ",Object(c.jsx)(v.a,{style:{color:"red",cursor:"pointer"},onClick:function(){return n(t.id)}})]}),Object(c.jsx)("p",{children:t.jobTitle})]})},y=function(e){var t=e.jobs,n=e.onDelete,r=e.onToggle;return Object(c.jsx)(c.Fragment,{children:t.map((function(e,t){return Object(c.jsx)(g,{job:e,onDelete:n,onToggle:r},t)}))})},k=function(e){var t=e.onAdd,n=Object(r.useState)(""),a=Object(l.a)(n,2),o=a[0],s=a[1],u=Object(r.useState)(""),i=Object(l.a)(u,2),j=i[0],b=i[1];return Object(c.jsxs)("form",{className:"add-form",onSubmit:function(e){e.preventDefault(),o?(t({companyName:o,jobTitle:j}),s(""),b("")):alert("Please add a companyName")},children:[Object(c.jsxs)("div",{className:"form-control",children:[Object(c.jsx)("label",{children:"Company"}),Object(c.jsx)("input",{id:"comapnyNAme",type:"text",placeholder:"Company name",value:o,onChange:function(e){return s(e.target.value)}})]}),Object(c.jsxs)("div",{className:"form-control",children:[Object(c.jsx)("label",{children:"Job title"}),Object(c.jsx)("input",{id:"jobTitle",type:"text",placeholder:"Job title",value:j,onChange:function(e){return b(e.target.value)}})]}),Object(c.jsxs)("div",{className:"form-control  form-control-check",children:[Object(c.jsx)("label",{children:"Applied"}),Object(c.jsx)("input",{type:"checkbox",value:j,onChange:function(e){return b(e.target.value)}})]}),Object(c.jsx)("input",{type:"submit",value:"Save Job",className:"btn btn-block"})]})},C=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h4",{children:"Version 1.0.0"}),Object(c.jsx)(d.b,{to:"/",children:"Go Back"})]})},w=n(34),N=n(28),A=n(21),S=Object(w.a)({apiKey:"AIzaSyBZAyI_ON7F4VEZ_9k1ETzF4_k6qcBJ1uo",authDomain:"yuveta2-166505.firebaseapp.com",databaseURL:"https://yuveta2-166505-default-rtdb.europe-west1.firebasedatabase.app",projectId:"yuveta2-166505",storageBucket:"yuveta2-166505.appspot.com",messagingSenderId:"238877844764",appId:"1:238877844764:web:0b49af2563aa55139806d9"}),T=Object(N.e)(S),D=Object(A.a)(T,"jobs"),F=function(){var e=Object(r.useState)(!1),t=Object(l.a)(e,2),n=t[0],a=t[1],o=Object(r.useState)([]),s=Object(l.a)(o,2),i=s[0],O=s[1];Object(r.useEffect)((function(){(function(){var e=Object(b.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f();case 2:t=e.sent,O(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var f=function(){var e=Object(b.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(A.d)(D);case 2:return t=e.sent,n=t.docs.map((function(e){return e.data()})),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=Object(b.a)(j.a.mark((function e(t){var n,c,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=String(Math.floor(1e4*Math.random())+1),c=Object(u.a)({id:n},t),e.next=4,Object(A.e)(Object(A.c)(T,"jobs",c.id),c);case 4:return e.next=6,f();case 6:return e.sent,e.next=9,f();case 9:r=e.sent,O(r);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(b.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(A.c)(T,"jobs",t),e.next=3,Object(A.b)(n);case 3:O(i.filter((function(e){return e.id!==t})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.jsx)(d.a,{children:Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)(x,{onAdd:function(){return a(!n)},showAdd:n}),Object(c.jsxs)(p.c,{children:[Object(c.jsx)(p.a,{path:"/",element:Object(c.jsxs)(c.Fragment,{children:[n&&Object(c.jsx)(k,{onAdd:h}),i.length>0?Object(c.jsx)(y,{jobs:i,onDelete:v}):"No Jobs To Show"]})}),Object(c.jsx)(p.a,{path:"/about",element:Object(c.jsx)(C,{})})]}),Object(c.jsx)(m,{})]})})},J=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,46)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),a(e),o(e)}))};s.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(F,{})}),document.getElementById("root")),J()}},[[45,1,2]]]);
//# sourceMappingURL=main.c68c6003.chunk.js.map