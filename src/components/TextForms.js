import React, {useState} from 'react'

export default function TextForms(props) {

  const handleUpperCaseClick = () => {
    // console.log("Upper case button clicked" + text)
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to Upper Case", "success");
  }

  const  handleLowerCaseClick = () => {
    // console.log("Upper case button clicked" + text)
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to Lower Case", "success");
  }

  const  handleClearClick = () => {
    // console.log("Upper case button clicked" + text)
    let newText = '';
    setText(newText)
    props.showAlert("Clear Text", "success");
  }

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text copied from Clipboard", "success");
  }

  const removeExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces has been Removed", "success");
  }

  const handleOnChange = (event) => {
    // console.log("On Change is geeting hit")
    setText(event.target.value)
  }
  //const [text, setText] = useState("Enter text here")
  const [text, setText] = useState("")
  // text = "Changed text" // Wrong way to change state
  // setText("Changed text") // correct way to change state
  return (
  <>
    
    <div className = "container" style = {{color: props.mode==='dark' ? 'white' : '#042743'}}>
      <h1 style={{color: props.mode==='dark' ? 'white' : '#042743'}}>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value = {text} style = {{backgroundColor: props.mode==='dark' ?
         'grey' : 'white', color: props.mode==='dark' ? 'white' : '#042743'}} onChange = {handleOnChange} id="myBox" rows="9"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpperCaseClick}>Convert to Upper case</button>
      <button className="btn btn-primary mx-2" onClick={handleLowerCaseClick}>Convert to Lower case</button>
      <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
      <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-primary mx-2" onClick={removeExtraSpace}>Remove Extra Space</button>
    </div>

    <div className="container my-5" style = {{color: props.mode==='dark' ? 'white' : '#042743'}}>
      <h2>Your Text Summary</h2>
      <p> {text.split(" ").length} words and {text.length} characters</p>
      <p> {0.008 * text.split(" ").length} Minutes to read Text</p>
      <h2>Preview</h2>
      <p>{text.length>0 ? text : "Please enter something in the TextBox to preview it here."}</p>
    </div>


  </>

  )

}
