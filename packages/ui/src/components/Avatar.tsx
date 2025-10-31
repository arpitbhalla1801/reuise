import React from "react";

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  fallback?: string;
  size?: "sm" | "md" | "lg" | "xl";
  status?: "online" | "offline" | "busy" | "away";
}

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = "Avatar",
  fallback,
  size = "md",
  status,
  className = "",
  ...props
}) => {
  const [imageError, setImageError] = React.useState(false);

  const sizes = {
    sm: "w-8 h-8 text-xs",
    md: "w-10 h-10 text-sm",
    lg: "w-12 h-12 text-base",
    xl: "w-16 h-16 text-lg",
  };

  const statusColors = {
    online: "bg-green-500",
    offline: "bg-gray-400",
    busy: "bg-red-500",
    away: "bg-yellow-500",
  };

  const statusSizes = {
    sm: "w-2 h-2",
    md: "w-2.5 h-2.5",
    lg: "w-3 h-3",
    xl: "w-4 h-4",
  };

  const showImage = src && !imageError;
  const initials = fallback || alt.substring(0, 2).toUpperCase();

  return (
    <div className={`relative inline-block ${className}`} {...props}>
      <div
        className={`
          ${sizes[size]} rounded-full overflow-hidden
          bg-gradient-to-br from-blue-400 to-purple-500
          flex items-center justify-center font-semibold text-white
        `}
      >
        {showImage ? (
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover"
            onError={() => setImageError(true)}
          />
        ) : (
          <span>{initials}</span>
        )}
      </div>
      {status && (
        <span
          className={`
            absolute bottom-0 right-0 ${statusSizes[size]} rounded-full
            ${statusColors[status]} border-2 border-white
          `}
          aria-label={`Status: ${status}`}
        />
      )}
    </div>
  );
};

export interface AvatarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  max?: number;
  size?: "sm" | "md" | "lg" | "xl";
  children: React.ReactElement<AvatarProps>[];
}

export const AvatarGroup: React.FC<AvatarGroupProps> = ({
  max = 3,
  size = "md",
  children,
  className = "",
  ...props
}) => {
  const validChildren = React.Children.toArray(children).filter(
    (child): child is React.ReactElement<AvatarProps> =>
      React.isValidElement(child)
  );

  const displayedAvatars = validChildren.slice(0, max);
  const remainingCount = Math.max(0, validChildren.length - max);

  const sizes = {
    sm: "w-8 h-8 text-xs",
    md: "w-10 h-10 text-sm",
    lg: "w-12 h-12 text-base",
    xl: "w-16 h-16 text-lg",
  };

  return (
    <div className={`flex items-center -space-x-2 ${className}`} {...props}>
      {displayedAvatars.map((avatar, index) =>
        React.cloneElement(avatar, {
          key: index,
          size,
          className: "ring-2 ring-white",
        })
      )}
      {remainingCount > 0 && (
        <div
          className={`
            ${sizes[size]} rounded-full
            bg-gray-200 text-gray-700 ring-2 ring-white
            flex items-center justify-center font-semibold
          `}
        >
          +{remainingCount}
        </div>
      )}
    </div>
  );
};
