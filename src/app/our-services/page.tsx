import React from "react";

const Coffee=()=>{
    const coffeeData=[
        {id: 1, name:"chock full o'Nuts", price: 8.48 ,description:'coffee beans', image:"/images/imageA.jpeg"},
        {id: 2, name:"Cuppuchino", price: 36.00 ,description:'coffee-bean-pacific-park', image:"/images/chocknut.jpeg"},
        {id: 3, name:"Kahwa Coffee", price: 43.01 ,description:'Kahwa Coffee Roasters', image:"/images/imageB.jpeg"},
        {id: 4, name:"But first cold coffee", price: 20.48 ,description:'Cold coffee beans', image:"/images/coffeebeans.jpg"},
        {id: 5, name:"Frapuccino Coffee", price: 63.00 ,description:'Freshest coffee ', image:"/images/imagesC.jpeg"},
        {id: 6, name:"Hot Coffee", price: 8.48 ,description:'Hot coffee', image:"/images/coffeecup.jpeg"},
        {id: 7, name:"Hot Cocoa Mix", price: 14.99 ,description:'Pure Organic Stevia Liquid', image:"/images/kahwa.jpeg"},
        {id: 8, name:"Coffee Creamer", price: 29.88 ,description:'Nestle Coffee mate Chocolate', image:"/images/th.jpg"},
        {id: 9, name:"Organic Cacao Powder", price: 14.00 ,description:'Powdered Drink Mixes & Flavorings', image:"/images/cream.jpeg"},
    ];

    return (
        <div className="coffee grid grid-cols-1 md:grid-cols-3 gap-10 px-10 my-10">
          {coffeeData.map((coffee) => (
            <div key={coffee.id} className="coffee-card bg-white p-5 rounded-md shadow-md text-center">
              <img src={coffee.image} alt={coffee.name} className="w-full h-48 object-cover mb-4 rounded-md"/>
              <h2 className="text-xl font-bold mb-2">{coffee.name}</h2>
              <p className="text-gray-700 mb-2">${coffee.price}</p>
              <p className="text-gray-500">{coffee.description}</p>
              <button className="my-4 px-4 py-2 bg-slate-600 text-white rounded-md">Add to Cart</button>
            </div>
          ))}
            
        </div>
      
      );
    };
    
    export default Coffee;
      


