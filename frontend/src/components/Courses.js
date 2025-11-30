import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Courses = () => {
  const navigate = useNavigate();

  const courses = [
    {
      title: "React for Beginners",
      description: "Learn React step by step.",
      videoId: "w7ejDZ8SWv8",
    },
    {
      title: "JavaScript Essentials",
      description: "Master JavaScript fundamentals.",
      videoId: "upDLs1sn7g4",
    },
    {
      title: "UI/UX Design Basics",
      description: "Design beautiful user interfaces.",
      videoId: "MBblN98-5lg",
    },
  ];

  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <div style={styles.container}>
      {/* HOME BUTTON */}
      <button style={styles.homeBtn} onClick={() => navigate("/dashboard")}>
        ⬅ Home
      </button>

      <h1 style={styles.title}>Courses</h1>

      {/* Course Cards */}
      <div style={styles.cardContainer}>
        {courses.map((course, idx) => (
          <div
            key={idx}
            style={styles.card}
            onClick={() => setSelectedVideo(course.videoId)}
          >
            <h3>{course.title}</h3>
            <p>{course.description}</p>
          </div>
        ))}
      </div>

      {/* Video Player */}
      {selectedVideo && (
        <div style={styles.videoWrapper}>
          <div style={styles.videoBackground}></div>

          <div style={styles.videoContainer}>
            <iframe
              width="800"
              height="450"
              src={`https://www.youtube.com/embed/${selectedVideo}`}
              title="YouTube video player"
              frameBorder="0"
              allowFullScreen
              style={styles.video}
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: "50px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    position: "relative",
    minHeight: "100vh",
  },

  homeBtn: {
    padding: "10px 20px",
    background: "#0072b1",
    right:"20px",
    color: "white",
    fontSize: "1rem",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    marginBottom: "20px",
    transition: "0.3s",
  },

  title: { marginBottom: "30px", color: "#0072b1", fontSize: "2rem" },

  cardContainer: { display: "flex", gap: "20px", flexWrap: "wrap" },

  card: {
    flex: "1 1 300px",
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
    cursor: "pointer",
    transition: "0.3s",
  },

  videoWrapper: {
    marginTop: "50px",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  videoBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "linear-gradient(135deg, #0072b1, #00a0dc)",
    filter: "blur(40px)",
    opacity: 0.6,
    zIndex: 0,
    borderRadius: "20px",
  },

  videoContainer: {
    position: "relative",
    zIndex: 1,
    padding: "20px",
    background: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(10px)",
    borderRadius: "20px",
    boxShadow: "0 15px 35px rgba(0,0,0,0.3)",
  },

  video: {
    borderRadius: "12px",
  },
};

export default Courses;
