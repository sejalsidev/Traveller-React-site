import React, { useEffect, useState } from "react";
import "./TravelIn.css";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { userDetail } from "../servicer/userDetail";
import Table from "react-bootstrap/Table";
import { MDBTable, MDBTableHead, MDBTableBody, MDBBtn } from "mdb-react-ui-kit";

const TravelIn = () => {
  const [selectedLink, setSelectedLink] = useState(null);
  const [userdata, setUserData] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await userDetail();
        console.log("Received data:", data);
        setUserData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  const handleMenuItemClick = (link) => {
    setSelectedLink(link);
  };

  return (
    <div>
      {/* <div className="navbar-expand navbar-light custom-navbar"></div> */}
      <div style={{ display: "flex", height: "100vh" }}>
        <Sidebar style={{ color: "white" }}>
          <Menu
            style={{ color: "white" }}
            menuItemStyles={{
              button: {
                color: "wh8f8888fb",
                "&:hover": {
                  backgroundColor: "white",
                  color: "#8f8888fb",
                },
                [`&.active`]: {
                  backgroundColor: "#8f8888fb",
                  color: "#b6c8d9",
                },
              },
            }}
          >
            <MenuItem onClick={() => handleMenuItemClick("UserDetail")}>
              UserDetail
            </MenuItem>
            <MenuItem onClick={() => handleMenuItemClick("Calendar")}>
              Calendar
            </MenuItem>
            <MenuItem onClick={() => handleMenuItemClick("E-commerce")}>
              E-commerce
            </MenuItem>
            <MenuItem onClick={() => handleMenuItemClick("Contact")}>
              Contact
            </MenuItem>
            <MenuItem onClick={() => handleMenuItemClick("Booking")}>
              Booking
            </MenuItem>
          </Menu>
        </Sidebar>

        <div
          style={{
            marginLeft: "100px",
            padding: "50px",
          }}
        >
          {selectedLink === "UserDetail" && (
            <div>
              {
                <MDBTable>
                  <MDBTableHead dark>
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Password</th>
                      <th scope="col">OTP</th>
                      <th scope="col">Action</th>
                    </tr>
                  </MDBTableHead>
                  <MDBTableBody>
                    {userdata.data?.map((user) => (
                      <tr key={user._id}>
                        <td>{user._id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.password}</td>
                        <td>{user.OTP}</td>
                        <td>
                          <MDBBtn className="me-1" color="success">
                            Update
                          </MDBBtn>{" "}
                          <MDBBtn className="me-1" color="danger">
                            Delete
                          </MDBBtn>
                        </td>
                      </tr>
                    ))}
                  </MDBTableBody>
                </MDBTable>
              }
            </div>
          )}
          {selectedLink === "Calendar" && <p>This is the calendar content.</p>}
          {selectedLink === "E-commerce" && (
            <p>This is the e-commerce content.</p>
          )}
          {selectedLink === "Contact" && <p>This is the contact content.</p>}
          {selectedLink === "Booking" && <p>This is the booking content.</p>}
        </div>
      </div>
    </div>
  );
};

export default TravelIn;
