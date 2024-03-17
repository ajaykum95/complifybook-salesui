import * as React from "react";
import {
  Box,
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Select,
  TextField,
  useTheme,
} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { tokens } from "../theme";
import { mockedUser } from "../data/mockData";

export default function TaskForm({ formExpanded, setFormExpanded }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [selectedDate, setSelectedDate] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [assignUser, setAssignUser] = React.useState("");

  React.useEffect(() => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const day = String(currentDate.getDate()).padStart(2, "0");
    const today = `${year}-${month}-${day}`;
    setSelectedDate(today);
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleChange = (event) => {
    setAssignUser(event.target.value);
  };

  const handleFormExpandClick = () => {
    setFormExpanded(!formExpanded);
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
          htmlFor="outlined-task-description"
          variant="outlined"
          size="small"
        >
          Task Description
        </InputLabel>
        <OutlinedInput
          id="outlined-task-description"
          label="Task Description"
          size="small"
        />
      </FormControl>
      <TextField
        variant="outlined"
        label="Date"
        type="date"
        size="small"
        value={selectedDate}
        id="outlined-start-adornment"
        sx={{ m: 1, width: "21ch", bgcolor: colors.white[900] }}
      />
      <TextField
        variant="outlined"
        label="Time"
        type="time"
        size="small"
        id="outlined-start-adornment"
        sx={{ m: 1, width: "20ch", bgcolor: colors.white[900] }}
        InputProps={{
          startAdornment: <InputAdornment position="start"></InputAdornment>,
        }}
      />
      <FormControl
        sx={{ m: 1, minWidth: 120, mt: 2, bgcolor: colors.white[900] }}
        fullWidth
      >
        <InputLabel id="demo-controlled-open-select-label" size="small">
          Assign User
        </InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={assignUser}
          label="Assign User"
          onChange={handleChange}
          size="small"
        >
          {mockedUser.map((user) => (
            <MenuItem key={user.id} value={user.id}>
              {user.name}
            </MenuItem>
          ))}
        </Select>
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
