import * as React from "react";
import { Box, Icon, IconButton, useTheme } from "@mui/material";
import { tokens } from "../theme";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Typography from "@mui/material/Typography";
import DraftsOutlinedIcon from "@mui/icons-material/DraftsOutlined";
import SegmentOutlinedIcon from "@mui/icons-material/SegmentOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import ReplyAllOutlinedIcon from "@mui/icons-material/ReplyAllOutlined";
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

export default function EmailBoxAccordian() {
  const [formExpanded, setFormExpanded] = React.useState(false);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handleFormExpandClick = () => {
    setFormExpanded(!formExpanded);
  };

  return (
    <Card
      sx={{
        width: "100%",
        border: "none",
        boxShadow: "none",
        borderTop: `1px solid ${colors.white[400]}`,
      }}
    >
      <CardActions
        disableSpacing
        expand={formExpanded ? "true" : "false"}
        aria-expanded={formExpanded ? "true" : "false"}
        onClick={handleFormExpandClick}
        sx={{
          p: "2px 0px 2px 10px",
          borderBottom: `1px solid ${colors.white[400]}`,
        }}
      >
        <Box
          sx={{
            cursor: "pointer",
            alignItems: "center",
            display: "flex",
            width: "100%",
          }}
        >
          <Box sx={{ maxWidth: "30%", display: "flex", alignItems: "center" }}>
            <Typography
              sx={{
                width: 5,
                height: 5,
                borderRadius: 2,
                bgcolor: colors.white[300],
                mr: 1,
              }}
            ></Typography>
            <Typography sx={{ color: colors.white[300] }}>
              Ajay Kumar
            </Typography>
            <IconButton sx={{ p: "3px" }}>
              <DraftsOutlinedIcon fontSize="small" />
            </IconButton>
            <IconButton sx={{ p: "3px" }}>
              <SegmentOutlinedIcon fontSize="small" />
            </IconButton>
          </Box>
          <Box
            sx={{
              maxWidth: "70%",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
              }}
            >
              Hi Gob, I'm Liz with Wayne Enterprises. We help inside sales teams
              close more deals. I want
            </Typography>
          </Box>
        </Box>
      </CardActions>
      <Collapse in={formExpanded} timeout="auto" unmountOnExit>
        <Box component="form" noValidate autoComplete="off">
          <Box
            sx={{
              borderBottom: `1px solid ${colors.white[400]}`,
              p: "5px 0 5px 0",
            }}
          >
            <Box
              sx={{
                display: "flex",
                p: "0 10px 0 10px",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    width: 5,
                    height: 5,
                    borderRadius: 2,
                    bgcolor: colors.white[300],
                    mr: 1,
                  }}
                ></Typography>
                <Typography sx={{ fontWeight: 600 }}>From :</Typography>
                <Typography sx={{ ml: 1, alignItems: "center" }}>
                  Ajay Kumar &lt;ajay30935@gmail.com&gt;
                </Typography>
                <DraftsOutlinedIcon
                  fontSize="small"
                  sx={{ ml: 1, color: colors.white[200] }}
                />
              </Box>
              <Typography sx={{ color: colors.white[300] }}>
                7 days ago
              </Typography>
            </Box>
            <Box
              sx={{
                p: "0px 10px 0 22px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography sx={{ fontWeight: 600 }}>To :</Typography>
                <Typography sx={{ ml: 1, alignItems: "center" }}>
                  vijay35@gmail.com
                </Typography>
              </Box>
              <Box>
                <IconButton
                  sx={{ color: colors.white[300], p: "2px", mr: "2px" }}
                >
                  <ReplyOutlinedIcon fontSize="small" />
                </IconButton>
                <IconButton
                  sx={{ color: colors.white[300], p: "2px", mr: "2px" }}
                >
                  <ReplyAllOutlinedIcon fontSize="small" />
                </IconButton>
                <IconButton
                  sx={{ color: colors.white[300], p: "2px", mr: "2px" }}
                >
                  <ArrowRightAltOutlinedIcon fontSize="small" />
                </IconButton>
                <IconButton sx={{ color: colors.white[300], p: "2px" }}>
                  <DeleteOutlineOutlinedIcon fontSize="small" />
                </IconButton>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              p: "15px 10px 15px 22px",
            }}
          >
            <Typography>Hey Gob,</Typography>
            <Typography sx={{ mt: 1 }}>
              It was awesome meeting you in Vegas at the Magicians Conference.
              Thanks again for stopping by our booth and checking out a demo. I
              loved our conversition about your passion for Segways.
            </Typography>
            <Typography sx={{ mt: 1 }}>
              I'm reaching to continue the conversation.
            </Typography>
            <Typography sx={{ mt: 1 }}>
              Do you have 10 minutes to talk tomorrow?
            </Typography>
            <Typography sx={{ mt: 1 }}>Cheers,</Typography>
            <Typography sx={{ mt: 1 }}>Ajay Kumar</Typography>
          </Box>
        </Box>
      </Collapse>
    </Card>
  );
}
