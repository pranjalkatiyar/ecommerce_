import React, { useState, useEffect } from "react";
import { FiShoppingBag } from "react-icons/fi";
import "./cart.css";
import { GrLocation } from "react-icons/gr";
import { AiOutlineCalendar } from "react-icons/ai";
 import { useCart } from "../../Context/Context";
import { IoCloseCircleOutline } from "react-icons/io5";

const Cart = () => {
   const { cart, addToCart,removeFromCart } = useCart();

  return (
    <div className="container">
      <div className="cart_card">
        <div className="cart_heading">
          <div>
            <span>Cart</span>
          </div>
          <div>
            <FiShoppingBag />
          </div>
        </div>
        <div className="overflow_axis_cart">
          {cart.length > 0 &&
            cart.map((item, key) => (
              <div>
                <div className="cart_content cart_row">
                  <div className="cart_column">
                    <div className="cart_image">
                      <div className="close_button">
                        <button type="submit" onClick={()=>{
                          console.log("pressed")
                          return removeFromCart(item.id)
                        }}>
                          {" "}
                          <IoCloseCircleOutline />
                        </button>
                      </div>
                      <div>
                        <img
                          src={require(`../../../assests/${item.image}`)}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="cart_details">
                      <div className="cart_product_name">
                        <span>{item.name}</span>
                      </div>
                      <div className="cart_cost">
                        <div>
                          <span>Rs-{item.price}/-</span>
                        </div>
                        <br />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className="cart_order">
          <div>
            <div className="order_details">
              <div>
                <GrLocation />
                Home
              </div>
              <div>
                <AiOutlineCalendar /> Select Date
              </div>
            </div>
            <div>
              <button className="button">order now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
