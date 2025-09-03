import { useState } from "react";

function HomePage() {
  const [roomId, setRoomId] = useState("");
  const [userName, setUserName] = useState("");

  const handleChangeName = (event) => {
    setUserName(event.target.value);
  };

  const handleChangeRoomId = (event) => {
    setRoomId(event.target.value);
  };

  return (
    <div className="app-container">
      <div className="btns-container">
        <button className="create-game-btn">צור משחק</button>
      </div>
      <div className="form-container">
        <h1 className="welcome-title">ברוכים הבאים</h1>
        <form
          className="LoginFormContainer"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            placeholder="הזן שם משתמש"
            onChange={handleChangeName}
            value={userName}
          />
          <input
            placeholder="הזן מזהה חדר"
            onChange={handleChangeRoomId}
            value={roomId}
          />
          <button type="submit">התחל משחק</button>
        </form>
      </div>
    </div>
  );
}

export default HomePage;
