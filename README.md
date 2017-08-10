# Chart-Component
基于组件式开发Web APP

### 有什么

采用jQuery, fullpagejs和canvas开发的一系列常用图表组件，包括折线图、条形图（横、竖）、饼状图、雷达图、环形图（粗、细）、散点图。可自定义样式、位置和动画。

### 怎么用

首先要实例化对象
```javascript
var h5 = new H5();
```

#### addPage({name},{text}) 方法

新增一个页面。name为页面名称， text为页面默认文本，均为可选

#### addComponent(name, cfg) 方法

新增一个组件。name为组件名称，cfg为配置参数对象。

cfg中包含：

**type**: string，组件类型，有polyline, bar, barverticla, pie, radar, ring, ringbig, scatter

**width/height**: number，组件的宽度和高度

**text**: string，文本内容

**center**： boolean,是否居中显示，true为居中

**css**: 要设置的组件样式

**animateIn**: 进入页面时的动画

**animateOut**: 离开页面时的动画

**bg**: 背景图片地址

可采用如下的方法添加页面和组件，例如：
```javascript
h5.addPage()
    .addComponent('caption',{text:'课程方向分布'})//polyline
    .addComponent('polyline',{
      type: 'polyline',
      width: 530,
      height: 300,
      data: [
        ['JS', .8, '#ff7676'],
        ['HTML', .3],
        ['CSS3', .6],
        ['HTML5', .4],
        ['jQuery', .7]
      ],
      css: {
        top: 100,
        opacity: 0
      },
      animateIn: {
        opacity: 1,
        top: 250
      },
      animateOut: {
        opacity: 0,
        top: 100
      },
      center: true
    })
```

#### whenAddPage事件

在添加页面时要执行的操作，比如每一页有相同的内容时，可以采用该事件进行统一添加。
