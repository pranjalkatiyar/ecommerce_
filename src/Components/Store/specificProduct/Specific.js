import React from "react";
import "./specific.css";
import { IoIosArrowBack } from "react-icons/io";
import { BsStarHalf, BsStarFill } from "react-icons/bs";
import { useParams } from "react-router-dom";
import data from "../model/data.js";
import Cart from "../Cart/Cart";
import { useNavigate } from "react-router-dom";
import { createContext, useState, useEffect } from "react";
import { useCart } from "../../Context/Context";

export const CartContext = createContext();

const Specific = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const product = data.find((item) => item.id === Number(id));

  const { cart, addToCart } = useCart();

  const pushBack = () => {
    return navigate(-1);
  };

  return (
    <div className="container">
      <div className="specific_card">
        <div className="specific_heading">
          <div>
            <button className="back_button" onClick={pushBack}>
              <IoIosArrowBack />
            </button>
            <span>your design space</span>
          </div>
        </div>
        <div className="specific_content">
          <div className="specific_large">
            <img src={require(`../../../assests/${product.image}`)} alt="" />
          </div>
          <div className="specific_small">
            <img src={require(`../../../assests/${product.image}`)} alt="" />
            <img src={require(`../../../assests/${product.image}`)} alt="" />
            <img src={require(`../../../assests/${product.image}`)} alt="" />
          </div>
          <div className="specific_details">
            <div className="specific_product_name">
              <span>{product.name}</span>
              <span>by {product.brand}</span>
            </div>
            <div className="specific_cost">
              <div className="rating">
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
                <span>80 reviews</span>
              </div>
              <div className="price">
                <span>Rs-{product.price}/-</span>
              </div>
              <div className="offers">
                <span>Get an exclusive 20% off shopping with HDFC bank</span>
              </div>
              <div className="editing_options">
                <div className="editing_front alignment">
                  <div className="choice_heading">
                    <span>front</span>
                  </div>
                  <div className="color_choice">
                    <input type="checkbox" className="choice_checkbox" />
                    <input type="checkbox" className="choice_checkbox" />
                    <input type="checkbox" className="choice_checkbox" />
                  </div>
                </div>
                <div className="editing_middle alignment">
                  <div className="choice_heading">
                    <span>middle</span>
                  </div>
                  <div className="color_choice">
                    <input type="checkbox" className="choice_checkbox" />
                    <input type="checkbox" className="choice_checkbox" />
                    <input type="checkbox" className="choice_checkbox" />
                  </div>
                </div>
                <div className="editing_back alignment">
                  <div className="choice_heading">
                    <span>back</span>
                  </div>
                  <div className="color_choice">
                    <input type="checkbox" className="choice_checkbox" />
                    <input type="checkbox" className="choice_checkbox" />
                    <input type="checkbox" className="choice_checkbox" />
                  </div>
                </div>
                <div className="selecting_sole alignment">
                  <div className="choice_heading">
                    <span>sole</span>
                  </div>
                  <div className="color_choice">
                    <input type="checkbox" className="choice_checkbox" />
                    <input type="checkbox" className="choice_checkbox" />
                    <input type="checkbox" className="choice_checkbox" />
                  </div>
                </div>
                <div className="selecting_size alignment">
                  <div className="choice_heading">
                    <span>size</span>
                  </div>
                  <div className="color_choice">
                    <input type="checkbox" className="choice_checkbox" />
                    <input type="checkbox" className="choice_checkbox" />
                    <input type="checkbox" className="choice_checkbox" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <button className="share_button">share</button>
          <button
            className="button"
            onClick={() => {
              addToCart(product);
            }}
          >
            Add to cart
          </button>
        </div>
      </div>
      {/* <CartContext.Provider value={{cart,addToCart}}> */}
      <Cart />
      {/* </CartContext.Provider> */}
    </div>
  );
};

export default Specific;
