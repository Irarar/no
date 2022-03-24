import React, { useState } from "react";
import styled from "styled-components";
import logo from "../assets/logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";

import TextField from "@material-ui/core/TextField"
import Dialog from "@material-ui/core/Dialog"
import DialogTitle from "@material-ui/core/DialogTitle"
import DialogContent from "@material-ui/core/DialogContent"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContentText from "@material-ui/core/DialogContentText"
import {Button} from "@material-ui/core";

export default function Navbar() {
  const [navbarState, setNavbarState] = useState(false);
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  }
  const handleClose = () => {
    setOpen(false);
  }
  return (
      <>
        <Nav>
          <div className="brand">
            <div className="container">
              <img src={logo} alt="" />
            </div>
            <div className="toggle">
              {navbarState ? (
                  <VscChromeClose onClick={() => setNavbarState(false)} />
              ) : (
                  <GiHamburgerMenu onClick={() => setNavbarState(true)} />
              )}
            </div>
          </div>

          <ul>
            <li>
              <a href="#home">Домой</a>
            </li>
            <li>
              <a href="#services">О нас</a>
            </li>
            <li>
              <a href="#recommend">Места</a>
            </li>
            <li>
              <a href="#testimonials">Отзывы</a>
            </li>
          </ul>
          <Button onClick={handleClickOpen}>Войти</Button>

          <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Авторизация</DialogTitle>
            <DialogContent>
              <DialogContentText>Введите адрес электрнной почты и пароль<br/> для входа в аккаунт</DialogContentText>
              <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="Email"
                  type="email"
                  fullWidth
              />
              <TextField
                  autoFocus
                  margin="dense"
                  id="pass"
                  label="Password"
                  type="password"
                  fullWidth
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">Закрыть</Button>
              <Button onClick={handleClose} color="primary">Войти</Button>
            </DialogActions>
          </Dialog>
        </Nav>
        <ResponsiveNav state={navbarState}>
          <ul>
            <li>
              <a href="#home" onClick={() => setNavbarState(false)}>
                Домой
              </a>
            </li>
            <li>
              <a href="#services" onClick={() => setNavbarState(false)}>
                О нас
              </a>
            </li>
            <li>
              <a href="#recommend" onClick={() => setNavbarState(false)}>
                Места
              </a>
            </li>
            <li>
              <a href="#testimonials" onClick={() => setNavbarState(false)}>
                Отзывы
              </a>
            </li>
          </ul>
        </ResponsiveNav>
      </>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .brand {
    .container {
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.4rem;
      font-size: 1.2rem;
      font-weight: 900;
      text-transform: uppercase;
    }
    .toggle {
      display: none;
    }
  }
  ul {
    display: flex;
    gap: 1rem;
    list-style-type: none;
    li {
      a {
        text-decoration: none;
        color: #0077b6;
        font-size: 1.2rem;
        transition: 0.1s ease-in-out;
        &:hover {
          color: #023e8a;
        }
      }
      &:first-of-type {
        a {
          color: #023e8a;
          font-weight: 900;
        }
      }
    }
  }
  button {
    padding: 0.5rem 1rem;
    cursor: pointer;
    border-radius: 1rem;
    border: none;
    color: white;
    background-color: #48cae4;
    font-size: 1.1rem;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    transition: 0.3s ease-in-out;
    &:hover {
      background-color: #023e8a;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .brand {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      .toggle {
        display: block;
      }
    }
    ul {
      display: none;
    }
    button {
      display: none;
    }
  }
`;

const ResponsiveNav = styled.div`
  display: flex;
  position: absolute;
  z-index: 1;
  top: ${({ state }) => (state ? "50px" : "-400px")};
  background-color: white;
  height: 30vh;
  width: 100%;
  align-items: center;
  transition: 0.3s ease-in-out;
  ul {
    list-style-type: none;
    width: 100%;
    li {
      width: 100%;
      margin: 1rem 0;
      margin-left: 2rem;
      a {
        text-decoration: none;
        color: #0077b6;
        font-size: 1.2rem;
        transition: 0.1s ease-in-out;
        &:hover {
          color: #023e8a;
        }
      }
      &:first-of-type {
        a {
          color: #023e8a;
          font-weight: 900;
        }
      }
    }
  }
`;