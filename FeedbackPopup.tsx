
import React, { useState, useEffect } from 'react';

interface FeedbackPopupProps {
    message: string;
    type: 'success' | 'error';
}

const FeedbackPopup: React.FC<FeedbackPopupProps> = ({ message, type }) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setVisible(true);
        const timer = setTimeout(() => setVisible(false), 1400); 
        return () => clearTimeout(timer);
    }, [message, type]);
    
    const colorClass = type === 'success' ? 'text-green-600' : 'text-red-600';

    return (
        <div 
            className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-xl p-6 text-center text-2xl font-bold z-50 transition-all duration-300 ease-in-out
                        ${visible ? 'opacity-100 -translate-y-1/2' : 'opacity-0 -translate-y-2/3'}`}
        >
            <p className={colorClass}>{message}</p>
        </div>
    );
};

export default FeedbackPopup;
