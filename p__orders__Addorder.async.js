(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[44],{RhUb:function(e,a,t){"use strict";t.r(a);t("IzEo");var r,l,n,p=t("bx4M"),o=(t("+L6B"),t("2/Rp")),s=(t("giR+"),t("fyUT")),i=(t("5NDa"),t("5rEg")),c=t("2Taf"),d=t.n(c),u=t("vZ4D"),m=t.n(u),y=t("l4Ni"),b=t.n(y),h=t("ujKo"),E=t.n(h),v=t("MhPg"),g=t.n(v),f=(t("y8nQ"),t("Vl3Y")),w=t("q1tI"),C=t.n(w),q=t("MuoO"),_=f["a"].Item,k=(r=Object(q["connect"])(function(e){var a=e.products,t=e.loading;return{products:a.products,loading:t.effects["products/fetch"]}}),r((n=function(e){function a(){var e,t;d()(this,a);for(var r=arguments.length,l=new Array(r),n=0;n<r;n++)l[n]=arguments[n];return t=b()(this,(e=E()(a)).call.apply(e,[this].concat(l))),t.addproduct=function(){var e=t.props.dispatch,a=t.props.form.validateFields,r=t.props.form.getFieldsValue();a(["title","vendor","inventory_quantity","price"],function(a,t){a||(e({type:"products/add",payload:{title:r.title,body_html:r.body_html,vendor:r.vendor,product_type:r.product_type,tags:r.tags,variants:[{title:r.title,inventory_quantity:r.inventory_quantity,price:r.price}]}}),alert("\u6dfb\u52a0\u6210\u529f"))})},t}return g()(a,e),m()(a,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator;return C.a.createElement(p["a"],{title:"\u6dfb\u52a0\u8ba2\u5355"},C.a.createElement("div",{style:{margin:"0 auto",width:"50%"}},C.a.createElement(f["a"],null,C.a.createElement(_,{labelCol:{span:5},wrapperCol:{span:15},label:"\u8ba2\u5355\u53f7"},e("variant_id",{rules:[{required:!0,message:"\u8ba2\u5355\u53f7\u4e0d\u80fd\u4e3a\u7a7a\uff01",min:1}]})(C.a.createElement(i["a"],{placeholder:"\u8bf7\u8f93\u5165\u8ba2\u5355\u53f7"}))),C.a.createElement(_,{labelCol:{span:5},wrapperCol:{span:15},label:"\u6570\u91cf"},e("quantity",{rules:[{required:!1}]})(C.a.createElement(i["a"],{placeholder:"\u8bf7\u8f93\u5165\u6570\u91cf"}))),C.a.createElement(_,{labelCol:{span:5},wrapperCol:{span:15},label:"\u987e\u5ba2\u59d3"},e("first_name",{rules:[{required:!0,message:"\u4f9b\u5e94\u5546\u4e0d\u80fd\u4e3a\u7a7a\uff01",min:1}]})(C.a.createElement(i["a"],{placeholder:"\u8bf7\u8f93\u5165\u4f9b\u5e94\u5546\u540d\u79f0"}))),C.a.createElement(_,{labelCol:{span:5},wrapperCol:{span:15},label:"\u987e\u5ba2\u540d"},e("last_name",{rules:[{required:!0,message:"\u4f9b\u5e94\u5546\u4e0d\u80fd\u4e3a\u7a7a\uff01",min:1}]})(C.a.createElement(i["a"],{placeholder:"\u8bf7\u8f93\u5165\u4f9b\u5e94\u5546\u540d\u79f0"}))),C.a.createElement(_,{labelCol:{span:5},wrapperCol:{span:15},label:"\u5546\u54c1\u7c7b\u578b"},e("product_type",{rules:[{required:!1}]})(C.a.createElement(i["a"],{placeholder:"\u8bf7\u8f93\u5165\u5546\u54c1\u7c7b\u578b"}))),C.a.createElement(_,{labelCol:{span:5},wrapperCol:{span:15},label:"tags"},e("tags",{rules:[{required:!1}]})(C.a.createElement(i["a"],{placeholder:"\u8bf7\u8f93\u5165tags(\u4f8b\uff1aBarnes & Noble, John's Fav,)"}))),C.a.createElement(_,{labelCol:{span:5},wrapperCol:{span:15},label:"\u5e93\u5b58"},e("inventory_quantity",{rules:[{required:!0,message:"\u5e93\u5b58\u6570\u4e0d\u80fd\u4e3a\u7a7a\uff01"}]})(C.a.createElement(s["a"],{placeholder:"\u8bf7\u8f93\u5165\u5e93\u5b58\u6570",min:"1",style:{width:"386px"}}))),C.a.createElement(_,{labelCol:{span:5},wrapperCol:{span:15},label:"\u4ef7\u683c(\u5355\u4f4d:$)"},e("price",{rules:[{required:!0,message:"\u4ef7\u683c\u4e0d\u80fd\u4e3a\u7a7a\uff01"}]})(C.a.createElement(s["a"],{placeholder:"\u8bf7\u8f93\u5165\u4ef7\u683c",min:"0.01",step:"0.01",style:{width:"386px"}}))),C.a.createElement(_,null,C.a.createElement(o["a"],{type:"primary",block:!0,onClick:this.addproduct},"\u521b\u5efa\u5546\u54c1")))))}}]),a}(w["Component"]),l=n))||l);a["default"]=f["a"].create()(k)}}]);