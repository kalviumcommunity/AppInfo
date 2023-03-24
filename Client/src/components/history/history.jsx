import Delete from "../Images/history/delete.svg";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

function History(props) {
  const { user } = useAuth0();
  const [apkinfo, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      fetch(process.env.REACT_APP_FETCH_URL+"/"+user.sub)
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          setData(res);
        });
    }
  }, [user]);

  const handleDelete = (id) => {
    axios
      .delete(process.env.REACT_APP_FETCH_URL+"/"+id)
      .then((data) => {
        console.log(data)
        setData(apkinfo.filter((item) => item._id !== id));
      })
      .catch((err) => {
        console.log(err);
      });
  };


  function historydetails(details, id) {
    console.log(details)
    props.setHistoryDetails(details)
    navigate("/history/details")
  }

  return (
    <div id="padadj">
        <br />
      {apkinfo.map((item, i) => {
        let itemname = item.application_name;

        if (itemname != undefined) {
          return (
            <div key={i}  >
              <div id="toc-2">
                <table className="histd">
                  <tbody>
                    <tr>
                      <td id="histd">ApplicationName</td>
                      <td id="histd">{itemname}</td>
                      <td id="histd" className="allignoptions">

                        <span id="viewopt" onClick={() => { historydetails(item, item._id) }}>VIEW</span>
                        <img
                          src={Delete}
                          onClick={() => handleDelete(item._id)}
                          alt=""
                        />


                      </td>

                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          );
        }
      })}


    </div>
  );
}

export default History;
