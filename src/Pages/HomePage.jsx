import { useState } from "react";
import { useNavigate } from "react-router-dom";
function HomePage() {
  const [roomId, setRoomId] = useState("");
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();
  const handleChangeName = (event) => {
    setUserName(event.target.value);
  };

  const handleChangeRoomId = (event) => {
    setRoomId(event.target.value);
  };

  const handleStartGame = (e) => {
    e.preventDefault();
    if (userName.trim() && roomId.trim()) {
      // כאן תוכל להוסיף לוגיקה להצטרפות למשחק
      console.log("מצטרף למשחק:", { userName, roomId });
    } else {
      alert("אנא מלא את כל השדות");
    }
  };
  const handleCreateGame = () => {
    navigate(`/create-game`);
  };
  // המסך הראשי
  return (
    <div className="app-container">
      <div className="btns-container">
        <button className="create-game-btn" onClick={handleCreateGame}>
          צור משחק
        </button>
      </div>
      <div className="form-container">
        <h1 className="welcome-title">ברוכים הבאים</h1>
        <form className="LoginFormContainer" onSubmit={handleStartGame}>
          <input
            placeholder="הזן שם משתמש"
            onChange={handleChangeName}
            value={userName}
            required
          />
          <input
            placeholder="הזן מזהה חדר"
            onChange={handleChangeRoomId}
            value={roomId}
            required
          />
          <button type="submit">התחל משחק</button>
        </form>
      </div>
    </div>
  );
}

export default HomePage;
