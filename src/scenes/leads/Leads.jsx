import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataLeads } from "../../data/mockData";
import Header from "../../components/Header";
import { Link } from "react-router-dom";

const Leads = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    {
      field: "name",
      headerName: "Name",
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
      field: "status",
      headerName: "Status",
      align: "left",
    },
  ];

  return (
    <Box m="20px">
      <Header title="Leads" subtitle="Managing the Leads" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid checkboxSelection rows={mockDataLeads} columns={columns} />
      </Box>
    </Box>
  );
};

export default Leads;
