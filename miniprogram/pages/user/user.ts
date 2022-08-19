// pages/user/user.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  // link
  linkTopMap() {
    wx.redirectTo({
      url: "/pages/map/map"
    })
  },
  linkToMycar() {
    wx.navigateTo({
      url: "/pages/car/car"
    })
  },
  linkToOrder() {
    wx.navigateTo({
      url: "/pages/order/order"
    })
  },
  linkToUserInfo() {
    wx.navigateTo({
      url: "/pages/user/info/info"
    })
  },
  linkToWallet() {
    wx.navigateTo({
      url: "/pages/user/wallet/wallet"
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    wx.showModal({
      title: '登录申请',
      content: '点击确定用当前手机号码登录',
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})