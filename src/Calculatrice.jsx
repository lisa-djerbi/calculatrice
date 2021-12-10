import React, {useState, useRef} from "react";

import Operande from "./Operande";
import Operation from "./Operation";




function Calculatrice(props)
{
  const gauche = useRef(null);
  const droite = useRef(null);
  const [resultat, setResultat] = useState("");
  
    const calcul = (type) =>
    {
        const g= gauche.current.value;
        const d= droite.current.value;
        const strRes = g  + type + d + " = "; 
  
        switch(type)
        {
          case "+": 
            setResultat(strRes + (Number(g) + Number(d)));
            break;
          case "-": 
            setResultat(strRes + (Number(g) - Number(d)));
            break;

          case "*": 
           setResultat(strRes + (Number(g) * Number(d)));
          break;

          case "/": 
            if (d == 0)
              setResultat("Cannot divide by 0");
            else
              setResultat(strRes + (Number(g) / Number(d)));
          break; 
        }
    }

    

  return(
    <div className = "calculatrice">
      <div className ="operandes">
        <Operande id = "gauche" refChamp = {gauche} />
        <Operande id = "droite" refChamp = {droite}/>
     </div>
     
     <div className="operations">
        {["+", "-", "*", "/"].map( op =>  <Operation key = {op} type = {op} handleClick ={calcul}/>)}
      </div>
      
      <p> {resultat} </p>
      
      
    </div>

  );
}

export default Calculatrice;

