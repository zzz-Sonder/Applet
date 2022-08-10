// pages/4-wxs/4-wxs.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        startTime:21314235211,
        goodsList:["aaa","bbb","ccc","vvv","asd","sav"],
        mytext:''
        
    },
    handleInput(ev){
        console.log(ev.detail.value);
        this.setData({
            mytext:ev.detail.value
        })
    },

    // handleDate(){
    //     return "111111111111"
    // },

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