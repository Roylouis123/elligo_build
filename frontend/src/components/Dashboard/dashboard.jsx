import React, {useState} from "react";
import "./dashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import caseiconwhite from "../../Assets/case-icon-white.png";
import enlarge from "../../Assets/enlarge-icon.png";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import DocumentUploader from "../DocumentUploader";
import DocumentList from "../DocumentList";

import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import ForumIcon from '@mui/icons-material/Forum';

import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';



const Dashboard = () => {
  

  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  
  return (

      
      <div className="content-section">
        <div className="content-header">
          <img src={enlarge} className="enlarge"/>
          <div className="content-header-box">
            <div className="content-header-badge">
              <div className="badge">
                <img src={caseiconwhite} alt="" />
                <span>Case</span>
              </div>
            </div>
            <div className="content-header-details">
              <div className="content-header-title">
                <h3>Clinical test</h3>
              </div>
              <div className="content-header-subdetails">
                <ul>
                  <li>
                    <div><FontAwesomeIcon icon={faCalendarDays} style={{ color: "grey" }}/></div>
                    <div>Started: 18 Hours ago</div>
                  </li>
                  <li>
                    <div><FontAwesomeIcon icon={faUser} style={{ color: "grey" }}/></div>
                  <div>Started By: Harikaran</div>
                  </li>
                  <li>
                  <FontAwesomeIcon icon={faUser} style={{ color: "grey" }} />
                  <div>
                  Assignee: Harikaran
                  </div>
                    </li>
                </ul>
              </div>
            </div>
            <div className="content-header-action">
              <button>Save</button>
              <FontAwesomeIcon icon={faEllipsisVertical} className="action-menu"/>
            </div>
          </div>
        </div>
        <div className="content-view">
        <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
          <Tab icon={<FormatListBulletedOutlinedIcon sx={{ fontSize: 16 }}/>} iconPosition="start" label="Tasks" value="1" className={value === '1' ? 'selected-tab1' : 'border-bottom'} />
            <Tab icon={<NewspaperIcon sx={{ fontSize: 16 }}/>} iconPosition="start" label="Work Form" value="2" className={value === '2' ? 'selected-tab' : 'border-bottom'} />
            <Tab icon={<ForumIcon sx={{ fontSize: 16 }}/>} iconPosition="start" label="Comments" value="3"  className={value === '3' ? 'selected-tab' : 'border-bottom'} />
            <Tab icon={<PermIdentityOutlinedIcon sx={{ fontSize: 16 }}/>} iconPosition="start"label="People" value="4"  className={value === '4' ? 'selected-tab' : 'border-bottom'} />
            <Tab icon={<TextSnippetOutlinedIcon sx={{ fontSize: 16 }}/>} iconPosition="start" label="SubItems" value="5"  className={value === '5' ? 'selected-tab' : 'border-bottom'} />
            <Tab icon={<TextSnippetOutlinedIcon sx={{ fontSize: 16 }}/>} iconPosition="start" label="Documents" value="6"  className={value === '6' ? 'selected-tab' : 'border-bottom'} />
            <Tab icon={<GppGoodOutlinedIcon sx={{ fontSize: 16 }}/>} iconPosition="start" label="Audit Trail" value="7"  className={value === '7' ? 'selected-tab' : 'border-bottom'} />
            <Tab icon={<HistoryOutlinedIcon sx={{ fontSize: 16 }}/>} iconPosition="start" label="History" value="8"  className={value === '8' ? 'selected-tab' : 'border-bottom'} />
          </TabList>
        </Box>
        <TabPanel value="1"><DocumentUploader /></TabPanel>
        <TabPanel value="2"><DocumentList/></TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
        <TabPanel value="4">People</TabPanel>
        <TabPanel value="5">SubItems</TabPanel>
        <TabPanel value="6">Documents</TabPanel>
        <TabPanel value="7">Audit Trail</TabPanel>
        <TabPanel value="8">History</TabPanel>
      </TabContext>
    </Box>
        </div>
      </div>
  );
};

export default Dashboard;
