## 使用 VUE 搭建的后台管理页面

基于 vue3.0 + TypeScript 开发的响应式博客。

**版本**

**vue：3.0.0**

## 主要开发目录结构 src

```
src/
|-- api					接口目录
|-- components			功能组件目录
|-- layout				页面结构组件目录
|-- router				路由目录
|-- store				数据管理目录
|-- styles 				样式目录
|-- utils				工具目录
`-- views 				视图目录
```

接口前缀配置为: **src/utils/request.ts**

```typescript
const service = axios.create({
  baseURL: 'http://127.0.0.1:8080',
  timeout: 5000
})
```



## 后台接口代码

使用 Go 搭建的 API 后台：**[api-go](https://github.com/wantidea/api-go)**



## 使用

开发：

```bash
npm install
npm run serve
```

生产部署：

```bash
npm install
npm run build
```

