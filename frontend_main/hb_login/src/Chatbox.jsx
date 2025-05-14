import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { useParams, useLocation } from "react-router-dom"; 
import "./Chatbox.css";
const socket = io("http://localhost:4200");

export default function ChatBox() {
    const currentUser=localStorage.getItem("emailid");
    const {recipientId}=useParams();
    const location=useLocation();
    const userName=location.state?.username||{};
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  useEffect(() => {
    console.log("recipient?",recipientId);
    console.log("current user?",currentUser);
    socket.on("receive_message", (data) => {
      setChat((prev) => [...prev, data]);
    });

    return () => socket.off("receive_message");
  }, []);

  useEffect(()=>{
    socket.emit("register_user",currentUser);
  },[currentUser]);

  const sendMessage = () => {
    if (message.trim()) {
      const msgData = {
        to: recipientId,
        from: currentUser,
        message,
      };
      socket.emit("send_message", msgData);
    //   setChat((prev) => [...prev, msgData]);
      setMessage("");
    }
  };

  return (
    <div className="chat-container">
    <h1 className="chat-heading">You are chatting with {userName}!</h1> {/* Moved outside */}
    <div className="chatbox">
      {/* </div><h1>You are chatting with {userName}!</h1> */}
      <div className="messages">
        {chat.map((msg, idx) => (
          <div key={idx} className={msg.from === currentUser ? "sent" : "received"}>
            {msg.message}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={message}
        placeholder="Type a message..."
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && sendMessage()}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
    </div>
  );
}
