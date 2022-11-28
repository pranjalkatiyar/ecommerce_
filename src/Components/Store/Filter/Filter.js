import React,{useEffect,useState} from "react";
import "./filter.css";
import { FiFilter } from "react-icons/fi";
import filterData from "../model/filterData";
 const Filter = (props) => {
 
 const {types,onFilterChange}=props;
 

  return (
    <div className="container">
      <div className="filter_card">
        <div className="filter_title spacing">
          <span>filters</span>
          <FiFilter />
        </div>
        <div className="filter_cost spacing">
          <div className="filter_heading">
            <span>cost</span>
          </div>
          <div className="filter_checkbox">
            {filterData.priceRange.map((item) => {
              return (
                <label>
                  <input type="checkbox" value={item} name="price" onClick={onFilterChange}/>
                  <span>
                    {item}-{`${Number(item) + 2000}`}
                  </span>
                </label>
              );
            })}
          </div>
        </div>
        <div className="filter_color spacing">
          <div className="filter_heading">
            <span>color</span>
            <div className="filter_checkbox color">
              {filterData.colors.map((item) => {
                return (
                  <label className="checkbox">
                  <input
                    type="checkbox"
                    style={{ backgroundColor: `${item}` }}
                    value={item}
                    name="color"
                    onClick={onFilterChange}
                  />
                   <span className="checkmark"></span>
                   </label>
                );
              })}
            </div>
          </div>
        </div>
        <div className="filter_design spacing">
          <div className="filter_heading">
            <span> design templates</span>
          </div>
          <div className="filter_checkbox">
            {filterData.designTemplates.map((item) => {
              return (
                <label>
                  <input type="checkbox" value={item} name="designTemplate" onClick={onFilterChange}/>
                  <span>{item}</span>
                </label>
              );
            })}
          </div>
        </div>
        <div className="filter_type spacing">
          <div className="filter_heading">
            <span>type</span>
          </div>
          <div className="filter_checkbox">
            {filterData.type.map((item) => {
              return (
                <label>
                  <input
                    type="checkbox"
                    value={item}
                    onClick={onFilterChange}
                    name="type"
                  />
                  <span>{item}</span>
                </label>
              );
            })}
          </div>
        </div>
        <div className="filter_button spacing">
          <button type="submit" className="button">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
