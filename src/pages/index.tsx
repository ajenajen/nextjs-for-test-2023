import { NextPageContext } from "next";
import HomePage from "@/components/_pages/HomePage";
import * as UserService from "@/modules/api/services";

export async function getServerSideProps(ctx: NextPageContext) {
  const result = await UserService.getUsers({ page: 1, per_page: 8 });

  return {
    props: {
      data: result?.data || [],
      total: result?.total,
    },
  };
}

export default HomePage;
