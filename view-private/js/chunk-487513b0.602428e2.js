(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-487513b0"],{"06d0":function(t,e,a){"use strict";var i=a("850c"),n=a.n(i);n.a},"7f7f":function(t,e,a){var i=a("86cc").f,n=Function.prototype,r=/^\s*function ([^ (]*)/,s="name";s in n||a("9e1e")&&i(n,s,{configurable:!0,get:function(){try{return(""+this).match(r)[1]}catch(t){return""}}})},"850c":function(t,e,a){},d6df:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-row",{staticClass:"dashboard",attrs:{gutter:20}},[a("wafCard",{attrs:{card:t.f1}}),a("wafCard",{attrs:{card:t.f2}}),a("wafCard",{attrs:{card:t.f3}}),a("wafCard",{attrs:{card:t.f4}})],1),a("el-row",{staticClass:"custom-col",attrs:{gutter:20}},[a("el-col",{attrs:{span:24}},[a("el-card",{attrs:{shadow:"never"}},[a("el-col",{attrs:{span:20}},[a("div",{staticStyle:{width:"100%",height:"480px"},attrs:{id:"draw1"}})]),a("el-col",{attrs:{span:4}},t._l(t.mod_arr,function(e){return a("div",{style:t.styles.dataItem},[a("i",{staticClass:"fa fa-grav",style:t.styles.dataItemImg}),t._l(e,function(e,i){return a("div",{style:t.styles.dataItemUnit},[a("div",{style:t.styles.dataTitle},[t._v(t._s(i))]),a("div",{style:t.styles.dataAmount},[a("count-to",{attrs:{"start-val":0,"end-val":e,duration:3e3}})],1)])})],2)}))],1)],1),a("el-col",{staticClass:"custom-col",attrs:{span:24}},[a("el-card",{attrs:{shadow:"never"}},[a("div",{staticStyle:{"line-height":"30px",height:"30px"},attrs:{slot:"header"},slot:"header"},[a("div",{staticStyle:{float:"left"}},[a("label",{staticStyle:{cursor:"pointer",color:"rgb(24, 144, 255) !important"},on:{click:function(e){t.initData(7,7)}}},[t._v("7天")]),t._v("  \r\n\t\t\t\t\t\t"),a("label",{staticStyle:{cursor:"pointer",color:"rgb(24, 144, 255) !important"},on:{click:function(e){t.initData(30,30)}}},[t._v("30天")])]),a("div",{staticStyle:{float:"left","margin-left":"20px"}},[a("div",[a("el-date-picker",{staticStyle:{width:"200px"},attrs:{type:"date",placeholder:"选择日期",format:"yyyy-MM-dd","value-format":"yyyy-MM-dd"},model:{value:t.sh.date1,callback:function(e){t.$set(t.sh,"date1",e)},expression:"sh.date1"}}),t._v("\r\n\t\t\t\t\t\t\t-\r\n\t\t\t\t\t\t\t"),a("el-date-picker",{staticStyle:{width:"200px"},attrs:{type:"date",placeholder:"结束日期",format:"yyyy-MM-dd","value-format":"yyyy-MM-dd"},model:{value:t.sh.date2,callback:function(e){t.$set(t.sh,"date2",e)},expression:"sh.date2"}}),t._v("  \r\n\t\t\t\t\t\t\t"),a("el-button",{attrs:{type:"text"},on:{click:function(e){t.initData(8,8)}}},[t._v("查询")])],1)]),a("div",{staticStyle:{float:"right"}},[t._v("\r\n\t\t\t\t\t\t最小刻度："),a("label",{staticStyle:{cursor:"pointer",color:"rgb(24, 144, 255) !important"},on:{click:function(e){t.draw3("10m")}}},[t._v("10min")]),t._v("  \r\n\t\t\t\t\t\t"),a("label",{staticStyle:{cursor:"pointer",color:"rgb(24, 144, 255) !important"},on:{click:function(e){t.draw3("1h")}}},[t._v("1h")]),t._v("  \r\n\t\t\t\t\t\t"),a("label",{staticStyle:{cursor:"pointer",color:"rgb(24, 144, 255) !important"},on:{click:function(e){t.draw3("1d")}}},[t._v("1d")])])]),a("div",{staticStyle:{width:"100%",height:"480px"},attrs:{id:"wafTrend"}})])],1)],1),a("el-row",{staticClass:"custom-col",attrs:{gutter:20}},[a("el-col",{staticStyle:{"min-height":"300px"},attrs:{span:12}},[a("h3",[t._v("CC拦截")]),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.customRule}},[a("el-table-column",{staticStyle:{width:"50%"},attrs:{prop:"site",label:"拦截域名"}}),a("el-table-column",{staticStyle:{width:"50%"},attrs:{prop:"total",label:"拦截次数"}})],1)],1),a("el-col",{attrs:{span:12}},[a("h3",[t._v("自定义拦截")]),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.customRule2}},[a("el-table-column",{staticStyle:{width:"25%"},attrs:{prop:"host",label:"域名"}}),a("el-table-column",{staticStyle:{width:"25%"},attrs:{prop:"site",label:"拦截IP"}}),a("el-table-column",{staticStyle:{width:"25%"},attrs:{prop:"total",label:"拦截次数"}}),a("el-table-column",{staticStyle:{width:"25%"},attrs:{prop:"address",label:"地理位置"}})],1)],1)],1)],1)},n=[],r=(a("28a5"),a("3b2b"),a("7f7f"),a("164e")),s=a.n(r),o=(a("cebe"),a("ec1b")),l=a.n(o),d=function(){return a.e("chunk-1e99d797").then(a.bind(null,"8af7"))},c={dataItem:{display:"flex",flexBasis:"50%",alignItems:"center",marginTop:"20px"},dataItemImg:{color:"#1890ff",marginTop:"auto",marginBottom:"auto",fontSize:"60px",marginRight:"30px"},dataItemUnit:{height:"60px",display:"flex",flexBasis:"50%",flexDirection:"column",justifyContent:"space-between"},dataTitle:{color:"#666",fontSize:"12px"},dataAmount:{color:"#333",fontSize:"24px"}},u={data:function(){return{styles:c,mod_arr:[],f1:{img:"fa fa-user-o",header:"请求总数(次数)",content:0},f2:{img:"fa fa-free-code-camp",header:"拦截总数(次数)",content:0},f3:{img:"fa fa-hourglass-o",header:"自定义拦截(次数)",content:0},f4:{img:"fa fa-bolt",header:"CC防护(次数)",content:0},chartData:{chartPie_title_data:[],chartPie_inline_data:[],chartPie_outline_data:[]},option1:{tooltip:{trigger:"item",formatter:"{a} <br/>{b}: {c} ({d}%)"},legend:{orient:"vertical",x:"left",data:[]},series:[{name:"记录请求",type:"pie",selectedMode:"single",radius:["20%","30%"],center:["55%","50%"],label:{normal:{position:"inner"}},labelLine:{normal:{show:!1}},data:[]},{name:"waf拦截",type:"pie",radius:["40%","50%"],center:["55%","52%"],label:{normal:{formatter:"{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ",backgroundColor:"#eee",borderColor:"#aaa",borderWidth:1,borderRadius:4,rich:{a:{color:"#999",lineHeight:22,align:"center"},hr:{borderColor:"#aaa",width:"100%",borderWidth:.5,height:0},b:{fontSize:16,lineHeight:33},per:{color:"#eee",backgroundColor:"#334455",padding:[2,4],borderRadius:2}}}},data:[]}]},customRule:[],customRule2:[],sh:{date1:"",date2:""},waf_start_day:0,waf_end_day:0,waf_log:[],waf_deny:[],option6:{title:{text:""},tooltip:{trigger:"axis"},toolbox:{x:"80%",y:"top",show:!0,feature:{mark:{show:!0},saveAsImage:{show:!0},dataView:{show:!0}}},legend:{data:["waf_log","waf_deny","waf_req"]},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"category",boundaryGap:!1,data:[]},yAxis:[{type:"value"}],series:[{name:"waf_log",type:"line",data:[]},{name:"waf_deny",type:"line",data:[]},{name:"waf_req",type:"line",data:[]}]}}},mounted:function(){this.draw1(),this.draw3("init")},methods:{draw1:function(){var t=this.secReq(this.api.secGlobal,"get",{});if(t.hasOwnProperty("code")&&"ok"===t.code){this.customIn(t.msg),this.customCC(t.msg);var e=t.msg.waf;for(var a in e){var i=parseInt(e[a]),n=String(a);0!=i&&this.chartData.chartPie_outline_data.push({value:i,name:n})}var r={};for(var a in r.app_Mod=parseInt(e["app deny"]),r.useragent_Mod=parseInt(e["useragent deny"])+parseInt(e["useragent log"]),r.uri_Mod=parseInt(e["uri deny"])+parseInt(e["uri log"]),r.referer_Mod=parseInt(e["referer deny"])+parseInt(e["referer log"]),r.args_Mod=parseInt(e["args_data deny"])+parseInt(e["args_data log"]),r.post_Mod=parseInt(e["posts_data deny"])+parseInt(e["posts_data log"]),r.cookie_Mod=parseInt(e["cookie deny"])+parseInt(e["cookie log"]),r.header_Mod=parseInt(e["headers deny"])+parseInt(e["headers log"]),r.host_Mod=parseInt(e["host_method deny"])+parseInt(e["host_method log"]),r.ip_Mod=parseInt(e["ip deny"])+parseInt(e["ip log"]),r){i=parseInt(r[a]),n=String(a);this.chartData.chartPie_title_data.push(n),0!=i&&this.chartData.chartPie_inline_data.push({value:i,name:n,selected:!0})}this.f1.content=parseInt(t.msg["request count"]),this.f2.content=parseInt(e["app deny"])+parseInt(e["useragent deny"])+parseInt(e["uri deny"])+parseInt(e["referer deny"])+parseInt(e["posts_data deny"])+parseInt(e["cookie deny"])+parseInt(e["headers deny"])+parseInt(e["host_method deny"])+parseInt(e["ip deny"])+parseInt(e["args_data deny"]);var o=document.getElementById("draw1"),l=s.a.init(o);this.option1.legend.data=this.chartData.chartPie_title_data,this.option1.series[0].data=this.chartData.chartPie_inline_data,this.option1.series[1].data=this.chartData.chartPie_outline_data;var d=[];for(var c in this.chartData.chartPie_inline_data){var u={},h=this.chartData.chartPie_inline_data[c]["name"],p=this.chartData.chartPie_inline_data[c]["value"];u[h]=p,d.push(u)}this.mod_arr=d,l.setOption(this.option1)}else this.$notify({type:"warning",title:"提示",message:t.msg,duration:4e3})},draw3:function(t){if(0==this.waf_start_day)var e=new Date((new Date).getTime()-6048e5),a=new Date;else e=new Date(this.waf_start_day),a=new Date(this.waf_end_day);var i=this.DateFormt(e,"yyyy-MM-dd"),n=this.DateFormt(a,"yyyy-MM-dd");if("init"==String(t)){var r,o,l={key:"waf_log",stime:i,etime:n},d={key:"waf_deny",stime:i,etime:n};r=this.secReq(this.api.secTrendx,"get",l),o=this.secReq(this.api.secTrendx,"get",d),this.waf_log=r.msg,this.waf_deny=o.msg}var c={xData:[],waf_log:[],waf_deny:[],waf_req:[]};switch(String(t)){case"1d":var u=this.X_list(e,a,"1d");for(var h in u){var p=0,f=0,m=u[h];for(var y in m){var w=m[y];p+=this.waf_log[w]||0,f+=this.waf_deny[w]||0}var _=p+f;c["xData"].push(h),c["waf_log"].push(p),c["waf_deny"].push(f),c["waf_req"].push(_)}break;case"1h":u=this.X_list(e,a,"1h");for(var h in u){p=0,f=0,m=u[h];for(var y in m){w=m[y];p+=this.waf_log[w]||0,f+=this.waf_deny[w]||0}_=p+f;c["xData"].push(h),c["waf_log"].push(p),c["waf_deny"].push(f),c["waf_req"].push(_)}break;case"10m":u=this.X_list(e,a,"10m");for(var h in u){w=u[h],p=this.waf_log[w]||0,f=this.waf_deny[w]||0,_=p+f;c["xData"].push(w),c["waf_log"].push(p),c["waf_deny"].push(f),c["waf_req"].push(_)}break;default:u=this.X_list(e,a,"10m");for(var h in u){w=u[h],p=this.waf_log[w],f=this.waf_deny[w],_=p+f;c["xData"].push(w),c["waf_log"].push(p),c["waf_deny"].push(f),c["waf_req"].push(_)}break}var g=document.getElementById("wafTrend"),v=s.a.init(g);this.option6.xAxis.data=c["xData"],this.option6.series[0].data=c["waf_log"],this.option6.series[1].data=c["waf_deny"],this.option6.series[2].data=c["waf_req"],v.setOption(this.option6)},initData:function(t,e){if(7==t)this.waf_start_day=new Date((new Date).getTime()-6048e5),this.waf_end_day=new Date,this.draw3("init");else if(30==t)this.waf_start_day=new Date((new Date).getTime()-2592e6),this.waf_end_day=new Date,this.draw3("init");else{var a,i,n=/^(\d{4})-(\d{2})-(\d{2})$/,r=this.sh.date1,s=this.sh.date2,o=(n.exec(r),!1);n.test(r)&&RegExp.$2<=12&&RegExp.$3<=31&&(a=new Date(r+" 00:00:00"),o=!0),n.test(r)&&RegExp.$2<=12&&RegExp.$3<=31&&(i=new Date(s+" 00:00:00"),o=!0),o||this.$notify({type:"warning",title:"提示",message:"请输入正确的时间格式",duration:4e3}),i>a?(this.waf_start_day=a,this.waf_end_day=i,this.draw3("init")):this.$notify({type:"warning",title:"提示",message:"结束时间小于开始时间",duration:4e3})}},customIn:function(t){var e=t.host_mod,a=0,i=new Array,n=new Array,r=new Array;for(var s in e){a+=parseInt(e[s]);var o=s.split(" ")[0],l=e[s];if(-1===n.indexOf(o))n.push(o),r.push(l);else{var d=n.indexOf(o);r[d]=r[d]+l}}for(var s in n)i.push({site:n[s],total:r[s]});this.customRule=i,this.f3.content=a},customCC:function(t){var e=t.ip_mod,a=0,i=new Array;for(var n in e){var r,s,o=n.split(" ")[0].split("_");o.length>=2?(s=o[1],r=o[0]):(s=o[0],r="*"),a+=parseInt(e[n]);var l="http://ip-api.com/json/"+String(s)+"?lang=zh-CN",d=(t=this.secReq(l,"GET",""),"火星");t&&"success"==t["status"]&&(d=t["country"]+(t["city"]||"")),i.push({host:r,site:s,total:parseInt(e[n]),address:d})}this.customRule2=i,this.f4.content=a}},components:{wafCard:d,CountTo:l.a}},h=u,p=(a("06d0"),a("2877")),f=Object(p["a"])(h,i,n,!1,null,null,null);e["default"]=f.exports},ec1b:function(t,e,a){!function(e,a){t.exports=a()}(0,function(){return function(t){function e(i){if(a[i])return a[i].exports;var n=a[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,e),n.l=!0,n.exports}var a={};return e.m=t,e.c=a,e.i=function(t){return t},e.d=function(t,a,i){e.o(t,a)||Object.defineProperty(t,a,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var a=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(a,"a",a),a},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=2)}([function(t,e,a){var i=a(4)(a(1),a(5),null,null);t.exports=i.exports},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(3);e.default={props:{startVal:{type:Number,required:!1,default:0},endVal:{type:Number,required:!1,default:2017},duration:{type:Number,required:!1,default:3e3},autoplay:{type:Boolean,required:!1,default:!0},decimals:{type:Number,required:!1,default:0,validator:function(t){return t>=0}},decimal:{type:String,required:!1,default:"."},separator:{type:String,required:!1,default:","},prefix:{type:String,required:!1,default:""},suffix:{type:String,required:!1,default:""},useEasing:{type:Boolean,required:!1,default:!0},easingFn:{type:Function,default:function(t,e,a,i){return a*(1-Math.pow(2,-10*t/i))*1024/1023+e}}},data:function(){return{localStartVal:this.startVal,displayValue:this.formatNumber(this.startVal),printVal:null,paused:!1,localDuration:this.duration,startTime:null,timestamp:null,remaining:null,rAF:null}},computed:{countDown:function(){return this.startVal>this.endVal}},watch:{startVal:function(){this.autoplay&&this.start()},endVal:function(){this.autoplay&&this.start()}},mounted:function(){this.autoplay&&this.start(),this.$emit("mountedCallback")},methods:{start:function(){this.localStartVal=this.startVal,this.startTime=null,this.localDuration=this.duration,this.paused=!1,this.rAF=(0,i.requestAnimationFrame)(this.count)},pauseResume:function(){this.paused?(this.resume(),this.paused=!1):(this.pause(),this.paused=!0)},pause:function(){(0,i.cancelAnimationFrame)(this.rAF)},resume:function(){this.startTime=null,this.localDuration=+this.remaining,this.localStartVal=+this.printVal,(0,i.requestAnimationFrame)(this.count)},reset:function(){this.startTime=null,(0,i.cancelAnimationFrame)(this.rAF),this.displayValue=this.formatNumber(this.startVal)},count:function(t){this.startTime||(this.startTime=t),this.timestamp=t;var e=t-this.startTime;this.remaining=this.localDuration-e,this.useEasing?this.countDown?this.printVal=this.localStartVal-this.easingFn(e,0,this.localStartVal-this.endVal,this.localDuration):this.printVal=this.easingFn(e,this.localStartVal,this.endVal-this.localStartVal,this.localDuration):this.countDown?this.printVal=this.localStartVal-(this.localStartVal-this.endVal)*(e/this.localDuration):this.printVal=this.localStartVal+(this.localStartVal-this.startVal)*(e/this.localDuration),this.countDown?this.printVal=this.printVal<this.endVal?this.endVal:this.printVal:this.printVal=this.printVal>this.endVal?this.endVal:this.printVal,this.displayValue=this.formatNumber(this.printVal),e<this.localDuration?this.rAF=(0,i.requestAnimationFrame)(this.count):this.$emit("callback")},isNumber:function(t){return!isNaN(parseFloat(t))},formatNumber:function(t){t=t.toFixed(this.decimals),t+="";var e=t.split("."),a=e[0],i=e.length>1?this.decimal+e[1]:"",n=/(\d+)(\d{3})/;if(this.separator&&!this.isNumber(this.separator))for(;n.test(a);)a=a.replace(n,"$1"+this.separator+"$2");return this.prefix+a+i+this.suffix}},destroyed:function(){(0,i.cancelAnimationFrame)(this.rAF)}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(0),n=function(t){return t&&t.__esModule?t:{default:t}}(i);e.default=n.default,"undefined"!=typeof window&&window.Vue&&window.Vue.component("count-to",n.default)},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=0,n="webkit moz ms o".split(" "),r=void 0,s=void 0;if("undefined"==typeof window)e.requestAnimationFrame=r=function(){},e.cancelAnimationFrame=s=function(){};else{e.requestAnimationFrame=r=window.requestAnimationFrame,e.cancelAnimationFrame=s=window.cancelAnimationFrame;for(var o=void 0,l=0;l<n.length&&(!r||!s);l++)o=n[l],e.requestAnimationFrame=r=r||window[o+"RequestAnimationFrame"],e.cancelAnimationFrame=s=s||window[o+"CancelAnimationFrame"]||window[o+"CancelRequestAnimationFrame"];r&&s||(e.requestAnimationFrame=r=function(t){var e=(new Date).getTime(),a=Math.max(0,16-(e-i)),n=window.setTimeout(function(){t(e+a)},a);return i=e+a,n},e.cancelAnimationFrame=s=function(t){window.clearTimeout(t)})}e.requestAnimationFrame=r,e.cancelAnimationFrame=s},function(t,e){t.exports=function(t,e,a,i){var n,r=t=t||{},s=typeof t.default;"object"!==s&&"function"!==s||(n=t,r=t.default);var o="function"==typeof r?r.options:r;if(e&&(o.render=e.render,o.staticRenderFns=e.staticRenderFns),a&&(o._scopeId=a),i){var l=Object.create(o.computed||null);Object.keys(i).forEach(function(t){var e=i[t];l[t]=function(){return e}}),o.computed=l}return{esModule:n,exports:r,options:o}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",[t._v("\n  "+t._s(t.displayValue)+"\n")])},staticRenderFns:[]}}])})}}]);