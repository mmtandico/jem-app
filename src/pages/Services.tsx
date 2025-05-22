const Services: React.FC = () => {
  const services = [
    {
      title: "Business Permits",
      description: "Pagkuha ng business permit para sa mga negosyo sa bayan",
      icon: "🏢",
    },
    {
      title: "Civil Registration",
      description:
        "Birth certificate, marriage certificate, at iba pang dokumento",
      icon: "📋",
    },
    {
      title: "Barangay Services",
      description: "Mga serbisyo mula sa inyong mga barangay",
      icon: "🏘️",
    },
    {
      title: "Tax Services",
      description: "Pagbabayad ng real property tax at iba pang buwis",
      icon: "💰",
    },
    {
      title: "Health Services",
      description: "Rural health unit at mga programa sa kalusugan",
      icon: "🏥",
    },
    {
      title: "Social Services",
      description: "DSWD programs at social welfare services",
      icon: "👥",
    },
  ];

  return (
    <div className="page-container fade-in">
      <div className="municipal-header">
        <div className="municipal-info">
          <div className="municipal-title">Mga Serbisyo ng Bayan</div>
          <div className="municipal-subtitle">Bayan ng Mariao, Bulacan</div>
        </div>
      </div>

      <h1 className="page-title">Mga Serbisyo Para Sa Mamamayan</h1>
      <p className="page-subtitle">
        Komprehensibong mga serbisyo para sa inyong pangangailangan
      </p>

      <div className="grid grid-2">
        {services.map((service, index) => (
          <div key={index} className="card flag-accent">
            <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>
              {service.icon}
            </div>
            <h3 style={{ marginBottom: "1rem", color: "#991b1b" }}>
              {service.title}
            </h3>
            <p
              style={{
                color: "#6b7280",
                lineHeight: "1.6",
                marginBottom: "1.5rem",
              }}
            >
              {service.description}
            </p>
            <button className="primary-button" style={{ width: "auto" }}>
              Alamin Pa
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
