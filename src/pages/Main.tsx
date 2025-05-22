const Main: React.FC = () => {
  return (
    <div className="page-container fade-in">
      <div className="municipal-header">
        <div className="municipal-info">
          <div className="municipal-title">Bayan ng Mariao</div>
          <div className="municipal-subtitle">
            Lalawigan ng Bulacan • Itinatag noong 1796
          </div>
        </div>
      </div>

      <h1 className="page-title">Dashboard ng Bayan</h1>
      <p className="page-subtitle">
        Maligayang pagdating sa opisyal na portal ng Bayan ng Mariao
      </p>

      <div className="grid grid-3">
        <div className="stat-card">
          <div className="stat-number">15,432</div>
          <p style={{ color: "#6b7280", fontWeight: "600" }}>
            Kabuuang Populasyon
          </p>
        </div>

        <div className="stat-card blue">
          <div className="stat-number blue">8</div>
          <p style={{ color: "#6b7280", fontWeight: "600" }}>Mga Barangay</p>
        </div>

        <div className="stat-card yellow">
          <div className="stat-number yellow">124</div>
          <p style={{ color: "#6b7280", fontWeight: "600" }}>Mga Proyekto</p>
        </div>
      </div>

      <div className="grid grid-2" style={{ marginTop: "2rem" }}>
        <div className="card flag-accent">
          <h3 style={{ marginBottom: "1rem", color: "#991b1b" }}>
            Mga Balita at Anunsyo
          </h3>
          <ul style={{ listStyle: "none" }}>
            <li
              style={{
                padding: "0.75rem 0",
                borderBottom: "1px solid #e2e8f0",
              }}
            >
              📢 Pagtitipon ng Sangguniang Bayan - Hunyo 15, 2024
            </li>
            <li
              style={{
                padding: "0.75rem 0",
                borderBottom: "1px solid #e2e8f0",
              }}
            >
              🏗️ Bagong tulay sa Barangay San Jose
            </li>
            <li
              style={{
                padding: "0.75rem 0",
                borderBottom: "1px solid #e2e8f0",
              }}
            >
              🎉 Pista ng Bayan - Hulyo 25-27, 2024
            </li>
          </ul>
        </div>

        <div className="card flag-accent">
          <h3 style={{ marginBottom: "1rem", color: "#991b1b" }}>
            Mga Mabilis na Aksyon
          </h3>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <button className="primary-button" style={{ width: "auto" }}>
              Mag-apply ng Business Permit
            </button>
            <button className="secondary-button" style={{ width: "auto" }}>
              Certificate Request
            </button>
            <button className="accent-button" style={{ width: "auto" }}>
              Magbayad ng Buwis
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
