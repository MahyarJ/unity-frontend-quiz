import React, { useState, useEffect } from "react";
import HistoryGrid from "./HistoryGrid";
import Button from "@material-ui/core/Button";
import api from "../lib/api";
import { reverse, sortRows } from "./utils";
import styles from "./HistoryContainer.module.css";

// const projectFields = ["Date", "Project ID", "Old Title", "New Title"];
// const userFields = ["Date", "User ID", "Old Name", "New Name"];
const fields = ["Date", "ID", "Old Name", "New Name"];

const HistoryContainer = ({ historyType }) => {
  const [loading, setLoading] = useState(true);
  const [allowFetch, setAllowFetch] = useState(true);
  const [failed, setFailed] = useState(false);
  const [order, setOrder] = useState("desc");
  const [rows, setRows] = useState([]);

  useEffect(() => {
    fetchData();
  });

  const handleClickFetch = (e) => {
    setAllowFetch(true);
    setLoading(true);
  };

  const handleOrder = () => {
    setOrder(reverse(order));
    setRows(sortRows(rows, reverse(order)));
  };

  const fetchData = async () => {
    if (!allowFetch) return;
    setAllowFetch(false);
    const apiCall =
      historyType === "projects" ? api.getProjectsDiff : api.getUsersDiff;
    try {
      const result = await apiCall();
      setLoading(false);
      setFailed(false);
      console.log(result);

      const newRows = result.data.map(({ id, timestamp, diff }) => {
        return {
          ...diff[0],
          id,
          timestamp,
          date: new Date(timestamp).toLocaleDateString("en-GB"),
        };
      });

      setRows(sortRows([...rows, ...newRows]), order);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setFailed(true);
    }
  };

  return (
    <>
      <HistoryGrid
        rows={rows}
        fields={fields}
        orderBy="Date"
        order={order}
        onSort={handleOrder}
      />
      <div className={styles.buttonContainer}>
        <Button
          variant="contained"
          color="primary"
          fullWidth={true}
          onClick={handleClickFetch}
          disabled={loading}
        >
          {loading ? "Fetching..." : "Fetch More"}
        </Button>
        {failed ? (
          <div className={styles.fetchError}>
            Sorry, Your data has failed to fetch. Please try again
          </div>
        ) : (
          <div />
        )}
      </div>
    </>
  );
};

export default HistoryContainer;
