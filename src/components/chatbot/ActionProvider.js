class ActionProvider {
  constructor(setMessages) {
    this.setMessages = setMessages;
  }

  sendMessage(message) {
    this.setMessages((prev) => [
      ...prev,
      { sender: "bot", text: message },
    ]);
  }

  greet() {
    this.sendMessage("Hi there! 👋 How can I help you?");
  }

  about() {
    this.sendMessage(
      "I'm Aishwarya B, a Computer Science Engineering student passionate about web development and AI projects. 🚀"
    );
  }

  skills() {
    this.sendMessage(
      "My main skills include HTML, CSS, JavaScript, React, Node.js, Express, SQL, and Python 🧠"
    );
  }

  projects() {
    this.sendMessage(
      "Here are some of my projects:\n• 🌦️ Weather App – Full-stack React & Express\n• 🦾 Prosthetic Arm (Arduino)\n• 💬 BreatheTalk – AI Voice from Breathing Patterns"
    );
  }

  contact() {
    this.sendMessage(
      "📩 Reach me at: aishwarya@example.com\n🔗 LinkedIn: linkedin.com/in/aishwarya"
    );
  }

  unknown() {
    this.sendMessage(
      "I'm not sure about that 🤔 — try asking about skills, projects, or contact info!"
    );
  }
}

export default ActionProvider;
