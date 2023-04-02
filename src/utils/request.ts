import axios, { AxiosRequestConfig } from "axios";
import { postPayload } from "@/interface/request";
export const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL as string,
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
  },
});

const Request = (req: any, err?: boolean) => {
  return {
    data: !err ? req.data : { msg: "Check your Internet Connection" },
    status: !err ? req.status : 0,
    statusText: !err ? req.statusText : "ERR NETWORK",
  };
};
/**
 * ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 * ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 * ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 * ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 * ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 * ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 */
export const GetRequest = async (url: string, config?: AxiosRequestConfig) => {
  try {
    const req = await instance.get(url, config);
    return Request(req, false);
  } catch (err:any) {
    const isErr = err.code === "ERR_NETWORK";
    return Request(err.response, isErr);
  }
};

export const PostRequest = async (
  url: string,
  payload: postPayload,
  config?: AxiosRequestConfig
) => {
  try {
    const req = await instance.post(url, payload, config);
    return Request(req, false);
  } catch (err:any) {
    const isErr = err.code === "ERR_NETWORK";
    return Request(err.response, isErr);
  }
};

export const DelRequest = async (url: string, config?: AxiosRequestConfig) => {
  try {
    const req = await instance.delete(url, config);
    return Request(req, false);
  } catch (err:any) {
    const isErr = err.code === "ERR_NETWORK";
    return Request(err.response, isErr);
  }
};

export const PutRequest = async (
  url: string,
  payload: postPayload,
  config?: AxiosRequestConfig
) => {
  try {
    const req = await instance.put(url, payload, config);
    return Request(req, false);
  } catch (err :any) {
    const isErr = err.code === "ERR_NETWORK";
    return Request(err.response, isErr);
  }
};
