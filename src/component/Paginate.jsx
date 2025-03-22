import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ReactPaginate from "react-paginate";
import ProductItem from "./layer/ProductItem";
import VerticalProductItem from "./layer/VerticalProductItem";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cartSlice.js";

const Paginate = ({ itemsPerPage }) => {
  const [itemOffset, setItemOffset] = useState(0);
  let list = useSelector((state) => state.view.isListView);

  // let items = useSelector((state) => state.allCart.items )

  // console.log(items)

  const [items, setItems] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      setItems(data.products);
    };
    getData();
  }, []);

  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <div
        className={`${
          list ? "" : "grid"
        } grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4  gap-x-2 sm:gap-4 gap-y-10`}
      >
        <Items currentItems={currentItems} />
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
            endOffset > items.length ? items.length : endOffset
          } of ${items.length}`}
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
              onClick={() => dispatch(addToCart(item))}
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
              onClick={() => dispatch(addToCart(item))}
            />
          )
        )}
    </>
  );
}
export default Paginate;
