import axios from 'axios'
import { store } from '@/store/store'

const service = axios.create({
  baseURL: 'http://127.0.0.1:8080', // 开发环境
  timeout: 5000
})

service.interceptors.request.use(
  config => {
    if (store.getToken()) {
      config.headers[store.getTokenKey()] = store.getToken()
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    const res = response.data

    if (res.code >= 400000) {
      return Promise.reject(new Error(res.msg || 'Error'))
    } else {
      return res
    }
  },
  error => {
    return Promise.reject(error)
  }
)

export default service
