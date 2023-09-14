---
title : Linux开机连接网络
---

# Linux设置开机自动连接网络


Linux设置开机自动连接网络

1.用root账号登录

2.打开/etc/sysconfig/network-scrpts/目录

3.vi ifcfg-eth0 （centos7系统为ifcfg-eno16777736）

4.按键盘"i"键进入编辑模式，将ONBOOT改为yes

5.按下键盘ESC键之后输入:wq保存退出