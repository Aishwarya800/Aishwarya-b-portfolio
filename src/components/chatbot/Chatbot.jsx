import React, { useState, useEffect } from "react";
import "./Chatbot.css";
import ActionProvider from "./ActionProvider";
import MessageParser from "./MessageParser";
import config from "./config";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  // Load chat from localStorage on mount
  useEffect(() => {
    const savedMessages = localStorage.getItem("chatMessages");
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    } else {
      setMessages(config.initialMessages);
    }
  }, []);

  //  Save chat whenever messages change
  useEffect(() => {
    localStorage.setItem("chatMessages", JSON.stringify(messages));
  }, [messages]);

  const actionProvider = new ActionProvider(setMessages);
  const messageParser = new MessageParser(actionProvider);

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, newMessage]);

    messageParser.parse(input);
    setInput("");
  };

  return (
    <div className="chatbot-wrapper">
      <button className="chatbot-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "✖" : "💬"}
      </button>

      {isOpen && (
        <div className="chatbot-container">
          <div className="chatbot-header">
            <h3>{config.botName}</h3>
          </div>

          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`chat-message ${
                  msg.sender === "bot" ? "bot-message" : "user-message"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div className="chatbot-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Type a message..."
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
