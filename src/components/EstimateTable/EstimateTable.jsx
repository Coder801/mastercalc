import React from "react";

import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";
import currencyFormatter from "../../helpers/currencyFormatter";

const createData = (stage, works, material, sum) => ({ stage, works, material, sum });

const rows = [
  createData("Выравнивание стен (черновая отделака)", 1200, 1300, 2500),
  createData("Подготовка под чистуовую отделку", 1200, 1300, 2500),
  createData("Поклейка обоев", 1200, 1300, 2500),
  createData("Итого*", 1200, 1300, 2500)
];

const EstimateTable = () => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell style={{ width: 10 }}>№</TableCell>
            <TableCell align="left">Этап</TableCell>
            <TableCell align="center">Работы</TableCell>
            <TableCell align="center">Материалы</TableCell>
            <TableCell align="center">Итого (грн)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(({ stage, works, material, sum }, key) => (
            <TableRow hover key={stage}>
              <TableCell component="th" scope="row">
                <Typography color="textSecondary">{key + 1}</Typography>
              </TableCell>
              <TableCell align="left">
                <Typography>{stage}</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography color="textSecondary">{currencyFormatter(works)}</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography color="textSecondary">{currencyFormatter(material)}</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography color="error">{currencyFormatter(sum)}</Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default EstimateTable;
