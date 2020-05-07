import React from "react";
import PropTypes from "prop-types";
import "./User.scss";

const User = ({ name, phone, email, position, photo }) => {
  return (
    <div className="user">
      <div
        className="usersPhoto"
        style={{ backgroundImage: `url(${photo})`, backgroundSize: "cover" }}
      ></div>
      <h2>{name}</h2>
      <p>{position}</p>
      <p>{email}</p>
      <p>{phone}</p>
    </div>
  );
};

User.propTypes = {
  email: PropTypes.string,
  name: PropTypes.string,
  phone: PropTypes.string,
  position: PropTypes.string,
  photo: PropTypes.string,
};

User.defaultProps = {
  photo: "../../images/photo-cover.svg",
};

export default User;
