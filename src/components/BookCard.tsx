import React from "react";
import type { Book } from "../types/bookType";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

interface BookCardProps {
  book: Book;
  loading: boolean;
}

const BookCard: React.FC<BookCardProps> = ({ book, loading }) => {
  if (loading) {
    return (
      <div className=" md:col-span-4 flex flex-col items-center">
        <DotLottieReact
          className="w-80 mx-auto"
          src="https://lottie.host/523a0043-f357-4408-93d8-3f229865790e/BrCIBIamkj.lottie"
          loop
          autoplay
        />
        <p className="p-4 text-center text-3xl">Loading books...</p>
      </div>
    );
  }

  return (
   <div className="">
  <div className="grid grid-cols-12">
    {/* Left: Thumbnail */}
    <div className="col-span-3">
      {book.volumeInfo.imageLinks?.thumbnail && (
        <img
          src={book.volumeInfo.imageLinks.thumbnail}
          alt={book.volumeInfo.title}
          className="w-full h-60 object-cover py-0.5 px-1"
        />
      )}
    </div>

    {/* Middle: Info */}
    <div className="col-span-6 p-4 flex flex-col justify-center">
      {/* Title */}
      <h2 className="text-lg font-semibold line-clamp-2">
        {book.volumeInfo.title}
      </h2>

      {/* Authors */}
      {book.volumeInfo.authors && (
        <p className="text-sm text-gray-600 mt-1">
          {book.volumeInfo.authors.join(", ")}
        </p>
      )}

      {/* Categories */}
      {book.volumeInfo.categories && (
        <p className="text-xs text-blue-500 mt-1">
          {book.volumeInfo.categories.join(", ")}
        </p>
      )}

      {/* Published Date */}
      {book.volumeInfo.publishedDate && (
        <p className="text-xs text-gray-400 mt-1">
          Published: {book.volumeInfo.publishedDate}
        </p>
      )}

      {/* Page Count */}
      {book.volumeInfo.pageCount && (
        <p className="text-xs text-gray-400">
          Pages: {book.volumeInfo.pageCount}
        </p>
      )}

      {/* Rating */}
      {book.volumeInfo.averageRating && (
        <div className="flex items-center mt-2">
          <span className="text-yellow-500">
            {"★".repeat(Math.floor(book.volumeInfo.averageRating))}
          </span>
          <span className="ml-2 text-sm text-gray-500">
            {book.volumeInfo.averageRating.toFixed(1)}
          </span>
        </div>
      )}
    </div>

    {/* Right: Purchase Options */}
    <div className="col-span-3 border-l p-4 flex flex-col items-center justify-center">
      <p className="text-lg font-bold text-green-600">$14.99</p>
      <button className="bg-blue-600 text-white px-4 py-2 mt-3 rounded hover:bg-blue-700 transition">
        Add to Cart
      </button>
      <button className="bg-gray-200 text-gray-800 px-4 py-2 mt-2 rounded hover:bg-gray-300 transition">
        Wishlist
      </button>
    </div>
  </div>
</div>

  );
};

export default BookCard;
