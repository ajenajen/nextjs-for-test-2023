import { FormHelperText, Tooltip } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Theme, useTheme } from "@mui/material/styles";

const MenuProps = {
  disableScrollLock: true,
  PaperProps: {
    sx: {
      overflow: "auto",
      ".Mui-selected": {
        boxShadow: "none",
        borderRadius: 0,
      },
    },
  },
};

interface SelectProps {
  multiple?: boolean;
  width?: string;
  placeHolder?: string;
  disabled?: boolean;
  options?: { label: string; value: any }[];
  handleChange?: (event: SelectChangeEvent<any>, label?: string) => void;
  value?: any;
  name?: string;
  errorMessage?: string;
  ref?: any;
  id?: string;
  sx?: any;
}

export default function Index({
  multiple = false,
  width = "100%",
  placeHolder,
  disabled,
  options,
  handleChange,
  value,
  name,
  errorMessage,
  id,
  ref,
  sx,
}: SelectProps) {
  const theme = useTheme();

  return (
    <FormControl
      sx={{
        width: width,
        maxWidth: "100%",
      }}
    >
      <Select
        id={`select-${id}`}
        ref={ref}
        sx={{
          "&.Mui-disabled": {
            background: "var(--theme-bgGray) !important",
            zIndex: 1,
          },
          ...sx,
        }}
        multiple={multiple}
        disabled={disabled}
        displayEmpty={false}
        value={Boolean(options?.length) ? value : ""}
        defaultValue={Boolean(options?.length) ? value : ""}
        onChange={(e) => {
          if (handleChange) {
            handleChange(
              e,
              options?.find(({ value }) => value === e.target.value)?.label ||
                ""
            );
          }
        }}
        name={name}
        input={<OutlinedInput />}
        renderValue={(selected) => {
          if (selected?.length === 0)
            <div className="text-gray">{placeHolder}</div>;
          if (typeof selected === "object" && selected.length) {
            return selected.join(", ");
          }
          return options?.find(({ value }) => value === selected)?.label;
        }}
        MenuProps={MenuProps}
        inputProps={{ "aria-label": "Without label" }}
        placeholder={placeHolder}
      >
        {options?.map((item, index) => (
          <MenuItem key={item.label + index} value={item.value}>
            <Tooltip title={item.label}>
              <>{item.label}</>
            </Tooltip>
          </MenuItem>
        ))}
        {!options?.length && <MenuItem>No option</MenuItem>}
      </Select>
      {errorMessage && (
        <FormHelperText sx={{ color: "#d32f2f" }}>
          {errorMessage}
        </FormHelperText>
      )}
    </FormControl>
  );
}
