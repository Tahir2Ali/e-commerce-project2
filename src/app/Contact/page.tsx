"use client";
import Image from "next/image";


export default function Contact() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Section */}
      <div className="relative h-64 w-full">
        <Image
          src="/contact-image.png"
          alt="Contact Background"
          layout="fill"
          objectFit="cover"
          className="brightness-50"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 text-center">
        </div>
      </div>

      {/* Contact Information */}
      <div className="text-center py-8 px-4">
        <h2 className="text-3xl font-semibold mb-4">Get In Touch With Us</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          For more information about our products & services, please feel free to drop us an email.
          Our staff is always here to help you out. Do not hesitate!
        </p>
      </div>

      {/* Contact Details and Form */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Details */}
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <span className="text-xl text-gray-800 font-semibold">📍</span>
            <div>
              <h3 className="text-lg font-semibold">Address</h3>
              <p className="text-gray-600">
                236 5th SE Avenue, New York, NY 10000, United States
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <span className="text-xl text-gray-800 font-semibold">📞</span>
            <div>
              <h3 className="text-lg font-semibold">Phone</h3>
              <p className="text-gray-600">
                Mobile: (+84) 546-5789 <br />
                Hotline: (+84) 456-7898
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <span className="text-xl text-gray-800 font-semibold">⏰</span>
            <div>
              <h3 className="text-lg font-semibold">Working Time</h3>
              <p className="text-gray-600">
                Monday-Friday: 9:00 - 20:00 <br />
                Saturday-Sunday: 9:00 - 17:00
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Alice"
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-yellow-500 focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="abc@email.com"
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-yellow-500 focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-gray-700 font-medium">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                placeholder="This is optional"
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-yellow-500 focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 font-medium">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Hi! I'd like to talk about..."
                
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-yellow-500 focus:outline-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-yellow-500 text-white font-semibold rounded-md hover:bg-yellow-600"
            >
              Submit!
            </button>
          </form>
        </div>
      </div>

      {/* Footer Section */}
      <div className="mt-16 bg-gray-100 py-6">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <h4 className="text-lg font-semibold text-gray-800">High Quality</h4>
            <p className="text-sm text-gray-600">Crafted from top materials</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-800">Warranty Protection</h4>
            <p className="text-sm text-gray-600">Over 2 years</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-800">Free Shipping</h4>
            <p className="text-sm text-gray-600">Order over $150</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-800">24/7 Support</h4>
            <p className="text-sm text-gray-600">Dedicated support</p>
          </div>
        </div>
      </div>
    </div>
  );
}
