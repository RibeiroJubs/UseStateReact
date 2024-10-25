import { useState } from "react";
import "./style.scss";

export default function App() {
  const [lampada, setLampada] = useState(true);
  const trocarLampada = () => {
    setLampada(!lampada);
  };
  return (
    <main>
      <h1>Liberte a magia da programação com a lâmpada de Aladim</h1>

      {/* pra adicionar logica dentro do link, eu ao inves de " " ponho {} no link  */}
      {/* operador ternário condicional ? true : false. lá no use state boto a condição. o primeiro link é true o 2 é false */}
      <img
        src={
          lampada
            ? "https://github.com/mariaccarolina/TurmaFDV/blob/main/imagens/lampada-com-mago.png?raw=true"
            : "https://github.com/mariaccarolina/TurmaFDV/blob/main/imagens/lampada.png?raw=true"
        }
        alt="Lampada"
      />
      <button onClick={trocarLampada}>Clique Aqui</button>
    </main>
  );
}
