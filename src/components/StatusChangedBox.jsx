import * as React from "react";
import { Avatar, Box, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import AvatarName from "./AvatarName";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import PublishedWithChangesOutlinedIcon from "@mui/icons-material/PublishedWithChangesOutlined";

export default function StatusChangedBox() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      sx={{
        border: `1px solid ${colors.white[400]}`,
        p: "3px 5px 3px 10px",
        bgcolor: colors.white[900],
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography sx={{ mr: 1 }}>Status changed from </Typography>
        <Typography
          sx={{
            bgcolor: colors.white[300],
            p: "0px 6px 0 6px",
            color: colors.white[900],
            borderRadius: "4px",
          }}
        >
          Potential
        </Typography>
        <IconButton>
          <EastOutlinedIcon fontSize="small" />
        </IconButton>
        <Typography
          sx={{
            bgcolor: colors.white[300],
            p: "0px 6px 0 6px",
            color: colors.white[900],
            borderRadius: "4px",
          }}
        >
          Intrested
        </Typography>
        <Typography
          sx={{
            ml: 1,
            color: colors.white[300],
            borderBottom: `1px dotted ${colors.white[400]}`,
          }}
        >
          5 days ago
        </Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography>Ajay Kumar</Typography>
        <Avatar
          sx={{
            ml: 1,
            width: 25,
            height: 25,
            fontSize: 12,
            color: colors.white[500],
          }}
        >
          <AvatarName name={"Ajay Kumar"} />
        </Avatar>
      </Box>
    </Box>
  );
}
