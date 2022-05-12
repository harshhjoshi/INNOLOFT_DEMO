import React, { useEffect, useLayoutEffect } from "react";
import Dashboards from "./Dashboard/Dashboard";
import $ from "jquery";
import { useDispatch } from "react-redux";
import { login } from "../store/userSlice";

const Dashboard = () => {
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    $.ajax({
      url: "https://api-test.innoloft.com/product/6781/",
      type: "GET",
      dataType: "JSON",
      contentType: "application/json",

      success: function (data) {
        dispatch(login(data));
      },
    });
  });

  return (
    <div className="main_container">
      <div className="header">
        <Dashboards />
      </div>
    </div>
  );
};

export default Dashboard;
