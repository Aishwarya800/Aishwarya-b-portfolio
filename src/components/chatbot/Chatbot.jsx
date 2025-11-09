import React, { useState } from "react";
import { Chatbot } from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import "./Chatbot.css";
import config from "./config";
import ActionProvider from "./ActionProvider";
import MessageParser from "./MessageParser";

const MyChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="chatbot-wrapper">
      {isOpen && (
        <div className="chatbot-container">
          <Chatbot
            config={config}
            actionProvider={ActionProvider}
            messageParser={MessageParser}
          />
        </div>
      )}
      <button className="chatbot-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "✖" : "💬"}
      </button>
    </div>
  );
};

export default MyChatbot;
