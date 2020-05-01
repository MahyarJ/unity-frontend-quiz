import React from "react";
import PropTypes from "prop-types";
import Chip from "@material-ui/core/Chip";
import styles from "./CategorySelector.module.css";
import { historyTypes } from "./config";

export const CategorySelector = ({ historyType, onSelect }) => {
  return (
    <div className={styles.chipContainer}>
      {Object.keys(historyTypes).map((key) => (
        <Chip
          className={styles.chip}
          icon={historyTypes[key].icon}
          data-testid={`category-selector-${historyTypes[key].id}`}
          label={historyTypes[key].label}
          variant={
            historyType === historyTypes[key].id ? "default" : "outlined"
          }
          color="primary"
          onClick={() => {
            onSelect(historyTypes[key].id);
          }}
        />
      ))}
    </div>
  );
};

CategorySelector.propTypes = {
  historyType: PropTypes.string.isRequired,
};

export default CategorySelector;
