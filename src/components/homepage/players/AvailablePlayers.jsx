import React from 'react';
import { FaFlag, FaUser } from 'react-icons/fa';
import Card from '../../ui/Card';

const AvailablePlayers = ({ players, coin, setCoin, selectedPlayers, setSelectedPlayers }) => {

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center'>
            {
                players.map((player) => {
                    return (
                        <Card
                            key={player.id}
                            player={player}
                            coin={coin}
                            setCoin={setCoin}
                            selectedPlayers={selectedPlayers}
                            setSelectedPlayers={setSelectedPlayers}
                        ></Card>
                    )
                })
            }
        </div>
    );
};

export default AvailablePlayers;