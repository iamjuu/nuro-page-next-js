'use client';

import { useEffect } from 'react';

const Navbar = () => {
    useEffect(() => {
        console.log('Navbar component mounted');
        return () => {
            console.log('Navbar component unmounted');
        };
    }, []);

    console.log('Navbar component rendering');
    
    return (
        <nav className="bg-white shadow-md">
            <div className="container mx-auto px-4 py-3">
                <ul className="flex space-x-4">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
            
        </nav>
    );
};

export default Navbar; 