Page({
  onLoad:function(){
    var that = this;
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          scrollHeight: res.windowHeight - 80
        })
      }
    })


    // wx.request({
    //   url: 'https://api.douban.com/v2/movie/top250', 
    //   dataType:'json',
    //   success: function(res) {
    //     console.log(res.data)
    //   }
    // })
  },


  onReady: function (e) {
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    this.audioCtx = wx.createAudioContext('myAudio')
  },
  data: {

    scrollHeight:0,
    music: {
        id:0,
        poster:'http://www.caiyiluo.online/music/5.jpg',
        name:'下雨的季节',
        author:'本兮',
        src:'http://www.caiyiluo.online/music/5.mp3'
      },

    musicList:[
      {
        id:0,
        poster:'http://www.caiyiluo.online/music/5.jpg',
        name:'下雨的季节',
        author:'本兮',
        src:'http://www.caiyiluo.online/music/5.mp3'
      },
      {
        id:1,
        poster:'http://www.caiyiluo.online/music/6.jpg',
        name:'你拿得住我吗',
        author:'寐加岛',
        src:'http://www.caiyiluo.online/music/6.mp3'
      },
      {
        id:2,
        poster:'http://www.chinavane.online/music/1.jpg',
        name:'暧昧',
        author:'薛之谦',
        src:'http://www.chinavane.online/music/1.mp3'
      },
      {
        id:3,
        poster:'http://www.chinavane.online/music/2.jpg',
        name:'动物世界',
        author:'薛之谦',
        src:'http://www.chinavane.online/music/2.mp3'
      },
      {
        id:4,
        poster:'http://www.chinavane.online/music/3.jpg',
        name:'说散就散',
        author:'JC',
        src:'http://www.chinavane.online/music/3.mp3'
      },
      {
        id:5,
        poster:'http://www.chinavane.online/music/4.jpg',
        name:'韩国style',
        author:'泡泡',
        src:'http://www.chinavane.online/music/4.mp3'
      }
    ]



  },

  playMusic:function(event){
    var idx = event.target.dataset.idx;
    var that = this;
    console.log(this.data.musicList[idx])
    that.setData({
      music: this.data.musicList[idx] // 我们获取到了一个下标，然后通过这个下标去查找musicList中的对应位置的对象，然后再把这个对象设置到music这个数据内容中
    })
    
    setTimeout(function(){
       that.audioCtx.play();
    },500)
   

      
  },

  endedHandle:function(){
    var that = this;
    var pos = 0;
    if( that.data.music.id + 1 >= that.data.musicList.length ){
      pos = 0;
    }else{
      pos = that.data.music.id + 1;
    }

    var playingMusic= that.data.musicList[pos];
    that.setData({
      music: playingMusic
    })

    setTimeout(function(){
      that.audioCtx.play();
    },500)

  },
  audioPlay: function () {
    this.audioCtx.play()
  },
  audioPause: function () {
    this.audioCtx.pause()
  },
  audio14: function () {
    this.audioCtx.seek(30)//快进到多少秒
  },
  audioStart: function () {
    this.audioCtx.seek(0)
  }
})