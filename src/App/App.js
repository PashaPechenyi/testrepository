import React, { Fragment, useState } from "react";
import Users from "./components/UserWrapper/UserWrapper";
import SignUp from "./components/SignUp/SignUp";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Relationships from "./components/Relationships/Relationships";

const App = () => {
  const [isReloadUsers, setRealoadUsers] = useState(false);
  const [isDisabledButton, setDasabledButton] = useState(true);

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
    </Fragment>
  );
};

export default App;
