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
