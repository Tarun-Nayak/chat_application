import React from "react";
import "./App.css";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Join from "./Component/Join/Join";
import Chat from "./Component/Chat/Chat";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Join />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </div>
  );
};

export default App;
