import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";

import Home from "./pages/Home";
import Friends from "./pages/Friends";
import Tired from "./pages/Tired";
import Boring from "./pages/Boring";
import Busy from "./pages/Busy";
import Sleep from "./pages/Sleep";
import Finish from "./pages/Finish";

export default function App() {
  return (
    <Routes>

      <Route element={<Layout />}>

        <Route path="/" element={<Home />} />

        <Route path="/friends" element={<Friends />} />

        <Route path="/tired" element={<Tired />} />

        <Route path="/boring" element={<Boring />} />

        <Route path="/busy" element={<Busy />} />

        <Route path="/sleep" element={<Sleep />} />

        <Route path="/finish" element={<Finish />} />

      </Route>

    </Routes>
  );
}