import React, { useState } from "react";
import { TableBody, TableCell, TableRow } from "@mui/material";
import Data from "../../data/data";
import Popup from "../Popup";

const TBody: React.FC = () => {
  const rows: Array<any> = Object.entries(Data);
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    window.open("popup", "", "width=800,height=400");
  };
  return (
    <TableBody onClick={(e: React.MouseEvent<HTMLElement>) => handleClick(e)}>
      {rows.map(([region, { G }]: any) => (
        <TableRow key={region + "id"}>
          <TableCell align='center' key={region}>
            {region}
          </TableCell>

          <TableCell align='center'>{G["2017"]?.XX.value || 0}</TableCell>
          <TableCell align='center'>{G["2017"]?.YY.value || 0}</TableCell>
          <TableCell align='center'>{G["2017"]?.ZZ.value || 0}</TableCell>

          <TableCell align='center'>{G["2018"]?.XX.value || 0}</TableCell>
          <TableCell align='center'>{G["2018"]?.YY.value || 0}</TableCell>
          <TableCell align='center'>{G["2018"]?.ZZ.value || 0}</TableCell>

          <TableCell align='center'>{G["2019"]?.XX.value || 0}</TableCell>
          <TableCell align='center'>{G["2019"]?.YY.value || 0}</TableCell>
          <TableCell align='center'>{G["2019"]?.ZZ.value || 0}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};

export default TBody;
