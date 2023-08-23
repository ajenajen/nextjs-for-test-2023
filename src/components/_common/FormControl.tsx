import { Box, Grid } from "@mui/material";
import { Children } from "@/types/index";

export default function FormControl({
  label,
  name,
  children,
  width,
}: {
  label: string;
  name: string;
  children: Children;
  width?: string[];
}) {
  return (
    <Grid container alignItems="center" mb={3} width={width}>
      <Grid item xs={12} pr={1}>
        <label htmlFor={name}>{label}</label>
      </Grid>
      <Grid item xs={12}>
        {children}
      </Grid>
    </Grid>
  );
}
