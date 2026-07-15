import { Routes, Route } from "react-router-dom";

import LogInteraction from "./pages/LogInteraction";
import SearchInteraction from "./pages/SearchInteraction";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LogInteraction />} />
      <Route path="/search" element={<SearchInteraction />} />
    </Routes>
  );
}
