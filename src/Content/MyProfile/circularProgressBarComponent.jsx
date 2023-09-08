import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./circle.css";
import RadialSeparators from "./radialSeperators";

export default function CircularProgressBarComponent({ value }) {
  const minValue = 1;
  const maxValue = 1000;

  return (
    <>
      <div className="w-40 h-40 m-auto mb-12">
        <CircularProgressbarWithChildren
          minValue={minValue}
          maxValue={maxValue}
          value={value}
          text={value}
          strokeWidth={10}
          styles={buildStyles({
            strokeLinecap: "butt",
            pathColor: "rgb(79 70 229)",
            textColor: "#201a4d",
            textSize: "20px",
          })}
        >
          <RadialSeparators
            count={10}
            style={{
              background: "#fff",
              width: "2px",
              // This needs to be equal to props.strokeWidth
              height: `${10}%`,
            }}
          />
          <div style={{ fontSize: 15, fontWeight: "500", marginTop: 35 }}>
            <p>Sphere Rating</p>
          </div>
        </CircularProgressbarWithChildren>
      </div>
    </>
  );
}
