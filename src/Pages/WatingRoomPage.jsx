import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
/// להוסיף את הקומפוננטה של המשחק
function WatingRoomPage() {
  const [copied, setCopied] = useState(false);
  const navigate = useNavigate();
  const { state } = useLocation();

  const handleCopyRoomCode = async () => {
    try {
      await navigator.clipboard.writeText(state.roomId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("נכשל בהעתקה:", err);
    }
  };
  const handleBackToForm = () => {
    navigate(`/create-game`);
  };
  const handleBackToHome = () => {
    navigate(`/`);
  };
  return (
    <div className="app-container">
      <div className="btns-container">
        <button className="back-btn" onClick={handleBackToForm}>
          ערוך הגדרות
        </button>
        <button className="back-btn" onClick={handleBackToHome}>
          חזור לדף הבית
        </button>
      </div>

      <div className="form-container">
        <h1 className="welcome-title">🎉המשחק נוצר</h1>

        <div className="room-code-container">
          <button className="copy-btn" onClick={handleCopyRoomCode}>
            {copied ? "✔️ הועתק" : "📋 העתק"}
          </button>
          <h2 className="room-code-label">:קוד החדר</h2>
          <div className="room-code">{state.roomId}</div>

          <p className="room-code-instruction">
            שתפו את הקוד הזה עם החברים שלכם כדי שיוכלו להצטרף
          </p>
        </div>

        <div className="game-settings-summary">
          <h3>:הגדרות המשחק</h3>
          <div className="setting-item">
            <strong>מספר משתתפים מקסימלי:</strong>{" "}
            {state.gameSettings.maxPlayers}
          </div>
          <div className="setting-item">
            <strong>פלייליסט:</strong>{" "}
            {state.gameSettings.spotifyPlaylist ||
              "פלייליסט ברירת מחדל של המערכת"}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WatingRoomPage;
