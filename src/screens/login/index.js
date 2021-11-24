import { ErrorMessage, Field } from "formik";
import React from "react";

import AppForm from "../../components/appForm/AppForm";
import "./style.css";

const LoginForm = ({ initialValues, handleSubmit, validationSchema }) => {
  return (
    <AppForm
      initialValues={initialValues}
      handleSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <LoginScreen />
    </AppForm>
  );
};

export default LoginForm;

const LoginScreen =  ({}) => {
  return (
    <section className="login_section">
      <div className="login_container">
        <div className="login_form">
          <h3>Sign In</h3>
          <div className="login_fields">
            <div className="input_field">
              <Field
                name="userName"
                placeholder="Email/UserName"
                type="email"
              />
              <ErrorMessage
                component="div"
                name="userName"
                style={{ color: "red" }}
              />
            </div>
            <div className="input_field">
              <Field name="password" type="password" placeholder="Password" />
              <ErrorMessage
                component="div"
                name="password"
                style={{ color: "red" }}
              />
            </div>
            <div className="submit_btn">
              <button type="submit">Sign In</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
