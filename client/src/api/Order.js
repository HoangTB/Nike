import axiosClient from "./AxiosClient";

export class Order {
  static postOrder(params) {
    const url = "/api/v1/order";
    return axiosClient.post(url, params);
  }
  static getOrderById(id) {
    const url = `/api/v1/order/${id}`;
    return axiosClient.get(url);
  }
}
