import axiosClient from "./AxiosClient";

export class Products {
  static getProduct() {
    const url = "api/v1/products";
    return axiosClient.get(url);
  }

  static getProductById(id) {
    const url = `api/v1/products/${id}`;
    return axiosClient.get(url);
  }

  static getProductMerger(id) {
    const url = `api/v1/products/order-orderDetail/${id}`;
    return axiosClient.get(url);
  }

  static updateProduct(id, params) {
    const url = `api/v1/products/update/${id}`;
    return axiosClient.patch(url, params);
  }
}
