import React, { useState } from 'react';
import './PlayerProfile.css'; // Ensure you import your CSS file

// Import images with correct paths
import messi from '../images/messi.jpeg';
import ronaldo from '../images/ronaldo.jpeg';
import percy from '../images/percy.jpeg';
import mohamed from '../images/mohamed.jpeg';
import ronwin from '../images/ronwin.jpeg';
import neymar from '../images/neymar.jpeg';
import kylian from '../images/kylian.jpeg';

const players = [
  { name: "Lionel", surname: "Messi", jerseyNumber: 10, position: "Forward", info: "Widely regarded as one of the greatest football players.", image: messi },
  { name: "Cristiano", surname: "Ronaldo", jerseyNumber: 7, position: "Forward", info: "Known for his scoring ability and physicality.", image: ronaldo },
  { name: "Percy", surname: "Tau", jerseyNumber: 9, position: "Forward", info: "South African winger known for his speed.", image: percy },
  { name: "Mohammed", surname: "Salah", jerseyNumber: 11, position: "Forward", info: "Famous for his dribbling and pace.", image: mohamed },
  { name: "Rowen", surname: "Wade", jerseyNumber: 8, position: "Midfielder", info: "Talented midfielder with great vision.", image: ronwin },
  { name: "Neymar", surname: "Junior", jerseyNumber: 11, position: "Forward", info: "Known for his flair and creativity.", image: neymar },
  { name: "Kylian", surname: "Mbappe", jerseyNumber: 10, position: "Forward", info: "One of the most exciting young talents.", image: kylian },
];

const PlayerProfile = () => {
  const [search, setSearch] = useState("");
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = () => {
    setLoading(true); // Set loading to true
    const player = players.find(player => 
      player.name.toLowerCase() === search.toLowerCase() ||
      player.surname.toLowerCase() === search.toLowerCase()
    );

    setTimeout(() => { // Simulate loading delay
      setLoading(false); // Set loading to false
      if (player) {
        setSelectedPlayer(player);
        setSearch(""); // Clear search input
      } else {
        setSelectedPlayer(null);
      }
    }, 1000); // 1 second delay for demo purposes
  };

  return (
    <div className="card">
      <h1>Player Profile</h1>
      <input 
        type="text" 
        value={search} 
        onChange={e => setSearch(e.target.value)} 
        placeholder="Search by name or surname" 
      />
      <button onClick={handleSearch}>Search</button>

      {loading ? (
        <p>Loading Player...</p> // Show loading message
      ) : selectedPlayer ? (
        <div className="player-card">
          <img src={selectedPlayer.image} alt={`${selectedPlayer.name} ${selectedPlayer.surname}`} />
          <div className="player-info">
            <h2>{selectedPlayer.name} {selectedPlayer.surname}</h2>
            <p>Jersey Number: {selectedPlayer.jerseyNumber}</p>
            <p>Position: {selectedPlayer.position}</p>
            <p>Info: {selectedPlayer.info}</p>
          </div>
        </div>
      ) : (
        search && <p>No player found. Please try a different search term.</p>
      )}
    </div>
  );
};

export default PlayerProfile;
