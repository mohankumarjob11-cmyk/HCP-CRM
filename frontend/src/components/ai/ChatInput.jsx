import { useState } from "react";
import { IoSend } from "react-icons/io5";

export default function ChatInput({ onSend }) {
  const [message, setMessage] = useState("");

  const send = () => {
    onSend(message);
    setMessage("");
  };

  return (
    <div className="border-t p-4 flex gap-3">
      <input
        className="flex-1 border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Describe your interaction..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") send();
        }}
      />

      <button
        onClick={send}
        className="bg-blue-600 hover:bg-blue-700 text-white px-5 rounded-lg"
      >
        <IoSend />
      </button>
    </div>
  );
}
