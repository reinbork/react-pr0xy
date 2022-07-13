import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit"

export default function Button(props){
    const handleClick=()=>{
         //logic here…..
    }
    let icon;
    if (props.text === 'Delete'){
     icon = <DeleteIcon /> 
    }
    else {
     icon = <EditIcon/>
     }


    return(
          <button type="button"  style={{
            backgroundColor: props.color,
            width: props.width
         }} className ="btn" onClick={handleClick}> 
            {icon}  {props.text}
          </button>
    )
    }





















    