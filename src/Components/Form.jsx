import React, { useState } from "react";


const Form = ({ show }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");



  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  const handleSubmit = (e) => {
    e.preventDefault();
    //Realizar validaciones para después mostrar un mensaje de error
    setFlag(true);
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
        <label>Email: </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button> Enviar</button>
      </form>
     
    </div>
  );
};

export default Form;


