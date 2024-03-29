import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { tokens } from "../theme";
import { useTheme } from "@emotion/react";
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

export default function ProductItem() {
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
      <ListItem key={"productItem1"} alignItems="flex-start">
        <ListItemAvatar>
          <Avatar sx={{ color: colors.white[500] }}>
            <AvatarName name={"Remy Sharp"} />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="BIS Registration"
          secondary="Business certificate"
        />
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
              <DeleteOutlineOutlinedIcon fontSize="small" />
              &nbsp;Delete
            </MenuItem>
          </Menu>
        </ListItemSecondaryAction>
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem key={"productItem2"} alignItems="flex-start">
        <ListItemAvatar>
          <Avatar sx={{ color: colors.white[500] }}>
            <AvatarName name={"Travis Howard"} />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="FSSAI" secondary="Business certification" />
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
              <DeleteOutlineOutlinedIcon fontSize="small" />
              &nbsp;Delete
            </MenuItem>
          </Menu>
        </ListItemSecondaryAction>
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem key={"productItem3"} alignItems="flex-start">
        <ListItemAvatar>
          <Avatar sx={{ color: colors.white[500] }}>
            <AvatarName name={"Ajay Kumar"} />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="CDSCO" secondary="Business certification" />
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
              <DeleteOutlineOutlinedIcon fontSize="small" />
              &nbsp;Delete
            </MenuItem>
          </Menu>
        </ListItemSecondaryAction>
      </ListItem>
    </List>
  );
}
