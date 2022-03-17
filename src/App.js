import React, {useState} from "react";
import logo from './logo.svg';
import './App.css';
import './index.css';
import Mensaje from "./components/Mensaje";
import Matematica from "./components/Matematica";
import Lista from "./components/Lista";
import Hello from "./components/Hello";
import Tweet from "./components/Tweet";





function App() {

    // const listaElementos = ["Nicol", "Pepe", "Luis"];


 //
 // const [isRed, setRed] = useState(false);
 // const [count, setCount] = useState(0);

 // const [user, setUser] = useState({
 //     name: 'Ed';
 //     age: 25,
 //     posts: ['my fist post','my lovely summer'];
 // });


// const increment = () => {
//     setCount(count + 1);
//     setRed(!isRed);
// };


    const [users, setUsers] = useState([
        {name: 'Ed', message: 'Hello there'},
        {name: 'John', message: 'I am John Snow'},
        {name: 'Traversy', message: 'I am awesome'}
    ]);







  return (

    // <div className="App" >
    //   <p>hola mundo 3</p>
    //
    //     {/*Esto elementos se encuentran fuera del componente por lo tanto,
    //      aqui estamos enviando los parametros que contendra props*/}
    //     <Mensaje nombre={"nicol"} apellido={"Sanchez"} edad={17}/>
    //
    //     <Matematica num1={6} num2={4}/>
    //
    //     <Lista listaNombres={listaElementos}/>
    //
    // </div>





      <div className="app">

          {/*<h1>This is the app component</h1>*/}

          {/*<Hello/>*/}

          {/*<Tweet name="Dev ED" message="This is a random message"/>*/}
          {/*<Tweet name="John Snow" message="I am the true king"/>*/}
          {/*<Tweet name="Traversy Media" message="700k my dudes"/>*/}
          {/*<Tweet name="Mosh" message="My new course is available"/>*/}



          {/*<h1 className={isRed ? 'red' : ""}>Change my number!</h1>
              <button onClick={increment}>Increment</button>
              <h1>{count}</h1>*/}

          {users.map(user =>(
              <Tweet name={user.name} message={user.message} />
          ))}



      </div>



  );
}

export default App;
