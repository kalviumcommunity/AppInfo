import Delete from "../Images/history/delete.svg";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

function History(props) {
  const [apkinfo, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/apkinfo")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setData(res);
      });
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/apkinfo/${id}`)
      .then(() => {
        setData(apkinfo.filter((item) => item._id !== id));
      })
      .catch((err) => {
        console.log(err);
      });
  };


  function historydetails(details,id){
    console.log(details)
    props.setHistoryDetails(details)
    navigate("/history/details")
  }

  return (
    <>
      {apkinfo.map((item, i) => {
        let itemname = item.Application_Name;

        if (itemname != undefined) {
          return (
            <div key={i}>
              <div id="toc-2">
                <table>
                  <tbody>
                    <tr>
                      <td id="histd">ApplicationName</td>
                      <td id="histd">{itemname}</td>
                      <td id="histd " className="allignoptions">
                        <td>
                          <span id="viewopt" onClick={()=>{historydetails(item,item._id)}}>VIEW</span>
                        </td>
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
    </>
  );
}

export default History;
