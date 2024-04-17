import * as React from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";

const NewTemplate = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { type } = useParams();
  const [templateType, setTemplateType] = React.useState(1);
  const fileInputRef = React.useRef(null);
  const [attachments, setAttachments] = React.useState([]);

  const handleBoxClick = () => {
    fileInputRef.current.click(); // Trigger a click event on the file input
  };

  const handleFileChange = (event) => {
    const files = event.target.files;
    const newAttachments = [...attachments];
    for (let i = 0; i < files.length; i++) {
      newAttachments.push(files[i]);
    }
    setAttachments(newAttachments);
  };

  const handleChangeTemplateType = (event) => {
    setTemplateType(event.target.value);
  };

  return (
    <Box sx={{ m: "10px" }}>
      <Header
        title={`New ${type} Template`}
        subtitle={`Create a New ${type} Template`}
      />
      {type === "email" && (
        <Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <TextField
              variant="outlined"
              label="Template Name"
              type="text"
              size="small"
              id="outlined-start-adornment"
              sx={{ width: "100%", bgcolor: colors.white[900] }}
            />
            <FormControl sx={{ width: "100%", bgcolor: colors.white[900] }}>
              <InputLabel size="small" htmlFor="outlined-adornment-amount">
                Subject
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-amount"
                sx={{ pl: "0px" }}
                size="small"
                type="text"
                endAdornment={
                  <InputAdornment position="start" sx={{ mr: "-14px" }}>
                    <Select
                      labelId="currency-select-label"
                      id="currency-select"
                      variant="outlined"
                      size="small"
                      sx={{
                        "& fieldset": {
                          borderTop: "none",
                          borderBottom: "none",
                          borderRight: "none",
                          borderRadius: 0,
                        },
                      }}
                      displayEmpty
                    >
                      <InputLabel>{"{ }"}</InputLabel>
                      <MenuItem value="lead.display_name">
                        lead.display_name
                      </MenuItem>
                      <MenuItem value="lead.name">lead.name</MenuItem>
                      <MenuItem value="lead.descriptione">
                        lead.description
                      </MenuItem>
                      <MenuItem value="lead.url">lead.url</MenuItem>
                    </Select>
                  </InputAdornment>
                }
                label="Subject"
              />
            </FormControl>
          </Box>
          <FormControl
            sx={{ width: "100%", mt: 2, bgcolor: colors.white[900] }}
            fullWidth
          >
            <TextField
              id="outlined-multiline-static"
              label="Body"
              multiline
              rows={15}
            />
          </FormControl>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              gap: 1,
              mt: 2,
            }}
          >
            <FormControl sx={{ width: "100%" }}>
              <label htmlFor="upload-photo">
                <input
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  style={{ display: "none" }}
                  id="attachment-file"
                  name="upload-photo"
                  type="file"
                  multiple
                />
                <Typography sx={{ mb: 1 }}>Attachments</Typography>
                <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      color: colors.greenAccent[300],
                      cursor: "pointer",
                    }}
                    onClick={handleBoxClick}
                  >
                    <AttachFileOutlinedIcon fontSize="small" />
                    Attach a file
                  </Box>
                  <Typography>
                    {attachments.length}{" "}
                    {attachments.length <= 1 ? "file" : "files"} attached
                  </Typography>
                </Box>
              </label>
            </FormControl>

            <FormControl sx={{ width: "100%", minWidth: 120 }} size="small">
              <InputLabel id="demo-select-small-label">Type</InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={templateType}
                label="Type"
                onChange={handleChangeTemplateType}
              >
                <MenuItem value={1}>Shared</MenuItem>
                <MenuItem value={2}>Private</MenuItem>
                <MenuItem value={3}>Archived</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
      )}
      {type === "sms" && (
        <Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <TextField
              variant="outlined"
              label="Template Name"
              type="text"
              size="small"
              id="outlined-start-adornment"
              sx={{ width: "100%", bgcolor: colors.white[900] }}
            />
            <FormControl sx={{ width: "100%", minWidth: 120 }} size="small">
              <InputLabel id="demo-select-small-label">Type</InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={templateType}
                label="Type"
                onChange={handleChangeTemplateType}
              >
                <MenuItem value={1}>Shared</MenuItem>
                <MenuItem value={2}>Private</MenuItem>
                <MenuItem value={3}>Archived</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <FormControl
            sx={{ width: "100%", mt: 2, bgcolor: colors.white[900] }}
            fullWidth
          >
            <TextField
              id="outlined-multiline-static"
              label="Body"
              multiline
              rows={15}
            />
          </FormControl>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Select
              labelId="currency-select-label"
              id="currency-select"
              variant="outlined"
              size="small"
              sx={{
                width: "100%",
                "& fieldset": {
                  borderRadius: 0,
                },
              }}
              displayEmpty
            >
              <InputLabel>{"{ }"}</InputLabel>
              <MenuItem value="lead.display_name">lead.display_name</MenuItem>
              <MenuItem value="lead.name">lead.name</MenuItem>
              <MenuItem value="lead.descriptione">lead.description</MenuItem>
              <MenuItem value="lead.url">lead.url</MenuItem>
            </Select>
          </Box>
        </Box>
      )}
      <Box
        sx={{
          width: "100%",
          p: "10px 10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "end",
          gap: 2,
        }}
      >
        <Button color="error">Cancel</Button>
        <Button variant="contained" color="success">
          Save
        </Button>
      </Box>
    </Box>
  );
};
export default NewTemplate;
