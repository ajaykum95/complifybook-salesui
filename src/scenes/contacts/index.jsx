import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme, Typography } from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import IconButton from "@mui/material/IconButton";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";

const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 0.6,
      renderCell: (params) => {
        return (
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography>{params.row.phone}</Typography>
            <IconButton>
              <PhoneOutlinedIcon fontSize="small" />
            </IconButton>
          </Box>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      renderCell: (params) => {
        return (
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography>{params.row.email}</Typography>
            <IconButton>
              <EmailOutlinedIcon fontSize="small" />
            </IconButton>
          </Box>
        );
      },
    },
    {
      field: "client",
      headerName: "Client",
      flex: 1,
      renderCell: (params) => {
        return params.row.client.name;
      },
    },
  ];

  return (
    <Box m="10px">
      <Header
        title="CONTACTS"
        subtitle="List of Contacts for Future Reference"
      />
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
          rows={mockDataContacts}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
          headerHeight={40}
          rowHeight={45}
          autoHeight={true}
        />
      </Box>
    </Box>
  );
};

export default Contacts;
