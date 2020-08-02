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
      <TextField text="Type something" handleChange={handleChange} />
      <button type="button" onClick={() => setShowText(true)}>
        display text
      </button>
      {showText && <p>{inputText}</p>}
    </form>
  );
};

export default Form;
