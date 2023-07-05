import React, { useState } from "react";

const GameSelector = () => {
  const [selectedGame, setSelectedGame] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

    const games = ["cricket", "Football", "Hockey"];
    const times = ["weekday", "weekend"];

  const handleGameChange = (event) => {
    setSelectedGame(event.target.value);
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  return (
    <div>
      <h2>Select a Game:</h2>
      {games.map((game) => (
        <label key={game}>
          <input
            type="radio"
            value={game}
            checked={selectedGame === game}
            onChange={handleGameChange}
          />
          {game}
        </label>
      ))}

      <h2>Select a Time:</h2>
      {times.map((items) => (
        <label>
          <input
            type="radio"
            value={items}
            checked={selectedTime === items}
            onChange={handleTimeChange}
          />
          Weekday
        </label>
      ))}

      {selectedGame && selectedTime && (
        <p>
          You selected {selectedGame} on {selectedTime}.
        </p>
      )}
    </div>
  );
};

export default GameSelector;
