import axiosClient from "./AxiosClient";
export class HistoryAPI {
  static createHistory(params) {
    const url = "/api/v1/history";
    return axiosClient.post(url, params);
  }

  static getHistoryIdOrder(id) {
    const url = `/api/v1/history/get-orderID/${id}`;
    return axiosClient.get(url);
  }
}
