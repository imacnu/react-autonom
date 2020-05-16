import React, { useState } from "react";
import request from "../utils/request";
import "./Login.css";
import styled from "styled-components";
import { withTranslation } from "react-i18next";

const Login = ({ t, i18n }) => {
  const [credentials, setCredentials] = useState({
    user: "",
    password: "",
  });

  const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  `;

  const onSubmit = (ev) => {
    ev.preventDefault();

    request("ApplicationUsers/login", {
      method: "POST",
      body: JSON.stringify({
        email: credentials.user || "soporte@xavitristancho.pro",
        password: credentials.password || "123456",
      }),
    })
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };
  const changeLanguage = (lang) => i18n.changeLanguage(lang);

  return (
    <Container>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="user"
          placeholder={t("email")}
          onChange={(ev) =>
            setCredentials({ ...credentials, user: ev.target.value })
          }
          value={credentials.name}
        ></input>
        <input
          type="password"
          placeholder={t("password")}
          name="password"
          onChange={(ev) =>
            setCredentials({ ...credentials, password: ev.target.value })
          }
          value={credentials.password}
        ></input>
        <button type="submit">{t("login")}</button>
      </form>
      <div className="traslation">
        <button onClick={() => changeLanguage("es")}>ES</button>
        <button onClick={() => changeLanguage("en")}>EN</button>
      </div>
    </Container>
  );
};

export default withTranslation()(Login);
