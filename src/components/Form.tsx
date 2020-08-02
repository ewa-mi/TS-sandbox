import React, { useState, FC, ChangeEvent } from "react";
import { TextField } from "./TextField";
import { Link } from "react-router-dom";

const Form: FC = () => {
  const [inputText, setInputText] = useState("");
  const [showText, setShowText] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputText(event.currentTarget.value);
  };

  const message = (
    <h1>
      Hello {inputText}, <br></br>welcome to <br></br>the jungle!
    </h1>
  );
  return (
    <>
      {!showText && (
        <form>
          <TextField text="Type your name" handleChange={handleChange} />
          <button
            className="btn-light"
            type="button"
            onClick={() => setShowText(true)}
          >
            display message
          </button>
        </form>
      )}
      {showText && (
        <>
          {message}
          <Link to={`/posts`} className="btn-dark">
            go to posts
          </Link>
        </>
      )}
    </>
  );
};

export default Form;
