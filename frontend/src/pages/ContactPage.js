import React, { useState, useEffect } from 'react';

const ContactPage = () => {
    useEffect(() => {
        document.title = 'Contact - Shivendra Sharma';
    }, []);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('/api/messages', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, message }),
            });
            const result = await res.json();
            setSuccess(result.success ? 'Message sent!' : 'Failed to send message.');
        } catch {
            setSuccess('Failed to send message.');
        }
    };

    return (
        <div>
            <h1>Contact Me</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <textarea
                    placeholder="Your Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                ></textarea>
                <button type="submit">Send</button>
            </form>
            {success && <p>{success}</p>}
        </div>
    );
};

export default ContactPage;

