import React from "react";
import "./../estilos/Mensaje.css";

function Mensaje({ nombre }) {
  return (
    <div className="mensaje">
      <p>Gracias, <strong>{nombre}</strong>, por registrar tus comentarios.</p>
      <p>¡Te contactaremos pronto!</p>
    </div>
  );
}

export default Mensaje;
