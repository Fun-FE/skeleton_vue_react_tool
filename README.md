# 骨架屏生成工具
支持vue react

# 骨架屏原理
前后端分离时, 前端需要经过加载资源 执行, 才能渲染出页面内容, 将骨架屏dom css js代码直接写入html中, 达到添加骨架屏目的
# 骨架屏生成工具原理
- vue: 使用vue-server-renderer/server-plugin生成skeleton.json, vue-server-renderer.createBundleRenderer由skeleton.json生成dom css js, 插入需要添加骨架屏的页面中.
- react: 大致同理vue, 但react-dom/server由组件渲染出html字符串, 没有必要经过webpack, 
因此css预处理 autoprefixer babel这些在js代码中执行完成而非利用webpack打包

# Support
- [o] vue骨架生成
- [o] react骨架生成
- [o] 批量生成_但每个html页面只能有1个骨架
- [o] 开发体验同普通组件

# Use
根据自己工程目录结构, 拷贝vue_skeleton_files/ react_skeleton_files/下必要文件到自己工程目录, 并适配修改
```bash
npm i
sh build.sh [xx...] 或 参见下方Demo
```




# Demo
参见vue_skeleton_files/或react_skeleton_files/下 README.md




