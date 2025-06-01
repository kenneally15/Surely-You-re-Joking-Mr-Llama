# LlamaCon Chat

A web application for interacting with the Meta Llama API.

## Prerequisites

1. Node.js (v14 or higher)
2. A Meta Llama API key

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file in the root directory and add your API key:
```
REACT_APP_LLAMA_API_KEY=your_api_key_here
```

3. Start the development server:
```bash
npm start
```

The application will be available at http://localhost:3000

## Features

- Real-time interaction with the Meta Llama API
- Message history with user and assistant messages
- Loading states and error handling
- Modern UI with Tailwind CSS

## Usage

1. Type your message in the text area
2. Click the "Send" button or press Enter to submit
3. Wait for the API response
4. View the response in the chat history

## Note

Make sure to keep your API key secure and never commit it to version control. The `.env` file is automatically ignored by git. 