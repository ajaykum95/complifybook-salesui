import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import { tokens } from "../../theme";
import {
  Checkbox,
  IconButton,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  Typography,
  useTheme,
} from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import InboxIcon from "@mui/icons-material/InboxOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import SwapVertOutlinedIcon from "@mui/icons-material/SwapVertOutlined";
import { mockedUser } from "../../data/mockData";
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";
import AccessAlarmOutlinedIcon from "@mui/icons-material/AccessAlarmOutlined";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";

export default function InboxFilter({
  selectAll,
  handleSelectAllChange,
  selectedRows,
  totalInboxData,
}) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [assignUser, setAssignUser] = React.useState([]);
  const [sortBy, setSortBy] = React.useState("1");
  const [showSnooze, setShowSnooze] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState("inbox");

  const handleDateClick = (arg) => {
    console.log(arg.dateStr);
    setShowSnooze(!showSnooze);
  };

  const handleActiveData = (activeVar) => {
    setActiveTab(activeVar);
  };

  const handleSortBy = (event) => {
    setSortBy(event.target.value);
  };
  const handleChangeAssignUser = (event) => {
    const {
      target: { value },
    } = event;
    setAssignUser(typeof value === "string" ? value.split(",") : value);
  };
  const getSelectedUser = (userId) => {
    return mockedUser.find((user) => user.id === userId)?.name;
  };
  const selectMenuProps = () => {
    return {
      PaperProps: {
        style: {
          maxHeight: "50%", // Set the maximum height here
          overflowY: "auto", // Add scrolling when options exceed maxHeight
        },
      },
    };
  };
  return (
    <Box sx={{ width: "100%" }}>
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
            "& .MuiButtonBase-root.active": {
              backgroundColor: colors.blueAccent[600],
              color: colors.white[500],
            },
            "& .MuiButtonBase-root": {
              color: colors.white[100],
              borderColor: colors.white[300],
            },
          }}
        >
          <Button
            className={activeTab === "inbox" ? "active" : ""}
            onClick={() => handleActiveData("inbox")}
          >
            Inbox(78)
          </Button>
          <Button
            className={activeTab === "done" ? "active" : ""}
            onClick={() => handleActiveData("done")}
          >
            Done(45)
          </Button>
          <Button
            className={activeTab === "future" ? "active" : ""}
            onClick={() => handleActiveData("future")}
          >
            Future(10)
          </Button>
        </ButtonGroup>
        <IconButton>
          <CalendarMonthIcon />
        </IconButton>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: `1.5px solid ${colors.grey[800]}`,
        }}
      >
        <ButtonGroup
          variant="outlined"
          sx={{
            "& .MuiButtonBase-root.active": {
              borderBottom: `2px solid ${colors.white[300]}`,
              color: colors.white[100],
              borderRadius: 0,
            },
            "& .MuiButtonBase-root:hover": {
              border: "none",
              bgcolor: colors.white[900],
            },
            "& .MuiButtonBase-root": {
              color: colors.white[100],
            },
          }}
          aria-label="Basic button group"
        >
          <Button
            className="active"
            sx={{ display: "flex", gap: 1, border: "none" }}
          >
            <InboxIcon fontSize="small" />
            <Typography>All Items</Typography>
          </Button>
          <Button sx={{ display: "flex", gap: 1, border: "none" }}>
            <EmailOutlinedIcon fontSize="small" />
            <Typography>Emails</Typography>
          </Button>
          <Button sx={{ display: "flex", gap: 1, border: "none" }}>
            <TaskAltOutlinedIcon fontSize="small" />
            <Typography>Tasks</Typography>
          </Button>
          <Button sx={{ display: "flex", gap: 1, border: "none" }}>
            <CallOutlinedIcon fontSize="small" />
            <Typography>Calls</Typography>
          </Button>
        </ButtonGroup>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Select
            id="all-activity-all-user"
            multiple
            displayEmpty
            size="small"
            value={assignUser}
            onChange={handleChangeAssignUser}
            input={<OutlinedInput />}
            renderValue={(selected) => {
              if (selected.length === 0) return "All Users";
              else if (selected.length === 1)
                return selected.map((userId) => getSelectedUser(userId));
              else return selected.length + " Users";
            }}
            MenuProps={selectMenuProps()}
            sx={{
              "& .MuiSelect-select": {
                paddingLeft: "6px",
              },
              "& fieldset": { border: "none" },
            }}
          >
            {mockedUser.map((user) => (
              <MenuItem key={user.id} value={user.id}>
                <Checkbox
                  sx={{ p: "0 10px 0 0" }}
                  checked={assignUser.indexOf(user.id) > -1}
                />
                <ListItemText primary={user.name} />
              </MenuItem>
            ))}
          </Select>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              pl: 1,
              height: "23px",
              borderLeft: `1px solid ${colors.white[400]}`,
            }}
          >
            <SwapVertOutlinedIcon fontSize="small" />
            <Select
              id="all-activity-all-user1"
              displayEmpty
              size="small"
              value={sortBy}
              onChange={handleSortBy}
              input={<OutlinedInput />}
              MenuProps={selectMenuProps()}
              sx={{
                "& .MuiSelect-select": {
                  paddingLeft: "6px",
                },
                "& fieldset": { border: "none" },
              }}
            >
              <MenuItem key={"newest"} value={"1"}>
                Newest
              </MenuItem>
              <MenuItem key={"oldest"} value={"2"}>
                Oldest
              </MenuItem>
            </Select>
          </Box>
        </Box>
      </Box>
      {activeTab === "inbox" && (
        <Box
          sx={{
            p: "10px 0 10px 6.5px",
            gap: 1,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Checkbox
              checked={selectAll}
              onChange={handleSelectAllChange}
              indeterminate={
                selectedRows.length > 0 && selectedRows.length < totalInboxData
              }
              sx={{ color: `${colors.white[100]} !important` }}
            />
            <Button
              variant="outlined"
              sx={{
                justifyContent: "space-between",
                p: "0 15px 0 10px",
                ml: 1.5,
                height: "27px",
                borderRadius: 5,
                color: colors.white[100],
                borderColor: colors.white[100],
              }}
            >
              <DoneOutlinedIcon fontSize="small" />
              &nbsp;&nbsp;Done
            </Button>
          </Box>
          <Button
            variant="outlined"
            sx={{
              justifyContent: "space-between",
              p: "0 5px 0 10px",
              height: "27px",
              borderRadius: 5,
              color: colors.white[100],
              borderColor: colors.white[100],
            }}
            onClick={() => setShowSnooze(!showSnooze)}
          >
            <AccessAlarmOutlinedIcon fontSize="small" />
            &nbsp;&nbsp;Snooze
            <ArrowDropDownOutlinedIcon fontSize="small" />
          </Button>
          <Typography>{selectedRows.length} Selected</Typography>
          {showSnooze && (
            <Box
              sx={{
                position: "absolute",
                top: 210,
                width: 260,
                zIndex: 9,
                bgcolor: colors.white[900],
              }}
            >
              <FullCalendar
                plugins={[dayGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                dateClick={handleDateClick}
                validRange={{ start: new Date().toISOString().split("T")[0] }}
              />
            </Box>
          )}
        </Box>
      )}
      {activeTab != "inbox" && (
        <Box
          sx={{
            p: "10px 0 10px 6.5px",
            gap: 1,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Checkbox
              checked={selectAll}
              onChange={handleSelectAllChange}
              indeterminate={
                selectedRows.length > 0 && selectedRows.length < totalInboxData
              }
              sx={{ color: `${colors.white[100]} !important` }}
            />
            <Button
              variant="outlined"
              sx={{
                justifyContent: "space-between",
                p: "0 15px 0 10px",
                ml: 1.5,
                height: "27px",
                borderRadius: 5,
                color: colors.white[100],
                borderColor: colors.white[100],
              }}
            >
              <InboxIcon fontSize="small" />
              &nbsp;&nbsp;Move to inbox
            </Button>
          </Box>
          <Typography>{selectedRows.length} Selected</Typography>
        </Box>
      )}
    </Box>
  );
}
