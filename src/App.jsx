import React, { useState } from "react";
import ExposeLeak from "./components/ExposeLeak";
import CreateTraps from "./components/CreateTraps";
//----
import { Routes, Route, Navigate } from "react-router-dom";

//----
import {
  HomeIcon,
  UserCircleIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/solid";
import Home from "./pages/home";
import Profile from "./pages/profile";
import Create_Expose from "./page_wrappers/Create_Expose";
import Admin from "./pages/adminPage";
import SignIn from "./page_wrappers/sign-in";
import SignUp from "./page_wrappers/sign-up";
// import { Navbar } from "./components/layout";
import NavBar from "./page_wrappers/navbar";

function App() {
  const port_no = 5002;

  return (
    // <div>
    //   <CreateTraps port={port_no} />
    //   <ExposeLeak port={port_no} />
    // </div>
    <>
      <div className="container absolute left-2/4 z-10 mx-auto -translate-x-2/4 p-4">
        <NavBar />
      </div>
      <Routes>
        {/* {routes.map(
          ({ path, element }, key) =>
            element && <Route key={key} exact path={path} element={element} />
        )} */}
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Home />} icon={HomeIcon} />
        <Route path="/profile" element={<Profile />} icon={UserCircleIcon} />
        <Route
          path="/Create_Expose"
          element={<Create_Expose port={port_no} />}
        />
        <Route path="/adminPage" element={<Admin />} />
        <Route
          path="/sign-in"
          element={<SignIn />}
          icon={ArrowRightOnRectangleIcon}
        />
        <Route path="/sign-up" element={<SignUp />} icon={UserPlusIcon} />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </>
  );
}

export default App;
