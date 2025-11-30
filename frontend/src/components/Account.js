import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Account = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // show loading while fetching

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");

      // If no token, redirect to login
      if (!token) {
        navigate("/login");
        return;
      }

      try {
        // Call backend API to get current user
        const res = await axios.get("http://localhost:5000/api/user/me", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(res.data); // set user data
      } catch (err) {
        console.error(err);
        navigate("/login"); // if token invalid, redirect
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [navigate]);

  if (loading) return <p style={{ textAlign: "center", marginTop: "50px" }}>Loading...</p>;

  return (
    <div style={styles.container}>
      <div style={styles.overlay}></div>

      <div style={styles.card}>
        <h2 style={styles.title}>Account Details</h2>
        <p><strong>Name:</strong> {user?.name}</p>
        <p><strong>Email:</strong> {user?.email}</p>
        <button style={styles.button} onClick={() => navigate("/dashboard")}>
          Go to Dashboard
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1559757175-570cd5b7f67d?fit=crop&w=1350&q=80')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
    zIndex: 1,
  },
  card: {
    position: "relative",
    zIndex: 2,
    backgroundColor: "white",
    padding: "50px 40px",
    borderRadius: "15px",
    boxShadow: "0 15px 30px rgba(0,0,0,0.3)",
    textAlign: "center",
    maxWidth: "400px",
    width: "90%",
    color: "#333",
  },
  title: { marginBottom: "25px", color: "#0072b1" },
  button: {
    marginTop: "20px",
    padding: "12px 25px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#0072b1",
    color: "white",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "0.3s",
  },
};

export default Account;
