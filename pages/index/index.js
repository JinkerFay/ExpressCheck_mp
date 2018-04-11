//index.js
Page({
  // 页面的初始数据 
  data: {
    loading:false,
    expTextName:[], /*快递公司*/
    expressList:[],
    nu:null,
    value:null,
    flag:true, /*判断是否查询成功*/
  },
  onLoad:function(options){

  },
  upper:function(e){
    console.log(e);

  },
  //事件处理函数
  searchTap:function() {
    
    this.setData({
      loading: true, /*显示加载中*/
      expressList: [],
      expTextName: [] 
      } ) 
    // var that = this;  不推荐转存this，受到词法作用域限制
    wx.request({
      url:'http://route.showapi.com/64-19',
      data:{
        showapi_appid:'58649',
        showapi_sign:'0b90e7080da949e5b0ab33b3ee4bde44',
        nu: this.data.nu,
        com:'auto',
      },
      success:function(res){
        console.log(res.data.showapi_res_body.data);
        this.setData({
          expressList:res.data.showapi_res_body.data,
          expTextName: '快递公司：' + res.data.showapi_res_body.expTextName,
          flag:res.data.showapi_res_body.flag,
          //  value: null,, /*查询成功后自动清除输入框*/
          loading:false,
        })
      }.bind(this),
  
    })
  } ,

  // 将输入的单号存入nu 
  expressInput:function(e){
    this.setData({
      nu:e.detail.value
    })
  }
 
})
