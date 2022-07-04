import axios from "axios";
import { API, config } from "../config";
export const getData = async (type) => {
  try {
    const res = await axios.get(API.getAPI(type), config);
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const getDataNoJWT = async (type) => {
  try {
    const res = await axios.get(API.getAPI(type));
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const postData = async (type, data) => {
  try {
    const res = await axios.post(API.getAPI(type), data, config);
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const putData = async (type, data) => {
  try {
    const res = await axios.put(API.getAPI(type), data, config);
    window.location.reload(false);
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const handleResendOTP = async (type, data) => {
  try {
    const res = await axios.post(API.getAPI(type), data);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const createCard = async (type, data, file) => {
  try {
    const res = await axios.post(API.getAPI(type), file, {
      params: { data: data, file: file },
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};
