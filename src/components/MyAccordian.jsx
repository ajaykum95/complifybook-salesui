import * as React from "react";
import {
  Box,
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  useTheme,
} from "@mui/material";
import { tokens } from "../theme";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import TaskItem from "./TaskItem";
import TaskForm from "./TaskForm";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function MyAccordian({ name, qty }) {
  const [formExpanded, setFormExpanded] = React.useState(false);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handleFormExpandClick = () => {
    setFormExpanded(!formExpanded);
  };

  return (
    <Card sx={{ maxWidth: 345, backgroundColor: colors.primary[400] }}>
      <CardActions
        disableSpacing
        sx={{
          borderBottom: `1px solid ${colors.grey[800]}`,
          bgcolor: colors.greenAccent[900],
        }}
      >
        <Typography variant="h5" fontWeight={"600"} pl={"10px"}>
          {name}&nbsp;&nbsp;
          {qty}
        </Typography>
        <ExpandMore
          expand={formExpanded}
          onClick={handleFormExpandClick}
          aria-expanded={formExpanded}
          aria-label="Add"
        >
          <AddIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={formExpanded} timeout="auto" unmountOnExit>
        <TaskForm
          formExpanded={formExpanded}
          setFormExpanded={setFormExpanded}
        />
      </Collapse>
      <Box>
        <TaskItem />
      </Box>
    </Card>
  );
}
