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
