import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar.tsx";
import Stream from "./pages/stream.tsx";
import './index.css';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Stream />} />
      </Routes>
    </Router>
  );
};

export default App;
