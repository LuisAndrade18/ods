import React, { useState } from 'react';
import Logo from '../../assets/images/logo.png';
import * as S from './Styled';

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <S.Header>
      <figure>
        <img src={Logo} alt="" />
      </figure>
      <div>
        <S.MHamb for="check">
          <input onClick={() => setOpen(!open)} type="checkbox" id="check" />
          <span></span>
          <span></span>
          <span></span>
        </S.MHamb>
      </div>

      {open && (
        <nav>
          <ul>
            <li>
              <S.Links to="/">O que são ODS?</S.Links>
            </li>
            <li>
              <S.Links to="/quais-sao-as-ods">Quais são os ODS?</S.Links>
            </li>
            <li>
              <S.Links to="/ods-em-minha-regiao">Maré</S.Links>
            </li>
          </ul>
        </nav>
      )}
    </S.Header>
  );
};

export default Header;
