// pages/dynamic/index.js
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
      totalPrice: 0, // 金额
      saveHidden:true, // 去结算
      list: [],
      allSelect: true, // 是否全选
      delBtnWidth: 60
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.onShow();
  },
  getGoods: function(){
    var shopList = [];
    // 获取购物车数据
    var shopCarInfoMem = wx.getStorageSync('shopCarInfo');
    if (shopCarInfoMem && shopCarInfoMem.shopList) {
      shopList = shopCarInfoMem.shopList
    }
    var select = this.data.allSelect
    this.data.list = shopList;
    this.allCount(select,shopList);
  },
  selectTap:function(e){
    var select = this.data.allSelect
    var index = e.currentTarget.dataset.index;
    var list = this.data.list;
    if (index !== "" && index != null) {
      list[parseInt(index)].active = !list[parseInt(index)].active;
      this.allCount(select,list);
    }
  },
  allCount: function (select,list){
    var shopList = list ;
    var money = 0, _len = shopList.length;
    var allSelect = select;
    var shopCarInfo = {};
    var tempNumber = 0;
    for(var i=0;i<_len;i++){
      var item = shopList[i];
      if (item.active) {
        money += item.number * item.price;
      }
      tempNumber = tempNumber + shopList[i].number
    }
    for (var i = 0; i < _len; i++) {
      var curItem = shopList[i];
      if (curItem.active) {
        allSelect = true;
      } else {
        allSelect = false;
        break;
      }
    }
    shopCarInfo.shopList = shopList;
    shopCarInfo.shopNum = tempNumber;
    wx.setStorage({
      key: "shopCarInfo",
      data: shopCarInfo
    });
    this.setData({
      list: shopList,
      totalPrice: money,
      allSelect: allSelect
    });
  },
  jiaBtnTap:function(e){
    // 加产品
    var index = e.currentTarget.dataset.index;
    var list = this.data.list;
    var selet = this.data.allSelect
    if (index !== "" && index != null) {
      if (list[parseInt(index)].number < 10) {
        list[parseInt(index)].number++;
        this.allCount(selet, list);
      }
    }
  },
  jianBtnTap:function(e){
    // 减产品
    var index = e.currentTarget.dataset.index;
    var list = this.data.list;
    var selet = this.data.allSelect
    if (index !== "" && index != null) {
      if (list[parseInt(index)].number > 1) {
        list[parseInt(index)].number--;
        this.allCount(selet, list);
      }
    }
  },
  delItem:function(e){
    // 删除产品
    var index = e.currentTarget.dataset.index;
    var list = this.data.list;
    list.splice(index, 1);
    this.allCount(this.data.allSelect,list);
  },
  bindAllSelect:function(){
    // 全选
    var list = this.data.list;
    var currentAllSelect = this.data.allSelect;
    if (currentAllSelect){
      for (var i = 0; i < list.length; i++) {
        var curItem = list[i];
        curItem.active = false;
      }
      currentAllSelect = false;
    }else{
      for (var i = 0; i < list.length; i++) {
        var curItem = list[i];
        curItem.active = true;
      }
    }
    this.allCount(!currentAllSelect,list)
  },
  touchS: function (e) {
    if (e.touches.length == 1) {
      this.setData({
        startX: e.touches[0].clientX
      });
    }
  },
  touchE: function (e) {
    var index = e.currentTarget.dataset.index;
    if (e.changedTouches.length == 1) {
      var endX = e.changedTouches[0].clientX;
      var disX = this.data.startX - endX;
      var delBtnWidth = this.data.delBtnWidth;
      //如果距离小于删除按钮的1/2，不显示删除按钮
      var left = disX > delBtnWidth / 2 ? "margin-left:-" + delBtnWidth + "px" : "margin-left:0px";
      var list = this.data.list;
      if (index !== "" && index != null) {
        list[parseInt(index)].left = left;
        this.setData({
            list: list
        });

      }
    }
  },
  touchM: function (e) {
    var index = e.currentTarget.dataset.index;

    if (e.touches.length == 1) {
      var moveX = e.touches[0].clientX;
      var disX = this.data.startX - moveX;
      var delBtnWidth = this.data.delBtnWidth;
      var left = "";
      if (disX == 0 || disX < 0) {//如果移动距离小于等于0，container位置不变
        left = "margin-left:0px";
      } else if (disX > 0) {//移动距离大于0，container left值等于手指移动距离
        left = "margin-left:-" + disX + "px";
        if (disX >= delBtnWidth) {
          left = "left:-" + delBtnWidth + "px";
        }
      }
      var list = this.data.list;
      if (index != "" && index != null) {
        list[parseInt(index)].left = left;
        this.setData({
            list: list
        });
      }
    }
  },
  toPayOrder:function(){
    // 去结算
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.getGoods();
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})