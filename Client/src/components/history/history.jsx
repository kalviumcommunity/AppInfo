import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import "./history.css";
import Loading from "../Images/loading/docload.gif";
import Delete from "../Images/history/delete.svg";

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
                <tr className="bottomborder">
                  <th id="tableheadtd">Application Name</th>
                  <th id="tableheadtd">Report generated on</th>
                  <th id="tableheadtd">Actions</th>
                </tr>
              </thead>
              <tbody>
                {apkinfo.map((item, i) => {
                  let itemname = item.application_Name;
                  let logDate = item.date;
                  if (itemname !== undefined) {
                    return (
                      <tr key={i} className="bottomborders">
                        <td className="histrytd">{itemname}</td>
                        <td className="histrytd">{logDate}</td>
                        <td className="histrytd" id="actionTabs">
                          <span
                            id="viewbtn"
                            onClick={() => {
                              historydetails(item, item._id);
                            }}
                          >
                            View
                          </span>

                          <span
                            id="deleteIcon"
                            onClick={() => handleDelete(item._id)}
                          >

<svg class="delete-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 15L10 12" stroke="#33363F" stroke-width="2" stroke-linecap="round"/>
<path d="M14 15L14 12" stroke="#33363F" stroke-width="2" stroke-linecap="round"/>
<path d="M3 7H21V7C20.0681 7 19.6022 7 19.2346 7.15224C18.7446 7.35523 18.3552 7.74458 18.1522 8.23463C18 8.60218 18 9.06812 18 10V16C18 17.8856 18 18.8284 17.4142 19.4142C16.8284 20 15.8856 20 14 20H10C8.11438 20 7.17157 20 6.58579 19.4142C6 18.8284 6 17.8856 6 16V10C6 9.06812 6 8.60218 5.84776 8.23463C5.64477 7.74458 5.25542 7.35523 4.76537 7.15224C4.39782 7 3.93188 7 3 7V7Z" stroke="#33363F" stroke-width="2" stroke-linecap="round"/>
<path d="M10.0681 3.37059C10.1821 3.26427 10.4332 3.17033 10.7825 3.10332C11.1318 3.03632 11.5597 3 12 3C12.4403 3 12.8682 3.03632 13.2175 3.10332C13.5668 3.17033 13.8179 3.26427 13.9319 3.37059" stroke="#33363F" stroke-width="2" stroke-linecap="round"/>
</svg>

                            {/* <img
                              src={Delete}
                              alt=""
                            /> */}
                            {/* Remove */}
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
