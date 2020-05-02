import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import HistoryGrid from "./HistoryGrid";
import Button from "@material-ui/core/Button";
import { reverse, sortRows, flattenRows } from "./utils";
import styles from "./HistoryContainer.module.css";

export const HistoryContainer = ({ fields, apiCall }) => {
  const [loading, setLoading] = useState(false);
  const [failed, setFailed] = useState(false);
  const [total, setTotal] = useState(0);

  const { order, rows, setRows, handleOrder } = useOrder();
  const toLoad = total - rows.length;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    if (loading) return;
    setLoading(true);

    try {
      const { data, total } = await apiCall();
      setFailed(false);
      setRows(sortRows([...rows, ...flattenRows(data)], order));
      setTotal(total);
    } catch (error) {
      console.log(error);
      setFailed(true);
    } finally {
      setLoading(false);
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
          disabled={loading || !toLoad}
        >
          <ButtonContent loading={loading} toLoad={toLoad} />
        </Button>
        {failed && (
          <div className={styles.fetchError}>
            Sorry, Your data has failed to fetch. Please try again
          </div>
        )}
      </div>
    </>
  );
};

const ButtonContent = ({ loading, toLoad }) => {
  return loading
    ? "Fetching..."
    : toLoad
    ? `Fetch More (${toLoad})`
    : "No More Data To Fetch";
};

const useOrder = () => {
  const [order, setOrder] = useState("desc");
  const [rows, setRows] = useState([]);
  const handleOrder = () => {
    setOrder(reverse(order));
    setRows(sortRows(rows, reverse(order)));
  };

  return { order, rows, setRows, handleOrder };
};

HistoryContainer.propTypes = {
  fields: PropTypes.array.isRequired,
  apiCall: PropTypes.func.isRequired,
};

export default HistoryContainer;
