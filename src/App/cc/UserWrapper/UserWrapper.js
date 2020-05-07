import React from "react";
import UsersBlock from "../../containers/UsersBlock/UsersBlock";
import "./UserWrapper.scss";

export default function UserWrapper() {
  return (
    <section className="users">
      <div className="container">
        <div className="users_wrapper">
          <div className="users_title">
            <h1>Our cheerful users</h1>
            <p>Attention! Sorting users by registration date</p>
          </div>

          <UsersBlock />
        </div>
      </div>
    </section>
  );
}
