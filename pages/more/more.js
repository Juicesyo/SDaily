// pages/more/more.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    titleText: `<div class="title">
    <center>
  <h1>红包专区</h1>
  <p>（点击图片即可领取红包）</p>
  </center>
</div>
`,
  },
  onClick_meituan(){
    wx.navigateToMiniProgram({
      appId: 'wx2c348cf579062e56',
      path: 'outer_packages/r2xinvite/coupon/coupon?inviteCode=NnOIp-QOs8SiYF1dcSlL5r8phPrCf6qkH7evMyjIoup2NXxNCLYcBbd3bqpv2X2I7IRGQRC3KQAh-7-pg4GiaBaGwBgJpMMnPMAP9tPDQJfLHJic16n-Ppxe5BgwvWlfHqPUGkF3OjEXScT346AignErGcS3m_9UahfcTf7LxLU'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})