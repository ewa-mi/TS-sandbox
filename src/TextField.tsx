import React, { useRef } from "react";

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

export const TextField: React.FC<Props> = ({ handleChange }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const divRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={divRef}>
      <h1>say hello</h1>
      <input ref={inputRef} onChange={handleChange} />
    </div>
  );
};
