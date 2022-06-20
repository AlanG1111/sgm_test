import React from "react";
import { Table, TableContainer } from "@mui/material";
import THead from "../TableHead";
import TBody from "../TBody";

const MainTable: React.FC = () => {
  return (
    <TableContainer sx={{ minWidth: 850 }}>
      <Table stickyHeader aria-label='sticky table'>
        <THead />
        <TBody />
      </Table>
    </TableContainer>
  );
};

export default MainTable;
