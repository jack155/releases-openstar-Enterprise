(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e6c89"],{"99e8":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("el-card",{attrs:{shadow:"never"}},[i("wafJumpDiag",{ref:"viewDiag",on:{diagAdd:t.setData}}),i("el-row",{staticStyle:{"margin-bottom":"20px","margin-left":"10px"},attrs:{gutter:10}},[i("div",{staticStyle:{width:"300px",float:"left"}},[i("el-input",{attrs:{"prefix-icon":"el-icon-search",placeholder:"请输入搜索内容"},model:{value:t.ruleSearch,callback:function(e){t.ruleSearch=e},expression:"ruleSearch"}})],1),i("div",{staticStyle:{float:"right"}},[i("el-button",{attrs:{type:"primary",size:"mini",round:""},on:{click:t.showDiag}},[t._v("添加规则")]),i("el-button",{attrs:{type:"primary",size:"mini",round:""},on:{click:t.setRulePriority}},[t._v("应用优先级")]),i("el-button",{attrs:{type:"primary",size:"mini",round:""},on:{click:t.saveRule}},[t._v("保存为JSON")])],1)]),i("wafDivider"),i("el-row",{staticStyle:{"margin-top":"20px","margin-bottom":"20px","margin-left":"10px"},attrs:{gutter:10}},[i("el-col",{attrs:{span:4}},[t._v("\n\t\t\t\t跳转配置: \n\t\t\t\t"),i("el-tooltip",{attrs:{content:t.state,placement:"top"}},[i("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949","active-value":"on","inactive-value":"off"},on:{change:t.stateClick},model:{value:t.state,callback:function(e){t.state=e},expression:"state"}})],1)],1),i("el-col",{attrs:{span:4}},[i("span",{staticStyle:{color:"red"}},[t._v("\n\t\t\t\t\t(点击应用生效)\n\t\t\t\t")]),t._v("\n\t\t\t\t当前数量：\n\t\t\t\t"),i("i",{staticClass:"red-fonts"},[t._v("\n\t\t\t\t\t"+t._s(t.count?t.count:0)+"\n\t\t\t\t")])])],1),i("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{"tooltip-effect":"dark",data:t.results}},[i("el-table-column",{attrs:{label:"ID",width:"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n\t\t\t\t\t\t"+t._s(e.row.id)+"\n\t\t\t\t")]}}])}),i("el-table-column",{attrs:{label:"匹配条件",width:"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("div",{staticStyle:{width:"100%","border-bottom":"1px solid #e7eaec"}},[t._v("\n\t\t\t\t\t\thost\n\t\t\t\t\t")]),i("div",[t._v("\n\t\t\t\t\t\turi\n\t\t\t\t\t")])]}}])}),i("el-table-column",{attrs:{label:"匹配符",width:"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("div",{directives:[{name:"show",rawName:"v-show",value:e.row.hostname,expression:"scope.row.hostname"}],staticStyle:{"border-bottom":"1px dashed #e7eaec"}},[t._v("\n\t\t\t\t\t\t"+t._s(t._f("match")(e.row.hostname))+"\n\t\t\t\t\t")]),i("div",{directives:[{name:"show",rawName:"v-show",value:e.row.uri,expression:"scope.row.uri"}],staticStyle:{"border-bottom":"1px dashed #e7eaec"}},[t._v("\n\t\t\t\t\t\t"+t._s(t._f("match")(e.row.uri))+"\n\t\t\t\t\t")]),i("div",{directives:[{name:"show",rawName:"v-show",value:e.row.referer,expression:"scope.row.referer"}]},[t._v("\n\t\t\t\t\t\t"+t._s(t._f("match")(e.row.referer))+"\n\t\t\t\t\t")]),i("div",{directives:[{name:"show",rawName:"v-show",value:e.row.header,expression:"scope.row.header"}]},[t._v("\n\t\t\t\t\t\t"+t._s(t._f("match")(e.row.header))+"\n\t\t\t\t\t")]),i("div",{directives:[{name:"show",rawName:"v-show",value:e.row.useragent,expression:"scope.row.useragent"}]},[t._v("\n\t\t\t\t\t\t"+t._s(t._f("match")(e.row.useragent))+"\n\t\t\t\t\t")]),i("div",{directives:[{name:"show",rawName:"v-show",value:e.row.cookie,expression:"scope.row.cookie"}]},[t._v("\n\t\t\t\t\t\t"+t._s(t._f("match")(e.row.cookie))+"\n\t\t\t\t\t")]),i("div",{directives:[{name:"show",rawName:"v-show",value:e.row.args,expression:"scope.row.args"}]},[t._v("\n\t\t\t\t\t\t"+t._s(t._f("match")(e.row.args))+"\n\t\t\t\t\t")]),i("div",{directives:[{name:"show",rawName:"v-show",value:e.row.post,expression:"scope.row.post"}]},[t._v("\n\t\t\t\t\t\t"+t._s(t._f("match")(e.row.post))+"\n\t\t\t\t\t")])]}}])}),i("el-table-column",{attrs:{label:"取反",width:"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("div",{staticStyle:{width:"100%","border-bottom":"1px solid #e7eaec"}},[t._v("\n\t\t\t\t\t\t"+t._s(void 0===e.row.hostname[2]?"false":e.row.hostname[2])+"\n\t\t\t\t\t")]),i("div",[t._v("\n\t\t\t\t\t\t"+t._s(void 0===e.row.uri[2]?"false":e.row.uri[2])+"\n\t\t\t\t\t")])]}}])}),i("el-table-column",{attrs:{label:"内容"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("div",{staticStyle:{width:"100%","border-bottom":"1px solid #e7eaec"}},[t._v("\n\t\t\t\t\t\t"+t._s(e.row.hostname[0])+"\n\t\t\t\t\t")]),i("div",[t._v("\n\t\t\t\t\t\t"+t._s(e.row.uri[0])+"\n\t\t\t\t\t")])]}}])}),i("el-table-column",{attrs:{label:"跳转参数","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n\t\t\t\t\t"+t._s(e.row.set_cookie)+"\n\t\t\t\t")]}}])}),i("el-table-column",{attrs:{label:"操作",width:"500"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button",{attrs:{type:"danger",plain:"",size:"mini"},on:{click:function(i){t.delData(e.$index+1)}}},[i("i",{staticClass:"fa fa-close"}),t._v(" 删除")]),i("el-button",{attrs:{type:"success",plain:"",size:"mini"},on:{click:function(i){t.editDiag(e.row,e.$index)}}},[i("i",{staticClass:"fa fa-edit"}),t._v(" 编辑")]),i("el-button",{attrs:{type:"danger",plain:"",size:"mini"},on:{click:function(i){t.up(e.$index)}}},[i("i",{staticClass:"fa fa-chevron-up"}),t._v(" 上移")]),i("el-button",{attrs:{type:"danger",plain:"",size:"mini"},on:{click:function(i){t.down(e.$index)}}},[i("i",{staticClass:"fa fa-chevron-down"}),t._v(" 下移")]),i("el-button",{attrs:{type:"danger",plain:"",size:"mini"},on:{click:function(i){t.upIndex(e.$index)}}},[i("i",{staticClass:"fa fa-hand-o-up"}),t._v(" 置顶")]),i("el-button",{attrs:{type:"danger",plain:"",size:"mini"},on:{click:function(i){t.downIndex(e.$index)}}},[i("i",{staticClass:"fa fa-hand-o-down"}),t._v(" 置底")])]}}])})],1)],1)],1)},a=[],n=(i("28a5"),function(){return i.e("chunk-24bbae2e").then(i.bind(null,"0882"))}),o=function(){return i.e("chunk-2d22d5b9").then(i.bind(null,"f6c6"))},r={data:function(){return{ruleSearch:"",temp:[],state:"on",count:0,results:[],editIndex:0}},mounted:function(){this.initData()},methods:{setRulePriority:function(){var t=this.secReq(this.api.globalConfig,"post",{action:"set",mod:"rewrite_Mod",value:JSON.stringify(this.results)});"ok"===t.code?this.$notify({type:"success",title:"提示",message:"应用成功",duration:4e3}):this.$notify({type:"warning",title:"提示",message:t.msg,duration:4e3})},saveRule:function(){var t=this.secReq(this.api.save2js,"post",{action:"save",mod:"rewrite_Mod"});t.hasOwnProperty("code")&&"ok"===t.code?this.$notify({type:"success",title:"提示",message:"应用成功",duration:4e3}):this.$notify({type:"warning",title:"提示",message:t.msg,duration:4e3})},initData:function(){var t=this.secReq(this.api.globalConfig,"post",{action:"get",mod:"rewrite_Mod"});if("ok"===t.code){this.count=t.msg.count,this.state=t.msg.state;var e=[];for(var i in t.msg)"state"!==i&&"count"!==i&&e.push(t.msg[i]);this.results=e,this.temp=e}else this.$notify({type:"warning",title:"提示",message:t.msg,duration:4e3})},stateClick:function(){var t,e;"on"===this.state?(t={action:"set",mod:"base",id:"rewrite_Mod",value:"on"},e=this.secReq(this.api.globalConfig,"post",t),"ok"==e.code?(this.state="on",this.$notify({type:"success",title:"提示",message:"应用成功",duration:4e3})):this.$notify({type:"warning",title:"提示",message:e.msg,duration:4e3})):"off"===this.state&&(t={action:"set",mod:"base",id:"rewrite_Mod",value:"off"},e=this.secReq(this.api.globalConfig,"post",t),"ok"==e.code?(this.state="off",this.$notify({type:"success",title:"提示",message:"应用成功",duration:4e3})):this.$notify({type:"warning",title:"提示",message:e.msg,duration:4e3}))},delData:function(t){var e,i;e={action:"del",mod:"rewrite_Mod",id:parseInt(t)},i=this.secReq(this.api.globalConfig,"post",e),"ok"==i.code?(this.$notify({type:"success",title:"提示",message:"应用成功",duration:4e3}),this.initData()):this.$notify({type:"warning",title:"提示",message:i.msg,duration:4e3})},up:function(t){0!==t&&this.swapItems(this.results,t,t-1)},upIndex:function(t){0!==t&&this.swapItems(this.results,t,0,"up")},down:function(t){t!==this.results.length-1&&this.swapItems(this.results,t,t+1)},downIndex:function(t){t!==this.results.length-1&&this.swapItems(this.results,t,0,"down")},swapItems:function(t,e,i,s){return"up"==s?(t.unshift(t[e]),t.splice(e+1,1),t):"down"==s?(t.push(t[e]),t.splice(e,1),t):(t[e]=t.splice(i,1,t[e])[0],t)},showDiag:function(){this.$refs.viewDiag.id="",this.$refs.viewDiag.state="off",this.$refs.viewDiag.results=[{condition:"host",symbol:"",negate:"false",content:"",jioRegData:"",disabled:!1},{condition:"uri",symbol:"",negate:"false",content:"",jioRegData:"",disabled:!1}],this.$refs.viewDiag.setCookie_name="",this.$refs.viewDiag.setCookie_const="",this.$refs.viewDiag.title="添加",this.$refs.viewDiag.pageVisible=!0},editDiag:function(t,e){var i=this.arr2obj(t.hostname,""),s=this.arr2obj(t.uri,"");i["condition"]="host",s["condition"]="uri",this.editIndex=e+1,this.$refs.viewDiag.id=t.id,this.$refs.viewDiag.state=t.state,this.$refs.viewDiag.results=[i,s],this.$refs.viewDiag.setCookie_name=t["set_cookie"][1],this.$refs.viewDiag.setCookie_const=t["set_cookie"][0],this.$refs.viewDiag.title="编辑",this.$refs.viewDiag.pageVisible=!0},arr2obj:function(t,e){var i,s,a,n,o,r;if(""===e){var c=t[1];if(""===c||"in"===c)s=t[1],n=t[0],r=!1;else if("@token@"===c)s=t[1],n=t[0],r=!0;else if("list"===c||"start_list"===c||"end_list"===c||"rein_list"===c||"in_list"===c||"len"===c){s=t[1];var l=[];for(var d in t[0])l.push(t[0][d]);n=l.toString(),r=!1}else"dict"===c?(s=t[1],n=JSON.stringify(t[0]),r=!1):(s="reg",o=t[1],r=!1,n=t[0]);a=t[2]}return i={condition:"",symbol:s,negate:a,content:n,jioRegData:o||"",disabled:r},i},formatData:function(t,e){var i,s,a,n,o=t["condition"],r=t["symbol"];if("adv"===e)if("headers"===o||"args"===o||"posts"===o||"post_form"===o){switch(r){case"":s=t["content"],a=r;break;case"reg":s=t["content"],a=t["jioRegData"];break;case"dict":s=JSON.parse(t["content"]),a=r;break;case"len":var c=t["content"].split(",");s=[parseInt(c[0]),parseInt(c[1])],a=r;break;case"@token@":s=t["content"],a=r;break;default:s=t["content"].split(","),a=r;break}n="false"!==t["negate"]&&!1!==t["negate"],i=[o,[s,a,t["headerArg"],n],t["connector"]]}else{switch(r){case"":s=t["content"],a=r;break;case"reg":s=t["content"],a=t["jioRegData"];break;case"dict":s=JSON.parse(t["content"]),a=r;break;case"len":c=t["content"].split(",");s=[parseInt(c[0]),parseInt(c[1])],a=r;break;case"@token@":s=t["content"],a=r;break;default:s=t["content"].split(","),a=r;break}n="false"!==t["negate"]&&!1!==t["negate"],i=[o,[s,a,n],t["connector"]]}else{switch(r){case"":s=t["content"],a=r;break;case"reg":s=t["content"],a=t["jioRegData"];break;case"dict":s=JSON.parse(t["content"]),a=r;break;case"len":c=t["content"].split(",");s=[parseInt(c[0]),parseInt(c[1])],a=r;break;case"@token@":s=t["content"],a=r;break;default:s=t["content"].split(","),a=r;break}n="false"!==t["negate"]&&!1!==t["negate"],i=[s,a,n]}return i},setData:function(t){var e,i,s,a,n,o,r;e=this.$refs.viewDiag.id,i=this.$refs.viewDiag.state,n=[this.$refs.viewDiag.setCookie_const,this.$refs.viewDiag.setCookie_name],s=this.formatData(this.$refs.viewDiag.results[0],""),a=this.formatData(this.$refs.viewDiag.results[1],""),"添加"===t?(o={id:e,state:i,action:"set_cookie",hostname:s,uri:a,set_cookie:n},r=this.secReq(this.api.globalConfig,"post",{action:"add",mod:"rewrite_Mod",value_type:"json",value:JSON.stringify(o)})):"编辑"===t&&(o={id:e,state:i,action:"set_cookie",hostname:s,uri:a,set_cookie:n},r=this.secReq(this.api.globalConfig,"post",{action:"set",mod:"rewrite_Mod",value_type:"json",value:JSON.stringify(o),id:parseInt(this.editIndex)})),"ok"===r.code?(this.$notify({type:"success",title:"提示",message:"应用成功",duration:4e3}),this.initData(),this.editIndex=0):this.$notify({type:"warning",title:"提示",message:r.msg,duration:4e3}),this.$refs.viewDiag.pageVisible=!1}},filters:{match:function(t){return t?""==t[1]?"等于":"in"==t[1]?"包含":"list"==t[1]?"数组":"in_list"==t[1]?"包含列表":"start_list"==t[1]?"开头列表":"end_list"==t[1]?"结尾列表":"dict"==t[1]?"字典":"rein_list"==t[1]?"包含列表":"len"==t[1]?"长度":"@token@"==t[1]?"token":"正则":""}},components:{wafDivider:n,wafJumpDiag:o},watch:{$route:function(t,e){},ruleSearch:{handler:function(t,e){this.results=""===t?this.temp:this.results.filter(function(e){if(e.id.indexOf(t)>=0)return!0})}}}},c=r,l=i("2877"),d=Object(l["a"])(c,s,a,!1,null,null,null);e["default"]=d.exports}}]);