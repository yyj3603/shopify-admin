(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[46],{"Q5+T":function(e,a,t){"use strict";t.r(a);var n=t("p0pE"),r=t.n(n),s=t("d6i3"),c=t.n(s),o=t("7DNP"),u=t("dCQc");a["default"]={namespace:"order",state:{data:{orders:[],list:[],pagination:{}}},effects:{fetch:c.a.mark(function e(a,t){var n,r,s,o;return c.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=a.payload,r=t.call,s=t.put,e.next=4,r(u["q"],n);case 4:return o=e.sent,e.next=7,s({type:"save",payload:o});case 7:case"end":return e.stop()}},e)}),add:c.a.mark(function e(a,t){var n,r,s,p,l;return c.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=a.payload,r=a.callback,s=t.call,p=t.put,e.next=4,s(u["b"],n);case 4:return l=e.sent,console.log(n),console.log(l),e.next=9,p({type:"save",payload:l});case 9:return r&&r(),e.next=12,p(o["routerRedux"].push("/orders/orderlist"));case 12:case"end":return e.stop()}},e)}),remove:c.a.mark(function e(a,t){var n,r,s,o,p,l;return c.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:n=a.payload,r=a.callback,s=t.call,o=t.put,p=0;case 3:if(!(p<n.id.length)){e.next=10;break}return e.next=6,s(u["v"],n.id[p]);case 6:e.sent;case 7:p++,e.next=3;break;case 10:return e.next=12,s(u["j"]);case 12:return l=e.sent,r&&r(),console.log(l),console.log("ress-------"),e.next=18,o({type:"changeOrders",payload:l.data.Orders});case 18:case"end":return e.stop()}},e)})},update:c.a.mark(function e(a,t){var n,r,s,o,p;return c.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=a.payload,r=a.callback,s=t.call,o=t.put,e.next=4,s(u["z"],n);case 4:return p=e.sent,e.next=7,o({type:"save",payload:p});case 7:r&&r();case 8:case"end":return e.stop()}},e)}),reducers:{save:function(e,a){return r()({},e,{data:a.payload})}}}}}]);