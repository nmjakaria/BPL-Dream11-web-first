import React from 'react';
import bannerShadow from "../../assets/bg-shadow.png";
import bannerLogo from "../../assets/banner-main.png";
import { toast, Zoom } from 'react-toastify';

const Banner = ({ coin, setCoin }) => {
    const amount = 50000;

    const handleGetCoin = () => {
        const newCoin = coin + amount;

        setCoin(newCoin);
// shwo toast when coin add
        toast.success(
            <div className="text-center">
                <p>🎉 +{amount} coins added!</p>
                <p className="font-bold">Balance: {newCoin}</p>
            </div>,
            {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: true,
                theme: "colored",
                transition: Zoom,
            }
        );
    };
    return (
        <div>
            <div className="container mx-auto mt-8">
                <div
                    className="hero min-h-\[450px\] rounded-2xl bg-[#131313] overflow-hidden"
                    style={{
                        backgroundImage: `url(${bannerShadow})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    }}
                >
                    <div className="hero-content text-center text-white">
                        <div className="max-w-4xl">
                            {/* Center Logo/Image */}
                            <div className="flex justify-center mb-6">
                                <img
                                    src={bannerLogo}
                                    alt="Cricket Dream 11"
                                    className="w-48 md:w-64 h-auto"
                                />
                            </div>

                            {/* Title */}
                            <h1 className="text-2xl md:text-3xl font-bold leading-tight mb-4">
                                Assemble Your Ultimate Dream 11 Cricket Team
                            </h1>

                            {/* Subtitle */}
                            <p className="text-gray-400 text-lg md:text-xl font-semibold mb-8">
                                Beyond Boundaries Beyond Limits
                            </p>

                            {/* Claim Button */}
                            <button onClick={handleGetCoin}
                                className="btn border-none rounded-xl px-8 py-3 h-auto min-h-0 bg-[#E7FE29] hover:bg-[#d4e925] text-black font-bold text-lg shadow-[0_0_20px_rgba(231,254,41,0.3)] transition-all active:scale-95"
                            >
                                Claim Free Credit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;