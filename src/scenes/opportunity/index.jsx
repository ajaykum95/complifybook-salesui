import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataOpportunity } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import ProgressSlider from "../../components/ProgressSlider";

const Opportunity = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    {
      field: "leadName",
      headerName: "Lead",
      flex: 1,
      cellClassName: "name-column--cell",
      renderCell: (params) => {
        return params.row.lead.name;
      },
    },
    {
      field: "value",
      headerName: "Value",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "confidence",
      headerName: "Confidence",
      flex: 1,
      renderCell: (params) => {
        return <ProgressSlider sliderWidth={params.row.confidence} />;
      },
    },
    {
      field: "closeDate",
      headerName: "Close Date",
      flex: 1,
    },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
    },
    {
      field: "userName",
      headerName: "User",
      flex: 1,
      renderCell: (params) => {
        return params.row.user.name;
      },
    },
  ];

  return (
    <Box m="10px">
      <Header
        title="Opportunities"
        subtitle="List of Opportunities Need close date"
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
        }}
      >
        <DataGrid
          rows={mockDataOpportunity}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
          autoHeight={true}
          headerHeight={40}
          rowHeight={45}
        />
      </Box>
    </Box>
  );
};

export default Opportunity;
