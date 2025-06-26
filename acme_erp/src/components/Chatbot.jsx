import React, { useState, useRef, useEffect } from "react";
import '../css/Chatbot.css';

const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent";

function Chatbot() {
  const [open, setOpen] = useState(false);
  const [apiKey, setApiKey] = useState(
    localStorage.getItem("gemini_api_key") || "AIzaSyCh1U7IvKqvifRalILOw9J2Etfhz8_gKJk"
  );
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState(() => {
    const stored = localStorage.getItem("chat_history");
    return stored ? JSON.parse(stored) : [];
  });
  const [userName, setUserName] = useState(() => localStorage.getItem("user_name") || "");
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    if (open && chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, open]);

  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.removeItem("chat_history");
      localStorage.removeItem("user_name");
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, []);

  const handleApiKeySave = () => {
    localStorage.setItem("gemini_api_key", apiKey);
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = { role: "user", content: input };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput("");
    setLoading(true);
    localStorage.setItem("chat_history", JSON.stringify(newMessages));

    const nameMatch = input.match(/my name is (\w+)/i);
    if (nameMatch) {
      const name = nameMatch[1];
      setUserName(name);
      localStorage.setItem("user_name", name);
    }

    if (/what(?:'s| is) my name\??/i.test(input)) {
      const botReply = userName
        ? `Your name is ${userName}.`
        : "I don't know your name yet. Please tell me by saying 'My name is ...'";
      const botMsg = { role: "bot", content: botReply };
      const updatedMessages = [...newMessages, botMsg];
      setMessages(updatedMessages);
      localStorage.setItem("chat_history", JSON.stringify(updatedMessages));
      setLoading(false);
      return;
    }

    try {
      const res = await fetch(`${GEMINI_API_URL}?key=${apiKey}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ role: "user", parts: [{ text: input }] }],
          generationConfig: { maxOutputTokens: 50 },
        }),
      });

      const data = await res.json();
      const botMsg = {
        role: "bot",
        content: data?.candidates?.[0]?.content?.parts?.[0]?.text || "No response from Gemini.",
      };

      const updatedMessages = [...newMessages, botMsg];
      setMessages(updatedMessages);
      localStorage.setItem("chat_history", JSON.stringify(updatedMessages));
    } catch (e) {
      console.error("Gemini API call failed:", e);
      const errorMsg = { role: "bot", content: "Error contacting Gemini API." };
      const updatedMessages = [...newMessages, errorMsg];
      setMessages(updatedMessages);
      localStorage.setItem("chat_history", JSON.stringify(updatedMessages));
    }

    setLoading(false);
  };

  const handleOpen = () => {
    setOpen(true);
    if (messages.length === 0) {
      const welcomeMsg = {
        role: "bot",
        content: "👋 Welcome to Acme ERP, how can I help you?",
      };
      setMessages([welcomeMsg]);
      localStorage.setItem("chat_history", JSON.stringify([welcomeMsg]));
    }
  };

  return (
    <div>
      <div className="chatbot-toggle" onClick={handleOpen}>
  Chat with us 💬
</div>


      {open && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <strong>Acme Chatbot</strong>
            <button onClick={() => setOpen(false)} aria-label="Close" style={{color: '#111'}}>×</button>
          </div>

          <div className="chatbot-messages">
            {!apiKey ? (
              <div>
                <p>Enter your Gemini API key to start chatting:</p>
                <input
                  type="text"
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  placeholder="Paste Gemini API key here"
                  style={{ width: "100%", marginBottom: 8 }}
                />
                <button onClick={handleApiKeySave} style={{ width: "100%" }}>
                  Save API Key
                </button>
                <p style={{ fontSize: 12, color: "#888", marginTop: 8 }}>
                  Get your free API key from{" "}
                  <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noopener noreferrer">
                    Google AI Studio
                  </a>.
                </p>
              </div>
            ) : (
              <>
                {messages.map((msg, i) => (
                  <div key={i} className={`chatbot-message ${msg.role === "user" ? "user" : "bot"}`}>
                    {msg.content}
                  </div>
                ))}
                <div ref={chatEndRef} />
              </>
            )}
          </div>

          {apiKey && (
            <div className="chatbot-input-area">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && !loading && handleSend()}
                placeholder={loading ? "Waiting for Gemini..." : "Type your message..."}
                disabled={loading}
              />
              <button onClick={handleSend} disabled={loading || !input.trim()}>
                {loading ? "..." : "Send"}
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Chatbot;
