import React from "react";
import Image from "next/image";

function LargeCard({ img, title, description, buttonText }) {
  return (
    <div className="relative ml-5 py-12 cursor-pointer">
      <div className="relative h-96 min-w-[300px]">
        <Image 
            src={img}
            layout="fill"
            objectFit="cover"
            className="rounded-2xl"
        />
      </div>
      <div className="absolute top-28 left-12">
            <h3 className="text-4xl mb-3 w-64">{title}</h3>
            <p>{description}</p>
            <button className="text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5 hover:bg-gray-700
            hover:shadow-xl active:scale-90 transition duration-300">{buttonText}</button>
      </div>
    </div>
  );
}

export default LargeCard;
