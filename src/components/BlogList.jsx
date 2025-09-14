import React, { useState } from 'react';
import { blog_data, blogCategories } from '../assets/assets';
import BlogCard from './Blogcard'

const BlogList = () => {
  const [menu, setMenu] = useState('All');

  return (
    <div>
      <div className="flex justify-center gap-4 sm:gap-8 my-10 relative">
        {blogCategories.map((item) => (
          <div key={item} className="relative">
            <button
              onClick={() => setMenu(item)}
              className={`relative cursor-pointer px-4 py-1 rounded-full transition ${
                menu === item ? 'text-white' : 'text-gray-500'
              }`}
            >
              {menu === item && (
                <span className="absolute inset-0 bg-primary rounded-full -z-10" />
              )}
              {item}
            </button>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-24 mx-8 sm:mx-16 xl:mx-40">
        {blog_data
          .filter((blog) => (menu === 'All' ? true : blog.category === menu))
          .map((blog) => (
            <BlogCard blog={blog} key={blog._id} />
          ))}
      </div>
    </div>
  );
};

export default BlogList;
