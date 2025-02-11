"use client"

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 border-t border-gray-200 py-8 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="font-bold text-lg mb-2">Funiro.</h3>
          <p className="text-sm">
            400 University Drive Suite 200 Coral Gables, FL 33134 USA
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold mb-2">Links</h3>
          <ul>
            <li className="hover:underline font-bold">
              <a href="/">Home</a>
            </li>
            <li className="hover:underline font-bold">
              <a href="/Shop">Shop</a>
            </li>
            <li className="hover:underline font-bold">
              <a href="/About">About</a>
            </li>
            <li className="hover:underline font-bold">
              <a href="/Contact">Contact</a>
            </li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="font-semibold mb-2">Help</h3>
          <ul>
            <li className="hover:underline font-bold">
              <a href="/payment-options">Payment Options</a>
            </li>
            <li className="hover:underline font-bold">
              <a href="/returns">Returns</a>
            </li>
            <li className="hover:underline font-bold">
              <a href="/privacy-policies">Privacy Policies</a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold mb-2">Newsletter</h3>
          <div className="flex items-center">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="border border-gray-300 rounded-l px-2 py-1 w-full"
            />
            <button className="bg-black text-white px-4 py-1 rounded-r">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="font-bold text-black text-sm mt-8">
        <p>2024 Funiro. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
