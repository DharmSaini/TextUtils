import React, { useState } from "react";

export default function TextFrom(props) {
  const handleUpClick = () => {
    // console.log("UpperCase was Clicked");

    // how to change uppercase value
    let newText = text.toUpperCase();

    setText(newText);
  };

  const handleLoClick = () => {
    // console.log('Lowercase was Clicked');
    let newText = text.toLowerCase();
    setText(newText);
  };

  /*const handleClearClick = () => {
            let newText = (" ");
            setText(newText)
            <button type="button" className="btn btn-secondary mx-1" onClick={handleClearClick} >Clear text</button>
        }*/

  const handleCopy = () => {
    let newText = document.getElementById("box");
    newText.select();
    navigator.clipboard.writeText(newText.value);
  };

  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  };
  const [text, setText] = useState("");

  // useState hook = we helps the create new state variable
  // text = "new text"; // Wrong way to change the state
  // setText("new text"); // Correct way to change the state
  // when listen the event any react application then function run and found the event object in function.

  return (
    <>
      <div>
        <div className="mb-3">
          <textarea
            className="form-control" value={text} onChange={handleOnChange}style={{backgroundColor: props.mode === "dark" ? "#9e9e9e" : "white",}} id="box" rows="7"></textarea>
        </div>
      </div>
      <button
        type="button"
        className="btn btn-secondary mx-1"
        onClick={handleUpClick}
      >
        Convert to Upercase
      </button>
      <button
        type="button"
        className="btn btn-secondary mx-1"
        onClick={handleLoClick}
      >
        Convert to Lowercase
      </button>
      <button
        type="button"
        className="btn btn-secondary mx-1"
        onClick={handleCopy}
      >
        Copy text
      </button>
      <div className="container my-3">
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters{" "}
        </p>

        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something preview is here"}</p>
      </div>
    </>
  );
}
