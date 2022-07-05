import React, { useEffect, useState } from "react";
import Moment from "moment";
import { putData } from "../../actions/httpHandle";
import logoImg from "../../assets/image/logo.png";
const DescriptionPage = ({ item, job }) => {
  const [image, setImage] = useState();
  const onSubmit = async (e) => {
    const data = item;
    const avatar = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      const base64String = reader.result
        .replace("data:", "")
        .replace(/^.+,/, "");
      const newData = { ...data, avatar: base64String };
      putData("update-profile", newData);
    };
    reader.readAsDataURL(avatar);
  };

  useEffect(() => {}, [item]);
  return (
    <div className="flex flex-col-reverse lg:flex-row items-start justify-between w-full">
      <div className="lg:w-[65%] w-full flex items-start justify-between pr-4">
        <textarea
          className="text-justify w-[98%] bg-black outline-none resize-none pr-4 overflow-hidden"
          rows={11}
        ></textarea>
        <i className="fas fa-pencil-alt text-2xl w-[3%] cursor-pointer"></i>
      </div>
      <div className="flex lg:items-start items-center lg:mb-0 mb-10 justify-between lg:pl-4 lg:w-[35%] w-full lg:border-l-2 ">
        <div className="flex flex-col lg:items-end items-start gap-y-4 w-[35%] ">
          {item.accountName ? (
            <p className="lg:text-3xl text-5xl font-semibold">
              @{item.accountName}
            </p>
          ) : (
            <p className="lg:text-3xl text-5xl font-semibold">@name</p>
          )}

          <div className="flex flex-col lg:items-end text-xl">
            {item.dateOfBirth ? (
              <p>{Moment(item?.dateOfBirth).format("YYYY/MM/DD")}</p>
            ) : (
              <p>YYYY/MM/DD</p>
            )}
            <p className=" font-semibold">{item?.Job?.name}</p>
          </div>
          <div className="flex flex-col lg:items-end gap-y-2">
            <span className="lg:text-xs text-lg">Linked account</span>
            <div className="socials flex items-center lg:justify-end">
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
        <label
          htmlFor="image-file"
          className="w-[60%] max-h-[290px] overflow-hidden rounded-xl cursor-pointer"
        >
          <img
            src={`data:image/png;base64, ${item?.avatar}`}
            alt=""
            className="w-full object-cover"
            onError={(e) => {
              e.target.src = logoImg;
              e.onError = null;
            }}
          />
          <input
            type="file"
            id="image-file"
            className="hidden"
            onChange={onSubmit}
          />
        </label>
      </div>
    </div>
  );
};

export default DescriptionPage;
