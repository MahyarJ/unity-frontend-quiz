import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import HistoryGrid from "./HistoryGrid";
import Button from "@material-ui/core/Button";
import { reverse, sortRows, flattenRows } from "./utils";
import styles from "./HistoryContainer.module.css";

export const HistoryContainer = ({ fields, apiCall }) => {
  const [loading, setLoading] = useState(false);
  const [failed, setFailed] = useState(false);
  const [order, setOrder] = useState("desc");
  const [rows, setRows] = useState([]);
  const [total, setTotal] = useState(0);

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

    try {
      const { data, total } = await apiCall();
      setLoading(false);
      setFailed(false);
      setRows(sortRows([...rows, ...flattenRows(data)]), order);
      setTotal(total);
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
          disabled={loading || !(total - rows.length)}
        >
          {loading
            ? "Fetching..."
            : rows.length < total
            ? `Fetch More (${total - rows.length})`
            : "No More Data To Fetch"}
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

HistoryContainer.propTypes = {
  fields: PropTypes.array.isRequired,
  apiCall: PropTypes.func.isRequired,
};

export default HistoryContainer;
