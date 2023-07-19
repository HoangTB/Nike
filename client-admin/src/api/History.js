import axiosClient from "./AxiosClient";

export class HistoryAPIServer {
  static getHistoryIdOrder(id) {
    const url = `/api/v1/history/get-orderID/${id}`;
    return axiosClient.get(url);
  }

  static getAllHistoryIdOrder() {
    const url = "/api/v1/history/get-orderID/";
    return axiosClient.get(url);
  }
  static updateHistoryStatus(id, params) {
    const url = `/api/v1/history/update/${id}`;
    return axiosClient.patch(url, params);
  }
  static getHistoryWithMonth(params) {
    const url = "/api/v1/history/get-month";
    return axiosClient.post(url, params);
  }
}
