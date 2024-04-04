import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import { tokens } from "../../theme";
import { IconButton, useTheme } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

export default function VariantButtonGroup() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        "& > *": {
          m: 1,
        },
      }}
    >
      <ButtonGroup
        variant="outlined"
        aria-label="Basic button group"
        sx={{
          color: colors.white[100],
          "& .MuiButtonBase-root.active": {
            backgroundColor: colors.blueAccent[600],
            color: colors.white[500],
          },
        }}
      >
        <Button
          className="active"
          sx={{ color: colors.white[100], borderColor: colors.white[300] }}
        >
          Inbox(78)
        </Button>
        <Button
          sx={{ color: colors.white[100], borderColor: colors.white[300] }}
        >
          Done(45)
        </Button>
        <Button
          sx={{ color: colors.white[100], borderColor: colors.white[300] }}
        >
          Future(10)
        </Button>
      </ButtonGroup>
      <IconButton>
        <CalendarMonthIcon />
      </IconButton>
    </Box>
  );
}
