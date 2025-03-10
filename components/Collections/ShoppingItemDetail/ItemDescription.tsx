import React from "react";

const ItemDescription = ({ texts }: { texts: string[] }) => {
  return (
    <div className="mt-[4rem]">
      {texts.map((text: string, i: number) => (
        <p key={i} className="pb-[1rem] font-satoshi leading-[2.8rem]">
          {text}
        </p>
      ))}
    </div>
  );
};

export default ItemDescription;
