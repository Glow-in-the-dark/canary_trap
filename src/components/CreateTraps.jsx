import React, { useState } from "react";
import axios from "axios";

const CreateTraps = (props) => {
  const [file, setFile] = useState(null);
  const [upload, setUpload] = useState({
    title: "",
    qty: "",
    names: "",
    description: "",
  });

  //This part pulls the current "username" state of the logged-in user

  const handleChange = (e) => {
    setUpload({
      ...upload,
      [e.target.name]: e.target.value,
    });
    console.log(upload);
  };

  const uploadImage = async (e) => {
    e.preventDefault();
    const formData = new FormData(); // create an empty form data object

    // populate the form data object with input data (file always have to be the last)
    formData.append("title", upload.title);
    formData.append("qty", upload.qty);
    formData.append("names", upload.names);
    formData.append("description", upload.description);
    formData.append("originalImg", file);

    // pass the form data object to the server endpoint
    try {
      const response = await axios.post(
        `http://localhost:${props.port}/uploadImg/create`,
        // "http://httpbin.org/anything",
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

    setUpload({
      title: "",
      qty: "",
      names: "",
      description: "",
    });

    // setFile(null);
  };
  return (
    <div>
      <h2>Canary Trap</h2>
      <form className="" onSubmit={(e) => uploadImage(e)}>
        <label for="title">Title</label>
        <input
          className="border-2 border-lightgray-200 mb-2 rounded-lg p-1"
          placeholder="Document's Title"
          name="title"
          type="text"
          value={upload.title}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <br />
        <label for="qty">Quantity</label>
        <input
          className="border-2 border-lightgray-200 mx-auto mb-2 rounded-lg p-1"
          placeholder="Quantity for Distribution"
          name="qty"
          type="text"
          value={upload.qty}
          onChange={(e) => handleChange(e)}
        />
        <br />
        <div>
          Key in individual names for distributions. Ensure the number of name
          matches the number of Quantity above. (names are separated by commas.){" "}
        </div>
        <label for="names">Names</label>
        <input
          className="border-2 border-lightgray-200 mx-auto mb-2 rounded-lg p-1"
          placeholder="e.g: John,Peter,Mary "
          name="names"
          type="text"
          value={upload.names}
          onChange={(e) => handleChange(e)}
        />
        <br />
        <label for="originalImg">Image</label>
        <input
          placeholder="Original Image"
          name="originalImg"
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <br />
        <label for="description">Description</label>
        <input
          className="border-2 border-lightgray-200 mx-auto mb-2 rounded-lg p-1"
          placeholder="Description"
          name="description"
          type="text"
          value={upload.description}
          onChange={(e) => handleChange(e)}
        />
        <br />
        <button className="mt-3 mx-14 inline-block px-6 py-2.5 bg-primary-600 text-black font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-primary-800 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg transition duration-150 ease-in-out">
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default CreateTraps;
