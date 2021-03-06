import React, { FunctionComponent, useEffect, useRef } from "react";
import "../../assets/styles/input.scss";

interface InputProps {
  type: "text" | "number";
  label?: string;
  placeholder?: string;
  error?: boolean;
  value: any;
  onChange: () => void;
  multiline?: boolean;
  rows?: number;
}

const Input: FunctionComponent<InputProps> = ({
  type = "text",
  label,
  placeholder,
  error,
  value,
  multiline = false,
  rows = 3,
  onChange,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const input = inputRef.current;
    const textarea = textareaRef.current;

    if (error && input) input.className = "input__errored";
    if (!error && input) input.className = "input__default";

    if (error && textarea) textarea.className = "input__errored";
    if (!error && textarea) textarea.className = "input__default";
  }, [error]);

  return (
    <div className="input">
      {label && <label>{label}</label>}
      {multiline ? (
        <textarea
          ref={textareaRef}
          placeholder={placeholder}
          value={value}
          rows={rows}
          onChange={onChange}
          className="input__default"
        ></textarea>
      ) : (
        <input
          ref={inputRef}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="input__default"
        />
      )}
    </div>
  );
};

export default Input;
