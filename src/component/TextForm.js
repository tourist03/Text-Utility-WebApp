import React, { useState } from "react";


export default function TextForm(props) {

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase" , "success");
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase" , "success");
  };

  const handleclearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("TextArea Cleared" , "success");

  };

  const handelEmailExtractionClick = () => {
    let emailMatched = text.match(/[\w\.]+@[\w]+\.[\w]+/g);
    let email = emailMatched ? emailMatched.join('\n') : '';
    setText(email);
    props.showAlert("Email Extracted Successfully!!!!" , "success");
  }

  const handlecopyClick  = () =>
  {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard!!" , "success");
  }

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div className="container " style = {{color : props.mode === "light" ? "black" : "white"}}> 
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            value={text}
            onChange={handleOnChange}
            style = {{backgroundColor : props.mode === "light" ? "white" : "grey" , color : props.mode === "light" ? "black" : "white"}}
            rows="8"
          ></textarea>
        </div>

        <button className="btn btn-outline-primary mx-1" onClick={handleUpClick} style = {{backgroundColor : props.mode === "light" ? "" : "lightblue" }}>
          Convert to uppercase
        </button>

        <button className="btn btn-outline-primary mx-1" onClick={handleLowClick} style = {{backgroundColor : props.mode === "light" ? "" : "lightblue" }}>
          Convert to lowerCase
        </button>

        <button className="btn btn-outline-primary mx-1" onClick={handleclearClick} style = {{backgroundColor : props.mode === "light" ? "" : "lightblue" }}>
          Clear All
        </button>

        <button className="btn btn-outline-primary mx-1" onClick={handelEmailExtractionClick} style = {{backgroundColor : props.mode === "light" ? "" : "lightblue" }}>
          Extract Email
        </button>

        <button className="btn btn-outline-primary mx-1" onClick={handlecopyClick} style = {{backgroundColor : props.mode === "light" ? "" : "lightblue" }}>
          Copy Text
        </button>
        
      </div>
      <div className="container my-3" style = {{color : props.mode === "light" ? "black" : "white"}}>
        <h3>Text Summary</h3>
        <p>{text.split(" ").length} words {text.length} character</p>
        <p>{0.008 * text.split(" ").length } Minutes read</p>
        <h4>Preview</h4>
        <p>{text.length > 0 ? text : "Enter to preview here" }</p>
      </div>
    </>
  );
}
