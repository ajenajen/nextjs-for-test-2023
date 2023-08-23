import { NextPageContext } from "next";
import HomePage from "@/components/_pages/HomePage";

export async function getServerSideProps(ctx: NextPageContext) {
  return {
    props: {},
  };
}

export default HomePage;
