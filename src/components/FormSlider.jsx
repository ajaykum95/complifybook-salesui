import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import { colors, useTheme } from "@mui/material";
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
          color: colors.white[400],
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
          color: colors.white[400], // Change the color of the slider track
          "& .MuiSlider-thumb": {
            color: colors.white[400],
            width: 16, // Set the width of the thumb
            height: 16, // Set the height of the thumb
          },
        }}
      />
    </Box>
  );
}
