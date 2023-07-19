import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost:8080/",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.request.use(
  function (config) {
    const accessToken = localStorage.getItem("token");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    console.log("axiosClient - response error", error.response);
    const { config, status, data } = error?.response;

    if (config.url === "register" && status === 400) {
      throw new Error(data);
    }
    if (config.url === "login" && status === 400) {
      throw new Error(data);
    }

    return Promise.reject(error);
  }
);

export default axiosClient;
