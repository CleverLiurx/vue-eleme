# eleme 前端部分
```
[体验地址](http://woyou.cool/) (微信浏览器可以api支付，其他浏览器只能扫码支付)

参考1 https://h5.ele.me/
参考2 饿了么App
参考3 支付宝小程序饿了么

这个项目原先放在code.aliyun上，刚弄个过来的。
本来想写个网易云音乐的，但是本人对音乐实在是讨厌，再加上网页对饿了么的开源项目比较对所以选择了饿了么。
数据大部分来自于H5的饿了么，部分数据来自网络。后端部分采用了node + express + mongoDB，写的比较乱还在整理中，马上也会放上来。
最后，由于本人实在是穷，短信验证的接口就不开放了，大家先使用密码登录，后续我会使用邮箱发送验证码。体验地址可以注册。
关于商家，现在只开放了“亚慧小吃街”，“汉堡王”，“田老师红烧肉”这三个。
如有问题，联系vw：13131451002，欢迎大家一起建设此项目。
游客账号：11111111111  密码：000000
```
## 技术栈
vue2 + vuex + vue-router + webpack + ES6/7 + axios + flex
## steps
```
step1： 登录(账号密码+手机号验证码)
        定位(高德定位)
        进度：/----------/ 100%

step2： 商家相关(商家列表展示+商家搜索+排序)
        进度：/----------/ 100%

step3： 店铺(店铺商品详情+评论+购物车)
        进度：/----------/ 100%

step4： 结算(价钱0.1折+添加与选择地址)
        支付(非微信浏览器扫码支付+微信浏览器JSAPI支付)
        订单(成功订单+失败订单+删除订单)
        进度：/----------/ 100%

step5:  收货地址系统(高德地图选择地址)
        红包(领取+使用)
        模拟配送(ArcGIS API for JavaScript || Mapnik)
        进度：/-_________/ 010%
```
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```


### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
