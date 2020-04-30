import React from "react";
import PropTypes from "prop-types";
import Chip from "@material-ui/core/Chip";
import FaceIcon from "@material-ui/icons/Face";
import TimelapseIcon from "@material-ui/icons/Timelapse";
import styles from "./CategorySelector.module.css";

export const CategorySelector = ({
  historyType,
  handleUsersHistoryClick,
  handleProjectsHistoryClick,
}) => {
  return (
    <div className={styles.chipContainer}>
      <Chip
        className={styles.chip}
        icon={<FaceIcon />}
        data-testid="category-selector"
        label="Users History"
        variant={historyType === "users" ? "default" : "outlined"}
        color="primary"
        onClick={handleUsersHistoryClick}
      />
      <Chip
        className={styles.chip}
        icon={<TimelapseIcon />}
        data-testid="category-selector"
        label="Projects History"
        variant={historyType === "projects" ? "default" : "outlined"}
        color="primary"
        onClick={handleProjectsHistoryClick}
      />
    </div>
  );
};

CategorySelector.propTypes = {
  historyType: PropTypes.string.isRequired,
};

export default CategorySelector;
