import React, { useState, FC, ChangeEvent } from "react";
import { TextField } from "./TextField";

const Form: FC = () => {
  const [inputText, setInputText] = useState("");
  const [showText, setShowText] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputText(event.currentTarget.value);
  };

  return (
    <form>
      <TextField text="Type your name" handleChange={handleChange} />
      <button
        className="btn-light"
        type="button"
        onClick={() => setShowText(true)}
      >
        display
      </button>
      {showText && (
        <h1>
          Hello {inputText}, <br></br>welcome to <br></br>the jungle!
        </h1>
      )}
    </form>
  );
};

export default Form;
