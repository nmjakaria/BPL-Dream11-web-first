import React from 'react';
import { MdDelete, MdOutlinePersonAddAlt } from 'react-icons/md';
import { toast } from 'react-toastify';
import EmptySelectedState from '../EmptySelectedState/EmptySelectedState';

const SelectedPlayers = ({ selectedPlayers, setSelectedPlayers, coin, setCoin }) => {
    const hendleDeleteSelectedPlayer = (player) => {
        const filterPlayer = selectedPlayers.filter(
            (playerSelect) => playerSelect.id !== player.id);
        setSelectedPlayers(filterPlayer);
        setCoin(coin + player.price);
        toast.warn(`${player.name} is deleted`, {
            position: "top-right",
            theme: "colored",
        });
    }
    return (
        <div>
            {selectedPlayers.length === 0 ?
                <EmptySelectedState></EmptySelectedState>
                : selectedPlayers.map((player, index) => {
                    const { name, battingStyle, bowlingStyle, img } = player;
                    return (
                        <div
                            key={index}
                        >
                            <div className="flex items-center justify-between bg-white border border-gray-100 shadow-sm p-4 rounded-2xl mb-4">
                                <div className="flex items-center gap-4">
                                    {/* Player Image Placeholder */}
                                    <div className="w-16 h-16 bg-gray-200 rounded-xl overflow-hidden">
                                        <img
                                            src={img}
                                            alt={name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    {/* Player Details */}
                                    <div>
                                        <h3 className="text-xl font-bold text-black">{name}</h3>
                                        {
                                            battingStyle && (
                                                <p className="text-gray-500 font-medium">{battingStyle}</p>
                                            )
                                        }
                                        {
                                            bowlingStyle && (
                                                <p className="text-gray-500 font-medium">{bowlingStyle}</p>
                                            )
                                        }
                                    </div>
                                </div>

                                {/* Delete Action */}
                                <button
                                    className="btn btn-ghost hover:bg-transparent text-red-400 hover:text-red-600 p-2"
                                    aria-label="Delete Player"
                                >
                                    <MdDelete className="text-3xl" onClick={() => hendleDeleteSelectedPlayer(player)} />
                                </button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default SelectedPlayers;