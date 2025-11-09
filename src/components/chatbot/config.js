import { createChatBotMessage } from "react-chatbot-kit";

const config = {
  botName: "AishBot",
  initialMessages: [
    createChatBotMessage("Hello! 👋 I'm AishBot, your portfolio assistant."),
    createChatBotMessage("You can ask me about Aishwarya’s skills, projects, or contact details! 💡"),
  ],
  customStyles: {
    botMessageBox: { backgroundColor: "#0078FF" },
    chatButton: { backgroundColor: "#0078FF" },
  },
};

export default config;
