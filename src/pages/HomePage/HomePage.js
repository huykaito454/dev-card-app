import React from "react";
import DevCardList from "../../components/DevCard/DevCardList";
import CreateCard from "./CreateCard";

const HomePage = () => {
  return (
    <div className="main page-container mt-10 p-2 flex flex-col items-center ">
      <DevCardList></DevCardList>
      <CreateCard></CreateCard>
    </div>
  );
};

export default HomePage;
