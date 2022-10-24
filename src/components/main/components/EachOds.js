import React, { useState } from 'react';
import { dados } from '../../../assets/dados/DadosEODS';
import * as S from '../Styled';

const Ods = () => {
  const [open, setOpen] = useState(false)
  const [popUp, setPopUp] = useState([]);
  const PopUp = (i) => {
    setPopUp([i]);
  };
  return (
    <S.Ods>
      <h2>Quais são os ODS?</h2>
      {dados.map((i) => (
        <S.Card onClick={() => { PopUp(i); setOpen(!open) }}>
          <img src={i.img} alt="" />
        </S.Card>
      ))}
      {open && popUp.map((i) => (
        <S.PopUp onClick={() => setOpen(!open)}>
          <button className='close' onClick={() => setOpen(!open)}>X</button>
          <S.PopUpInside>
            <h3>{i.name}</h3>
            <p>{i.objective}</p>
          </S.PopUpInside>
        </S.PopUp>
      ))
      }
     
    </S.Ods>
  );
};

export default Ods;
