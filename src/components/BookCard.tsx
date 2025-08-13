import React from "react";
import type { Book } from "../types/bookType";
import Rating from "../components/RatingProps";

interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  return (
    <div className="border-b border-gray-300  py-6 ">
      <div className="flex flex-col md:flex-row gap-6 items-center">
        {/* Left: Thumbnail with hover popup */}
        <div className="flex-shrink-0 w-[130px] h-[130px] md:w-[180px] md:h-[190px]  overflow-hidden shadow- rounded-t-xl rounded-bl-xl cursor-pointer">
          {book.volumeInfo.imageLinks?.thumbnail ? (
            <img
              src={book.volumeInfo.imageLinks.thumbnail}
              alt={book.volumeInfo.title}
              className="w-full h-full  rounded-t-xl rounded-bl-xl outline-1 outline-gray-400 -outline-offset-1"
            />
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center rounded-t-xl rounded-bl-xl">
              No Image
            </div>
          )}

          {/* Hover Popup with details */}
          {/* <div className="absolute top-0 left-full ml-4 w-64 p-4 bg-white border border-gray-300 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50 overflow-auto max-h-[180px]">
            <h3 className="font-bold text-lg mb-2">{book.volumeInfo.title}</h3>
            <p className="text-sm mb-1">
              <span className="font-semibold">Authors:</span>{" "}
              {(book.volumeInfo.authors || []).join(", ") || "N/A"}
            </p>
            <p className="text-sm mb-1">
              <span className="font-semibold">Published:</span>{" "}
              {book.volumeInfo.publishedDate || "N/A"}
            </p>
            <p className="text-sm mb-1">
              <span className="font-semibold">Categories:</span>{" "}
              {(book.volumeInfo.categories || []).join(", ") || "N/A"}
            </p>
            <p className="text-sm mb-1">
              <span className="font-semibold">Page Count:</span>{" "}
              {book.volumeInfo.pageCount || "N/A"}
            </p>
            {typeof book.volumeInfo.averageRating === "number" && (
              <div className="flex items-center mt-1 gap-2 text-yellow-500">
                <Rating rating={book.volumeInfo.averageRating} size={16} />
                <span className="text-gray-600 text-sm">
                  {book.volumeInfo.averageRating.toFixed(1)} ratings
                </span>
              </div>
            )}
          </div> */}
        </div>

        {/* Middle: Info */}
        <div className="flex-1 flex flex-col justify-between ">
          <h2 className="text-xl font-serif leading-relaxed font-stretch-75% text-[#0E5B9B] hover:underline cursor-pointer">
            {book.volumeInfo.title}
          </h2>
          {book.volumeInfo.authors && (
            <p className="text-[14px] font-sans leading-normal mt-1">
              <span className="font-semibold text-[#061624] ">By: </span>
              {book.volumeInfo.authors.join(", ")}
            </p>
          )}

          <div className="text-[13px] font-sans leading-normal mt-2 space-y-0.5 text-[#061624]">
            {book.volumeInfo.pageCount && (
              <p>Length: {book.volumeInfo.pageCount} pages</p>
            )}
            {book.volumeInfo.publishedDate && (
              <p>Release date: {book.volumeInfo.publishedDate}</p>
            )}
            <p>Language: English</p>
          </div>

          {typeof book.volumeInfo.averageRating === "number" && (
            <div className="flex items-center mt-2 gap-2 ">
              <Rating rating={book.volumeInfo.averageRating} size={16} />
              <span className="text-[#061624] text-[13px] leading-normal font-serif">
                {book.volumeInfo.averageRating.toFixed(1)} ratings
              </span>
            </div>
          )}
        </div>

        {/* Right: Price & Button */}
        <div className="flex-shrink-0 w-[200px] flex flex-col items-start  leading-tight space-y-2">
          <p className="text-[14px] leading-5 font-stretch-90% text-[#061624] font-sans">
            $20.25 or free with 30-day trial
          </p>
          <button className="bg-[#FFA000] hover:bg-[#ffa200e8] text-gray-900  rounded-full py-1 px-8 w-full transition">
            <span className="font-medium tracking-tight font-stretch-50%">Try for $0.00</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
