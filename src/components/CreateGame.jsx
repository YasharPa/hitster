import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateGame() {
  const navigation = useNavigate();
  const [gameSettings, setGameSettings] = useState({
    maxPlayers: 4,
    spotifyPlaylist: "",
    roomId: "",
  });
  const [, setRoomCode] = useState("");

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
    console.log("נוצר משחק עם הגדרות:", gameSettings);
    navigation(`/game/${generatedCode}`, {
      state: { gameSettings, roomId: generatedCode },
    });
  };

  const handleBackToHome = () => {
    navigation(`/`);
  };

  return (
    <div className="app-container">
      <div className="btns-container">
        <button className="back-btn" onClick={handleBackToHome}>
          חזור לדף הבית
        </button>
      </div>

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
            אם לא תציינו פלייליסט, המערכת תשתמש בפלייליסט ברירת המחדל שלה
          </div>

          <button onClick={handleCreateGame} className="create-game-submit-btn">
            צור משחק
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateGame;
