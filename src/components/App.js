import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import GlobalNav from './GlobalNav';
import Home from './Home';
import Resume from './Resume';
import About from './About';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
      <Router>
      <GlobalNav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
