import axiosClient from "./AxiosClient";

export class OrderDetail {
  static getOrderDetailById(id) {
    const url = `api/v1/order-detail/${id}`;
    return axiosClient.get(url);
  }

  static postOrderDetail(params) {
    const url = "/api/v1/order-detail";
    return axiosClient.post(url, params);
  }
  static updateOrderDetail(id, params) {
    const url = `api/v1/order-detail/update/${id}`;
    return axiosClient.patch(url, params);
  }

  static updateQuantity(id, params) {
    const url = `api/v1/order-detail/quantity/${id}`;
    return axiosClient.patch(url, params);
  }

  static deleteOrderDetail(id) {
    const url = `api/v1/order-detail/delete/${id}`;
    return axiosClient.delete(url);
  }
  static deleteOrderDetailByHistory(id) {
    const url = `api/v1/order-detail/delete-history/${id}`;
    return axiosClient.delete(url);
  }
}
