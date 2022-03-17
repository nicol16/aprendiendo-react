


export default function Mensaje(props){

    let num1,num2,resultado;
    num1 = 3;
    num2 = 5;
    resultado = num1 + num2;

    const mensaje2 = "mensaje local";

    return (

        <div>
            {/*Si la variable viene de afuera del componente se guarda en el props y debemos hacer props.nombre */}
            <p>Esto es un componente creado por {props.nombre} {props.apellido} cuya edad es {props.edad}</p>

            {/*Si la variable es local solo debemos de indicar el nombre para ser utilizada*/}
            <p>El resultado es: {resultado} {mensaje2} </p>
        </div>
    );
}
