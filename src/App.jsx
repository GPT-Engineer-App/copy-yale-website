import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Academics from "./pages/Academics.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/academics" element={<Academics />} />
      </Routes>
    </Router>
  );
}

export default App;
