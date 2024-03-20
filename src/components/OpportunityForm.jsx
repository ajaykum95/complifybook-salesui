import * as React from "react";
import {
  Avatar,
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  ListItemAvatar,
  ListItemIcon,
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
import CheckIcon from "@mui/icons-material/Check";
import FormSlider from "./FormSlider";
import AvatarName from "./AvatarName";

export default function OpportunityForm({ formExpanded, setFormExpanded }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [oppCloseDate, setOppCloseDate] = React.useState("");
  const [assignUser, setAssignUser] = React.useState("");
  const [opportunityStatus, setOpportunityStatus] = React.useState(
    mockedPipeline[0]?.pipelineStatus[0]?.id || ""
  );
  const [currency, setCurrency] = React.useState("₹");
  const [amount, setAmount] = React.useState("");
  const [amountType, setAmountType] = React.useState(1);
  const [contact, setContact] = React.useState("");

  React.useEffect(() => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const day = String(currentDate.getDate()).padStart(2, "0");
    const today = `${year}-${month}-${day}`;
    setOppCloseDate(today);
  }, []);

  const handleChangeCurrency = (event) => {
    setCurrency(event.target.value);
  };

  const handleChangeContact = (event) => {
    setContact(event.target.value);
  };

  const handleChangeAmount = (event) => {
    setAmount(event.target.value);
  };

  const handleAmountType = (event) => {
    setAmountType(event.target.value);
  };

  const handleChangeOpportunity = (event) => {
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

  const updateOppDate = (event) => {
    setOppCloseDate(event.target.value);
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
        sx={{ m: 1, minWidth: 120, mb: 2, bgcolor: colors.white[900] }}
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
          value={opportunityStatus}
          onChange={handleChangeOpportunity}
          size="small"
          renderValue={(selected) => {
            if (!selected) {
              return "Status";
            }

            const selectedPipeline =
              mockedPipeline.find((pipeline) =>
                pipeline.pipelineStatus.some((status) => status.id === selected)
              ) || null;

            const selectedStatus = selectedPipeline?.pipelineStatus.find(
              (status) => status.id === selected
            );

            const { name, type } = selectedStatus || {};

            return (
              <Box>
                <Typography
                  sx={{
                    fontWeight: 600,
                    textTransform: "uppercase",
                    color: getStatusColor(type),
                  }}
                >
                  {selectedPipeline?.name}
                </Typography>
                <Typography>{name}</Typography>
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
              <MenuItem key={status.id} name={status.name} value={status.id}>
                <ListItemIcon>
                  {status.id === opportunityStatus && <CheckIcon />}
                </ListItemIcon>
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
      <TextField
        variant="outlined"
        label="Estimated Close"
        type="date"
        size="small"
        value={oppCloseDate}
        onChange={updateOppDate}
        id="outlined-start-adornment"
        sx={{ m: 1, mb: 2, width: "21ch", bgcolor: colors.white[900] }}
      />
      <FormControl
        sx={{
          m: 1,
          mb: 2,
          width: "20ch",
          bgcolor: colors.white[900],
          alignItems: "center",
          border: `1px solid ${colors.white[400]}`,
        }}
      >
        <FormSlider sliderWidth="80%" />
      </FormControl>
      <FormControl sx={{ m: 1, width: "21ch", bgcolor: colors.white[900] }}>
        <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
        <OutlinedInput
          id="outlined-adornment-amount"
          value={amount}
          onChange={handleChangeAmount}
          sx={{ pl: "0px" }}
          size="small"
          type="number"
          startAdornment={
            <InputAdornment position="start" sx={{ width: "3ch" }}>
              <Select
                labelId="currency-select-label"
                id="currency-select"
                value={currency}
                onChange={handleChangeCurrency}
                variant="outlined"
                size="small"
                sx={{
                  "& fieldset": { border: "none" },
                  "& .MuiSelect-icon": { display: "none" }
                }}
              >
                <MenuItem value="₹">₹</MenuItem>
                <MenuItem value="$">$</MenuItem>
                {/* Add more currencies as needed */}
              </Select>
            </InputAdornment>
          }
          label="Amount"
        />
      </FormControl>
      <FormControl sx={{ m: 1, width: "20ch", bgcolor: colors.white[900] }}>
        <InputLabel size="small" id="demo-simple-select-label">
          Payment Term
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={amountType}
          label="Amount Type"
          onChange={handleAmountType}
          size="small"
        >
          <MenuItem value={1}>One-Time</MenuItem>
          <MenuItem value={2}>Monthly</MenuItem>
          <MenuItem value={3}>Yearly</MenuItem>
        </Select>
      </FormControl>
      <FormControl
        sx={{ m: 1, minWidth: 120, mt: 2, bgcolor: colors.white[900] }}
        fullWidth
      >
        <InputLabel id="contact-controlled-open-select-label" size="small">
          Contact
        </InputLabel>
        <Select
          labelId="contact-controlled-open-select-label"
          id="contact-controlled-open-select"
          value={contact}
          label="Contact"
          onChange={handleChangeContact}
          size="small"
          renderValue={(contactId) => {
            const selectedContact = mockedUser.find(
              (user) => user.id === contactId
            );
            return (
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <ListItemAvatar sx={{ minWidth: "35px" }}>
                  <Avatar
                    sx={{ height: "4ch", width: "4ch", fontSize: "12px" }}
                  >
                    <AvatarName name={selectedContact.name} />
                  </Avatar>
                </ListItemAvatar>
                <Typography variant="inherit">
                  {selectedContact.name}
                </Typography>
              </Box>
            );
          }}
        >
          {mockedUser.map((user) => (
            <MenuItem
              key={user.id}
              value={user.id}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <ListItemAvatar sx={{ minWidth: "35px" }}>
                <Avatar sx={{ height: "5ch", width: "5ch", fontSize: "12px" }}>
                  <AvatarName name={user.name} />
                </Avatar>
              </ListItemAvatar>
              <Typography variant="inherit" sx={{ ml: "5px" }}>
                {user.name}
              </Typography>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl
        sx={{ m: 1, minWidth: 120, mt: 2, bgcolor: colors.white[900] }}
        fullWidth
      >
        <InputLabel id="demo-controlled-open-select-label" size="small">
          User
        </InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          value={assignUser}
          label="User"
          onChange={handleChangeAssignee}
          size="small"
          renderValue={(contactId) => {
            const selectedContact = mockedUser.find(
              (user) => user.id === contactId
            );
            return (
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <ListItemAvatar sx={{ minWidth: "35px" }}>
                  <Avatar
                    sx={{ height: "4ch", width: "4ch", fontSize: "12px" }}
                  >
                    <AvatarName name={selectedContact.name} />
                  </Avatar>
                </ListItemAvatar>
                <Typography variant="inherit">
                  {selectedContact.name}
                </Typography>
              </Box>
            );
          }}
        >
          {mockedUser.map((user) => (
            <MenuItem
              key={user.id}
              value={user.id}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <ListItemAvatar sx={{ minWidth: "35px" }}>
                <Avatar sx={{ height: "5ch", width: "5ch", fontSize: "12px" }}>
                  <AvatarName name={user.name} />
                </Avatar>
              </ListItemAvatar>
              <Typography variant="inherit" sx={{ ml: "5px" }}>
                {user.name}
              </Typography>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl
        sx={{ m: 1, minWidth: 120, mt: 2, bgcolor: colors.white[900] }}
        fullWidth
      >
        <TextField
          id="outlined-multiline-static"
          label="Notes"
          multiline
          rows={3}
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
