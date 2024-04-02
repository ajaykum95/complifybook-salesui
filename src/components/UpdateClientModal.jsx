import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
  useTheme,
} from "@mui/material";
import { tokens } from "../theme";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function UpdateClientModal({ openModal, handleOpenModal }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box>
      <Modal
        open={openModal}
        onClose={handleOpenModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            component="form"
            noValidate
            autoComplete="off"
            p={"10px 0px"}
            sx={{
              display: "flex",
              flexWrap: "wrap",
              bgcolor: colors.greenAccent[900],
              "& .MuiInputLabel-root": { color: colors.white[100] },
            }}
          >
            <FormControl
              fullWidth
              sx={{ m: 1, mb: 1, bgcolor: colors.white[900] }}
            >
              <InputLabel
                htmlFor="outlined-task-description"
                variant="outlined"
                size="small"
              >
                Client Name
              </InputLabel>
              <OutlinedInput
                id="outlined-task-description"
                label="Client Name"
                size="small"
              />
            </FormControl>
            <FormControl
              sx={{ m: 1, width: "100%", bgcolor: colors.white[900] }}
              fullWidth
            >
              <InputLabel id="demo-controlled-open-select-label1" size="small">
                Industry Type
              </InputLabel>
              <Select
                labelId="demo-controlled-open-select-label1"
                id="demo-controlled-open-select1"
                label="Industry Type"
                size="small"
                fullWidth
              >
                <MenuItem key={"industryType1"} value={1}>
                  Software Development
                </MenuItem>
                <MenuItem key={"industryType2"} value={2}>
                  Agriculture
                </MenuItem>
              </Select>
            </FormControl>
            <Box sx={{ width: "100%", display: "flex", alignItems: "center" }}>
              <TextField
                variant="outlined"
                label="PAN"
                size="small"
                id="outlined-start-adornment"
                sx={{ m: 1, width: "100%", bgcolor: colors.white[900] }}
              />
              <TextField
                variant="outlined"
                label="GST NO."
                size="small"
                id="outlined-start-adornment"
                sx={{ m: 1, width: "100%", bgcolor: colors.white[900] }}
              />
            </Box>
            <FormControl
              fullWidth
              sx={{ m: 1, mb: 1, bgcolor: colors.white[900] }}
            >
              <InputLabel
                htmlFor="outlined-client-website"
                variant="outlined"
                size="small"
              >
                Website URL
              </InputLabel>
              <OutlinedInput
                id="outlined-client-website"
                label="Client Name"
                size="small"
              />
            </FormControl>
            <Box sx={{ width: "100%", display: "flex", alignItems: "center" }}>
              <FormControl
                sx={{ m: 1, width: "100%", bgcolor: colors.white[900] }}
              >
                <InputLabel
                  id="demo-controlled-open-select-country"
                  size="small"
                >
                  Country
                </InputLabel>
                <Select
                  labelId="demo-controlled-open-select-country"
                  id="demo-controlled-open-country"
                  label="Country"
                  size="small"
                >
                  <MenuItem key={"country1"} value={1}>
                    India
                  </MenuItem>
                  <MenuItem key={"country2"} value={2}>
                    USA
                  </MenuItem>
                </Select>
              </FormControl>
              <FormControl
                sx={{ m: 1, width: "100%", bgcolor: colors.white[900] }}
              >
                <InputLabel id="demo-controlled-open-select-state" size="small">
                  State
                </InputLabel>
                <Select
                  labelId="demo-controlled-open-select-state"
                  id="demo-controlled-open-state"
                  label="State"
                  size="small"
                >
                  <MenuItem key={"state1"} value={1}>
                    Bihar
                  </MenuItem>
                  <MenuItem key={"state2"} value={2}>
                    UP
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ width: "100%", display: "flex", alignItems: "center" }}>
              <TextField
                variant="outlined"
                label="City"
                size="small"
                id="outlined-start-city"
                sx={{ m: 1, width: "100%", bgcolor: colors.white[900] }}
              />
              <TextField
                variant="outlined"
                label="Pin Code."
                size="small"
                id="outlined-start-pin-code"
                sx={{ m: 1, width: "100%", bgcolor: colors.white[900] }}
              />
            </Box>
            <FormControl
              sx={{ m: 1, minWidth: 120, mt: 1, bgcolor: colors.white[900] }}
              fullWidth
            >
              <TextField
                id="outlined-multiline-static"
                label="Address"
                multiline
                rows={2}
              />
            </FormControl>
            <Box textAlign={"end"} width={"100%"} p={"10px 10px"}>
              <Button color="error">Cancel</Button>
              <Button variant="contained" color="success" sx={{ ml: 2 }}>
                Save
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}
