'use client';

import { useState, FormEvent } from 'react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!email) return;
    
    setStatus('loading');
    
    try {
      const response = await fetch('https://blog.userandagents.com/members/api/send-magic-link/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          emailType: 'subscribe',
        }),
      });

      if (response.ok) {
        setStatus('success');
        setMessage('Check your inbox for a confirmation email!');
        setEmail('');
      } else {
        throw new Error('Subscription failed');
      }
    } catch {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="newsletter-form">
      <div className="newsletter-input-group">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          required
          disabled={status === 'loading'}
          className="newsletter-input"
        />
        <button 
          type="submit" 
          disabled={status === 'loading'}
          className="newsletter-button"
        >
          {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
        </button>
      </div>
      {message && (
        <p className={`newsletter-message ${status === 'error' ? 'error' : 'success'}`}>
          {message}
        </p>
      )}
    </form>
  );
}

