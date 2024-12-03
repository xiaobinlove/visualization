import axios, { AxiosResponse, AxiosRequestConfig } from 'axios'
import { message } from 'antd'

const serviceAxios = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL, //这里我简写了  全局配置即可
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
})
//请求拦截器
serviceAxios.interceptors.request
  .use
  //根据业务需求在请求时候做一些配置
  // (response: AxiosRequestConfig) => {
  //     // response.headers['Access-Control-Allow-Origin'] = '*'
  //     response.headers?.['Content-Type'] = 'application/json'        return response;
  // }
  ()

serviceAxios.interceptors.response.use((response: AxiosResponse) => {
  // response.headers['Access-Control-Allow-Origin'] = '*'
  // if (response.status == 200) {
  //   return response.data
  // } else {
  //   return requestHandler
  // }
  const data = response.data
  if (data.success) {
    return data
  } else {
    // const errorMessage
    const { message: msg } = data
    const { config } = response
    const { url } = config
    const errorData = msg || `failed to cal ${url}`
    const errorMessage = typeof errorData === 'string' ? errorData : errorData.toString()
    message.error(errorMessage)
    return Promise.reject(data)
  }
})

// interface axiosParams<T> extends AxiosResponse {
//     data: T
// }
interface customDataParams<T> {
  //根据后端返回的估固定🧷格式
  data: T
  message: string
  success: boolean
  code: number
}

// type returnResponseType<T> = axiosParams<customDataParams<T>>
type methodType = 'get' | 'post' | 'put' | 'delete'

type paramsData<T> = {
  params?: T
  data?: T
}
const RequestAxiosInstance = <T, P>(url: string, method: methodType, params: paramsData<P> | object, config?: AxiosRequestConfig) => {
  const data = serviceAxios<unknown, customDataParams<T>>({
    url,
    method,
    ...params,
    ...config
  })
  return data
}

enum methodTypeMode {
  get = 'get',
  post = 'post',
  put = 'put',
  delete = 'delete'
}

const requestHandler = <T, P>(url: string, method: methodType, paramsData?: P, config?: AxiosRequestConfig) => {
  if (method === methodTypeMode.get || method === methodTypeMode.delete) {
    return RequestAxiosInstance<T, P>(url, method, { params: { ...paramsData } }, config)
  } else {
    return RequestAxiosInstance<T, P>(url, method, { data: paramsData }, config)
  }
}

/** 用法
  type returnData={
    name:string,
    age:18
}
type responseParams={
    username:string,
    password:string
}

const resultData = requestHandler<returnData,responseParams>("/user/login", "post", { username: "admin",password:"123456" })

**/

export default requestHandler
