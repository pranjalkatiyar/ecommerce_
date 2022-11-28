import React, { useContext, useState, useCallback } from "react";
import { FiFilter } from "react-icons/fi";
import Filter from "./Filter/Filter";
import Products from "./Products/Products";
import Cart from "./Cart/Cart";
import "./store.css";
import data from "./model/data";
import filterData from "./model/filterData";

const Store = () => {
  const [state, setState] = useState({
    products: data,
    filters: new Set(),
  });

  const handleFilterChange = useCallback(
    (event) => {
      setState((previousState) => {
        let filters = new Set(previousState.filters);
        let products = data;
        console.log("filters", filters);
        if (event.target.checked) {
          filters.add(event.target.value);
          console.log("2:filters", filters);
        } else {
          filters.delete(event.target.value);
        }

        if (filters.size) {
          console.log("3:filters", filters);
          products = products.filter((product) => {
            return (
              filters.has(product.type) ||
              filters.has(product.designTemplate) ||
              filters.has(product.color)
            );
          });
        }

        return {
          filters,
          products,
        };
      });
    },
    [setState]
  );
    
  return (
    <div className="container">
      <div className="filter">
        <Filter onFilterChange={handleFilterChange} types={filterData.type} />
      </div>
      <div className="products">
        <Products products={state.products} />
      </div>

      <div className="cart">
        <Cart />
      </div>
    </div>
  );
};

export default Store;
