import React from "react";
import { useNavigate } from "react-router-dom";

const TechStackInfo = () => {
  const navigate = useNavigate();

  const techInfo = [
    {
      title: "React",
      color: "#61dafb",
      description:
        "React is a powerful JavaScript library used to build dynamic user interfaces. Its component-based architecture makes development efficient, scalable, and reusable. Every modern front-end developer should learn React."
    },
    {
      title: "JavaScript",
      color: "#f7df1e",
      description:
        "JavaScript is the backbone of web development. Whether you're building frontend, backend, or full-stack apps, JavaScript is essential for logic, interaction, and functionality."
    },
    {
      title: "UI/UX Design",
      color: "#ff6f91",
      description:
        "UI/UX focuses on creating user-friendly digital experiences. Good design attracts users, improves usability, and increases product success."
    },
    {
      title: "Node.js",
      color: "#68a063",
      description:
        "Node.js allows JavaScript to run on the server. It supports high-speed, scalable applications and is widely used in modern backend development."
    },
    {
      title: "MongoDB",
      color: "#4db33d",
      description:
        "MongoDB is a NoSQL database used for flexible, scalable data storage. It is perfect for cloud-based applications and large datasets."
    }
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Importance of Each Tech Stack</h1>

      <button style={styles.homeButton} onClick={() => navigate("/dashboard")}>
        ⬅ Back to Dashboard
      </button>

      <div style={styles.cardContainer}>
        {techInfo.map((tech, idx) => (
          <div key={idx} style={{ ...styles.card, borderLeft: `8px solid ${tech.color}` }}>
            <h2 style={{ color: tech.color }}>{tech.title}</h2>
            <p>{tech.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "50px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    background: "linear-gradient(135deg, #e3f2ff, #ffffff)",
    minHeight: "100vh"
  },
  title: {
    textAlign: "center",
    marginBottom: "40px",
    color: "#0072b1",
    fontSize: "2rem"
  },
  homeButton: {
    marginBottom: "10px",
    padding: "10px 20px",
    borderRadius: "8px",
    backgroundColor: "#0072b1",
    color: "white",
    border: "none",
    cursor: "pointer"
  },
  cardContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    justifyContent: "center"
  },
  card: {
    backgroundColor: "white",
    padding: "25px",
    width: "320px",
    borderRadius: "12px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
  }
};

export default TechStackInfo;
