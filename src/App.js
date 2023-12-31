import React from "react";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="w-full h-auto bg-bodyColors text-lightText">
      <div className="max-w-screen-2xl mx-auto px-16">
        <Navbar />
      </div>
    </div>
  );
}

export default App;
