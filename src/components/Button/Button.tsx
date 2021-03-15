import React from "react";
import "./Button.css";

interface Props {
  showPercentage: boolean;
  show: boolean;
  label: string;
  percentage: number;
  onClickHandler: () => void;
}

const Button = ({
  percentage,
  showPercentage,
  show,
  label,
  onClickHandler,
}: Props) => {
  return (
    <div
      className="Button"
      onClick={onClickHandler}
      style={
        show && showPercentage
          ? {
              visibility: "visible",
              pointerEvents: "none",
              backgroundPosition: `${100 - percentage}% 0%`,
            }
          : show
          ? { visibility: "visible" }
          : undefined
      }
    >
      <div>{label}</div>
      {showPercentage ? <div>{percentage}%</div> : null}
    </div>
  );
};

export default Button;
