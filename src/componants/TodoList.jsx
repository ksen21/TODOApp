import React from 'react'

export default function TodoList(props) {



  return (<> <li className="text-purple-600">  <i className= {`fa fa-times fa-circle-xmark text-purple-600 hover:text-red-500 ` } aria-hidden="true" onClick={()=>{props.onSelect(props.id); }}></i> {props.text}</li> </> )
}
