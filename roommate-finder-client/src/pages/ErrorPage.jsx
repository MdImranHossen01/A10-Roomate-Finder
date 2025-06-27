import React from 'react';
import { Link } from 'react-router';
import { FaExclamationTriangle, FaHome, FaEnvelope, FaPhone } from 'react-icons/fa';

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4 text-center">
            <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
                {/* Error Icon */}
                <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-red-100 mb-4">
                    <FaExclamationTriangle className="h-10 w-10 text-red-600" />
                </div>
                
                {/* Error Message */}
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Oops! Something went wrong</h1>
                <p className="text-lg text-gray-600 mb-6">
                    The page you're looking for doesn't exist or an unexpected error occurred.
                </p>
                
                {/* Status Code (optional) */}
                <div className="bg-gray-100 p-3 rounded-md mb-6">
                    <p className="text-sm font-mono text-gray-700">Error 404: Page Not Found</p>
                </div>
                
                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Link 
                        to="/" 
                        className="flex items-center justify-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
                    >
                        <FaHome className="mr-2" />
                        Return Home
                    </Link>
                    
                    <Link 
                        to="/contact" 
                        className="flex items-center justify-center px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
                    >
                        <FaEnvelope className="mr-2" />
                        Contact Support
                    </Link>
                </div>
                
                {/* Additional Help */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                    <p className="text-sm text-gray-500 mb-2">Need immediate help?</p>
                    <div className="flex items-center justify-center gap-2">
                        <FaPhone className="text-gray-400" />
                        <span className="text-indigo-600 font-medium">1-800-HELP-NOW</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;