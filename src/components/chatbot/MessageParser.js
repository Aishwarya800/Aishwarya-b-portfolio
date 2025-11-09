class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lower = message.toLowerCase();

    if (lower.includes("hello") || lower.includes("hi")) {
      this.actionProvider.greet();
    } else if (lower.includes("about") || lower.includes("yourself")) {
      this.actionProvider.about();
    } else if (lower.includes("skill")) {
      this.actionProvider.skills();
    } else if (lower.includes("project")) {
      this.actionProvider.projects();
    } else if (lower.includes("contact") || lower.includes("email")) {
      this.actionProvider.contact();
    } else {
      this.actionProvider.unknown();
    }
  }
}

export default MessageParser;
