import React, { useState } from "react";

import Input from "../../base/Input";
import Button from "../../base/Button";

import { validateLogin } from "../../../utils/validation";

import styles from "./Login.module.scss";

const LoginPage = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (value, valueKey) => {
    setInputs((prev) => ({ ...prev, [valueKey]: value }));
  };

  const handleLogin = (e) => {
    e.preventDefault();

    validateLogin({
      data: inputs,
      onSuccess: () => {
        setErrors({});
        alert("You are logged in!");
      },
      onError: (errors) => setErrors({ ...errors }),
    });
  };

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Merge development</h1>
      <h1 className={styles.signIn}>Sign in</h1>
      <div className={styles.text}>Don’t have an account?</div>
      <a href="#" className={styles.signUpNow}>Sign up now</a>
      <form onSubmit={handleLogin}>
        <Input
          className={styles.email}
          value={inputs.email}
          valueKey="email"
          label="Email"
          errorMessage={errors.email}
          onChange={handleInputChange}
          
        />
        
        <Input
          value={inputs.password}
          valueKey="password"
          label="Password"
          type="password"
          errorMessage={errors.password}
          onChange={handleInputChange}
        />

        <Button label="Sign In" type="submit" />

      </form>
      <div className={styles.infoLinks}>
        <p className={styles.contact}><a href="">Contact</a></p>
        <p className={styles.privacy}><a href="">Privacy</a></p>
        <p className={styles.terms}><a href="">Terms</a></p>
      </div>
    </section>
  );
};

export default LoginPage;
