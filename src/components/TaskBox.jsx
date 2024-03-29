import * as React from "react";
import { Avatar, Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import AvatarName from "./AvatarName";

export default function TaskBox() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      sx={{
        border: `1px solid ${colors.white[400]}`,
        p: 1,
        bgcolor: colors.white[900],
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography sx={{ mr: 1 }}>Task Completed: Follow up</Typography>
        <Typography
          sx={{
            color: colors.white[300],
            borderBottom: `1px dotted ${colors.white[400]}`,
          }}
        >
          5 days ago
        </Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography>Ajay Kumar</Typography>
        <Avatar sx={{ ml: 1, width: 25, height: 25, fontSize: 12 }}>
          <AvatarName name={"Ajay Kumar"} />
        </Avatar>
      </Box>
    </Box>
  );
}
