"use client";
import React, { useEffect } from "react";

const Redirect = ({ redirectLink }: { redirectLink: string }) => {
  useEffect(() => {
    console.log(redirectLink);
    if (redirectLink && redirectLink.startsWith("http")) {
      window.location.replace(redirectLink);
    }
  }, [redirectLink]);

  return <div>Redirecting...</div>;
};

export default Redirect;