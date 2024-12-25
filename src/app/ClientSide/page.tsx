"use client";

import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import { Product } from "@/types/types";

const ClientSide: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const data: Product[] = await res.json();
        setProducts(data);
        setLoading(false);
      } catch (err: any) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg font-semibold text-gray-600">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg font-semibold text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-6">
        <h2 className="text-3xl text-blue-950 font-bold text-center mb-8">
          Products (Client-Side Rendered)
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center border hover:shadow-lg transition duration-300"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-40 object-contain mb-4"
              />
              <h3 className="font-semibold text-lg mb-2 text-center text-blue-950">
                {product.title}
              </h3>
              <p className="text-sm text-blue-950 mb-4 text-center">
                ${product.price.toFixed(2)}
              </p>
              <button className="bg-blue-950 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientSide;