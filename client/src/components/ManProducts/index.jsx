import { useEffect, useState } from "react";
import Card from "./ManProducts-Components/Card";
import Price from "./ManProducts-Components/Price";
import "./Products.css";
import { Products } from "../../api/Product";
import Loading from "../Loading/Loading";
const ManProducts = ({ filteredOptions }) => {
  const [cardData, setCardData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    Products.getProduct()
      .then((data) => {
        setCardData(data);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, []);
  console.log(filteredOptions);
  return (
    <div className="mt-4">
      {isLoading && <Loading />}
      <div className="form-product">
        <div className="list-left">
          <div className="pt-4">
            <span className="h4">All Shoes ({filteredOptions.length})</span>
          </div>
          <hr className="mt-4" />
          <Price />
        </div>

        <div className="list-right ">
          <div className="form-card">
            <Card options={filteredOptions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManProducts;
