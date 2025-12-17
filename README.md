# Chef Claude App

A Vite + React project that generates recipes from a list of ingredients using Hugging Face inference.

Frontend is built with **React + Vite**

---

## Features

- Input ingredients and get recipe suggestions.
- Uses Hugging Face for text generation.
- Frontend/backend separation ensures your API token remains secret.
- Fully functional locally without Vercel or serverless deployment.

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/priyasjoshi/chef-claude-app.git
cd chef-claude-app

2. Install Dependencies

In the project root, run:

```bash
npm install

3. Set Up Environment Variables

Edit .env and add your Hugging Face token:
HF_ACCESS_TOKEN=hf_your_token_here

4. Run the Project
```bash
npm start

5. Usage

Open the frontend in your browser.

Enter a list of ingredients.

Click Generate.

The recipe will be displayed below the input.