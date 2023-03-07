import { Avatar, Typography, Button } from "@material-tailwind/react";
import {
  MapPinIcon,
  BriefcaseIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/24/solid";
import { Footer } from "../components/layout";
import { useState, useEffect, useLayoutEffect } from "react";
import axios from "axios";

export function Profile(props) {
  const {
    usernameState,
    userObj,
    accessToken,
    dispatchUpdateUser,
    dispatchGetUserProjects,
    projects,
    dispatchDeleteUserProject,
  } = props;
  const [newUsername, setNewUsername] = useState("");
  const [file, setFile] = useState(null);

  useLayoutEffect(() => {
    console.log("first render!!");
    console.log("userObj : ", userObj);
    dispatchGetUserProjects();
  }, []);

  useEffect(() => {
    console.log("some props have changed !");
    console.log("userObj : ", userObj);
  }, [userObj]);

  // useEffect(() => {
  //   dispatchGetUserProjects();
  // }, []);

  const uploadLeakedImage = async (e, eachProject) => {
    e.preventDefault();
    console.log("eachProject: ", eachProject);
    const formData = new FormData(); // create an empty form data object
    formData.append("projectId", eachProject._id);
    formData.append("susLeakedImg", file);

    // pass the form data object to the server endpoint
    try {
      const accessToken = window.localStorage.getItem("accessToken");
      const response = await axios.post(
        `http://localhost:5002/uploadImg/expose`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      console.log("response : ", response);
      window.alert(JSON.stringify(response));
    } catch (err) {
      console.error(err);
      window.alert(err);
    }

    // unable to console log the form data directly. need to deconstruct to view as per below
    for (const pair of formData.entries()) {
      console.log(pair[0] + ": " + pair[1]);
    }
  };

  return (
    <>
      <section className="relative block h-[50vh]">
        <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/background-1.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
      </section>
      <section className="relative bg-blue-gray-50/50 py-16 px-4">
        <div className="container mx-auto">
          <div className="relative mb-6 -mt-64 flex w-full min-w-0 flex-col break-words rounded-3xl bg-white shadow-xl shadow-gray-500/5">
            <div className="px-6">
              <div className="flex flex-wrap justify-center">
                <div className="flex w-full justify-center px-4 lg:order-2 lg:w-3/12">
                  <div className="relative">
                    <div className="-mt-20 w-40">
                      <Avatar
                        src="/img/team-2.jpg"
                        alt="Profile picture"
                        variant="circular"
                        className="h-full w-full shadow-xl"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="my-8 text-center">
                <Typography
                  variant="h2"
                  color="blue-gray"
                  className="mb-2"
                  key={userObj && userObj.username}
                >
                  {userObj && userObj.username}
                </Typography>
                <input
                  className="border-2 border-lightgray-200 mx-auto mb-2 rounded-lg p-1"
                  placeholder="Your New Username"
                  value={newUsername}
                  onChange={(e) => setNewUsername(e.target.value)}
                />
                <Button
                  onClick={(e) => {
                    dispatchUpdateUser({ username: newUsername });
                  }}
                  variant="text"
                >
                  Update Username
                </Button>
              </div>
              {projects &&
                projects.length &&
                projects.map((eachProject) => {
                  return (
                    <>
                      <div className="pb-7 bg-gray-100 rounded-2xl">
                        <br />
                        <h2 className="ml-5">
                          <p className="font-bold">Project Title:</p>
                          {eachProject && eachProject.title}
                        </h2>
                        <br />
                        <div className="ml-5">
                          <p className="font-bold">Project Description: </p>
                          {eachProject && eachProject.description}
                        </div>
                        <br />
                        <div className="ml-5">
                          <p className="font-bold">Distributed to: </p>
                          {eachProject &&
                            eachProject.orig_img[0].namesArray.join(",")}
                        </div>
                        <br />
                        <div className="ml-5">
                          <p className="font-bold">
                            {" "}
                            Upload documents here to find out who leaked it:
                          </p>
                        </div>
                        <form
                          className="ml-5"
                          onSubmit={(e) => uploadLeakedImage(e, eachProject)}
                        >
                          <label for="susLeakedImg"> Image</label>
                          <input
                            placeholder="Suspected Leaked Image"
                            name="susLeakedImg"
                            type="file"
                            onChange={(e) => {
                              setFile(e.target.files[0]);
                            }}
                          />
                          {/* <input
                          placeholder="Suspected Leaked Image ID"
                          name="projectId"
                          type="hidden"
                          value={eachProject._id}
                        /> */}
                          <button className="mt-3 mx-14 inline-block px-6 py-2.5 bg-primary-600 text-black font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-primary-800 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg transition duration-150 ease-in-out">
                            SUBMIT IMAGE
                          </button>
                        </form>
                        <button
                          className="mt-3 mx-14 inline-block px-6 py-2.5 bg-red-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-primary-800 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg transition duration-150 ease-in-out"
                          onClick={(e) => {
                            console.log("eachProject : ", eachProject);
                            console.log("eachProject._id : ", eachProject._id);
                            dispatchDeleteUserProject({
                              projectId: eachProject._id,
                            });
                          }}
                        >
                          delete Project
                        </button>
                      </div>
                      <br />
                    </>
                  );
                })}

              <div className="mb-10 border-t border-blue-gray-50 py-6 text-center">
                <div className="mt-2 flex flex-wrap justify-center">
                  <div className="flex w-full flex-col items-center px-4 lg:w-9/12">
                    <Typography className="mb-8 font-normal text-blue-gray-500">
                      An artist of considerable range, Jenna the name taken by
                      Melbourne-raised, Brooklyn-based Nick Murphy writes,
                      performs and records all of his own music, giving it a
                      warm, intimate feel with a solid groove structure. An
                      artist of considerable range.
                    </Typography>
                    <Button variant="text">Show more</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-blue-gray-50/50">
        <Footer />
      </div>
    </>
  );
}

export default Profile;
