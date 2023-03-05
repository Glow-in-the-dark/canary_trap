import { react, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { SimpleFooter } from "../components/layout/simple-footer";

export function SignUp(props) {
  // const signUpDetails = props.signUp;
  const { dispatchCreateUser, currentUser2 } = props;
  const [usernameInput, setUsernameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  return (
    <>
      <img
        src="/img/background-2.jpg"
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 z-0 h-full w-full bg-black/50" />
      <div className="container mx-auto p-4">
        <Card className="absolute top-2/4 left-2/4 w-full max-w-[24rem] -translate-y-2/4 -translate-x-2/4">
          <CardHeader
            variant="gradient"
            color="blue"
            className="mb-4 grid h-28 place-items-center"
          >
            <Typography variant="h3" color="white">
              Sign Up
            </Typography>
            {/* `${JSON.stringify(currentUser2)}` */}
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <Input
              variant="standard"
              label="Username"
              size="lg"
              onChange={(e) => {
                setUsernameInput(e.target.value);
              }}
            />
            <Input
              variant="standard"
              type="email"
              label="Email"
              size="lg"
              onChange={(e) => {
                setEmailInput(e.target.value);
              }}
            />
            <Input
              variant="standard"
              type="password"
              label="Password"
              size="lg"
              onChange={(e) => {
                setPasswordInput(e.target.value);
              }}
            />
            <div className="-ml-2.5">
              <Checkbox label="I agree the Terms and Conditions" />
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              variant="gradient"
              fullWidth
              onClick={(e) => {
                dispatchCreateUser({
                  username: usernameInput,
                  email: emailInput,
                  password: passwordInput,
                });
              }}
            >
              Sign Up
            </Button>
            <Typography variant="small" className="mt-6 flex justify-center">
              Already have an account?
              <Link to="/sign-in">
                <Typography
                  as="span"
                  variant="small"
                  color="blue"
                  className="ml-1 font-bold"
                >
                  Sign in
                </Typography>
              </Link>
            </Typography>
          </CardFooter>
        </Card>
      </div>
      <div className="container absolute bottom-6 left-2/4 z-10 mx-auto -translate-x-2/4 text-white">
        <SimpleFooter />
      </div>
    </>
  );
}

export default SignUp;
