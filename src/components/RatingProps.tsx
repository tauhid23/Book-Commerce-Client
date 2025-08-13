import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

interface RatingProps {
  rating: number;       
  max?: number;         
  size?: number;        
  className?: string;   
}

const Rating: React.FC<RatingProps> = ({ rating, max = 5, size = 16, className = "" }) => {
  const value = Math.max(0, Math.min(max, rating));

  return (
    <div
      className={`flex items-center ${className}`}
      role="img"
      aria-label={`${value} out of ${max} stars`}
    >
      {/* screen-reader text for accessibility */}
      <span className="sr-only">{`${value} out of ${max} stars`}</span>

      {Array.from({ length: max }).map((_, i) => {
        const index = i + 1;
        if (value >= index) {
          // full star
          return <FaStar key={i} size={size} className="text-[#FFA000]" aria-hidden="true" />;
        } else if (value >= index - 0.5) {
          // half star
          return <FaStarHalfAlt key={i} size={size} className="text-[#FFA000]" aria-hidden="true" />;
        } else {
          // empty star
          return <FaRegStar key={i} size={size} className="text-yellow-400" aria-hidden="true" />;
        }
      })}
    </div>
  );
};

export default Rating;
