import React from "react";

interface Props {
  text: string;
  ok?: boolean;
  i?: number;
  fn?: (arg: string) => string;
  obj?: {
    item: string;
  };
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TextField: React.FC<Props> = ({ text, handleChange }) => {
  return (
    <div>
      <h1>{text}</h1>
      <input onChange={handleChange} />
    </div>
  );
};
