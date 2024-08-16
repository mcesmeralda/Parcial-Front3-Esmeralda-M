import React from "react";

const Message = ({ name, favoriteGroup }) => {
  return (
    <div className="msg">
      <h2>¡Hola, {name}!</h2>
      <h2>Sabemos que tu grupo de Kpop favorito es: {favoriteGroup}</h2>
    </div>
  );
};

export default Message;
