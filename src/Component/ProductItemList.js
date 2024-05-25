import React from "react";
import ProductItem from "./ProductItem";
import { useSelector } from "react-redux";
import Sort from "./Sort";

export default function ProductItemList({}) {
  const data = useSelector((state) => state.products);
  if (data.length === 0) {
    return (
      <div className="d-flex justify-content-center mt-5">
        <div
          className="spinner-border"
          style={{ width: "8rem", height: "8rem" }}
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  } else {
    return (
      <div className="d-flex flex-column container-sm mt-4">
        <Sort />
        {data.map((item) => (
          <ProductItem item={item} key={item.title} />
        ))}
      </div>
    );
  }
}