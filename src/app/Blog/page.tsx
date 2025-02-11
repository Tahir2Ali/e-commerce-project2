"use client"
import Image from "next/image";
import Link from "next/link";

const BlogPage = () => {
  return (
    <div className="bg-gray-50">
      {/* Header Section */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-6 text-center">
          <h1 className="text-3xl font-bold text-gray-800">Blog</h1>
          <p className="text-gray-500">Home &gt; Blog</p>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Blog Posts */}
        <div className="lg:col-span-2 space-y-8">
          {/* Post 1 */}
          <div className="bg-white shadow-sm rounded-lg overflow-hidden">
            <Image
              src="/Blog-Logo1.png"
              alt="Millennial Design"
              width={800}
              height={400}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800">
                Going all-in with millennial design
              </h2>
              <p className="text-gray-600 mt-2">
                Explore how millennial design is shaping the modern workspace and home design.
              </p>
              <Link href="/Blog-Logo1" className="text-blue-600 mt-4 block">
                Read More
              </Link>
            </div>
          </div>

          {/* Post 2 */}
          <div className="bg-white shadow-sm rounded-lg overflow-hidden">
            <Image
              src="/Blog-Logo2.png"
              alt="Decorating Ideas"
              width={800}
              height={400}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800">
                Exploring new ways of decorating
              </h2>
              <p className="text-gray-600 mt-2">
                Discover innovative decorating ideas to refresh your living spaces.
              </p>
              <Link href="/Blog-Logo2" className="text-blue-600 mt-4 block">
                Read More
              </Link>
            </div>
          </div>

          {/* Post 3 */}
          <div className="bg-white shadow-sm rounded-lg overflow-hidden">
            <Image
              src="/Blog-Logo3.png"
              alt="Handmade Designs"
              width={800}
              height={400}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800">
                Handmade pieces that took time to make
              </h2>
              <p className="text-gray-600 mt-2">
                A closer look at unique handmade designs that stand out in any space.
              </p>
              <Link href="/Blog-Logo3" className="text-blue-600 mt-4 block">
                Read More
              </Link>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="space-y-8">
          {/* Categories */}
          <div className="bg-white shadow-sm rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-800">Categories</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/blog/category/design" className="text-gray-600 hover:text-gray-800">
                  Design
                </Link>
              </li>
              <li>
                <Link href="/blog/category/decorating" className="text-gray-600 hover:text-gray-800">
                  Decorating
                </Link>
              </li>
              <li>
                <Link href="/blog/category/handmade" className="text-gray-600 hover:text-gray-800">
                  Handmade
                </Link>
              </li>
            </ul>
          </div>

          {/* Recent Posts */}
          <div className="bg-white shadow-sm rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-800">Recent Posts</h3>
            <ul className="mt-4 space-y-4">
              <li className="flex items-center gap-4">
                <Image
                  src="/recent1.png"
                  alt="Recent Post 1"
                  width={60}
                  height={60}
                  className="w-16 h-16 object-cover rounded-md"
                />
                <Link href="/blog/recent1" className="text-gray-600 hover:text-gray-800">
                Going all-in with millennial design<br />
                  03 Aug 2022
                </Link>
              </li>
              <li className="flex items-center gap-4">
                <Image
                  src="/recent2.png"
                  alt="Recent Post 2"
                  width={60}
                  height={60}
                  className="w-16 h-16 object-cover rounded-md"
                />
                <Link href="/blog/recent2" className="text-gray-600 hover:text-gray-800">
                Exploring new ways of decorating<br />
                  03 Aug 2022
                </Link>
              </li>
              <li className="flex items-center gap-4">
                <Image
                  src="/recent3.png"
                  alt="Recent Post 3"
                  width={60}
                  height={60}
                  className="w-16 h-16 object-cover rounded-md"
                />
                <Link href="/blog/recent3" className="text-gray-600 hover:text-gray-800">
                Handmade pieces that took time to make<br />
                03 Aug 2022
                </Link>
              </li>
              <li className="flex items-center gap-4">
                <Image
                  src="/recent4.png"
                  alt="Recent Post 4"
                  width={60}
                  height={60}
                  className="w-16 h-16 object-cover rounded-md"
                />
                <Link href="/blog/recent3" className="text-gray-600 hover:text-gray-800">
                Modern home in Milan <br />
                03 Aug 2022
                </Link>
              </li>
              <li className="flex items-center gap-4">
                <Image
                  src="/recent5.png"
                  alt="Recent Post 5"
                  width={60}
                  height={60}
                  className="w-16 h-16 object-cover rounded-md"
                />
                <Link href="/blog/recent3" className="text-gray-600 hover:text-gray-800">
                Colorful office redesign <br />
                03 Aug 2022
                </Link>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default BlogPage;
