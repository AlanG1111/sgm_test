import React from "react";
import { TableCell, TableHead, TableRow } from "@mui/material";

const THead: React.FC = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell rowSpan={2} align='center'>
          Regions
        </TableCell>
        <TableCell colSpan={3} align='center'>
          2017
        </TableCell>
        <TableCell colSpan={3} align='center'>
          2018
        </TableCell>
        <TableCell colSpan={3} align='center'>
          2019
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell align='center'>xx</TableCell>
        <TableCell align='center'>yy</TableCell>
        <TableCell align='center'>zz</TableCell>
        <TableCell align='center'>xx</TableCell>
        <TableCell align='center'>yy</TableCell>
        <TableCell align='center'>zz</TableCell>
        <TableCell align='center'>xx</TableCell>
        <TableCell align='center'>yy</TableCell>
        <TableCell align='center'>zz</TableCell>
      </TableRow>
    </TableHead>
  );
};

export default THead;
