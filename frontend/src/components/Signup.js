import React, { useState } from "react";
import { signup } from "../services/api";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await signup(form);
      alert(res.data.message);
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div style={styles.container}>
      
      {/* TOP-RIGHT LINKEDIN LOGO */}
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
        alt="LinkedIn"
        style={styles.logo}
      />

      <div style={styles.card}>
        <h2 style={styles.title}>Create Your Account</h2>

        {/* BOLD LINE ABOUT LINKEDIN LEARNING */}
        <p style={styles.boldNote}>
          This platform is part of our{" "}
          <span style={{ color: "#0072b1" }}>LinkedIn Learning</span> training system.
        </p>

        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            style={styles.input}
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            required
          />
          <input
            style={styles.input}
            name="email"
            placeholder="Email Address"
            type="email"
            onChange={handleChange}
            required
          />
          <input
            style={styles.input}
            name="password"
            placeholder="Password"
            type="password"
            onChange={handleChange}
            required
          />
          <button type="submit" style={styles.button}>
            Signup
          </button>
        </form>

        <p style={styles.footerText}>
          Already have an account?{" "}
          <span style={styles.link} onClick={() => navigate("/login")}>
            Login
          </span>
        </p>
      </div>

      {/* BOTTOM REACT LOGO + TEXT */}
      <div style={styles.reactContainer}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
          alt="React Logo"
          style={styles.reactLogo}
        />
        <p style={styles.reactText}>Made with React </p>
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
    background: "linear-gradient(135deg, #00a0dc, #0072b1)",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    position: "relative",
  },

  logo: {
    position: "absolute",
    top: "20px",
    right: "20px",
    width: "50px",
    height: "50px",
  },

  card: {
    backgroundColor: "white",
    padding: "50px 60px",
    borderRadius: "15px",
    boxShadow: "0 15px 30px rgba(0,0,0,0.2)",
    textAlign: "center",
    width: "100%",
    maxWidth: "400px",
  },

  title: {
    color: "#0072b1",
    marginBottom: "15px",
  },

  boldNote: {
    fontWeight: "bold",
    marginBottom: "25px",
    fontSize: "1rem",
    color: "#333",
  },

  form: {
    display: "flex",
    flexDirection: "column",
  },

  input: {
    padding: "12px",
    marginBottom: "15px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "1rem",
  },

  button: {
    padding: "12px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#0072b1",
    color: "white",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "0.3s",
  },

  footerText: {
    marginTop: "20px",
    color: "#555",
  },

  link: {
    color: "#0072b1",
    cursor: "pointer",
    fontWeight: "bold",
  },

  /* REACT LOGO ANIMATION SECTION */
  reactContainer: {
    position: "absolute",
    bottom: "20px",
    textAlign: "center",
  },

  reactLogo: {
    width: "60px",
    height: "60px",
    animation: "spin 10s linear infinite, float 3s ease-in-out infinite",
  },

  reactText: {
    color: "white",
    marginTop: "8px",
    fontWeight: "bold",
    fontSize: "1rem",
    textShadow: "0 2px 4px rgba(0,0,0,0.3)",
  },

  /* Inline CSS keyframe animations */
  "@keyframes spin": {
    from: { transform: "rotate(0deg)" },
    to: { transform: "rotate(360deg)" },
  },

  "@keyframes float": {
    "0%": { transform: "translateY(0px)" },
    "50%": { transform: "translateY(-10px)" },
    "100%": { transform: "translateY(0px)" },
  },
};

export default Signup;
