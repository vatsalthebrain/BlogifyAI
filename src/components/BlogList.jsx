import React, { useState } from 'react';
import { blogCategories } from '../assets/assets';

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
      <div></div>
    </div>
  );
};

export default BlogList;
