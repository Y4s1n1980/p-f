import React from "react";
import Index from "./pages/index";
import Create from "./pages/create";
import View from "./pages/view";
import LoginPage from "./pages/LoginPage"; 
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Store from "./store/store";

function App() {
  return (
    <Store>
      <div className="App">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="create" element={<Create />} />
          <Route path="view/:bookId" element={<View />} />
          <Route path="login" element={<LoginPage />} />
        </Routes>
      </div>
    </Store>
  );
}

export default App;






