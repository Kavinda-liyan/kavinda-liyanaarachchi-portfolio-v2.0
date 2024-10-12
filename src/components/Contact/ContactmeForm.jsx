import { useState } from "react";
import emailjs from 'emailjs-com';

const ContactForm = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'kavinda99', 
        'kavindatemp99',  
        formData,
        'Hhnm0sQn-RRGg_WEu'  
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setSent(true);
          setLoading(false);
          setFormData({ name: '', email: '', message: '' }); 
          setTimeout(() => setSent(false), 1000); 
        },
        (err) => {
          console.log('FAILED...', err);
          setError('Failed to send message. Please try again later.');
          setLoading(false);
        }
      );
  };

  return (
    <div className="w-full mx-auto  ">
      <h2 className="text-2xl m-4">Send an Email to Me</h2>
      {sent ? (
        <p className="text-green-600 text-2xl">Your message has been sent successfully!</p>
      ) : (
        <form onSubmit={sendEmail} className=" px-8 pt-6 pb-8 text-left ">
          <div className="mb-4">
            <label className="block text-slate-500 text-sm font-bold mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-slate-500 text-sm font-bold mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label className="block text-slate-500 text-sm font-bold mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              rows="5"
            />
          </div>
          {error && <p className="text-red-600 mb-4">{error}</p>}
          <div className="flex items-center justify-between">
            <button
              type="submit"
              disabled={loading}
              className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default ContactForm;
