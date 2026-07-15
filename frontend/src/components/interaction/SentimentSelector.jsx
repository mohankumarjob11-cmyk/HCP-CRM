export default function SentimentSelector({ sentiment }) {
  return (
    <div className="mt-5">
      <label className="block text-sm font-medium mb-3">Sentiment</label>

      <div className="rounded-lg border border-gray-300 bg-blue-50 p-3 font-medium">
        😊 {sentiment || "Not detected"}
      </div>
    </div>
  );
}
