import React from "react";

function App() {
  return (
    <div className="App">
          <h1 className="text-3xl text-center font-bold underline">
            Firebase Authorization and Context
            </h1>
            <Routes>
              <Route path="/" element={<Login />}  />
            </Routes>
    </div>
  );
}

export default App;
