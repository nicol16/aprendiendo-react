import logo from './logo.svg';
import './App.css';
import Mensaje from "./Mensaje";
import Matematica from "./Matematica";
import Lista from "./Lista";


function App() {

    const listaElementos = ["Nicol", "Pepe", "Luis"];

  return (

    <div className="App" >
      <p>hola mundo 3</p>

        {/*Esto elementos se encuentran fuera del componente por lo tanto,
         aqui estamos enviando los parametros que contendra props*/}
        <Mensaje nombre={"nicol"} apellido={"Sanchez"} edad={17}/>

        <Matematica num1={6} num2={4}/>

        <Lista listaNombres={listaElementos}/>

    </div>
  );
}

export default App;
