import React, { useState } from 'react';
import './PlayerProfile.css'; // Ensure you import your CSS file

const players = [
  { name: "Lionel", surname: "Messi", jerseyNumber: 10, position: "Forward", info: "Widely regarded as one of the greatest football players.", image: "messi.jpg" },
  { name: "Cristiano", surname: "Ronaldo", jerseyNumber: 7, position: "Forward", info: "Known for his scoring ability and physicality.", image: "ronaldo.jpg" },
  { name: "Percy", surname: "Tau", jerseyNumber: 9, position: "Forward", info: "South African winger known for his speed.", image: "percy.jpg" },
  { name: "Mohammed", surname: "Salah", jerseyNumber: 11, position: "Forward", info: "Famous for his dribbling and pace.", image: "mohamed.jpg" },
  { name: "Ronwen", surname: "Williams", jerseyNumber: 32, position: "Goalkeeper", info: "Talented goalkeeper with great vision.", image: "wade.jpg" },
  { name: "Neymar", surname: "Junior", jerseyNumber: 11, position: "Forward", info: "Known for his flair and creativity.", image: "neymar.jpg" },
  { name: "Kylian", surname: "Mbappe", jerseyNumber: 10, position: "Forward", info: "One of the most exciting young talents.", image: "mbappe.jpg" },
  { name: "Ayongezwa", surname: "Ndamase", jerseyNumber: 12, position: "Defender", info: "Solid defender with good tactical awareness.", image: "ndamase.jpg" },
  { name: "Ronaldinho", surname: "Gaucho", jerseyNumber: 10, position: "Forward", info: "Most skillful there ever was", image: "ronaldinho.jpg" }
];

const PlayerProfile = () => {
  const [search, setSearch] = useState("");

  const filteredPlayers = players.filter(p => 
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="card">
      <h1>Player Profile</h1>
      <input 
        type="text" 
        value={search} 
        onChange={e => setSearch(e.target.value)} 
        placeholder="Enter player's name" 
      />
      
      {filteredPlayers.map(player => (
        <div className="player-card" key={player.jerseyNumber}>
          <img src={`./images/${player.image}`} alt={`${player.name} ${player.surname}`} />
          <div className="player-info">
            <h2>{player.name} {player.surname}</h2>
            <p>Jersey Number: {player.jerseyNumber}</p>
            <p>Position: {player.position}</p>
            <p>Info: {player.info}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlayerProfile;