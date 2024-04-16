import * as React from "react";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTemplate } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Link } from "react-router-dom";

const Template = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [activeTab, setActiveTab] = React.useState("email");

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedRow, setSelectedRow] = React.useState(null);

  const handleActiveData = (activeVar) => {
    setActiveTab(activeVar);
  };

  const handleMenuOpen = (event, row) => {
    setAnchorEl(event.currentTarget);
    setSelectedRow(row);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedRow(null);
  };

  const handleEdit = () => {
    // Handle edit action for selectedRow
    console.log("Edit row:", selectedRow);
    handleMenuClose();
  };

  const handleDelete = () => {
    // Handle delete action for selectedRow
    console.log("Delete row:", selectedRow);
    handleMenuClose();
  };

  const columns = [
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "type",
      headerName: "Type",
      flex: 1,
      renderCell: (params) => {
        return params.row.type;
      },
    },
    {
      field: "actions",
      headerName: "Actions",
      flex: 0.2,
      renderCell: (params) => (
        <IconButton onClick={(event) => handleMenuOpen(event, params.row)}>
          <MoreVertIcon />
        </IconButton>
      ),
    },
  ];

  return (
    <Box m="10px">
      <Header
        title="Templates"
        subtitle="List of templates for manage email and sms"
      />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 2,
        }}
      >
        <ButtonGroup
          variant="outlined"
          aria-label="Basic button group"
          sx={{
            "& .MuiButtonBase-root.active": {
              backgroundColor: colors.blueAccent[600],
              color: colors.white[500],
            },
            "& .MuiButtonBase-root": {
              color: colors.white[100],
              borderColor: colors.white[300],
            },
          }}
        >
          <Button
            className={activeTab === "email" ? "active" : ""}
            onClick={() => handleActiveData("email")}
          >
            Email(8)
          </Button>
          <Button
            className={activeTab === "sms" ? "active" : ""}
            onClick={() => handleActiveData("sms")}
          >
            SMS(5)
          </Button>
        </ButtonGroup>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          {/* add other filters */}
          <Button
            variant="outlined"
            sx={{
              height: "100%",
              textTransform: "capitalize",
            }}
          >
            <Link
              to={`/setting/templates/new-template/${activeTab}`}
              style={{ display: "flex", alignItems: "center" }}
            >
              <AddOutlinedIcon fontSize="small" sx={{ mr: 1 }} /> New Template
            </Link>
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.custom[100],
            borderBottom: "none",
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
          "& .MuiDataGrid-virtualScroller a": {
            color: colors.blue[200],
          },
        }}
      >
        <DataGrid
          rows={mockDataTemplate}
          columns={columns}
          headerHeight={40}
          rowHeight={45}
          autoHeight={true}
        />
      </Box>
      {/* Render the menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleEdit}>Edit</MenuItem>
        <MenuItem onClick={handleDelete}>Delete</MenuItem>
      </Menu>
    </Box>
  );
};

export default Template;
