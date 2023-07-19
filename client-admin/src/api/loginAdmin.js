import axios from "axios";
export class LoginAdmin {
  static login(param) {
    const url = "http://localhost:8080/api/v1/users/login";
    return axios.post(url, param);
  }
}
