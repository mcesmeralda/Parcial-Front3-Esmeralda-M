import React from "react";
import Card from "./Components/Card";
import Form from "./Components/Form";
import "./Styles/App.css"; // Asegúrate de que la ruta sea correcta

function App() {
  return (
    <div className="App">
      <h1>Carga de estudiantes</h1>
      <Form />
      <Card />
    </div>
  );
}

export default App;



