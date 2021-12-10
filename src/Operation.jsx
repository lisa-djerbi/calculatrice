function Operation(props){

    return ( 
         <button onClick={() => {props.handleClick(props.type)}}>{props.type} </button>
    );
 }

 export default Operation;
 