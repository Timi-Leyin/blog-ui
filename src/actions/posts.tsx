import { GetRequest } from "@/utils/request";

export const getAllPosts = async (value, setValue, callback) => {
  const res = await GetRequest("/posts");
  const { status, statusText, data } = res;
  if (status == 200) {
    callback(false);
    return setValue(data.data);
  }
  callback(true);
};
