import React, { useEffect, useState } from "react";
import { getDataNoJWT, postData } from "../../actions/httpHandle";
import { useForm } from "react-hook-form";
const FormGenerate = () => {
  const { register, handleSubmit } = useForm();
  const [skillCount, setSkillCount] = useState(3);
  const [jobs, setJobs] = useState([]);
  const handleCreateCard = async (data) => {
    const res = await postData("", data);
  };
  const onSubmit = (values) => {
    console.log(values);
    const reader = new FileReader();
    reader.onload = () => {
      const base64String = reader.result
        .replace("data:", "")
        .replace(/^.+,/, "");
      const cardskills = handleCardSkill(values);
      const newData = {
        authorName: values.authorName,
        authorAge: values.authorAge,
        authorJobId: values.authorJobId,
        image: base64String,
        cardSkills: cardskills,
      };
      console.log(newData);
    };
    reader.readAsDataURL(values.file[0]);
  };
  const handleCardSkill = (data) => {
    let cardskills = [];
    if (data.skillName1) {
      cardskills.push({ name: data.skillName1, percentage: data.percentage1 });
    }
    if (data.skillName2) {
      cardskills.push({ name: data.skillName2, percentage: data.percentage2 });
    }
    if (data.skillName3) {
      cardskills.push({ name: data.skillName3, percentage: data.percentage3 });
    }
    if (data.skillName4) {
      cardskills.push({ name: data.skillName4, percentage: data.percentage4 });
    }
    return cardskills;
  };
  const handleGetJob = async () => {
    const data = await getDataNoJWT("get-all-jobs");
    setJobs(data.data.data);
  };
  useEffect(() => {
    handleGetJob();
  }, []);
  return (
    <div className="bg-[#6d1a6a] w-[50%] px-12 h-[100vh] ">
      <form
        className="w-full flex flex-col gap-y-10 mt-[50px] mb-10"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="w-full flex justify-end gap-x-2">
          <i className="fas fa-share-alt bg-white text-black py-2 px-[9px] rounded-md cursor-pointer button-active"></i>
          <button className="fas fa-download bg-white text-black p-2 rounded-md cursor-pointer button-active"></button>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              className=" bg-[#6d1a6a] outline-none border-b-2 border-slate-300 focus:border-white"
              {...register("authorName")}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="name">Age</label>
            <input
              type="text"
              id="name"
              className=" bg-[#6d1a6a] outline-none border-b-2 border-slate-300 focus:border-white"
              {...register("authorAge")}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="name">Job</label>
            <select
              {...register("authorJobId")}
              className="bg-[#6d1a6a] outline-none border-b-2 border-slate-300 focus:border-white"
            >
              <option className="bg-white text-black"></option>
              {jobs.length > 0 &&
                jobs.map((item) => (
                  <option
                    key={item.id}
                    value={item.id}
                    className="bg-white text-black"
                  >
                    {item.name}
                  </option>
                ))}
            </select>
          </div>
          <div className="flex flex-col gap-1 relative">
            <label htmlFor="">Avatar</label>
            <label htmlFor="file-input">
              <input
                type="file"
                className="input-file absolute "
                id="file-input"
                {...register("file")}
              />
              <div className="flex w-full items-center justify-end cursor-pointer">
                <span>Open</span>
                <i className="far fa-folder ml-1 text-xl"></i>
              </div>
              <div className="bg-[#6d1a6a] outline-none border-b-2 border-slate-300"></div>
            </label>
          </div>
          {new Array(4 - skillCount).fill(0).map((item, index) => (
            <div key={index} className="flex flex-col gap-7 relative">
              <input
                type="text"
                defaultValue={`Skill Name ${index + 1}`}
                className="bg-[#6d1a6a] outline-none"
                {...register(`skillName${index + 1}`)}
              />
              <i className="fas fa-pencil-alt cursor-pointer absolute top-0 right-0"></i>
              <input
                id="minmax-range"
                type="range"
                min="0"
                max="100"
                className="progress-bar w-full cursor-pointer"
                {...register(`percentage${index + 1}`)}
              ></input>
            </div>
          ))}
          {skillCount !== 0 && (
            <div className="flex gap-4 items-center justify-center">
              <i
                className="fas fa-plus bg-primary py-2 px-[10px] rounded-lg cursor-pointer button-active"
                onClick={() => {
                  if (skillCount > 0) {
                    setSkillCount(skillCount - 1);
                  } else return;
                }}
              ></i>
              <div className="">{skillCount} more left!</div>
            </div>
          )}

          {/* <div className="flex flex-col gap-1">
            <label htmlFor="name">Footer</label>
            <div className="w-full flex items-center justify-between relative">
              <input
                type="text"
                id="name"
                className=" bg-[#6d1a6a] outline-none border-b-2 border-slate-300 focus:border-white w-[90%] pl-5"
                {...register("url")}
              />
              <select className="w-[10%] text-black">
                <option></option>
              </select>
              <i className="fas fa-globe absolute top-0 left-0"></i>
            </div>
          </div>
          <div className="flex gap-4 items-center justify-center">
            <i className="fas fa-plus bg-[#6d1a6a] border border-white py-2 px-[10px] rounded-lg cursor-pointer button-active"></i>
            <div className="">3 more left!</div>
          </div> */}
        </div>
      </form>
    </div>
  );
};

export default FormGenerate;
