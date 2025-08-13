import React, { useEffect, useState } from "react";
import type { Book } from "../types/bookType";
import BookCard from "../components/BookCard";
import CategoryFilter from "../components/CategoryFilter";
import Loading from "../components/Loading";
import Pagination from "../components/Pagination";

const Home = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [visibleCount, setVisibleCount] = useState(4);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://www.googleapis.com/books/v1/volumes?q=javascript")
      .then((res) => res.json())
      .then((data) => {
        setBooks((data.items as Book[]) || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching books:", err);
        setLoading(false);
      });
  }, []);

  // Extract all unique categories (including subsections) from books
  const allCategories = Array.from(
    new Set(books.flatMap((b) => b.volumeInfo.categories || []))
  );

  // Filter books by selected category
  const filteredBooks = selectedCategory
    ? books.filter(
        (b) =>
          b.volumeInfo.categories &&
          b.volumeInfo.categories.includes(selectedCategory)
      )
    : books;

    // Separating first round visible book in an Array[]
  const visibleBooks = filteredBooks.slice(0, visibleCount);

  return (
    <div className="w-[1020px] grid grid-cols-4 gap-4">
      <div className="col-span-1">
        <CategoryFilter
          categories={allCategories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
      </div>
      <div className="col-span-3">
        {loading ? (
          <Loading />
        ) : visibleBooks.length === 0 ? (
          <p>No books found for this category.</p>
        ) : (
          <>
            {visibleBooks.map((b) => (
              <BookCard key={b.id} book={b}/>
            ))}

            <Pagination
              totalItems={filteredBooks.length}
              visibleCount={visibleCount}
              onLoadMore={() => setVisibleCount((prev) => prev + 50)}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
