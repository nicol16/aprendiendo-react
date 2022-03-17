




export default function Hello(){

    const sayHello = () => {
        console.log("hello");
    };

    return(

        <div>
            <h3>This is the hello component</h3>
            <button onClick={sayHello}>Say Hello</button>
        </div>
    );
}


