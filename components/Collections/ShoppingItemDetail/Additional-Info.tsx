import { Color, ShoppingItem, Size } from "@/types/shoppingItem";
import React from "react";

const AdditionalInfo = ({ shoppingItem }: { shoppingItem: ShoppingItem }) => {
  const tableHeaders: string[] = ["feature", "description"];

  const colors = shoppingItem.colors.map((color: Color) => color.color);

  const sizes = [
    ...new Set(
      shoppingItem.colors
        .map((color: Color) => color.sizes)
        .flat()
        .map((size: Size) => size.size)
    ),
  ];

  console.log(sizes[0]);

  const info = [
    {
      title: "material",
      value: shoppingItem?.material,
    },
    {
      title: "sizes",
      value: sizes,
    },
    {
      title: "colors",
      value: colors,
    },
    {
      title: "brand",
      value: shoppingItem?.brand,
    },
  ];

  console.log(typeof info[2].value === "string");

  return (
    <div className="mt-[4rem] w-full leading-[2.6rem]">
      <table className="w-full font-satoshi capitalize">
        <thead className="bg-[#F0EEED] px-[4rem] ">
          <tr className="">
            {tableHeaders.map((header: string) => (
              <th
                key={header}
                className="text-left py-[2rem] capitalize first:pl-[4.3rem]   font-bold"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {info.map((item) => (
            <tr key={item.title} className="border-b border-[#E5E2E2]">
              <td className="py-[2rem] pl-[4.5rem] ">{item.title}</td>
              <td className="py-[2rem] ">
                {typeof item.value === "string"
                  ? item.value
                  : item?.value?.map((val: string, i) => (
                      <span key={i} className="mr-[1rem] last:mr-0 capitalize">
                        {val}
                      </span>
                    ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdditionalInfo;
