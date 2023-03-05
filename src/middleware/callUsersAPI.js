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
  console.log(state);
  const { method, type, params, data, query, apiRoute } =
    customActionJsonObject;
  // TODO add headers from store

  const callResponse = await axios({
    method,
    baseURL: host,
    url: apiRoute,
    headers: {
      "Content-Type": "application/json",
    }, // you need to configure your authorization header
    data: data,
  });
  console.log("call user apiu 6: whats my response ? ");
  console.log(callResponse);
  next({
    type: customActionJsonObject.type,
    data: callResponse, // this is action.data in reducer
  });
};

export default callUserAPI;
