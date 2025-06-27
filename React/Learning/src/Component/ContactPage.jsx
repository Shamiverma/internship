import React from 'react'



const ContactPage = () => {
  return (
    <div className="min-h-screen bg-emerald-100 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-emerald rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Contact Us</h2>
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-800 mb-1">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-800 mb-1">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium  text-gray-800 mb-1">Message</label>
            <textarea
              rows="4"
              placeholder="Your message..."
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-pink-800 text-white py-2 rounded-xl hover:bg-pink-800 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;