import React, { useEffect, useState } from 'react'
import type { Book } from "../types/bookType";
import BookCard from '../components/BookCard'
import FilterCategory from '../components/FilterCategory'

const Home = () => {
  const [books, setBooks] = useState<Book[]>([]);
    const [loading, setLoading] = useState<boolean>(true);


  useEffect(() => {
      fetch("https://www.googleapis.com/books/v1/volumes?q=javascript")
        .then((res) => res.json())
        .then((data) => {
          setBooks(data.items as Book[] || []);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching books:", err);
          setLoading(false);
        });
    }, []);

  return (
    <div className='w-[1020px] grid grid-cols-4'>
      <div className='grid col-span-1'>
        <FilterCategory></FilterCategory>
      </div>
      <div className='grid col-span-3'>
        {books.map((b) => (
          <BookCard key={b.id} book={b} loading={loading} />
        ))}
      </div>
    </div>
  )
}

export default Home