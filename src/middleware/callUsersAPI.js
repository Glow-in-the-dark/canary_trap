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
  let { method, type, params, data, query, apiRoute } = customActionJsonObject;
  console.log("This is 'data'", data);
  // TODO add headers from store

  // ADV
  //   types[PENDING_STATE_XXX, FAILED_STATE_XXX, SUCCESS_STATE_XX]
  // next({
  //     type: customActionJsonObject.type,
  //     data: callResponse && callResponse.data, // this is action.data in reducer
  //   });
  const accessToken = window.localStorage.getItem("accessToken");

  let headers = { "Content-Type": "application/json" };

  if (accessToken) headers["Authorization"] = `Bearer ${accessToken}`;

  // This part is to check for DELETE, because for delete, we pass params and delete from there.
  if (params && Object.keys(params).length) {
    // object.key list the keys into an array
    // e.g. apiRoute /users/projects/:projectId
    // make api route string to array
    let tempApiRouteArr = apiRoute.split("/");
    // [users,projects,:projectId]
    // loop through apiRouteArr
    tempApiRouteArr = tempApiRouteArr.map((eachParam) => {
      // check for colon signal
      if (eachParam[0] === ":") {
        // :projectId
        let targetParam = eachParam.slice(1);
        // projectId
        // find the correct key in "params" object and return the value
        // {projectId: "abc123456asdasdadsasdasd"}
        return params[targetParam];
      }
      // ELSE return the same string
      return eachParam;
    });
    // so after returns, it becomes
    // tempApiRouteArr = [users,projects,abc123456asdasdadsasdasd]

    apiRoute = tempApiRouteArr.join("/");
    // [users/projects/abc123456asdasdadsasdasd]
  }

  const callResponse = await axios({
    method,
    baseURL: host,
    url: apiRoute,
    headers: headers, // you need to configure your authorization header
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
