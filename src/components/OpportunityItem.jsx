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
  const [hoveredItem, setHoveredItem] = React.useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: colors.white[900] }}>
      <ListItem
        key={"item1"}
        alignItems="flex-start"
        onMouseEnter={() => setHoveredItem("item1")}
        onMouseLeave={() => setHoveredItem(null)}
      >
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
          </Grid>
          <Grid item marginTop={1}>
            <Box
              sx={{
                display: "flex",
                border: `1px solid ${colors.grey[900]}`,
                borderRadius: "10px",
                p: "4px",
              }}
            >
              <Typography mr={1}>SALES</Typography>
              <Typography
                sx={{ bgcolor: OpportunityColor({ statusType: "Active" }) }}
              >
                DEMO SCHEDULED
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem
        key={"item2"}
        alignItems="flex-start"
        onMouseEnter={() => setHoveredItem("item2")}
        onMouseLeave={() => setHoveredItem(null)}
      >
        <ListItemAvatar>
          <Avatar>
            <AvatarName name="Travis Howard" />
          </Avatar>
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
