import React from "react";

const DevCard = ({ height = 400, item }) => {
  return (
    <div
      className="dev-card bg-cover bg-no-repeat bg-center rounded-xl py-6 px-3 flex flex-col justify-between overflow-hidden"
      style={{
        backgroundImage: `url("data:image/png;base64, ${item.image}")`,
        height: `${height}px`,
      }}
    >
      <div className="name text-2xl font-bold text-ellipsis overflow-hidden">
        @{item.authorName}
      </div>
      <div className="card-content">
        <div className="information mb-3">
          <p className="text-4xl font-bold">{item.authorAge}</p>
          <p>{item?.Job?.name}</p>
        </div>
        <div className="skills flex flex-col gap-y-1 mb-3">
          {item?.CardSkills.length > 0 &&
            item.CardSkills?.map((item) => (
              <div className="skill-item ">
                <div className="skill-item-name text-xs mb-1">{item.name}</div>
                <div className="w-[55%] bg-gray-500 h-1 rounded-lg">
                  <div
                    className="bg-white h-1 rounded-lg"
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
        </div>
        <div className="socials flex items-center">
          <img
            src="https://img.icons8.com/fluency/35/000000/facebook-new.png"
            alt=""
          />
          <img
            src="https://img.icons8.com/fluency/35/000000/instagram-new.png"
            alt=""
          />
          <img
            src="https://img.icons8.com/fluency/35/000000/github.png"
            alt=""
          />
          <img
            src="https://img.icons8.com/fluency/35/000000/linkedin.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default DevCard;
