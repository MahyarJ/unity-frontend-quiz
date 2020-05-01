import React from "react";
import FaceIcon from "@material-ui/icons/Face";
import TimelapseIcon from "@material-ui/icons/Timelapse";
import api from "../lib/api";

const historyTypes = {
  USERS: {
    id: "users",
    label: "Users History",
    fields: ["Date", "User ID", "Old Name", "New Name"],
    icon: <FaceIcon />,
    api: api.getUsersDiff,
  },
  PROJECTS: {
    id: "projects",
    label: "Projects History",
    fields: ["Date", "Project ID", "Old Title", "New Title"],
    icon: <TimelapseIcon />,
    api: api.getProjectsDiff,
  },
};

export { historyTypes };
