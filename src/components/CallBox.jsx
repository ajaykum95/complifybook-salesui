import * as React from "react";
import { Avatar, Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import AvatarName from "./AvatarName";

export default function CallBox() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      sx={{
        border: `1px solid ${colors.white[400]}`,
        p: 1,
        bgcolor: colors.white[900],
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography>
          They seems like a good fit. We will send them a proposal later today.
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography>Liz</Typography>
          <Avatar sx={{ ml: 1, width: 25, height: 25, fontSize: 12 }}>
            <AvatarName name={"Liz Agnya"} />
          </Avatar>
        </Box>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", mt: 1.5 }}>
        <Typography sx={{ color: colors.primary[600], mr: 1 }}>
          Called Ajay Kumar - 5 Minutes
        </Typography>
        <Typography
          sx={{
            color: colors.primary[700],
            borderBottom: `1px solid ${colors.primary[900]}`,
          }}
        >
          2 months ago
        </Typography>
      </Box>
    </Box>
  );
}
