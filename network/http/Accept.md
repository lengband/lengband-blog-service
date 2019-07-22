# 数据协商

### 请求（Accept）
* Accept 期待的数据类型，定义`mime-type`中的数据类型
* Accept-Encoding 期待数据的编码方式，一般只压缩方式，如：gizp、deflate、br
* Accept-Language 期待语言
* User-Agent 浏览页面机器的信息，判断是什么设备

### 返回（Content）
* Content-Type 对应`Accpet`, 从 `Accept`中挑选一种数据类型进行返回
* Content-Encoding 对应`Accept-Encoding`, 实际范湖的压缩方式
* Content-Language 对应`Accept-Language`, 实际返回的语言