// pages/map/map.ts
let markers = [
    {
        id: 1,
        latitude: 26.15061,
        longitude: 119.13199,
        iconPath: '/assets/marker_down.png',
        height: "40",
        customCallout: {
            anchorY: 0,
            anchorX: 0,
            display: 'ALWAYS'
        },
    }
]

Page({

    /**
     * 页面的初始数据
     */
    data: {
        latitude: 1,
        longitude: 1,
        markers: [],

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
        this.mapCtx = wx.createMapContext('myMap')
        wx.getLocation({
            type: 'wgs84',
            isHighAccuracy: true,
            success: (res) => {
                console.log(res)
                this.data.latitude = res.latitude;
                this.data.longitude = res.longitude;
                this.setData({ latitude: res.latitude, longitude: res.longitude });
                console.log(this)
            }
        })
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
    addMarker() {
        this.setData({
            markers: markers
        })
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