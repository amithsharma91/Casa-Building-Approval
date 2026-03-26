const documents = [
  { icon: "ri-file-text-line", title: "Sale Deed / Title Deed", desc: "Registered ownership document proving legal title to the property" },
  { icon: "ri-receipt-line", title: "Property Tax Receipt", desc: "Latest property tax payment receipt from GHMC or local municipal body" },
  { icon: "ri-file-certificate-line", title: "Encumbrance Certificate (EC)", desc: "Obtained from Sub-Registrar office showing all registered transactions on the property" },
  { icon: "ri-links-line", title: "Link Documents", desc: "Chain of ownership documents tracing title from original registered owner" },
  { icon: "ri-id-card-line", title: "Aadhaar Card", desc: "Valid Aadhaar card of the property owner as identity proof" },
  { icon: "ri-map-pin-line", title: "Plot Layout Copy", desc: "Approved layout plan showing your plot with survey number and dimensions" },
  { icon: "ri-ruler-line", title: "Architect Building Plan", desc: "Certified building plan prepared by a licensed architect as per GHMC norms" },
];

export default function DocumentsSection() {
  return (
    <section id="documents" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-start">
          {/* Left */}
          <div>
            <div
              className="text-xs font-semibold tracking-widest uppercase mb-5"
              style={{ color: "#C8960C", fontFamily: '"DM Sans", sans-serif', letterSpacing: "0.15em" }}
            >
              Checklist
            </div>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 leading-tight"
              style={{ color: "#0B1F3A", fontFamily: '"Playfair Display", serif' }}
            >
              Documents Required
            </h2>
            <p
              className="text-base text-gray-500 mb-10 leading-loose"
              style={{ fontFamily: '"DM Sans", sans-serif' }}
            >
              For GHMC building permission and TS-bPASS approvals in Hyderabad, ensure you have the following documents ready. Additional documents may be required based on property type or zone.
            </p>

            <div className="flex flex-col gap-4">
              {documents.map((doc, i) => (
                <div
                  key={doc.title}
                  className="flex items-start gap-4 p-5 rounded-sm bg-white hover:shadow-sm transition-all"
                  style={{ border: "1px solid #EEEAE0" }}
                >
                  <div
                    className="w-11 h-11 flex items-center justify-center rounded-sm flex-shrink-0"
                    style={{ background: "rgba(200,150,12,0.1)" }}
                  >
                    <i className={`${doc.icon} text-base`} style={{ color: "#C8960C" }}></i>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div
                      className="flex items-center gap-2 mb-1"
                    >
                      <span
                        className="inline-flex w-6 h-6 items-center justify-center rounded-full text-xs font-bold flex-shrink-0"
                        style={{ background: "#0B1F3A", color: "#C8960C", fontSize: "10px" }}
                      >
                        {i + 1}
                      </span>
                      <span
                        className="text-base font-semibold"
                        style={{ color: "#0B1F3A", fontFamily: '"DM Sans", sans-serif' }}
                      >
                        {doc.title}
                      </span>
                    </div>
                    <p
                      className="text-sm text-gray-400 leading-relaxed ml-8"
                      style={{ fontFamily: '"DM Sans", sans-serif' }}
                    >
                      {doc.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: CTA + disclaimer */}
          <div className="flex flex-col gap-6 lg:pt-24">
            {/* WhatsApp CTA */}
            <div
              className="rounded-sm p-9 text-center"
              style={{ background: "#0B1F3A" }}
            >
              <div
                className="w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-6"
                style={{ background: "rgba(200,150,12,0.2)" }}
              >
                <i className="ri-whatsapp-line text-3xl text-green-400"></i>
              </div>
              <h3
                className="text-2xl font-bold text-white mb-4"
                style={{ fontFamily: '"Playfair Display", serif' }}
              >
                Send Your Documents on WhatsApp
              </h3>
              <p
                className="text-sm text-white/60 mb-7 leading-loose"
                style={{ fontFamily: '"DM Sans", sans-serif' }}
              >
                Share your property documents on WhatsApp and receive free expert guidance on your building permission requirements. No hidden fees for initial consultation.
              </p>
              <a
                href="https://wa.me/919980377877"
                target="_blank"
                rel="nofollow noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-green-500 hover:bg-green-400 rounded-sm text-white font-semibold text-base cursor-pointer transition-all whitespace-nowrap"
                style={{ fontFamily: '"DM Sans", sans-serif' }}
              >
                <span className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-whatsapp-line text-base"></i>
                </span>
                Send Documents — Free Guidance
              </a>
            </div>

            {/* Email CTA */}
            <div
              className="rounded-sm p-6"
              style={{ background: "#F8F6F0", border: "1px solid #EEEAE0" }}
            >
              <div className="flex items-center gap-4">
                <div
                  className="w-11 h-11 flex items-center justify-center rounded-sm flex-shrink-0"
                  style={{ background: "rgba(200,150,12,0.1)" }}
                >
                  <i className="ri-mail-send-line text-base" style={{ color: "#C8960C" }}></i>
                </div>
                <div>
                  <div
                    className="text-sm font-semibold mb-1"
                    style={{ color: "#0B1F3A", fontFamily: '"DM Sans", sans-serif' }}
                  >
                    Email Your Documents
                  </div>
                  <a
                    href="mailto:ghmcbpservices@gmail.com"
                    className="text-sm hover:underline cursor-pointer"
                    style={{ color: "#C8960C", fontFamily: '"DM Sans", sans-serif' }}
                  >
                    ghmcbpservices@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <div
              className="rounded-sm p-5 flex items-start gap-4"
              style={{ background: "rgba(200,150,12,0.06)", border: "1px solid rgba(200,150,12,0.2)" }}
            >
              <span className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                <i className="ri-information-line text-base" style={{ color: "#C8960C" }}></i>
              </span>
              <p
                className="text-sm text-gray-500 leading-loose"
                style={{ fontFamily: '"DM Sans", sans-serif' }}
              >
                <strong style={{ color: "#0B1F3A" }}>Disclaimer:</strong> Casa Associates is a private consultancy firm providing liaisoning and advisory services. We are <strong>not affiliated with GHMC, HMDA, or any government department</strong>. All government approvals are subject to GHMC/HMDA terms and conditions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
