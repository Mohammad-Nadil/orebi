import React from "react";
import { useRouteError } from "react-router-dom";
import Container from "../layer/Container";
import CustomBtn from "../layer/CustomBtn";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div>
      <Container className="flex flex-col justify-between gap-y-10 max-h-dvh">
        <div className="main">
          <h1 className="text-9xl" >404</h1>
          <p className="text-secondary font-DM" >
            The page you were looking for couldn't be found. The page could be
            removed or you misspelled the word while searching for it. Maybe try
            a search?
          </p>
        </div>
        <div className="btn">
            <CustomBtn btnText="Back to Home" href="/" className="text-4xl text-nowrap w-auto py-3 md:py-5 px-2 md:px-5" />
        </div>
      </Container>
    </div>
  );
};

export default ErrorPage;
