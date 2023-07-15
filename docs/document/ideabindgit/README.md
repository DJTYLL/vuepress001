---
title : IDEA绑定Git
---

# IDEA绑定Git


## macIDEA绑定Git
### 一、下载git
打开git官网地址：https://git-scm.com/进行下载，如下图界面：
<img :src="$withBase('/assets/image/document/ideabindgit/img.png')" alt="foo">
```
    或安装brew 在使用 brew 安装 git   
    brew地址 ： https://brew.sh/index_zh-cn 
```

### 二、下载完成后

第一步，验证邮箱与GitHub注册时输入的是否一致

    git config --global --list

第二步，设置全局用户名和邮箱。

    git config --global user.name “yourname”，（这里得名字和邮箱都是注册github时用的）
    git config --global user.email “email@email.com ”（这里得名字和邮箱都是注册github时用的）

第三步，ssh-keygen -t rsa -C “这里换上你的邮箱”，一路回车，在出现选择时输入Y，再一路回车直到生成密钥。会在/Users/***/路径下生成一个.ssh文件夹，密钥就存储在其中。

第四步，到git仓库，添加秘钥，

<img :src="$withBase('/assets/image/document/ideabindgit/img_1.png')" alt="foo">

<br/>

<img :src="$withBase('/assets/image/document/ideabindgit/img_2.png')" alt="foo">

<img :src="$withBase('/assets/image/document/ideabindgit/img_3.png')" alt="foo">

<img :src="$withBase('/assets/image/document/ideabindgit/img_4.png')" alt="foo">

### idea
第一步 ： 首先查找mac中git安装的地址,在终端中输入
```
   $  whereis git  
```
第二步将找到的git地址填入idea中
<img :src="$withBase('/assets/image/document/ideabindgit/img_5.png')" alt="foo">
<img :src="$withBase('/assets/image/document/ideabindgit/img_6.png')" alt="foo">

<img :src="$withBase('/assets/image/document/ideabindgit/img_7.png')" alt="foo">
