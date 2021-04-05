import { useEffect, useState } from "react";
import axios from "axios";

const useDonaldTrump = (query: string) => {
  const [response, setResponse] = useState<string>("");
  useEffect(() => {
    let source = axios.CancelToken.source();
    const fetchData = async function (query: string) {
      try {
        const url = query
          ? `https://api.whatdoestrumpthink.com/api/v1/quotes/personalized?q=${query}`
          : `https://api.whatdoestrumpthink.com/api/v1/quotes/random`;

        const response = await axios.get(url, { cancelToken: source.token });
        const respData = await response.data;

        setResponse(respData.message);
        source.cancel();
      } catch (err) {
        axios.isCancel(err) && console.log("cancel token called");
      }
    };
    fetchData(query);
    return () => source.cancel();
  }, [query]);
  return response;
};

export default useDonaldTrump;
