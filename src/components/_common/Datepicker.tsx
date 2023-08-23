import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function Datepicker({
  label,
  name,
  handleChange,
}: {
  label?: string;
  name: string;
  handleChange: any;
}) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        format="DD/MM/YY"
        onChange={(date: any, context) => {
          if (context.validationError == null) {
            handleChange({
              target: {
                name,
                value: date.format("DD/MM/YY"),
              },
            });
          }
        }}
        label={label}
        sx={{ width: "100%" }}
      />
    </LocalizationProvider>
  );
}
