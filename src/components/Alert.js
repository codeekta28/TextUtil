import React from 'react'

function Alert (props) {
    function capitalize(str){
        return str[0].toUpperCase()+str.slice(1);
    }
  return (
    props.showAlert&&<div className={`alert alert-${props.showAlert.type} alert-dismissible fade show`} role='alert'>
      <strong>{capitalize(props.showAlert.type)}: {props.showAlert.msg}</strong> 

    </div>
  )
}

export default Alert
