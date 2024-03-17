import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { tokens } from "../theme";
import { useTheme } from "@emotion/react";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import {
  IconButton,
  ListItemSecondaryAction,
  Menu,
  MenuItem,
} from "@mui/material";

export default function OpportunityItem() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [hoveredItem, setHoveredItem] = React.useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const generateInitials = (name) => {
    const parts = name.split(" ");
    if (parts.length === 1) {
      return parts[0].charAt(0).toUpperCase();
    } else {
      return (
        parts[0].charAt(0).toUpperCase() + parts[1].charAt(0).toUpperCase()
      );
    }
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: colors.white[900] }}>
      <ListItem key={"item1"}
        alignItems="flex-start"
        onMouseEnter={() => setHoveredItem("item1")}
        onMouseLeave={() => setHoveredItem(null)}
      >
        <ListItemAvatar>
          <Avatar>{generateInitials("Remy Sharp")}</Avatar>
        </ListItemAvatar>
        <ListItemText primary="Follow up with Dave" secondary="16/03/2024" />
        {hoveredItem === "item1" && (
          <ListItemSecondaryAction>
            <IconButton onClick={handleMenuOpen}>
              <MoreVertOutlinedIcon fontSize="small" />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem>
                <EditOutlinedIcon fontSize="small" />
                &nbsp;Edit
              </MenuItem>
              <MenuItem>
                <CheckOutlinedIcon fontSize="small" />
                &nbsp;Done
              </MenuItem>
            </Menu>
          </ListItemSecondaryAction>
        )}
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem key={"item2"}
        alignItems="flex-start"
        onMouseEnter={() => setHoveredItem("item2")}
        onMouseLeave={() => setHoveredItem(null)}
      >
        <ListItemAvatar>
          <Avatar>{generateInitials("Travis Howard")}</Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Call to avinash regarding GST Registration"
          secondary="20/03/2024"
        />
        {hoveredItem === "item2" && (
          <ListItemSecondaryAction>
            <IconButton onClick={handleMenuOpen}>
              <MoreVertOutlinedIcon fontSize="small" />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem>
                <EditOutlinedIcon fontSize="small" />
                &nbsp;Edit
              </MenuItem>
              <MenuItem>
                <CheckOutlinedIcon fontSize="small" />
                &nbsp;Done
              </MenuItem>
            </Menu>
          </ListItemSecondaryAction>
        )}
      </ListItem>
    </List>
  );
}
