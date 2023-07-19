import React, { useEffect, useRef, useState } from "react";
import "./ProductManager.css";
import { ProductsServer } from "../../api/Product";
import ConfirmDelete from "../Modal/Confirm-Delete/Confirm-Delete";
import FormUpdate from "../Modal/FormUpdate/FormUpdate";
import FormCreate from "../Modal/FormCreate/FormCreate";

const ProductManager = () => {
  const [products, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const idDelete = useRef();
  const idUpdate = useRef();
  const [isShowFormEdit, setIsShowFormEdit] = useState(false);
  const [isShowFormCreate, setIsShowFormCreate] = useState(false);
  const [dataEdit, setDataEdit] = useState([]);
  useEffect(() => {
    ProductsServer.getProduct().then((product) => setProduct(product));
  }, [isLoading]);

  const handleDeleteProduct = async (id) => {
    idDelete.current = id;
    setIsShow(!isShow);
  };

  const handleCancel = () => {
    setIsShow(false);
  };
  const handleLoading = (id) => {
    setIsLoading(!isLoading);
  };

  const handleEdit = async (id) => {
    setIsShowFormEdit(!isShowFormEdit);
    idUpdate.current = id;
    const values = await ProductsServer.getProductById(id);
    setDataEdit(values);
  };

  const handleCreate = () => {
    setIsShowFormCreate(!isShowFormCreate);
  };
  return (
    <div className="content-user">
      {isShow && (
        <ConfirmDelete
          handleCancel={handleCancel}
          idDelete={idDelete.current}
          handleLoading={handleLoading}
        />
      )}
      {isShowFormEdit && (
        <FormUpdate
          handleEdit={handleEdit}
          idUpdate={idUpdate.current}
          dataEdit={dataEdit}
          handleLoading={handleLoading}
        />
      )}
      {isShowFormCreate && (
        <FormCreate handleCreate={handleCreate} handleLoading={handleLoading} />
      )}
      <div className="table-content">
        <div className="wrappers-title">
          <h1 className="title-page">PRODUCT-MANAGER</h1>
          <button
            className="btn btn-info btn-create"
            onClick={() => handleCreate()}
          >
            CREATE
          </button>
        </div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>IMAGE</th>
              <th>NAME</th>
              <th>TYPE</th>
              <th>PRICE</th>
              <th>QUANTITY INVENTORY</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {products &&
              products?.map((product) => {
                return (
                  <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>
                      <img
                        title="..."
                        src={product.image}
                        style={{ width: "100px" }}
                      />
                    </td>
                    <td>{product.name}</td>
                    <td>{product.type}</td>
                    <td>$ {product.price}</td>
                    <td>{product.quantity_inventory}</td>
                    <td>
                      <button
                        className="btn btn-warning"
                        onClick={() => handleEdit(product.id)}
                      >
                        EDIT
                      </button>{" "}
                      {""}{" "}
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDeleteProduct(product.id)}
                      >
                        DELETE
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductManager;
