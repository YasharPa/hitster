import { useState } from "react";

function CreateGame() {
  const [currentStep, setCurrentStep] = useState(1); // 1 = טופס יצירה, 2 = קוד חדר
  const [gameSettings, setGameSettings] = useState({
    maxPlayers: 4,
    spotifyPlaylist: "",
  });
  const [roomCode, setRoomCode] = useState("");

  const generateRoomCode = () => {
    // פונקציה זמנית לגנרציית קוד - בעתיד יבוא מהסרבר
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let result = "";
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };

  const handleMaxPlayersChange = (event) => {
    setGameSettings({
      ...gameSettings,
      maxPlayers: parseInt(event.target.value),
    });
  };

  const handlePlaylistChange = (event) => {
    setGameSettings({
      ...gameSettings,
      spotifyPlaylist: event.target.value,
    });
  };

  const handleCreateGame = () => {
    // כאן נשלח בעתיד בקשה לסרבר ליצירת החדר
    const generatedCode = generateRoomCode();
    setRoomCode(generatedCode);
    setCurrentStep(2);
    console.log("נוצר משחק עם הגדרות:", gameSettings);
  };

  const handleBackToForm = () => {
    setCurrentStep(1);
  };

  const handleStartWaiting = () => {
    // כאן נעבור למסך ההמתנה למשתתפים
    console.log("מעבר למסך המתנה למשתתפים");
  };

  // מסך הצגת קוד החדר
  if (currentStep === 2) {
    return (
      <div className="app-container">
        <div className="btns-container">
          <button className="back-btn" onClick={handleBackToForm}>
            חזור
          </button>
        </div>

        <div className="form-container">
          <h1 className="welcome-title">המשחק נוצר! 🎉</h1>

          <div className="room-code-container">
            <h2 className="room-code-label">קוד החדר:</h2>
            <div className="room-code">{roomCode}</div>
            <p className="room-code-instruction">
              שתפו את הקוד הזה עם החברים שלכם כדי שיוכלו להצטרף
            </p>
          </div>

          <div className="game-settings-summary">
            <h3>הגדרות המשחק:</h3>
            <div className="setting-item">
              <strong>מספר משתתפים מקסימלי:</strong> {gameSettings.maxPlayers}
            </div>
            <div className="setting-item">
              <strong>פלייליסט:</strong>{" "}
              {gameSettings.spotifyPlaylist || "פלייליסט ברירת מחדל של המערכת"}
            </div>
          </div>

          <button className="start-waiting-btn" onClick={handleStartWaiting}>
            🕐 התחל להמתין למשתתפים
          </button>
        </div>
      </div>
    );
  }

  // מסך טופס יצירת המשחק
  return (
    <div className="app-container">
      <div className="form-container">
        <h1 className="welcome-title">צור משחק חדש 🎮</h1>

        <div className="LoginFormContainer">
          <div className="form-group">
            <label htmlFor="maxPlayers" className="form-label">
              כמות משתתפים מקסימלית
            </label>
            <select
              id="maxPlayers"
              value={gameSettings.maxPlayers}
              onChange={handleMaxPlayersChange}
              className="form-select"
            >
              <option value={2}>2 משתתפים</option>
              <option value={3}>3 משתתפים</option>
              <option value={4}>4 משתתפים</option>
              <option value={5}>5 משתתפים</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="spotifyPlaylist" className="form-label">
              קישור לפלייליסט בספוטיפי (אופציונלי)
            </label>
            <input
              id="spotifyPlaylist"
              type="url"
              placeholder="https://open.spotify.com/playlist/..."
              value={gameSettings.spotifyPlaylist}
              onChange={handlePlaylistChange}
            />
          </div>

          <div className="playlist-note">
            💡 אם לא תציינו פלייליסט, המערכת תשתמש בפלייליסט ברירת המחדל שלה
          </div>

          <button onClick={handleCreateGame} className="create-game-submit-btn">
            🚀 צור את המשחק
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateGame;
