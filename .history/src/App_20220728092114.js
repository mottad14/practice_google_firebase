import React from "react";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Account from "./components/Account"
import { Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  return (
    <div className="App">
          <h1 className="text-3xl text-center font-bold underline">
            Firebase Authorization and Context
            </h1>
            <AuthContextProvider>
                <Routes>
                  <Route path="/" element={<Signin/>}  />
                  <Route path="/signup" element={<Signup/>}  />
                  <Route path="/account" element={}/>
                  <ProtectedRoute></ProtectedRoute>
                </Routes>
            </AuthContextProvider>
    </div>
  );
}

export default App;
