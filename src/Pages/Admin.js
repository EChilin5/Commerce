import React, { useState } from "react";
import { LoginComponent } from "../Components/AdminComponents/LoginComponent";
import { SignUpComponent } from "../Components/AdminComponents/SignUpComponent";
import "./Admin.css";

export const Admin = () => {
  const [displaySignUp, setDisplaySignUp] = useState(false);

  const updateSignUp = () => {
    console.log("hello click");
    setDisplaySignUp(true);
  };

  return (
    <div className="admin-main">
      {displaySignUp ? (
        <div>
          <SignUpComponent />
        </div>
      ) : (
        <div>
          <LoginComponent display={updateSignUp} />
        </div>
      )}
    </div>
  );
};
