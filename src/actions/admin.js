export const getAllProjects = () => ({
  type: "GET_ALL_PROJECTS",
  method: "get",
  apiRoute: "/admin/getAllProjects",
  CALL_USER_API: true,
});

export const deleteProj = () => ({
  type: "DELETE_SPECIFIC_PROJECT",
  method: "get",
  apiRoute: "/admin/getAllProjects",
  CALL_USER_API: true,
});
