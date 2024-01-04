import React, { useState } from "react";
import "../Dashboard/dashboard.css";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import ForumIcon from "@mui/icons-material/Forum";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import TextSnippetOutlinedIcon from "@mui/icons-material/TextSnippetOutlined";
import GppGoodOutlinedIcon from "@mui/icons-material/GppGoodOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";

import DocumentUploader from "../DocumentUploader";
import Test from "../Tasks/Task";
import Comment from "../comments/comment";

const Task = () => {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div
      style={{
        width: "73%",
        position: "fixed",
        marginTop: "28vh",
        boxShadow: "2px 7px 11px 7px rgba(0,0,0,.1)",
      }}
      className="content-view"
    >
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab
                icon={<FormatListBulletedOutlinedIcon sx={{ fontSize: 16 }} />}
                iconPosition="start"
                label="Tasks"
                value="1"
                className={value === "1" ? "selected-tab1" : "border-bottom"}
              />
              <Tab
                icon={<NewspaperIcon sx={{ fontSize: 16 }} />}
                iconPosition="start"
                label="Upload FILE"
                value="2"
                className={value === "2" ? "selected-tab" : "border-bottom"}
              />
              <Tab
                icon={<ForumIcon sx={{ fontSize: 16 }} />}
                iconPosition="start"
                label="Comments"
                value="3"
                className={value === "3" ? "selected-tab" : "border-bottom"}
              />
              <Tab
                icon={<PermIdentityOutlinedIcon sx={{ fontSize: 16 }} />}
                iconPosition="start"
                label="People"
                value="4"
                className={value === "4" ? "selected-tab" : "border-bottom"}
              />
              <Tab
                icon={<TextSnippetOutlinedIcon sx={{ fontSize: 16 }} />}
                iconPosition="start"
                label="SubItems"
                value="5"
                className={value === "5" ? "selected-tab" : "border-bottom"}
              />
              <Tab
                icon={<TextSnippetOutlinedIcon sx={{ fontSize: 16 }} />}
                iconPosition="start"
                label="Documents"
                value="6"
                className={value === "6" ? "selected-tab" : "border-bottom"}
              />
              <Tab
                icon={<GppGoodOutlinedIcon sx={{ fontSize: 16 }} />}
                iconPosition="start"
                label="Audit Trail"
                value="7"
                className={value === "7" ? "selected-tab" : "border-bottom"}
              />
              <Tab
                icon={<HistoryOutlinedIcon sx={{ fontSize: 16 }} />}
                iconPosition="start"
                label="History"
                value="8"
                className={value === "8" ? "selected-tab" : "border-bottom"}
              />
            </TabList>
          </Box>
          <TabPanel sx={{ height: "52vh" }} value="1">
            <Test />
          </TabPanel>
          <TabPanel sx={{ height: "52vh" }} value="2">
            <DocumentUploader />
          </TabPanel>
          <TabPanel sx={{ height: "52vh" }} value="3">
            <Comment/>
          </TabPanel>
          <TabPanel sx={{ height: "52vh" }} value="4">
            People
          </TabPanel>
          <TabPanel sx={{ height: "52vh" }} value="5">
            SubItems
          </TabPanel>
          <TabPanel sx={{ height: "52vh" }} value="6">
            Documents
          </TabPanel>
          <TabPanel sx={{ height: "52vh" }} value="7">
            Audit Trail
          </TabPanel>
          <TabPanel sx={{ height: "52vh" }} value="8">
            History
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
};

export default Task;
