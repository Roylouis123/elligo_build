import React, { useEffect, useState } from "react";
import "./drawer.css"
import Loading from "../../../public/loading-grid.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import caseicon from "../../Assets/case-icon.png";
import { calculateTimeAgo } from "../../services";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { getDocumentById } from "../../redux/counterSlice";
import { get, isEmpty, map, toUpper } from "lodash";
import { API } from "aws-amplify";
import axios from "axios";

const Drawer = () => {

  const dispatch = useDispatch()
  const counterReducer = useSelector(state => state.Docs);
  const Doc= get(counterReducer, "value");



  const handleSelectTab = (d) => () => {
    dispatch(getDocumentById(d))
  }


  
   

    async function fetchData() {
      const res= await API.post(
        "serverless-pdf-chat",
        `/873247324324324/432432432323`,
        {
          body: {
            fileName: "conversation?.document.filename",
            prompt: "prompt",
          },
        }
      );

      console.log(res,"resresresresres")
    }
  
    fetchData();
 


  

  return (
    <div
      style={{
        height: "87vh",
        width: "25%",
        position: "fixed",
        display: "flex",
        justifyContent: "start",
        flexDirection: "column",
        gap: "10px",
        overflow: "hidden",
        boxShadow: "0 3px 10px -2px rgba(0,0,0,.3)",
      }}
    >
      <div className="w-full">
        <input
          className="w-full p-3"
          style={{
            border: "1px solid grey",
            outlineColor: "white",
            borderRadius: "3px",
          }}
          type="search"
          placeholder="search"
        />
      </div>

      <div className="document-list" style={{ overflow: "auto" }}>
        <ul>
          {!isEmpty(Doc) && map(Doc,(document, index) => (
            <div
            onClick={handleSelectTab(document)}
            key={index}
            className="block p-3 cursor-pointer bg-white border border-gray-200 rounded hover:bg-gray-100"
          >
              <li
                style={{ display: "flex", alignItems: "center", gap: "25px" }}
                key={document.id}
              >
                <div className="w-6">
                  <img src={caseicon} alt="" />
                </div>
                <div className="list-items">
                  <div className="document-item-header">
                    <div className="document-item-header-title" style={{color: "rgb(30 64 175 / var(--tw-bg-opacity))",fontWeight: "600"}}>
                      {toUpper(document.filename)}
                    </div>
                  </div>
                  <div className="document-item-body">
                    <div className="document-item-body-test">
                      <div className="document-item-body-test-details">
                        <div className="document-item-body-test-duration">
                          <FontAwesomeIcon
                            icon={faCalendarAlt}
                            style={{ color: "grey" }}
                          />
                          <span
                            style={{
                              color: "grey",
                              fontSize: "13px",
                              marginLeft: "5px",
                            }}
                          >
                            {calculateTimeAgo(document.LastModified) || ""}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
