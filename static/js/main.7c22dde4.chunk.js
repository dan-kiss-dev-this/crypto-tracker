(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{108:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(35),i=a.n(c),o=(a(57),a(14)),l=a(15),s=a(17),u=a(16),h=a(18),p=a(13),m=a.n(p),f=a(26),d=a(12),v=a(2),b=a(39),E=a(49),y=a(36),g=a(29),w=a(4),k=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.type,a=e.width,n=e.data,c=e.ratio,i=function(e){return new Date(1e3*e.time)},o=[i(Object(w.last)(n)),i(n[n.length-30])];return o.length<=1?r.a.createElement("p",null,"User Reload Page"):r.a.createElement(b.b,{height:300,ratio:c,width:a,margin:{left:50,right:50,top:10,bottom:30},type:t,seriesName:"MSFT",data:n,xAccessor:i,displayXAccessor:i,xScale:Object(d.scaleTime)(),xExtents:o},r.a.createElement(b.a,{id:1,yExtents:function(e){return[e.high,e.low]}},r.a.createElement(y.XAxis,{axisAt:"bottom",orient:"bottom",ticks:6}),r.a.createElement(y.YAxis,{axisAt:"left",orient:"left",ticks:5}),r.a.createElement(E.CandlestickSeries,{width:Object(w.timeIntervalBarWidth)(v.l)})))}}]),t}(r.a.Component);k.defaultProps={type:"svg"};var j=k=Object(g.fitWidth)(k),O=a(50),x=a.n(O),C=(a(33),a(21)),D=a.n(C),A=a(20),T=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,null===this.props.fullData.news?r.a.createElement(C.SkeletonTheme,{color:"gray",highlightColor:"white"},r.a.createElement("p",null,r.a.createElement(D.a,{count:3,height:20}))):r.a.createElement("div",{className:"Articles"},this.props.fullData.news.map(function(e,t){return function(e,t){return r.a.createElement("div",{key:t,className:"Article"},r.a.createElement("a",{href:e.url},r.a.createElement("h4",null,e.title),r.a.createElement("div",null,r.a.createElement("img",{src:e.urlToImage,alt:"Pic"})),r.a.createElement("p",{href:e.url,className:"Article-Text"},e.description,"...(click for more)")))}(e,t)}),";"))}}]),t}(r.a.Component),N=Object(A.b)(function(e){return{fullData:e}},null)(T),S=r.a.createElement("div",{className:"navBar"},r.a.createElement("h1",null,"CryptoLive"),r.a.createElement("div",null,r.a.createElement("a",{href:"https://github.com/dan-kiss-dev-this/crypto-tracker"},"Github"),r.a.createElement("a",{href:"https://www.linkedin.com/in/dan-kiss-dev-this/"},"Author"))),_=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={coinSelected:a.props.fullData.initialCoin},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"handleChange",value:function(){var e=Object(f.a)(m.a.mark(function e(t){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setState({coinSelected:t.target.value});case 2:return e.next=4,this.fetchCoinData();case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(f.a)(m.a.mark(function e(){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetchNews();case 2:return e.next=4,this.fetchCoinData();case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"fetchCoinData",value:function(){var e=Object(f.a)(m.a.mark(function e(){var t,a,n,r,c;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state.coinSelected,a="https://min-api.cryptocompare.com/data/histoday?fsym=".concat(t,"&tsym=USD&limit=30&api_key={42fe264b1c5770a241062077c69f096b9548e03d7b37b634e9fc2c736d33ec98}"),e.next=4,fetch(a);case 4:if(n=e.sent,e.prev=5,!n.ok){e.next=17;break}return e.next=9,n.json();case 9:return r=e.sent,e.next=12,r.Data;case 12:return c=e.sent,e.next=15,this.props.dispatch({type:"GET_COIN_DATA",value:c});case 15:return e.next=17,this.forceUpdate();case 17:e.next=23;break;case 19:e.prev=19,e.t0=e.catch(5),alert("Error occured reload page"),console.error(e.t0);case 23:case"end":return e.stop()}},e,this,[[5,19]])}));return function(){return e.apply(this,arguments)}}()},{key:"fetchNews",value:function(){var e=Object(f.a)(m.a.mark(function e(){var t,a;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"https://newsapi.org/v2/everything?sources=crypto-coins-news&apiKey=be6a84f3238641c2b3eb13361beffc88",e.next=3,fetch("https://newsapi.org/v2/everything?sources=crypto-coins-news&apiKey=be6a84f3238641c2b3eb13361beffc88");case 3:if(t=e.sent,e.prev=4,!t.ok){e.next=11;break}return e.next=8,t.json();case 8:return a=e.sent,e.next=11,this.props.dispatch({type:"GET_NEWS",value:a});case 11:e.next=17;break;case 13:e.prev=13,e.t0=e.catch(4),alert("Error occured reload page"),console.error(e.t0);case 17:case"end":return e.stop()}},e,this,[[4,13]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return null!==this.props.fullData.coinData?r.a.createElement("div",null,S,r.a.createElement("div",{className:"Chart-main"},r.a.createElement("h4",null,"Select Coin:",r.a.createElement("select",{onChange:function(t){e.handleChange(t)}},r.a.createElement("option",{value:"BTC"},"Bitcoin"),r.a.createElement("option",{value:"ETH"},"Ethereum"),r.a.createElement("option",{value:"XRP"},"Ripple"),r.a.createElement("option",{value:"LTC"},"Litecoin"),r.a.createElement("option",{value:"USDT"},"Tether"),r.a.createElement("option",{value:"XLM"},"Stellar"),r.a.createElement("option",{value:"XMR"},"Monero"))),r.a.createElement(g.TypeChooser,null,function(t){return r.a.createElement(j,{type:t,data:e.props.fullData.coinData})})),r.a.createElement(N,null)):r.a.createElement("div",{className:"App"},r.a.createElement(C.SkeletonTheme,{color:"gray",highlightColor:"white"},r.a.createElement("h1",null,r.a.createElement(D.a,{count:1,height:70}))),r.a.createElement("div",{className:"App-header"},r.a.createElement("img",{src:x.a,className:"App-logo",alt:"logo"}),r.a.createElement("a",{className:"App-link",href:"https://github.com/dan-kiss-dev-this/crypto-tracker",target:"_blank",rel:"noopener noreferrer"},"Loading...")))}}]),t}(r.a.Component),B=Object(A.b)(function(e){return{fullData:e}},null)(_),W=a(30),G=Object(W.b)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{initialCoin:"BTC",news:null,coinData:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_COIN_DATA":var a=t.value;return e.coinData=a,e;case"GET_NEWS":var n=t.value;return e.news=n.articles,e;default:return e}}),I=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(A.a,{store:G},r.a.createElement("div",{className:"App"},r.a.createElement(B,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(101);i.a.render(r.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},33:function(e,t,a){},50:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},52:function(e,t,a){e.exports=a(108)},57:function(e,t,a){}},[[52,2,1]]]);
//# sourceMappingURL=main.7c22dde4.chunk.js.map