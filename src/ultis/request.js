import axios from "axios";

const request = axios.create({
  baseURL: "https://turborvip-book-store.herokuapp.com/",
});

export const get = async (pathApi, options = {}) => {
  const response = await request.get(pathApi, options);
  return response.data;
};

export default request;
