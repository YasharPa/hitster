import CreateGame from "./components/CreateGame";
import HomePage from "./Pages/HomePage";
import WatingRoomPage from "./Pages/WatingRoomPage";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        {/* דף הבית */}
        <Route path="/" element={<HomePage />} />
        <Route path="/create-game" element={<CreateGame />} />
        <Route path="/game/:roomId" element={<WatingRoomPage />} />
        {/* כל נתיב לא קיים יחזיר לדף הבית */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
export default App;
