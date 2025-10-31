import React from "react";

export interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg" | "xl";
  color?: "primary" | "white" | "gray";
}

export const Spinner: React.FC<SpinnerProps> = ({
  size = "md",
  color = "primary",
  className = "",
  ...props
}) => {
  const sizes = {
    sm: "w-4 h-4 border-2",
    md: "w-8 h-8 border-2",
    lg: "w-12 h-12 border-3",
    xl: "w-16 h-16 border-4",
  };

  const colors = {
    primary: "border-blue-600 border-t-transparent",
    white: "border-white border-t-transparent",
    gray: "border-gray-600 border-t-transparent",
  };

  return (
    <div
      className={`
        ${sizes[size]} ${colors[color]} rounded-full animate-spin
        ${className}
      `}
      role="status"
      aria-label="Loading"
      {...props}
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export interface SpinnerOverlayProps {
  show: boolean;
  message?: string;
}

export const SpinnerOverlay: React.FC<SpinnerOverlayProps> = ({
  show,
  message,
}) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 flex flex-col items-center gap-4">
        <Spinner size="lg" />
        {message && <p className="text-gray-700 font-medium">{message}</p>}
      </div>
    </div>
  );
};
