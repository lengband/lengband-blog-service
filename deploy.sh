ghPagesPath="/Users/wangpeng/learn/code/blog/me/lengband.github.io"

git add .
git commit -am 'update'
git push
gitbook build && cp -R ./_book/* $ghPagesPath && cd $ghPagesPath
git add .
git commit -am 'update'
git push