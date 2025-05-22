const AboutUs: React.FC = () => {
  return (
    <div className="page-container fade-in">
      <h1 className="page-title">About Us</h1>
      <p className="page-subtitle">Learn more about our company and mission</p>

      <div className="card">
        <h3 style={{ marginBottom: "1rem", color: "#4a5568" }}>Our Mission</h3>
        <p style={{ color: "#6b7280", lineHeight: "1.8", fontSize: "1.1rem" }}>
          We are dedicated to creating innovative solutions that help businesses
          thrive in the digital age. Our team of experts combines creativity
          with technical expertise to deliver exceptional results that exceed
          our clients' expectations.
        </p>
      </div>

      <div className="grid grid-2">
        <div className="card">
          <h3 style={{ marginBottom: "1rem", color: "#4a5568" }}>Our Values</h3>
          <ul style={{ color: "#6b7280", lineHeight: "1.6" }}>
            <li style={{ marginBottom: "0.5rem" }}>
              Innovation and creativity
            </li>
            <li style={{ marginBottom: "0.5rem" }}>Client satisfaction</li>
            <li style={{ marginBottom: "0.5rem" }}>Quality and excellence</li>
            <li style={{ marginBottom: "0.5rem" }}>Continuous learning</li>
          </ul>
        </div>

        <div className="card">
          <h3 style={{ marginBottom: "1rem", color: "#4a5568" }}>
            Contact Info
          </h3>
          <div style={{ color: "#6b7280", lineHeight: "1.8" }}>
            <p>
              <strong>Email:</strong> info@yourapp.com
            </p>
            <p>
              <strong>Phone:</strong> (555) 123-4567
            </p>
            <p>
              <strong>Address:</strong> 123 Business St, City, State 12345
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
