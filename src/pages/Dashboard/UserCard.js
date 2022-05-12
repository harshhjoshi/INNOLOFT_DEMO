/* eslint-disable jsx-a11y/alt-text */
import * as React from "react";
import Title from "./Title";
import "./dashboard.css";

export default function UserCard({ userdata }) {
  return (
    <React.Fragment>
      <img className="profile_image" src={userdata.profilePicture}></img>
      <Title>{userdata.firstName + " " + userdata.lastName}</Title>
      <h5 style={{ alignSelf: "flex-end" }}>{userdata.email}</h5>
      <h6 style={{ alignSelf: "flex-end" }} sx={{ flex: 1 }}>
        ({userdata.position})
      </h6>
    </React.Fragment>
  );
}
