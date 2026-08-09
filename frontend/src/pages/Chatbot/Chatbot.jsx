import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Chatbot() {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "👋 Welcome to EraFlow AI Assistant! Ask me anything.",
    },
  ]);

  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  const sendMessage = async () => {
  if (!input.trim()) return;

  const userText = input;

  setMessages((prev) => [
    ...prev,
    {
      sender: "user",
      text: userText,
    },
  ]);

  setInput("");

  try {
   const response = await axios.post(
  "https://api.groq.com/openai/v1/chat/completions",
  {
    model: "llama-3.3-70b-versatile",
    messages: [
      {
        role: "system",
        content:
          "You are EraFlow AI Assistant. Answer politely and help users."
      },
      {
        role: "user",
        content: userText
      }
    ]
  },
  {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`,
      "Content-Type": "application/json"
    }
  }
);


    const reply =
  response.data.choices[0].message.content;


    setMessages((prev) => [
      ...prev,
      {
        sender: "bot",
        text: reply,
      },
    ]);

  } catch (error) {

    console.log("Gemini Error:", error.response?.data || error);

    setMessages((prev) => [
      ...prev,
      {
        sender: "bot",
        text: "Sorry, I am unable to answer right now.",
      },
    ]);
  }
};

  return (
    <div
      style={{
        background: "#F8F3EF",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "30px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "850px",
          height: "85vh",
          background: "#fff",
          borderRadius: "25px",
          overflow: "hidden",
          boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Header */}
        <div
          style={{
            background: "#8C3C11",
            color: "#fff",
            padding: "18px 25px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <div
            style={{
              width: "50px",
              height: "50px",
              background: "#C89B3C",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "24px",
            }}
          >
            🤖
          </div>

          <div>
            <h4 style={{ margin: 0 }}>EraFlow AI Assistant</h4>
            <small style={{ opacity: 0.8 }}>
              Always here to help you
            </small>
          </div>
        </div>

        {/* Chat Area */}
        <div
          style={{
            flex: 1,
            padding: "25px",
            overflowY: "auto",
            background: "#F8F3EF",
          }}
        >
          {messages.map((msg, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                justifyContent:
                  msg.sender === "user"
                    ? "flex-end"
                    : "flex-start",
                marginBottom: "18px",
              }}
            >
              <div
                style={{
                  maxWidth: "70%",
                  padding: "14px 18px",
                  borderRadius: "20px",
                  background:
                    msg.sender === "user"
                      ? "#8C3C11"
                      : "#ffffff",
                  color:
                    msg.sender === "user"
                      ? "#fff"
                      : "#333",
                  boxShadow: "0 3px 10px rgba(0,0,0,0.08)",
                  lineHeight: "1.6",
                }}
              >
                {msg.text}
              </div>
            </div>
          ))}

          <div ref={messagesEndRef}></div>
        </div>

        {/* Footer */}
        <div
          style={{
            padding: "20px",
            background: "#fff",
            borderTop: "1px solid #ddd",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "15px",
            }}
          >
            <input
              type="text"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  sendMessage();
                }
              }}
              style={{
                flex: 1,
                padding: "14px 18px",
                borderRadius: "50px",
                border: "2px solid #C89B3C",
                outline: "none",
                fontSize: "16px",
              }}
            />

            <button
              onClick={sendMessage}
              style={{
                background: "#C89B3C",
                color: "#fff",
                border: "none",
                borderRadius: "50px",
                padding: "14px 28px",
                fontWeight: "bold",
                cursor: "pointer",
                transition: "0.3s",
              }}
              onMouseOver={(e) =>
                (e.target.style.background = "#8C3C11")
              }
              onMouseOut={(e) =>
                (e.target.style.background = "#C89B3C")
              }
            >
              ➤ Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chatbot;