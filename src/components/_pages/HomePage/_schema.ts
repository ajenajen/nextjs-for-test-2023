import * as Yup from "yup";

export const initialValues = {
  period: "transmission",
  status: "waiting",
  dateFrom: "",
  dateTo: "",
  pageSize: 10,
  pageIndex: 0,
};

export const validationSchema = Yup.object().shape({});
