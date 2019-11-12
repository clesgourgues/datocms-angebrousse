import React, { useState, useEffect } from "react";
import BackgroundImage from "gatsby-background-image";
import Header from "@components/Header";

const Homepage = ({ children, images, menu, cart, user }) => {
  const [selected, setSelected] = useState(0);
  const [stop, setStop] = useState(false);
  const [open, setOpen] = useState(false);
  const [password, setPassword] = useState("");
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
      // fadeIn="soft"
    >
      {password === "sesame" ? (
        <>
          <Header
            logos={images}
            menu={menu}
            isHome={true}
            open={open}
            setOpen={setOpen}
            cart={cart}
            user={user}
          />
          <main className="Content">{children}</main>
        </>
      ) : (
        <div
          style={{
            position: "absolute",
            top: "100px",
            left: "100px",
            width: "200px",
            height: "50px"
          }}
        >
          <label style={{ color: "white" }}>Site en construction</label>
          <input value={password} onChange={e => setPassword(e.target.value)} />
        </div>
      )}
    </BackgroundImage>
  );
};

export default Homepage;
