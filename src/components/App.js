import React, { useState, useEffect } from "react";
import api from "../lib/api";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import HistoryGrid from "./HistoryGrid";
import Chip from "@material-ui/core/Chip";
import FaceIcon from "@material-ui/icons/Face";
import TimelapseIcon from "@material-ui/icons/Timelapse";

const styles = {
  buttonContainer: {
    textAlign: "center",
    margin: "10px 0"
  },

  chip: {
    margin: "10px 5px"
  },

  fetchError: {
    color: "#c51d37",
    fontFamily: "Roboto",
    margin: "10px 0",
    fontSize: "14px"
  }
};

// const projectFields = ["Date", "Project ID", "Old Title", "New Title"];
// const userFields = ["Date", "User ID", "Old Name", "New Name"];
const fields = ["Date", "ID", "Old Name", "New Name"];

export const App = () => {
  const [loading, setLoading] = useState(true);
  const [failed, setFailed] = useState(false);
  const [userRows, setUserRows] = useState([]);
  const [projectRows, setProjectRows] = useState([]);
  const [historyType, setHistoryType] = useState("users");

  useEffect(() => {
    fetchData();
  });

  const handleClickFetch = e => {
    setLoading(true);
  };

  const handleUsersHistoryClick = () => {
    setHistoryType("users");
  };

  const handleProjectsHistoryClick = () => {
    setHistoryType("projects");
  };

  const fetchData = async () => {
    if (!loading) return;
    const apiCall =
      historyType === "projects" ? api.getProjectsDiff : api.getUsersDiff;
    const setRows = historyType === "projects" ? setProjectRows : setUserRows;
    try {
      const result = await apiCall();
      setLoading(false);
      setFailed(false);
      // const { code, data, limit, offset, total } = result;
      console.log(result);

      const prevRows = historyType === "projects" ? projectRows : userRows;
      setRows([...prevRows, ...result.data]);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setFailed(true);
    }
  };

  return (
    <Container className="app" fixed>
      <Box data-testid="app-box" m={2}>
        <Typography>
          <h1>Users and Projects History Panel</h1>
        </Typography>
        <div style={styles.chipContainer}>
          <Chip
            icon={<FaceIcon />}
            label="Users History"
            variant={historyType === "users" ? "default" : "outlined"}
            color="primary"
            style={styles.chip}
            onClick={handleUsersHistoryClick}
          />
          <Chip
            icon={<TimelapseIcon />}
            label="Projects History"
            variant={historyType === "projects" ? "default" : "outlined"}
            color="primary"
            style={styles.chip}
            onClick={handleProjectsHistoryClick}
          />
        </div>
        <HistoryGrid
          rows={historyType === "projects" ? projectRows : userRows}
          // fields={historyType === "projects" ? projectFields : userFields}
          fields={fields}
        />
        {/* Just a dummy fetcher to show how the api should be used, this should be removed */}
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
      </Box>
    </Container>
  );
};

export default App;
