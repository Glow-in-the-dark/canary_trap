import React, { useLayoutEffect } from "react";
import { Avatar, Typography, Button } from "@material-tailwind/react";
import { Footer } from "../components/layout";

export const AdminPage = (props) => {
  const {
    dispatchAdminGetAllProjects,
    dispatchAdminGetAllUsers,
    dispatchAdminDeleteProj,
    dispatchAdminDeleteUser,
    projects,
    allUsers,
  } = props;

  useLayoutEffect(() => {
    dispatchAdminGetAllProjects();
    dispatchAdminGetAllUsers();
  }, []);

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
                <Typography variant="h2" color="blue-gray" className="mb-2">
                  ADMIN
                </Typography>
              </div>
              <div className="flex flex-wrap justify-center">
                <div className="mb-10 flex w-full justify-center">
                  <Button
                    onClick={(e) => dispatchAdminGetAllProjects()}
                    className="bg-blue-400 mr-4"
                  >
                    Get all Projects
                  </Button>
                  <Button
                    onClick={(e) => dispatchAdminGetAllUsers()}
                    className="bg-blue-400 ml-4"
                  >
                    Get all Users
                  </Button>
                </div>
              </div>
              <div className="flex space-x-64">
                <div className="mb-10  border-t border-blue-gray-50 py-6 text-center">
                  {/* This Part displays the LIST of all Projects */}
                  {/* <div>{JSON.stringify(projects)}</div> */}
                  <div className="font-bold text-2xl mb-5 underline">
                    All Projects
                  </div>
                  {projects &&
                    projects.length &&
                    projects.map((eachProject) => {
                      return (
                        <>
                          <div className="pb-7 bg-gray-100 rounded-2xl">
                            <br />
                            <h2 className="ml-5">
                              <p className="font-bold">Project ID:</p>
                              {eachProject && eachProject._id}
                            </h2>
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
                            <button
                              className="mt-3 mx-14 inline-block px-6 py-2.5 bg-red-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-primary-800 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg transition duration-150 ease-in-out"
                              onClick={(e) => {
                                console.log("eachProject : ", eachProject);
                                console.log(
                                  "eachProject._id : ",
                                  eachProject._id
                                );
                                dispatchAdminDeleteProj({
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
                </div>
                <div className="mb-10  border-t border-blue-gray-50 py-6 text-center">
                  {/* This Part displays the LIST of all Users */}
                  <div className="font-bold text-2xl mb-5 underline">
                    All Users
                  </div>
                  {/* <div>{JSON.stringify(allUsers)}</div> */}
                  {allUsers &&
                    allUsers.map((eachUser) => {
                      return (
                        <>
                          <div className="pb-7 bg-gray-100 rounded-2xl">
                            <br />
                            <h2 className="ml-5">
                              <p className="font-bold">User ID:</p>
                              {eachUser && eachUser._id}
                            </h2>
                            <br />
                            <h2 className="ml-5">
                              <p className="font-bold">Username:</p>
                              {eachUser && eachUser.username}
                            </h2>
                            <br />
                            <div className="ml-5">
                              <p className="font-bold">User's email: </p>
                              {eachUser && eachUser.email}
                            </div>
                            <br />
                            {/* <div className="ml-5">
                              <p className="font-bold">isAdmin: </p>
                              {eachUser && eachUser.isAdmin}
                            </div>
                            <br /> */}
                            <button
                              className="mt-3 mx-14 inline-block px-6 py-2.5 bg-red-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-primary-800 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg transition duration-150 ease-in-out"
                              onClick={(e) => {
                                console.log("eachUser : ", eachUser);
                                console.log("eachUser._id : ", eachUser._id);
                                dispatchAdminDeleteUser({
                                  userId: eachUser._id,
                                });
                              }}
                            >
                              Delete User
                            </button>
                          </div>
                          <br />
                        </>
                      );
                    })}
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
};

export default AdminPage;
