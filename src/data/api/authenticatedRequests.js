import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": process.env.REACT_APP_BASE_URL,
  },
  withCredentials: true,
});

export const refreshSession = async () => {
  return await api
    .get("/auth/refreshSession")
    .then((response) => response)
    .catch((error) => {
      return error.response;
    });
};
export const editUser = async (data) => {
  return await api
    .patch("/user/edit", data)
    .then((response) => response)
    .catch((error) => {
      return error.response;
    });
};
export const updateBusinessDetails = async (data) => {
  return await api
    .patch("/recruitmentPartner/business/update", data)
    .then((response) => response)
    .catch((error) => {
      return error.response;
    });
};
export const updateRecruitmentDetails = async (data) => {
  return await api
    .patch("/recruitmentPartner/update", data)
    .then((response) => response)
    .catch((error) => {
      return error.response;
    });
};
export const uploadStudent = async (data) => {
  return await api
    .post("/student/create", data)
    .then((response) => response)
    .catch((error) => {
      return error.response;
    });
};
export const getAllStudents = async () => {
  return await api
    .get("/student/students")
    .then((response) => response)
    .catch((error) => {
      return error.response;
    });
};
export const getStudent = async (id) => {
  return await api
    .get(`/student/get/${id}`)
    .then((response) => response)
    .catch((error) => {
      return error.response;
    });
};
export const updateStudent = async (id) => {
  return await api
    .patch(`/student/edit/${id}`)
    .then((response) => response)
    .catch((error) => {
      return error.response;
    });
};
