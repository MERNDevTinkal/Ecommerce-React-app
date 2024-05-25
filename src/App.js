
import Nav from "./Component/Nav";
import ProductDetail from "./Component/ProductDetail";
import AddProduct from "./Component/AddProduct";
import CartItems from "./Component/CartItems";
import ProductItemList from "./Component/ProductItemList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addproducts } from "./actions/index";
import customFetch from "./apiCall";
import { useEffect } from "react";

function App() {
  let productDetailItem = useSelector((state) => state.itemToDisplay);

  const url = "https://my-json-server.typicode.com/jaiswalaryan/data/db";

  const dispatch = useDispatch();

  useEffect(() => {
    let response = customFetch(url, {
      method: "GET",
    });
    response.then((data) => {
      let modifiedData = data.products.map((item) => {
        item.edit = true;
        return item;
      });
      window.localStorage.setItem("products", JSON.stringify(modifiedData));
      let products = JSON.parse(window.localStorage.getItem("products"));
      dispatch(addproducts(products));
    });
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<ProductItemList />} />
          <Route path="/addproducts" element={<AddProduct />} />
          <Route
            path={`/productdetails/${productDetailItem.id}`}
            element={<ProductDetail item={productDetailItem} />}
          />
          <Route path="/cart" element={<CartItems />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;