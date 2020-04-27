import React, { useState, useEffect } from "react";
import HistoryGrid from "./HistoryGrid";
import Button from "@material-ui/core/Button";
import api from "../lib/api";
import { reverse, sortRows } from "./utils";

// const projectFields = ["Date", "Project ID", "Old Title", "New Title"];
// const userFields = ["Date", "User ID", "Old Name", "New Name"];
const fields = ["Date", "ID", "Old Name", "New Name"];

const styles = {
  buttonContainer: {
    textAlign: "center",
    margin: "10px 0"
  },

  fetchError: {
    color: "#c51d37",
    fontFamily: "Roboto",
    margin: "10px 0",
    fontSize: "14px"
  }
};

export default function HistoryContainer({ historyType, active }) {
  const [loading, setLoading] = useState(true);
  const [failed, setFailed] = useState(false);
  const [order, setOrder] = useState("desc");
  const [rows, setRows] = useState([]);

  useEffect(() => {
    fetchData();
  });

  const handleClickFetch = e => {
    setLoading(true);
  };

  const handleOrder = () => {
    setOrder(reverse(order));
    setRows(sortRows(rows, reverse(order)));
  };

  const fetchData = async () => {
    if (!loading) return;
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
          date: new Date(timestamp).toLocaleDateString("en-GB")
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
    <div style={{ display: active ? "block" : "none" }}>
      <HistoryGrid
        rows={rows}
        fields={fields}
        orderBy="Date"
        order={order}
        onSort={handleOrder}
      />
      <div style={styles.buttonContainer}>
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
          <div style={styles.fetchError}>
            Sorry, Your data has failed to fetch. Please try again
          </div>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}
