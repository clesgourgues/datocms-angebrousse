import React from "react";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Encart from "@components/Encart";

const Layout = ({ children, logos, menu, bottomMenu, encart, instagram, text, cart, user }) => (
  <div className="Container">
    {encart.publi && <Encart encart={encart} />}
    <Header logos={logos} cart={cart} menu={menu} />
    <main className="Content">{children}</main>

    <Footer menu={bottomMenu} instagram={instagram} text={text} user={user} />
  </div>
);

export default Layout;
