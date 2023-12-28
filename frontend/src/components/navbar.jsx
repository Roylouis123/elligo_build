import React, {useState} from "react";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import caseicon from "../Assets/case-icon.png";
import caseiconwhite from "../Assets/case-icon-white.png";
import person from "../Assets/person.png";


const Navbar = () => {
  const documentlist = [
    {
      id: 1,
      user: "harikaran",
      test: [
        {
          testid: 1,
          testtitle: "cancer",
          testduration: 2,
          teststatus: "Approved",
        },
      ],
    },
    {
      id: 2,
      user: "roy",
      test: [
        {
          testid: 2,
          testtitle: "diabetes",
          testduration: 2,
          teststatus: "Review",
        },
      ],
    },
    {
      id: 3,
      user: "jagan",
      test: [
        {
          testid: 2,
          testtitle: "diabetes",
          testduration: 2,
          teststatus: "review",
        },
      ],
    },
    {
      id: 4,
      user: "sai",
      test: [
        {
          testid: 2,
          testtitle: "diabetes",
          testduration: 2,
          teststatus: "review",
        },
      ],
    },
    {
      id: 1,
      user: "harikaran",
      test: [
        {
          testid: 1,
          testtitle: "cancer",
          testduration: 2,
          teststatus: "approved",
        },
      ],
    },
    {
      id: 2,
      user: "roy",
      test: [
        {
          testid: 2,
          testtitle: "diabetes",
          testduration: 2,
          teststatus: "review",
        },
      ],
    },
    {
      id: 3,
      user: "jagan",
      test: [
        {
          testid: 2,
          testtitle: "diabetes",
          testduration: 2,
          teststatus: "review",
        },
      ],
    },
    {
      id: 4,
      user: "sai",
      test: [
        {
          testid: 2,
          testtitle: "diabetes",
          testduration: 2,
          teststatus: "review",
        },
      ],
    },
    {
      id: 1,
      user: "harikaran",
      test: [
        {
          testid: 1,
          testtitle: "cancer",
          testduration: 2,
          teststatus: "Rejected",
        },
      ],
    },
    {
      id: 2,
      user: "roy",
      test: [
        {
          testid: 2,
          testtitle: "diabetes",
          testduration: 2,
          teststatus: "review",
        },
      ],
    },
    {
      id: 3,
      user: "jagan",
      test: [
        {
          testid: 2,
          testtitle: "diabetes",
          testduration: 2,
          teststatus: "review",
        },
      ],
    },
    {
      id: 4,
      user: "sai",
      test: [
        {
          testid: 2,
          testtitle: "diabetes",
          testduration: 2,
          teststatus: "review",
        },
      ],
    },
    {
      id: 1,
      user: "harikaran",
      test: [
        {
          testid: 1,
          testtitle: "cancer",
          testduration: 2,
          teststatus: "approved",
        },
      ],
    },
    {
      id: 2,
      user: "roy",
      test: [
        {
          testid: 2,
          testtitle: "diabetes",
          testduration: 2,
          teststatus: "review",
        },
      ],
    },
    {
      id: 3,
      user: "jagan",
      test: [
        {
          testid: 2,
          testtitle: "diabetes",
          testduration: 2,
          teststatus: "review",
        },
      ],
    },
    {
      id: 4,
      user: "sai",
      test: [
        {
          testid: 2,
          testtitle: "diabetes",
          testduration: 2,
          teststatus: "review",
        },
      ],
    },
  ];

  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  
  return (
    <div className="wrapper">
      <div className="document-box">
        <div className="document-search">
          <div className="search-input">
            <input type="search" className="search-box" placeholder="search" />
          </div>
          <FontAwesomeIcon icon={faArrowsRotate} className="refresh-icon" />
        </div>
        <div className="document-list">
          <ul>
            {documentlist.map((document) => (
              <li className="document-item" key={document.id}>
                <div className="icon">
                  <img src={caseicon} alt="" />
                </div>
                <div className="list-items">
                  <div className="document-item-header">
                    <div className="document-item-header-title">
                      Clinical test
                    </div>
                  </div>
                  <div className="document-item-body">
                    <div className="document-item-body-test">
                      <div className="document-item-body-test-title">
                        <img src={person} alt="" className="person-icon" />
                        {document.user}
                      </div>
                      {document.test.map((test) => (
                        <div className="document-item-body-test-details">
                          <div className="document-item-body-test-duration">
                            <FontAwesomeIcon
                              icon={faCalendarDays}
                              style={{ color: "grey" }}
                            />
                            <span>{test.testduration} hours</span>
                          </div>
                          <div className={`status ${test.teststatus}`}>
                            {test.teststatus}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
