"use client"
// pages/cart.js
import Image from 'next/image';
import Link from 'next/link';


export default function Cart() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto p-4">
        {/* Header */}
        <div className="text-center py-4">
          <h1 className="text-3xl font-bold">Cart</h1>
          <p className="text-gray-600">
            <Link href="/">Home</Link> &gt; Cart
          </p>
        </div>

        {/* Cart Section */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="flex-1 bg-white p-4 rounded shadow">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="border-b py-2">Product</th>
                  <th className="border-b py-2">Price</th>
                  <th className="border-b py-2">Quantity</th>
                  <th className="border-b py-2">Subtotal</th>
                  <th className="border-b py-2"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-4">
                    <div className="flex items-center">
                      <Image
                        src="/sofa.jpg" // Replace with your image URL
                        alt="Asgaard sofa"
                        width={80}
                        height={80}
                        className="rounded"
                      />
                      <span className="ml-4">Asgaard Sofa</span>
                    </div>
                  </td>
                  <td className="py-4">Rs. 250,000.00</td>
                  <td className="py-4">
                    <input
                      type="number"
                      min="1"
                      value="1"
                      className="w-16 border rounded p-1 text-center"
                    />
                  </td>
                  <td className="py-4">Rs. 250,000.00</td>
                  <td className="py-4 text-red-500 cursor-pointer">
                    🗑️
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Cart Totals */}
          <div className="w-full lg:w-1/3 bg-white p-4 rounded shadow">
            <h2 className="text-xl font-bold mb-4">Cart Totals</h2>
            <div className="flex justify-between py-2 border-b">
              <span>Subtotal</span>
              <span>Rs. 250,000.00</span>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span>Total</span>
              <span className="font-bold text-lg">Rs. 250,000.00</span>
            </div>
            <button className="w-full mt-4 bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600">
              Check Out
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-center bg-white mt-8 p-4 rounded shadow">
          <div>
            <h3 className="font-bold">High Quality</h3>
            <p>Crafted from top materials</p>
          </div>
          <div>
            <h3 className="font-bold">Warranty Protection</h3>
            <p>Over 2 years</p>
          </div>
          <div>
            <h3 className="font-bold">Free Shipping</h3>
            <p>Order over 150 $</p>
          </div>
          <div>
            <h3 className="font-bold">24/7 Support</h3>
            <p>Dedicated support</p>
          </div>
        </div>
      </div>
    </div>
  );
}

