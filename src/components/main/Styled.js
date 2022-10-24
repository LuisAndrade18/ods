import styled from 'styled-components';

export const Info = styled.section`
  width: 90%;
  margin: 5% auto;
  border: solid 1px;
  border-radius: 30px;
  box-shadow: 3px 3px 6px gray;
  h2 {
    width: fit-content;
    margin: 15px auto;
  }
  p {
    margin: 15px;
  }
  @media screen and (min-width: 1024px) {
    width: 60%;
    h2 {
      font-size: 4vw;
    }
    p{
      font-size: 2vw;
      margin: 25px;
    }
  }
`;

export const Ods = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  h2 {
    width: 100%;
    text-align: center;
    font-size: 7vw;
  }
  @media screen and (min-width: 1024px) {
    width: 70%;
    margin: auto;
    h2 {
      font-size: 5vw;
    }
  }
`;
export const Card = styled.div`
  width: 50%;
  margin: 10px auto;
  display: flex;
  justify-content: center;
  img {
    width: 90%;
    border-radius: 10px;
    box-shadow: 3px 4px 6px gray;
  }
  &:hover{
    img{
      transform: scale(98%);
    }
  }
  @media screen and (min-width: 767px) {
    width: 33.33%;
  }
  @media screen and (min-width: 1024px) {
    width: 20%;
  }
`;

export const PopUp = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #37373745;
  position: fixed;
  top: 0;
  .close {
    display: none;
  }
  @media screen and (min-width: 1024px) {
    .close {
      display: initial;
      color: white;
      font-size: 30px;
      background: none;
      border: none;
      position: absolute;
      right: 5%;
      top: 3%;
    }
  }
`;

export const PopUpInside = styled.div`
  width: 95%;
  height: 35%;
  text-align: center;
  border-radius: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  h3 {
    font-size: 6vw;
  }
  p {
    width: 80%;
    font-size: 5vw;
    text-align: left;
  }

  @media screen and (min-width: 767px) {
    width: 85%;
    h3 {
      font-size: 4.6vw;
    }
    p {
      font-size: 4vw;
    }
  }
  @media screen and (min-width: 1024px) {
    width: 60%;
    height: 60%;
    h3 {
      font-size: 3vw;
    }
    p {
      font-size: 2.5vw;
    }
  }
`;
