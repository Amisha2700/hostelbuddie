import { useState } from 'react';
import axios from 'axios';

const ForgotPassword = () => {
  const [emailid, setEmailid] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!emailid) return setMessage("Please enter your email");

    setLoading(true);
    try {
      const res = await axios.post("http://localhost:4200/users/forgot-password", {
        emailid,
      });

      setMessage(res.data.message || "Password reset email sent");
    } catch (err) {
      setMessage(err.response?.data?.message || "Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="email"
          placeholder="Enter your email"
          value={emailid}
          onChange={(e) => setEmailid(e.target.value)}
          required
          style={styles.input}
        />
        <button type="submit" disabled={loading} style={styles.button}>
          {loading ? "Sending..." : "Send Reset Link"}
        </button>
        {message && <p style={styles.message}>{message}</p>}
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "400px",
    margin: "80px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    boxShadow: "0 0 8px rgba(0,0,0,0.1)",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
  },
  button: {
    padding: "10px",
    backgroundColor: "#2196f3",
    color: "white",
    fontWeight: "bold",
    border: "none",
    cursor: "pointer",
  },
  message: {
    marginTop: "12px",
    color: "green",
  },
};

export default ForgotPassword;
