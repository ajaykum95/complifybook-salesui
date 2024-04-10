import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataLeads } from "../../data/mockData";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import MultiContact from "./MultiContact";

const Leads = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    {
      field: "name",
      headerName: "Lead",
      flex: 1,
      cellClassName: "name-column--cell",
      align: "left",
      renderCell: (params) => {
        const name = params.value;
        const link = `/leads/${params.row.id}`; // Assuming profile links are like /team/{id}
        return <Link to={link}>{name}</Link>;
      },
    },
    {
      field: "client",
      headerName: "Client",
      flex: 1,
      align: "left",
      valueGetter: (params) => params.row.client.name,
    },
    {
      field: "contacts",
      headerName: "Contacts",
      flex: 1,
      align: "left",
      renderCell: (params) => {
        return <MultiContact contacts={params.row.contacts} />;
      },
    },
    {
      field: "status",
      headerName: "Status",
      align: "left",
    },
  ];

  return (
    <Box m="10px">
      <Header title="Leads" subtitle="Managing the Leads" />
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
          checkboxSelection
          rows={mockDataLeads}
          columns={columns}
          headerHeight={40}
          rowHeight={45}
          autoHeight={true}
        />
      </Box>
    </Box>
  );
};

export default Leads;
