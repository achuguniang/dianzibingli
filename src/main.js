/*
 * @Description: 
 * @Version: 
 * @Author: WangYue
 * @Date: 2019-10-21 10:12:21
 * @LastEditors: 
 * @LastEditTime: 2019-12-18 10:14:24
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'


import "Static/sdeEditor/sde.config.js?t=88";
import "Static/sdeEditor/ueditor/themes/default/css/ueditor.min.css";
import "Static/sdeEditor/ueditor/ueditor.all.min.js";
// import "Static/sdeEditor/ueditor/ueditor.all.js";
import "Static/sdeEditor/ueditor/lang/zh-cn/zh-cn.js";
import "Static/sdeEditor/js/sde-ie8-design.js";

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
