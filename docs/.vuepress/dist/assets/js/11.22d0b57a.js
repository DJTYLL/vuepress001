(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{449:function(a,s,t){"use strict";t.r(s);var r=t(43),e=Object(r.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"mock的基本使用方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mock的基本使用方法"}},[a._v("#")]),a._v(" mock的基本使用方法")]),a._v(" "),s("h2",{attrs:{id:"一、mock解决的问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、mock解决的问题"}},[a._v("#")]),a._v(" 一、mock解决的问题")]),a._v(" "),s("p",[a._v("开发时，后端还没完成数据输出，前端只好写静态模拟数据。数据太长了，将数据写在js文件里，完成后挨个改url。某些逻辑复杂的代码，加入或去除模拟数据时得小心翼翼。想要尽可能还原真实的数据，要么编写更多代码，要么手动修改模拟数据。特殊的格式，例如IP,随机数，图片，地址，需要去收集")]),a._v(" "),s("h2",{attrs:{id:"二、mock优点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、mock优点"}},[a._v("#")]),a._v(" 二、mock优点")]),a._v(" "),s("h4",{attrs:{id:"_1、前后端分离"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、前后端分离"}},[a._v("#")]),a._v(" 1、前后端分离")]),a._v(" "),s("p",[a._v("让前端工程师独立于后端进行开发。")]),a._v(" "),s("h4",{attrs:{id:"_2、增加测试的真实性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、增加测试的真实性"}},[a._v("#")]),a._v(" 2、增加测试的真实性")]),a._v(" "),s("p",[a._v("通过随机数据，模拟各种场景。")]),a._v(" "),s("h4",{attrs:{id:"_3、开发无侵入"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3、开发无侵入"}},[a._v("#")]),a._v(" 3、开发无侵入")]),a._v(" "),s("p",[a._v("不需要修改既有代码，就可以拦截Ajax请求，返回模拟的响应数据。")]),a._v(" "),s("h4",{attrs:{id:"_4、用法简单"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4、用法简单"}},[a._v("#")]),a._v(" 4、用法简单")]),a._v(" "),s("p",[a._v("符合直觉的接口。")]),a._v(" "),s("h4",{attrs:{id:"_5、数据类型丰富"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5、数据类型丰富"}},[a._v("#")]),a._v(" 5、数据类型丰富")]),a._v(" "),s("p",[a._v("支持生成随机的文本、数字、布尔值、日期、邮箱、链接、图片、颜色等。")]),a._v(" "),s("h4",{attrs:{id:"_6、方便扩展"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6、方便扩展"}},[a._v("#")]),a._v(" 6、方便扩展")]),a._v(" "),s("p",[a._v("支持支持扩展更多数据类型，支持自定义函数和正则。")]),a._v(" "),s("h4",{attrs:{id:"_7、在已有接口文档的情况下-我们可以直接按照接口文档来开发-将相应的字段写好-在接口完成-之后-只需要改变url地址即可。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7、在已有接口文档的情况下-我们可以直接按照接口文档来开发-将相应的字段写好-在接口完成-之后-只需要改变url地址即可。"}},[a._v("#")]),a._v(" 7、在已有接口文档的情况下，我们可以直接按照接口文档来开发，将相应的字段写好，在接口完成 之后，只需要改变url地址即可。")]),a._v(" "),s("h4",{attrs:{id:"_8、-不涉及跨域问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8、-不涉及跨域问题"}},[a._v("#")]),a._v(" 8、 不涉及跨域问题")]),a._v(" "),s("h2",{attrs:{id:"三、案例demo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、案例demo"}},[a._v("#")]),a._v(" 三、案例demo")]),a._v(" "),s("h4",{attrs:{id:"_1、首先需要下载安装mockjs模块"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、首先需要下载安装mockjs模块"}},[a._v("#")]),a._v(" 1、首先需要下载安装mockjs模块")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("    cnpm install mockjs -S\n")])])]),s("h4",{attrs:{id:"_2、然后可以在scr下创建一个文件夹-用于存放模拟的数据的文件-例如-src-mock-index-js-在这个文件中"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、然后可以在scr下创建一个文件夹-用于存放模拟的数据的文件-例如-src-mock-index-js-在这个文件中"}},[a._v("#")]),a._v(" 2、然后可以在scr下创建一个文件夹，用于存放模拟的数据的文件 例如 /src/mock/index.js,在这个文件中")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('const Mock = require("mockjs");\nlet data = Mock.mock({\n    "data|6": [ //生成6条数据 数组\n        {\n            "shopId|+1": 1,//生成商品id，自增1\n            "shopMsg": "@ctitle(10)", //生成商品信息，长度为10个汉字\n            "shopName": "@cname",//生成商品名 ， 都是中国人的名字\n            "shopTel": /^1(5|3|7|8)[0-9]{9}$/,//生成随机电话号\n            "shopAddress": "@county(true)", //随机生成地址\n            "shopStar|1-5": "★", //随机生成1-5个星星\n            "salesVolume|30-1000": 30, //随机生成商品价格 在30-1000之间\n            "shopLogo": "@Image(\'100x40\',\'#c33\', \'#ffffff\',\'小北鼻\')", //生成随机图片，大小/背景色/字体颜色/文字信息\n            "food|2": [ //每个商品中再随机生成2个food\n                {\n                    "foodName": "@cname", //food的名字\n                    "foodPic": "@Image(\'100x40\',\'#c33\', \'#ffffff\',\'小可爱\')",//生成随机图片，大小/背景色/字体颜色/文字信息\n                    "foodPrice|1-100": 20,//生成1-100的随机数\n                    "aname|2": [\n                        { \n                            "aname": "@cname", \n                            "aprice|30-60": 20 \n                        }\n                    ]\n                }\n            ]\n        }\n    ]\n})\nMock.mock(/goods\\/goodAll/, \'post\', () => { //三个参数。第一个：路径，第二个：请求方式post/get，第三个：回调，返回值\n    return data\n})\n')])])]),s("h4",{attrs:{id:"_3、模拟完数据后-需要在入口主文件-main-js中-引入这个模拟数据的文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3、模拟完数据后-需要在入口主文件-main-js中-引入这个模拟数据的文件"}},[a._v("#")]),a._v(" 3、模拟完数据后，需要在入口主文件 main.js中 引入这个模拟数据的文件")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('import "./mock/index.js"\n')])])]),s("h4",{attrs:{id:"_4、在页面中-我们直接可以进行axios请求-这里懒省事了-正常情况下-要把每个接口都封装到api里面-后期便于修改维护等一系列操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4、在页面中-我们直接可以进行axios请求-这里懒省事了-正常情况下-要把每个接口都封装到api里面-后期便于修改维护等一系列操作"}},[a._v("#")]),a._v(" 4、在页面中，我们直接可以进行axios请求，（这里懒省事了，正常情况下，要把每个接口都封装到api里面，后期便于修改维护等一系列操作）")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('import axios from "axios"\nexport default {\n  name: "app",\n  data() {\n    return {};\n  },\n  methods:{\n       a(){\n          console.log(11111)\n          axios.post("http://localhost:8080/goods/goodAll").then((res)=>{\n            console.log(res)\n        })\n      }\n  },  \n mounted () {\n        this.a();\n    }\n}\n')])])]),s("h4",{attrs:{id:"_5、结果"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5、结果"}},[a._v("#")]),a._v(" 5、结果：")]),a._v(" "),s("img",{attrs:{src:a.$withBase("/assets/image/document/mockBaseUse/img.png"),alt:"foo"}})])}),[],!1,null,null,null);s.default=e.exports}}]);