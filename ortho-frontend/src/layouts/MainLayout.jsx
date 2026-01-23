import React from "react";
import Header from "../components/common/Header/Header";
import Footer from "../components/common/Footer/Footer";
import "./MainLayout.css";

const MainLayout = ({ children }) => {
  return (
    <div className="layout">
      <Header />

      <main className="content">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
