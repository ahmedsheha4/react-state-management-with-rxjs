import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddItem from "./pages/additem";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AddItem />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
