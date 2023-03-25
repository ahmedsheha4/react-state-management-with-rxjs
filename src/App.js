import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddItem from "./pages/additem";
import Main from "./pages/main";
import { useEffect } from "react";
import {
  listenForNotifications,
  stopListeningForNotifications,
} from "./services/notification-service";
function App() {
  useEffect(() => {
    listenForNotifications();
    return () => {
      stopListeningForNotifications();
    };
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes location={""}>
          <Route path="/" element={<AddItem />} />
          <Route path="/main" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
