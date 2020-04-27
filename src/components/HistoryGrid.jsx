import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

export default function SimpleTable({ fields, rows }) {
  const classes = useStyles();
  const extendedRows = rows.map(({ id, timestamp, diff }) => {
    return {
      ...diff[0],
      id,
      date: new Date(timestamp).toLocaleDateString("en-US")
    };
  });

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            {fields.map(title => (
              <TableCell>{title}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {extendedRows.map(({ id, date, field, oldValue, newValue }) => (
            <TableRow key={id}>
              <TableCell component="th" scope="row">
                {date}
              </TableCell>
              <TableCell>{id}</TableCell>
              <TableCell>{oldValue}</TableCell>
              <TableCell>{newValue}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
