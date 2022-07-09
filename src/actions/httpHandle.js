import axios from "axios";
import { API, config } from "../config";
import { toast } from "react-toastify";
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
export const removeCard = async (type, id) => {
  try {
    const res = await axios.delete(API.getAPI(type), {
      params: { id: id },
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("useToken"),
      },
    });
    toast.success(res.data.message, {
      pauseOnHover: false,
      delay: 0,
      position: toast.POSITION.TOP_RIGHT,
    });
    window.location.reload(false);
  } catch (error) {
    alert(error.response.data.message);
  }
};
