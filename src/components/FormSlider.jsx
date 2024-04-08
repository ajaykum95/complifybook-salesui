import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material";
import { tokens } from "../theme";

const MAX = 100;
const MIN = 0;
const marks = [
  {
    value: MIN,
    label: "",
  },
  {
    value: MAX,
    label: "",
  },
];

export default function FormSlider({ sliderWidth }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [val, setVal] = React.useState(MAX / 2);
  const handleChange = (_, newValue) => {
    setVal(newValue);
  };

  return (
    <Box sx={{ width: sliderWidth }}>
      <Typography
        sx={{
          textAlign: "center",
          position: "absolute",
          top: "-8px",
          color: colors.white[100],
          fontSize: "10px",
        }}
      >
        Confidence: {val} %
      </Typography>
      <Slider
        marks={marks}
        step={5}
        value={val}
        valueLabelDisplay="auto"
        min={MIN}
        max={MAX}
        onChange={handleChange}
        sx={{
          p: "0px",
          mt: "17px",
          color: colors.white[400],
          "& .MuiSlider-thumb": {
            color: colors.white[400],
            width: 13,
            height: 13,
          },
        }}
      />
    </Box>
  );
}
