import React from "react";

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "text" | "circular" | "rectangular";
  width?: string | number;
  height?: string | number;
  animate?: boolean;
}

export const Skeleton: React.FC<SkeletonProps> = ({
  variant = "rectangular",
  width,
  height,
  animate = true,
  className = "",
  style,
  ...props
}) => {
  const variantStyles = {
    text: "rounded h-4",
    circular: "rounded-full",
    rectangular: "rounded-md",
  };

  const computedStyle: React.CSSProperties = {
    width: width,
    height: height || (variant === "text" ? undefined : height),
    ...style,
  };

  return (
    <div
      className={`
        bg-gray-200 ${variantStyles[variant]}
        ${animate ? "animate-pulse" : ""}
        ${className}
      `}
      style={computedStyle}
      {...props}
    />
  );
};

// Convenience components for common patterns
export const SkeletonText: React.FC<{ lines?: number; className?: string }> = ({
  lines = 3,
  className = "",
}) => {
  return (
    <div className={`space-y-2 ${className}`}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          variant="text"
          width={i === lines - 1 ? "60%" : "100%"}
        />
      ))}
    </div>
  );
};

export const SkeletonCard: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`border rounded-lg p-4 space-y-3 ${className}`}>
      <div className="flex items-center gap-3">
        <Skeleton variant="circular" width={40} height={40} />
        <div className="flex-1 space-y-2">
          <Skeleton variant="text" width="40%" />
          <Skeleton variant="text" width="60%" />
        </div>
      </div>
      <Skeleton variant="rectangular" height={120} />
      <SkeletonText lines={2} />
    </div>
  );
};

export default Skeleton;
