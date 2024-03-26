import * as React from "react";
import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { tokens } from "../theme";
import OutlinedInput from "@mui/material/OutlinedInput";
import Chip from "@mui/material/Chip";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import { mockDataContacts } from "../data/mockData";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function EmailBox() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [sendTo, setSendTo] = React.useState([]);
  const [sendToCc, setSendToCc] = React.useState([]);
  const [sendToBcc, setSendToBcc] = React.useState([]);

  const handleChangeSendTo = (event) => {
    const {
      target: { value },
    } = event;
    setSendTo(typeof value === "string" ? value.split(",") : value);
  };

  const handleChangeCc = (event) => {
    const {
      target: { value },
    } = event;
    setSendToCc(typeof value === "string" ? value.split(",") : value);
  };

  const handleChangeBcc = (event) => {
    const {
      target: { value },
    } = event;
    setSendToBcc(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <Box
      sx={{
        border: `1px solid ${colors.white[400]}`,
        p: "0 1ch",
        bgcolor: colors.white[900],
        mb: 1,
      }}
    >
      <FormControl
        sx={{
          margin: "2ch 0 0 0",
          minWidth: 120,
          bgcolor: colors.white[900],
        }}
        fullWidth
      >
        <InputLabel id="demo-multiple-chip-label" size="small">
          To:
        </InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          label="To:"
          size="small"
          sx={{ mb: 1 }}
          multiple
          value={sendTo}
          onChange={handleChangeSendTo}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected.map((value) => {
                const selectedContact = mockDataContacts.find(
                  (contact) => contact.id === value
                );
                return (
                  <Chip
                    key={value}
                    label={`${selectedContact.name} @ ${selectedContact.email}`}
                  />
                );
              })}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {mockDataContacts.map((contact) => (
            <MenuItem
              key={contact.id}
              value={contact.id}
              style={getStyles(contact.name, sendTo, theme)}
            >
              {contact.name} @ {contact.email}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl
        sx={{
          margin: "1ch 0 0",
          minWidth: 120,
          mb: 1,
          bgcolor: colors.white[900],
        }}
        fullWidth
      >
        <InputLabel id="demo-multiple-chip-label" size="small">
          CC:
        </InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          label="CC:"
          size="small"
          multiple
          value={sendToCc}
          onChange={handleChangeCc}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected.map((value) => {
                const selectedContact = mockDataContacts.find(
                  (contact) => contact.id === value
                );
                return (
                  <Chip
                    key={value}
                    label={`${selectedContact.name} @ ${selectedContact.email}`}
                  />
                );
              })}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {mockDataContacts.map((contact) => (
            <MenuItem
              key={contact.id}
              value={contact.id}
              style={getStyles(contact.name, sendToCc, theme)}
            >
              {contact.name} @ {contact.email}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl
        sx={{
          margin: "1ch 0 0",
          minWidth: 120,
          mb: 1,
          bgcolor: colors.white[900],
        }}
        fullWidth
      >
        <InputLabel id="demo-multiple-chip-label" size="small">
          BCC:
        </InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          label="BCC:"
          size="small"
          multiple
          value={sendToBcc}
          onChange={handleChangeBcc}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected.map((value) => {
                const selectedContact = mockDataContacts.find(
                  (contact) => contact.id === value
                );
                return (
                  <Chip
                    key={value}
                    label={`${selectedContact.name} @ ${selectedContact.email}`}
                  />
                );
              })}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {mockDataContacts.map((contact) => (
            <MenuItem
              key={contact.id}
              value={contact.id}
              style={getStyles(contact.name, sendToBcc, theme)}
            >
              {contact.name} @ {contact.email}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl
        sx={{
          margin: "1ch 0 0",
          minWidth: 120,
          bgcolor: colors.white[900],
        }}
        fullWidth
      >
        <TextField
          id="outlined-multiline-static"
          label="Email Body"
          placeholder="Write your Email message here"
          multiline
          rows={3}
        />
      </FormControl>
      <Box
        sx={{
          justifyContent: "space-between",
          display: "flex",
          margin: "0px 1px",
          width: "100%",
        }}
      >
        <Box sx={{ display: "flex", m: "1ch 0" }}>
          <Button variant="contained" color="success" sx={{ height: "5ch" }}>
            Send
          </Button>
          <Button
            variant="outlined"
            sx={{ height: "5ch", ml: 1 }}
            startIcon={<WatchLaterOutlinedIcon />}
          >
            Send Later
          </Button>
          <Typography sx={{ ml: 1, pt: "4px" }}>1000</Typography>
        </Box>
        <Box>
          <IconButton sx={{ color: colors.redAccent[400] }}>
            <DeleteOutlinedIcon />
          </IconButton>
          <Button variant="outlined" sx={{ height: "5ch", ml: 1 }}>
            Save Draft
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
