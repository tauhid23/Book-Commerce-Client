import React from "react";

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string | null; // null means "All Categories"
  onSelectCategory: (category: string | null) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
}) => {
  return (
    <div className="flex flex-col gap-2 py-4">
        <h3 className="text-xl font-bold  font-sans">Categories</h3>
      {/* "All Categories" button always rendered on top */}
      {selectedCategory !== null && (
        <button
          className="text-black font-medium cursor-pointer text-left"
          onClick={() => onSelectCategory(null)}
        >
          All Categories
        </button>
      )}

      {/* Category buttons */}
      {categories.map((cat) => (
        <button
          key={cat}
          className={`cursor-pointer text-left ${
            selectedCategory === cat ? "font-bold underline" : ""
          }`}
          onClick={() => onSelectCategory(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
