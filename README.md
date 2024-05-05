<p align="center">
  <img width="320" src="https://wpimg.wallstcn.com/ecc53a42-d79b-42e2-8852-5126b810a4c8.svg">
</p>

<p align="center">
  <a href="https://github.com/vuejs/vue">
    <img src="https://img.shields.io/badge/vue-2.7.16-brightgreen.svg" alt="vue">
  </a>
  <a href="https://github.com/ElemeFE/element">
    <img src="https://img.shields.io/badge/element--ui-2.15.14-brightgreen.svg" alt="element-ui">
  </a>
  <a href="https://github.com/leedom92/vue-element-admin/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/mashape/apistatus.svg" alt="license">
  </a>
</p>

## 简介
Fork from [PanJiaChen/vue-element-admin](https://github.com/PanJiaChen/vue-element-admin).

[vue-element-admin](https://panjiachen.github.io/vue-element-admin) 是一个后台前端解决方案，它基于 [vue](https://github.com/vuejs/vue) 和 [element-ui](https://github.com/ElemeFE/element)实现。

- [使用文档](https://panjiachen.gitee.io/vue-element-admin-site/zh/)

## 开发

```bash
# 克隆项目
git clone https://github.com/leedom92/vue-element-admin.git

# 进入项目目录
cd vue-element-admin

# 安装依赖
pnpm install

# 建议不要直接使用 cnpm 安装依赖，会有各种诡异的 bug。可以通过如下操作解决 npm 下载速度慢的问题
pnpm install --registry=https://registry.npm.taobao.org

# 启动服务
pnpm dev
```

浏览器访问 http://localhost:9527

## 发布

```bash
# 构建生产环境
pnpm build
```

## 其它

```bash
# 预览发布环境效果
pnpm preview

# 预览发布环境效果 + 静态资源分析
pnpm preview -- --report

# 代码格式检查
pnpm lint

# 代码格式检查并自动修复
pnpm lint -- --fix
```
## Online Demo

[在线 Demo](https://panjiachen.github.io/vue-element-admin)

## License

[MIT](https://github.com/leedom92/vue-element-admin/blob/main/LICENSE)

Copyright (c) 2017-present PanJiaChen

Copyright (c) 2024-present Leedom
