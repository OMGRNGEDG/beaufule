const config = require('../../config');

//获取应用实例 //index.js
const app = getApp()

Page({
  data: {
    showVideoBox: false, // 视频显示开关
    videoBoxUrl:"", // 视频连接地址
    videoContext: "",
    list: [
      {
      "barCode": "2",
      "categoryId": 12317,
      "characteristic": "各种人群的外套",
      "commission": 3.00,
      "commissionType": 1,
      "dateAdd": "2018-05-03 11:31:03",
      "dateEnd": "2018-05-30 12:00:00",
      "dateEndCountDown": "2014年",
      "dateStart": "2018-05-03 11:29:43",
      "dateUpdate": "2018-05-04 13:06:54",
      "id": 46988,
      "logisticsId": 0,
      "minPrice": 18.00,
      "minScore": 10,
      "name": "外套",
      "numberFav": 0,
      "numberGoodReputation": 0,
      "numberOrders": 18,
      "originalPrice": 24.00,
      "paixu": 2,
      "pic": "https://cdn.it120.cc/apifactory/2018/05/03/be254ea0b059464b5ffeec70c652e320.jpg",
      "pingtuan": false,
      "pingtuanPrice": 16.00,
      "recommendStatus": 1,
      "recommendStatusStr": "推荐",
      "shopId": 0,
      "status": 0,
      "statusStr": "上架",
      "stores": 20,
      "userId": 6378,
      "videoId": "",
      "views": 23,
      "weight": 1.00
    }, {
      "barCode": "1",
      "categoryId": 12314,
      "characteristic": "好看",
      "commission": 2.00,
      "commissionType": 1,
      "dateAdd": "2018-05-03 11:24:11",
      "dateEnd": "2018-05-28 12:00:00",
      "dateEndCountDown": "2014年",
      "dateStart": "2018-05-03 11:22:51",
      "dateUpdate": "2018-05-04 13:05:59",
      "id": 46987,
      "logisticsId": 0,
      "minPrice": 8.00,
      "minScore": 10,
      "name": "儿童袜子",
      "numberFav": 0,
      "numberGoodReputation": 0,
      "numberOrders": 10,
      "originalPrice": 10.00,
      "paixu": 2,
      "pic": "https://cdn.it120.cc/apifactory/2018/05/03/ab5484683e0a6da1f1893e046bf16177.png",
      "pingtuan": true,
      "pingtuanPrice": 7.00,
      "recommendStatus": 1,
      "recommendStatusStr": "推荐",
      "shopId": 0,
      "status": 0,
      "statusStr": "上架",
      "stores": 20,
      "userId": 6378,
      "videoId": "",
      "views": 10,
      "weight": 0.80
    }] // 购物列表 
  },
  onReady: function(){
    this.setData({
      videoContext: wx.createVideoContext('videoBox', this)
    });
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
  openVideo(e){
    let _url = e.currentTarget.dataset.url;
    if(_url){
      this.setData({
        videoBoxUrl: _url,
        showVideoBox: true
      });
      this.data.videoContext.requestFullScreen({
        direction: 0
      });
    }
  },
  videofullscreen(e) {
    // 缩小视频
    if (!e.detail.fullScreen) {
      this.videoBoxEnd()
    }
  }
})
