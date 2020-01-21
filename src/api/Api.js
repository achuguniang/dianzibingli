/*
 * @Description: 
 * @Version: 
 * @Author: WangYue
 * @Date: 2019-11-15 11:15:48
 * @LastEditors: 
 * @LastEditTime: 2019-11-15 11:48:17
 */
import request from '@/utils/request'

/**
 * 获取配置字典
 * 
 * @export
 * @param {*} data
 * @returns
 */
export function dicApi(data) {
  return request({
    url: 'static/sdeEditor/data/dic.json',
    method: 'get',
    params : data
  })
}
