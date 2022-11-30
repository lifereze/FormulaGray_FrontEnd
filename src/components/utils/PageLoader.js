import React from "react";

function PageLoader() {
  return (
    <div className=" flex h-full justify-center items-center">
      <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-white -py-1"></div>
    </div>
  );
}

export default PageLoader;
