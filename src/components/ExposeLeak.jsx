import React, { useState } from "react";
import axios from "axios";

const ExposeLeak = (props) => {
  const [file, setFile] = useState(null);

  const uploadLeakedImage = async (e) => {
    e.preventDefault();
    const formData = new FormData(); // create an empty form data object
    formData.append("susLeakedImg", file);

    // pass the form data object to the server endpoint
    try {
      const response = await axios.post(
        `http://localhost:${props.port}/uploadImg/expose`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            // Authorization: `Bearer ${ctx.ACCESS_TOKEN}`,
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
