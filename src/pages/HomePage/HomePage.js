import React from "react";
import DevCardList from "../../components/DevCard/DevCardList";
import CreateCard from "./CreateCard";
import YourCard from "../../components/UserSection/YourCard";
import Modal from "../../components/Modal/Modal";

const HomePage = () => {
  return (
    <div className="page-container mt-10 p-2 flex flex-col items-center">
      <DevCardList></DevCardList>
      <CreateCard></CreateCard>
      <YourCard></YourCard>
    </div>
  );
};

export default HomePage;
