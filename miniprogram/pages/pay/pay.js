// pages/pay/pay.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    checked: false,
    show: false,
    show2: false,
    currentDate: '12:00',
    minHour: 10,
    maxHour: 20,
  },


  onChange({
    detail
  }) {
    // 需要手动对 checked 状态进行更新
    this.setData({
      checked: detail
    });
    if (detail) {
      this.setData({
        show: true
      });
    }
  },
  closePopup() {
    this.setData({
      show: false
    });
  },
  closePopup2() {
    this.setData({
      show2: false
    });
  },
  onInput(event) {
    this.setData({
      currentDate: event.detail,
    });
  },
  payhandle() {
    console.log(222)
    this.setData({
      show2: true
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {

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