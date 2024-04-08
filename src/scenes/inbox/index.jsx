import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockedDataInbox } from "../../data/mockData";
import { Link } from "react-router-dom";
import Filter from "./Filter";
import React from "react";

const Inbox = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [selectAll, setSelectAll] = React.useState(false);
  const [selectedRows, setSelectedRows] = React.useState([]);

  const handleSelectAllChange = (event) => {
    setSelectAll(event.target.checked);
    setSelectedRows(
      event.target.checked ? mockedDataInbox.map((row) => row.id) : []
    );
  };

  const handleRowSelection = (id) => {
    const selectedIndex = selectedRows.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selectedRows, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selectedRows.slice(1));
    } else if (selectedIndex === selectedRows.length - 1) {
      newSelected = newSelected.concat(selectedRows.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selectedRows.slice(0, selectedIndex),
        selectedRows.slice(selectedIndex + 1)
      );
    }
    setSelectedRows(newSelected);
    setSelectAll(newSelected.length === mockedDataInbox.length);
  };
  const columns = [
    {
      field: "name",
      headerName: "Name",
      cellClassName: "name-column--cell",
      align: "left",
      flex: "0 1 auto",
      width: 180,
      renderCell: (params) => {
        const name = params.row.title;
        const link = `/leads/${params.row.id}`;
        return <Link to={link}>{name}</Link>;
      },
    },
    {
      field: "client",
      headerName: "Description",
      flex: 2,
      align: "left",
      valueGetter: (params) => params.row.subject,
    },
  ];

  return (
    <Box sx={{ p: "0 10px 0 10px" }}>
      <Filter
        selectAll={selectAll}
        handleSelectAllChange={handleSelectAllChange}
        selectedRows={selectedRows}
        totalInboxData={mockedDataInbox.length}
      />
      {/* <Header title="Inbox" subtitle="Managing the Inbox" /> */}
      <Box
        sx={{
          "& .MuiDataGrid-columnHeaders": {
            border: "none",
          },
          "& .MuiDataGrid-virtualScroller a": {
            // backgroundColor: colors.white[500],
            color:colors.blue[200]
          },
          "& .MuiCheckbox-root": {
            color: `${colors.white[100]} !important`,
          },
        }}
      >
        <DataGrid
          checkboxSelection
          rows={mockedDataInbox}
          columns={columns}
          onSelectionModelChange={(selection) => setSelectedRows(selection)}
          selectionModel={selectedRows}
          headerHeight={0}
          rowHeight={45}
          autoHeight={true}
          components={{
            columnHeaderWrapper: () => null,
          }}
          onCellClick={(row) => handleRowSelection(row)}
        />
      </Box>
    </Box>
  );
};

export default Inbox;
