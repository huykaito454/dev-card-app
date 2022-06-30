import React from "react";
import DescriptionPage from "./Description";
import Information from "./Information";

const ProfilePage = () => {
  return (
    <div className="page-container mt-10 p-2 flex flex-col items-center">
      <DescriptionPage></DescriptionPage>
      <Information></Information>
    </div>
  );
};

export default ProfilePage;
