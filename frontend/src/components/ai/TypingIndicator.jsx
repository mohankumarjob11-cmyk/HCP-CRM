export default function TypingIndicator() {
  return (
    <div className="flex justify-start">
      <div className="bg-gray-100 rounded-xl px-4 py-3">
        <div className="flex gap-1">
          <span className="animate-bounce">•</span>
          <span className="animate-bounce delay-100">•</span>
          <span className="animate-bounce delay-200">•</span>
        </div>
      </div>
    </div>
  );
}
