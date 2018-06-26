#!/usr/bin/env bash



echo '骨架屏页面:'
echo $*

for page in $*
  do
    SKELETON_PAGE=${page} npm run skeleton || exit 1
  done


echo 'skeleton构建完成'
exit 0
