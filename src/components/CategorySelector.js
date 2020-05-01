import React from "react";
import PropTypes from "prop-types";
import Chip from "@material-ui/core/Chip";
import styles from "./CategorySelector.module.css";
import { historyTypes } from "./config";

export const CategorySelector = ({ historyType, onSelect }) => {
  return (
    <div className={styles.chipContainer}>
      {historyTypes.map((type) => (
        <Chip
          key={type.id}
          className={styles.chip}
          icon={type.icon}
          data-testid={`category-selector-${type.id}`}
          label={type.label}
          variant={historyType === type.id ? "default" : "outlined"}
          color="primary"
          onClick={() => {
            onSelect(type.id);
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
