import React from "react";

import CardTemplate from "./CardTemplate";
import FormGenerate from "./FormGenerate";

const CardGeneratePage = () => {
  return (
    <div className="card-generate flex items-start justify-center page-container">
      <CardTemplate></CardTemplate>
      <FormGenerate></FormGenerate>
    </div>
  );
};

export default CardGeneratePage;
