//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: '欢迎来到娱乐天堂',
    userInfo: {},
    imgUrls: [
      'http://img2.imgtn.bdimg.com/it/u=3321531854,2500880806&fm=23&gp=0.jpg',
      'http://img2.imgtn.bdimg.com/it/u=2587914199,343854685&fm=23&gp=0.jpg',
      'http://img5.imgtn.bdimg.com/it/u=2766206965,1095284860&fm=23&gp=0.jpg'
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})

/*Page({
  data:{
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ]

  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  clickme:function(event){
    console.log(event)
  }
})*/
