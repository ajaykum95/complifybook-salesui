import * as React from "react";
import { Avatar, Box, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import AvatarName from "./AvatarName";
import OpportunityColor from "./OpportunityColor";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";

export default function OpportunityBox() {
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
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", maxWidth: "80%" }}>
          <Typography sx={{ mr: 1 }}>
            Opportunity ($6000) status changed from{" "}
          </Typography>
          <Box
            sx={{
              display: "flex",
              border: `1px solid ${colors.white[400]}`,
              borderRadius: "10px",
            }}
          >
            <Typography sx={{ fontSize: "11px", p: "0px 6px" }}>
              SALES
            </Typography>
            <Typography
              sx={{
                bgcolor: OpportunityColor({ statusType: "Active" }),
                borderTopRightRadius: "10px",
                borderBottomRightRadius: "10px",
                color: colors.white[500],
                fontSize: "11px",
                p: "0px 6px",
              }}
            >
              DEMO SCHEDULED
            </Typography>
          </Box>
          <IconButton>
            <EastOutlinedIcon fontSize="small" />
          </IconButton>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", maxWidth: "20%" }}>
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
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box
          sx={{
            display: "flex",
            border: `1px solid ${colors.white[400]}`,
            borderRadius: "10px",
            mr: 1,
          }}
        >
          <Typography sx={{ fontSize: "11px", p: "0px 6px" }}>SALES</Typography>
          <Typography
            sx={{
              bgcolor: OpportunityColor({ statusType: "Won" }),
              borderTopRightRadius: "10px",
              borderBottomRightRadius: "10px",
              color: colors.white[500],
              fontSize: "11px",
              p: "0px 6px",
            }}
          >
            DEMO COMPLETED
          </Typography>
        </Box>
        <Typography
          sx={{
            color: colors.white[300],
            borderBottom: `1px dotted ${colors.white[400]}`,
          }}
        >
          5 days ago
        </Typography>
      </Box>
    </Box>
  );
}
