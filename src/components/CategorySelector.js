import React, { useState } from "react";
import Chip from "@material-ui/core/Chip";
import FaceIcon from "@material-ui/icons/Face";
import TimelapseIcon from "@material-ui/icons/Timelapse";
import styles from "./CategorySelector.module.css";

const CategorySelector = ({
  historyType,
  handleUsersHistoryClick,
  handleProjectsHistoryClick,
}) => {
  return (
    <div className={styles.chipContainer}>
      <Chip
        className={styles.chip}
        icon={<FaceIcon />}
        label="Users History"
        variant={historyType === "users" ? "default" : "outlined"}
        color="primary"
        onClick={handleUsersHistoryClick}
      />
      <Chip
        className={styles.chip}
        icon={<TimelapseIcon />}
        label="Projects History"
        variant={historyType === "projects" ? "default" : "outlined"}
        color="primary"
        onClick={handleProjectsHistoryClick}
      />
    </div>
  );
};
export default CategorySelector;
