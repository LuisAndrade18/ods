import styled from 'styled-components';

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
    h2{
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
  button {
    color: white;
    font-size: 30px;
    background: none;
    border: none;
    position: absolute;
    right: 5%;
    top: 3%;
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
  h3{
    font-size: 3vw;
  }
  p{
    font-size: 2.5vw;
  }
  }
`;
