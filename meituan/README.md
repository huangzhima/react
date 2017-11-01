# react_redux_reactRouter_webpack_meituan

## 使用react、redux、reactRouter、webpack、fetch、es6、babel手动搭建仿美团项目

## 项目结构：

### data:为mock模拟的数据，部分数据使用mockjs实现；

### src:为本地开发的文件目录

#### components:为组件的目录

##### common：为公共组件的存放目录；

##### 在components中除了common文件夹外，其他都为功能模块组件文件夹：

* contains：为容器组件文件夹
* pages：为展示组件文件夹
* actions:当前功能模块的action配置
* actionsType：当前功能模块的actions类型配置文件
* .css:当前模块的样式文件
* reducer：当前模块的state和reducer存放文件
* index.js:当前模块的对外接口文件，也是当前模块的文件整合文件

#### router:为路由配置文件

#### main.js:为项目路口文件

#### store.js:为redux整合reducer,创建store的文件

### static:为静态服务文件夹

## 项目启动：

```bash
npm install  
npm start
```
## 项目打包：

```bash  
npm build
```

## 路由：

* 默认路由为首页；
* 注册页面的路由为："/register"