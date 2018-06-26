# vue骨架屏
## 开发相关
1. 可以在路由中添加骨架屏路由用于快速开发
2. 写法和普通组件同
## 使用
```bash
sh skeleton.sh [xx_page...] 
e.g: 
单页骨架屏生成 sh skeleton.sh xx_vue      # 运行完成xx_vue.html已含骨架屏的dom css
多页骨架屏生成 sh skeleton.sh xx_vue test
```
Tips: 如不能运行请检查如下几点:
1. build/: skeleton.js  webpack.skeleton.conf.js 文件存在
2. page/: xx.html 文件存在, 并文件内容包含vue-server-renderer所需的`<!--vue-ssr-outlet-->`
3. rjs/skeleton/: xx.vue 文件存在
4. rjs/: portal_skeleton.js存在
5. skeleton.sh 文件存在

