import React, { useEffect, useState } from "react";
import { getData } from "../../actions/httpHandle";
import DescriptionPage from "./Description";
import Information from "./Information";

const ProfilePage = () => {
  const [profile, setProfile] = useState([]);
  const handleGetData = async () => {
    const data = await getData("profile");
  };
  useEffect(() => {
    handleGetData();
  }, []);
  return (
    <div className="page-container mt-10 p-2 flex flex-col items-center">
      <DescriptionPage item={profile}></DescriptionPage>
      <Information item={profile}></Information>
    </div>
  );
};

export default ProfilePage;
