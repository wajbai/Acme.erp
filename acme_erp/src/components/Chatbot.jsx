import React, { useState, useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import "../css/Chatbot.css";
import botAvatar from '../assets/img/acme_logo.svg'; 

const N8N_CHAT_URL = "https://wajbai.app.n8n.cloud/webhook/5f1c0c82-0ff9-40c7-9e2e-b1a96ffe24cd/chat";

function Chatbot() {
  const [open, setOpen] = useState(false);
  const [sessionId, setSessionId] = useState("");
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    let id = localStorage.getItem("sessionId");
    if (!id) {
      id = uuidv4();
      localStorage.setItem("sessionId", id);
    }
    setSessionId(id);
  }, []);

  useEffect(() => {
    if (open && chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, open]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch(N8N_CHAT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "sendMessage",
          sessionId,
          chatInput: input,
        }),
      });

      const data = await response.json();
      const reply = data.output || "✅ Message sent, but no reply received.";
      const botMessage = { sender: "bot", text: reply };
      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      console.error("Error:", err);
      setMessages((prev) => [...prev, { sender: "bot", text: "❌ Error contacting AI." }]);
    }

    setLoading(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  const handleOpen = () => {
    setOpen(true);
    if (messages.length === 0) {
      const welcomeMsg = {
        sender: "bot",
        text: "👋 Hi there! I’m Acme’s AI Assistant. How can I support you today?",
      };
      setMessages([welcomeMsg]);
    }

  };

  return (
    <div>
      <div className="chatbot-toggle" onClick={handleOpen}>
        💬  Acme AI Assistant
      </div>

      {open && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <div className="chatbot-header-title">
              <img src={botAvatar} alt="Acme Bot" className="chatbot-avatar" />
              <span>Acme AI Assistant</span>
            </div>
            <button className="X-button" onClick={() => setOpen(false)}  >
              ×
            </button>
          </div>

          <div className="chatbot-messages">
            {messages.map((msg, idx) => (
              <div key={idx} className={`chatbot-message ${msg.sender === "user" ? "user" : "bot"}`}>
                {msg.text}
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          <div className="chatbot-input-area">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder={loading ? "Sending message..." : "Ask me anything about Acme ERP..."}
              disabled={loading}
            />

            <button onClick={sendMessage} disabled={loading || !input.trim()}>
              {loading ? "..." : "Send"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chatbot;

