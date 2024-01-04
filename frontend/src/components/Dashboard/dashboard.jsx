import React, { useState } from "react";
import "./dashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import caseiconwhite from "../../Assets/case-icon-white.png";
import enlarge from "../../Assets/enlarge-icon.png";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import DocumentUploader from "../DocumentUploader";
import Frame from "../frame/frame";
import Task from "../tabs/tablist";

const Dashboard = () => {
  return (
    <div className="content-section" style={{ overflow: "hidden" }}>
      <Frame />

      <Task />
    </div>
  );
};

export default Dashboard;
