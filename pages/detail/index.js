// pages/detail/index.js
const list = require('../../data/lol_details_duowan')
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail:{},
    windowHeight: 0,
    screenHeight: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(options)
    const res=list.filter(item=>{
      return item.id===options.id
    })
    this.setData({
      detail:res[0],
      windowHeight: app.globalData.windowHeight,
      screenHeight: app.globalData.screenHeight
    })
    wx.setNavigationBarTitle({
      title: `${this.data.detail.title}-${this.data.detail.name}`
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})