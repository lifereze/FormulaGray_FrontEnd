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
export const logout = async () => {
  return await api
    .post("/auth/logout")
    .then((response) => response)
    .catch((error) => {
      return error.response;
    });
};
export const uploadSchool = async (data) => {
  console.log(data);
  return await api
    .post("/school/create", data)
    .then((response) => response)
    .catch((error) => {
      return error.response;
    });
};
export const uploadProgram = async (data) => {
  return await api
    .post("/programme/create", data)
    .then((response) => response)
    .catch((error) => {
      return error.response;
    });
};
export const createApplication = async (data) => {
  return await api
    .post("/application/create", data)
    .then((response) => response)
    .catch((error) => {
      return error.response;
    });
};
export const studentCreateApplication = async (data) => {
  return await api
    .post("/application/student/create", data)
    .then((response) => response)
    .catch((error) => {
      return error.response;
    });
};
export const getAllSchools = async () => {
  return await api
    .get("/school/schools")
    .then((response) => response)
    .catch((error) => {
      return error.response;
    });
};
export const getAllPrograms = async () => {
  return await api
    .get("/programme/programmes")
    .then((response) => response)
    .catch((error) => {
      return error.response;
    });
};
export const getAllApplications = async () => {
  return await api
    .post("/application/rectruitmentPartner/applications")
    .then((response) => response)
    .catch((error) => {
      return error.response;
    });
};
export const adminGetAllApplications = async (data) => {
  return await api
    .get("/admin/get/applications", data)
    .then((response) => response)
    .catch((error) => {
      return error.response;
    });
};
export const getSpecificProgram = async (id) => {
  return await api
    .get(`/programme/${id}`)
    .then((response) => response)
    .catch((error) => {
      return error.response;
    });
};
export const getSpecificSchool = async (id) => {
  return await api
    .get(`/school/get/${id}`)
    .then((response) => response)
    .catch((error) => {
      return error.response;
    });
};
export const getSchoolPrograms = async (id) => {
  return await api
    .get(`/programme/schoolProgrammes/${id}`)
    .then((response) => response)
    .catch((error) => {
      return error.response;
    });
};
export const deleteStudent = async (id) => {
  return await api
    .delete(`/student/delete/${id}`)
    .then((response) => response)
    .catch((error) => {
      return error.response;
    });
};
export const deleteStudentApplication = async (id) => {
  return await api
    .delete(`/application/student/delete/${id}`)
    .then((response) => response)
    .catch((error) => {
      return error.response;
    });
};
export const deleteUser = async (id) => {
  return await api
    .delete(`/admin/delete/user/${id}`)
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
export const getStudentApplications = async (data) => {
  return await api
    .post("/application/student/applications", data)
    .then((response) => response)
    .catch((error) => {
      return error.response;
    });
};
export const getAllRecruitmentPartners = async (data) => {
  return await api
    .post("/admin/get/users", data)
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
export const updateStudent = async (data, id) => {
  return await api
    .patch(`/student/edit/${id}`, data)
    .then((response) => response)
    .catch((error) => {
      return error.response;
    });
};
export const updateApplication = async (id, data) => {
  return await api
    .patch(`/admin/edit/application/${id}`, data)
    .then((response) => response)
    .catch((error) => {
      return error.response;
    });
};
export const updateUser = async (id, data) => {
  return await api
    .patch(`/admin/edit/user/${id}`, data)
    .then((response) => response)
    .catch((error) => {
      return error.response;
    });
};
