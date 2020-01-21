/*
 * @Description: 
 * @Version: 
 * @Author: WangYue
 * @Date: 2019-10-21 10:12:21
 * @LastEditors: 
 * @LastEditTime: 2019-12-18 10:03:50
 */
import Vue from 'vue'
import Router from 'vue-router'
import index from '../view/index'
import test from '../view/test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'test',
      component: test
    },
    // {
    //   path: '/index',
    //   name: 'index',
    //   component: index
    // },
    {
      path: '/test',
      name: 'test',
      component: test
    }


    // {
    //   path: '/',
    //   name: 'index',
    //   component: index
    // },
    // {
    //   path: '/test',
    //   name: 'test',
    //   component: test
    // }
  ]
})