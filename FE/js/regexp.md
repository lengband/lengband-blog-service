## 正则表达式

##### 断言
前瞻：
exp1(?=exp2) exp1后边是exp2就匹配
后顾：
(?&lt;=exp2)exp1 exp1前边是exp2就匹配
负前瞻：
exp1(?!exp2) exp1后边不是exp2就匹配
负后顾：
(?&lt;!exp2)exp1 exp1前边不是exp2就匹配