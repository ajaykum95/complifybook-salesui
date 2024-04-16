import { useTheme } from "@mui/material";
import { Box, Typography } from "@mui/material";
import { tokens } from "../theme";

const ProgressSlider = ({ sliderWidth }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box sx={{ width: "100%", height: "20px", bgcolor: colors.white[400] }}>
      <Box
        sx={{
          width: `${sliderWidth}%`,
          height: "20px",
          bgcolor: colors.blueAccent[700],
        }}
      >
        <Typography sx={{ textAlign: "center", color: colors.white[500] }}>
          {sliderWidth}%
        </Typography>
      </Box>
    </Box>
  );
};
export default ProgressSlider;
