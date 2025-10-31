import React from "react";

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "info" | "success" | "warning" | "error";
  title?: string;
  onClose?: () => void;
}

export const Alert: React.FC<AlertProps> = ({
  variant = "info",
  title,
  onClose,
  children,
  className = "",
  ...props
}) => {
  const variants = {
    info: {
      container: "bg-blue-50 border-blue-200 text-blue-900",
      icon: "ℹ️",
      iconBg: "bg-blue-100",
    },
    success: {
      container: "bg-green-50 border-green-200 text-green-900",
      icon: "✓",
      iconBg: "bg-green-100",
    },
    warning: {
      container: "bg-yellow-50 border-yellow-200 text-yellow-900",
      icon: "⚠",
      iconBg: "bg-yellow-100",
    },
    error: {
      container: "bg-red-50 border-red-200 text-red-900",
      icon: "✕",
      iconBg: "bg-red-100",
    },
  };

  const config = variants[variant];

  return (
    <div
      className={`
        relative rounded-lg border p-4 ${config.container} ${className}
      `}
      role="alert"
      {...props}
    >
      <div className="flex gap-3">
        <div
          className={`
            flex-shrink-0 w-6 h-6 rounded-full ${config.iconBg}
            flex items-center justify-center text-sm font-bold
          `}
        >
          {config.icon}
        </div>
        <div className="flex-1 min-w-0">
          {title && <h3 className="font-semibold mb-1">{title}</h3>}
          <div className="text-sm">{children}</div>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="flex-shrink-0 text-current opacity-60 hover:opacity-100 transition-opacity"
            aria-label="Close alert"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};
