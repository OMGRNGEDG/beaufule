//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    showVideoBox: false, // 视频显示开关
    videoBoxUrl:"", // 视频连接地址
  },
  //事件处理函数
  bindViewTap: function() {
    
  },
  onLoad: function () {
  
  },
  videoBoxEnd() {
    // 关闭视频
    this.setData({
      showVideoBox: false
    })
    this.data.videoContext.pause();
  },
  openVideo(){
    console.log("qq")
  }
})
