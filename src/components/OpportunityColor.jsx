import { useTheme } from "@mui/material";
import { tokens } from "../theme";

const OpportunityColor = ({ statusType }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  switch (statusType) {
    case "Active":
      return colors.orange[500];
    case "Won":
      return colors.greenAccent[400];
    case "Lost":
      return colors.redAccent[400];
    default:
      return colors.redAccent[900];
  }
};

export default OpportunityColor;
