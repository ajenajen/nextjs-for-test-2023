import { useState, useEffect, useCallback } from "react";
import { NextPage } from "next";
import { IUser, IDropdown } from "@/types/user";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import * as UserService from "@/modules/api/services";

import { Container, Grid, Box } from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import MainLayout from "@/components/_layouts/main";
import AppItem from "@/components/_common/AppItem";
import Dropdown from "@/components/_common/Dropdown";
import Pagination from "@/components/_common/Pagination";
import Loading from "@/components/_common/Loading";

interface IHomePage {
  data: IUser[];
  total: number;
}

const HomePage: NextPage<IHomePage> = ({ data, total }) => {
  const [firstmount, setFirstmount] = useState(true);
  const [loading, setLoading] = useState(false);
  const [display, setDisplay] = useState<IUser[]>(data);
  const [filterOptions, setFilterOptions] = useState<IDropdown[]>([]);
  const [filter, setFilter] = useState<IDropdown>({ name: "ID", value: "ID" });
  const [currentPage, setCurrentPage] = useState(1);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const pageSize = isMobile ? 4 : 8;

  const onPageChange = useCallback((page: number) => {
    setCurrentPage(page);
  }, []);

  const handleChangeSort = useCallback((e: SelectChangeEvent) => {
    console.log(e.target.value);
  }, []);

  useEffect(() => {
    const options = UserService.getFilterOptions(data?.[0]);
    setFilterOptions(options);
    setFilter(options[0]);

    setFirstmount(false);
  }, []);

  useEffect(() => {
    if (!firstmount) {
      setLoading(true);
      UserService.getUsers({ page: currentPage, per_page: pageSize })
        .then((res) => {
          setDisplay(res?.data);
        })
        .finally(() => setTimeout(() => setLoading(false), 1000));
    }
  }, [currentPage]);

  return (
    <MainLayout>
      <Container sx={{ py: 5 }}>
        <Box width={[1, 1 / 2, 1 / 4]} mb={3}>
          <Dropdown
            current={filter}
            options={filterOptions}
            handleChange={handleChangeSort}
          />
        </Box>
        <Grid container spacing={2} sx={{ minHeight: isMobile ? 500 : 900 }}>
          {loading && <Loading height={isMobile ? 500 : 900} />}
          {!loading &&
            Boolean(display.length) &&
            display?.map((item: IUser) => (
              <Grid item key={item?.id} xs={12} sm={6} md={3}>
                <AppItem data={item} />
              </Grid>
            ))}
        </Grid>
        <Pagination
          items={total}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={onPageChange}
        />
      </Container>
    </MainLayout>
  );
};

export default HomePage;
