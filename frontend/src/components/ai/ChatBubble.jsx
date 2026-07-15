export default function ChatBubble({ message }) {
  const isUser = message.sender === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[80%] rounded-xl px-4 py-3 text-sm
        ${isUser ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-800"}`}
      >
        {message.text}
      </div>
    </div>
  );
}
