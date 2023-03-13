import { styled, Box } from "@mui/material";

interface IPaginationProps {
  items: number;
  pageSize: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  items,
  pageSize,
  currentPage,
  onPageChange,
}: IPaginationProps) {
  const pagesCount = Math.ceil(items / pageSize);

  if (pagesCount === 1) return null;

  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);

  return (
    <PaginationList>
      {pages.map((page: number) => (
        <PaginationItem
          key={page}
          className={`${page === currentPage ? "active" : ""}`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </PaginationItem>
      ))}
    </PaginationList>
  );
}

const PaginationList = styled("div")(({ theme }) => ({
  display: "flex",
  margin: "15px auto",
  alignItems: "center",
  justifyContent: "center",
}));

const PaginationItem = styled("a")(({ theme }) => ({
  display: "block",
  textAlign: "center",
  background: "transparent",
  borderRadius: 30,
  width: 32,
  height: 32,
  lineHeight: 1.72,
  margin: 3,
  color: "rgba(0, 0, 0, 0.23)",
  border: "1px solid rgba(0, 0, 0, 0.23)",
  "&.active, &:hover": {
    cursor: "pointer",
    color: "#1976d2",
    backgroundColor: "rgba(25, 118, 210, 0.12)",
  },
}));
