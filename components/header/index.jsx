'use client';

import { Profile } from '@/public';
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
        <header className="max-w-[1300px] w-full bg-gray-100 shadow-sm">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                {/* Logo Section - 20% */}
                <div className="w-[20%] flex items-center justify-start">
                    <Link href="/" className="flex items-center">
                        <h1 className="text-xl font-bold text-blue-900">HOSPITY</h1>
                    </Link>
                </div>

                {/* Navigation Section - 50% */}
                <nav className="w-[50%] flex items-center justify-center">
                    <ul className="flex space-x-8">
                            <Link href="/body-systems" >
                        <li className="text-gray-600  text-[14px] font-medium hover:text-blue-900">
                                BODY SYSTEMS
                        </li>
                            </Link>
                        <li className="text-gray-600  text-[14px] font-medium hover:text-blue-900">
                            <Link href="/labs" >
                                LABS
                            </Link>
                        </li>
                        <li className="text-gray-600  text-[14px] font-medium hover:text-blue-900">
                            <Link href="/medical-history" >
                                MEDICAL HISTORY
                            </Link>
                        </li>
                        <li className="text-gray-600  text-[14px] font-medium hover:text-blue-900">
                            <Link href="/recommendations" >
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
                                src={Profile}
                                alt="Robert Smith"
                                width={40}
                                height={40}
                                className="object-cover"
                            />
                        </div>
                        <div>
                            <p className="text[12px] font-[600] text-gray-700">Robert Smith</p>
                            <p className="text-[10px] text-gray-600">THERAPIST</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <button className="text-gray-600  bg-white rounded-full p-2 hover:text-blue-900">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                        </button>
                        <button className="text-gray-600  bg-white rounded-full p-2 hover:text-blue-900">
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