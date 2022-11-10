import React, { useState, useEffect, useRef } from "react";
import MusicLoader from "../loaders/MusicLoader";
import { firebaseUploadDoc } from "../../data/api/upload";
import { getDownloadURL } from "firebase/storage";
function ImageUpload({ uploadImage, isImageLoading, imageUrl }) {
  const imageRef = useRef(null);

  const thumbnailUpload = () => {
    imageRef.current.click();
  };

  return (
    <div>
      {(imageUrl !== "" && (
        <div className="rounded py-4 text-center group">
          <div className="flex justify-start mb-2 text-sm text-gray-600 font-semibold">
            National Identification
          </div>
          {!isImageLoading && (
            <div className="flex flex-col justify-center ">
              <div className="w-32 h-32 cursor-pointer">
                <img
                  src={imageUrl}
                  onClick={thumbnailUpload}
                  className="w-32 h-32 object-cover"
                  alt={"File upload"}
                />
                <input
                  name="thumbnail"
                  type="file"
                  className="hidden"
                  ref={imageRef}
                  onChange={uploadImage}
                  accept="image/*"
                />
              </div>
            </div>
          )}
        </div>
      )) || (
        <div className="py-4">
          <div className="flex justify-start  text-sm text-gray-600 font-semibold">
            National Identification
          </div>
          {(isImageLoading && (
            <div className="flex flex-col justify-center items-center h-32">
              <div>
                <MusicLoader />
              </div>
            </div>
          )) || (
            <div className="flex w-full justify-center mt-8">
              <div className="flex justify-center w-10/12">
                <div className="p-8 border-2 border-dashed w-full flex justify-center">
                  <span
                    className="px-2 py-1 bg-transparent border-2 font-semibold border-bloow-gray rounded-full hover:underline cursor-pointer hover:bg-gray-100"
                    onClick={thumbnailUpload}
                  >
                    National Identification
                  </span>
                  <input
                    name="thumbnail"
                    type="file"
                    className="hidden"
                    ref={imageRef}
                    onChange={uploadImage}
                    accept="image/*"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default ImageUpload;
