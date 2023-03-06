import axios from "axios";

const host = "http://127.0.0.1:5002";

const callUserAPI = (store) => (next) => async (customActionJsonObject) => {
  const shouldICallUserApi = customActionJsonObject["CALL_USER_API"];

  //   IF NO NEED CALL API
  if (!shouldICallUserApi === true) {
    // go to the next middleware
    next(customActionJsonObject);
  }

  const state = store.getState();
  console.log("Store's State:", state);
  const { method, type, params, data, query, apiRoute } =
    customActionJsonObject;
  console.log("This is 'data'", data);
  // TODO add headers from store

  // ADV
  //   types[PENDING_STATE_XXX, FAILED_STATE_XXX, SUCCESS_STATE_XX]
  // next({
  //     type: customActionJsonObject.type,
  //     data: callResponse && callResponse.data, // this is action.data in reducer
  //   });

  const callResponse = await axios({
    method,
    baseURL: host,
    url: apiRoute,
    headers: {
      "Content-Type": "application/json",
    }, // you need to configure your authorization header
    data: data,
  });
  console.log("call user api: whats my response ? @ Middleware");
  console.log(callResponse); // This callResponse is the Response i get after submit the API
  console.log("entering next middleware OR entering store STATE");

  // ADV
  //   types[PENDING_STATE_XXX, FAILED_STATE_XXX, SUCCESS_STATE_XX]
  next({
    type: customActionJsonObject.type,
    data: callResponse && callResponse.data, // this is action.data in reducer
  });
};

export default callUserAPI;
