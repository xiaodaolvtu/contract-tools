(window.webpackJsonp=window.webpackJsonp||[]).push([[4,2,3,6],{126:function(e,t,a){"use strict";a.r(t);var n=a(6),r=a.n(n),c=a(0),l=a.n(c),i=a(141),o=a(406),s=a(407),u=a(397),p=a(245),m=a(405),d=a(408),h=["多单","空单"],f=["10x","20x"],v=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={contractType:"多单",leverage:"10x",openPrice:0,closePrice:0,amount:0},t.setOpenPrice=function(e,a){var n=a.value;return t.setState({openPrice:n})},t.setProfits=function(e,a){var n=a.value;return t.setState({profits:n})},t.setAmount=function(e,a){var n=a.value;return t.setState({amount:n})},t.onClick=function(e){console.log(" "+t.state.contractType+t.state.leverage+t.state.openPrice+t.state.profits+t.state.amount)},t}return r()(t,e),t.prototype.render=function(){var e=this;return l.a.createElement(o.a.Pane,null,l.a.createElement(s.a,null,l.a.createElement(s.a.Item,null,l.a.createElement(i.a,{title:"合约类型",SetContractType:function(t){return e.setState({contractType:t})},values:h,defaultValue:h[0]}),l.a.createElement(i.a,{style:{marginTop:"20px"},title:"杠杆倍数",SetLeverage:function(t){return e.setState({leverage:t})},values:f,defaultValue:f[0]}),l.a.createElement(u.a,null,l.a.createElement(p.a,{style:{width:"130px"}}," 开仓价格:","("+(this.state.openPrice||0)+")"," "),l.a.createElement(m.a,{label:{basic:!0,content:"$"},style:{marginLeft:"20px"},onChange:this.setOpenPrice,placeholder:"0"})),l.a.createElement(u.a,null,l.a.createElement(p.a,{style:{width:"130px"}}," 开仓数量:","("+(this.state.amount||0)+")"," "),l.a.createElement(m.a,{label:{basic:!0,content:"张"},labelPosition:"right",style:{marginLeft:"20px"},onChange:this.setAmount,placeholder:"0"})),l.a.createElement(u.a,null,l.a.createElement(p.a,{style:{width:"130px"}}," 收益:","("+(this.state.profits||0)+")"," "),l.a.createElement(m.a,{label:{basic:!0,content:"$"},style:{marginLeft:"20px"},onChange:this.setProfits,placeholder:"0"})))),l.a.createElement(d.a,{color:"violet",onClick:this.onClick},"Violet"))},t}(c.Component);t.default=v},127:function(e,t,a){"use strict";a.r(t);var n=a(6),r=a.n(n),c=a(0),l=a.n(c),i=a(141),o=a(406),s=a(407),u=a(397),p=a(245),m=a(405),d=a(198),h=a(408),f=a(150),v=["多单","空单"],g=["10x","20x"],b=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={contractType:"多单",leverage:"10x",openPrice:0,closePrice:0,amount:0,type:"btc"},t.setOpenPrice=function(e,a){var n=a.value;return t.setState({openPrice:n})},t.setClosePrice=function(e,a){var n=a.value;return t.setState({closePrice:n})},t.setAmount=function(e,a){var n=a.value;return t.setState({amount:n})},t.onClick=function(e){var a=("多单"===t.state.contractType?f.a.profit_long:f.a.profit_short)(t.state.type,t.state.closePrice,t.state.openPrice,t.state.amount);console.log(a),t.setState({Result:a})},t}return r()(t,e),t.prototype.render=function(){var e=this;return l.a.createElement(o.a.Pane,null,l.a.createElement(s.a,null,l.a.createElement(s.a.Item,null,l.a.createElement(i.a,{title:"合约类型",SetContractType:function(t){return e.setState({contractType:t})},values:v,defaultValue:v[0]}),l.a.createElement(i.a,{title:"杠杆倍数",SetLeverage:function(t){return e.setState({leverage:t})},values:g,defaultValue:g[0]}),l.a.createElement(u.a,null,l.a.createElement(p.a,{style:{width:"130px"}}," 开仓价格:","("+(this.state.openPrice||0)+")"," "),l.a.createElement(m.a,{label:{basic:!0,content:"$"},style:{marginLeft:"20px"},onChange:this.setOpenPrice,placeholder:"0"})),l.a.createElement(u.a,null,l.a.createElement(p.a,{style:{width:"130px"}}," 平仓价格:","("+(this.state.closePrice||0)+")"," "),l.a.createElement(m.a,{label:{basic:!0,content:"$"},style:{marginLeft:"20px"},onChange:this.setClosePrice,placeholder:"0"})),l.a.createElement(u.a,null,l.a.createElement(p.a,{style:{width:"130px"}}," 开仓数量:","("+(this.state.amount||0)+")"," "),l.a.createElement(m.a,{label:{basic:!0,content:"张"},labelPosition:"right",style:{marginLeft:"20px"},onChange:this.setAmount,placeholder:"0"})),this.state.Result?l.a.createElement(u.a,null,l.a.createElement(d.a,null," ",l.a.createElement(d.a.Header,null,"在该位置平仓可获得收："),this.state.Result+" "+this.state.type)):null)),l.a.createElement(h.a,{color:"green",style:{display:"flex",alignItems:"center"},onClick:this.onClick},"计算收益"))},t}(c.Component);t.default=b},128:function(e,t,a){"use strict";a.r(t);var n=a(6),r=a.n(n),c=a(46),l=a.n(c),i=a(0),o=a.n(i),s=a(141),u=a(397),p=a(245),m=a(405),d=a(408),h=function(e){function t(t){var a;return(a=e.call(this,t)||this).setPrice=function(e,t){var n=t.value;/^d*(?:.d{0,4})?$/.test(n)||console.log("aaa"),a.setState({price:n})},a.setCount=function(e,t){var n=t.value;return a.setState({count:n})},a.handleClick=function(){var e=a.state,t=e.price,n=e.count;console.log("@CheckInput:handleClick"+t+" "+n+" "+a.index),a.props.addContract&&a.props.addContract(t,n,a.index)},a.state={price:0,count:0},a.index=t.index,a.price=t.price,a.label=a.index+"：价格",a}return r()(t,e),t.prototype.render=function(){var e=this;return o.a.createElement(u.a,null,o.a.createElement(p.a,{attached:"top"},"加仓"+(this.index+1)),o.a.createElement(m.a,{size:"mini",label:"价格",onChange:this.setPrice,placeholder:this.price||0}),o.a.createElement(m.a,{size:"mini",action:o.a.createElement(d.a,{color:"teal",size:"mini",content:"确定",onClick:function(){return e.handleClick()}}),label:"张数",onChange:this.setCount,placeholder:0}))},t}(i.Component),f=a(406),v=a(198),g=a(407),b=a(150),y=["多单","空单"],E=["10x","20x"],P=["btc","ltc"],C=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={contractType:"多单",leverage:"10x",openPrice:0,closePrice:0,amount:0,currency:"btc",liquidationPrice:0,inputs:[],finalPrice:0,finalAmount:0,finalLiquidationPrice:0,hidden:!0,message:""},a.setOpenPrice=function(e,t){var n=t.value;return a.setState({openPrice:n})},a.setProfits=function(e,t){var n=t.value;return a.setState({profits:n})},a.setAmount=function(e,t){var n=t.value;return a.setState({amount:n})},a.onClick=function(e){a.state.openPrice&&a.state.amount?a.setState({inputs:[].concat(a.state.inputs,{})}):a.myAlert("请填写仓位信息！")},a.clear=function(){a.setState({inputs:[]})},a.checkInitialInfo=function(){return a.getLiquidationPrice()},a.getLiquidationPrice=function(e,t){var n=e||a.state.openPrice,r=t||a.state.amount,c=("多单"===a.state.contractType?b.a.liquidation_price_long:b.a.liquidation_price_short)(a.state.currency,a.state.leverage,n,r);a.setState({liquidationPrice:c})},a.updateInputs=function(e,t,n){console.log(e+" "+t+" "+n);var r=a.state.inputs,c=[],l=r.length;return 1==l?0==n&&(c=[].concat({price:e,count:t})):c=2==l?0==n?[].concat({price:e,count:t},r[1]):[].concat(r[0],{price:e,count:t}):0==n?[].concat({price:e,count:t},r.slice(1,l)):n==l-1?[].concat(r.slice(0,n),{price:e,count:t}):[].concat(r.slice(0,n),{price:e,count:t},r.slice(n+1,l)),a.setState({inputs:[].concat(c)}),c},a.addContract=function(e,t,n){console.log("AveragePriceView:addContract"+e+" "+t+" "+n);var r=a.state,c=r.openPrice,l=r.amount,i=r.currency,o=a.updateInputs(parseFloat(e),parseFloat(t),n),s=[].concat({price:parseFloat(c),count:parseFloat(l)},o);console.log("deals:"+s.length+" "+s[1].price);var u=b.a.average_price(i,parseFloat(l),s);a.setState({finalPrice:u.price,finalAmout:u.count})},a.addInput=function(e,t){if(a.state.openPrice||a.state.amount)return o.a.createElement(h,{index:e,price:t})},a.myAlert=function(e){a.setState({hidden:!1,message:e});var t=l()(l()(a));setTimeout(function(){t.setState({hidden:!0,message:""})},3e3)},a.ref1=o.a.createRef(),a.ref2=o.a.createRef(),a.ref3=o.a.createRef(),a}return r()(t,e),t.prototype.render=function(){var e=this,t=this.state.inputs;return o.a.createElement(f.a.Pane,{style:{paddingBottom:"60px"}},!this.state.hidden&&o.a.createElement(v.a,{Floating:!0},this.state.message),o.a.createElement(g.a,null,o.a.createElement(g.a.Item,null,o.a.createElement(s.a,{group:!0,style:{marginLeft:"-4px",paddingLeft:"0px",marginTop:"5px"},ref:this.ref1,title:"合约类型",SetContractType:function(t){return e.setState({contractType:t})},values:y,defaultValue:y[0]}),o.a.createElement(s.a,{group:!0,style:{marginLeft:"-4px",paddingLeft:"0px",marginTop:"5px"},ref:this.ref2,title:"杠杆倍数",SetLeverage:function(t){return e.setState({leverage:t})},values:E,defaultValue:E[0]}),o.a.createElement(s.a,{group:!0,style:{marginLeft:"0px",paddingLeft:"0px",marginTop:"5px"},ref:this.ref3,title:"合约币种",SetCurrency:function(t){return e.setState({currency:t})},values:P,defaultValue:P[0]}),o.a.createElement(p.a,{style:{width:"130px",marginLeft:"4px"}}," 开仓价格: "),o.a.createElement(m.a,{size:"mini",style:{marginLeft:"18px"},label:{basic:!0,content:"$"},onChange:this.setOpenPrice,placeholder:"0"}),o.a.createElement("br",null),o.a.createElement(p.a,{style:{width:"130px",marginLeft:"4px"}}," 开仓数量: "),o.a.createElement(m.a,{size:"mini",label:{basic:!0,content:"张"},labelPosition:"right",style:{marginLeft:"18px"},onChange:this.setAmount,placeholder:"0"}),o.a.createElement(d.a,{color:"green",size:"mini",style:{borderRadius:0},content:"确定",onClick:this.checkInitialInfo}),o.a.createElement(v.a,{info:!0},o.a.createElement("b",null,"初始仓位信息："),o.a.createElement("br",null),"开仓价格：",o.a.createElement("b",{style:{color:"red"}},this.state.openPrice),"  |  合约类型：",o.a.createElement("b",{style:{color:"red"}},this.state.contractType),"  |  杠杆倍数：",o.a.createElement("b",{style:{color:"red"}},this.state.leverage),"  |  合约币种：",o.a.createElement("b",{style:{color:"red"}},this.state.currency),"  |  持仓数量：",o.a.createElement("b",{style:{color:"red"}},this.state.amount),"  |  爆仓价格：",o.a.createElement("b",{style:{color:"red"}},this.state.liquidationPrice),this.state.finalPrice?o.a.createElement("p",null,o.a.createElement("b",null,"最终仓位信息："),o.a.createElement("br",null),"平均价格：",o.a.createElement("b",{style:{color:"red"}},this.state.finalPrice),"  |  合约类型：",o.a.createElement("b",{style:{color:"red"}},this.state.contractType),"  |  杠杆倍数：",o.a.createElement("b",{style:{color:"red"}},this.state.leverage),"  |  合约币种：",o.a.createElement("b",{style:{color:"red"}},this.state.currency),"  |  持仓数量：",o.a.createElement("b",{style:{color:"red"}},this.state.finalAmount),"  |  爆仓价格：",o.a.createElement("b",{style:{color:"red"}},this.state.finalLiquidationPrice)):null))),o.a.createElement(d.a.Group,null,o.a.createElement(d.a,{onClick:this.clear},"清空"),o.a.createElement(d.a.Or,null),o.a.createElement(d.a,{positive:!0,onClick:this.onClick},"加仓")),o.a.createElement("br",null),t.length?t.map(function(t,a){return o.a.createElement(h,{index:a,addContract:function(t,a,n){return e.addContract(t,a,n)}})}):null)},t}(i.Component);t.default=C},129:function(e,t,a){"use strict";a.r(t);var n=a(6),r=a.n(n),c=a(0),l=a.n(c),i=(a(141),a(127)),o=(a(126),a(128)),s=a(403),u=a(398),p=a(397),m=a(406),d={h1:{marginTop:"3em"},last:{marginBottom:"300px"}},h=[{menuItem:"撮合均价计算",render:function(e){return l.a.createElement(o.default,e)}},{menuItem:"收益计算",render:function(e){return l.a.createElement(i.default,e)}}],f=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={contractType:"多单",leverage:"10x"},t.handleChange=function(e,a){var n=a.value;return t.setState({value:n})},t.SetContractType=function(e){return t.setState({contractType:e})},t.SetLeverage=function(e){return t.setState({leverage:e})},t}return r()(t,e),t.prototype.render=function(){var e=this;return l.a.createElement("div",null,l.a.createElement(s.a,{text:!0},l.a.createElement(u.a,{as:"last",content:"Bitcoin Feature",style:d.h1,textAlign:"center"}),l.a.createElement(p.a.Group,null,l.a.createElement(m.a,{SetContractType:function(t){return e.SetContractType(t)},SetLeverage:function(t){return e.SetLeverage(t)},panes:h}))))},t}(c.Component);t.default=f},141:function(e,t,a){"use strict";a.d(t,"a",function(){return m});a(66),a(48);var n=a(6),r=a.n(n),c=a(0),l=a.n(c),i=a(397),o=a(403),s=a(245),u=a(404),p={marginLeft:"20px"},m=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={value:a.props.defaultValue||""},a.callback=a.props.SetContractType||a.props.SetLeverage||a.props.SetCurrency||null,a.handleChange=function(e,t){var n=t.value;return a.setState({value:n},a.callback(n))},a.ckRef=l.a.createRef(),a}r()(t,e);var a=t.prototype;return a.clear=function(){},a.render=function(){var e=this,t=this.props.values||[],a=i.a;return this.props.group&&(a=o.a),t.length>0?l.a.createElement(a,{style:this.props.style||null},l.a.createElement(s.a,{style:{width:"130px",marginLeft:"-9px"}},this.props.title,": "),t.map(function(t){return l.a.createElement(u.a,{ref:e.ckRef,style:p,radio:!0,label:t,name:"checkboxRadioGroup",value:t,checked:e.state.value===t,onChange:e.handleChange})})):null},t}(c.Component)},150:function(e,t,a){"use strict";a(66);var n={btc:100,ltc:10,other:10},r={average_price:function(e,t,a){var r=n[(""+e).toLowerCase()||"btc"],c=0;t=0;return a.forEach(function(e){e.price&&(t+=parseInt(e.count),c=parseFloat(c)+r*parseFloat(e.count)/parseFloat(e.price),console.log("@@"+c))}),{price:parseFloat(r*t/c).toFixed(4),count:t}},original_margin:function(e,t,a,r){var c=parseInt(n[e||"btc"]);return parseFloat(c*a/t).toFixed(4)/parseInt(r)},profit_long:function(e,t,a,r){var c=n[e||"btc"];return(c/a-c/t)*r},profit_short:function(e,t,a,r){var c=n[e||"btc"];return(c/t-c/a)*r},liquidation_price_long:function(e,t,a,c,l){var i=parseInt(n[e||"btc"]),o=1-parseInt(t||10)/100;return i/(i/a- -(l||r.original_margin(e,a,c,t))*o/c)},liquidation_price_short:function(e,t,a,c,l){var i=parseInt(n[e||"btc"]),o=1-parseInt(t||10)/100;return i/(i/a+-(l||r.original_margin(e,a,c,t))*o/c)}};t.a=r},198:function(e,t,a){"use strict";var n=a(133),r=a.n(n),c=a(135),l=a.n(c),i=a(136),o=a.n(i),s=a(137),u=a.n(s),p=a(138),m=a.n(p),d=a(139),h=a.n(d),f=a(46),v=a.n(f),g=a(47),b=a.n(g),y=a(144),E=a.n(y),P=(a(145),a(134)),C=a.n(P),x=(a(4),a(0)),O=a.n(x),S=a(152),j=a(209),N=a(210),T=a(132),k=a(232),L=a(199);function w(e){var t=e.children,a=e.className,n=e.content,c=C()("content",a),l=Object(j.a)(w,e),i=Object(N.a)(w,e);return O.a.createElement(i,r()({},l,{className:c}),T.a.isNil(t)?n:t)}w.handledProps=["as","children","className","content"],w.propTypes={};var I=w;function A(e){var t=e.children,a=e.className,n=e.content,c=C()("header",a),l=Object(j.a)(A,e),i=Object(N.a)(A,e);return O.a.createElement(i,r()({},l,{className:c}),T.a.isNil(t)?n:t)}A.handledProps=["as","children","className","content"],A.propTypes={},A.create=Object(k.d)(A,function(e){return{content:e}});var _=A,F=a(149),q=a.n(F);function R(e){var t=e.children,a=e.className,n=e.content,c=C()("content",a),l=Object(j.a)(R,e),i=Object(N.a)(R,e);return O.a.createElement(i,r()({},l,{className:c}),T.a.isNil(t)?n:t)}R.handledProps=["as","children","className","content"],R.propTypes={},R.defaultProps={as:"li"},R.create=Object(k.d)(R,function(e){return{content:e}});var z=R;function G(e){var t=e.children,a=e.className,n=e.items,c=C()("list",a),l=Object(j.a)(G,e),i=Object(N.a)(G,e);return O.a.createElement(i,r()({},l,{className:c}),T.a.isNil(t)?q()(n,z.create):t)}G.handledProps=["as","children","className","items"],G.propTypes={},G.defaultProps={as:"ul"},G.create=Object(k.d)(G,function(e){return{items:e}});var V=G;a.d(t,"a",function(){return K});var K=function(e){function t(){var e,a;l()(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return a=u()(this,(e=m()(t)).call.apply(e,[this].concat(r))),b()(v()(v()(a)),"handleDismiss",function(e){var t=a.props.onDismiss;t&&t(e,a.props)}),a}return h()(t,e),o()(t,[{key:"render",value:function(){var e=this.props,a=e.attached,n=e.children,c=e.className,l=e.color,i=e.compact,o=e.content,s=e.error,u=e.floating,p=e.header,m=e.hidden,d=e.icon,h=e.info,f=e.list,v=e.negative,g=e.onDismiss,b=e.positive,y=e.size,P=e.success,x=e.visible,w=e.warning,A=C()("ui",l,y,Object(S.a)(i,"compact"),Object(S.a)(s,"error"),Object(S.a)(u,"floating"),Object(S.a)(m,"hidden"),Object(S.a)(d,"icon"),Object(S.a)(h,"info"),Object(S.a)(v,"negative"),Object(S.a)(b,"positive"),Object(S.a)(P,"success"),Object(S.a)(x,"visible"),Object(S.a)(w,"warning"),Object(S.b)(a,"attached"),"message",c),F=g&&O.a.createElement(L.a,{name:"close",onClick:this.handleDismiss}),q=Object(j.a)(t,this.props),R=Object(N.a)(t,this.props);return T.a.isNil(n)?O.a.createElement(R,r()({},q,{className:A}),F,L.a.create(d,{autoGenerateKey:!1}),(!E()(p)||!E()(o)||!E()(f))&&O.a.createElement(I,null,_.create(p,{autoGenerateKey:!1}),V.create(f,{autoGenerateKey:!1}),Object(k.c)(o,{autoGenerateKey:!1}))):O.a.createElement(R,r()({},q,{className:A}),F,n)}}]),t}(x.Component);b()(K,"Content",I),b()(K,"Header",_),b()(K,"List",V),b()(K,"Item",z),b()(K,"handledProps",["as","attached","children","className","color","compact","content","error","floating","header","hidden","icon","info","list","negative","onDismiss","positive","size","success","visible","warning"]),K.propTypes={}},398:function(e,t,a){"use strict";var n=a(133),r=a.n(n),c=(a(145),a(134)),l=a.n(c),i=(a(4),a(0)),o=a.n(i),s=a(152),u=a(209),p=a(210),m=a(132),d=a(199),h=a(396),f=a(232);function v(e){var t=e.children,a=e.className,n=e.content,c=l()("sub header",a),i=Object(u.a)(v,e),s=Object(p.a)(v,e);return o.a.createElement(s,r()({},i,{className:c}),m.a.isNil(t)?n:t)}v.handledProps=["as","children","className","content"],v.propTypes={},v.create=Object(f.d)(v,function(e){return{content:e}});var g=v;function b(e){var t=e.children,a=e.className,n=e.content,c=l()("content",a),i=Object(u.a)(b,e),s=Object(p.a)(b,e);return o.a.createElement(s,r()({},i,{className:c}),m.a.isNil(t)?n:t)}b.handledProps=["as","children","className","content"],b.propTypes={};var y=b;function E(e){var t=e.attached,a=e.block,n=e.children,c=e.className,i=e.color,f=e.content,v=e.disabled,b=e.dividing,P=e.floated,C=e.icon,x=e.image,O=e.inverted,S=e.size,j=e.sub,N=e.subheader,T=e.textAlign,k=l()("ui",i,S,Object(s.a)(a,"block"),Object(s.a)(v,"disabled"),Object(s.a)(b,"dividing"),Object(s.e)(P,"floated"),Object(s.a)(!0===C,"icon"),Object(s.a)(!0===x,"image"),Object(s.a)(O,"inverted"),Object(s.a)(j,"sub"),Object(s.b)(t,"attached"),Object(s.d)(T),"header",c),L=Object(u.a)(E,e),w=Object(p.a)(E,e);if(!m.a.isNil(n))return o.a.createElement(w,r()({},L,{className:k}),n);var I=d.a.create(C,{autoGenerateKey:!1}),A=h.a.create(x,{autoGenerateKey:!1}),_=g.create(N,{autoGenerateKey:!1});return I||A?o.a.createElement(w,r()({},L,{className:k}),I||A,(f||_)&&o.a.createElement(y,null,f,_)):o.a.createElement(w,r()({},L,{className:k}),f,_)}E.handledProps=["as","attached","block","children","className","color","content","disabled","dividing","floated","icon","image","inverted","size","sub","subheader","textAlign"],E.propTypes={},E.Content=y,E.Subheader=g;t.a=E}}]);
//# sourceMappingURL=component---src-pages-contract-js-a8b980c0aaa482a792d1.js.map