import axios from "axios";
export class UserAPI {
  static register(param) {
    const url = "http://localhost:8080/api/v1/users/register";
    return axios.post(url, param);
  }
  static login(param) {
    const url = "http://localhost:8080/api/v1/users/login";
    return axios.post(url, param);
  }
  static getUserId(id) {
    const url = `http://localhost:8080/api/v1/users/${id}/`;
    return axios.get(url);
  }
  static updateUser(id, param) {
    const url = `http://localhost:8080/api/v1/users/update-user/${id}`;
    return axios.patch(url, param);
  }
}
