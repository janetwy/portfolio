import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import GlobalNav from './GlobalNav';
import Resume from './Resume';
import About from './About';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
      <Router>
      <GlobalNav />
        <Routes>
          <Route exact path="/" component={App} />
          <Route path="/resume" component={Resume} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
