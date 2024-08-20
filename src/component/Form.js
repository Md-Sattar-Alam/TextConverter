import React, { useState } from "react";

export default function Form(props) {
  const hendalUpClick = () => {
    let newClick = text.toUpperCase();
    setText(newClick);
  };

  const hendalLowClick = () => {
    let newokey = text.toLowerCase();
    setText(newokey);
  };
  const hendalClear = () => {
    let newCle = " ";
    setText(newCle);
  };

  // const titleOn = () => {
  //   let manHat = text.charAt(0).toUpperCase() + text.slice(1);
  //   setText(manHat);
  // };

  const heandelOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter the text");
  return (
    <>
      <h2>{props.heading}</h2>
      <div className="mb-3">
        <textarea
          className="form-control"
          onChange={heandelOnChange}
          value={text}
          id="exampleFormControlTextarea1"
          rows="10"
        ></textarea>
      </div>

      <button className="btn btn-primary mx-2" onClick={hendalUpClick}>
        Convet to UpperCase
      </button>
      <button className="btn btn-primary mx-2" onClick={hendalLowClick}>
        Convet to LowerCase
      </button>
      <button className="btn btn-primary mx-2" onClick={hendalClear}>
        Clear Text
      </button>
      {/* <button className="btn btn-primary" onClick={titleOn}>
        title Case
      </button> */}

      <div className="conteinar my-4">
        <h2>Your text summary</h2>
        <h5>
          {text.split(" ").length} words and {text.length} characters
        </h5>
        <p>{0.00666666666667 * text.split(" ").length} Minutes read</p>
      </div>
    </>
  );
}
