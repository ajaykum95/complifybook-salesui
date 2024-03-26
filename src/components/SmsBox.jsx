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
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import { mockDataContacts } from "../data/mockData";

export default function SmsBox() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [sendTo, setSendTo] = React.useState("");

  const handleChangeSendTo = (event) => {
    setSendTo(event.target.value);
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
          margin: "1ch 0 0",
          minWidth: 120,
          mt: 2,
          bgcolor: colors.white[900],
        }}
        fullWidth
      >
        <InputLabel id="demo-simple-select-helper-label" size="small">
          To:
        </InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="outlined-start-adornment"
          size="small"
          label="To:"
          value={sendTo}
          onChange={handleChangeSendTo}
          sx={{ mb: 1.5 }}
        >
          {mockDataContacts.map((contact) => (
            <MenuItem key={contact.id} value={contact.id}>
              {contact.name} @ {contact.phone}
            </MenuItem>
          ))}
        </Select>
        <TextField
          id="outlined-multiline-static"
          label="SMS"
          placeholder="Write your SMS message here"
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
