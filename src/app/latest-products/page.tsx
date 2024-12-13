import React from "react";
import Image from "next/image";
const Latest = () => {
  return (
    <section className="content  grid grid-cols-1 md:grid-cols-3 gap-6 px-10 my-10">
      <div className="image bg-slate-200 bg-cover px-2px">
        <div className="relative w-full h-64 border-b-red-400 mb-4 object-cover rounded-md">
          <Image
            className="relative w-full h-64 border-b-red-400 mb-4 object-cover rounded-md"
            src="/images/coffeebrand.jpg"
            alt="tag"
            width={200}
            height={200}
          />
        </div>
        <p className="mt-4 text-xl font-semibold text-black ml-10 px-10">
          Pink Coffee
        </p>
        <div className="text-2xl bg-red-400 font border-l-4 font-bold px-20 ">
          <span className="mr-2 text-xl  text-red-800">Price:$32.00 </span>
        </div>
      </div>

      <div className="image bg-slate-200 bg-cover px-2px">
        <div className="relative w-full h-64 border-b-red-400 mb-4 object-cover rounded-md">
          <Image
            className="relative w-full h-64 border-b-red-400 mb-4 object-cover rounded-md"
            src="/images/cbrand.jpg"
            alt="tag"
            width={200}
            height={200}
          />
        </div>
        <p className="mt-4 text-xl font-semibold text-black ml-10 px-10">
          Tasters Coffee
        </p>
        <div className="text-2xl bg-red-400 font border-l-4 font-bold px-20 ">
          <span className="mr-2 text-xl  text-red-800">Price:$34.00 </span>
        </div>
      </div>

      <div className="image bg-slate-200 bg-cover px-2px">
        <div className="relative w-full h-64 border-b-red-400 mb-4 object-cover rounded-md">
          <Image
            className="relative w-full h-64 border-b-red-400 mb-4 object-cover rounded-md"
            src="/images/coffeebrand.jpg"
            alt="tag"
            width={200}
            height={200}
          />
        </div>
        <p className="mt-4 text-xl font-semibold text-black ml-10 px-10">
          Chocklate Coffee
        </p>
        <div className="text-2xl bg-red-400 font border-l-4 font-bold px-20 ">
          <span className="mr-2 text-xl  text-red-800">Price:$36.00 </span>
        </div>
      </div>
    </section>
  );
};

export default Latest;
