import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import useScrollToTop from "../hooks/useScrollToTop";

const ContactUs = () => {
  useScrollToTop();
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="mx-auto max-w-screen-xl px-4 pb-20 pt-28 md:px-16">
      <div className="mb-12 text-center">
        <h1 className="mb-2 text-4xl font-bold text-gray-800 md:text-5xl">
          Let us design your next room story
        </h1>
        <p className="text-sm text-gray-600 md:text-base">
          This is a demo contact experience with realistic copy, clean visuals, and a friendly support tone.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        <div className="space-y-6 rounded-[2rem] bg-[#f7f2ea] p-8">
          <div className="flex items-start gap-4">
            <MapPin className="mt-1 h-6 w-6 text-orange-500" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Studio Address</h3>
              <p className="text-sm text-gray-600">
                205 Design Avenue, Civil Lines, Jaipur, Rajasthan 302006
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Phone className="mt-1 h-6 w-6 text-orange-500" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Call Us</h3>
              <p className="text-sm text-gray-600">+91 98765 43210</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Mail className="mt-1 h-6 w-6 text-orange-500" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Email Us</h3>
              <p className="text-sm text-gray-600">hello@furnilux.demo</p>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6">
            <h4 className="text-lg font-semibold text-gray-800">What happens next?</h4>
            <p className="mt-2 text-sm text-gray-600">
              In a real build this form would connect to support workflows or CRM. For now, it demonstrates a polished frontend state change.
            </p>
          </div>
        </div>

        <form
          className="space-y-6 rounded-[2rem] border bg-white p-8 shadow-md"
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
        >
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">Your Name</label>
            <input
              type="text"
              required
              placeholder="Enter your name"
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">Email Address</label>
            <input
              type="email"
              required
              placeholder="you@example.com"
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">Message</label>
            <textarea
              required
              rows="5"
              placeholder="Tell us about your space..."
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-orange-400"
            ></textarea>
          </div>

          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-orange-500 py-3 font-semibold text-white hover:bg-orange-600"
          >
            <Send size={18} /> Send Message
          </button>

          {submitted && (
            <p className="rounded-xl bg-green-50 px-4 py-3 text-sm text-green-700">
              Demo message sent successfully. This state is frontend-only for presentation.
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
