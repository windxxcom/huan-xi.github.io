(function(t){function e(e){for(var i,s,o=e[0],c=e[1],l=e[2],d=0,p=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&p.push(a[s][0]),a[s]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],i=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(i=!1)}i&&(r.splice(e--,1),t=s(s.s=n[0]))}return t}var i={},a={app:0},r=[];function s(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=i,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(n,i,function(e){return t[e]}.bind(null,i));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"03ae":function(t,e,n){"use strict";var i=n("dee4"),a=n.n(i);a.a},"4d71":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);var i={};n.r(i),n.d(i,"getMusicList",(function(){return Y})),n.d(i,"getLink",(function(){return Z})),n.d(i,"save",(function(){return tt})),n.d(i,"download",(function(){return et})),n.d(i,"getKey",(function(){return nt})),n.d(i,"getInfo",(function(){return it}));n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Home")],1)},s=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"page"},[n("div",{staticClass:"flex",staticStyle:{position:"relative"}},[n("div",{staticClass:"search-box center"},[n("div",{staticClass:"bg"}),n("div",{staticClass:"search"},[n("el-input",{staticStyle:{width:"725px",height:"55px"},attrs:{placeholder:"搜索音乐/MV/歌单/歌手",size:"large"},on:{focus:t.getKey,input:t.getKey,blur:t.blur},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.searchMusic(e)}},model:{value:t.key,callback:function(e){t.key=e},expression:"key"}},[n("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:t.searchMusic},slot:"append"})],1)],1)]),t.showSearch?n("div",{staticStyle:{position:"absolute",top:"160px",left:"50%",transform:"translate(-50%, 0)","z-index":"999"}},[n("search-card",{attrs:{isRank:""===t.key,keys:t.keys},on:{keySearch:t.keySearch}})],1):t._e()]),n("div",{staticClass:"container"},[t._m(0),n("div",{staticClass:"musics"},[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:t.dataList}},[n("el-table-column",{attrs:{label:"序号",type:"index",width:"50"}}),n("el-table-column",{attrs:{label:"歌曲",width:"400"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("div",{staticClass:"flex-vertical-center"},[n("el-image",{staticStyle:{width:"55px",height:"55px","margin-right":"30px"},attrs:{src:e.row.pic,fit:"fit"}}),n("div",{staticClass:"center",staticStyle:{height:"55px"}},[n("span",{staticClass:"music-title"},[t._v(t._s(e.row.name))]),n("img",{staticStyle:{width:"30px",height:"16px","margin-left":"5px"},attrs:{src:"/assets/wusun.png"}}),n("img",{staticStyle:{width:"30px",height:"30px","margin-left":"5px"},attrs:{src:"/assets/mv.png"}})])],1)]}}])}),n("el-table-column",{attrs:{prop:"artist",label:"歌手",width:"120"}}),n("el-table-column",{attrs:{prop:"album",width:"200",label:"专辑"}}),n("el-table-column",{attrs:{prop:"songTimeMinutes",label:"时长"}}),n("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-link",{staticStyle:{"margin-right":"5px"},attrs:{type:"primary",underline:!1},on:{click:function(n){return t.fastDownloadMusic(e.row.rid,e.row.name)}}},[t._v("播放 ")]),n("el-link",{attrs:{type:"primary",underline:!1},on:{click:function(n){return t.downloadMusic(e.row)}}},[t._v("下载 ")])]}}])})],1)],1),t.page.total>0?n("div",{staticClass:"flex-reverse",staticStyle:{"margin-top":"20px"}},[n("m-pagination",{on:{refresh:t.searchMusic},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1):t._e()]),t.songSrc?n("div",{staticClass:"player"},[n("audio",{attrs:{src:t.songSrc,id:"musicMp3",autoplay:"",controls:""}})]):t._e(),n("div",[n("friendly-link")],1),t._m(1)])},c=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tabs"},[n("span",{staticClass:"result-text"},[t._v("搜索结果")]),n("div",{staticClass:"tabs-title"},[n("ul",[n("li",{staticClass:"active"},[t._v("单曲")]),n("li",[t._v("专辑")]),n("li",[t._v("MV")]),n("li",[t._v("歌单")]),n("li",[t._v("歌手")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer"},[t._v(" 本站内容音乐下载器根据您的指令搜索各音乐平台得到的链接列表，不代表本站赞成被搜索网站的内容或立场 如果版权人认为在本站放置您的作品有损您的利益，请"),n("a",{staticStyle:{"text-underline":"none",color:"#333333"},attrs:{href:"mailto:1355473748@qq.com"}},[t._v("联系")]),t._v("管理人员，本站确认后将会立即删除。"),n("span",{staticStyle:{color:"red"}},[t._v("本站所有资源仅供学习使用，请勿用于商业用途,下载后请二十四小时内删除")])])}];n("b0c0"),n("d3b7"),n("ddb0"),n("3ca3"),n("2b3d");var l=Object({NODE_ENV:"production",BASE_URL:"/"}).baseUrl?Object({NODE_ENV:"production",BASE_URL:"/"}).baseUrl:"https://music.chengfeng8.top/api",u="https://tb.xqcrm.com/api/open/auth",d="https://oauth.taobao.com/authorize?response_type=code&client_id=12686282&redirect_uri=".concat(u,"&view=web&state=short"),p={baseUrl:l,authUrl:d},f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"search-card"},[n("el-card",[t.isRank?n("div",[n("span",{staticStyle:{"font-size":"16px"}},[t._v("大家都在搜")]),n("ul",t._l(t.keys,(function(e,i){return n("li",{key:i,on:{click:function(n){return t.click(e)}}},[n("span",{class:t.textClass(i)},[t._v(t._s(i+1))]),t._v(t._s(e)+" ")])})),0)]):n("ul",t._l(t.keys,(function(e,i){return n("li",{key:i,on:{click:function(n){t.click(t.getKeyString(e))}}},[t._v(t._s(t.getKeyString(e))+" ")])})),0)])],1)},h=[],g=(n("4d63"),n("ac1f"),n("25f0"),n("466d"),{name:"SearchCard",props:{keys:{type:Array,default:function(){return[]}},isRank:{type:Boolean,default:function(){return!0}}},computed:{getKeyString:function(t){return function(t){var e=t.match(new RegExp("RELWORD=(.*?)\\s"));if(e&&e.length>1)return e[1]}}},methods:{click:function(t){this.$emit("keySearch",t)},textClass:function(t){return 0===t?"id id-0":1===t?"id id-1":2===t?"id id-2":"id id-gray"}}}),m=g,v=(n("c2b2"),n("2877")),y=Object(v["a"])(m,f,h,!1,null,"47301d15",null),b=y.exports,_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-pagination",{attrs:{"current-page":t.value.pageNo,"page-sizes":[10,20,50,100,200],"page-size":t.value.pageSize,"pager-count":5,layout:"total, sizes, prev, pager, next, jumper",total:t.value.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)},k=[],S={name:"mPagination",props:{value:Object},methods:{handleSizeChange:function(t){this.value.pageSize=t,this.value.pageNo=1,this.$emit("refresh")},handleCurrentChange:function(t){this.value.pageNo=t,this.$emit("refresh")}}},x=S,w=Object(v["a"])(x,_,k,!1,null,"90a13460",null),C=w.exports,O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"x-footer"},[n("div",{staticClass:"x-meida"},[n("div",{staticClass:"x-meida-img"},[n("img",{attrs:{src:t.footer.imgUrl}})]),n("div",{staticClass:"x-media-name"},[n("h3",[t._v(t._s(t.footer.title))]),n("h5",[t._v(t._s(t.footer.subTitle))])])]),n("div",{staticClass:"x-media-btn",on:{click:t.changeStart}},[n("audio",{attrs:{src:t.footer.songs,id:"musicMp3",autoplay:"",controls:""}}),n("img",{attrs:{src:t.isStore?t.footer.startIcon:t.footer.stopIcon}})]),n("div",{staticClass:"x-media-menu"}),n("div",{staticClass:"x-mp3-progress"},[n("div",{staticClass:"x-now-progress",style:{width:t.progress}})])])},M=[],j={props:["link"],data:function(){return{isStore:!0,progress:"0%",footer:{title:"一个旅行者和贵宾狗的故事",subTitle:"俗事杂谈论坛直播",startIcon:"./static/img/start.svg",stopIcon:"./static/img/stop.svg",imgUrl:"./static/img/header1.jpg",songs:"./static/music/aixiangsui.mp3"}}},mounted:function(){document.getElementById("musicMp3").pause(),this.changeProgress()},methods:{changeStart:function(){this.isStore=!this.isStore;var t=document.getElementById("musicMp3");this.isStore?t.pause():t.play()}}},E=j,$=Object(v["a"])(E,O,M,!1,null,null,null),z=$.exports,P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"friend-link center"},[n("div",[n("div",{staticClass:"flex",staticStyle:{"margin-left":"120px"}},[t._m(0),n("ul",{staticClass:"flex"},t._l(t.links,(function(e){return n("li",[n("a",{attrs:{href:e.link,target:"_blank"}},[t._v(t._s(e.name))])])})),0)])])])},L=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{width:"80px"}},[n("span",[t._v("友情链接")])])}],U=(n("9911"),{name:"FriendlyLink",created:function(){var t=this;this.musicService.getInfo().then((function(e){t.links=e.data.link}))},data:function(){return{links:[]}}}),I=U,N=(n("fd54"),Object(v["a"])(I,P,L,!1,null,"356769ad",null)),K=N.exports,R={name:"HelloWorld",components:{FriendlyLink:K,Player:z,MPagination:C,SearchCard:b},props:{msg:String},created:function(){},methods:{blur:function(){var t=this;setTimeout((function(){t.showSearch=!1}),300)},keySearch:function(t){this.key=t,this.searchMusic()},getKey:function(){var t=this;this.showSearch=!0,this.musicService.getKey({key:this.key}).then((function(e){t.keys=e.data}))},searchMusic:function(){var t=this;this.loading=!0,this.musicService.getMusicList({key:this.key,pageNo:this.page.pageNo,pageSize:this.page.pageSize}).then((function(e){200===e.code&&(t.dataList=e.data.list,t.page.total=parseInt(e.data.total))})).finally((function(){return t.loading=!1}))},fastDownloadMusic:function(t,e){var n=this;this.musicService.getLink({rid:t}).then((function(t){n.songSrc=t.data;var e=document.getElementById("musicMp3");n.isStore?e.pause():e.play()}))},downloadMusic:function(t){var e=this;delete t.mvpayinfo,delete t.payInfo;var n=this.$loading({lock:!0,text:"服务器正在合成资源"});this.musicService.save(t).then((function(n){0===n.code?window.open(p.baseUrl+"/music/download?artist="+t.artist+"&name="+t.name):e.$message.error("服务器准备资源失败")})).finally((function(){return n.close()}))}},data:function(){return{progress:0,isStore:!0,songSrc:"",showSearch:!1,loading:!1,key:"",keys:[],dataList:[],page:{total:0,pageNo:1,pageSize:20}}}},T=R,B=(n("03ae"),Object(v["a"])(T,o,c,!1,null,null,null)),D=B.exports,q={name:"App",components:{Home:D}},A=q,V=Object(v["a"])(A,r,s,!1,null,null,null),F=V.exports,H=(n("4d71"),n("99af"),n("bc3a")),J=n.n(H),W=n("4328"),G=n.n(W);function Q(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise((function(n,i){J.a.get(t,{params:e}).then((function(t){n(t.data)})).catch((function(t){!1!==t&&(void 0).$message.error("服务器请求错误"),i(t)}))}))}function X(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise((function(n,i){J.a.post(t,e).then((function(t){n(t.data)}),(function(t){!1!==t&&(void 0).$message.error("服务器请求错误"),i(t)}))}))}J.a.defaults.timeout=5e4,J.a.defaults.headers["Content-Type"]="application/x-www-form-urlencoded;charset=UTF-8",J.a.interceptors.request.use((function(t){return t.baseURL=p.baseUrl,"post"===t.method&&(t.data=G.a.stringify(t.data)),t}),(function(t){return Promise.reject(t)})),J.a.interceptors.response.use((function(t){return t}),(function(t){reject(t)}));var Y=function(t){return Q("/music/list",t)},Z=function(t){return Q("/music/link",t)},tt=function(t){return X("/music/save",t)},et=function(t){return Q("/music/download",t)},nt=function(t){return Q("/music/searchKey",t)},it=function(t){return Q("/info",t)},at=n("5c96"),rt=n.n(at);n("0fae");a["default"].use(rt.a),a["default"].config.productionTip=!1,a["default"].prototype.musicService=i,new a["default"]({render:function(t){return t(F)}}).$mount("#app")},"881b":function(t,e,n){},af71:function(t,e,n){},c2b2:function(t,e,n){"use strict";var i=n("af71"),a=n.n(i);a.a},dee4:function(t,e,n){},fd54:function(t,e,n){"use strict";var i=n("881b"),a=n.n(i);a.a}});
//# sourceMappingURL=app.2c1ca9c6.js.map