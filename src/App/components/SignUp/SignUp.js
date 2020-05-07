import React from "react";
import Form from "../../containers/Form/Form";
import "./SignUp.scss";

const SignUp = ({ reloadUsers, isDisabledButton, changeDisabledButton }) => {
  console.log(isDisabledButton);
  return (
    <section className="signUp">
   
      <a name="signUp"></a>
      <div className="container signUp_wrapper">
        <div className="signUp_text">
          <h1>Register to get a work</h1>
          <p>
            Attention! After seccessful registration and alert, update the list
            of users in the block from the top
          </p>
        </div>

        <Form
          reloadUsers={reloadUsers}
          isDisabledButton={isDisabledButton}
          changeDisabledButton={changeDisabledButton}
        />
      </div>
    </section>
  );
};

export default SignUp;
