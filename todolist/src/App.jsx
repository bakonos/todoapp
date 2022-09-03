import Header from "./components/Header";
import Form from "./components/Form";
import ListaTareas from "./components/ListaTareas";
import { useState } from "react";

function App() {

const [tareas, setTareas] = useState([]);

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Form 
        tareas={tareas}
        setTareas={setTareas}
        />
        <ListaTareas />
      </div>
    </div>
  );
}

export default App;
