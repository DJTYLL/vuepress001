---
title : mock的基本使用方法
---

# mock的基本使用方法
## 一、mock解决的问题
开发时，后端还没完成数据输出，前端只好写静态模拟数据。数据太长了，将数据写在js文件里，完成后挨个改url。某些逻辑复杂的代码，加入或去除模拟数据时得小心翼翼。想要尽可能还原真实的数据，要么编写更多代码，要么手动修改模拟数据。特殊的格式，例如IP,随机数，图片，地址，需要去收集

## 二、mock优点
#### 1、前后端分离

让前端工程师独立于后端进行开发。

#### 2、增加测试的真实性

通过随机数据，模拟各种场景。

#### 3、开发无侵入

不需要修改既有代码，就可以拦截Ajax请求，返回模拟的响应数据。

#### 4、用法简单

符合直觉的接口。

#### 5、数据类型丰富

支持生成随机的文本、数字、布尔值、日期、邮箱、链接、图片、颜色等。

#### 6、方便扩展

支持支持扩展更多数据类型，支持自定义函数和正则。

#### 7、在已有接口文档的情况下，我们可以直接按照接口文档来开发，将相应的字段写好，在接口完成 之后，只需要改变url地址即可。

#### 8、 不涉及跨域问题

## 三、案例demo
#### 1、首先需要下载安装mockjs模块
```
    cnpm install mockjs -S
```
#### 2、然后可以在scr下创建一个文件夹，用于存放模拟的数据的文件 例如 /src/mock/index.js,在这个文件中

```
const Mock = require("mockjs");
let data = Mock.mock({
    "data|6": [ //生成6条数据 数组
        {
            "shopId|+1": 1,//生成商品id，自增1
            "shopMsg": "@ctitle(10)", //生成商品信息，长度为10个汉字
            "shopName": "@cname",//生成商品名 ， 都是中国人的名字
            "shopTel": /^1(5|3|7|8)[0-9]{9}$/,//生成随机电话号
            "shopAddress": "@county(true)", //随机生成地址
            "shopStar|1-5": "★", //随机生成1-5个星星
            "salesVolume|30-1000": 30, //随机生成商品价格 在30-1000之间
            "shopLogo": "@Image('100x40','#c33', '#ffffff','小北鼻')", //生成随机图片，大小/背景色/字体颜色/文字信息
            "food|2": [ //每个商品中再随机生成2个food
                {
                    "foodName": "@cname", //food的名字
                    "foodPic": "@Image('100x40','#c33', '#ffffff','小可爱')",//生成随机图片，大小/背景色/字体颜色/文字信息
                    "foodPrice|1-100": 20,//生成1-100的随机数
                    "aname|2": [
                        { 
                            "aname": "@cname", 
                            "aprice|30-60": 20 
                        }
                    ]
                }
            ]
        }
    ]
})
Mock.mock(/goods\/goodAll/, 'post', () => { //三个参数。第一个：路径，第二个：请求方式post/get，第三个：回调，返回值
    return data
})
```

#### 3、模拟完数据后，需要在入口主文件 main.js中 引入这个模拟数据的文件
```
import "./mock/index.js"
```

#### 4、在页面中，我们直接可以进行axios请求，（这里懒省事了，正常情况下，要把每个接口都封装到api里面，后期便于修改维护等一系列操作）
```
import axios from "axios"
export default {
  name: "app",
  data() {
    return {};
  },
  methods:{
       a(){
          console.log(11111)
          axios.post("http://localhost:8080/goods/goodAll").then((res)=>{
            console.log(res)
        })
      }
  },  
 mounted () {
        this.a();
    }
}
```

#### 5、结果：
<img :src="$withBase('/assets/image/document/mockBaseUse/img.png')" alt="foo">
