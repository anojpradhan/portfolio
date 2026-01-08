import { Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-6 xs:py-8 sm:py-10 md:py-12 lg:py-16 px-3 xs:px-4 sm:px-5 md:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-14 items-start">
        <div className="space-y-4 sm:space-y-5">
          <h3 className="text-lg sm:text-xl font-semibold tracking-tight">
            Get in touch
          </h3>

          <p className="text-gray-600 text-xs xs:text-sm sm:text-base max-w-md">
            Have a project idea, collaboration, or just want to say hello? Feel
            free to reach out. I’d love to connect.
          </p>

          <div className="space-y-3 text-xs xs:text-sm sm:text-base">
            <a
              href="mailto:anozshrestha05@gmail.com"
              className="flex items-center gap-3 hover:text-black hover:underline transition"
            >
              <Mail className="w-5 h-5" />
              anozshrestha05@gmail.com
            </a>

            <div className="flex items-center gap-3">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
              <span>Ilam, Nepal</span>
            </div>
          </div>
        </div>

        <form
          action="https://formspree.io/f/mzdznood"
          method="POST"
          className="space-y-4 sm:space-y-5"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 xs:gap-4 sm:gap-5">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="border border-gray-300 p-2.5 xs:p-3 sm:p-3.5 focus:outline-none focus:border-black transition-colors text-xs xs:text-sm sm:text-base"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="border border-gray-300 p-2.5 xs:p-3 sm:p-3.5 focus:outline-none focus:border-black transition-colors text-xs xs:text-sm sm:text-base"
              required
            />
          </div>

          <textarea
            name="message"
            rows="4"
            placeholder="Message"
            className="border border-gray-300 p-2.5 xs:p-3 sm:p-3.5 focus:outline-none focus:border-black transition-colors w-full text-xs xs:text-sm sm:text-base"
            required
          />

          <button
            type="submit"
            className="w-full bg-black text-white py-2.5 xs:py-3 sm:py-3.5 font-medium hover:bg-gray-900 transition-colors text-xs xs:text-sm sm:text-base tracking-wide"
          >
            Send Message
          </button>

          <p className="text-center text-[11px] sm:text-xs text-gray-500">
            I usually reply within 24 hours.
          </p>
        </form>
      </div>
    </section>
  );
};

export default Contact;
