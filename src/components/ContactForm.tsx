import { Grid } from "lucide-react";

const ContactForm = () => {
  return (
    <section className="py-16 bg-gray-800">
      <div className="container mx-auto px-4 max-w-md">
        <form className="space-y-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Your name"
              className="w-full p-3 bg-transparent text-white border-b border-gray-500 focus:border-white transition-colors focus:outline-none"
            />
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-gray-400 to-transparent opacity-50"></div>
          </div>
          <div className="relative">
            <input
              type="email"
              placeholder="Your email"
              className="w-full p-3 bg-transparent text-white border-b border-gray-500 focus:border-white transition-colors focus:outline-none"
            />
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-gray-400 to-transparent opacity-50"></div>
          </div>
          <div className="relative">
            <input
              type="tel"
              placeholder="Your phone"
              className="w-full p-3 bg-transparent text-white border-b border-gray-500 focus:border-white transition-colors focus:outline-none"
            />
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-gray-400 to-transparent opacity-50"></div>
          </div>
          <div className="relative">
            <textarea
              placeholder="Your message"
              className="w-full p-3 bg-transparent text-white border-b border-gray-500 focus:border-white transition-colors focus:outline-none resize-none h-32"
            />
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-gray-400 to-transparent opacity-50"></div>
          </div>
          <button
            type="submit"
            className="w-full bg-white text-gray-900 py-3 rounded hover:bg-gray-100 transition-colors"
          >
            SEND
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;