import http from "../http-common"

class orderService {
  createOrder(data){
    return http.post(`/orders/estimate`,data)
  }
}

export default new orderService()