import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const Index = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div className="mt-5 text-center">
      <h1 className="mb-5">Welcome to WishListWeb</h1>
      <button onClick={() => loginWithRedirect()}>Login</button>
    </div>
  );
};
