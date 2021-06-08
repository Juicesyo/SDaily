// pages/edit/edit.js
var formData_week;
var formData_courseTime;
var formData_radioItems = "单周";
var formData_courseName;
var formData_courseDetail;
Component({
  /**
   * 页面的初始数据
   */
  data: {
    showTopTips: false,
    weekIndex: 0,
    weeks: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
    courseTimeIndex: 0,
    courseTime: ["第一节课","第二节课","第三节课","第四节课","第五节课","第六节课","第七节课","第八节课","第九节课","第十节课","第十一节课",],
    radioItems: [{
        name: '单周',
        value: '0',
        checked: true
      },
      {
        name: '双周',
        value: '1'
      }
    ],
    //设置默认值
    formData: {
      radio:0
    },
    rules: [{
    //   name: 'radio',
    //   rules: {
    //     required: true,
    //     message: '请选择单双周'
    //   },
    // }, {
      name: 'week',
      rules: {
        required: true,
        message: '请选择星期'
      },
    }, {
      name: 'courseTime',
      rules: {
        required: true,
        message: '请选择第几节课'
      },
    }, ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  methods: {
    bindWeekChange: function (e) {
      var radioItems = this.data.weeks;
      formData_week = radioItems[e.detail.value];
      this.setData({
        weekIndex: e.detail.value,
        [`formData.week`]: e.detail.value
      })
    },
    bindCourseTimeChange: function (e) {
      formData_courseTime = this.data.courseTime[e.detail.value];
      this.setData({
        courseTimeIndex: e.detail.value,
        [`formData.courseTime`]: e.detail.value
      })
    },
    radioChange: function (e) {
      var radioItems = this.data.radioItems;
      formData_radioItems = radioItems[e.detail.value].name;
      for (var i = 0, len = radioItems.length; i < len; ++i) {
        radioItems[i].checked = radioItems[i].value == e.detail.value;
      }
      this.setData({
        radioItems: radioItems,
        [`formData.radio`]: e.detail.value
      });
    },
    courseName(e){
      formData_courseName = e.detail.value
      //console.log( e.detail.value)
    },
    courseDetail(e){
      formData_courseDetail = e.detail.value
    },
    submitForm(e) {
      //console.log(formData_week,formData_courseTime,formData_radioItems)
      this.selectComponent('#form').validate((valid, errors) => {
        //console.log('valid', valid, errors)
        if (!valid) {
          const firstError = Object.keys(errors)
          if (firstError.length) {
            this.setData({
              error: errors[firstError[0]].message
            })
          }
        }else {
          console.log(formData_courseName,formData_courseDetail);
          wx.showToast({
            title: '保存成功',
            icon: 'success',
            duration: 1000
          })
          
        }
      })
    },
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