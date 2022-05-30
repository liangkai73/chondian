// pages/map/map.ts
let markers = [{
    id: 1,
    latitude: 26.15061,
    longitude: 119.13199,
    iconPath: '/assets/marker_down.png',
    height: 30,
    width: 8,
    fast: 8,
    low: 5,
    customCallout: {
      anchorY: 0,
      anchorX: 0,
      display: 'ALWAYS'
    }
  },
  {
    id: 2,
    latitude: 26.12161,
    longitude: 119.13399,
    iconPath: '/assets/marker_down.png',
    height: 30,
    width: 8,
    fast: 10,
    low: 7,
    customCallout: {
      anchorY: 0,
      anchorX: 0,
      display: 'ALWAYS'

    }
  },
  {
    id: 3,
    latitude: 26.10161,
    longitude: 119.10399,
    iconPath: '/assets/marker_down.png',
    height: 30,
    width: 8,
    fast: 10,
    low: 7,
    customCallout: {
      anchorY: 0,
      anchorX: 0,
      display: 'ALWAYS'

    }
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
    activeMarkerId: NaN,
    current: 0,
    pageType: 1, // 1 foot 2 swiper 
    stationList: [],
    toolsHeight: "100px",
    popupShow: false,
    filterMarkerStr: '',

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    this.mapCtx = wx.createMapContext('myMap')
    wx.getLocation({
      type: 'wgs84',
      isHighAccuracy: true,
      success: (res) => {
        console.log(res)
        this.data.latitude = res.latitude;
        this.data.longitude = res.longitude;
        this.setData({
          latitude: res.latitude,
          longitude: res.longitude
        });
        // 获取站点
        this.getMarkerist();
        this.getStationList()
      }
    })


  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },
  // 获取标记点
  getMarkerist() {
    this.setData({
      markers: markers
    })
  },
  // 获取站点列表
  getStationList() {
    let list = [{
        id: 1,
        current: 0,
        name: '仓山区橘园洲站充电站',
        desc: '福建省福州市仓山区红网路',
        distance: '500米',
        fast: 10,
        low: 8,
        price: 1.5000,
        mark: ['限时免费停车', '休息室']
      },
      {
        id: 2,
        current: 1,
        name: '仓山区橘园洲站充电站',
        desc: '福建省福州市仓山区红网路',
        distance: '500米',
        fast: 10,
        low: 8,
        price: 1.5000,
        mark: ['限时免费停车', '休息室']
      },
      {
        id: 3,
        current: 2,
        name: '仓山区橘园洲站充电站',
        desc: '福建省福州市仓山区红网路',
        distance: '500米',
        fast: 10,
        low: 8,
        price: 1.5000,
        mark: ['限时免费停车', '休息室']
      }
    ]
    this.setData({
      stationList: list
    })
  },
  // 点击地域
  tapMap() {
    this.setData({
      pageType: 1
    })
  },
  // 选择地点
  choseTap(e) {
    let id = e.markerId;

    let node = this.data.stationList.filter((e) => {
      return e.id == id
    })[0]
    this.setData({
      activeMarkerId: id,
      pageType: 2,
      toolsHeight: "300px",
      current: node.current
    })


  },
  // 切换地点swiper
  changeSwiper(e, s) {
    this.setData({
      activeMarkerId: e.detail.currentItemId
    });
    // 定位到该地点
    const activeMarker = this.data.markers.filter(e => {
      return e.id == this.data.activeMarkerId;
    })[0]

    this.setData({
      latitude: activeMarker.latitude,
      longitude: activeMarker.longitude,
    });

  },
  // 打开弹出层
  // 弹出search popup
  showMarkerPopup() {
    this.setData({
      popupShow: true
    })
  },
  // 关闭弹出层
  onClosePopup() {
    this.setData({
      popupShow: false
    });
  },
  linkToUser() {
    wx.redirectTo({
      url: '/pages/user/user'
    })
  },
  // 跳转到电站详情页
  linkToStation() {
    wx.navigateTo({
      url: '/pages/station/station',
    })
  },

  // 扫一扫
  getscanCode() {
    wx.scanCode({
      success(res) {
        console.log(res)
      }
    })
  },
  // 拉起app导航
  getMapApp() {
    let mpCtx = wx.createMapContext('map1')
    mpCtx.openMapApp({
      latitude: 26.15061,
      longitude: 119.13199,
      destination: "闽侯县政府",
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {},

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