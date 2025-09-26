
import React from 'react';

interface CompletionModalProps {
    isLastLevel: boolean;
    onNextLevel: () => void;
    onGoHome: () => void;
}

const CompletionModal: React.FC<CompletionModalProps> = ({ isLastLevel, onNextLevel, onGoHome }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-xl p-8 text-center max-w-md mx-4">
                <div className="text-2xl font-bold mb-6">
                    {isLastLevel 
                        ? '🎉 כל הכבוד! סיימתם את המשחק ליחידה זו' 
                        : '✔ סיימתם את שלב זה'
                    }
                </div>
                {isLastLevel ? (
                    <button 
                        onClick={onGoHome}
                        className="px-8 py-4 text-xl font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-lg hover:shadow-xl transition-all"
                    >
                        ⬅ חזרה לדף הבית
                    </button>
                ) : (
                    <button 
                        onClick={onNextLevel}
                        className="px-8 py-4 text-xl font-bold text-white bg-green-600 hover:bg-green-700 rounded-lg shadow-lg hover:shadow-xl transition-all"
                    >
                        ➡ המשיכו לשלב הבא
                    </button>
                )}
            </div>
        </div>
    );
};

export default CompletionModal;
