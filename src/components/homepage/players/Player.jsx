import React, { use, useState } from 'react';
import AvailablePlayers from './AvailablePlayers';
import SelectedPlayers from '../selectedPlayers/SelectedPlayers';

const Player = ({ playerPromice, coin, setCoin }) => {
    const players = use(playerPromice);
    const [selectedType, setSelectedType] = useState("available");
    const [selectedPlayers, setSelectedPlayers] = useState([]);

    return (
        <div className='container mx-auto mt-8'>
            <div className='flex justify-between items-center mb-4'>
                {
                    selectedType === "available" ?
                        <h2 className='text-3xl font-bold'>Available Players</h2> :
                        <h2 className='text-3xl font-bold'>Selected Players ({selectedPlayers.length}/{players.length})</h2>}
                <div>
                    <button onClick={() => { setSelectedType("available") }} className={`btn ${selectedType === 'available' ? "bg-[#E7FE29]" : ""} rounded-r-none rounded-l-xl`}>Available</button>
                    <button onClick={() => { setSelectedType("selected") }} className={`btn ${selectedType === 'selected' ? "bg-[#E7FE29]" : ""} rounded-l-none rounded-r-xl`}>Selected ({selectedPlayers.length})</button>
                </div>
            </div>
            {selectedType === 'available' ?
                <AvailablePlayers players={players}
                    coin={coin}
                    setCoin={setCoin}
                    selectedPlayers={selectedPlayers}
                    setSelectedPlayers={setSelectedPlayers} ></AvailablePlayers> :
                <SelectedPlayers
                    selectedPlayers={selectedPlayers}
                    setSelectedPlayers={setSelectedPlayers}
                    coin={coin}
                    setCoin={setCoin}
                    ></SelectedPlayers>
            }
        </div>
    );
};

export default Player;