import * as request from "../ultis/request";

export const menu = async () => {
  try {
    const res = await request.get("menus");
    return res;
  } catch (error) {
    console.log(error);
  }
};
