import React, { useState } from "react";
import Message from "./Message";

const Form = () => {
  const [name, setName] = useState("");
  const [favoriteGroup, setFavoriteGroup] = useState("");
  const [flag, setFlag] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

  
    if (name.length < 3 || name.trim() !== name) {
      setError("Por favor revisa que la información sea correcta");
      return;
    }

   
    if (favoriteGroup.length < 6) {
      setError("Por favor revisa que la información sea correcta");
      return;
    }


    setError("");
    setFlag(true);

    
    setName("");
    setFavoriteGroup("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Nombre: </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Ingresa tu grupo de Kpop favorito: </label>
        <input
          type="text"
          value={favoriteGroup}
          onChange={(e) => setFavoriteGroup(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>

    
      {error && <p style={{ color: "red" }}>{error}</p>}

      
      {flag && <Message name={name} favoriteGroup={favoriteGroup} />}
    </div>
  );
};

export default Form;
