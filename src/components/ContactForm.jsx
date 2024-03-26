import * as React from "react";
import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Select,
  Typography,
  useTheme,
} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { tokens } from "../theme";
import AddIcon from "@mui/icons-material/Add";

export default function ContactForm({ formExpanded, setFormExpanded }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [contactTypes, setContactTypes] = React.useState(["2"]);
  const [contactDetailsCount, setContactDetailsCount] = React.useState(1);

  const handleFormExpandClick = () => {
    setFormExpanded(!formExpanded);
  };

  const handleChangeContactType = (event, sn) => {
    const newContactTypes = [...contactTypes];
    newContactTypes[sn] = event.target.value;
    setContactTypes(newContactTypes);
  };

  const handleAddContactDetailsBox = () => {
    setContactDetailsCount((prevCount) => prevCount + 1);
    setContactTypes((prevTypes) => [...prevTypes, "2"]);
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
      {Array.from({ length: contactDetailsCount }).map((_, sn) => (
        <FormControl
          fullWidth
          sx={{ m: 1, bgcolor: colors.white[900] }}
          key={sn}
        >
          <InputLabel htmlFor="outlined-contact-details">
            Contact Details
          </InputLabel>
          <OutlinedInput
            id={`outlined-adornment-contact-${sn}`}
            sx={{ pl: "0px" }}
            size="small"
            startAdornment={
              <InputAdornment position="start">
                <Select
                  labelId={`contact-type-label-${sn}`}
                  id={`contact-type-select-${sn}`}
                  value={contactTypes[sn]}
                  onChange={(event) => handleChangeContactType(event, sn)}
                  variant="outlined"
                  size="small"
                  sx={{
                    "& fieldset": {
                      border: "none",
                      borderRight: `1px solid ${colors.grey[900]}`,
                      borderTopRightRadius: "0px",
                      borderBottomRightRadius: "0px",
                    },
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
      ))}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "right",
          p: "0px 12px",
          mb: 2,
        }}
      >
        <IconButton
          aria-label="add details"
          sx={{ p: "0px 4px", color: `${colors.blueAccent[100]}` }}
          onClick={handleAddContactDetailsBox}
        >
          <AddIcon fontSize="small" />
        </IconButton>
        <Typography
          onClick={handleAddContactDetailsBox}
          sx={{ cursor: "pointer", color: `${colors.blueAccent[100]}` }}
        >
          Add More
        </Typography>
      </Box>
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
