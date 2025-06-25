import React, { useState, useRef, useEffect } from "react";

const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent";

function Chatbot() {
  const [open, setOpen] = useState(false);
  const [apiKey, setApiKey] = useState(localStorage.getItem("gemini_api_key") || "AIzaSyCj1ik58d5xg5K_dcA8KPGplW6bCz19avw");
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    if (open && chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, open]);

  const handleApiKeySave = () => {
    localStorage.setItem("gemini_api_key", apiKey);
  };

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMsg = { role: "user", content: input };
    setMessages((msgs) => [...msgs, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch(`${GEMINI_API_URL}?key=${apiKey}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: input }] }]
        }),
      });
      const data = await res.json();
      console.log('Gemini API response:', data); // Debug log
      if (data.error) {
        setMessages((msgs) => [...msgs, { role: "bot", content: `Error: ${data.error.message}` }]);
      } else {
        const botMsg = {
          role: "bot",
          content: data?.candidates?.[0]?.content?.parts?.[0]?.text || "No response from Gemini."
        };
        setMessages((msgs) => [...msgs, botMsg]);
      }
    } catch (e) {
      setMessages((msgs) => [...msgs, { role: "bot", content: "Error contacting Gemini API." }]);
    }
    setLoading(false);
  };

  return (
    <div>
      <div
        style={{
          position: "fixed",
          bottom: 32,
          right: 32,
          zIndex: 1000,
          background: "#007bff",
          color: "#fff",
          borderRadius: "50%",
          width: 72,
          height: 72,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
          fontSize: 36
        }}
        onClick={() => setOpen((o) => !o)}
        title="Chat with Gemini"
      >
        💬
      </div>
      {open && (
        <div
          style={{
            position: "fixed",
            bottom: 120,
            right: 32,
            width: 450,
            maxHeight: 650,
            background: "#fff",
            borderRadius: 16,
            boxShadow: "0 4px 32px rgba(0,0,0,0.25)",
            display: "flex",
            flexDirection: "column",
            zIndex: 1001,
            overflow: "hidden",
            fontSize: 18
          }}
        >
          <div style={{ padding: 20, borderBottom: "1px solid #eee", background: "#f7f7f7", fontSize: 22 }}>
            <strong>Gemini Chatbot</strong>
            <button
              style={{ float: "right", background: "none", border: "none", fontSize: 26, cursor: "pointer" }}
              onClick={() => setOpen(false)}
              aria-label="Close"
            >×</button>
          </div>
          <div style={{ flex: 1, overflowY: "auto", padding: 20 }}>
            {!apiKey ? (
              <div>
                <p>Enter your Gemini API key to start chatting:</p>
                <input
                  type="text"
                  value={apiKey}
                  onChange={e => setApiKey(e.target.value)}
                  placeholder="Paste Gemini API key here"
                  style={{ width: "100%", marginBottom: 8 }}
                />
                <button onClick={handleApiKeySave} style={{ width: "100%" }}>Save API Key</button>
                <p style={{ fontSize: 12, color: "#888", marginTop: 8 }}>
                  Get your free API key from <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noopener noreferrer">Google AI Studio</a>.
                </p>
              </div>
            ) : (
              <>
                {messages.map((msg, i) => (
                  <div key={i} style={{ marginBottom: 12, textAlign: msg.role === "user" ? "right" : "left" }}>
                    <div
                      style={{
                        display: "inline-block",
                        background: msg.role === "user" ? "#e6f0ff" : "#f1f1f1",
                        color: "#222",
                        borderRadius: 10,
                        padding: "12px 18px",
                        maxWidth: "80%",
                        fontSize: 18
                      }}
                    >
                      {msg.content}
                    </div>
                  </div>
                ))}
                <div ref={chatEndRef} />
              </>
            )}
          </div>
          {apiKey && (
            <div style={{ padding: 18, borderTop: "1px solid #eee", background: "#fafafa" }}>
              <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === "Enter" && !loading && handleSend()}
                placeholder={loading ? "Waiting for Gemini..." : "Type your message..."}
                disabled={loading}
                style={{ width: "75%", marginRight: 12, fontSize: 18, padding: 8 }}
              />
              <button onClick={handleSend} disabled={loading || !input.trim()} style={{ fontSize: 18, padding: "8px 18px" }}>
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