import { fetchAPI } from "@/modules/api/helper";
import { IAPIResponse } from "@/types/api";
import { IUser } from "@/types/user";

export function getUsers(props?: {
  [name: string]: string | number;
}): Promise<IAPIResponse<IUser[]>> {
  const url = `https://reqres.in/api/users`;

  return fetchAPI({ url, params: props })
    .then((response) => response)
    .catch((error: Error) => {
      console.error(error);
      return [];
    });
}

export function getFilterOptions(data: IUser) {
  return (
    !!data &&
    Object.keys(data)?.map((key) => ({
      name: key.toUpperCase().replace("_", " "),
      value: key,
    }))
  );
}
