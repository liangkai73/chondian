// pages/map/map.ts
import StationListApi from '../../utils/apis/StationListApi';

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
const makerItem = {
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
      type: 'gcj02',
      isHighAccuracy: true,
      success: (res) => {
        console.log(res)
        this.setData({
          latitude: res.latitude,
          longitude: res.longitude
        });
        // 获取站点
        // this.getMarkerist();
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
    // let list = [{
    //     id: 1,
    //     current: 0,
    //     name: '仓山区橘园洲站充电站',
    //     desc: '福建省福州市仓山区红网路',
    //     distance: '500米',
    //     fast: 10,
    //     low: 8,
    //     price: 1.5000,
    //     mark: ['限时免费停车', '休息室']
    //   },
    //   {
    //     id: 2,
    //     current: 1,
    //     name: '仓山区橘园洲站充电站',
    //     desc: '福建省福州市仓山区红网路',
    //     distance: '500米',
    //     fast: 10,
    //     low: 8,
    //     price: 1.5000,
    //     mark: ['限时免费停车', '休息室']
    //   },
    //   {
    //     id: 3,
    //     current: 2,
    //     name: '仓山区橘园洲站充电站',
    //     desc: '福建省福州市仓山区红网路',
    //     distance: '500米',
    //     fast: 10,
    //     low: 8,
    //     price: 1.5000,
    //     mark: ['限时免费停车', '休息室']
    //   }
    // ]

    StationListApi.sationList({}, res => {
      let current = -1;
      let arr = res.data.data.filter(i => {
        return i.electricType != 0
      })

      arr = arr.map(i => {
        current = current + 1
        // 计算距离
        let staionDistance = this.getShortDistance(this.data.longitude, this.data.latitude, i.longitude, i.latitude)
        if (staionDistance < 1000) {
          staionDistance = parseFloat(staionDistance).toFixed(2) + 'm'
        } else {
          staionDistance = parseFloat(staionDistance / 1000).toFixed(2) + 'km'
        }

        return Object.assign({
          current,
          staionDistance
        }, makerItem, i)
      })
      arr = arr.slice(0, 5)
      console.log(arr)

      this.setData({
        markers: arr,
        stationList: arr
      })

    })

    // this.setData({
    //   stationList: list
    // })
  },
  // 获取电站距离
  getShortDistance(lon1, lat1, lon2, lat2) {
    var DEF_PI = 3.14159265359; // PI
    var DEF_2PI = 6.28318530712; // 2*PI
    var DEF_PI180 = 0.01745329252; // PI/180.0
    var DEF_R = 6370693.5; // radius of earth
    var ew1, ns1, ew2, ns2;
    var dx, dy, dew;
    var distance;
    // 角度转换为弧度
    ew1 = lon1 * DEF_PI180;
    ns1 = lat1 * DEF_PI180;
    ew2 = lon2 * DEF_PI180;
    ns2 = lat2 * DEF_PI180;
    // 经度差
    dew = ew1 - ew2;
    // 若跨东经和西经180 度，进行调整
    if (dew > DEF_PI)
      dew = DEF_2PI - dew;
    else if (dew < -DEF_PI)
      dew = DEF_2PI + dew;
    dx = DEF_R * Math.cos(ns1) * dew; // 东西方向长度(在纬度圈上的投影长度)
    dy = DEF_R * (ns1 - ns2); // 南北方向长度(在经度圈上的投影长度)
    // 勾股定理求斜边长
    distance = Math.sqrt(dx * dx + dy * dy).toFixed(0);
    // console.log(distance)
    return distance;
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
  // 点击导航
  toThirdPartyMap(e) {
    let id = e.target.dataset.markerid;
    let node = this.data.stationList.filter((e) => {
      return e.id == id
    })[0]

    let mpCtx = wx.createMapContext('map1')

    mpCtx.openMapApp({
      latitude: node.latitude * 1,
      longitude: node.longitude * 1,
      destination: node.electricName,
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
    // wx.login({
    //   timeout: 10000,
    //   success: ((res) => {
    //     console.log(res)
    //   })
    // });
    let encryptedData, iv, code = '111'
    wx.getUserInfo({
      success: function (res) {
        encryptedData = res.encryptedData
        encryptedData = res.iv
      }
    })
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