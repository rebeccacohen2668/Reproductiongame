
import React from 'react';
import { gameData } from './data';
import UnitCard from './UnitCard';

interface HomePageProps {
    onSelectUnit: (unitName: string) => void;
}

const unitCardGradients = [
    'from-purple-400 to-pink-500',
    'from-blue-400 to-cyan-500',
    'from-green-400 to-emerald-500',
    'from-orange-400 to-red-500',
    'from-yellow-400 to-orange-500',
    'from-pink-400 to-rose-500',
    'from-indigo-400 to-purple-500'
];

const HomePage: React.FC<HomePageProps> = ({ onSelectUnit }) => {
    const units = Object.keys(gameData);

    return (
        <div>
            <h1 className="text-4xl font-bold text-center text-green-700 mb-2">משחקי רבייה בעולם החי</h1>
            <p className="text-xl text-center text-gray-600 mb-8">בחרו יחידה כדי להתחיל לשחק</p>
            
            <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
                {units.map((unitName, index) => (
                    <UnitCard 
                        key={unitName}
                        title={unitName}
                        gradient={unitCardGradients[index % unitCardGradients.length]}
                        onClick={() => onSelectUnit(unitName)}
                    />
                ))}
            </div>
        </div>
    );
};

export default HomePage;
