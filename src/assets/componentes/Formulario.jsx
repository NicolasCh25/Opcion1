import React, { useState } from "react";
import "./../estilos/Formulario.css";

function Formulario({ setNombre, setMensajeEnviado }) {
  const [nombre, setLocalNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [comentarios, setComentarios] = useState("");

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (nombre.trim() && correo.trim() && comentarios.trim()) {
      setNombre(nombre);
      setMensajeEnviado(true);
    } else {
      alert("Por favor, complete todos los campos.");
    }
  };

  return (
    <form className="formulario" onSubmit={manejarEnvio}>
      <div className="campo">
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          value={nombre}
          onChange={(e) => setLocalNombre(e.target.value)}
        />
      </div>
      <div className="campo">
        <label htmlFor="correo">Correo:</label>
        <input
          type="email"
          id="correo"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
        />
      </div>
      <div className="campo">
        <label htmlFor="comentarios">Comentarios:</label>
        <textarea
          id="comentarios"
          value={comentarios}
          onChange={(e) => setComentarios(e.target.value)}
        />
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default Formulario;
