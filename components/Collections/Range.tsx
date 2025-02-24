import * as React from "react";
import { getTrackBackground, Range } from "react-range";

const STEP = 0.1;
const MIN = 25;
const MAX = 500;

const RangeForm: React.FC<{ rtl?: boolean }> = ({ rtl }) => {
  const [values, setValues] = React.useState([25, 500]);
  return (
    <div className="flex justify-center flex-wrap my-[2rem] px-[2rem]">
      <Range
        values={values}
        step={STEP}
        min={MIN}
        max={MAX}
        rtl={rtl}
        onChange={(values) => {
          setValues(values);
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
            <p className="absolute -bottom-[3rem] text-black font-medium text-[1.4rem]  font-satoshi leading-[1.8rem]">
              ${values[index].toFixed(0)}
            </p>
          </div>
        )}
      />
    </div>
  );
};

export default RangeForm;
