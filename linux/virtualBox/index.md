# Linux安装
学习Linux，那么准备一个Linux的环境是必不可少的。
执行环境
1、购买云服务器（阿里云、腾讯云、AWS..）
2、无数据的PC（不推荐多系统混跑）
3、虚拟机（推荐）

## VirtualBox
本文虚拟化工具选择是 VirtualBox。
那么为什么选择 VirtualBox 而不是 VMware workstation ？

1、版权：virtualbox是免费软件，vmware workstion是商业软件
2、vbox 小巧，易于安装搭建环境
3、vbox的启动速度更快，适合学习场景

打开这个[下载地址](https://www.virtualbox.org/wiki/Downloads)，会看到这样的一个页面
![]("./linux/virtualBox/images/downloadVbs.jpg")
根据不同的操作系统选择不同的安装包，本文以windows安装包为例：
## 新建虚拟机
1. 安装VirtualBox
1、首先会进入到和安装类似qq一样的界面，我们这里直接下一步直到完成就可以了。
2. 在虚拟机中安装Linux
1、首先先[下载镜像](http://mirrors.neusoft.edu.cn/centos/7.7.1908/isos/x86_64/), 本文选择的是 CentOS-7-x86_64-DVD-1908.iso，下载还比较大，大约4.5GB。(其中CentOS的Linux的发行版，7表示版本号，也是目前比较新且稳定的版本，后面的1980表示的是发行日期，2019年8月份。)
2、打开之前安装好的vBox， 然后点击新建，输入名称, 如：centos7, 之后类型和版本会自动帮我们选择好，就不需要更改了，这里我还需要选择一个存放虚拟机的位置，这个随便选择，找一个空间充裕的地方。
![]("./linux/virtualBox/images/CentOS-7-x86_64-DVD-1908.iso")
3、选择内存
vbx_memory.jpg
4、虚拟磁盘
vbx_disk.jpg
5、虚拟磁盘文件类型
vbx_disk_type.jpg
6、存储在无论盘上
vbx_disk_dymc.jpg
7、最后是让你确认一下之前设置的一下选项，这里还可以进行更改，确认无误点击完成。（正常学习测试的话：3-6步可以直接下一步）
vbx_over.jpg

## 配置镜像
1、打开设置
vbx_config.jpg
2、点击存储，点击没有盘片，在点击蓝色的光盘，选择我们刚刚下载的iso镜像，点击ok

## linux安装
1、点击启动，出现一下界面，点击第一个 install（）
linux_install.jpg
2、经过一段时间等待，进入选择语言页面，这里我们选择中文。（这里的语言仅表示安装过程中的语言，并不会影响其他）
linux_lang.jpg
3、这里先要等待灰色图标变为黑色(即安装完相应以来组件和数据)，然后确认你的安装位置，linux出于安全考虑，也会让我点磁盘分区确认，我们只需要自动分区即可，点击完成，点击开始安装。
linux_desc.png
linux_desc_disk.png
4、安装完成之后进入到这个页面，下面有进度条，并且在此可以设置root密码和添加用户，如果是自己测试学习，那么设置root密码就够用了。等待进度条100%后，点击重启后，等待虚拟机系统重启完成。（时间会有点长）
linux_user.png
5、进入这个页面，输入刚刚设置的用户和密码
如：
root
123456
linux_dos.png
6、最后就正式进入了Linux系统。


