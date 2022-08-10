// pages/5-request/5-request.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      datalist:[]
    },
    handleAjax(){
        wx.request({
           'url': 'https://m.maoyan.com/ajax/movieonInfoList?token=&optimus_uuid=74B5FOA032A711EB82DD6B9282E93C676D27D7B9731D4E608D7612C3E708c120&optimus_risk_level=71&optimus_code=10',
          method:"get",
          data:{

          },
          success:(res)=>{
            console.log(res.data);
            this.setData({datalist:res.data.movieList})
          },
          fail:()=>{
            console.log("失败");  
          }
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

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