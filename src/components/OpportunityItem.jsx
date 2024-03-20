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
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import {
  Box,
  Grid,
  IconButton,
  ListItemSecondaryAction,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import AvatarName from "./AvatarName";
import OpportunityColor from "./OpportunityColor";

export default function OpportunityItem() {
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
    <List sx={{ width: "100%", bgcolor: colors.white[900] }}>
      <ListItem key={"item1"} alignItems="flex-start">
        <Grid container alignItems="center" sx={{ display: "flex" }}>
          <Grid item xs={2}>
            <ListItemAvatar sx={{ minWidth: "47px" }}>
              <Avatar
                sx={{
                  height: "5ch",
                  width: "5ch",
                  fontSize: "16px",
                  mt: "-9px",
                }}
              >
                <AvatarName name="Remy Sharp" />
              </Avatar>
            </ListItemAvatar>
          </Grid>
          <Grid item xs={10}>
            <ListItemText
              sx={{ "& .MuiTypography-root": { fontWeight: 600 } }}
              primary="$ 4567"
              secondary="50%"
            />
            <ListItemSecondaryAction sx={{ top: "5ch" }}>
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
                <MenuItem>
                  <DeleteOutlineOutlinedIcon fontSize="small" />
                  &nbsp;Delete
                </MenuItem>
              </Menu>
            </ListItemSecondaryAction>
          </Grid>
          <Grid item marginTop={1}>
            <Box
              sx={{
                display: "flex",
                border: `1px solid ${colors.grey[900]}`,
                borderRadius: "10px",
                mb: "10px",
              }}
            >
              <Typography mr={1} sx={{ p: "2px 7px" }}>
                SALES
              </Typography>
              <Typography
                sx={{
                  bgcolor: OpportunityColor({ statusType: "Active" }),
                  p: "2px 8px",
                  borderTopRightRadius: "10px",
                  borderBottomRightRadius: "10px",
                  color: colors.white[500],
                }}
              >
                DEMO SCHEDULED
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            marginTop={1}
            xs={12}
            sx={{ borderTop: `1px solid ${colors.grey[900]}` }}
          >
            <Box
              sx={{
                p: "15px 0",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <IconButton sx={{ p: "0px" }}>
                  <PersonOutlineOutlinedIcon />
                </IconButton>
                <Typography fontWeight={600} fontSize={15} pl={1}>
                  Ajay Kumar
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  "& > *": {
                    marginRight: "10px",
                    cursor: "pointer",
                  },
                  "& > *:last-child": {
                    marginRight: 0,
                  },
                }}
              >
                <EmailOutlinedIcon fontSize="small" />
                <ChatBubbleOutlineOutlinedIcon fontSize="small" />
                <CallOutlinedIcon fontSize="small" />
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{ borderTop: `1px solid ${colors.grey[900]}` }}
          >
            <Typography sx={{ p: "15px 0" }}>
              They really liked the demo - very intrested in our product.
            </Typography>
          </Grid>
        </Grid>
      </ListItem>
      <Divider />
      <ListItem key={"item2"} alignItems="flex-start">
        <Grid
          container
          alignItems="center"
          sx={{ display: "flex", mt: "10px" }}
        >
          <Grid item xs={2}>
            <ListItemAvatar sx={{ minWidth: "47px" }}>
              <Avatar
                sx={{
                  height: "5ch",
                  width: "5ch",
                  fontSize: "16px",
                  mt: "-9px",
                }}
              >
                <AvatarName name="Ajay Kumar" />
              </Avatar>
            </ListItemAvatar>
          </Grid>
          <Grid item xs={10}>
            <ListItemText
              sx={{ "& .MuiTypography-root": { fontWeight: 600 } }}
              primary="$ 8567"
              secondary="80%"
            />
            <ListItemSecondaryAction sx={{ top: "5ch" }}>
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
                <MenuItem>
                  <DeleteOutlineOutlinedIcon fontSize="small" />
                  &nbsp;Delete
                </MenuItem>
              </Menu>
            </ListItemSecondaryAction>
          </Grid>
          <Grid item marginTop={1}>
            <Box
              sx={{
                display: "flex",
                border: `1px solid ${colors.grey[900]}`,
                borderRadius: "10px",
                mb: "10px",
              }}
            >
              <Typography mr={1} sx={{ p: "2px 7px" }}>
                SALES
              </Typography>
              <Typography
                sx={{
                  bgcolor: OpportunityColor({ statusType: "Won" }),
                  p: "2px 8px",
                  borderTopRightRadius: "10px",
                  borderBottomRightRadius: "10px",
                  color: colors.white[500],
                }}
              >
                DEMO COMPLETED
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            marginTop={1}
            xs={12}
            sx={{ borderTop: `1px solid ${colors.grey[900]}` }}
          >
            <Box
              sx={{
                p: "15px 0",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <IconButton sx={{ p: "0px" }}>
                  <PersonOutlineOutlinedIcon />
                </IconButton>
                <Typography fontWeight={600} fontSize={15} pl={1}>
                  Vijay Shankar
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  "& > *": {
                    marginRight: "10px",
                    cursor: "pointer",
                  },
                  "& > *:last-child": {
                    marginRight: 0,
                  },
                }}
              >
                <EmailOutlinedIcon fontSize="small" />
                <ChatBubbleOutlineOutlinedIcon fontSize="small" />
                <CallOutlinedIcon fontSize="small" />
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{ borderTop: `1px solid ${colors.grey[900]}` }}
          >
            <Typography sx={{ p: "15px 0" }}>
              They really liked the demo - very intrested in our product.
            </Typography>
          </Grid>
        </Grid>
      </ListItem>
    </List>
  );
}
