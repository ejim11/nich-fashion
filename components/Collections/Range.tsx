import { useAppDispatch } from "@/hooks/stateHooks";
import { searchAndFilterActions } from "@/slices/searchAndFilterSlice";
import formatAmount from "@/utils/formatAmount";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { getTrackBackground, Range } from "react-range";

const STEP = 0.1;

const RangeForm: React.FC<{ rtl?: boolean; range: number[] }> = ({
  rtl,
  range,
}) => {
  const dispatch = useAppDispatch();

  const MIN: number = range[0];
  const MAX: number = range[1];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [values, setValues] = useState<any>(range);

  console.log(values);

  const addOrRemoveClothTypeFilterHandler = (filter: string): void => {
    dispatch(
      searchAndFilterActions.addPriceFilter({
        title: "price",
        filter: filter,
      })
    );
  };

  return (
    <motion.div
      animate={{ height: "auto", opacity: 1 }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.15, ease: "easeInOut" }}
      className="flex justify-center flex-wrap my-[2rem] px-[2rem]"
    >
      {values[0] > 0 && (
        <Range
          values={values}
          step={STEP}
          min={MIN}
          max={MAX}
          rtl={rtl}
          onChange={(values) => {
            setValues(values);
            addOrRemoveClothTypeFilterHandler(
              values.map((val) => Math.round(val)).join("-")
            );
          }}
          renderTrack={({ props, children }) => (
            <div
              onMouseDown={props.onMouseDown}
              onTouchStart={props.onTouchStart}
              style={{
                ...props.style,
                height: "36px",
                display: "flex",
                width: "100%",
              }}
            >
              <div
                ref={props.ref}
                style={{
                  height: "5px",
                  width: "100%",
                  borderRadius: "4px",
                  background: getTrackBackground({
                    values,
                    colors: [
                      "rgba(240, 240, 240, 1)",
                      "#000000",
                      "rgba(240, 240, 240, 1)",
                    ],
                    min: MIN,
                    max: MAX,
                    rtl,
                  }),
                  alignSelf: "center",
                }}
              >
                {children}
              </div>
            </div>
          )}
          renderThumb={({ index, props }) => (
            <div
              {...props}
              key={props.key}
              style={{
                ...props.style,
                height: "20px",
                width: "20px",
                borderRadius: "100%",
                backgroundColor: "#000000",
                border: "none",
                outline: "none",
              }}
            >
              <p
                className={`${
                  index === 1 ? "-left-[4rem] z-[30]" : ""
                } absolute -bottom-[3rem] bg-white text-black font-medium text-[1.4rem]  font-satoshi leading-[1.8rem]`}
              >
                N{formatAmount(String(values[index].toFixed(0)))}
              </p>
            </div>
          )}
        />
      )}
    </motion.div>
  );
};

export default RangeForm;
