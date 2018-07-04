# 骨架屏生成工具
支持vue react

# 骨架屏原理
前后端分离时, 前端需要经过加载资源 执行, 才能渲染出页面内容, 将骨架屏dom css js代码直接写入html中, 达到添加骨架屏目的
# 骨架屏生成工具原理
- vue: 使用vue-server-renderer/server-plugin生成skeleton.json, vue-server-renderer.createBundleRenderer由skeleton.json生成dom css js, 插入需要添加骨架屏的页面中.
- react: 大致同理vue, 但react-dom/server由组件渲染出html字符串, 没有必要经过webpack, 
因此css预处理 babel这些在js代码中执行完成而非利用webpack打包

# Support
- [o] vue骨架生成
- [o] react骨架生成
- [o] 批量生成_但每个html页面只能有1个骨架
- [o] 开发体验同普通组件

# Use
1.根据自己工程目录结构, 拷贝vue_skeleton_files/ react_skeleton_files/下必要文件到自己工程目录, 并适配修改
```bash
npm i
sh build.sh [xx...] 或 参见下方Demo
```

2.一次性使用的, 直接clone此工程, 修改骨架屏组件, 将生成的骨架屏 dom css 拷贝至原工程

3.一个html页面只支持同时存在一个骨架屏, SPA应用需要根据不同路由展示不同骨架屏时, 一种解决方法为:
html中同时包含所有骨架dom css 并打标识, html script中根据url删除不必要骨架dom css. 优化_骨架css通用以减少传输内容

4.项目中使用了extract-text-webpack-plugin的注意在不需要调试骨架屏的正常启动本地dev-server时exclude skeleton/下防止样式被打包_属于优化内容,react中不需要
vue_e.g.
```javascript
{
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: utils.cssLoaders({
                        sourceMap: config.dev.cssSourceMap,
                        extract: true
                    }),
                    postcss: [px2rem({ remUnit: 37.5 })],
                    autoprefixer: {
                        browsers: ['last 10 versions', 'Android > 4', 'iOS > 6', 'Safari > 6']
                    }
                },
                exclude: /skeleton/  // 正常启动本地dev-server时 注释掉骨架屏组件引用后新增此行, 开发调试骨架屏时注释本行
}

```

# Demo
参见vue_skeleton_files/或react_skeleton_files/下 README.md




