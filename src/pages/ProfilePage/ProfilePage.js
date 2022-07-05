import React, { useEffect, useState } from "react";
import { getData, getDataNoJWT } from "../../actions/httpHandle";
import DescriptionPage from "./Description";
import Information from "./Information";

const ProfilePage = () => {
  const [profile, setProfile] = useState([]);
  const [jobs, setJobs] = useState([]);
  const handleGetData = async () => {
    const data = await getData("get-profile");
    setProfile(data.data.data);
    console.log(data.data.data);
  };
  const handleGetJob = async () => {
    const data = await getDataNoJWT("get-all-jobs");
    setJobs(data.data.data);
  };
  useEffect(() => {
    handleGetData();
    handleGetJob();
  }, []);
  return (
    <div className="page-container mt-10 p-2 flex flex-col items-center">
      <DescriptionPage item={profile} job={jobs}></DescriptionPage>
      <Information item={profile} job={jobs}></Information>
    </div>
  );
};

export default ProfilePage;
