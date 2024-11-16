import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useDebounce from "../CustomDebounce/useDebounceHook";
const ProductList = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [search, setSearch] = useState(" ");
  const [loading, setLoading] = useState(true);
  const [errorFetch,setErrorFetch] = useState(false);
  const notify = () => toast("Opps! Fetch Data doesn't found.");
  const debounceVlaue =  useDebounce(search,300);
  //  console.log(debounceVlaue);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setAllProducts(data.products));
    setLoading(false);
  }, []);
  
 //  console.log(allProducts);
  const handleInputValue = (e) => {
    setSearch(e.target.value);
   

  };
 
  const handleErrorFetch = () => {
    fetch("")
      .then((res) => res.json())
      .then((data) => setAllProducts(data))
      .catch((error) => {
        setErrorFetch(true)
        notify();

      });
  };
 
  //console.log(search);
  return (
    <div className="mt-10 container mx-auto">
      <div className="mb-16">
        <div className="navbar bg-base-100">
          <div className="flex-1">
            <h1 className="text-3xl font-bold">Product Heaven</h1>
          </div>
          <div className="flex-none gap-2">
            <div>
              <button
                className="btn btn-error text-white"
                onClick={handleErrorFetch}
                
              >
                Error Fetch!
              </button>
            </div>
            <div className="form-control">
              <input
                type="text"
                placeholder="Search product"
                className="input input-bordered w-24 md:w-auto"
                name="search-box"
                onChange={handleInputValue}
              />
              <ToastContainer />
            </div>
          </div>
        </div>
      </div>

      {/* <div className="flex items-center p-10 m-10 border"> */}
        {
          <ProductCard
            allProducts={allProducts}
            search={debounceVlaue}
            loading={loading}
            errorFetch={errorFetch}
          ></ProductCard>
        }
      {/* </div> */}
    </div>
  );
};

export default ProductList;
