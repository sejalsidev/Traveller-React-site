import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";

const Protected = (props) => {
  const { Component } = props;
  const navigate = useNavigate();
  useEffect(() => {
    let login = localStorage.getItem("login");
    if (!login) {
      navigate("TravelIn");
    }
  });
  return (
    <div>
      <h1>
        <Component />
      </h1>
      <Sidebar>
        <Menu>
          <SubMenu label="Charts">
            <MenuItem> Pie charts </MenuItem>
            <MenuItem> Line charts </MenuItem>
          </SubMenu>
          <MenuItem> Documentation </MenuItem>
          <MenuItem> Calendar </MenuItem>
        </Menu>
      </Sidebar>
      ;
    </div>
  );
};

export default Protected;
