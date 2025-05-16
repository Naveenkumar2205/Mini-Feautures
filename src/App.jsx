import React, { useState } from "react";
import "./styles.css";

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [reactions, setReactions] = useState([]);
  const [selectedEmoji, setSelectedEmoji] = useState(null); // for underline

  const handleYes = () => {
    alert("You clicked Yes");
    setIsPopupOpen(false);
  };

  const handleNo = () => {
    alert("You clicked No");
    setIsPopupOpen(false);
  };

  const handleEmojiClick = (emoji) => {
    setReactions([emoji]); // Add only clicked emoji
    setSelectedEmoji(emoji); // Track selected emoji
  };

  const handleReactionBadgeClick = () => {
    setReactions([]);
    setSelectedEmoji(null);
  };

  // Emoji list with labels for tooltip text
  const emojiList = [
    { symbol: "😊", label: "Smile" },
    { symbol: "👍", label: "Like" },
    { symbol: "❤️", label: "Heart" },
    { symbol: "😂", label: "Laugh" },
    { symbol: "😮", label: "Surprised" }
  ];

  return (
    <div className="App">
      <button onClick={() => setIsPopupOpen(true)}>Open Popup</button>

      {isPopupOpen && (
        <div className="popup-overlay">
          <div className="popup-box">
            <h2 className="popup-heading">Confirmation</h2>
            <hr className="popup-divider" />
            <p className="popup-content">
              Are you sure you want to perform this action?
            </p>
            <div className="popup-buttons">
              <button onClick={handleYes} className="yes-btn">
                Yes
              </button>
              <button onClick={handleNo} className="no-btn">
                No
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="Recation-Msg">
        Hover me to add reaction
        <div className="emoji-popup">
          {emojiList.map(({ symbol, label }) => (
            <span
              key={symbol}
              className={`emoji ${selectedEmoji === symbol ? "underline" : ""}`}
              onClick={() => handleEmojiClick(symbol)}
              style={{ position: "relative", display: "inline-block" }}
            >
              <span className="emoji-char">{symbol}</span>
              <span className="emoji-tooltip">{label}</span>
            </span>
          ))}
        </div>

        {/* Render chosen reactions */}
        <div className="reaction-badges">
          {reactions.map((emoji) => {
            const emojiObj = emojiList.find(e => e.symbol === emoji);
            return (
              <span
                key={emoji}
                className="reaction-badge"
                onClick={handleReactionBadgeClick}
                style={{ position: "relative" }}
              >
                <span className="Reaction-char">{emoji}</span>
                <span className="Reaction-tooltip">
                  <span className="Reaction-label">{emojiObj ? emojiObj.label : ""}</span>
                  <span className="Reaction-user-emoji">
                    <span className="Reaction-User">Naveen Kumar</span>
                    <span className="Reaction-char">{emoji}</span>
                  </span>
                </span>
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
