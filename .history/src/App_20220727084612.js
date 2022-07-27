import React from "react";
import Signin from "./components/Signin";

function App() {
  return (
    <div className="App">
          <h1 className="text-3xl text-center font-bold underline">
            Firebase Authorization and Context
            </h1>
            <Routes>
              <Route path="/" element={<Signin/>}  />
              <Route path="/" element={<Signin/>}  />
              <Route path="/" element={<Signin/>}  />

            </Routes>
    </div>
  );
}

export default App;
