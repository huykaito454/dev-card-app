import React from "react";

import CardTemplate from "./CardTemplate";
import FormGenerate from "./FormGenerate";

const CardGeneratePage = () => {
  return (
    <div className="w-full bg-gradients">
      <div className="card-generate flex items-start justify-center page-container">
        <CardTemplate></CardTemplate>
        <FormGenerate></FormGenerate>
      </div>
    </div>
  );
};

export default CardGeneratePage;
