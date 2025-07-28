# FeedbackApp


---

## ⚙️ Technologies Used

| Component          | Purpose                                          |
|-------------------|--------------------------------------------------|
| Azure Logic Apps   | Workflow orchestration (email trigger, routing) |
| Azure Functions    | GPT-powered classification of user feedback     |
| AzureAI            | Semantic classification and NLP analysis        |
| Microsoft Teams    | Sends alerts via channel messages (Webhook/API) |
| React              | Optional interface for testing / admin view     |
| SQL DATABASE       | Stores and organizes the recieved feedback      |

---

## 🔄 How It Works

1. **Logic App** is triggered (e.g., via HTTP POST, email, or Power App).
2. It passes the feedback to the **Azure Function**.
3. Azure Function:
   - Calls the AzureAI API to classify the feedback
   - Returns the sentiment, rating, IP address of sender, a unique message id, the timestamp of the feedback, a summary of the feedback
4. Logic App uses conditions:
   - If rating is below a threshold, it sends a **Teams notification**
   - Logs or stores result for reporting in SQL

---

## 🚀 Getting Started

### Prerequisites

- Azure student or standart subscription
- OpenAI API key
- Access to Microsoft Teams + ability to create a team/webhook
- [Azure Functions Core Tools](https://learn.microsoft.com/en-us/azure/azure-functions/functions-run-local)
- Node.js & Python (if using both frontend + backend locally)

### 1. Deploy the Azure Function

```bash
cd azure-function
func start  # or deploy using func azure functionapp publish in vscode with the azure extension
```

### 2. Set up the Logic App

Go to Azure Portal
Import the workflow from /wwwroot/logicapp.json
Set correct connections (OpenAI, Teams, HTTP triggers, etc.)

Set these in Azure Function App Settings or .env if running locally:

OPENAI_API_KEY=your_openai_key

---

## 📦 Example Use Case

A user submits feedback like:
"The checkout process was slow and buggy."
Azure Function classifies it as: UI Bug - High Impact
Logic App routes it:
Sends a Teams alert
Logs in storage
Triggers additional workflows if needed

Created by Aras Firat
Feel free to fork, extend, or reach out for collaboration!
