import * as React from "react";
import {
  Box,
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Select,
  useTheme,
} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { tokens } from "../theme";

export default function ContactForm({ formExpanded, setFormExpanded }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [contactType, setContactType] = React.useState("2");

  const handleFormExpandClick = () => {
    setFormExpanded(!formExpanded);
  };

  const handleChangeContactType = (event) => {
    setContactType(event.target.value);
  };

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      p={"10px 0px"}
      sx={{
        display: "flex",
        flexWrap: "wrap",
        bgcolor: colors.greenAccent[900],
        "& .MuiInputLabel-root": { color: colors.white[100] },
      }}
    >
      <FormControl fullWidth sx={{ m: 1, mb: 2, bgcolor: colors.white[900] }}>
        <InputLabel
          htmlFor="outlined-contact-name"
          variant="outlined"
          size="small"
        >
          Name
        </InputLabel>
        <OutlinedInput id="outlined-contact-name" label="Name" size="small" />
      </FormControl>
      <FormControl fullWidth sx={{ m: 1, mb: 2, bgcolor: colors.white[900] }}>
        <InputLabel
          htmlFor="outlined-contact-title"
          variant="outlined"
          size="small"
        >
          Title
        </InputLabel>
        <OutlinedInput id="outlined-contact-title" label="title" size="small" />
      </FormControl>
      <FormControl fullWidth sx={{ m: 1, bgcolor: colors.white[900] }}>
        <InputLabel htmlFor="outlined-contact-details">
          Contact Details
        </InputLabel>
        <OutlinedInput
          id="outlined-adornment-contact"
          sx={{ pl: "0px" }}
          size="small"
          startAdornment={
            <InputAdornment position="start">
              <Select
                labelId="contact-type-label"
                id="contact-type-select"
                value={contactType}
                onChange={handleChangeContactType}
                variant="outlined"
                size="small"
                sx={{
                  "& fieldset": {
                    border: "none",
                    borderRight: `1px solid ${colors.grey[900]}`,
                    borderTopRightRadius: "0px",
                    borderBottomRightRadius: "0px",
                  },
                  "& .MuiSelect-icon": { display: "none" },
                }}
              >
                <MenuItem value="2">Mobile</MenuItem>
                <MenuItem value="3">Email</MenuItem>
                <MenuItem value="1">Office</MenuItem>
                <MenuItem value="4">Home</MenuItem>
                <MenuItem value="5">Direct</MenuItem>
                <MenuItem value="6">Fax</MenuItem>
                <MenuItem value="7">URL</MenuItem>
                <MenuItem value="8">Other</MenuItem>
              </Select>
            </InputAdornment>
          }
          label="Contact Details"
        />
      </FormControl>
      <Box textAlign={"end"} width={"100%"} p={"10px 10px"}>
        <Button
          color="error"
          onClick={handleFormExpandClick}
          aria-expanded={formExpanded}
        >
          Cancel
        </Button>
        <Button variant="contained" color="success" sx={{ ml: 2 }}>
          Save
        </Button>
      </Box>
    </Box>
  );
}
