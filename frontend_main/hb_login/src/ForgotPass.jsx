import { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ResetPassword = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newPassword || !confirmPassword) {
      return setMessage("Please fill in all fields");
    }
    if (newPassword !== confirmPassword) {
      return setMessage("Passwords do not match");
    }

    setLoading(true);
    try {
      const res = await axios.post("http://localhost:4200/users/reset-password", {
        token,
        newPassword,
      });

      setMessage(res.data.message || "Password reset successful");
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (err) {
      setMessage(err.response?.data?.message || "Reset failed. Token may be expired.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <h2>Reset Your Password</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          style={styles.input}
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          style={styles.input}
          required
        />
        <button type="submit" disabled={loading} style={styles.button}>
          {loading ? "Resetting..." : "Reset Password"}
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
    backgroundColor: "#4CAF50",
    color: "white",
    fontWeight: "bold",
    border: "none",
    cursor: "pointer",
  },
  message: {
    marginTop: "12px",
    color: "red",
  },
};

export default ResetPassword;
