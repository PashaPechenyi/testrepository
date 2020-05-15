import React, { Fragment, useState } from "react";
import Users from "./containers/Users/Users";
import SignUp from "./containers/SignUp/SignUp";
import Header from "./containers/Header/Header";
import About from "./containers/About/About";
import Relationships from "./containers/Relationships/Relationships";

const App = () => {
  const [isReloadUsers, setRealoadUsers] = useState(false);
  const [isDisabledButton, setDasabledButton] = useState(false);

  const changeReloadUsers = () => {
    setRealoadUsers(!isReloadUsers);
  };

  const changeDisabledButton = () => {
    setDasabledButton(!isDisabledButton);
  };

  return (
    <Fragment>
      <Header />
      <About isDisabledButton={isDisabledButton} />
      <Relationships isDisabledButton={isDisabledButton} />

      <Users reloadUsers={changeReloadUsers} isReloadUsers={isReloadUsers} />
      <SignUp
        reloadUsers={changeReloadUsers}
        isDisabledButton={isDisabledButton}
        changeDisabledButton={changeDisabledButton}
      />
      <footer className="footerTask">
        {"\u00A9 "}abz.agency specially for the test task
      </footer>
    </Fragment>
  );
};

export default App;
