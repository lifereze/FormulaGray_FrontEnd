import React, { useState, useEffect, useRef } from "react";
import MusicLoader from "../loaders/MusicLoader";
import { AiFillFilePdf } from "react-icons/ai";
function FileUpload({ uploadDoc, isDocLoading, docName, docUrl }) {
  const fileRef = useRef(null);

  const thumbnailUpload = () => {
    fileRef.current.click();
  };

  return (
    <div>
      {(docUrl !== "" && (
        <div className="rounded p-4 text-center group">
          <div className="flex justify-start mb-2 text-sm text-gray-600 font-semibold">
            Business Certificate
          </div>
          {!isDocLoading && (
            <div className="flex space-x-2 items-center justify-center ">
              <div className="">
                <AiFillFilePdf className=" text-blue-500 text-xl" />
              </div>
              <div className="">{docName}</div>
            </div>
          )}
          {isDocLoading && (
            <div className="flex flex-col justify-center items-center h-32">
              <div>
                <MusicLoader />
              </div>
            </div>
          )}
        </div>
      )) || (
        <div className="mt-8">
          <div className="mb-4 text-left text-sm text-gray-600 font-semibold">
            Business Certificate
          </div>
          <div className="flex w-full justify-center ">
            <div className="flex justify-center w-10/12">
              <div className="p-8 border-2 border-dashed w-full flex justify-center">
                <span
                  className="px-2 py-1 bg-transparent border-2 font-semibold border-bloow-gray rounded-full hover:underline cursor-pointer hover:bg-gray-100"
                  onClick={thumbnailUpload}
                >
                  Business Certificate
                </span>
                <input
                  name="thumbnail"
                  type="file"
                  className="hidden"
                  ref={fileRef}
                  onChange={uploadDoc}
                  accept=".pdf,.doc"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FileUpload;
