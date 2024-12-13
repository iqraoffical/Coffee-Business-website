import React from "react";
import Image from "next/image";

const Coffee = () => {
  const coffeeData = [
    {
      id: 1,
      name: "Chock full o'Nuts",
      price: 8.48,
      description: "Coffee beans",
      image: "/images/imageA.jpeg",
    },
    {
      id: 2,
      name: "Cuppuchino",
      price: 36.0,
      description: "Coffee-bean-pacific-park",
      image: "/images/chocknut.jpeg",
    },
    {
      id: 3,
      name: "Kahwa Coffee",
      price: 43.01,
      description: "Kahwa Coffee Roasters",
      image: "/images/imageB.jpeg",
    },
    {
      id: 4,
      name: "Chock full o'Nuts",
      price: 8.48,
      description: "Coffee beans",
      image: "/images/coffeecup.jpeg",
    },
    {
      id: 5,
      name: "Cuppuchino",
      price: 36.0,
      description: "Coffee-bean-pacific-park",
      image: "/images/cream.jpeg",
    },
    {
      id: 6,
      name: "Kahwa Coffee",
      price: 43.01,
      description: "Kahwa Coffee Roasters",
      image: "/images/kahwa.jpeg",
    },
    {
      id: 7,
      name: "Cuppuchino",
      price: 36.0,
      description: "Coffee-bean-pacific-park",
      image: "/images/imagesC.jpeg",
    },
    {
      id: 8,
      name: "Coldd Ice Coffee",
      price: 43.01,
      description: "Kahwa Coffee Roasters",
      image: "/images/coffeebrandpack.jpg",
    },
    {
      id: 9,
      name: "Cuppuchino",
      price: 36.0,
      description: "Coffee-bean-pacific-park",
      image: "/images/thbg.jpeg",
    },
  ];

  return (
    <div className="coffee grid grid-cols-1 md:grid-cols-3 gap-10 px-10 my-10">
      {coffeeData.map((coffee) => (
        <div
          key={coffee.id}
          className="coffee-card bg-white p-5 rounded-md shadow-md text-center"
        >
          <Image
            src={coffee.image}
            alt={coffee.name}
            width={400}
            height={300}
            className="w-full h-48 object-cover mb-4 rounded-md"
          />
          <h2 className="text-xl font-bold mb-2">{coffee.name}</h2>
          <p className="text-gray-700 mb-2">${coffee.price}</p>
          <p className="text-gray-500">{coffee.description}</p>
          <button className="my-4 px-4 py-2 bg-slate-600 text-white rounded-md">
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Coffee;
