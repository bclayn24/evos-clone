import React from "react";

export default function NotFound() {
  document.title = "404: This page could not be found";

  return (
    <React.Fragment>
      <div className="container">
        <div className="flex justify-center h-[100vh] items-center">
          <h1 className="border-r-2 border-r-black  border-opacity-[0.3] pr-4 mr-4 font-medium text-2xl">404</h1>
          <p className="text-base">This page could not be found.</p>
        </div>
      </div>
    </React.Fragment>
  );
}
