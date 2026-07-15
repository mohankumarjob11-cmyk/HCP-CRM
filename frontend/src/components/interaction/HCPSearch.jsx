export default function HCPSearch({ value }) {
  return (
    <div>
      <label className="flex items-center gap-2 text-sm font-medium mb-2">
        HCP Name
      </label>

      <input
        value={value}
        readOnly
        placeholder="Search HCP..."
        className="w-full rounded-lg border border-gray-300 p-3"
      />
    </div>
  );
}
