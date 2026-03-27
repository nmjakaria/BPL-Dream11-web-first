import React, { useState } from 'react';
import { FaFlag, FaUser } from 'react-icons/fa';
import { toast, Slide } from 'react-toastify';

const Card = ({ player, coin, setCoin, selectedPlayers, setSelectedPlayers }) => {
    const { name, country, role, rating, battingStyle, bowlingStyle, price, img } = player;
    const [isSelected, setIsSelected] = useState(false);

    // choose player button function
    const hendleChoosePlayer = () => {
        let newCoin = coin - price;
        if (newCoin >= 0) {
            setCoin(coin - price);
        } else {
            toast.error('Not Enough Balance!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Slide,
            });
            return;
        }
        toast.success(`${name} added for $${price}`, {
            position: "top-right",
            theme: "dark",
            autoClose: 3000,
            transition: Slide,
        });
        setIsSelected(true);
        setSelectedPlayers([...selectedPlayers, player]);
    }
    return (
        <div className="card w-full bg-base-100 shadow-xl border border-gray-100 p-4">
            <figure className="rounded-xl overflow-hidden">
                <img
                    src={img}
                    alt="Virat Kohli"
                    className="w-full h-64 object-cover"
                />
            </figure>

            <div className="card-body px-2 pt-6 pb-2">
                {/* Header Section */}
                <div className="flex items-center gap-3">
                    <div className="text-2xl text-gray-600">
                        <FaUser />
                    </div>
                    <h2 className="card-title text-2xl font-bold">{name}</h2>
                </div>

                {/* Info Section */}
                <div className="flex justify-between items-center mt-4">
                    <div className="flex items-center gap-2 text-gray-500 font-medium">
                        <FaFlag />
                        <span>{country}</span>
                    </div>
                    <div className="badge badge-lg py-4 bg-gray-100 border-none text-gray-700 font-semibold">
                        {role}
                    </div>
                </div>

                <div className="divider my-2"></div>

                {/* Details Section */}
                <div className="space-y-4">
                    <div className="flex justify-between items-center">
                        <span className="font-bold text-lg text-gray-700">Rating</span>
                        <span className="text-gray-500 font-medium">({rating})</span>
                    </div>

                    {battingStyle && (
                        <div className="flex justify-between items-center">
                            <span className="font-bold text-lg text-gray-700">Batting Style</span>
                            <span className="text-gray-500 text-lg">{battingStyle}</span>
                        </div>
                    )}

                    {bowlingStyle && (
                        <div className="flex justify-between items-center">
                            <span className="font-bold text-lg text-gray-700">Bowling Style</span>
                            <span className="text-gray-500 text-lg">{bowlingStyle}</span>
                        </div>
                    )}

                    {/* Action Section */}
                    <div className="flex justify-between items-center mt-6">
                        <span className="font-bold text-xl text-black">Price: ${price}</span>
                        <button className="btn btn-outline border-gray-300 hover:bg-gray-100 hover:text-black normal-case rounded-xl px-6"
                            onClick={hendleChoosePlayer}
                            disabled={isSelected ? true : false}
                        >
                            {!isSelected ? "Choose Player" : "Selected"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;