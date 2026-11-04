import React from "react";

export function ArrowRightIcon({ className = "w-4 h-4", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg 
      viewBox="0 0 16 16" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
      {...props}
    >
      <path 
        d="M3.33334 8H12.6667M12.6667 8L8.66668 4M12.6667 8L8.66668 12" 
        stroke="currentColor" 
        strokeWidth="1.75" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </svg>
  );
}

export function ExternalLinkIcon({ className = "w-4 h-4", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg 
      viewBox="0 0 16 16" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
      {...props}
    >
      <path 
        d="M12 8.66667V12.6667C12 13.0203 11.8595 13.3594 11.6095 13.6095C11.3594 13.8595 11.0203 14 10.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V5.33333C2 4.97971 2.14048 4.64057 2.39052 4.39052C2.64057 4.14048 2.97971 4 3.33333 4H7.33333" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d="M10 2H14V6" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d="M6.66666 9.33333L13.7333 2.26666" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </svg>
  );
}

export function SparkleIcon({ className = "w-4 h-4", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
      {...props}
    >
      <path 
        d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" 
        fill="currentColor" 
      />
    </svg>
  );
}

export function CheckIcon({ className = "w-4 h-4", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg 
      viewBox="0 0 16 16" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
      {...props}
    >
      <path 
        d="M13.3333 4L6 11.3333L2.66666 8" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </svg>
  );
}

