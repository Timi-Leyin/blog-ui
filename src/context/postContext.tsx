import { GetRequest } from "@/utils/request";
import React, { ReactNode, useEffect, useState } from "react";

const postContext = React.createContext({});

export const PostProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<any>({
    error: false,
    loading: true,
    data: {},
  });
  useEffect(() => {
    GetRequest("/posts?populate=*").then((response) => {
      console.log(response)
      if (response.status != 200) {
        return setState({ error: true, loading: false, data: {} });
      }
      return setState({ data: response.data, error: false, loading: false });
    });
  }, []);
  return <postContext.Provider value={state}>{children}</postContext.Provider>;
};

export default postContext;
