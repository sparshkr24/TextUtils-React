import React, { useState } from "react";

export default function About(props) {
  //useState variables

  const [aboutStyle, setAboutStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });

  function toggleColor() {
    if (props.mode === "white") {
      setAboutStyle({
        color: "black",
        backgroundColor: "white",
      });
    } else {
      setAboutStyle({
        color: "white",
        backgroundColor: "#010519",
        border: "1px solid white",
      });
    }
  }

  return (
    <div>
      <div className="container py-3">
        <h2
          style={
            props.mode === "dark" ? { color: "white" } : { color: "black" }
          }
        >
          About
        </h2>
        <div className="accordion py-2" id="accordionExample">
          <div
            style={
              props.mode === "dark"
                ? {
                    backgroundColor: "#070748",
                    color: "white",
                    border: "1px solid white",
                  }
                : { backgroundColor: "white", color: "black" }
            }
            className="accordion-item"
          >
            <h2 className="accordion-header" id="headingOne">
              <button
                style={
                  props.mode === "dark"
                    ? {
                        backgroundColor: "#070748",
                        color: "white",
                        border: "1px solid white",
                      }
                    : { backgroundColor: "white", color: "black" }
                }
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                The Artist
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Hey there! My name is Sparsh Kumar and I am a computer science
                and engineering student in my pre-final year at IIITDM Jabalpur.
                I am proficient in developing responsive and user-friendly
                applications using various web technologies like MERN stack,
                Python/Django etc. I am always open to new ideas and challenges,
                and I am looking forward to seeing where my journey takes me in
                the world of computer science and engineering.
              </div>
            </div>
          </div>
          <div
            style={
              props.mode === "dark"
                ? {
                    backgroundColor: "#070748",
                    color: "white",
                    border: "1px solid white",
                  }
                : { backgroundColor: "white", color: "black" }
            }
            className="accordion-item"
          >
            <h2 className="accordion-header" id="headingTwo">
              <button
                style={
                  props.mode === "dark"
                    ? {
                        backgroundColor: "#070748",
                        color: "white",
                        border: "1px solid white",
                      }
                    : { backgroundColor: "white", color: "black" }
                }
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                The Art
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                This is TextWizard, a very useful text-utility application. Here
                you have 5+ features like case conversion of inputted text,
                extracting email from text, tracking word and character count,
                dark mode etc.
              </div>
            </div>
          </div>
          <div
            style={
              props.mode === "dark"
                ? {
                    backgroundColor: "#070748",
                    color: "white",
                    border: "1px solid white",
                  }
                : { backgroundColor: "white", color: "black" }
            }
            className="accordion-item"
          >
            <h2 className="accordion-header" id="headingThree">
              <button
                style={
                  props.mode === "dark"
                    ? {
                        backgroundColor: "#070748",
                        color: "white",
                        border: "1px solid white",
                      }
                    : { backgroundColor: "white", color: "black" }
                }
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Technologies Leveraged
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Employed technologies: Javascript, ES6, ReactJS, React-Hooks,
                React-Router-v6
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
