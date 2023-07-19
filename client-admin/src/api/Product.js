import axiosClient from "./AxiosClient";
export class ProductsServer {
  static getProduct() {
    const url = "api/v1/products";
    return axiosClient.get(url);
  }

  static getProductLast() {
    const url = "api/v1/products/last";
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

  static deleteProduct(id) {
    const url = `api/v1/products/delete/${id}`;
    return axiosClient.delete(url);
  }

  static updateProduct(id, params) {
    const url = `api/v1/products/update/${id}`;
    return axiosClient.patch(url, params);
  }

  static createProductNotJson(params) {
    const url = "api/v1/products/admin-create";
    return axiosClient.post(url, params);
  }
}
