# 演示地址
<a href="https://xdhan.github.io/vue-dropbox" target="_blank"></a>

# 安装
```
yarn add vue-dropbox
# 或者
npm install vue-dropbox
```

# 使用
## slot
### `#left`
  标题栏居左内容

### `#center`
  标题栏居中内容

### `#right`
  标题栏居右内容

### `#content`
  主内容

## props
### `drag-class`
  - String
  自定义窗口主体类名

###  `drag-header-class`
  - String
  自定义窗口标题栏类名

### `drag-content-class`
  - String
  自定义窗口正文类名

### `dragdisable`
  - Array
  标题栏需要禁用拖曳功能的部分
  比如 `:dragdisable="['left','right']"`
  表示标题栏只有 `center` 部分可以鼠标拖动

### `left`
  - String
  left="10" 或者 left="10px" 都可
  初始相对于父容器位置

### `top`
  - String
  top="10" 或者 top="10px" 都可
  初始相对于父容器位置

### `visible.sync`
  - Boolean
  配置后窗口将可显示或者可关闭
