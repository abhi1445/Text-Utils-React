import React, {useState } from 'react'


export default function TextForm(props) {
 
const handleUpClick = () => {
  if (text.trim() === "") {
    props.showAlert("Please enter some content first!", "warning");
  } else {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  }
};

  
const handleReClick = () => {
  if (text.trim() === "") {
    props.showAlert("Please enter some content to reset!", "warning");
  } else {
    setText("");
    props.showAlert("Text cleared successfully!", "success");
  }
};


const handleLoClick = () => {
  if (text.trim() === "") {
   props.showAlert("Please enter some content first!", "warning");
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
    props.showAlert("Please enter some content first!", "warning");
    return;
  }

  try {
    await navigator.clipboard.writeText(text);
    document.getSelection().removeAllRanges();
    props.showAlert("Copied to Clipboard!", "success");
  } catch (error) {
    props.showAlert("Failed to copy text!", "danger");
  }
};


    const [text, setText] = useState('');
   
  return (
    <>
    <div className="container" style={{color: props.mode === 'dark'?'white':'black'}}>
      <h1 className='mb-4'>{props.heading} </h1>
     <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'#13466e':'white', color: props.mode === 'dark'?'white':'black'}}  id="myBox" rows="8"></textarea>
     </div>
    <button className="btn btn-primary my-1 mx-1" onClick={handleUpClick}>Convert to UPPERCASE</button>
    <button className="btn btn-primary my-1 mx-1" onClick={handleLoClick}>Convert to lowercase</button>
    <button className="btn btn-primary my-1 mx-1" onClick={handleCopy}>Copy to Clipboard</button>
    <button className="btn btn-primary my-1 mx-1" onClick={handleReClick}>Reset above field</button>


    
    <div className="container my-3">
      <h2>your text summery </h2>
      
      <p>
        {text.split(/\s+/).filter((element) => element.length !== 0).length} words
        and {text.replace(/\s/g, "").length} characters
      </p>

      {/* <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} word and {text.length} characters </p> */}

       <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read </p>
       <h2>Preview</h2>
       <p>{text.length>0?text:"Nothing to preview!"}</p>

    </div>
   </div> 
    </>
    
  )
}
