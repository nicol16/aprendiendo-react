export default function Lista(props) {


    return(

        <div>

            {props.listaNombres.map(elemento => (

              <p>Su nombre es: {elemento}</p>
            ))}

        </div>
    );

}
