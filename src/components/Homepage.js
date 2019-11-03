import React, { useState, useEffect } from "react";
import BackgroundImage from "gatsby-background-image";
import Header from "@components/Header";

const Layout = ({ children, images, menu }) => {
  const [selected, setSelected] = useState(0);
  const [stop, setStop] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.body.addEventListener("click", handleClick);
  }, []);

  const handleClick = () => {
    setStop(true);
  };
  useEffect(() => {
    const next = selected === images.slider.length - 1 ? 0 : selected + 1;
    if (!stop) {
      const interval = setInterval(() => {
        setSelected(next);
      }, 3000);
      return () => clearInterval(interval);
    }
  });
  return (
    <BackgroundImage
      Tag="section"
      fluid={images.slider[selected].fluid}
      className="Container"
    >
      <Header logos={images} menu={menu} isHome={true} open={open} setOpen={setOpen} />
      <main className="Content">{children}</main>
    </BackgroundImage>
  );
};

export default Layout;
