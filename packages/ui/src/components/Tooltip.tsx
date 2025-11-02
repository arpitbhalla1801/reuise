import React from "react";

export interface TooltipProps {
  content: React.ReactNode;
  children: React.ReactElement;
  side?: "top" | "bottom" | "left" | "right";
}

export const Tooltip: React.FC<TooltipProps> = ({ content, children, side = "top" }) => {
  const [show, setShow] = React.useState(false);

  return (
    <span className="relative inline-block" onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
      {children}
      {show && (
        <span
          role="tooltip"
          className={`absolute z-50 px-2 py-1 text-xs rounded bg-gray-900 text-white whitespace-nowrap ${
            side === "top" ? "-top-8 left-1/2 -translate-x-1/2" : ""
          } ${side === "bottom" ? "-bottom-8 left-1/2 -translate-x-1/2" : ""} ${side === "left" ? "right-8 top-1/2 -translate-y-1/2" : ""} ${side === "right" ? "left-8 top-1/2 -translate-y-1/2" : ""}`}
        >
          {content}
        </span>
      )}
    </span>
  );
};

export default Tooltip;
