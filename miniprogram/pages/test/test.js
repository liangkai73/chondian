

const markers = [{
  id: 3,
  latitude: 23.096994,
  longitude: 113.324520,
  iconPath: '/image/location.png',
  customCallout: {
    anchorY: 10,
    anchorX: 0,
    display: 'ALWAYS',
  },
}]



Page({
  data: {
    latitude: 23.096994,
    longitude: 113.324520,
    markers: [],
    customCalloutMarkerIds: [],
    num: 1
  },
  onReady: function (e) {
    this.mapCtx = wx.createMapContext('myMap')
  },

  addMarker() {
    
    this.setData({
      markers:markers,
      customCalloutMarkerIds: [2,3,4],
    })
  },
})
