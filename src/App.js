import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login/Login";
import Reservation from "./Reservation/Reservation";
import Rooms from "./Room/room";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/room" element={<Rooms />} />
      </Routes>
    </Router>
  );
}

export default App;
