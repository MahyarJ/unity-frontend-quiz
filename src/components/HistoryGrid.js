import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import styles from "./HistoryGrid.module.css";

const HistoryGrid = ({ fields, rows, orderBy, order, onSort }) => {
  return (
    <TableContainer component={Paper}>
      <Table className={styles.tableContainer} size="small">
        <TableHead>
          <TableRow>
            {fields.map((title) => (
              <TableCell key={title}>
                {title === "Date" ? (
                  <TableSortLabel
                    active={orderBy === title}
                    direction={orderBy === title ? order : "asc"}
                    onClick={onSort}
                  >
                    {title}
                  </TableSortLabel>
                ) : (
                  title
                )}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(({ id, date, field, oldValue, newValue }) => (
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
};

export default HistoryGrid;
