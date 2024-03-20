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
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import {
  IconButton,
  ListItemSecondaryAction,
  Menu,
  MenuItem,
} from "@mui/material";
import AvatarName from "./AvatarName";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";

export default function ContactItem() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: colors.white[900] }}>
      <ListItem key={"taskItem1"} alignItems="flex-start">
        <ListItemAvatar>
          <Avatar>
            <AvatarName name={"Prince Malhotra Singh"} />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Prince Malhotra Singh" secondary="CEO" />
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
              <EmailOutlinedIcon fontSize="small" />
              &nbsp;Email
            </MenuItem>
            <MenuItem>
              <ChatBubbleOutlineOutlinedIcon fontSize="small" />
              &nbsp;SMS
            </MenuItem>
            <MenuItem>
              <CallOutlinedIcon fontSize="small" />
              &nbsp;Call
            </MenuItem>
            <MenuItem>
              <EditOutlinedIcon fontSize="small" />
              &nbsp;Edit
            </MenuItem>
            <MenuItem>
              <DeleteOutlineOutlinedIcon fontSize="small" />
              &nbsp;Delete
            </MenuItem>
          </Menu>
        </ListItemSecondaryAction>
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem key={"taskItem2"} alignItems="flex-start">
        <ListItemAvatar>
          <Avatar>
            <AvatarName name={"Travis Howard"} />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Travis Howard" secondary="Manager" />
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
              <EmailOutlinedIcon fontSize="small" />
              &nbsp;Email
            </MenuItem>
            <MenuItem>
              <ChatBubbleOutlineOutlinedIcon fontSize="small" />
              &nbsp;SMS
            </MenuItem>
            <MenuItem>
              <CallOutlinedIcon fontSize="small" />
              &nbsp;Call
            </MenuItem>
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
      </ListItem>
    </List>
  );
}
