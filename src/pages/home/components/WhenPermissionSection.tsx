const bullets = [
  { icon: "ri-home-4-line", text: "New construction on vacant land" },
  { icon: "ri-stack-line", text: "Additional floors to existing building" },
  { icon: "ri-store-2-line", text: "Commercial buildings & offices" },
  { icon: "ri-tools-line", text: "Structural renovations or alterations" },
  { icon: "ri-map-2-line", text: "Layout development & plotting" },
];

export default function WhenPermissionSection() {
  return (
    <section id="about" className="py-24 lg:py-32" style={{ background: "#F8F6F0" }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
          {/* Left: Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-sm" style={{ paddingBottom: "72%" }}>
              <img
                src="https://readdy.ai/api/search-image?query=architectural%20blueprint%20building%20plan%20drawing%20desk%20with%20compass%20ruler%20pen%20professional%20urban%20planning%20office%20Hyderabad%20India%20clean%20white%20background%20formal%20corporate%20setting%20detailed%20technical%20drawing%20high%20quality%20photography&width=700&height=500&seq=about-casa-permission&orientation=landscape"
                alt="Building permission documents and blueprints - GHMC approval process Hyderabad"
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
            </div>
            {/* Gold accent card */}
            <div
              className="absolute -bottom-6 -right-4 p-6 rounded-sm hidden lg:block"
              style={{ background: "#0B1F3A", minWidth: "210px" }}
            >
              <div
                className="text-4xl font-bold mb-2"
                style={{ color: "#C8960C", fontFamily: '"Playfair Display", serif' }}
              >
                15+
              </div>
              <div className="text-sm text-white/70 leading-relaxed" style={{ fontFamily: '"DM Sans", sans-serif' }}>
                Years of combined<br />expertise in Hyderabad
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <div
              className="text-xs font-semibold tracking-widest uppercase mb-5"
              style={{ color: "#C8960C", fontFamily: '"DM Sans", sans-serif', letterSpacing: "0.15em" }}
            >
              Know Your Requirements
            </div>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-7 leading-tight"
              style={{ color: "#0B1F3A", fontFamily: '"Playfair Display", serif' }}
            >
              When is Building Permission Required?
            </h2>
            <div
              className="text-sm text-gray-600 mb-6 leading-loose p-5 rounded-sm"
              style={{ background: "rgba(200,150,12,0.08)", border: "1px solid rgba(200,150,12,0.22)", fontFamily: '"DM Sans", sans-serif' }}
            >
              <strong style={{ color: "#0B1F3A" }}>What is TS-bPASS?</strong> — The Telangana State Building Permission Approval &amp; Self Certification System (TS-bPASS) is a unified online portal for obtaining building permissions across Hyderabad, covering GHMC, HMDA, and all municipal corporations in Telangana. Every construction activity above a specified area mandates prior approval through this system.
            </div>
            <p
              className="text-base text-gray-500 mb-8 leading-loose"
              style={{ fontFamily: '"DM Sans", sans-serif' }}
            >
              As per GHMC building permission regulations, obtaining a valid building permission is mandatory before commencing any of the following construction activities:
            </p>

            <div className="flex flex-col gap-3">
              {bullets.map((b) => (
                <div
                  key={b.text}
                  className="flex items-center gap-4 p-4 rounded-sm bg-white hover:translate-x-1 transition-transform duration-200"
                  style={{ border: "1px solid #EEEAE0" }}
                >
                  <span
                    className="w-10 h-10 flex items-center justify-center rounded-sm flex-shrink-0"
                    style={{ background: "rgba(200,150,12,0.1)" }}
                  >
                    <i className={`${b.icon} text-base`} style={{ color: "#C8960C" }}></i>
                  </span>
                  <span
                    className="text-base font-medium"
                    style={{ color: "#0B1F3A", fontFamily: '"DM Sans", sans-serif' }}
                  >
                    {b.text}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/919980377877"
              target="_blank"
              rel="nofollow noreferrer"
              className="inline-flex items-center gap-3 mt-9 px-7 py-4 rounded-sm text-white font-semibold text-sm whitespace-nowrap cursor-pointer transition-all hover:opacity-90"
              style={{ background: "#0B1F3A", fontFamily: '"DM Sans", sans-serif' }}
            >
              <span className="w-4 h-4 flex items-center justify-center">
                <i className="ri-whatsapp-line text-sm text-green-400"></i>
              </span>
              Check Your Requirements — Free Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
