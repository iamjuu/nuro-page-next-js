'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

const Header = () => {
    useEffect(() => {
        console.log('Header component mounted');
        return () => {
            console.log('Header component unmounted');
        };
    }, []);

    console.log('Header component rendering');
    
    return (
        <header className="w-full bg-white shadow-sm">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                {/* Logo Section - 20% */}
                <div className="w-[20%] flex items-center justify-start">
                    <Link href="/" className="flex items-center">
                        <h1 className="text-2xl font-bold text-blue-900">HOSPITY</h1>
                    </Link>
                </div>

                {/* Navigation Section - 50% */}
                <nav className="w-[50%] flex items-center justify-center">
                    <ul className="flex space-x-8">
                        <li>
                            <Link href="/body-systems" className="text-gray-600 hover:text-blue-900 font-medium">
                                BODY SYSTEMS
                            </Link>
                        </li>
                        <li>
                            <Link href="/labs" className="text-gray-600 hover:text-blue-900 font-medium">
                                LABS
                            </Link>
                        </li>
                        <li>
                            <Link href="/medical-history" className="text-gray-600 hover:text-blue-900 font-medium">
                                MEDICAL HISTORY
                            </Link>
                        </li>
                        <li>
                            <Link href="/recommendations" className="text-gray-600 hover:text-blue-900 font-medium">
                                RECOMMENDATIONS
                            </Link>
                        </li>
                    </ul>
                </nav>

                {/* Profile Section - 30% */}
                <div className="w-[30%] flex items-center justify-end space-x-6">
                    <div className="flex items-center space-x-2">
                        <div className="w-10 h-10 rounded-full overflow-hidden">
                            <Image
                                src="/profile-placeholder.jpg"
                                alt="Robert Smith"
                                width={40}
                                height={40}
                                className="object-cover"
                            />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-700">Robert Smith</p>
                            <p className="text-xs text-gray-500">THERAPIST</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <button className="text-gray-600 hover:text-blue-900">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                        </button>
                        <button className="text-gray-600 hover:text-blue-900">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header; 