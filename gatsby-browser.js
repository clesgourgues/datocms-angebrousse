import React from "react";
import { SnipProvider } from "./src/context/SnipContext";
export const wrapRootElement = ({ element }) => <SnipProvider>{element}</SnipProvider>;
export const onClientEntry = () => {
  // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
  if (typeof window.IntersectionObserver === `undefined`) {
    import(`intersection-observer`);
    console.log(`# IntersectionObserver is polyfilled!`);
  }
};
