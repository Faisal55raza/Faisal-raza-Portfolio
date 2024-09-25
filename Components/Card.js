import React from "react";
import Image from "next/image";
const Card = () => {
  return (
    <div className="w-1/4 overflow-hidden shadow-lg hover:scale-110 duration-300 border-2 border-white shadow-black rounded-lg">
      <Image
        className="w-full"
        src="https://v1.tailwindcss.com/img/card-top.jpg"
        alt="Sunset in the mountains"
        width={500}
        height={300}
      />

      <div className="px-6 py-4 bg-gray-900">
        <div className="font-bold text-xl mb-2">Project Title</div>
        <p className="text-gray-200 text-base">
          skills | HTML | CSS | C++ | REACT | Node.js
        </p>
      </div>
      <div className="px-6 pt-4 pb-2 bg-gray-900">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #GitHub
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #Visit
        </span>
      </div>
    </div>
  );
};

export default Card;
