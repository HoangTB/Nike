import axiosClient from "./AxiosClient";

export class UserAPIServer {
  static getAllUser(param) {
    const url = "api/v1/users";
    return axiosClient.get(url, param);
  }
  static getAllUserById(id) {
    const url = `api/v1/users/${id}`;
    return axiosClient.get(url);
  }
  static updateStatus(id, param) {
    const url = `api/v1/users/update-status/${id}`;
    return axiosClient.patch(url, param);
  }
  static updateActive(id, param) {
    const url = `api/v1/users/update-role/${id}`;
    return axiosClient.patch(url, param);
  }
}
