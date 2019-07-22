# CORS

`Access-Control-Allow-Origin: '*'`

### CORS 预请求
> Request Method: OPTIONS
##### 允许方法
以下三种方法不许要预请求就能直接返回结果
* GET
* HEAD
* POST
> 以`node`举例，如果允许其他方法的话，要加上
`Access-Control-Allow-Methods: 'POST, PUT, Delete'`

##### 允许Content-Type
* text/plain
* multipart/form-data
* application/x-www-form-urlencoded

 
##### 请求头限制
* Accept
* Accept-Language
* Content-Language
* Content-Type
> 以`node`举例，如果允许其他头部信息的话，要加上
`Access-Control-Allow-Headers: '<你要设置的头部信息的key值>'`

##### 最长连接时间
单位为秒，下面表示的意思为：当前域下1000秒之内的请求不需要再发预请求确认。
> `Access-Control-Max-Age: '1000'`



