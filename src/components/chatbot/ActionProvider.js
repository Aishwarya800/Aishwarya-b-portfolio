class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  updateChatbotState(message) {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }

  greet() {
    const message = this.createChatBotMessage("Hi there! 👋 How can I help you?");
    this.updateChatbotState(message);
  }

  about() {
    const message = this.createChatBotMessage(
      "I'm Aishwarya B, a Computer Science Engineering student passionate about web development and AI projects. 🚀"
    );
    this.updateChatbotState(message);
  }

  skills() {
    const message = this.createChatBotMessage(
      "My main skills include: HTML, CSS, JavaScript, React, Node.js, Express, SQL, and Python 🧠"
    );
    this.updateChatbotState(message);
  }

  projects() {
    const message = this.createChatBotMessage(
      "Here are some of my projects:\n\n• 🌦️ WEATHER-BACKENDS – Full-stack weather app using React & Express.\n• 🦾 Gesture-Controlled Prosthetic Arm – Arduino & Tinkercad project.\n• 💬 BreatheTalk – AI voice generator from breathing patterns."
    );
    this.updateChatbotState(message);
  }

  contact() {
    const message = this.createChatBotMessage(
      "📩 You can reach me at: aishwarya@example.com\n🔗 LinkedIn: linkedin.com/in/aishwarya"
    );
    this.updateChatbotState(message);
  }

  unknown() {
    const message = this.createChatBotMessage(
      "I'm not sure about that 🤔 — try asking about skills, projects, or contact info!"
    );
    this.updateChatbotState(message);
  }
}

export default ActionProvider;
