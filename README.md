# 🧠 Helix AI

> **Decision Intelligence for Slack**
>
> Analyze complex decisions, receive structured AI recommendations, and maintain a persistent decision history — all without leaving Slack.

<p align="left">
  <img alt="license" src="https://img.shields.io/badge/license-MIT-blue.svg">
  <img alt="node" src="https://img.shields.io/badge/node-%3E%3D18-brightgreen.svg">
  <img alt="status" src="https://img.shields.io/badge/status-active-success.svg">
</p>

---

## 🚀 Overview

Helix AI is an intelligent Slack assistant that helps individuals and teams make better decisions — directly inside Slack.

Instead of generic chatbot responses, Helix returns structured decision reports including:

- ✅ Recommendation
- ⭐ Confidence Score
- 👍 Pros
- 👎 Cons
- ⚠️ Risks
- 💰 Estimated Cost
- ⏳ Timeline
- ➡️ Actionable Next Steps

Every analysis is automatically stored, so users can revisit previous decisions anytime.

---

## ✨ Features

- 🧠 AI-powered decision intelligence
- 💬 Native Slack integration
- ⚡ OpenRouter AI integration
- 📊 Structured JSON responses
- 📚 Persistent decision memory
- 🕒 Decision history
- 🎨 Beautiful Slack Block Kit UI
- 🧩 Modular architecture
- 🔒 Environment variable configuration

---

## 🖼️ Screenshots

### Decision Analysis
`assets/decision-analysis.png`

### Decision History
`assets/history.png`

### Help Command
`assets/help.png`

> *Add your screenshots to the `assets/` folder and update the paths above.*

---

## 🏗️ Architecture

```
                   Slack Workspace
                          │
                          ▼
                  Slack Bolt App
                          │
                          ▼
                  Command Router
        ┌──────────┼─────────────┐
        ▼          ▼             ▼
      hello       help         history
                                  │
                                  ▼
                         Decision Engine
                                  │
             ┌────────────────────┴────────────────────┐
             ▼                                          ▼
      OpenRouter AI                          Local Decision Memory
             │                                          │
             ▼                                          ▼
      Structured JSON                          decisions.json
             │
             ▼
      Slack Block Kit Response
```

---

## 📂 Project Structure

```text
helix-ai/
│
├── src/
│   ├── commands/
│   ├── config/
│   ├── database/
│   ├── prompts/
│   ├── services/
│   ├── utils/
│   └── app.js
│
├── package.json
├── .env
└── README.md
```

---

## ⚙️ Installation

**1. Clone the repository**

```bash
git clone https://github.com/REHAN-503/Helix-AI.git
```

**2. Navigate into the project**

```bash
cd Helix-AI
```

**3. Install dependencies**

```bash
npm install
```

**4. Create a `.env` file**

```env
SLACK_BOT_TOKEN=
SLACK_SIGNING_SECRET=
SLACK_APP_TOKEN=

OPENROUTER_API_KEY=
AI_MODEL=
```

**5. Start Helix**

```bash
npm run dev
```

---

## 💬 Available Commands

| Command        | Description                    |
|----------------|---------------------------------|
| `hello`        | Greets the user                 |
| `help`         | Displays available commands     |
| `history`      | Shows previous AI decisions     |
| Any question   | Performs AI decision analysis   |

---

## 🛠️ Tech Stack

- Node.js
- Slack Bolt SDK
- OpenRouter API
- JavaScript (ES Modules)
- Slack Block Kit
- JSON storage
- dotenv

---

## 📚 Example

**User**

```
Should I build a mobile app first?
```

**Helix**

```
Recommendation:
Build a responsive website first.

Confidence:
85%

Pros
• Faster development
• Lower cost

Risks
• Reduced native functionality

Next Steps
• Build MVP
• Validate with users
```

---

## 🛣️ Roadmap

- [x] Slack Bot
- [x] OpenRouter Integration
- [x] Decision Engine
- [x] Persistent Decision Memory
- [x] History Command
- [x] Slack Block Kit UI
- [ ] Decision Comparison
- [ ] Search History
- [ ] Export Reports
- [ ] Multi-user Analytics

---

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request if you'd like to help improve Helix AI.

---

## 👨‍💻 Author

**Mahammad Rehan Khatri**
B.Tech Computer Science (AI & ML)

- GitHub: [@REHAN-503](https://github.com/REHAN-503)
- LinkedIn: [Mahammad Rehan](https://www.linkedin.com/in/mahammad-rehan)

---

## 📄 License

Licensed under the [MIT License](LICENSE).

---

## ⭐ Support

If you found this project interesting, consider giving it a ⭐ on GitHub!