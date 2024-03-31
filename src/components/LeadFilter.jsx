import * as React from "react";
import { tokens } from "../theme";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  IconButton,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  useTheme,
} from "@mui/material";
import SpeakerNotesIcon from "@mui/icons-material/SpeakerNotes";
import SmsOutlinedIcon from "@mui/icons-material/SmsOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import {
  mockDataContacts,
  mockedLeadActivity,
  mockedUser,
} from "../data/mockData";
import FilterListOutlinedIcon from "@mui/icons-material/FilterListOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import PersonIcon from "@mui/icons-material/Person";

export default function LeadFilter({
  handleAddShowNotes,
  handleAddShowSms,
  handleAddShowEmail,
  handleAddShowCall,
}) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [leadStatus, setLeadStatus] = React.useState("1");
  const [leadActivity, setLeadActivity] = React.useState([]);
  const [leadUser, setLeadUser] = React.useState([]);
  const [leadContact, setLeadContact] = React.useState([]);

  const handleChangeLeadStatus = (event) => {
    setLeadStatus(event.target.value);
  };

  const handleChangeLeadActivity = (event) => {
    const {
      target: { value },
    } = event;
    setLeadActivity(typeof value === "string" ? value.split(",") : value);
  };

  const handleChangeLeadUser = (event) => {
    const {
      target: { value },
    } = event;
    setLeadUser(typeof value === "string" ? value.split(",") : value);
  };

  const handleChangeLeadContact = (event) => {
    const {
      target: { value },
    } = event;
    setLeadContact(typeof value === "string" ? value.split(",") : value);
  };

  const getSelectedActivity = (activity) => {
    switch (activity) {
      case "1":
        return "Notes";
      case "2":
        return "Emails";
      case "3":
        return "SMS";
      case "4":
        return "Calls";
      case "5":
        return "Status Changed";
      default:
        return "All Activities";
    }
  };

  const getSelectedUser = (userId) => {
    return mockedUser.find((user) => user.id === userId)?.name;
  };

  const getSelectedContact = (contactId) => {
    return mockDataContacts.find((contact) => contact.id === contactId)?.name;
  };

  const selectMenuProps = () => {
    return {
      PaperProps: {
        style: {
          maxHeight: "50%", // Set the maximum height here
          overflowY: "auto", // Add scrolling when options exceed maxHeight
        },
      },
    };
  };

  return (
    <Box
      sx={{
        width: "100%",
        p: "0 8px 0 3px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", gap: 1, height: "100%" }}>
          <Button
            variant="outlined"
            startIcon={<SpeakerNotesIcon />}
            onClick={handleAddShowNotes}
            sx={{ color: colors.white[100], borderColor: colors.white[100] }}
          >
            Note
          </Button>
          <Button
            variant="outlined"
            startIcon={<EmailOutlinedIcon />}
            onClick={handleAddShowEmail}
            sx={{ color: colors.white[100], borderColor: colors.white[100] }}
          >
            Email
          </Button>
          <Button
            variant="outlined"
            startIcon={<SmsOutlinedIcon />}
            onClick={handleAddShowSms}
            sx={{ color: colors.white[100], borderColor: colors.white[100] }}
          >
            SMS
          </Button>
          <Button
            variant="outlined"
            startIcon={<CallOutlinedIcon />}
            onClick={handleAddShowCall}
            sx={{ color: colors.white[100], borderColor: colors.white[100] }}
          >
            Call
          </Button>
        </Box>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <Select
            value={leadStatus}
            onChange={handleChangeLeadStatus}
            displayEmpty
            size="small"
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="1">Potential</MenuItem>
            <MenuItem value="2">Intrested</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyItems: "center",
          gap: 1,
          borderBottom: `1px solid ${colors.white[400]}`,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton sx={{ p: 0 }}>
            <FilterListOutlinedIcon fontSize="small" />
          </IconButton>
          <Select
            id="all-activity-lead"
            multiple
            displayEmpty
            size="small"
            value={leadActivity}
            onChange={handleChangeLeadActivity}
            input={<OutlinedInput />}
            renderValue={(selected) => {
              if (selected.length === 0) return "All Activities";
              else if (selected.length === 1)
                return selected.map((activity) =>
                  getSelectedActivity(activity)
                );
              else return selected.length + " Activities";
            }}
            MenuProps={selectMenuProps()}
            sx={{
              "& .MuiSelect-select": {
                paddingLeft: "6px",
              },
              "& fieldset": { border: "none" },
            }}
          >
            {mockedLeadActivity.map((activity) => (
              <MenuItem key={activity.code} value={activity.code}>
                <Checkbox
                  sx={{ p: "0 10px 0 0" }}
                  checked={leadActivity.indexOf(activity.code) > -1}
                />
                <ListItemText primary={activity.name} />
              </MenuItem>
            ))}
          </Select>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton sx={{ p: 0 }}>
            <PersonOutlineOutlinedIcon fontSize="small" />
          </IconButton>
          <Select
            id="all-activity-all-user"
            multiple
            displayEmpty
            size="small"
            value={leadUser}
            onChange={handleChangeLeadUser}
            input={<OutlinedInput />}
            renderValue={(selected) => {
              if (selected.length === 0) return "All Users";
              else if (selected.length === 1)
                return selected.map((userId) => getSelectedUser(userId));
              else return selected.length + " Users";
            }}
            MenuProps={selectMenuProps()}
            sx={{
              "& .MuiSelect-select": {
                paddingLeft: "6px",
              },
              "& fieldset": { border: "none" },
            }}
          >
            {mockedUser.map((user) => (
              <MenuItem key={user.id} value={user.id}>
                <Checkbox
                  sx={{ p: "0 10px 0 0" }}
                  checked={leadUser.indexOf(user.id) > -1}
                />
                <ListItemText primary={user.name} />
              </MenuItem>
            ))}
          </Select>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton sx={{ p: 0 }}>
            <PersonIcon fontSize="small" />
          </IconButton>
          <Select
            id="all-activity-all-contact"
            multiple
            displayEmpty
            size="small"
            value={leadContact}
            onChange={handleChangeLeadContact}
            input={<OutlinedInput />}
            renderValue={(selected) => {
              if (selected.length === 0) return "All Contacts";
              else if (selected.length === 1)
                return selected.map((userId) => getSelectedContact(userId));
              else return selected.length + " Contacts";
            }}
            sx={{
              "& .MuiSelect-select": {
                paddingLeft: "6px",
              },
              "& fieldset": { border: "none" },
            }}
            MenuProps={selectMenuProps()}
          >
            {mockDataContacts.map((contact) => (
              <MenuItem key={contact.id} value={contact.id}>
                <Checkbox
                  sx={{ p: "0 10px 0 0" }}
                  checked={leadContact.indexOf(contact.id) > -1}
                />
                <ListItemText primary={contact.name} />
              </MenuItem>
            ))}
          </Select>
        </Box>
      </Box>
    </Box>
  );
}
