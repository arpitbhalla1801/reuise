import React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "bordered" | "elevated";
}

export const Card: React.FC<CardProps> = ({
  variant = "default",
  children,
  className = "",
  ...props
}) => {
  const variants = {
    default: "bg-white shadow-sm",
    bordered: "bg-white border-2 border-gray-200",
    elevated: "bg-white shadow-lg hover:shadow-xl transition-shadow duration-300",
  };

  return (
    <div
      className={`rounded-lg overflow-hidden ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <div className={`px-6 py-4 border-b border-gray-100 ${className}`} {...props}>
      {children}
    </div>
  );
};

export const CardBody: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <div className={`px-6 py-4 ${className}`} {...props}>
      {children}
    </div>
  );
};

export const CardFooter: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <div className={`px-6 py-4 border-t border-gray-100 bg-gray-50 ${className}`} {...props}>
      {children}
    </div>
  );
};
