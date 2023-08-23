import { Children } from "@/types/index";
import { SxProps } from "@mui/system";
import Grid from "@mui/material/Grid";

export default function FormGroup({
  children,
  alignItems = "center",
  sx,
}: {
  children: Children;
  alignItems?: string;
  sx?: SxProps;
}) {
  return (
    <Grid
      container
      spacing={4}
      rowSpacing={2}
      p={2}
      alignItems={alignItems}
      sx={sx}
    >
      {children}
    </Grid>
  );
}
