import { useCallback } from "react";
import { FormikValues } from "formik";
import FormGroup from "@/components/_common/FormGroup";
import FormControl from "@/components/_common/FormControl";
import Select from "@/components/_common/Select";
import Datepicker from "@/components/_common/Datepicker";
import { Grid, Button } from "@mui/material";

import { periods, statusOptions } from "../_data";

interface ISearchField {
  formik: FormikValues;
  handleResetSearch: () => void;
}
export default function SearchField({
  formik,
  handleResetSearch,
}: ISearchField) {
  const { values, errors, isSubmitting, setFieldValue, handleSubmit } = formik;

  const handleValueChange = useCallback(
    (event: any) => {
      const { value, name, id } = event?.target || {};
      setFieldValue(name, value);
    },
    [setFieldValue]
  );

  return (
    <Grid container>
      <FormGroup
        sx={{
          justifyContent: { xs: "center", md: "flex-end" },
          alignItems: "flex-end",
          gap: 2,
          ml: 0,
          px: 0,
        }}
      >
        <FormControl
          label="Period"
          name="period"
          width={["100%", "48.5%", "15%"]}
        >
          <Select
            options={periods}
            name="period"
            value={values.period}
            handleChange={handleValueChange}
          />
        </FormControl>
        <FormControl
          label="Status"
          name="status"
          width={["100%", "48.5%", "15%"]}
        >
          <Select
            options={statusOptions}
            name="status"
            value={values.status}
            handleChange={handleValueChange}
          />
        </FormControl>
        <FormControl
          label="From"
          name="dateFrom"
          width={["100%", "48.5%", "15%"]}
        >
          <Datepicker name="dateFrom" handleChange={handleValueChange} />
        </FormControl>
        <FormControl label="To" name="dateTo" width={["100%", "48.5%", "15%"]}>
          <Datepicker name="dateTo" handleChange={handleValueChange} />
        </FormControl>
        <FormControl label=" " name=" " width={["100%", "100%", "10%"]}>
          <Button
            variant="contained"
            sx={{
              display: "block",
              width: "100%",
              height: 55,
              mb: "2px",
            }}
            onClick={handleSubmit}
          >
            Search
          </Button>
        </FormControl>
      </FormGroup>
    </Grid>
  );
}
