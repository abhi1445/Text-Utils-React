import React, {useState } from 'react'


export default function TextForm(props) {
 
const handleUpClick = () => {
  if (text.trim() === "") {
    props.showAlert("Please enter some text first!", "warning");
  } else {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  }
};

  const handlereClick = () => {
      let newText = ' ';
      setText(newText);
  }


const handleLoClick = () => {
  if (text.trim() === "") {
   props.showAlert("Please enter some text first!", "warning");
  } else {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  }
};

   const handleOnChange = (event) => {
      setText(event.target.value)
  }
  

const handleCopy = async () => {
  if (text.trim() === "") {
    props.showAlert("Please enter some text first!", "warning");
    return;
  }

  try {
    await navigator.clipboard.writeText(text);
    props.showAlert("Copied to Clipboard!", "success");
  } catch (error) {
    props.showAlert("Failed to copy text!", "danger");
  }
};


    const [text, setText] = useState('');
   
  return (
    <>
    <div className="container" style={{color: props.mode === 'dark'?'white':'black'}}>
      <h1>{props.heading} </h1>
     <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'grey':'white', color: props.mode === 'dark'?'white':'black'}}  id="myBox" rows="8"></textarea>
     </div>
    <button className="btn btn-primary my-1 mx-1" onClick={handleUpClick}>Convert to UPPERCASE</button>
    <button className="btn btn-primary my-1 mx-1" onClick={handleLoClick}>Convert to lowercase</button>
    <button className="btn btn-primary my-1 mx-1" onClick={handleCopy}>Copy to Clipboard</button>
    <button className="btn btn-primary my-1 mx-1" onClick={handlereClick}>Reset above field</button>


    
    <div className="container my-3">
      <h2>your text summery </h2>
      <p>{text.split(" ").length-1} word and {text.length} characters </p>
       <p>{0.008*text.split(" ").length} Minutes read </p>
       <h2>Preview</h2>
       <p>{text.length>0?text:"Enter something in the text box above to preview it here"}</p>

    </div>
   </div> 
    </>
    
  )
}
