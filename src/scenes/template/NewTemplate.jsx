import * as React from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
  useTheme,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import { tokens } from "../../theme";

const NewTemplate = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const { type } = useParams();

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box m="10px">
      <Header
        title={`New ${type} Template`}
        subtitle={`Create a New ${type} Template`}
      />
      <Box
        sx={{ width: "100%", display: "flex", alignItems: "center", gap: 1 }}
      >
        <TextField
          variant="outlined"
          label="Template Name"
          type="text"
          size="small"
          id="outlined-start-adornment"
          sx={{ width: "100%", bgcolor: colors.white[900] }}
        />
        <FormControl sx={{ width: "100%", bgcolor: colors.white[900] }}>
          <InputLabel size="small" htmlFor="outlined-adornment-amount">
            Subject
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            sx={{ pl: "0px" }}
            size="small"
            type="text"
            endAdornment={
              <InputAdornment position="start" sx={{}}>
                <Select
                  labelId="currency-select-label"
                  id="currency-select"
                  variant="outlined"
                  size="small"
                  sx={{
                    "& fieldset": {
                      borderTop: "none",
                      borderBottom: "none",
                      borderRight: "none",
                    },
                  }}
                  displayEmpty
                  value=""
                >
                  <MenuItem value="">{"{ }"}</MenuItem>
                  <MenuItem value="₹">₹</MenuItem>
                  <MenuItem value="$">$</MenuItem>
                </Select>
              </InputAdornment>
            }
            label="Subject"
          />
        </FormControl>
      </Box>
      <Box textAlign={"end"} width={"100%"} p={"10px 10px"}>
        <Button color="error">Cancel</Button>
        <Button variant="contained" color="success" sx={{ ml: 2 }}>
          Save
        </Button>
      </Box>
    </Box>
  );
};
export default NewTemplate;
