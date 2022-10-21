import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Header = styled.header`
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  img {
    width: 50px;
  }
  nav {
    width: 50%;
    height: 100%;
    background-color: #dbdbdbeb;
    position: fixed;
    right: 0;
    top: 0;
    animation:  Menu 0.3s ease-in-out ;
  }
  ul {
    margin: 50px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  li {
    margin: 10px 5px;
  }

  @keyframes Menu {
    0% {
      right: -100%;
    }
    100% {
      right: 0;
    }
  }
`;
export const Links = styled(Link)`
  color: #000000;
`;

export const MHamb = styled.label`
  width: 35px;
  position: absolute;
  right: 5%;
  top: 3%;
  z-index: 1;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  span {
    background: #000000;
    border-radius: 10px;
    height: 4px;
    margin: 3px 0;
    transition: 0.4s cubic-bezier(0.68, -0.6, 0.32, 1.6);
  }

  span:nth-of-type(1) {
    width: 50%;
  }

  span:nth-of-type(2) {
    width: 100%;
  }

  span:nth-of-type(3) {
    width: 75%;
  }

  input[type='checkbox'] {
    display: none;
  }

  input[type='checkbox']:checked ~ span:nth-of-type(1) {
    transform-origin: bottom;
    transform: rotatez(45deg) translate(3px, 0px);
  }

  input[type='checkbox']:checked ~ span:nth-of-type(2) {
    transform-origin: top;
    transform: rotatez(-45deg);
  }

  input[type='checkbox']:checked ~ span:nth-of-type(3) {
    transform-origin: bottom;
    width: 50%;
    transform: translate(15px, -5px) rotatez(45deg);
  }
`;
