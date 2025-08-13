import React, { useState } from "react";

interface PaginationProps {
  totalItems: number;
  visibleCount: number;
  onLoadMore: () => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalItems,
  visibleCount,
  onLoadMore,
}) => {
  const [animating, setAnimating] = useState(false);

  if (visibleCount >= totalItems) return null;

  const handleClick = () => {
    if (animating) return; // prevent multiple clicks during animation
    setAnimating(true);

    // Animation lasts 1 second, then call onLoadMore and stop animation
    setTimeout(() => {
      setAnimating(false);
      onLoadMore();
    }, 1000);
  };

  return (
    <div className="flex justify-center mt-4 mb-8">
      <button
        onClick={handleClick}
        className={`px-6 py-2 rounded text-gray-800 bg-[#FFA000] hover:bg-[#ffa200e8] ${
          animating ? "animate-pulse" : ""
        }`}
      >
        Load More
      </button>
    </div>
  );
};

export default Pagination;
