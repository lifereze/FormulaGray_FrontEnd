import React from "react";
import MusicLoader from "./MusicLoader";
import Spinner from "../utils/BlueSpinner";
function PageLoader() {
  return (
    <div className=" w-full h-full flex items-center text-center justify-center">
      <div className=" bg-white p-20">
        <div className=" text-xl">This page is loading</div>
        <Spinner />
      </div>
    </div>
  );
}

export default PageLoader;
