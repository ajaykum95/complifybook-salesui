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
    <Box m="10px">
      <Header title="Leads" subtitle="Managing the Leads" />
      <Box
        m="10px 0 0 0"
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
            backgroundColor: colors.custom[100],
            borderBottom: "none",
            color: colors.white[100],
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.white[500],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
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
