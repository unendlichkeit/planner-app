(this["webpackJsonpplanner-app"]=this["webpackJsonpplanner-app"]||[]).push([[0],{15:function(e,t,n){e.exports=n(27)},20:function(e,t,n){},21:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(2),c=n.n(l),u=(n(20),n(8)),o=n(9),p=n(14),i=n(13),s=(n(21),function(e){var t=e.day;return r.a.createElement("div",null,r.a.createElement("p",null,"Day ",t))}),d=function(){return r.a.createElement("div",null)},h=function(e){Object(p.a)(n,e);var t=Object(i.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){for(var e=new Date((new Date).getFullYear(),(new Date).getMonth()),t=e.getMonth()+2,n=[];e.getMonth()<t;)n.push({day:e.getDay(),date:e.getDate()}),e.setDate(e.getDate()+1);console.log(n);for(var a=[],l=[],c=0;c<n.length;c++)0!==n[c].day?l.push(n[c]):(a.push(l),l=[n[c]]),c===n.length-1&&a.push(l);return console.log(a),r.a.createElement("div",null,a.map((function(e){return r.a.createElement(d,null,e.map((function(e){return r.a.createElement(s,{day:e.date})})))})))}}]),n}(r.a.Component),m=n(12),f=n(1),g=n(11),v=n.n(g),y=Object(f.c)({}),E=[v.a],b=Object(f.d)(y,f.a.apply(void 0,E));c.a.render(r.a.createElement(m.a,{store:b},r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null))),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.477aa263.chunk.js.map