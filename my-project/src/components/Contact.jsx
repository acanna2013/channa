import { useState } from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, message });
  };

  return (
    <div className="max-w-md mx-auto p-6 rounded-md shadow-md" style={{ backgroundColor: '#6B7280'}}>
      <h2 className="text-2xl font-bold mb-4">contact me</h2>
      <form action="mailto:ac.anna2013@gmail.com" method="post" enctype="text/plain" onSubmit={handleSubmit} className="space-y-4">
        <div>
            <h2 className="block text-sm font-medium" style={{ color: '#4a5568' }}>
                <a href='https://www.linkedin.com/in/chnanna/' target='_blank'> -> linkedin</a>
            </h2>
            <h2 className="block text-sm font-medium" style={{ color: '#4a5568' }}>
                <a href='https://github.com/acanna2013' target='_blank'> -> github</a>
            </h2>

        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium" style={{ color: '#4a5568' }}>email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium" style={{ color: '#4a5568' }}>message</label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="4"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 font-semibold rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500" style={{ backgroundColor: '#9AAB89', color: '#6B7280' }}
        >
          send
        </button>
      </form>
    </div>
  );
}

export default Contact;
