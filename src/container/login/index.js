import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

import LoginForm from "../../screens/login";
import Users from "../../server/data.json";

const initialValues = {
  userName: "",
  password: "",
};

const validationSchema = Yup.object({
  userName: Yup.string()
    .email("Email must be valid")
    .required("Username is required field."),
  password: Yup.string()
    .min(8, "Minimum of 8 characters are required.")
    .required("Password is required field."),
});

function LoginContainer() {
  let navigate = useNavigate();

  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    setAccounts(Users);
  }, [accounts]);

  const handleSubmit = ({ formValues }) => {
    const result = accounts.filter((acc) => (acc.userName === formValues.userName) && (acc.password === formValues.password));
    if(result.length) return navigate("/welcome");
    else return window.alert("invalide email and password");

  };

  return (
    <LoginForm
      handleSubmit={handleSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
    />
  );
}

export default LoginContainer;
