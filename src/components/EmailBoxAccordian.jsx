import * as React from "react";
import { Box, IconButton, useTheme } from "@mui/material";
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

export default function EmailBoxAccordian({ emailActivity }) {
  const [formExpanded, setFormExpanded] = React.useState(false);
  const [emailOpen, setEmailOpen] = React.useState(true);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handleFormExpandClick = () => {
    setFormExpanded(!formExpanded);
    setEmailOpen(!emailOpen);
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
      {emailOpen && (
        <CardActions
          disableSpacing
          expand={formExpanded ? "true" : "false"}
          aria-expanded={formExpanded ? "true" : "false"}
          onClick={handleFormExpandClick}
          sx={{
            p: "2px 10px 2px 10px",
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
            <Box sx={{ width: "20%", display: "flex", alignItems: "center" }}>
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
                {emailActivity.fromName}
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
                width: "80%",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  sx={{
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                    width: "85%",
                  }}
                >
                  {emailActivity.shortMessage}
                </Typography>
                <Typography sx={{ color: colors.white[300] }}>
                  7 days ago
                </Typography>
              </Box>
            </Box>
          </Box>
        </CardActions>
      )}
      <Collapse in={formExpanded} timeout="auto" unmountOnExit>
        <Box component="form" noValidate autoComplete="off">
          <Box
            sx={{
              borderBottom: `1px solid ${colors.white[400]}`,
              p: "5px 0 5px 0",
            }}
          >
            <Box
              expand={formExpanded ? "true" : "false"}
              aria-expanded={formExpanded ? "true" : "false"}
              onClick={handleFormExpandClick}
              sx={{
                display: "flex",
                p: "0 10px 0 10px",
                alignItems: "center",
                justifyContent: "space-between",
                cursor: "pointer",
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
                  {emailActivity.fromName} &lt;{emailActivity.fromEmail}&gt;
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
                  {emailActivity.toEmail}
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
            dangerouslySetInnerHTML={{ __html: emailActivity.messageBody }}
          ></Box>
        </Box>
      </Collapse>
    </Card>
  );
}
