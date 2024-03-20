import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import PinDropOutlinedIcon from "@mui/icons-material/PinDropOutlined";
import MyAccordian from "../../components/MyAccordian";
import TaskItem from "../../components/TaskItem";
import OpportunityItem from "../../components/OpportunityItem";
import TaskForm from "../../components/TaskForm";
import OpportunityForm from "../../components/OpportunityForm";
import ContactItem from "../../components/ContactItem";
import ContactForm from "../../components/ContactForm";

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
        gridRow="span 12"
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
          <MyAccordian
            name={"TASK :"}
            qty={2}
            ItemComponent={TaskItem}
            FormComponent={TaskForm}
          />
        </Box>
        <Box mt="10px" p="0 10px">
          <MyAccordian
            name={"OPPORTUNITIES :"}
            qty={2}
            ItemComponent={OpportunityItem}
            FormComponent={OpportunityForm}
          />
        </Box>
        <Box mt="10px" p="0 10px">
          <MyAccordian
            name={"CONTACTS :"}
            qty={2}
            ItemComponent={ContactItem}
            FormComponent={ContactForm}
          />
        </Box>
      </Box>
      <Box
        gridColumn="span 8"
        gridRow="span 12"
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
