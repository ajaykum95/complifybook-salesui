import * as React from "react";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  Select,
  useTheme,
} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { tokens } from "../theme";
import {
  mockedCategory,
  mockedProduct1,
  mockedProduct2,
} from "../data/mockData";

export default function ProductForm({ formExpanded, setFormExpanded }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [productList, setProductList] = React.useState([]);

  const handleChangeProduct = (event) => {
    if (event.target.value === 1) setProductList(mockedProduct1);
    else setProductList(mockedProduct2);
  };

  const handleFormExpandClick = () => {
    setFormExpanded(!formExpanded);
  };

  return (
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
        sx={{ m: 1, minWidth: 120, mt: 2, bgcolor: colors.white[900] }}
        fullWidth
      >
        <InputLabel
          fullWidth
          id="demo-controlled-open-select-label"
          size="small"
        >
          Product Category
        </InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          label="Product category"
          size="small"
          onChange={handleChangeProduct}
          fullWidth
        >
          {mockedCategory.map((category) => (
            <MenuItem key={category.id} value={category.id}>
              {category.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl
        sx={{ m: 1, minWidth: 120, mt: 2, bgcolor: colors.white[900] }}
        fullWidth
      >
        <InputLabel
          fullWidth
          id="demo-controlled-open-select-label1"
          size="small"
        >
          Product
        </InputLabel>
        <Select
          labelId="demo-controlled-open-select-label1"
          id="demo-controlled-open-select1"
          label="Product"
          size="small"
          fullWidth
        >
          {productList.map((product) => (
            <MenuItem key={product.id} value={product.id}>
              {product.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Box textAlign={"end"} width={"100%"} p={"10px 10px"}>
        <Button
          color="error"
          onClick={handleFormExpandClick}
          aria-expanded={formExpanded}
        >
          Cancel
        </Button>
        <Button variant="contained" color="success" sx={{ ml: 2 }}>
          Save
        </Button>
      </Box>
    </Box>
  );
}
