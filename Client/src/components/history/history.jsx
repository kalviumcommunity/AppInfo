import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import "./history.css";
import Loading from "../Images/loading/docload.gif";

function History(props) {
  const { user, isLoading } = useAuth0();
  const [apkinfo, setApkinfo] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      fetch(process.env.REACT_APP_FETCH_URL + "/" + user.sub)
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          setApkinfo(res);
          setLoading(false);
        });
    }
  }, [user]);

  const handleDelete = (id) => {
    axios
      .delete(process.env.REACT_APP_FETCH_URL + "/" + id)
      .then((data) => {
        console.log(data);
        setApkinfo(apkinfo.filter((item) => item._id !== id));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  function historydetails(details, id) {
    console.log(details);
    props.setHistoryDetails(details);
    navigate("/history/details");
  }

  return (
    <>
      <div id="padadj">
        <p id="logHeading">My Logs</p>
        {isLoading ? (
          <div>
            <div id="internetLoading">
              Loading<span className="loader__dot">.</span>
              <span className="loader__dot">..</span>
            </div>
          </div>
        ) : loading ? (
          <img src={Loading} alt="" />
        ) : (
          <>
            <hr id="historyHR" />
            <table className="logTable">
              <thead id="tablehead">
                <tr>
                  <th id="tableheadtd">Application Name</th>
                  <th id="tableheadtd">Report generated on</th>
                  <th id="tableheadtd">Action</th>
                </tr>
              </thead>
              <tbody>
                {apkinfo.map((item, i) => {
                  let itemname = item.application_Name;
                  if (itemname !== undefined) {
                    return (
                      <tr key={i}>
                        <td className="histrytd">{itemname}</td>
                        <td className="histrytd">12 March 2023, 11:54</td>
                        <td className="histrytd" id="actionTabs">
                          <span
                            id="deleteIcon"
                            onClick={() => handleDelete(item._id)}
                          >
                            Delete Log
                          </span>
                          <span
                            id="viewbtn"
                            onClick={() => {
                              historydetails(item, item._id);
                            }}
                          >
                            View
                          </span>
                        </td>
                      </tr>
                    );
                  } else {
                    return null;
                  }
                })}
              </tbody>
            </table>
          </>
        )}
      </div>
    </>
  );
}

export default History;
