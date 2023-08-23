import { NextPage } from "next";
import _ from "lodash";
import { useCallback, useEffect, useState } from "react";
import { FormikValues, useFormik } from "formik";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import { Container, Typography, Box } from "@mui/material";
import MainLayout from "@/components/_layouts/main";
import SearchField from "./components/SearchField";
import Table, { IApiResponse } from "./components/Table";
import { initialValues } from "./_schema";
import { getData } from "./services";

interface IHomePage {}

const HomePage: NextPage<IHomePage> = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const pageSize = isMobile ? 4 : 8;

  const [tableData, setTableData] = useState<{ data: IApiResponse[] }>({
    data: [],
  });

  const onSubmit = async (values: FormikValues) => {
    getSearchData(values);
  };

  const handleResetSearch = () => {
    setValues(initialValues);
    getSearchData(initialValues);
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
  });
  const { values, setValues, setSubmitting } = formik;

  const getSearchData = useCallback(async (payload: FormikValues) => {
    try {
      const res = getData(payload);
      setTableData({ data: res });
    } catch (error: any) {
      if (error?.status !== 400) console.log(error);
      else throw error;
    } finally {
    }
    setSubmitting(false);
  }, []);

  useEffect(() => {
    getSearchData(values);
  }, [getSearchData]);

  return (
    <MainLayout>
      <Container sx={{ py: 5 }}>
        <Typography variant="h4" textAlign="left" mt={2} mb={1}>
          Search
        </Typography>
        <Typography mb={2} color={"#666"}>
          Search result: {tableData?.data?.length}
        </Typography>
        <SearchField handleResetSearch={handleResetSearch} formik={formik} />
        <Table tableData={tableData} formik={formik} />
      </Container>
    </MainLayout>
  );
};

export default HomePage;
