import React from "react";
import FaceIcon from "@material-ui/icons/Face";
import TimelapseIcon from "@material-ui/icons/Timelapse";
import api from "../lib/api";

const historyTypes = [
  {
    id: "users",
    label: "Users History",
    fields: ["Date", "Old Name", "New Name", "User ID"],
    icon: <FaceIcon />,
    api: api.getUsersDiff,
  },
  {
    id: "projects",
    label: "Projects History",
    fields: ["Date", "Old Title", "New Title", "Project ID"],
    icon: <TimelapseIcon />,
    api: api.getProjectsDiff,
  },
];

export { historyTypes };
