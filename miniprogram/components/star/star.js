// pages/component/star/star.ts
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    num: 0
  },

  /**
   * 组件的初始数据
   */
  data: {
    arr: [],

  },
  lifetimes: {
    attached: function () {
      let a = [];
      for (let i = 0; i < this.data.num; i++) {
        a[i] = i
      }
      this.setData({
        arr: a
      })
    
      console.log(this.data.arr)
    },
    detached: function () {
      // 在组件实例被从页面节点树移除时执行
    },
  },
  /**
   * 组件的方法列表
   */
  methods: {

  }
})