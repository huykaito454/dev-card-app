import React from "react";
import Moment from "moment";
const DescriptionPage = ({ item, job }) => {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-start justify-between w-full">
      <div className="lg:w-[65%] w-full flex items-start justify-between pr-4">
        <textarea
          className="text-justify w-[98%] bg-black outline-none resize-none pr-4 overflow-hidden"
          rows={11}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
          laudantium, facilis, veniam molestiae inventore omnis voluptatum
          repellendus quo perferendis rerum hic tempore ullam saepe pariatur
          aperiam repellat optio tenetur veritatis?
        </textarea>
        <i className="fas fa-pencil-alt text-2xl w-[3%] cursor-pointer"></i>
      </div>
      <div className="flex lg:items-start items-center lg:mb-0 mb-10 justify-between lg:pl-4 lg:w-[35%] w-full lg:border-l-2 ">
        <div className="flex flex-col lg:items-end items-start gap-y-4 w-[35%] ">
          <p className="lg:text-4xl text-5xl font-semibold">
            @{item.accountName}
          </p>
          <div className="flex flex-col lg:items-end text-xl">
            <p>{Moment(item.dateOfBirth).format("YYYY/MM/DD")}</p>
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
        <div className="w-[60%] max-h-[290px] overflow-hidden rounded-xl">
          <img
            src="https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80"
            alt=""
            className="w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default DescriptionPage;
