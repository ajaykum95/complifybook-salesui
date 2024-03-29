import * as React from "react";
import {
  Avatar,
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
import { mockDataContacts, mockTemplateData } from "../data/mockData";
import Checkbox from "@mui/material/Checkbox";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import AvatarName from "./AvatarName";

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
  const [showCc, setShowCc] = React.useState(false);
  const [showBcc, setShowBcc] = React.useState(false);
  const [emailAction, setEmailAction] = React.useState("1");
  const [emailActionReply, setEmailActionReply] = React.useState("1");
  const [emailTemplate, setEmailTemplate] = React.useState("");

  const handleChangeEmailAction = (event) => {
    setEmailAction(event.target.value);
  };

  const handleChangeEmailActionReply = (event) => {
    setEmailActionReply(event.target.value);
  };

  const handleChooseTemplate = (event) => {
    setEmailTemplate(event.target.value);
  };

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

  const handleAddCc = () => {
    setShowCc(!showCc);
    if (!showCc) setSendToCc([]);
  };

  const handleAddBcc = () => {
    setShowBcc(!showBcc);
    if (!showBcc) setSendToBcc([]);
  };

  return (
    <Box
      sx={{
        border: `1px solid ${colors.white[400]}`,
        bgcolor: colors.white[900],
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          p: 1,
        }}
      >
        <Typography>Proposal of NBFC Registration</Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography>Ajay Kumar</Typography>
          <Avatar
            sx={{
              ml: 1,
              width: 30,
              height: 30,
              fontSize: 12,
              color: colors.white[500],
            }}
          >
            <AvatarName name={"Ajay Kumar"} />
          </Avatar>
        </Box>
      </Box>
      <Box sx={{ bgcolor: colors.primary[400], p: "2ch 1ch 2ch 1ch" }}>
        <Box
          sx={{
            display: "flex",
            justifyItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex" }}>
            <ArrowDropDownOutlinedIcon />
            <Typography>Ajay Kumar &lt;ajay30935@gmail.com&gt;</Typography>
            <Typography
              sx={{
                ml: 1,
                bgcolor: colors.primary[700],
                color: colors.white[900],
                p: "0px 7px 0px 7px",
                borderRadius: 1,
              }}
            >
              Draft
            </Typography>
          </Box>
          <Typography
            sx={{
              color: colors.white[300],
            }}
          >
            less than a minute ago
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
          <Typography sx={{ fontWeight: 600, ml: 2.5 }}>To:</Typography>
          <Typography sx={{ ml: 1 }}>ajay30935@gmail.com</Typography>
        </Box>
      </Box>
      <Box sx={{ p: "2ch" }}>
        <Box
          sx={{
            mb: "1.5ch",
            display: "flex",
            width: "85%",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <FormControl
            sx={{
              minWidth: 120,
              maxWidth: "77%",
              display: "flex",
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
          <Box sx={{ display: "flex", width: "20%" }}>
            <Button
              size="small"
              variant="outlined"
              sx={{ color: colors.blue[400], mr: 1 }}
              onClick={handleAddCc}
            >
              Add CC
            </Button>
            <Button
              size="small"
              variant="outlined"
              sx={{ color: colors.blue[400] }}
              onClick={handleAddBcc}
            >
              Add Bcc
            </Button>
          </Box>
        </Box>
        {showCc && (
          <FormControl
            sx={{
              minWidth: 120,
              mb: 1.5,
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
        )}
        {showBcc && (
          <FormControl
            sx={{
              minWidth: 120,
              mb: 1.5,
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
        )}
        <Box sx={{ mb: 1, display: "flex", justifyContent: "space-between" }}>
          <FormControl fullWidth sx={{ width: "58%" }}>
            <InputLabel
              htmlFor="outlined-contact-subject"
              variant="outlined"
              size="small"
            >
              Subject
            </InputLabel>
            <OutlinedInput
              id="outlined-contact-subject"
              label="Subject"
              size="small"
            />
          </FormControl>
          <FormControl sx={{ width: "40%" }}>
            <InputLabel id="demo-multiple-template-label12" size="small">
              Choose Template
            </InputLabel>
            <Select
              labelId="demo-multiple-template-label12"
              id="demo-multiple-template12"
              label="Choose Template"
              size="small"
              value={emailTemplate}
              onChange={handleChooseTemplate}
            >
              {mockTemplateData.map((template) => (
                <MenuItem key={template.id} value={template.id}>
                  {template.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
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
            rows={5}
          />
        </FormControl>
        <Box sx={{ display: "flex", alignItems: "center", m: "1ch 0 1ch 0" }}>
          <Checkbox />
          <Typography>If no reply</Typography>
          <Select
            id="demo-multiple-template1"
            size="small"
            inputProps={{ "aria-label": "Without label" }}
            value={emailAction}
            sx={{ m: 1 }}
            onChange={handleChangeEmailAction}
          >
            <MenuItem value="1">In 1 Week</MenuItem>
            <MenuItem value="2">In 2 Week</MenuItem>
          </Select>
          <Typography>then</Typography>
          <Select
            id="demo-multiple-template"
            size="small"
            inputProps={{ "aria-label": "Without label" }}
            value={emailActionReply}
            sx={{ m: 1 }}
            onChange={handleChangeEmailActionReply}
          >
            <MenuItem value="1">Remind me to follow-up</MenuItem>
            <MenuItem value="2">Remind me to reminder</MenuItem>
          </Select>
        </Box>
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
              sx={{ height: "5ch", ml: 1, color: colors.white[100] }}
              startIcon={<WatchLaterOutlinedIcon />}
            >
              Send Later
            </Button>
          </Box>
          <Box>
            <IconButton sx={{ color: colors.redAccent[400] }}>
              <DeleteOutlinedIcon />
            </IconButton>
            <IconButton sx={{ color: colors.white[300] }}>
              <AttachFileOutlinedIcon />
            </IconButton>
            <Button
              variant="outlined"
              sx={{ height: "5ch", ml: 1, color: colors.white[100] }}
            >
              Save Draft
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
