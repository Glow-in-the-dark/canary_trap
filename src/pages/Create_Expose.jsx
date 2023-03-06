import React from "react";
import { Avatar, Typography, Button } from "@material-tailwind/react";
import { Footer } from "../components/layout";
import ExposeLeak from "../components/ExposeLeak";
import CreateTraps from "../components/CreateTraps";

export const Create_Expose = (props) => {
  const { usernameState, userObj } = props;

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
              <div className="flex flex-wrap justify-center">
                <div className="mb-10 flex w-full justify-center">
                  <Button className="bg-blue-400">
                    Update Personal Details
                  </Button>
                </div>
              </div>
              <div className="mb-10 border-t border-blue-gray-50 py-6 text-center">
                <CreateTraps port={props && props.port} />
              </div>
              <div className="mb-10 border-t border-blue-gray-50 py-6 text-center">
                <ExposeLeak port={props && props.port} />
              </div>
              <div className="mt-2 flex flex-wrap justify-center">
                <div className="flex w-full flex-col items-center px-4 lg:w-9/12">
                  <Typography className="mb-8 font-normal text-blue-gray-500">
                    An artist of considerable range, Jenna the name taken by
                    Melbourne-raised, Brooklyn-based Nick Murphy writes,
                    performs and records all of his own music, giving it a warm,
                    intimate feel with a solid groove structure. An artist of
                    considerable range.
                  </Typography>
                  <Button variant="text">Show more</Button>
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

export default Create_Expose;
