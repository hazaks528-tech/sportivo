import React from "react";

function StudentContact() {
  return (
    <div style={styles.container}>
      <h2>Student Contact</h2>

      <form style={styles.form}>
        <input
          type="text"
          placeholder="Student Name"
          style={styles.input}
        />

        <input
          type="email"
          placeholder="Student Email"
          style={styles.input}
        />

        <input
          type="text"
          placeholder="Phone Number"
          style={styles.input}
        />

        <textarea
          placeholder="Your Message"
          rows="5"
          style={styles.input}
        ></textarea>

        <button type="submit" style={styles.button}>
          Send Message
        </button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    width: "400px",
    margin: "50px auto",
    padding: "25px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },

  input: {
    padding: "12px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "6px",
  },

  button: {
    padding: "12px",
    backgroundColor: "#0d6efd",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default StudentContact;