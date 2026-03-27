import React from 'react';
import { MdOutlinePersonAddAlt } from "react-icons/md";
const EmptySelectedState = () => {
    return (
        <div className="flex flex-col items-center justify-center p-12 bg-gray-50 border-2 border-dashed border-gray-200 rounded-[32px] text-center">
            {/* Icon Wrapper */}
            <div className="bg-white p-6 rounded-full shadow-sm mb-6 text-gray-400">
                <MdOutlinePersonAddAlt className="text-6xl" />
            </div>

            {/* Text Content */}
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
                No Player Selected Yet!
            </h2>
            <p className="text-gray-500 max-w-xs mx-auto text-lg leading-relaxed">
                Your squad is looking a bit empty. Go to the <span className="font-semibold text-black">Available</span> tab to start building your Dream 11.
            </p>

            {/* Optional "Go Back" Hint */}
            <div className="mt-8">
                <div className="badge badge-lg py-4 bg-[#E7FE29] border-none text-black font-bold">
                    Squad Limit: 0/11
                </div>
            </div>
        </div>
    );
};

export default EmptySelectedState;