(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6999ab9c"],{"4cc3":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navigation"},[n("el-menu",{attrs:{"background-color":"#24292e","text-color":"rgba(255, 255, 255, 0.75)","active-text-color":"#fff","default-active":t.activeIndex,router:"",mode:"horizontal"}},[n("el-menu-item",{attrs:{index:"",disabled:""}},[t._v("\n\t\t\t\tOpenStar\n                ")]),t._l(t.$router.options.routes[0].children,function(e,i){return[e.leaf?n("el-submenu",{attrs:{index:i+""}},[n("template",{slot:"title"},[t._v(t._s(e.meta.name))]),t._l(e.children,function(e,i){return["DomainRuleSet"!==e.name?n("div",[e.leaf?n("el-submenu",{attrs:{index:"1"+i}},[n("template",{slot:"title"},[t._v(t._s(e.meta.name))]),t._l(e.children,function(e,i){return n("el-menu-item",{attrs:{index:e.path}},[t._v("\n\t\t\t\t\t\t\t\t\t"+t._s(e.meta.name)+"\n\t\t\t\t\t\t\t\t")])})],2):n("el-menu-item",{attrs:{index:e.path}},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(e.meta.name)+"\n\t\t\t\t\t\t\t")])],1):t._e()]})],2):n("el-menu-item",{attrs:{index:e.path}},[t._v("\n\t\t\t\t\t"+t._s(e.meta.name)+"\n\t\t\t\t")])]}),n("el-menu-item",{staticStyle:{float:"right"},attrs:{index:"",disabled:""}},[n("span",{staticStyle:{"margin-right":"10px",color:"lightgray"}},[t._v("\n\t\t\t\t\t欢迎您,admin  集群状态:"),n("strong",[t._v(" "+t._s(t.master))])]),n("el-button",{attrs:{size:"mini"},on:{click:t.reload}},[t._v("载入规则")]),n("el-button",{attrs:{size:"mini"},on:{click:t.saveAll}},[t._v("保存全部")]),n("el-tooltip",{attrs:{content:"想不到吧!"}},[n("span",{staticClass:"fa fa-desktop",staticStyle:{"margin-left":"20px","margin-right":"20px"},on:{click:t.isShow}})]),n("el-button",{directives:[{name:"show",rawName:"v-show",value:t.isCluster,expression:"isCluster"}],attrs:{size:"mini"},on:{click:t.restart}},[t._v("重启服务")]),n("el-button",{directives:[{name:"show",rawName:"v-show",value:t.isCluster,expression:"isCluster"}],attrs:{size:"mini"},on:{click:t.cluster}},[t._v("集群重启服务")]),n("el-button",{staticStyle:{color:"lightgray"},attrs:{type:"text"},on:{click:t.logout}},[n("span",{staticClass:"fa fa-sign-out"}),t._v(" 退出登录")])],1)],2)],1)},s=[],o=(n("7f7f"),{data:function(){return{master:window.localStorage.getItem("master")||"",isCluster:!1}},computed:{activeIndex:function(){return this.$route.name}},mounted:function(){this.initMaster()},methods:{isShow:function(){this.isCluster?this.isCluster=!1:this.isCluster=!0},cluster:function(){var t,e=this;this.$confirm("此操作将重启集群, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t=e.secReq(e.api.cluster,"post",{action:"reload"}),t.hasOwnProperty("code")&&"ok"===t.code?e.$notify({type:"success",title:"提示",message:"集群操作成功",duration:4e3}):e.$notify({type:"warning",title:"提示",message:t.msg,duration:4e3})}).catch(function(){e.$message({type:"info",message:"已取消"})})},reload:function(){var t,e=this;this.$confirm("此操作将重新载入规则, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t=e.secReq(e.api.save2js,"post",{action:"reload"}),t.hasOwnProperty("code")&&"ok"===t.code?(e.$notify({type:"success",title:"提示",message:"重新载入规则成功",duration:4e3}),window.location.reload()):e.$notify({type:"warning",title:"提示",message:t.msg,duration:4e3})}).catch(function(){e.$message({type:"info",message:"已取消"})})},restart:function(){var t,e=this;this.$confirm("此操作将重启服务, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t=e.secReq(e.api.reload,"post",{action:"reload"}),t.hasOwnProperty("code")&&"ok"===t.code?e.$notify({type:"success",title:"提示",message:"服务重启成功",duration:4e3}):e.$notify({type:"warning",title:"提示",message:t.msg,duration:4e3})}).catch(function(){e.$message({type:"info",message:"已取消"})})},logout:function(){var t;this.deleteCookie("openstar",null),t=this.secReq(this.api.logout,"get",{}),t.hasOwnProperty("code")&&"ok"===t.code?(window.localStorage.removeItem("version"),window.localStorage.removeItem("master"),this.$router.push("/login")):this.$notify({type:"warning",title:"提示",message:t.msg,duration:4e3})},saveAll:function(){var t;t=this.secReq(this.api.save2js+"?action=save&mod=all_Mod","get",{}),t.hasOwnProperty("code")&&"ok"===t.code?this.$notify({type:"success",title:"提示",message:"保存成功",duration:4e3}):this.$notify({type:"warning",title:"提示",message:t.msg,duration:4e3})},initMaster:function(){var t,e,n=window.localStorage.getItem("master");n||""!=n||(t={action:"get",mod:"base",id:"autoSync@state"},e=this.secReq(this.api.globalConfig,"get",t),e.hasOwnProperty("code")&&"ok"===e.code?window.localStorage.setItem("master",e.msg):window.localStorage.setItem("master",""))}}}),a=o,r=(n("6f8d"),n("2877")),c=Object(r["a"])(a,i,s,!1,null,null,null);e["default"]=c.exports},"6f8d":function(t,e,n){"use strict";var i=n("d10d"),s=n.n(i);s.a},"7f7f":function(t,e,n){var i=n("86cc").f,s=Function.prototype,o=/^\s*function ([^ (]*)/,a="name";a in s||n("9e1e")&&i(s,a,{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(t){return""}}})},d10d:function(t,e,n){}}]);