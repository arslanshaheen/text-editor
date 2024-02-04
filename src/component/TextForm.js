import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("uppercase was clicked" + text); //+ text console may text ko show karaga
    let newText = text.toUpperCase(); //textarea may text ko uppercase may convert karaga
    // setText("you have clicked on handleUpClick"); //settext  updata karta hai {text} ko
    setText(newText);
  };

  //////////////lowercasse
  const handleLoClick = () => {
    console.log("uppercase was clicked" + text); //+ text console may text ko show karaga
    let newText = text.toLowerCase();
    setText(newText);
  };

  //////clear text function
  const handleClearClick = () => {
    console.log("uppercase was clicked" + text); //+text pura remove karaga
    let newText = "";
    setText(newText);
  };
  ////////////////////////////

  const handleOnChange = (event) => {
    console.log("onChange");
    setText(event.target.value); //iis may jab be user change karna chahaya  <textarea> ko kar saktha hai mtlb  text value change karaga video7 19:00
  };
  const [text, setText] = useState("Enter text here");
  // Text="enter text" //wrong way to change text
  //setText("new text"); //correct way to change text
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>

        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>

        <button className=" btn btn-primary mx-3" onClick={handleUpClick}>
          convert in to uppercase
        </button>

        <button className=" btn btn-primary mx-3" onClick={handleLoClick}>
          convert in to lowercase
        </button>
        <button
          className=" btn btn-info bg-emphasis mx-3"
          onClick={handleClearClick}
        >
          Clear Text
        </button>
      </div>

      <div className="container my-2">
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} show words length {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} take minutes to read words </p>
        <h2>Text preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
