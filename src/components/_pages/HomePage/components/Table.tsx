import { Box, Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useCallback } from "react";

import Table from "@/components/_common/Table";
import { headCells } from "../_data";

interface Props {
  tableData: any;
  formik: any;
}

export interface IApiResponse {
  accountId: string;
  operation: string;
  symbol: string;
  description: string;
  qty: string;
  filledQty: string;
  price: string;
  status: string;
  date: string;
  expireDate: string;
  noRef: string;
  extRef: string;
  action?: string;
}

const SectionTable = ({ tableData, formik }: Props) => {
  const router = useRouter();
  const { setFieldValue, values } = formik;

  const mapTableRows = useCallback(
    (data: IApiResponse[]) =>
      data?.map((row: IApiResponse, index: number) => {
        const {
          accountId,
          operation,
          symbol,
          description,
          qty,
          filledQty,
          price,
          status,
          date,
          expireDate,
          noRef,
          extRef,
        } = row;

        return {
          accountId,
          operation,
          symbol,
          description,
          qty,
          filledQty,
          price,
          status,
          date,
          expireDate,
          noRef,
          extRef,
          // action: (
          //   <Stack direction="row" spacing={2} justifyContent="flex-end">
          //     {isPendingWithdraw && <ButtonWithdraw onClick={() => null} />}
          //     <ButtonIcon
          //       onClick={() =>
          //         isTracking
          //           ? router.push(`/officer/appeal/tracking/${dataID}`)
          //           : router.push(`/officer/appeal/${dataID}`)
          //       }
          //     />
          //   </Stack>
          // ),
        };
      }),
    [router]
  );

  return (
    <Table
      headCells={headCells}
      rows={mapTableRows(tableData?.data)}
      handleChangeRowsPerPage={(e) => {
        setFieldValue("pageSize", e);
      }}
      handleChangePage={(e) => {
        setFieldValue("pageIndex", e);
      }}
      rowsPerPage={values.pageSize}
      page={tableData?.pageIndex}
      dataCount={tableData?.dataCount}
      totalCount={tableData?.totalCount}
    />
  );
};

export default SectionTable;
