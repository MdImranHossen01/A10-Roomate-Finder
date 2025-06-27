import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Fade } from 'react-awesome-reveal';
import Lottie from 'lottie-react';
import faqAnimation from '../assets/faq-animation.json'; // Replace with your animation file

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How do I find a compatible roommate?",
      answer: "Our matching algorithm analyzes your lifestyle preferences, habits, and personality traits to suggest the most compatible roommates. You can also browse listings and filter by your preferred criteria."
    },
    {
      question: "Is there a fee to use Roommate Finder?",
      answer: "Creating an account and browsing listings is completely free. We only charge a small service fee when you successfully connect with a roommate through our premium matching service."
    },
    {
      question: "How can I ensure my safety when meeting potential roommates?",
      answer: "We recommend always meeting in public places first, checking references, and using our verified profile system. Never share financial information until you've signed a formal agreement."
    },
    {
      question: "Can I list my current apartment for a roommate?",
      answer: "Yes! You can create a listing for your available room. Include details about your place, your preferences for a roommate, and photos to attract compatible matches."
    },
    {
      question: "What should I include in my roommate profile?",
      answer: "Be honest about your lifestyle (sleep schedule, cleanliness, guests policy), include your interests, and what you're looking for in a roommate. Profiles with photos get 5x more responses."
    },
    {
      question: "How do I handle conflicts with my roommate?",
      answer: "We provide a roommate agreement template to set expectations upfront. For conflicts, we recommend open communication first. Our support team can mediate if needed."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-11/12 mx-auto py-12">
      <Fade direction="up" triggerOnce>
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-amber-500 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about finding and living with roommates.
            Can't find what you're looking for? <a href="/contact" className="text-blue-500 hover:underline">Contact us</a>.
          </p>
        </div>
      </Fade>

      <div className="flex flex-col lg:flex-row gap-12">
        <div className="lg:w-1/2">
          <Fade direction="left" triggerOnce cascade damping={0.1}>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div 
                  key={index}
                  className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow-sm"
                  whileHover={{ scale: 1.01 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <button
                    className="w-full px-6 py-4 text-left flex justify-between items-center bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={activeIndex === index}
                    aria-controls={`faq-${index}`}
                  >
                    <span className="font-medium text-lg text-gray-800 dark:text-white">
                      {faq.question}
                    </span>
                    <motion.span
                      animate={{ rotate: activeIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </motion.span>
                  </button>
                  
                  <AnimatePresence>
                    {activeIndex === index && (
                      <motion.div
                        id={`faq-${index}`}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 bg-gray-50 dark:bg-gray-800 overflow-hidden"
                      >
                        <div className="py-4 text-gray-600 dark:text-gray-300">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </Fade>
        </div>

        <div className="lg:w-1/2 flex items-center justify-center">
          <Fade direction="right" triggerOnce>
            <div className="w-full max-w-md">
              <Lottie 
                animationData={faqAnimation} 
                loop={true} 
                className="w-full h-auto"
              />
              <div className="mt-8 p-6 bg-amber-500 rounded-xl">
                <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
                  Still have questions?
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Our support team is happy to help with any other questions you might have about finding or managing roommates.
                </p>
                <a 
                  href="/contact" 
                  className="inline-block px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
                >
                  Contact Support
                </a>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Faq;