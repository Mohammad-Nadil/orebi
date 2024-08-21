import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ReactPaginate from "react-paginate";
import ProductItem from "./layer/ProductItem";
import p1 from "/Arrivals/productItem1.png";
// Example items, to simulate fetching from another resources.
const items = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  1,
  2,
  3,
  4,
  5,
  ,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  1,
  2,
  3,
  4,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  1,
  2,
  3,
  4,
  5,
  ,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
];

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item, index) => (
          <ProductItem
            src={p1}
            pName="Basic Crew Neck Tee"
            price="$44.00"
            color="black"
            offer="10%"
            offerEye={true}
            key={index}
          />
        ))}
    </>
  );
}

const Paginate = ({ itemsPerPage }) => {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
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
      <div className="flex flex-wrap gap-9">
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
        <p>
          {`Products from ${itemOffset + 1} to ${endOffset > items.length ? items.length : endOffset} of ${items.length}`}
        </p>
      </div>
    </>
  );
};

export default Paginate;
