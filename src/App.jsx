import React from "react";
import Nav from "./components/Nav";
import MainRoutes from "./AllRoutes/MainRoutes";

const App = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <Nav />
      <main className="pt-20">
        <MainRoutes />
      </main>
    </div>
  );
};

export default App;