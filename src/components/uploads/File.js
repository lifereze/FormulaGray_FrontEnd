import React, { useState, useEffect, useRef } from "react";
import MusicLoader from "../loaders/MusicLoader";
import { AiFillFilePdf } from "react-icons/ai";
import { firebaseUploadImg, firebaseUploadDoc } from "../../data/api/upload";
import { getDownloadURL } from "firebase/storage";
function FileUpload({ setDocUrl, docUrl, title, name }) {
  const [docName, setDocName] = useState();
  const [isDocLoading, setDocLoading] = useState();
  const uploadDoc = (input) => {
    const files = input.target.files || [];
    setDocName(input.target.files[0].name);
    if (files.length === 0) {
      return false;
    }
    const reader = new FileReader();

    reader.readAsDataURL(files[0]);

    reader.onload = (e) => {
      setDocLoading(true);
      const uploadTask = firebaseUploadDoc(files[0]);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const prog = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
        },
        (err) => {},
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            setDocLoading(false);
            setDocUrl(url);
          });
        }
      );

      return true;
    };

    reader.onprogress = function (e) {
      //Loader
    };
  };
  const fileRef = useRef(null);

  const thumbnailUpload = () => {
    fileRef.current.click();
  };

  return (
    <div>
      {(docUrl !== "" && (
        <div className="rounded p-4 text-center group">
          <div className="flex justify-start mb-2 text-sm text-gray-600 font-semibold">
            {title}
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
            {title}
          </div>
          <div className="flex w-full justify-center ">
            <div className="flex justify-center w-10/12">
              <div className="p-8 border-2 border-dashed w-full flex justify-center">
                <span
                  className="px-2 py-1 bg-transparent border-2 font-semibold border-bloow-gray rounded-full hover:underline cursor-pointer hover:bg-gray-100"
                  onClick={!isDocLoading ? thumbnailUpload : () => {}}
                >
                  {title}
                </span>
                <input
                  name={name ? name : "thumbnail"}
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
