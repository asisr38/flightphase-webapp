import React from "react";

interface TikTokProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const TikTok = ({
  size = 24,
  className = "",
  ...props
}: TikTokProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`lucide lucide-tiktok ${className}`}
      {...props}
    >
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  );
}; 