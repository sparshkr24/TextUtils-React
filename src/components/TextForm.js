import React, { useState } from "react";

export default function TextForm(props) {
  const [myAlert, setMyAlert] = useState(``);

  function handleOnChange(e) {
    setText(e.target.value);
  }

  function handleUpClick() {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Successfully converted to UpperCase!", "success");
  }
  function handleDownClick() {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Successfully converted to LowerCase!", "success");
  }
  function handleClearClick() {
    let newText = "";
    setText(newText);
    props.showAlert("TextArea Clear!", "success");
  }
  function handleEmailClick() {
    let words = text.split(" ");
    let newEmail = "";
    for (let key in words) {
      if (words[key].toLowerCase().includes("@gmail.com")) {
        newEmail = words[key];
        break;
      }
    }
    if (newEmail.length === 0) {
      props.showAlert(`Sorry: No Email Found`, "danger");
    } else {
      props.showAlert(`Email Found: ${newEmail}`, "success");
    }
  }

  const [text, setText] = useState("");
  const [email, setEmail] = useState("");
  //return JSX
  return (
    <>
      <div style={props.style}>
        <div className="container" style={props.style}>
          <h1 className="my-0">{props.heading}</h1>
          <textarea
            style={props.style}
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="exampleFormControlTextarea1"
            rows="8"
          ></textarea>
          <button
            disabled={text.length === 0}
            className="my-3 mx-1 btn btn-primary"
            onClick={handleUpClick}
          >
            Convert to UpperCase
          </button>
          <button
            disabled={text.length === 0}
            className="my-3 mx-1 btn btn-primary"
            onClick={handleDownClick}
          >
            Convert to LowerCase
          </button>
          <button
            disabled={text.length === 0}
            className="my-3 mx-1 btn btn-danger"
            onClick={handleClearClick}
          >
            Clear
          </button>
          <button
            disabled={text.length === 0}
            className="my-3 mx-1 btn btn-success"
            onClick={handleEmailClick}
          >
            Extract Email
          </button>
          <div className="container py-2">
            <h2>Your Text Summary</h2>
            <span>
              {
                text.split(" ").filter((e) => {
                  return e.length != 0;
                }).length
              }{" "}
              words and {text.length} characters
            </span>
            \
            <p>
              {text.split(" ").filter((e) => {
                return e.length != 0;
              }).length * 0.005}{" "}
              minutes read
            </p>
            <h3>Preview</h3>
            <hr />
            <p>
              {text.length === 0
                ? "Enter some text above to view it here"
                : text}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
