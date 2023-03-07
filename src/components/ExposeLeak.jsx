import React, { useState } from "react";
import axios from "axios";

const ExposeLeak = (props) => {
  const [file, setFile] = useState(null);

  const uploadLeakedImage = async (e) => {
    e.preventDefault();
    const formData = new FormData(); // create an empty form data object
    formData.append("projectId", "640602f0ed19f9bafc99585f");
    formData.append("susLeakedImg", file);

    // pass the form data object to the server endpoint
    try {
      const response = await axios.post(
        `http://localhost:5002/uploadImg/expose`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MDU4OTZjNTU2NjIwYzM4MjY1Y2E2ZiIsImVtYWlsIjoiZ2xvd0BnbWFpbC5jb20iLCJ1c2VybmFtZSI6ImFzZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3ODExNTUzMCwiZXhwIjoxNjc4MTE5MTMwLCJqdGkiOiJhOGIzYjI2Ny0wZWJkLTQzNTYtOGFkZC0wM2Q1NTEyM2RlOWYifQ.vDfB03GbZFuOLbRJs1R95Lob15Z_jp7fXbJoncXoQEE`,
          },
        }
      );
      console.log(response);
    } catch (err) {
      console.error(err);
    }

    // unable to console log the form data directly. need to deconstruct to view as per below
    for (const pair of formData.entries()) {
      console.log(pair[0] + ": " + pair[1]);
    }
  };

  return (
    <>
      <div>Upload documents here to find out who leaked it.</div>
      <form className="" onSubmit={(e) => uploadLeakedImage(e)}>
        <label for="susLeakedImg"> Image</label>
        <input
          placeholder="Suspected Leaked Image"
          name="susLeakedImg"
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <br />
        <button className="mt-3 mx-14 inline-block px-6 py-2.5 bg-primary-600 text-black font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-primary-800 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg transition duration-150 ease-in-out">
          SUBMIT
        </button>
      </form>
    </>
  );
};

export default ExposeLeak;
