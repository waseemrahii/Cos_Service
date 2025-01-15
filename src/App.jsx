import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navbar />
        <AppRoutes />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
