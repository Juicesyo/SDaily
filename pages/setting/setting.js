// pages/edit/edit.js
var today = require('../../utils/util').formatDate(new Date());
var formData_week;
var formData_courseIndex;
//var formData_courseTime;
var formData_radioItems = "单周";
var formData_courseName;
//var formData_courseDetail;
Component({
  /**
   * 页面的初始数据
   */
  data: {
    weekValue: wx.getStorageSync('week'),
    showTopTips: false,
    weekIndex: 0,
    weeks: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
    courseTimeIndex: 0,
    courseTime: ["第一节课", "第二节课", "第三节课", "第四节课", "第五节课", "第六节课", "第七节课", "第八节课", "第九节课", "第十节课", "第十一节课", "第十二节课"],
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
      radio: 0
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
  // onLoad: function (options) {
  //   this.setData({
  //     weekValue: wx.getStorageSync('week')
  //   })
  // },
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
      formData_courseIndex = e.detail.value;
      //formData_courseTime = this.data.courseTime[e.detail.value];
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
    courseName(e) {
      formData_courseName = e.detail.value
      //console.log( e.detail.value)
    },
    courseDetail(e) {
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
        } else {
          //console.log(formData_radioItems,formData_week,formData_courseTime,formData_courseName,formData_courseDetail);
          //单周 星期日 第一节课 课名 详情
          var data;
          var getData;
          data = {
            "星期日": [""],
            "星期一": [""],
            "星期二": [""],
            "星期三": [""],
            "星期四": [""],
            "星期五": [""],
            "星期六": [""]
          };
          //console.log(formData_courseIndex)
          //console.log(JSON.stringify(data).replace(data[formData_week][formData_courseIndex],"xxx"))
          //console.log(data);

          if (formData_radioItems == "单周") {
            getData = wx.getStorageSync('单周课表');
            if (getData == '') {
              getData = data;
            }
            getData[formData_week][formData_courseIndex] = formData_courseName;
            wx.setStorageSync('单周课表', getData)
          } else {
            getData = wx.getStorageSync('双周课表');
            if (getData == '') {
              getData = data;
            }
            getData[formData_week][formData_courseIndex] = formData_courseName;
            wx.setStorageSync('双周课表', getData)
          }

          wx.showToast({
            title: '保存成功',
            icon: 'success',
            duration: 1000
          })

        }
      })
    },
    week(e) {
      wx.setStorageSync('week', e.detail.value);
      wx.setStorageSync('date', today);
    }
  },
})