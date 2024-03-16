import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import PinDropOutlinedIcon from "@mui/icons-material/PinDropOutlined";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MyAccordian from "../../components/MyAccordian";

const LeadDetails = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box
      display="grid"
      gridTemplateColumns="repeat(12, 1fr)"
      gridAutoRows="140px"
    >
      <Box
        gridColumn="span 4"
        gridRow="span 6"
        backgroundColor={colors.primary[400]}
      >
        <Box
          mt="25px"
          p="0 10px"
          display="flex "
          justifyContent="space-between"
          alignItems="center"
        >
          <Box>
            <Typography
              variant="h3"
              paddingBottom={"10px"}
              fontWeight="600"
              color={colors.grey[100]}
            >
              Abha Empire Private Limited
            </Typography>
            <Typography paddingBottom={"10px"} color={colors.blueAccent[100]}>
              <a
                href="https://www.abhaempire.com"
                style={{
                  textDecoration: "none",
                  paddingTop: "5px",
                  color: colors.blueAccent[400],
                }}
              >
                abhaempire.com
              </a>
            </Typography>
            <Typography paddingBottom={"10px"} fontWeight={"600"}>
              Real estate development company
            </Typography>
            <Typography>
              <IconButton sx={{ paddingLeft: "0px" }}>
                <PinDropOutlinedIcon
                  sx={{
                    fontSize: "26px",
                    color: colors.blueAccent[500],
                  }}
                />
              </IconButton>
              India, Bihar, Bettiah
            </Typography>
          </Box>
        </Box>
        <Box mt="25px" p="0 10px">
          <MyAccordian name={"Tasks :"} qty={2} />
        </Box>
      </Box>
      <Box
        gridColumn="span 8"
        gridRow="span 6"
        backgroundColor={colors.primary[400]}
      >
        <Box
          mt="25px"
          p="0 30px"
          display="flex "
          justifyContent="space-between"
          alignItems="center"
        >
          <Box>
            <Typography variant="h5" fontWeight="600" color={colors.grey[100]}>
              Right Side menu
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LeadDetails;
