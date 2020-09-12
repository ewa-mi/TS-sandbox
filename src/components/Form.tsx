import React, { useState, FC, ChangeEvent } from "react";
import { TextField } from "./TextField";
import { Link } from "react-router-dom";

const Form: FC = () => {
  const [inputText, setInputText] = useState<string>("");
  const [showText, setShowText] = useState<boolean>(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setInputText(event.currentTarget.value);
  };

  const message: JSX.Element = (
    <h1>
      Hello {inputText}, <br></br>welcome to <br></br>the jungle!
    </h1>
  );
  return (
    <>
      {!showText && (
        <form className="nameForm">
          <TextField text="Type your name" handleChange={handleChange} />
          <button
            className="btn-light"
            type="button"
            onClick={() => setShowText(true)}
          >
            OK
          </button>
        </form>
      )}
      {showText && (
        <>
          {message}
          <Link to={`/posts`} className="btn-light">
            go to posts
          </Link>
        </>
      )}
    </>
  );
};

export default Form;
