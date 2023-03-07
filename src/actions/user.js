export const sampleBasicFunction = (requestBody) => ({
  data: requestBody,
  type: "SET_USER",
});

// const { method, type, params, requestBody, query, apiRoute } = action;
export const createUser = (requestBody) => ({
  data: requestBody,
  type: "CREATE_USER",
  method: "put",
  apiRoute: "/users/createUser",
  CALL_USER_API: true,
});

export const loginUser = (requestBody) => ({
  data: requestBody,
  type: "LOGIN_USER",
  method: "post",
  apiRoute: "/users/login",
  CALL_USER_API: true,
});

export const updateUser = (requestBody) => ({
  data: requestBody,
  type: "UPDATE_USERNAME",
  method: "put",
  apiRoute: "/users/update",
  CALL_USER_API: true,
});

export const getUserProjects = () => ({
  type: "GET_USER_PROJECTS",
  method: "get",
  apiRoute: "/users/projects",
  CALL_USER_API: true,
});

export const deleteUserProject = (params) => ({
  type: "DELETE_USER_PROJECTS",
  method: "delete",
  apiRoute: "/users/projects/:projectId",
  CALL_USER_API: true,
  params: params,
});

// Todos: DELETE only owners' Proj,

export const deleteUserProjects = () => ({
  // type: "GET_USER_PROJECTS",
  // method: "get",
  // apiRoute: "/users/projects",
  // CALL_USER_API: true,
});

//Todo: Update ownly own's project Description
