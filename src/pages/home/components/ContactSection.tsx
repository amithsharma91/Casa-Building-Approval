import { useState, FormEvent } from "react";

const serviceOptions = [
  "Building Permission (GHMC/HMDA)",
  "Layout Permission (HMDA)",
  "Land Use / Master Plan Verification",
  "Occupancy Certificate",
  "TDR – Additional Floors",
  "Claim Your TDR",
  "Road Widening Check",
  "General Enquiry",
];

const inputStyle = {
  border: "1px solid #DDDAD0",
  fontFamily: '"DM Sans", sans-serif',
  color: "#0B1F3A",
  background: "#FAFAF8",
};

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const msgField = form.querySelector("textarea[name='message']") as HTMLTextAreaElement;
    if (msgField && msgField.value.length > 500) {
      return;
    }
    setLoading(true);
    try {
      const data = new URLSearchParams(new FormData(form) as unknown as Record<string, string>);
      await fetch("https://readdy.ai/api/form/d72624k991ove783tbl0", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: data.toString(),
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const focusBorder = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    (e.target as HTMLElement).style.borderColor = "#C8960C";
  };
  const blurBorder = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    (e.target as HTMLElement).style.borderColor = "#DDDAD0";
  };

  return (
    <section id="contact" className="py-24 lg:py-32" style={{ background: "#F8F6F0" }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className="text-xs font-semibold tracking-widest uppercase mb-5"
            style={{ color: "#C8960C", fontFamily: '"DM Sans", sans-serif', letterSpacing: "0.15em" }}
          >
            Get In Touch
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5"
            style={{ color: "#0B1F3A", fontFamily: '"Playfair Display", serif' }}
          >
            Contact Casa Associates
          </h2>
          <p
            className="text-base text-gray-500 max-w-lg mx-auto leading-loose"
            style={{ fontFamily: '"DM Sans", sans-serif' }}
          >
            Reach out for a free consultation on your GHMC building permission, TS-bPASS approval, or any property-related queries in Hyderabad.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 xl:gap-14 items-start">
          {/* Form */}
          <div
            className="bg-white rounded-sm p-8 lg:p-10"
            style={{ border: "1px solid #EEEAE0" }}
          >
            {submitted ? (
              <div className="text-center py-14">
                <div
                  className="w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-5"
                  style={{ background: "rgba(200,150,12,0.1)" }}
                >
                  <i className="ri-check-double-line text-3xl" style={{ color: "#C8960C" }}></i>
                </div>
                <h3
                  className="text-2xl font-bold mb-3"
                  style={{ color: "#0B1F3A", fontFamily: '"Playfair Display", serif' }}
                >
                  Message Sent!
                </h3>
                <p
                  className="text-base text-gray-500 leading-loose"
                  style={{ fontFamily: '"DM Sans", sans-serif' }}
                >
                  Thank you for contacting Casa Associates. Our team will get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form
                data-readdy-form
                onSubmit={handleSubmit}
                className="flex flex-col gap-5"
              >
                <h3
                  className="text-xl font-bold mb-1"
                  style={{ color: "#0B1F3A", fontFamily: '"Playfair Display", serif' }}
                >
                  Send Us a Message
                </h3>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      className="block text-sm font-semibold mb-2"
                      style={{ color: "#0B1F3A", fontFamily: '"DM Sans", sans-serif' }}
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your full name"
                      className="w-full px-4 py-3.5 text-sm rounded-sm outline-none transition-all"
                      style={inputStyle}
                      onFocus={focusBorder}
                      onBlur={blurBorder}
                    />
                  </div>
                  <div>
                    <label
                      className="block text-sm font-semibold mb-2"
                      style={{ color: "#0B1F3A", fontFamily: '"DM Sans", sans-serif' }}
                    >
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3.5 text-sm rounded-sm outline-none transition-all"
                      style={inputStyle}
                      onFocus={focusBorder}
                      onBlur={blurBorder}
                    />
                  </div>
                </div>
                <div>
                  <label
                    className="block text-sm font-semibold mb-2"
                    style={{ color: "#0B1F3A", fontFamily: '"DM Sans", sans-serif' }}
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3.5 text-sm rounded-sm outline-none transition-all"
                    style={inputStyle}
                    onFocus={focusBorder}
                    onBlur={blurBorder}
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-semibold mb-2"
                    style={{ color: "#0B1F3A", fontFamily: '"DM Sans", sans-serif' }}
                  >
                    Service Required *
                  </label>
                  <select
                    name="service"
                    required
                    className="w-full px-4 py-3.5 text-sm rounded-sm outline-none transition-all appearance-none cursor-pointer"
                    style={inputStyle}
                    onFocus={focusBorder}
                    onBlur={blurBorder}
                  >
                    <option value="">Select a service...</option>
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label
                    className="block text-sm font-semibold mb-2"
                    style={{ color: "#0B1F3A", fontFamily: '"DM Sans", sans-serif' }}
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    maxLength={500}
                    placeholder="Tell us about your property and requirements..."
                    className="w-full px-4 py-3.5 text-sm rounded-sm outline-none transition-all resize-none"
                    style={inputStyle}
                    onFocus={focusBorder}
                    onBlur={blurBorder}
                  />
                  <p className="text-xs text-gray-400 mt-1.5" style={{ fontFamily: '"DM Sans", sans-serif' }}>Max 500 characters</p>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-sm text-white font-semibold text-base transition-all hover:opacity-90 whitespace-nowrap cursor-pointer disabled:opacity-60 mt-2"
                  style={{ background: "#0B1F3A", fontFamily: '"DM Sans", sans-serif' }}
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>

          {/* Contact Info + WhatsApp */}
          <div className="flex flex-col gap-5">
            {/* WhatsApp CTA */}
            <div
              className="rounded-sm p-8"
              style={{ background: "#0B1F3A" }}
            >
              <div className="flex items-center gap-4 mb-5">
                <span className="w-12 h-12 flex items-center justify-center rounded-sm bg-green-500/20">
                  <i className="ri-whatsapp-line text-2xl text-green-400"></i>
                </span>
                <h3
                  className="text-lg font-bold text-white"
                  style={{ fontFamily: '"Playfair Display", serif' }}
                >
                  Quick Response on WhatsApp
                </h3>
              </div>
              <p
                className="text-sm text-white/60 mb-6 leading-loose"
                style={{ fontFamily: '"DM Sans", sans-serif' }}
              >
                For faster response, reach us directly on WhatsApp. Send your property documents for immediate free guidance on your building permission requirements.
              </p>
              <a
                href="https://wa.me/919980377877"
                target="_blank"
                rel="nofollow noreferrer"
                className="w-full flex items-center justify-center gap-3 py-4 bg-green-500 hover:bg-green-400 rounded-sm text-white font-semibold text-base cursor-pointer transition-all whitespace-nowrap"
                style={{ fontFamily: '"DM Sans", sans-serif' }}
              >
                <span className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-whatsapp-line text-base"></i>
                </span>
                Chat on WhatsApp — +91 99803 77877
              </a>
            </div>

            {/* Contact Cards */}
            {[
              { icon: "ri-phone-line", label: "Call Us", value: "+91 99803 77877", href: "tel:+919980377877" },
              { icon: "ri-mail-line", label: "Email", value: "ghmcbpservices@gmail.com", href: "mailto:ghmcbpservices@gmail.com" },
              { icon: "ri-map-pin-line", label: "Location", value: "Hyderabad, Telangana", href: "#contact" },
            ].map((c) => (
              <div
                key={c.label}
                className="flex items-center gap-5 p-5 rounded-sm bg-white"
                style={{ border: "1px solid #EEEAE0" }}
              >
                <span
                  className="w-12 h-12 flex items-center justify-center rounded-sm flex-shrink-0"
                  style={{ background: "rgba(200,150,12,0.1)" }}
                >
                  <i className={`${c.icon} text-lg`} style={{ color: "#C8960C" }}></i>
                </span>
                <div>
                  <div
                    className="text-xs text-gray-400 mb-1"
                    style={{ fontFamily: '"DM Sans", sans-serif' }}
                  >
                    {c.label}
                  </div>
                  <a
                    href={c.href}
                    className="text-base font-semibold hover:underline cursor-pointer"
                    style={{ color: "#0B1F3A", fontFamily: '"DM Sans", sans-serif' }}
                  >
                    {c.value}
                  </a>
                </div>
              </div>
            ))}

            {/* Map */}
            <div className="rounded-sm overflow-hidden" style={{ height: "200px", border: "1px solid #EEEAE0" }}>
              <iframe
                title="Casa Associates Hyderabad Location - CCCX+85"
                src="https://maps.google.com/maps?q=CCCX%2B85+Hyderabad,+Telangana&t=m&z=17&ie=UTF8&iwloc=near&output=embed"
                width="100%"
                height="100%"
                loading="lazy"
                className="border-0"
                allowFullScreen
              ></iframe>
            </div>
            <a
              href="https://maps.app.goo.gl/Xgnzpcu3WbQ3maij7"
              target="_blank"
              rel="nofollow noreferrer"
              className="flex items-center justify-center gap-2 py-3 rounded-sm text-sm font-semibold cursor-pointer transition-all hover:opacity-90 whitespace-nowrap"
              style={{ background: "#0B1F3A", color: "white", fontFamily: '"DM Sans", sans-serif' }}
            >
              <span className="w-4 h-4 flex items-center justify-center">
                <i className="ri-navigation-line text-sm" style={{ color: "#C8960C" }}></i>
              </span>
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
