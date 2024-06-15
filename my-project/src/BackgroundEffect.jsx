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

    // const handleRedirect = () => {
    //     history.push('/new-page');
    // };

    return (
        <div className="">
            <div
                className="absolute pointer-events-none transform -translate-x-1/2 -translate-y-1/2 opacity-15"
                style={{
                    width: '300px',
                    height: '300px',
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    background: 'radial-gradient(circle, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 70%)',
                    borderRadius: '80%',
                }}
            />
        </div>
    );
};

export default BackgroundEffect;
