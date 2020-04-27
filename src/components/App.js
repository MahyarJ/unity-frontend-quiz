import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Chip from "@material-ui/core/Chip";
import FaceIcon from "@material-ui/icons/Face";
import TimelapseIcon from "@material-ui/icons/Timelapse";
import HistoryContainer from "./HistoryContainer";

const styles = {
  chipContainer: {
    marginTop: "10px"
  },

  chip: {
    margin: "10px 5px"
  }
};

export const App = () => {
  const [historyType, setHistoryType] = useState("users");

  const handleUsersHistoryClick = () => {
    setHistoryType("users");
  };

  const handleProjectsHistoryClick = () => {
    setHistoryType("projects");
  };

  return (
    <Container className="app" fixed>
      <Box data-testid="app-box" m={2}>
        <Typography variant="h5">History Panel</Typography>
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
        <HistoryContainer
          historyType="users"
          active={historyType === "users"}
        />
        <HistoryContainer
          historyType="projects"
          active={historyType === "projects"}
        />
      </Box>
    </Container>
  );
};

export default App;
