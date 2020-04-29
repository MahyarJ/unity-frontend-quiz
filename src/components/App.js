import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import CategorySelector from "./CategorySelector";
import HistoryContainer from "./HistoryContainer";

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
        <CategorySelector
          historyType={historyType}
          handleUsersHistoryClick={handleUsersHistoryClick}
          handleProjectsHistoryClick={handleProjectsHistoryClick}
        />
        <div hidden={historyType !== "users"}>
          <HistoryContainer historyType="users" />
        </div>
        <div hidden={historyType !== "projects"}>
          <HistoryContainer historyType="projects" />
        </div>
      </Box>
    </Container>
  );
};

export default App;
