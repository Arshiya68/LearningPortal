import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Welcome to LinkedIn Learning</h1>
        <p style={styles.subtitle}>Learn new skills, anytime, anywhere</p>
        <div style={styles.buttonContainer}>
          <button style={styles.signupButton} onClick={() => navigate("/signup")}>
            Signup
          </button>
          <button style={styles.loginButton} onClick={() => navigate("/login")}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background:
      "linear-gradient(135deg, #0072b1 0%, #00a0dc 100%)", // LinkedIn blue gradient
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  card: {
    backgroundColor: "white",
    padding: "50px 80px",
    borderRadius: "15px",
    textAlign: "center",
    boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
    maxWidth: "500px",
  },
  title: {
    fontSize: "2.5rem",
    marginBottom: "10px",
    color: "#0072b1",
  },
  subtitle: {
    fontSize: "1.2rem",
    marginBottom: "30px",
    color: "#555",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
  },
  signupButton: {
    padding: "12px 30px",
    backgroundColor: "#0072b1",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "1rem",
    transition: "0.3s",
  },
  loginButton: {
    padding: "12px 30px",
    backgroundColor: "white",
    color: "#0072b1",
    border: "2px solid #0072b1",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "1rem",
    transition: "0.3s",
  },
};

// Hover effects
styles.signupButton[":hover"] = { backgroundColor: "#005f86" };
styles.loginButton[":hover"] = { backgroundColor: "#f0f0f0" };

export default Home;
