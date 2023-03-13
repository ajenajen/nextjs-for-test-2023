import { Select, InputLabel, FormControl } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { SelectChangeEvent } from "@mui/material/Select";
import { IDropdown } from "@/types/user";

interface IDropdownProps {
  current: IDropdown;
  options: IDropdown[];
  handleChange: (event: SelectChangeEvent) => void;
}

const Dropdown = ({ current, options, handleChange }: IDropdownProps) => {
  return (
    <FormControl fullWidth>
      <InputLabel id="dropdown-filter-label">Sort by</InputLabel>
      <Select
        labelId="dropdown-filter-label"
        id="dropdown-filter"
        inputProps={current}
        value={current?.name}
        label="Sort by"
        onChange={handleChange}
      >
        {options?.map(({ name, value }) => (
          <MenuItem key={value} value={value}>
            {name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default Dropdown;
