$lengbandGitIo = '/Users/wangpeng/learn/code/blog/me/lengband.github.io'

git add .
git commit -am 'update'
git push
gitbook build && mv -f ./_book $lengbandGitIo
cd $lengbandGitIo
git add .
git commit -am 'update'
git push