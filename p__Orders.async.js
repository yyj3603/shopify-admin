(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[32],{vrSh:function(e,t,r){"use strict";r.r(t);r("IzEo");var n,a,o,l,s=r("bx4M"),i=(r("+L6B"),r("2/Rp")),c=(r("Awhp"),r("KrTs")),d=r("2Taf"),u=r.n(d),p=r("vZ4D"),f=r.n(p),h=r("l4Ni"),m=r.n(h),g=r("ujKo"),_=r.n(g),w=r("MhPg"),v=r.n(w),y=(r("y8nQ"),r("Vl3Y")),b=r("q1tI"),k=r.n(b),I=r("MuoO"),R=r("wd/R"),E=r.n(R),S=r("CkN6"),x=r("zHco"),C=["pengding","paid"],D=["\u5f85\u5904\u7406","\u5df2\u4ed8\u6b3e"],K=(n=Object(I["connect"])(function(e){var t=e.orders,r=e.loading;return{orders:t.orders,loading:r.effects["orders/fetch"]}}),a=y["a"].create(),n(o=a((l=function(e){function t(){var e,r;u()(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return r=m()(this,(e=_()(t)).call.apply(e,[this].concat(a))),r.state={filteredInfo:null,sortedInfo:null,selectedRows:[],params:{simple:!0,current:1,pageSize:4,total:r.props.orders.length}},r.handleChange=function(e,t,n,a){console.log("Various parameters",e,t,n),r.setState({filteredInfo:t,sortedInfo:n,params:{currentPage:a,pageSize:4,simple:!0,total:r.props.orders.length}})},r.handleSelectRows=function(e){r.setState({selectedRows:e})},r}return v()(t,e),f()(t,[{key:"componentDidMount",value:function(){var e=this.props.dispatch;e({type:"orders/fetch"})}},{key:"handleDel",value:function(){var e=this,t=this.props.dispatch,r=this.state.selectedRows;0!==r.length&&t({type:"orders/remove",payload:{id:r.map(function(e){return e.id})},callback:function(){console.log(r),e.setState({selectedRows:[]})}})}},{key:"render",value:function(){var e=this,t=this.state,r=t.sortedInfo,n=t.filteredInfo;r=r||{},n=n||{};var a=[{title:"\u8ba2\u5355\u53f7",dataIndex:"order_number",key:"order_number",sorter:function(e,t){return e.order_number-t.order_number},sortOrder:"order_number"===r.columnKey&&r.order,ellipsis:!0},{title:"\u65e5\u671f",dataIndex:"created_at",key:"created_at",sorter:function(e,t){return e.created_at-t.created_at},sortOrder:"created_at"===r.columnKey&&r.order,render:function(e){return k.a.createElement("span",null,E()(e).format("YYYY-MM-DD HH:mm:ss"))}},{title:"\u5ba2\u6237",render:function(e,t){return t.customer.first_name+t.customer.last_name}},{title:"\u4ed8\u6b3e\u72b6\u6001",dataIndex:"financial_status",filters:[{text:D[0],value:0},{text:D[1],value:1}],render:function(e,t){switch(t.financial_status){case"pending":return D[0];case"paid":return D[1];default:break}return k.a.createElement(c["a"],{status:C[e],text:D[e]})},filteredValue:n.financial_status||null,onFilter:function(e,t){return t.financial_status.includes(e)}},{title:"\u603b\u8ba1",dataIndex:"total_price",render:function(e,t){var r=0;return r="$"+t.total_price,r},key:"total_price",sorter:function(e,t){return e.total_price-t.total_price},sortOrder:"total_price"===r.columnKey&&r.order}],o=this.props,l=o.orders,d=o.loading,u=this.state.selectedRows,p=this.state.params;console.log(l);var f={list:l,pagination:p};return k.a.createElement("div",null,k.a.createElement(x["a"],{title:"\u8ba2\u5355"},k.a.createElement("br",null),k.a.createElement(s["a"],null,k.a.createElement(i["a"],{onClick:function(){return e.handleDel()}},"\u5220\u9664"),k.a.createElement(S["a"],{selectedRows:u,loading:d,data:f,columns:a,onSelectRow:this.handleSelectRows,onChange:this.handleChange,rowKey:"id"}))))}}]),t}(b["Component"]),o=l))||o)||o);t["default"]=K}}]);