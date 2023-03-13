import { Box } from "@mui/system";

export default function Loading({ height = 300 }: { height: number }) {
  return (
    <Box
      sx={{
        height,
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        ".loading-el": {
          display: "inline-block",
          width: "80px",
          height: "80px",
          "&:after": {
            content: "' '",
            display: "block",
            width: "64px",
            height: "64px",
            margin: "8px",
            borderRadius: "50%",
            border: "6px solid #1976d2",
            borderColor: "#1976d2 transparent #1976d2 transparent",
            animation: "rounding 1.2s linear infinite",
          },
          "@keyframes rounding": {
            "0%": {
              transform: "rotate(0deg)",
            },
            "100%": {
              transform: "rotate(360deg)",
            },
          },
        },
      }}
    >
      <div className="loading-el"></div>
    </Box>
  );
}
