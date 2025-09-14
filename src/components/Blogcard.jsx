import React from 'react';
import { useNavigate } from 'react-router-dom';

const BlogCard = ({ blog }) => {
  const { _id, title, description, image, author, category } = blog;
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/blog/${_id}`)}
      className="w-full rounded-lg overflow-hidden shadow transition duration-300 cursor-pointer hover:shadow-primary/25 hover:scale-[1.02]"
    >
      <img src={image} alt={title || ''} className="aspect-video w-full object-cover" />
      <span className="ml-5 mt-4 px-3 py-1 inline-block bg-primary/20 rounded-full text-primary text-xs">
        {category}
      </span>
      <div className="px-5 pb-4 pt-2">
        <h5 className="mb-2 font-medium text-gray-900">{title}</h5>
        <p className="mb-3 text-xs text-gray-600" dangerouslySetInnerHTML={{"__html":description.slice(0, 80)}}></p>
      </div>
    </div>
  );
};

export default BlogCard;
