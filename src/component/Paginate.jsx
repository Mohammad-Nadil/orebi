import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ReactPaginate from "react-paginate";
import ProductItem from "./layer/ProductItem";
import VerticalProductItem from "./layer/VerticalProductItem";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cartSlice.js";
import Loader from "./Loader.jsx";

const Paginate = ({ filteredProducts, itemsPerPage }) => {
  const [itemOffset, setItemOffset] = useState(0);
  let list = useSelector((state) => state.view.isListView);
  // let items = useSelector((state) => state.allCart.items);
  const [loading, setLoading] = useState(true);

  // const [items, setItems] = useState([]);

  // useEffect(() => {
  //   const getData = async () => {
  //     const response = await fetch("https://dummyjson.com/products");
  //     const data = await response.json();
  //     setItems(data.products);
  //   };
  //   getData();
  // }, []);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = filteredProducts.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(filteredProducts.length / itemsPerPage);

  useEffect(() => {
    if (filteredProducts.length === 0) {
      setLoading(true); // Set loading to true when no items are available
      setTimeout(() => {
        setLoading(false); // Set loading to false after 2 seconds (simulate API call)
      }, 2000);
    } else {
      setLoading(false); // Data is available, no need for loading
    }
  }, [filteredProducts]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % filteredProducts.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <div
        className={`${
          list ? "" : "grid"
        } grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4  gap-x-2 sm:gap-4 gap-y-10`}
      >
        {loading ? <Loader /> : <Items currentItems={currentItems} />}
      </div>
      <div className=" pt-12 flex justify-between items-center">
        <ReactPaginate
          containerClassName="flex gap-x-4"
          pageClassName="page-item h-9 w-9  font-DM text-sm text-secondary border border-[#F0F0F0]"
          pageLinkClassName="page-link grid place-content-center h-full w-full"
          activeClassName="active bg-primary text-white"
          breakLabel="..."
          nextLabel="next > "
          nextClassName="page-item hidden"
          nextLinkClassName="page-link hidden"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          previousClassName="page-item hidden"
          previousLinkClassName="page-link hidden"
          renderOnZeroPageCount={null}
        />
        <p className="text-xs sm:text-sm">
          {`Products from ${itemOffset + 1} to ${
            endOffset > filteredProducts.length
              ? filteredProducts.length
              : endOffset
          } of ${filteredProducts.length}`}
        </p>
      </div>
    </>
  );
};

function Items({ currentItems, onClick }) {
  let list = useSelector((state) => state.view.isListView);
  let dispatch = useDispatch();
  return (
    <>
      {currentItems &&
        currentItems.map((item, index) =>
          list ? (
            <VerticalProductItem
              src={item.thumbnail}
              pName={item.title}
              price={item.price}
              brand={item.brand}
              offer={item.discountPercentage}
              description={item.description}
              offerEye={true}
              key={index}
              id={item.id}
              product={item}
            />
          ) : (
            <ProductItem
              src={item.thumbnail}
              pName={item.title}
              price={item.price}
              brand={item.brand}
              offer={item.discountPercentage}
              offerEye={true}
              key={index}
              id={item.id}
              product={item}
            />
          )
        )}
    </>
  );
}
export default Paginate;
