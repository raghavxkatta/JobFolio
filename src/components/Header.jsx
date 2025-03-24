import { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            {/* Header */}
            <nav className="bg-black text-white shadow-lg p-4">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex justify-between items-center">
                        {/* Logo/Brand */}
                        <div className="flex items-center">
                            <h1 className="text-3xl font-medium hover:scale-105 transition-all duration-300">
                                Resume Analyzer
                            </h1>
                        </div>

                        {/* Hamburger Menu Button */}
                        <div className="flex items-center space-x-4">
                            {/* Login Button - Always visible */}
                            <div className="bg-white text-black rounded-md">
                                <Link 
                                    to="/login" 
                                    className="px-4 py-2 rounded-md text-lg font-medium hover:bg-gray-200 transition-colors duration-200 inline-block"
                                >
                                    Login/Sign Up
                                </Link>
                            </div>
                            
                            {/* Menu Toggle Button */}
                            <button
                                onClick={toggleSidebar}
                                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-gray-700 transition-colors duration-200 focus:outline-none"
                                aria-expanded={isSidebarOpen}
                            >
                                <span className="sr-only">Open menu</span>
                                {/* Icon when menu is closed */}
                                <svg
                                    className={`${isSidebarOpen ? 'hidden' : 'block'} h-6 w-6`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                                {/* Icon when menu is open */}
                                <svg
                                    className={`${isSidebarOpen ? 'block' : 'hidden'} h-6 w-6`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Sidebar Navigation */}
            <div 
                className={`fixed top-0 right-0 w-64 h-full bg-gray-900 shadow-xl transition-transform duration-300 ease-in-out z-50 transform ${
                    isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <div className="p-5">
                    {/* Close button */}
                    <div className="flex justify-end">
                        <button 
                            onClick={toggleSidebar}
                            className="text-white hover:text-gray-300 focus:outline-none"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    
                    {/* Sidebar Navigation Links */}
                    <div className="mt-8 space-y-4">
                        <Link 
                            to="/" 
                            className="block px-4 py-3 rounded-md text-lg font-medium text-white hover:bg-gray-800 transition-colors duration-200"
                            onClick={toggleSidebar}
                        >
                            Home
                        </Link>
                        <Link 
                            to="/analyze" 
                            className="block px-4 py-3 rounded-md text-lg font-medium text-white hover:bg-gray-800 transition-colors duration-200"
                            onClick={toggleSidebar}
                        >
                            Analyze
                        </Link>
                        <Link 
                            to="/dashboard" 
                            className="block px-4 py-3 rounded-md text-lg font-medium text-white hover:bg-gray-800 transition-colors duration-200"
                            onClick={toggleSidebar}
                        >
                            Dashboard
                        </Link>
                        <Link 
                            to="/about" 
                            className="block px-4 py-3 rounded-md text-lg font-medium text-white hover:bg-gray-800 transition-colors duration-200"
                            onClick={toggleSidebar}
                        >
                            About
                        </Link>
                    </div>
                </div>
            </div>
            
            {/* Overlay for closing sidebar when clicking outside */}
            {isSidebarOpen && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={toggleSidebar}
                ></div>
            )}
        </>
    );
}

export default Header;