import dayjs from "dayjs";
import { apiResponse } from "./_data";

export function getData(props: any) {
  const { period, status, dateFrom, dateTo } = props;
  let filteredData = apiResponse.data;

  if (!!status) {
    filteredData = filteredData.filter((item) => item.status === status);
  }
  if (!!dateFrom) {
    filteredData = filteredData.filter(
      (item) => item.date >= dayjs(dateFrom).format("YYYY/MM/DD")
    );
  }
  if (!!dateTo) {
    filteredData = filteredData.filter(
      (item) => item.expireDate <= dayjs(dateTo).format("YYYY/MM/DD")
    );
  }

  return filteredData;
}
