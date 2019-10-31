本地项目推送到新git上
```
git init
git add .
git commit -am 'project init'
git remote add origin git@github.com:lengband/webpack-official-demo.git
```
如果远程没有 `README.md`
```
git push --set-upstream origin master
```
如果远程有 `README.md`
```
git branch --set-upstream-to=origin/master  master
git pull --rebase
git push
```

或者常规操作看提示
```
git init
git add .
git commit -am 'project init'
git remote add origin git@github.com:lengband/webpack-official-demo.git
git pull
git push
[git tag -a <0.1.0> -m "<管理资源>"]
[git push origin v0.1.0]
```
