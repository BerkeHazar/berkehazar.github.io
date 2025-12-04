import { useState, useEffect } from 'react';

const Header = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatTime = (date) => {
        return date.toLocaleTimeString('tr-TR', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
        });
    };

    const formatDate = (date) => {
        return date.toLocaleDateString('en-US', {
            weekday: 'long',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <header className="text-center mb-8">
            <h1 className="text-7xl font-light text-white mb-2">
                {formatTime(currentTime)}
            </h1>
            <p className="text-lg text-white/60 font-medium">
                {formatDate(currentTime)}
            </p>
        </header>
    );
};

export default Header;
