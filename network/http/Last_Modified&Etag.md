# 缓存验证Last-Modified和Etag

### 缓存验证的过程：
###### Last-Modified
比如第一次请求`a.js`的时候，服务端会返回`Last-Modified`, 下次浏览器在请求`a.js`的时候就会以`If-Modified-Since`带上上次返回`Last-Modified`的时间，服务器比较这个时间和文件的最近的修改时间，告诉浏览器是否可以使用缓存。
###### Etag
当资源内容变化时，会自动计算并将文件名进行更改或者添加hash使其与原文件名称不一致，我们用这个新名词标记这个资源并返回，浏览器下次请求的时候用`If-Match`自动加上上次返回的Etag，服务器端进行验证比对，相等则返回告诉浏览器可以使用缓存。

### 验证头
* Last-Modified 上次修改时间
> 配合If-Modified-Since或者If-Unmodified使用。
* Etag 数据签名
> 配合If-Match或者If-Non-Match使用。
