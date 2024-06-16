import { useState, useEffect } from 'react';

const BackgroundEffect = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 }); // position holds x, y coords of cursor

    useEffect(() => { // event listener for mousemove, updates position of cursor
        const handleMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove); 

        return () => {
            window.removeEventListener('mousemove', handleMouseMove); // removes to avoid memory leaks
        };
    }, []);

    // fixed inset-0 pointer-events-none z-0: allows the background effect to apply to entirety of page regardless of other components
    return (
        <div className="fixed inset-0 pointer-events-none z-0"> 
            <div
                className="absolute pointer-events-none transform -translate-x-1/2 -translate-y-1/2 opacity-15"
                style={{
                    width: '300px',
                    height: '300px',
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    background: 'radial-gradient(circle, #b38b6d66 20%, #b38b6d00 70%)',
                    borderRadius: '80%',
                }}
            />
        </div>
    );
};

export default BackgroundEffect;
