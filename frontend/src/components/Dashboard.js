import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  // Placeholder courses
  const courses = [
    { title: "React for Beginners", description: "Learn React step by step.", image: "https://external-preview.redd.it/icCuZjPCCfZlQIwb1rK_coLBtolFATUKJjZxJ7tJDrc.jpg?auto=webp&s=c276738d7af7cd3e03e6663d68254a2b49ac1e41" },
    { title: "JavaScript Essentials", description: "Master JavaScript fundamentals.", image: "https://cdn.pixabay.com/photo/2019/10/03/12/12/javascript-4523100_640.jpg" },
    { title: "UI/UX Design Basics", description: "Design beautiful user interfaces.", image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?fit=crop&w=400&q=80" },
  ];

  // Placeholder blog posts
  const blogs = [
    { title: "Why Online Learning Matters", content: "Online learning helps you upgrade your skills anytime, anywhere. Learn at your own pace and build your career." },
    { title: "Top 5 Skills in 2025", content: "Digital skills, React, AI basics, UX/UI design, and data analytics are highly in demand for the next decade." },
    { title: "Tips to Stay Motivated While Learning", content: "Set small goals, track your progress, and reward yourself to stay consistent in your learning journey." },
  ];

  return (
    <div style={styles.container}>
      {/* Navigation Menu */}
      <nav style={styles.nav}>
        <div style={styles.logo}>LinkedIn Learning</div>
       <ul style={styles.navLinks}>
  <li style={styles.navItem} onClick={() => navigate("/dashboard")}>Home</li>
  <li style={styles.navItem} onClick={() => navigate("/courses")}>Courses</li>
  <li style={styles.navItem} onClick={() => navigate("/account")}>Account</li>
  <li style={styles.navItem} onClick={() => navigate("/settings")}>Settings</li>
  <li style={styles.navItem} onClick={handleLogout}>Logout</li>
</ul>

      </nav>

      {/* Hero Section */}
      <div style={styles.hero}>
        <div style={styles.heroText}>
          <h1>Welcome Back!</h1>
          <p>Continue learning and upgrade your skills today.</p>
          <button style={styles.ctaButton} onClick={() => navigate("/techstack")}>
  Importance of Each Tech Stack
</button>

        </div>
        <div style={styles.heroImage}>
          <img
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?fit=crop&w=800&q=80"
            alt="Study"
            style={styles.image}
          />
        </div>
      </div>

      {/* Courses Section */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Featured Courses</h2>
        <div style={styles.cardContainer}>
          {courses.map((course, idx) => (
            <div key={idx} style={styles.courseCard}>
              <img src={course.image} alt={course.title} style={styles.courseImage} />
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <button style={styles.courseButton}>Start Learning</button>
            </div>
          ))}
        </div>
      </div>

      {/* Blog Section */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Learning Blog</h2>
        <div style={styles.blogContainer}>
          {blogs.map((blog, idx) => (
            <div key={idx} style={styles.blogCard}>
              <h3>{blog.title}</h3>
              <p>{blog.content}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer style={styles.footer}>
        &copy; 2025 LinkedIn Learning Clone. All rights reserved.
      </footer>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: "#f0f2f5",
    minHeight: "100vh",
  },
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#0072b1",
    padding: "10px 50px",
    color: "white",
    fontWeight: "bold",
    position: "sticky",
    top: 0,
    zIndex: 100,
  },
  logo: { fontSize: "1.5rem" },
  navLinks: { display: "flex", gap: "20px", listStyle: "none" },
  navItem: { cursor: "pointer", transition: "0.3s" },
  hero: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "50px",
    gap: "50px",
    flexWrap: "wrap",
    backgroundColor: "#e6f2fa",
  },
  heroText: { flex: 1, minWidth: "300px" },
  ctaButton: {
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
  heroImage: { flex: 1, minWidth: "300px", textAlign: "center" },
  image: { maxWidth: "100%", borderRadius: "15px", boxShadow: "0 10px 25px rgba(0,0,0,0.2)" },

  section: { padding: "50px", maxWidth: "1200px", margin: "0 auto" },
  sectionTitle: { marginBottom: "30px", color: "#0072b1" },

  cardContainer: { display: "flex", gap: "20px", flexWrap: "wrap" },
  courseCard: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
    flex: "1 1 300px",
    textAlign: "center",
  },
  courseImage: { width: "100%", borderRadius: "12px", marginBottom: "15px" },
  courseButton: {
    marginTop: "10px",
    padding: "10px 20px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#0072b1",
    color: "white",
    cursor: "pointer",
  },

  blogContainer: { display: "flex", flexDirection: "column", gap: "20px" },
  blogCard: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
  },

  footer: {
    textAlign: "center",
    padding: "20px",
    backgroundColor: "#0072b1",
    color: "white",
    marginTop: "50px",
  },
};

export default Dashboard;
