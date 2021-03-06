import React from "react";
import PropTypes from "prop-types";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import styles from "./HistoryGrid.module.css";

export const HistoryGrid = ({ fields, rows, orderBy, order, onSort }) => {
  return (
    <TableContainer className={styles.tableContainer} component={Paper}>
      <Table
        stickyHeader
        aria-label="sticky-table"
        data-testid="sticky-table"
        size="small"
      >
        <TableHead>
          <TableRow>
            {fields.map((title) => (
              <TableCell className={styles.tableCell} key={title}>
                {title === "Date" ? (
                  <TableSortLabel
                    active={orderBy === title}
                    direction={orderBy === title ? order : "asc"}
                    onClick={onSort}
                    data-testid="sort-button"
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
          {rows.map(({ id, date, oldValue, newValue }) => (
            <TableRow key={id} data-testid="table-row">
              <TableCell
                className={styles.tableCell}
                component="th"
                scope="row"
              >
                {date}
              </TableCell>
              <TableCell className={styles.tableCell}>{oldValue}</TableCell>
              <TableCell className={styles.tableCell}>{newValue}</TableCell>
              <TableCell className={styles.tableCell}>{id}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

HistoryGrid.propTypes = {
  fields: PropTypes.array.isRequired,
  rows: PropTypes.array.isRequired,
};

export default HistoryGrid;
