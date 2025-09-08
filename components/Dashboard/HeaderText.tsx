import React from "react";

const HeaderText = ({
  text,
  customStyling,
}: {
  text: string;
  customStyling?: string;
}) => {
  return (
    <header
      className={`${customStyling} font-satoshi text-[3.2rem] font-bold leading-[3rem] `}
    >
      {text}
    </header>
  );
};

export default HeaderText;
