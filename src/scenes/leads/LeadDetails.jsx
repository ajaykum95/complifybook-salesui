import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  Typography,
  useTheme,
} from "@mui/material";
import { tokens } from "../../theme";
import PinDropOutlinedIcon from "@mui/icons-material/PinDropOutlined";
import MyAccordian from "../../components/MyAccordian";
import TaskItem from "../../components/TaskItem";
import OpportunityItem from "../../components/OpportunityItem";
import TaskForm from "../../components/TaskForm";
import OpportunityForm from "../../components/OpportunityForm";
import ContactItem from "../../components/ContactItem";
import ContactForm from "../../components/ContactForm";
import ProductItem from "../../components/ProductItem";
import ProductForm from "../../components/ProductForm";
import NotesBox from "../../components/NotesBox";
import SmsBox from "../../components/SmsBox";
import EmailBox from "../../components/EmailBox";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import SmsOutlinedIcon from "@mui/icons-material/SmsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import TaskBox from "../../components/TaskBox";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import NotesBoxActivity from "../../components/NotesBoxActivity";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import OpportunityBox from "../../components/OpportunityBox";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import CallBox from "../../components/CallBox";

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
        gridRow="span 13"
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
            name={"PRODUCT :"}
            qty={3}
            ItemComponent={ProductItem}
            FormComponent={ProductForm}
          />
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
        gridRow="span 13"
        backgroundColor={colors.primary[400]}
      >
        <Box
          mt="25px"
          display="flex "
          justifyContent="space-between"
          alignItems="center"
        >
          <Box width={"100%"}>
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Top Filters
              </Typography>
            </Box>
            <List sx={{ p: "0 6ch" }}>
              <ListItem key={"notes"}>
                <Typography
                  sx={{
                    position: "absolute",
                    top: "24px",
                    width: "18px",
                    height: "5px",
                    left: -2,
                    borderBottom: `1px solid ${colors.grey[700]}`,
                  }}
                />
                <Typography
                  sx={{
                    position: "absolute",
                    top: "46px",
                    width: "18px",
                    height: "calc(100% - 35px)",
                    left: "-39px",
                    borderRight: `1px solid ${colors.grey[700]}`,
                  }}
                />
                <ListItemIcon sx={{ position: "absolute", top: 10, left: -39 }}>
                  <IconButton
                    sx={{
                      bgcolor: colors.grey[800],
                      color: colors.white[900],
                    }}
                  >
                    <DescriptionOutlinedIcon />
                  </IconButton>
                </ListItemIcon>
                <NotesBox />
              </ListItem>
              <ListItem key={"sms"}>
                <Typography
                  sx={{
                    position: "absolute",
                    top: "24px",
                    width: "18px",
                    height: "5px",
                    left: -2,
                    borderBottom: `1px solid ${colors.grey[700]}`,
                  }}
                />
                <Typography
                  sx={{
                    position: "absolute",
                    top: "46px",
                    width: "18px",
                    height: "calc(100% - 35px)",
                    left: "-39px",
                    borderRight: `1px solid ${colors.grey[700]}`,
                  }}
                />
                <ListItemIcon sx={{ position: "absolute", top: 10, left: -39 }}>
                  <IconButton
                    sx={{
                      bgcolor: colors.redAccent[800],
                      color: colors.white[900],
                    }}
                  >
                    <SmsOutlinedIcon />
                  </IconButton>
                </ListItemIcon>
                <SmsBox />
              </ListItem>
              <ListItem key={"email"}>
                <Typography
                  sx={{
                    position: "absolute",
                    top: "24px",
                    width: "18px",
                    height: "5px",
                    left: -2,
                    borderBottom: `1px solid ${colors.grey[700]}`,
                  }}
                />
                <Typography
                  sx={{
                    position: "absolute",
                    top: "46px",
                    width: "18px",
                    height: "calc(100% - 35px)",
                    left: "-39px",
                    borderRight: `1px solid ${colors.grey[700]}`,
                  }}
                />
                <ListItemIcon sx={{ position: "absolute", top: 10, left: -39 }}>
                  <IconButton
                    sx={{
                      bgcolor: colors.greenAccent[800],
                      color: colors.white[900],
                    }}
                  >
                    <EmailOutlinedIcon />
                  </IconButton>
                </ListItemIcon>
                <EmailBox />
              </ListItem>
              <ListItem key={"task"}>
                <Typography
                  sx={{
                    position: "absolute",
                    top: "24px",
                    width: "18px",
                    height: "5px",
                    left: -2,
                    borderBottom: `1px solid ${colors.grey[700]}`,
                  }}
                />
                <Typography
                  sx={{
                    position: "absolute",
                    top: "46px",
                    width: "18px",
                    height: "calc(100% - 35px)",
                    left: "-39px",
                    borderRight: `1px solid ${colors.grey[700]}`,
                  }}
                />
                <ListItemIcon sx={{ position: "absolute", top: 10, left: -39 }}>
                  <IconButton
                    sx={{
                      bgcolor: colors.redAccent[300],
                      color: colors.white[900],
                    }}
                  >
                    <TaskAltOutlinedIcon />
                  </IconButton>
                </ListItemIcon>
                <TaskBox />
              </ListItem>
              <ListItem key={"notesActivity"}>
                <Typography
                  sx={{
                    position: "absolute",
                    top: "24px",
                    width: "18px",
                    height: "5px",
                    left: -2,
                    borderBottom: `1px solid ${colors.grey[700]}`,
                  }}
                />
                <Typography
                  sx={{
                    position: "absolute",
                    top: "46px",
                    width: "18px",
                    height: "calc(100% - 35px)",
                    left: "-39px",
                    borderRight: `1px solid ${colors.grey[700]}`,
                  }}
                />
                <ListItemIcon sx={{ position: "absolute", top: 10, left: -39 }}>
                  <IconButton
                    sx={{
                      bgcolor: colors.grey[800],
                      color: colors.white[900],
                    }}
                  >
                    <DescriptionOutlinedIcon />
                  </IconButton>
                </ListItemIcon>
                <NotesBoxActivity />
              </ListItem>
              <ListItem key={"callActivity"}>
                <Typography
                  sx={{
                    position: "absolute",
                    top: "24px",
                    width: "18px",
                    height: "5px",
                    left: -2,
                    borderBottom: `1px solid ${colors.grey[700]}`,
                  }}
                />
                <Typography
                  sx={{
                    position: "absolute",
                    top: "46px",
                    width: "18px",
                    height: "calc(100% - 35px)",
                    left: "-39px",
                    borderRight: `1px solid ${colors.grey[700]}`,
                  }}
                />
                <ListItemIcon sx={{ position: "absolute", top: 10, left: -39 }}>
                  <IconButton
                    sx={{
                      bgcolor: colors.greenAccent[700],
                      color: colors.white[900],
                    }}
                  >
                    <EmojiEventsOutlinedIcon />
                  </IconButton>
                </ListItemIcon>
                <OpportunityBox />
              </ListItem>
              <ListItem key={"callActivity"}>
                <Typography
                  sx={{
                    position: "absolute",
                    top: "24px",
                    width: "18px",
                    height: "5px",
                    left: -2,
                    borderBottom: `1px solid ${colors.grey[700]}`,
                  }}
                />
                <Typography
                  sx={{
                    position: "absolute",
                    top: "46px",
                    width: "18px",
                    height: "calc(100% - 35px)",
                    left: "-39px",
                    borderRight: `1px solid ${colors.grey[700]}`,
                  }}
                />
                <ListItemIcon sx={{ position: "absolute", top: 10, left: -39 }}>
                  <IconButton
                    sx={{
                      bgcolor: colors.greenAccent[700],
                      color: colors.white[900],
                    }}
                  >
                    <CallOutlinedIcon />
                  </IconButton>
                </ListItemIcon>
                <CallBox />
              </ListItem>
            </List>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LeadDetails;
