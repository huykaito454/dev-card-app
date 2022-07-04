export const config = {
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("userToken"),
  },
};
const endPoint = "http://localhost:8080";
export const API = {
  getAPI: (type) => `${endPoint}/${type}`,
};
