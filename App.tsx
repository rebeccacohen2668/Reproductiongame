
import React, { useState } from 'react';
import HomePage from './components/HomePage';
import GamePage from './components/GamePage';
import { gameData } from './data';

const App: React.FC = () => {
    const [selectedUnit, setSelectedUnit] = useState<string | null>(null);

    const handleSelectUnit = (unitName: string) => {
        setSelectedUnit(unitName);
    };

    const handleGoHome = () => {
        setSelectedUnit(null);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            {selectedUnit ? (
                <GamePage 
                    key={selectedUnit} // Using key to reset component state when unit changes
                    unitName={selectedUnit} 
                    unitData={gameData[selectedUnit]} 
                    onGoHome={handleGoHome} 
                />
            ) : (
                <HomePage onSelectUnit={handleSelectUnit} />
            )}
        </div>
    );
};

export default App;
