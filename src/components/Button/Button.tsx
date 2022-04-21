import React from "react";
interface ButonPros{
  name: string;
  type: string;
}
const Button = ({name, type}:ButonPros) => {

  
  return ( <button {...type}>{name}</button>
  )
}

export default Button;