import axios from "axios";
import { storage } from "../../firebase";
import { ref, uploadBytesResumable } from "@firebase/storage";

const api = axios.create({
  headers: {
    "Content-Type": "multipart/form-data",
  },
});
export const firebaseUploadImg = (file) => {
  const storageRef = ref(
    storage,
    `/files/images/${file.name}_${new Date().getTime()}`
  );
  const uploadTask = uploadBytesResumable(storageRef, file);

  return uploadTask;
};
export const firebaseUploadDoc = (file) => {
  const storageRef = ref(
    storage,
    `/files/docs/${file.name}_${new Date().getTime()}`
  );
  const uploadTask = uploadBytesResumable(storageRef, file);

  return uploadTask;
};
