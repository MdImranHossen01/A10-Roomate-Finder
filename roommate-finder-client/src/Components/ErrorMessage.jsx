import React from 'react';
import { motion } from 'framer-motion';
import { FaExclamationTriangle, FaRedo } from 'react-icons/fa';

const ErrorMessage = ({ message, onRetry }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col items-center justify-center min-h-[50vh] px-4"
    >
      <div className="max-w-md w-full bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 rounded-lg p-6 shadow-sm">
        <div className="flex flex-col items-center text-center">
          <div className="p-3 bg-red-100 dark:bg-red-800 rounded-full mb-4">
            <FaExclamationTriangle className="text-red-500 dark:text-red-300 text-2xl" />
          </div>
          
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
            Something went wrong
          </h3>
          
          {message && (
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              {message}
            </p>
          )}
          
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            We couldn't load the requested content. Please try again.
          </p>
          
          {onRetry && (
            <motion.button
              onClick={onRetry}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-4 py-2 bg-red-500 hover:bg-red-600 text-white text-sm font-medium rounded-md transition-colors"
            >
              <FaRedo className="mr-2" />
              Try Again
            </motion.button>
          )}
        </div>
      </div>
      
      <div className="mt-6 text-sm text-gray-500 dark:text-gray-400">
        <p>If the problem persists, please contact our support team.</p>
      </div>
    </motion.div>
  );
};

export default ErrorMessage;