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
import SpeakerNotesIcon from "@mui/icons-material/SpeakerNotes";
import SmsOutlinedIcon from "@mui/icons-material/SmsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import TaskBox from "../../components/TaskBox";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import NotesBoxActivity from "../../components/NotesBoxActivity";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import OpportunityBox from "../../components/OpportunityBox";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import CallBox from "../../components/CallBox";
import EmailBoxActivity from "../../components/EmailBoxActivity";
import { mockedEmailActivity } from "../../data/mockData";
import PublishedWithChangesOutlinedIcon from "@mui/icons-material/PublishedWithChangesOutlined";
import StatusChangedBox from "../../components/StatusChangedBox";
import LeadFilter from "../../components/LeadFilter";
import React from "react";
import CallBoxForm from "../../components/CallBoxForm";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import UpdateClientModal from "../../components/UpdateClientModal";

const LeadDetails = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [addNotesShow, setAddNotesShow] = React.useState(false);
  const [addEmailShow, setAddEmailShow] = React.useState(false);
  const [addSmsShow, setAddSmsShow] = React.useState(false);
  const [addCallShow, setAddCallShow] = React.useState(false);
  const [openModal, setOpenModal] = React.useState(false);

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  const showAddNotes = () => {
    setAddNotesShow(!addNotesShow);
  };

  const showAddSms = () => {
    setAddSmsShow(!addSmsShow);
  };

  const showAddEmail = () => {
    setAddEmailShow(!addEmailShow);
  };

  const showAddCall = () => {
    setAddCallShow(!addCallShow);
  };

  return (
    <Box sx={{ width: "100%", display: "flex", bgcolor: colors.primary[400] }}>
      <Box sx={{ width: "30%" }}>
        <Box
          mt="25px"
          p="0 10px"
          display="flex "
          justifyContent="space-between"
          alignItems="center"
        >
          <Box sx={{ width: "100%" }}>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography
                variant="h3"
                paddingBottom={"10px"}
                fontWeight="600"
                color={colors.grey[100]}
                sx={{
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                }}
              >
                Abha Empire Private Limited ajay kumar
              </Typography>
              <IconButton
                onClick={handleOpenModal}
                sx={{
                  mt:"-4px",
                  color: colors.blue[100],
                }}
              >
                <EditOutlinedIcon fontSize="small" />
              </IconButton>
            </Box>
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
        <Box mt={2} p="0 10px">
          <MyAccordian
            name={"PRODUCT :"}
            qty={3}
            ItemComponent={ProductItem}
            FormComponent={ProductForm}
          />
        </Box>
        <Box mt={1} p="0 10px">
          <MyAccordian
            name={"TASK :"}
            qty={2}
            ItemComponent={TaskItem}
            FormComponent={TaskForm}
          />
        </Box>
        <Box mt={1} p="0 10px">
          <MyAccordian
            name={"OPPORTUNITIES :"}
            qty={2}
            ItemComponent={OpportunityItem}
            FormComponent={OpportunityForm}
          />
        </Box>
        <Box mt={1} p="0 10px">
          <MyAccordian
            name={"CONTACTS :"}
            qty={2}
            ItemComponent={ContactItem}
            FormComponent={ContactForm}
          />
        </Box>
      </Box>
      <Box sx={{ width: "70%" }}>
        <Box
          mt="25px"
          display="flex "
          justifyContent="space-between"
          alignItems="center"
        >
          <Box width={"100%"}>
            <LeadFilter
              handleAddShowNotes={showAddNotes}
              handleAddShowSms={showAddSms}
              handleAddShowEmail={showAddEmail}
              handleAddShowCall={showAddCall}
            />
            <List sx={{ pl: "6ch" }}>
              {addNotesShow && (
                <ListItem key={"notes"}>
                  <Typography
                    sx={{
                      position: "absolute",
                      top: "24px",
                      width: "18px",
                      height: "5px",
                      left: -2,
                      borderBottom: `1px solid ${colors.white[400]}`,
                    }}
                  />
                  <Typography
                    sx={{
                      position: "absolute",
                      top: "46px",
                      width: "18px",
                      height: "calc(100% - 35px)",
                      left: "-39px",
                      borderRight: `1px solid ${colors.white[400]}`,
                    }}
                  />
                  <ListItemIcon
                    sx={{ position: "absolute", top: 10, left: -39 }}
                  >
                    <IconButton
                      sx={{
                        bgcolor: colors.grey[800],
                        color: colors.white[500],
                        border: `1px solid ${colors.white[400]}`,
                      }}
                    >
                      <SpeakerNotesIcon />
                    </IconButton>
                  </ListItemIcon>
                  <NotesBox handleAddShowNotes={showAddNotes} />
                </ListItem>
              )}
              {addEmailShow && (
                <ListItem key={"email"}>
                  <Typography
                    sx={{
                      position: "absolute",
                      top: "24px",
                      width: "18px",
                      height: "5px",
                      left: -2,
                      borderBottom: `1px solid ${colors.white[400]}`,
                    }}
                  />
                  <Typography
                    sx={{
                      position: "absolute",
                      top: "46px",
                      width: "18px",
                      height: "calc(100% - 35px)",
                      left: "-39px",
                      borderRight: `1px solid ${colors.white[400]}`,
                    }}
                  />
                  <ListItemIcon
                    sx={{ position: "absolute", top: 10, left: -39 }}
                  >
                    <IconButton
                      sx={{
                        bgcolor: colors.greenAccent[800],
                        color: colors.white[500],
                        border: `1px solid ${colors.white[400]}`,
                      }}
                    >
                      <EmailOutlinedIcon />
                    </IconButton>
                  </ListItemIcon>
                  <EmailBox />
                </ListItem>
              )}
              {addSmsShow && (
                <ListItem key={"sms"}>
                  <Typography
                    sx={{
                      position: "absolute",
                      top: "24px",
                      width: "18px",
                      height: "5px",
                      left: -2,
                      borderBottom: `1px solid ${colors.white[400]}`,
                    }}
                  />
                  <Typography
                    sx={{
                      position: "absolute",
                      top: "46px",
                      width: "18px",
                      height: "calc(100% - 35px)",
                      left: "-39px",
                      borderRight: `1px solid ${colors.white[400]}`,
                    }}
                  />
                  <ListItemIcon
                    sx={{ position: "absolute", top: 10, left: -39 }}
                  >
                    <IconButton
                      sx={{
                        bgcolor: colors.redAccent[800],
                        color: colors.white[500],
                        border: `1px solid ${colors.white[400]}`,
                      }}
                    >
                      <SmsOutlinedIcon />
                    </IconButton>
                  </ListItemIcon>
                  <SmsBox />
                </ListItem>
              )}
              {addCallShow && (
                <ListItem key={"callFormBox"}>
                  <Typography
                    sx={{
                      position: "absolute",
                      top: "24px",
                      width: "18px",
                      height: "5px",
                      left: -2,
                      borderBottom: `1px solid ${colors.white[400]}`,
                    }}
                  />
                  <Typography
                    sx={{
                      position: "absolute",
                      top: "46px",
                      width: "18px",
                      height: "calc(100% - 35px)",
                      left: "-39px",
                      borderRight: `1px solid ${colors.white[400]}`,
                    }}
                  />
                  <ListItemIcon
                    sx={{ position: "absolute", top: 10, left: -39 }}
                  >
                    <IconButton
                      sx={{
                        bgcolor: colors.blue[600],
                        color: colors.white[500],
                        border: `1px solid ${colors.white[400]}`,
                      }}
                    >
                      <CallOutlinedIcon />
                    </IconButton>
                  </ListItemIcon>
                  <CallBoxForm handleAddShowCall={showAddCall} />
                </ListItem>
              )}
              <ListItem key={"task"}>
                <Typography
                  sx={{
                    position: "absolute",
                    top: "24px",
                    width: "18px",
                    height: "5px",
                    left: -2,
                    borderBottom: `1px solid ${colors.white[400]}`,
                  }}
                />
                <Typography
                  sx={{
                    position: "absolute",
                    top: "46px",
                    width: "18px",
                    height: "calc(100% - 35px)",
                    left: "-39px",
                    borderRight: `1px solid ${colors.white[400]}`,
                  }}
                />
                <ListItemIcon sx={{ position: "absolute", top: 10, left: -39 }}>
                  <IconButton
                    sx={{
                      bgcolor: colors.redAccent[300],
                      color: colors.white[500],
                      border: `1px solid ${colors.white[400]}`,
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
                    borderBottom: `1px solid ${colors.white[400]}`,
                  }}
                />
                <Typography
                  sx={{
                    position: "absolute",
                    top: "46px",
                    width: "18px",
                    height: "calc(100% - 35px)",
                    left: "-39px",
                    borderRight: `1px solid ${colors.white[400]}`,
                  }}
                />
                <ListItemIcon sx={{ position: "absolute", top: 10, left: -39 }}>
                  <IconButton
                    sx={{
                      bgcolor: colors.grey[800],
                      color: colors.white[500],
                      border: `1px solid ${colors.white[400]}`,
                    }}
                  >
                    <SpeakerNotesIcon />
                  </IconButton>
                </ListItemIcon>
                <NotesBoxActivity />
              </ListItem>
              <ListItem key={"opportunityActivity"}>
                <Typography
                  sx={{
                    position: "absolute",
                    top: "24px",
                    width: "18px",
                    height: "5px",
                    left: -2,
                    borderBottom: `1px solid ${colors.white[400]}`,
                  }}
                />
                <Typography
                  sx={{
                    position: "absolute",
                    top: "46px",
                    width: "18px",
                    height: "calc(100% - 35px)",
                    left: "-39px",
                    borderRight: `1px solid ${colors.white[400]}`,
                  }}
                />
                <ListItemIcon sx={{ position: "absolute", top: 10, left: -39 }}>
                  <IconButton
                    sx={{
                      bgcolor: colors.greenAccent[700],
                      color: colors.white[500],
                      border: `1px solid ${colors.white[400]}`,
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
                    borderBottom: `1px solid ${colors.white[400]}`,
                  }}
                />
                <Typography
                  sx={{
                    position: "absolute",
                    top: "46px",
                    width: "18px",
                    height: "calc(100% - 35px)",
                    left: "-39px",
                    borderRight: `1px solid ${colors.white[400]}`,
                  }}
                />
                <ListItemIcon sx={{ position: "absolute", top: 10, left: -39 }}>
                  <IconButton
                    sx={{
                      bgcolor: colors.blue[600],
                      color: colors.white[500],
                      border: `1px solid ${colors.white[400]}`,
                    }}
                  >
                    <CallOutlinedIcon />
                  </IconButton>
                </ListItemIcon>
                <CallBox />
              </ListItem>
              {mockedEmailActivity.map((emailActivity) => (
                <ListItem key={"emailActivity" + emailActivity.id}>
                  <Typography
                    sx={{
                      position: "absolute",
                      top: "24px",
                      width: "18px",
                      height: "5px",
                      left: -2,
                      borderBottom: `1px solid ${colors.white[400]}`,
                    }}
                  />
                  <Typography
                    sx={{
                      position: "absolute",
                      top: "46px",
                      width: "18px",
                      height: "calc(100% - 35px)",
                      left: "-39px",
                      borderRight: `1px solid ${colors.white[400]}`,
                    }}
                  />
                  <ListItemIcon
                    sx={{ position: "absolute", top: 10, left: -39 }}
                  >
                    <IconButton
                      sx={{
                        bgcolor: colors.greenAccent[800],
                        color: colors.white[500],
                        border: `1px solid ${colors.white[400]}`,
                      }}
                    >
                      <EmailOutlinedIcon />
                    </IconButton>
                  </ListItemIcon>
                  <EmailBoxActivity emailActivity={emailActivity} />
                </ListItem>
              ))}
              <ListItem key={"taskStatusChanged"}>
                <Typography
                  sx={{
                    position: "absolute",
                    top: "24px",
                    width: "18px",
                    height: "5px",
                    left: -2,
                    borderBottom: `1px solid ${colors.white[400]}`,
                  }}
                />
                <ListItemIcon sx={{ position: "absolute", top: 10, left: -39 }}>
                  <IconButton
                    sx={{
                      bgcolor: colors.redAccent[300],
                      color: colors.white[500],
                      border: `1px solid ${colors.white[400]}`,
                    }}
                  >
                    <PublishedWithChangesOutlinedIcon />
                  </IconButton>
                </ListItemIcon>
                <StatusChangedBox />
              </ListItem>
            </List>
          </Box>
        </Box>
      </Box>
      <UpdateClientModal
        openModal={openModal}
        handleOpenModal={handleOpenModal}
      />
    </Box>
  );
};

export default LeadDetails;
