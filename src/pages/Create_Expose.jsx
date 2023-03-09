import React from "react";
import { Avatar, Typography, Button } from "@material-tailwind/react";
import { Footer } from "../components/layout";
import ExposeLeak from "../components/ExposeLeak";
import CreateTraps from "../components/CreateTraps";

export const Create_Expose = (props) => {
  const { usernameState, userObj, accessToken } = props;

  console.log("this is userObj", userObj);

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
                  {usernameState}
                </Typography>
              </div>
              <div className="mb-10 border-t border-blue-gray-50 py-6 text-center">
                <CreateTraps
                  port={props && props.port}
                  accessToken={accessToken}
                  userObj={userObj}
                />
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

export default Create_Expose;
