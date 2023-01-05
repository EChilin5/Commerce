import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export const ProgressWheel = (props) => {
  const { score } = props;

  const calcColor = (percent, start, end) => {
    let a = percent / 100;
    let b = (end - start) * a;
    let c = b + start;

    return "hsl(" + c + ", 100%, 50%)";
  };

  return (
    <div>
      <CircularProgressbar
        value={score}
        text={`${score} %`}
        circleRatio={1}
        styles={{
          trail: {
            strokeLinecap: "butt",
            // transform: "rotate(-126deg)",
            // transformOrigin: "center center",
            stroke: "#aaaaaa",
          },
          path: {
            strokeLinecap: "butt",
            // transform: "rotate(-126deg)",
            transformOrigin: "center center",
            stroke: calcColor(score, 0, 120),
          },
          text: {
            fill: "#181818",
          },
        }}
        strokeWidth={10}
      />
    </div>
  );
};
