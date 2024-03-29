import * as React from "react";
import { Avatar, Box, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import AvatarName from "./AvatarName";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import EmailBoxAccordian from "./EmailBoxAccordian";

export default function EmailBoxActivity({ emailActivity, user }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

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
          p: "3px 6px 3px 6px",
        }}
      >
        <Typography>{emailActivity.subject}</Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton sx={{ p: "2px", mr: 1 }}>
            <DeleteOutlineOutlinedIcon
              fontSize="small"
              sx={{ color: colors.white[400] }}
            />
          </IconButton>
          <Typography>{user}</Typography>
          <Avatar
            sx={{
              ml: 1,
              width: 25,
              height: 25,
              fontSize: 12,
              color: colors.white[500],
            }}
          >
            <AvatarName name={user} />
          </Avatar>
        </Box>
      </Box>
      <EmailBoxAccordian />
      <EmailBoxAccordian />
    </Box>
  );
}
