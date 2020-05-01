import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import CategorySelector from "./CategorySelector";
import HistoryContainer from "./HistoryContainer";
import styles from "./App.module.css";
import { historyTypes } from "./config";

export const App = () => {
  const [historyType, setHistoryType] = useState(historyTypes.USERS.id);

  const handleCategorySelect = (categoryType) => {
    setHistoryType(categoryType);
  };

  return (
    <Container className={styles.app} fixed>
      <Box data-testid="app-box" m={2}>
        <Typography variant="h5">History Panel</Typography>
        <CategorySelector
          historyType={historyType}
          onSelect={handleCategorySelect}
        />
        {Object.keys(historyTypes).map((key) => (
          <div hidden={historyType !== historyTypes[key].id}>
            <HistoryContainer
              fields={historyTypes[key].fields}
              apiCall={historyTypes[key].api}
            />
          </div>
        ))}
      </Box>
    </Container>
  );
};

export default App;
