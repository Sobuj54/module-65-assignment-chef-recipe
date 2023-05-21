import React from "react";
import { useLoaderData } from "react-router-dom";

const Chef = () => {
  const chef = useLoaderData();

  return <div>this is chef component.</div>;
};

export default Chef;
