import * as React from "react";
import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  ListItemText,
  ListSubheader,
  OutlinedInput,
  Select,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { tokens } from "../theme";
import { mockedPipeline, mockedUser } from "../data/mockData";
import CircleIcon from "@mui/icons-material/Circle";

export default function OpportunityForm({ formExpanded, setFormExpanded }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [selectedDate, setSelectedDate] = React.useState("");
  const [openAssignee, setOpenAssignee] = React.useState(false);
  const [openOpportunity, setOpenOpportunity] = React.useState(false);
  const [assignUser, setAssignUser] = React.useState("");
  const [opportunityStatus, setOpportunityStatus] = React.useState("");

  React.useEffect(() => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const day = String(currentDate.getDate()).padStart(2, "0");
    const today = `${year}-${month}-${day}`;
    setSelectedDate(today);
  }, []);

  const handleCloseAssignee = () => {
    setOpenAssignee(false);
  };

  const handleOpenAssignee = () => {
    setOpenAssignee(true);
  };

  const handleOppClose = () => {
    setOpenOpportunity(false);
  };

  const handleOppOpen = () => {
    setOpenOpportunity(true);
  };

  const handleChangeOpportunity = (event) => {
    console.log("opp Selected value:", event.target.value);
    setOpportunityStatus(event.target.value);
  };

  const handleFormExpandClick = () => {
    setFormExpanded(!formExpanded);
  };

  const handleChangeAssignee = (event) => {
    setAssignUser(event.target.value);
  };

  const getStatusColor = (statusType) => {
    switch (statusType) {
      case "Active":
        return colors.orange[500];
      case "Won":
        return colors.greenAccent[400];
      case "Lost":
        return colors.redAccent[400];
      default:
        return colors.redAccent[900];
    }
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
      <FormControl
        sx={{ m: 1, minWidth: 120, mt: 2, bgcolor: colors.white[900] }}
        fullWidth
      >
        <InputLabel
          htmlFor="demo-controlled-open-select-opp"
          size="small"
          variant="outlined"
        >
          Status
        </InputLabel>
        <Select
          label="Status"
          id="demo-controlled-open-select-opp"
          open={openOpportunity}
          onClose={handleOppClose}
          onOpen={handleOppOpen}
          value={opportunityStatus}
          onChange={handleChangeOpportunity}
          size="small"
          renderValue={(selected) => {
            if (!selected) {
              return "Status";
            }
            return (
              <Box>
                <Typography sx={{ fontWeight: 600 }}>SALES</Typography>
                <Typography>Demo Scheduled</Typography>
              </Box>
            );
          }}
        >
          {mockedPipeline.map((pipeline) => [
            <ListSubheader
              key={`subheader-${pipeline.id}`}
              sx={{
                color: colors.greenAccent[400],
                fontWeight: 600,
                fontSize: "14px",
              }}
            >
              {pipeline.name}
            </ListSubheader>,
            ...pipeline.pipelineStatus.map((status) => (
              <MenuItem key={status.id} value={status.id}>
                <Typography>
                  <IconButton sx={{ paddingTop: "6px" }}>
                    <CircleIcon
                      sx={{ color: getStatusColor(status.type) }}
                      fontSize="small"
                    />
                  </IconButton>
                  {status.name}
                </Typography>
              </MenuItem>
            )),
          ])}
        </Select>
      </FormControl>
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
          open={openAssignee}
          onClose={handleCloseAssignee}
          onOpen={handleOpenAssignee}
          value={assignUser}
          label="Assign User"
          onChange={handleChangeAssignee}
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
