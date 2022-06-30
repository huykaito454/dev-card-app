import React from "react";
import DevCardList from "../DevCard/DevCardList"

const YourCard = () => {
    return (
        <div>
            <div className="head-card flex justify-between mb-12">
                <div className="your-option flex border-2 border-pink-500 cursor-pointer">
                    <div className="your-card flex items-center justify-center bg-primary w-36 h-8 text-lg font-bold">
                        Card
                    </div>
                    <div className="your-template flex items-center justify-center  w-32 h-8 text-lg font-bold cursor-pointer">
                        Template
                    </div>
                </div>
                <div className="add flex items-center justify-center bg-primary w-36 h-8 text-lg font-bold cursor-pointer">
                    Add
                </div>
            </div>
            <div className="card-list">
                <DevCardList />
            </div>
        </div>
    );
};

export default YourCard;