import React from "react";
import "./product.css";
import { FiSearch } from "react-icons/fi";
import data from "../model/data.js";
import { Link } from "react-router-dom";
import { BsStarHalf, BsStarFill } from "react-icons/bs";

const Products = (props) => {

  const { products } = props;
  console.log("props", props);
  return (
    <div className="container">
      <div className="product_card">
        <div className="store_heading">
          <span>shoes</span>
          <div className="store_sortby">
            <FiSearch />
            <span>sort by</span>
          </div>
        </div>
        <div className="products_content row">
          {products.map((item) => {
            return (
              <Link to={`/product/${item.id}`}>
                <div className="column" >
                  <div className="product_image">
                    <img
                      src={require(`../../../assests/${item.image}`)}
                      alt=""
                    />
                  </div>
                  <div className="product_details">
                    <div className="product_name">
                      <span>{item.name}</span>
                    </div>
                    <div className="product_cost">
                      <div>
                        <span>Rs-{item.price}/-</span>
                      </div>
                      <br />
                      <div className="product_rating">
                        <span>
                          <BsStarFill color="green" />
                        </span>
                        <span>
                          <BsStarFill color="green" />
                        </span>
                        <span>
                          <BsStarFill color="green" />
                        </span>
                        <span>
                          <BsStarFill color="green" />
                        </span>
                        <span>
                          <BsStarHalf color="green" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;