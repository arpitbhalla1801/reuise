import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
  size?: "sm" | "md" | "lg";
}

export const Button: React.FC<ButtonProps> = ({
  variant = "default",
  size = "md",
  children,
  className = "",
  ...props
}) => {
  const base = "rounded-md font-medium transition";
  const sizes = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
  };
  const styles =
    variant === "outline"
      ? "border border-gray-300 text-gray-700 hover:bg-gray-100"
      : "bg-blue-600 text-white hover:bg-blue-700";

  return (
    <button className={`${base} ${sizes[size]} ${styles} ${className}`} {...props}>
      {children}
    </button>
  );
};
