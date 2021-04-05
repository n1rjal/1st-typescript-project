import React, { useState } from "react";
import Input from "../components/Input";
import useDonaldTrump from "../hooks/useDonaldTrump";

const Home: React.FC = (): React.ReactElement => {
  const [query, setQuery] = useState<string>("");
  const resp = useDonaldTrump(query);
  return (
    <div className="input-wrapper">
      <h1>Donald Trump Quote on {query || "something random"}</h1>
      <div>
        <Input query={query} setQuery={setQuery} />
      </div>
      <p id="donald-trump-response">{resp}</p>
    </div>
  );
};

export default Home;
