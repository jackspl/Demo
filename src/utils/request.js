// 测试接口
// import axios from 'axios'
// let url = ''
// url = process.env.VUE_APP_URL
// const service = axios.create({
//   baseURL: url,
//   timeout: 30000
// })
// export default service

// 开发上线接口
import axios from 'axios'
const service = axios.create({
  baseURL: 'http://39.98.137.86:18080',
  timeout: 30000 // request timeout
})
export default service
