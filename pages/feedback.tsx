// pages/feedback.tsx

import React, { useState } from 'react';
import Header from '../components/Header';

const Feedback = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        
        // Simulate an API call
        setTimeout(() => {
            console.log({ name, email, message });
            setIsSubmitting(false);
            setName('');
            setEmail('');
            setMessage('');
            // You'd also want to set some state to show a success message here
        }, 2000);
    };

    return (
        <>
            <Header />
            {/* Padding top should be at least the height of your header */}
            <div className="min-h-screen bg-feedback-background bg-cover bg-center bg-no-repeat flex items-center justify-center">
                <div className="max-w-2xl mx-auto p-6 bg-white bg-opacity-90 shadow-md rounded">
                    <h1 className="text-2xl font-bold mb-4">Feedback Form</h1>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                                Name:
                            </label>
                            <input 
                                id="name"
                                type="text"
                                name="name"
                                value={name}
                                onChange={e => setName(e.target.value)}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                                Email:
                            </label>
                            <input 
                                id="email"
                                type="email"
                                name="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                                Message:
                            </label>
                            <textarea 
                                id="message"
                                name="message"
                                value={message}
                                onChange={e => setMessage(e.target.value)}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                required
                            />
                        </div>
                        <div>
                            <button 
                                type="submit"
                                disabled={isSubmitting}
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Feedback;
