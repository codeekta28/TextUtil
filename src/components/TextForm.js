import React, { useState } from 'react'

export default function TextForm (props) {

  const [textValue, settextValue] = useState('')
  // btn styles
  const btnColor={
    backgroundColor:props.darkModeColor,
    color:'white',
    border:'1px solid white'
  }
  const textAreaStyle={
    backgroundColor:props.darkModeColor,
    color:'white',
    border:'3px solid white'
  }

  // Event functions
  const textInputHandler = event => {
    settextValue(event.target.value)
  }
  const changeUpperCaseHandler = () => {
    settextValue(textValue.toUpperCase())
    props.showAlert('success',"Changed To UpperCase")

  }
  const changeLowerCaseHandler = () => {
    settextValue(textValue.toLowerCase())
    props.showAlert('success',"Changed To LowerCase")
  }
  const reverseTextHandler=()=>{
   settextValue(textValue.split(' ').reverse().join(' '))
   props.showAlert('success',"Changed To Reverse Text")
  }
  const capitalizeTextHandler=()=>{
    let newText=textValue;
    let newArray=[];
    newText=newText.split(' ');
    console.log(newText);
    for (let i = 0; i < newText.length; i++) {
      newArray.push(newText[i][0].toUpperCase()+newText[i].slice(1)); 
    }
    settextValue(newArray.join(' '))
    props.showAlert('success',"Changed To Capitalize")
  }
  const removeSpaceHandler=()=>{
    let reg=/( )+/g;
    settextValue(textValue.replace(reg," "));
    props.showAlert('success',"Extra spaces removed")
  }
  const parameterizingTextHandler=()=>{
    settextValue(textValue.split(' ').join('-'))
    props.showAlert('success',"Text parameterized")
  }
  const clearTextAreaHandler = () => {
    settextValue('')
  }

  return (
    <section id="textForm" >
      <section id="formContainer" className={`text-${props.mode==='light'?'dark':'light'}`}>
 
        <div className='container my-5'>
          <h1 className='text-capitalize '>{props.heading}</h1>

          <div className='mb-3'>
            <textarea
              className="form-control"
              style={textAreaStyle}
              id='exampleFormControlTextarea1'
              rows='8'
              value={textValue}
              onChange={textInputHandler}
            ></textarea>
          </div>
          <button className='btn' style={btnColor} onClick={changeUpperCaseHandler}>
            Convert To Uppercase
          </button>
          <button
            className='btn btn-primary mx-2'
            onClick={changeLowerCaseHandler}
            style={btnColor} 
          >
            Convert To lowerCase
          </button>
          <button
            className='btn btn-danger mx-1'
            onClick={clearTextAreaHandler}
            style={btnColor} 
          >
            Clear TextArea
          </button>
          <button className='btn btn-primary mx-1'style={btnColor}  onClick={reverseTextHandler}>
          Reverse Text
          </button>
          <button className='btn btn-primary mx-1'style={btnColor}  onClick={capitalizeTextHandler}>
        Capitalize Text
          </button>
          <button className='btn btn-primary mx-1'style={btnColor}  onClick={removeSpaceHandler}>
        Remove Extra Space
          </button>
          <button className='btn btn-primary mx-1'style={btnColor}  onClick={parameterizingTextHandler}>
        Parameterizing Text
          </button>
        </div>
      </section>
      <section id="formResult" className={`text-${props.mode==='light'?'dark':'light'}`} >
        <div className='container my-5'>
          <h1>Text Summary</h1>
          <p>
            Chars=<b>{textValue.length}</b> Words=
            <b>{textValue.split(' ').length - 1}</b>
          </p>
          <p>
            <b>{(textValue.split(' ').length - 1) * 0.008}mins</b> time to read{' '}
          </p>
          {/* (Normally 125 words are read in 1 min so 1 word is read in 1/125 mins which is .008 so we divide number of words to 0.008) */}
          <h2>Preview</h2>
          <p>
            <b>{textValue.length>0?textValue:"Enter something in above box to preview it"}</b>
          </p>
        </div>
      </section>
    </section>
  )
}
