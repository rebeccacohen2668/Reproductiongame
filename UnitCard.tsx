
import React from 'react';

interface UnitCardProps {
    title: string;
    gradient: string;
    onClick: () => void;
}

const UnitCard: React.FC<UnitCardProps> = ({ title, gradient, onClick }) => {
    return (
        <div 
            className={`bg-gradient-to-br ${gradient} rounded-lg shadow-lg overflow-hidden cursor-pointer flex-shrink-0 w-[300px] h-[180px] transition-all duration-300 ease-in-out hover:transform hover:-translate-y-1.5 hover:shadow-xl`}
            onClick={onClick}
        >
            <div className="p-6 h-full flex items-center justify-center">
                <h3 className="text-xl font-bold text-white text-center">{title}</h3>
            </div>
        </div>
    );
};

export default UnitCard;
