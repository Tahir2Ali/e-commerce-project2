"use client"
import React, { useEffect, useState } from "react";
import SanityClient from "@sanity/client";
import Image from "next/image";

const sanity = SanityClient({
  projectId: "xqye3af1",
  dataset: "production",
  apiVersion: "2025-01-13",
  useCdn: true,
});

interface Product {
  _id: string;
  title: string;
  price: number;
  description: string;
  discountPercentage: number;
  imageUrl: string | null; // Make imageUrl nullable
  tags: string[];
}

const ProductCards: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);

  const fetchProducts = async () => {
    try {
      const query = `
        *[_type == "product"] {
          _id,
          title,
          price,
          description,
          discountPercentage,
          "imageUrl": productImage.asset->url,
          tags
        }
      `;
      const data = await sanity.fetch(query);
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
    alert(`${product.title} has been added to your cart!`);
  };

  const truncateDescription = (description: string) =>
    description.length > 100 ? description.substring(0, 100) + "..." : description;

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-center text-slate-800 mt-4 mb-2">Products From API&apos;s Data</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white shadow-md rounded-lg gap-4 hover:shadow-lg transition-shadow duration-300"
          >
            {/* Render Image only if imageUrl exists */}
            {product.imageUrl ? (
              <Image
                src={product.imageUrl}
                alt={product.title}
                width={300}
                height={300}
                className="w-full h-48 object-cover rounded-md"
              />
            ) : (
              <div className="w-full h-48 flex items-center justify-center bg-gray-200 rounded-md">
                <span className="text-gray-500">Image Not Available</span>
              </div>
            )}
            <div className="mt-4">
              <h2 className="text-lg font-semibold">{product.title}</h2>
              <p className="text-slate-800 mt-2 text-sm">
                {truncateDescription(product.description)}
              </p>
              <div className="flex justify-between items-center mt-4">
                <div>
                  <p className="text-slate-600 font-bold">$ {product.price}</p>
                  {product.discountPercentage > 0 && (
                    <p className="text-sm text-green-600">{product.discountPercentage}% OFF</p>
                  )}
                </div>
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                {product.tags.map((tag, index) => (
                  <span key={index} className="text-xs bg-slate-400 text-black gap-px-2 py-1">
                    {tag}
                  </span>
                ))}
              </div>
              <button
                className="mt-4 w-full bg-blue-600 text-white py-2 rounded md hover:bg-blue-700"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-slate-100 p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-black text-red-800">Cart Summary</h2>
        {cart.length > 0 ? (
          <ul className="space-y-4">
            {cart.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center bg-white shadow-sm p-4 rounded-md"
              >
                <div>
                  <p className="font-medium text-slate-900">{item.title}</p>
                  <p className="text-sm text-blue-600">${item.price.toFixed(2)}</p>
                  {item.imageUrl ? (
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      width={50}
                      height={50}
                      className="rounded-md"
                    />
                  ) : (
                    <div className="w-12 h-12 flex items-center justify-center bg-gray-200 rounded-md">
                      <span className="text-gray-500">No Image</span>
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-black text-center">Your Cart is Empty. Please Add Products.</p>
        )}
      </div>
    </div>
  );
};

export default ProductCards;
