import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";
import GeneralSettingIcon from "@mui/icons-material/ManageAccountsOutlined";
import TeamManagementIcon from "@mui/icons-material/GroupsOutlined";
import RoleAndPermissionsIcon from "@mui/icons-material/SettingsAccessibilityOutlined";
import StatusesAndPipelinesIcon from "@mui/icons-material/DataUsageOutlined";
import BillingPlanIcon from "@mui/icons-material/TurnedInNotOutlined";
import BillingUsageIcon from "@mui/icons-material/TrendingUpOutlined";
import InboxIcon from "@mui/icons-material/InboxOutlined";
import OpportunityIcon from "@mui/icons-material/EmojiEventsOutlined";
import TemplateIcon from "@mui/icons-material/EventNoteOutlined";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = ({ handleCollapseSidebar, isCollapsed }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      className={isCollapsed ? "sidebar-collapsed" : "sidebar-non-collapsed"}
      sx={{
        "& .pro-sidebar-inner": {
          height: "auto !important",
          background: `${colors.blueAccent[900]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={handleCollapseSidebar}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Box display="flex" justifyContent="center" alignItems="center">
                  <img
                    alt="profile-user"
                    width="80px"
                    height="80px"
                    src={`../../assets/user.png`}
                    style={{ cursor: "pointer", borderRadius: "50%" }}
                  />
                </Box>
                <IconButton onClick={handleCollapseSidebar}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>
          <Box paddingLeft={isCollapsed ? undefined : "0%"}>
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Sales
            </Typography>
            <Item
              title="Inbox"
              to="/inbox"
              icon={<InboxIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Opportunities"
              to="/leads"
              icon={<OpportunityIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Leads"
              to="/leads"
              icon={<ApartmentOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Contacts"
              to="/contacts"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Reports"
              to="/contacts"
              icon={<TimelineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Settings
            </Typography>
            {/* <Item
              title="Bar Chart"
              to="/bar"
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Pie Chart"
              to="/pie"
              icon={<PieChartOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Line Chart"
              to="/line"
              icon={<TimelineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Geography Chart"
              to="/geography"
              icon={<MapOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            ></Item> */}

            <Item
              title="General"
              to="/submenu1"
              selected={selected}
              icon={<GeneralSettingIcon />}
              setSelected={setSelected}
            />
            <Item
              title="Team Management"
              to="/team"
              icon={<TeamManagementIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Roles & Permissions"
              to="/submenu2"
              icon={<RoleAndPermissionsIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Statuses & Pipelines"
              to="/submenu2"
              icon={<StatusesAndPipelinesIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Template Management"
              to="/geography"
              icon={<TemplateIcon />}
              selected={selected}
              setSelected={setSelected}
            ></Item>
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Billing
            </Typography>
            <Item
              title="Plan"
              to="/geography"
              icon={<BillingPlanIcon />}
              selected={selected}
              setSelected={setSelected}
            ></Item>
            <Item
              title="Usage"
              to="/geography"
              icon={<BillingUsageIcon />}
              selected={selected}
              setSelected={setSelected}
            ></Item>
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Pages
            </Typography>
            <Item
              title="Profile Form"
              to="/form"
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Calendar"
              to="/calendar"
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="FAQ Page"
              to="/faq"
              icon={<HelpOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
