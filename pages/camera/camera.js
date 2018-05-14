Page({
  /**
   * 初始化数据
   */
  data: {
    phone: '',
    array:["请选择","闯红灯","压实线","违章停车"],
    objectArray: [
      {
        id: 0,
        name: '请选择'
      },
      {
        id: 1,
        name: '闯红灯'
      },
      {
        id: 2,
        name: '压实线'
      },
      {
        id: 3,
        name: '违章停车'
      }
    ],
    indexPicker: 0,
    note: "无"

   
  },

  /**
   * 监听手机号输入
   */
  listenerPhoneInput: function (e) {
    this.data.phone = e.detail.value;

  },

  

  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },

  clickcam: function(e){
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album','camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths
      }
    })
    /*wx.request({
      url: 'http://597819307.chenduoru.xyz:8000/add/?a=4&b=5',
      method: 'GET',
      data: '?a=4&b=5',    //参数为键值对字符串
      header: {
        //设置参数内容类型为x-www-form-urlencoded
        'content-type': '',

      },
      success: function (res) {
        console.log(res.data)
        getApp().data.plateNum = res.data;

      }
    })*/ //与服务器通讯
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      indexPicker: e.detail.value
    })
  },
  confirmInput: function (e){
    //点击完成时， 触发 confirm 事件，event.detail = {value: value}
    console.log(this.data.note)
    console.log("input:",e.detail.value);
    this.setData({
      note: e.detail.value
    })
    console.log(this.data.note)
  },
  uploadClick: function (e){
    console.log("uploadClick:",e)
    /*wx.request({
      url: 'http://597819307.chenduoru.xyz:8000/add/?a=4&b=5',
      method: 'GET',
      data: '?a=4&b=5',    //参数为键值对字符串
      header: {
        //设置参数内容类型为x-www-form-urlencoded
        'content-type': '',

      },
      success: function (res) {
        console.log(res.data)
        getApp().data.plateNum = res.data;
        wx.navigateTo({
          url: '/pages/end/end'
        })
      }
    })*/
    wx.navigateTo({
      url: '/pages/end/end'
    })
  
  }
  
})
