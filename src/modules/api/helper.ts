import axios from "axios";
import { IAPIProps } from "@/types/api";

export function fetchAPI({
  url,
  token,
  timeout = 30000,
  ...options
}: IAPIProps) {
  return axios({
    baseURL: url,
    headers: {
      ...(token && { Authorization: `Bearer ${token}` }),
    },
    timeout,
    ...options,
  }).then((res) => res?.data);
}
