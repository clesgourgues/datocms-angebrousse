import React from "react";
import { SnipProvider } from "./src/context/SnipContext";
export const wrapRootElement = ({ element }) => <SnipProvider>{element}</SnipProvider>;
