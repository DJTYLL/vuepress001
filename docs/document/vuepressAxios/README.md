---
title : vuepress axios 使用
---
# vuepress axios 使用

VuePress是一个基于Vue.js的静态网站生成器，可以轻松地创建文档网站。而Axios则是一个基于Promise的HTTP客户端，可以用于浏览器和Node.js中发送请求。

在VuePress中使用Axios可以很方便地获取远程数据并渲染到页面上。以下是使用VuePress和Axios进行数据获取的步骤：

#### 1、安装axios 在终端中使用npm或yarn安装axios：
```
npm install axios
```

#### 2、创建一个.vue文件，例如：HelloWorld.vue

#### 3、在HelloWorld.vue中引入axios
```
import axios from 'axios'
```
#### 4、在HelloWorld.vue的export default中，定义一个名为data的函数，并在其中使用axios获取数据
```
export default {
  name: 'HelloWorld',
  data () {
    return {
      posts: []
    }
  },
  mounted () {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        this.posts = response.data
      })
  }
}
```
以上代码使用axios向jsonplaceholder.typicode.com/posts发送get请…

5、在页面中使用数据 在VuePress中，可以使用Vue.js的模板语法来渲染数据。在HelloWorld.vue中，可以通过以下方式将posts数组渲染到页面中：
```
<template>
  <div>
    <ul>
      <li v-for="post in posts" :key="post.id">
        {{ post.title }}
      </li>
    </ul>
  </div>
</template>
```
以上代码使用v-for指令循环渲染posts数组中的每一个元素，并使用模板语法显示每个元素的title属性。

以上就是使用VuePress和Axios进行数据获取的基本步骤。当然，具体的代码实现可能因为不同的需求而有所不同。
