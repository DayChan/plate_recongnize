Page({
  data: {
    plateNum: "aaa",
  },
  onLoad: function(){
    this.setData({
      plateNum: getApp().data.plateNum
    })
  },
  inputCon: function(e){
    getApp().data.plateNum = e.detail.value;
    console.log("nowplate:",getApp().data.plateNum)
  },
  clickedit: function (e) {
    console.log(e)
    console.log(getApp().data.plateNum)
  },

})