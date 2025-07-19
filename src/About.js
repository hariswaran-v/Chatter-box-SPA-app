import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-12">
      <section className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-md border border-slate-200">
        <h2 className="text-3xl font-bold text-slate-700 mb-6">
          Get In Touch with Chatter_Box
        </h2>

        {/* Intro Section */}
        <div className="text-sm space-y-2 text-gray-800 mb-8">
          <p className="font-medium">💬 Let's Collaborate!</p>
          <ul className="list-disc list-inside ml-2">
            <li>Have a project idea? Let’s bring it to life together.</li>
            <li>Want to discuss the latest in MERN stack or tech trends?</li>
            <li>Need a developer for your full-stack web application?</li>
            <li>Looking for fresh and innovative UI/UX integration?</li>
          </ul>
          <p className="mt-3 italic text-gray-600">
            "Technology is best when it brings people together." — Matt
            Mullenweg
          </p>
          <p className="mt-2 font-semibold">
            Let's connect and build something meaningful!
          </p>
        </div>

        {/* Contact Info */}
        <div className="grid md:grid-cols-2 gap-6 text-slate-700 mb-10">
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-slate-600" />
            <a
              href="mailto:hariswaranvenkatesh@gmail.com"
              className="hover:underline"
            >
              hariswaranvenkatesh@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-3">
            <FaPhone className="text-slate-600" />
            <a href="tel:+917373428343" className="hover:underline">
              +91 73734 28343
            </a>
          </div>
          <div className="flex items-center gap-3">
            <FaGithub className="text-slate-600" />
            <a
              href="https://github.com/hariswaran-v"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              github.com/hariswaran-v
            </a>
          </div>
          <div className="flex items-center gap-3">
            <FaLinkedin className="text-slate-600" />
            <a
              href="https://linkedin.com/in/hariswaran-v"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              linkedin.com/in/hariswaran-v
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form className="space-y-5">
          <div>
            <label className="block mb-1 text-sm font-medium text-slate-700">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-slate-700">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-slate-700">
              Message
            </label>
            <textarea
              rows="4"
              placeholder="Type your message..."
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </section>
    </main>
  );
};

export default Contact;
