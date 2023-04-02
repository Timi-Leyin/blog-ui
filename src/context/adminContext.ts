import { adminInfo } from "@/interface/admin";
import React from "react";

export default React.createContext<adminInfo>({
  isLoading: true,
  error: "",
  data: {
    email: "",
    name: "",
  },
});
