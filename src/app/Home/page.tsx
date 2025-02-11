"use client"
import Image from "next/image";
import { useState } from "react";

const Home= () => {
  const products = [
    {
      name: "Syltherine",
      description: "Stylish cafe chair",
      price: "Rp 2.500.000",
      originalPrice: "Rp 3.500.000",
      discount: "30%",
      image: "/syltherine.png",
    },
    {
      name: "Leviosa",
      description: "Stylish cafe chair",
      price: "Rp 2.500.000",
      image: "/leviosa.png",
    },
    {
      name: "Lolito",
      description: "Luxury big sofa",
      price: "Rp 7.000.000",
      originalPrice: "Rp 14.000.000",
      discount: "50%",
      image: "/lolito.png",
    },
    {
      name: "Respira",
      description: "Outdoor bar table and stool",
      price: "Rp 500.000",
      isNew: true,
      image: "/respira.png",
    },
    {
      name: "Grifo",
      description: "Night lamp",
      price: "Rp 1.500.000",
      image: "/grifo.png",
    },
    {
      name: "Muggo",
      description: "Small mug",
      price: "Rp 150.000",
      isNew: true,
      image: "/muggo.png",
    },
    {
      name: "Pingky",
      description: "Cute bed set",
      price: "Rp 7.000.000",
      originalPrice: "Rp 14.000.000",
      discount: "50%",
      image: "/pingky.png",
    },
    {
      name: "Potty",
      description: "Minimalist flower pot",
      price: "Rp 500.000",
      isNew: true,
      image: "/potty.png",
    },
  ];

  const slides = [
    { id: 1, image: "/room1.png", title: "Inner Peace", category: "Bed Room" },
    { id: 2, image: "/room2.png", title: "Modern Dining", category: "Dining Room" },
    { id: 3, image: "/room3.png", title: "Minimalist Office", category: "Work Space" },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div>
      {/* Banner Section */}
      <div className="relative bg-white h-[500px]">
        <Image
          src="/Cart-Background-1.png"
          alt="Banner Image"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />
        <div className="absolute right-16 top-1/4 bg-[#FFF3E3] w-[400px] h-[300px] p-6 rounded-lg shadow-lg flex flex-col justify-center">
          <h3 className="text-sm font-medium text-gray-500">New Arrival</h3>
          <h1 className="text-3xl font-bold text-gray-800 my-4">
            Discover Our <br /> New Collection
          </h1>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
          </p>
          <button className="bg-[#B88E2F] text-white py-2 px-6 rounded-md hover:opacity-90">
            BUY NOW
          </button>
        </div>
      </div>

      {/* Products Section */}
      <div className="bg-white text-black py-10">
        <h1 className="text-3xl font-bold text-center mb-5">Our Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="relative bg-white text-black rounded-lg shadow-lg overflow-hidden group"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={300}
                className="w-full h-[200px] object-cover"
              />
              {product.discount && (
                <span className="absolute top-4 right-4 bg-red-500 text-white text-sm font-bold px-2 py-1 rounded-full">
                  -{product.discount}
                </span>
              )}
              {product.isNew && (
                <span className="absolute top-4 right-4 bg-green-500 text-white text-sm font-bold px-2 py-1 rounded-full">
                  New
                </span>
              )}
              <div className="p-4">
                <h3 className="text-lg font-medium">{product.name}</h3>
                <p className="text-sm text-gray-600">{product.description}</p>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-lg font-bold">{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-sm line-through text-gray-500">
                      {product.originalPrice}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Room Inspiration Section */}
      <div className="flex items-center justify-between bg-[#FDF6E3] py-16 px-6">
        <div className="w-1/3">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            50+ Beautiful rooms inspiration
          </h2>
          <p className="text-gray-600 mb-8">
            Our designer already made a lot of beautiful prototypes of rooms that inspire you.
          </p>
          <button className="bg-[#B88E2F] text-white py-2 px-6 rounded-md hover:opacity-90">
            Explore More
          </button>
        </div>
        <div className="relative w-2/3">
          <div className="relative overflow-hidden">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
                  index === currentSlide ? "translate-x-0" : "translate-x-full"
                }`}
                style={{ transform: `translateX(${(index - currentSlide) * 100}%)` }}
              >
                <Image
                  src={slide.image}
                  alt={slide.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
                <div className="absolute bottom-8 left-8 bg-white bg-opacity-75 p-4 rounded-lg">
                  <p className="text-sm font-medium text-gray-500 mb-1">{slide.category}</p>
                  <h3 className="text-lg font-bold text-gray-800">{slide.title}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === currentSlide ? "bg-[#B88E2F]" : "bg-gray-400"
                }`}
                onClick={() => setCurrentSlide(index)}
              ></button>
            ))}
          </div>
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white w-8 h-8 rounded-full flex items-center justify-center hover:opacity-80"
          >
            &#8249;
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white w-8 h-8 rounded-full flex items-center justify-center hover:opacity-80"
          >
            &#8250;
          </button>
        </div>
      </div>
      <div className="bg-white min-h-screen">
      {/* Header Text */}
      <div className="text-center mt-8 mb-12">
        <h1 className="text-2xl sm:text-4xl font-semibold text-gray-800">
          Share your setup with
        </h1>
        <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mt-2">
          #FuniroFurniture
        </h2>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-4 md:grid-cols-4 gap-4 p-4">
        {/* Large Image */}
        <div>
          <Image
            src="/F1-Logo.png"
            alt="Funiro Furniture Setup"
            width={274}
            height={382}
            className="w-fit h-full object-cover rounded-lg"
          />
        </div>

        {/* Placeholder Images or Additional Images */}
        <div>
          <Image
            src="/F2-Logo.png"
            alt="Room Setup 1"
            width={451}
            height={312}
            className="w-fit h-full object-cover rounded-lg"
          />
        </div>
        <div>
          <Image
            src="/F3-Logo.png"
            alt="Room Setup 2"
            width={295}
            height={392}
            className="w-fit h-full object-cover rounded-lg"
          />
        </div>
        <div>
          <Image
            src="/F4-Logo.png"
            alt="Room Setup 3"
            width={290}
            height={384}
            className="w-fit h-full object-cover rounded-lg"
          />
        </div>
        <div>
          <Image
            src="/F5-Logo.png"
            alt="Room Setup 4"
            width={425}
            height={433}
            className="w-fit h-full object-cover rounded-lg"
          />
        </div>
        <div>
          <Image
            src="/F6-Logo.png"
            alt="Room Setup 4"
            width={425}
            height={433}
            className="w-fit h-full object-cover rounded-lg"
          />
        </div>
        <div>
          <Image
            src="/F7-Logo.png"
            alt="Room Setup 4"
            width={425}
            height={433}
            className="w-fit h-full object-cover rounded-lg"
          />
        </div>
        <div>
          <Image
            src="/F8-Logo.png"
            alt="Room Setup 4"
            width={425}
            height={433}
            className="w-fit h-full object-cover rounded-lg"
          />
        </div>
        <div>
          <Image
            src="/F9-Logo.png"
            alt="Room Setup 4"
            width={425}
            height={433}
            className="w-fit h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Home;
