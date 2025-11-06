import React from "react";

export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number; // 0-100, undefined for indeterminate
  size?: "sm" | "md" | "lg";
  variant?: "default" | "success" | "warning" | "error";
  showLabel?: boolean;
}

export const Progress: React.FC<ProgressProps> = ({
  value,
  size = "md",
  variant = "default",
  showLabel = false,
  className = "",
  ...props
}) => {
  const isIndeterminate = value === undefined;
  const clampedValue = Math.min(100, Math.max(0, value ?? 0));

  const sizeStyles = {
    sm: "h-1",
    md: "h-2",
    lg: "h-3",
  };

  const variantStyles = {
    default: "bg-blue-600",
    success: "bg-green-600",
    warning: "bg-yellow-500",
    error: "bg-red-600",
  };

  return (
    <div className={className} {...props}>
      <div
        className={`
          w-full ${sizeStyles[size]} bg-gray-200 rounded-full overflow-hidden
        `}
        role="progressbar"
        aria-valuenow={isIndeterminate ? undefined : clampedValue}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className={`
            h-full ${variantStyles[variant]} transition-all duration-300
            ${isIndeterminate ? "animate-indeterminate w-1/3" : ""}
          `}
          style={isIndeterminate ? undefined : { width: `${clampedValue}%` }}
        />
      </div>
      {showLabel && !isIndeterminate && (
        <div className="text-xs text-gray-600 mt-1 text-right">
          {clampedValue}%
        </div>
      )}
    </div>
  );
};

// Add indeterminate animation to your global CSS or Tailwind config
// For now, using inline style approach
const style = document.createElement("style");
style.textContent = `
  @keyframes indeterminate {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(400%); }
  }
  .animate-indeterminate {
    animation: indeterminate 1.5s ease-in-out infinite;
  }
`;
if (typeof document !== "undefined" && !document.querySelector("#progress-styles")) {
  style.id = "progress-styles";
  document.head.appendChild(style);
}

export default Progress;
