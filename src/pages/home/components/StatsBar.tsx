const stats = [
  { value: "500+", label: "Approvals Delivered", icon: "ri-award-line" },
  { value: "10+", label: "Years Experience", icon: "ri-time-line" },
  { value: "98%", label: "Success Rate", icon: "ri-bar-chart-grouped-line" },
  { value: "7+", label: "Services Offered", icon: "ri-service-line" },
];

export default function StatsBar() {
  return (
    <section className="py-16 lg:py-20" style={{ background: "#C8960C" }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="text-center flex flex-col items-center lg:px-10"
              style={{
                borderRight: i < stats.length - 1 ? "1px solid rgba(11,31,58,0.18)" : "none",
              }}
            >
              <div
                className="w-12 h-12 flex items-center justify-center mb-4 rounded-full"
                style={{ background: "rgba(11,31,58,0.12)" }}
              >
                <i className={`${stat.icon} text-2xl`} style={{ color: "rgba(11,31,58,0.65)" }}></i>
              </div>
              <span
                className="text-5xl lg:text-6xl font-bold leading-none mb-3"
                style={{ color: "#0B1F3A", fontFamily: '"Playfair Display", serif' }}
              >
                {stat.value}
              </span>
              <span
                className="text-sm font-medium"
                style={{ color: "rgba(11,31,58,0.75)", fontFamily: '"DM Sans", sans-serif' }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
