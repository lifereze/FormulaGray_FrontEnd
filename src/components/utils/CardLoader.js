import React from "react";

function CardLoader() {
  return Array(8)
    .fill(1)
    .map((i) => <Card />);
}

function Card() {
  return (
    <div className="p-2 border text-left mb-4 md:col-span-5 col-span-10 bg-white shadow-lg rounded-lg ">
      <div className=" flex items-center w-full justify-between space-x-10">
        <div className=" bg-gray-200 animate-pulse py-1.5 rounded-md px-2 w-1/2 font-semibold  flex-grow capitalize"></div>

        <div className=" w-1/2 bg-gray-200 animate-pulse rounded-md flex px-2 py-1.5 items-center space-x-2"></div>
      </div>

      <div className=" flex  justify-between space-x-10 items-center py-2">
        <div className=" w-1/2 bg-gray-200 animate-pulse py-6  rounded-md "></div>
        <div className=" w-1/2 bg-gray-200 animate-pulse py-6 rounded-md">
          <div className="flex space-x-1  items-center">
            <div className=""></div>
          </div>
        </div>
      </div>
      {/* <div className=" flex justify-between ">
        <div className="w-1/2">
          <div className=" text-sm text-gray-500">Tuition</div>
          <div className=""></div>
        </div>
        <div className=" w-1/2">
          <div className=" text-sm text-gray-500">Application Fees</div>
          <div className=""></div>
        </div>
      </div> */}
      <div className=" flex  justify-between space-x-3 items-center py-4 ">
        <div className=" flex  items-center w-3/4 bg-gray-200 animate-pulse py-4 px-3 space-x-2 "></div>
        <div className=" w-1/4 flex space-x-2 ">
          <div className=" p-4 rounded-full bg-gray-200 animate-pulse"></div>
          <div className=" p-4 rounded-full bg-gray-200 animate-pulse"></div>
          <div className=" p-4 rounded-full bg-gray-200 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}

export default CardLoader;
