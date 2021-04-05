import React from "react";

interface PropsInterface {
  query: string;
  setQuery: any;
}

const Input = ({ query, setQuery }: PropsInterface) => {
  return (
    <form>
      <input
        type="text"
        value={query}
        placeholder="Enter something"
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
    </form>
  );
};

export default Input;
