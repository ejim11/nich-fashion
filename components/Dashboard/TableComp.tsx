/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactNode, useRef } from "react";
import { IoArrowBackOutline, IoArrowForwardOutline } from "react-icons/io5";
import ReactPaginate from "react-paginate";

const TableComp: React.FC<{
  children: ReactNode;
  tableHeaders: string[];
  data?: any[];
  handlePageClick?: (event: any) => void;
  pageCount?: number;
  isPaginated?: boolean;
}> = ({
  children,
  tableHeaders,
  data,
  handlePageClick,
  pageCount,
  isPaginated,
}) => {
  const sectionRef: any = useRef(null);

  console.log(data);

  const paginateNavStyle =
    "block  bg-[#ffffff]  py-[0.8rem] px-[1.4rem] rounded-[0.8rem]  border border-[rgba(0,0,0,0.1)] text-black hover:bg-black hover:text-white transition-all tableData-200 ease-in capitalize duration-200  cursor-pointer";

  const scrollToSection = () => {
    sectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };
  return (
    <div className="flex flex-col   flex-1">
      <table className="w-full">
        <thead className="">
          <tr className="text-left border border-[rgba(239,241,243,1)] bg-[rgba(243,243,243,1)] ">
            {tableHeaders.map((header: string, i: number) => (
              <th key={i} className="">
                <span className=" capitalize text-nowrap text-[1.8rem] font-medium font-satoshi px-[1rem] py-[0.5rem]">
                  {header}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
      <div
        className={`${
          isPaginated ? "flex" : "hidden"
        } mt-[4rem] w-full align-bottom     `}
      >
        <ReactPaginate
          breakLabel="..."
          nextLabel={
            <p className="flex items-center  ">
              <span>next</span>
              <IoArrowForwardOutline className="text-current ml-[0.5rem] w-[2.2rem] h-[2.2rem]" />
            </p>
          }
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={pageCount as number}
          previousLabel={
            <p className="flex items-center font-satoshi font-medium text-[1.4rem] ">
              <IoArrowBackOutline className="text-current mr-[0.5rem] w-[2rem] h-[2rem]" />
              <span>previous</span>
            </p>
          }
          renderOnZeroPageCount={null}
          containerClassName="flex items-center  w-full"
          previousClassName="mr-auto"
          nextClassName="ml-auto"
          previousLinkClassName={paginateNavStyle}
          nextLinkClassName={paginateNavStyle}
          pageLinkClassName="paginate-page-link"
          activeLinkClassName="paginate-active-page-link"
          onClick={() => {
            scrollToSection();
          }}
        />
      </div>
    </div>
  );
};

export default TableComp;
