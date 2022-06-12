import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Input from "../../base/Input";
import Button from "../../base/Button";
import Slider from "../../base/Slider";
import Footer from "../../base/Footer";

import { validateLogin } from "../../../utils/validation";
import { ROUTES } from "../../../../src/utils/constants/routes";
import slide1 from "../../../assets/img/slide1.png";
import slide2 from "../../../assets/img/slide2.png";
import slide3 from "../../../assets/img/slide3.png";
import logo from "../../../assets/img/Union.png";
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
  const [isSucceed, setIsSucceed] = useState({
    email: false,
    password: false,
  });
  const isFormValid = useMemo(() => {
    const inputsLength = Object.values(inputs).length;
    const inputsWithAnyValue = Object.values(inputs).filter(
      (el) => !!el
    ).length;
    return inputsLength === inputsWithAnyValue;
  }, [inputs]);
  const handleInputChange = (value, valueKey) => {
    setInputs((prev) => ({ ...prev, [valueKey]: value }));
    setIsSucceed((prev) => ({ ...prev, [valueKey]: false }));
    setErrors((prev) => ({ ...prev, [valueKey]: "" }));
  };
  const handleLogin = (e) => {
    e.preventDefault();
    validateLogin({
      data: inputs,
      onSuccess: () => {
        setErrors({});
        setIsSucceed({ email: true, password: true });
        alert("You are logged in!");
      },
      onError: (errors) => {
        setErrors({ ...errors });
        setIsSucceed({ email: false, password: false });
      },
    });
  };
  const handleForgotPasswordClick = () => {
    alert("Forgot password action is called!");
  };
  const renderSlides = () => {
    const slidesSchema = [
      {
        image: slide1,
        title: "Tokenplace",
        description: "Multi-exchange Trading Terminal",
      },
      {
        image: slide2,
        title: "Merge Data Review",
        description: "It gives data managers the power to efficiently manage quality data to ensure database lock readiness.",
      },
      {
        image: slide3,
        title: "Fund Platform",
        description: "Hedge funds wealth management",
      },
    ]


    const slides = slidesSchema.map((slide) => ({
      key: Math.random() / Math.random(),
      renderCustomSlide: () => (
        <div className={styles.promoSlides}>
          <img src={slide.image} alt="slide" className={styles.slideImage} />
          <p className={styles.slideTitle}>{slide.title}</p>
          <span className={styles.slideDescription}>{slide.description}</span>
        </div>
      ),
    }));

    return slides;

  };

  return ( 
    <section className={styles.container}>
      <div className={styles.body}>
        <div className={styles.sliderContainer}>
          <div className={styles.sliderWrapper}>
            <Slider 
            slides={useMemo(renderSlides, [])} />
          </div>
        </div>

        <div className={styles.formContainer}>
          <div className={styles.logotype}><img src={logo} alt="" /></div>

            <div className={styles.heading}>
              <div className={styles.signIn}>
                <span>Sign in</span>
              </div>
              <div className={styles.text}>
                <span className={styles.headingText}>Don’t have an account?<Link to={ROUTES.ROOT} className={styles.headingTextForm}>Sign up now</Link></span>
              </div>
            </div>
          <form className={styles.form} onSubmit={handleLogin}>
            <Input
            value={inputs.email}
            valueKey="email"
            label="Email"
            name="email"
            errorMessage={errors.email}
            isSucceed={isSucceed.email}
            onChange={handleInputChange}
            />
            <Input
            value={inputs.password}
            valueKey="password"
            label="Password"
            type="password"
            name="password"
            action={{
              text: "Forgot your password?",
              onClick: handleForgotPasswordClick,
            }}
            errorMessage={errors.password}
            isSucceed={isSucceed.password}
            onChange={handleInputChange}
            />
            <Button label="Sign in" type="submit" isDisabled={!isFormValid} />
          </form>
          <Footer />
        </div>
      </div>  
    </section>
  );
};

export default LoginPage;