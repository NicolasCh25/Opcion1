import React, { useState } from "react";
import Formulario from "./assets/componentes/Formulario";
import Mensaje from "./assets/componentes/Mensaje";
import "./App.css";

function App() {
  const [nombre, setNombre] = useState("");
  const [mensajeEnviado, setMensajeEnviado] = useState(false);

  return (
    <div className="app">
      <h1>Formulario de Registro</h1>
      {mensajeEnviado ? (
        <Mensaje nombre={nombre} />
      ) : (
        <Formulario setNombre={setNombre} setMensajeEnviado={setMensajeEnviado} />
      )}
    </div>
  );
}

export default App;
