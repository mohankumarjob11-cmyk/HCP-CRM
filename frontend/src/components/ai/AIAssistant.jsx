import { useState } from "react";
import ChatBubble from "./ChatBubble";
import ChatInput from "./ChatInput";
import TypingIndicator from "./TypingIndicator";
import { useDispatch } from "react-redux";
import { populateFromAI } from "../../redux/interactionSlice";

export default function AIAssistant() {
  const dispatch = useDispatch();
  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "👋 Hello! Describe your interaction with an HCP and I'll populate the form automatically.",
    },
  ]);

  const [loading, setLoading] = useState(false);

  const handleSend = async (message) => {
    if (!message.trim()) return;

    setMessages((prev) => [...prev, { sender: "user", text: message }]);
    setLoading(true);

    try {
      const response = await fetch("http://127.0.0.1:8000/ai/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message,
        }),
      });

      const data = await response.json();

      console.log("AI Response:", data);

      // Populate Redux form
      dispatch(populateFromAI(data));

      // Show a success message
      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: "✅ Interaction analyzed successfully. The form has been populated.",
        },
      ]);

      // Later we'll update Redux with extracted fields
      console.log(data);
    } catch (err) {
      console.error(err);

      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: "Unable to connect to AI.",
        },
      ]);

      setLoading(false);
    }

    setLoading(false);
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-md h-[780px] flex flex-col">
      {/* Header */}

      <div className="border-b p-5">
        <h2 className="text-xl font-semibold">🤖 AI Assistant</h2>

        <p className="text-gray-500 text-sm">
          Describe your interaction naturally.
        </p>
      </div>

      {/* Messages */}

      <div className="flex-1 overflow-y-auto p-5 space-y-4">
        {messages.map((msg, index) => (
          <ChatBubble key={index} message={msg} />
        ))}

        {loading && <TypingIndicator />}
      </div>

      {/* Input */}

      <ChatInput onSend={handleSend} />
    </div>
  );
}
