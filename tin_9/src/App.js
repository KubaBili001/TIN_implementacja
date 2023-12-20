import { BrowserRouter, Routes, Route } from "react-router-dom";
import List from './components/List/List';
import Login from "./routes/Login";
import Register from "./routes/Register";
import NoPage from "./routes/NoPage";
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />0
            <Route path="/app" element={<List />} />
            <Route path="*" element={<NoPage />} />
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
