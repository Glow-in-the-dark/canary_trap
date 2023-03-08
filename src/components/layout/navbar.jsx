import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  Navbar as MTNavbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import {
  HomeIcon,
  UserCircleIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/solid";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

// export function Navbar({ brandName, action }) {
export function Navbar(props) {
  const [openNav, setOpenNav] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { usernameState, userObj } = props;
  const isAdmin = userObj && userObj.isAdmin; // if userObj is undefined, it will just define isAdmin as undefined. will not move to call "userObj.isAdmin" which will cause an error.

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 980) {
        setIsMobile(false);
      } else {
        setIsMobile(true);
      }
    });
  }, []);

  console.log("string username:", usernameState);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 text-inherit lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Link to="/home" className="flex items-center gap-1 p-1 font-normal">
        {React.createElement(HomeIcon, {
          className: "w-[18px] h-[18px] opacity-75 mr-1",
        })}
        Home
      </Link>
      {usernameState && (
        <Link to="/profile" className="flex items-center gap-1 p-1 font-normal">
          {React.createElement(UserCircleIcon, {
            className: "w-[18px] h-[18px] opacity-75 mr-1",
          })}
          Profile
        </Link>
      )}
      {usernameState && (
        <Link
          to="/Create_Expose"
          className="flex items-center gap-1 p-1 font-normal"
        >
          Create
        </Link>
      )}
      <Link to="/adminPage" className="flex items-center gap-1 p-1 font-normal">
        Admin
      </Link>
      {!usernameState && (
        <Link to="/sign-in" className="flex items-center gap-1 p-1 font-normal">
          {React.createElement(UserCircleIcon, {
            className: "w-[18px] h-[18px] opacity-75 mr-1",
          })}
          Sign In
        </Link>
      )}
      {!usernameState && (
        <Link to="/sign-up" className="flex items-center gap-1 p-1 font-normal">
          {React.createElement(UserCircleIcon, {
            className: "w-[18px] h-[18px] opacity-75 mr-1",
          })}
          Sign Up
        </Link>
      )}
      {usernameState && (
        <Typography className="mr-4 ml-2 cursor-pointer py-1.5 font-bold">
          Hello! {usernameState}
        </Typography>
      )}
    </ul>
  );

  return (
    <MTNavbar color="transparent" className="p-3">
      <div className="container mx-auto flex items-center justify-between text-white">
        <Link to="/">
          <Typography className="mr-4 ml-2 cursor-pointer py-1.5 font-bold">
            {/* {brandName} */}
            Canary Trap
          </Typography>
        </Link>
        <div className="hidden lg:block">{navList}</div>
        {/* <div className="hidden gap-2 lg:flex">
          <a
            href="https://www.material-tailwind.com/blocks?ref=mtkr"
            target="_blank"
          >
            <Button variant="text" size="sm" color="white" fullWidth>
              pro version
            </Button>
          </a>
          {React.cloneElement(action, {
            className: "hidden lg:inline-block",
          })}
        </div> */}
        <IconButton
          variant="text"
          size="sm"
          color="white"
          className="ml-auto text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>

      {isMobile && (
        <MobileNav
          className="rounded-xl bg-white px-4 pt-2 pb-4 text-blue-gray-900"
          open={openNav}
        >
          <div className="container mx-auto">
            {navList}
            {/* <a
            href="https://www.material-tailwind.com/blocks/react?ref=mtkr"
            target="_blank"
            className="mb-2 block"
          >
            <Button variant="text" size="sm" fullWidth>
              pro version
            </Button>
          </a>
          {React.cloneElement(action, {
            className: "w-full block",
          })} */}
          </div>
        </MobileNav>
      )}
    </MTNavbar>
  );
}

// Navbar.defaultProps = {
//   brandName: "Canary Trap",
//   action: (
//     <a
//       href="https://www.creative-tim.com/product/material-tailwind-kit-react"
//       target="_blank"
//     >
//       <Button variant="gradient" size="sm" fullWidth>
//         free download
//       </Button>
//     </a>
//   ),
// };

// Navbar.propTypes = {
//   brandName: PropTypes.string,
//   action: PropTypes.node,
// };

// Navbar.displayName = "/src/widgets/layout/navbar.jsx";

export default Navbar;
