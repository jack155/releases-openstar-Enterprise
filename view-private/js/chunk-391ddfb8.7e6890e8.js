(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-391ddfb8"],{"7f7f":function(t,e,l){var a=l("86cc").f,n=Function.prototype,i=/^\s*function ([^ (]*)/,s="name";s in n||l("9e1e")&&a(n,s,{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(t){return""}}})},b52b:function(t,e,l){"use strict";l.r(e);var a=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("el-dialog",{attrs:{title:t.title,visible:t.wafRuleVisible,width:"50%","before-close":t.handleClose,"close-on-click-modal":!1},on:{"update:visible":function(e){t.wafRuleVisible=e}}},[l("div",{staticClass:"modal-body col-sm-12"},[l("el-dialog",{attrs:{title:t.contentTitle+"选项:",visible:t.contentVisible,width:"45%","append-to-body":""},on:{"update:visible":function(e){t.contentVisible=e}}},[l("div",{directives:[{name:"show",rawName:"v-show",value:t.headerVisible,expression:"headerVisible"}],staticStyle:{"margin-bottom":"20px"}},[l("el-row",{staticStyle:{"margin-bottom":"20px"},attrs:{gutter:20}},[l("el-col",{attrs:{span:12}},[l("label",{staticClass:"label",staticStyle:{"line-height":"40px"}},[t._v(t._s(t.headerTitle)+"属性:\n\t\t\t\t\t\t\t\t"),l("el-input",{staticStyle:{width:"70%"},attrs:{placeholder:"请输入内容"},model:{value:t.headerContentArr[0],callback:function(e){t.$set(t.headerContentArr,0,e)},expression:"headerContentArr[0]"}})],1)]),l("el-col",{attrs:{span:12}},[l("label",{staticClass:"label",staticStyle:{"line-height":"40px"}},[t._v(t._s(t.headerTitle)+"位置/值:\n\t\t\t\t\t\t\t\t"),l("el-input",{staticStyle:{width:"60%"},attrs:{placeholder:"请输入内容"},model:{value:t.headerContentArr[1],callback:function(e){t.$set(t.headerContentArr,1,e)},expression:"headerContentArr[1]"}})],1)]),l("div",{directives:[{name:"show",rawName:"v-show",value:"headers"===t.headerTitle||"args"===t.headerTitle||"posts"===t.headerTitle,expression:"headerTitle === 'headers' || headerTitle === 'args' || headerTitle === 'posts' "}]},[l("el-col",{staticStyle:{"margin-top":"20px"},attrs:{span:24}},[l("h5",[l("span",{staticStyle:{color:"red"}},[t._v("*")]),t._v("   "+t._s(t.headerTitle)+": 查找的"+t._s(t.headerTitle)+"属性；默认参数：string")])]),l("el-col",{attrs:{span:24}},[l("h5",[l("span",{staticStyle:{color:"red"}},[t._v("*")]),t._v("   "+t._s(t.headerTitle)+"出现位置/值：默认参数any/end；")])])],1),l("div",{directives:[{name:"show",rawName:"v-show",value:"post_form"===t.headerTitle,expression:"headerTitle === 'post_form' "}]},[l("el-col",{staticStyle:{"margin-top":"20px"},attrs:{span:24}},[l("h5",[l("span",{staticStyle:{color:"red"}},[t._v("*")]),t._v("   "+t._s(t.headerTitle)+"属性： 表单名称（name） ")])]),l("el-col",{attrs:{span:24}},[l("h5",[l("span",{staticStyle:{color:"red"}},[t._v("*")]),t._v("   "+t._s(t.headerTitle)+"位置：取值范围 [1 - 4] 1，表示 检测 name（名称） 2，表示 检测 上传文件名称 3，表示 检测 上传文档类型 4，表示 检测 上传文档内容")])])],1)],1),l("div",{directives:[{name:"show",rawName:"v-show",value:""===t.contentTitle,expression:"contentTitle === '' "}],staticStyle:{"margin-top":"20px","margin-bottom":"20px"}},[l("label",{staticClass:"label",staticStyle:{"line-height":"40px"}},[t._v("匹配的内容等于:\n\t\t\t\t\t\t\t"),l("el-input",{staticStyle:{width:"80%"},attrs:{placeholder:"请输入内容"},model:{value:t.headerValue,callback:function(e){t.headerValue=e},expression:"headerValue"}})],1)]),l("div",{directives:[{name:"show",rawName:"v-show",value:"in"===t.contentTitle,expression:"contentTitle === 'in' "}],staticStyle:{"margin-top":"20px","margin-bottom":"20px"}},[l("label",{staticClass:"label",staticStyle:{"line-height":"40px"}},[t._v("匹配的内容包含:\n\t\t\t\t\t\t\t"),l("el-input",{staticStyle:{width:"80%"},attrs:{placeholder:"请输入内容"},model:{value:t.headerValue,callback:function(e){t.headerValue=e},expression:"headerValue"}})],1)]),l("div",{directives:[{name:"show",rawName:"v-show",value:"@token@"===t.contentTitle,expression:"contentTitle === '@token@' "}],staticStyle:{"margin-top":"20px","margin-bottom":"20px"}},[l("el-input",{attrs:{placeholder:"true",disabled:""},model:{value:t.headerValue,callback:function(e){t.headerValue=e},expression:"headerValue"}})],1)],1),l("div",{directives:[{name:"show",rawName:"v-show",value:"reg"===t.contentTitle,expression:"contentTitle === 'reg' "}]},[l("el-row",[l("el-col",{attrs:{span:24}},[l("div",{staticStyle:{"margin-bottom":"10px"}},[t._v("正则参数：")]),l("el-checkbox-group",{model:{value:t.regCheckList,callback:function(e){t.regCheckList=e},expression:"regCheckList"}},t._l(t.jioContent,function(e,a){return l("div",{key:a},[a<3?l("el-col",{attrs:{span:8}},[l("el-checkbox",{attrs:{label:e}},[t._v(" "+t._s(e.label)+" ")])],1):l("div",[l("div",3===a?[l("el-col",{staticStyle:{"margin-top":"10px","margin-bottom":"10px"},attrs:{span:24}},[l("wafDivider")],1)]:[l("el-col",{attrs:{span:12}},[l("el-checkbox",{attrs:{label:e}},[t._v(" "+t._s(e.label)+" ")])],1)],1)])],1)}))],1)],1),l("el-row",[l("el-col",{attrs:{span:24}},[l("div",{staticStyle:{"margin-bottom":"10px","margin-top":"20px"}},[t._v("正则匹配内容：")]),l("div",[l("el-input",{attrs:{placeholder:"请输入正则表达式"},model:{value:t.regContentValue,callback:function(e){t.regContentValue=e},expression:"regContentValue"}})],1)])],1)],1),l("div",{directives:[{name:"show",rawName:"v-show",value:"list"===t.contentTitle||"in_list"===t.contentTitle||"start_list"===t.contentTitle||"end_list"===t.contentTitle||"rein_list"===t.contentTitle,expression:"contentTitle === 'list' || contentTitle === 'in_list' || contentTitle === 'start_list' || contentTitle === 'end_list' || contentTitle === 'rein_list' "}]},[l("div",{staticStyle:{width:"100%"}},[l("el-input",{staticStyle:{width:"80%"},attrs:{placeholder:"请输入内容"},model:{value:t.listContentValue,callback:function(e){t.listContentValue=e},expression:"listContentValue"}}),l("el-button",{staticStyle:{"margin-left":"20px"},attrs:{type:"primary",round:""},on:{click:function(e){t.addList(t.contentTitle)}}},[t._v("添加")])],1),t._l(t.listContentArr,function(e,a){return l("div",{staticStyle:{width:"100%","margin-top":"10px"}},[l("el-input",{staticStyle:{width:"80%"},attrs:{value:e,disabled:""}}),l("el-button",{staticStyle:{"margin-left":"20px"},attrs:{type:"danger",round:""},on:{click:function(e){t.removeList(t.contentTitle,a)}}},[t._v("删除")])],1)})],2),l("div",{directives:[{name:"show",rawName:"v-show",value:"dict"===t.contentTitle,expression:"contentTitle === 'dict' "}]},[l("div",{staticStyle:{width:"100%"}},[l("el-input",{staticStyle:{width:"60%"},attrs:{placeholder:"请输入内容"},model:{value:t.dictContentValue,callback:function(e){t.dictContentValue=e},expression:"dictContentValue"}}),l("select",{directives:[{name:"model",rawName:"v-model",value:t.dictNegate,expression:"dictNegate"}],staticStyle:{width:"20%",height:"39px"},on:{change:function(e){var l=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.dictNegate=e.target.multiple?l:l[0]}}},[l("option",{attrs:{value:"true"}},[t._v("true")]),l("option",{attrs:{value:"false"}},[t._v("false")])]),l("el-button",{staticStyle:{"margin-left":"20px"},attrs:{type:"primary",round:""},on:{click:function(e){t.addList(t.contentTitle)}}},[t._v("添加")])],1),t._l(t.dictContentArr,function(e,a,n){return l("div",{staticStyle:{width:"100%","margin-top":"10px"}},[l("div",{staticStyle:{width:"80%",height:"40px",border:"1px solid #dcdfe6","text-align":"center","line-height":"40px",display:"inline-block"}},[t._v(t._s(a)+":"+t._s(e))]),l("el-button",{staticStyle:{"margin-left":"20px"},attrs:{type:"danger",round:""},on:{click:function(e){t.removeList(t.contentTitle,a)}}},[t._v("删除")])],1)})],2),l("div",{directives:[{name:"show",rawName:"v-show",value:"len"===t.contentTitle,expression:"contentTitle === 'len' "}]},[l("el-row",{attrs:{gutter:20}},[l("el-col",{attrs:{span:12}},[l("label",{staticClass:"label",staticStyle:{height:"40px","line-height":"40px"}},[t._v("值1:\n\t\t\t\t\t\t\t\t"),l("el-input",{staticStyle:{width:"80%"},model:{value:t.lenContentArr[0],callback:function(e){t.$set(t.lenContentArr,0,e)},expression:"lenContentArr[0]"}})],1)]),l("el-col",{attrs:{span:12}},[l("label",{staticClass:"label",staticStyle:{height:"40px","line-height":"40px"}},[t._v("值2:\n\t\t\t\t\t\t\t\t"),l("el-input",{staticStyle:{width:"80%"},model:{value:t.lenContentArr[1],callback:function(e){t.$set(t.lenContentArr,1,e)},expression:"lenContentArr[1]"}})],1)]),l("el-col",{staticStyle:{"margin-top":"10px"},attrs:{span:24}},[l("h5",[l("span",{staticStyle:{color:"red"}},[t._v("* ")]),l("span",[t._v("值1: 表示长度等于大于的数字(>=); ")])])]),l("el-col",{attrs:{span:24}},[l("h5",[l("span",{staticStyle:{color:"red"}},[t._v("* ")]),l("span",[t._v("值2:表示长度等于小于的数字(<=)")])])])],1)],1),l("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[l("el-button",{attrs:{type:"primary"},on:{click:t.pushContent}},[t._v("确 定")]),l("el-button",{on:{click:t.cancelContent}},[t._v("取 消")])],1)]),l("el-row",[l("el-col",{staticStyle:{"margin-bottom":"20px"},attrs:{span:24}},[l("label",{staticClass:"label",staticStyle:{"line-height":"40px"}},[t._v("规则名称:\n\t\t\t\t\t\t"),l("el-input",{staticStyle:{width:"80%"},attrs:{placeholder:"规则名称"},model:{value:t.ruleName,callback:function(e){t.ruleName=e},expression:"ruleName"}})],1)]),l("el-col",{staticStyle:{"margin-bottom":"20px"},attrs:{span:24}},[l("label",{staticClass:"label",staticStyle:{"line-height":"40px"}},[t._v("规则类型:\n\t\t\t\t\t\t"),l("el-select",{attrs:{placeholder:"请选择"},model:{value:t.typeValue,callback:function(e){t.typeValue=e},expression:"typeValue"}},t._l(this.$store.state.typeOptions,function(t){return l("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}))],1)]),l("el-col",{staticStyle:{"margin-bottom":"20px"},attrs:{span:24}},[l("label",{staticClass:"label",staticStyle:{"line-height":"40px"}},[t._v("规则状态:\n\t\t\t\t\t\t"),l("el-switch",{model:{value:t.ruleState,callback:function(e){t.ruleState=e},expression:"ruleState"}})],1)]),l("el-col",{staticStyle:{"margin-bottom":"20px"},attrs:{span:24}},[l("h3",[t._v("基础配置组")]),l("wafDivider"),l("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.ruleBasicTable}},[l("el-table-column",{attrs:{label:"匹配条件",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n\t\t\t\t\t\t\t\t"+t._s(e.row.condition)+"\n\t\t\t\t\t\t\t")]}}])}),l("el-table-column",{attrs:{label:"匹配符号",width:"300"},scopedSlots:t._u([{key:"default",fn:function(e){return[l("el-input",{attrs:{disabled:!0},model:{value:e.row.symbol,callback:function(l){t.$set(e.row,"symbol",l)},expression:"scope.row.symbol"}},[l("el-select",{staticStyle:{width:"160px"},attrs:{slot:"prepend"},on:{change:function(l){t.selectSymbol(e.$index)}},slot:"prepend",model:{value:e.row.symbol,callback:function(l){t.$set(e.row,"symbol",l)},expression:"scope.row.symbol"}},t._l(t.symbol_options,function(t){return l("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}))],1),"reg"==e.row.symbol?l("div",{staticStyle:{color:"red"}},[t._v("\n\t\t\t\t\t\t\t\t\t"+t._s(e.row.jioRegData)+"\n\t\t\t\t\t\t\t\t")]):t._e()]}}])}),l("el-table-column",{attrs:{label:"取反",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[l("el-select",{model:{value:e.row.negate,callback:function(l){t.$set(e.row,"negate",l)},expression:"scope.row.negate"}},t._l(t.negate_options,function(t){return l("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}))]}}])}),l("el-table-column",{attrs:{label:"内容","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[l("div",{on:{click:function(l){t.selectContent(e.row,e.$index)}}},["@token@"==e.row.symbol?l("div",[l("el-input",{attrs:{placeholder:"请输入内容",disabled:e.row.disabled},model:{value:e.row.content,callback:function(l){t.$set(e.row,"content",l)},expression:"scope.row.content"}})],1):l("div",[l("el-input",{attrs:{placeholder:"请输入内容"},model:{value:e.row.content,callback:function(l){t.$set(e.row,"content",l)},expression:"scope.row.content"}})],1)])]}}])})],1)],1),l("el-col",{staticStyle:{"margin-bottom":"20px"},attrs:{span:24}},[l("el-col",{attrs:{span:20}},[l("h3",[t._v("高级规则配置组")])]),l("el-col",{attrs:{span:4}},[l("el-button",{staticStyle:{float:"right","margin-top":"15px"},attrs:{type:"primary",size:"mini",plain:""},on:{click:t.addAdvanceObj}},[t._v("增加")])],1),l("el-col",{attrs:{span:24}},[l("wafDivider")],1),l("el-col",{attrs:{span:24}},[l("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.ruleAdvanceTable}},[l("el-table-column",{attrs:{label:"匹配条件",width:"140"},scopedSlots:t._u([{key:"default",fn:function(e){return[l("el-select",{on:{change:function(l){t.selectAppOption(e.$index)}},model:{value:e.row.condition,callback:function(l){t.$set(e.row,"condition",l)},expression:"scope.row.condition"}},t._l(t.app_location_options,function(t){return l("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}))]}}])}),l("el-table-column",{attrs:{label:"匹配符",width:"260"},scopedSlots:t._u([{key:"default",fn:function(e){return[l("el-input",{attrs:{disabled:!0},model:{value:e.row.symbol,callback:function(l){t.$set(e.row,"symbol",l)},expression:"scope.row.symbol"}},[l("el-select",{staticStyle:{width:"160px"},attrs:{slot:"prepend"},on:{change:function(l){t.selectSymbol(e.$index)}},slot:"prepend",model:{value:e.row.symbol,callback:function(l){t.$set(e.row,"symbol",l)},expression:"scope.row.symbol"}},t._l(t.symbol_options,function(t){return l("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}))],1),"reg"==e.row.symbol?l("div",{staticStyle:{color:"red"}},[t._v("\n\t\t\t\t\t\t\t\t\t\t"+t._s(e.row.jioRegData)+"\n\t\t\t\t\t\t\t\t\t")]):t._e()]}}])}),l("el-table-column",{attrs:{label:"取反",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[l("el-select",{model:{value:e.row.negate,callback:function(l){t.$set(e.row,"negate",l)},expression:"scope.row.negate"}},t._l(t.negate_options,function(t){return l("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}))]}}])}),l("el-table-column",{attrs:{label:"连接符",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[l("el-select",{model:{value:e.row.connector,callback:function(l){t.$set(e.row,"connector",l)},expression:"scope.row.connector"}},t._l(t.connector_options,function(t){return l("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}))]}}])}),l("el-table-column",{attrs:{label:"内容","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[l("div",{on:{click:function(l){t.selectAdvContent(e.row,e.$index)}}},[l("el-input",{attrs:{placeholder:"请输入内容"},model:{value:e.row.content,callback:function(l){t.$set(e.row,"content",l)},expression:"scope.row.content"}})],1)]}}])}),l("el-table-column",{attrs:{label:"操作符",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[l("el-button",{attrs:{type:"danger",size:"mini",plain:""},on:{click:function(l){t.delAdvanceTable(e.$index)}}},[t._v("删除")])]}}])})],1)],1)],1),l("el-col",{staticStyle:{"margin-bottom":"20px"},attrs:{span:24}},[l("h3",[t._v("高级动作")]),l("wafDivider"),l("el-col",{staticStyle:{"margin-top":"20px"}},[l("el-select",{attrs:{placeholder:"请选择"},model:{value:t.action,callback:function(e){t.action=e},expression:"action"}},t._l(t.action_options,function(t){return l("el-option",{key:t.value,attrs:{label:t.label,value:t.value,disabled:t.disabled}})}))],1),l("el-col",[l("div",{directives:[{name:"show",rawName:"v-show",value:"rehtml"===t.action,expression:"action === 'rehtml' "}],staticStyle:{"margin-top":"20px"}},[l("el-input",{staticStyle:{width:"80%"},attrs:{placeholder:"请输入返回的html"},model:{value:t.rehtml,callback:function(e){t.rehtml=e},expression:"rehtml"}})],1),l("div",{directives:[{name:"show",rawName:"v-show",value:"refile"===t.action,expression:"action === 'refile' "}]},[l("el-col",[l("label",{attrs:{for:""}},[t._v("返回文件名称\n\t\t\t\t\t\t\t\t\t"),l("el-input",{staticStyle:{width:"80%"},attrs:{placeholder:"请输入内容"},model:{value:t.refile[0],callback:function(e){t.$set(t.refile,0,e)},expression:"refile[0]"}})],1)]),l("el-col",{staticStyle:{"margin-top":"20px","margin-bottom":"20px"}},[l("label",{attrs:{for:""}},[t._v("返回文件类型\n\t\t\t\t\t\t\t\t\t"),l("el-input",{staticStyle:{width:"80%"},attrs:{placeholder:"请输入内容"},model:{value:t.refile[1],callback:function(e){t.$set(t.refile,1,e)},expression:"refile[1]"}})],1)]),l("h5",[l("span",{staticStyle:{color:"red"}},[t._v("*")]),t._v("   文件名称：./index/ 目录下的文件名称 响应：取值范围 [http 响应头]")])],1),l("div",{directives:[{name:"show",rawName:"v-show",value:"func"===t.action,expression:"action === 'func' "}]},[l("el-col",[l("label",{attrs:{for:""}},[t._v("返回函数名称\n\t\t\t\t\t\t\t\t\t"),l("el-input",{staticStyle:{width:"80%"},attrs:{placeholder:"请输入内容"},model:{value:t.func[0],callback:function(e){t.$set(t.func,0,e)},expression:"func[0]"}})],1)]),l("el-col",{staticStyle:{"margin-top":"20px","margin-bottom":"20px"}},[l("label",{attrs:{for:""}},[t._v("返回函数参数\n\t\t\t\t\t\t\t\t\t"),l("el-input",{staticStyle:{width:"80%"},attrs:{type:"textarea",rows:"8",placeholder:"请输入内容"},model:{value:t.func[1],callback:function(e){t.$set(t.func,1,e)},expression:"func[1]"}})],1)]),l("h5",[l("span",{staticStyle:{color:"red"}},[t._v("*")]),t._v("   函数名称：./lib/pub_func.lua 文件中的函数A 传递参数：默认会将 base_msg 传递，这里配置的参数是第二个参数 使用数组方式，支持数组套用")])],1)])],1)],1)],1),l("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[l("el-button",{on:{click:function(e){t.wafRuleVisible=!1}}},[t._v("取 消")]),l("el-button",{directives:[{name:"show",rawName:"v-show",value:"添加"===t.title,expression:"title === '添加' "}],attrs:{type:"primary"},on:{click:t.addAdvanSubmit}},[t._v("添加")]),l("el-button",{directives:[{name:"show",rawName:"v-show",value:"编辑"===t.title,expression:"title === '编辑' "}],attrs:{type:"primary"},on:{click:t.addAdvanSubmit}},[t._v("编辑")])],1)])},n=[],i=(l("28a5"),l("7f7f"),l("6b54"),l("a481"),function(){return l.e("chunk-24bbae2e").then(l.bind(null,"0882"))}),s={data:function(){return{title:"",wafRuleVisible:!1,editIndex:0,typeValue:"",ruleName:"",ruleState:"",ruleBasicTable:[{condition:"host",symbol:"",negate:"false",content:"",jioRegData:"",disabled:!1},{condition:"uri",symbol:"",negate:"false",content:"",jioRegData:"",disabled:!1}],ruleAdvanceTable:[],action:"deny",rehtml:"",refile:[],func:[],negate_options:[{value:!1,label:"false"},{value:!0,label:"true"}],symbol_options:[{value:"reg",label:"正则"},{value:"in",label:"包含"},{value:"list",label:"数组"},{value:"in_list",label:"包含列表"},{value:"start_list",label:"开头列表"},{value:"end_list",label:"结尾列表"},{value:"dict",label:"字典"},{value:"",label:"等于"},{value:"rein_list",label:"包含扩展列表"},{value:"len",label:"长度"},{value:"@token@",label:"token"}],jioContent:[{label:"大小写敏感 i",name:"i",index:0},{label:"启用JIT编译 j",name:"j",index:1},{label:"缓存 o",name:"o",index:2},{label:"单行模式 s",name:"s",index:3},{label:"锚定模式 a",name:"a",index:4},{label:"DFA模式 d",name:"d",index:5},{label:"扩展模式 x",name:"x",index:6},{label:"允许重复命名子模式 D",name:"D",index:7},{label:"启用Javescript兼容模式 J",name:"J",index:8},{label:"UTF-8模式 u * 需要PCRE库加上--enable-utf8",name:"u",index:9},{label:"UTF-8模式 U  * 同u模式，但不进行字符串有效性检查",name:"U",index:10}],connector_options:[{value:"and",label:"and"},{value:"or",label:"or"}],action_options:[{value:"log",label:"log"},{value:"allow",label:"allow"},{value:"deny",label:"deny"},{value:"rehtml",label:"rehtml"},{value:"refile",label:"refile"},{value:"func",label:"func"}],contentTitle:"",contentVisible:!1,contentIndex:0,regCheckList:[],regContentValue:"",listContentValue:"",listContentArr:[],dictContentValue:"",dictNegate:!0,dictContentArr:{},lenContentArr:[0,0],formTitle:"",headerTitle:"",headerVisible:!1,headerValue:"",headerContentArr:["sessionss","any"],app_location_options:[{value:"ip",label:"ip"},{value:"remeteIp",label:"remeteIp"},{value:"serverIp",label:"serverIp"},{value:"http_host",label:"http_host"},{value:"server_name",label:"server_name"},{value:"host",label:"host"},{value:"method",label:"method"},{value:"referer",label:"referer"},{value:"useragent",label:"useragent"},{value:"cookie",label:"cookie"},{value:"request_uri",label:"request_uri"},{value:"query_string",label:"query_string"},{value:"http_content-type",label:"http_content-type"},{value:"headers_data",label:"headers_data"},{value:"args_data",label:"args_data"},{value:"posts_data",label:"posts_data"},{value:"post_all",label:"post_all"},{value:"headers",label:"headers(表单table)"},{value:"args",label:"args(table)"},{value:"posts",label:"posts(table)"},{value:"post_form",label:"post_form(表单table)"}]}},methods:{handleClose:function(t){this.$confirm("确认关闭？").then(function(e){t()}).catch(function(t){})},selectSymbol:function(t){this.ruleBasicTable[t]["content"]="",this.regCheckList=[],this.regContentValue="",this.listContentArr="",this.listContentArr=[],this.dictContentValue="",this.dictContentArr={},this.lenContentArr=[0,0]},selectContent:function(t,e){this.formTitle="basic";var l=String(t.symbol);switch(l){case"":this.contentIndex=e,this.contentTitle=l,this.contentVisible=!1;break;case"in":this.contentIndex=e,this.contentTitle=l,this.contentVisible=!1;break;case"@token@":this.contentIndex=e,this.contentTitle=l,this.contentVisible=!1,this.ruleBasicTable[e]["content"]="true",this.ruleBasicTable[e]["disabled"]=!0;break;default:this.contentIndex=e,this.contentTitle=l,this.contentVisible=!0;break}},addList:function(t){switch(t){case"dict":"true"==this.dictNegate?this.$set(this.dictContentArr,this.dictContentValue,!0):this.$set(this.dictContentArr,this.dictContentValue,!1);break;default:this.listContentArr.push(this.listContentValue);break}},removeList:function(t,e){switch(t){case"dict":this.$delete(this.dictContentArr,e);break;default:this.listContentArr.splice(e,1);break}},pushContent:function(){if("basic"===this.formTitle){var t=String(this.ruleBasicTable[this.contentIndex]["symbol"]);switch(t){case"reg":var e=this.regCheckList.map(function(t){return t.name}).toString().replace(/[,]/g,"");this.ruleBasicTable[this.contentIndex]["jioRegData"]=e,this.ruleBasicTable[this.contentIndex]["content"]=this.regContentValue;break;case"dict":this.ruleBasicTable[this.contentIndex]["content"]=JSON.stringify(this.dictContentArr);break;case"len":this.ruleBasicTable[this.contentIndex]["content"]=this.lenContentArr.toString();break;default:var l=this.listContentArr.map(function(t){return t}).toString().replace(/[]/g,"");this.ruleBasicTable[this.contentIndex]["content"]=l;break}this.contentVisible=!1}else if("advance"===this.formTitle){t=String(this.ruleAdvanceTable[this.contentIndex]["symbol"]);switch(t){case"reg":e=this.regCheckList.map(function(t){return t.name}).toString().replace(/[,]/g,"");this.ruleAdvanceTable[this.contentIndex]["jioRegData"]=e,this.ruleAdvanceTable[this.contentIndex]["content"]=this.regContentValue;break;case"dict":this.ruleAdvanceTable[this.contentIndex]["content"]=JSON.stringify(this.dictContentArr);break;case"len":this.ruleAdvanceTable[this.contentIndex]["content"]=this.lenContentArr.toString();break;default:if("list"===t||"in_list"===t||"start_list"===t||"end_list"===t||"rein_list"===t){l=this.listContentArr.map(function(t){return t}).toString().replace(/[]/g,"");this.ruleAdvanceTable[this.contentIndex]["content"]=l}else this.ruleAdvanceTable[this.contentIndex]["content"]="@token@"===t?"true":this.headerValue;break}this.ruleAdvanceTable[this.contentIndex]["headerArg"]=this.headerContentArr,this.headerVisible=!1,this.contentVisible=!1}},cancelContent:function(){this.headerVisible=!1,this.contentVisible=!1},addAdvanceObj:function(){var t={condition:"ip",symbol:"",negate:"false",connector:"and",content:"",jioRegData:"",disabled:!1,headerData:""};this.ruleAdvanceTable.push(t)},delAdvanceTable:function(t){this.ruleAdvanceTable.splice(t,1)},selectAppOption:function(t){this.ruleAdvanceTable[t]["content"]="",this.regCheckList=[],this.regContentValue="",this.listContentArr="",this.listContentArr=[],this.dictContentValue="",this.dictContentArr={},this.lenContentArr=[0,0],this.headerValue="",this.headerContentArr=["",""]},selectAdvContent:function(t,e){this.formTitle="advance";var l=String(t.condition),a=String(t.symbol);if("headers"===l||"args"===l||"posts"===l||"post_form"===l)this.headerTitle=l,this.headerVisible=!0,this.ruleAdvanceTable[e]["headerData"]=this.headerContentArr,this.contentIndex=e,this.contentTitle=a,this.contentVisible=!0;else switch(a){case"":this.contentIndex=e,this.contentTitle=a,this.contentVisible=!1;break;case"in":this.contentIndex=e,this.contentTitle=a,this.contentVisible=!1;break;case"@token@":this.contentIndex=e,this.contentTitle=a,this.contentVisible=!1,this.ruleBasicTable[e]["content"]="true",this.ruleBasicTable[e]["disabled"]=!0;break;default:this.contentIndex=e,this.contentTitle=a,this.contentVisible=!0;break}},formatData:function(t,e){var l,a,n,i,s=t["condition"],o=t["symbol"];if("adv"===e)if("headers"===s||"args"===s||"posts"===s||"post_form"===s){switch(o){case"":a=t["content"],n=o;break;case"reg":a=t["content"],n=t["jioRegData"];break;case"dict":a=JSON.parse(t["content"]),n=o;break;case"len":var r=t["content"].split(",");a=[parseInt(r[0]),parseInt(r[1])],n=o;break;case"@token@":a=t["content"],n=o;break;default:a=t["content"].split(","),n=o;break}var c;c=t["headerData"][1]?t["headerData"]:[t["headerData"][0],"any"],i="false"!=t["negate"],l=[s,[a,n,c,i],t["connector"]]}else{switch(o){case"":a=t["content"],n=o;break;case"reg":a=t["content"],n=t["jioRegData"];break;case"dict":a=JSON.parse(t["content"]),n=o;break;case"len":r=t["content"].split(",");a=[parseInt(r[0]),parseInt(r[1])],n=o;break;case"@token@":a=t["content"],n=o;break;default:a=t["content"].split(","),n=o;break}i="false"!=t["negate"],l=[s,[a,n,i],t["connector"]]}else{switch(o){case"":a=t["content"],n=o;break;case"reg":a=t["content"],n=t["jioRegData"];break;case"dict":a=JSON.parse(t["content"]),n=o;break;case"len":r=t["content"].split(",");a=[parseInt(r[0]),parseInt(r[1])],n=o;break;case"@token@":a=t["content"],n=o;break;default:a=t["content"].split(","),n=o;break}i="false"!=t["negate"],l=[a,n,i]}return l},addAdvanSubmit:function(){var t,e,l,a,n,i;t=""===this.typeValue?this.ruleName+"-other":this.ruleName+"-"+this.typeValue,e=this.ruleState?"on":"off",l=this.action,a=this.formatData(this.ruleBasicTable[0],""),n=this.formatData(this.ruleBasicTable[1],"");var s=[];for(var o in this.ruleAdvanceTable)s.push(this.formatData(this.ruleAdvanceTable[o],"adv"));if("rehtml"===l)d={id:t,state:e,action:l,hostname:a,uri:n,app_ext:s,rehtml:this.rehtml};else if("refile"===l)d={id:t,state:e,action:l,hostname:a,uri:n,app_ext:s,refile:this.refile};else if("func"===l){String(this.func[0]),this.func[1];d={id:t,state:e,action:l,hostname:a,uri:n,app_ext:s,func:this.func}}else d={id:t,state:e,action:l,hostname:a,uri:n,app_ext:s};if("添加"===this.title){var r={action:"add",mod:"app_Mod",value:JSON.stringify(d)};i=this.secReq(this.api.globalConfig,"post",r)}else{var c=d,u=c["id"].split("-");if(d["id"].split("-")[d["id"].split("-").length-1]!==u[u.length-1]){c["id"]=u[0]+"-"+u[u.length-1];var d=JSON.stringify(c);console.log(d,"test11")}else{c["id"]=u[0]+"-"+u[u.length-1];d=JSON.stringify(c)}r={action:"set",mod:"app_Mod",id:this.editIndex+1,value_type:"json",value:d};i=this.secReq(this.api.globalConfig,"post",r)}this.wafRuleVisible=!1,"ok"==i.code?this.$notify({type:"success",title:"提示",message:"应用成功",duration:4e3}):this.$notify({type:"warning",title:"提示",message:i.msg,duration:4e3}),this.$emit("refreshTable")}},components:{wafDivider:i}},o=s,r=l("2877"),c=Object(r["a"])(o,a,n,!1,null,null,null);e["default"]=c.exports}}]);