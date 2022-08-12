// pages/9-othercomponent/9-othercomponent.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        checkList:[
            {
                id:1,
                name:"aaa",
                price:100,
                number:1,
                isChecked:false
            },{
                id:2,
                name:"bbb",
                price:100,
                number:2,
                isChecked:false
            },
            {
                id:3,
                name:"ccc",
                price:100,
                number:3,
                isChecked:false
            }
        ]
    },
    handeTap(evt){
        console.log(evt.target.dataset.index);
        var index = evt.target.dataset.index
        this.data.checkList[index].isChecked=!this.data.checkList[index].isChecked
        this.setData({
            checkList:[...this.data.checkList]
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