import React from 'react';
import Exploracao from './components/Exploracao'; // Importando o novo componente

function App() {
  return (
    <div>
      <p>Este é um parágrafo renderizado usando React! Aproveite para explorar mais sobre essa biblioteca incrível.</p>
      <Exploracao /> {/* Incluindo o componente Exploracao */}
    </div>
  );
}

export default App;
