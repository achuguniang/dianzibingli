
import axios from 'axios'
const service = axios.create({
  // baseURL: process.env.BASE_API + '/hc-patient', // api的base_url
  timeout: 60000,
})

function closeLoad() {

}

// request interceptor
service.interceptors.request.use(config => {


  return config
}, error => {

  console.log(error) // for debug
  return Promise.reject(error.request)
})

// respone interceptor
service.interceptors.response.use(
  /**
   * 下面的注释为通过在response里，自定义code来标示请求状态
   * 当code返回如下情况则说明权限有问题，登出并返回到登录页
   * 如想通过xmlhttprequest来状态码标识 逻辑可写在下面error中
   * 以下代码均为样例，请结合自生需求加以修改，若不需要，则可删除
   */
  response => {
    var res = response.data;
    return res
  },
  error => {
    if (error.message.includes('timeout')) {   // 判断请求异常信息中是否含有超时timeout字符串
      console.info('网络超时，请重试!');
    } else if ("Request failed with status code 404" === error.message) {
      console.info('接口服务找不到，请重试!');
    } else if (error.message == 'Network Error') {
      console.info('连接失败，请检查网络!');
    } else {
      console.info(error.message);
    }
    // closeLoad()
    return Promise.reject(error)
  })

export default service
