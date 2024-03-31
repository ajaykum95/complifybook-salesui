import * as React from "react";
import {
  Box,
  FormControl,
  IconButton,
  TextField,
  useTheme,
} from "@mui/material";
import { tokens } from "../theme";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import DoneOutlineOutlinedIcon from "@mui/icons-material/DoneOutlineOutlined";

export default function CallBoxForm({ handleAddShowCall }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      sx={{
        border: `1px solid ${colors.white[400]}`,
        p: "0 1ch",
        bgcolor: colors.white[900],
        width: "100%",
      }}
    >
      <FormControl
        sx={{
          margin: "1ch 0 0",
          minWidth: 120,
          mt: 2,
        }}
        fullWidth
      >
        <TextField
          id="outlined-multiline-static"
          label="Call"
          placeholder="Add a note about this call"
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
        <IconButton
          sx={{ color: colors.redAccent[400] }}
          onClick={handleAddShowCall}
        >
          <DeleteOutlinedIcon />
        </IconButton>
        <IconButton sx={{ color: colors.blue[400] }}>
          <DoneOutlineOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
