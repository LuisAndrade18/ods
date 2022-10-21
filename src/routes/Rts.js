import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AboutOds from '../components/main/components/AboutOds'
import EachOds from '../components/main/components/EachOds'
import Mare from '../components/main/components/Mare'

const Rts = () => {
  return (
    <Routes>
      <Route path="/" element={<AboutOds />} />
      <Route path="/quais-sao-as-ods" element={<EachOds />} />
      <Route path="/ods-em-minha-regiao" element={<Mare />} />
    </Routes>
  );
}

export default Rts