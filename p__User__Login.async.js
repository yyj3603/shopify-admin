(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[40],{JAxp:function(e,t,a){e.exports={login:"antd-pro-components-login-index-login",getCaptcha:"antd-pro-components-login-index-getCaptcha",icon:"antd-pro-components-login-index-icon",other:"antd-pro-components-login-index-other",register:"antd-pro-components-login-index-register",prefixIcon:"antd-pro-components-login-index-prefixIcon",submit:"antd-pro-components-login-index-submit"}},Y5yc:function(e,t,a){"use strict";a.r(t);a("Pwec");var n=a("CtXQ"),r=(a("sRBo"),a("kaz8")),o=(a("fOrg"),a("+KLJ")),i=a("p0pE"),s=a.n(i),c=(a("2qtc"),a("kLXV")),l=a("2Taf"),p=a.n(l),u=a("vZ4D"),m=a.n(u),d=a("l4Ni"),g=a.n(d),h=a("ujKo"),f=a.n(h),b=a("MhPg"),v=a.n(b),y=a("q1tI"),C=a.n(y),E=a("MuoO"),w=a("Y2fQ"),x=a("wY1l"),M=a.n(x),N=(a("y8nQ"),a("Vl3Y")),S=(a("Znn+"),a("ZTPi")),O=a("gWZ8"),T=a.n(O),j=(a("17x9"),a("TSYQ")),k=a.n(j),q=(a("14J3"),a("BMrR")),I=(a("+L6B"),a("2/Rp")),P=(a("jCWc"),a("kPKH")),F=(a("5NDa"),a("5rEg")),A=a("jehZ"),D=a.n(A),G=a("Y/ft"),L=a.n(G),B=a("BGR+"),z=a("JAxp"),K=a.n(z),U={UserName:{props:{size:"large",id:"userName",prefix:C.a.createElement(n["a"],{type:"user",className:K.a.prefixIcon}),placeholder:"admin"},rules:[{required:!0,message:"Please enter username!"}]},Password:{props:{size:"large",prefix:C.a.createElement(n["a"],{type:"lock",className:K.a.prefixIcon}),type:"password",id:"password",placeholder:"888888"},rules:[{required:!0,message:"Please enter password!"}]},Mobile:{props:{size:"large",prefix:C.a.createElement(n["a"],{type:"mobile",className:K.a.prefixIcon}),placeholder:"mobile number"},rules:[{required:!0,message:"Please enter mobile number!"},{pattern:/^1\d{10}$/,message:"Wrong mobile number format!"}]},Captcha:{props:{size:"large",prefix:C.a.createElement(n["a"],{type:"mail",className:K.a.prefixIcon}),placeholder:"captcha"},rules:[{required:!0,message:"Please enter Captcha!"}]}},J=Object(y["createContext"])(),V=J,Y=N["a"].Item,Z=function(e){function t(e){var a;return p()(this,t),a=g()(this,f()(t).call(this,e)),a.onGetCaptcha=function(){var e=a.props.onGetCaptcha,t=e?e():null;!1!==t&&(t instanceof Promise?t.then(a.runGetCaptchaCountDown):a.runGetCaptchaCountDown())},a.getFormItemOptions=function(e){var t=e.onChange,a=e.defaultValue,n=e.customprops,r=e.rules,o={rules:r||n.rules};return t&&(o.onChange=t),a&&(o.initialValue=a),o},a.runGetCaptchaCountDown=function(){var e=a.props.countDown,t=e||59;a.setState({count:t}),a.interval=setInterval(function(){t-=1,a.setState({count:t}),0===t&&clearInterval(a.interval)},1e3)},a.state={count:0},a}return v()(t,e),m()(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.updateActive,a=e.name;t&&t(a)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){var e=this.state.count,t=this.props.form.getFieldDecorator,a=this.props,n=(a.onChange,a.customprops),r=(a.defaultValue,a.rules,a.name),o=a.getCaptchaButtonText,i=a.getCaptchaSecondText,s=(a.updateActive,a.type),c=L()(a,["onChange","customprops","defaultValue","rules","name","getCaptchaButtonText","getCaptchaSecondText","updateActive","type"]),l=this.getFormItemOptions(this.props),p=c||{};if("Captcha"===s){var u=Object(B["a"])(p,["onGetCaptcha","countDown"]);return C.a.createElement(Y,null,C.a.createElement(q["a"],{gutter:8},C.a.createElement(P["a"],{span:16},t(r,l)(C.a.createElement(F["a"],D()({},n,u)))),C.a.createElement(P["a"],{span:8},C.a.createElement(I["a"],{disabled:e,className:K.a.getCaptcha,size:"large",onClick:this.onGetCaptcha},e?"".concat(e," ").concat(i):o))))}return C.a.createElement(Y,null,t(r,l)(C.a.createElement(F["a"],D()({},n,p))))}}]),t}(y["Component"]);Z.defaultProps={getCaptchaButtonText:"captcha",getCaptchaSecondText:"second"};var Q={};Object.keys(U).forEach(function(e){var t=U[e];Q[e]=function(a){return C.a.createElement(V.Consumer,null,function(n){return C.a.createElement(Z,D()({customprops:t.props,rules:t.rules},a,{type:e,updateActive:n.updateActive,form:n.form}))})}});var R=Q,W=S["a"].TabPane,X=function(){var e=0;return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e+=1,"".concat(t).concat(e)}}(),$=function(e){function t(e){var a;return p()(this,t),a=g()(this,f()(t).call(this,e)),a.uniqueId=X("login-tab-"),a}return v()(t,e),m()(t,[{key:"componentDidMount",value:function(){var e=this.props.tabUtil;e.addTab(this.uniqueId)}},{key:"render",value:function(){var e=this.props.children;return C.a.createElement(W,this.props,e)}}]),t}(y["Component"]),H=function(e){return C.a.createElement(V.Consumer,null,function(t){return C.a.createElement($,D()({tabUtil:t.tabUtil},e))})};H.typeName="LoginTab";var _=H,ee=N["a"].Item,te=function(e){var t=e.className,a=L()(e,["className"]),n=k()(K.a.submit,t);return C.a.createElement(ee,null,C.a.createElement(I["a"],D()({size:"large",className:n,type:"primary",htmlType:"submit"},a)))},ae=te,ne=function(e){function t(e){var a;return p()(this,t),a=g()(this,f()(t).call(this,e)),a.onSwitch=function(e){a.setState({type:e});var t=a.props.onTabChange;t(e)},a.getContext=function(){var e=a.state.tabs,t=a.props.form;return{tabUtil:{addTab:function(t){a.setState({tabs:[].concat(T()(e),[t])})},removeTab:function(t){a.setState({tabs:e.filter(function(e){return e!==t})})}},form:s()({},t),updateActive:function(e){var t=a.state,n=t.type,r=t.active;r[n]?r[n].push(e):r[n]=[e],a.setState({active:r})}}},a.handleSubmit=function(e){e.preventDefault();var t=a.state,n=t.active,r=t.type,o=a.props,i=o.form,s=o.onSubmit,c=n[r];i.validateFields(c,{force:!0},function(e,t){s(e,t)})},a.state={type:e.defaultActiveKey,tabs:[],active:{}},a}return v()(t,e),m()(t,[{key:"render",value:function(){var e=this.props,t=e.className,a=e.children,n=this.state,r=n.type,o=n.tabs,i=[],s=[];return C.a.Children.forEach(a,function(e){e&&("LoginTab"===e.type.typeName?i.push(e):s.push(e))}),C.a.createElement(V.Provider,{value:this.getContext()},C.a.createElement("div",{className:k()(t,K.a.login)},C.a.createElement(N["a"],{onSubmit:this.handleSubmit},o.length?C.a.createElement(C.a.Fragment,null,C.a.createElement(S["a"],{animated:!1,className:K.a.tabs,activeKey:r,onChange:this.onSwitch},i),s):a)))}}]),t}(y["Component"]);ne.defaultProps={className:"",defaultActiveKey:"",onTabChange:function(){},onSubmit:function(){}},ne.Tab=_,ne.Submit=ae,Object.keys(R).forEach(function(e){ne[e]=R[e]});var re,oe,ie,se=N["a"].create()(ne),ce=a("w2qy"),le=a.n(ce),pe=se.Tab,ue=se.UserName,me=se.Password,de=se.Mobile,ge=se.Captcha,he=se.Submit,fe=(re=Object(E["connect"])(function(e){var t=e.login,a=e.loading;return{login:t,submitting:a.effects["login/login"]}}),re((ie=function(e){function t(){var e,a;p()(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return a=g()(this,(e=f()(t)).call.apply(e,[this].concat(r))),a.state={type:"account",autoLogin:!0},a.onTabChange=function(e){a.setState({type:e})},a.onGetCaptcha=function(){return new Promise(function(e,t){a.loginForm.validateFields(["mobile"],{},function(n,r){if(n)t(n);else{var o=a.props.dispatch;o({type:"login/getCaptcha",payload:r.mobile}).then(e).catch(t),c["a"].info({title:Object(w["formatMessage"])({id:"app.login.verification-code-warning"})})}})})},a.handleSubmit=function(e,t){var n=a.state.type;if(!e){var r=a.props.dispatch;r({type:"login/login",payload:s()({},t,{type:n})})}},a.changeAutoLogin=function(e){a.setState({autoLogin:e.target.checked})},a.renderMessage=function(e){return C.a.createElement(o["a"],{style:{marginBottom:24},message:e,type:"error",showIcon:!0})},a}return v()(t,e),m()(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.login,o=t.submitting,i=this.state,s=i.type,c=i.autoLogin;return C.a.createElement("div",{className:le.a.main},C.a.createElement(se,{defaultActiveKey:s,onTabChange:this.onTabChange,onSubmit:this.handleSubmit,ref:function(t){e.loginForm=t}},C.a.createElement(pe,{key:"account",tab:Object(w["formatMessage"])({id:"app.login.tab-login-credentials"})},"error"===a.status&&"account"===a.type&&!o&&this.renderMessage(Object(w["formatMessage"])({id:"app.login.message-invalid-credentials"})),C.a.createElement(ue,{name:"userName",placeholder:"".concat(Object(w["formatMessage"])({id:"app.login.userName"}),": admin or user"),rules:[{required:!0,message:Object(w["formatMessage"])({id:"validation.userName.required"})}]}),C.a.createElement(me,{name:"password",placeholder:"".concat(Object(w["formatMessage"])({id:"app.login.password"}),": ant.design"),rules:[{required:!0,message:Object(w["formatMessage"])({id:"validation.password.required"})}],onPressEnter:function(t){t.preventDefault(),e.loginForm.validateFields(e.handleSubmit)}})),C.a.createElement(pe,{key:"mobile",tab:Object(w["formatMessage"])({id:"app.login.tab-login-mobile"})},"error"===a.status&&"mobile"===a.type&&!o&&this.renderMessage(Object(w["formatMessage"])({id:"app.login.message-invalid-verification-code"})),C.a.createElement(de,{name:"mobile",placeholder:Object(w["formatMessage"])({id:"form.phone-number.placeholder"}),rules:[{required:!0,message:Object(w["formatMessage"])({id:"validation.phone-number.required"})},{pattern:/^1\d{10}$/,message:Object(w["formatMessage"])({id:"validation.phone-number.wrong-format"})}]}),C.a.createElement(ge,{name:"captcha",placeholder:Object(w["formatMessage"])({id:"form.verification-code.placeholder"}),countDown:120,onGetCaptcha:this.onGetCaptcha,getCaptchaButtonText:Object(w["formatMessage"])({id:"form.get-captcha"}),getCaptchaSecondText:Object(w["formatMessage"])({id:"form.captcha.second"}),rules:[{required:!0,message:Object(w["formatMessage"])({id:"validation.verification-code.required"})}]})),C.a.createElement("div",null,C.a.createElement(r["a"],{checked:c,onChange:this.changeAutoLogin},C.a.createElement(w["FormattedMessage"],{id:"app.login.remember-me"})),C.a.createElement("a",{style:{float:"right"},href:""},C.a.createElement(w["FormattedMessage"],{id:"app.login.forgot-password"}))),C.a.createElement(he,{loading:o},C.a.createElement(w["FormattedMessage"],{id:"app.login.login"})),C.a.createElement("div",{className:le.a.other},C.a.createElement(w["FormattedMessage"],{id:"app.login.sign-in-with"}),C.a.createElement(n["a"],{type:"alipay-circle",className:le.a.icon,theme:"outlined"}),C.a.createElement(n["a"],{type:"taobao-circle",className:le.a.icon,theme:"outlined"}),C.a.createElement(n["a"],{type:"weibo-circle",className:le.a.icon,theme:"outlined"}),C.a.createElement(M.a,{className:le.a.register,to:"/user/register"},C.a.createElement(w["FormattedMessage"],{id:"app.login.signup"})))))}}]),t}(y["Component"]),oe=ie))||oe);t["default"]=fe},w2qy:function(e,t,a){e.exports={main:"antd-pro-pages-user-login-main",icon:"antd-pro-pages-user-login-icon",other:"antd-pro-pages-user-login-other",register:"antd-pro-pages-user-login-register"}}}]);