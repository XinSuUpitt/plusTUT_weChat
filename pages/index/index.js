//index.js
var util = require('../../utils/util.js')
var app = getApp()
Page({
  data: {
    feed: [],
    feed_length: 0,
    video: [],
    video_length: 0,
    imgUrls: [
      '../../imgs/24213.jpg',
      '../../imgs/24280.jpg',
      '../../imgs/1444983318907-_DSC1826.jpg'
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000,
  },
  //事件处理函数
  bindItemTap: function () {
    wx.navigateTo({
      url: '../answer/answer'
    })
  },
  bindQueTap: function () {
    wx.navigateTo({
      url: '../question/question'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    this.refresh();
  },
  upper: function () {
    wx.showNavigationBarLoading()
    this.refresh();
    console.log("upper");
    setTimeout(function () { wx.hideNavigationBarLoading(); wx.stopPullDownRefresh(); }, 2000);
  },
  lower: function (e) {
    wx.showNavigationBarLoading();
    var that = this;
    setTimeout(function () { wx.hideNavigationBarLoading(); that.nextLoad(); }, 1000);
    console.log("lower")
  },
  //scroll: function (e) {
  //  console.log("scroll")
  //},

  //网络请求数据, 实现首页刷新
  refresh0: function () {
    var index_api = '';
    util.getData(index_api)
      .then(function (data) {
        //this.setData({
        //
        //});
        console.log(data);
      });
  },

  //使用本地 fake 数据实现刷新效果
  refresh: function () {
    var feed = util.getData2();
    var feed_data = feed.data;
    var video = util.getVideo();
    var video_data = video.data;
    this.setData({
      feed: feed_data,
      feed_length: feed_data.length,
      video: video_data,
      video_length: video_data.length
    });
  },

  //使用本地 fake 数据实现继续加载效果
  nextLoad: function () {
    // var next = util.getNext();
    // console.log("continueload");
    // var next_data = next.data;
    // this.setData({
    //   feed: this.data.feed.concat(next_data),
    //   feed_length: this.data.feed_length + next_data.length
    // });
  }


})