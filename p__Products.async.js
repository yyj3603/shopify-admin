(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[35],{ETNY:function(t,e,n){"use strict";n.r(e);n("IzEo");var a,r,o,s=n("bx4M"),i=(n("+L6B"),n("2/Rp")),l=n("2Taf"),c=n.n(l),p=n("vZ4D"),d=n.n(p),u=n("l4Ni"),h=n.n(u),v=n("ujKo"),m=n.n(v),f=n("MhPg"),g=n.n(f),y=n("q1tI"),b=n.n(y),w=n("MuoO"),k=n("wY1l"),E=n.n(k),S=n("IDqu"),R=n.n(S),L=(n("dCQc"),n("CkN6")),I=n("zHco"),q=(a=Object(w["connect"])(function(t){var e=t.products,n=t.loading;t.link;return{products:e.products,link:e.link,loading:n.effects["products/fetch"]}}),a((o=function(t){function e(){var t,n;c()(this,e);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return n=h()(this,(t=m()(e)).call.apply(t,[this].concat(r))),n.state={selectedRows:[],params:{simple:!0,current:1,pageSize:10,total:n.props.products.length}},n.columns=[{title:"\u6807\u9898",dataIndex:"title",key:"title"},{title:"\u5e93\u5b58",dataIndex:"variants[0].inventory_quantity",key:"inventory",sorter:function(t,e){return t.variants[0].inventory_quantity-e.variants[0].inventory_quantity},render:function(t,e){for(var n=0,a=0;a<e.variants.length;a++)n+=e.variants[a].inventory_quantity;return n}},{title:"\u4ef7\u683c",dataIndex:"variants[0].price",key:"price",sorter:function(t,e){return t.variants[0].price-e.variants[0].price},render:function(t,e){var n=0;return n="$".concat(e.variants[0].price),n}},{title:"\u4f9b\u5e94\u5546",dataIndex:"vendor",key:"vendor"}],n.handleStandardTableChange=function(t,e){console.log(e),console.log("sorter------"),n.setState({params:{currentPage:t,pageSize:10,simple:!0,total:n.props.products.length}})},n.handleSelectRows=function(t){n.setState({selectedRows:t})},n.handleModalVisible=function(t){n.setState({modalVisible:!!t})},n}return g()(e,t),d()(e,[{key:"componentDidMount",value:function(){var t=this.props.dispatch;t({type:"products/fetch"})}},{key:"handleDel",value:function(){var t=this,e=this.props.dispatch,n=this.state.selectedRows;0!==n.length&&e({type:"products/remove",payload:{id:n.map(function(t){return t.id})},callback:function(){t.setState({selectedRows:[]})}})}},{key:"render",value:function(){var t=this,e=this.props.loading,n=this.props,a=n.products,r=n.link,o=this.state.params,l=this.state.selectedRows,c={list:a,pagination:o};return console.log(r),console.log("link-----"),b.a.createElement(I["a"],{title:"\u5546\u54c1\u5217\u8868"},b.a.createElement(s["a"],null,b.a.createElement("div",{className:R.a.tableList},b.a.createElement("div",{className:R.a.tableListOperator},b.a.createElement(E.a,{to:"/products/addproduct"},b.a.createElement(i["a"],{icon:"plus",type:"primary"},"\u65b0\u5efa")),l.length>0&&b.a.createElement("span",null,b.a.createElement(i["a"],{onClick:function(){return t.handleDel()}},"\u5220\u9664"))),b.a.createElement(L["a"],{selectedRows:l,loading:e,data:c,columns:this.columns,onSelectRow:this.handleSelectRows,onChange:this.handleStandardTableChange,rowKey:"id"}))))}}]),e}(y["Component"]),r=o))||r);e["default"]=q},IDqu:function(t,e,n){t.exports={tableList:"antd-pro-pages-products-table-list-tableList",tableListOperator:"antd-pro-pages-products-table-list-tableListOperator",tableListForm:"antd-pro-pages-products-table-list-tableListForm",submitButtons:"antd-pro-pages-products-table-list-submitButtons"}}}]);