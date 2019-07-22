
# 介绍
此repo为 lengband.github.io 的源代码
[lengband.github.io 的源码](https://lengband.github.io/)


# markdown介绍
# H1
## H2 
### H3
#### H4
##### H5
###### H6

Alt-H1
==

Alt-H2
------

强调，又叫做斜体，使用 *星号* 或 _下划线_。

重点强调，又叫做粗体，使用 **星号** 或 __下划线__。

使用 **星号和_下划线_** 组合使用强调。

删除线使用两个波浪线。~~划掉这个~~

1. 有序列表的第一项
2. 另外一个项
..* 无序子列表
1. 事实上序号不起作用，那只是一个数字而已
..1. 有序子列表
4. 最后一个项

...你可以适当的缩紧列表项中的段落。注意上面的空行和前导空格（至少一个，但是这里我们使用三个来对齐原始的Markdown内容）。

...换行而不形成段落，你需要使用两个尾部空格。..
...注意这行是分开的，但还在同一个段落中。..
...（这个违背了不需要尾部空格的典型的GFM换行行为）。

* 无序列表可以使用星号
- 或者减号
+ 或者加号

[内嵌式链接](https://www.google.com)

[带标题的内嵌式链接](https://www.google.com "谷歌的主页")

[引用式链接][arbitrary case-insensitive reference text]

[你可以在引用式链接定义中使用数字][1]

或者空着什么都不写 [link text itself]

用来说明引用链接的文字可以放在后面。

[arbitrary case-insensitive reference text]: https://www.mozilla.org
[1]: http://slashdot.org
[link text itself]: http://www.reddit.com

Text prior to footnote reference.[^2]
[^2]: Comment to include in footnote.

这是我们的logo（停留查看标题）

内嵌式
![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")

引用式
![alt text][logo]

[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 2"

内嵌 `代码` 有 `反引号` 包含它.

​```javascript
var s = "JavaScript语法高亮";
alert(s);
​```

​```python
s = "Python语法高亮"
print s
​```

​```
没有指明语言，所有没有语法高亮。
让我们随便写个标签试试 <b>tag</b>
​```

冒号可以用来对其列。

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

The outer pipes (|) are optional, and you don't need to make the raw Markdown line up prettily. You can also use inline Markdown.

外部的管道符 (|) 是可选的，而且不需要优雅的排列Markdown。你还可以在表格中内嵌其他Markdown。

Markdown | Less | Pretty
--- | --- | ---
*Still* | `renders` | **nicely**
1 | 2 | 3

> 在邮件中块引用中很方便用来仿真文本的回复。
> 这行是同一个块的一部分。、
> 这行是同一个块的一部分。
> 这行是同一个块的一部分。
> 这行是同一个块的一部分。


引用结束

> 当这行很长的文字被包裹的时候，它依然会被恰当的引用。让我们继续写下去来确保包裹它时对于每个人来说它足够长。你可以*在*块引用中使用其它**Markdown**。

引用结束
x
> 当这行很长的文字被包裹的时候，它依然会被恰当的引用。让我们继续写下去来确保包裹它时对于每个人来说它足够长。你可以*在*块引用中使用其它**Markdown**。

<dl>
  <dt>Definition list</dt>
  <dd>Is something people use sometimes.</dd>

  <dt>Markdown in HTML</dt>
  <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>
</dl>

adsfsadfsadf
<hr/>
```
dsafsdaf
```
sadfsdf
===

asdfasdf
***

星号
______

下划线

我们以这行作为开始。

This line is separated from the one above by two newlines, so it will be a *separate paragraph*.

这行与上面那行被两个换行符分隔，所以它会成为一个 *单独的段落*。

This line is also a separate paragraph, but...
This line is only separated by a single newline, so it's a separate line in the *same paragraph*.

这行同样是一个单独的段落，但是...
这行仅仅被一个换行符分隔，所以它是一个在 *同一段落* 中的单独的行。

<a href="https://v.youku.com/v_show/id_XMTY1Nzc4OTY3Ng==.html?spm=a2h0k.11417342.soresults.dtitle
" target="_blank"><img src="https://v.youku.com/v_show/id_XMTY1Nzc4OTY3Ng==.html?spm=a2h0k.11417342.soresults.dtitle"
alt="IMAGE ALT TEXT HERE" width="240" height="180" border="10" /></a>

{% raw %}
  这 {{ 不会被处理 }}
  > 不再是引用，直接输出
{% endraw %}

<!-- {% raw %}
  <script>
    document.write('Hello')
    alert('hello')
  </script>
{% endraw %} -->