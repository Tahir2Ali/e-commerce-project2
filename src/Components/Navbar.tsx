"use client"
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  
  return (
    <div>
      {/* Left Logo Section */}
      <nav className="bg-white text-black h-auto sm:h-12 md:h-16 lg:h-16 py-2 px-3 flex sm:row justify-between items-center">
      <div className="mb-4 sm:mb-0 ">
        <Image src="/MH-Logo1.png" alt="MH Logo 1" width={50} height={32} />
        <Image src="/Furniro-Logo2.png" alt="Furniro Logo 2" width={130} height={41} />
      </div>

          {/*  Middle Navigation Items - Centered */}
      <div>
        <ul className="flex space-x-5 text-lg font-medium">
          <li>
            <Link href="/Home"className="hover: text-blue-600">Home</Link>
          </li>
          <li>
            <Link href="/Shop"className="hover: text-blue-600">Shop</Link>
          </li>
          <li>
            <Link href="/Contact"className="hover: text-blue-600">Contact</Link>
          </li>
          <li>
            <Link href="/Blog"className="hover: text-blue-600">Blog</Link>
          </li>
        </ul>
      </div>

      {/* Left Logo Section */}
      <div className="flex space gap-x-3">
  <Link href="/account">
    <Image src="/Account-Logo3.png" alt="Account Logo" width={28} height={28} />
  </Link>
  <Link href="/search">
    <Image src="/Search-Logo4.png" alt="Search Icon" width={28} height={28} />
  </Link>
  <Link href="/">
    <Image src="/Shopping-cart-Logo6.png" alt="Shopping Cart Icon" width={28} height={28} />
  </Link>
</div>
      </nav>
    </div>
  );
};

export default Navbar;      