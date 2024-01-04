import React from 'react'
import "../Dashboard/dashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import caseiconwhite from "../../Assets/case-icon-white.png";
import enlarge from "../../Assets/enlarge-icon.png";
import { useSelector, useDispatch } from 'react-redux'
import { calculateTimeAgo } from '../../services';
import { toUpper } from 'lodash';


const Frame = () => {

   const Doc= useSelector((state) => state.Docs.singleData);


  return (
    <div className="content-header" style={{ width: "73%",position: "fixed"}}>
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
                <h3>CLINICAL TRIAL: <span style={{color:'blue'}}>
                {toUpper(Doc.filename)}</span></h3>
              </div>
              <div className="content-header-subdetails">
                <ul>
                  <li>
                    <div><FontAwesomeIcon icon={faCalendarDays} style={{ color: "grey" }}/></div>
                    <div>Started: {calculateTimeAgo(Doc.LastModified)}</div>
                  </li>
                  <li>
                    <div><FontAwesomeIcon icon={faUser} style={{ color: "grey" }}/></div>
                  <div>Started By: {Doc.Owner}</div>
                  </li>
                  <li>
                  <FontAwesomeIcon icon={faUser} style={{ color: "grey" }} />
                  <div>
                  Assignee: Roy
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
  )
}

export default Frame