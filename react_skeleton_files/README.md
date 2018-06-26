# react骨架屏
## 开发相关
1. 可以在路由中添加骨架屏路由用于快速开发
2. 写法和普通组件同
## 使用
```bash
sh skeleton.sh [xx_page...] 
e.g: 
单页骨架屏生成 sh skeleton.sh xx_react     # 运行完成xx_react.html已含骨架屏的dom css
多页骨架屏生成 sh skeleton.sh xx_react test
```
Tips: 如不能运行请检查如下几点:
1. build/: skeleton.js  skeleton_react_gulpfile.js 文件存在
2. page/: xx.html 文件存在, 并文件内容包含react-dom/server渲染所需的`<!--react-ssr-outlet-->`
3. src/skeleton/: xx 目录存在
4. skeleton.sh 文件存在