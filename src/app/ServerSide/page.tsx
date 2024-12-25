import React from "react";
import Navbar from "@/components/Navbar";
import { Book } from "@/types/types";

const fetchBooks = async (): Promise<Book[]> => {
  const res = await fetch("https://simple-books-api.glitch.me/books/");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

const ServerSide: React.FC = async () => {
  const books = await fetchBooks();

  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-6">
        <h2 className="text-3xl font-bold text-center text-blue-950 mb-8">
          Books (Server-Side Rendered)
        </h2>
        <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {books.map((book) => (
            <div
            key={book.id}
            className="pt-14 text-blue-950 bg-white shadow-md rounded-lg p-4 flex flex-col items-center border hover:shadow-lg transition duration-300 w-64 h-40 sm:w-80 sm:h-48 lg:w-96 lg:h-56"
          >
            <h3 className="font-semibold text-lg mb-2 text-center text-blue-950">{book.name}</h3>
            <p className="text-sm text-blue-950 mb-2 text-center">Author: {book.author}</p>
            <p className="text-sm text-blue-950 text-center">
              Available: {book.available ? "Yes" : "No"}
            </p>
          </div>
          
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServerSide;
