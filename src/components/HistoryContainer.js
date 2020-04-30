import React, { useState, useEffect } from "react";
import HistoryGrid from "./HistoryGrid";
import Button from "@material-ui/core/Button";
import api from "../lib/api";
import { reverse, sortRows, flattenRows } from "./utils";
import styles from "./HistoryContainer.module.css";

export const HistoryContainer = ({ historyType, fields }) => {
  const [loading, setLoading] = useState(false);
  const [failed, setFailed] = useState(false);
  const [order, setOrder] = useState("desc");
  const [rows, setRows] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const handleOrder = () => {
    setOrder(reverse(order));
    setRows(sortRows(rows, reverse(order)));
  };

  const fetchData = async () => {
    if (loading) return;
    setLoading(true);
    const apiCall =
      historyType === "projects" ? api.getProjectsDiff : api.getUsersDiff;
    try {
      const result = await apiCall();
      setLoading(false);
      setFailed(false);
      console.log(result);
      setRows(sortRows([...rows, ...flattenRows(result.data)]), order);
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
          onClick={fetchData}
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
