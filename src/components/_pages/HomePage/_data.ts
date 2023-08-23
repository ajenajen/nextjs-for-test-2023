export const periods = [
  { label: "Transmission", value: "transmission" },
  { label: "Transmission 2", value: "transmission2" },
];

export const statusOptions = [
  { label: "Pending", value: "pending" },
  { label: "Waiting", value: "waiting" },
  { label: "Done", value: "done" },
];

export const headCells = [
  {
    id: "accountId",
    label: "Account",
    align: "left",
  },
  {
    id: "operation",
    label: "Operation",
    align: "left",
  },
  {
    id: "symbol",
    label: "Symbol",
    align: "left",
  },
  {
    id: "description",
    label: "Description",
    align: "left",
  },
  {
    id: "qty",
    label: "QTY",
    align: "center",
  },
  {
    id: "filledQty",
    label: "Filled Qty",
    align: "center",
  },
  {
    id: "price",
    label: "Price",
    align: "center",
  },
  {
    id: "status",
    label: "Status",
    align: "left",
  },
  {
    id: "date",
    label: "Date",
    align: "left",
  },
  {
    id: "expireDate",
    label: "Expiration",
    align: "left",
  },
  {
    id: "noRef",
    label: "No. Ref.",
    align: "left",
  },
  {
    id: "extRef",
    label: "Ext. Ref.",
    align: "left",
  },
  {
    id: "action",
    label: "",
    align: "left",
  },
];

export const apiResponse = {
  data: [
    {
      accountId: "zz00225882663631",
      operation: "Buy",
      symbol: "NA",
      description: "NATIONAL BANK OF CDA",
      qty: "11",
      filledQty: "1",
      price: "135.00",
      status: "waiting",
      date: "2021/11/28",
      expireDate: "2021/05/21",
      noRef: "SBICCOD1",
      extRef: "10901014",
    },
    {
      accountId: "zb00225882663764",
      operation: "Buy",
      symbol: "NA",
      description: "NATIONAL BANK OF CDA",
      qty: "5",
      filledQty: "0",
      price: "451.0",
      status: "done",
      date: "2023/04/19",
      expireDate: "2023/06/21",
      noRef: "SBICCOD1",
      extRef: "10901014",
    },
    {
      accountId: "za00225882663640",
      operation: "Buy",
      symbol: "NA",
      description: "NATIONAL BANK OF CDA",
      qty: "90",
      filledQty: "0",
      price: "650.00",
      status: "waiting",
      date: "2023/02/15",
      expireDate: "2023/10/30",
      noRef: "SBICCOD1",
      extRef: "10901014",
    },
    {
      accountId: "zf00225882663637",
      operation: "Buy",
      symbol: "NA",
      description: "NATIONAL BANK OF CDA",
      qty: "1000",
      filledQty: "1",
      price: "12000.00",
      status: "waiting",
      date: "2023/05/01",
      expireDate: "2024/09/12",
      noRef: "SBICCOD1",
      extRef: "10901014",
    },
  ],
};
