(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[45],{RhUb:function(e,a,r){"use strict";r.r(a);r("IzEo");var l,t,n,i=r("bx4M"),s=(r("+L6B"),r("2/Rp")),o=(r("5NDa"),r("5rEg")),p=r("2Taf"),c=r.n(p),d=r("vZ4D"),m=r.n(d),u=r("l4Ni"),f=r.n(u),E=r("ujKo"),b=r.n(E),h=r("MhPg"),_=r.n(h),v=(r("y8nQ"),r("Vl3Y")),w=r("q1tI"),C=r.n(w),y=r("MuoO"),g=v["a"].Item,q=(l=Object(y["connect"])(function(e){var a=e.orders,r=e.loading;return{orders:a.orders,loading:r.effects["orders/fetch"]}}),l((n=function(e){function a(){var e,r;c()(this,a);for(var l=arguments.length,t=new Array(l),n=0;n<l;n++)t[n]=arguments[n];return r=f()(this,(e=b()(a)).call.apply(e,[this].concat(t))),r.addorder=function(){var e=r.props.dispatch,a=r.props.form.validateFields,l=r.props.form.getFieldsValue();console.log(l),a(["variant_id","quantity","first_name","last_name"],function(a,r){a||(e({type:"order/add",payload:{line_items:[{variant_id:l.variant_id,quantity:l.quantity}],customer:{first_name:l.first_name,last_name:l.last_name},financial_status:l.financial_status,email:l.email}}),alert("\u6dfb\u52a0\u6210\u529f"))})},r}return _()(a,e),m()(a,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator;return C.a.createElement(i["a"],{title:"\u6dfb\u52a0\u8ba2\u5355"},C.a.createElement("div",{style:{margin:"0 auto",width:"50%"}},C.a.createElement(v["a"],null,C.a.createElement(g,{labelCol:{span:5},wrapperCol:{span:15},label:"\u8ba2\u5355\u53f7"},e("variant_id",{rules:[{required:!0,message:"\u8ba2\u5355\u53f7\u4e0d\u80fd\u4e3a\u7a7a\uff01",min:1}]})(C.a.createElement(o["a"],{placeholder:"\u8bf7\u8f93\u5165\u8ba2\u5355\u53f7"}))),C.a.createElement(g,{labelCol:{span:5},wrapperCol:{span:15},label:"\u6570\u91cf"},e("quantity",{rules:[{required:!1}]})(C.a.createElement(o["a"],{placeholder:"\u8bf7\u8f93\u5165\u6570\u91cf"}))),C.a.createElement(g,{labelCol:{span:5},wrapperCol:{span:15},label:"\u90ae\u7bb1"},e("email",{rules:[{required:!1}]})(C.a.createElement(o["a"],{placeholder:"\u8bf7\u8f93\u5165\u90ae\u7bb1"}))),C.a.createElement(g,{labelCol:{span:5},wrapperCol:{span:15},label:"\u987e\u5ba2\u59d3"},e("first_name",{rules:[{required:!0,message:"\u4f9b\u5e94\u5546\u4e0d\u80fd\u4e3a\u7a7a\uff01",min:1}]})(C.a.createElement(o["a"],{placeholder:"\u8bf7\u8f93\u5165\u4f9b\u5e94\u5546\u540d\u79f0"}))),C.a.createElement(g,{labelCol:{span:5},wrapperCol:{span:15},label:"\u987e\u5ba2\u540d"},e("last_name",{rules:[{required:!0,message:"\u4f9b\u5e94\u5546\u4e0d\u80fd\u4e3a\u7a7a\uff01",min:1}]})(C.a.createElement(o["a"],{placeholder:"\u8bf7\u8f93\u5165\u4f9b\u5e94\u5546\u540d\u79f0"}))),C.a.createElement(g,{labelCol:{span:5},wrapperCol:{span:15},label:"\u4ed8\u6b3e\u72b6\u6001"},e("financial_status",{rules:[{required:!1}]})(C.a.createElement(o["a"],{placeholder:"\u8bf7\u8f93\u5165\u4ed8\u6b3e\u72b6\u6001"}))),C.a.createElement(g,null,C.a.createElement(s["a"],{type:"primary",block:!0,onClick:this.addorder},"\u521b\u5efa\u8ba2\u5355")))))}}]),a}(w["Component"]),t=n))||t);a["default"]=v["a"].create()(q)}}]);