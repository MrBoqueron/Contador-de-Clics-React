import { useState } from "react";
import Boton from "./components/Boton";
import Contador from "./components/Contador";
import "./styles.css";

export default function App() {
  const [numClics, setNumClics] = useState(0);

  const subirContador = () => setNumClics(numClics + 1);

  const reiniciarContador = () => setNumClics(0);

  return (
    <div className="App">
      <h1>CONTADOR DE CLICS</h1>

      <div className="contador">
        <Contador numClics={numClics} />
      </div>

      <Boton texto="Contar" estilo="btn-contar" evento={subirContador} />
      <Boton
        texto="Reiniciar"
        estilo="btn-reiniciar"
        evento={reiniciarContador}
      />
    </div>
  );
}
