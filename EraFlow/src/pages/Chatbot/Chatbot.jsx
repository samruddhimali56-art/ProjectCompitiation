import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

function Chatbot() {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "👋 Welcome to EraFlow AI Assistant! Ask me anything.",
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userText = input.trim();

    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        text: userText,
      },
    ]);

    setInput("");
    setLoading(true);

    try {
      const apiKey = import.meta.env.VITE_GROQ_API_KEY;

      if (!apiKey) {
        throw new Error(
          "Groq API key is missing. Check your frontend .env file."
        );
      }

      // Get models available to this API key
      const modelsResponse = await axios.get(
        "https://api.groq.com/openai/v1/models",
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
        }
      );

      const models = modelsResponse.data?.data || [];

      // Prefer good conversational models
      const preferredModels = [
        "openai/gpt-oss-120b",
        "openai/gpt-oss-20b",
        "llama-3.3-70b-versatile",
        "llama-3.1-8b-instant",
        "qwen/qwen3.8-27b",
        "qwen/qwen3.6-27b",
      ];

      let selectedModel = null;

      for (const preferredModel of preferredModels) {
        const found = models.find(
          (model) => model.id === preferredModel
        );

        if (found) {
          selectedModel = found.id;
          break;
        }
      }

      // Fallback: find any available text model
      if (!selectedModel) {
        const fallbackModel = models.find((model) => {
          const id = model.id.toLowerCase();

          return (
            id.includes("gpt-oss") ||
            id.includes("llama") ||
            id.includes("qwen")
          );
        });

        if (fallbackModel) {
          selectedModel = fallbackModel.id;
        }
      }

      if (!selectedModel) {
        throw new Error(
          "No suitable Groq text model is available for this API key."
        );
      }

      console.log("Using Groq model:", selectedModel);

      // Send chat request
      const response = await axios.post(
        "https://api.groq.com/openai/v1/chat/completions",
        {
          model: selectedModel,
          messages: [
            {
              role: "system",
              content:
                "You are EraFlow AI Assistant. Answer politely, clearly and helpfully. You can answer questions about history, heritage, culture, travel, technology and general topics. Keep every response limited to approximately 5 lines. Give only the most important and useful information. Do not give long explanations, unnecessary details, or extra examples unless the user specifically asks for more information.",
            },
            {
              role: "user",
              content: userText,
            },
          ],
        },
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
        }
      );

      const reply =
        response.data?.choices?.[0]?.message?.content;

      if (!reply) {
        throw new Error("No response received from Groq.");
      }

      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: reply,
        },
      ]);
    } catch (error) {
      console.error("========== GROQ ERROR ==========");
      console.error("Status:", error.response?.status);
      console.error(
        "Data:",
        JSON.stringify(error.response?.data, null, 2)
      );
      console.error("Message:", error.message);
      console.error("================================");

      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "Sorry, I am unable to answer right now. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
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
          minHeight: 0,
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
            <h4 style={{ margin: 0 }}>
              EraFlow AI Assistant
            </h4>

            <small style={{ opacity: 0.8 }}>
              Always here to help you
            </small>
          </div>
        </div>

        {/* Chat Area */}
        <div
          style={{
            flex: 1,
            minHeight: 0,
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
                  boxShadow:
                    "0 3px 10px rgba(0,0,0,0.08)",
                  lineHeight: "1.6",
                }}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {loading && (
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                marginBottom: "18px",
              }}
            >
              <div
                style={{
                  padding: "14px 18px",
                  borderRadius: "20px",
                  background: "#fff",
                  color: "#777",
                  boxShadow:
                    "0 3px 10px rgba(0,0,0,0.08)",
                }}
              >
                🤖 Thinking...
              </div>
            </div>
          )}

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
              disabled={loading}
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
              disabled={loading}
              style={{
                background: loading
                  ? "#aaa"
                  : "#C89B3C",
                color: "#fff",
                border: "none",
                borderRadius: "50px",
                padding: "14px 28px",
                fontWeight: "bold",
                cursor: loading
                  ? "not-allowed"
                  : "pointer",
                transition: "0.3s",
              }}
            >
              {loading ? "..." : "➤ Send"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chatbot;