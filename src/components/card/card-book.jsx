import React from "react";
import BookCover from "../../assets/example-book-cover.jpg";

export const CardBook = (props) => {
  return (
    <div className='max-w-72 shadow-lg rounded-t-xl overflow-hidden bg-slate-100 cursor-pointer'>
      <div className='w-full max-h-72 bg-green-300 overflow-hidden'>
        <img src={BookCover} className='object-cover object-center' alt='' />
      </div>
      <div className='p-4'>
        <h4 className='text-xl font-bold'>SOUL</h4>
        <p className='text-sm'>Olivia Wilson</p>
        <p className='text-sm mb-2'>2022</p>
        <p className='text-justify line-clamp-2'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          eius explicabo fugiat perspiciatis facere exercitationem autem sequi
          repellat vitae cumque cupiditate, enim mollitia illum deleniti optio
          saepe? Voluptatum, quis voluptate?
        </p>
      </div>
    </div>
  );
};
