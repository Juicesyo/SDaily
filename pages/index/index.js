// pages/index/index.js
var time = require('../../utils/util');
var date_week = time.getWeekByDate(new Date());
var today = time.formatDate(new Date());
var sd; //单双周

function getWeek() {
  var week = wx.getStorageSync('week'); //周数
  var date = wx.getStorageSync('date'); //周数修改日期
  if (week == '') {
    week = '1';
    wx.setStorageSync('week', '1');
    wx.setStorageSync('date', today);
  } else if (date_week == 1 && date != today) {
    week = parseInt(week) + 1;
    wx.setStorageSync('week', week);
    wx.setStorageSync('date', today);
  }

  if (week % 2 == 0) {
    sd = "双周";
  } else {
    sd = "单周";
  }
  wx.setNavigationBarTitle({
    title: "第" + week + "周" + "（" + sd + "）",
  })
}

var data = {};

function getData() {
  if (sd == "单周") {
    data = wx.getStorageSync('单周课表')
  } else {
    data = wx.getStorageSync('双周课表')
  }
}

getWeek();
getData();

Page({
  /**
   * 页面的初始数据
   */
  data: {
    menuHidden: false,
    // saveButtonHidden: true,
    // textareaDisabled: true,
    menuOpen: false,
    slidebarHidden: true,
    array_time: ['上午一二', '三四节课', '下午五六', '七八节课', '自习九十', '十十一'],

    array_course_7: data['星期日'],
    array_course_1: data['星期一'],
    array_course_2: data['星期二'],
    array_course_3: data['星期三'],
    array_course_4: data['星期四'],
    array_course_5: data['星期五'],
    array_course_6: data['星期六']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    switch (Number(date_week)) {
      case 7:
        this.setData({
          placeholder_color_7: "rgb(247,184,129)"
        });
        break;
      case 1:
        this.setData({
          placeholder_color_1: "rgb(214,236,240)"
        });
        break;
      case 2:
        this.setData({
          placeholder_color_2: "rgb(255,140,0)"
        });
        break;
      case 3:
        this.setData({
          placeholder_color_3: "rgb(135,206,250)"
        });
        break;
      case 4:
        this.setData({
          placeholder_color_4: "rgb(222,184,135)"
        });
        break;
      case 5:
        this.setData({
          placeholder_color_5: "rgb(255,255,224)"
        });
        break;
      case 6:
        this.setData({
          placeholder_color_6: "rgb(242,202,92)"
        });
        break;
    }

  },

  // onClick_edit() {
  //   this.setData({
  //     textareaDisabled: false,
  //     saveButtonHidden: false,

  //     menuOpen: false,
  //     menuHidden: true,
  //     slidebarHidden: true
  //   });
  //   wx.showToast({
  //     title: '已开启编辑模式',
  //     duration: 1000
  //   });
  // },
  onClick_setting() {
    wx.navigateTo({
      url: '../setting/setting',
    })
  },
  onClick_login() {
    wx.navigateTo({
      url: '../login/login',
    })
  },
  onClick_more() {
    wx.navigateTo({
      url: '../more/more',
    })
  },
  onClick_menu() {
    if (this.data.menuOpen) {
      this.setData({
        menuOpen: false,
        slidebarHidden: true
      });
    } else {
      this.setData({
        menuOpen: true,
        slidebarHidden: false
      });
    }
  },
  onClick_refresh() {
    getWeek();
    getData();
    this.setData({
      array_course_7: data['星期日'],
      array_course_1: data['星期一'],
      array_course_2: data['星期二'],
      array_course_3: data['星期三'],
      array_course_4: data['星期四'],
      array_course_5: data['星期五'],
      array_course_6: data['星期六']
    })
  },
  // saveButton(e) {
  //   console.log('get' , e.detail.value)
  //   this.setData({
  //     menuOpen: true,
  //     menuHidden: false,
  //     slidebarHidden: false,
  //     saveButtonHidden: true,
  //     textareaDisabled: true
  //   })
  //   this.onClick_menu()
  //   try {
  //     //wx.setStorageSync("arrayTime", this.data.array_time);
  //     wx.showToast({
  //       title: '保存成功',
  //       duration: 1000
  //     })
  //   } catch (e) {
  //     wx.showToast({
  //       title: '保存失败',
  //       duration: 1000
  //     })
  //   }
  // },

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

  },
})