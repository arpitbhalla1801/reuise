import React from "react";

export interface SwitchProps {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  label?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const Switch: React.FC<SwitchProps> = ({
  checked: controlledChecked,
  defaultChecked = false,
  onChange,
  disabled = false,
  label,
  size = "md",
  className = "",
}) => {
  const [internalChecked, setInternalChecked] = React.useState(defaultChecked);
  const isControlled = controlledChecked !== undefined;
  const checked = isControlled ? controlledChecked : internalChecked;

  const handleToggle = () => {
    if (disabled) return;
    
    const newChecked = !checked;
    if (!isControlled) {
      setInternalChecked(newChecked);
    }
    onChange?.(newChecked);
  };

  const sizes = {
    sm: {
      track: "w-8 h-4",
      thumb: "w-3 h-3",
      translate: "translate-x-4",
    },
    md: {
      track: "w-11 h-6",
      thumb: "w-4 h-4",
      translate: "translate-x-5",
    },
    lg: {
      track: "w-14 h-7",
      thumb: "w-5 h-5",
      translate: "translate-x-7",
    },
  };

  const sizeConfig = sizes[size];

  return (
    <label
      className={`inline-flex items-center gap-3 ${
        disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"
      } ${className}`}
    >
      <div className="relative inline-flex items-center">
        <input
          type="checkbox"
          className="sr-only"
          checked={checked}
          onChange={handleToggle}
          disabled={disabled}
        />
        <div
          className={`
            ${sizeConfig.track} rounded-full transition-colors duration-200
            ${
              checked
                ? "bg-blue-600"
                : "bg-gray-200"
            }
            ${disabled ? "" : "hover:shadow-md"}
          `}
        >
          <div
            className={`
              ${sizeConfig.thumb} rounded-full bg-white shadow-lg
              transform transition-transform duration-200 ease-in-out
              absolute top-1/2 -translate-y-1/2 left-1
              ${checked ? sizeConfig.translate : "translate-x-0"}
            `}
          />
        </div>
      </div>
      {label && (
        <span className="text-sm font-medium text-gray-700">{label}</span>
      )}
    </label>
  );
};
