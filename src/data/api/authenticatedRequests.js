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
export const createUser = async (data) => {
  return await api
    .post("/admin/createUser", data)
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
export const TopPrograms = async () => {
  return await api
    .get("/programme/topProgrammes")
    .then((response) => response)
    .catch((error) => {
      return error.response;
    });
};
export const TopSchools = async () => {
  return await api
    .get("/school/topSchools")
    .then((response) => response)
    .catch((error) => {
      return error.response;
    });
};
export const createApplication = async (data) => {
  return await api
    .post("/application/recruitmentPartner/create", data)
    .then((response) => response)
    .catch((error) => {
      return error.response;
    });
};
export const adminCreateApplication = async (data) => {
  return await api
    .post("/admin/application/create", data)
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
export const searchStudents = async (data) => {
  return await api
    .post("/student/search", data)
    .then((response) => response)
    .catch((error) => {
      return error.response;
    });
};
export const searchSchools = async (data) => {
  return await api
    .post("/school/search", data)
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
export const getAllPrograms = async (page) => {
  console.log(page);
  return await api
    .get(`/programme/programmes?pageNum=${page}&pageSize=10`)
    .then((response) => response)
    .catch((error) => {
      return error.response;
    });
};
export const searchPrograms = async (data) => {
  return await api
    .post("/programme/search", data)
    .then((response) => response)
    .catch((error) => {
      return error.response;
    });
};
export const getAllApplications = async (data) => {
  return await api
    .post("/application/rectruitmentPartner/applications", data)
    .then((response) => response)
    .catch((error) => {
      return error.response;
    });
};
export const counsellorGetAllApplications = async (data) => {
  return await api
    .post("/counselor/applications", data)
    .then((response) => response)
    .catch((error) => {
      return error.response;
    });
};
export const counsellorGetPartnersApplications = async (partnerId, data) => {
  return await api
    .post(`/counselor/applications/${partnerId}`, data)
    .then((response) => response)
    .catch((error) => {
      return error.response;
    });
};
export const counsellorGetAllPartnersApplications = async (partnerId) => {
  return await api
    .post(`/counselor/applications/${partnerId}`)
    .then((response) => response)
    .catch((error) => {
      return error.response;
    });
};
export const counsellorGetAllRecruitmentPartners = async () => {
  return await api
    .get("/counselor/recruitmentPartners")
    .then((response) => response)
    .catch((error) => {
      return error.response;
    });
};
export const counsellorGetAllStudents = async () => {
  return await api
    .get("/counselor/students")
    .then((response) => response)
    .catch((error) => {
      return error.response;
    });
};
export const counsellorGetPartnerStudents = async (partnerId) => {
  return await api
    .get(`/counselor/students/${partnerId}`)
    .then((response) => response)
    .catch((error) => {
      return error.response;
    });
};

export const adminGetAllApplications = async (data) => {
  return await api
    .post("/admin/get/applications", data)
    .then((response) => response)
    .catch((error) => {
      return error.response;
    });
};
export const getSpecificProgram = async (id) => {
  return await api
    .get(`/programme/get/${id}`)
    .then((response) => response)
    .catch((error) => {
      return error.response;
    });
};
export const editProgram = async (data, id) => {
  return await api
    .patch(`/programme/edit/${id}`, data)
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
export const deleteProgram = async (id) => {
  return await api
    .delete(`/programme/delete/${id}`)
    .then((response) => response)
    .catch((error) => {
      return error.response;
    });
};
export const deleteSchool = async (id) => {
  return await api
    .delete(`/school/delete/${id}`)
    .then((response) => response)
    .catch((error) => {
      return error.response;
    });
};
export const adminDeleteStudent = async (id) => {
  return await api
    .delete(`/admin/delete/user/${id}`)
    .then((response) => response)
    .catch((error) => {
      return error.response;
    });
};
export const adminDeleteApplication = async (id) => {
  return await api
    .delete(`admin/delete/application/${id}`)
    .then((response) => response)
    .catch((error) => {
      return error.response;
    });
};
export const partnerDeleteApplication = async (id) => {
  return await api
    .delete(`application/recruitmentPartner/delete/${id}`)
    .then((response) => response)
    .catch((error) => {
      return error.response;
    });
};
export const counsellorDeleteApplication = async (id) => {
  return await api
    .delete(`/counselor/application/${id}`)
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
export const adminGetSpecificStudent = async (id) => {
  return await api
    .post(`/admin/get/user/${id}`, { role: "student" })
    .then((response) => response)
    .catch((error) => {
      return error.response;
    });
};
export const adminEditSpecificStudent = async (id, data) => {
  return await api
    .patch(`/admin/edit/student/${id}`, data)
    .then((response) => response)
    .catch((error) => {
      return error.response;
    });
};
export const adminEditSpecificSchool = async (id, data) => {
  return await api
    .patch(`/admin/edit/school/${id}`, data)
    .then((response) => response)
    .catch((error) => {
      return error.response;
    });
};
export const filterPrograms = async (data) => {
  return await api
    .post("/programme/filter", data)
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
export const counsellorUpdateApplication = async (id, data) => {
  return await api
    .patch(`/counselor/application/${id}`, data)
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
export const forgotPassword = async (data) => {
  return await api
    .patch(`/auth/forgotPassword`, data)
    .then((response) => response)
    .catch((error) => {
      return error.response;
    });
};
export const resetPassword = async (data) => {
  return await api
    .patch(`/auth/resetPassword`, data)
    .then((response) => response)
    .catch((error) => {
      return error.response;
    });
};
export const sendCanadianEmail = async (data) => {
  return await api
    .post(`/email/send-canadian-email`, data)
    .then((response) => response)
    .catch((error) => {
      return error.response;
    });
};
